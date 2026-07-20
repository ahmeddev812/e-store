// scripts/download-new-products.js
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================
// NEW PRODUCT IMAGE MAPPING
// ============================================

const newProducts = [
  // Fashion (cat-2) - 4 new
  { name: 'leather-boots', gallery: 1 },
  { name: 'cashmere-sweater', gallery: 1 },
  { name: 'designer-watch', gallery: 1 },
  { name: 'silk-tie', gallery: 1 },
  
  // Home & Garden (cat-3) - 6 new
  { name: 'coffee-maker', gallery: 1 },
  { name: 'robot-vacuum', gallery: 1 },
  { name: 'cookware-set', gallery: 1 },
  { name: 'garden-tools', gallery: 1 },
  { name: 'desk-lamp', gallery: 1 },
  { name: 'outdoor-furniture', gallery: 1 },
  
  // Beauty (cat-4) - 8 new
  { name: 'makeup-set', gallery: 1 },
  { name: 'vitamin-c-serum', gallery: 1 },
  { name: 'nail-polish', gallery: 1 },
  { name: 'cleansing-brush', gallery: 1 },
  { name: 'lipstick-set', gallery: 1 },
  { name: 'pro-hair-dryer', gallery: 1 },
  { name: 'eyebrow-kit', gallery: 1 },
  { name: 'mascara', gallery: 1 },
  
  // Sports (cat-5) - 7 new
  { name: 'resistance-bands', gallery: 1 },
  { name: 'jump-rope', gallery: 1 },
  { name: 'pull-up-bar', gallery: 1 },
  { name: 'exercise-mat', gallery: 1 },
  { name: 'shaker-bottle', gallery: 1 },
  { name: 'gym-gloves', gallery: 1 },
  { name: 'yoga-blocks', gallery: 1 },
  
  // Automotive (cat-6) - 8 new
  { name: 'seat-cover', gallery: 1 },
  { name: 'air-freshener', gallery: 1 },
  { name: 'sun-shade', gallery: 1 },
  { name: 'jump-starter', gallery: 1 },
  { name: 'tire-gauge', gallery: 1 },
  { name: 'trash-can', gallery: 1 },
  { name: 'car-vacuum', gallery: 1 },
  { name: 'road-kit', gallery: 1 },
  
  // Groceries (cat-7) - 8 new
  { name: 'organic-honey', gallery: 1 },
  { name: 'olive-oil', gallery: 1 },
  { name: 'quinoa', gallery: 1 },
  { name: 'spice-set', gallery: 1 },
  { name: 'granola', gallery: 1 },
  { name: 'coconut-oil', gallery: 1 },
  { name: 'pasta-set', gallery: 1 },
  { name: 'dried-fruit', gallery: 1 },
  
  // Books (cat-8) - 7 new
  { name: 'cookbook', gallery: 1 },
  { name: 'self-help-book', gallery: 1 },
  { name: 'children-books', gallery: 1 },
  { name: 'biography-book', gallery: 1 },
  { name: 'sci-fi-trilogy', gallery: 1 },
  { name: 'fitness-book', gallery: 1 },
  { name: 'history-encyclopedia', gallery: 1 },
  
  // Toys & Games (cat-9) - 7 new
  { name: 'board-games', gallery: 1 },
  { name: 'rc-car', gallery: 1 },
  { name: 'jigsaw-puzzle', gallery: 1 },
  { name: 'barbie-dreamhouse', gallery: 1 },
  { name: 'action-figures', gallery: 1 },
  { name: 'playdough', gallery: 1 },
  { name: 'rc-drone', gallery: 1 },
  
  // Jewelry (cat-10) - 6 new
  { name: 'pearl-earrings', gallery: 1 },
  { name: 'silver-bracelet', gallery: 1 },
  { name: 'sapphire-pendant', gallery: 1 },
  { name: 'mens-silver-ring', gallery: 1 },
  { name: 'crystal-necklace', gallery: 1 },
  { name: 'pearl-necklace', gallery: 1 },
  
  // Pet Supplies (cat-11) - 6 new
  { name: 'cat-tree', gallery: 1 },
  { name: 'grooming-kit', gallery: 1 },
  { name: 'dog-leash', gallery: 1 },
  { name: 'aquarium-filter', gallery: 1 },
  { name: 'bird-cage', gallery: 1 },
  { name: 'pet-carrier', gallery: 1 },
  
  // Office (cat-12) - 7 new
  { name: 'chair-mat', gallery: 1 },
  { name: 'monitor-stand', gallery: 1 },
  { name: 'document-scanner', gallery: 1 },
  { name: 'desk-organizer', gallery: 1 },
  { name: 'usb-c-hub', gallery: 1 },
  { name: 'whiteboard', gallery: 1 },
  { name: 'desktop-computer', gallery: 1 },
];

