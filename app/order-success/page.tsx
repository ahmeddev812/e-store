"use client"

import { Suspense, use, useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import {
  CheckCircle, Package, Truck, ShoppingBag, ArrowRight,
  Crown, Gift, MapPin,
  Share2, Link2,
  Shield, RotateCcw, Headphones, Award
} from "lucide-react"

interface OrderItem {
  productId: string
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  quantity: number
}

interface Order {
  id: string
  stripeSessionId?: string
  status: string
  createdAt: string
  estimatedDelivery: string
  items: OrderItem[]
  subtotal: number
  discount: number
  total: number
  shipping?: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    zip: string
  }
  shippingAddress?: {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
  }
  paymentMethod?: string
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className={`fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background`} />
      <div className="relative flex min-h-[70vh] items-center justify-center">
        <div className="size-10 rounded-full border-4 border-[#F57224] border-t-transparent animate-spin" />
      </div>
    </div>
  )
}

function GenericSuccessPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className={`fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background`} />
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-6 rounded-full bg-gradient-to-br from-accent/5 to-transparent p-8 backdrop-blur-xl"
        >
          <CheckCircle className="size-20 text-emerald-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-foreground mb-3"
        >
          Payment Successful!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8 text-center max-w-md"
        >
          Thank you for your purchase. Your order is being processed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
              Continue Shopping
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

function OrderSuccessContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const sp = use(searchParams)
  const sessionId = typeof sp.session_id === "string" ? sp.session_id : ""

  const [isShareOpen, setIsShareOpen] = useState(false)
  const [confetti, setConfetti] = useState(true)
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(() => !!sessionId)
  const [confettiY, setConfettiY] = useState(1000)

  useEffect(() => {
    setConfettiY(window.innerHeight + 100)
    const timer = setTimeout(() => setConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!sessionId) {
      setLoading(false)
      return
    }
    try {
      const stored = localStorage.getItem("order_history")
      if (stored) {
        const orders = JSON.parse(stored)
        const matched = orders.find((o: Order) => o.stripeSessionId === sessionId)
        if (matched) {
          if (matched.status === "pending") {
            matched.status = "paid"
            localStorage.setItem("order_history", JSON.stringify(orders))
          }
          setOrder(matched)
        }
      }
    } catch {
      // localStorage unavailable
    }
    setLoading(false)
  }, [sessionId])

  const particles = useMemo(() => {
    const hash = (i: number, seed: number) => {
      let h = i * 374761393 + seed * 668265263
      h = ((h ^ (h >> 13)) * 1274126177) & 0x7fffffff
      return (h ^ (h >> 16)) / 0x7fffffff
    }
    return Array.from({ length: 50 }, (_, i) => ({
      x: hash(i, 1) * 1000,
      rotate: hash(i, 2) * 360,
      driftX: (hash(i, 3) - 0.5) * 200,
      duration: hash(i, 4) * 3 + 2,
      delay: hash(i, 5) * 2,
      color: `hsl(${hash(i, 6) * 360}, 70%, 60%)`,
    }))
  }, [])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `I just placed an order on BlazeCart! 🎉 Order #${order?.id || ""}`

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      copy: url,
    }

    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
    setIsShareOpen(false)
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!order) {
    return <GenericSuccessPage />
  }

  const estimatedDate = new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const orderDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const trackingSteps = [
    { label: "Order Placed", status: "completed" as const, date: orderDate, icon: CheckCircle },
    { label: "Processing", status: "completed" as const, date: orderDate, icon: Package },
    { label: "Shipped", status: "current" as const, date: "Estimated: Tomorrow", icon: Truck },
    { label: "Delivered", status: "pending" as const, date: estimatedDate, icon: Gift },
  ]



  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className={`fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full bg-emerald-500/15 blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/8 blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-emerald-500/4 blur-[100px]`} />
      </div>

      <AnimatePresence>
        {confetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{
                  x: p.x,
                  y: -20,
                  rotate: 0
                }}
                animate={{
                  y: confettiY,
                  rotate: p.rotate,
                  x: p.driftX
                }}
                transition={{ duration: p.duration, delay: p.delay }}
                className="absolute h-2 w-2 rounded-full"
                style={{
                  backgroundColor: p.color,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl" />
            <div className="relative rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-6 backdrop-blur-xl border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <CheckCircle className="size-14 text-emerald-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            Order Confirmed!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-muted-foreground"
          >
            Thank you for shopping with BlazeCart. Your payment has been processed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mt-4"
          >
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="flex items-center gap-2 rounded-full bg-muted/30 px-4 py-2 text-sm text-muted-foreground transition-all hover:bg-muted/20"
            >
              <Share2 className="size-4" />
              Share your order
            </button>
            <AnimatePresence>
              {isShareOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 top-full mt-2 flex -translate-x-1/2 gap-2 rounded-xl glass-premium p-2 z-10"
                >
                  {[
                    { icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="#1DA1F2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, name: 'twitter', color: '#1DA1F2' },
                    { icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, name: 'facebook', color: '#1877F2' },
                    { icon: Link2, name: 'copy', color: '#F57224' },
                  ].map((social) => (
                    <button
                      key={social.name}
                      onClick={() => handleShare(social.name)}
                      className="rounded-lg p-2 transition-all hover:scale-110"
                      style={{ backgroundColor: `${social.color}20` }}
                      aria-label={`Share on ${social.name === 'copy' ? 'copy link' : social.name}`}
                    >
                      <social.icon className="size-4" style={{ color: social.color }} />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-premium overflow-hidden">
                <CardContent className="p-6 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Order Number</p>
                      <p className="font-mono text-lg font-semibold text-foreground">{order.id}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 border-none px-3 py-1">
                      {order.status.toUpperCase()}
                    </Badge>
                  </div>

                  <Separator className="bg-muted/30" />

                  <div>
                    <h3 className="mb-4 text-sm font-semibold text-foreground">Order Tracking</h3>
                    <div className="relative">
                      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-emerald-500 via-muted-foreground/20 to-muted-foreground/10" />
                      <div className="space-y-6">
                        {trackingSteps.map((step) => (
                          <div key={step.label} className="relative flex items-start gap-4">
                            <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${
                              step.status === "completed" ? "bg-emerald-500/20 text-emerald-400" :
                              step.status === "current" ? "bg-[#F57224]/20 text-[#F57224]" :
                              "bg-muted/30 text-foreground/30"
                            }`}>
                              <step.icon className="size-5" />
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${
                                step.status === "completed" ? "text-emerald-400" :
                                step.status === "current" ? "text-[#F57224]" :
                                "text-muted-foreground/70"
                              }`}>
                                {step.label}
                              </p>
                              <p className="text-xs text-foreground/30">{step.date}</p>
                            </div>
                            {step.status === "current" && (
                              <div className="absolute -right-2 -top-2">
                                <div className="size-2 rounded-full bg-[#F57224] animate-ping" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-muted/30" />

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground">Items ({order.items.length})</h3>
                    </div>
                    <div className="space-y-3">
                      {order.items.map((item: OrderItem, index: number) => {
                        const discountedPrice = getDiscountPrice(item.price, item.discountPercentage)
                        return (
                          <motion.div
                            key={item.productId}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="flex gap-3 rounded-xl bg-muted/50 p-3 transition-all hover:bg-muted/30"
                          >
                            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                              <p className="text-xs text-muted-foreground/70">
                                {formatUSD(discountedPrice)} x {item.quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#F57224]">
                                {formatUSD(discountedPrice * item.quantity)}
                              </p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-premium">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Crown className="size-4 text-[#F57224]" />
                    <h3 className="font-semibold text-foreground">Order Summary</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatUSD(order.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-emerald-400">Free</span>
                    </div>
                    {order.discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-400">Discount</span>
                        <span className="text-emerald-400">-{formatUSD(order.discount)}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="bg-muted/30" />

                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total Paid</span>
                    <span className="text-2xl text-[#F57224]">{formatUSD(order.total)}</span>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground/70">Payment Method</p>
                      <p className="text-sm text-foreground">Stripe (Card)</p>
                    </div>
                    {order.stripeSessionId && (
                      <div>
                        <p className="text-xs text-muted-foreground/70">Stripe Session ID</p>
                        <p className="font-mono text-xs text-[#F57224] break-all">{order.stripeSessionId}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-premium">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[#F57224]" />
                    <h3 className="font-semibold text-foreground">Shipping Address</h3>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">{order.shipping?.name || order.shippingAddress?.fullName || "N/A"}</p>
                    <p className="text-muted-foreground">{order.shipping?.address || order.shippingAddress?.address || "N/A"}</p>
                    <p className="text-muted-foreground">
                      {order.shipping?.city || order.shippingAddress?.city || "N/A"}, {order.shipping?.zip || order.shippingAddress?.postalCode || "N/A"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="glass-premium bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5">
                <CardContent className="p-6 text-center">
                  <Headphones className="mx-auto mb-3 size-8 text-[#F57224]" />
                  <h3 className="font-semibold text-foreground">Need Help?</h3>
                  <p className="mt-1 text-xs text-muted-foreground/70">Our support team is here for you</p>
                  <div className="mt-4 space-y-2">
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full border-border">
                        Contact Support
                      </Button>
                    </Link>
                    <Link href="/faq">
                      <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                        Visit FAQ
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full border-border">
              <Package className="mr-2 size-4" />
              View Dashboard
            </Button>
          </Link>
          <Link href="/products" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
              <ShoppingBag className="mr-2 size-4" />
              Continue Shopping
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-xs text-foreground/30">
            <Shield className="size-3" />
            <span>Secure Transaction</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/30">
            <RotateCcw className="size-3" />
            <span>30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/30">
            <Award className="size-3" />
            <span>Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <OrderSuccessContent searchParams={searchParams} />
    </Suspense>
  )
}
