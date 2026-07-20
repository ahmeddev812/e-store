// scripts/fix-image-mapping.js
const fs = require('fs');
const path = require('path');

// ============================================
// STEP 1: READ ALL IMAGE FILES FROM FOLDER
// ============================================

const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
const existingImages = fs.readdirSync(productsDir);

// Separate thumbnails and gallery images
const thumbnails = existingImages.filter(img => 
  !img.includes('-1') && !img.includes('-2') && !img.includes('-3')
);
const galleryImages = existingImages.filter(img => 
  img.includes('-1') || img.includes('-2') || img.includes('-3')
);

console.log(`📸 Total images: ${existingImages.length}`);
console.log(`📸 Thumbnails: ${thumbnails.length}`);
console.log(`📸 Gallery: ${galleryImages.length}\n`);

// ============================================
// STEP 2: CREATE MAPPING (slug → image name)
// ============================================

// Manually map common product slugs to their image names
// This is the CORRECT way - each product gets its own image
const imageMapping = {
  // ===== ELECTRONICS =====
  'wireless-bluetooth-headphones': 'headphones',
  'smart-watch-pro': 'smartwatch',
  '4k-ultra-hd-monitor-27': 'monitor',
  'wireless-charging-pad': 'charging-pad',
  'smart-home-speaker': 'speaker',
  'mechanical-gaming-keyboard': 'keyboard',
  'portable-bluetooth-speaker': 'bluetooth-speaker',
  'noise-cancelling-earbuds': 'earbuds',
  'smart-led-light-bulbs': 'led-bulbs',
  'ipad-pro-12-9': 'ipad-pro',
  'macbook-air-m3': 'macbook-air',
  'sony-playstation-5': 'ps5',

  // ===== FASHION =====
  'premium-leather-jacket': 'leather-jacket',
  'designer-sunglasses': 'sunglasses',
  'cashmere-wool-scarf': 'cashmere-scarf',
  'designer-handbag': 'handbag',
  'leather-travel-bag': 'travel-bag',
  'nike-air-max-270': 'nike-airmax',
  'adidas-ultraboost': 'adidas-ultraboost',
  'mens-wool-suit': 'wool-suit',
  'womens-leather-boots': 'leather-boots',
  'cashmere-sweater': 'cashmere-sweater',
  'designer-watch': 'designer-watch',
  'silk-tie-collection': 'silk-tie',

  // ===== HOME & GARDEN =====
  'ergonomic-office-chair': 'office-chair',
  'professional-chef-knife': 'chef-knife',
  'indoor-plant-collection': 'indoor-plants',
  'memory-foam-mattress': 'mattress',
  'air-fryer-6qt': 'air-fryer',
  'coffee-maker-12-cup': 'coffee-maker',
  'robot-vacuum-cleaner': 'robot-vacuum',
  'cookware-set-10-piece': 'cookware-set',
  'garden-tool-set-5-piece': 'garden-tools',
  'led-desk-lamp': 'desk-lamp',
  'outdoor-furniture-set': 'outdoor-furniture',

  // ===== BEAUTY =====
  'organic-skincare-set': 'skincare-set',
  'premium-perfume-gift-set': 'perfume-set',
  'hair-styling-kit': 'hair-styling-kit',
  'makeup-set-20-piece': 'makeup-set',
  'face-serum-vitamin-c': 'vitamin-c-serum',
  'nail-polish-set-12-pack': 'nail-polish',
  'facial-cleansing-brush': 'cleansing-brush',
  'lipstick-collection-6-pack': 'lipstick-set',
  'hair-dryer-professional': 'pro-hair-dryer',
  'eyebrow-kit-3-piece': 'eyebrow-kit',
  'mascara-waterproof': 'mascara',

  // ===== SPORTS =====
  'yoga-mat-premium': 'yoga-mat',
  'protein-powder-vanilla': 'protein-powder',
  'dumbbell-set-50lbs': 'dumbbell-set',
  'resistance-bands-set-5-piece': 'resistance-bands',
  'jump-rope-speed': 'jump-rope',
  'pull-up-bar': 'pull-up-bar',
  'exercise-mat-6mm': 'exercise-mat',
  'protein-shaker-bottle': 'shaker-bottle',
  'gym-gloves': 'gym-gloves',
  'yoga-block-set-2-piece': 'yoga-blocks',

  // ===== AUTOMOTIVE =====
  'car-dash-camera': 'dash-camera',
  'car-phone-mount': 'phone-mount',
  'car-seat-cover-set': 'seat-cover',
  'car-air-freshener-set': 'air-freshener',
  'windshield-sun-shade': 'sun-shade',
  'portable-jump-starter': 'jump-starter',
  'tire-pressure-gauge': 'tire-gauge',
  'car-trash-can': 'trash-can',
  'car-vacuum-cleaner': 'car-vacuum',
  'emergency-road-kit': 'road-kit',

  // ===== GROCERIES =====
  'organic-green-tea-collection': 'green-tea',
  'premium-coffee-beans': 'coffee-beans',
  'organic-honey-500g': 'organic-honey',
  'extra-virgin-olive-oil': 'olive-oil',
  'quinoa-organic-1kg': 'quinoa',
  'organic-spice-set-6-pack': 'spice-set',
  'granola-premium-500g': 'granola',
  'coconut-oil-organic': 'coconut-oil',
  'pasta-collection-4-pack': 'pasta-set',
  'dried-fruit-mix-500g': 'dried-fruit',

  // ===== BOOKS =====
  'best-selling-novel-collection': 'novel-collection',
  'kindle-paperwhite': 'kindle',
  'cookbook-gourmet-recipes': 'cookbook',
  'self-help-mindset-mastery': 'self-help-book',
  'childrens-story-collection': 'children-books',
  'biography-celebrity-life': 'biography-book',
  'science-fiction-trilogy': 'sci-fi-trilogy',
  'fitness-guide-workout-plan': 'fitness-book',
  'history-encyclopedia': 'history-encyclopedia',

  // ===== TOYS & GAMES =====
  'lego-creator-expert': 'lego-set',
  'nintendo-switch-oled': 'nintendo-switch',
  'board-game-collection': 'board-games',
  'remote-control-car': 'rc-car',
  'puzzle-1000-pieces': 'jigsaw-puzzle',
  'barbie-dreamhouse': 'barbie-dreamhouse',
  'action-figure-set-6-pack': 'action-figures',
  'playdough-set-20-pack': 'playdough',
  'rc-drone-with-camera': 'rc-drone',

  // ===== JEWELRY =====
  'diamond-engagement-ring': 'diamond-ring',
  'gold-chain-necklace': 'gold-necklace',
  'pearl-earrings-set': 'pearl-earrings',
  'silver-bracelet': 'silver-bracelet',
  'sapphire-pendant': 'sapphire-pendant',
  'mens-silver-ring': 'mens-silver-ring',
  'crystal-necklace': 'crystal-necklace',
  'pearl-necklace': 'pearl-necklace',

  // ===== PET SUPPLIES =====
  'premium-dog-bed': 'dog-bed',
  'automatic-pet-feeder': 'pet-feeder',
  'cat-tree-tower': 'cat-tree',
  'pet-grooming-kit': 'grooming-kit',
  'dog-leash-set': 'dog-leash',
  'aquarium-filter-system': 'aquarium-filter',
  'bird-cage-large': 'bird-cage',
  'pet-carrier-backpack': 'pet-carrier',

  // ===== OFFICE =====
  'standing-desk': 'standing-desk',
  'wireless-mouse-keyboard': 'mouse-keyboard',
  'office-chair-mat': 'chair-mat',
  'monitor-stand': 'monitor-stand',
  'document-scanner': 'document-scanner',
  'desk-organizer-set': 'desk-organizer',
  'usb-c-hub-8-in-1': 'usb-c-hub',
  'whiteboard-magnetic': 'whiteboard',
  'desktop-computer': 'desktop-computer',
};

