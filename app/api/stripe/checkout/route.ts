import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY environment variable." },
      { status: 501 }
    )
  }

  try {
    const { Stripe } = await import("stripe")
    const stripe = new Stripe(secretKey, {
      apiVersion: "2026-06-24.dahlia",
    })

    const body = await req.json()
    const { items, shipping } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    type LineItem = {
      title: string
      thumbnail: string
      price: number
      discountPercentage: number
      quantity: number
    }
    const lineItems = (items as LineItem[]).map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.thumbnail],
        },
        unit_amount: Math.round(
          (item.price - (item.price * (item.discountPercentage || 0)) / 100) * 100
        ),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "PK", "AE", "IN"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 599, currency: "usd" },
            display_name: "Express Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 2 },
            },
          },
        },
      ],
      metadata: {
        shipping_name: shipping?.name || "",
        shipping_email: shipping?.email || "",
        shipping_phone: shipping?.phone || "",
        shipping_address: shipping?.address || "",
        shipping_city: shipping?.city || "",
        shipping_zip: shipping?.zip || "",
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: unknown) {
    console.error("Stripe checkout error:", error)
    const message = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
