"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Crown, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

export function FeaturedCollectionCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeUp}
        transition={easeTransition}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-muted/30 via-muted/10 to-background p-10 text-center sm:p-16"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="absolute -right-20 -top-20 size-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-40 rounded-full bg-gold/20 blur-3xl" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-primary/10 p-4">
            <Crown className="size-10 text-gold" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Featured Collection
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Discover our exclusive premium collection, handpicked for the discerning shopper
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <Button size="xl" className="shadow-glow">
                Shop Now <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href="/new-arrivals">
              <Button variant="outline" size="xl">
                View New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export function FeaturesSection({ features }: { features: FeatureItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center md:mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Why Choose Us
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground">
          The Blaze Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          Premium shopping redefined with exceptional service
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
            transition={{ ...easeTransition, delay: idx * 0.06 }}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:scale-[1.02] hover:border-primary/20 hover:shadow-[0_0_40px_rgba(245,114,36,0.1)]"
          >
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
              <feature.icon className="size-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

interface StatItem {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export function StatsBar({ stats }: { stats: StatItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={easeTransition}
      className="relative z-20 mx-auto -mt-6 max-w-7xl px-6 md:-mt-8"
    >
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-md md:grid-cols-4 md:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex items-center justify-center gap-2">
              <stat.icon className="size-5 text-primary" />
              <span className="text-xl font-bold text-foreground md:text-2xl">{stat.value}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeUp}
        transition={easeTransition}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-lg sm:p-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative">
          <Gift className="mx-auto mb-4 size-12 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Subscribe & Save 15%
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Get exclusive deals, early access, and 15% off your first order
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" className="whitespace-nowrap shadow-glow">
              Subscribe <Sparkles className="ml-2 size-4" />
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
