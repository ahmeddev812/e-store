"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  Badge, 
  Shield, 
  Scale, 
  CreditCard, 
  Truck, 
  RotateCcw, 
  Lock, 
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  CheckCircle,
  BookOpen,
  Users,
  Globe,
  DollarSign,
  Package,
  Heart,
  Star,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const sections = [
  {
    title: "1. Introduction",
    icon: BookOpen,
    content: `Welcome to BlazeCart. These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.`,
  },
  {
    title: "2. Account Terms",
    icon: Users,
    content: `To access certain features of the Service, you may need to create an account. You are responsible for:

• Providing accurate, current, and complete information during registration
• Maintaining and updating your account information
• Securing your account and not sharing your password
• All activities that occur under your account

You must be at least 18 years old to create an account. We reserve the right to suspend or terminate accounts for providing false information or violating these Terms.

You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. If you suspect unauthorized use, you must notify us immediately.`,
  },
  {
    title: "3. Payment Terms",
    icon: DollarSign,
    content: `All prices listed on our platform are in USD unless otherwise specified. Prices are subject to change without prior notice. We accept major credit cards, PayPal, and other payment methods as indicated at checkout.

By placing an order, you represent and warrant that:
• You have the legal right to use any payment method provided
• The information you provide is accurate and complete
• You authorize us to charge the total amount of your order

All payments are processed through secure payment gateways with industry-standard encryption. We do not store your complete credit card information on our servers.

In the event of payment failure, we may attempt to re-process the payment or cancel your order. You may be charged fees by your payment provider for declined transactions.`,
  },
  {
    title: "4. Shipping Policy",
    icon: Truck,
    content: `We offer standard and express shipping options to most locations. Shipping costs and estimated delivery times are calculated at checkout based on your location and the items in your order.

Standard shipping typically takes 3-7 business days for domestic orders. Express shipping is available for 1-3 business days delivery. International shipping times vary by destination, usually 7-21 business days.

Orders are processed within 1-2 business days. You will receive a shipping confirmation email with tracking information once your order ships.

We are not responsible for delays caused by customs, weather conditions, or carrier issues. If your package is significantly delayed beyond the estimated delivery window, please contact our support team.`,
  },
  {
    title: "5. Returns and Refunds",
    icon: RotateCcw,
    content: `We offer a 30-day return policy for most items in their original condition. To be eligible for a return:

• Items must be unused and in original packaging
• Items must be returned within 30 days of delivery
• Proof of purchase is required

Sale items marked as "final sale" are not eligible for return or refund. Personalized or customized items may also be ineligible for return unless defective.

To initiate a return, please contact our support team with your order number. Once your return is received and inspected, we will process your refund to the original payment method within 5-7 business days.

If you receive a damaged or defective item, please contact us immediately with photos. We will arrange for a replacement or full refund, including any shipping costs.`,
  },
  {
    title: "6. Privacy Policy",
    icon: Lock,
    content: `Your privacy is important to us. Our Privacy Policy, which is incorporated by reference, describes how we collect, use, and share information about you when you use our services.

We collect information you provide directly, such as your name, email, shipping address, and payment information. We also automatically collect certain information when you use our service, including your IP address, device information, and browsing behavior.

We use your information to:
• Process and fulfill your orders
• Communicate with you about your orders and our services
• Personalize your shopping experience
• Improve our website and services
• Prevent fraud and ensure security

We do not sell your personal information to third parties. We may share information with service providers who assist in operating our business, such as payment processors and shipping partners.

For more details, please review our full Privacy Policy. By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.`,
  },
  {
    title: "7. Limitation of Liability",
    icon: AlertCircle,
    content: `BlazeCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.

In no event shall our total liability exceed the amount you paid to us in the twelve months preceding the claim.

Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.

We are not responsible for:
• Any interruptions or errors in service
• Loss of data or content
• Unauthorized access to our systems
• Third-party actions or content
• Damages beyond our reasonable control

This limitation of liability applies to all claims, whether based on contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damage.`,
  },
  {
    title: "8. Contact Information",
    icon: Mail,
    content: `If you have any questions about these Terms, please contact us at:

Email: legal@blazecart.com
Address: 123 Commerce Street, Tech City, TC 12345
Phone: 1-800-BLAZECART

We aim to respond to all inquiries within 2-3 business days.

For customer support inquiries related to orders, returns, or general questions about products, please contact our customer support team at support@blazecart.com.

Thank you for using BlazeCart!`,
  },
]

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy", icon: Lock },
  { label: "Shipping Policy", href: "/shipping", icon: Truck },
  { label: "Return Policy", href: "/returns", icon: RotateCcw },
  { label: "FAQ", href: "/faq", icon: FileText },
]

export default function TermsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
            <Scale className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Legal Information</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            Terms of{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Service
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Please read these terms carefully before using our services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"
          >
            <Badge className="bg-[#F57224]/10 text-[#F57224] border-none">
              Last updated: January 2025
            </Badge>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="glass-premium rounded-xl p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <FileText className="size-4 text-[#F57224]" />
                  Table of Contents
                </h3>
                <div className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="block text-sm text-muted-foreground transition-colors hover:text-[#F57224]"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-premium rounded-xl p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Heart className="size-4 text-[#F57224]" />
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                    >
                      <span className="flex items-center gap-2">
                        <link.icon className="size-3" />
                        {link.label}
                      </span>
                      <ArrowRight className="size-3" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="glass-premium rounded-xl bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Shield className="size-4 text-[#F57224]" />
                  Have Questions?
                </h3>
                <p className="mb-4 text-xs text-muted-foreground/70">
                  Our legal team is here to help with any questions about our terms.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 text-sm shadow-glow">
                    Contact Legal Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-premium rounded-2xl p-6 md:p-10">
              {sections.map((section, index) => (
                <div key={index} id={`section-${index}`}>
                  <div className="mb-6 scroll-mt-24">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-[#F57224]/10 p-2">
                        <section.icon className="size-5 text-[#F57224]" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                  {index < sections.length - 1 && (
                    <Separator className="my-8 bg-muted/30" />
                  )}
                </div>
              ))}

              {/* Agreement Footer */}
              <div className="mt-8 rounded-xl bg-gradient-to-r from-[#F57224]/10 to-transparent p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="size-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">By using our services, you agree to these terms</h3>
                    <p className="mt-1 text-sm text-muted-foreground/70">
                      These Terms of Service constitute a binding agreement between you and BlazeCart.
                      Please review them carefully before making any purchase or using our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}