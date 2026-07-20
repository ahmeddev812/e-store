"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  ArrowRight, Sparkles, Star, ShoppingBag, Heart,
  ChevronRight, Eye, Crown,
  Smartphone, Palette, Briefcase, Gem, Flame, Zap,
  Coffee, Watch, Camera, Rocket, Users, Award, Globe,
  Headphones, Diamond, Shield, Truck, RotateCcw, Gift,
  Play, Pause, Volume2, VolumeX
} from "lucide-react"
import { products, categoriesWithCount, getFeaturedProducts, getNewArrivals, getFlashSaleProducts, getBestsellers } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"

// ============================================
// 1. THE ULTIMATE CINEMATIC HERO
// ============================================

function PremiumHero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  
  // Slides data
  const slides = [
    {
      tag: "New Season",
      title: "Street Culture",
      subtitle: "Premium Collection 2024",
      description: "Where urban energy meets refined craftsmanship. Discover the new standard in streetwear.",
      cta: "Explore Collection",
      gradient: "from-[#F57224] to-[#D4A853]",
      badge: "✦ 2024 DROP"
    },
    {
      tag: "Limited Edition",
      title: "Urban Luxury",
      subtitle: "Exclusive Drops",
      description: "Handpicked pieces that define modern luxury. For those who appreciate the finer details.",
      cta: "Shop Limited",
      gradient: "from-[#D4A853] to-[#F57224]",
      badge: "✦ EXCLUSIVE"
    },
    {
      tag: "Iconic Style",
      title: "Statement Pieces",
      subtitle: "Define Your Look",
      description: "Bold. Authentic. Unforgettable. The pieces that turn heads and start conversations.",
      cta: "Discover Now",
      gradient: "from-[#F57224] to-orange-500",
      badge: "✦ BEST SELLERS"
    }
  ]

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <video
          autoPlay={isVideoPlaying}
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover scale-105"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Overlay with Depth */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-black/85 via-black/60 to-black/90' 
            : 'bg-gradient-to-br from-black/80 via-black/50 to-black/85'
        }`}>
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,black_100%)] opacity-60" />
          
          {/* Single subtle ambient orb */}
          <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-[#F57224]/10 blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-[#D4A853]/8 blur-[120px]" />
        </div>

        {/* Grid Pattern */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iNDAgMCA4MCA0MCA0MCA4MCAwIDQwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20`} />
        
        {/* Shimmer Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F57224]/20 to-transparent" />
      </div>

      {/* ===== VIDEO CONTROLS ===== */}
      <div className="absolute top-6 right-6 z-30 flex gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`rounded-full ${isDark ? 'bg-white/10 backdrop-blur-xl' : 'bg-black/20 backdrop-blur-xl'} p-3 text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/10`}
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
        <button
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className={`rounded-full ${isDark ? 'bg-white/10 backdrop-blur-xl' : 'bg-black/20 backdrop-blur-xl'} p-3 text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/10`}
        >
          {isVideoPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>
      </div>

      {/* ===== SLIDE INDICATORS ===== */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-12 w-0.5 rounded-full transition-all duration-500 ${
              index === activeSlide 
                ? 'bg-[#F57224] w-6' 
                : 'bg-white/20 hover:bg-white/40 w-0.5'
            }`}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-5 py-2 backdrop-blur-sm"
              >
                <span className="size-2 rounded-full bg-[#F57224] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#D4A853] uppercase">
                  {slides[activeSlide].badge}
                </span>
              </motion.div>

              {/* Tag */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-medium tracking-[0.3em] text-white/40 uppercase"
              >
                {slides[activeSlide].tag}
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl xl:text-8xl leading-tight"
              >
                {slides[activeSlide].title}
                <br />
                <span className={`inline-block mt-2 bg-gradient-to-r ${slides[activeSlide].gradient} bg-clip-text text-transparent`}>
                  {slides[activeSlide].subtitle}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-lg text-sm sm:text-base font-light leading-relaxed text-white/60"
              >
                {slides[activeSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products">
                  <Button className="group relative overflow-hidden bg-[#F57224] px-6 py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(245,114,36,0.3)] hover:shadow-[0_0_40px_rgba(245,114,36,0.5)] transition-all duration-300">
                    <span className="relative z-10 flex items-center">
                      <Sparkles className="mr-2 size-4" />
                      {slides[activeSlide].cta}
                      <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#F57224] to-[#D4A853] transition-transform duration-500 group-hover:translate-x-0" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button 
                    variant="outline" 
                    className="border-white/20 px-6 py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    View All
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="size-10 rounded-full border-2 border-background bg-gradient-to-r from-[#D4A853] to-[#F57224] shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-yellow-500 text-yellow-500" />
                      ))}
                      <span className="ml-2 text-sm font-bold text-white">4.9</span>
                    </div>
                    <p className="text-xs font-medium tracking-wider text-white/50">
                      50,000+ Happy Customers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-white/30">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-[#D4A853]" />
                    <span className="text-xs font-medium">Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="size-4 text-[#D4A853]" />
                    <span className="text-xs font-medium">Fast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="size-4 text-[#D4A853]" />
                    <span className="text-xs font-medium">Returns</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
            Scroll
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <ChevronRight className="size-5 rotate-90 text-white/20" />
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}

// ============================================
// 2. COUNTDOWN TIMER
// ============================================

function CountdownTimer({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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
            <div className={`relative overflow-hidden rounded-xl p-2.5 min-w-[60px] backdrop-blur-sm border ${isDark ? 'border-border bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5' : 'border-gray-200 bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5'}`}>
              <span className="text-2xl font-bold tabular-nums text-[#F57224]">
                {String(item.value).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
            </div>
            <span className="mt-1.5 text-[9px] uppercase tracking-wider text-muted-foreground/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// 3. PRODUCT CARD
// ============================================

function UltraPremiumProductCard({ product, index }: { product: any; index: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-25" />
          
          <Card className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#F57224]/10 ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'}`}>
            <div className="absolute left-3 top-3 z-20 flex gap-2">
              {product.discountPercentage > 0 && (
                <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-[10px] text-white">
                  -{product.discountPercentage}%
                </Badge>
              )}
              {product.rating >= 4.7 && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 backdrop-blur-sm text-[10px]">
                  <Star className="mr-1 size-2 fill-yellow-500" /> Bestseller
                </Badge>
              )}
            </div>
            
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
              className={`absolute right-3 top-3 z-20 rounded-full p-2 transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              } hover:bg-[#F57224] hover:text-white shadow-md ${isDark ? 'bg-background/70 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-xl'}`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`size-4 transition-all duration-300 ${isWishlisted ? "fill-[#F57224] text-[#F57224] scale-110" : isDark ? 'text-foreground/70' : 'text-gray-600'}`} />
            </button>

            <div className={`relative overflow-hidden ${isDark ? 'bg-muted' : 'bg-gray-100'}`}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Button size="sm" className={`${isDark ? 'bg-background/90 backdrop-blur-xl text-foreground' : 'bg-white/90 backdrop-blur-xl text-gray-800'} hover:bg-[#F57224] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border-0`}>
                  <Eye className="mr-2 size-3" /> Quick View
                </Button>
              </div>
            </div>

            <CardContent className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{product.categoryName}</span>
                <Rating value={product.rating} size="sm" readonly />
              </div>
              <h3 className={`text-base font-semibold line-clamp-2 ${isDark ? 'text-foreground' : 'text-gray-800'} transition-colors duration-300 group-hover:text-[#F57224]`}>
                {truncate(product.title, 40)}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-bold text-[#F57224]">
                  {formatUSD(discountedPrice)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-xs line-through text-muted-foreground/60">{formatUSD(product.price)}</span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="size-4 rounded-full bg-gradient-to-r from-[#F57224] to-orange-500 ring-2 ring-background" />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground/50">+{product.stock} bought</span>
                </div>
                <Button size="sm" className="bg-[#F57224] hover:bg-[#F57224]/80 shadow-glow text-white">
                  <ShoppingBag className="mr-1 size-3" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Link>
    </motion.div>
  )
}

// ============================================
// 4. CATEGORY CARD
// ============================================

function LuxuryCategoryCard({ category, index }: { category: any; index: number }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
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
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/products?category=${category.slug}`}>
        <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,114,36,0.15)] shadow-md ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#F57224]/0 to-[#F57224]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="size-6 text-[#F57224]" />
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} transition-colors duration-300 group-hover:text-[#F57224]`}>
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground/70">{category._count.products} Products</p>
            </div>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#F57224] group-hover:text-white group-hover:scale-110 ${isDark ? 'bg-muted/50 text-muted-foreground' : 'bg-gray-100 text-gray-600'}`}>
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ============================================
// 5. BRAND MARQUEE
// ============================================

function BrandMarquee() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const brands = [
    "Apple", "Samsung", "Nike", "Adidas", "Gucci", 
    "Louis Vuitton", "Rolex", "Sony", "Dior", "Chanel",
    "Prada", "Versace", "Armani", "Burberry", "Cartier"
  ]

  return (
    <div className="relative overflow-hidden py-10">
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? 'via-[#F57224]/5' : 'via-[#F57224]/5'} to-transparent`} />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={idx}
            className={`mx-10 flex items-center gap-2 text-base font-semibold ${isDark ? 'text-muted-foreground/60' : 'text-gray-500'}`}
          >
            <Crown className="size-4 text-[#D4A853]" />
            {brand}
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// 6. MAIN HOMEPAGE
// ============================================

export default function HomePage() {
  const [flashSaleTarget] = useState(() => new Date(Date.now() + 2 * 3600000))
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
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
    <div className={`overflow-x-hidden ${isDark ? 'bg-transparent' : 'bg-gray-50'}`}>
      {/* 1. HERO */}
      <PremiumHero />

      {/* 2. FEATURED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Shop by Category
          </Badge>
          <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Featured Categories</h2>
          <p className={`mt-2 ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>Browse through our curated collections</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesWithCount.slice(0, 4).map((category, index) => (
            <LuxuryCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* 3. FLASH SALES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className={`relative mb-12 overflow-hidden rounded-2xl ${isDark ? 'bg-gradient-to-r from-[#F57224]/10 via-[#F57224]/5 to-transparent border-border' : 'bg-gradient-to-r from-[#F57224]/10 via-[#F57224]/5 to-transparent border-gray-200'} border p-8`}>
          <div className="absolute right-0 top-0 -mr-20 -mt-20 size-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3">
                <Flame className="size-8 text-[#F57224]" />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Flash Sales</h2>
                <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>Limited time offers - Up to 70% off</p>
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

      {/* 4. TRENDING PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3">
              <Diamond className="size-8 text-[#F57224]" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Trending Products</h2>
              <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>Handpicked selections for you</p>
            </div>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              View Collection <ChevronRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* 5. NEW ARRIVALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 p-3">
              <Sparkles className="size-8 text-emerald-500" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>New Arrivals</h2>
              <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>Fresh from the collection</p>
            </div>
          </div>
          <Link href="/products?sort=newest">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              Explore New <ChevronRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.slice(0, 4).map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* 6. BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/5 p-3">
              <Crown className="size-8 text-yellow-500" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Best Sellers</h2>
              <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>What everyone's loving</p>
            </div>
          </div>
          <Link href="/products?sort=rating-desc">
            <Button variant="ghost" className="group text-[#F57224] hover:bg-[#F57224]/10">
              View All <ChevronRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product, index) => (
            <UltraPremiumProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* 7. FEATURED COLLECTION CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center ${isDark ? 'bg-gradient-to-r from-muted/30 via-muted/10 to-background border-border' : 'bg-gradient-to-r from-gray-100 via-gray-50 to-white border-gray-200'} border`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="absolute -right-20 -top-20 size-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-[#D4A853]/20 blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4A853]/20 to-[#F57224]/10 p-4 mb-6">
              <Crown className="size-10 text-[#D4A853]" />
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Featured Collection</h2>
            <p className={`mx-auto mt-2 max-w-md ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
              Discover our exclusive premium collection, handpicked for the discerning shopper
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button size="xl" className="bg-gradient-to-r from-[#D4A853] to-[#F57224] shadow-glow text-white">
                  Shop Now <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/new-arrivals">
                <Button variant="outline" size="xl" className={isDark ? 'border-border' : 'border-gray-300'}>
                  View New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Why Choose Us
          </Badge>
          <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>The Blaze Experience</h2>
          <p className={`mt-2 ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>Premium shopping redefined with exceptional service</p>
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
              transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,114,36,0.15)] ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'} border shadow-md`}
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5">
                <feature.icon className="size-7 text-[#F57224]" />
              </div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{feature.title}</h3>
              <p className={`mt-1 text-sm ${isDark ? 'text-muted-foreground/80' : 'text-gray-600'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. STATS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative -mt-8 mx-auto max-w-7xl px-6 z-20"
      >
        <div className={`grid grid-cols-2 gap-4 rounded-2xl ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'} border shadow-md p-8 md:grid-cols-4`}>
          {stats.map((stat, idx) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <stat.icon className="size-5 text-[#F57224]" />
                <span className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{stat.value}</span>
              </div>
              <p className={`mt-1 text-xs ${isDark ? 'text-muted-foreground/80' : 'text-gray-500'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 10. BRAND MARQUEE */}
      <BrandMarquee />

      {/* 11. NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'} border shadow-lg`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#F57224]/5 via-transparent to-[#F57224]/3' : 'from-[#F57224]/5 via-transparent to-[#F57224]/3'}`} />
          <div className="relative">
            <Gift className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Subscribe & Save 15%</h2>
            <p className={`mx-auto mt-2 max-w-md ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
              Get exclusive deals, early access, and 15% off your first order
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className={`flex-1 rounded-xl border ${isDark ? 'border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/60' : 'border-gray-300 bg-gray-50 text-gray-800 placeholder:text-gray-400'} px-4 py-3 focus:border-[#F57224] focus:ring-2 focus:ring-[#F57224]/20 focus:outline-none transition-all duration-300`}
              />
              <Button type="submit" className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow whitespace-nowrap text-white">
                Subscribe <Sparkles className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  )
}