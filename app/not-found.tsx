"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#D4A853]/5 blur-[140px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#F57224]/15 to-[#D4A853]/10 p-6">
          <motion.span
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-6xl font-bold bg-gradient-to-r from-[#F57224] to-[#D4A853] bg-clip-text text-transparent"
          >
            404
          </motion.span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-foreground"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-3 max-w-md text-muted-foreground"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/">
          <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
            <Home className="mr-2 size-4" />
            Go Home
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" className="border-border hover:border-[#F57224]/50">
            <Search className="mr-2 size-4" />
            Browse Products
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16"
      >
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground/50 hover:text-[#F57224]">
            <ArrowLeft className="mr-1 size-3" />
            Back to BlazeCart
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
