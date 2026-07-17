"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  Clock, ArrowRight, Sparkles, TrendingUp, Star, Shield, 
  Truck, RotateCcw, Headphones, Zap, Gift, 
  Diamond, Flame, Eye, ShoppingBag, Heart, ChevronRight,
  Users, Award, Globe, Rocket, Coffee, Crown, Gem,
  Palette, Briefcase, Watch, Camera, Headset, Smartphone,
  Play, ShieldCheck, Medal, BadgeCheck
} from "lucide-react"
import { products, categoriesWithCount, getFeaturedProducts, getNewArrivals, getFlashSaleProducts, getBestsellers } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"

// Premium Countdown Timer
function CountdownTimer({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [target])

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {[
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-2 min-w-[60px] backdrop-blur-sm border border-border">
              <span className="text-2xl font-bold tabular-nums text-[#F57224]">
                {String(item.value).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
            </div>
            <span className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground/70">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Ultra Premium Product Card
function UltraPremiumProductCard({ product, index }: { product: any; index: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30" />
          
          <div className="relative glass-premium overflow-hidden rounded-2xl transition-all duration-500">
            <div className="absolute left-3 top-3 z-20 flex gap-2">
              {product.discountPercentage > 0 && (
                <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-[10px]">
                  -{product.discountPercentage}%
                </Badge>
              )}
              {product.rating >= 4.7 && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 border-none text-[10px]">
                  <Star className="mr-1 size-2 fill-white" /> Bestseller
                </Badge>
              )}
            </div>
            
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
              className="absolute right-3 top-3 z-20 rounded-full bg-background/70 backdrop-blur-xl p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[#F57224] hover:text-white"
            >
              <Heart className={`size-4 transition-all ${isWishlisted ? "fill-[#F57224] text-[#F57224]" : "text-foreground"}`} />
            </button>

            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Button size="sm" className="bg-muted/20 backdrop-blur-xl hover:bg-[#F57224] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Eye className="mr-2 size-3" /> Quick View
                </Button>
              </div>
            </div>

            <CardContent className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{product.categoryName}</span>
                <Rating value={product.rating} size="sm" readonly />
              </div>
              <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-[#F57224] transition-colors">
                {truncate(product.title, 40)}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-bold text-[#F57224]">
                  {formatUSD(discountedPrice)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-xs text-muted-foreground/70 line-through">{formatUSD(product.price)}</span>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="size-4 rounded-full bg-gradient-to-r from-[#F57224] to-orange-500 ring-2 ring-black/20" />
                    ))}
                  </div>
                  <span className="text-[10px] text-foreground/30">+{product.stock} bought</span>
                </div>
                <Button size="sm" className="bg-[#F57224] hover:bg-[#F57224]/80 shadow-glow">
                  <ShoppingBag className="mr-1 size-3" /> Buy
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Luxury Category Card
function LuxuryCategoryCard({ category, index }: { category: any; index: number }) {
  const categoryIcons: Record<string, any> = {
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
  
  const Icon = categoryIcons[category.slug] || ShoppingBag

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/products?category=${category.slug}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-transparent p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F57224]/0 to-[#F57224]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 group-hover:scale-110 transition-transform">
                <Icon className="size-6 text-[#F57224]" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-[#F57224] transition-colors">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground/70">{category._count.products} Products</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-all duration-300 group-hover:bg-[#F57224] hover:text-white group-hover:scale-110">
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ===== NEW UNIQUE PREMIUM HERO SECTION =====
function PremiumHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-[85vh] overflow-hidden rounded-3xl">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        {/* Interactive Mouse-Follow Orb */}
        <div 
          className="absolute size-96 rounded-full bg-[#F57224]/20 blur-[120px] transition-transform duration-300 ease-out"
          style={{ 
            left: `${mousePosition.x}%`, 
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-40 right-20 size-72 rounded-full bg-[#D4A853]/15 blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-40 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      {/* Luxury Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBvbHlsaW5lIHBvaW50cz0iNDAgMCA4MCA0MCA0MCA4MCAwIDQwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] size-2 rounded-full bg-[#D4A853]/40 animate-float" />
        <div className="absolute top-40 right-[15%] size-3 rounded-full bg-[#F57224]/30 animate-float-delay" />
        <div className="absolute bottom-32 left-[20%] size-1.5 rounded-full bg-[#D4A853]/50 animate-float-slow" />
        <div className="absolute bottom-40 right-[25%] size-2 rounded-full bg-[#F57224]/40 animate-float-fast" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="size-3 text-[#D4A853]" />
              <span className="text-xs font-medium tracking-wider text-[#D4A853]">LIMITED EDITION 2024</span>
            </div>

            {/* Main Title with Luxury Split Text */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Where{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#D4A853]/20 blur-xl" />
                <span className="relative bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] bg-clip-text text-transparent animate-gradient-shift">
                  Luxury
                </span>
              </span>
              <br />
              Meets Innovation
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
              Ignite your style with our curated collection of premium products. 
              Elegance redefined for the discerning connoisseur.
            </p>

            {/* Trust Badges Row */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span className="text-xs text-muted-foreground">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Medal className="size-4 text-[#D4A853]" />
                <span className="text-xs text-muted-foreground">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-blue-500" />
                <span className="text-xs text-muted-foreground">Verified Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
                    <span className="relative z-10 flex items-center">
                      Explore Collection
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-500 to-[#F57224] transition-transform duration-300 group-hover:translate-x-0" />
                  </Button>
                </Link>
              </motion.div>
              <Link href="/categories">
                <Button variant="outline" size="lg" className="border-border hover:border-[#D4A853]/50 hover:bg-[#D4A853]/10">
                  <Play className="mr-2 size-4" />
                  Watch Showcase
                </Button>
              </Link>
            </div>

            {/* Customer Stats */}
            <div className="mt-12 flex items-center gap-6 border-t border-border pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-black bg-gradient-to-r from-[#D4A853] to-[#F57224]"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-foreground">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground/70">Trusted by 50,000+ customers</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Floating Product Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            <div className="relative">
              {/* Glow Behind */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-[#F57224]/20 via-[#D4A853]/20 to-[#F57224]/10 blur-3xl" />
              
              {/* Main Feature Product */}
              <div className="relative mb-6">
                <div className="glass-premium absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
                    alt="Featured Product"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none">
                      Featured
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Floating Small Cards */}
              <div className="absolute -top-8 -right-8 rotate-12 glass-premium rounded-xl p-2 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop"
                  alt="Product"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <p className="mt-1 text-center text-[10px] text-muted-foreground">-20% OFF</p>
              </div>
              
              <div className="absolute -bottom-6 -left-6 -rotate-12 glass-premium rounded-xl p-2 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop"
                  alt="Product"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <p className="mt-1 text-center text-[10px] text-muted-foreground">Bestseller</p>
              </div>

              {/* Price Tag */}
              <div className="absolute -top-4 -left-4 rounded-full bg-gradient-to-r from-[#D4A853] to-[#F57224] px-4 py-2 shadow-glow">
                <span className="text-sm font-bold text-foreground">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border"
          >
            <ChevronRight className="size-4 rotate-90 text-muted-foreground/70" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Brand Marquee
function BrandMarquee() {
  const brands = [
    "Apple", "Samsung", "Nike", "Adidas", "Gucci", "Louis Vuitton", "Rolex", "Sony", "Dior", "Chanel"
  ]

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F57224]/10 to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={idx}
            className="mx-8 flex items-center gap-2 text-base font-semibold text-muted-foreground/70"
          >
            <Crown className="size-4 text-[#D4A853]" />
            {brand}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [flashSaleTarget] = useState(() => new Date(Date.now() + 2 * 3600000))
  
  const featured = getFeaturedProducts(8)
  const flashProducts = getFlashSaleProducts(4)
  const newArrivals = getNewArrivals(8)
  const bestsellers = getBestsellers(4)

  const stats = [
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "500+", label: "Top Brands", icon: Award },
    { value: "30+", label: "Countries", icon: Globe },
    { value: "24/7", label: "Concierge Support", icon: Headphones },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <PremiumHero />

      {/* FEATURED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Shop by Category
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">Featured Categories</h2>
          <p className="mt-2 text-muted-foreground">Browse through our curated collections</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesWithCount.map((category, index) => (
            <LuxuryCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* FLASH SALES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#F57224]/20 via-[#F57224]/10 to-transparent p-8">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 size-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3">
                <Flame className="size-8 text-[#F57224]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Flash Sales</h2>
                <p className="text-sm text-muted-foreground">Limited time offers - Up to 70% off</p>
              </div>
            </div>
            <CountdownTimer target={flashSaleTarget} />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flashProducts.map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3">
              <Diamond className="size-8 text-[#F57224]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Trending Products</h2>
              <p className="text-sm text-muted-foreground">Handpicked selections for you</p>
            </div>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              View Collection <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 p-3">
              <Sparkles className="size-8 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">New Arrivals</h2>
              <p className="text-sm text-muted-foreground">Fresh from the collection</p>
            </div>
          </div>
          <Link href="/products?sort=newest">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              Explore New <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.slice(0, 4).map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/5 p-3">
              <Crown className="size-8 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Best Sellers</h2>
              <p className="text-sm text-muted-foreground">What everyone's loving</p>
            </div>
          </div>
          <Link href="/products?sort=rating-desc">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              View All <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION (CTA) */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a1a2e] via-[#2d1b2e] to-[#1a1a2e] p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="absolute -right-20 -top-20 size-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-[#D4A853]/20 blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4A853]/20 to-[#F57224]/10 p-4 mb-6">
              <Crown className="size-10 text-[#D4A853]" />
            </div>
              <h2 className="text-3xl font-bold text-foreground">Featured Collection</h2>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                Discover our exclusive premium collection, handpicked for the discerning shopper
              </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-[#D4A853] to-[#F57224] shadow-glow">
                  Shop Now <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/new-arrivals">
                <Button variant="outline" className="border-border hover:border-[#D4A853]/50">
                  View New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">The Blaze Experience</h2>
          <p className="mt-2 text-muted-foreground">Premium shopping redefined with exceptional service</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Crown, title: "Authentic Premium", description: "100% genuine premium products" },
            { icon: Shield, title: "Secure Shopping", description: "Bank-grade encryption" },
            { icon: Truck, title: "Express Delivery", description: "1-3 day global shipping" },
            { icon: RotateCcw, title: "Easy Returns", description: "30-day no questions asked" },
            { icon: Headphones, title: "Concierge Service", description: "24/7 dedicated support" },
            { icon: Gift, title: "VIP Rewards", description: "Exclusive member benefits" },
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="glass-premium rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5">
                <feature.icon className="size-7 text-[#F57224]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS / STATS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative mx-auto -mt-8 max-w-7xl px-6 z-20"
      >
        <div className="grid grid-cols-2 gap-4 rounded-2xl glass-premium p-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <stat.icon className="size-5 text-[#F57224]" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* BRAND PARTNERS */}
      <BrandMarquee />

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/10 via-transparent to-[#F57224]/5" />
          <div className="relative">
            <Gift className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className="text-2xl font-bold text-foreground">Subscribe & Save 15%</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Get exclusive deals, early access, and 15% off your first order
            </p>
            <div className="mx-auto mt-6 flex max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-border bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-[#F57224] focus:outline-none"
              />
              <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow whitespace-nowrap">
                Subscribe <Sparkles className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}