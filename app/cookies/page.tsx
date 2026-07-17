"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Cookie,
  Settings,
  Shield,
  Info,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronDown,
  ArrowLeft,
  FileText,
  ExternalLink,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const cookieTypes = [
  {
    category: "Essential",
    icon: Shield,
    purpose: "Required for core website functionality, secure checkout, and account authentication.",
    duration: "Session / Persistent (up to 1 year)",
    examples: ["Session tokens", "CSRF tokens", "Cart data", "Load balancing"],
    alwaysOn: true,
  },
  {
    category: "Analytics",
    icon: Info,
    purpose: "Help us understand how visitors interact with our site — which pages are popular, how users navigate, and where errors occur.",
    duration: "Persistent (up to 2 years)",
    examples: ["Page visit counts", "Click tracking", "Scroll depth", "Error monitoring"],
    alwaysOn: false,
  },
  {
    category: "Marketing",
    icon: ArrowRight,
    purpose: "Used to deliver relevant advertisements, measure ad campaign effectiveness, and limit how often you see an ad.",
    duration: "Persistent (up to 90 days)",
    examples: ["Ad identifiers", "Retargeting pixels", "Campaign tracking", "Conversion pixels"],
    alwaysOn: false,
  },
  {
    category: "Functional",
    icon: Settings,
    purpose: "Enable enhanced features like remembering your preferences, language settings, and personalized content.",
    duration: "Persistent (up to 1 year)",
    examples: ["Language preference", "Currency preference", "Saved items", "Recently viewed"],
    alwaysOn: false,
  },
]

