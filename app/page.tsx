"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  Clock, ArrowRight, Sparkles, TrendingUp, Star, Shield, 
  Truck, RotateCcw, Headphones, Zap, Gift, 
  Diamond, Flame, Eye, ShoppingBag, Heart, ChevronRight,
  ChevronLeft,
  Users, Award, Globe, Rocket, Coffee, Crown, Gem,
  Palette, Briefcase, Watch, Camera, Headset, Smartphone,
  Play, Pause, Volume2, VolumeX
} from "lucide-react"
import { products, categoriesWithCount, getFeaturedProducts, getNewArrivals, getFlashSaleProducts, getBestsellers } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { formatUSD, getDiscountPrice, truncate } from "@/lib/utils"

// ============================================
// 1. ULTIMATE PREMIUM HERO WITH VIDEO + 3D
// ============================================

const heroProducts = [
  {
    id: 1,
    title: "Premium Smart Watch",
    price: "$299",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Luxury Leather Bag",
    price: "$149",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
    badge: "New Arrival",
  },
  {
    id: 3,
    title: "Premium Headphones",
    price: "$199",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    badge: "Top Rated",
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    price: "$89",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    badge: "Sale",
  },
]

function PremiumHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const heroRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % heroProducts.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const nextSlide = () => {
    setIsDragging(true)
    setCurrentIndex((prev) => (prev + 1) % heroProducts.length)
    setTimeout(() => setIsDragging(false), 300)
  }

  const prevSlide = () => {
    setIsDragging(true)
    setCurrentIndex((prev) => (prev - 1 + heroProducts.length) % heroProducts.length)
    setTimeout(() => setIsDragging(false), 300)
  }

  return (
    <div ref={heroRef} className="relative min-h-[90vh] overflow-hidden">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' 
          : 'bg-gradient-to-br from-gray-100 via-background to-white'
      }`}>
        <div className={`absolute -top-40 -right-40 size-[500px] rounded-full ${isDark ? 'bg-[#F57224]/15' : 'bg-[#F57224]/8'} blur-[150px] animate-pulse`} />
        <div className={`absolute -bottom-40 -left-40 size-[400px] rounded-full ${isDark ? 'bg-[#D4A853]/10' : 'bg-[#D4A853]/5'} blur-[120px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/3'} blur-[100px]`} />
      </div>

      <div
        className={`absolute size-[600px] rounded-full ${isDark ? 'bg-[#F57224]/10' : 'bg-[#F57224]/5'} blur-[150px] transition-transform duration-700 ease-out pointer-events-none`}
        style={{
          left: `${mouseX.get() + 50}%`,
          top: `${mouseY.get() + 50}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBvbHlsaW5lIHBvaW50cz0iNDAgMCA4MCA0MCA0MCA4MCAwIDQwIi8+PC9nPjwvZz48L3N2Zz4=')] ${isDark ? 'opacity-20' : 'opacity-10'}`} />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute size-1 rounded-full ${isDark ? 'bg-[#D4A853]/30' : 'bg-[#D4A853]/20'}`}
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.3 + Math.random() * 0.5
            }}
            animate={{
              y: ["0%", "-100%", "0%"],
              x: ["0%", `${(Math.random() - 0.5) * 50}%`, "0%"],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="rounded-full bg-background/10 backdrop-blur-xl p-2.5 text-foreground hover:scale-110 transition-all duration-300"
          aria-label={showVideo ? "Hide video showcase" : "Show video showcase"}
        >
          {showVideo ? <Volume2 className="size-4" /> : <Play className="size-4" />}
        </button>
      </div>

      {showVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay={isVideoPlaying}
            loop
            muted={isMuted}
            playsInline
            className="h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60" />
          
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="rounded-full bg-background/20 backdrop-blur-xl p-2.5 text-foreground hover:bg-background/30 transition-all duration-300"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="rounded-full bg-background/20 backdrop-blur-xl p-2.5 text-foreground hover:bg-background/30 transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/10 px-4 py-2 backdrop-blur-sm"
            >
              <Crown className="size-4 text-[#D4A853]" />
              <span className="text-xs font-medium tracking-wider text-[#D4A853]">
                PREMIUM COLLECTION 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Elevate Your
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/20 to-[#D4A853]/10 blur-xl" />
                <span className="relative bg-gradient-to-r from-[#F57224] via-[#D4A853] to-[#F57224] bg-clip-text text-transparent animate-gradient-shift">
                  Shopping Experience
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Discover curated luxury products with unprecedented quality.
              Handpicked for those who appreciate the finer things in life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products">
                <Button size="xl" className="group bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
                  <Sparkles className="mr-2 size-4" />
                  Explore Collection
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => setShowVideo(!showVideo)}
              >
                {showVideo ? "Hide Showcase" : "Watch Showcase"}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-6 pt-6 border-t border-border"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-background bg-gradient-to-r from-[#D4A853] to-[#F57224]"
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
                <p className="text-xs text-muted-foreground/80">Trusted by 50,000+ customers</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transition: "transform 0.1s ease-out",
              }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className={`absolute -inset-4 rounded-full ${isDark ? 'bg-gradient-to-r from-[#F57224]/20 via-[#D4A853]/15 to-[#F57224]/10' : 'bg-gradient-to-r from-[#F57224]/10 via-[#D4A853]/5 to-[#F57224]/5'} blur-3xl`} />
                
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative rounded-2xl ${isDark ? 'glass-premium' : 'bg-card border border-border shadow-2xl'} p-2`}
                >
                  <div className="relative overflow-hidden rounded-xl" role="group" aria-label={`Product: ${heroProducts[currentIndex].title}`}>
                    <Image
                      src={heroProducts[currentIndex].image}
                      alt={heroProducts[currentIndex].title}
                      width={500}
                      height={500}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
                    
                    <div className="absolute left-4 top-4 space-y-2">
                      <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none text-white shadow-glow">
                        {heroProducts[currentIndex].badge}
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-xs text-[#D4A853] uppercase tracking-wider">
                        {heroProducts[currentIndex].category}
                      </p>
                      <h3 className="text-xl font-bold text-white">
                        {heroProducts[currentIndex].title}
                      </h3>
                      <p className="text-2xl font-bold text-[#F57224]">
                        {heroProducts[currentIndex].price}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <button
                  onClick={prevSlide}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full ${isDark ? 'bg-background/20 backdrop-blur-xl' : 'bg-background/30 backdrop-blur-xl'} p-3 text-foreground hover:bg-background/40 transition-all duration-300 hover:scale-110`}
                  aria-label="Previous product"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full ${isDark ? 'bg-background/20 backdrop-blur-xl' : 'bg-background/30 backdrop-blur-xl'} p-3 text-foreground hover:bg-background/40 transition-all duration-300 hover:scale-110`}
                  aria-label="Next product"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Product selection">
                {heroProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#F57224]"
                        : `w-2 ${isDark ? 'bg-foreground/20 hover:bg-foreground/40' : 'bg-foreground/20 hover:bg-foreground/40'}`
                    }`}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Product ${index + 1}`}
                  />
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-6 -right-6 rotate-12 ${isDark ? 'glass-premium' : 'bg-card border border-border shadow-xl'} rounded-xl p-3 hidden sm:block`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                  alt="Headphones product"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <p className="mt-1 text-center text-[10px] text-muted-foreground">-20% OFF</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                className={`absolute -bottom-6 -left-6 -rotate-12 ${isDark ? 'glass-premium' : 'bg-card border border-border shadow-xl'} rounded-xl p-3 hidden sm:block`}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop"
                  alt="Nike shoe product"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <p className="mt-1 text-center text-[10px] text-muted-foreground">Bestseller</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/40">
            Scroll to Explore
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/20 backdrop-blur-sm">
            <ChevronRight className="size-4 rotate-90 text-muted-foreground/50" />
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
            <div className="relative overflow-hidden rounded-xl p-2.5 min-w-[60px] backdrop-blur-sm border border-border bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5">
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
          
          <Card variant={isDark ? "dark" : "bordered"} className="overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#F57224]/10">
            <div className="absolute left-3 top-3 z-20 flex gap-2">
              {product.discountPercentage > 0 && (
                <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none shadow-glow text-[10px] text-white">
                  -{product.discountPercentage}%
                </Badge>
              )}
              {product.rating >= 4.7 && (
                <Badge variant="warning" size="sm">
                  <Star className="mr-1 size-2 fill-current" /> Bestseller
                </Badge>
              )}
            </div>
            
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
              className={`absolute right-3 top-3 z-20 rounded-full p-2 transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              } hover:bg-[#F57224] hover:text-white shadow-md bg-background/70 backdrop-blur-xl`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`size-4 transition-all duration-300 ${isWishlisted ? "fill-[#F57224] text-[#F57224] scale-110" : "text-foreground/70"}`} />
            </button>

            <div className="relative overflow-hidden bg-muted">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Button size="sm" variant="secondary" className="bg-background/90 backdrop-blur-xl text-foreground hover:bg-[#F57224] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border-0">
                  <Eye className="mr-2 size-3" /> Quick View
                </Button>
              </div>
            </div>

            <CardContent className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{product.categoryName}</span>
                <Rating value={product.rating} size="sm" readonly />
              </div>
              <h3 className="text-base font-semibold line-clamp-2 text-foreground transition-colors duration-300 group-hover:text-[#F57224]">
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
        <Card variant={isDark ? "dark" : "bordered"} interactive className="p-6 rounded-2xl shadow-md hover:shadow-[0_0_40px_rgba(245,114,36,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F57224]/0 to-[#F57224]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="size-6 text-[#F57224]" />
              </div>
              <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[#F57224]">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground/70">{category._count.products} Products</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#F57224] group-hover:text-white group-hover:scale-110 bg-muted/50 text-muted-foreground">
              <ArrowRight className="size-4" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

// ============================================
// 5. BRAND MARQUEE
// ============================================

function BrandMarquee() {
  const brands = [
    "Apple", "Samsung", "Nike", "Adidas", "Gucci", 
    "Louis Vuitton", "Rolex", "Sony", "Dior", "Chanel",
    "Prada", "Versace", "Armani", "Burberry", "Cartier"
  ]

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F57224]/5 to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={idx}
            className="mx-10 flex items-center gap-2 text-base font-semibold text-muted-foreground/60"
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
    <div>
      <PremiumHero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Shop by Category
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">Featured Categories</h2>
          <p className="mt-2 text-muted-foreground">Browse through our curated collections</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesWithCount.slice(0, 4).map((category, index) => (
            <LuxuryCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#F57224]/10 via-[#F57224]/5 to-transparent border border-border p-8">
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center bg-gradient-to-r from-muted/30 via-muted/10 to-background border border-border"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="absolute -right-20 -top-20 size-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-[#D4A853]/20 blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4A853]/20 to-[#F57224]/10 p-4 mb-6">
              <Crown className="size-10 text-[#D4A853]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Collection</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Discover our exclusive premium collection, handpicked for the discerning shopper
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button size="xl" className="bg-gradient-to-r from-[#D4A853] to-[#F57224] shadow-glow text-white">
                  Shop Now <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/new-arrivals">
                <Button variant="outline" size="xl">
                  View New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

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
              transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,114,36,0.15)] bg-card border border-border shadow-md"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5">
                <feature.icon className="size-7 text-[#F57224]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative -mt-8 mx-auto max-w-7xl px-6 z-20"
      >
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card border border-border shadow-md p-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <stat.icon className="size-5 text-[#F57224]" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <BrandMarquee />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center bg-card border border-border shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/5 via-transparent to-[#F57224]/3" />
          <div className="relative">
            <Gift className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Subscribe & Save 15%</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Get exclusive deals, early access, and 15% off your first order
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/60 px-4 py-3 focus:border-[#F57224] focus:ring-2 focus:ring-[#F57224]/20 focus:outline-none transition-all duration-300"
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
