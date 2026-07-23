import type { Product } from "@/data/products"

export type ProductCardVariant = "premium" | "catalog" | "minimal"

export interface ProductCardProps {
  product: Product
  index?: number
  variant?: ProductCardVariant
  showWishlist?: boolean
  showQuickView?: boolean
  showAddToCart?: boolean
  showStock?: boolean
  showTags?: boolean
  animate?: boolean
  className?: string
}
