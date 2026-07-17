"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { useCartStore } from "@/store/cart"
import { validateCoupon } from "@/data/coupons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatUSD, getDiscountPrice, generateOrderId } from "@/lib/utils"
import { toast } from "sonner"
import { Tag, CreditCard, ChevronLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

export default function CheckoutPage() {
  const { isSignedIn } = useUser()
  const { items, clearCart } = useCartStore()

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  })
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string
    discountAmount: number
  } | null>(null)
  const [couponError, setCouponError] = useState("")
  const [loading, setLoading] = useState(false)

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + getDiscountPrice(item.price, item.discountPercentage) * item.quantity, 0),
    [items]
  )

  const discount = appliedCoupon?.discountAmount ?? 0
  const total = Math.max(0, subtotal - discount)

  const handleApplyCoupon = () => {
    const trimmed = couponCode.trim()
    if (!trimmed) return
    const result = validateCoupon(trimmed, subtotal)
    if (result.valid && result.coupon && result.discountAmount !== undefined) {
      setAppliedCoupon({ code: result.coupon.code, discountAmount: result.discountAmount })
      setCouponError("")
      toast.success(`Coupon "${result.coupon.code}" applied!`)
    } else {
      setAppliedCoupon(null)
      setCouponError(result.error || "Invalid coupon")
    }
  }

  const handleStripeCheckout = async () => {
    console.log("[Checkout] Pay with Stripe clicked")
    console.log("[Checkout] Items count:", items.length)
    console.log("[Checkout] Shipping info:", shipping)

    const required = ["name", "email", "phone", "address", "city", "zip"] as const
    const empty = required.find((k) => !shipping[k].trim())
    if (empty) {
      toast.error(`Please fill in your ${empty}`)
      return
    }

    if (items.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    setLoading(true)

    try {
      console.log("[Checkout] Sending POST to /api/stripe/checkout")
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, shipping }),
      })

      const data = await response.json()
      console.log("[Checkout] API response:", JSON.stringify(data, null, 2))
      console.log("[Checkout] Response status:", response.status)

      if (!response.ok) {
        console.error("[Checkout] API error:", data.error)
        toast.error(data.error || "Failed to create checkout session")
        setLoading(false)
        return
      }

      if (!data.url || !data.sessionId) {
        console.error("[Checkout] Invalid response - missing url or sessionId:", data)
        toast.error("Invalid checkout session response")
        setLoading(false)
        return
      }

      console.log("[Checkout] Session created:", data.sessionId)
      console.log("[Checkout] Redirect URL:", data.url)

      const orderId = generateOrderId()
      const order = {
        id: orderId,
        stripeSessionId: data.sessionId,
        items: items.map((i) => ({
          productId: i.productId,
          title: i.title,
          price: i.price,
          discountPercentage: i.discountPercentage,
          thumbnail: i.thumbnail,
          quantity: i.quantity,
        })),
        subtotal,
        discount,
        total,
        coupon: appliedCoupon ? { code: appliedCoupon.code, discountAmount: appliedCoupon.discountAmount } : null,
        shipping,
        paymentMethod: "card",
        status: "pending",
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      }

      const existing = JSON.parse(localStorage.getItem("order_history") || "[]")
      existing.unshift(order)
      localStorage.setItem("order_history", JSON.stringify(existing))

      clearCart()

      console.log("[Checkout] Redirecting to Stripe Checkout:", data.url)
      window.location.href = data.url
    } catch (err) {
      console.error("[Checkout] Exception during checkout:", err)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
      console.log("[Checkout] Loading state reset")
    }
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in">
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to checkout</h1>
        <p className="text-white/50 mb-8">Please sign in to complete your purchase.</p>
        <Link href="/login">
          <Button className="shadow-glow">Sign In</Button>
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in">
        <h1 className="text-2xl font-bold text-white mb-2">Nothing to checkout</h1>
        <p className="text-white/50 mb-8">Your cart is empty. Add some items first.</p>
        <Link href="/products">
          <Button className="shadow-glow">Browse Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <Link href="/cart" className="text-white/50 hover:text-white text-sm flex items-center gap-1 mb-2">
          <ChevronLeft className="size-3.5" />
          Back to Cart
        </Link>
        <h1 className="text-2xl font-bold text-white">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-5">
              <h2 className="text-white font-semibold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={shipping.name}
                    onChange={(e) => setShipping((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={shipping.email}
                    onChange={(e) => setShipping((s) => ({ ...s, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 234 567 890"
                    value={shipping.phone}
                    onChange={(e) => setShipping((s) => ({ ...s, phone: e.target.value }))}
                  />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="123 Main St, Apt 4B"
                    value={shipping.address}
                    onChange={(e) => setShipping((s) => ({ ...s, address: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    value={shipping.city}
                    onChange={(e) => setShipping((s) => ({ ...s, city: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    placeholder="10001"
                    value={shipping.zip}
                    onChange={(e) => setShipping((s) => ({ ...s, zip: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h2 className="text-white font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-[#F57224] bg-[#F57224]/10 p-3 shadow-[0_0_15px_rgba(245,114,36,0.2)]">
                  <CreditCard className="size-5 text-[#F57224]" />
                  <div>
                    <span className="text-white text-sm font-medium">Pay with Card (Stripe)</span>
                    <p className="text-white/40 text-xs">Secure payment via Stripe Checkout</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-5">
              <h2 className="text-white font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => {
                  const dp = getDiscountPrice(item.price, item.discountPercentage)
                  return (
                    <div key={item.productId} className="flex gap-3">
                      <div className="relative size-12 shrink-0 rounded-lg overflow-hidden bg-white/5">
                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" sizes="48px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{item.title}</p>
                        <p className="text-white/50 text-xs">
                          {formatUSD(dp)} x {item.quantity}
                        </p>
                      </div>
                      <span className="text-white text-sm shrink-0">{formatUSD(dp * item.quantity)}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h2 className="text-white font-semibold mb-4">Coupon</h2>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <Tag className="size-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">{appliedCoupon.code}</span>
                  </div>
                  <button
                    onClick={() => {
                      setAppliedCoupon(null)
                      setCouponCode("")
                      setCouponError("")
                    }}
                    className="text-white/40 hover:text-white/70 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value)
                      setCouponError("")
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                  />
                  <Button variant="outline" onClick={handleApplyCoupon}>Apply</Button>
                </div>
              )}
              {couponError && <p className="text-red-400 text-xs mt-2">{couponError}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Subtotal</span>
                <span className="text-white">{formatUSD(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-400">Discount</span>
                  <span className="text-emerald-400">-{formatUSD(discount)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span className="text-white">Total</span>
                <span className="text-[#F57224]">{formatUSD(total)}</span>
              </div>
              <Button
                className="w-full mt-2 shadow-glow"
                size="lg"
                onClick={handleStripeCheckout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    <CreditCard className="size-4" />
                    Pay with Stripe
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
