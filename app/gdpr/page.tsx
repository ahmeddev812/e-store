"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Globe,
  UserCheck,
  Download,
  Trash2,
  Edit,
  Eye,
  ArrowRight,
  CheckCircle,
  Info,
  FileText,
} from "lucide-react"

const gdprRights = [
  {
    title: "Right to Access",
    icon: Eye,
    description:
      "You have the right to obtain confirmation from us as to whether your personal data is being processed, and where that is the case, access to the personal data and information regarding the processing purposes, categories of data, recipients, retention periods, and your rights.",
  },
  {
    title: "Right to Rectification",
    icon: Edit,
    description:
      "You have the right to request the correction of inaccurate personal data concerning you. Depending on the purposes of processing, you may also have the right to have incomplete personal data completed, including by providing a supplementary statement.",
  },
  {
    title: "Right to Erasure (Right to Be Forgotten)",
    icon: Trash2,
    description:
      "You have the right to request the deletion of your personal data without undue delay where the data is no longer necessary for the purposes collected, you withdraw consent, or the data has been unlawfully processed, subject to certain legal exceptions.",
  },
  {
    title: "Right to Restriction of Processing",
    icon: Shield,
    description:
      "You have the right to restrict the processing of your personal data where you contest the accuracy of the data, the processing is unlawful, or we no longer need the data but you require it for legal claims.",
  },
  {
    title: "Right to Data Portability",
    icon: Download,
    description:
      "You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and have the right to transmit that data to another controller without hindrance from us, where technically feasible.",
  },
  {
    title: "Right to Object",
    icon: Globe,
    description:
      "You have the right to object, on grounds relating to your particular situation, to the processing of your personal data for direct marketing purposes or where processing is based on legitimate interests or public interest.",
  },
  {
    title: "Right to Withdraw Consent",
    icon: UserCheck,
    description:
      "Where processing is based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.",
  },
  {
    title: "Right to Lodge a Complaint",
    icon: Info,
    description:
      "You have the right to lodge a complaint with your local supervisory authority if you believe that the processing of your personal data infringes the GDPR. This right is without prejudice to any other administrative or judicial remedy.",
  },
]

