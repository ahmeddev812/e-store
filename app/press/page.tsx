"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Newspaper, Download, Mail, Calendar, ExternalLink, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const pressReleases = [
  {
    title: "BlazeCart Raises $10M Series A to Transform E-Commerce in Emerging Markets",
    date: "March 15, 2025",
    summary:
      "BlazeCart announced today that it has secured $10 million in Series A funding led by Venture Capital Partners, with participation from existing investors. The funds will be used to expand operations, enhance AI-powered recommendations, and grow the team to 200+ employees by year-end.",
    source: "TechCrunch",
    sourceUrl: "#",
    tags: ["Funding", "Growth"],
  },
  {
    title: "BlazeCart Launches Premium Marketplace Featuring 500+ Verified Brands",
    date: "January 22, 2025",
    summary:
      "BlazeCart unveiled its new premium marketplace, bringing together over 500 verified brands in electronics, fashion, home goods, and more. The curated platform features exclusive collections, personalized shopping experiences, and guaranteed authentic products with enhanced buyer protection.",
    source: "Forbes",
    sourceUrl: "#",
    tags: ["Product Launch", "Marketplace"],
  },
  {
    title: "BlazeCart Partners with Top Global Brands to Expand Product Categories",
    date: "November 8, 2024",
    summary:
      "BlazeCart announced strategic partnerships with leading global brands including Samsung, Nike, and Apple to bring their full product catalogs to the platform. The partnerships include exclusive launch rights for select products in key markets and integrated logistics for faster deliveries.",
    source: "Business Insider",
    sourceUrl: "#",
    tags: ["Partnership", "Expansion"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function PressPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-background' : 'bg-gray-50'}`}>
      {/* Background - Theme Aware */}
      <div className={`fixed inset-0 ${isDark 
        ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' 
        : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full ${isDark ? 'bg-[#F57224]/10' : 'bg-[#F57224]/5'} blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/3 right-1/4 size-64 rounded-full ${isDark ? 'bg-[#D4A853]/10' : 'bg-[#D4A853]/5'} blur-[100px] animate-pulse delay-500`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/3'} blur-[100px]`} />
      </div>

      {/* Back Navigation */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-muted-foreground hover:text-[#F57224]' : 'text-gray-500 hover:text-[#F57224]'} transition-colors`}
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to Home
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
            <Newspaper className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Press & Media</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} sm:text-5xl lg:text-6xl`}
          >
            In the{" "}
            <span className="relative inline-block">
              <span className={`absolute -inset-1 rounded-lg ${isDark ? 'bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20' : 'bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/10'} blur-xl`} />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                News
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mx-auto mt-4 max-w-2xl ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}
          >
            Latest announcements, media coverage, and press resources from BlazeCart.
          </motion.p>
        </motion.div>
      </section>

      {/* Press Releases Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8"
        >
          {pressReleases.map((release, index) => (
            <motion.div key={release.title} variants={itemVariants}>
              <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-md'} overflow-hidden transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)] group`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className={`inline-flex items-center gap-1.5 ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                          <Calendar className="size-3.5" />
                          {release.date}
                        </span>
                        <span className={isDark ? 'text-white/20' : 'text-gray-300'}>|</span>
                        <span className="inline-flex items-center gap-1.5 text-[#D4A853]">
                          <FileText className="size-3.5" />
                          {release.source}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} transition-colors group-hover:text-[#F57224] md:text-2xl`}>
                        {release.title}
                      </h3>

                      <p className={`text-sm leading-relaxed ${isDark ? 'text-muted-foreground' : 'text-gray-600'} md:text-base`}>
                        {release.summary}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {release.tags.map((tag) => (
                            <Badge
                              key={tag}
                              className="border-[#F57224]/20 bg-[#F57224]/10 text-[#F57224] text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          href={release.sourceUrl}
                          className="inline-flex items-center gap-1.5 text-sm text-[#D4A853] transition-colors hover:text-[#F57224]"
                        >
                          Read full article
                          <ExternalLink className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Media Kit Section - Theme Aware */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} relative overflow-hidden rounded-3xl p-8 md:p-12`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#F57224]/10 via-transparent to-[#D4A853]/5' : 'from-[#F57224]/5 via-transparent to-[#D4A853]/3'}`} />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
            <div className="space-y-2">
              <div className={`inline-flex items-center justify-center rounded-xl ${isDark ? 'bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5' : 'bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5'} p-3 md:hidden`}>
                <Download className="size-6 text-[#F57224]" />
              </div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Media Kit</h2>
              <p className={`max-w-lg text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
                Download our press kit including brand assets, logos, product images, and executive bios
                for media and press coverage.
              </p>
            </div>
            <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange shrink-0 text-white">
              <Download className="mr-2 size-4" />
              Download Media Kit
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Press Inquiries Section */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-none">
            Press Inquiries
          </Badge>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Get in Touch</h2>
          <p className={`mx-auto mt-2 max-w-lg text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
            For press-related inquiries, interview requests, or media partnerships, please reach out to
            our communications team.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-md"
          >
            <Card className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-md'} transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)]`}>
              <CardContent className="p-6 text-center">
                <div className={`mx-auto mb-4 inline-flex items-center justify-center rounded-xl ${isDark ? 'bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5' : 'bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5'} p-3`}>
                  <Mail className="size-6 text-[#F57224]" />
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Press & Media Contact</h3>
                <Link
                  href="mailto:press@blazecart.com"
                  className="mt-2 inline-flex items-center gap-1.5 text-[#D4A853] transition-colors hover:text-[#F57224]"
                >
                  press@blazecart.com
                  <ExternalLink className="size-3.5" />
                </Link>
                <p className={`mt-3 text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                  We aim to respond to all press inquiries within 24 hours.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className={`${isDark ? 'border-border text-foreground/70 hover:border-[#F57224]/50 hover:text-[#F57224]' : 'border-gray-300 text-gray-600 hover:border-[#F57224]/50 hover:text-[#F57224]'}`}
                    >
                      Contact Our Team
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Coverage CTA - Theme Aware */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} relative overflow-hidden rounded-3xl p-8 text-center md:p-12`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#D4A853]/5 via-transparent to-[#F57224]/10' : 'from-[#D4A853]/3 via-transparent to-[#F57224]/5'}`} />
          <div className="relative">
            <Newspaper className="mx-auto mb-4 size-10 text-[#D4A853]" />
            <h2 className={`text-xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Have a Media Inquiry?</h2>
            <p className={`mx-auto mt-2 max-w-md text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
              We welcome coverage from accredited journalists and media outlets. Reach out to our team
              for interviews, quotes, and story ideas.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="mailto:press@blazecart.com">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-white">
                  <Mail className="mr-2 size-4" />
                  Email Press Team
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className={`${isDark ? 'border-border text-foreground/70 hover:border-[#F57224]/50 hover:text-[#F57224]' : 'border-gray-300 text-gray-600 hover:border-[#F57224]/50 hover:text-[#F57224]'}`}
                >
                  Back to Home
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