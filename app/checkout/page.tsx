"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useCartStore } from "@/store/cart"
import { validateCoupon } from "@/data/coupons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { toast } from "sonner"
import { Tag, CreditCard, Banknote, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCartStore()

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod")
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
  })
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string
    discountAmount: number
  } | null>(null)
  const [couponError, setCouponError] = useState("")
  const [placing, setPlacing] = useState(false)

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

  const handlePlaceOrder = () => {
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

    setPlacing(true)

    const orderId = "ORD-" + Date.now().toString(36).toUpperCase()

    const order = {
      id: orderId,
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
      paymentMethod,
      status: "pending",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }

    const existing = JSON.parse(localStorage.getItem("order_history") || "[]")
    existing.unshift(order)
    localStorage.setItem("order_history", JSON.stringify(existing))

    clearCart()
    toast.success("Order placed successfully!")
    router.push(`/order-success?id=${orderId}`)
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
                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-all duration-300 ${
                    paymentMethod === "cod"
                      ? "border-[#F57224] bg-[#F57224]/10 shadow-[0_0_15px_rgba(245,114,36,0.2)]"
                      : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20"
                  }`}
                >
                  <Banknote className={`size-5 ${paymentMethod === "cod" ? "text-[#F57224]" : "text-white/50"}`} />
                  <div>
                    <span className="text-white text-sm font-medium">Cash on Delivery</span>
                    <p className="text-white/40 text-xs">Pay when you receive</p>
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-all duration-300 ${
                    paymentMethod === "card"
                      ? "border-[#F57224] bg-[#F57224]/10 shadow-[0_0_15px_rgba(245,114,36,0.2)]"
                      : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20"
                  }`}
                >
                  <CreditCard className={`size-5 ${paymentMethod === "card" ? "text-[#F57224]" : "text-white/50"}`} />
                  <div>
                    <span className="text-white text-sm font-medium">Card Payment</span>
                    <p className="text-white/40 text-xs">Pay with credit or debit card</p>
                  </div>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="4242 4242 4242 4242"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails((s) => ({ ...s, number: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="card-expiry">Expiry Date</Label>
                    <Input
                      id="card-expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails((s) => ({ ...s, expiry: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="card-cvc">CVC</Label>
                    <Input
                      id="card-cvc"
                      placeholder="123"
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails((s) => ({ ...s, cvc: e.target.value }))}
                    />
                  </div>
                </div>
              )}
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
                onClick={handlePlaceOrder}
                disabled={placing}
              >
                {placing ? "Placing Order..." : "Place Order"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
