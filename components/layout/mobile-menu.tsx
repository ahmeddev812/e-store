"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useUIStore } from "@/store/ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  X, Home, Package, Grid, Info, Phone, Heart, ShoppingBag, LogOut, User,
} from "lucide-react"

const mobileLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/categories", label: "Categories", icon: Grid },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
]

function MobileMenu() {
  const pathname = usePathname()
  const router = useRouter()
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const stored = localStorage.getItem("user_session")
    if (stored) {
      try { setUser(JSON.parse(stored)) } catch {}
    }
  }, [isMobileMenuOpen])

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
    localStorage.removeItem("user_session")
    setUser(null)
    setMobileMenuOpen(false)
    router.push("/")
  }

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-white/20 bg-white/80 backdrop-blur-2xl shadow-2xl dark:bg-black/80"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <Link href="/" className="text-lg font-bold tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                <span className="bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">BLAZECART</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                <X className="size-5" />
              </Button>
            </div>

            <div className="border-b border-white/10 px-4 py-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F57224]/10 text-[#F57224]">
                    <User className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-white/40">{user.email}</p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-[#F57224] to-orange-500">Sign In</Button>
                  </Link>
                  <Link href="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full border-white/20">Register</Button>
                  </Link>
                </div>
              )}
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <div className="space-y-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      pathname === link.href
                        ? "bg-[#F57224]/10 text-[#F57224]"
                        : "text-white/70 hover:bg-white/10"
                    )}
                  >
                    <link.icon className="size-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
              <hr className="my-4 border-white/10" />
              <div className="space-y-1">
                <Link href="/wishlist" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="size-5" />
                  Wishlist
                </Link>
                <Link href="/cart" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                  <ShoppingBag className="size-5" />
                  Cart
                </Link>
              </div>
              {user && (
                <>
                  <hr className="my-4 border-white/10" />
                  <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/10">
                    <LogOut className="size-5" />
                    Sign Out
                  </button>
                </>
              )}
            </nav>

            <div className="border-t border-white/10 px-4 py-4">
              <p className="text-center text-xs text-white/30">
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