"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Clock,
  User,
  ArrowRight,
  Tag,
  BookOpen,
  Heart,
  MessageCircle,
  Calendar,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const featuredPost = {
  title: "Top 10 Fashion Trends 2026: What's Hot This Season",
  excerpt:
    "From bold color palettes to sustainable luxury, discover the top fashion trends dominating 2026. Our experts break down everything you need to elevate your wardrobe this year.",
  category: "Fashion",
  readTime: "8 min read",
  author: "Sarah Johnson",
  date: "May 10, 2026",
  comments: 24,
  likes: 142,
  image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop",
}

const blogPosts = [
  {
    title: "How to Style Premium Accessories Like a Pro",
    excerpt:
      "Learn the art of accessorizing with premium pieces. From statement watches to luxury bags, master the balance between elegance and personality.",
    category: "Accessories",
    readTime: "5 min read",
    author: "Michael Chen",
    date: "May 8, 2026",
    comments: 18,
    likes: 96,
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=500&fit=crop",
  },
  {
    title: "The Ultimate Shopping Guide for Premium Finds",
    excerpt:
      "Navigate the world of premium ecommerce with confidence. Our comprehensive guide covers authentication, pricing, and how to spot the best deals.",
    category: "Guides",
    readTime: "6 min read",
    author: "Emily Davis",
    date: "May 5, 2026",
    comments: 12,
    likes: 78,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
  },
  {
    title: "Behind the Brand: Our Story of Quality & Trust",
    excerpt:
      "Discover the journey behind our commitment to premium quality. How we built a brand centered on trust, curation, and exceptional customer experience.",
    category: "Brand",
    readTime: "7 min read",
    author: "David Kim",
    date: "May 2, 2026",
    comments: 31,
    likes: 203,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    title: "Seasonal Style Guide: Transitioning Your Wardrobe",
    excerpt:
      "Master the art of seasonal transitions with versatile premium pieces that take you from spring to summer effortlessly while maintaining your signature style.",
    category: "Style",
    readTime: "4 min read",
    author: "Sarah Johnson",
    date: "April 28, 2026",
    comments: 9,
    likes: 54,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop",
  },
]

const categories = [
  { name: "Fashion", count: 12 },
  { name: "Accessories", count: 8 },
  { name: "Guides", count: 15 },
  { name: "Brand", count: 6 },
  { name: "Style", count: 10 },
  { name: "Lifestyle", count: 7 },
  { name: "Trends", count: 9 },
  { name: "Reviews", count: 11 },
]

const tags = [
  "Premium",
  "Luxury",
  "Fashion",
  "Style Tips",
  "Accessories",
  "Shopping",
  "Quality",
  "Trends",
  "Wardrobe",
  "Brand Stories",
]

