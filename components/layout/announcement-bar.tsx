"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Truck, Flame, Star, Shield, Sparkles } from "lucide-react"

const announcements = [
  { icon: Truck, text: "Free Shipping on Orders Over $50", color: "text-emerald-400" },
  { icon: Flame, text: "Flash Sale Up To 60% OFF", color: "text-[#F57224]" },
  { icon: Star, text: "Trusted By Thousands", color: "text-yellow-400" },
  { icon: Shield, text: "Secure Stripe Checkout", color: "text-blue-400" },
]

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const announcement = announcements[current]

  return (
    <div className="relative border-b overflow-hidden bg-muted/30 border-border">
      <div className="mx-auto flex h-8 items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs font-medium"
          >
            <announcement.icon className={`size-3.5 ${announcement.color}`} />
            <span className="text-muted-foreground">
              {announcement.text}
            </span>
            <Sparkles className="size-3 text-[#D4A853]/50" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}