const sections = [
  {
    title: "Data We Collect",
    icon: FileText,
    content: `Under the GDPR, we collect and process the following categories of personal data:

Identity Data: full name, username, title, date of birth
Contact Data: email address, billing address, shipping address, phone number
Financial Data: payment card details, bank account information (processed via PCI-compliant third-party processors)
Transaction Data: order history, purchase details, product preferences, return and refund records
Technical Data: IP address, browser type and version, time zone setting, browser plug-in types, operating system, device identifiers
Profile Data: username and password, preferences, purchase history, interests, feedback and survey responses
Usage Data: information about how you use our website, products, and services
Marketing and Communications Data: your preferences in receiving marketing from us and your communication preferences

We collect this data directly from you through account registration, order placement, and communications. We also automatically collect technical and usage data through cookies and similar tracking technologies, and may receive data from analytics providers, advertising networks, and payment processors.`,
  },
  {
    title: "How We Use Your Data",
    icon: Globe,
    content: `We process your personal data under the following lawful bases as defined in Article 6 of the GDPR:

Performance of a Contract: to process and fulfill your orders, manage payments, provide customer support, and deliver purchased products and services.

Legitimate Interests: to improve our website and services, ensure network and information security, prevent fraud, conduct direct marketing (subject to your right to object), and analyze customer usage patterns.

Consent: to send you marketing communications (where required by law), place non-essential cookies on your device, and process special category data where applicable.

Legal Obligation: to comply with applicable laws and regulations, respond to lawful requests from authorities, maintain records for tax and accounting purposes, and enforce our Terms of Service.

We will not process your personal data for purposes incompatible with those described above without providing you prior notice and, where required, obtaining your consent.`,
  },
  {
    title: "Data Retention",
    icon: Info,
    content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.

Account Data: retained for the duration of your account plus 6 years following account closure, to comply with tax and legal obligations.

Transaction Data: retained for 6 years after the transaction, consistent with statutory retention periods.

Marketing Preferences: retained until you withdraw consent or opt out of marketing communications.

Technical and Usage Data: retained for 26 months from the date of collection, unless a longer retention period is required by law.

Cookie Data: retained in accordance with our Cookie Policy, typically ranging from session duration to 12 months.

Upon expiry of the applicable retention period, your personal data will be securely deleted or anonymized so that it can no longer be associated with you. We implement data minimization principles to ensure we do not retain data beyond what is strictly necessary.`,
  },
  {
    title: "International Transfers",
    icon: Globe,
    content: `As a global ecommerce platform, we may transfer your personal data to countries outside the European Economic Area (EEA) for processing and storage.

Adequacy Decisions: Where we transfer data to countries that the European Commission has deemed to provide an adequate level of data protection, no additional safeguards are required.

Standard Contractual Clauses: For transfers to countries without an adequacy decision, we implement the European Commission's Standard Contractual Clauses (SCCs) to ensure your data receives an equivalent level of protection as required under the GDPR.

Transfer Impact Assessments: We conduct transfer impact assessments to evaluate the legal framework and practices of the recipient country to ensure appropriate safeguards are in place.

Service Providers: Our third-party service providers (cloud infrastructure, payment processors, analytics, and customer support) may store or process data in various jurisdictions. All such providers are contractually bound to process data in compliance with the GDPR and implement appropriate technical and organizational measures.

If you have questions about the specific mechanism used for transferring your data, please contact our Data Protection Officer.`,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function GDPRPage() {
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
            <Shield className="size-4 text-[#F57224]" />
            <span className="text-sm font-medium text-[#F57224]">Data Protection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            GDPR{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
              <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Your privacy rights and how we protect your personal data under the General Data Protection Regulation
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

      {/* Back Navigation */}
      <div className="relative mx-auto max-w-7xl px-6 -mt-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-[#F57224] transition-colors"
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to Privacy Policy
          </Link>
        </motion.div>
      </div>

      {/* Your Rights Under GDPR */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Rights Under GDPR
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The General Data Protection Regulation grants you eight fundamental rights regarding your personal data.
            We are committed to upholding these rights and responding to all requests within the statutory timeframe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {gdprRights.map((right, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="premium" padding="lg" className="h-full group">
                <CardContent className="h-full flex flex-col">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 p-3 w-fit group-hover:scale-110 transition-transform duration-300">
                    <right.icon className="size-6 text-[#F57224]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{right.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{right.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Detailed Information Sections */}
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
              <div className="glass-premium rounded-xl p-5">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <FileText className="size-4 text-[#F57224]" />
                  On This Page
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
                  <a
                    href="#dpo"
                    className="block text-sm text-muted-foreground transition-colors hover:text-[#F57224]"
                  >
                    Contact Our DPO
                  </a>
                </div>
              </div>

              <div className="glass-premium rounded-xl bg-gradient-to-br from-[#F57224]/10 to-[#F57224]/5 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Shield className="size-4 text-[#F57224]" />
                  Related Policies
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/privacy"
                    className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="size-3" />
                      Privacy Policy
                    </span>
                    <ArrowRight className="size-3" />
                  </Link>
                  <Link
                    href="/cookies"
                    className="flex items-center justify-between rounded-lg p-2 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:text-[#F57224]"
                  >
                    <span className="flex items-center gap-2">
                      <Info className="size-3" />
                      Cookie Policy
                    </span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="glass-premium rounded-2xl p-6 md:p-10 scroll-mt-24">
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
            ))}

            {/* Contact DPO Section */}
            <div id="dpo" className="glass-premium rounded-2xl p-6 md:p-10 scroll-mt-24">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-[#F57224]/10 p-2">
                  <UserCheck className="size-5 text-[#F57224]" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Contact Our Data Protection Officer</h2>
              </div>

              <div className="text-muted-foreground leading-relaxed mb-6">
                <p className="mb-4">
                  If you have any questions, concerns, or requests regarding how we process your personal data
                  under the GDPR, or if you wish to exercise any of your data protection rights, please contact
                  our Data Protection Officer (DPO).
                </p>
                <p className="mb-4">
                  Our DPO is responsible for monitoring our compliance with the GDPR, advising on data protection
                  obligations, and serving as the point of contact for data subjects and supervisory authorities.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#F57224]/10 to-transparent p-6 border border-[#F57224]/10">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#F57224]/20 p-2 flex-shrink-0">
                    <Shield className="size-5 text-[#F57224]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Data Protection Officer</h3>
                    <p className="text-sm text-muted-foreground">Email: dpo@blazecart.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We will acknowledge receipt of your request within 3 business days and respond
                      substantively within 30 calendar days. Complex requests may be extended by up to
                      60 additional days, and we will inform you of any such extension within the initial
                      30-day period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent p-6 border border-emerald-500/10">
                <div className="flex items-start gap-4">
                  <CheckCircle className="size-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">We take your privacy seriously</h3>
                    <p className="mt-1 text-sm text-muted-foreground/70">
                      BlazeCart is committed to protecting your personal data and respecting your privacy rights
                      under the General Data Protection Regulation (GDPR) and all applicable data protection laws.
                      For any data protection concerns, our DPO is available to assist you.
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