// ============================================
// STEP 3: UPDATE products.ts
// ============================================

const productsFile = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(productsFile, 'utf8');

let updatedCount = 0;
let notFound = [];

for (const [slug, imageName] of Object.entries(imageMapping)) {
  // Check if image exists
  const thumbExists = thumbnails.some(img => img === `${imageName}.jpg`);
  if (!thumbExists) {
    notFound.push(`${slug} → ${imageName}.jpg (missing)`);
    continue;
  }
  
  // Find the product block
  const slugRegex = new RegExp(`slug:\\s*["']${slug}["']`, 'g');
  const slugMatch = slugRegex.exec(content);
  
  if (!slugMatch) {
    notFound.push(`${slug} (slug not found)`);
    continue;
  }
  
  const startIndex = slugMatch.index;
  let braceCount = 0;
  let endIndex = startIndex;
  
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i;
        break;
      }
    }
  }
  
  if (endIndex <= startIndex) continue;
  
  const block = content.substring(startIndex, endIndex + 1);
  let newBlock = block;
  
  // Update thumbnail
  const thumbRegex = /thumbnail:\s*["'][^"']*["']/;
  const newThumb = `thumbnail: "/images/products/${imageName}.jpg"`;
  newBlock = newBlock.replace(thumbRegex, newThumb);
  
  // Update images array - use real gallery images if they exist
  const galleryExists1 = galleryImages.some(img => img === `${imageName}-1.jpg`);
  const galleryExists2 = galleryImages.some(img => img === `${imageName}-2.jpg`);
  
  let galleryPaths = [];
  if (galleryExists1) galleryPaths.push(`/images/products/${imageName}-1.jpg`);
  if (galleryExists2) galleryPaths.push(`/images/products/${imageName}-2.jpg`);
  
  const imagesRegex = /images:\s*\[[^\]]*\]/;
  const newImages = galleryPaths.length > 0 
    ? `images: [${galleryPaths.map(p => `"${p}"`).join(', ')}]`
    : 'images: []';
  newBlock = newBlock.replace(imagesRegex, newImages);
  
  // Replace in content
  content = content.substring(0, startIndex) + newBlock + content.substring(endIndex + 1);
  updatedCount++;
}

fs.writeFileSync(productsFile, content);

console.log('=' .repeat(50));
console.log('📊 SUMMARY:');
console.log(`✅ Products updated: ${updatedCount}`);
console.log(`❌ Products with issues: ${notFound.length}`);

if (notFound.length > 0 && notFound.length < 20) {
  console.log('\n❌ Issues:');
  notFound.forEach(msg => console.log(`  - ${msg}`));
}
console.log(`\n📂 Location: data/products.ts`);