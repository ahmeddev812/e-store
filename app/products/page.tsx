"use client"

import { Suspense, use, useMemo, useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"


import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, ArrowRight, SlidersHorizontal, X, 
  Search, Filter, Grid, List, ChevronDown, 
  Star, TrendingUp, Zap, Sparkles, Crown,
  Heart, Eye, ShoppingBag, CheckCircle, Clock,
  DollarSign, Package, Tag, Award
} from "lucide-react"
import { products, categoriesWithCount } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { Select, SelectTrigger, SelectValue, SelectPopup, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"

const ITEMS_PER_PAGE = 12

const sortOptions = [
  { value: "default", label: "Default", icon: TrendingUp },
  { value: "price-asc", label: "Price: Low to High", icon: DollarSign },
  { value: "price-desc", label: "Price: High to Low", icon: DollarSign },
  { value: "rating-desc", label: "Highest Rated", icon: Star },
  { value: "name-asc", label: "Name: A-Z", icon: Package },
  { value: "name-desc", label: "Name: Z-A", icon: Package },
] as const

// Premium Product Card Component - Theme Aware
function ProductCard({ product, index, onSaveScroll, nav }: { product: any; index: number; onSaveScroll?: () => void; nav?: (url: string) => void }) {
  const [isHovered, setIsHovered] = useState(false)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`} onClick={onSaveScroll}>
        <Card className="group relative overflow-hidden transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)] bg-card border-border">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-muted">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            {/* Discount Badge */}
            {product.discountPercentage > 0 && (
              <div className="absolute left-3 top-3 z-10">
                <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-white">
                  -{product.discountPercentage}%
                </Badge>
              </div>
            )}

            {/* Top Rated Badge */}
            {product.rating >= 4.5 && (
              <div className="absolute right-3 top-3 z-10">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 backdrop-blur-sm">
                  <Star className="mr-1 size-3 fill-yellow-500" /> Top Rated
                </Badge>
              </div>
            )}

            {/* Quick View Overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm"
                >
                  <Button 
                    variant="outline" 
                    className="border-border bg-muted/30 text-foreground hover:bg-[#F57224] hover:text-white hover:border-[#F57224]"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onSaveScroll) onSaveScroll()
                      if (nav) nav(`/products/${product.slug}`)
                      else window.location.href = `/products/${product.slug}`
                    }}
                  >
                    <Eye className="mr-2 size-4" />
                    Quick View
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground/70 uppercase tracking-wider">{product.brand}</p>
            <h3 className="mt-1 font-semibold text-foreground line-clamp-2 group-hover:text-[#F57224] transition-colors">
              {truncate(product.title, 45)}
            </h3>
            
            {/* Price */}
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#F57224]">{formatUSD(discountedPrice)}</span>
              {product.discountPercentage > 0 && (
                <span className="text-xs text-muted-foreground/70 line-through">{formatUSD(product.price)}</span>
              )}
            </div>
            
            {/* Rating & Stock */}
            <div className="mt-2 flex items-center justify-between">
              <Rating value={product.rating} size="sm" readonly showValue />
              {product.stock < 10 && product.stock > 0 && (
                <span className="flex items-center gap-1 text-[10px] text-yellow-500">
                  <Clock className="size-3" />
                  Only {product.stock} left
                </span>
              )}
            </div>

            {/* Progress Bar */}
            {product.stock < 30 && product.stock > 0 && (
              <div className="mt-3">
                <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(product.stock / 100) * 100}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#F57224] to-orange-500"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

// Filter Sidebar Component - Theme Aware
function FilterSidebar({ 
  category, setCategory, 
  priceRange, setPriceRange,
  inStock, setInStock,
  onClose 
}: any) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange)
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="font-semibold text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="size-4" />
        </Button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-foreground">Categories</h4>
        <div className="space-y-2">
          <button
            onClick={() => setCategory("")}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
              category === "" 
                ? "bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]" 
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            All Categories
          </button>
          {categoriesWithCount.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.slug)}
              className={`flex w-full items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                category === cat.slug 
                  ? "bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <span>{cat.name}</span>
              <Badge className="bg-muted/30 text-muted-foreground/70 text-[9px] border-none">
                {cat.count}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-foreground">Price Range</h4>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="4000"
            value={localPriceRange}
            onChange={(e) => {
              setLocalPriceRange(parseInt(e.target.value))
              setPriceRange(parseInt(e.target.value))
            }}
            className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-[#F57224] to-orange-500"
            style={{
              background: `linear-gradient(to right, #F57224 0%, #F57224 ${(localPriceRange / 4000) * 100}%, rgba(128,128,128,0.15) ${(localPriceRange / 4000) * 100}%)`
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground/70">
            <span>$0</span>
            <span>${localPriceRange}</span>
            <span>$4000+</span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-foreground">Availability</h4>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="rounded border-border bg-muted/50 text-[#F57224] focus:ring-[#F57224] focus:ring-offset-0"
          />
          <span className="text-sm text-muted-foreground">In Stock Only</span>
        </label>
      </div>

      <Button 
        variant="outline" 
        className="w-full border-border"
        onClick={() => {
          setCategory("")
          setPriceRange(4000)
          setInStock(false)
          setLocalPriceRange(4000)
        }}
      >
        Clear All Filters
      </Button>
    </div>
  )
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageContent searchParams={searchParams} />
    </Suspense>
  )
}

function ProductsPageSkeleton() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <div className="h-8 w-48 rounded-lg bg-muted/30 animate-pulse" />
          <div className="mt-1 h-4 w-32 rounded-lg bg-muted/30 animate-pulse" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-xl bg-muted/20 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductsPageContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const sp = use(searchParams)
  const categoryParam = typeof sp.category === "string" ? sp.category : ""
  const sortParam = typeof sp.sort === "string" ? sp.sort : "default"
  const pageParam = parseInt(typeof sp.page === "string" ? sp.page : "1", 10)
  const qParam = typeof sp.q === "string" ? sp.q : ""

  const [category, setCategory] = useState(categoryParam)
  const [sort, setSort] = useState(sortParam)
  const [page, setPage] = useState(pageParam)
  const [search, setSearch] = useState(qParam)
  const [searchInput, setSearchInput] = useState(qParam)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState(4000)
  const [inStock, setInStock] = useState(false)

  const router = useRouter()
  const isFirstRender = useRef(true)

  // Save scroll position before navigating away
  useEffect(() => {
    const handleBeforeNav = () => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("products_scroll", String(window.scrollY))
      }
    }
    window.addEventListener("beforeunload", handleBeforeNav)
    return () => window.removeEventListener("beforeunload", handleBeforeNav)
  }, [])

  // Restore scroll position on mount (from back navigation)
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("products_scroll")
    if (savedScroll) {
      sessionStorage.removeItem("products_scroll")
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedScroll, 10))
      })
    }
  }, [])

  useEffect(() => {
    setCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    setPage(pageParam)
  }, [pageParam])

  useEffect(() => {
    setSearch(qParam)
    setSearchInput(qParam)
  }, [qParam])

  useEffect(() => {
    setSort(sortParam)
  }, [sortParam])

  // Sync filter state to URL so back/forward navigation preserves context
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const url = new URL(window.location.href)
    const params = new URLSearchParams()
    if (category) params.set("category", category)
    if (sort !== "default") params.set("sort", sort)
    if (page > 1) params.set("page", String(page))
    if (search) params.set("q", search)
    const qs = params.toString()
    const newPath = qs ? `/products?${qs}` : "/products"
    router.replace(newPath, { scroll: false })
  }, [category, sort, search, page])

  // Save scroll position on product link click
  const saveScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("products_scroll", String(window.scrollY))
    }
  }, [])

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category) {
      const cat = categoriesWithCount.find((c) => c.slug === category)
      if (cat) result = result.filter((p) => p.categoryId === cat.id)
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q)) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Price filter
    result = result.filter(p => getDiscountPrice(p.price, p.discountPercentage) <= priceRange)

    // Stock filter
    if (inStock) {
      result = result.filter(p => p.stock > 0)
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => getDiscountPrice(a.price, a.discountPercentage) - getDiscountPrice(b.price, b.discountPercentage))
        break
      case "price-desc":
        result.sort((a, b) => getDiscountPrice(b.price, b.discountPercentage) - getDiscountPrice(a.price, a.discountPercentage))
        break
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    return result
  }, [category, sort, search, priceRange, inStock])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleSearch = () => {
    setSearch(searchInput)
    setPage(1)
  }

  const handleCategoryChange = (slug: string | null) => {
    setCategory(slug ?? "")
    setPage(1)
  }

  const activeFiltersCount = [
    category ? 1 : 0,
    priceRange < 4000 ? 1 : 0,
    inStock ? 1 : 0,
    search ? 1 : 0
  ].filter(Boolean).length

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Premium Background - Theme Aware */}
      <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/8 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-12 pb-8">
        <motion.div style={{ opacity: heroOpacity }} className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Sparkles className="size-4 text-[#F57224]" />
              <span className="text-sm text-[#F57224]">Our Collection</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-foreground lg:text-4xl"
            >
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground"
            >
              {filtered.length} products available
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-16 z-30 border-b border-border bg-muted/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70" />
                <Input
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 border-border bg-muted/50 text-foreground placeholder:text-muted-foreground/70"
                />
              </div>
              <Button variant="default" onClick={handleSearch} className="bg-gradient-to-r from-[#F57224] to-orange-500 text-white">
                Search
              </Button>
            </div>

            {/* Filter Button (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden border-border"
            >
              <Filter className="mr-2 size-4" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>

            {/* Sort & View */}
            <div className="flex items-center gap-2">
              <Select value={sort} onValueChange={(v: string | null) => { setSort(v ?? "default"); setPage(1) }}>
                <SelectTrigger className="w-44 border-border bg-muted/50">
                  <SlidersHorizontal className="mr-1 size-4 text-muted-foreground" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectPopup>
                  {sortOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <div className="flex items-center gap-2">
                        <opt.icon className="size-3" />
                        {opt.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>

              {/* View Toggle */}
              <div className="hidden rounded-lg bg-muted/50 p-1 sm:flex">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-md p-1.5 transition-all ${viewMode === "grid" ? "bg-[#F57224] text-white" : "text-muted-foreground/70 hover:text-foreground"}`}
                >
                  <Grid className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-md p-1.5 transition-all ${viewMode === "list" ? "bg-[#F57224] text-white" : "text-muted-foreground/70 hover:text-foreground"}`}
                >
                  <List className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <FilterSidebar
              category={category}
              setCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              inStock={inStock}
              setInStock={setInStock}
              onClose={() => {}}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground/70">Active filters:</span>
                {category && (
                  <Badge className="flex items-center gap-1 bg-[#F57224]/20 text-[#F57224]">
                    {categoriesWithCount.find(c => c.slug === category)?.name}
                    <button onClick={() => setCategory("")}>
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                {priceRange < 4000 && (
                  <Badge className="flex items-center gap-1 bg-[#F57224]/20 text-[#F57224]">
                    Up to ${priceRange}
                    <button onClick={() => setPriceRange(4000)}>
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                {inStock && (
                  <Badge className="flex items-center gap-1 bg-[#F57224]/20 text-[#F57224]">
                    In Stock
                    <button onClick={() => setInStock(false)}>
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                {search && (
                  <Badge className="flex items-center gap-1 bg-[#F57224]/20 text-[#F57224]">
                    Search: {search}
                    <button onClick={() => { setSearch(""); setSearchInput("") }}>
                      <X className="size-3" />
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCategory("")
                    setPriceRange(4000)
                    setInStock(false)
                    setSearch("")
                    setSearchInput("")
                    setSort("default")
                  }}
                  className="text-xs text-muted-foreground/70 hover:text-foreground"
                >
                  Clear all
                </Button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground/70">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} products
              </p>
            </div>

            {/* Products Grid/List */}
            {paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Package className="mb-4 size-16 text-foreground/20" />
                <p className="text-lg text-muted-foreground">No products found</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setCategory("")
                    setSearch("")
                    setSearchInput("")
                    setSort("default")
                    setPriceRange(4000)
                    setInStock(false)
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginated.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} onSaveScroll={saveScroll} nav={router.push} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} index={0} onSaveScroll={saveScroll} nav={router.push} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage <= 1}
                  onClick={() => setPage(currentPage - 1)}
                  className="border-border"
                >
                  <ArrowLeft className="size-4" />
                </Button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={pageNum === currentPage ? "default" : "outline"}
                      size="sm"
                      className={pageNum === currentPage ? "bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white" : "border-border"}
                      onClick={() => setPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage >= totalPages}
                  onClick={() => setPage(currentPage + 1)}
                  className="border-border"
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer - Theme Aware */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto bg-background p-6 shadow-2xl"
            >
              <FilterSidebar
                category={category}
                setCategory={(slug: string) => {
                  handleCategoryChange(slug)
                  setIsFilterOpen(false)
                }}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                inStock={inStock}
                setInStock={setInStock}
                onClose={() => setIsFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}