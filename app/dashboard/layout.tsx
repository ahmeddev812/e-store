"use client"

import { usePathname, useRouter } from "next/navigation"
import { useUser, useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  MapPin,
  MapPinHouse,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard#orders", label: "Orders", icon: ShoppingBag },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/order-tracking", label: "Tracking", icon: MapPin },
  { href: "/profile-settings", label: "Addresses", icon: MapPinHouse },
  { href: "/profile-settings", label: "Payments", icon: CreditCard },
  { href: "/profile-settings", label: "Settings", icon: Settings },
  { href: "/help", label: "Support", icon: HelpCircle },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { isLoaded, isSignedIn } = useUser()
  const { signOut } = useClerk()

  if (!isLoaded) return null
  if (!isSignedIn) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <div className="mx-auto flex max-w-7xl gap-6 p-4 md:p-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <nav className="sticky top-24 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-[#F57224]/10 text-[#F57224] shadow-[0_0_20px_rgba(245,114,36,0.1)]"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon className={cn("size-4", isActive && "text-[#F57224]")} />
                  <span>{link.label}</span>
                  {isActive && <ChevronRight className="ml-auto size-3 text-[#F57224]" />}
                </Link>
              )
            })}
            <hr className="my-3 border-white/10" />
            <button
              onClick={() => signOut({ redirectUrl: "/" })}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-all duration-300 hover:bg-red-500/10"
            >
              <LogOut className="size-4" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Mobile Dashboard Nav */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {sidebarLinks.slice(0, 5).map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all",
                  isActive
                    ? "bg-[#F57224]/10 text-[#F57224]"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                )}
              >
                <Icon className="size-3.5" />
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="min-w-0 flex-1"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
