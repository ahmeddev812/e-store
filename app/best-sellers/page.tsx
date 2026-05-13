"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Crown, Star, TrendingUp, ShoppingBag, ArrowRight, Eye, Heart, Award, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rating } from "@/components/ui/rating"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { getBestsellers } from "@/data/products"

export default function BestSellersPage() {
  const products = getBestsellers(12).sort((a, b) => b.rating - a.rating)

  const totalProducts = products.length
  const avgRating =
    totalProducts > 0
      ? products.reduce((sum, p) => sum + p.rating, 0) / totalProducts
      : 0

  const categoryCounts: Record<string, number> = {}
  products.forEach((p) => {
    categoryCounts[p.categoryName] = (categoryCounts[p.categoryName] || 0) + 1
  })
  const topCategory =
    Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A"

  if (products.length === 0) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]" />
        <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-6"
          >
            <Crown className="size-16 text-white/20" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-2xl font-bold text-white mb-2"
          >
            No Best Sellers Yet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-white/50 text-center max-w-md mb-8"
          >
            Our top-rated products haven&apos;t been decided yet. Check back soon for the
            items everyone&apos;s loving.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link href="/products">
              <Button className="shadow-glow">
                <ShoppingBag className="size-4" />
                Browse All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link href="/products">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
            >
              <ArrowRight className="size-4 mr-1 rotate-180" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center justify-center size-14 rounded-full bg-gradient-to-br from-[#F57224]/30 to-[#F57224]/10 border border-[#F57224]/30 backdrop-blur-xl mb-4">
              <Crown className="size-7 text-[#F57224]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              Best{" "}
              <span className="bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Sellers
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              What everyone&apos;s loving — the most popular picks, hand-picked for you.
            </p>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          <div className="glass-card rounded-xl p-5 text-center backdrop-blur-md border border-white/10">
            <div className="inline-flex items-center justify-center size-10 rounded-full bg-[#F57224]/20 mb-3">
              <Award className="size-5 text-[#F57224]" />
            </div>
            <p className="text-2xl font-bold text-white">{totalProducts}</p>
            <p className="text-sm text-white/50">Total Products</p>
          </div>
          <div className="glass-card rounded-xl p-5 text-center backdrop-blur-md border border-white/10">
            <div className="inline-flex items-center justify-center size-10 rounded-full bg-amber-500/20 mb-3">
              <Star className="size-5 text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-white">{avgRating.toFixed(1)}</p>
            <p className="text-sm text-white/50">Average Rating</p>
          </div>
          <div className="glass-card rounded-xl p-5 text-center backdrop-blur-md border border-white/10">
            <div className="inline-flex items-center justify-center size-10 rounded-full bg-emerald-500/20 mb-3">
              <TrendingUp className="size-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-white">{topCategory}</p>
            <p className="text-sm text-white/50">Top Category</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const discountedPrice = getDiscountPrice(
              product.price,
              product.discountPercentage
            )
            const isTopRated = product.rating >= 4.5

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card
                    variant="premium"
                    className="group relative overflow-hidden h-full"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
                        <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-[10px] px-2 py-0.5">
                          <Flame className="size-3 mr-1" />
                          #{index + 1}
                        </Badge>
                        {isTopRated && (
                          <Badge
                            variant="secondary"
                            className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 backdrop-blur-sm text-[10px] px-2 py-0.5"
                          >
                            <Award className="size-3 mr-1" />
                            Bestseller
                          </Badge>
                        )}
                      </div>

                      {product.discountPercentage > 0 && (
                        <div className="absolute right-3 top-3 z-10">
                          <Badge className="bg-red-500/80 border-none text-[10px] px-2 py-0.5">
                            -{product.discountPercentage}%
                          </Badge>
                        </div>
                      )}

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                      >
                        <Button
                          variant="outline"
                          className="border-white/20 bg-white/10 text-white hover:bg-[#F57224] hover:border-[#F57224]"
                          onClick={(e) => {
                            e.preventDefault()
                            window.location.href = `/products/${product.slug}`
                          }}
                        >
                          <Eye className="mr-2 size-4" />
                          Quick View
                        </Button>
                      </motion.div>
                    </div>

                    <CardContent className="p-4">
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        {product.brand}
                      </p>
                      <h3 className="mt-1 font-semibold text-white line-clamp-2 group-hover:text-[#F57224] transition-colors">
                        {product.title}
                      </h3>

                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-xl font-bold text-[#F57224]">
                          {formatUSD(discountedPrice)}
                        </span>
                        {product.discountPercentage > 0 && (
                          <span className="text-xs text-white/40 line-through">
                            {formatUSD(product.price)}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <Rating value={product.rating} size="sm" readonly showValue />
                        <div className="flex items-center gap-1 text-[10px] text-white/40">
                          <Heart className="size-3" />
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/products">
            <Button
              variant="glass"
              size="lg"
              className="gap-2"
            >
              <ShoppingBag className="size-4" />
              View All Products
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