export default function BlogPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div ref={sectionRef} className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-background' : 'bg-gray-50'}`}>
      {/* Background - Theme Aware */}
      <div className={`fixed inset-0 ${isDark 
        ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' 
        : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full ${isDark ? 'bg-[#F57224]/10' : 'bg-[#F57224]/5'} blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/3'} blur-[100px]`} />
        <div className={`absolute top-1/4 right-1/4 size-48 rounded-full ${isDark ? 'bg-[#D4A853]/10' : 'bg-[#D4A853]/5'} blur-[100px] animate-pulse delay-500`} />
        <div className={`absolute bottom-1/4 left-1/4 size-40 rounded-full ${isDark ? 'bg-[#D4A853]/5' : 'bg-[#D4A853]/3'} blur-[80px] animate-pulse delay-1500`} />
      </div>

      {/* Back Navigation */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-muted-foreground hover:text-[#F57224]' : 'text-gray-500 hover:text-[#F57224]'} transition-colors group`}
          >
            <ArrowRight className="size-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative mx-auto max-w-7xl px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-2 mb-6"
            >
              <BookOpen className="size-4 text-[#F57224]" />
              <span className="text-sm font-medium text-[#F57224]">Our Journal</span>
            </motion.div>

            <h1 className={`text-5xl font-bold tracking-tight ${isDark ? 'text-foreground' : 'text-gray-800'} sm:text-6xl lg:text-7xl`}>
              Our{" "}
              <span className="relative inline-block">
                <span className={`absolute -inset-1 rounded-lg ${isDark ? 'bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20' : 'bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/10'} blur-xl`} />
                <span className="relative bg-gradient-to-r from-[#F57224] to-[#D4A853] bg-clip-text text-transparent">
                  Blog
                </span>
              </span>
            </h1>
            <p className={`mt-6 text-lg ${isDark ? 'text-muted-foreground' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Discover the latest in premium fashion, style guides, brand stories, and expert tips
              to elevate your shopping experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
            className="flex items-center justify-center"
          >
            <ArrowRight className={`size-5 rotate-90 ${isDark ? 'text-foreground/30' : 'text-gray-400'}`} />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="relative mx-auto max-w-7xl px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-[#F57224]/30">
              Featured Post
            </Badge>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,114,36,0.15)] group`}>
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden min-h-[300px] lg:min-h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/20 to-transparent z-10" />
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 text-white border-none text-xs">
                      {featuredPost.category}
                    </Badge>
                    <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                      <Clock className="size-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} mb-3 group-hover:text-[#F57224] transition-colors`}>
                    {featuredPost.title}
                  </h3>
                  <p className={`${isDark ? 'text-muted-foreground' : 'text-gray-600'} text-sm leading-relaxed mb-6`}>
                    {featuredPost.excerpt}
                  </p>
                  <div className={`flex flex-wrap items-center gap-4 text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'} mb-6`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="size-3" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="size-3" />
                      {featuredPost.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="size-3" />
                      {featuredPost.likes}
                    </span>
                  </div>
                  <Link href="#">
                    <Button className="w-fit bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-white group/btn">
                      Read Article
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Posts Grid + Sidebar */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Badge className="bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-[#F57224]/30 mb-6">
                Latest Articles
              </Badge>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-md'} overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)] group`}>
                    <div className={`relative h-48 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-[#F57224]/10 text-[#F57224] border-none text-[10px]">
                          {post.category}
                        </Badge>
                        <span className={`flex items-center gap-1 text-[10px] ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className={`font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} mb-2 group-hover:text-[#F57224] transition-colors line-clamp-2`}>
                        {post.title}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'} leading-relaxed mb-4 line-clamp-2`}>
                        {post.excerpt}
                      </p>
                      <div className={`flex flex-wrap items-center gap-3 text-[10px] ${isDark ? 'text-foreground/30' : 'text-gray-400'} mb-4`}>
                        <span className="flex items-center gap-1">
                          <User className="size-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="size-3" />
                          {post.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="size-3" />
                          {post.likes}
                        </span>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#F57224] hover:text-[#D4A853] transition-colors group/link"
                      >
                        Read More
                        <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-md'}`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="size-4 text-[#F57224]" />
                    <h3 className={`font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${isDark ? 'text-muted-foreground hover:bg-gradient-to-r hover:from-[#F57224]/20 hover:to-[#F57224]/5 hover:text-[#F57224]' : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#F57224]/10 hover:to-[#F57224]/5 hover:text-[#F57224]'} transition-all duration-300 group`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`size-1.5 rounded-full ${isDark ? 'bg-muted/20 group-hover:bg-[#F57224]' : 'bg-gray-300 group-hover:bg-[#F57224]'} transition-colors`} />
                          <span>{cat.name}</span>
                        </span>
                        <Badge className={`${isDark ? 'bg-muted/30 text-muted-foreground/70 group-hover:bg-[#F57224]/20 group-hover:text-[#F57224]' : 'bg-gray-100 text-gray-500 group-hover:bg-[#F57224]/20 group-hover:text-[#F57224]'} text-[9px] border-none transition-colors`}>
                          {cat.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-md'}`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="size-4 text-[#F57224]" />
                    <h3 className={`font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Popular Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium ${isDark ? 'bg-muted/50 text-muted-foreground border-border hover:bg-[#F57224]/20 hover:text-[#F57224] hover:border-[#F57224]/30' : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-[#F57224]/20 hover:text-[#F57224] hover:border-[#F57224]/30'} border transition-all duration-300 cursor-pointer`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Card */}
              <Card className={`${isDark ? 'glass-premium bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5' : 'bg-gradient-to-br from-[#F57224]/5 to-[#F57224]/3 border border-gray-200 shadow-md'}`}>
                <CardContent className="p-5 text-center">
                  <div className={`mb-4 inline-flex items-center justify-center rounded-xl ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} p-3`}>
                    <MessageCircle className="size-6 text-[#F57224]" />
                  </div>
                  <h3 className={`mb-2 font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Stay Updated</h3>
                  <p className={`mb-4 text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                    Get the latest articles and style tips delivered to your inbox.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white text-xs">
                    Subscribe Now
                    <ArrowRight className="ml-2 size-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Theme Aware */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} relative overflow-hidden rounded-3xl p-12 text-center`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#F57224]/10 via-transparent to-[#F57224]/5' : 'from-[#F57224]/5 via-transparent to-[#F57224]/3'}`} />
          <div className="relative">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${isDark ? 'bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5' : 'bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5'} mb-6`}>
              <Heart className="size-8 text-[#F57224]" />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Join Our Community</h2>
            <p className={`mt-2 ${isDark ? 'text-muted-foreground' : 'text-gray-600'} max-w-md mx-auto`}>
              Stay ahead of the trends. Subscribe to our newsletter for exclusive content and premium insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-white">
                  Shop Premium
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className={`${isDark ? 'border-border hover:border-[#F57224]/50' : 'border-gray-300 hover:border-[#F57224]/50'}`}>
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}