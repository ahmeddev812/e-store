"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Eye,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Activity,
  CreditCard,
  Truck,
  CheckCircle,
  XCircle,
  AlertCircle,
  Sparkles,
  Crown,
  Zap,
  Target,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { formatUSD } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const overviewCards = [
  {
    title: "Total Revenue",
    value: formatUSD(124592),
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-500/10",
    description: "vs last month",
  },
  {
    title: "Total Orders",
    value: "1,247",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-[#F57224] to-orange-500",
    bg: "bg-[#F57224]/10",
    description: "vs last month",
  },
  {
    title: "Products",
    value: "24",
    change: "+3",
    trend: "up",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    description: "new this week",
  },
  {
    title: "Active Users",
    value: "856",
    change: "+2.1%",
    trend: "up",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    description: "last 30 days",
  },
]

const recentOrders = [
  { id: "ORD-001", customer: "Alice Johnson", product: "Wireless Headphones", amount: 129.99, status: "delivered", date: "2024-01-15", payment: "Stripe" },
  { id: "ORD-002", customer: "Bob Smith", product: "Smart Watch", amount: 249.0, status: "shipped", date: "2024-01-14", payment: "PayPal" },
  { id: "ORD-003", customer: "Carol White", product: "Leather Backpack", amount: 89.99, status: "processing", date: "2024-01-14", payment: "COD" },
  { id: "ORD-004", customer: "David Lee", product: "Mechanical Keyboard", amount: 159.99, status: "pending", date: "2024-01-13", payment: "Stripe" },
  { id: "ORD-005", customer: "Eve Davis", product: "Running Shoes", amount: 119.99, status: "delivered", date: "2024-01-12", payment: "PayPal" },
]

const weeklySales = [
  { day: "Mon", sales: 4200, orders: 45 },
  { day: "Tue", sales: 3800, orders: 38 },
  { day: "Wed", sales: 5100, orders: 52 },
  { day: "Thu", sales: 4700, orders: 48 },
  { day: "Fri", sales: 6200, orders: 64 },
  { day: "Sat", sales: 7400, orders: 78 },
  { day: "Sun", sales: 5600, orders: 56 },
]

const categoryData = [
  { label: "Electronics", value: 35, color: "from-[#F57224] to-orange-500", icon: "📱" },
  { label: "Fashion", value: 25, color: "from-emerald-500 to-teal-500", icon: "👕" },
  { label: "Home & Living", value: 20, color: "from-blue-500 to-indigo-500", icon: "🏠" },
  { label: "Sports", value: 12, color: "from-purple-500 to-pink-500", icon: "⚽" },
  { label: "Other", value: 8, color: "from-amber-500 to-yellow-500", icon: "🎁" },
]

const topProducts = [
  { name: "Wireless Headphones", sales: 234, revenue: 30276, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" },
  { name: "Smart Watch", sales: 189, revenue: 47250, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" },
  { name: "Leather Backpack", sales: 156, revenue: 14040, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop" },
  { name: "Mechanical Keyboard", sales: 142, revenue: 22720, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&h=100&fit=crop" },
]

const maxSale = Math.max(...weeklySales.map((s) => s.sales))

export default function AdminPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week")
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  return (
    <div ref={sectionRef} className="min-h-screen overflow-x-hidden bg-background">
      {/* Premium Background */}
      <div className={`fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/15 blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/8 blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]`} />
      </div>

      <div className="relative mx-auto max-w-7xl p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ opacity: heroOpacity }}
        >
          {/* Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-2">
                  <Crown className="size-6 text-[#F57224]" />
                </div>
                <h1 className="text-2xl font-bold text-foreground md:text-3xl">Admin Dashboard</h1>
                <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 text-white border-none">
                  BlazeCart
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Welcome back, Admin. Here's your store performance overview.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-border bg-muted/50 backdrop-blur-xl">
                <Download className="mr-2 size-3" />
                Export Report
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
                <RefreshCw className="mr-2 size-3" />
                Refresh Data
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-premium group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F57224]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className={`rounded-xl ${card.bg} p-3 transition-all duration-300 group-hover:scale-110`}>
                          <Icon className="size-5 text-[#F57224]" />
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-muted/50 px-2 py-1 text-xs backdrop-blur-sm">
                          {card.trend === "up" ? (
                            <TrendingUp className="size-3 text-emerald-400" />
                          ) : (
                            <TrendingDown className="size-3 text-red-400" />
                          )}
                          <span className={card.trend === "up" ? "text-emerald-400" : "text-red-400"}>
                            {card.change}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-3xl font-bold text-foreground">{card.value}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{card.title}</p>
                      <p className="text-[10px] text-foreground/30 mt-1">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            {/* Weekly Sales Chart */}
            <Card className="lg:col-span-2 glass-premium overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <div className="rounded-lg bg-[#F57224]/10 p-1.5">
                    <LineChart className="size-4 text-[#F57224]" />
                  </div>
                  Weekly Sales Performance
                </CardTitle>
                <div className="flex gap-2">
                  {["week", "month", "year"].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      className={`rounded-lg px-3 py-1 text-xs transition-all ${
                        selectedTimeframe === tf
                          ? "bg-gradient-to-r from-[#F57224] to-orange-500 text-white shadow-glow"
                          : "bg-muted/50 text-muted-foreground/70 hover:bg-muted/30"
                      }`}
                    >
                      {tf.charAt(0).toUpperCase() + tf.slice(1)}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Chart Bars */}
                  <div className="flex items-end gap-3" style={{ height: 220 }}>
                    {weeklySales.map((item, index) => (
                      <motion.div
                        key={item.day}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="rounded-lg bg-background/80 px-2 py-1 text-xs text-foreground whitespace-nowrap">
                            ${(item.sales / 1000).toFixed(1)}k
                          </div>
                        </div>
                        <motion.div
                          className="w-full cursor-pointer rounded-t-lg bg-gradient-to-t from-[#F57224] to-orange-400 transition-all duration-500 hover:from-orange-500 hover:to-[#F57224] hover:shadow-[0_0_20px_rgba(245,114,36,0.5)]"
                          initial={{ height: 0 }}
                          animate={{ height: `${(item.sales / maxSale) * 180}px` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                        />
                        <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
                        <span className="text-[10px] text-foreground/30">{item.orders} orders</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories Chart */}
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <div className="rounded-lg bg-[#F57224]/10 p-1.5">
                    <PieChart className="size-4 text-[#F57224]" />
                  </div>
                  Sales by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {categoryData.map((cat, index) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{cat.icon}</span>
                        <span className="text-foreground/70">{cat.label}</span>
                      </div>
                      <span className="text-muted-foreground">{cat.value}%</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-muted/30">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.value}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Top Products & Recent Orders */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            {/* Top Products */}
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <div className="rounded-lg bg-[#F57224]/10 p-1.5">
                    <TrendingUp className="size-4 text-[#F57224]" />
                  </div>
                  Top Selling Products
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topProducts.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 rounded-xl transition-all duration-300 hover:bg-muted/50 p-2"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-[#F57224] transition-colors">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground/70">{product.sales} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">{formatUSD(product.revenue)}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="lg:col-span-2 glass-premium">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <div className="rounded-lg bg-[#F57224]/10 p-1.5">
                    <ShoppingCart className="size-4 text-[#F57224]" />
                  </div>
                  Recent Orders
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-[#F57224] hover:bg-[#F57224]/10">
                  View All <ArrowUpRight className="ml-1 size-3" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 font-medium text-muted-foreground/70">Order ID</th>
                        <th className="pb-3 font-medium text-muted-foreground/70">Customer</th>
                        <th className="pb-3 font-medium text-muted-foreground/70">Product</th>
                        <th className="pb-3 font-medium text-muted-foreground/70">Amount</th>
                        <th className="pb-3 font-medium text-muted-foreground/70">Status</th>
                        <th className="pb-3 font-medium text-muted-foreground/70">Date</th>
                       </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-border/50 transition-all duration-200 hover:bg-muted/50 cursor-pointer"
                        >
                          <td className="py-3 font-mono text-xs text-muted-foreground">{order.id}</td>
                          <td className="py-3 text-foreground/80">{order.customer}</td>
                          <td className="py-3 text-muted-foreground">{order.product}</td>
                          <td className="py-3 font-medium text-foreground">{formatUSD(order.amount)}</td>
                          <td className="py-3">
                            <Badge
                              className={
                                order.status === "delivered"
                                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                  : order.status === "shipped"
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : order.status === "processing"
                                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                      : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                              }
                            >
                              {order.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-xs text-muted-foreground/70">{order.date}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Add Product", icon: Package, color: "[#F57224]", action: "Create new product" },
              { title: "Manage Orders", icon: Truck, color: "emerald-500", action: "View all orders" },
              { title: "View Analytics", icon: Activity, color: "blue-500", action: "Detailed reports" },
              { title: "Settings", icon: Settings, color: "purple-500", action: "Configure store" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Card className="glass-premium group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,114,36,0.2)]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-muted/30 p-2.5 transition-all duration-300 group-hover:scale-110">
                        <item.icon className="size-5 text-[#F57224]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-[10px] text-muted-foreground/70">{item.action}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}