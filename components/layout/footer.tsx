"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Mail, Phone, MapPin, Clock, Shield, Truck, 
  RotateCcw, CreditCard, Heart, ArrowUp, Sparkles,
  Crown, Gift, Star, Award, Globe, Headphones,
  Package, DollarSign, Zap, CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const footerSections = {
  company: {
    title: "Company",
    icon: Crown,
    links: [
      { name: "About Us", href: "/about", icon: Star },
      { name: "Careers", href: "/careers", icon: Award, badge: "Hiring" },
      { name: "Press", href: "/press", icon: Globe },
      { name: "Blog", href: "/blog", icon: Sparkles },
    ],
  },
  shop: {
    title: "Shop",
    icon: Package,
    links: [
      { name: "All Products", href: "/products", icon: Package },
      { name: "Categories", href: "/categories", icon: GridIcon },
      { name: "Flash Sales", href: "/flash-sales", icon: Zap, badge: "Hot" },
      { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
      { name: "Best Sellers", href: "/best-sellers", icon: Crown },
    ],
  },
  support: {
    title: "Support",
    icon: Headphones,
    links: [
      { name: "Help Center", href: "/help", icon: Headphones },
      { name: "Order Tracking", href: "/order-tracking", icon: Truck },
      { name: "Returns & Refunds", href: "/returns", icon: RotateCcw },
      { name: "FAQs", href: "/faq", icon: CheckCircle },
      { name: "Contact Us", href: "/contact", icon: Mail },
    ],
  },
  legal: {
    title: "Legal",
    icon: Shield,
    links: [
      { name: "Terms of Service", href: "/terms", icon: Shield },
      { name: "Privacy Policy", href: "/privacy", icon: LockIcon },
      { name: "Cookie Policy", href: "/cookies", icon: CookieIcon },
      { name: "GDPR", href: "/gdpr", icon: Globe },
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

const socialIcons = [
  { name: "Facebook", href: "https://facebook.com", color: "hover:bg-[#1877F2]" },
  { name: "Twitter", href: "https://twitter.com", color: "hover:bg-[#1DA1F2]" },
  { name: "Instagram", href: "https://instagram.com", color: "hover:bg-gradient-to-r from-[#E4405F] to-[#F56040]" },
  { name: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-[#0A66C2]" },
  { name: "YouTube", href: "https://youtube.com", color: "hover:bg-[#FF0000]" },
] as const

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
  { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" },
  { icon: Shield, title: "Secure Payment", description: "100% protected" },
  { icon: Headphones, title: "24/7 Support", description: "Dedicated support" },
  { icon: Zap, title: "Fast Delivery", description: "1-3 business days" },
  { icon: Gift, title: "Rewards", description: "Exclusive perks" },
]

// Inline SVG icons for non-lucide icon names
function GridIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
}
function LockIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
}
function CookieIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
}

// Social media SVG icons
function FacebookSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function TwitterSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
}
function InstagramSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
}
function LinkedinSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}
function YoutubeSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
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
    <footer ref={footerRef} className="relative overflow-hidden">  {/* REMOVED mt-20 */}
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#F57224]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 size-72 rounded-full bg-[#F57224]/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 size-80 rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      {/* Features Bar */}
      <div className="relative border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl bg-white/5 p-3 transition-all duration-300 hover:bg-[#F57224]/10"
              >
                <div className="rounded-lg bg-[#F57224]/10 p-2">
                  <feature.icon className="size-4 text-[#F57224]" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-medium text-white">{feature.title}</p>
                  <p className="text-[10px] text-white/40">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-2">
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
              <Badge className="ml-2 bg-gradient-to-r from-[#F57224] to-orange-500 text-[10px] border-none">
                Premium
              </Badge>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Ignite your style with premium products at unbeatable prices. Shop with confidence and experience luxury shopping.
            </p>
            
            {/* Trust Badges */}
            <div className="mt-4 flex gap-2">
              {[4.8, 4.9, 5.0].map((rating, i) => (
                <div key={i} className="flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1">
                  <Star className="size-3 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs text-white">{rating}</span>
                </div>
              ))}
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
                <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-[#F57224]"
                    >
                      <link.icon className="size-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      <span>{link.name}</span>
                      {link.badge && (
                        <Badge className="ml-2 bg-[#F57224]/20 text-[#F57224] text-[9px] border-none">
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#F57224]/10 via-transparent to-[#F57224]/5 p-6"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F57224]/20 p-3">
                <Mail className="size-6 text-[#F57224]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Subscribe to Newsletter</h3>
                <p className="text-sm text-white/40">Get 10% off your first purchase + exclusive deals</p>
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow whitespace-nowrap"
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

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
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

          {/* Social Links */}
          <div className="flex gap-2">
            {socialIcons.map((social) => {
              const Icon = social.name === "Facebook" ? FacebookSvg
                : social.name === "Twitter" ? TwitterSvg
                : social.name === "Instagram" ? InstagramSvg
                : social.name === "LinkedIn" ? LinkedinSvg
                : YoutubeSvg
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`rounded-full bg-white/5 p-2 transition-all duration-300 ${social.color}`}
                >
                  <Icon className="size-4 text-white/70 hover:text-white" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-[#F57224] to-orange-500 p-3 shadow-glow transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="size-5 text-white" />
        </motion.button>
      )}
    </footer>
  )
}