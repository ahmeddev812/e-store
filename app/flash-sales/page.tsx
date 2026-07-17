"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { products } from "@/data/products"
import { Flame, Clock, Zap, ShoppingBag, ArrowRight, Tag, Star, Eye } from "lucide-react"

const discountFilters = [
  { label: "All", value: 0 },
  { label: "10%+", value: 10 },
  { label: "20%+", value: 20 },
  { label: "50%+", value: 50 },
] as const

function useCountdown(target: number) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    if (remaining <= 0) return
    const id = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [target, remaining])

  return remaining
}

function formatCountdown(ms: number) {
  const total = Math.floor(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return {
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
  }
}

function FlashProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/products/${product.slug}`}>
        <Card className="glass-premium group overflow-hidden transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute left-3 top-3 z-10">
              <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow animate-pulse">
                -{product.discountPercentage}%
              </Badge>
            </div>
            {product.rating >= 4.5 && (
              <div className="absolute right-3 top-3 z-10">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 backdrop-blur-sm">
                  <Star className="mr-1 size-3 fill-yellow-500" /> Top Rated
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-background/60 group-hover:opacity-100">
              <Button
                variant="outline"
                className="border-border bg-muted/30 text-foreground hover:bg-[#F57224] hover:text-white hover:border-[#F57224]"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `/products/${product.slug}`
                }}
              >
                <Eye className="mr-2 size-4" />
                Quick View
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">{product.categoryName}</p>
            <h3 className="mt-1 font-semibold text-foreground line-clamp-2 group-hover:text-[#F57224] transition-colors">
              {product.title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#F57224]">{formatUSD(discountedPrice)}</span>
              <span className="text-xs text-muted-foreground/70 line-through">{formatUSD(product.price)}</span>
            </div>
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${i < Math.round(product.rating) ? "fill-yellow-500 text-yellow-500" : "fill-white/10 text-white/10"}`}
                />
              ))}
              <span className="ml-1 text-xs text-muted-foreground/70">({product.rating})</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default function FlashSalesPage() {
  const [activeFilter, setActiveFilter] = useState(0)

  const endTime = useMemo(() => Date.now() + 2 * 60 * 60 * 1000, [])
  const remaining = useCountdown(endTime)
  const { hours, minutes, seconds } = formatCountdown(remaining)
  const isExpired = remaining <= 0

  const flashProducts = useMemo(() => {
    return products
      .filter((p) => p.discountPercentage > 0)
      .sort((a, b) => b.discountPercentage - a.discountPercentage)
  }, [])

  const filtered = useMemo(() => {
    if (activeFilter === 0) return flashProducts
    return flashProducts.filter((p) => p.discountPercentage >= activeFilter)
  }, [flashProducts, activeFilter])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link href="/products">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowRight className="mr-2 size-4 rotate-180" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#F57224]/30 to-[#F57224]/5 p-4 backdrop-blur-xl">
            <Flame className="size-10 text-[#F57224]" />
          </div>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Flash{" "}
            <span className="bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
              Sale
            </span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Limited-time deals with massive discounts. Grab them before they&apos;re gone!
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="mx-auto max-w-md border-[#F57224]/20 bg-gradient-to-r from-[#F57224]/10 via-[#F57224]/5 to-transparent backdrop-blur-xl">
            <CardContent className="flex items-center justify-center gap-6 p-5">
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-[#F57224]" />
                <span className="text-sm font-medium text-muted-foreground">Ends in:</span>
              </div>
              {isExpired ? (
                <span className="text-lg font-bold text-red-400">Expired</span>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="min-w-12 rounded-lg bg-muted/30 px-3 py-1 text-2xl font-bold text-foreground">
                      {hours}
                    </div>
                    <p className="mt-0.5 text-[10px] text-muted-foreground/70">Hours</p>
                  </div>
                  <span className="mt-[-1.5rem] text-2xl font-bold text-[#F57224]">:</span>
                  <div className="text-center">
                    <div className="min-w-12 rounded-lg bg-muted/30 px-3 py-1 text-2xl font-bold text-foreground">
                      {minutes}
                    </div>
                    <p className="mt-0.5 text-[10px] text-muted-foreground/70">Mins</p>
                  </div>
                  <span className="mt-[-1.5rem] text-2xl font-bold text-[#F57224]">:</span>
                  <div className="text-center">
                    <div className="min-w-12 rounded-lg bg-muted/30 px-3 py-1 text-2xl font-bold text-foreground">
                      {seconds}
                    </div>
                    <p className="mt-0.5 text-[10px] text-muted-foreground/70">Secs</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-6 text-center"
        >
          <div>
            <p className="text-2xl font-bold text-[#F57224]">{flashProducts.length}</p>
            <p className="text-xs text-muted-foreground/70">Deals Live</p>
          </div>
          <div className="h-8 w-px bg-muted/30" />
          <div>
            <p className="text-2xl font-bold text-[#F57224]">
              {Math.max(...flashProducts.map((p) => p.discountPercentage))}%
            </p>
            <p className="text-xs text-muted-foreground/70">Max Discount</p>
          </div>
          <div className="h-8 w-px bg-muted/30" />
          <div>
            <p className="text-2xl font-bold text-[#F57224]">
              {flashProducts.filter((p) => p.discountPercentage >= 50).length}
            </p>
            <p className="text-xs text-muted-foreground/70">50%+ Deals</p>
          </div>
        </motion.div>

        {/* Discount Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          {discountFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-gradient-to-r from-[#F57224] to-orange-500 text-white shadow-glow"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              }`}
            >
              {f.label}
              {f.value > 0 && (
                <span className="ml-1.5 rounded-full bg-muted/30 px-1.5 py-0.5 text-[10px]">
                  {flashProducts.filter((p) => p.discountPercentage >= f.value).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="mb-6 rounded-full bg-muted/50 p-6 backdrop-blur-xl">
              <Tag className="size-16 text-white/20" />
            </div>
            <p className="text-lg text-muted-foreground">No flash deals match this filter</p>
            <Button
              variant="outline"
              className="mt-4 border-border"
              onClick={() => setActiveFilter(0)}
            >
              View All Deals
            </Button>
          </motion.div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product, index) => (
              <FlashProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/products">
            <Button variant="glass" size="lg">
              <ShoppingBag className="mr-2 size-4" />
              Browse All Products
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
