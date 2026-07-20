"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import type { Product } from "@/data/products"
import { CountdownTimer } from "@/components/shared/countdown-timer"
import { ProductGrid } from "@/components/products/product-grid"
import { Button } from "@/components/ui/button"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

interface FlashSaleSectionProps {
  products: Product[]
  target: Date
}

export function FlashSaleSection({ products, target }: FlashSaleSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeUp}
        transition={easeTransition}
        className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:mb-12 md:p-8"
      >
        <div className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-3">
              <Flame className="size-8 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Flash Sales
              </h2>
              <p className="text-sm text-muted-foreground">
                Limited time offers — up to 70% off
              </p>
            </div>
          </div>
          <CountdownTimer target={target} />
        </div>
      </motion.div>

      <ProductGrid products={products} variant="premium" columns="compact" />

      <div className="mt-8 text-center md:mt-10">
        <Link href="/flash-sales">
          <Button variant="outline" className="border-border">
            View All Flash Sales
          </Button>
        </Link>
      </div>
    </section>
  )
}
