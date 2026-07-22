"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rating } from "@/components/ui/rating"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { getNewArrivals } from "@/data/products"
import { Sparkles, Clock, ShoppingBag, ArrowRight, Star, Eye, Heart, Tag } from "lucide-react"

export default function NewArrivalsPage() {
  const router = useRouter()
  const products = getNewArrivals().slice(0, 12)

  if (products.length === 0) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-background">
        <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background" />
        <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in">
          <div className="rounded-full bg-muted/50 backdrop-blur-xl border-border border p-6 mb-6">
            <Sparkles className="size-16 text-foreground/20" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">No new arrivals yet</h1>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            Check back soon for our latest products and fresh additions.
          </p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
              <ShoppingBag className="size-4" />
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
      <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Premium Background - Theme Aware */}
      <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className={`absolute top-20 right-10 size-72 rounded-full bg-[#D4A853]/15 blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 left-10 size-96 rounded-full bg-[#F57224]/8 blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]`} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link href="/products">
            <Button variant="ghost" size="sm" className={`text-muted-foreground hover:text-foreground`}>
              <ArrowRight className="size-4 mr-1 rotate-180" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        <section className="relative overflow-hidden pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className={`inline-flex items-center justify-center size-14 rounded-full bg-gradient-to-br from-[#F57224]/15 to-[#D4A853]/15 border-[#F57224]/25 border backdrop-blur-sm`}
            >
              <Sparkles className="size-6 text-[#F57224]" />
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className={`text-4xl sm:text-5xl font-bold text-foreground`}
              >
                New{" "}
                <span className="bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] bg-clip-text text-transparent">
                  Arrivals
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className={`mt-3 text-muted-foreground text-lg max-w-xl mx-auto`}
              >
                Fresh from the collection
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className={`inline-flex items-center gap-2 bg-muted/50 border-border backdrop-blur-sm border rounded-full px-4 py-1.5`}
            >
              <Clock className="size-3.5 text-[#D4A853]" />
              <span className={`text-sm text-muted-foreground`}>
                {products.length} new item{products.length !== 1 ? "s" : ""} added recently
              </span>
            </motion.div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => {
            const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card variant="premium" className={`group h-full bg-card border-border`}>
                    <div className={`relative overflow-hidden bg-muted`}>
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={400}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
                        {product.isNewArrival && (
                          <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-white">
                            <Sparkles className="size-3 mr-1" />
                            Just Added
                          </Badge>
                        )}
                        {product.discountPercentage > 0 && !product.isNewArrival && (
                          <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-white">
                            <Tag className="size-3 mr-1" />
                            -{product.discountPercentage}%
                          </Badge>
                        )}
                      </div>

                      {product.discountPercentage > 0 && product.isNewArrival && (
                        <div className="absolute right-3 top-3 z-10">
                          <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-white">
                            <Tag className="size-3 mr-1" />
                            -{product.discountPercentage}%
                          </Badge>
                        </div>
                      )}

                      <div className={`absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                        <Button
                          variant="outline"
                          className={`border-border bg-muted/30 text-foreground hover:bg-[#F57224] hover:text-white hover:border-[#F57224]`}
                          onClick={(e) => {
                            e.preventDefault()
                            router.push(`/products/${product.slug}`)
                          }}
                        >
                          <Eye className="mr-2 size-4" />
                          Quick View
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <p className={`text-xs text-muted-foreground/70 uppercase tracking-wider`}>
                        {product.brand || product.categoryName}
                      </p>

                      <h3 className={`font-semibold text-foreground line-clamp-2 group-hover:text-[#F57224] transition-colors`}>
                        {product.title}
                      </h3>

                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-[#F57224]">
                          {formatUSD(discountedPrice)}
                        </span>
                        {product.discountPercentage > 0 && (
                          <span className={`text-xs text-muted-foreground/70 line-through`}>
                            {formatUSD(product.price)}
                          </span>
                        )}
                      </div>

                      <Rating value={product.rating} size="sm" readonly showValue />

                      {product.stock > 0 && product.stock < 10 && (
                        <div className="flex items-center gap-1 text-xs text-yellow-500">
                          <Clock className="size-3" />
                          Only {product.stock} left
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] bg-[length:200%_100%] animate-gradient-shift shadow-lg shadow-[#F57224]/20 text-white">
              View All Products
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}