const sections: {
  id: string
  title: string
  icon: React.ElementType
  content: React.ReactNode
}[] = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies",
    icon: Info,
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
          when you visit a website. They allow the website to recognize your device and store information
          about your preferences or past actions.
        </p>
        <p>
          Cookies are widely used to make websites work more efficiently, enhance user experience,
          and provide valuable information to website owners. Some cookies are essential for the
          basic functionality of our platform, while others help us improve your shopping experience
          and deliver relevant content.
        </p>
        <p>
          Cookies cannot be used to run programs or deliver viruses to your device. They are uniquely
          assigned to your browser and can only be read by the website that set them. This means that
          a cookie set by premium-ecommerce.com cannot be read by any other website you visit.
        </p>
        <div className="rounded-xl bg-[#F57224]/5 border border-[#F57224]/10 p-4">
          <p className="text-sm">
            <strong className="text-foreground">Did you know?</strong> The term &ldquo;cookie&rdquo; was
            coined by web browser programmer Lou Montulli in 1994, derived from the term
            &ldquo;magic cookie,&rdquo; a packet of data a program receives and sends back unchanged.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    icon: Cookie,
    content: (
      <div className="space-y-6">
        {cookieTypes.map((type) => (
          <div
            key={type.category}
            className="rounded-xl bg-accent/10 border border-border/50 p-5 transition-all hover:border-[#F57224]/20 hover:bg-[#F57224]/[0.02]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#F57224]/10 p-2.5 flex-shrink-0">
                <type.icon className="size-5 text-[#F57224]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <h4 className="font-semibold text-foreground">{type.category} Cookies</h4>
                  {type.alwaysOn && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-none text-[9px]">
                      Always Active
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{type.purpose}</p>
                <div className="flex flex-wrap gap-1.5">
                  {type.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground/70 border border-border/50"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-foreground/30 mt-2">
                  Duration: {type.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    icon: ExternalLink,
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Some cookies on our website are placed by third-party service providers on our behalf.
          These third parties may use cookies to collect information about your online activities
          across different websites and over time for analytics, advertising, and other purposes.
        </p>
        <div className="rounded-xl bg-accent/10 border border-border/50 p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2 flex-shrink-0">
              <Shield className="size-4 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Analytics Providers</h4>
              <p className="text-sm text-muted-foreground">
                We use Google Analytics, Mixpanel, and Hotjar to understand how visitors use our
                website. These services set cookies to track page visits, session duration, and
                user behavior patterns. All data is anonymized where possible.
              </p>
            </div>
          </div>
          <Separator className="bg-muted/50" />
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-purple-500/10 p-2 flex-shrink-0">
              <ArrowRight className="size-4 text-purple-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Advertising Partners</h4>
              <p className="text-sm text-muted-foreground">
                We partner with Google Ads, Facebook Ads, and TikTok Ads to deliver targeted
                advertising. These platforms set cookies to build interest profiles and serve
                relevant advertisements based on your browsing behavior.
              </p>
            </div>
          </div>
          <Separator className="bg-muted/50" />
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 flex-shrink-0">
              <Settings className="size-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Payment Processors</h4>
              <p className="text-sm text-muted-foreground">
                Stripe, PayPal, and other payment gateways may set session cookies during checkout
                to facilitate secure payment processing and fraud detection.
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm">
          We do not control the cookies set by these third parties. We recommend reviewing the
          privacy policies of each service provider to understand their data practices. You can
          opt out of third-party cookies through your browser settings or through the opt-out
          mechanisms provided by each service.
        </p>
      </div>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    icon: Settings,
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Most web browsers allow you to control cookies through their settings preferences.
          You can choose to block all cookies, delete existing cookies, or set up notifications
          for when a cookie is being placed on your device.
        </p>
        <div className="rounded-xl bg-accent/10 border border-border/50 p-5 space-y-3">
          <p className="text-sm font-semibold text-foreground mb-2">
            How to manage cookies in popular browsers:
          </p>
          {[
            { name: "Google Chrome", steps: "Settings → Privacy and Security → Cookies and other site data" },
            { name: "Mozilla Firefox", steps: "Options → Privacy & Security → Cookies and Site Data" },
            { name: "Safari", steps: "Preferences → Privacy → Cookies and website data" },
            { name: "Microsoft Edge", steps: "Settings → Cookies and site permissions → Cookies and site data" },
          ].map((browser) => (
            <div key={browser.name} className="flex items-start gap-3">
              <CheckCircle className="size-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-foreground">{browser.name}:</span>
                <span className="text-sm text-muted-foreground"> {browser.steps}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-amber-500/5 border border-amber-500/10 p-4 flex items-start gap-3">
          <AlertTriangle className="size-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <strong className="text-amber-300">Important:</strong> If you disable or block cookies,
            some features of our website may not function properly. Essential cookies are required
            for core functionality including secure login, shopping cart operations, and checkout
            processing.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "your-choices",
    title: "Your Choices",
    icon: CheckCircle,
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          You have several options when it comes to controlling cookies and your data privacy:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-accent/10 border border-border/50 p-5">
            <div className="rounded-lg bg-[#F57224]/10 p-2 w-fit mb-3">
              <Settings className="size-4 text-[#F57224]" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-2">Browser Controls</h4>
            <p className="text-sm text-muted-foreground">
              Use your browser settings to block or delete cookies. This gives you the most
              granular control over which cookies are stored on your device.
            </p>
          </div>
          <div className="rounded-xl bg-accent/10 border border-border/50 p-5">
            <div className="rounded-lg bg-[#F57224]/10 p-2 w-fit mb-3">
              <XCircle className="size-4 text-[#F57224]" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-2">Opt-Out Tools</h4>
            <p className="text-sm text-muted-foreground">
              Use industry opt-out tools such as the Network Advertising Initiative (NAI) opt-out
              page or the Digital Advertising Alliance (DAA) opt-out tool.
            </p>
          </div>
          <div className="rounded-xl bg-accent/10 border border-border/50 p-5">
            <div className="rounded-lg bg-[#F57224]/10 p-2 w-fit mb-3">
              <Shield className="size-4 text-[#F57224]" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-2">Do Not Track</h4>
            <p className="text-sm text-muted-foreground">
              Some browsers support a &ldquo;Do Not Track&rdquo; (DNT) signal that requests
              websites to disable tracking. We respect DNT signals where technically feasible.
            </p>
          </div>
          <div className="rounded-xl bg-accent/10 border border-border/50 p-5">
            <div className="rounded-lg bg-[#F57224]/10 p-2 w-fit mb-3">
              <FileText className="size-4 text-[#F57224]" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-2">Cookie Consent Tool</h4>
            <p className="text-sm text-muted-foreground">
              On your first visit, you were presented with a cookie consent banner. You can
              revisit and modify your preferences at any time through the consent management tool.
            </p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function CookiesPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["what-are-cookies"]))
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      {/* Back Navigation */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#F57224] group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-12 pb-16">
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
            <Cookie className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Data & Privacy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            Cookie{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Policy
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            How we use cookies and similar technologies to enhance your shopping experience
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
              <Card className="glass-premium" padding="none">
                <CardContent className="p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <FileText className="size-4 text-[#F57224]" />
                    On This Page
                  </h3>
                  <div className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#section-${section.id}`}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                      >
                        <section.icon className="size-3" />
                        {section.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="glass-premium" padding="none">
                <CardContent className="p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ArrowRight className="size-4 text-[#F57224]" />
                    Related Policies
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/privacy"
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                    >
                      <span className="flex items-center gap-2">
                        <Shield className="size-3" />
                        Privacy Policy
                      </span>
                      <ArrowRight className="size-3" />
                    </Link>
                    <Link
                      href="/gdpr"
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="size-3" />
                        GDPR Compliance
                      </span>
                      <ArrowRight className="size-3" />
                    </Link>
                    <Link
                      href="/terms"
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                    >
                      <span className="flex items-center gap-2">
                        <AlertTriangle className="size-3" />
                        Terms of Service
                      </span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Consent Summary Card */}
              <Card className="glass-premium bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5" padding="none">
                <CardContent className="p-5">
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle className="size-4 text-[#F57224]" />
                    Cookie Preferences
                  </h3>
                  <p className="mb-4 text-xs text-muted-foreground/70">
                    You can review and update your cookie consent preferences at any time.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#F57224] to-orange-500 text-sm shadow-glow">
                    <Settings className="mr-2 size-3" />
                    Manage Consent
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Introduction Card */}
            <Card className="glass-premium" padding="none">
              <CardContent className="p-6 md:p-8">
                <div className="rounded-xl bg-gradient-to-r from-[#F57224]/5 to-transparent border border-[#F57224]/10 p-5 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This Cookie Policy explains what cookies are, how we use them, the types of
                    cookies we use, and how you can control them. By using our website, you consent
                    to the use of cookies in accordance with this policy. If you do not agree to
                    our use of cookies, you should disable them through your browser settings or
                    refrain from using our website.
                  </p>
                </div>

                {/* Expandable Sections */}
                {sections.map((section, index) => (
                  <div key={section.id} id={`section-${section.id}`}>
                    <div className="border-b border-border last:border-b-0">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex w-full items-center justify-between py-5 text-left transition-all duration-300 hover:pl-2 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-[#F57224]/10 p-2 group-hover:bg-[#F57224]/20 transition-colors">
                            <section.icon className="size-5 text-[#F57224]" />
                          </div>
                          <h2 className="text-lg font-bold text-foreground group-hover:text-[#F57224] transition-colors">
                            {section.title}
                          </h2>
                        </div>
                        <motion.span
                          animate={{ rotate: openSections.has(section.id) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 rounded-full bg-[#F57224]/10 p-1.5 text-[#F57224]"
                        >
                          <ChevronDown className="size-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openSections.has(section.id) && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-6 pl-0 md:pl-14">
                              {section.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {index < sections.length - 1 && (
                      <Separator className="bg-muted/50" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cookie Types Table */}
            <Card className="glass-premium" padding="none">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-[#F57224]/10 p-2">
                    <Cookie className="size-5 text-[#F57224]" />
                  </div>
                  Cookie Types Overview
                </h2>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 pr-4 text-sm font-semibold text-foreground">Type</th>
                        <th className="pb-3 pr-4 text-sm font-semibold text-foreground">Purpose</th>
                        <th className="pb-3 pr-4 text-sm font-semibold text-foreground">Duration</th>
                        <th className="pb-3 text-sm font-semibold text-foreground">Control</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTypes.map((type) => (
                        <tr key={type.category} className="border-b border-border/50 last:border-0">
                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="rounded-md bg-[#F57224]/10 p-1.5">
                                <type.icon className="size-4 text-[#F57224]" />
                              </div>
                              <span className="text-sm font-medium text-foreground">{type.category}</span>
                            </div>
                          </td>
                          <td className="py-4 pr-4">
                            <p className="text-sm text-muted-foreground max-w-xs">{type.purpose}</p>
                          </td>
                          <td className="py-4 pr-4">
                            <span className="text-sm text-muted-foreground">{type.duration}</span>
                          </td>
                          <td className="py-4">
                            {type.alwaysOn ? (
                              <Badge className="bg-emerald-500/10 text-emerald-400 border-none text-[10px]">
                                Always Active
                              </Badge>
                            ) : (
                              <Badge className="bg-muted/30 text-muted-foreground border-none text-[10px]">
                                Optional
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {cookieTypes.map((type) => (
                    <div key={type.category} className="rounded-xl bg-accent/10 border border-border/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="rounded-md bg-[#F57224]/10 p-1.5">
                          <type.icon className="size-4 text-[#F57224]" />
                        </div>
                        <span className="font-semibold text-foreground text-sm">{type.category}</span>
                        {type.alwaysOn ? (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-none text-[9px] ml-auto">
                            Always Active
                          </Badge>
                        ) : (
                          <Badge className="bg-muted/30 text-muted-foreground border-none text-[9px] ml-auto">
                            Optional
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{type.purpose}</p>
                      <p className="text-[11px] text-foreground/30">Duration: {type.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policy Footer */}
            <Card className="glass-premium bg-gradient-to-br from-[#F57224]/5 to-transparent" padding="none">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="rounded-xl bg-[#F57224]/10 p-3 flex-shrink-0">
                    <Shield className="size-8 text-[#F57224]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Questions About Our Cookie Policy?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you have any questions or concerns about how we use cookies, please
                      review our full Privacy Policy or contact our Data Protection Officer.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/privacy">
                        <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-sm">
                          <Shield className="mr-2 size-3" />
                          Privacy Policy
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-border hover:border-[#F57224]/50 text-sm">
                          <ExternalLink className="mr-2 size-3" />
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GDPR & Compliance Note */}
            <div className="rounded-xl bg-gradient-to-r from-[#F57224]/10 to-transparent border border-[#F57224]/10 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="size-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">GDPR & ePrivacy Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    We comply with the General Data Protection Regulation (GDPR), the ePrivacy
                    Directive, and all applicable data protection laws. Our cookie usage follows
                    the principles of data minimization, purpose limitation, and user consent.
                    For more details, please see our{" "}
                    <Link href="/privacy" className="text-[#F57224] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/gdpr" className="text-[#F57224] hover:underline">
                      GDPR Compliance
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
