"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  Book,
  Truck,
  RotateCcw,
  CreditCard,
  Shield,
  User,
  ChevronDown,
  Sparkles,
  Home,
  Headphones,
} from "lucide-react"

const categories = [
  {
    icon: Truck,
    title: "Orders & Shipping",
    description: "Track orders, shipping times, delivery options, and order modifications.",
    link: "/order-tracking",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Return policy, refund processing, exchanges, and cancellation requests.",
    link: "/faq",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Payment methods, billing issues, invoices, and promotional codes.",
    link: "/faq",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: User,
    title: "Account & Settings",
    description: "Account management, password reset, preferences, and notifications.",
    link: "/profile-settings",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Book,
    title: "Product Information",
    description: "Product details, sizing guides, availability, and specifications.",
    link: "/products",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Data protection, secure payments, privacy policy, and account safety.",
    link: "/privacy",
    color: "from-amber-500/20 to-amber-500/5",
  },
]

const faqItems = [
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'My Orders' section. Real-time updates are provided as your package moves through our delivery network.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy. Items must be unused and in their original packaging. Return shipping is free for all domestic orders. Refunds are processed within 5-7 business days after we receive the returned item.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer buy-now-pay-later options through Klarna. All transactions are secured with 256-bit SSL encryption.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and enter your registered email address. You'll receive a password reset link within a few minutes. For security, the link expires after 1 hour.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. You can view the exact shipping cost and estimated delivery time at checkout. Customs duties may apply.",
  },
]

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    color: "from-[#F57224] to-orange-500",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get a response within 24 hours",
    action: "Send Email",
    actionLink: "mailto:support@blazecart.com",
    color: "from-[#D4A853] to-amber-500",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Mon-Fri, 9AM - 6PM",
    action: "Call Now",
    actionLink: "tel:+18001234567",
    color: "from-emerald-500 to-teal-500",
  },
]

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Premium Background - Theme Aware */}
      <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#D4A853]/8 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]" />
      </div>

      {/* Back Navigation */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="group text-muted-foreground hover:text-[#F57224] hover:bg-[#F57224]/10"
            >
              <Home className="mr-2 size-4" />
              <span className="text-sm">Back to Home</span>
              <ArrowRight className="ml-2 size-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <motion.div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-2 mb-6"
          >
            <Sparkles className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Support Center</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            Help{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/25 to-[#D4A853]/15 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-[#D4A853] bg-clip-text text-transparent">
                Center
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Find answers to your questions, browse help topics, or get in touch with our support team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70" />
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground/70 py-3.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#F57224]/50 focus:bg-muted/30 focus:shadow-[0_0_30px_rgba(245,114,36,0.15)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Help Categories */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-center text-2xl font-bold text-foreground"
        >
          How can we help you?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm text-muted-foreground/70"
        >
          Browse through our help categories to find what you need
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={category.link}>
                <Card className="glass-premium group h-full cursor-pointer transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.15)]">
                  <CardContent className="p-6">
                    <div
                      className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${category.color} p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    >
                      <category.icon className="size-6 text-[#F57224]" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-[#F57224] transition-colors">
                      {category.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#F57224] opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                      Learn More <ArrowRight className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A853]/20 to-[#D4A853]/5 px-4 py-1.5 mb-4">
            <HelpCircle className="size-3.5 text-[#D4A853]" />
            <span className="text-xs font-medium text-[#D4A853]">FAQs</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quick answers to the most common questions
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="glass-premium overflow-hidden transition-all duration-300 hover:border-[#D4A853]/20">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-accent/10"
                  >
                    <span className="flex-1 pr-4 font-semibold text-foreground group-hover:text-[#F57224] transition-colors">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 rounded-full bg-[#D4A853]/10 p-1.5 text-[#D4A853]"
                    >
                      <ChevronDown className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-border px-6 pb-5">
                          <p className="pt-3 text-sm text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <Link href="/faq">
            <Button
              variant="ghost"
              className="text-[#F57224] hover:bg-[#F57224]/10"
            >
              View all FAQs
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-1.5 mb-4">
            <Headphones className="size-3.5 text-[#F57224]" />
            <span className="text-xs font-medium text-[#F57224]">Contact Us</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Still need help?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose your preferred way to get in touch
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-premium group h-full text-center transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.15)]">
                <CardContent className="p-8">
                  <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-4 transition-all duration-300 group-hover:scale-110">
                    <option.icon className="size-8 text-[#F57224]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{option.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground">{option.description}</p>
                  {option.actionLink ? (
                    <Link href={option.actionLink}>
                      <Button className={`bg-gradient-to-r ${option.color} shadow-lg text-white`}>
                        {option.action}
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className={`bg-gradient-to-r ${option.color} shadow-lg text-white`}>
                      {option.action}
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner - Theme Aware */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/8 via-transparent to-[#D4A853]/4" />
          <div className="relative">
            <HelpCircle className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className="text-2xl font-bold text-foreground">We're here for you</h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
                  Contact Support
                  <MessageCircle className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-border hover:border-[#F57224]/50 hover:text-[#F57224]">
                  Continue Shopping
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}