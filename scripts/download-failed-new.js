// scripts/download-failed-new.js
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================
// FAILED IMAGES LIST
// ============================================

const failedImages = [
  // Thumbnails that failed
  { name: 'cashmere-sweater', type: 'thumbnail' },
  { name: 'coffee-maker', type: 'thumbnail' },
  { name: 'garden-tools', type: 'thumbnail' },
  { name: 'jump-rope', type: 'thumbnail' },
  { name: 'exercise-mat', type: 'thumbnail' },
  { name: 'jump-starter', type: 'thumbnail' },
  { name: 'car-vacuum', type: 'thumbnail' },
  { name: 'children-books', type: 'thumbnail' },
  { name: 'sci-fi-trilogy', type: 'thumbnail' },
  { name: 'crystal-necklace', type: 'thumbnail' },
  { name: 'cat-tree', type: 'thumbnail' },
  { name: 'desk-organizer', type: 'thumbnail' },
  
  // Gallery images that failed
  { name: 'nail-polish', type: 'gallery', index: 1 },
  { name: 'lipstick-set', type: 'gallery', index: 1 },
  { name: 'gym-gloves', type: 'gallery', index: 1 },
  { name: 'spice-set', type: 'gallery', index: 1 },
  { name: 'coconut-oil', type: 'gallery', index: 1 },
  { name: 'history-encyclopedia', type: 'gallery', index: 1 },
  { name: 'jigsaw-puzzle', type: 'gallery', index: 1 },
  { name: 'playdough', type: 'gallery', index: 1 },
  { name: 'bird-cage', type: 'gallery', index: 1 },
  { name: 'chair-mat', type: 'gallery', index: 1 },
];

// ============================================
// WORKING UNSPLASH URLs
// ============================================

const workingUrls = [
  // For thumbnails - Fashion/Apparel
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=600&fit=crop', // cashmere
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop', // coffee
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop', // garden
  'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&h=600&fit=crop', // jump rope
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop', // exercise
  'https://images.unsplash.com/photo-1599751449125-2899c98e5dfd?w=600&h=600&fit=crop', // jump starter
  'https://images.unsplash.com/photo-1533473359331-f26c2c276d9a?w=600&h=600&fit=crop', // car vacuum
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop', // children books
  'https://images.unsplash.com/photo-1519074069444-1ba4c66c2fc8?w=600&h=600&fit=crop', // sci-fi
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop', // crystal necklace
  'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop', // cat tree
  'https://images.unsplash.com/photo-1518455027359-f3f8164ba6b4?w=600&h=600&fit=crop', // desk organizer
  
  // For gallery images
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop', // nail polish
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop', // lipstick
  'https://images.unsplash.com/photo-1584735935682-2f2b69d2b7c1?w=600&h=600&fit=crop', // gym gloves
  'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&h=600&fit=crop', // spice set
  'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=600&fit=crop', // coconut oil
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=600&fit=crop', // history
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop', // jigsaw
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop', // playdough
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop', // bird cage
  'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop', // chair mat
];

let urlIndex = 0;

function getNextUrl() {
  const url = workingUrls[urlIndex % workingUrls.length];
  urlIndex++;
  return url;
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

async function downloadFailedImages() {
  console.log('\n🚀 Downloading failed images...\n');
  
  const folder = 'public/images/products';
  
  for (const img of failedImages) {
    let filename;
    if (img.type === 'thumbnail') {
      filename = `${img.name}.jpg`;
    } else {
      filename = `${img.name}-${img.index}.jpg`;
    }
    
    const filepath = path.join(folder, filename);
    const url = getNextUrl();
    
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.log(`❌ ${filename} - ${error.message}`);
    }
  }
  
  console.log(`\n✅ Done! Downloaded ${failedImages.length} failed images.`);
  console.log(`📂 Location: public/images/products/\n`);
}

downloadFailedImages().catch(console.error);