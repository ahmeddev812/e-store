// data/products.ts
// BlazeCart - Premium Ecommerce Product Data with Correct Product Images
// Total Products: 138
// Last Updated: 2024

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  discountPercentage: number
  rating: number
  reviewCount: number
  stock: number
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  tags: string[]
  thumbnail: string
  images: string[]
  categoryId: string
  categoryName: string
  isFeatured: boolean
  isTrending: boolean
  isBestSeller: boolean
  isNewArrival: boolean
  createdAt: string
  updatedAt: string
}

// ============================================
// PRODUCT IMAGE MAPPING - SPECIFIC TO EACH PRODUCT
// ============================================

const PRODUCT_IMAGES: Record<string, { thumbnail: string; images: string[] }> = {
  // ========== ELECTRONICS ==========
  'iphone-16-pro-max': {
    thumbnail: '/images/products/iphone-16-pro-max-thumbnail.jpg',
    images: [
      '/images/products/iphone-16-pro-max-image-1.jpg',
      '/images/products/iphone-16-pro-max-image-2.jpg',
      '/images/products/iphone-16-pro-max-image-3.jpg'
    ]
  },
  'macbook-pro-m4-14-inch': {
    thumbnail: '/images/products/macbook-pro-m4-14-inch-thumbnail.jpg',
    images: [
      '/images/products/macbook-pro-m4-14-inch-image-1.jpg',
      '/images/products/macbook-pro-m4-14-inch-image-2.jpg',
      '/images/products/macbook-pro-m4-14-inch-image-3.jpg'
    ]
  },
  'samsung-galaxy-s24-ultra': {
    thumbnail: '/images/products/samsung-galaxy-s24-ultra-thumbnail.jpg',
    images: [
      '/images/products/samsung-galaxy-s24-ultra-image-1.jpg',
      '/images/products/samsung-galaxy-s24-ultra-image-2.jpg',
      '/images/products/samsung-galaxy-s24-ultra-image-3.jpg'
    ]
  },
  'sony-wh-1000xm5-headphones': {
    thumbnail: '/images/products/sony-wh-1000xm5-headphones-thumbnail.jpg',
    images: [
      '/images/products/sony-wh-1000xm5-headphones-image-1.jpg',
      '/images/products/sony-wh-1000xm5-headphones-image-2.jpg',
      '/images/products/sony-wh-1000xm5-headphones-image-3.jpg'
    ]
  },
  'dell-xps-16': {
    thumbnail: '/images/products/dell-xps-16-thumbnail.jpg',
    images: [
      '/images/products/dell-xps-16-image-1.jpg',
      '/images/products/dell-xps-16-image-2.jpg'
    ]
  },
  'logitech-mx-master-3s': {
    thumbnail: '/images/products/logitech-mx-master-3s-thumbnail.jpg',
    images: [
      '/images/products/logitech-mx-master-3s-image-1.jpg',
      '/images/products/logitech-mx-master-3s-image-2.jpg'
    ]
  },
  'asus-rog-zephyrus-g16': {
    thumbnail: '/images/products/asus-rog-zephyrus-g16-thumbnail.jpg',
    images: [
      '/images/products/asus-rog-zephyrus-g16-image-1.jpg',
      '/images/products/asus-rog-zephyrus-g16-image-2.jpg'
    ]
  },
  'apple-watch-ultra-2': {
    thumbnail: '/images/products/apple-watch-ultra-2-thumbnail.jpg',
    images: [
      '/images/products/apple-watch-ultra-2-image-1.jpg',
      '/images/products/apple-watch-ultra-2-image-2.jpg'
    ]
  },
  'samsung-65-inch-oled-tv': {
    thumbnail: '/images/products/samsung-65-inch-oled-tv-thumbnail.jpg',
    images: [
      '/images/products/samsung-65-inch-oled-tv-image-1.jpg',
      '/images/products/samsung-65-inch-oled-tv-image-2.jpg'
    ]
  },
  'bose-quietcomfort-earbuds': {
    thumbnail: '/images/products/bose-quietcomfort-earbuds-thumbnail.jpg',
    images: [
      '/images/products/bose-quietcomfort-earbuds-image-1.jpg',
      '/images/products/bose-quietcomfort-earbuds-image-2.jpg'
    ]
  },
  'lenovo-thinkpad-x1-carbon-gen-12': {
    thumbnail: '/images/products/lenovo-thinkpad-x1-carbon-gen-12-thumbnail.jpg',
    images: [
      '/images/products/lenovo-thinkpad-x1-carbon-gen-12-image-1.jpg',
      '/images/products/lenovo-thinkpad-x1-carbon-gen-12-image-2.jpg'
    ]
  },
  'anker-737-power-bank': {
    thumbnail: '/images/products/anker-737-power-bank-thumbnail.jpg',
    images: [
      '/images/products/anker-737-power-bank-image-1.jpg',
    ]
  },
  'canon-eos-r5-mark-ii': {
    thumbnail: '/images/products/canon-eos-r5-mark-ii-thumbnail.jpg',
    images: [
      '/images/products/canon-eos-r5-mark-ii-image-1.jpg',
      '/images/products/canon-eos-r5-mark-ii-image-2.jpg'
    ]
  },
  'steelseries-arctis-nova-pro': {
    thumbnail: '/images/products/steelseries-arctis-nova-pro-thumbnail.jpg',
    images: [
      '/images/products/steelseries-arctis-nova-pro-image-1.jpg',
      '/images/products/steelseries-arctis-nova-pro-image-2.jpg'
    ]
  },
  'gopro-hero-13-black': {
    thumbnail: '/images/products/gopro-hero-13-black-thumbnail.jpg',
    images: [
      '/images/products/gopro-hero-13-black-image-1.jpg',
      '/images/products/gopro-hero-13-black-image-2.jpg'
    ]
  },
  'dji-mini-4-pro-drone': {
    thumbnail: '/images/products/dji-mini-4-pro-drone-thumbnail.jpg',
    images: [
      '/images/products/dji-mini-4-pro-drone-image-1.jpg',
      '/images/products/dji-mini-4-pro-drone-image-2.jpg'
    ]
  },
  'samsung-2tb-t7-shield-ssd': {
    thumbnail: '/images/products/samsung-2tb-t7-shield-ssd-thumbnail.jpg',
    images: [
      '/images/products/samsung-2tb-t7-shield-ssd-image-1.jpg',
    ]
  },
  'philips-hue-smart-bulbs-set': {
    thumbnail: '/images/products/philips-hue-smart-bulbs-set-thumbnail.jpg',
    images: [
      '/images/products/philips-hue-smart-bulbs-set-image-1.jpg',
      '/images/products/philips-hue-smart-bulbs-set-image-2.jpg'
    ]
  },
  'razer-blade-16-gaming-laptop': {
    thumbnail: '/images/products/razer-blade-16-gaming-laptop-thumbnail.jpg',
    images: [
      '/images/products/razer-blade-16-gaming-laptop-image-1.jpg',
      '/images/products/razer-blade-16-gaming-laptop-image-2.jpg'
    ]
  },
  'lg-c4-77-inch-oled-tv': {
    thumbnail: '/images/products/lg-c4-77-inch-oled-tv-thumbnail.jpg',
    images: [
      '/images/products/lg-c4-77-inch-oled-tv-image-1.jpg',
      '/images/products/lg-c4-77-inch-oled-tv-image-2.jpg'
    ]
  },

  // ========== FASHION ==========
  'prada-leather-jacket': {
    thumbnail: '/images/products/prada-leather-jacket-thumbnail.jpg',
    images: [
      '/images/products/prada-leather-jacket-image-1.jpg',
      '/images/products/prada-leather-jacket-image-2.jpg'
    ]
  },
  'gucci-silk-scarf': {
    thumbnail: '/images/products/gucci-silk-scarf-thumbnail.jpg',
    images: [
      '/images/products/gucci-silk-scarf-image-1.jpg',
      '/images/products/gucci-silk-scarf-image-2.jpg'
    ]
  },
  'saint-laurent-leather-belt': {
    thumbnail: '/images/products/saint-laurent-leather-belt-thumbnail.jpg',
    images: [
      '/images/products/saint-laurent-leather-belt-image-1.jpg',
      '/images/products/saint-laurent-leather-belt-image-2.jpg'
    ]
  },
  'burberry-trench-coat': {
    thumbnail: '/images/products/burberry-trench-coat-thumbnail.jpg',
    images: [
      '/images/products/burberry-trench-coat-image-1.jpg',
      '/images/products/burberry-trench-coat-image-2.jpg'
    ]
  },
  'versace-sunglasses': {
    thumbnail: '/images/products/versace-sunglasses-thumbnail.jpg',
    images: [
      '/images/products/versace-sunglasses-image-1.jpg',
      '/images/products/versace-sunglasses-image-2.jpg'
    ]
  },
  'hugo-boss-suit': {
    thumbnail: '/images/products/hugo-boss-suit-thumbnail.jpg',
    images: [
      '/images/products/hugo-boss-suit-image-1.jpg',
      '/images/products/hugo-boss-suit-image-2.jpg'
    ]
  },
  'ralph-lauren-polo-shirt': {
    thumbnail: '/images/products/ralph-lauren-polo-shirt-thumbnail.jpg',
    images: [
      '/images/products/ralph-lauren-polo-shirt-image-1.jpg',
      '/images/products/ralph-lauren-polo-shirt-image-2.jpg'
    ]
  },
  'armani-cashmere-sweater': {
    thumbnail: '/images/products/armani-cashmere-sweater-thumbnail.jpg',
    images: [
      '/images/products/armani-cashmere-sweater-image-1.jpg',
      '/images/products/armani-cashmere-sweater-image-2.jpg'
    ]
  },
  'tom-ford-jeans': {
    thumbnail: '/images/products/tom-ford-jeans-thumbnail.jpg',
    images: [
      '/images/products/tom-ford-jeans-image-1.jpg',
      '/images/products/tom-ford-jeans-image-2.jpg'
    ]
  },
  'fendi-leather-wallet': {
    thumbnail: '/images/products/fendi-leather-wallet-thumbnail.jpg',
    images: [
      '/images/products/fendi-leather-wallet-image-1.jpg',
      '/images/products/fendi-leather-wallet-image-2.jpg'
    ]
  },
  'moncler-puffer-jacket': {
    thumbnail: '/images/products/moncler-puffer-jacket-thumbnail.jpg',
    images: [
      '/images/products/moncler-puffer-jacket-image-1.jpg',
      '/images/products/moncler-puffer-jacket-image-2.jpg'
    ]
  },
  'balenciaga-hoodie': {
    thumbnail: '/images/products/balenciaga-hoodie-thumbnail.jpg',
    images: [
      '/images/products/balenciaga-hoodie-image-1.jpg',
      '/images/products/balenciaga-hoodie-image-2.jpg'
    ]
  },
  'dior-saddle-bag': {
    thumbnail: '/images/products/dior-saddle-bag-thumbnail.jpg',
    images: [
      '/images/products/dior-saddle-bag-image-1.jpg',
      '/images/products/dior-saddle-bag-image-2.jpg'
    ]
  },
  'kenzo-tiger-sweatshirt': {
    thumbnail: '/images/products/kenzo-tiger-sweatshirt-thumbnail.jpg',
    images: [
      '/images/products/kenzo-tiger-sweatshirt-image-1.jpg',
      '/images/products/kenzo-tiger-sweatshirt-image-2.jpg'
    ]
  },
  'valentino-rockstud-heels': {
    thumbnail: '/images/products/valentino-rockstud-heels-thumbnail.jpg',
    images: [
      '/images/products/valentino-rockstud-heels-image-1.jpg',
      '/images/products/valentino-rockstud-heels-image-2.jpg'
    ]
  },
  'off-white-belt': {
    thumbnail: '/images/products/off-white-belt-thumbnail.jpg',
    images: [
      '/images/products/off-white-belt-image-1.jpg',
      '/images/products/off-white-belt-image-2.jpg'
    ]
  },
  'alexander-mcqueen-skull-scarf': {
    thumbnail: '/images/products/alexander-mcqueen-skull-scarf-thumbnail.jpg',
    images: [
      '/images/products/alexander-mcqueen-skull-scarf-image-1.jpg',
      '/images/products/alexander-mcqueen-skull-scarf-image-2.jpg'
    ]
  },
  'bottega-veneta-intrecciato-tote': {
    thumbnail: '/images/products/bottega-veneta-intrecciato-tote-thumbnail.jpg',
    images: [
      '/images/products/bottega-veneta-intrecciato-tote-image-1.jpg',
      '/images/products/bottega-veneta-intrecciato-tote-image-2.jpg'
    ]
  },
  'saint-laurent-tuxedo-jacket': {
    thumbnail: '/images/products/saint-laurent-tuxedo-jacket-thumbnail.jpg',
    images: [
      '/images/products/saint-laurent-tuxedo-jacket-image-1.jpg',
      '/images/products/saint-laurent-tuxedo-jacket-image-2.jpg'
    ]
  },
  'acne-studios-logo-scarf': {
    thumbnail: '/images/products/acne-studios-logo-scarf-thumbnail.jpg',
    images: [
      '/images/products/acne-studios-logo-scarf-image-1.jpg',
      '/images/products/acne-studios-logo-scarf-image-2.jpg'
    ]
  },

  // ========== FOOTWEAR ==========
  'nike-air-max-270': {
    thumbnail: '/images/products/nike-air-max-270-thumbnail.jpg',
    images: [
      '/images/products/nike-air-max-270-image-1.jpg',
      '/images/products/nike-air-max-270-image-2.jpg'
    ]
  },
  'adidas-ultraboost-5': {
    thumbnail: '/images/products/adidas-ultraboost-5-thumbnail.jpg',
    images: [
      '/images/products/adidas-ultraboost-5-image-1.jpg',
      '/images/products/adidas-ultraboost-5-image-2.jpg'
    ]
  },
  'new-balance-990v6': {
    thumbnail: '/images/products/new-balance-990v6-thumbnail.jpg',
    images: [
      '/images/products/new-balance-990v6-image-1.jpg',
      '/images/products/new-balance-990v6-image-2.jpg'
    ]
  },
  'hoka-bondi-8': {
    thumbnail: '/images/products/hoka-bondi-8-thumbnail.jpg',
    images: [
      '/images/products/hoka-bondi-8-image-1.jpg',
      '/images/products/hoka-bondi-8-image-2.jpg'
    ]
  },
  'puma-suede-classic': {
    thumbnail: '/images/products/puma-suede-classic-thumbnail.jpg',
    images: [
      '/images/products/puma-suede-classic-image-1.jpg',
      '/images/products/puma-suede-classic-image-2.jpg'
    ]
  },
  'air-jordan-1-low': {
    thumbnail: '/images/products/air-jordan-1-low-thumbnail.jpg',
    images: [
      '/images/products/air-jordan-1-low-image-1.jpg',
      '/images/products/air-jordan-1-low-image-2.jpg'
    ]
  },
  'on-cloudmonster': {
    thumbnail: '/images/products/on-cloudmonster-thumbnail.jpg',
    images: [
      '/images/products/on-cloudmonster-image-1.jpg',
      '/images/products/on-cloudmonster-image-2.jpg'
    ]
  },
  'vans-old-skool': {
    thumbnail: '/images/products/vans-old-skool-thumbnail.jpg',
    images: [
      '/images/products/vans-old-skool-image-1.jpg',
      '/images/products/vans-old-skool-image-2.jpg'
    ]
  },
  'asics-gel-kayano-30': {
    thumbnail: '/images/products/asics-gel-kayano-30-thumbnail.jpg',
    images: [
      '/images/products/asics-gel-kayano-30-image-1.jpg',
      '/images/products/asics-gel-kayano-30-image-2.jpg'
    ]
  },
  'converse-chuck-70': {
    thumbnail: '/images/products/converse-chuck-70-thumbnail.jpg',
    images: [
      '/images/products/converse-chuck-70-image-1.jpg',
      '/images/products/converse-chuck-70-image-2.jpg'
    ]
  },
  'reebok-club-c-85': {
    thumbnail: '/images/products/reebok-club-c-85-thumbnail.jpg',
    images: [
      '/images/products/reebok-club-c-85-image-1.jpg',
      '/images/products/reebok-club-c-85-image-2.jpg'
    ]
  },
  'saucony-triumph-22': {
    thumbnail: '/images/products/saucony-triumph-22-thumbnail.jpg',
    images: [
      '/images/products/saucony-triumph-22-image-1.jpg',
      '/images/products/saucony-triumph-22-image-2.jpg'
    ]
  },
  'balenciaga-triple-s-sneakers': {
    thumbnail: '/images/products/balenciaga-triple-s-sneakers-thumbnail.jpg',
    images: [
      '/images/products/balenciaga-triple-s-sneakers-image-1.jpg',
      '/images/products/balenciaga-triple-s-sneakers-image-2.jpg'
    ]
  },
  'mizuno-wave-rider-27': {
    thumbnail: '/images/products/mizuno-wave-rider-27-thumbnail.jpg',
    images: [
      '/images/products/mizuno-wave-rider-27-image-1.jpg',
      '/images/products/mizuno-wave-rider-27-image-2.jpg'
    ]
  },
  'ugg-classic-mini-boots': {
    thumbnail: '/images/products/ugg-classic-mini-boots-thumbnail.jpg',
    images: [
      '/images/products/ugg-classic-mini-boots-image-1.jpg',
      '/images/products/ugg-classic-mini-boots-image-2.jpg'
    ]
  },

  // ========== WATCHES ==========
  'rolex-submariner-date': {
    thumbnail: '/images/products/rolex-submariner-date-thumbnail.jpg',
    images: [
      '/images/products/rolex-submariner-date-image-1.jpg',
      '/images/products/rolex-submariner-date-image-2.jpg'
    ]
  },
  'omega-speedmaster-professional': {
    thumbnail: '/images/products/omega-speedmaster-professional-thumbnail.jpg',
    images: [
      '/images/products/omega-speedmaster-professional-image-1.jpg',
      '/images/products/omega-speedmaster-professional-image-2.jpg'
    ]
  },
  'garmin-fenix-7-pro': {
    thumbnail: '/images/products/garmin-fenix-7-pro-thumbnail.jpg',
    images: [
      '/images/products/garmin-fenix-7-pro-image-1.jpg',
      '/images/products/garmin-fenix-7-pro-image-2.jpg'
    ]
  },
  'tag-heuer-carrera-chronograph': {
    thumbnail: '/images/products/tag-heuer-carrera-chronograph-thumbnail.jpg',
    images: [
      '/images/products/tag-heuer-carrera-chronograph-image-1.jpg',
      '/images/products/tag-heuer-carrera-chronograph-image-2.jpg'
    ]
  },
  'samsung-galaxy-watch-6': {
    thumbnail: '/images/products/samsung-galaxy-watch-6-thumbnail.jpg',
    images: [
      '/images/products/samsung-galaxy-watch-6-image-1.jpg',
      '/images/products/samsung-galaxy-watch-6-image-2.jpg'
    ]
  },
  'seiko-prospex-diver': {
    thumbnail: '/images/products/seiko-prospex-diver-thumbnail.jpg',
    images: [
      '/images/products/seiko-prospex-diver-image-1.jpg',
      '/images/products/seiko-prospex-diver-image-2.jpg'
    ]
  },
  'cartier-tank-solo': {
    thumbnail: '/images/products/cartier-tank-solo-thumbnail.jpg',
    images: [
      '/images/products/cartier-tank-solo-image-1.jpg',
      '/images/products/cartier-tank-solo-image-2.jpg'
    ]
  },
  'casio-g-shock-ga-2100': {
    thumbnail: '/images/products/casio-g-shock-ga-2100-thumbnail.jpg',
    images: [
      '/images/products/casio-g-shock-ga-2100-image-1.jpg',
      '/images/products/casio-g-shock-ga-2100-image-2.jpg'
    ]
  },
  'tissot-prx-powermatic-80': {
    thumbnail: '/images/products/tissot-prx-powermatic-80-thumbnail.jpg',
    images: [
      '/images/products/tissot-prx-powermatic-80-image-1.jpg',
      '/images/products/tissot-prx-powermatic-80-image-2.jpg'
    ]
  },
  'hamilton-khaki-field': {
    thumbnail: '/images/products/hamilton-khaki-field-thumbnail.jpg',
    images: [
      '/images/products/hamilton-khaki-field-image-1.jpg',
      '/images/products/hamilton-khaki-field-image-2.jpg'
    ]
  },
  'breitling-navitimer-b01': {
    thumbnail: '/images/products/breitling-navitimer-b01-thumbnail.jpg',
    images: [
      '/images/products/breitling-navitimer-b01-image-1.jpg',
      '/images/products/breitling-navitimer-b01-image-2.jpg'
    ]
  },

  // ========== HOME & LIVING ==========
  'dyson-v15-detect-vacuum': {
    thumbnail: '/images/products/dyson-v15-detect-vacuum-thumbnail.jpg',
    images: [
      '/images/products/dyson-v15-detect-vacuum-image-1.jpg',
      '/images/products/dyson-v15-detect-vacuum-image-2.jpg'
    ]
  },
  'kitchenaid-artisan-stand-mixer': {
    thumbnail: '/images/products/kitchenaid-artisan-stand-mixer-thumbnail.jpg',
    images: [
      '/images/products/kitchenaid-artisan-stand-mixer-image-1.jpg',
      '/images/products/kitchenaid-artisan-stand-mixer-image-2.jpg'
    ]
  },
  'sony-65-inch-oled-tv': {
    thumbnail: '/images/products/sony-65-inch-oled-tv-thumbnail.jpg',
    images: [
      '/images/products/sony-65-inch-oled-tv-image-1.jpg',
      '/images/products/sony-65-inch-oled-tv-image-2.jpg'
    ]
  },
  'sonos-era-300-speaker': {
    thumbnail: '/images/products/sonos-era-300-speaker-thumbnail.jpg',
    images: [
      '/images/products/sonos-era-300-speaker-image-1.jpg',
      '/images/products/sonos-era-300-speaker-image-2.jpg'
    ]
  },
  'le-creuset-dutch-oven': {
    thumbnail: '/images/products/le-creuset-dutch-oven-thumbnail.jpg',
    images: [
      '/images/products/le-creuset-dutch-oven-image-1.jpg',
      '/images/products/le-creuset-dutch-oven-image-2.jpg'
    ]
  },
  'philips-hue-starter-kit': {
    thumbnail: '/images/products/philips-hue-starter-kit-thumbnail.jpg',
    images: [
      '/images/products/philips-hue-starter-kit-image-1.jpg',
      '/images/products/philips-hue-starter-kit-image-2.jpg'
    ]
  },
  'nespresso-vertuo-pop': {
    thumbnail: '/images/products/nespresso-vertuo-pop-thumbnail.jpg',
    images: [
      '/images/products/nespresso-vertuo-pop-image-1.jpg',
      '/images/products/nespresso-vertuo-pop-image-2.jpg'
    ]
  },
  'google-nest-hub-max': {
    thumbnail: '/images/products/google-nest-hub-max-thumbnail.jpg',
    images: [
      '/images/products/google-nest-hub-max-image-1.jpg',
      '/images/products/google-nest-hub-max-image-2.jpg'
    ]
  },
  'victorinox-swiss-classic-knife': {
    thumbnail: '/images/products/victorinox-swiss-classic-knife-thumbnail.jpg',
    images: [
      '/images/products/victorinox-swiss-classic-knife-image-1.jpg',
      '/images/products/victorinox-swiss-classic-knife-image-2.jpg'
    ]
  },
  'smeg-kettle-50s-style': {
    thumbnail: '/images/products/smeg-kettle-50s-style-thumbnail.jpg',
    images: [
      '/images/products/smeg-kettle-50s-style-image-1.jpg',
      '/images/products/smeg-kettle-50s-style-image-2.jpg'
    ]
  },
  'cuisinart-air-fryer-toaster-oven': {
    thumbnail: '/images/products/cuisinart-air-fryer-toaster-oven-thumbnail.jpg',
    images: [
      '/images/products/cuisinart-air-fryer-toaster-oven-image-1.jpg',
      '/images/products/cuisinart-air-fryer-toaster-oven-image-2.jpg'
    ]
  },
  'jbl-partybox-710': {
    thumbnail: '/images/products/jbl-partybox-710-thumbnail.jpg',
    images: [
      '/images/products/jbl-partybox-710-image-1.jpg',
      '/images/products/jbl-partybox-710-image-2.jpg'
    ]
  },
  'zwilling-ja-henckels-knife-set': {
    thumbnail: '/images/products/zwilling-ja-henckels-knife-set-thumbnail.jpg',
    images: [
      '/images/products/zwilling-ja-henckels-knife-set-image-1.jpg',
      '/images/products/zwilling-ja-henckels-knife-set-image-2.jpg'
    ]
  },
  'miele-complete-c3-vacuum': {
    thumbnail: '/images/products/miele-complete-c3-vacuum-thumbnail.jpg',
    images: [
      '/images/products/miele-complete-c3-vacuum-image-1.jpg',
      '/images/products/miele-complete-c3-vacuum-image-2.jpg'
    ]
  },
  'keurig-k-elite-coffee-maker': {
    thumbnail: '/images/products/keurig-k-elite-coffee-maker-thumbnail.jpg',
    images: [
      '/images/products/keurig-k-elite-coffee-maker-image-1.jpg',
      '/images/products/keurig-k-elite-coffee-maker-image-2.jpg'
    ]
  },

  // ========== BEAUTY & PERSONAL CARE ==========
  'dyson-airwrap-multi-styler': {
    thumbnail: '/images/products/dyson-airwrap-multi-styler-thumbnail.jpg',
    images: [
      '/images/products/dyson-airwrap-multi-styler-image-1.jpg',
      '/images/products/dyson-airwrap-multi-styler-image-2.jpg'
    ]
  },
  'cerave-hydrating-cleanser': {
    thumbnail: '/images/products/cerave-hydrating-cleanser-thumbnail.jpg',
    images: [
      '/images/products/cerave-hydrating-cleanser-image-1.jpg',
      '/images/products/cerave-hydrating-cleanser-image-2.jpg'
    ]
  },
  'loreal-paris-revitalift-serum': {
    thumbnail: '/images/products/loreal-paris-revitalift-serum-thumbnail.jpg',
    images: [
      '/images/products/loreal-paris-revitalift-serum-image-1.jpg',
      '/images/products/loreal-paris-revitalift-serum-image-2.jpg'
    ]
  },
  'philips-sonicare-toothbrush': {
    thumbnail: '/images/products/philips-sonicare-toothbrush-thumbnail.jpg',
    images: [
      '/images/products/philips-sonicare-toothbrush-image-1.jpg',
      '/images/products/philips-sonicare-toothbrush-image-2.jpg'
    ]
  },
  'olay-regenerist-retinol-24': {
    thumbnail: '/images/products/olay-regenerist-retinol-24-thumbnail.jpg',
    images: [
      '/images/products/olay-regenerist-retinol-24-image-1.jpg',
      '/images/products/olay-regenerist-retinol-24-image-2.jpg'
    ]
  },
  'braun-series-9-shaver': {
    thumbnail: '/images/products/braun-series-9-shaver-thumbnail.jpg',
    images: [
      '/images/products/braun-series-9-shaver-image-1.jpg',
      '/images/products/braun-series-9-shaver-image-2.jpg'
    ]
  },
  'the-ordinary-hyaluronic-acid-2': {
    thumbnail: '/images/products/the-ordinary-hyaluronic-acid-2-thumbnail.jpg',
    images: [
      '/images/products/the-ordinary-hyaluronic-acid-2-image-1.jpg',
      '/images/products/the-ordinary-hyaluronic-acid-2-image-2.jpg'
    ]
  },
  'foreo-luna-3-face-brush': {
    thumbnail: '/images/products/foreo-luna-3-face-brush-thumbnail.jpg',
    images: [
      '/images/products/foreo-luna-3-face-brush-image-1.jpg',
      '/images/products/foreo-luna-3-face-brush-image-2.jpg'
    ]
  },
  'estee-lauder-night-serum': {
    thumbnail: '/images/products/estee-lauder-night-serum-thumbnail.jpg',
    images: [
      '/images/products/estee-lauder-night-serum-image-1.jpg',
      '/images/products/estee-lauder-night-serum-image-2.jpg'
    ]
  },
  'panasonic-multi-style-curling-iron': {
    thumbnail: '/images/products/panasonic-multi-style-curling-iron-thumbnail.jpg',
    images: [
      '/images/products/panasonic-multi-style-curling-iron-image-1.jpg',
      '/images/products/panasonic-multi-style-curling-iron-image-2.jpg'
    ]
  },
  'neutrogena-hydro-boost-water-gel': {
    thumbnail: '/images/products/neutrogena-hydro-boost-water-gel-thumbnail.jpg',
    images: [
      '/images/products/neutrogena-hydro-boost-water-gel-image-1.jpg',
      '/images/products/neutrogena-hydro-boost-water-gel-image-2.jpg'
    ]
  },
  'remington-hair-straightener': {
    thumbnail: '/images/products/remington-hair-straightener-thumbnail.jpg',
    images: [
      '/images/products/remington-hair-straightener-image-1.jpg',
      '/images/products/remington-hair-straightener-image-2.jpg'
    ]
  },

  // ========== FITNESS & SPORTS ==========
  'peloton-bike-plus': {
    thumbnail: '/images/products/peloton-bike-plus-thumbnail.jpg',
    images: [
      '/images/products/peloton-bike-plus-image-1.jpg',
      '/images/products/peloton-bike-plus-image-2.jpg'
    ]
  },
  'garmin-forerunner-965': {
    thumbnail: '/images/products/garmin-forerunner-965-thumbnail.jpg',
    images: [
      '/images/products/garmin-forerunner-965-image-1.jpg',
      '/images/products/garmin-forerunner-965-image-2.jpg'
    ]
  },
  'bowflex-selecttech-552-dumbbells': {
    thumbnail: '/images/products/bowflex-selecttech-552-dumbbells-thumbnail.jpg',
    images: [
      '/images/products/bowflex-selecttech-552-dumbbells-image-1.jpg',
      '/images/products/bowflex-selecttech-552-dumbbells-image-2.jpg'
    ]
  },
  'theragun-pro': {
    thumbnail: '/images/products/theragun-pro-thumbnail.jpg',
    images: [
      '/images/products/theragun-pro-image-1.jpg',
      '/images/products/theragun-pro-image-2.jpg'
    ]
  },
  'whoop-4-0-fitness-tracker': {
    thumbnail: '/images/products/whoop-4-0-fitness-tracker-thumbnail.jpg',
    images: [
      '/images/products/whoop-4-0-fitness-tracker-image-1.jpg',
      '/images/products/whoop-4-0-fitness-tracker-image-2.jpg'
    ]
  },
  'nordictrack-treadmill': {
    thumbnail: '/images/products/nordictrack-treadmill-thumbnail.jpg',
    images: [
      '/images/products/nordictrack-treadmill-image-1.jpg',
      '/images/products/nordictrack-treadmill-image-2.jpg'
    ]
  },
  'fitbit-charge-6': {
    thumbnail: '/images/products/fitbit-charge-6-thumbnail.jpg',
    images: [
      '/images/products/fitbit-charge-6-image-1.jpg',
      '/images/products/fitbit-charge-6-image-2.jpg'
    ]
  },
  'concept2-rower': {
    thumbnail: '/images/products/concept2-rower-thumbnail.jpg',
    images: [
      '/images/products/concept2-rower-image-1.jpg',
      '/images/products/concept2-rower-image-2.jpg'
    ]
  },
  'under-armour-hovr-shoes': {
    thumbnail: '/images/products/under-armour-hovr-shoes-thumbnail.jpg',
    images: [
      '/images/products/under-armour-hovr-shoes-image-1.jpg',
      '/images/products/under-armour-hovr-shoes-image-2.jpg'
    ]
  },
  'adidas-powerlifting-belt': {
    thumbnail: '/images/products/adidas-powerlifting-belt-thumbnail.jpg',
    images: [
      '/images/products/adidas-powerlifting-belt-image-1.jpg',
      '/images/products/adidas-powerlifting-belt-image-2.jpg'
    ]
  },
  'trx-suspension-trainer': {
    thumbnail: '/images/products/trx-suspension-trainer-thumbnail.jpg',
    images: [
      '/images/products/trx-suspension-trainer-image-1.jpg',
      '/images/products/trx-suspension-trainer-image-2.jpg'
    ]
  },

  // ========== GAMING ==========
  'playstation-5-digital-edition': {
    thumbnail: '/images/products/playstation-5-digital-edition-thumbnail.jpg',
    images: [
      '/images/products/playstation-5-digital-edition-image-1.jpg',
      '/images/products/playstation-5-digital-edition-image-2.jpg'
    ]
  },
  'xbox-series-x': {
    thumbnail: '/images/products/xbox-series-x-thumbnail.jpg',
    images: [
      '/images/products/xbox-series-x-image-1.jpg',
      '/images/products/xbox-series-x-image-2.jpg'
    ]
  },
  'nintendo-switch-oled': {
    thumbnail: '/images/products/nintendo-switch-oled-thumbnail.jpg',
    images: [
      '/images/products/nintendo-switch-oled-image-1.jpg',
      '/images/products/nintendo-switch-oled-image-2.jpg'
    ]
  },
  'logitech-g-pro-x-superlight': {
    thumbnail: '/images/products/logitech-g-pro-x-superlight-thumbnail.jpg',
    images: [
      '/images/products/logitech-g-pro-x-superlight-image-1.jpg',
      '/images/products/logitech-g-pro-x-superlight-image-2.jpg'
    ]
  },
  'razer-deathadder-v3-pro': {
    thumbnail: '/images/products/razer-deathadder-v3-pro-thumbnail.jpg',
    images: [
      '/images/products/razer-deathadder-v3-pro-image-1.jpg',
      '/images/products/razer-deathadder-v3-pro-image-2.jpg'
    ]
  },
  'corsair-k95-rgb-platinum': {
    thumbnail: '/images/products/corsair-k95-rgb-platinum-thumbnail.jpg',
    images: [
      '/images/products/corsair-k95-rgb-platinum-image-1.jpg',
      '/images/products/corsair-k95-rgb-platinum-image-2.jpg'
    ]
  },
  'steelseries-arctis-nova-7': {
    thumbnail: '/images/products/steelseries-arctis-nova-7-thumbnail.jpg',
    images: [
      '/images/products/steelseries-arctis-nova-7-image-1.jpg',
      '/images/products/steelseries-arctis-nova-7-image-2.jpg'
    ]
  },
  'samsung-odyssey-g9-monitor': {
    thumbnail: '/images/products/samsung-odyssey-g9-monitor-thumbnail.jpg',
    images: [
      '/images/products/samsung-odyssey-g9-monitor-image-1.jpg',
      '/images/products/samsung-odyssey-g9-monitor-image-2.jpg'
    ]
  },
  'wd-black-2tb-gaming-ssd': {
    thumbnail: '/images/products/wd-black-2tb-gaming-ssd-thumbnail.jpg',
    images: [
      '/images/products/wd-black-2tb-gaming-ssd-image-1.jpg',
      '/images/products/wd-black-2tb-gaming-ssd-image-2.jpg'
    ]
  },
  'razer-kishi-v2-controller': {
    thumbnail: '/images/products/razer-kishi-v2-controller-thumbnail.jpg',
    images: [
      '/images/products/razer-kishi-v2-controller-image-1.jpg',
      '/images/products/razer-kishi-v2-controller-image-2.jpg'
    ]
  },

  // ========== BOOKS ==========
  'the-psychology-of-money': {
    thumbnail: '/images/products/the-psychology-of-money-thumbnail.jpg',
    images: [
      '/images/products/the-psychology-of-money-image-1.jpg',
      '/images/products/the-psychology-of-money-image-2.jpg'
    ]
  },
  'atomic-habits': {
    thumbnail: '/images/products/atomic-habits-thumbnail.jpg',
    images: [
      '/images/products/atomic-habits-image-1.jpg',
      '/images/products/atomic-habits-image-2.jpg'
    ]
  },
  'the-silent-patient': {
    thumbnail: '/images/products/the-silent-patient-thumbnail.jpg',
    images: [
      '/images/products/the-silent-patient-image-1.jpg',
      '/images/products/the-silent-patient-image-2.jpg'
    ]
  },
  'sapiens': {
    thumbnail: '/images/products/sapiens-thumbnail.jpg',
    images: [
      '/images/products/sapiens-image-1.jpg',
      '/images/products/sapiens-image-2.jpg'
    ]
  },
  'project-hail-mary': {
    thumbnail: '/images/products/project-hail-mary-thumbnail.jpg',
    images: [
      '/images/products/project-hail-mary-image-1.jpg',
      '/images/products/project-hail-mary-image-2.jpg'
    ]
  },
  'becoming': {
    thumbnail: '/images/products/becoming-thumbnail.jpg',
    images: [
      '/images/products/becoming-image-1.jpg',
      '/images/products/becoming-image-2.jpg'
    ]
  },
  'the-creative-act': {
    thumbnail: '/images/products/the-creative-act-thumbnail.jpg',
    images: [
      '/images/products/the-creative-act-image-1.jpg',
      '/images/products/the-creative-act-image-2.jpg'
    ]
  },
  'the-four-agreements': {
    thumbnail: '/images/products/the-four-agreements-thumbnail.jpg',
    images: [
      '/images/products/the-four-agreements-image-1.jpg',
      '/images/products/the-four-agreements-image-2.jpg'
    ]
  },
  'dune': {
    thumbnail: '/images/products/dune-thumbnail.jpg',
    images: [
      '/images/products/dune-image-1.jpg',
      '/images/products/dune-image-2.jpg'
    ]
  },
  'where-the-crawdads-sing': {
    thumbnail: '/images/products/where-the-crawdads-sing-thumbnail.jpg',
    images: [
      '/images/products/where-the-crawdads-sing-image-1.jpg',
      '/images/products/where-the-crawdads-sing-image-2.jpg'
    ]
  },

  // ========== ORGANIC GROCERIES ==========
  'organic-honey-500g': {
    thumbnail: '/images/products/Organic Honey 500g.jpg',
    images: [
      '/images/products/Organic Honey 500g.jpg',
    ]
  },
  'organic-green-tea-100g': {
    thumbnail: '/images/products/organic-green-tea-100g.jpg',
    images: [
      '/images/products/organic-green-tea-100g.jpg',
    ]
  },
  'organic-coconut-oil-500ml': {
    thumbnail: '/images/products/Organic Coconut Oil 500ml thumbnail.jpg',
    images: [
      '/images/products/Organic Coconut Oil 500ml.jpg',
     
    ]
  },
  'organic-oats-1kg': {
    thumbnail: '/images/products/organic-oats-1kg.jpg',
    images: [
      '/images/products/organic-oats-1kg.jpg',

    ]
  },
  'organic-almonds-500g': {
    thumbnail: '/images/products/organic-almonds-500g.jpg',
    images: [
      '/images/products/organic-almonds-500g.jpg',
    ]
  },
  'organic-quinoa-1kg': {
    thumbnail: '/images/products/organic-quinoa-1kg.jpg',
    images: [
      '/images/products/organic-quinoa-1kg.jpg',
      '/images/products/organic-quinoa-1kg.jpg'
    ]
  },
  'organic-chia-seeds-500g': {
    thumbnail: '/images/products/Organic Chia Seeds 500g-image-1.jpg',
    images: [
      '/images/products/Organic Chia Seeds 500g-image-1.jpg',
    
    ]
  },
  'organic-olive-oil-750ml': {
    thumbnail: '/images/products/organic-olive-oil-750ml-thumbnail.jpg',
    images: [
      '/images/products/organic-olive-oil-750ml-image-1.jpg',
      '/images/products/organic-olive-oil-750ml-image-2.jpg'
    ]
  },
  'organic-maple-syrup-250ml': {
    thumbnail: '/images/products/Organic Maple Syrup 250ml.jpg',
    images: [
      '/images/products/Organic Maple Syrup 250ml.jpg',
      
    ]
  },
  'organic-turmeric-powder-200g': {
    thumbnail: '/images/products/organic-turmeric-powder-200g.jpg',
    images: [
      '/images/products/organic-turmeric-powder-200g.jpg'
    ]
  },
  'organic-dried-figs-400g': {
    thumbnail: '/images/products/organic-dried-figs-400g.jpg',
    images: [
      '/images/products/organic-dried-figs-400g.jpg',
  
    ]
  },
  'organic-brown-rice-1kg': {
    thumbnail: '/images/products/Organic Brown Rice 1kg.jpg',
    images: [
      '/images/products/Organic Brown Rice 1kg.jpg',
   
    ]
  }
};

