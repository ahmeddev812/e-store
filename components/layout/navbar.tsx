"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  ShoppingCart, Heart, Search, User, Menu, X, Moon, Sun, 
  Sparkles, Crown, Home, Grid, Phone, 
  ShoppingBag, Flame, Diamond,
  Award, Shield as ShieldIcon, Truck as TruckIcon,
  RotateCcw as RotateIcon, Headphones as HeadphoneIcon
} from "lucide-react"
import { useCartStore } from "@/store/cart"
import { useWishlistStore } from "@/store/wishlist"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useUser, useClerk, SignInButton, UserButton } from "@clerk/nextjs"
import { useUIStore } from "@/store/ui"
import { useMounted } from "@/hooks/use-mounted"

const guestLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Shop", href: "/products", icon: Diamond },
  { name: "Categories", href: "/categories", icon: Grid },
  { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
  { name: "Flash Sales", href: "/flash-sales", icon: Flame },
  { name: "About", href: "/about", icon: Crown },
  { name: "Contact", href: "/contact", icon: Phone },
]

const authLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Shop", href: "/products", icon: Diamond },
  { name: "Categories", href: "/categories", icon: Grid },
  { name: "Dashboard", href: "/dashboard", icon: Award },
]

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const mounted = useMounted()
  const [scrolled, setScrolled] = useState(false)
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const { theme, setTheme } = useTheme()
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()
  const { setMobileMenuOpen } = useUIStore()
  const itemCount = useCartStore((s) => s.getItemCount())
  const wishlistCount = useWishlistStore((s) => s.items.length)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentLinks = isSignedIn ? authLinks : guestLinks

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
      {/* Ultra Luxury Top Bar - Theme Aware */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative hidden md:block overflow-hidden border-b bg-muted/50 border-border"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-15" />
        <div className="relative flex items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Crown className="size-3 text-[#D4A853]" />
              <span className="text-[#D4A853] font-medium">Elite Member Benefits</span>
            </div>
            <div className="flex items-center gap-1">
              <TruckIcon className={`size-3 text-muted-foreground`} />
              <span className='text-muted-foreground'>Free Global Shipping</span>
            </div>
            <div className="flex items-center gap-1">
              <RotateIcon className={`size-3 text-muted-foreground`} />
              <span className='text-muted-foreground'>30-Day Returns</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ShieldIcon className={`size-3 text-muted-foreground`} />
              <span className='text-muted-foreground'>100% Authentic</span>
            </div>
            <div className="flex items-center gap-1">
              <HeadphoneIcon className={`size-3 text-muted-foreground`} />
              <span className='text-muted-foreground'>24/7 Concierge</span>
            </div>
            <div className="flex items-center gap-1 bg-[#D4A853]/15 px-3 py-1 rounded-full">
              <Sparkles className="size-3 text-[#D4A853]" />
              <span className="text-[#D4A853] font-medium">VIP Access</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar - Theme Aware */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-premium shadow-lg border-b border-[#D4A853]/20" 
          : "glass-navbar"
      }`} role="navigation" aria-label="Main navigation">
        <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-12">
              <Link href="/" className="group relative flex items-center gap-3" aria-label="BlazeCart Home">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#F57224] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative rounded-xl bg-gradient-to-br from-[#D4A853]/15 to-[#F57224]/8 p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6" aria-hidden="true">
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
                  <span className={`text-xl font-bold tracking-wider bg-gradient-to-r from-[#D4A853] via-[#F57224] to-[#D4A853] bg-clip-text text-transparent lg:text-2xl animate-gradient-shift`}>
                    BLAZECART
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#D4A853]/50 hidden lg:block">IGNITE YOUR STYLE</span>
                </div>
                <Badge className="absolute -right-10 -top-2 bg-gradient-to-r from-[#D4A853] to-[#F57224] text-white border-none text-[8px] px-2 hidden lg:block">
                  PREMIUM
                </Badge>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-2 lg:flex">
                {currentLinks.map((link) => {
                  const active = isActive(link.href, pathname)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-500 ${
                        active
                          ? "text-[#D4A853]"
                          : "text-muted-foreground hover:text-[#D4A853]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="flex items-center gap-2">
                        <link.icon className={`size-3.5 transition-all duration-300 group-hover:scale-110 ${active ? "text-[#D4A853]" : ""}`} />
                        {link.name}
                      </span>
                      {active && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A853] to-[#F57224]"
                        />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/15 hover:text-[#D4A853]"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <Search className="size-4 text-foreground/70" />
              </motion.button>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/15"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? 
                    <Sun className="size-4 text-foreground/70" /> : 
                    <Moon className="size-4 text-foreground/70" />
                  }
                </motion.button>
              )}

              {/* Wishlist - only for authenticated users */}
              {isSignedIn ? (
                <Link
                  href="/wishlist"
                  className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/15"
                  aria-label={`Wishlist (${wishlistCount} items)`}
                >
                  <Heart className={`size-4 text-foreground/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D4A853]`} />
                  {mounted && wishlistCount > 0 && (
                    <span
                      className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] to-[#F57224] text-[9px] font-bold text-white shadow-glow"
                      aria-hidden="true"
                    >
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              ) : null}

              {/* Cart */}
              <Link
                href="/cart"
                className="group relative rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/15"
                aria-label={`Shopping cart (${itemCount} items)`}
              >
                <ShoppingCart className={`size-4 text-foreground/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D4A853]`} />
                {mounted && itemCount > 0 && (
                  <span
                    className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A853] to-[#F57224] text-[9px] font-bold text-white shadow-glow"
                    aria-hidden="true"
                  >
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* User Section */}
              {isSignedIn ? (
                <div className="flex items-center gap-2">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "size-7 border-2 border-[#F57224]/30",
                        userButtonTrigger: "focus:shadow-none",
                        userButtonPopoverCard: "shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-border",
                        userButtonPopoverActionButton: "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                        userButtonPopoverActionButtonText: "text-sm",
                        userButtonPopoverFooter: "hidden",
                      },
                    }}
                  >
                    <UserButton.MenuItems>
                      <UserButton.Link
                        label="Dashboard"
                        labelIcon={<Award className="size-4" />}
                        href="/dashboard"
                      />
                      <UserButton.Link
                        label="My Orders"
                        labelIcon={<ShoppingBag className="size-4" />}
                        href="/dashboard"
                      />
                      <UserButton.Link
                        label="Wishlist"
                        labelIcon={<Heart className="size-4" />}
                        href="/wishlist"
                      />
                      <UserButton.Link
                        label="Order Tracking"
                        labelIcon={<MapPinIcon className="size-4" />}
                        href="/order-tracking"
                      />
                      <UserButton.Link
                        label="Saved Addresses"
                        labelIcon={<MapPinIcon className="size-4" />}
                        href="/profile-settings"
                      />
                      <UserButton.Link
                        label="Profile Settings"
                        labelIcon={<SettingsIcon className="size-4" />}
                        href="/profile-settings"
                      />
                      <UserButton.Link
                        label="Payment Methods"
                        labelIcon={<CreditCardIcon className="size-4" />}
                        href="/profile-settings"
                      />
                      <UserButton.Link
                        label="Support"
                        labelIcon={<HeadphoneIcon className="size-4" />}
                        href="/help"
                      />
                      <UserButton.Action
                        label="Logout"
                        labelIcon={<LogOutIcon className="size-4" />}
                        onClick={() => signOut({ redirectUrl: "/" })}
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className={`rounded-full p-2 transition-all duration-300 hover:bg-[#D4A853]/15`} aria-label="Sign in">
                    <User className={`size-4 text-foreground/70`} />
                  </button>
                </SignInButton>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(true)}
                className={`rounded-full p-2.5 transition-all duration-300 hover:bg-[#D4A853]/15 lg:hidden`}
                aria-label="Open mobile menu"
              >
                <Menu className={`size-4 text-foreground/70`} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown - Theme Aware */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 300 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              className="overflow-hidden border-t border-border bg-gradient-to-b from-background/95 to-background/85 backdrop-blur-2xl"
            >
              <form onSubmit={handleSearch} className="mx-auto max-w-[100rem] px-6 py-6 sm:px-8 lg:px-10" role="search">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Search className="size-5 text-[#D4A853]" />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full border-border bg-muted/50 text-foreground placeholder:text-muted-foreground/70 pl-12 pr-4 py-6 focus:border-[#D4A853] focus:ring-[#D4A853]/20 text-lg rounded-xl"
                    autoFocus
                    aria-label="Search products"
                  />
                  {searchSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-xl glass-premium border-border shadow-lg" role="listbox">
                      {searchSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            setSearchQuery(suggestion)
                            router.push(`/search?q=${encodeURIComponent(suggestion)}`)
                            setSearchOpen(false)
                          }}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm transition-all duration-300 text-foreground/70 hover:bg-[#D4A853]/15 hover:text-[#D4A853]"
                          role="option"
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
      </nav>
    </>
  )
}

function MapPinIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
}

function SettingsIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
}

function CreditCardIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
}

function LogOutIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
}