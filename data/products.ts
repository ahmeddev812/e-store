export interface Product {
  id: string
  title: string
  slug: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string | null
  sku: string | null
  weight: number | null
  tags: string[]
  thumbnail: string
  images: string[]
  categoryId: string
  categoryName: string
  createdAt: string
  isFeatured?: boolean
  isNew?: boolean
  isBestseller?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

export const categories: Category[] = [
  { id: "cat-1", name: "Electronics", slug: "electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop" },
  { id: "cat-2", name: "Fashion", slug: "fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop" },
  { id: "cat-3", name: "Home & Garden", slug: "home-garden", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop" },
  { id: "cat-4", name: "Beauty", slug: "beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop" },
  { id: "cat-5", name: "Sports", slug: "sports", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop" },
  { id: "cat-6", name: "Automotive", slug: "automotive", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=600&fit=crop" },
  { id: "cat-7", name: "Groceries", slug: "groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop" },
  { id: "cat-8", name: "Books", slug: "books", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop" },
  { id: "cat-9", name: "Toys & Games", slug: "toys-games", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop" },
  { id: "cat-10", name: "Jewelry", slug: "jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop" },
  { id: "cat-11", name: "Pet Supplies", slug: "pet-supplies", image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=600&fit=crop" },
  { id: "cat-12", name: "Office", slug: "office", image: "https://images.unsplash.com/photo-1587212433119-04ba3aa791e7?w=600&h=600&fit=crop" },
]

export const products: Product[] = [
  // ELECTRONICS (cat-1)
  {
    id: "p1", title: "Wireless Bluetooth Headphones", slug: "wireless-bluetooth-headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life. Features active noise cancellation, comfortable over-ear design, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    price: 299.99, discountPercentage: 20, rating: 4.5, stock: 45, brand: "SoundMax",
    sku: "SM-WH-001", weight: 250, tags: ["electronics", "audio", "wireless"],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-01-15T10:00:00Z", isFeatured: true,
  },
  {
    id: "p2", title: "Smart Watch Pro", slug: "smart-watch-pro",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Tracks heart rate, blood oxygen, sleep patterns, and more. Water resistant to 50 meters.",
    price: 449.99, discountPercentage: 15, rating: 4.7, stock: 30, brand: "TechWear",
    sku: "TW-SW-002", weight: 80, tags: ["electronics", "wearable", "fitness"],
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1546868871-af0de0ae72c3?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-02-20T10:00:00Z", isBestseller: true,
  },
  {
    id: "p4", title: "4K Ultra HD Monitor 27\"", slug: "4k-ultra-hd-monitor-27",
    description: "Professional-grade 27-inch 4K monitor with HDR support, 99% sRGB coverage, and USB-C connectivity. Ideal for designers, developers, and content creators.",
    price: 799.99, discountPercentage: 25, rating: 4.8, stock: 15, brand: "ViewPro",
    sku: "VP-4K-004", weight: 3500, tags: ["electronics", "monitor", "4k"],
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-01-05T10:00:00Z",
  },
  {
    id: "p8", title: "Wireless Charging Pad", slug: "wireless-charging-pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. 15W fast charging with intelligent temperature control and foreign object detection.",
    price: 39.99, discountPercentage: 0, rating: 4.2, stock: 200, brand: "ChargeFast",
    sku: "CF-WC-008", weight: 100, tags: ["electronics", "charging", "wireless"],
    thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-04-10T10:00:00Z",
  },
  {
    id: "p10", title: "Smart Home Speaker", slug: "smart-home-speaker",
    description: "AI-powered smart speaker with 360-degree sound, voice control, and smart home integration. Control your lights, thermostat, and more with your voice.",
    price: 199.99, discountPercentage: 10, rating: 4.5, stock: 80, brand: "SoundMax",
    sku: "SM-SS-010", weight: 800, tags: ["electronics", "speaker", "smart-home"],
    thumbnail: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-02-10T10:00:00Z", isFeatured: true,
  },
  {
    id: "p11", title: "Mechanical Gaming Keyboard", slug: "mechanical-gaming-keyboard",
    description: "RGB mechanical gaming keyboard with Cherry MX switches, programmable keys, and aluminum frame. N-key rollover and anti-ghosting technology.",
    price: 159.99, discountPercentage: 15, rating: 4.6, stock: 50, brand: "GameGear",
    sku: "GG-MK-011", weight: 900, tags: ["electronics", "gaming", "keyboard"],
    thumbnail: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-03-05T10:00:00Z",
  },
  {
    id: "p13", title: "Portable Bluetooth Speaker", slug: "portable-bluetooth-speaker",
    description: "Waterproof portable Bluetooth speaker with 360-degree sound, 20-hour battery, and built-in microphone. Perfect for outdoor adventures.",
    price: 79.99, discountPercentage: 25, rating: 4.3, stock: 120, brand: "SoundMax",
    sku: "SM-PS-013", weight: 350, tags: ["electronics", "audio", "portable"],
    thumbnail: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-01-30T10:00:00Z",
  },
  {
    id: "p16", title: "Noise Cancelling Earbuds", slug: "noise-cancelling-earbuds",
    description: "True wireless earbuds with active noise cancellation, transparency mode, and 8-hour battery life. IPX5 water resistant for workouts.",
    price: 149.99, discountPercentage: 10, rating: 4.5, stock: 65, brand: "SoundMax",
    sku: "SM-NE-016", weight: 50, tags: ["electronics", "audio", "earbuds"],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-04-15T10:00:00Z",
  },
  {
    id: "p21", title: "Smart LED Light Bulbs (4-Pack)", slug: "smart-led-light-bulbs",
    description: "WiFi enabled smart LED bulbs compatible with Alexa and Google Home. 16 million colors, dimmable, schedules and scenes. Energy efficient.",
    price: 44.99, discountPercentage: 0, rating: 4.1, stock: 200, brand: "HomeSmart",
    sku: "HS-LB-021", weight: 200, tags: ["electronics", "smart-home", "lighting"],
    thumbnail: "https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "p25", title: "iPad Pro 12.9\"", slug: "ipad-pro-12-9",
    description: "Apple iPad Pro with M2 chip, Liquid Retina XDR display, and ProMotion technology. Perfect for creative professionals.",
    price: 1099.99, discountPercentage: 5, rating: 4.9, stock: 25, brand: "Apple",
    sku: "AP-IP-025", weight: 682, tags: ["electronics", "tablet", "apple"],
    thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-04-01T10:00:00Z", isFeatured: true, isNew: true,
  },
  {
    id: "p26", title: "MacBook Air M3", slug: "macbook-air-m3",
    description: "Apple MacBook Air with M3 chip, 16GB RAM, 512GB SSD, and stunning Retina display. Ultra-portable and powerful.",
    price: 1499.99, discountPercentage: 0, rating: 4.9, stock: 20, brand: "Apple",
    sku: "AP-MB-026", weight: 1300, tags: ["electronics", "laptop", "apple"],
    thumbnail: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-03-15T10:00:00Z", isBestseller: true,
  },
  {
    id: "p27", title: "Sony PlayStation 5", slug: "sony-playstation-5",
    description: "Next-gen gaming console with ultra-fast SSD, 4K gaming, and haptic feedback controller.",
    price: 499.99, discountPercentage: 0, rating: 4.8, stock: 15, brand: "Sony",
    sku: "SN-PS-027", weight: 4500, tags: ["electronics", "gaming", "console"],
    thumbnail: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop"],
    categoryId: "cat-1", categoryName: "Electronics", createdAt: "2025-02-01T10:00:00Z", isFeatured: true,
  },

  // FASHION (cat-2)
  {
    id: "p3", title: "Premium Leather Jacket", slug: "premium-leather-jacket",
    description: "Handcrafted genuine leather jacket with modern styling. Features YKK zippers, satin lining, and multiple pockets. A timeless addition to any wardrobe.",
    price: 599.99, discountPercentage: 10, rating: 4.3, stock: 20, brand: "LuxeWear",
    sku: "LW-LJ-003", weight: 1200, tags: ["fashion", "leather", "jacket"],
    thumbnail: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-03-10T10:00:00Z", isFeatured: true,
  },
  {
    id: "p9", title: "Designer Sunglasses", slug: "designer-sunglasses",
    description: "Premium UV400 protected designer sunglasses with polarized lenses. Lightweight titanium frame with scratch-resistant coating.",
    price: 249.99, discountPercentage: 35, rating: 4.1, stock: 35, brand: "VueStyle",
    sku: "VS-DS-009", weight: 50, tags: ["fashion", "sunglasses", "accessories"],
    thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-01-25T10:00:00Z",
  },
  {
    id: "p12", title: "Cashmere Wool Scarf", slug: "cashmere-wool-scarf",
    description: "Luxurious 100% cashmere wool scarf, ethically sourced and hand-finished. Available in multiple colors. Perfect for cold weather elegance.",
    price: 129.99, discountPercentage: 0, rating: 4.4, stock: 75, brand: "LuxeWear",
    sku: "LW-CS-012", weight: 150, tags: ["fashion", "scarf", "cashmere"],
    thumbnail: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c8?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1520903920243-00d872a2d1c8?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-04-05T10:00:00Z",
  },
  {
    id: "p17", title: "Designer Handbag", slug: "designer-handbag",
    description: "Elegant designer handbag crafted from premium Italian leather. Gold-plated hardware, spacious interior with multiple compartments, detachable shoulder strap.",
    price: 1299.99, discountPercentage: 45, rating: 4.6, stock: 8, brand: "LuxeWear",
    sku: "LW-DH-017", weight: 800, tags: ["fashion", "handbag", "luxury"],
    thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-01-10T10:00:00Z", isBestseller: true,
  },
  {
    id: "p24", title: "Leather Travel Bag", slug: "leather-travel-bag",
    description: "Handcrafted full-grain leather duffel bag with brass hardware. Spacious main compartment, shoe compartment, and multiple pockets. Perfect weekend companion.",
    price: 349.99, discountPercentage: 30, rating: 4.6, stock: 18, brand: "LuxeWear",
    sku: "LW-TB-024", weight: 1500, tags: ["fashion", "travel", "leather"],
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-04-25T10:00:00Z",
  },
  {
    id: "p28", title: "Nike Air Max 270", slug: "nike-air-max-270",
    description: "Iconic Nike Air Max 270 sneakers with visible Air unit, breathable mesh upper, and comfortable foam sole.",
    price: 159.99, discountPercentage: 20, rating: 4.7, stock: 45, brand: "Nike",
    sku: "NK-AM-028", weight: 350, tags: ["fashion", "shoes", "sneakers"],
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-03-01T10:00:00Z", isFeatured: true,
  },
  {
    id: "p29", title: "Adidas Ultraboost", slug: "adidas-ultraboost",
    description: "Adidas Ultraboost running shoes with responsive Boost cushioning, Primeknit upper, and rubber outsole.",
    price: 189.99, discountPercentage: 15, rating: 4.8, stock: 60, brand: "Adidas",
    sku: "AD-UB-029", weight: 320, tags: ["fashion", "shoes", "running"],
    thumbnail: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-02-15T10:00:00Z", isBestseller: true,
  },
  {
    id: "p30", title: "Men's Wool Suit", slug: "mens-wool-suit",
    description: "Premium tailored wool suit with modern fit, satin lining, and Italian fabric. Perfect for business and formal occasions.",
    price: 899.99, discountPercentage: 10, rating: 4.9, stock: 10, brand: "Armani",
    sku: "AR-MS-030", weight: 1800, tags: ["fashion", "suit", "formal"],
    thumbnail: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop"],
    categoryId: "cat-2", categoryName: "Fashion", createdAt: "2025-01-20T10:00:00Z", isFeatured: true,
  },

  // HOME & GARDEN (cat-3)
  {
    id: "p6", title: "Ergonomic Office Chair", slug: "ergonomic-office-chair",
    description: "Premium ergonomic chair with lumbar support, adjustable armrests, and breathable mesh back. Designed for all-day comfort during long work sessions.",
    price: 899.99, discountPercentage: 30, rating: 4.4, stock: 10, brand: "ComfortPlus",
    sku: "CP-EC-006", weight: 15000, tags: ["furniture", "office", "ergonomic"],
    thumbnail: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop"],
    categoryId: "cat-3", categoryName: "Home & Garden", createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: "p15", title: "Professional Chef Knife", slug: "professional-chef-knife",
    description: "Japanese Damascus steel chef knife with 67-layer blade. Ergonomic handle, perfect balance, razor-sharp edge. Includes protective sheath.",
    price: 199.99, discountPercentage: 20, rating: 4.8, stock: 25, brand: "CulinarPro",
    sku: "CP-CK-015", weight: 300, tags: ["home", "kitchen", "knife"],
    thumbnail: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop"],
    categoryId: "cat-3", categoryName: "Home & Garden", createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "p18", title: "Indoor Plant Collection", slug: "indoor-plant-collection",
    description: "Set of 3 low-maintenance indoor plants in decorative ceramic pots. Includes snake plant, pothos, and ZZ plant. Perfect for home or office.",
    price: 69.99, discountPercentage: 0, rating: 4.2, stock: 40, brand: "GreenThumb",
    sku: "GT-IP-018", weight: 3000, tags: ["home", "plants", "decor"],
    thumbnail: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop"],
    categoryId: "cat-3", categoryName: "Home & Garden", createdAt: "2025-02-05T10:00:00Z",
  },
  {
    id: "p31", title: "Memory Foam Mattress", slug: "memory-foam-mattress",
    description: "Premium memory foam mattress with cooling gel technology. Medium-firm feel, hypoallergenic, and CertiPUR-US certified.",
    price: 699.99, discountPercentage: 25, rating: 4.7, stock: 30, brand: "SleepWell",
    sku: "SW-MF-031", weight: 25000, tags: ["home", "furniture", "mattress"],
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop"],
    categoryId: "cat-3", categoryName: "Home & Garden", createdAt: "2025-03-10T10:00:00Z", isFeatured: true,
  },
  {
    id: "p32", title: "Air Fryer 6Qt", slug: "air-fryer-6qt",
    description: "Digital air fryer with 6-quart capacity, 8 presets, and rapid air technology. Cook healthier meals with little to no oil.",
    price: 129.99, discountPercentage: 15, rating: 4.6, stock: 50, brand: "ChefMaster",
    sku: "CM-AF-032", weight: 4500, tags: ["home", "kitchen", "appliance"],
    thumbnail: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop"],
    categoryId: "cat-3", categoryName: "Home & Garden", createdAt: "2025-02-20T10:00:00Z", isBestseller: true,
  },

  // BEAUTY (cat-4)
  {
    id: "p5", title: "Organic Skincare Set", slug: "organic-skincare-set",
    description: "Complete organic skincare routine including cleanser, serum, moisturizer, and SPF. Made with natural ingredients. Suitable for all skin types.",
    price: 89.99, discountPercentage: 0, rating: 4.6, stock: 100, brand: "PureGlow",
    sku: "PG-SS-005", weight: 400, tags: ["beauty", "skincare", "organic"],
    thumbnail: "https://images.unsplash.com/photo-1570194065650-d99fb4b38c5f?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1570194065650-d99fb4b38c5f?w=600&h=600&fit=crop"],
    categoryId: "cat-4", categoryName: "Beauty", createdAt: "2025-04-01T10:00:00Z", isFeatured: true,
  },
  {
    id: "p33", title: "Premium Perfume Gift Set", slug: "premium-perfume-gift-set",
    description: "Luxury perfume gift set with 3 signature scents. Long-lasting, premium ingredients, and elegant packaging.",
    price: 149.99, discountPercentage: 10, rating: 4.8, stock: 40, brand: "Chanel",
    sku: "CH-PG-033", weight: 300, tags: ["beauty", "perfume", "luxury"],
    thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop"],
    categoryId: "cat-4", categoryName: "Beauty", createdAt: "2025-03-01T10:00:00Z", isBestseller: true,
  },
  {
    id: "p34", title: "Hair Styling Kit", slug: "hair-styling-kit",
    description: "Professional hair styling kit with hair dryer, straightener, and curling iron. Ceramic technology, adjustable heat settings, and ionic conditioning.",
    price: 199.99, discountPercentage: 20, rating: 4.5, stock: 35, brand: "Dyson",
    sku: "DY-HS-034", weight: 1500, tags: ["beauty", "hair", "styling"],
    thumbnail: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop"],
    categoryId: "cat-4", categoryName: "Beauty", createdAt: "2025-02-15T10:00:00Z",
  },

  // SPORTS (cat-5)
  {
    id: "p7", title: "Running Shoes UltraBoost", slug: "running-shoes-ultraboost",
    description: "Lightweight responsive running shoes with Boost cushioning technology. Provides exceptional energy return and comfort for runners of all levels.",
    price: 179.99, discountPercentage: 40, rating: 4.9, stock: 60, brand: "SpeedGear",
    sku: "SG-RS-007", weight: 300, tags: ["sports", "running", "shoes"],
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"],
    categoryId: "cat-5", categoryName: "Sports", createdAt: "2025-03-20T10:00:00Z", isBestseller: true,
  },
  {
    id: "p14", title: "Yoga Mat Premium", slug: "yoga-mat-premium",
    description: "Extra thick premium yoga mat with alignment lines. Non-slip surface, eco-friendly TPE material, includes carrying strap. 6mm thickness for comfort.",
    price: 49.99, discountPercentage: 0, rating: 4.7, stock: 90, brand: "ZenFit",
    sku: "ZF-YM-014", weight: 1000, tags: ["sports", "yoga", "fitness"],
    thumbnail: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop"],
    categoryId: "cat-5", categoryName: "Sports", createdAt: "2025-02-25T10:00:00Z",
  },
  {
    id: "p19", title: "Protein Powder - Vanilla", slug: "protein-powder-vanilla",
    description: "Premium whey protein isolate with natural vanilla flavor. 25g protein per serving, low sugar, no artificial additives. Supports muscle recovery.",
    price: 54.99, discountPercentage: 0, rating: 4.4, stock: 150, brand: "FitFuel",
    sku: "FF-PP-019", weight: 900, tags: ["sports", "nutrition", "protein"],
    thumbnail: "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop"],
    categoryId: "cat-5", categoryName: "Sports", createdAt: "2025-03-25T10:00:00Z",
  },
  {
    id: "p35", title: "Dumbbell Set 50lbs", slug: "dumbbell-set-50lbs",
    description: "Adjustable dumbbell set from 5-50lbs with stand. Perfect for home gym, compact design, and quick weight adjustment.",
    price: 299.99, discountPercentage: 10, rating: 4.7, stock: 25, brand: "IronGym",
    sku: "IG-DS-035", weight: 22700, tags: ["sports", "fitness", "weights"],
    thumbnail: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop"],
    categoryId: "cat-5", categoryName: "Sports", createdAt: "2025-01-15T10:00:00Z", isFeatured: true,
  },

  // AUTOMOTIVE (cat-6)
  {
    id: "p20", title: "Car Dash Camera", slug: "car-dash-camera",
    description: "4K dash camera with wide-angle lens, night vision, and GPS tracking. Loop recording, G-sensor for collision detection, and parking mode.",
    price: 129.99, discountPercentage: 30, rating: 4.3, stock: 55, brand: "AutoGuard",
    sku: "AG-DC-020", weight: 200, tags: ["automotive", "camera", "safety"],
    thumbnail: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop"],
    categoryId: "cat-6", categoryName: "Automotive", createdAt: "2025-04-20T10:00:00Z",
  },
  {
    id: "p36", title: "Car Phone Mount", slug: "car-phone-mount",
    description: "Universal car phone mount with wireless charging. Easy installation, 360-degree rotation, and one-touch release.",
    price: 39.99, discountPercentage: 0, rating: 4.5, stock: 200, brand: "AutoTech",
    sku: "AT-CM-036", weight: 150, tags: ["automotive", "accessories", "phone"],
    thumbnail: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop"],
    categoryId: "cat-6", categoryName: "Automotive", createdAt: "2025-02-10T10:00:00Z",
  },

  // GROCERIES (cat-7)
  {
    id: "p22", title: "Organic Green Tea Collection", slug: "organic-green-tea-collection",
    description: "Premium organic green tea sampler with 6 varieties. Sourced from Japan and China. Rich in antioxidants, naturally caffeinated. 60 tea bags total.",
    price: 29.99, discountPercentage: 0, rating: 4.5, stock: 300, brand: "PureLeaf",
    sku: "PL-GT-022", weight: 200, tags: ["groceries", "tea", "organic"],
    thumbnail: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop"],
    categoryId: "cat-7", categoryName: "Groceries", createdAt: "2025-02-28T10:00:00Z",
  },
  {
    id: "p37", title: "Premium Coffee Beans", slug: "premium-coffee-beans",
    description: "Single-origin Arabica coffee beans, medium roast with chocolate and nutty notes. Freshly roasted and vacuum sealed.",
    price: 24.99, discountPercentage: 0, rating: 4.8, stock: 150, brand: "BeanMaster",
    sku: "BM-CB-037", weight: 340, tags: ["groceries", "coffee", "beverage"],
    thumbnail: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop"],
    categoryId: "cat-7", categoryName: "Groceries", createdAt: "2025-03-10T10:00:00Z", isFeatured: true,
  },

  // BOOKS (cat-8)
  {
    id: "p23", title: "Best-Selling Novel Collection", slug: "best-selling-novel-collection",
    description: "Set of 5 award-winning contemporary novels. Includes mystery, romance, and literary fiction. Perfect for book lovers and reading enthusiasts.",
    price: 79.99, discountPercentage: 50, rating: 4.8, stock: 40, brand: "PageTurner",
    sku: "PT-BC-023", weight: 1500, tags: ["books", "fiction", "collection"],
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop"],
    categoryId: "cat-8", categoryName: "Books", createdAt: "2025-03-30T10:00:00Z", isBestseller: true,
  },
  {
    id: "p38", title: "Kindle Paperwhite", slug: "kindle-paperwhite",
    description: "Waterproof Kindle Paperwhite with 6.8-inch display, adjustable warm light, and weeks of battery life.",
    price: 139.99, discountPercentage: 0, rating: 4.9, stock: 60, brand: "Amazon",
    sku: "AM-KP-038", weight: 200, tags: ["books", "ereader", "electronics"],
    thumbnail: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop"],
    categoryId: "cat-8", categoryName: "Books", createdAt: "2025-04-01T10:00:00Z", isFeatured: true,
  },

  // TOYS & GAMES (cat-9)
  {
    id: "p39", title: "LEGO Creator Expert", slug: "lego-creator-expert",
    description: "LEGO Creator Expert building set with 2,000+ pieces. Detailed model, authentic features, and display stand.",
    price: 199.99, discountPercentage: 10, rating: 4.8, stock: 20, brand: "LEGO",
    sku: "LG-CE-039", weight: 2500, tags: ["toys", "lego", "building"],
    thumbnail: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"],
    categoryId: "cat-9", categoryName: "Toys & Games", createdAt: "2025-02-15T10:00:00Z",
  },
  {
    id: "p40", title: "Nintendo Switch OLED", slug: "nintendo-switch-oled",
    description: "Nintendo Switch OLED model with 7-inch OLED screen, enhanced audio, and 64GB internal storage.",
    price: 349.99, discountPercentage: 0, rating: 4.9, stock: 30, brand: "Nintendo",
    sku: "NI-NS-040", weight: 420, tags: ["games", "console", "nintendo"],
    thumbnail: "https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop"],
    categoryId: "cat-9", categoryName: "Toys & Games", createdAt: "2025-03-20T10:00:00Z", isBestseller: true,
  },

  // JEWELRY (cat-10)
  {
    id: "p41", title: "Diamond Engagement Ring", slug: "diamond-engagement-ring",
    description: "1-carat diamond engagement ring in 14K white gold. GIA certified, excellent cut, and conflict-free diamonds.",
    price: 4999.99, discountPercentage: 0, rating: 5.0, stock: 5, brand: "LuxuryGems",
    sku: "LG-DR-041", weight: 5, tags: ["jewelry", "ring", "diamond"],
    thumbnail: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop"],
    categoryId: "cat-10", categoryName: "Jewelry", createdAt: "2025-01-10T10:00:00Z", isFeatured: true,
  },
  {
    id: "p42", title: "Gold Chain Necklace", slug: "gold-chain-necklace",
    description: "18K gold chain necklace, 20 inches with lobster clasp. Perfect for everyday wear or special occasions.",
    price: 899.99, discountPercentage: 15, rating: 4.7, stock: 15, brand: "LuxuryGems",
    sku: "LG-GC-042", weight: 15, tags: ["jewelry", "necklace", "gold"],
    thumbnail: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop"],
    categoryId: "cat-10", categoryName: "Jewelry", createdAt: "2025-02-20T10:00:00Z",
  },

  // PET SUPPLIES (cat-11)
  {
    id: "p43", title: "Premium Dog Bed", slug: "premium-dog-bed",
    description: "Orthopedic dog bed with memory foam, waterproof liner, and removable washable cover. Available in 4 sizes.",
    price: 89.99, discountPercentage: 10, rating: 4.7, stock: 50, brand: "PetComfort",
    sku: "PC-DB-043", weight: 2000, tags: ["pets", "dogs", "bed"],
    thumbnail: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop"],
    categoryId: "cat-11", categoryName: "Pet Supplies", createdAt: "2025-03-05T10:00:00Z",
  },
  {
    id: "p44", title: "Automatic Pet Feeder", slug: "automatic-pet-feeder",
    description: "WiFi-enabled automatic pet feeder with portion control, schedule programming, and voice recording.",
    price: 129.99, discountPercentage: 0, rating: 4.6, stock: 40, brand: "PetTech",
    sku: "PT-AF-044", weight: 1500, tags: ["pets", "feeding", "smart"],
    thumbnail: "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop"],
    categoryId: "cat-11", categoryName: "Pet Supplies", createdAt: "2025-01-25T10:00:00Z",
  },

  // OFFICE (cat-12)
  {
    id: "p45", title: "Standing Desk", slug: "standing-desk",
    description: "Electric height-adjustable standing desk with memory presets, dual motors, and spacious work surface.",
    price: 499.99, discountPercentage: 20, rating: 4.8, stock: 25, brand: "ErgoWorks",
    sku: "EW-SD-045", weight: 28000, tags: ["office", "furniture", "desk"],
    thumbnail: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop"],
    categoryId: "cat-12", categoryName: "Office", createdAt: "2025-02-10T10:00:00Z", isFeatured: true,
  },
  {
    id: "p46", title: "Wireless Mouse & Keyboard", slug: "wireless-mouse-keyboard",
    description: "Ergonomic wireless keyboard and mouse combo with quiet keys, adjustable DPI, and long battery life.",
    price: 59.99, discountPercentage: 0, rating: 4.5, stock: 80, brand: "Logitech",
    sku: "LG-WK-046", weight: 800, tags: ["office", "computer", "accessories"],
    thumbnail: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop"],
    categoryId: "cat-12", categoryName: "Office", createdAt: "2025-03-15T10:00:00Z",
  },
]

// Helper Functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const cat = categories.find(c => c.slug === categorySlug)
  if (!cat) return []
  return products.filter(p => p.categoryId === cat.id)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    (p.brand && p.brand.toLowerCase().includes(q)) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  )
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && (p.categoryId === product.categoryId || p.tags.some(t => product.tags.includes(t))))
    .slice(0, limit)
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter(p => p.isFeatured).slice(0, limit)
}

export function getNewArrivals(limit = 8): Product[] {
  return [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

export function getBestsellers(limit = 8): Product[] {
  return products.filter(p => p.isBestseller).slice(0, limit)
}

export function getFlashSaleProducts(limit = 8): Product[] {
  return products
    .filter(p => p.discountPercentage >= 15)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, limit)
}

export const categoriesWithCount = categories.map(cat => ({
  ...cat,
  _count: { products: products.filter(p => p.categoryId === cat.id).length }
}))