"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  RotateCcw, CheckCircle, Clock, Shield, ArrowRight,
  Package, DollarSign, Mail, Phone, HelpCircle, RefreshCcw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const steps = [
  {
    icon: RotateCcw,
    title: "Initiate Return",
    description: "Submit your return request through the form below with your order ID and reason.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Pack Items",
    description: "Securely pack the items in their original packaging with all tags and accessories.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: RefreshCcw,
    title: "Ship Back",
    description: "Print the prepaid return label and drop off the package at any carrier location.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Refund Processed",
    description: "Once received and inspected, your refund will be issued within 5-7 business days.",
    color: "from-emerald-500 to-teal-500",
  },
]

const faqItems = [
  {
    question: "What items are eligible for return?",
    answer: "Most items in new, unused condition with original packaging and tags can be returned within 30 days of delivery. Certain items such as perishable goods, personal care items, and downloadable software are non-returnable. Check the product page for specific return eligibility before purchasing.",
  },
  {
    question: "How long does the refund process take?",
    answer: "Once we receive your return, refunds are processed within 5-7 business days. The amount will be credited back to your original payment method. Depending on your bank or card issuer, it may take an additional 3-5 business days for the refund to appear in your account.",
  },
  {
    question: "Who pays for return shipping?",
    answer: "We offer free return shipping on all domestic orders. For international returns, the customer is responsible for return shipping costs unless the item arrived damaged or defective. In that case, we will provide a prepaid return label and cover all shipping costs.",
  },
  {
    question: "Can I exchange an item instead of getting a refund?",
    answer: "Yes, we support exchanges for a different size, color, or variant. Simply initiate a return and select 'Exchange' as your preferred resolution. Once the returned item is received, we will ship the replacement at no additional cost. Exchanges are subject to stock availability.",
  },
  {
    question: "What if my item arrives damaged or defective?",
    answer: "We apologize for the inconvenience. If your item arrives damaged or defective, please contact our support team within 48 hours of delivery. We will arrange a full refund or replacement including all return shipping costs. Please include photos of the damage when contacting us.",
  },
  {
    question: "How do I track my return status?",
    answer: "You can track your return status from your account dashboard under 'My Returns'. You will also receive email updates at each stage of the return process — from when we receive your package to when your refund is issued.",
  },
]

const refundReasons = [
  "Defective or damaged item",
  "Wrong item received",
  "Item not as described",
  "Changed my mind",
  "Found better price elsewhere",
  "Size or fit issue",
  "No longer needed",
  "Delivered late",
  "Other reason",
]

export default function ReturnsPage() {
  const [orderId, setOrderId] = useState("")
  const [reason, setReason] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
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
            <RotateCcw className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Returns & Exchanges</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Returns &{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Refunds
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-white/60"
          >
            Hassle-free returns within 30 days. We are here to make your return experience smooth and straightforward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white/60 hover:border-[#F57224]/50 hover:text-[#F57224]">
                <ArrowRight className="mr-2 size-4 rotate-180" />
                Back to Shopping
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 30-Day Policy Highlight */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-premium overflow-hidden border-[#F57224]/20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/10 via-[#F57224]/5 to-transparent" />
              <CardContent className="relative p-8 md:p-10">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-4">
                      <Shield className="size-10 text-[#F57224]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white">30-Day Hassle-Free Returns</h2>
                    <p className="mt-2 text-white/60 max-w-2xl">
                      Not completely satisfied? You have 30 days from delivery to return your items for a full refund.
                      No questions asked, free return shipping on all domestic orders.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-emerald-500" />
                        <span className="text-sm text-white/70">Free Returns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-emerald-500" />
                        <span className="text-sm text-white/70">30-Day Window</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-emerald-500" />
                        <span className="text-sm text-white/70">Full Refund</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-emerald-500" />
                        <span className="text-sm text-white/70">Instant Processing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Return Process Steps */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            <RefreshCcw className="mr-1 size-3" />
            How It Works
          </Badge>
          <h2 className="text-2xl font-bold text-white">Return Process</h2>
          <p className="mt-2 text-white/50">Follow these simple steps to return your item</p>
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-[#F57224]/30 to-transparent lg:block" />
              )}
              <Card className="glass-premium group h-full transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.15)]">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto mb-4 flex size-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-[#F57224] text-[10px] font-bold text-white shadow-lg shadow-[#F57224]/30">
                      {index + 1}
                    </div>
                    <step.icon className="relative size-7 text-[#F57224]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-white/50">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Return Request Form */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            <Package className="mr-1 size-3" />
            Start Return
          </Badge>
          <h2 className="text-2xl font-bold text-white">Request a Return</h2>
          <p className="mt-2 text-white/50">Fill in the details below to begin your return</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Card className="glass-premium">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Order ID</label>
                  <Input
                    type="text"
                    placeholder="e.g. ORD-2024-XXXXX"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-[#F57224]/50"
                  />
                  <p className="text-xs text-white/30">You can find your Order ID in your order confirmation email</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Return Reason</label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#F57224]/50 focus:ring-1 focus:ring-[#F57224]/30"
                  >
                    <option value="" disabled className="bg-[#0a0a0f] text-white/40">
                      Select a reason for return
                    </option>
                    {refundReasons.map((r) => (
                      <option key={r} value={r} className="bg-[#0a0a0f] text-white">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow md:w-auto"
                >
                  <RotateCcw className="mr-2 size-4" />
                  Submit Return Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            <HelpCircle className="mr-1 size-3" />
            FAQs
          </Badge>
          <h2 className="text-2xl font-bold text-white">Return & Refund FAQs</h2>
          <p className="mt-2 text-white/50">Find answers to common return-related questions</p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-premium overflow-hidden rounded-xl"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
              >
                <span className="pr-4 font-medium text-white">{faq.question}</span>
                <ArrowRight
                  className={`size-5 flex-shrink-0 text-[#F57224] transition-transform duration-300 ${
                    openFaq === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10 px-5 pb-5"
                >
                  <p className="pt-3 text-sm leading-relaxed text-white/60">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-premium overflow-hidden bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-4">
                    <HelpCircle className="size-10 text-[#F57224]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">Need Help With Your Return?</h2>
                  <p className="mt-2 text-white/60">
                    Our support team is available 24/7 to assist you with any return-related questions.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#F57224]/10 p-2">
                        <Mail className="size-4 text-[#F57224]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/40">Email</p>
                        <p className="text-sm font-medium text-white">returns@blazecart.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#F57224]/10 p-2">
                        <Phone className="size-4 text-[#F57224]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/40">Phone</p>
                        <p className="text-sm font-medium text-white">1-800-BLAZECART</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#F57224]/10 p-2">
                        <Clock className="size-4 text-[#F57224]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/40">Hours</p>
                        <p className="text-sm font-medium text-white">24/7 Support</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow whitespace-nowrap">
                      Contact Support
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}
