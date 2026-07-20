"use client"

import { Crown } from "lucide-react"

const brands = [
  "Apple", "Samsung", "Nike", "Adidas", "Gucci",
  "Louis Vuitton", "Rolex", "Sony", "Dior", "Chanel",
  "Prada", "Versace", "Armani", "Burberry", "Cartier",
]

export function BrandMarquee() {
  return (
    <div className="relative overflow-hidden py-10" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={`${brand}-${idx}`}
            className="mx-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground/70 md:mx-10 md:text-base"
          >
            <Crown className="size-4 text-gold" />
            {brand}
          </div>
        ))}
      </div>
    </div>
  )
}
