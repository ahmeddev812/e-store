"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/store/cart"
import { validateCoupon } from "@/data/coupons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { formatUSD, getDiscountPrice } from "@/lib/utils"

import { toast } from "sonner"
import {
  Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag,
  Shield, Truck, RotateCcw, CreditCard, Gift, Sparkles,
  Heart, Zap, Clock, ChevronRight, CheckCircle, XCircle
} from "lucide-react"
import { Footer } from "@/components/layout/footer"

// Cart Item Component with Animations
function CartItem({ item, onUpdate, onRemove }: any) {
  const discountedPrice = getDiscountPrice(item.price, item.discountPercentage)
  const lineTotal = discountedPrice * item.quantity

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group glass-premium overflow-hidden transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_0_30px_rgba(245,114,36,0.15)]">
        <CardContent className="flex gap-5 p-5">
          {/* Product Image */}
          <div className="relative size-28 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-transparent">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="112px"
            />
            {item.discountPercentage > 0 && (
              <div className="absolute left-2 top-2 rounded-lg bg-gradient-to-r from-[#F57224] to-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-glow">
                -{item.discountPercentage}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Link href={`/products/${item.productId}`}>
                  <h3 className="text-base font-semibold text-foreground transition-colors hover:text-[#F57224] line-clamp-1">
                    {item.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold text-[#F57224]">{formatUSD(discountedPrice)}</span>
                  {item.discountPercentage > 0 && (
                    <span className="text-sm text-muted-foreground/70 line-through">{formatUSD(item.price)}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 rounded-lg bg-muted/50 p-1">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="size-7 hover:bg-[#F57224]/20 hover:text-[#F57224]"
                      onClick={() => {
                        if (item.quantity <= 1) {
                          onRemove()
                        } else {
                          onUpdate(item.quantity - 1)
                        }
                      }}
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="min-w-8 text-center text-sm font-medium text-foreground">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="size-7 hover:bg-[#F57224]/20 hover:text-[#F57224]"
                      onClick={() => onUpdate(item.quantity + 1)}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                  <button
                    onClick={onRemove}
                    className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-red-400 transition-colors hover:bg-red-500/10"
                  >
                    <Trash2 className="size-3" />
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">{formatUSD(lineTotal)}</p>
                <p className="text-[10px] text-foreground/30">Total</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 transition-all duration-300 hover:bg-[#F57224]/10">
      <div className="rounded-lg bg-[#F57224]/10 p-2">
        <Icon className="size-4 text-[#F57224]" />
      </div>
      <div>
        <p className="text-xs font-medium text-foreground">{title}</p>
        <p className="text-[10px] text-muted-foreground/70">{description}</p>
      </div>
    </div>
  )
}

export default function CartPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string
    discountAmount: number
  } | null>(null)
  const [couponError, setCouponError] = useState("")
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + getDiscountPrice(item.price, item.discountPercentage) * item.quantity, 0),
    [items]
  )

  const discount = appliedCoupon?.discountAmount ?? 0
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = Math.max(0, subtotal - discount + shipping)

  const handleApplyCoupon = () => {
    const trimmed = couponCode.trim()
    if (!trimmed) return
    const result = validateCoupon(trimmed, subtotal)
    if (result.valid && result.coupon && result.discountAmount !== undefined) {
      setAppliedCoupon({ code: result.coupon.code, discountAmount: result.discountAmount })
      setCouponError("")
      toast.success(`🎉 Coupon "${result.coupon.code}" applied!`, {
        icon: <Tag className="size-4" />,
      })
    } else {
      setAppliedCoupon(null)
      setCouponError(result.error || "Invalid coupon")
      toast.error(result.error || "Invalid coupon code")
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode("")
    setCouponError("")
    toast.info("Coupon removed")
  }

  const handleCheckout = () => {
    console.log("[Cart] Proceed to Checkout clicked")
    console.log("[Cart] Items in cart:", items.length)
    if (items.length === 0) {
      toast.error("Your cart is empty")
      return
    }
    setIsCheckingOut(true)
    console.log("[Cart] Redirecting to /checkout")
    router.push("/checkout")
  }

  // Empty Cart State
  if (items.length === 0) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
          <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-6 rounded-full bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-8 backdrop-blur-xl"
          >
            <ShoppingBag className="size-20 text-[#F57224]/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-foreground mb-3"
          >
            Your Cart is Empty
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-8 text-center max-w-md"
          >
            Looks like you haven&apos;t added anything yet. Browse our products and find something you love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
                <ShoppingBag className="mr-2 size-4" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>

          {/* Featured Products Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-foreground/30">or</p>
            <Link href="/products">
              <Button variant="link" className="text-[#F57224]">
                Browse our collections <ChevronRight className="ml-1 size-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-2">
                <ShoppingBag className="size-6 text-[#F57224]" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="rounded-full bg-[#F57224]/20 px-2.5 py-0.5 text-sm font-semibold text-[#F57224]"
              >
                {items.length} {items.length === 1 ? "item" : "items"}
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground">Review and manage your selected items</p>
          </div>

          <Button
            variant="outline"
            onClick={() => {
              clearCart()
              toast.warning("Cart cleared")
            }}
            className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
          >
            <Trash2 className="mr-2 size-3.5" />
            Clear All
          </Button>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <CartItem
                  key={item.productId}
                  item={item}
                  onUpdate={(quantity: number) => updateQuantity(item.productId, quantity)}
                  onRemove={() => {
                    removeItem(item.productId)
                    toast.success(`${item.title} removed from cart`)
                  }}
                />
              ))}
            </AnimatePresence>

            {/* Shipping Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              <FeatureCard icon={Truck} title="Free Shipping" description="On orders over $50" />
              <FeatureCard icon={RotateCcw} title="Easy Returns" description="30-day return policy" />
              <FeatureCard icon={Shield} title="Secure Payment" description="100% protected" />
              <FeatureCard icon={Clock} title="Fast Delivery" description="1-3 business days" />
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-4">
            {/* Coupon Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-premium overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="size-4 text-[#F57224]" />
                    <h2 className="font-semibold text-foreground">Apply Coupon</h2>
                  </div>

                  {appliedCoupon ? (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="size-5 text-emerald-400" />
                        <div>
                          <span className="text-emerald-400 text-sm font-semibold">{appliedCoupon.code}</span>
                          <p className="text-[10px] text-emerald-400/60">Applied successfully</p>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="rounded-lg px-2 py-1 text-xs text-muted-foreground/70 transition-colors hover:bg-muted/30 hover:text-foreground"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter coupon code (SAVE10, WELCOME20)"
                          value={couponCode}
                          onChange={(e) => {
                            setCouponCode(e.target.value)
                            setCouponError("")
                          }}
                          onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                          className="flex-1"
                        />
                        <Button
                          variant="outline"
                          onClick={handleApplyCoupon}
                          className="border-[#F57224]/30 text-[#F57224] hover:bg-[#F57224]/10"
                        >
                          Apply
                        </Button>
                      </div>
                      {couponError && (
                        <p className="flex items-center gap-1 text-xs text-red-400">
                          <XCircle className="size-3" />
                          {couponError}
                        </p>
                      )}
                      <div className="flex gap-2">
                        {["SAVE10", "WELCOME20"].map((code) => (
                          <button
                            key={code}
                            onClick={() => setCouponCode(code)}
                            className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground/70 transition-colors hover:bg-[#F57224]/20 hover:text-[#F57224]"
                          >
                            {code}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-premium overflow-hidden">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="size-4 text-[#F57224]" />
                    <h2 className="font-semibold text-foreground">Order Summary</h2>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatUSD(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? (
                          <span className="text-emerald-400">Free</span>
                        ) : (
                          formatUSD(shipping)
                        )}
                      </span>
                    </div>
                    {discount > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-emerald-400">Discount</span>
                        <span className="text-emerald-400">-{formatUSD(discount)}</span>
                      </motion.div>
                    )}
                  </div>

                  <Separator className="bg-muted/30" />

                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-2xl text-[#F57224]">{formatUSD(total)}</span>
                  </div>

                  {subtotal < 50 && subtotal > 0 && (
                    <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 p-3">
                      <Truck className="size-4 text-blue-400" />
                      <p className="text-xs text-blue-400">
                        Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow"
                    size="lg"
                  >
                    {isCheckingOut ? (
                      <div className="flex items-center gap-2">
                        <div className="size-4 animate-spin rounded-full border-2 border-border border-t-white" />
                        Processing...
                      </div>
                    ) : (
                      <>
                        Proceed to Checkout
                        <ChevronRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>

                  <Link href="/products">
                    <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground" size="sm">
                      <ArrowLeft className="mr-2 size-3.5" />
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 text-xs text-foreground/30">
                <Shield className="size-3" />
                <span>Secure Checkout</span>
                <span>•</span>
                <span>SSL Encrypted</span>
                <span>•</span>
                <span>100% Protected</span>
                
              </div>
              
            </motion.div>
             
          </div>
         
        </div>
        
      </div>

<Footer />
    </div>
    
  )
}