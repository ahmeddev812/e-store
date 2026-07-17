"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { SearchX } from "lucide-react"
import { searchProducts } from "@/data/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { Button } from "@/components/ui/button"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground">Search</h1>
        <p className="mt-1 text-muted-foreground">Loading...</p>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  )
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchProducts(query.trim())
  }, [query])

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Search Results</h1>
        {query && (
          <p className="mt-1 text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {!query.trim() ? (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="rounded-full bg-muted/50 backdrop-blur-xl border border-border p-6 mb-4">
            <SearchX className="size-16 text-white/20" />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">Enter a search term to find products</p>
          <Link href="/products">
            <Button variant="outline" className="mt-4">
              Browse All Products
            </Button>
          </Link>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <div className="rounded-full bg-muted/50 backdrop-blur-xl border border-border p-6 mb-4">
            <SearchX className="size-16 text-white/20" />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">No results found for &ldquo;{query}&rdquo;</p>
          <p className="mt-2 text-sm text-foreground/30">Try different keywords or browse our categories</p>
          <div className="mt-6 flex gap-4">
            <Link href="/products">
              <Button variant="outline">All Products</Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline">Categories</Button>
            </Link>
          </div>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {results.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <Link href={`/products/${p.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:border-[#F57224]/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {p.discountPercentage > 0 && (
                      <Badge variant="default" size="sm" className="absolute left-3 top-3">
                        -{p.discountPercentage}%
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground/70">{p.brand}</p>
                    <h3 className="mt-1 font-medium text-foreground">{truncate(p.title, 40)}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-lg font-bold text-[#F57224]">
                        {formatUSD(getDiscountPrice(p.price, p.discountPercentage))}
                      </span>
                      {p.discountPercentage > 0 && (
                        <span className="text-sm text-muted-foreground/70 line-through">{formatUSD(p.price)}</span>
                      )}
                    </div>
                    <Rating value={p.rating} size="sm" readonly showValue />
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
