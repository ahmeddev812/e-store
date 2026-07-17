"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useUIStore } from "@/store/ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useUser, useClerk } from "@clerk/nextjs"
import {
  X, Home, Package, Grid, Info, Phone, Heart, ShoppingBag, LogOut, User,
  Sparkles, Flame, Award, Truck, Settings, MapPin,
} from "lucide-react"

const guestLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Shop", icon: Package },
  { href: "/categories", label: "Categories", icon: Grid },
  { href: "/new-arrivals", label: "New Arrivals", icon: Sparkles },
  { href: "/flash-sales", label: "Flash Sales", icon: Flame },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
]

const authLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Shop", icon: Package },
  { href: "/categories", label: "Categories", icon: Grid },
  { href: "/dashboard", label: "Dashboard", icon: Award },
]

function MobileMenu() {
  const pathname = usePathname()
  const router = useRouter()
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore()
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname, setMobileMenuOpen])

  const handleLogout = () => {
    setMobileMenuOpen(false)
    signOut({ redirectUrl: "/" })
  }

  const currentLinks = isSignedIn ? authLinks : guestLinks

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-50 ${isDark ? 'bg-background/60' : 'bg-black/30'} backdrop-blur-sm`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l ${
              isDark ? 'border-border bg-background/95' : 'border-gray-200 bg-white/95'
            } backdrop-blur-2xl shadow-2xl`}
          >
            <div className={`flex items-center justify-between border-b ${isDark ? 'border-border' : 'border-gray-200'} px-4 py-4`}>
              <Link href="/" className="text-lg font-bold tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                <span className="bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">BLAZECART</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                <X className={`size-5 ${isDark ? 'text-foreground' : 'text-gray-800'}`} />
              </Button>
            </div>

            <div className={`border-b ${isDark ? 'border-border' : 'border-gray-200'} px-4 py-4`}>
              {isSignedIn && user ? (
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F57224]/10 text-[#F57224]">
                    <User className="size-5" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDark ? 'text-foreground' : 'text-gray-800'}`}>
                      {user.fullName || user.firstName || "User"}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-muted-foreground' : 'text-gray-500'}`}>
                      {user.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 text-white">Sign In</Button>
                  </Link>
                  <Link href="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className={`w-full ${isDark ? 'border-border' : 'border-gray-300'}`}>Register</Button>
                  </Link>
                </div>
              )}
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <div className="space-y-1">
                {currentLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      pathname === link.href
                        ? "bg-[#F57224]/10 text-[#F57224]"
                        : isDark 
                          ? "text-foreground/70 hover:bg-accent" 
                          : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <link.icon className="size-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
              <hr className={`my-4 ${isDark ? 'border-border' : 'border-gray-200'}`} />
              <div className="space-y-1">
                {isSignedIn ? (
                  <>
                    <Link 
                      href="/wishlist" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Heart className="size-5" />
                      Wishlist
                    </Link>
                    <Link 
                      href="/order-tracking" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Truck className="size-5" />
                      Order Tracking
                    </Link>
                    <Link 
                      href="/profile-settings" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="size-5" />
                      Profile Settings
                    </Link>
                    <Link 
                      href="/help" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Info className="size-5" />
                      Support
                    </Link>
                    <hr className={`my-4 ${isDark ? 'border-border' : 'border-gray-200'}`} />
                    <button 
                      onClick={handleLogout} 
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-red-400 hover:bg-accent' : 'text-red-600 hover:bg-gray-100'
                      }`}
                    >
                      <LogOut className="size-5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/cart" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ShoppingBag className="size-5" />
                      Cart
                    </Link>
                    <Link 
                      href="/new-arrivals" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Sparkles className="size-5" />
                      New Arrivals
                    </Link>
                    <Link 
                      href="/flash-sales" 
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                        isDark ? 'text-foreground/70 hover:bg-accent' : 'text-gray-600 hover:bg-gray-100'
                      }`} 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Flame className="size-5" />
                      Flash Sales
                    </Link>
                  </>
                )}
              </div>
            </nav>

            <div className={`border-t ${isDark ? 'border-border' : 'border-gray-200'} px-4 py-4`}>
              <p className={`text-center text-xs ${isDark ? 'text-foreground/30' : 'text-gray-400'}`}>
                &copy; {new Date().getFullYear()} BlazeCart. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu