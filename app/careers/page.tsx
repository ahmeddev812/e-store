"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, Star, Award, GraduationCap, ArrowRight, Sparkles, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const openPositions = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build and scale the next generation of ecommerce platform features.",
  },
  {
    title: "Marketing Lead",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    description: "Drive brand strategy and lead campaigns across digital channels.",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Remote",
    description: "Craft seamless and delightful user experiences for millions of shoppers.",
  },
  {
    title: "Customer Support Specialist",
    department: "Support",
    location: "Austin, TX",
    type: "Part-time",
    description: "Deliver world-class support and ensure customer satisfaction.",
  },
  {
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Optimize logistics and manage end-to-end supply chain operations.",
  },
]

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage." },
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive with flexible scheduling." },
  { icon: Star, title: "Growth Opportunities", description: "Continuous learning, mentorship, and career advancement." },
  { icon: Users, title: "Team Events", description: "Regular team outings, hackathons, and social gatherings." },
  { icon: GraduationCap, title: "Gym Membership", description: "Fully subsidized gym membership for your wellness." },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function CareersPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div ref={sectionRef} className={`overflow-x-hidden bg-background`}>
      {/* Background - Theme Aware */}
      <div className={`fixed inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-background`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/15 blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full bg-[#D4A853]/8 blur-[140px] animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/4 blur-[100px]`} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#D4A853]/10 px-4 py-2 mb-6"
            >
              <Sparkles className="size-4 text-[#F57224]" />
              <span className="text-sm font-medium text-[#F57224]">Careers at BlazeCart</span>
            </motion.div>

            <h1 className={`text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl`}>
              Join{" "}
              <span className="relative inline-block">
                <span className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/25 to-[#D4A853]/15 blur-xl`} />
                <span className="relative bg-gradient-to-r from-[#F57224] to-[#D4A853] bg-clip-text text-transparent">
                  Our Team
                </span>
              </span>
            </h1>
            <p className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto`}>
              At BlazeCart, we&apos;re building the future of ecommerce. Join a passionate team
              dedicated to delivering premium shopping experiences to millions worldwide.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Link href="#openings">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-base px-8 py-6 text-white">
                  View Openings <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className={`border-border hover:border-[#F57224]/50 text-base px-8 py-6`}>
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Theme Aware */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className={`text-xs text-muted-foreground/70`}>Explore opportunities</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
              className={`flex items-center justify-center size-6 rounded-full border border-border`}
            >
              <ChevronRight className={`size-4 rotate-90 text-muted-foreground/70`} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="openings">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#D4A853]/10 text-[#F57224] border-[#F57224]/30">
            Why Join Us
          </Badge>
          <h2 className={`text-3xl font-bold text-foreground`}>
            Perks & <span className="text-gradient">Benefits</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto mt-2`}>
            We believe in taking care of our team members with industry-leading benefits.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className={`glass-premium p-6 h-full text-center transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)] group`}>
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#D4A853]/10 text-[#F57224] mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="size-7" />
                  </div>
                  <h3 className={`text-lg font-semibold text-foreground mb-2`}>{benefit.title}</h3>
                  <p className={`text-sm text-muted-foreground leading-relaxed`}>{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#D4A853]/10 text-[#F57224] border-[#F57224]/30">
            Open Positions
          </Badge>
          <h2 className={`text-3xl font-bold text-foreground`}>
            Current <span className="text-gradient">Opportunities</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto mt-2`}>
            Find your place at BlazeCart and help shape the future of ecommerce.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {openPositions.map((position, index) => (
            <motion.div key={position.title} variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className={`glass-premium p-6 h-full transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)] group`}>
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#D4A853]/10 text-[#F57224] mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="size-6" />
                  </div>

                  <h3 className={`text-xl font-semibold text-foreground group-hover:text-[#F57224] transition-colors`}>
                    {position.title}
                  </h3>

                  <Badge className="mt-2 self-start bg-gradient-to-r from-[#F57224]/15 to-[#D4A853]/10 text-[#F57224] border-[#F57224]/20 text-xs">
                    {position.department}
                  </Badge>

                  <p className={`text-sm text-muted-foreground mt-3 leading-relaxed flex-1`}>
                    {position.description}
                  </p>

                  <div className={`mt-4 pt-4 border-t border-border space-y-2`}>
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground`}>
                      <MapPin className="size-4 text-[#F57224]" />
                      {position.location}
                    </div>
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground`}>
                      <Clock className="size-4 text-[#D4A853]" />
                      {position.type}
                    </div>
                  </div>

                  <Button className="mt-4 w-full bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-white group/btn">
                    Apply Now <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "Team Members", value: "200+", color: "from-[#F57224]/20 to-[#F57224]/5" },
            { icon: Award, label: "Years in Business", value: "5+", color: "from-[#D4A853]/20 to-[#D4A853]/5" },
            { icon: Star, label: "Employee Rating", value: "4.8", suffix: "★", color: "from-[#F57224]/20 to-[#D4A853]/10" },
            { icon: Briefcase, label: "Departments", value: "12", color: "from-[#F57224]/20 to-[#F57224]/5" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
            >
              <Card className={`glass-premium text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(245,114,36,0.2)] group`}>
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#D4A853]/10 text-[#F57224] mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="size-7" />
                  </div>
                  <div className={`text-4xl font-bold text-foreground mb-2`}>
                    {stat.value}
                    {stat.suffix && <span className="text-xl text-[#F57224]">{stat.suffix}</span>}
                  </div>
                  <div className={`text-sm text-muted-foreground`}>{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Theme Aware */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`glass-premium relative overflow-hidden rounded-3xl p-12 text-center`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-[#F57224]/8 via-transparent to-[#D4A853]/4`} />
          <div className="relative">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F57224]/15 to-[#D4A853]/8 mb-6`}>
              <Users className="size-8 text-[#F57224]" />
            </div>
            <h2 className={`text-3xl font-bold text-foreground`}>Ready to Make an Impact?</h2>
            <p className={`mt-2 text-muted-foreground max-w-md mx-auto`}>
              Don&apos;t see the perfect role? Send us your resume and we&apos;ll keep you in mind
              for future opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange text-base px-8 py-6 text-white">
                Submit Resume <ArrowRight className="ml-2 size-5" />
              </Button>
              <Link href="/">
                <Button variant="outline" className={`border-border hover:border-[#F57224]/50 text-base px-8 py-6`}>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}