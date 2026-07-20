// scripts/download-images.ts
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

// ============================================
// TYPES
// ============================================

interface Image {
  name: string;
  url: string;
}

interface ImageCollection {
  categories: Image[];
  products: Image[];
}

// ============================================
// IMAGE MAPPING - SAB IMAGES KI LIST
// ============================================

const images: ImageCollection = {
  categories: [
    { name: 'electronics.jpg', url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop' },
    { name: 'fashion.jpg', url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop' },
    { name: 'home-garden.jpg', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop' },
    { name: 'beauty.jpg', url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop' },
    { name: 'sports.jpg', url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop' },
    { name: 'automotive.jpg', url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=600&fit=crop' },
    { name: 'groceries.jpg', url: 'https://images.unsplash.com/photo-1542838132-92c53300491b?w=600&h=600&fit=crop' },
    { name: 'books.jpg', url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop' },
    { name: 'toys-games.jpg', url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop' },
    { name: 'jewelry.jpg', url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop' },
    { name: 'pet-supplies.jpg', url: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=600&fit=crop' },
    { name: 'office.jpg', url: 'https://images.unsplash.com/photo-1587212433119-04ba3aa791e7?w=600&h=600&fit=crop' },
  ],
  products: [
    { name: 'headphones.jpg', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
    { name: 'headphones-1.jpg', url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop' },
    { name: 'headphones-2.jpg', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
    { name: 'smartwatch.jpg', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop' },
    { name: 'smartwatch-1.jpg', url: 'https://images.unsplash.com/photo-1546868871-af0de0ae72c3?w=600&h=600&fit=crop' },
    { name: 'smartwatch-2.jpg', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop' },
    { name: 'monitor.jpg', url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop' },
    { name: 'monitor-1.jpg', url: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&h=600&fit=crop' },
    { name: 'monitor-2.jpg', url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop' },
    { name: 'charging-pad.jpg', url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop' },
    { name: 'charging-pad-1.jpg', url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop' },
    { name: 'speaker.jpg', url: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop' },
    { name: 'speaker-1.jpg', url: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop' },
    { name: 'keyboard.jpg', url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop' },
    { name: 'keyboard-1.jpg', url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop' },
    { name: 'bluetooth-speaker.jpg', url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop' },
    { name: 'bluetooth-speaker-1.jpg', url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop' },
    { name: 'earbuds.jpg', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
    { name: 'earbuds-1.jpg', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
    { name: 'led-bulbs.jpg', url: 'https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop' },
    { name: 'led-bulbs-1.jpg', url: 'https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop' },
    { name: 'ipad-pro.jpg', url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop' },
    { name: 'ipad-pro-1.jpg', url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop' },
    { name: 'macbook-air.jpg', url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop' },
    { name: 'macbook-air-1.jpg', url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop' },
    { name: 'ps5.jpg', url: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop' },
    { name: 'ps5-1.jpg', url: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop' },
    { name: 'leather-jacket.jpg', url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop' },
    { name: 'leather-jacket-1.jpg', url: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=600&fit=crop' },
    { name: 'leather-jacket-2.jpg', url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop' },
    { name: 'sunglasses.jpg', url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop' },
    { name: 'sunglasses-1.jpg', url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop' },
    { name: 'cashmere-scarf.jpg', url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c8?w=600&h=600&fit=crop' },
    { name: 'cashmere-scarf-1.jpg', url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c8?w=600&h=600&fit=crop' },
    { name: 'handbag.jpg', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop' },
    { name: 'handbag-1.jpg', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop' },
    { name: 'travel-bag.jpg', url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop' },
    { name: 'travel-bag-1.jpg', url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop' },
    { name: 'nike-airmax.jpg', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop' },
    { name: 'nike-airmax-1.jpg', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop' },
    { name: 'adidas-ultraboost.jpg', url: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop' },
    { name: 'adidas-ultraboost-1.jpg', url: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop' },
    { name: 'wool-suit.jpg', url: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop' },
    { name: 'wool-suit-1.jpg', url: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop' },
    { name: 'office-chair.jpg', url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop' },
    { name: 'office-chair-1.jpg', url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop' },
    { name: 'chef-knife.jpg', url: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop' },
    { name: 'chef-knife-1.jpg', url: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop' },
    { name: 'indoor-plants.jpg', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop' },
    { name: 'indoor-plants-1.jpg', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop' },
    { name: 'mattress.jpg', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop' },
    { name: 'mattress-1.jpg', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop' },
    { name: 'air-fryer.jpg', url: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop' },
    { name: 'air-fryer-1.jpg', url: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop' },
    { name: 'skincare-set.jpg', url: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38c5f?w=600&h=600&fit=crop' },
    { name: 'skincare-set-1.jpg', url: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38c5f?w=600&h=600&fit=crop' },
    { name: 'perfume-set.jpg', url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop' },
    { name: 'perfume-set-1.jpg', url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop' },
    { name: 'hair-styling-kit.jpg', url: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop' },
    { name: 'hair-styling-kit-1.jpg', url: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop' },
    { name: 'yoga-mat.jpg', url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop' },
    { name: 'yoga-mat-1.jpg', url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop' },
    { name: 'protein-powder.jpg', url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop' },
    { name: 'protein-powder-1.jpg', url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop' },
    { name: 'dumbbell-set.jpg', url: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop' },
    { name: 'dumbbell-set-1.jpg', url: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop' },
    { name: 'dash-camera.jpg', url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop' },
    { name: 'dash-camera-1.jpg', url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop' },
    { name: 'phone-mount.jpg', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop' },
    { name: 'phone-mount-1.jpg', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop' },
    { name: 'green-tea.jpg', url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop' },
    { name: 'green-tea-1.jpg', url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop' },
    { name: 'coffee-beans.jpg', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop' },
    { name: 'coffee-beans-1.jpg', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop' },
    { name: 'novel-collection.jpg', url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop' },
    { name: 'novel-collection-1.jpg', url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop' },
    { name: 'kindle.jpg', url: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop' },
    { name: 'kindle-1.jpg', url: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop' },
    { name: 'lego-set.jpg', url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop' },
    { name: 'lego-set-1.jpg', url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop' },
    { name: 'nintendo-switch.jpg', url: 'https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop' },
    { name: 'nintendo-switch-1.jpg', url: 'https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop' },
    { name: 'diamond-ring.jpg', url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop' },
    { name: 'diamond-ring-1.jpg', url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop' },
    { name: 'gold-necklace.jpg', url: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop' },
    { name: 'gold-necklace-1.jpg', url: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop' },
    { name: 'dog-bed.jpg', url: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop' },
    { name: 'dog-bed-1.jpg', url: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop' },
    { name: 'pet-feeder.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
    { name: 'pet-feeder-1.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
    { name: 'standing-desk.jpg', url: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop' },
    { name: 'standing-desk-1.jpg', url: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop' },
    { name: 'mouse-keyboard.jpg', url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop' },
    { name: 'mouse-keyboard-1.jpg', url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop' },
  ]
};

// ============================================
// DOWNLOAD FUNCTION
// ============================================

function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${url} (Status: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
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

async function downloadAllImages(): Promise<void> {
  console.log('\n🚀 Starting download...\n');
  
  // Create folders
  const folders = ['public/images/categories', 'public/images/products'];
  folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
      console.log(`📁 Created: ${folder}`);
    }
  });

  console.log('\n📸 Downloading Category Images...');
  for (const img of images.categories) {
    const filepath = path.join('public/images/categories', img.name);
    try {
      await downloadImage(img.url, filepath);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.log(`❌ Failed: ${img.name} - ${message}`);
    }
  }

  console.log('\n📸 Downloading Product Images...');
  let count = 0;
  for (const img of images.products) {
    const filepath = path.join('public/images/products', img.name);
    try {
      await downloadImage(img.url, filepath);
      count++;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.log(`❌ Failed: ${img.name} - ${message}`);
    }
  }

  console.log(`\n✅ Done! Downloaded ${count} product images + ${images.categories.length} category images`);
  console.log(`📂 Location: public/images/\n`);
}

// ============================================
// RUN
// ============================================

downloadAllImages().catch(console.error);