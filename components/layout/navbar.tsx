"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { 
  ShoppingCart, Heart, Search, User, Menu, X, Moon, Sun, 
  ChevronDown, Sparkles, Crown, Gift, Zap, Tag, 
  ArrowRight, Home, Grid, Info, Phone, 
  ShoppingBag, TrendingUp, Star, Clock, Flame, Diamond,
  Award, Shield as ShieldIcon, Truck as TruckIcon,
  RotateCcw as RotateIcon, Headphones as HeadphoneIcon
} from "lucide-react"
import { useCartStore } from "@/store/cart"
import { useWishlistStore } from "@/store/wishlist"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const navLinks = [
  { name: "Home", href: "/", icon: Home, luxury: true },
  { name: "Products", href: "/products", icon: Diamond, luxury: true },
  { name: "Categories", href: "/categories", icon: Grid, luxury: false },
  { name: "About", href: "/about", icon: Sparkles, luxury: false },
  { name: "Contact", href: "/contact", icon: Award, luxury: false },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const { theme, setTheme } = useTheme()
  const itemCount = useCartStore((s) => s.getItemCount())
  const wishlistCount = useWishlistStore((s) => s.items.length)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value.length > 1) {
      const suggestions = ["iPhone", "Laptop", "Shoes", "Watch", "Headphones", "Bag", "Dress", "Sneakers"]
        .filter(item => item.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5)
      setSearchSuggestions(suggestions)
    } else {
      setSearchSuggestions([])
    }
  }

  return (
    <>
      {/* Ultra Luxury Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative hidden md:block overflow-hidden bg-gradient-to-r from-[#1a1a2e] via-[#2d1b2e] to-[#1a1a2e] border-b border-[#D4A853]/20"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative flex items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Crown className="size-3 text-[#D4A853]" />
              <span className="text-[#D4A853] font-medium">Elite Member Benefits</span>
            </div>
            <div className="flex items-center gap-1">
              <TruckIcon className="size-3 text-white/60" />
              <span className="text-white/60">Free Global Shipping</span>
            </div>
            <div className="flex items-center gap-1">
              <RotateIcon className="size-3 text-white/60" />
              <span className="text-white/60">30-Day Returns</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ShieldIcon className="size-3 text-white/60" />
              <span className="text-white/60">100% Authentic</span>
            </div>
            <div className="flex items-center gap-1">
              <HeadphoneIcon className="size-3 text-white/60" />
              <span className="text-white/60">24/7 Concierge</span>
            </div>
            <div className="flex items-center gap-1 bg-[#D4A853]/20 px-3 py-1 rounded-full">
              <Sparkles className="size-3 text-[#D4A853]" />
              <span className="text-[#D4A853] font-medium">VIP Access</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-premium shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-b border-[#D4A853]/20" : "glass-navbar"
      }`}>
        <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo - BlazeCart */}
            <div className="flex items-center gap-12">
              <Link href="/" className="group relative flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#F57224] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative rounded-xl bg-gradient-to-br from-[#D4A853]/20 to-[#F57224]/10 p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                      <defs>
                        <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#F57224" />
                          <stop offset="60%" stopColor="#F97316" />
                          <stop offset="100%" stopColor="#D4A853" />
                        </linearGradient>
                      </defs>
                      <path d="M16 2C16 2 8 10 8 17C8 21.4183 11.5817 25 16 25C20.4183 25 24 21.4183 24 17C24 10 16 2 16 2Z" fill="url(#flameGrad)" />
                      <path d="M16 8C16 8 12 13 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13 16 8 16 8Z" fill="white" fillOpacity="0.4" />
                      <path d="M14 20C14 22 15.5 24 16 26C16.5 24 18 22 18 20H14Z" fill="#D4A853" fillOpacity="0.6" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-[#D4A853] via-[#F57224] to-[#D4A853] bg-clip-text text-transparent lg:text-2xl animate-gradient-shift">
                    BLAZECART
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#D4A853]/60 hidden lg:block">IGNITE YOUR STYLE</span>
                </div>
                <Badge className="absolute -right-10 -top-2 bg-gradient-to-r from-[#D4A853] to-[#F57224] text-white border-none text-[8px] px-2 hidden lg:block">
                  PREMIUM
                </Badge>
              </Link>

              {/* Desktop Navigation - Ultra Luxury */}
              <div className="hidden items-center gap-2 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-500 ${
                      pathname === link.href
                        ? "text-[#D4A853]"
                        : "text-white/70 hover:text-[#D4A853]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <link.icon className={`size-3.5 transition-all duration-300 group-hover:scale-110 ${pathname === link.href ? "text-[#D4A853]" : ""}`} />
                      {link.name}
                    </span>

                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A853] to-[#F57224]"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Ultra Luxury Icons */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/20 hover:text-[#D4A853]"
              >
                <Search className="size-4 text-white/70 group-hover:text-[#D4A853]" />
              </motion.button>

              {/* Theme Toggle - Luxury */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/20"
                >
                  {theme === "dark" ? <Sun className="size-4 text-white/70" /> : <Moon className="size-4 text-white/70" />}
                </motion.button>
              )}

              {/* Wishlist - Luxury with Animation */}
              <Link href="/wishlist" className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/20">
                <Heart className="size-4 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D4A853]" />
                <AnimatePresence>
                  {wishlistCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] to-[#F57224] text-[9px] font-bold text-white shadow-glow"
                    >
                      {wishlistCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Cart - Luxury with Animation */}
              <Link href="/cart" className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/20">
                <ShoppingCart className="size-4 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D4A853]" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] to-[#F57224] text-[9px] font-bold text-white shadow-glow"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* User Dashboard - Luxury Avatar */}
              <Link href="/dashboard" className="hidden rounded-full p-2 transition-all duration-300 hover:bg-[#D4A853]/20 sm:block">
                <div className="relative">
                  <User className="size-4 text-white/70" />
                  <div className="absolute -bottom-1 -right-1 size-2 rounded-full bg-emerald-500 ring-2 ring-black" />
                </div>
              </Link>

              {/* Mobile Menu Button - Luxury */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/20 lg:hidden"
              >
                {mobileOpen ? <X className="size-4 text-white/70" /> : <Menu className="size-4 text-white/70" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown - Luxury */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#D4A853]/20 bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-2xl"
            >
              <form onSubmit={handleSearch} className="mx-auto max-w-[100rem] px-6 py-6 sm:px-8 lg:px-10">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Search className="size-5 text-[#D4A853]" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full border-[#D4A853]/30 bg-white/5 pl-12 pr-4 py-6 text-white placeholder:text-white/40 focus:border-[#D4A853] focus:ring-[#D4A853]/20 text-lg rounded-xl"
                    autoFocus
                  />
                  {searchSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-xl glass-premium border border-[#D4A853]/20">
                      {searchSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            setSearchQuery(suggestion)
                            router.push(`/search?q=${encodeURIComponent(suggestion)}`)
                            setSearchOpen(false)
                          }}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:bg-[#D4A853]/20 hover:text-[#D4A853]"
                        >
                          <Search className="size-3" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu - Luxury */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#D4A853]/20 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-2xl lg:hidden"
            >
              <div className="space-y-2 px-6 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-[#D4A853]/20 text-[#D4A853]"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <link.icon className="size-5" />
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/dashboard"
                  className="mt-4 flex items-center gap-4 rounded-xl px-4 py-4 text-base text-white/70 transition-all duration-300 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="size-5" />
                  My Account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

// Helper components
function Truck(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><path d="M5 21a2 2 0 100-4 2 2 0 000 4z"/><path d="M18 21a2 2 0 100-4 2 2 0 000 4z"/></svg> }
function RotateCcw(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12a9 9 0 109-9"/><path d="M3 5v4h4"/></svg> }
function Shield(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> }
function Headphones(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg> }