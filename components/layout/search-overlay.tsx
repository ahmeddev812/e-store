"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useUIStore } from "@/store/ui"
import { useDebounce } from "@/hooks/use-debounce"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, X, TrendingUp, Clock, ArrowRight, 
  Sparkles, Package, Star, Zap, Flame, Crown,
  TrendingDown, ShoppingBag, Eye, Heart
} from "lucide-react"

const suggestions = [
  { name: "Electronics", icon: "📱", color: "from-cyan-500 to-blue-500", popular: true },
  { name: "Fashion", icon: "👕", color: "from-pink-500 to-rose-500", popular: true },
  { name: "Shoes", icon: "👟", color: "from-orange-500 to-red-500", popular: false },
  { name: "Beauty", icon: "💄", color: "from-purple-500 to-pink-500", popular: true },
  { name: "Home & Garden", icon: "🏠", color: "from-emerald-500 to-teal-500", popular: false },
  { name: "Sports", icon: "⚽", color: "from-blue-500 to-indigo-500", popular: false },
  { name: "Watches", icon: "⌚", color: "from-slate-500 to-gray-500", popular: true },
  { name: "Accessories", icon: "👜", color: "from-amber-500 to-yellow-500", popular: false },
]

const recentSearches = [
  { term: "Wireless headphones", count: "2.5k searches", trending: true },
  { term: "Running shoes", count: "1.8k searches", trending: true },
  { term: "Smart watch", count: "1.2k searches", trending: false },
  { term: "Leather jacket", count: "892 searches", trending: true },
]

