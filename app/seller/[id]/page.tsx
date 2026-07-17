"use client"

import { useParams } from "next/navigation"
import { Star, Calendar, Clock, MapPin, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/data/products"
import { Product } from "@/types"
import { cn, formatUSD, getDiscountPrice } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useWishlistStore } from "@/store/wishlist"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProductCardProps {
  product: Product
  className?: string
}

function ProductCard({ product, className }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlistStore()
  const { addItem } = useCartStore()
  const wishlisted = isInWishlist(product.id)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#F57224]/30 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(245,114,36,0.2)]",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={product.thumbnail ?? product.images[0] ?? "/placeholder.svg"}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute left-2 top-2 rounded-lg bg-[#F57224] px-2 py-0.5 text-xs font-bold text-white shadow-lg">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          toggleItem({
            id: product.id,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            thumbnail: product.thumbnail,
            slug: product.slug,
          })
        }}
        className={cn(
          "absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-xl transition-all hover:scale-110",
          wishlisted
            ? "bg-[#F57224]/20 text-[#F57224]"
            : "bg-black/20 text-white/70 hover:bg-[#F57224]/20 hover:text-[#F57224]"
        )}
      >
        <Heart className={cn("h-4 w-4", wishlisted && "fill-[#F57224]")} />
      </button>

      <div className="mt-3 space-y-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-1 text-sm font-semibold text-foreground transition-colors group-hover:text-[#F57224]">
            {product.title}
          </h3>
        </Link>

        {product.brand && (
          <p className="text-xs text-muted-foreground">by {product.brand}</p>
        )}

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            {formatUSD(discountedPrice)}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-muted-foreground line-through">
              {formatUSD(product.price)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < Math.round(product.rating)
                    ? "fill-[#F57224] text-[#F57224]"
                    : "fill-none text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-muted-foreground">
            ({product.rating})
          </span>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault()
            addItem({
              productId: product.id,
              title: product.title,
              price: product.price,
              discountPercentage: product.discountPercentage,
              thumbnail: product.thumbnail,
            }, 1)
          }}
          variant="default"
          size="sm"
          className="w-full"
        >
          <ShoppingCart className="mr-1.5 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}

export default function SellerPage() {
  const params = useParams()
  const sellerId = params.id as string

  const sellerBrands: Record<string, { name: string; rating: number; products: number; responseTime: string; joined: string; description: string; location: string }> = {
    "soundmax": { name: "SoundMax", rating: 4.6, products: 4, responseTime: "< 1 hour", joined: "January 2021", description: "Premium audio equipment manufacturer specializing in headphones, speakers, and wireless audio solutions.", location: "California, USA" },
    "techwear": { name: "TechWear", rating: 4.7, products: 1, responseTime: "< 2 hours", joined: "March 2021", description: "Innovative wearable technology company creating smartwatches and fitness tracking devices.", location: "Singapore" },
    "luxewear": { name: "LuxeWear", rating: 4.5, products: 4, responseTime: "< 1 hour", joined: "June 2020", description: "Premium fashion brand specializing in luxury leather goods, apparel, and accessories.", location: "Milan, Italy" },
    "viewpro": { name: "ViewPro", rating: 4.8, products: 1, responseTime: "< 3 hours", joined: "February 2021", description: "Professional display manufacturer producing high-quality monitors and display solutions.", location: "South Korea" },
    "pureglow": { name: "PureGlow", rating: 4.6, products: 1, responseTime: "< 2 hours", joined: "April 2022", description: "Organic skincare brand committed to natural, eco-friendly beauty products.", location: "Australia" },
    "comfortplus": { name: "ComfortPlus", rating: 4.4, products: 1, responseTime: "< 4 hours", joined: "August 2020", description: "Ergonomic furniture solutions for home and office.", location: "Germany" },
    "speedgear": { name: "SpeedGear", rating: 4.9, products: 1, responseTime: "< 1 hour", joined: "November 2020", description: "High-performance athletic gear and footwear for serious athletes.", location: "Oregon, USA" },
    "chargefast": { name: "ChargeFast", rating: 4.2, products: 1, responseTime: "< 3 hours", joined: "May 2021", description: "Innovative charging solutions and mobile accessories.", location: "China" },
  }

  const sellerInfo = sellerBrands[sellerId.toLowerCase()] || {
    name: `BlazeCart Store ${sellerId}`,
    rating: 4.5,
    products: products.length,
    responseTime: "< 2 hours",
    joined: "January 2021",
    description: "A trusted seller providing premium quality products with excellent customer service.",
    location: "Global"
  }

  const sellerProducts = products.filter(
    (p) => p.brand?.toLowerCase() === sellerId.toLowerCase()
  )

  const displayProducts = sellerProducts.length > 0 ? sellerProducts : products

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] bg-[radial-gradient(ellipse_at_top,rgba(245,114,36,0.03)_0%,transparent_60%)]">
      <div className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <Card className="overflow-hidden mb-8">
          <div className="h-32 md:h-48 bg-gradient-to-r from-[#F57224] to-[#ff9a5c]">
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <CardContent className="-mt-12 relative">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 dark:bg-white/10 border-4 border-white dark:border-[#0a0a0f] flex items-center justify-center text-4xl md:text-5xl font-bold text-[#F57224] shadow-xl">
                  {sellerInfo.name.charAt(0)}
                </div>
                <Badge className="absolute -right-2 -bottom-2 bg-[#F57224]">Official Store</Badge>
              </div>
              <div className="flex-1 pb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {sellerInfo.name}
                </h1>
                <p className="text-muted-foreground mb-3">{sellerInfo.description}</p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#F57224]" />
                    {sellerInfo.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-center gap-1 text-[#F57224] mb-2">
                  <Star className="w-5 h-5 fill-[#F57224]" />
                  <span className="text-xl font-bold">{sellerInfo.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">Store Rating</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Package className="w-5 h-5 text-[#F57224]" />
                  <span className="text-xl font-bold text-foreground">{displayProducts.length}</span>
                </div>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Clock className="w-5 h-5 text-[#F57224]" />
                  <span className="text-xl font-bold text-foreground">{sellerInfo.responseTime}</span>
                </div>
                <p className="text-xs text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Calendar className="w-5 h-5 text-[#F57224]" />
                  <span className="text-lg font-bold text-foreground">{sellerInfo.joined}</span>
                </div>
                <p className="text-xs text-muted-foreground">Joined</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Products from {sellerInfo.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {displayProducts.length} product(s) available
              </p>
            </div>
          </div>

          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center glass-card p-12">
              <Package className="mb-4 h-16 w-16 text-muted-foreground/40" />
              <h3 className="text-lg font-semibold text-foreground">No products found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This seller currently has no products listed.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
