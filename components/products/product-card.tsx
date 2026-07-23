"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Clock, Eye, Heart, ShoppingBag, Star } from "lucide-react"
import { toast } from "sonner"
import type { ProductCardProps } from "@/components/products/product-card.types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rating } from "@/components/ui/rating"
import { useWishlistStore } from "@/store/wishlist"
import { useCartStore } from "@/store/cart"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

export function ProductCard({
  product,
  index = 0,
  variant = "catalog",
  showWishlist = true,
  showQuickView = true,
  showAddToCart = true,
  showStock = variant === "catalog",
  showTags = variant === "minimal",
  animate = true,
  className,
}: ProductCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { toggleItem, isInWishlist } = useWishlistStore()
  const addItem = useCartStore((s) => s.addItem)
  const wishlisted = isInWishlist(product.id)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)
  const outOfStock = product.stock === 0

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem({
      id: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
      slug: product.slug,
    })
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist")
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (outOfStock) return
    setIsAdding(true)
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
    })
    setTimeout(() => setIsAdding(false), 800)
    toast.success("Added to cart")
  }

  const card = (
    <div className={cn("group relative cursor-pointer", className)}>
      {variant === "premium" && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-gold to-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25" />
      )}

      <Card
        className={cn(
          "overflow-hidden rounded-2xl border-border bg-card transition-all duration-500",
          "hover:shadow-[0_8px_40px_rgba(245,114,36,0.12)] hover:-translate-y-1",
          variant === "premium" && "shadow-lg hover:shadow-2xl hover:shadow-primary/10",
          variant === "minimal" && "h-full"
        )}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden bg-muted">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading={index < 4 ? "eager" : "lazy"}
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <div className="absolute left-3 top-3 z-10">
              <Badge
                className={cn(
                  "border-none bg-gradient-to-r from-primary to-orange-500 text-primary-foreground shadow-glow",
                  variant === "premium" && "text-[10px]"
                )}
              >
                -{product.discountPercentage}%
              </Badge>
            </div>
          )}

          {/* Top Rated Badge */}
          {product.rating >= 4.5 && variant !== "minimal" && (
            <div className="absolute left-3 top-3 z-10">
              {product.discountPercentage > 0 && <div className="mb-1" />}
              <Badge
                variant="secondary"
                className={cn(
                  "border-yellow-500/30 bg-yellow-500/15 text-yellow-700 backdrop-blur-sm dark:text-yellow-400",
                  product.discountPercentage > 0 && "mt-7 block"
                )}
              >
                <Star className="mr-1 size-3 fill-yellow-500 text-yellow-500" />
                Top Rated
              </Badge>
            </div>
          )}

          {/* Wishlist Button - Always visible top-right */}
          {showWishlist && (
            <button
              type="button"
              onClick={handleWishlist}
              className={cn(
                "absolute right-3 top-3 z-20",
                "flex size-9 items-center justify-center rounded-full",
                "bg-background/70 backdrop-blur-xl shadow-md",
                "transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground",
                "active:scale-95"
              )}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart
                className={cn(
                  "size-4 transition-all duration-300",
                  wishlisted ? "fill-primary text-primary scale-110" : "text-foreground/70"
                )}
              />
            </button>
          )}

          {/* Quick View Overlay - On hover */}
          {showQuickView && (
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                isHovered ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <Button
                variant="outline"
                size="sm"
                className="border-border bg-background/80 text-foreground backdrop-blur-xl hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg"
                onClick={(e) => {
                  e.preventDefault()
                  router.push(`/products/${product.slug}`)
                }}
              >
                <Eye className="mr-2 size-4" />
                Quick View
              </Button>
            </div>
          )}

          {/* Out of Stock Overlay */}
          {outOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
              <Badge variant="secondary" className="border-destructive/30 bg-destructive/10 text-destructive text-sm px-4 py-1.5">
                Out of Stock
              </Badge>
            </div>
          )}

          {/* Low Stock Warning */}
          {showStock && !outOfStock && product.stock < 10 && product.stock > 0 && (
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="flex items-center gap-1.5 rounded-lg bg-background/80 backdrop-blur-sm px-2.5 py-1.5 shadow-sm">
                <Clock className="size-3 text-amber-500" />
                <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                  Only {product.stock} left
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <CardContent className="p-4">
          {/* Category / Brand */}
          {product.brand && (
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-1">
              {product.brand}
            </p>
          )}
          {variant === "premium" && !product.brand && (
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {product.categoryName}
              </span>
              <Rating value={product.rating} size="sm" readonly />
            </div>
          )}

          {/* Product Name */}
          <h3
            className={cn(
              "font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2",
              variant === "premium" ? "text-base" : "text-sm"
            )}
          >
            {truncate(product.title, variant === "minimal" ? 40 : 45)}
          </h3>

          {/* Rating */}
          {variant !== "premium" && (
            <div className="mt-1.5 flex items-center gap-2">
              <Rating value={product.rating} size="sm" readonly />
              {variant === "catalog" && (
                <span className="text-[11px] text-muted-foreground/60">{product.rating.toFixed(1)}</span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <span className="text-lg font-bold text-primary md:text-xl">
              {formatUSD(discountedPrice)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through md:text-sm">
                {formatUSD(product.price)}
              </span>
            )}
          </div>

          {/* Stock Progress Bar */}
          {showStock && !outOfStock && product.stock < 30 && product.stock > 0 && (
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-700"
                style={{ width: `${Math.min(100, (product.stock / 100) * 100)}%` }}
              />
            </div>
          )}

          {/* Tags */}
          {showTags && product.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Add to Cart Button */}
          {showAddToCart && (
            <div className="mt-4">
              <Button
                className={cn(
                  "w-full shadow-glow transition-all duration-300",
                  "bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90",
                  "text-primary-foreground font-medium",
                  isAdding && "scale-[0.98] opacity-80",
                  outOfStock && "opacity-50 cursor-not-allowed"
                )}
                size="sm"
                onClick={handleAddToCart}
                disabled={outOfStock}
              >
                {isAdding ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="size-4 rounded-full border-2 border-white border-t-transparent animate-spin"
                    />
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="size-4" />
                    {outOfStock ? "Out of Stock" : "Add to Cart"}
                  </span>
                )}
              </Button>

              {/* Quick View Button - Below Add to Cart */}
              {showQuickView && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    router.push(`/products/${product.slug}`)
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-primary cursor-pointer"
                >
                  <Eye className="size-3" />
                  Quick View
                </button>
              )}
            </div>
          )}

          {/* Premium variant extra info */}
          {variant === "premium" && !showAddToCart && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                {product.isBestSeller ? "Bestseller" : "In stock"}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const content = (
    <Link href={`/products/${product.slug}`} className="block">
      {card}
    </Link>
  )

  if (!animate) {
    return (
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {content}
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ ...easeTransition, delay: index * 0.05 }}
      whileHover={{ y: variant === "minimal" ? -4 : -6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {content}
    </motion.div>
  )
}
