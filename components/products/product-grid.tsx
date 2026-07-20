"use client"

import { motion } from "framer-motion"
import type { Product } from "@/data/products"
import { ProductCard, type ProductCardProps } from "@/components/products/product-card"
import { cn } from "@/lib/utils"
import { staggerContainer } from "@/lib/motion"

interface ProductGridProps {
  products: Product[]
  variant?: ProductCardProps["variant"]
  className?: string
  columns?: "default" | "compact" | "wide"
  cardProps?: Partial<Omit<ProductCardProps, "product" | "index">>
}

const columnClasses = {
  default: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  compact: "sm:grid-cols-2 lg:grid-cols-4",
  wide: "sm:grid-cols-2 lg:grid-cols-3",
}

export function ProductGrid({
  products,
  variant = "catalog",
  className,
  columns = "default",
  cardProps,
}: ProductGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
      className={cn("grid gap-5 md:gap-6", columnClasses[columns], className)}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          variant={variant}
          {...cardProps}
        />
      ))}
    </motion.div>
  )
}
