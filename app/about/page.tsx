"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Users,
  Package,
  MapPin,
  Star,
  Heart,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Globe,
  ChevronRight,
  Crown,
  Sparkles,
  Coffee,
  Rocket,
  Briefcase,
  Target,
  Eye,
  Clock,
  ThumbsUp,
  MessageCircle,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { icon: Users, label: "Happy Customers", value: "10K+", suffix: "", color: "from-blue-500 to-cyan-500" },
  { icon: Package, label: "Products Available", value: "24+", suffix: "K", color: "from-green-500 to-emerald-500" },
  { icon: MapPin, label: "Cities Served", value: "50+", suffix: "", color: "from-purple-500 to-pink-500" },
  { icon: Star, label: "Average Rating", value: "4.8", suffix: "★", color: "from-yellow-500 to-orange-500" },
]

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We put our customers at the center of everything we do. Your satisfaction is our priority.",
    color: "rose",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product in our store goes through rigorous quality checks before reaching you.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We partner with the best logistics providers to ensure your orders reach you quickly.",
    color: "yellow",
  },
  {
    icon: Award,
    title: "Best Value",
    description: "Premium products at competitive prices. We never compromise on quality for price.",
    color: "orange",
  },
  {
    icon: Globe,
    title: "Trusted Brands",
    description: "We partner with verified and trusted brands to bring you authentic products.",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Always Growing",
    description: "We constantly expand our catalog to bring you the latest and greatest products.",
    color: "purple",
  },
]

const teamMembers = [
  { 
    name: "Sarah Johnson", 
    role: "Founder & CEO", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Building the future of ecommerce",
  },
  { 
    name: "Michael Chen", 
    role: "Head of Operations", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Making logistics seamless",
  },
  { 
    name: "Emily Davis", 
    role: "Customer Lead", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "Customer happiness is our goal",
  },
  {
    name: "David Kim",
    role: "Tech Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "Innovation at every step",
  },
]

const milestones = [
  { year: "2020", title: "Founded", description: "Started our journey", icon: Rocket },
  { year: "2021", title: "10K Customers", description: "First milestone reached", icon: Users },
  { year: "2022", title: "50+ Brands", description: "Expanded partnerships", icon: Briefcase },
  { year: "2023", title: "Nationwide", description: "Pan-India delivery", icon: MapPin },
  { year: "2024", title: "BlazeCart Launch", description: "Premium collection", icon: Crown },
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    comment: "The best shopping experience I've ever had! Premium quality products and amazing support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    name: "Rajesh Kumar",
    role: "Verified Buyer",
    comment: "Fast delivery and genuine products. Highly recommended for electronics shopping.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    name: "Anjali Verma",
    role: "Fashion Enthusiast",
    comment: "Their fashion collection is incredible! Great variety and competitive prices.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
  },
]

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

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

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]">
          <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
        </div>

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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 px-4 py-2 mb-6"
            >
              <Sparkles className="size-4 text-[#F57224]" />
              <span className="text-sm font-medium text-[#F57224]">Our Journey</span>
            </motion.div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Our{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F57224]/30 to-[#F57224]/20 blur-xl" />
                <span className="relative bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent">
                  Story
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              BlazeCart was born from a simple idea: make quality products accessible to everyone,
              backed by exceptional customer service and fast delivery.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/70">Discover our story</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
              className="flex items-center justify-center size-6 rounded-full border border-border"
            >
              <ChevronRight className="size-4 rotate-90 text-muted-foreground/70" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-12 items-center lg:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#F57224]/20 via-transparent to-[#F57224]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl glass-premium">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Our Story"
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Badge className="bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] border-[#F57224]/30">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              Building Trust{" "}
              <span className="text-gradient">Since Day One</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, BlazeCart started as a small online store with a big vision.
                What began as a passion project quickly grew into a trusted marketplace serving thousands
                of customers across the country.
              </p>
              <p>
                Today, we partner with over 50+ verified brands and sellers to bring you the best selection
                of electronics, fashion, home goods, and more. Every product on our platform is carefully
                curated to ensure the highest quality standards.
              </p>
              <p>
                Our commitment doesn&apos;t stop at just selling products. We believe in building lasting
                relationships with our customers through honest pricing, reliable shipping, and responsive
                customer support.
              </p>
            </div>
            <Link href="/contact">
              <Button className="mt-4 bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange">
                Get in Touch <ChevronRight className="ml-2 size-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Milestones Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]">
            Our Milestones
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">The Journey So Far</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Key moments that shaped our success story
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#F57224]/50 via-[#F57224]/20 to-transparent hidden lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="glass-premium rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,114,36,0.2)]">
                  <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 mb-4">
                    <milestone.icon className="size-6 text-[#F57224]" />
                  </div>
                  <div className="text-2xl font-bold text-[#F57224]">{milestone.year}</div>
                  <div className="font-semibold text-foreground mt-1">{milestone.title}</div>
                  <div className="text-xs text-muted-foreground/70 mt-1">{milestone.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
            >
              <Card className="glass-premium text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(245,114,36,0.2)] group">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                    <span className="text-xl text-[#F57224]">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]">
            Core Values
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">What Drives Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Our core values shape every decision we make and define who we are as a company
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-premium p-6 h-full transition-all duration-300 hover:border-[#F57224]/30 hover:shadow-[0_8px_40px_rgba(245,114,36,0.15)] group">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 text-[#F57224] mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Real stories from satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-premium p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(245,114,36,0.2)]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#F57224]/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-[#F57224]">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-[#F57224] text-[#F57224]" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.comment}"</p>
                  <CheckCircle className="size-4 text-green-500 mt-3" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#F57224]/20 to-[#F57224]/5 text-[#F57224]">
            Leadership
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            The passionate people behind BlazeCart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F57224] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#F57224]/20 group-hover:ring-[#F57224]/50 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-[#F57224] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-[#F57224] mt-1">{member.role}</p>
              <p className="text-xs text-muted-foreground/70 mt-2 italic">"{member.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F57224]/10 via-transparent to-[#F57224]/5" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5 mb-6">
              <MessageCircle className="size-8 text-[#F57224]" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Join Our Journey</h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Be part of something special. Experience shopping like never before.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow hover:shadow-glow-orange">
                  Start Shopping
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-border hover:border-[#F57224]/50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}