const FALLBACK_IMAGES: { thumbnail: string; images: string[] } = {
  thumbnail: '/images/products/default-thumbnail.jpg',
  images: [
    '/images/products/default-image-1.jpg',
    '/images/products/default-image-2.jpg'
  ]
};

// Helper function to get product images
function getProductImages(slug: string) {
  return PRODUCT_IMAGES[slug] || FALLBACK_IMAGES
}

// Helper to create product with correct images
function createProduct(productData: any) {
  const images = getProductImages(productData.slug)
  return {
    ...productData,
    thumbnail: images.thumbnail,
    images: images.images
  }
}

// ============================================
// CATEGORY 1: ELECTRONICS (20 Products)
// ============================================

const electronics: Product[] = [
  createProduct({
    id: "p1",
    title: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    description: "The iPhone 16 Pro Max features Apple's most advanced A18 Pro chip, a stunning 6.9-inch Super Retina XDR display with ProMotion technology, and a revolutionary triple-camera system. Capture professional-quality photos and videos with the 48MP main camera, 12MP ultra-wide, and 12MP telephoto lens. The titanium body offers exceptional durability while maintaining a sleek, lightweight design. With up to 29 hours of battery life, this is the most powerful iPhone ever created.",
    shortDescription: "Apple's ultimate smartphone with A18 Pro chip, 6.9-inch display, and pro camera system.",
    price: 1499.99,
    originalPrice: 1599.99,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 2345,
    stock: 85,
    brand: "Apple",
    sku: "BLZ-EL-0001",
    weight: 240,
    dimensions: { width: 77.6, height: 160.9, depth: 8.3 },
    tags: ["apple", "iphone", "smartphone", "5g", "pro"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    createdAt: "2024-09-20T10:00:00Z",
    updatedAt: "2024-09-20T10:00:00Z"
  }),
  createProduct({
    id: "p2",
    title: "MacBook Pro M4 14-inch",
    slug: "macbook-pro-m4-14-inch",
    description: "The MacBook Pro with M4 chip redefines professional computing with breakthrough performance and efficiency. The 14-inch Liquid Retina XDR display delivers stunning visuals with 1000 nits brightness and 1600 nits peak HDR. Featuring 16GB unified memory, 1TB SSD storage, and up to 22 hours of battery life, this powerhouse handles demanding workflows with ease. Perfect for creative professionals and developers.",
    shortDescription: "Professional laptop with M4 chip, 14-inch XDR display, and all-day battery life.",
    price: 2299.99,
    originalPrice: 2499.99,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 1842,
    stock: 45,
    brand: "Apple",
    sku: "BLZ-EL-0002",
    weight: 1550,
    dimensions: { width: 312.6, height: 221.2, depth: 15.5 },
    tags: ["apple", "macbook", "laptop", "m4", "pro"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-15T10:00:00Z",
    updatedAt: "2024-10-15T10:00:00Z"
  }),
  createProduct({
    id: "p3",
    title: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    description: "The Samsung Galaxy S24 Ultra represents the pinnacle of Android innovation. The 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate offers vibrant, true-to-life colors. The advanced quad-camera system features a 200MP main sensor, 12MP ultra-wide, dual 10MP telephoto lenses for exceptional zoom capabilities. Powered by the Snapdragon 8 Gen 3 processor and 12GB RAM, this device handles everything with incredible speed. The built-in S Pen adds a new dimension of productivity and creativity.",
    shortDescription: "Premium Android smartphone with 200MP camera, S Pen, and Snapdragon 8 Gen 3.",
    price: 1399.99,
    originalPrice: 1499.99,
    discountPercentage: 7,
    rating: 4.7,
    reviewCount: 2103,
    stock: 60,
    brand: "Samsung",
    sku: "BLZ-EL-0003",
    weight: 233,
    dimensions: { width: 79.0, height: 162.3, depth: 8.6 },
    tags: ["samsung", "galaxy", "android", "smartphone", "s-pen"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p4",
    title: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh-1000xm5-headphones",
    description: "The Sony WH-1000XM5 represent the pinnacle of wireless noise-canceling headphones. Industry-leading noise cancellation with the Integrated Processor V1 and HD Noise Cancelling Processor QN1 delivers unparalleled silence. The 30mm driver units reproduce rich, detailed sound with exceptional clarity. With up to 30 hours of battery life and quick charging, these headphones are perfect for travel and daily commutes. The advanced microphone system ensures crystal-clear calls even in noisy environments.",
    shortDescription: "Premium noise-canceling headphones with exceptional sound quality and 30-hour battery.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 3120,
    stock: 120,
    brand: "Sony",
    sku: "BLZ-EL-0004",
    weight: 250,
    dimensions: { width: 175, height: 200, depth: 75 },
    tags: ["sony", "headphones", "wireless", "noise-canceling"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-15T10:00:00Z",
    updatedAt: "2024-05-15T10:00:00Z"
  }),
  createProduct({
    id: "p5",
    title: "Dell XPS 16",
    slug: "dell-xps-16",
    description: "The Dell XPS 16 is a masterpiece of engineering, featuring a stunning 16-inch 4K OLED display with a 16:10 aspect ratio. Powered by Intel Core Ultra 9 processors and NVIDIA GeForce RTX 4070 graphics, this laptop delivers exceptional performance for content creation and gaming. The CNC-machined aluminum chassis provides premium durability while maintaining a slim 18.6mm profile. With up to 64GB DDR5 RAM and 2TB SSD storage, this is a workstation-grade laptop in a sleek package.",
    shortDescription: "Premium 16-inch laptop with OLED display, Intel Core Ultra 9, and RTX 4070 graphics.",
    price: 1899.99,
    originalPrice: 1999.99,
    discountPercentage: 5,
    rating: 4.6,
    reviewCount: 875,
    stock: 30,
    brand: "Dell",
    sku: "BLZ-EL-0005",
    weight: 2100,
    dimensions: { width: 358, height: 245, depth: 18.6 },
    tags: ["dell", "xps", "laptop", "oled", "creator"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p6",
    title: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    description: "The Logitech MX Master 3S is the ultimate productivity mouse, featuring an 8K DPI sensor and quiet clicks that are 90% quieter than the previous generation. The MagSpeed Electromagnetic Wheel provides precise scrolling with both click-to-click and hyper-fast scrolling modes. Connect up to three devices simultaneously via Bluetooth or USB receiver. The ergonomic design supports comfortable use for extended periods, making it perfect for professionals and creative workers.",
    shortDescription: "Premium wireless mouse with 8K DPI sensor, quiet clicks, and multi-device connectivity.",
    price: 99.99,
    originalPrice: 109.99,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 4567,
    stock: 200,
    brand: "Logitech",
    sku: "BLZ-EL-0006",
    weight: 141,
    dimensions: { width: 84.3, height: 124.9, depth: 51.0 },
    tags: ["logitech", "mouse", "wireless", "ergonomic"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z"
  }),
  createProduct({
    id: "p7",
    title: "ASUS ROG Zephyrus G16",
    slug: "asus-rog-zephyrus-g16",
    description: "The ASUS ROG Zephyrus G16 is a gaming powerhouse that redefines portable performance. Featuring up to Intel Core Ultra 9 processor and NVIDIA GeForce RTX 4090 graphics, this 16-inch laptop handles demanding games and creative tasks with ease. The Nebula OLED display offers 240Hz refresh rate, 0.2ms response time, and 100% DCI-P3 color gamut. The intelligent cooling system uses liquid metal and tri-fan technology for sustained performance. Sleek, lightweight design makes it perfect for gaming on the go.",
    shortDescription: "16-inch gaming laptop with OLED display, RTX 4090, and Intel Core Ultra 9.",
    price: 2499.99,
    originalPrice: 2699.99,
    discountPercentage: 7,
    rating: 4.7,
    reviewCount: 1256,
    stock: 25,
    brand: "ASUS",
    sku: "BLZ-EL-0007",
    weight: 1850,
    dimensions: { width: 354, height: 242, depth: 22.9 },
    tags: ["asus", "rog", "gaming", "laptop", "oled"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-01T10:00:00Z",
    updatedAt: "2024-09-01T10:00:00Z"
  }),
  createProduct({
    id: "p8",
    title: "Apple Watch Ultra 2",
    slug: "apple-watch-ultra-2",
    description: "The Apple Watch Ultra 2 is the ultimate smartwatch designed for athletes, adventurers, and outdoor enthusiasts. Featuring a 49mm titanium case, always-on Retina display with 3000 nits brightness, and the powerful S9 SiP chip. Precision dual-frequency GPS provides accurate tracking in challenging environments. The advanced health sensors include ECG, blood oxygen monitoring, and temperature sensing. With up to 36 hours of battery life and 72 hours in low-power mode, this watch is ready for any expedition.",
    shortDescription: "Ultimate smartwatch with 49mm titanium case, dual-frequency GPS, and advanced health sensors.",
    price: 799.99,
    originalPrice: 849.99,
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 2876,
    stock: 55,
    brand: "Apple",
    sku: "BLZ-EL-0008",
    weight: 61,
    dimensions: { width: 44, height: 49, depth: 14.4 },
    tags: ["apple", "watch", "smartwatch", "fitness", "gps"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p9",
    title: "Samsung 65-inch OLED TV",
    slug: "samsung-65-inch-oled-tv",
    description: "The Samsung 65-inch OLED TV delivers breathtaking picture quality with self-illuminating pixels that produce perfect blacks and infinite contrast. The Neural Quantum Processor 4K uses AI upscaling to transform content into stunning 4K resolution. With 144Hz refresh rate, it's perfect for gaming with minimal input lag. The Dolby Atmos audio system creates an immersive sound experience. Smart TV capabilities include built-in voice assistants and access to all major streaming platforms.",
    shortDescription: "65-inch OLED TV with 4K resolution, 144Hz refresh rate, and AI upscaling technology.",
    price: 2499.99,
    originalPrice: 2799.99,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 876,
    stock: 15,
    brand: "Samsung",
    sku: "BLZ-EL-0009",
    weight: 25000,
    dimensions: { width: 1448, height: 837, depth: 40 },
    tags: ["samsung", "tv", "oled", "4k", "smart-tv"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-04-10T10:00:00Z",
    updatedAt: "2024-04-10T10:00:00Z"
  }),
  createProduct({
    id: "p10",
    title: "Bose QuietComfort Earbuds",
    slug: "bose-quietcomfort-earbuds",
    description: "The Bose QuietComfort Earbuds offer world-class noise cancellation in a compact, truly wireless design. The proprietary acoustic architecture delivers deep, immersive sound with powerful bass and crisp highs. Stay aware of your surroundings with the transparency mode. The earbuds provide up to 6 hours of battery life with an additional 18 hours from the charging case. The comfortable, secure fit with multiple ear tip sizes ensures you can wear them for hours without discomfort.",
    shortDescription: "Premium wireless earbuds with world-class noise cancellation and immersive sound.",
    price: 279.99,
    originalPrice: 299.99,
    discountPercentage: 7,
    rating: 4.7,
    reviewCount: 3210,
    stock: 95,
    brand: "Bose",
    sku: "BLZ-EL-0010",
    weight: 26,
    dimensions: { width: 25, height: 30, depth: 20 },
    tags: ["bose", "earbuds", "wireless", "noise-canceling"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z"
  }),
  createProduct({
    id: "p11",
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    slug: "lenovo-thinkpad-x1-carbon-gen-12",
    description: "The Lenovo ThinkPad X1 Carbon Gen 12 is the ultimate business ultrabook, featuring a 14-inch 2.8K OLED display with anti-reflective coating. Powered by Intel Core Ultra 7 processors, this laptop delivers exceptional performance with up to 16 hours of battery life. The carbon fiber chassis ensures lightweight durability while maintaining MIL-SPEC ruggedness. The advanced security features include a fingerprint reader, IR camera, and ThinkShield security suite.",
    shortDescription: "Premium business ultrabook with OLED display, Intel Core Ultra 7, and rugged durability.",
    price: 1699.99,
    originalPrice: 1799.99,
    discountPercentage: 6,
    rating: 4.6,
    reviewCount: 543,
    stock: 28,
    brand: "Lenovo",
    sku: "BLZ-EL-0011",
    weight: 1130,
    dimensions: { width: 315.6, height: 216, depth: 15.3 },
    tags: ["lenovo", "thinkpad", "ultrabook", "business", "oled"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-08-20T10:00:00Z",
    updatedAt: "2024-08-20T10:00:00Z"
  }),
  createProduct({
    id: "p12",
    title: "Anker 737 Power Bank",
    slug: "anker-737-power-bank",
    description: "The Anker 737 Power Bank is a high-capacity portable charger with 24,000mAh battery capacity. It delivers fast charging up to 140W, capable of charging a MacBook Pro at full speed. The smart display shows real-time charging status and battery health. With three ports (two USB-C and one USB-A), you can charge multiple devices simultaneously. The advanced safety features include temperature monitoring and power surge protection.",
    shortDescription: "High-capacity 24,000mAh power bank with 140W fast charging and smart display.",
    price: 149.99,
    originalPrice: 159.99,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 7890,
    stock: 150,
    brand: "Anker",
    sku: "BLZ-EL-0012",
    weight: 630,
    dimensions: { width: 52, height: 155, depth: 52 },
    tags: ["anker", "power-bank", "fast-charging", "portable"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-01T10:00:00Z",
    updatedAt: "2024-06-01T10:00:00Z"
  }),
  createProduct({
    id: "p13",
    title: "Canon EOS R5 Mark II",
    slug: "canon-eos-r5-mark-ii",
    description: "The Canon EOS R5 Mark II is a professional-grade mirrorless camera that sets new standards in photography and videography. The 45MP full-frame sensor delivers exceptional detail and dynamic range. Advanced dual-pixel autofocus with eye, face, and animal tracking ensures perfect focus every time. The 8K video recording capability and in-body image stabilization make it versatile for any creative project. Built for professionals, it's weather-sealed and designed for demanding shooting conditions.",
    shortDescription: "Professional mirrorless camera with 45MP sensor, 8K video, and advanced autofocus.",
    price: 3899.99,
    originalPrice: 3999.99,
    discountPercentage: 3,
    rating: 4.9,
    reviewCount: 432,
    stock: 12,
    brand: "Canon",
    sku: "BLZ-EL-0013",
    weight: 738,
    dimensions: { width: 138, height: 98, depth: 88 },
    tags: ["canon", "camera", "mirrorless", "professional", "8k"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-01T10:00:00Z",
    updatedAt: "2024-10-01T10:00:00Z"
  }),
  createProduct({
    id: "p14",
    title: "SteelSeries Arctis Nova Pro",
    slug: "steelseries-arctis-nova-pro",
    description: "The SteelSeries Arctis Nova Pro is a premium wireless gaming headset designed for competitive gamers and audio enthusiasts. The high-res audio drivers deliver exceptional sound clarity with a wide frequency range. The dual-battery system provides infinite power with hot-swappable batteries. The advanced noise-canceling microphone ensures clear communication with AI-powered background noise reduction.",
    shortDescription: "Premium wireless gaming headset with high-res audio and dual-battery system.",
    price: 349.99,
    originalPrice: 379.99,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 2156,
    stock: 65,
    brand: "SteelSeries",
    sku: "BLZ-EL-0014",
    weight: 340,
    dimensions: { width: 195, height: 240, depth: 95 },
    tags: ["steelseries", "gaming", "headset", "wireless", "audio"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p15",
    title: "GoPro Hero 13 Black",
    slug: "gopro-hero-13-black",
    description: "The GoPro Hero 13 Black is the ultimate action camera, capturing stunning 5.3K video at 60fps and 27MP photos. The HyperSmooth 6.0 stabilization delivers gimbal-like smooth footage in any activity. Waterproof to 33 feet without housing, this camera is ready for any adventure. The front-facing screen and improved battery life make it perfect for vlogging and content creation. Built-in GPS and advanced HDR features provide professional-grade results.",
    shortDescription: "Ultimate action camera with 5.3K video, HyperSmooth stabilization, and waterproof design.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 1345,
    stock: 80,
    brand: "GoPro",
    sku: "BLZ-EL-0015",
    weight: 152,
    dimensions: { width: 71.8, height: 50.8, depth: 33.6 },
    tags: ["gopro", "action-camera", "waterproof", "adventure"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-10T10:00:00Z",
    updatedAt: "2024-09-10T10:00:00Z"
  }),
  createProduct({
    id: "p16",
    title: "DJI Mini 4 Pro Drone",
    slug: "dji-mini-4-pro-drone",
    description: "The DJI Mini 4 Pro is a compact, lightweight drone that packs professional features. Weighing just 249 grams, it captures 4K HDR video and 48MP photos. The advanced obstacle sensing with omnidirectional vision ensures safe flights in any environment. The active tracking and focus feature keeps subjects in the frame. With up to 34 minutes of flight time and O4 HD transmission, this drone is perfect for content creators and adventure enthusiasts.",
    shortDescription: "Compact drone with 4K HDR video, 48MP photos, and advanced obstacle sensing.",
    price: 759.99,
    originalPrice: 799.99,
    discountPercentage: 5,
    rating: 4.8,
    reviewCount: 876,
    stock: 32,
    brand: "DJI",
    sku: "BLZ-EL-0016",
    weight: 249,
    dimensions: { width: 148, height: 94, depth: 64 },
    tags: ["dji", "drone", "4k", "portable", "obstacle-sensing"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p17",
    title: "Samsung 2TB T7 Shield SSD",
    slug: "samsung-2tb-t7-shield-ssd",
    description: "The Samsung T7 Shield is a rugged, portable SSD with 2TB storage capacity and transfer speeds up to 1050 MB/s. The IP65 water and dust resistance rating makes it perfect for outdoor use. The 3-meter drop resistance protects your data from accidental drops. Compatible with PC, Mac, Android, and gaming consoles, this drive is versatile and reliable. The advanced AES 256-bit hardware encryption keeps your data secure.",
    shortDescription: "Rugged 2TB portable SSD with IP65 rating, fast transfer speeds, and hardware encryption.",
    price: 179.99,
    originalPrice: 199.99,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 3456,
    stock: 100,
    brand: "Samsung",
    sku: "BLZ-EL-0017",
    weight: 98,
    dimensions: { width: 59, height: 88, depth: 13 },
    tags: ["samsung", "ssd", "portable", "rugged", "storage"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z"
  }),
  createProduct({
    id: "p18",
    title: "Philips Hue Smart Bulbs Set",
    slug: "philips-hue-smart-bulbs-set",
    description: "The Philips Hue Smart Bulbs Set includes 4 individually controlled color-changing smart bulbs. With 16 million colors and tunable white light, you can create the perfect atmosphere for any occasion. Compatible with Alexa, Google Home, and Apple HomeKit, these bulbs integrate seamlessly into your smart home ecosystem. The energy-efficient LED technology provides long-lasting performance and significant energy savings.",
    shortDescription: "Smart color-changing bulbs with 16 million colors and voice assistant compatibility.",
    price: 129.99,
    originalPrice: 139.99,
    discountPercentage: 7,
    rating: 4.6,
    reviewCount: 5678,
    stock: 150,
    brand: "Philips",
    sku: "BLZ-EL-0018",
    weight: 200,
    dimensions: { width: 60, height: 110, depth: 60 },
    tags: ["philips", "hue", "smart-bulbs", "lighting", "smart-home"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-04-20T10:00:00Z",
    updatedAt: "2024-04-20T10:00:00Z"
  }),
  createProduct({
    id: "p19",
    title: "Razer Blade 16 Gaming Laptop",
    slug: "razer-blade-16-gaming-laptop",
    description: "The Razer Blade 16 is a premium gaming laptop that combines power with portability. Featuring Intel Core i9 processor and NVIDIA RTX 4090 graphics, it delivers exceptional gaming performance. The 16-inch OLED display with 240Hz refresh rate and 4K resolution provides stunning visuals. The advanced vapor chamber cooling system ensures sustained performance during intense gaming sessions. The CNC aluminum chassis offers premium durability in a sleek design.",
    shortDescription: "Premium gaming laptop with OLED display, RTX 4090, and advanced cooling system.",
    price: 3299.99,
    originalPrice: 3499.99,
    discountPercentage: 6,
    rating: 4.7,
    reviewCount: 654,
    stock: 18,
    brand: "Razer",
    sku: "BLZ-EL-0019",
    weight: 2450,
    dimensions: { width: 355, height: 244, depth: 21.9 },
    tags: ["razer", "gaming", "laptop", "oled", "rtx-4090"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-15T10:00:00Z",
    updatedAt: "2024-09-15T10:00:00Z"
  }),
  createProduct({
    id: "p20",
    title: "LG C4 77-inch OLED TV",
    slug: "lg-c4-77-inch-oled-tv",
    description: "The LG C4 77-inch OLED TV delivers an unparalleled viewing experience with perfect blacks, infinite contrast, and incredible color accuracy. The α9 Gen 7 AI Processor 4K enhances picture quality using AI deep learning. With 144Hz refresh rate and built-in gaming features, it's perfect for both entertainment and gaming. The webOS platform provides access to all major streaming services with intuitive navigation.",
    shortDescription: "77-inch OLED TV with AI processor, 144Hz refresh rate, and perfect blacks.",
    price: 3499.99,
    originalPrice: 3799.99,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 432,
    stock: 10,
    brand: "LG",
    sku: "BLZ-EL-0020",
    weight: 35000,
    dimensions: { width: 1721, height: 991, depth: 55 },
    tags: ["lg", "tv", "oled", "4k", "gaming"],
    categoryId: "cat-1",
    categoryName: "Electronics",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-10T10:00:00Z",
    updatedAt: "2024-10-10T10:00:00Z"
  })
]

// ============================================
// CATEGORY 2: FASHION (20 Products)
// ============================================

const fashion: Product[] = [
  createProduct({
    id: "p21",
    title: "Prada Leather Jacket",
    slug: "prada-leather-jacket",
    description: "The Prada Leather Jacket is a masterpiece of Italian craftsmanship, crafted from premium calfskin leather with meticulous attention to detail. The tailored fit and minimalistic design make it a versatile addition to any wardrobe. The jacket features a classic collar, front zip closure, and multiple pockets for functionality. The luxurious silk lining ensures comfort and breathability. This investment piece embodies timeless elegance and sophistication.",
    shortDescription: "Italian-crafted leather jacket with tailored fit, premium calfskin, and timeless design.",
    price: 2499.99,
    originalPrice: 2999.99,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 234,
    stock: 15,
    brand: "Prada",
    sku: "BLZ-FS-0001",
    weight: 1200,
    dimensions: { width: 50, height: 70, depth: 5 },
    tags: ["prada", "leather-jacket", "italian", "luxury", "fashion"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p22",
    title: "Gucci Silk Scarf",
    slug: "gucci-silk-scarf",
    description: "The Gucci Silk Scarf is a symbol of Italian elegance and craftsmanship, made from 100% pure silk. The iconic GG pattern and vibrant colors make it a versatile accessory for any outfit. The hand-rolled edges demonstrate attention to detail and quality. This scarf can be worn around the neck, on a handbag, or as a hair accessory, adding a touch of luxury to any ensemble.",
    shortDescription: "Italian silk scarf with iconic GG pattern, hand-rolled edges, and versatile styling options.",
    price: 549.99,
    originalPrice: 599.99,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 156,
    stock: 30,
    brand: "Gucci",
    sku: "BLZ-FS-0002",
    weight: 80,
    dimensions: { width: 90, height: 90, depth: 1 },
    tags: ["gucci", "silk-scarf", "italian", "luxury", "accessory"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p23",
    title: "Saint Laurent Leather Belt",
    slug: "saint-laurent-leather-belt",
    description: "The Saint Laurent Leather Belt is a classic accessory that elevates any outfit. Crafted from premium calfskin leather with a polished brass buckle, this belt combines minimalist design with exceptional quality. The sleek silhouette and timeless design make it suitable for both casual and formal wear. The attention to detail and superior craftsmanship reflect the brand's dedication to excellence.",
    shortDescription: "Premium leather belt with polished brass buckle, minimalist design, and timeless appeal.",
    price: 499.99,
    originalPrice: 559.99,
    discountPercentage: 11,
    rating: 4.6,
    reviewCount: 189,
    stock: 45,
    brand: "Saint Laurent",
    sku: "BLZ-FS-0003",
    weight: 250,
    dimensions: { width: 3.5, height: 105, depth: 3 },
    tags: ["saint-laurent", "leather-belt", "brass-buckle", "luxury", "accessory"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p24",
    title: "Burberry Trench Coat",
    slug: "burberry-trench-coat",
    description: "The Burberry Trench Coat is an iconic piece of British heritage, crafted from gabardine fabric that is both waterproof and breathable. The classic design features signature check lining, epaulets, gun flaps, and a belted waist for a flattering silhouette. This timeless coat is perfect for any weather and occasion, combining functionality with style. The attention to detail and quality craftsmanship make it a wardrobe essential.",
    shortDescription: "Iconic British trench coat with check lining, waterproof gabardine, and timeless design.",
    price: 1899.99,
    originalPrice: 2099.99,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 312,
    stock: 20,
    brand: "Burberry",
    sku: "BLZ-FS-0004",
    weight: 1500,
    dimensions: { width: 60, height: 120, depth: 8 },
    tags: ["burberry", "trench-coat", "british", "heritage", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-15T10:00:00Z",
    updatedAt: "2024-05-15T10:00:00Z"
  }),
  createProduct({
    id: "p25",
    title: "Versace Sunglasses",
    slug: "versace-sunglasses",
    description: "The Versace Sunglasses combine Italian luxury with modern style. The distinctive Medusa hardware and Greca detailing reflect the brand's iconic heritage. The premium lenses provide UV400 protection and superior clarity, while the lightweight frame ensures comfort for all-day wear. These sunglasses are the perfect accessory for those who appreciate bold design and exceptional quality.",
    shortDescription: "Italian sunglasses with Medusa hardware, UV400 protection, and bold design.",
    price: 349.99,
    originalPrice: 399.99,
    discountPercentage: 13,
    rating: 4.5,
    reviewCount: 278,
    stock: 55,
    brand: "Versace",
    sku: "BLZ-FS-0005",
    weight: 40,
    dimensions: { width: 140, height: 50, depth: 15 },
    tags: ["versace", "sunglasses", "italian", "luxury", "uv400"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p26",
    title: "Hugo Boss Suit",
    slug: "hugo-boss-suit",
    description: "The Hugo Boss Suit is a masterclass in modern tailoring, crafted from premium Italian wool fabric. The slim-fit design offers a contemporary silhouette with exceptional comfort. The half-canvassed construction ensures the suit maintains its shape and drapes beautifully. The suit features a two-button jacket, notch lapels, and flat-front trousers. This versatile suit is suitable for both business and formal occasions.",
    shortDescription: "Modern tailored suit with premium Italian wool, slim-fit design, and exceptional craftsmanship.",
    price: 1299.99,
    originalPrice: 1399.99,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 167,
    stock: 12,
    brand: "Hugo Boss",
    sku: "BLZ-FS-0006",
    weight: 1800,
    dimensions: { width: 50, height: 100, depth: 10 },
    tags: ["hugo-boss", "suit", "italian-wool", "tailored", "formal"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-01T10:00:00Z",
    updatedAt: "2024-09-01T10:00:00Z"
  }),
  createProduct({
    id: "p27",
    title: "Ralph Lauren Polo Shirt",
    slug: "ralph-lauren-polo-shirt",
    description: "The Ralph Lauren Polo Shirt is an icon of American style, crafted from 100% premium pique cotton. The classic design features a ribbed collar, two-button placket, and the iconic embroidered polo player logo. This versatile shirt is perfect for both casual and smart-casual occasions. The timeless design and exceptional quality ensure it remains a wardrobe staple for years to come.",
    shortDescription: "Iconic polo shirt with embroidered logo, premium pique cotton, and timeless design.",
    price: 129.99,
    originalPrice: 139.99,
    discountPercentage: 7,
    rating: 4.6,
    reviewCount: 890,
    stock: 150,
    brand: "Ralph Lauren",
    sku: "BLZ-FS-0007",
    weight: 200,
    dimensions: { width: 30, height: 70, depth: 2 },
    tags: ["ralph-lauren", "polo", "cotton", "american", "classic"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-01T10:00:00Z",
    updatedAt: "2024-06-01T10:00:00Z"
  }),
  createProduct({
    id: "p28",
    title: "Armani Cashmere Sweater",
    slug: "armani-cashmere-sweater",
    description: "The Armani Cashmere Sweater is a symbol of Italian luxury, crafted from 100% pure cashmere. The ultra-soft, lightweight fabric provides exceptional warmth and comfort. The minimalist design and refined details make it a versatile piece that can be dressed up or down. Whether worn alone or layered, this sweater adds a touch of sophistication to any outfit. The exceptional quality and timeless design ensure it will be cherished for years.",
    shortDescription: "Italian cashmere sweater with ultra-soft fabric, minimalist design, and timeless appeal.",
    price: 799.99,
    originalPrice: 879.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 234,
    stock: 25,
    brand: "Armani",
    sku: "BLZ-FS-0008",
    weight: 350,
    dimensions: { width: 45, height: 65, depth: 3 },
    tags: ["armani", "cashmere", "sweater", "italian", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-15T10:00:00Z",
    updatedAt: "2024-09-15T10:00:00Z"
  }),
  createProduct({
    id: "p29",
    title: "Tom Ford Jeans",
    slug: "tom-ford-jeans",
    description: "The Tom Ford Jeans are the epitome of modern luxury denim, crafted from premium Italian denim with a perfect fit. The slim taper cut offers a contemporary silhouette that flatters the figure. The attention to detail is evident in the hardware, stitching, and finishing. These jeans are versatile enough for both casual and smart-casual occasions, making them a wardrobe essential for the discerning gentleman.",
    shortDescription: "Premium Italian denim jeans with slim taper cut, modern silhouette, and exceptional quality.",
    price: 499.99,
    originalPrice: 549.99,
    discountPercentage: 9,
    rating: 4.5,
    reviewCount: 198,
    stock: 35,
    brand: "Tom Ford",
    sku: "BLZ-FS-0009",
    weight: 600,
    dimensions: { width: 40, height: 100, depth: 5 },
    tags: ["tom-ford", "jeans", "denim", "italian", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p30",
    title: "Fendi Leather Wallet",
    slug: "fendi-leather-wallet",
    description: "The Fendi Leather Wallet is a compact accessory that embodies Italian luxury and craftsmanship. Crafted from premium calfskin leather, this wallet features the iconic FF logo pattern. The bi-fold design includes multiple card slots, a bill compartment, and a coin pocket. The compact size fits easily in any pocket or bag, making it the perfect everyday accessory. The quality and attention to detail reflect the brand's commitment to excellence.",
    shortDescription: "Italian leather wallet with iconic FF logo, compact design, and premium craftsmanship.",
    price: 399.99,
    originalPrice: 439.99,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 345,
    stock: 50,
    brand: "Fendi",
    sku: "BLZ-FS-0010",
    weight: 80,
    dimensions: { width: 10, height: 20, depth: 2 },
    tags: ["fendi", "wallet", "leather", "italian", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p31",
    title: "Moncler Puffer Jacket",
    slug: "moncler-puffer-jacket",
    description: "The Moncler Puffer Jacket is the ultimate luxury winter coat, filled with premium goose down for exceptional warmth. The iconic quilted design and tricolor logo add a touch of Italian style. The lightweight yet insulated construction provides warmth without bulk, making it perfect for cold weather. The water-resistant outer shell and multiple pockets make it practical for everyday wear. This jacket is a winter wardrobe essential.",
    shortDescription: "Luxury puffer jacket with premium down filling, iconic quilting, and Italian design.",
    price: 1599.99,
    originalPrice: 1799.99,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 267,
    stock: 18,
    brand: "Moncler",
    sku: "BLZ-FS-0011",
    weight: 800,
    dimensions: { width: 60, height: 75, depth: 10 },
    tags: ["moncler", "puffer-jacket", "down", "italian", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-01T10:00:00Z",
    updatedAt: "2024-10-01T10:00:00Z"
  }),
  createProduct({
    id: "p32",
    title: "Balenciaga Hoodie",
    slug: "balenciaga-hoodie",
    description: "The Balenciaga Hoodie is a modern icon of streetwear luxury, crafted from heavyweight cotton with a relaxed, oversized fit. The signature logo print and minimal design make it a statement piece that captures the brand's contemporary aesthetic. The fleece interior provides comfort and warmth, while the kangaroo pocket adds functionality. This hoodie is perfect for those who appreciate bold design and exceptional quality.",
    shortDescription: "Oversized hoodie with logo print, heavyweight cotton, and modern streetwear design.",
    price: 799.99,
    originalPrice: 899.99,
    discountPercentage: 11,
    rating: 4.4,
    reviewCount: 345,
    stock: 30,
    brand: "Balenciaga",
    sku: "BLZ-FS-0012",
    weight: 800,
    dimensions: { width: 60, height: 70, depth: 5 },
    tags: ["balenciaga", "hoodie", "streetwear", "cotton", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  }),
  createProduct({
    id: "p33",
    title: "Dior Saddle Bag",
    slug: "dior-saddle-bag",
    description: "The Dior Saddle Bag is an iconic accessory that combines elegance and boldness. The structured design features the signature Dior saddle shape, crafted from premium calfskin leather. The 'D' charm and metal accents add a touch of sophistication. The adjustable strap allows for versatile styling, whether worn crossbody or over the shoulder. This bag is a statement piece that elevates any outfit.",
    shortDescription: "Iconic saddle bag with structured design, premium calfskin, and signature Dior charm.",
    price: 2999.99,
    originalPrice: 3299.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 189,
    stock: 8,
    brand: "Dior",
    sku: "BLZ-FS-0013",
    weight: 800,
    dimensions: { width: 20, height: 25, depth: 10 },
    tags: ["dior", "saddle-bag", "calfskin", "luxury", "italian"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-20T10:00:00Z",
    updatedAt: "2024-09-20T10:00:00Z"
  }),
  createProduct({
    id: "p34",
    title: "Kenzo Tiger Sweatshirt",
    slug: "kenzo-tiger-sweatshirt",
    description: "The Kenzo Tiger Sweatshirt is a vibrant expression of modern luxury, featuring the iconic tiger print that has become synonymous with the brand. Crafted from premium cotton fleece, this sweatshirt offers comfort and style in equal measure. The relaxed fit and bold design make it a standout piece for casual wear. The attention to detail and quality construction reflect Kenzo's commitment to excellence.",
    shortDescription: "Cotton sweatshirt with iconic tiger print, relaxed fit, and modern luxury design.",
    price: 349.99,
    originalPrice: 399.99,
    discountPercentage: 13,
    rating: 4.5,
    reviewCount: 234,
    stock: 40,
    brand: "Kenzo",
    sku: "BLZ-FS-0014",
    weight: 450,
    dimensions: { width: 50, height: 65, depth: 3 },
    tags: ["kenzo", "tiger-print", "sweatshirt", "fashion", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p35",
    title: "Valentino Rockstud Heels",
    slug: "valentino-rockstud-heels",
    description: "The Valentino Rockstud Heels are the epitome of Italian glamour, featuring the iconic Rockstud detailing on premium leather. The 100mm stiletto heel elongates the silhouette, while the adjustable ankle strap ensures a perfect fit. The classic design and distinctive studs make these heels a statement piece that can elevate any outfit. Perfect for special occasions and making a lasting impression.",
    shortDescription: "Italian heels with iconic Rockstud detailing, stiletto heel, and adjustable ankle strap.",
    price: 1299.99,
    originalPrice: 1399.99,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 156,
    stock: 12,
    brand: "Valentino",
    sku: "BLZ-FS-0015",
    weight: 600,
    dimensions: { width: 20, height: 25, depth: 10 },
    tags: ["valentino", "rockstud", "heels", "stilettos", "italian"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-09-15T10:00:00Z",
    updatedAt: "2024-09-15T10:00:00Z"
  }),
  createProduct({
    id: "p36",
    title: "Off-White Belt",
    slug: "off-white-belt",
    description: "The Off-White Belt is a contemporary accessory that has become a streetwear essential. The distinctive yellow industrial belt with black text creates a bold statement. The adjustable length and easy-to-use buckle make it both functional and stylish. Whether worn with jeans, trousers, or as a styling accent, this belt adds a modern edge to any outfit. The quality and design reflect Virgil Abloh's visionary aesthetic.",
    shortDescription: "Industrial-style belt with yellow design, black text, and modern streetwear appeal.",
    price: 249.99,
    originalPrice: 279.99,
    discountPercentage: 11,
    rating: 4.4,
    reviewCount: 567,
    stock: 60,
    brand: "Off-White",
    sku: "BLZ-FS-0016",
    weight: 200,
    dimensions: { width: 3, height: 120, depth: 2 },
    tags: ["off-white", "belt", "streetwear", "industrial", "accessory"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p37",
    title: "Alexander McQueen Skull Scarf",
    slug: "alexander-mcqueen-skull-scarf",
    description: "The Alexander McQueen Skull Scarf is an iconic accessory that embodies the brand's dark romantic aesthetic. The luxurious silk fabric features the signature skull pattern in a sophisticated color palette. The hand-rolled edges and exceptional quality make it a piece of wearable art. This scarf can be styled in countless ways, from a traditional neck wrap to a chic headscarf or bag accessory.",
    shortDescription: "Iconic silk scarf with skull pattern, hand-rolled edges, and dark romantic design.",
    price: 449.99,
    originalPrice: 499.99,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 198,
    stock: 35,
    brand: "Alexander McQueen",
    sku: "BLZ-FS-0017",
    weight: 60,
    dimensions: { width: 90, height: 90, depth: 1 },
    tags: ["alexander-mcqueen", "skull-scarf", "silk", "luxury", "accessory"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-05-25T10:00:00Z",
    updatedAt: "2024-05-25T10:00:00Z"
  }),
  createProduct({
    id: "p38",
    title: "Bottega Veneta Intrecciato Tote",
    slug: "bottega-veneta-intrecciato-tote",
    description: "The Bottega Veneta Intrecciato Tote is a masterpiece of Italian craftsmanship, featuring the signature woven leather that is synonymous with the brand. The structured silhouette and spacious interior make it perfect for everyday use. The luxurious nappa leather and attention to detail reflect the brand's commitment to quality. This tote is a timeless investment piece that combines functionality with elegance.",
    shortDescription: "Italian woven leather tote with spacious interior, structured silhouette, and timeless design.",
    price: 2499.99,
    originalPrice: 2699.99,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 145,
    stock: 10,
    brand: "Bottega Veneta",
    sku: "BLZ-FS-0018",
    weight: 1000,
    dimensions: { width: 35, height: 30, depth: 15 },
    tags: ["bottega-veneta", "intrecciato", "tote", "woven-leather", "italian"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-05T10:00:00Z",
    updatedAt: "2024-10-05T10:00:00Z"
  }),
  createProduct({
    id: "p39",
    title: "Saint Laurent Tuxedo Jacket",
    slug: "saint-laurent-tuxedo-jacket",
    description: "The Saint Laurent Tuxedo Jacket is the ultimate evening wear essential, crafted from premium wool with a sharp, tailored fit. The satin lapels and single-breasted design create a sophisticated silhouette. The jacket features a classic tuxedo styling with covered buttons and a precise fit that flatters the figure. This is a timeless piece that will make a statement at any formal occasion.",
    shortDescription: "Tailored tuxedo jacket with satin lapels, premium wool, and sophisticated evening design.",
    price: 2899.99,
    originalPrice: 3199.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 98,
    stock: 8,
    brand: "Saint Laurent",
    sku: "BLZ-FS-0019",
    weight: 1200,
    dimensions: { width: 50, height: 75, depth: 8 },
    tags: ["saint-laurent", "tuxedo", "jacket", "formal", "luxury"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-10T10:00:00Z",
    updatedAt: "2024-10-10T10:00:00Z"
  }),
  createProduct({
    id: "p40",
    title: "Acne Studios Logo Scarf",
    slug: "acne-studios-logo-scarf",
    description: "The Acne Studios Logo Scarf is a minimalist accessory that adds a touch of Scandinavian style to any outfit. Crafted from soft wool blend, this scarf features the iconic Acne Studios logo in a subtle yet distinctive design. The generous size allows for versatile styling options, while the exceptional quality ensures warmth and comfort. This scarf is the perfect accessory for those who appreciate understated elegance.",
    shortDescription: "Minimalist scarf with iconic logo, soft wool blend, and Scandinavian style.",
    price: 199.99,
    originalPrice: 219.99,
    discountPercentage: 9,
    rating: 4.6,
    reviewCount: 456,
    stock: 60,
    brand: "Acne Studios",
    sku: "BLZ-FS-0020",
    weight: 150,
    dimensions: { width: 30, height: 180, depth: 1 },
    tags: ["acne-studios", "scarf", "wool", "scandinavian", "minimalist"],
    categoryId: "cat-2",
    categoryName: "Fashion",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-25T10:00:00Z",
    updatedAt: "2024-06-25T10:00:00Z"
  })
]

// ============================================
// CATEGORY 3: FOOTWEAR (15 Products)
// ============================================

const footwear: Product[] = [
  createProduct({
    id: "p41",
    title: "Nike Air Max 270",
    slug: "nike-air-max-270",
    description: "The Nike Air Max 270 is a modern icon of footwear design, featuring the largest Air unit in Nike history. The sleek silhouette and breathable mesh upper provide both comfort and style. The visible Air unit delivers responsive cushioning for all-day comfort. The design is inspired by the Air Max 93 and Air Max 180, combining heritage with modern innovation.",
    shortDescription: "Iconic sneakers with large Air unit, breathable mesh, and modern retro design.",
    price: 159.99,
    originalPrice: 179.99,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 4567,
    stock: 120,
    brand: "Nike",
    sku: "BLZ-FW-0001",
    weight: 350,
    dimensions: { width: 28, height: 32, depth: 10 },
    tags: ["nike", "air-max", "sneakers", "casual", "comfort"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-10T10:00:00Z",
    updatedAt: "2024-05-10T10:00:00Z"
  }),
  createProduct({
    id: "p42",
    title: "Adidas Ultraboost 5",
    slug: "adidas-ultraboost-5",
    description: "The Adidas Ultraboost 5 represents the pinnacle of running shoe technology, featuring the most responsive Boost foam ever created. The Primeknit+ upper provides adaptive support and breathability, while the Continental rubber outsole ensures exceptional grip. The Stretchweb outsole flexes naturally with the foot, delivering a more dynamic and energetic run. This shoe is designed for runners who demand the best.",
    shortDescription: "Premium running shoe with responsive Boost foam, Primeknit upper, and exceptional comfort.",
    price: 189.99,
    originalPrice: 209.99,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 3987,
    stock: 100,
    brand: "Adidas",
    sku: "BLZ-FW-0002",
    weight: 310,
    dimensions: { width: 27, height: 30, depth: 10 },
    tags: ["adidas", "ultraboost", "running", "comfort", "boost"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-01T10:00:00Z",
    updatedAt: "2024-06-01T10:00:00Z"
  }),
  createProduct({
    id: "p43",
    title: "New Balance 990v6",
    slug: "new-balance-990v6",
    description: "The New Balance 990v6 is a classic silhouette that has been reimagined for modern performance. The pigskin suede and mesh upper provide a premium look and feel, while the FuelCell foam delivers responsive cushioning. The ENCAP midsole technology combines lightweight foam with a durable polyurethane rim for support. This shoe offers the perfect balance of style and comfort.",
    shortDescription: "Classic running shoe with premium suede, FuelCell foam, and timeless design.",
    price: 199.99,
    originalPrice: 219.99,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 2876,
    stock: 80,
    brand: "New Balance",
    sku: "BLZ-FW-0003",
    weight: 340,
    dimensions: { width: 28, height: 31, depth: 10 },
    tags: ["new-balance", "990", "running", "classic", "comfort"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-05-15T10:00:00Z",
    updatedAt: "2024-05-15T10:00:00Z"
  }),
  createProduct({
    id: "p44",
    title: "Hoka Bondi 8",
    slug: "hoka-bondi-8",
    description: "The Hoka Bondi 8 is the ultimate maximum cushion running shoe, designed for runners who prioritize comfort and protection. The full compression-molded EVA foam provides exceptional shock absorption and a smooth ride. The wider base and early-stage meta-rocker geometry offer a more stable and efficient stride. This shoe is perfect for long distances and recovery runs.",
    shortDescription: "Maximum cushion running shoe with EVA foam, smooth ride, and exceptional comfort.",
    price: 179.99,
    originalPrice: 199.99,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 2345,
    stock: 75,
    brand: "Hoka",
    sku: "BLZ-FW-0004",
    weight: 320,
    dimensions: { width: 29, height: 32, depth: 11 },
    tags: ["hoka", "bondi", "running", "max-cushion", "comfort"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-10T10:00:00Z"
  }),
  createProduct({
    id: "p45",
    title: "Puma Suede Classic",
    slug: "puma-suede-classic",
    description: "The Puma Suede Classic is a timeless silhouette that has been a streetwear staple for decades. The suede upper provides a premium look and feel, while the rubber outsole delivers durable traction. The iconic Puma Formstrip adds a distinctive touch to the design. This shoe is perfect for those who appreciate classic style and exceptional quality.",
    shortDescription: "Classic suede sneaker with premium material, iconic Formstrip, and timeless design.",
    price: 89.99,
    originalPrice: 99.99,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 4567,
    stock: 150,
    brand: "Puma",
    sku: "BLZ-FW-0005",
    weight: 280,
    dimensions: { width: 26, height: 28, depth: 10 },
    tags: ["puma", "suede", "classic", "sneakers", "casual"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z"
  }),
  createProduct({
    id: "p46",
    title: "Air Jordan 1 Low",
    slug: "air-jordan-1-low",
    description: "The Air Jordan 1 Low is a legendary silhouette that revolutionized sneaker culture. The premium leather upper and iconic Wings logo represent the heritage of the Jordan brand. The Nike Air cushioning provides all-day comfort, while the rubber outsole ensures traction. This low-top version offers the same classic design with a more casual silhouette.",
    shortDescription: "Legendary sneaker with premium leather, Wings logo, and iconic Jordan design.",
    price: 139.99,
    originalPrice: 159.99,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 5678,
    stock: 90,
    brand: "Jordan",
    sku: "BLZ-FW-0006",
    weight: 330,
    dimensions: { width: 27, height: 30, depth: 10 },
    tags: ["jordan", "air-jordan", "sneakers", "basketball", "classic"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: true,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-04-20T10:00:00Z",
    updatedAt: "2024-04-20T10:00:00Z"
  }),
  createProduct({
    id: "p47",
    title: "On Cloudmonster",
    slug: "on-cloudmonster",
    description: "The On Cloudmonster is designed for runners who crave maximum cushioning and a soft, comfortable ride. The oversized CloudTec® elements deliver a smooth, padded landing that reduces impact and provides a comfortable run. The Speedboard® technology ensures a natural and responsive running feel. This shoe is perfect for long distances and recovery runs.",
    shortDescription: "Max cushion running shoe with CloudTec® technology, smooth ride, and exceptional comfort.",
    price: 199.99,
    originalPrice: 219.99,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 1987,
    stock: 60,
    brand: "On",
    sku: "BLZ-FW-0007",
    weight: 310,
    dimensions: { width: 28, height: 31, depth: 11 },
    tags: ["on", "cloudmonster", "running", "max-cushion", "cloudtec"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p48",
    title: "Vans Old Skool",
    slug: "vans-old-skool",
    description: "The Vans Old Skool is a classic skateboarding shoe that has become a cultural icon. The suede and canvas upper with the signature side stripe create a timeless look. The padded collar and heel provide comfort and support. The vulcanized rubber outsole with the waffle tread pattern offers excellent grip and durability.",
    shortDescription: "Classic skate shoe with suede/canvas upper, signature side stripe, and durable construction.",
    price: 69.99,
    originalPrice: 79.99,
    discountPercentage: 13,
    rating: 4.6,
    reviewCount: 6789,
    stock: 200,
    brand: "Vans",
    sku: "BLZ-FW-0008",
    weight: 260,
    dimensions: { width: 25, height: 27, depth: 10 },
    tags: ["vans", "old-skool", "skateboarding", "classic", "casual"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-25T10:00:00Z",
    updatedAt: "2024-05-25T10:00:00Z"
  }),
  createProduct({
    id: "p49",
    title: "ASICS Gel-Kayano 30",
    slug: "asics-gel-kayano-30",
    description: "The ASICS Gel-Kayano 30 is a stability running shoe that provides exceptional support and cushioning. The FF BLAST PLUS foam delivers lightweight, responsive cushioning, while the PureGEL technology provides soft landing and a smoother transition. The 4D Guidance System adapts to the foot's natural movement, providing a more comfortable and stable run.",
    shortDescription: "Stability running shoe with FF BLAST foam, PureGEL technology, and adaptive support.",
    price: 169.99,
    originalPrice: 189.99,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 2345,
    stock: 70,
    brand: "ASICS",
    sku: "BLZ-FW-0009",
    weight: 340,
    dimensions: { width: 28, height: 31, depth: 11 },
    tags: ["asics", "gel-kayano", "running", "stability", "comfort"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p50",
    title: "Converse Chuck 70",
    slug: "converse-chuck-70",
    description: "The Converse Chuck 70 is a premium version of the iconic basketball shoe, featuring higher quality materials and craftsmanship. The canvas upper and rubber toe cap maintain the classic Chuck Taylor design, while the enhanced cushioning provides superior comfort. The vintage details and premium construction make this a modern classic.",
    shortDescription: "Premium canvas sneaker with enhanced cushioning, vintage details, and iconic design.",
    price: 84.99,
    originalPrice: 94.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 4567,
    stock: 180,
    brand: "Converse",
    sku: "BLZ-FW-0010",
    weight: 250,
    dimensions: { width: 25, height: 27, depth: 10 },
    tags: ["converse", "chuck-70", "canvas", "classic", "casual"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p51",
    title: "Reebok Club C 85",
    slug: "reebok-club-c-85",
    description: "The Reebok Club C 85 is a classic tennis shoe that has stood the test of time. The soft leather upper and EVA midsole provide comfort and durability. The iconic Club C design features a clean, minimalist aesthetic that pairs well with any outfit. The die-cut EVA midsole offers lightweight cushioning for all-day wear.",
    shortDescription: "Classic tennis shoe with leather upper, EVA midsole, and minimalist design.",
    price: 89.99,
    originalPrice: 99.99,
    discountPercentage: 10,
    rating: 4.5,
    reviewCount: 3456,
    stock: 120,
    brand: "Reebok",
    sku: "BLZ-FW-0011",
    weight: 300,
    dimensions: { width: 26, height: 29, depth: 10 },
    tags: ["reebok", "club-c", "classic", "tennis", "casual"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p52",
    title: "Saucony Triumph 22",
    slug: "saucony-triumph-22",
    description: "The Saucony Triumph 22 is a premium running shoe designed for maximum comfort and performance. The PWRRUN+ foam provides exceptional energy return, while the 3D fit construction ensures a personalized and comfortable fit. The engineered mesh upper offers breathability and support. This shoe is perfect for runners who demand the best in cushioning and performance.",
    shortDescription: "Premium running shoe with PWRRUN+ foam, 3D fit, and exceptional comfort.",
    price: 189.99,
    originalPrice: 209.99,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 1987,
    stock: 55,
    brand: "Saucony",
    sku: "BLZ-FW-0012",
    weight: 320,
    dimensions: { width: 28, height: 31, depth: 11 },
    tags: ["saucony", "triumph", "running", "cushion", "performance"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p53",
    title: "Balenciaga Triple S Sneakers",
    slug: "balenciaga-triple-s-sneakers",
    description: "The Balenciaga Triple S Sneakers are a bold statement in modern footwear design. The chunky silhouette and layered construction create a distinctive look that has defined contemporary fashion. The high-quality leather, suede, and mesh materials ensure durability and comfort. This shoe is for those who appreciate bold design and exceptional craftsmanship.",
    shortDescription: "Chunky sneakers with layered construction, bold design, and premium materials.",
    price: 1199.99,
    originalPrice: 1299.99,
    discountPercentage: 8,
    rating: 4.4,
    reviewCount: 456,
    stock: 20,
    brand: "Balenciaga",
    sku: "BLZ-FW-0013",
    weight: 800,
    dimensions: { width: 30, height: 35, depth: 12 },
    tags: ["balenciaga", "triple-s", "sneakers", "chunky", "luxury"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p54",
    title: "Mizuno Wave Rider 27",
    slug: "mizuno-wave-rider-27",
    description: "The Mizuno Wave Rider 27 is a versatile running shoe that combines lightweight design with exceptional cushioning. The Mizuno Energy Foam provides responsive energy return, while the Wave Plate technology creates a smooth, stable ride. The engineered mesh upper offers breathability and support. This shoe is perfect for runners who want a balanced and comfortable ride.",
    shortDescription: "Versatile running shoe with Energy Foam, Wave Plate technology, and lightweight design.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 1876,
    stock: 65,
    brand: "Mizuno",
    sku: "BLZ-FW-0014",
    weight: 280,
    dimensions: { width: 27, height: 30, depth: 10 },
    tags: ["mizuno", "wave-rider", "running", "comfort", "versatile"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p55",
    title: "UGG Classic Mini Boots",
    slug: "ugg-classic-mini-boots",
    description: "The UGG Classic Mini Boots are a winter essential, crafted from premium sheepskin for exceptional warmth and comfort. The iconic design features a suede upper and a sheepskin lining that wicks moisture away from the feet. The lightweight sole provides flexibility and cushioning. These boots are perfect for cozy days and casual outings.",
    shortDescription: "Premium sheepskin boots with iconic design, moisture-wicking lining, and exceptional warmth.",
    price: 149.99,
    originalPrice: 159.99,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 2345,
    stock: 80,
    brand: "UGG",
    sku: "BLZ-FW-0015",
    weight: 500,
    dimensions: { width: 25, height: 28, depth: 10 },
    tags: ["ugg", "classic-mini", "boots", "sheepskin", "warmth"],
    categoryId: "cat-3",
    categoryName: "Footwear",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  })
]

// ============================================
// CATEGORY 4: WATCHES (12 Products)
// ============================================

const watches: Product[] = [
  createProduct({
    id: "p56",
    title: "Rolex Submariner Date",
    slug: "rolex-submariner-date",
    description: "The Rolex Submariner Date is an icon of watchmaking excellence, combining timeless design with exceptional functionality. The 41mm Oyster case in 904L steel ensures durability and elegance. The black Cerachrom bezel and dial create a classic look that is instantly recognizable. The Superlative Chronometer movement guarantees precision and reliability. This is a watch that transcends trends and remains a symbol of achievement.",
    shortDescription: "Iconic luxury dive watch with black Cerachrom bezel, Oyster case, and timeless design.",
    price: 10500.99,
    originalPrice: 11500.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 456,
    stock: 8,
    brand: "Rolex",
    sku: "BLZ-WT-0001",
    weight: 155,
    dimensions: { width: 41, height: 48, depth: 12.5 },
    tags: ["rolex", "submariner", "luxury", "dive-watch", "automatic"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-10T10:00:00Z"
  }),
  createProduct({
    id: "p57",
    title: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    description: "The Apple Watch Series 10 represents the pinnacle of wearable technology with its stunning always-on Retina display, advanced health monitoring features including blood oxygen and ECG, and powerful S10 chip. The lightweight titanium case offers durability while maintaining comfort for all-day wear. With sleep tracking, workout detection, and fall detection, this smartwatch is your ultimate health and fitness companion. The watchOS 11 brings intelligent features that help you stay connected, active, and healthy.",
    shortDescription: "Premium smartwatch with health monitoring, always-on display, and S10 chip.",
    price: 549.99,
    originalPrice: 599.99,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 3201,
    stock: 45,
    brand: "Apple",
    sku: "BLZ-WT-0002",
    weight: 42,
    dimensions: { width: 45, height: 38, depth: 10.7 },
    tags: ["apple", "smartwatch", "fitness", "health", "wearable"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    createdAt: "2024-09-12T10:00:00Z",
    updatedAt: "2024-09-12T10:00:00Z"
  }),
  createProduct({
    id: "p58",
    title: "Garmin Fenix 8 Sapphire",
    slug: "garmin-fenix-8-sapphire",
    description: "The Garmin Fenix 8 Sapphire is the ultimate multisport GPS watch built for adventurers and athletes. The rugged design features a 51mm bezel with sapphire crystal display, titanium construction, and up to 37 days of battery life. With multi-band GPS, topo maps, dive-rated water resistance, and advanced training metrics, this watch handles everything from trail running to deep-sea diving. The built-in flashlight, solar charging, and satellite messaging make it indispensable for outdoor exploration.",
    shortDescription: "Ultimate multisport GPS watch with sapphire crystal, titanium build, and solar charging.",
    price: 1099.99,
    originalPrice: 1199.99,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 1234,
    stock: 18,
    brand: "Garmin",
    sku: "BLZ-WT-0003",
    weight: 96,
    dimensions: { width: 51, height: 51, depth: 14.7 },
    tags: ["garmin", "fenix", "gps", "multisport", "outdoor"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p59",
    title: "Omega Speedmaster Moonwatch",
    slug: "omega-speedmaster-moonwatch",
    description: "The Omega Speedmaster Moonwatch Professional is a legendary timepiece with an unparalleled heritage as the first watch worn on the moon. The 42mm stainless steel case houses the Master Chronometer caliber 3861 movement with manual winding. The hesalite crystal and stepped dial maintain the iconic 1969 Apollo 11 design. This chronograph features a tachymeter bezel, small seconds subdial, 30-minute recorder, and 12-hour recorder. A true collector's piece that combines horological history with modern precision.",
    shortDescription: "Legendary moon watch with Master Chronometer movement and iconic Apollo-era design.",
    price: 7299.99,
    originalPrice: 7599.99,
    discountPercentage: 4,
    rating: 4.9,
    reviewCount: 678,
    stock: 5,
    brand: "Omega",
    sku: "BLZ-WT-0004",
    weight: 145,
    dimensions: { width: 42, height: 48, depth: 13.6 },
    tags: ["omega", "speedmaster", "luxury", "chronograph", "automatic"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z"
  }),
  createProduct({
    id: "p60",
    title: "Seiko Prospex SPB143",
    slug: "seiko-prospex-spb143",
    description: "The Seiko Prospex SPB143 is a modern reinterpretation of Seiko's iconic 1965 diver's watch, offering exceptional value in the luxury watch segment. The 40.5mm stainless steel case features a unidirectional rotating bezel with ceramic insert and a box-shaped sapphire crystal. The 6R35 automatic movement provides 70 hours of power reserve. With 200m water resistance and a comfortable steel bracelet, this watch delivers professional-grade diving performance with Seiko's legendary reliability.",
    shortDescription: "Modern reinterpretation of the iconic 1965 Seiko diver with 200m water resistance.",
    price: 1299.99,
    originalPrice: 1399.99,
    discountPercentage: 7,
    rating: 4.7,
    reviewCount: 342,
    stock: 22,
    brand: "Seiko",
    sku: "BLZ-WT-0005",
    weight: 175,
    dimensions: { width: 40.5, height: 47.6, depth: 13.2 },
    tags: ["seiko", "prospex", "diver", "automatic", "japanese"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z"
  }),
  createProduct({
    id: "p61",
    title: "Tag Heuer Carrera Chronograph",
    slug: "tag-heuer-carrera-chronograph",
    description: "The Tag Heuer Carrera Chronograph embodies motorsport heritage with precision Swiss engineering. The 44mm stainless steel case features a ceramic tachymeter bezel and sapphire crystal with double anti-reflective treatment. The Heuer 02 automatic movement offers 80 hours of power reserve with column-wheel chronograph architecture. The sunray-brushed dial with three subdials creates a sophisticated racing aesthetic. This timepiece perfectly balances sporty elegance with technical excellence.",
    shortDescription: "Swiss chronograph with Heuer 02 movement, ceramic bezel, and motorsport heritage.",
    price: 5899.99,
    originalPrice: 6299.99,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 234,
    stock: 10,
    brand: "Tag Heuer",
    sku: "BLZ-WT-0006",
    weight: 185,
    dimensions: { width: 44, height: 50, depth: 15 },
    tags: ["tag-heuer", "carrera", "chronograph", "swiss", "luxury"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-04-10T10:00:00Z",
    updatedAt: "2024-04-10T10:00:00Z"
  }),
  createProduct({
    id: "p62",
    title: "Citizen Eco-Drive Promaster",
    slug: "citizen-eco-drive-promaster",
    description: "The Citizen Eco-Drive Promaster BN0151 is the ultimate everyday dive watch powered by any light source, eliminating the need for battery changes. The 44mm stainless steel case features a scratch-resistant mineral crystal and unidirectional rotating bezel. The Eco-Drive caliber E168 movement provides 6 months of power reserve once fully charged. With 200m water resistance, luminous hands and markers, and a comfortable polyurethane strap, this watch offers exceptional value and reliability for diving and daily wear.",
    shortDescription: "Light-powered dive watch with 200m resistance, luminous dial, and Eco-Drive technology.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.6,
    reviewCount: 1567,
    stock: 55,
    brand: "Citizen",
    sku: "BLZ-WT-0007",
    weight: 165,
    dimensions: { width: 44, height: 48, depth: 12.5 },
    tags: ["citizen", "eco-drive", "diver", "solar", "japanese"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z"
  }),
  createProduct({
    id: "p63",
    title: "Tissot PRX Powermatic 80",
    slug: "tissot-prx-powermatic-80",
    description: "The Tissot PRX Powermatic 80 is a stunning revival of the 1970s integrated bracelet design, offering exceptional Swiss craftsmanship at an accessible price. The 40mm stainless steel case features a beautiful sunray-brushed dial with horizontal hobnail pattern. The Powermatic 80 automatic movement provides an impressive 80 hours of power reserve. The integrated bracelet with butterfly clasp creates a seamless silhouette. This watch has become a modern icon in the affordable luxury segment.",
    shortDescription: "Vintage-inspired integrated bracelet watch with 80-hour Powermatic 80 movement.",
    price: 799.99,
    originalPrice: 849.99,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 2345,
    stock: 35,
    brand: "Tissot",
    sku: "BLZ-WT-0008",
    weight: 135,
    dimensions: { width: 40, height: 44, depth: 10.9 },
    tags: ["tissot", "prx", "integrated", "automatic", "swiss"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p64",
    title: "Casio G-Shock GA2100",
    slug: "casio-g-shock-ga2100",
    description: "The Casio G-Shock GA2100, nicknamed the CasiOak, is a revolutionary slim-profile G-Shock that combines iconic toughness with modern style. The carbon core guard structure protects the movement while keeping the case ultra-thin at 11.8mm. Features include shock resistance, 200m water resistance, a stopwatch, timer, alarms, and world time. The analog-digital display with octagonal bezel design has made this one of the most popular G-Shocks ever created.",
    shortDescription: "Ultra-slim G-Shock with carbon core guard, analog-digital display, and iconic CasiOak design.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.7,
    reviewCount: 4567,
    stock: 120,
    brand: "Casio",
    sku: "BLZ-WT-0009",
    weight: 52,
    dimensions: { width: 46.8, height: 43.2, depth: 11.8 },
    tags: ["casio", "g-shock", "digital", "tough", "casi oak"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  }),
  createProduct({
    id: "p65",
    title: "Samsung Galaxy Watch Ultra",
    slug: "samsung-galaxy-watch-ultra",
    description: "The Samsung Galaxy Watch Ultra is a premium smartwatch designed for extreme environments and outdoor adventures. The titanium grade 4 case with cushion design protects the 47mm Super AMOLED display. The Watch Ultra features a unique quick button, 10ATM + IP68 water resistance, and a peak brightness of 3000 nits. Powered by the Exynos W1000 chip with 2GB RAM, it delivers seamless performance with Wear OS 5. Advanced bio-sensors track everything from sleep apnea to body composition.",
    shortDescription: "Rugged titanium smartwatch with 10ATM water resistance, 3000-nit display, and Wear OS 5.",
    price: 649.99,
    originalPrice: 699.99,
    discountPercentage: 7,
    rating: 4.6,
    reviewCount: 876,
    stock: 25,
    brand: "Samsung",
    sku: "BLZ-WT-0010",
    weight: 63,
    dimensions: { width: 47, height: 47, depth: 12.1 },
    tags: ["samsung", "galaxy", "smartwatch", "rugged", "wear-os"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-07-24T10:00:00Z",
    updatedAt: "2024-07-24T10:00:00Z"
  }),
  createProduct({
    id: "p66",
    title: "Fossil Gen 7 Hybrid",
    slug: "fossil-gen-7-hybrid",
    description: "The Fossil Gen 7 Hybrid smartwatch blends classic analog watch design with modern smart features. The 44mm stainless steel case frames a beautiful analog dial with subtle digital display. This hybrid offers up to 14 days of battery life, activity tracking, heart rate monitoring, smartphone notifications, and customizable buttons. The always-on hands and e-ink display ensure you always see the time. It's the perfect choice for those who want smart features without sacrificing traditional watch aesthetics.",
    shortDescription: "Hybrid smartwatch combining analog design with fitness tracking and 14-day battery life.",
    price: 299.99,
    originalPrice: 349.99,
    discountPercentage: 14,
    rating: 4.4,
    reviewCount: 654,
    stock: 40,
    brand: "Fossil",
    sku: "BLZ-WT-0011",
    weight: 75,
    dimensions: { width: 44, height: 46, depth: 12 },
    tags: ["fossil", "hybrid", "smartwatch", "analog", "fitness"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    createdAt: "2024-10-01T10:00:00Z",
    updatedAt: "2024-10-01T10:00:00Z"
  }),
  createProduct({
    id: "p67",
    title: "Longines Master Collection Moonphase",
    slug: "longines-master-collection-moonphase",
    description: "The Longines Master Collection Moonphase is a masterpiece of classical watchmaking with its elegant moonphase complication and complete calendar. The 40mm stainless steel case with its distinctive stepped bezel houses the L899 automatic movement with 64 hours of power reserve. The silver barleycorn dial features blued steel hands, a moonphase display at 6 o'clock, and a date pointer. The alligator leather strap with triple folding clasp adds the finishing touch to this refined timepiece.",
    shortDescription: "Elegant moonphase watch with complete calendar, automatic movement, and classic design.",
    price: 2799.99,
    originalPrice: 2999.99,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 189,
    stock: 12,
    brand: "Longines",
    sku: "BLZ-WT-0012",
    weight: 160,
    dimensions: { width: 40, height: 47, depth: 11.5 },
    tags: ["longines", "master-collection", "moonphase", "elegant", "automatic"],
    categoryId: "cat-4",
    categoryName: "Watches",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-03-25T10:00:00Z",
    updatedAt: "2024-03-25T10:00:00Z"
  }),
]

// ============================================
// CATEGORY 5: HOME & LIVING (15 Products) - p68 to p82
// ============================================

const homeLiving: Product[] = [
  createProduct({
    id: "p68",
    title: "Dyson V15 Detect Vacuum",
    slug: "dyson-v15-detect-vacuum",
    description: "The Dyson V15 Detect is a revolutionary cordless vacuum that uses laser technology to reveal hidden dust. The advanced filtration captures particles as small as 0.1 microns, while the LCD screen provides real-time scientific proof of cleaning. The powerful motor and lightweight design make it easy to clean any surface. This vacuum is a game-changer for home cleaning.",
    shortDescription: "Cordless vacuum with laser technology, advanced filtration, and real-time cleaning proof.",
    price: 799.99,
    originalPrice: 849.99,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 2345,
    stock: 45,
    brand: "Dyson",
    sku: "BLZ-HM-0001",
    weight: 3100,
    dimensions: { width: 250, height: 1260, depth: 250 },
    tags: ["dyson", "vacuum", "cordless", "laser", "cleaning"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p69",
    title: "KitchenAid Artisan Stand Mixer",
    slug: "kitchenaid-artisan-stand-mixer",
    description: "The KitchenAid Artisan Stand Mixer is a timeless kitchen essential that combines style and performance. The 5-quart stainless steel bowl and 10-speed motor provide versatility for any recipe. The tilt-head design allows for easy access to ingredients, while the included attachments offer endless possibilities. This mixer is a must-have for any home baker.",
    shortDescription: "Iconic stand mixer with 5-quart bowl, 10-speed motor, and versatile attachments.",
    price: 499.99,
    originalPrice: 549.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 4567,
    stock: 60,
    brand: "KitchenAid",
    sku: "BLZ-HM-0002",
    weight: 12000,
    dimensions: { width: 350, height: 370, depth: 220 },
    tags: ["kitchenaid", "stand-mixer", "baking", "kitchen", "cooking"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p70",
    title: "Sony 65-inch OLED TV",
    slug: "sony-65-inch-oled-tv",
    description: "The Sony 65-inch OLED TV delivers stunning picture quality with perfect blacks and infinite contrast. The Cognitive Processor XR analyzes the way we see and hear, creating a more immersive experience. The Acoustic Surface Audio technology turns the screen into a speaker. This TV is the ultimate choice for home entertainment.",
    shortDescription: "65-inch OLED TV with Cognitive Processor XR, perfect blacks, and immersive audio.",
    price: 2499.99,
    originalPrice: 2699.99,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 876,
    stock: 15,
    brand: "Sony",
    sku: "BLZ-HM-0003",
    weight: 25000,
    dimensions: { width: 1448, height: 837, depth: 40 },
    tags: ["sony", "tv", "oled", "4k", "entertainment"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z"
  }),
  createProduct({
    id: "p71",
    title: "Sonos Era 300 Speaker",
    slug: "sonos-era-300-speaker",
    description: "The Sonos Era 300 is the ultimate speaker for spatial audio, delivering an immersive sound experience that fills any room. The powerful sound and advanced software create a multi-dimensional soundstage. The Wi-Fi and Bluetooth connectivity offer versatility, while the elegant design fits seamlessly into any home. This speaker is a testament to Sonos's commitment to audio excellence.",
    shortDescription: "Ultimate spatial audio speaker with immersive sound, Wi-Fi, and elegant design.",
    price: 449.99,
    originalPrice: 499.99,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 1234,
    stock: 40,
    brand: "Sonos",
    sku: "BLZ-HM-0004",
    weight: 4500,
    dimensions: { width: 260, height: 160, depth: 185 },
    tags: ["sonos", "speaker", "audio", "spatial-audio", "wireless"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p72",
    title: "Le Creuset Dutch Oven",
    slug: "le-creuset-dutch-oven",
    description: "The Le Creuset Dutch Oven is a legendary cooking pot that combines superior heat distribution with exceptional durability. The enameled cast iron construction ensures even heating and easy cleaning. The tight-fitting lid locks in moisture and flavor, making it perfect for slow-cooked meals. This Dutch oven is a kitchen investment that will last for generations.",
    shortDescription: "Legendary enameled cast iron pot with superior heat distribution and lasting durability.",
    price: 399.99,
    originalPrice: 429.99,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 3456,
    stock: 50,
    brand: "Le Creuset",
    sku: "BLZ-HM-0005",
    weight: 6800,
    dimensions: { width: 260, height: 170, depth: 260 },
    tags: ["le-creuset", "dutch-oven", "cast-iron", "cooking", "kitchen"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-05T10:00:00Z",
    updatedAt: "2024-07-05T10:00:00Z"
  }),
  createProduct({
    id: "p73",
    title: "Philips Hue Starter Kit",
    slug: "philips-hue-starter-kit",
    description: "The Philips Hue Starter Kit is the perfect way to begin your smart lighting journey. The color-changing bulbs and bridge allow you to control lights from anywhere. The 16 million colors and white light settings create the perfect ambiance for any occasion. The compatibility with voice assistants makes it easy to control with your voice. This kit transforms your home with intelligent lighting.",
    shortDescription: "Smart lighting kit with color-changing bulbs, voice control, and 16 million colors.",
    price: 199.99,
    originalPrice: 229.99,
    discountPercentage: 13,
    rating: 4.7,
    reviewCount: 4567,
    stock: 120,
    brand: "Philips",
    sku: "BLZ-HM-0006",
    weight: 600,
    dimensions: { width: 200, height: 150, depth: 100 },
    tags: ["philips", "hue", "smart-lighting", "led", "smart-home"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p74",
    title: "Nespresso Vertuo Pop",
    slug: "nespresso-vertuo-pop",
    description: "The Nespresso Vertuo Pop is a stylish and compact coffee machine that delivers barista-quality coffee at home. The unique extraction technology and spin-and-brew system create a rich and flavorful crema. The compact design fits any countertop, while the versatility allows for both coffee and espresso. This machine is perfect for coffee lovers who appreciate quality and convenience.",
    shortDescription: "Stylish coffee machine with barista-quality extraction, compact design, and versatility.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 2345,
    stock: 80,
    brand: "Nespresso",
    sku: "BLZ-HM-0007",
    weight: 3000,
    dimensions: { width: 136, height: 250, depth: 426 },
    tags: ["nespresso", "coffee-machine", "coffee", "compact", "barista"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p75",
    title: "Google Nest Hub Max",
    slug: "google-nest-hub-max",
    description: "The Google Nest Hub Max is the ultimate smart display for your home. The 10-inch screen and powerful speaker create an immersive experience for entertainment and communication. The built-in camera enables video calls and home monitoring, while the Google Assistant provides hands-free control. This smart display is the centerpiece of any smart home.",
    shortDescription: "Smart display with 10-inch screen, Google Assistant, video calls, and home monitoring.",
    price: 249.99,
    originalPrice: 279.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 1876,
    stock: 45,
    brand: "Google",
    sku: "BLZ-HM-0008",
    weight: 1200,
    dimensions: { width: 250, height: 180, depth: 100 },
    tags: ["google", "nest-hub", "smart-display", "smart-home", "assistant"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p76",
    title: "Victorinox Swiss Classic Knife",
    slug: "victorinox-swiss-classic-knife",
    description: "The Victorinox Swiss Classic Knife is a versatile kitchen tool that combines Swiss precision with durability. The high-quality stainless steel blade ensures a sharp and reliable edge for any culinary task. The ergonomic handle provides comfort and control, while the compact design makes it easy to store. This knife is a must-have for any home cook.",
    shortDescription: "Versatile kitchen knife with Swiss precision, sharp blade, and ergonomic design.",
    price: 49.99,
    originalPrice: 54.99,
    discountPercentage: 9,
    rating: 4.7,
    reviewCount: 3456,
    stock: 150,
    brand: "Victorinox",
    sku: "BLZ-HM-0009",
    weight: 100,
    dimensions: { width: 25, height: 230, depth: 5 },
    tags: ["victorinox", "swiss", "kitchen-knife", "precision", "durable"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p77",
    title: "Smeg Kettle 50's Style",
    slug: "smeg-kettle-50s-style",
    description: "The Smeg Kettle 50's Style is a retro-inspired appliance that adds a touch of vintage charm to any kitchen. The stainless steel construction and soft-touch handle ensure durability and comfort. The unique design and vibrant colors make it a statement piece on any countertop. This kettle is a perfect blend of style and functionality.",
    shortDescription: "Retro-inspired kettle with vintage charm, stainless steel construction, and colorful design.",
    price: 179.99,
    originalPrice: 199.99,
    discountPercentage: 10,
    rating: 4.6,
    reviewCount: 2345,
    stock: 55,
    brand: "Smeg",
    sku: "BLZ-HM-0010",
    weight: 1500,
    dimensions: { width: 160, height: 220, depth: 220 },
    tags: ["smeg", "kettle", "retro", "stainless-steel", "kitchen"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p78",
    title: "Cuisinart Air Fryer Toaster Oven",
    slug: "cuisinart-air-fryer-toaster-oven",
    description: "The Cuisinart Air Fryer Toaster Oven is a versatile appliance that combines air frying, baking, and toasting in one compact design. The air frying technology delivers crispy results with less oil, while the convection heat ensures even cooking. The digital controls and preset functions make it easy to use. This toaster oven is perfect for quick and healthy meals.",
    shortDescription: "Versatile toaster oven with air frying, baking, and toasting in one compact design.",
    price: 249.99,
    originalPrice: 279.99,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 1876,
    stock: 40,
    brand: "Cuisinart",
    sku: "BLZ-HM-0011",
    weight: 8000,
    dimensions: { width: 400, height: 300, depth: 350 },
    tags: ["cuisinart", "air-fryer", "toaster-oven", "versatile", "kitchen"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p79",
    title: "JBL PartyBox 710",
    slug: "jbl-partybox-710",
    description: "The JBL PartyBox 710 is the ultimate portable speaker for parties and events. The powerful sound and dynamic light show create an immersive experience. The built-in rechargeable battery provides hours of playtime. The wireless connectivity and durable design make it perfect for any occasion. This speaker is a must-have for those who love to entertain.",
    shortDescription: "Powerful portable speaker with light show, long battery life, and immersive sound.",
    price: 599.99,
    originalPrice: 649.99,
    discountPercentage: 8,
    rating: 4.6,
    reviewCount: 1234,
    stock: 25,
    brand: "JBL",
    sku: "BLZ-HM-0012",
    weight: 18000,
    dimensions: { width: 500, height: 400, depth: 350 },
    tags: ["jbl", "partybox", "speaker", "party", "portable"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  }),
  createProduct({
    id: "p80",
    title: "Zwilling J.A. Henckels Knife Set",
    slug: "zwilling-ja-henckels-knife-set",
    description: "The Zwilling J.A. Henckels Knife Set is a premium collection of kitchen knives that embodies German craftsmanship. The high-quality stainless steel blades provide exceptional sharpness and durability. The ergonomic handles ensure comfort and control for all cutting tasks. This knife set is a timeless investment for any home cook.",
    shortDescription: "Premium knife set with German craftsmanship, sharp blades, and ergonomic design.",
    price: 499.99,
    originalPrice: 549.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 876,
    stock: 20,
    brand: "Zwilling",
    sku: "BLZ-HM-0013",
    weight: 2000,
    dimensions: { width: 300, height: 400, depth: 100 },
    tags: ["zwilling", "knife-set", "german", "premium", "kitchen"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-20T10:00:00Z",
    updatedAt: "2024-08-20T10:00:00Z"
  }),
  createProduct({
    id: "p81",
    title: "Miele Complete C3 Vacuum",
    slug: "miele-complete-c3-vacuum",
    description: "The Miele Complete C3 Vacuum is a premium canister vacuum that delivers exceptional cleaning performance. The powerful motor and advanced filtration system ensure a thorough clean, while the quiet operation provides a comfortable cleaning experience. The versatile attachments and ergonomic design make it easy to clean any surface. This vacuum is a testament to Miele's commitment to quality.",
    shortDescription: "Premium canister vacuum with powerful motor, advanced filtration, and quiet operation.",
    price: 699.99,
    originalPrice: 749.99,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 1234,
    stock: 30,
    brand: "Miele",
    sku: "BLZ-HM-0014",
    weight: 8500,
    dimensions: { width: 300, height: 400, depth: 250 },
    tags: ["miele", "vacuum", "canister", "premium", "cleaning"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-25T10:00:00Z",
    updatedAt: "2024-08-25T10:00:00Z"
  }),
  createProduct({
    id: "p82",
    title: "Keurig K-Elite Coffee Maker",
    slug: "keurig-k-elite-coffee-maker",
    description: "The Keurig K-Elite Coffee Maker is a versatile brewer that delivers single-serve coffee with ease. The multiple brew sizes and temperature control provide customization for the perfect cup. The iced coffee setting makes it ideal for warm weather. The sleek design and intuitive controls make it a favorite for coffee lovers.",
    shortDescription: "Versatile single-serve coffee maker with multiple brew sizes and iced coffee setting.",
    price: 169.99,
    originalPrice: 189.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 5678,
    stock: 60,
    brand: "Keurig",
    sku: "BLZ-HM-0015",
    weight: 3200,
    dimensions: { width: 250, height: 330, depth: 200 },
    tags: ["keurig", "coffee-maker", "single-serve", "versatile", "iced-coffee"],
    categoryId: "cat-5",
    categoryName: "Home & Living",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-09-01T10:00:00Z",
    updatedAt: "2024-09-01T10:00:00Z"
  })
]

// ============================================
// CATEGORY 6: BEAUTY & PERSONAL CARE (12 Products) - p83 to p94
// ============================================

const beauty: Product[] = [
  createProduct({
    id: "p83",
    title: "Dyson Airwrap Multi-Styler",
    slug: "dyson-airwrap-multi-styler",
    description: "The Dyson Airwrap Multi-Styler is a revolutionary hair styling tool that uses air to create curls, waves, and smooth styles without extreme heat. The Coanda technology and intelligent heat control protect your hair from damage. The versatile attachments allow for endless styling possibilities. This styler is a game-changer for at-home hair care.",
    shortDescription: "Revolutionary hair styler using air technology, no extreme heat, and versatile attachments.",
    price: 599.99,
    originalPrice: 649.99,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 3456,
    stock: 35,
    brand: "Dyson",
    sku: "BLZ-BP-0001",
    weight: 1100,
    dimensions: { width: 250, height: 300, depth: 150 },
    tags: ["dyson", "airwrap", "hair-styler", "coanda", "heatless"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p84",
    title: "CeraVe Hydrating Cleanser",
    slug: "cerave-hydrating-cleanser",
    description: "The CeraVe Hydrating Cleanser is a gentle, non-foaming cleanser that removes dirt and makeup while maintaining the skin's natural barrier. The essential ceramides and hyaluronic acid help hydrate and soothe the skin. The fragrance-free, paraben-free formula is suitable for all skin types. This cleanser is a dermatologist-recommended essential for a healthy skincare routine.",
    shortDescription: "Gentle hydrating cleanser with ceramides, hyaluronic acid, and non-foaming formula.",
    price: 19.99,
    originalPrice: 24.99,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 6789,
    stock: 200,
    brand: "CeraVe",
    sku: "BLZ-BP-0002",
    weight: 560,
    dimensions: { width: 70, height: 200, depth: 50 },
    tags: ["cerave", "cleanser", "hydrating", "skincare", "dermatologist"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z"
  }),
  createProduct({
    id: "p85",
    title: "L'Oréal Paris Revitalift Serum",
    slug: "loreal-paris-revitalift-serum",
    description: "The L'Oréal Paris Revitalift Serum is a powerful anti-aging treatment that reduces the appearance of wrinkles and firms the skin. The hyaluronic acid and Pro-Retinol work together to plump and smooth the skin's texture. The lightweight formula absorbs quickly for a non-greasy feel. This serum is a must-have for a youthful and radiant complexion.",
    shortDescription: "Anti-aging serum with hyaluronic acid, Pro-Retinol, and firming properties.",
    price: 29.99,
    originalPrice: 34.99,
    discountPercentage: 14,
    rating: 4.6,
    reviewCount: 5678,
    stock: 150,
    brand: "L'Oréal Paris",
    sku: "BLZ-BP-0003",
    weight: 30,
    dimensions: { width: 30, height: 100, depth: 30 },
    tags: ["loreal", "revitalift", "serum", "anti-aging", "skincare"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-10T10:00:00Z"
  }),
  createProduct({
    id: "p86",
    title: "Philips Sonicare Toothbrush",
    slug: "philips-sonicare-toothbrush",
    description: "The Philips Sonicare Toothbrush is a premium dental care device that delivers exceptional cleaning performance. The sonic technology and pressure sensor ensure effective plaque removal and gum health. The rechargeable battery and travel case provide convenience and portability. This toothbrush is a smart investment in long-term oral health.",
    shortDescription: "Premium sonic toothbrush with pressure sensor, long battery life, and travel case.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 4567,
    stock: 80,
    brand: "Philips",
    sku: "BLZ-BP-0004",
    weight: 150,
    dimensions: { width: 30, height: 240, depth: 30 },
    tags: ["philips", "sonicare", "toothbrush", "dental", "sonic"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p87",
    title: "Olay Regenerist Retinol 24",
    slug: "olay-regenerist-retinol-24",
    description: "The Olay Regenerist Retinol 24 is a breakthrough skincare treatment that delivers the power of retinol without the irritation. The gentle formula and ceramides work together to smooth fine lines and even skin tone. The hydrating moisturizer provides all-day hydration and a radiant glow. This treatment is a game-changer for a youthful and smooth complexion.",
    shortDescription: "Retinol treatment with gentle formula, ceramides, and all-day hydration.",
    price: 39.99,
    originalPrice: 44.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 4567,
    stock: 100,
    brand: "Olay",
    sku: "BLZ-BP-0005",
    weight: 50,
    dimensions: { width: 50, height: 80, depth: 50 },
    tags: ["olay", "regenerist", "retinol", "anti-aging", "skincare"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p88",
    title: "Braun Series 9 Shaver",
    slug: "braun-series-9-shaver",
    description: "The Braun Series 9 Shaver is the most advanced electric shaver on the market, delivering a close and gentle shave. The syncroSonic technology and four shaving elements capture more hair with each stroke. The waterproof design allows for wet and dry shaving, while the intelligent AutoSense motor adapts to the beard density. This shaver is a precision tool for a perfect shave.",
    shortDescription: "Advanced electric shaver with syncroSonic technology, waterproof design, and precision.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 2345,
    stock: 40,
    brand: "Braun",
    sku: "BLZ-BP-0006",
    weight: 600,
    dimensions: { width: 60, height: 160, depth: 40 },
    tags: ["braun", "series-9", "shaver", "electric", "precision"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p89",
    title: "The Ordinary Hyaluronic Acid 2%",
    slug: "the-ordinary-hyaluronic-acid-2",
    description: "The Ordinary Hyaluronic Acid 2% is a powerful hydration serum that attracts and holds moisture in the skin. The lightweight formula plumps and smooths the skin's texture, reducing the appearance of fine lines. The vegan and cruelty-free formula is suitable for all skin types. This serum is a skincare essential for a hydrated and glowing complexion.",
    shortDescription: "Hydration serum with hyaluronic acid, lightweight formula, and plumping benefits.",
    price: 12.99,
    originalPrice: 14.99,
    discountPercentage: 13,
    rating: 4.7,
    reviewCount: 7890,
    stock: 200,
    brand: "The Ordinary",
    sku: "BLZ-BP-0007",
    weight: 30,
    dimensions: { width: 30, height: 100, depth: 30 },
    tags: ["the-ordinary", "hyaluronic-acid", "serum", "hydration", "skincare"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p90",
    title: "Foreo Luna 3 Face Brush",
    slug: "foreo-luna-3-face-brush",
    description: "The Foreo Luna 3 Face Brush is a smart facial cleansing device that combines advanced technology with gentle care. The innovative silicone bristles and T-sonic pulsations provide a thorough yet gentle clean. The smart sensors and personalized cleansing routines offer a customized experience. This device is a must-have for a radiant and healthy complexion.",
    shortDescription: "Smart facial cleansing device with silicone bristles, T-sonic pulsations, and personalized routines.",
    price: 199.99,
    originalPrice: 229.99,
    discountPercentage: 13,
    rating: 4.6,
    reviewCount: 3456,
    stock: 50,
    brand: "Foreo",
    sku: "BLZ-BP-0008",
    weight: 130,
    dimensions: { width: 80, height: 100, depth: 35 },
    tags: ["foreo", "luna", "face-brush", "cleansing", "skincare"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p91",
    title: "Estée Lauder Night Serum",
    slug: "estee-lauder-night-serum",
    description: "The Estée Lauder Night Serum is a premium repair treatment that works overnight to restore and rejuvenate the skin. The powerful formula and advanced technology help reduce the signs of aging and promote a youthful glow. The lightweight texture absorbs quickly, leaving the skin smooth and radiant. This serum is a luxurious addition to any skincare routine.",
    shortDescription: "Premium night serum with advanced repair technology, anti-aging benefits, and glowing results.",
    price: 99.99,
    originalPrice: 109.99,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 2345,
    stock: 30,
    brand: "Estée Lauder",
    sku: "BLZ-BP-0009",
    weight: 30,
    dimensions: { width: 30, height: 100, depth: 30 },
    tags: ["estee-lauder", "night-serum", "anti-aging", "repair", "skincare"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p92",
    title: "Panasonic Multi-Style Curling Iron",
    slug: "panasonic-multi-style-curling-iron",
    description: "The Panasonic Multi-Style Curling Iron is a versatile styling tool that creates a range of curls and waves. The ceramic technology ensures even heat distribution and gentle styling. The multiple heat settings and auto shut-off provide safety and convenience. This curling iron is perfect for creating salon-quality styles at home.",
    shortDescription: "Versatile curling iron with ceramic technology, multiple heat settings, and safe design.",
    price: 79.99,
    originalPrice: 89.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 3456,
    stock: 60,
    brand: "Panasonic",
    sku: "BLZ-BP-0010",
    weight: 400,
    dimensions: { width: 40, height: 300, depth: 40 },
    tags: ["panasonic", "curling-iron", "styling", "ceramic", "heat"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p93",
    title: "Neutrogena Hydro Boost Water Gel",
    slug: "neutrogena-hydro-boost-water-gel",
    description: "The Neutrogena Hydro Boost Water Gel is a refreshing moisturizer that instantly quenches dry skin. The hyaluronic acid and olive extract provide deep and lasting hydration. The lightweight, non-greasy formula absorbs quickly for a smooth and radiant finish. This moisturizer is a daily essential for a healthy and glowing complexion.",
    shortDescription: "Refreshing water gel moisturizer with hyaluronic acid, lightweight formula, and deep hydration.",
    price: 24.99,
    originalPrice: 29.99,
    discountPercentage: 17,
    rating: 4.7,
    reviewCount: 6789,
    stock: 150,
    brand: "Neutrogena",
    sku: "BLZ-BP-0011",
    weight: 50,
    dimensions: { width: 70, height: 70, depth: 50 },
    tags: ["neutrogena", "hydro-boost", "water-gel", "moisturizer", "hydration"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p94",
    title: "Remington Hair Straightener",
    slug: "remington-hair-straightener",
    description: "The Remington Hair Straightener is a professional-grade styling tool that delivers sleek and smooth results. The ceramic plates and anti-static technology ensure even heat and reduce frizz. The quick heat-up time and multiple temperature settings provide versatility for all hair types. This straightener is a must-have for a polished and salon-quality look.",
    shortDescription: "Professional-grade hair straightener with ceramic plates, anti-static, and versatile heat settings.",
    price: 59.99,
    originalPrice: 69.99,
    discountPercentage: 14,
    rating: 4.5,
    reviewCount: 4567,
    stock: 80,
    brand: "Remington",
    sku: "BLZ-BP-0012",
    weight: 350,
    dimensions: { width: 30, height: 280, depth: 40 },
    tags: ["remington", "hair-straightener", "ceramic", "professional", "styling"],
    categoryId: "cat-6",
    categoryName: "Beauty & Personal Care",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  })
]

// ============================================
// CATEGORY 7: FITNESS & SPORTS (12 Products) - p95 to p106
// ============================================

const fitness: Product[] = [
  createProduct({
    id: "p95",
    title: "Peloton Bike+",
    slug: "peloton-bike-plus",
    description: "The Peloton Bike+ is the ultimate indoor cycling experience, offering immersive workouts with a rotating screen that adjusts for on and off-bike classes. The powerful motor and auto-resistance technology provide a seamless and challenging ride. The real-time metrics and live classes keep you motivated and engaged. This bike is a must-have for fitness enthusiasts.",
    shortDescription: "Ultimate indoor cycling bike with rotating screen, auto-resistance, and live classes.",
    price: 2499.99,
    originalPrice: 2699.99,
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 2345,
    stock: 20,
    brand: "Peloton",
    sku: "BLZ-FT-0001",
    weight: 62000,
    dimensions: { width: 600, height: 1500, depth: 600 },
    tags: ["peloton", "bike", "cycling", "fitness", "indoor"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p96",
    title: "Garmin Forerunner 965",
    slug: "garmin-forerunner-965",
    description: "The Garmin Forerunner 965 is a premium GPS running watch that combines advanced performance metrics with a stunning AMOLED display. The accurate GPS and heart rate monitoring provide detailed training data, while the music storage and contactless payments offer convenience. This watch is a must-have for serious runners who demand precision and style.",
    shortDescription: "Premium GPS running watch with AMOLED display, advanced metrics, and music storage.",
    price: 599.99,
    originalPrice: 649.99,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 1876,
    stock: 30,
    brand: "Garmin",
    sku: "BLZ-FT-0002",
    weight: 53,
    dimensions: { width: 45, height: 45, depth: 12 },
    tags: ["garmin", "forerunner", "gps", "running", "fitness"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p97",
    title: "Bowflex SelectTech 552 Dumbbells",
    slug: "bowflex-selecttech-552-dumbbells",
    description: "The Bowflex SelectTech 552 Dumbbells offer a comprehensive home gym solution in one compact set. The adjustable design provides 15 weight settings, replacing a full rack of dumbbells. The ergonomic handle and secure locking mechanism ensure safety and convenience. This set is perfect for those who want to maximize their home workouts.",
    shortDescription: "Adjustable dumbbell set with 15 weight settings, compact design, and ergonomic handle.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 3456,
    stock: 45,
    brand: "Bowflex",
    sku: "BLZ-FT-0003",
    weight: 25000,
    dimensions: { width: 400, height: 200, depth: 200 },
    tags: ["bowflex", "selecttech", "dumbbells", "adjustable", "home-gym"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-05T10:00:00Z",
    updatedAt: "2024-07-05T10:00:00Z"
  }),
  createProduct({
    id: "p98",
    title: "Theragun Pro",
    slug: "theragun-pro",
    description: "The Theragun Pro is the ultimate percussive therapy device for muscle recovery and performance. The powerful motor and six attachments provide deep, targeted relief for sore muscles. The smart app and customizable routines offer a personalized recovery experience. This device is a must-have for athletes and fitness enthusiasts.",
    shortDescription: "Ultimate percussive therapy device with powerful motor, six attachments, and smart app.",
    price: 599.99,
    originalPrice: 649.99,
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 2345,
    stock: 30,
    brand: "Theragun",
    sku: "BLZ-FT-0004",
    weight: 1500,
    dimensions: { width: 70, height: 220, depth: 70 },
    tags: ["theragun", "percussive-therapy", "massage", "recovery", "fitness"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p99",
    title: "Whoop 4.0 Fitness Tracker",
    slug: "whoop-4-0-fitness-tracker",
    description: "The Whoop 4.0 Fitness Tracker is a premium wearable that provides in-depth insights into your health and performance. The advanced sensors track heart rate, sleep, and recovery with precision. The personalized coaching and strain data help you optimize your training. This tracker is perfect for those who want to take their fitness to the next level.",
    shortDescription: "Premium fitness tracker with advanced sensors, personalized coaching, and recovery insights.",
    price: 299.99,
    originalPrice: 329.99,
    discountPercentage: 9,
    rating: 4.6,
    reviewCount: 3456,
    stock: 50,
    brand: "Whoop",
    sku: "BLZ-FT-0005",
    weight: 45,
    dimensions: { width: 40, height: 40, depth: 10 },
    tags: ["whoop", "fitness-tracker", "heart-rate", "sleep", "recovery"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p100",
    title: "NordicTrack Treadmill",
    slug: "nordictrack-treadmill",
    description: "The NordicTrack Treadmill is a premium fitness machine that offers a comprehensive home workout experience. The powerful motor and incline technology provide a challenging and effective run. The interactive training and iFit compatibility offer a personalized and engaging workout. This treadmill is a must-have for serious runners and walkers.",
    shortDescription: "Premium treadmill with powerful motor, incline technology, and interactive training.",
    price: 1499.99,
    originalPrice: 1699.99,
    discountPercentage: 12,
    rating: 4.7,
    reviewCount: 1876,
    stock: 15,
    brand: "NordicTrack",
    sku: "BLZ-FT-0006",
    weight: 90000,
    dimensions: { width: 800, height: 1500, depth: 2000 },
    tags: ["nordictrack", "treadmill", "running", "fitness", "home-gym"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p101",
    title: "Fitbit Charge 6",
    slug: "fitbit-charge-6",
    description: "The Fitbit Charge 6 is a comprehensive fitness tracker that monitors your health and activity with precision. The advanced sensors track heart rate, sleep, and exercise metrics. The built-in GPS and smart features provide convenience and connectivity. This tracker is perfect for those who want to stay on top of their fitness goals.",
    shortDescription: "Comprehensive fitness tracker with heart rate, sleep, and exercise monitoring.",
    price: 159.99,
    originalPrice: 179.99,
    discountPercentage: 11,
    rating: 4.5,
    reviewCount: 4567,
    stock: 80,
    brand: "Fitbit",
    sku: "BLZ-FT-0007",
    weight: 30,
    dimensions: { width: 37, height: 40, depth: 10 },
    tags: ["fitbit", "charge", "fitness-tracker", "heart-rate", "gps"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p102",
    title: "Concept2 Rower",
    slug: "concept2-rower",
    description: "The Concept2 Rower is a world-class indoor rowing machine designed for fitness enthusiasts of all levels. The air resistance system provides a smooth and natural feel that mimics on-water rowing. The performance monitor tracks key metrics and connects to popular fitness apps. This rower is a must-have for a complete home gym.",
    shortDescription: "World-class indoor rowing machine with air resistance, performance monitor, and smooth feel.",
    price: 999.99,
    originalPrice: 1099.99,
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 2345,
    stock: 20,
    brand: "Concept2",
    sku: "BLZ-FT-0008",
    weight: 26000,
    dimensions: { width: 600, height: 800, depth: 2500 },
    tags: ["concept2", "rower", "indoor-rowing", "fitness", "home-gym"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p103",
    title: "Under Armour HOVR Shoes",
    slug: "under-armour-hovr-shoes",
    description: "The Under Armour HOVR Shoes are designed for runners who want a responsive and connected run. The HOVR cushioning provides energy return and shock absorption, while the UA Record Sensor tracks your distance, pace, and cadence. The breathable upper and durable outsole offer comfort and traction. This shoe is perfect for runners who want to improve their performance.",
    shortDescription: "Running shoes with HOVR cushioning, UA Record Sensor, and responsive ride.",
    price: 129.99,
    originalPrice: 149.99,
    discountPercentage: 13,
    rating: 4.6,
    reviewCount: 3456,
    stock: 60,
    brand: "Under Armour",
    sku: "BLZ-FT-0009",
    weight: 280,
    dimensions: { width: 27, height: 30, depth: 10 },
    tags: ["under-armour", "hovr", "running", "shoes", "cushioning"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p104",
    title: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh-1000xm5-headphones",
    description: "The Sony WH-1000XM5 Headphones are the ultimate wireless noise-canceling headphones for active lifestyles. The industry-leading noise cancellation and exceptional sound quality make them perfect for workouts and travel. The comfortable fit and long battery life ensure a great experience. This headphone is a must-have for fitness enthusiasts who value audio quality.",
    shortDescription: "Ultimate noise-canceling headphones with exceptional sound, comfortable fit, and long battery.",
    price: 399.99,
    originalPrice: 449.99,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 4567,
    stock: 50,
    brand: "Sony",
    sku: "BLZ-FT-0010",
    weight: 250,
    dimensions: { width: 175, height: 200, depth: 75 },
    tags: ["sony", "wh-1000xm5", "headphones", "noise-canceling", "wireless"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z"
  }),
  createProduct({
    id: "p105",
    title: "Adidas Powerlifting Belt",
    slug: "adidas-powerlifting-belt",
    description: "The Adidas Powerlifting Belt is a must-have for serious weightlifters seeking optimal support and stability. The high-quality leather construction ensures durability and a secure fit during heavy lifts. The buckle closure allows for quick and easy adjustments, providing a customized fit for every lifter. This belt is designed to help you lift with confidence and safety.",
    shortDescription: "Premium leather powerlifting belt with secure fit, adjustable buckle, and durable construction.",
    price: 89.99,
    originalPrice: 99.99,
    discountPercentage: 10,
    rating: 4.7,
    reviewCount: 2345,
    stock: 40,
    brand: "Adidas",
    sku: "BLZ-FT-0011",
    weight: 800,
    dimensions: { width: 10, height: 100, depth: 5 },
    tags: ["adidas", "powerlifting-belt", "weightlifting", "support", "leather"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  }),
  createProduct({
    id: "p106",
    title: "TRX Suspension Trainer",
    slug: "trx-suspension-trainer",
    description: "The TRX Suspension Trainer is a versatile and portable fitness tool that uses bodyweight exercises to build strength, balance, and flexibility. The adjustable straps and handles allow for a wide range of exercises, making it perfect for home and travel. This trainer is a must-have for anyone looking to improve their fitness with minimal equipment.",
    shortDescription: "Portable suspension trainer for bodyweight exercises, strength, balance, and flexibility.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.6,
    reviewCount: 3456,
    stock: 60,
    brand: "TRX",
    sku: "BLZ-FT-0012",
    weight: 800,
    dimensions: { width: 150, height: 200, depth: 50 },
    tags: ["trx", "suspension-trainer", "bodyweight", "fitness", "portable"],
    categoryId: "cat-7",
    categoryName: "Fitness & Sports",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-20T10:00:00Z",
    updatedAt: "2024-08-20T10:00:00Z"
  })
]

// ============================================
// CATEGORY 8: GAMING (10 Products) - p107 to p116
// ============================================

const gaming: Product[] = [
  createProduct({
    id: "p107",
    title: "PlayStation 5 Digital Edition",
    slug: "playstation-5-digital-edition",
    description: "The PlayStation 5 Digital Edition is a next-generation gaming console that delivers immersive gaming experiences. The ultra-fast SSD and custom processor provide stunning graphics and speed. The DualSense controller offers a new level of immersion with haptic feedback and adaptive triggers. This console is a must-have for any serious gamer.",
    shortDescription: "Next-gen console with fast SSD, DualSense controller, and stunning graphics.",
    price: 449.99,
    originalPrice: 499.99,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 6789,
    stock: 25,
    brand: "Sony",
    sku: "BLZ-GM-0001",
    weight: 4500,
    dimensions: { width: 390, height: 104, depth: 260 },
    tags: ["playstation", "ps5", "console", "gaming", "next-gen"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p108",
    title: "Xbox Series X",
    slug: "xbox-series-x",
    description: "The Xbox Series X is the most powerful Xbox console ever, delivering true 4K gaming and up to 120fps. The fast SSD and advanced processor ensure quick loading and smooth gameplay. The extensive game library and Xbox Game Pass offer endless entertainment options. This console is perfect for gamers who want the best performance.",
    shortDescription: "Powerful console with true 4K gaming, fast SSD, and Xbox Game Pass.",
    price: 499.99,
    originalPrice: 549.99,
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 5678,
    stock: 20,
    brand: "Microsoft",
    sku: "BLZ-GM-0002",
    weight: 4500,
    dimensions: { width: 151, height: 151, depth: 301 },
    tags: ["xbox", "series-x", "console", "gaming", "4k"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p109",
    title: "Nintendo Switch OLED",
    slug: "nintendo-switch-oled",
    description: "The Nintendo Switch OLED is a portable gaming console with a vibrant OLED screen and enhanced features. The 7-inch display offers vivid colors and sharp visuals for an immersive gaming experience. The versatile design allows for handheld, tabletop, or TV play. This console is perfect for gaming on the go and at home.",
    shortDescription: "Portable console with 7-inch OLED screen, versatile design, and classic Nintendo games.",
    price: 349.99,
    originalPrice: 379.99,
    discountPercentage: 8,
    rating: 4.7,
    reviewCount: 7890,
    stock: 30,
    brand: "Nintendo",
    sku: "BLZ-GM-0003",
    weight: 420,
    dimensions: { width: 184, height: 106, depth: 56 },
    tags: ["nintendo", "switch", "oled", "portable", "gaming"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p110",
    title: "Logitech G Pro X Superlight",
    slug: "logitech-g-pro-x-superlight",
    description: "The Logitech G Pro X Superlight is an ultra-lightweight wireless gaming mouse designed for esports professionals and competitive gamers. The high-performance HERO sensor and optical switches provide precision and reliability. The superlight design and long battery life ensure comfort and performance. This mouse is a must-have for serious gamers.",
    shortDescription: "Ultra-lightweight wireless gaming mouse with HERO sensor, optical switches, and precision.",
    price: 149.99,
    originalPrice: 169.99,
    discountPercentage: 12,
    rating: 4.8,
    reviewCount: 4567,
    stock: 50,
    brand: "Logitech",
    sku: "BLZ-GM-0004",
    weight: 63,
    dimensions: { width: 63, height: 125, depth: 40 },
    tags: ["logitech", "g-pro", "gaming-mouse", "wireless", "lightweight"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p111",
    title: "Razer DeathAdder V3 Pro",
    slug: "razer-deathadder-v3-pro",
    description: "The Razer DeathAdder V3 Pro is an iconic gaming mouse re-engineered for performance. The ultra-lightweight design and Focus Pro 30K optical sensor provide precision and speed. The advanced wireless technology and long battery life ensure uninterrupted gaming. This mouse is a must-have for gamers who demand the best.",
    shortDescription: "Iconic gaming mouse with ultra-lightweight design, advanced sensor, and wireless performance.",
    price: 159.99,
    originalPrice: 179.99,
    discountPercentage: 11,
    rating: 4.7,
    reviewCount: 3456,
    stock: 40,
    brand: "Razer",
    sku: "BLZ-GM-0005",
    weight: 63,
    dimensions: { width: 68, height: 128, depth: 44 },
    tags: ["razer", "deathadder", "gaming-mouse", "wireless", "lightweight"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p112",
    title: "Corsair K95 RGB Platinum",
    slug: "corsair-k95-rgb-platinum",
    description: "The Corsair K95 RGB Platinum is a premium mechanical gaming keyboard with Cherry MX switches and RGB lighting. The durable construction and customizable keys provide a responsive and personalized typing experience. The dedicated macro keys and advanced control ensure a competitive edge. This keyboard is perfect for gamers who want style and performance.",
    shortDescription: "Premium mechanical gaming keyboard with Cherry MX switches, RGB lighting, and macro keys.",
    price: 199.99,
    originalPrice: 229.99,
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 3456,
    stock: 30,
    brand: "Corsair",
    sku: "BLZ-GM-0006",
    weight: 1450,
    dimensions: { width: 460, height: 210, depth: 45 },
    tags: ["corsair", "k95", "gaming-keyboard", "mechanical", "rgb"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p113",
    title: "SteelSeries Arctis Nova 7",
    slug: "steelseries-arctis-nova-7",
    description: "The SteelSeries Arctis Nova 7 is a premium wireless gaming headset that delivers exceptional audio and comfort. The high-res audio drivers and 3D audio support create an immersive gaming experience. The long battery life and comfortable fit ensure hours of uninterrupted gameplay. This headset is perfect for gamers who value audio quality.",
    shortDescription: "Premium wireless gaming headset with high-res audio, 3D audio, and long battery life.",
    price: 199.99,
    originalPrice: 229.99,
    discountPercentage: 13,
    rating: 4.7,
    reviewCount: 4567,
    stock: 40,
    brand: "SteelSeries",
    sku: "BLZ-GM-0007",
    weight: 330,
    dimensions: { width: 190, height: 240, depth: 90 },
    tags: ["steelseries", "arctis-nova", "gaming-headset", "wireless", "audio"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p114",
    title: "Samsung Odyssey G9 Monitor",
    slug: "samsung-odyssey-g9-monitor",
    description: "The Samsung Odyssey G9 is a revolutionary gaming monitor with a 49-inch curved screen and 240Hz refresh rate. The QLED display and HDR support deliver stunning visuals with vivid colors and deep blacks. The fast response time and NVIDIA G-Sync compatibility ensure smooth and tear-free gaming. This monitor is perfect for immersive gaming experiences.",
    shortDescription: "49-inch curved gaming monitor with 240Hz refresh rate, QLED, and G-Sync.",
    price: 1499.99,
    originalPrice: 1699.99,
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 2345,
    stock: 12,
    brand: "Samsung",
    sku: "BLZ-GM-0008",
    weight: 12000,
    dimensions: { width: 1140, height: 520, depth: 420 },
    tags: ["samsung", "odyssey", "g9", "gaming-monitor", "curved"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p115",
    title: "WD_BLACK 2TB Gaming SSD",
    slug: "wd-black-2tb-gaming-ssd",
    description: "The WD_BLACK 2TB Gaming SSD is a high-performance storage solution designed for gamers who demand speed and capacity. The NVMe technology and fast read/write speeds ensure quick game loading and smooth gameplay. The compact design and durable construction make it perfect for gaming consoles and PCs. This SSD is a must-have for serious gamers.",
    shortDescription: "High-performance gaming SSD with NVMe technology, 2TB capacity, and fast speeds.",
    price: 179.99,
    originalPrice: 199.99,
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 3456,
    stock: 40,
    brand: "WD",
    sku: "BLZ-GM-0009",
    weight: 50,
    dimensions: { width: 22, height: 80, depth: 2.4 },
    tags: ["wd", "black", "gaming-ssd", "nvme", "storage"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p116",
    title: "Razer Kishi V2 Controller",
    slug: "razer-kishi-v2-controller",
    description: "The Razer Kishi V2 Controller is a versatile mobile gaming controller that transforms your phone into a handheld gaming console. The ergonomic design and responsive buttons provide a console-like gaming experience. The USB-C connectivity ensures low latency and compatibility with various devices. This controller is perfect for gamers who enjoy mobile gaming.",
    shortDescription: "Mobile gaming controller with ergonomic design, responsive buttons, and USB-C connectivity.",
    price: 99.99,
    originalPrice: 109.99,
    discountPercentage: 9,
    rating: 4.5,
    reviewCount: 4567,
    stock: 60,
    brand: "Razer",
    sku: "BLZ-GM-0010",
    weight: 150,
    dimensions: { width: 90, height: 45, depth: 30 },
    tags: ["razer", "kishi", "mobile-controller", "gaming", "usb-c"],
    categoryId: "cat-8",
    categoryName: "Gaming",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  })
]

// ============================================
// CATEGORY 9: BOOKS (10 Products) - p117 to p126
// ============================================

const books: Product[] = [
  createProduct({
    id: "p117",
    title: "The Psychology of Money",
    slug: "the-psychology-of-money",
    description: "The Psychology of Money by Morgan Housel is a timeless exploration of the human behavior that influences financial decisions. Through compelling stories and psychological insights, Housel reveals how people think about money and how they can make better financial choices. This book is a must-read for anyone seeking financial freedom.",
    shortDescription: "Timeless exploration of financial decision-making and behavioral psychology.",
    price: 24.99,
    originalPrice: 29.99,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 2345,
    stock: 100,
    brand: "Penguin Books",
    sku: "BLZ-BK-0001",
    weight: 300,
    dimensions: { width: 140, height: 210, depth: 20 },
    tags: ["psychology", "money", "finance", "behavioral", "personal-finance"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p118",
    title: "Atomic Habits",
    slug: "atomic-habits",
    description: "Atomic Habits by James Clear is a transformative guide to building and breaking habits. Clear's practical strategies and easy-to-follow framework make it a must-read for personal and professional growth. This book has helped millions improve their lives and achieve their goals.",
    shortDescription: "Transformative guide to building good habits and breaking bad ones.",
    price: 22.99,
    originalPrice: 26.99,
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 3456,
    stock: 120,
    brand: "Penguin Books",
    sku: "BLZ-BK-0002",
    weight: 280,
    dimensions: { width: 140, height: 210, depth: 18 },
    tags: ["habits", "self-improvement", "psychology", "personal-growth", "productivity"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z"
  }),
  createProduct({
    id: "p119",
    title: "The Silent Patient",
    slug: "the-silent-patient",
    description: "The Silent Patient by Alex Michaelides is a gripping psychological thriller that will keep you on the edge of your seat. The story of a woman who shoots her husband and then refuses to speak is a masterclass in suspense and psychological tension. This book is a must-read for fans of the genre.",
    shortDescription: "Gripping psychological thriller about a woman who refuses to speak after a shocking crime.",
    price: 19.99,
    originalPrice: 24.99,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 4567,
    stock: 80,
    brand: "Penguin Books",
    sku: "BLZ-BK-0003",
    weight: 350,
    dimensions: { width: 135, height: 200, depth: 25 },
    tags: ["thriller", "psychological", "suspense", "crime", "fiction"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p120",
    title: "Sapiens",
    slug: "sapiens",
    description: "Sapiens by Yuval Noah Harari is a groundbreaking narrative of human history, from the Stone Age to the present day. Harari explores how Homo sapiens became the dominant species on Earth, through cognitive, agricultural, and scientific revolutions. This book is a must-read for anyone curious about the history of humanity.",
    shortDescription: "Groundbreaking narrative of human history from the Stone Age to the present.",
    price: 29.99,
    originalPrice: 34.99,
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 5678,
    stock: 90,
    brand: "Penguin Books",
    sku: "BLZ-BK-0004",
    weight: 400,
    dimensions: { width: 150, height: 220, depth: 25 },
    tags: ["history", "humanity", "science", "evolution", "non-fiction"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p121",
    title: "Project Hail Mary",
    slug: "project-hail-mary",
    description: "Project Hail Mary by Andy Weir is a science fiction masterpiece that combines gripping adventure with cutting-edge science. The story of a lone astronaut who must save humanity from extinction is a thrilling journey through the cosmos. This book is a must-read for fans of hard science fiction.",
    shortDescription: "Thrilling science fiction adventure about a lone astronaut saving humanity.",
    price: 27.99,
    originalPrice: 32.99,
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 2345,
    stock: 70,
    brand: "Penguin Books",
    sku: "BLZ-BK-0005",
    weight: 380,
    dimensions: { width: 140, height: 210, depth: 22 },
    tags: ["science-fiction", "space", "adventure", "thriller", "science"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p122",
    title: "Becoming",
    slug: "becoming",
    description: "Becoming by Michelle Obama is a deeply personal and inspiring memoir that chronicles her journey from Chicago to the White House. Obama's story is one of resilience, hope, and the power of education. This book is a must-read for anyone seeking inspiration and a glimpse into the life of a remarkable woman.",
    shortDescription: "Inspiring memoir of Michelle Obama's journey from Chicago to the White House.",
    price: 24.99,
    originalPrice: 29.99,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 3456,
    stock: 100,
    brand: "Penguin Books",
    sku: "BLZ-BK-0006",
    weight: 350,
    dimensions: { width: 150, height: 220, depth: 25 },
    tags: ["memoir", "inspiration", "michelle-obama", "biography", "leadership"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p123",
    title: "The Creative Act",
    slug: "the-creative-act",
    description: "The Creative Act by Rick Rubin is a masterclass in creativity and artistic expression. Rubin shares insights from his legendary career as a music producer to guide readers on their creative journey. This book is a must-read for anyone seeking to unlock their creative potential.",
    shortDescription: "Masterclass in creativity by legendary music producer Rick Rubin.",
    price: 29.99,
    originalPrice: 34.99,
    discountPercentage: 14,
    rating: 4.7,
    reviewCount: 2345,
    stock: 80,
    brand: "Penguin Books",
    sku: "BLZ-BK-0007",
    weight: 320,
    dimensions: { width: 140, height: 210, depth: 20 },
    tags: ["creativity", "art", "music", "rick-rubin", "inspiration"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p124",
    title: "The Four Agreements",
    slug: "the-four-agreements",
    description: "The Four Agreements by Don Miguel Ruiz is a transformative guide to personal freedom and happiness. Ruiz draws on ancient Toltec wisdom to offer a powerful code of conduct for living a life of peace and fulfillment. This book is a must-read for anyone seeking spiritual growth and emotional well-being.",
    shortDescription: "Transformative guide to personal freedom based on ancient Toltec wisdom.",
    price: 19.99,
    originalPrice: 24.99,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 6789,
    stock: 120,
    brand: "Penguin Books",
    sku: "BLZ-BK-0008",
    weight: 200,
    dimensions: { width: 130, height: 180, depth: 15 },
    tags: ["self-help", "spirituality", "wisdom", "personal-growth", "toltec"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  }),
  createProduct({
    id: "p125",
    title: "Dune",
    slug: "dune",
    description: "Dune by Frank Herbert is a monumental science fiction epic set on a desert planet where a young man must embrace his destiny to save his people. This classic novel explores themes of power, ecology, and human potential. This book is a must-read for any science fiction enthusiast.",
    shortDescription: "Epic science fiction novel set on the desert planet Arrakis.",
    price: 22.99,
    originalPrice: 27.99,
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 5678,
    stock: 90,
    brand: "Penguin Books",
    sku: "BLZ-BK-0009",
    weight: 450,
    dimensions: { width: 150, height: 220, depth: 30 },
    tags: ["science-fiction", "epic", "dune", "classic", "adventure"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-20T10:00:00Z",
    updatedAt: "2024-08-20T10:00:00Z"
  }),
  createProduct({
    id: "p126",
    title: "Where the Crawdads Sing",
    slug: "where-the-crawdads-sing",
    description: "Where the Crawdads Sing by Delia Owens is a beautiful and haunting novel about a young woman who grows up isolated in the marshes of North Carolina. The story is a powerful exploration of loneliness, love, and the natural world. This book is a must-read for fans of literary fiction and nature writing.",
    shortDescription: "Haunting novel about a young woman growing up alone in the North Carolina marshes.",
    price: 24.99,
    originalPrice: 29.99,
    discountPercentage: 17,
    rating: 4.7,
    reviewCount: 4567,
    stock: 80,
    brand: "Penguin Books",
    sku: "BLZ-BK-0010",
    weight: 350,
    dimensions: { width: 140, height: 210, depth: 25 },
    tags: ["literary-fiction", "nature", "loneliness", "love", "mystery"],
    categoryId: "cat-9",
    categoryName: "Books",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-25T10:00:00Z",
    updatedAt: "2024-08-25T10:00:00Z"
  })
]

// ============================================
// CATEGORY 10: ORGANIC GROCERIES (12 Products) - p127 to p138
// ============================================

const groceries: Product[] = [
  createProduct({
    id: "p127",
    title: "Organic Honey 500g",
    slug: "organic-honey-500g",
    description: "Our organic honey is sourced from sustainable farms and is 100% pure and natural. Rich in antioxidants and nutrients, this honey is the perfect addition to your daily diet. It can be used as a sweetener, in tea, or as a health supplement.",
    shortDescription: "Pure and natural organic honey, rich in antioxidants and nutrients.",
    price: 18.99,
    originalPrice: 22.99,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 2345,
    stock: 150,
    brand: "Nature's Best",
    sku: "BLZ-OG-0001",
    weight: 500,
    dimensions: { width: 70, height: 120, depth: 70 },
    tags: ["organic", "honey", "natural", "antioxidants", "sweetener"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-10T10:00:00Z"
  }),
  createProduct({
    id: "p128",
    title: "Organic Green Tea 100g",
    slug: "organic-green-tea-100g",
    description: "Our organic green tea is sourced from the finest tea gardens and is rich in antioxidants. This green tea offers a delicate, refreshing flavor and has numerous health benefits. Perfect for a healthy lifestyle.",
    shortDescription: "Premium organic green tea with a delicate, refreshing flavor and antioxidants.",
    price: 14.99,
    originalPrice: 17.99,
    discountPercentage: 17,
    rating: 4.7,
    reviewCount: 3456,
    stock: 200,
    brand: "Nature's Best",
    sku: "BLZ-OG-0002",
    weight: 100,
    dimensions: { width: 50, height: 100, depth: 50 },
    tags: ["organic", "green-tea", "antioxidants", "health", "beverage"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-06-20T10:00:00Z",
    updatedAt: "2024-06-20T10:00:00Z"
  }),
  createProduct({
    id: "p129",
    title: "Organic Coconut Oil 500ml",
    slug: "organic-coconut-oil-500ml",
    description: "Our organic coconut oil is cold-pressed from fresh coconuts to preserve its natural goodness. It is versatile and can be used for cooking, skincare, and haircare. The oil is rich in healthy fats and has numerous health benefits.",
    shortDescription: "Cold-pressed organic coconut oil, versatile for cooking, skincare, and haircare.",
    price: 22.99,
    originalPrice: 26.99,
    discountPercentage: 15,
    rating: 4.8,
    reviewCount: 4567,
    stock: 120,
    brand: "Nature's Best",
    sku: "BLZ-OG-0003",
    weight: 500,
    dimensions: { width: 70, height: 140, depth: 70 },
    tags: ["organic", "coconut-oil", "cold-pressed", "versatile", "health"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-07-01T10:00:00Z",
    updatedAt: "2024-07-01T10:00:00Z"
  }),
  createProduct({
    id: "p130",
    title: "Organic Oats 1kg",
    slug: "organic-oats-1kg",
    description: "Our organic oats are a nutritious and versatile food that can be enjoyed in a variety of ways. Rich in fiber and nutrients, they are perfect for a healthy breakfast. The oats are sourced from sustainable farms and are 100% organic.",
    shortDescription: "Nutritious organic oats, perfect for a healthy and versatile breakfast.",
    price: 8.99,
    originalPrice: 11.99,
    discountPercentage: 25,
    rating: 4.6,
    reviewCount: 5678,
    stock: 250,
    brand: "Nature's Best",
    sku: "BLZ-OG-0004",
    weight: 1000,
    dimensions: { width: 100, height: 180, depth: 100 },
    tags: ["organic", "oats", "breakfast", "fiber", "healthy"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-10T10:00:00Z",
    updatedAt: "2024-07-10T10:00:00Z"
  }),
  createProduct({
    id: "p131",
    title: "Organic Almonds 500g",
    slug: "organic-almonds-500g",
    description: "Our organic almonds are a delicious and nutritious snack, rich in healthy fats, protein, and fiber. They are perfect for snacking, baking, or adding to your favorite recipes. The almonds are sourced from sustainable farms.",
    shortDescription: "Delicious and nutritious organic almonds, perfect for snacking and baking.",
    price: 19.99,
    originalPrice: 24.99,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 4567,
    stock: 180,
    brand: "Nature's Best",
    sku: "BLZ-OG-0005",
    weight: 500,
    dimensions: { width: 80, height: 150, depth: 80 },
    tags: ["organic", "almonds", "snack", "nuts", "protein"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-15T10:00:00Z"
  }),
  createProduct({
    id: "p132",
    title: "Organic Quinoa 1kg",
    slug: "organic-quinoa-1kg",
    description: "Our organic quinoa is a protein-rich superfood that is naturally gluten-free. It is a versatile grain that can be used in salads, side dishes, and main courses. The quinoa is sourced from sustainable farms and is 100% organic.",
    shortDescription: "Protein-rich organic quinoa, versatile and naturally gluten-free.",
    price: 14.99,
    originalPrice: 17.99,
    discountPercentage: 17,
    rating: 4.6,
    reviewCount: 3456,
    stock: 150,
    brand: "Nature's Best",
    sku: "BLZ-OG-0006",
    weight: 1000,
    dimensions: { width: 100, height: 180, depth: 100 },
    tags: ["organic", "quinoa", "superfood", "gluten-free", "protein"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-07-20T10:00:00Z",
    updatedAt: "2024-07-20T10:00:00Z"
  }),
  createProduct({
    id: "p133",
    title: "Organic Chia Seeds 500g",
    slug: "organic-chia-seeds-500g",
    description: "Our organic chia seeds are a nutrient-dense superfood, packed with omega-3 fatty acids, fiber, and protein. They can be added to smoothies, yogurt, or used to make delicious puddings. The seeds are sourced from sustainable farms.",
    shortDescription: "Nutrient-dense organic chia seeds, rich in omega-3, fiber, and protein.",
    price: 12.99,
    originalPrice: 15.99,
    discountPercentage: 19,
    rating: 4.8,
    reviewCount: 3456,
    stock: 200,
    brand: "Nature's Best",
    sku: "BLZ-OG-0007",
    weight: 500,
    dimensions: { width: 80, height: 150, depth: 80 },
    tags: ["organic", "chia-seeds", "superfood", "omega-3", "healthy"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z"
  }),
  createProduct({
    id: "p134",
    title: "Organic Olive Oil 750ml",
    slug: "organic-olive-oil-750ml",
    description: "Our organic olive oil is extra virgin and cold-pressed from premium olives. It is rich in antioxidants and healthy fats, making it ideal for cooking and finishing dishes. The oil has a robust, fruity flavor.",
    shortDescription: "Premium organic extra virgin olive oil, cold-pressed and full of flavor.",
    price: 29.99,
    originalPrice: 34.99,
    discountPercentage: 14,
    rating: 4.9,
    reviewCount: 2345,
    stock: 100,
    brand: "Organic Valley",
    sku: "BLZ-OG-0008",
    weight: 750,
    dimensions: { width: 80, height: 200, depth: 80 },
    tags: ["organic", "olive-oil", "extra-virgin", "cold-pressed", "cooking"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-05T10:00:00Z",
    updatedAt: "2024-08-05T10:00:00Z"
  }),
  createProduct({
    id: "p135",
    title: "Organic Maple Syrup 250ml",
    slug: "organic-maple-syrup-250ml",
    description: "Our organic maple syrup is sourced from sustainable maple trees and is 100% pure and natural. It has a rich, authentic flavor that is perfect for pancakes, waffles, and baking. The syrup is a natural source of antioxidants and minerals.",
    shortDescription: "Pure organic maple syrup with a rich, authentic flavor, perfect for pancakes.",
    price: 16.99,
    originalPrice: 20.99,
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 3456,
    stock: 130,
    brand: "Nature's Best",
    sku: "BLZ-OG-0009",
    weight: 250,
    dimensions: { width: 60, height: 120, depth: 60 },
    tags: ["organic", "maple-syrup", "pancake", "natural", "sweetener"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-10T10:00:00Z",
    updatedAt: "2024-08-10T10:00:00Z"
  }),
  createProduct({
    id: "p136",
    title: "Organic Turmeric Powder 200g",
    slug: "organic-turmeric-powder-200g",
    description: "Our organic turmeric powder is sourced from premium turmeric roots and is known for its vibrant color and earthy flavor. Rich in curcumin, it has numerous health benefits and is a staple in many cuisines. The powder is perfect for cooking, teas, and wellness.",
    shortDescription: "Premium organic turmeric powder, vibrant color, earthy flavor, and health benefits.",
    price: 12.99,
    originalPrice: 15.99,
    discountPercentage: 19,
    rating: 4.8,
    reviewCount: 4567,
    stock: 180,
    brand: "Nature's Best",
    sku: "BLZ-OG-0010",
    weight: 200,
    dimensions: { width: 70, height: 100, depth: 70 },
    tags: ["organic", "turmeric", "powder", "spice", "health"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-08-15T10:00:00Z",
    updatedAt: "2024-08-15T10:00:00Z"
  }),
  createProduct({
    id: "p137",
    title: "Organic Dried Figs 400g",
    slug: "organic-dried-figs-400g",
    description: "Our organic dried figs are a delicious and nutritious snack, packed with fiber, vitamins, and minerals. They are naturally sweet and make a perfect addition to your pantry. The figs are sourced from sustainable farms and are 100% organic.",
    shortDescription: "Delicious and nutritious organic dried figs, naturally sweet and healthy.",
    price: 15.99,
    originalPrice: 19.99,
    discountPercentage: 20,
    rating: 4.6,
    reviewCount: 2345,
    stock: 120,
    brand: "Nature's Best",
    sku: "BLZ-OG-0011",
    weight: 400,
    dimensions: { width: 80, height: 150, depth: 80 },
    tags: ["organic", "dried-figs", "snack", "fiber", "healthy"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-20T10:00:00Z",
    updatedAt: "2024-08-20T10:00:00Z"
  }),
  createProduct({
    id: "p138",
    title: "Organic Brown Rice 1kg",
    slug: "organic-brown-rice-1kg",
    description: "Our organic brown rice is a nutritious whole grain that is rich in fiber and essential nutrients. It has a nutty flavor and chewy texture, making it a versatile ingredient for many dishes. The rice is sourced from sustainable farms.",
    shortDescription: "Nutritious organic brown rice, rich in fiber and with a nutty flavor.",
    price: 9.99,
    originalPrice: 12.99,
    discountPercentage: 23,
    rating: 4.5,
    reviewCount: 4567,
    stock: 200,
    brand: "Nature's Best",
    sku: "BLZ-OG-0012",
    weight: 1000,
    dimensions: { width: 100, height: 180, depth: 100 },
    tags: ["organic", "brown-rice", "whole-grain", "fiber", "healthy"],
    categoryId: "cat-10",
    categoryName: "Organic Groceries",
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    createdAt: "2024-08-25T10:00:00Z",
    updatedAt: "2024-08-25T10:00:00Z"
  })
]

// ============================================
// EXPORT ALL PRODUCTS - COMPLETE (138 Products)
// ============================================

export const products = [
  ...electronics,    // 20 products (p1-p20)
  ...fashion,        // 20 products (p21-p40)
  ...footwear,       // 15 products (p41-p55)
  ...watches,        // 12 products (p56-p67)
  ...homeLiving,     // 15 products (p68-p82)
  ...beauty,         // 12 products (p83-p94)
  ...fitness,        // 12 products (p95-p106)
  ...gaming,         // 10 products (p107-p116)
  ...books,          // 10 products (p117-p126)
  ...groceries       // 12 products (p127-p138)
]

// ============================================
// COMPLETE CATEGORIES WITH COUNTS
// ============================================

// Type for categories with product counts
interface CategoryWithCount {
  id: string
  name: string
  slug: string
  image: string
  count: number
  description?: string
}

export type Category = CategoryWithCount

export const categoriesWithCount: CategoryWithCount[] = [
  { 
    id: "cat-1", 
    name: "Electronics", 
    slug: "electronics", 
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
    count: electronics.length,
    description: "Latest gadgets and electronic devices"
  },
  { 
    id: "cat-2", 
    name: "Fashion", 
    slug: "fashion", 
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
    count: fashion.length,
    description: "Premium clothing and accessories"
  },
  { 
    id: "cat-3", 
    name: "Footwear", 
    slug: "footwear", 
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
    count: footwear.length,
    description: "Shoes for every occasion"
  },
  { 
    id: "cat-4", 
    name: "Watches", 
    slug: "watches", 
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop",
    count: watches.length,
    description: "Luxury timepieces"
  },
  { 
    id: "cat-5", 
    name: "Home & Living", 
    slug: "home-living", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    count: homeLiving.length,
    description: "Elevate your living space"
  },
  { 
    id: "cat-6", 
    name: "Beauty & Personal Care", 
    slug: "beauty-personal-care", 
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=400&fit=crop",
    count: beauty.length,
    description: "Premium beauty and grooming products"
  },
  { 
    id: "cat-7", 
    name: "Fitness & Sports", 
    slug: "fitness-sports", 
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    count: fitness.length,
    description: "Gear for active lifestyles"
  },
  { 
    id: "cat-8", 
    name: "Gaming", 
    slug: "gaming", 
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop",
    count: gaming.length,
    description: "Next-gen gaming equipment"
  },
  { 
    id: "cat-9", 
    name: "Books", 
    slug: "books", 
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop",
    count: books.length,
    description: "Knowledge and inspiration"
  },
  { 
    id: "cat-10", 
    name: "Organic Groceries", 
    slug: "organic-groceries", 
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    count: groceries.length,
    description: "Fresh and organic produce"
  }
]

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug)
}

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(categoryId: string) {
  return products.filter(p => p.categoryId === categoryId)
}

export function getFeaturedProducts(limit?: number) {
  const featured = products.filter(p => p.isFeatured)
  return limit ? featured.slice(0, limit) : featured
}

export function getTrendingProducts(limit?: number) {
  const trending = products.filter(p => p.isTrending)
  return limit ? trending.slice(0, limit) : trending
}

export function getBestSellerProducts(limit?: number) {
  const bestsellers = products.filter(p => p.isBestSeller)
  return limit ? bestsellers.slice(0, limit) : bestsellers
}

export function getNewArrivals(limit?: number) {
  const newArrivals = products.filter(p => p.isNewArrival)
  return limit ? newArrivals.slice(0, limit) : newArrivals
}

export function getFlashSaleProducts(limit?: number) {
  const flashSale = products.filter(p => p.discountPercentage >= 10)
  return limit ? flashSale.slice(0, limit) : flashSale
}

export function getRelatedProducts(productId: string, limit = 4) {
  const product = products.find(p => p.id === productId)
  if (!product) return []
  const seed = productId.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return products
    .filter(p => p.categoryId === product.categoryId && p.id !== productId)
    .sort((a, b) => {
      const ha = (a.id.charCodeAt(0) * seed + a.id.charCodeAt(a.id.length - 1)) % 100
      const hb = (b.id.charCodeAt(0) * seed + b.id.charCodeAt(b.id.length - 1)) % 100
      return ha - hb
    })
    .slice(0, limit)
}

export function searchProducts(query: string) {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return products.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
  )
}
