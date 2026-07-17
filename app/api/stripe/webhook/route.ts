import { NextResponse } from "next/server"
import type Stripe from "stripe"

export async function POST(req: Request) {
  console.log("[Stripe Webhook] POST /api/stripe/webhook called")

  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secretKey) {
    console.error("[Stripe Webhook] STRIPE_SECRET_KEY is missing")
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
      { status: 501 }
    )
  }

  if (!webhookSecret) {
    console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET is missing")
    return NextResponse.json(
      { error: "Stripe webhook is not configured. Set STRIPE_WEBHOOK_SECRET." },
      { status: 501 }
    )
  }

  try {
    const { Stripe } = await import("stripe")
    const stripe = new Stripe(secretKey, {
      apiVersion: "2026-06-24.dahlia",
    })

    const body = await req.text()
    const sig = req.headers.get("stripe-signature") || ""

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
      console.log("[Stripe Webhook] Event verified:", event.type, event.id)
    } catch (err: any) {
      console.error("[Stripe Webhook] Signature verification failed:", err.message)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log("[Stripe Webhook] Checkout completed:", session.id)
        console.log("[Stripe Webhook] Customer email:", session.customer_details?.email)
        console.log("[Stripe Webhook] Payment status:", session.payment_status)
        break
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log("[Stripe Webhook] Payment succeeded:", paymentIntent.id)
        break
      }
      case "payment_intent.payment_failed": {
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log("[Stripe Webhook] Payment failed:", failedPayment.id)
        console.log("[Stripe Webhook] Failure reason:", failedPayment.last_payment_error?.message)
        break
      }
      default:
        console.log("[Stripe Webhook] Unhandled event type:", event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error("[Stripe Webhook] Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
