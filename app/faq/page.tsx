"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  ChevronDown, ChevronUp, HelpCircle, Headphones, 
  Mail, Phone, Clock, MessageCircle, Sparkles, 
  Search, ArrowRight, Star, Shield, Truck, 
  RotateCcw, CreditCard, Globe, Zap
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { toast } from "sonner"

const faqCategories = [
  { name: "All", icon: "📌", count: 8 },
  { name: "Shipping", icon: "🚚", count: 2 },
  { name: "Returns", icon: "🔄", count: 2 },
  { name: "Payments", icon: "💳", count: 1 },
  { name: "Account", icon: "👤", count: 1 },
  { name: "Products", icon: "📦", count: 2 },
]

const faqItems = [
  {
    category: "Shipping",
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-7 business days within the continental US. Express shipping is available for 1-3 business days delivery. International shipping times vary by destination, usually 7-21 business days. You can track your order in real-time from your account dashboard. Free shipping is available on all orders over $50.",
    popular: true,
  },
  {
    category: "Returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return the item in its original condition for a full refund or exchange. The item must be unused, with all tags and packaging intact. Return shipping is free for all domestic orders. Please contact our support team to initiate a return.",
    popular: true,
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer buy-now-pay-later options through Klarna and Afterpay. All transactions are secured with 256-bit SSL encryption. Your payment information is never stored on our servers.",
    popular: true,
  },
  {
    category: "Account",
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive an email with a tracking number and a link to track your package. You can also track your order by logging into your account and going to the 'My Orders' section. Real-time updates are provided as your package moves through our delivery network. You can also enable SMS notifications for instant updates.",
    popular: false,
  },
  {
    category: "Shipping",
    question: "Do you offer international shipping?",
    answer: "Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary based on your location. You can see the exact shipping cost and estimated delivery time at checkout. Please note that international orders may be subject to customs duties and taxes imposed by the destination country. These fees are the responsibility of the customer.",
    popular: false,
  },
  {
    category: "Products",
    question: "What warranty do you offer on products?",
    answer: "Most products come with a minimum 1-year manufacturer warranty. Some electronics and premium items may have extended warranty options available at checkout. The warranty covers manufacturing defects but not accidental damage or normal wear and tear. Please check the product description for specific warranty details. Register your product within 30 days for extended coverage.",
    popular: false,
  },
  {
    category: "Products",
    question: "How do discounts and promo codes work?",
    answer: "You can apply discount codes during checkout in the designated promo code field. Only one discount code can be used per order. Our seasonal sales and special offers are automatically applied to eligible items. Subscribe to our newsletter to receive exclusive discount codes and be the first to know about upcoming sales. Sign up now and get 10% off your first order!",
    popular: true,
  },
  {
    category: "Account",
    question: "I'm having issues with my account. What should I do?",
    answer: "If you're experiencing account-related issues, you can: 1) Try resetting your password using the 'Forgot Password' link, 2) Check your email for any verification messages, 3) Clear your browser cache and cookies, 4) Try using a different browser or device, or 5) Contact our support team at support@blazecart.com or call us at 1-800-BLAZECART. We typically respond within 24 hours.",
    popular: false,
  },
]

const quickStats = [
  { label: "Average Response Time", value: "< 24h", icon: Clock },
  { label: "Customer Satisfaction", value: "98%", icon: Star },
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Countries Served", value: "50+", icon: Globe },
]

// Helper component for Users icon
function Users(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
  category: string
  popular?: boolean
}

function FAQItem({ question, answer, isOpen, onToggle, index, category, popular }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group border-b border-white/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-all duration-300 hover:pl-2"
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-[#F57224]/10 text-[#F57224] text-[9px] border-none">
              {category}
            </Badge>
            {popular && (
              <Badge className="bg-yellow-500/10 text-yellow-500 text-[9px] border-none">
                Popular
              </Badge>
            )}
          </div>
          <span className="font-semibold text-white group-hover:text-[#F57224] transition-colors">
            {question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 rounded-full bg-[#F57224]/10 p-1 text-[#F57224]"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-5 pl-0 md:pl-4">
              <p className="text-white/60 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]))
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      toast.info(`Searching for: "${searchQuery}"`)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-20 pb-16">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative mx-auto max-w-7xl px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-2 mb-6"
          >
            <Sparkles className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Knowledge Base</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Questions
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-white/60"
          >
            Find answers to common questions about our products, shipping, returns, and more.
            Can't find what you're looking for? Contact our support team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-md"
          >
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/40 focus:border-[#F57224]/50"
              />
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-premium text-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,114,36,0.2)]">
                <CardContent className="p-3">
                  <div className="inline-flex items-center justify-center rounded-xl bg-[#F57224]/10 p-2 mb-3">
                    <stat.icon className="size-5 text-[#F57224]" />
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <Card className="glass-premium">
                <CardContent className="p-5">
                  <h3 className="mb-4 font-semibold text-white">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-300 ${
                          activeCategory === cat.name
                            ? "bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cat.icon}</span>
                          <span>{cat.name}</span>
                        </span>
                        <Badge className="bg-white/10 text-white/40 text-[9px] border-none">
                          {cat.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support Card */}
              <Card className="glass-premium bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5">
                <CardContent className="p-5 text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#F57224]/20 p-3">
                    <Headphones className="size-8 text-[#F57224]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">Still have questions?</h3>
                  <p className="mb-4 text-xs text-white/40">
                    Can't find the answer you're looking for? Our team is here to help.
                  </p>
                  <div className="space-y-2">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
                        Contact Support
                        <MessageCircle className="ml-2 size-3" />
                      </Button>
                    </Link>
                    <div className="pt-2 text-center">
                      <p className="text-[10px] text-white/30">or reach us at</p>
                      <p className="text-xs font-medium text-[#F57224]">support@blazecart.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="glass-premium">
              <CardContent className="p-6 md:p-8">
                {filteredFaqs.length === 0 ? (
                  <div className="py-12 text-center">
                    <HelpCircle className="mx-auto mb-4 size-12 text-white/20" />
                    <p className="text-white/60">No results found for "{searchQuery}"</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory("All")
                      }}
                      className="mt-2 text-[#F57224]"
                    >
                      Clear filters
                    </Button>
                  </div>
                ) : (
                  filteredFaqs.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      category={item.category}
                      popular={item.popular}
                      isOpen={openItems.has(index)}
                      onToggle={() => toggleItem(index)}
                      index={index}
                    />
                  ))
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/10 via-transparent to-[#F57224]/5" />
          <div className="relative">
            <Zap className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className="text-2xl font-bold text-white">Need Immediate Assistance?</h2>
            <p className="mt-2 text-white/60 max-w-md mx-auto">
              Chat with our support team for instant help with your questions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-white/20 hover:border-[#F57224]/50">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}