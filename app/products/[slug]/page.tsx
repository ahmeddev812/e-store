"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  ChevronLeft, Heart, ShoppingCart, Truck, ShieldCheck, RotateCcw,
  Star, Share2, Zap, Clock, CheckCircle, TrendingUp, 
  Eye, Maximize2, Minus, Plus, Package, Award, Globe, ArrowRight,
  MessageCircle, ThumbsUp, Flag, Link2
} from "lucide-react"
import { getProductBySlug, getRelatedProducts, categoriesWithCount } from "@/data/products"
import { getReviewsByProduct } from "@/data/reviews"
import { useCartStore } from "@/store/cart"
import { useWishlistStore } from "@/store/wishlist"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rating } from "@/components/ui/rating"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { formatUSD, getDiscountPrice } from "@/lib/utils"

// Image Gallery Component - Theme Aware
function ImageGallery({ images, title, discount }: { images: string[]; title: string; discount: number }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <div className="space-y-4">
      <motion.div 
        className={`relative overflow-hidden rounded-2xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'}`}
        whileHover={{ scale: 1.01 }}
      >
        <div 
          className="relative aspect-square cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <Image
            src={images[selectedImage]}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isZoomed ? `scale(2) translate(${(50 - mousePosition.x) / 10}%, ${(50 - mousePosition.y) / 10}%)` : 'scale(1)'
            }}
          />
        </div>
        {discount > 0 && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none text-lg px-4 py-2 shadow-glow text-white">
              -{discount}% OFF
            </Badge>
          </div>
        )}
        <button 
          className={`absolute right-4 top-4 rounded-full ${isDark ? 'bg-background/70' : 'bg-white/90'} p-2 backdrop-blur-sm transition-all hover:bg-[#F57224] hover:text-white shadow-md`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Maximize2 className={`size-4 ${isDark ? 'text-foreground' : 'text-gray-700'}`} />
        </button>
      </motion.div>
      
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedImage(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative size-20 overflow-hidden rounded-lg transition-all ${
                i === selectedImage 
                  ? `ring-2 ring-[#F57224] ring-offset-2 ${isDark ? 'ring-offset-black' : 'ring-offset-white'}` 
                  : `opacity-60 hover:opacity-100`
              }`}
            >
              <Image src={img} alt={`${title} ${i + 1}`} fill className="object-cover" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}

// Review Component - Theme Aware
function ReviewCard({ review }: { review: any }) {
  const [helpful, setHelpful] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-sm'} rounded-xl p-5 transition-all duration-300 hover:border-[#F57224]/30`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F57224]/20 to-[#F57224]/5">
              <span className="text-sm font-bold text-[#F57224]">
                {review.userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className={`font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{review.userName}</p>
              <p className={`text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                {new Date(review.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <Rating value={review.rating} size="sm" readonly className="mb-2" />
          {review.comment && (
            <p className={`text-sm ${isDark ? 'text-foreground/70' : 'text-gray-600'} leading-relaxed mt-2`}>{review.comment}</p>
          )}
        </div>
        <button
          onClick={() => setHelpful(!helpful)}
          className={`flex items-center gap-1 rounded-lg ${isDark ? 'bg-muted/50 text-muted-foreground/70' : 'bg-gray-100 text-gray-500'} px-3 py-1.5 text-xs transition-all hover:bg-[#F57224]/10 hover:text-[#F57224]`}
        >
          <ThumbsUp className={`size-3 ${helpful ? "fill-[#F57224] text-[#F57224]" : ""}`} />
          <span>Helpful</span>
        </button>
      </div>
    </motion.div>
  )
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const found = getProductBySlug(slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState("details")
  const [isShareOpen, setIsShareOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const addItem = useCartStore((s) => s.addItem)
  const { toggleItem, isInWishlist } = useWishlistStore()

  if (!found) {
    return (
      <div className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-background' : 'bg-gray-50'}`}>
        <div className={`fixed inset-0 ${isDark ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'}`} />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className={`mb-6 rounded-full ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} p-6`}
          >
            <Package className={`size-16 ${isDark ? 'text-[#F57224]/40' : 'text-[#F57224]/60'}`} />
          </motion.div>
          <h1 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} mb-2`}>Product Not Found</h1>
          <p className={`${isDark ? 'text-muted-foreground' : 'text-gray-600'} text-center mb-6`}>The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
              <ChevronLeft className="mr-2 size-4" /> Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const product = found
  const reviews = getReviewsByProduct(product.id)
  const related = getRelatedProducts(product)
  const discountedPrice = getDiscountPrice(product.price, product.discountPercentage)
  const wishlisted = isInWishlist(product.id)
  const allImages = product.images.length > 0 ? product.images : [product.thumbnail]
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1)
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => Math.floor(r.rating) === star).length,
    percentage: (reviews.filter(r => Math.floor(r.rating) === star).length / (reviews.length || 1)) * 100
  }))

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
    }, quantity)
    toast.success(`Added ${quantity} item${quantity > 1 ? 's' : ''} to cart!`, {
      icon: <CheckCircle className="size-4 text-green-500" />,
    })
  }

  const handleToggleWishlist = () => {
    toggleItem({
      id: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      thumbnail: product.thumbnail,
      slug: product.slug,
    })
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist!")
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out ${product.title} on BlazeCart!`
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      copy: url,
    }
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!')
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
    setIsShareOpen(false)
  }

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-background' : 'bg-gray-50'}`}>
      {/* Premium Background - Theme Aware */}
      <div className={`fixed inset-0 ${isDark 
        ? 'bg-gradient-to-br from-[#0a0a0f] via-[#1a0a0a] to-[#0a0a0f]' 
        : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className={`absolute top-20 left-10 size-72 rounded-full ${isDark ? 'bg-[#F57224]/20' : 'bg-[#F57224]/10'} blur-[120px] animate-pulse`} />
        <div className={`absolute bottom-20 right-10 size-96 rounded-full ${isDark ? 'bg-[#F57224]/10' : 'bg-[#F57224]/5'} blur-[140px] animate-pulse delay-1000`} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-2 text-sm"
        >
          <Link href="/" className={`${isDark ? 'text-muted-foreground/70 hover:text-foreground' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>Home</Link>
          <span className={isDark ? 'text-white/20' : 'text-gray-300'}>/</span>
          <Link href="/products" className={`${isDark ? 'text-muted-foreground/70 hover:text-foreground' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>Products</Link>
          <span className={isDark ? 'text-white/20' : 'text-gray-300'}>/</span>
          <span className={isDark ? 'text-muted-foreground' : 'text-gray-600'}>{product.title}</span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageGallery images={allImages} title={product.title} discount={product.discountPercentage} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Brand & Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#F57224]/10 text-[#F57224] border-none">
                  {product.brand}
                </Badge>
                {product.stock > 50 ? (
                  <Badge className="bg-green-500/10 text-green-500 border-none">
                    In Stock
                  </Badge>
                ) : product.stock > 0 ? (
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-none">
                    Low Stock
                  </Badge>
                ) : (
                  <Badge className="bg-red-500/10 text-red-500 border-none">
                    Out of Stock
                  </Badge>
                )}
              </div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'} lg:text-4xl`}>{product.title}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <Rating value={product.rating} readonly showValue size="default" />
              <span className={isDark ? 'text-foreground/30' : 'text-gray-300'}>|</span>
              <Link href="#reviews" className={`text-sm ${isDark ? 'text-muted-foreground hover:text-[#F57224]' : 'text-gray-500 hover:text-[#F57224]'} transition-colors`}>
                {reviews.length} Customer Reviews
              </Link>
              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className={`relative flex items-center gap-1 text-sm ${isDark ? 'text-muted-foreground hover:text-[#F57224]' : 'text-gray-500 hover:text-[#F57224]'} transition-colors`}
              >
                <Share2 className="size-4" />
                Share
              </button>
              <AnimatePresence>
                {isShareOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute top-8 right-0 z-10 flex gap-2 rounded-xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-lg'} p-2`}
                  >
                    {[
                      { icon: FacebookSvg, name: 'facebook', color: '#1877F2' },
                      { icon: TwitterSvg, name: 'twitter', color: '#1DA1F2' },
                      { icon: Link2, name: 'copy', color: '#F57224' },
                    ].map((social) => (
                      <button
                        key={social.name}
                        onClick={() => handleShare(social.name)}
                        className="rounded-lg p-2 transition-all hover:scale-110"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon className="size-4" style={{ color: social.color }} />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-[#F57224]">{formatUSD(discountedPrice)}</span>
              {product.discountPercentage > 0 && (
                <>
                  <span className={`text-xl ${isDark ? 'text-muted-foreground/70' : 'text-gray-400'} line-through`}>{formatUSD(product.price)}</span>
                  <Badge className="bg-gradient-to-r from-[#F57224] to-orange-500 border-none text-white">
                    Save {product.discountPercentage}%
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className={`${isDark ? 'text-muted-foreground' : 'text-gray-600'} leading-relaxed`}>{product.description}</p>

            {/* Product Specs */}
            <div className={`grid grid-cols-2 gap-4 rounded-xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-sm'} p-4`}>
              <div className="flex items-center gap-2">
                <Package className="size-4 text-[#F57224]" />
                <div>
                  <p className={`text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>SKU</p>
                  <p className={`text-sm ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{product.sku || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="size-4 text-[#F57224]" />
                <div>
                  <p className={`text-xs ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>Category</p>
                  <Link href={`/products?category=${categoriesWithCount.find(c => c.id === product.categoryId)?.slug}`}>
                    <p className={`text-sm ${isDark ? 'text-foreground hover:text-[#F57224]' : 'text-gray-800 hover:text-[#F57224]'} transition-colors`}>{product.categoryName}</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 rounded-xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-sm'} p-1`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`rounded-lg p-2 transition-colors ${isDark ? 'hover:bg-[#F57224]/20' : 'hover:bg-[#F57224]/10'}`}
                  >
                    <Minus className={`size-4 ${isDark ? 'text-foreground' : 'text-gray-700'}`} />
                  </button>
                  <span className={`w-12 text-center font-medium ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className={`rounded-lg p-2 transition-colors ${isDark ? 'hover:bg-[#F57224]/20' : 'hover:bg-[#F57224]/10'}`}
                  >
                    <Plus className={`size-4 ${isDark ? 'text-foreground' : 'text-gray-700'}`} />
                  </button>
                </div>
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white"
                >
                  <ShoppingCart className="mr-2 size-4" />
                  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleToggleWishlist}
                  className={`size-12 rounded-xl ${isDark ? 'border-border' : 'border-gray-200'}`}
                >
                  <Heart className={`size-5 transition-all ${wishlisted ? "fill-[#F57224] text-[#F57224]" : isDark ? 'text-foreground' : 'text-gray-700'}`} />
                </Button>
              </div>
            </div>

            {/* Shipping Features */}
            <div className={`grid grid-cols-3 gap-3 rounded-xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-sm'} p-4`}>
              {[
                { icon: Truck, label: "Free Shipping", desc: "Orders over $50" },
                { icon: ShieldCheck, label: "Secure Checkout", desc: "SSL encrypted" },
                { icon: RotateCcw, label: "Easy Returns", desc: "30-day return" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto size-5 text-[#F57224]" />
                  <p className={`mt-1 text-xs font-medium ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{label}</p>
                  <p className={`text-[10px] ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className={`flex gap-2 border-b ${isDark ? 'border-border' : 'border-gray-200'}`}>
            {[
              { id: "details", label: "Product Details", icon: Package },
              { id: "reviews", label: `Reviews (${reviews.length})`, icon: MessageCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${
                  selectedTab === tab.id
                    ? "border-b-2 border-[#F57224] text-[#F57224]"
                    : isDark 
                      ? "text-muted-foreground/70 hover:text-foreground" 
                      : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <tab.icon className="size-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-6">
            {selectedTab === "details" && (
              <div className={`space-y-4 ${isDark ? 'text-muted-foreground' : 'text-gray-600'}`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>Product Specifications</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className={`flex justify-between border-b ${isDark ? 'border-border' : 'border-gray-200'} py-2`}>
                    <span>Brand</span>
                    <span className={isDark ? 'text-foreground' : 'text-gray-800'}>{product.brand}</span>
                  </div>
                  <div className={`flex justify-between border-b ${isDark ? 'border-border' : 'border-gray-200'} py-2`}>
                    <span>Stock Status</span>
                    <span className={isDark ? 'text-foreground' : 'text-gray-800'}>{product.stock} units</span>
                  </div>
                  <div className={`flex justify-between border-b ${isDark ? 'border-border' : 'border-gray-200'} py-2`}>
                    <span>Category</span>
                    <span className={isDark ? 'text-foreground' : 'text-gray-800'}>{product.categoryName}</span>
                  </div>
                  {product.tags.length > 0 && (
                    <div className={`flex justify-between border-b ${isDark ? 'border-border' : 'border-gray-200'} py-2`}>
                      <span>Tags</span>
                      <div className="flex gap-1">
                        {product.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} className={`${isDark ? 'bg-muted/30 text-muted-foreground' : 'bg-gray-100 text-gray-600'} text-[9px]`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedTab === "reviews" && (
              <div id="reviews" className="space-y-6">
                {/* Rating Summary */}
                <div className={`flex flex-wrap gap-8 rounded-xl ${isDark ? 'glass-premium' : 'bg-white border border-gray-200 shadow-sm'} p-6`}>
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{totalRating.toFixed(1)}</div>
                    <Rating value={totalRating} size="sm" readonly className="justify-center my-2" />
                    <div className={`text-sm ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>Based on {reviews.length} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.star} className="flex items-center gap-2">
                        <span className={`w-8 text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-500'}`}>{item.star}★</span>
                        <div className={`flex-1 h-2 rounded-full ${isDark ? 'bg-muted/30' : 'bg-gray-200'} overflow-hidden`}>
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-[#F57224] to-orange-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className={`w-8 text-sm ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.length === 0 ? (
                    <div className={`text-center py-12 ${isDark ? 'text-muted-foreground/70' : 'text-gray-500'}`}>
                      <MessageCircle className={`mx-auto mb-3 size-12 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
                      <p>No reviews yet. Be the first to review!</p>
                    </div>
                  ) : (
                    reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>You May Also Like</h2>
              <Link href="/products">
                <Button variant="ghost" className="text-[#F57224]">
                  View All <ArrowRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.slice(0, 4).map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`}>
                  <Card className={`group h-full overflow-hidden transition-all hover:border-[#F57224]/30 hover:shadow-[0_0_30px_rgba(245,114,36,0.15)] ${isDark ? 'bg-card border-border' : 'bg-white border-gray-200'}`}>
                    <div className={`relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
                      <Image
                        src={rp.thumbnail}
                        alt={rp.title}
                        width={300}
                        height={300}
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {rp.discountPercentage > 0 && (
                        <Badge className="absolute left-3 top-3 bg-gradient-to-r from-[#F57224] to-orange-500 border-none text-white">
                          -{rp.discountPercentage}%
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className={`font-medium ${isDark ? 'text-foreground' : 'text-gray-800'} line-clamp-1`}>{rp.title}</h3>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-lg font-bold text-[#F57224]">
                          {formatUSD(getDiscountPrice(rp.price, rp.discountPercentage))}
                        </span>
                        {rp.discountPercentage > 0 && (
                          <span className={`text-sm ${isDark ? 'text-muted-foreground/70' : 'text-gray-400'} line-through`}>{formatUSD(rp.price)}</span>
                        )}
                      </div>
                      <Rating value={rp.rating} size="sm" readonly />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Sticky Add to Cart Bar (Mobile) */}
      <AnimatePresence>
        {typeof window !== 'undefined' && window.scrollY > 300 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className={`fixed bottom-0 left-0 right-0 z-50 ${isDark ? 'bg-background/80 backdrop-blur-xl border-t border-border' : 'bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-lg'} p-4 md:hidden`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className={`text-sm font-semibold ${isDark ? 'text-foreground' : 'text-gray-800'}`}>{product.title}</p>
                <p className="text-lg font-bold text-[#F57224]">{formatUSD(discountedPrice)}</p>
              </div>
              <Button onClick={handleAddToCart} className="bg-gradient-to-r from-[#F57224] to-orange-500 shadow-glow text-white">
                <ShoppingCart className="mr-2 size-4" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
     
    </div>
  )
}

// Social media SVG icons
function FacebookSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function TwitterSvg(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
}