const trendingProducts = [
  { name: "Sony WH-1000XM5", slug: "sony-wh-1000xm5-headphones", price: 399, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&h=100&fit=crop", rating: 4.9 },
  { name: "Nike Air Max", slug: "nike-air-max-270", price: 129, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop", rating: 4.8 },
  { name: "iPhone 15 Pro", slug: "apple-iphone-15-pro", price: 999, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop", rating: 4.9 },
]

function SearchOverlay() {
  const router = useRouter()
  const { isSearchOpen, setSearchOpen } = useUIStore()
  const [query, setQuery] = useState("")
  const [recent, setRecent] = useState<{ term: string; count: string; trending: boolean }[]>(recentSearches)
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
      setQuery("")
      setSearchResults([])
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isSearchOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false)
    }
    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen, setSearchOpen])

  // Simulate search results
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        const mockResults = trendingProducts.filter(p => 
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
        setSearchResults(mockResults)
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
    }
  }, [debouncedQuery])

  const handleSearch = useCallback(
    (q: string) => {
      const trimmed = q.trim()
      if (!trimmed) return
      setRecent((prev) => {
        const newEntry = { term: trimmed, count: "Just now", trending: false }
        const updated = [newEntry, ...prev.filter((s) => s.term !== trimmed)].slice(0, 5)
        return updated
      })
      setSearchOpen(false)
      router.push(`/search?q=${encodeURIComponent(trimmed)}`)
    },
    [router, setSearchOpen]
  )

  const removeRecent = useCallback((term: string) => {
    setRecent((prev) => prev.filter((s) => s.term !== term))
  }, [])

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-50 border-b border-border bg-gradient-to-b from-background to-muted/80 backdrop-blur-2xl shadow-2xl"
          >
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <div className="rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 p-1.5">
                    <Search className="size-5 text-[#F57224]" />
                  </div>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch(query)
                  }}
                  placeholder="What are you looking for today?"
                  className="w-full rounded-2xl border border-border bg-muted/10 py-4 pl-14 pr-14 text-lg text-foreground placeholder:text-muted-foreground/70 backdrop-blur-md transition-all focus:border-[#F57224]/50 focus:outline-none focus:ring-2 focus:ring-[#F57224]/20 dark:bg-muted/60"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-muted/30 p-2 transition-all hover:bg-[#F57224]/20 hover:scale-110"
                >
                  <X className="size-4 text-foreground/70" />
                </button>
              </div>

              {/* Loading State */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-center justify-center gap-2 py-8"
                  >
                    <div className="size-5 animate-spin rounded-full border-2 border-[#F57224] border-t-transparent" />
                    <span className="text-sm text-muted-foreground">Searching products...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Results Area */}
              {!isLoading && (
                <div className="mt-6 space-y-6">
                  {/* Live Search Results */}
                  {debouncedQuery && searchResults.length > 0 && (
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <div className="rounded-lg bg-[#F57224]/10 p-1">
                          <Package className="size-4 text-[#F57224]" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground">Top Results</h3>
                        <Badge className="bg-[#F57224]/20 text-[#F57224] text-[9px] border-none">
                          Live
                        </Badge>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {searchResults.map((product, idx) => (
                          <motion.div
                            key={product.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => {
                              setSearchOpen(false)
                              if (product.slug) router.push(`/products/${product.slug}`)
                              else router.push(`/search?q=${encodeURIComponent(product.name)}`)
                            }}
                            className="group flex cursor-pointer items-center gap-3 rounded-xl bg-muted/50 p-3 transition-all hover:bg-[#F57224]/10 hover:scale-[1.02]"
                          >
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground group-hover:text-[#F57224] transition-colors">
                                {product.name}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-[#F57224]">${product.price}</span>
                                <div className="flex items-center gap-0.5">
                                  <Star className="size-3 fill-yellow-500 text-yellow-500" />
                                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                                </div>
                              </div>
                            </div>
                            <Eye className="size-4 text-muted-foreground/70 opacity-0 transition-opacity group-hover:opacity-100" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Popular Suggestions */}
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 p-1">
                          <Flame className="size-4 text-[#F57224]" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground">Popular Categories</h3>
                        <Badge className="bg-orange-500/20 text-orange-400 text-[9px] border-none">
                          Trending
                        </Badge>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {suggestions.map((suggestion) => (
                          <motion.button
                            key={suggestion.name}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setQuery(suggestion.name)
                              handleSearch(suggestion.name)
                            }}
                            className={`group flex items-center gap-2 rounded-xl bg-gradient-to-r ${suggestion.color} bg-opacity-10 p-2.5 transition-all hover:shadow-glow`}
                          >
                            <span className="text-lg">{suggestion.icon}</span>
                            <span className="flex-1 text-left text-sm font-medium text-foreground">
                              {suggestion.name}
                            </span>
                            {suggestion.popular && (
                              <Zap className="size-3 text-yellow-400" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches & Trending */}
                    <div className="space-y-6">
                      {/* Recent Searches */}
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-[#F57224]/10 p-1">
                            <Clock className="size-4 text-[#F57224]" />
                          </div>
                          <h3 className="text-sm font-semibold text-foreground">Recent Searches</h3>
                        </div>
                        <div className="mt-3 space-y-1">
                          {recent.length === 0 && (
                            <div className="flex items-center justify-center py-6 text-center">
                              <p className="text-sm text-muted-foreground/70">No recent searches</p>
                            </div>
                          )}
                          {recent.map((item) => (
                            <motion.div
                              key={item.term}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="group flex items-center justify-between rounded-lg px-3 py-2 transition-all hover:bg-muted/50"
                            >
                              <button
                                onClick={() => {
                                  setQuery(item.term)
                                  handleSearch(item.term)
                                }}
                                className="flex items-center gap-2 text-sm text-foreground/70 group-hover:text-[#F57224]"
                              >
                                <Clock className="size-3.5" />
                                {item.term}
                                {item.trending && (
                                  <TrendingUp className="size-3 text-emerald-400" />
                                )}
                              </button>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-foreground/30">{item.count}</span>
                                <button
                                  onClick={() => removeRecent(item.term)}
                                  className="opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                  <X className="size-3 text-muted-foreground/70 hover:text-red-400" />
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Trending Now */}
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-[#F57224]/10 p-1">
                            <TrendingUp className="size-4 text-[#F57224]" />
                          </div>
                          <h3 className="text-sm font-semibold text-foreground">Trending Now</h3>
                          <Badge className="bg-emerald-500/20 text-emerald-400 text-[9px] border-none">
                            +125% this week
                          </Badge>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Smart Watches", "Wireless Earbuds", "Gaming Laptops", "Sneakers", "Designer Bags", "Perfumes"].map((trend) => (
                            <button
                              key={trend}
                              onClick={() => {
                                setQuery(trend)
                                handleSearch(trend)
                              }}
                              className="group rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground/70 backdrop-blur-sm transition-all hover:border-[#F57224]/30 hover:bg-[#F57224]/10 hover:text-[#F57224]"
                            >
                              {trend}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View All Results Button */}
                  {query.trim() && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-t border-border pt-4"
                    >
                      <button
                        onClick={() => handleSearch(query)}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-3 text-sm font-medium text-[#F57224] transition-all hover:from-[#F57224]/30 hover:to-[#F57224]/10"
                      >
                        <Search className="size-4" />
                        Search for <span className="font-bold">"{query}"</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  )}

                  {/* Quick Tips */}
                  <div className="mt-4 rounded-xl bg-muted/50 p-3">
                    <div className="flex items-center justify-center gap-4 text-xs text-foreground/30">
                      <span>Try: "iPhone 15"</span>
                      <span>•</span>
                      <span>Try: "Nike shoes"</span>
                      <span>•</span>
                      <span>Try: "gaming laptop"</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SearchOverlay