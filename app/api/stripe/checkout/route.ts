import { NextResponse } from "next/server"
import { getStripeImageUrl } from "@/lib/stripe"

export async function POST(req: Request) {
  console.log("[Stripe API] POST /api/stripe/checkout called")

  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    console.error("[Stripe API] STRIPE_SECRET_KEY is missing")
    return NextResponse.json(
      {
        success: false,
        reason: "Stripe Secret Key Missing",
        error: "Stripe is not configured. Set STRIPE_SECRET_KEY environment variable.",
      },
      { status: 501 }
    )
  }

  try {
    console.log("[Stripe API] Publishable key present:", !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    const { Stripe } = await import("stripe")
    const stripe = new Stripe(secretKey, {
      apiVersion: "2026-06-24.dahlia",
    })

    const body = await req.json()
    const { items, shipping } = body

    console.log("[Stripe API] Cart items received:", items?.length || 0)

    if (!items || items.length === 0) {
      console.error("[Stripe API] No items in cart")
      return NextResponse.json(
        {
          success: false,
          reason: "Invalid Cart",
          error: "No items provided",
        },
        { status: 400 }
      )
    }

    type LineItem = {
      title: string
      thumbnail: string
      price: number
      discountPercentage: number
      quantity: number
    }
    const lineItems = (items as LineItem[]).map((item) => {
      const imageUrl = getStripeImageUrl(item.thumbnail, req)
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            ...(imageUrl ? { images: [imageUrl] } : {}),
          },
          unit_amount: Math.round(
            (item.price - (item.price * (item.discountPercentage || 0)) / 100) * 100
          ),
        },
        quantity: item.quantity,
      }
    })

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
      `${req.headers.get("x-forwarded-proto") || "https"}://${req.headers.get("host") || "localhost:3000"}`

    console.log("[Stripe API] Creating Checkout Session...")
    console.log("[Stripe API] Using base URL:", baseUrl)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
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

    console.log("[Stripe API] Session created successfully:", session.id)
    console.log("[Stripe API] Redirect URL:", session.url)

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: unknown) {
    console.error("[Stripe API] Stripe checkout error:", error)
    const message = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json(
      {
        success: false,
        reason: "Stripe Session Creation Failed",
        error: message,
      },
      { status: 500 }
    )
  }
}
