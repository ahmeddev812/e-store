"use client"

import Link from "next/link"
import Image from "next/image"
import { useWishlistStore } from "@/store/wishlist"
import { useCartStore } from "@/store/cart"
import { getProductById } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatUSD, getDiscountPrice } from "@/lib/utils"
import { toast } from "sonner"
import { Trash2, ShoppingCart, Heart, ArrowLeft } from "lucide-react"

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const { addItem } = useCartStore()

  const handleAddToCart = (id: string) => {
    const product = getProductById(id)
    if (!product) {
      toast.error("Product not found")
      return
    }
    addItem(
      {
        productId: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        thumbnail: product.thumbnail,
      },
      1
    )
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
    <div className="mx-auto max-w-6xl px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Wishlist</h1>
        <p className="text-muted-foreground text-sm mt-1">{items.length} item{items.length !== 1 ? "s" : ""}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const discountedPrice = getDiscountPrice(item.price, item.discountPercentage)

          return (
            <Card key={item.id}>
              <CardContent className="p-0">
                <Link href={`/products/${item.slug}`}>
                  <div className="relative aspect-square bg-muted/50">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover rounded-t-xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Link>
                <div className="p-4 space-y-3">
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="text-foreground font-medium text-sm truncate hover:text-[#F57224] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-[#F57224] font-semibold">{formatUSD(discountedPrice)}</span>
                    {item.discountPercentage > 0 && (
                      <span className="text-muted-foreground/70 text-xs line-through">{formatUSD(item.price)}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" onClick={() => handleAddToCart(item.id)}>
                      <ShoppingCart className="size-3.5" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => {
                        removeItem(item.id)
                        toast.success("Removed from wishlist")
                      }}
                    >
                      <Trash2 className="size-3.5 text-red-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