// ============================================
// GENERATE UNSPLASH URLS
// ============================================

function getUnsplashUrl(seed) {
  return `https://images.unsplash.com/photo-${seed}?w=600&h=600&fit=crop`;
}

// Working Unsplash photo IDs
const photoIds = [
  '1505740420928-5e560c06d30e', // headphones
  '1523275335684-37898b6baf30', // watch
  '1546868871-af0de0ae72c3', // smartwatch
  '1527443224154-c4a3942d3acf', // monitor
  '1586953208448-b95a79798f07', // charging
  '1589003077984-894e133dabab', // speaker
  '1618384887929-16ec33fab9ef', // keyboard
  '1608043152269-423dbba4e7e1', // bluetooth
  '1572297793406-d0f48e7b5d2a', // led
  '1544244015-0df4b3ffc6b0', // ipad
  '1611186871348-b1ce696e52c9', // macbook
  '1607853202273-797f1c22a38e', // ps5
  '1551028719-00167b16eac5', // leather jacket
  '1572635196237-14b3f281503f', // sunglasses
  '1520903920243-00d872a2d1c8', // scarf
  '1584917865442-de89df76afd3', // handbag
  '1553062407-98eeb64c6a62', // travel bag
  '1542291026-7eec264c27ff', // nike
  '1608231387042-66d1773070a5', // adidas
  '1592878904946-b3cd8ae243d0', // suit
  '1592078615290-033ee584e267', // office chair
  '1563612116625-3012372fccce', // chef knife
  '1485955900006-10f4d324d411', // plants
  '1505693416388-ac5ce068fe85', // mattress
  '1585515320310-259814833e62', // air fryer
  '1570194065650-d99fb4b38c5f', // skincare
  '1541643600914-78b084683601', // perfume
  '1522338140262-f46f5913618a', // hair kit
  '1601925260368-ae2f83cf8b7f', // yoga mat
  '1593095948071-474c5cc2c1cf', // protein
  '1586401100295-7a8096fd231a', // dumbbell
  '1544636331-e26879cd4d9b', // dash cam
  '1618354691373-d851c5c3a990', // phone mount
  '1556679343-c7306c1976bc', // green tea
  '1442512595331-e89e73853f31', // coffee
  '1512820790803-83ca734da794', // novels
  '1572569511254-d8f925fe2cbb', // kindle
  '1587654780291-39c9404d746b', // lego
  '1621259182978-fbf93132d3a9', // nintendo
  '1605100804763-247f67b3557e', // diamond ring
  '1611652022419-a9419f74343d', // gold necklace
  '1541599540903-216a46ca1dc0', // dog bed
  '1589924691995-4002509e3c92', // pet feeder
  '1593642634524-b40b5baae6bb', // standing desk
  '1615663245857-ac93bb7c39e7', // mouse keyboard
  '1505740420928-5e560c06d30e', // headphone-2
  '1583394838336-acd977736f90', // headphone-1
  '1546868871-af0de0ae72c3', // smartwatch-1
  '1523275335684-37898b6baf30', // smartwatch-2
  '1586210579191-33b45e38fa2c', // monitor-1
  '1527443224154-c4a3942d3acf', // monitor-2
  '1586953208448-b95a79798f07', // charging-1
  '1589003077984-894e133dabab', // speaker-1
  '1618384887929-16ec33fab9ef', // keyboard-1
  '1608043152269-423dbba4e7e1', // bluetooth-1
  '1505740420928-5e560c06d30e', // earbuds-1
  '1572297793406-d0f48e7b5d2a', // led-1
  '1544244015-0df4b3ffc6b0', // ipad-1
  '1611186871348-b1ce696e52c9', // macbook-1
  '1607853202273-797f1c22a38e', // ps5-1
  '1520975954732-35dd22299614', // leather-1
  '1572635196237-14b3f281503f', // sunglasses-1
  '1520903920243-00d872a2d1c8', // scarf-1
  '1584917865442-de89df76afd3', // handbag-1
  '1553062407-98eeb64c6a62', // travel-1
  '1542291026-7eec264c27ff', // nike-1
  '1608231387042-66d1773070a5', // adidas-1
  '1592878904946-b3cd8ae243d0', // suit-1
  '1592078615290-033ee584e267', // chair-1
  '1563612116625-3012372fccce', // knife-1
  '1485955900006-10f4d324d411', // plants-1
  '1505693416388-ac5ce068fe85', // mattress-1
  '1585515320310-259814833e62', // airfryer-1
  '1570194065650-d99fb4b38c5f', // skincare-1
  '1541643600914-78b084683601', // perfume-1
  '1522338140262-f46f5913618a', // hair-1
  '1601925260368-ae2f83cf8b7f', // yoga-1
  '1593095948071-474c5cc2c1cf', // protein-1
  '1586401100295-7a8096fd231a', // dumbbell-1
  '1544636331-e26879cd4d9b', // dash-1
  '1618354691373-d851c5c3a990', // phone-1
  '1556679343-c7306c1976bc', // tea-1
  '1442512595331-e89e73853f31', // coffee-1
  '1512820790803-83ca734da794', // novel-1
  '1572569511254-d8f925fe2cbb', // kindle-1
  '1587654780291-39c9404d746b', // lego-1
  '1621259182978-fbf93132d3a9', // nintendo-1
  '1605100804763-247f67b3557e', // ring-1
  '1611652022419-a9419f74343d', // necklace-1
  '1541599540903-216a46ca1dc0', // dogbed-1
  '1589924691995-4002509e3c92', // feeder-1
  '1593642634524-b40b5baae6bb', // desk-1
  '1615663245857-ac93bb7c39e7', // mouse-1
];

