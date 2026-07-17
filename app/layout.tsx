import type { Metadata } from "next"
import { Playfair_Display, Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BlazeCart | Ignite Your Style",
  description: "Discover premium products with exceptional quality. Shop the latest trends with fast delivery and secure payments.",
  keywords: "ecommerce, blaze cart, premium shopping, online store",
  authors: [{ name: "BlazeCart" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "BlazeCart",
    description: "Ignite your style with premium products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlazeCart",
    description: "Ignite your style with premium products.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#0a0a0f] text-white/90 antialiased font-sans overflow-x-hidden">
        <Providers>
            <div className="flex min-h-screen flex-col">
              {/* Premium Animated Background */}
              <div className="fixed inset-0 -z-20">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]" />
                
                {/* Animated Orbs */}
                <div className="absolute top-20 left-10 size-72 rounded-full bg-[#F57224]/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#F57224]/10 blur-[140px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBvbHlsaW5lIHBvaW50cz0iMzAgMCA2MCAzMCAzMCA2MCAwIDMwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,114,36,0.08),transparent)] pointer-events-none" />
              </div>

              {/* Floating Particles Effect */}
              <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 size-1 rounded-full bg-[#F57224]/30 animate-float" />
                <div className="absolute top-3/4 right-1/4 size-2 rounded-full bg-orange-500/20 animate-float-delay" />
                <div className="absolute bottom-1/4 left-1/3 size-1.5 rounded-full bg-[#F57224]/20 animate-float-slow" />
                <div className="absolute top-1/2 right-1/3 size-1 rounded-full bg-orange-500/25 animate-float-fast" />
              </div>

              {/* Glass Navigation Overlay */}
              <div className="fixed inset-x-0 top-0 z-40 h-20 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

              <Navbar />
              
              <main className="relative z-10 flex-1">
                {children}
                <Footer />
              </main>
              
              
            </div>
          </Providers>
      </body>
    </html>
  )
}
