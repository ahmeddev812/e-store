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
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

export function ProductCard({
  product,
  index = 0,
  variant = "catalog",
  showWishlist = variant === "premium",
  showQuickView = variant !== "minimal",
  showStock = variant === "catalog",
  showTags = variant === "minimal",
  animate = true,
  className,
}: ProductCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const { toggleItem, isInWishlist } = useWishlistStore()
  const wishlisted = isInWishlist(product.id)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

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

  const card = (
    <div className={cn("group relative", className)}>
      {variant === "premium" && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-gold to-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25" />
      )}

      <Card
        className={cn(
          "overflow-hidden rounded-2xl border-border bg-card transition-all duration-500",
          variant === "premium" && "shadow-lg hover:shadow-2xl hover:shadow-primary/10",
          variant === "catalog" && "hover:border-primary/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.12)]",
          variant === "minimal" && "h-full hover:border-primary/30"
        )}
      >
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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

          {product.rating >= 4.5 && variant !== "minimal" && (
            <div className="absolute right-3 top-3 z-10">
              <Badge
                variant="secondary"
                className="border-yellow-500/30 bg-yellow-500/15 text-yellow-700 backdrop-blur-sm dark:text-yellow-400"
              >
                <Star className="mr-1 size-3 fill-yellow-500 text-yellow-500" />
                Top Rated
              </Badge>
            </div>
          )}

          {showWishlist && (
            <button
              type="button"
              onClick={handleWishlist}
              className={cn(
                "absolute right-3 top-3 z-20 rounded-full bg-background/80 p-2 shadow-md backdrop-blur-xl transition-all hover:bg-primary hover:text-primary-foreground",
                variant === "premium" && product.rating >= 4.5 && "top-12",
                isHovered || wishlisted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={cn(
                  "size-4 transition-all",
                  wishlisted && "fill-primary text-primary scale-110"
                )}
              />
            </button>
          )}

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
                className="border-border bg-background/90 text-foreground backdrop-blur-xl hover:border-primary hover:bg-primary hover:text-primary-foreground"
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
        </div>

        <CardContent className={cn("p-4", variant === "premium" && "p-5")}>
          {variant === "premium" && (
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {product.categoryName}
              </span>
              <Rating value={product.rating} size="sm" readonly />
            </div>
          )}

          {variant !== "premium" && product.brand && (
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              {product.brand}
            </p>
          )}

          <h3
            className={cn(
              "font-semibold text-foreground transition-colors group-hover:text-primary",
              variant === "premium" ? "line-clamp-2 text-base" : "mt-1 line-clamp-2"
            )}
          >
            {truncate(product.title, variant === "minimal" ? 40 : 45)}
          </h3>

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

          {variant !== "premium" && (
            <div className="mt-2 flex items-center justify-between gap-2">
              <Rating value={product.rating} size="sm" readonly showValue={variant === "catalog"} />
              {showStock && product.stock < 10 && product.stock > 0 && (
                <span className="flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400">
                  <Clock className="size-3" />
                  Only {product.stock} left
                </span>
              )}
            </div>
          )}

          {showStock && variant === "catalog" && product.stock < 30 && product.stock > 0 && (
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-700"
                style={{ width: `${Math.min(100, (product.stock / 100) * 100)}%` }}
              />
            </div>
          )}

          {showTags && product.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {variant === "premium" && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                {product.isBestSeller ? "Bestseller" : "In stock"}
              </span>
              <Button size="sm" className="shadow-glow">
                <ShoppingBag className="mr-1 size-3" />
                View
              </Button>
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