let photoIndex = 0;

function getNextPhotoId() {
  const id = photoIds[photoIndex % photoIds.length];
  photoIndex++;
  return id;
}

// ============================================
// DOWNLOAD FUNCTION
// ============================================

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        const redirectUrl = response.headers.location;
        downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${url} (Status: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// ============================================
// MAIN FUNCTION
// ============================================

async function downloadAllNewImages() {
  console.log('\n🚀 Downloading new product images...\n');
  
  // Create folder
  const folder = 'public/images/products';
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`📁 Created: ${folder}`);
  }

  let totalFiles = 0;

  for (const product of newProducts) {
    const baseName = product.name;
    
    // Download thumbnail
    const thumbUrl = `https://images.unsplash.com/photo-${getNextPhotoId()}?w=600&h=600&fit=crop`;
    const thumbPath = path.join(folder, `${baseName}.jpg`);
    try {
      await downloadImage(thumbUrl, thumbPath);
      totalFiles++;
    } catch (error) {
      console.log(`❌ ${baseName}.jpg - ${error.message}`);
    }
    
    // Download gallery images
    for (let i = 0; i < (product.gallery || 1); i++) {
      const galleryUrl = `https://images.unsplash.com/photo-${getNextPhotoId()}?w=600&h=600&fit=crop`;
      const galleryPath = path.join(folder, `${baseName}-${i + 1}.jpg`);
      try {
        await downloadImage(galleryUrl, galleryPath);
        totalFiles++;
      } catch (error) {
        console.log(`❌ ${baseName}-${i + 1}.jpg - ${error.message}`);
      }
    }
  }

  console.log(`\n✅ Done! Downloaded ${totalFiles} images for ${newProducts.length} new products.`);
  console.log(`📂 Location: public/images/products/\n`);
}

// ============================================
// RUN
// ============================================

downloadAllNewImages().catch(console.error);