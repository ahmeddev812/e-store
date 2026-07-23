"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useWishlistStore } from "@/store/wishlist"
import { useCartStore } from "@/store/cart"
import { getProductById } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { toast } from "sonner"
import { Trash2, ShoppingCart, Heart, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const { addItem } = useCartStore()
  const [isAdding, setIsAdding] = useState<string | null>(null)

  const handleAddToCart = (id: string) => {
    const product = getProductById(id)
    if (!product) {
      toast.error("Product not found")
      return
    }
    setIsAdding(id)
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
    })
    setTimeout(() => setIsAdding(null), 800)
    toast.success(`${product.title} added to cart`)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in">
        <div className="rounded-full bg-muted/50 backdrop-blur-xl border border-border p-6 mb-6">
          <Heart className="size-16 text-foreground/20" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Save items you love to your wishlist and come back to them anytime.
        </p>
        <Link href="/products">
          <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
            <ShoppingCart className="size-4" />
            Browse Products
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Wishlist</h1>
        <p className="text-muted-foreground text-sm mt-1">{items.length} item{items.length !== 1 ? "s" : ""}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, index) => {
          const discountedPrice = getDiscountPrice(item.price, item.discountPercentage)
          const adding = isAdding === item.id

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden rounded-2xl border-border bg-card transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,114,36,0.12)] hover:-translate-y-1">
                <div className="relative overflow-hidden bg-muted">
                  <Link href={`/products/${item.slug}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </Link>

                  {item.discountPercentage > 0 && (
                    <div className="absolute left-3 top-3 z-10">
                      <Badge className="border-none bg-gradient-to-r from-primary to-orange-500 text-primary-foreground shadow-glow">
                        -{item.discountPercentage}%
                      </Badge>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      removeItem(item.id)
                      toast.success("Removed from wishlist")
                    }}
                    className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full bg-background/70 backdrop-blur-xl shadow-md transition-all duration-300 hover:scale-110 hover:bg-destructive hover:text-destructive-foreground active:scale-95"
                    aria-label="Remove from wishlist"
                    title="Remove from Wishlist"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <CardContent className="p-4">
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">
                      {formatUSD(discountedPrice)}
                    </span>
                    {item.discountPercentage > 0 && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatUSD(item.price)}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-primary-foreground shadow-glow transition-all duration-300"
                      onClick={() => handleAddToCart(item.id)}
                      disabled={adding}
                    >
                      {adding ? (
                        <span className="flex items-center gap-2">
                          <span className="size-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Adding...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <ShoppingCart className="size-3.5" />
                          Add to Cart
                        </span>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border"
                      onClick={() => {
                        removeItem(item.id)
                        toast.success("Removed from wishlist")
                      }}
                    >
                      <Trash2 className="size-3.5 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/products">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="size-3.5" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
