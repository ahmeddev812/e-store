"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  Camera,
  Coffee,
  Crown,
  Flame,
  Gem,
  Heart,
  Palette,
  Rocket,
  ShoppingBag,
  Smartphone,
  Watch,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

interface CategoryWithCount {
  id: string
  name: string
  slug: string
  image: string
  _count: { products: number }
}

const categoryIcons: Record<string, LucideIcon> = {
  electronics: Smartphone,
  fashion: Palette,
  "home-garden": Briefcase,
  beauty: Gem,
  sports: Flame,
  automotive: Zap,
  groceries: Coffee,
  books: Watch,
  "toys-games": Rocket,
  jewelry: Crown,
  "pet-supplies": Heart,
  office: Camera,
}

interface CategoryCardProps {
  category: CategoryWithCount
  index?: number
  className?: string
}

export function CategoryCard({ category, index = 0, className }: CategoryCardProps) {
  const Icon = categoryIcons[category.slug] || ShoppingBag

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ ...easeTransition, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={className}
    >
      <Link href={`/products?category=${category.slug}`}>
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(245,114,36,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative flex items-center justify-between gap-4">
            <div>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category._count.products} products
              </p>
            </div>
            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300",
                "group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
              )}
            >
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
