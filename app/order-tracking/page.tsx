"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { Search, Package, Truck, CheckCircle, Clock, XCircle } from "lucide-react"
import Link from "next/link"

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
  items: OrderItem[]
  subtotal: number
  discount: number
  total: number
  shipping: {
    name: string
    address: string
    city: string
    zip: string
  }
  status: string
  createdAt: string
  estimatedDelivery: string
}

const STEPS = ["pending", "confirmed", "shipped", "delivered"] as const

const STEP_ICONS: Record<string, typeof Package> = {
  pending: Clock,
  confirmed: Package,
  shipped: Truck,
  delivered: CheckCircle,
}

function getCurrentStep(status: string): number {
  const idx = STEPS.indexOf(status as typeof STEPS[number])
  return idx >= 0 ? idx : -1
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function OrderTrackingPage() {
  const [searchId, setSearchId] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [error, setError] = useState("")
  const [searched, setSearched] = useState(false)


  const handleLookup = () => {
    const trimmed = searchId.trim()
    if (!trimmed) {
      setError("Please enter an order ID")
      setOrder(null)
      setSearched(true)
      return
    }

    const stored = localStorage.getItem("order_history")
    if (!stored) {
      setError("No orders found")
      setOrder(null)
      setSearched(true)
      return
    }

    const orders: Order[] = JSON.parse(stored)
    const found = orders.find((o) => o.id.toUpperCase() === trimmed.toUpperCase())

    if (found) {
      setOrder(found)
      setError("")
    } else {
      setOrder(null)
      setError(`No order found with ID "${trimmed}"`)
    }
    setSearched(true)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">Track Your Order</h1>
        <p className="text-muted-foreground text-sm">Enter your order ID to check the current status.</p>
      </div>

      <Card className="mb-8 !bg-muted/50 !backdrop-blur-xl">
        <CardContent className="p-5 flex gap-2">
          <Input
            placeholder="Enter order ID (e.g. ORD-...)"
            value={searchId}
            onChange={(e) => {
              setSearchId(e.target.value)
              setError("")
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLookup()}
          />
          <Button onClick={handleLookup}>
            <Search className="size-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Card className="!bg-muted/50 !backdrop-blur-xl">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <XCircle className="size-12 text-red-400 mb-4" />
            <p className="text-foreground font-medium mb-1">Order Not Found</p>
            <p className="text-muted-foreground text-sm">{error}</p>
            <Link href="/products" className="mt-6">
              <Button variant="outline" size="sm">Browse Products</Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {order && (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-muted-foreground text-xs">Order ID</p>
                  <p className="text-foreground font-mono font-semibold">{order.id}</p>
                </div>
                <Badge variant={order.status === "delivered" ? "success" : order.status === "shipped" ? "warning" : "default"} size="lg">
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>

              <div className="relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-muted/30" />
                <div className="space-y-6">
                  {STEPS.map((step, i) => {
                    const current = getCurrentStep(order.status)
                    const StepIcon = STEP_ICONS[step]
                    const isComplete = i <= current
                    const isCurrent = i === current

                    return (
                      <div key={step} className="flex items-start gap-4">
                        <div
                          className={`relative z-10 rounded-full p-2 transition-all duration-300 ${
                            isComplete ? "bg-[#F57224] text-white shadow-[0_0_15px_rgba(245,114,36,0.5)]" : "bg-muted/50 backdrop-blur-xl text-foreground/30"
                          } ${isCurrent ? "ring-2 ring-[#F57224]/40 shadow-[0_0_20px_rgba(245,114,36,0.3)]" : ""}`}
                        >
                          <StepIcon className="size-3.5" />
                        </div>
                        <div className="pt-1.5">
                          <p
                            className={`text-sm font-medium ${
                              isComplete ? "text-foreground" : "text-foreground/30"
                            }`}
                          >
                            {step.charAt(0).toUpperCase() + step.slice(1)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-foreground font-semibold">Order Details</h2>
              <div className="space-y-3">
                {order.items.map((item) => {
                  const dp = getDiscountPrice(item.price, item.discountPercentage)
                  return (
                    <div key={item.productId} className="flex gap-3">
                      <div className="relative size-12 shrink-0 rounded-lg overflow-hidden bg-muted/50">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground text-sm truncate">{item.title}</p>
                        <p className="text-muted-foreground text-xs">{formatUSD(dp)} x {item.quantity}</p>
                      </div>
                      <span className="text-foreground text-sm shrink-0">{formatUSD(dp * item.quantity)}</span>
                    </div>
                  )
                })}
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatUSD(order.subtotal)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-400">Discount</span>
                  <span className="text-emerald-400">-{formatUSD(order.discount)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-[#F57224]">{formatUSD(order.total)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-foreground font-semibold mb-3">Shipping Address</h2>
              <p className="text-foreground/80 text-sm">{order.shipping.name}</p>
              <p className="text-muted-foreground text-sm">{order.shipping.address}</p>
              <p className="text-muted-foreground text-sm">
                {order.shipping.city}, {order.shipping.zip}
              </p>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground/70">
                <span>Ordered: {formatDate(order.createdAt)}</span>
                <span>Est. delivery: {formatDate(order.estimatedDelivery)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!order && !error && !searched && (
        <div className="text-center py-12 animate-fade-in">
          <div className="inline-flex rounded-full bg-muted/50 backdrop-blur-xl border border-border p-6 mb-4">
            <Truck className="size-12 text-foreground/20" />
          </div>
          <p className="text-muted-foreground/70 text-sm">Enter an order ID above to track your package.</p>
        </div>
      )}
    </div>
  )
}
