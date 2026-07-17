"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Package,
  Heart,
  Settings,
  MapPin,
  ShoppingBag,
  Calendar,
  XCircle,
  User,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatUSD, getInitials } from "@/lib/utils"

interface StoredOrder {
  id: string
  createdAt?: string
  date?: string
  total: number
  status: string
  items: number | Array<{ productId: string; quantity: number }>
}

interface Order {
  id: string
  date: string
  total: number
  status: string
  items: number
}

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoaded, isSignedIn } = useUser()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem("order_history")
      if (stored) {
        const parsed: StoredOrder[] = JSON.parse(stored)
        const normalized: Order[] = parsed.map((o) => ({
          id: o.id,
          date: o.date || o.createdAt || "",
          total: o.total,
          status: o.status,
          items: Array.isArray(o.items)
            ? o.items.reduce((sum, i) => sum + i.quantity, 0)
            : o.items,
        }))
        setOrders(normalized)
      } else {
        const demoOrders: Order[] = [
          { id: "ORD-A3B8F2C1", date: "2026-04-28", total: 289.99, status: "delivered", items: 3 },
          { id: "ORD-D7E9F1A2", date: "2026-05-02", total: 59.99, status: "shipped", items: 1 },
          { id: "ORD-B4C6D8E0", date: "2026-05-10", total: 449.5, status: "processing", items: 5 },
          { id: "ORD-F2G3H4I5", date: "2026-05-12", total: 129.0, status: "pending", items: 2 },
        ]
        localStorage.setItem("order_history", JSON.stringify(demoOrders))
        setOrders(demoOrders)
      }
    } catch {
      // localStorage unavailable or corrupt data
    }
  }, [])

  function cancelOrder(orderId: string) {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: "cancelled" } : o))
    setOrders(updated)
    localStorage.setItem("order_history", JSON.stringify(updated))
  }

  if (!isLoaded) return null
  if (!isSignedIn) {
    router.push("/login")
    return null
  }

  const userName = user?.fullName || user?.firstName || "User"
  const userEmail = user?.primaryEmailAddress?.emailAddress || ""
  const userImage = user?.imageUrl

  const statusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "success" as const
      case "shipped":
        return "default" as const
      case "processing":
        return "warning" as const
      case "pending":
        return "outline" as const
      case "cancelled":
        return "danger" as const
      default:
        return "outline" as const
    }
  }

  const quickLinks = [
    { href: "/wishlist", label: "Wishlist", icon: Heart },
    { href: "/profile-settings", label: "Profile Settings", icon: Settings },
    { href: "/order-tracking", label: "Order Tracking", icon: MapPin },
  ]

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,rgba(245,114,36,0.03)_0%,transparent_60%)]">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-16 border-2 border-[#F57224]/30">
                <AvatarImage src={userImage} />
                <AvatarFallback className="bg-muted text-lg text-muted-foreground">
                  {getInitials(userName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{userName}</h1>
                <p className="text-sm text-muted-foreground">{userEmail}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground/70">
                  <Calendar className="size-3" />
                  Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.href} href={link.href}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.2)] hover:scale-[1.02]">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-[#F57224]/10 text-[#F57224]">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                        {link.label}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <Card id="orders">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-[#F57224]" />
                Order History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground/70">No orders yet</p>
              ) : (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-3 rounded-xl border border-border bg-muted/50 backdrop-blur-xl p-4 sm:flex-row sm:items-center sm:justify-between transition-all duration-300 hover:border-[#F57224]/20 hover:shadow-[0_4px_20px_rgba(245,114,36,0.1)]"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">{order.id}</span>
                          <Badge variant={statusColor(order.status)} size="sm">
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            {order.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Package className="size-3" />
                            {order.items} item{order.items > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-[#F57224]">
                          {formatUSD(order.total)}
                        </span>
                        {order.status !== "cancelled" && order.status !== "delivered" && (
                          <button
                            onClick={() => cancelOrder(order.id)}
                            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300"
                          >
                            <XCircle className="size-3.5" />
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
