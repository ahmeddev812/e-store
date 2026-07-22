"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Mail, Shield, Truck, 
  RotateCcw, Heart, ArrowUp, Sparkles,
  Crown, Gift, Star, Globe, Headphones,
  Package, Zap, CheckCircle, Info, BookOpen,
  HelpCircle, Search, ShoppingBag, FileText, ShieldCheck,
  Users, Briefcase, Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const footerSections = {
  company: {
    title: "Company",
    icon: Crown,
    links: [
      { name: "About Us", href: "/about", icon: Info },
      { name: "Our Story", href: "/about", icon: BookOpen },
      { name: "Careers", href: "/careers", icon: Briefcase, badge: "Hiring" },
      { name: "Press", href: "/press", icon: Globe },
      { name: "Blog", href: "/blog", icon: Sparkles },
      { name: "Contact", href: "/contact", icon: Mail },
    ],
  },
  customerCare: {
    title: "Customer Care",
    icon: Headphones,
    links: [
      { name: "Help Center", href: "/help", icon: HelpCircle },
      { name: "FAQs", href: "/faq", icon: CheckCircle },
      { name: "Shipping Information", href: "/help", icon: Truck },
      { name: "Returns & Refunds", href: "/returns", icon: RotateCcw },
      { name: "Track Order", href: "/order-tracking", icon: Search },
    ],
  },
  shop: {
    title: "Shop",
    icon: Package,
    links: [
      { name: "All Products", href: "/products", icon: ShoppingBag },
      { name: "Categories", href: "/categories", icon: GridIcon },
      { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
      { name: "Best Sellers", href: "/best-sellers", icon: Crown },
      { name: "Flash Sales", href: "/flash-sales", icon: Zap, badge: "Hot" },
    ],
  },
  legal: {
    title: "Legal",
    icon: Shield,
    links: [
      { name: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
      { name: "Terms of Service", href: "/terms", icon: FileText },
      { name: "Cookie Policy", href: "/cookies", icon: CookieIcon },
      { name: "GDPR Compliance", href: "/gdpr", icon: Globe },
      { name: "Accessibility", href: "/help", icon: Globe },
    ],
  },
  partners: {
    title: "Partners",
    icon: Users,
    links: [
      { name: "Become a Seller", href: "/contact", icon: Briefcase },
      { name: "Affiliate Program", href: "/contact", icon: Target },
      { name: "Business Accounts", href: "/contact", icon: Users },
      { name: "Gift Cards", href: "/products", icon: Gift },
    ],
  },
  follow: {
    title: "Follow Us",
    icon: Globe,
    links: [
      { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon, external: true },
      { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon, external: true },
      { name: "X", href: "https://x.com", icon: XIcon, external: true },
      { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, external: true },
      { name: "GitHub", href: "https://github.com", icon: GithubIcon, external: true },
    ],
  },
}

const paymentIcons = [
  { name: "Visa", icon: "💳", color: "from-blue-500 to-blue-600" },
  { name: "Mastercard", icon: "💳", color: "from-red-500 to-orange-500" },
  { name: "PayPal", icon: "🅿️", color: "from-blue-400 to-blue-600" },
  { name: "Stripe", icon: "⚡", color: "from-purple-500 to-pink-500" },
  { name: "JazzCash", icon: "💰", color: "from-green-500 to-emerald-500" },
  { name: "EasyPaisa", icon: "📱", color: "from-red-500 to-rose-500" },
]

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
  { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" },
  { icon: Shield, title: "Secure Payment", description: "100% protected" },
  { icon: Headphones, title: "24/7 Support", description: "Dedicated support" },
  { icon: Zap, title: "Fast Delivery", description: "1-3 business days" },
  { icon: Gift, title: "Rewards", description: "Exclusive perks" },
]

function GridIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
}

function CookieIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
}

function InstagramIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
}

function FacebookIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}

function XIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" /></svg>
}

function LinkedinIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}

function GithubIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const footerRef = useRef<HTMLElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Premium Background - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#F57224]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 size-72 rounded-full bg-[#F57224]/4 blur-[100px]" />
        <div className="absolute top-1/2 right-0 size-80 rounded-full bg-orange-500/4 blur-[100px]" />
      </div>

      {/* Features Bar */}
      <div className="relative border-b border-border bg-muted/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl p-3 transition-all duration-300 bg-muted/50 hover:bg-accent"
              >
                <div className="rounded-lg bg-[#F57224]/8 p-2">
                  <feature.icon className="size-4 text-[#F57224]" />
                </div>
                <div className="hidden sm:block">
                  <p className={`text-xs font-medium text-foreground`}>{feature.title}</p>
                  <p className={`text-[10px] text-muted-foreground/70`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-6 mb-4"
          >
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="rounded-xl bg-[#F57224]/15 p-2">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                    <defs><linearGradient id="flameGradFooter" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#F57224" /><stop offset="60%" stopColor="#F97316" /><stop offset="100%" stopColor="#D4A853" />
                    </linearGradient></defs>
                    <path d="M16 2C16 2 8 10 8 17C8 21.4183 11.5817 25 16 25C20.4183 25 24 21.4183 24 17C24 10 16 2 16 2Z" fill="url(#flameGradFooter)" />
                    <path d="M16 8C16 8 12 13 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13 16 8 16 8Z" fill="white" fillOpacity="0.4" />
                    <path d="M14 20C14 22 15.5 24 16 26C16.5 24 18 22 18 20H14Z" fill="#D4A853" fillOpacity="0.6" />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                  BlazeCart
                </span>
                <Badge className="ml-2 bg-gradient-to-r from-[#F57224] to-orange-500 text-[10px] border-none text-white">
                  Premium
                </Badge>
              </Link>
              <p className={`text-sm text-muted-foreground leading-relaxed max-w-lg`}>
                Ignite your style with premium products at unbeatable prices. Shop with confidence and experience luxury shopping.
              </p>
              <div className="flex gap-2">
                {[4.8, 4.9, 5.0].map((rating, i) => (
                  <div key={i} className="flex items-center gap-1 rounded-lg bg-muted/50 px-2 py-1">
                    <Star className="size-3 fill-yellow-500 text-yellow-500" />
                    <span className={`text-xs text-foreground`}>{rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {Object.values(footerSections).map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="size-4 text-[#F57224]" />
                <h3 className={`text-sm font-semibold uppercase tracking-wider text-foreground/90`}>
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-[#F57224]`}
                      >
                        <link.icon className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-[#F57224]`}
                      >
                        <link.icon className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                        <span>{link.name}</span>
                        {link.badge && (
                          <Badge className="ml-2 bg-[#F57224]/20 text-[#F57224] text-[9px] border-none">
                            {link.badge}
                          </Badge>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section - Theme Aware */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#F57224]/8 via-transparent to-[#F57224]/4 p-6"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F57224]/15 p-3">
                <Mail className="size-6 text-[#F57224]" />
              </div>
              <div>
                <h3 className={`text-lg font-semibold text-foreground`}>Subscribe to Newsletter</h3>
                <p className="text-sm text-muted-foreground/70">Get 10% off your first purchase + exclusive deals</p>
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-border bg-muted/50 text-foreground placeholder:text-muted-foreground/70"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow whitespace-nowrap text-white"
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle className="size-4" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar - Theme Aware */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} BlazeCart. All rights reserved. | Crafted with{" "}
            <Heart className="inline size-3 text-red-500" /> for premium ecommerce
          </p>

          {/* Payment Icons */}
          <div className="flex flex-wrap items-center gap-2">
            {paymentIcons.map((payment) => (
              <div
                key={payment.name}
                className={`rounded-lg bg-gradient-to-r ${payment.color} px-2 py-1 text-xs font-medium text-white shadow-lg`}
              >
                {payment.icon} {payment.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-[#F57224] to-orange-500 p-3 shadow-glow transition-all duration-300 hover:scale-110 text-white"
        >
          <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}