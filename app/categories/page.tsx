"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "next-themes"
import { categoriesWithCount } from "@/data/products"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { 
  ShoppingBag, ArrowRight, Sparkles, TrendingUp, 
  Zap, Crown, Flame, Gem, Watch, Shirt, Home, 
  Smartphone, Laptop, Gamepad, Gift, Heart, Star
} from "lucide-react"

// Category Icons Mapping
const categoryIcons: Record<string, any> = {
  electronics: Smartphone,
  fashion: Shirt,
  "home-garden": Home,
  beauty: Gem,
  sports: Gamepad,
  automotive: Zap,
  groceries: Gift,
  books: Star,
  "toys-games": Gamepad,
  jewelry: Gem,
  "pet-supplies": Heart,
  office: Laptop,
}

// Category Colors
const categoryColors: Record<string, string> = {
  electronics: "from-cyan-500 to-blue-500",
  fashion: "from-pink-500 to-rose-500",
  "home-garden": "from-emerald-500 to-teal-500",
  beauty: "from-purple-500 to-pink-500",
  sports: "from-orange-500 to-red-500",
  automotive: "from-slate-500 to-gray-500",
  groceries: "from-green-500 to-emerald-500",
  books: "from-amber-500 to-yellow-500",
  "toys-games": "from-purple-500 to-pink-500",
  jewelry: "from-yellow-500 to-amber-500",
  "pet-supplies": "from-green-500 to-emerald-500",
  office: "from-blue-500 to-cyan-500",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

// Featured Categories for Hero Section
const featuredCategories = categoriesWithCount.slice(0, 8)

export default function CategoriesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-background' : 'bg-gray-50'}`}>
      {/* Premium Background - Theme Aware */}
      <div className={`fixed inset-0 ${isDark 
        ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' 
        : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full ${isDark ? 'bg-[#F57224]/10' : 'bg-[#F57224]/5'} blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/3'} blur-[100px]`} />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-12 pb-20">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative mx-auto max-w-7xl px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-2 mb-6"
          >
            <Sparkles className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Shop by Category</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} sm:text-5xl lg:text-6xl`}
          >
            Explore Our{" "}
            <span className="relative inline-block">
              <span className={`absolute -inset-1 rounded-lg ${isDark ? 'bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20' : 'bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/10'} blur-xl`} />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Collections
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mx-auto mt-4 max-w-2xl ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}
          >
            Discover thousands of products across our curated categories. 
            Find exactly what you're looking for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"
          >
            <Badge variant="outline" className={`${isDark ? 'border-border bg-muted/50' : 'border-gray-300 bg-gray-100'} text-muted-foreground`}>
              {categoriesWithCount.length} Categories
            </Badge>
            <Badge variant="outline" className={`${isDark ? 'border-border bg-muted/50' : 'border-gray-300 bg-gray-100'} text-muted-foreground`}>
              {categoriesWithCount.reduce((sum, cat) => sum + cat._count.products, 0)}+ Products
            </Badge>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Categories Showcase */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Featured Categories</h2>
          <p className={isDark ? 'text-muted-foreground' : 'text-gray-600'}>Most popular collections</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || ShoppingBag
            const gradient = categoryColors[cat.slug] || "from-[#F57224] to-orange-500"
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/products?category=${cat.slug}`}>
                  <div className={`group relative overflow-hidden rounded-2xl ${isDark ? 'bg-gradient-to-br from-accent/5 to-transparent' : 'bg-white border border-gray-200 shadow-sm'} p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:${isDark ? 'opacity-10' : 'opacity-5'}`} />
                    
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5">
                          <Icon className="size-6 text-[#F57224]" />
                        </div>
                        <h3 className={`text-xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} group-hover:text-[#F57224] transition-colors`}>
                          {cat.name}
                        </h3>
                        <p className={`mt-1 text-sm ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>{cat._count.products} Products</p>
                      </div>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark ? 'bg-muted/50' : 'bg-gray-100'} transition-all duration-300 group-hover:bg-[#F57224] group-hover:text-white group-hover:scale-110`}>
                        <ArrowRight className={`size-4 ${isDark ? 'text-muted-foreground' : 'text-gray-500'} group-hover:text-white`} />
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#F57224]/10 to-transparent blur-2xl" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>All Categories</h2>
            <p className={isDark ? 'text-muted-foreground' : 'text-gray-600'}>Browse our complete collection</p>
          </div>
          <div className={`flex items-center gap-1 text-sm ${isDark ? 'text-foreground/30' : 'text-gray-400'}`}>
            <TrendingUp className="size-3" />
            <span>{categoriesWithCount.length} available</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {categoriesWithCount.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || ShoppingBag
            const gradient = categoryColors[cat.slug] || "from-[#F57224] to-orange-500"
            
            return (
              <motion.div key={cat.id} variants={itemVariants}>
                <Link href={`/products?category=${cat.slug}`}>
                  <Card className={`group relative overflow-hidden transition-all duration-500 hover:border-[#F57224]/30 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,114,36,0.2)] ${isDark ? 'glass-premium' : 'bg-white border-gray-200 shadow-sm'}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        width={400}
                        height={300}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Category Icon Overlay */}
                      <div className={`absolute left-3 top-3 rounded-lg ${isDark ? 'bg-background/70' : 'bg-white/90'} p-1.5 backdrop-blur-sm`}>
                        <Icon className="size-4 text-[#F57224]" />
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#F57224] transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-white/70">{cat._count.products} Products</p>
                      </div>

                      {/* Hover Badge */}
                      <Badge
                        className="absolute right-3 top-3 bg-gradient-to-r from-[#F57224] to-orange-500 border-none text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
                        size="sm"
                      >
                        Shop Now
                      </Badge>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* CTA Banner - Theme Aware */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} relative overflow-hidden rounded-3xl p-12 text-center`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#F57224]/10 via-transparent to-[#F57224]/5' : 'from-[#F57224]/5 via-transparent to-[#F57224]/3'}`} />
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F57224]/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#F57224]/10 blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3 mb-6">
              <Gift className="size-10 text-[#F57224]" />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Can't Find What You're Looking For?</h2>
            <p className={`mt-2 ${isDark ? 'text-muted-foreground' : 'text-gray-600'} max-w-md mx-auto`}>
              Browse all products or contact our support team for personalized assistance
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
                  Browse All Products
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className={`${isDark ? 'border-border hover:border-[#F57224]/50' : 'border-gray-300 hover:border-[#F57224]/50'}`}>
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll Indicator - Theme Aware */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-8 right-8 z-50 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex cursor-pointer flex-col items-center gap-1"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className={`text-[10px] ${isDark ? 'text-foreground/30' : 'text-gray-400'}`}>Scroll</span>
          <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${isDark ? 'border-border bg-muted/50' : 'border-gray-200 bg-white/80'} backdrop-blur-sm`}>
            <ArrowRight className={`size-3 rotate-90 ${isDark ? 'text-muted-foreground/70' : 'text-gray-400'}`} />
          </div>
        </motion.div>
      </motion.div>

      
    </div>
  )
}