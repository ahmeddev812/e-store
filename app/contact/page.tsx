"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  Sparkles, MessageCircle, Headphones, Award, 
  Shield, Zap, Globe, ChevronRight, ArrowRight, Star,
  Gift, Truck, RotateCcw, CreditCard, Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["support@blazecart.com", "sales@blazecart.com"],
    link: "mailto:support@blazecart.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (800) 123-4567", "+1 (555) 987-6543"],
    description: "Mon-Fri, 9AM - 6PM",
    color: "from-green-500 to-emerald-500",
    link: "tel:+18001234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Commerce Street", "Tech City, TC 12345"],
    description: "Get directions",
    color: "from-red-500 to-rose-500",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM", "Sun: Closed"],
    description: "24/7 Online Support",
    color: "from-purple-500 to-pink-500",
  },
]

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping on orders over $50.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer 30-day easy returns. Items must be unused and in original packaging. Return shipping is free.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. International delivery takes 7-14 business days depending on location.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track it in your dashboard.",
  },
]

const stats = [
  { value: "24/7", label: "Support", icon: Headphones },
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "99.9%", label: "Satisfaction Rate", icon: Star },
  { value: "30 Days", label: "Easy Returns", icon: RotateCcw },
]

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", color: "#1877F2" },
  { name: "Twitter", href: "https://twitter.com", color: "#1DA1F2" },
  { name: "Instagram", href: "https://instagram.com", color: "#E4405F" },
  { name: "LinkedIn", href: "https://linkedin.com", color: "#0A66C2" },
  { name: "YouTube", href: "https://youtube.com", color: "#FF0000" },
]

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
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

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields", {
        icon: "⚠️",
      })
      return
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    try {
      const existingMessages = JSON.parse(localStorage.getItem("contact_messages") || "[]")
      const newMessage = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
      }
      existingMessages.push(newMessage)
      localStorage.setItem("contact_messages", JSON.stringify(existingMessages))

      setIsSuccess(true)
      toast.success("Your message has been sent successfully!", {
        icon: <CheckCircle className="size-4 text-green-500" />,
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-background">
        <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-8 rounded-full bg-emerald-500/20 p-8"
          >
            <CheckCircle className="size-20 text-emerald-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            Message Sent!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-md text-center mb-8"
          >
            Thank you for reaching out. We've received your message and will get back to you within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={() => setIsSuccess(false)} className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
              Send Another Message
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Premium Background - Theme Aware */}
      <div className="fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/8 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]" />
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
            <span className="text-sm font-medium text-[#F57224]">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            Contact{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/25 to-[#F57224]/15 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
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
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground/70">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-premium group h-full transition-all duration-500 hover:border-[#F57224]/30 hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3 transition-all duration-300 group-hover:scale-110">
                    <info.icon className="size-6 text-[#F57224]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                  <p className="mt-2 text-xs text-foreground/30">{info.description}</p>
                  {info.link && (
                    <Link href={info.link} target="_blank">
                      <Button variant="ghost" size="sm" className="mt-3 text-[#F57224] hover:bg-[#F57224]/10">
                        Contact Now
                        <ChevronRight className="ml-1 size-3" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-2">
                    <MessageCircle className="size-5 text-[#F57224]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-sm text-muted-foreground/70">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/70">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-border bg-muted/50 text-foreground placeholder:text-foreground/30 focus:border-[#F57224]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/70">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-border bg-muted/50 text-foreground placeholder:text-foreground/30 focus:border-[#F57224]/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground/70">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="border-border bg-muted/50 text-foreground placeholder:text-foreground/30 focus:border-[#F57224]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/70">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="min-h-32 resize-none border-border bg-muted/50 text-foreground placeholder:text-foreground/30 focus:border-[#F57224]/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 size-4 animate-spin rounded-full border-2 border-border border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <Card className="glass-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F57224]/8 to-[#F57224]/4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 size-10 text-[#F57224]" />
                      <p className="text-muted-foreground">Interactive Map View</p>
                      <p className="text-xs text-foreground/30">123 Commerce Street, Tech City</p>
                      <Button variant="link" className="mt-2 text-[#F57224]">
                        Open in Google Maps
                        <ArrowRight className="ml-1 size-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-premium">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold text-foreground">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
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
                      className="rounded-full p-3 transition-all duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                      aria-label={social.name}
                    >
                      <Icon className="size-5" style={{ color: social.color }} />
                    </motion.a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Support Badge */}
            <Card className="glass-premium bg-gradient-to-r from-[#F57224]/8 to-[#F57224]/4">
              <CardContent className="p-4 text-center">
                <Headphones className="mx-auto mb-2 size-8 text-[#F57224]" />
                <p className="text-sm font-medium text-foreground">24/7 Premium Support</p>
                <p className="text-xs text-muted-foreground/70">Our team is always here for you</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            FAQs
          </Badge>
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground">Find quick answers to common questions</p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-premium rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronRight className={`size-5 text-[#F57224] transition-transform duration-300 ${openFaq === index ? "rotate-90" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border px-5 pb-5"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-label={faq.question}
                  >
                    <p className="pt-3 text-sm text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/8 via-transparent to-[#F57224]/4" />
          <div className="relative">
            <Gift className="mx-auto mb-4 size-12 text-[#F57224]" />
            <h2 className="text-2xl font-bold text-foreground">Need Immediate Assistance?</h2>
            <p className="mt-2 text-muted-foreground">Chat with our support team for instant help</p>
            <Button className="mt-6 bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
              Start Live Chat
              <MessageCircle className="ml-2 size-4" />
            </Button>
          </div>
        </motion.div>
      </section>
      
    </div>
  )
}