"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  RotateCcw,
  Shield,
  Sparkles,
  Star,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { easeTransition } from "@/lib/motion"

const slides = [
  {
    tag: "New Season",
    title: "Street Culture",
    subtitle: "Premium Collection 2026",
    description:
      "Where urban energy meets refined craftsmanship. Discover the new standard in premium streetwear.",
    cta: "Explore Collection",
    gradient: "from-primary to-gold",
    badge: "✦ 2026 DROP",
    image:
      "https://images.unsplash.com/photo-1441986300917-64676bd600d8?w=1920&h=1080&fit=crop&q=80",
  },
  {
    tag: "Limited Edition",
    title: "Urban Luxury",
    subtitle: "Exclusive Drops",
    description:
      "Handpicked pieces that define modern luxury. For those who appreciate the finer details.",
    cta: "Shop Limited",
    gradient: "from-gold to-primary",
    badge: "✦ EXCLUSIVE",
    image:
      "https://images.unsplash.com/photo-1483985988354-763728e4e0b3?w=1920&h=1080&fit=crop&q=80",
  },
  {
    tag: "Iconic Style",
    title: "Statement Pieces",
    subtitle: "Define Your Look",
    description:
      "Bold. Authentic. Unforgettable. The pieces that turn heads and start conversations.",
    cta: "Discover Now",
    gradient: "from-primary to-orange-500",
    badge: "✦ BEST SELLERS",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop&q=80",
  },
]

export function PremiumHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[activeSlide]

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden md:min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent_20%,black_100%)] opacity-70" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iNDAgMCA4MCA0MCA0MCA4MCAwIDQwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-15" />

      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={cn(
              "rounded-full transition-all duration-500",
              index === activeSlide
                ? "h-12 w-1 bg-primary"
                : "h-8 w-0.5 bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 md:min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={easeTransition}
            className="max-w-3xl space-y-7 py-24 md:space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 backdrop-blur-sm">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {slide.badge}
              </span>
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/45">
              {slide.tag}
            </p>

            <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {slide.title}
              <br />
              <span
                className={cn(
                  "mt-1 inline-block bg-gradient-to-r bg-clip-text text-transparent",
                  slide.gradient
                )}
              >
                {slide.subtitle}
              </span>
            </h1>

            <p className="max-w-lg text-sm font-light leading-relaxed text-white/65 sm:text-base">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="group px-6 py-6 text-sm font-bold uppercase tracking-wider shadow-glow sm:text-base">
                  <Sparkles className="mr-2 size-4" />
                  {slide.cta}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 px-6 py-6 text-sm font-bold uppercase tracking-wider text-white hover:border-white/40 hover:bg-white/10 sm:text-base"
                >
                  View All
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="size-9 rounded-full border-2 border-background bg-gradient-to-r from-gold to-primary shadow-lg md:size-10"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="ml-2 text-sm font-bold text-white">4.9</span>
                  </div>
                  <p className="text-xs font-medium tracking-wider text-white/50">
                    50,000+ Happy Customers
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-white/35">
                {[
                  { icon: Shield, label: "Secure" },
                  { icon: Truck, label: "Fast" },
                  { icon: RotateCcw, label: "Returns" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="size-4 text-gold" />
                    <span className="text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">
            Scroll
          </span>
          <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <ChevronRight className="size-5 rotate-90 text-white/25" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
