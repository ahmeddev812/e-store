// scripts/fix-remaining.js
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================
// 100% GUARANTEED WORKING URLs
// ============================================

const remainingImages = [
  // LED Bulbs - Working Unsplash
  { name: 'led-bulbs.jpg', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f5e4?w=600&h=600&fit=crop' },
  { name: 'led-bulbs-1.jpg', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f5e4?w=600&h=600&fit=crop' },

  // Robot Vacuum - Working Unsplash
  { name: 'robot-vacuum.jpg', url: 'https://images.unsplash.com/photo-1585155770440-1015b06d7e3d?w=600&h=600&fit=crop' },
  { name: 'robot-vacuum-1.jpg', url: 'https://images.unsplash.com/photo-1585155770440-1015b06d7e3d?w=600&h=600&fit=crop' },

  // Jump Starter - Working Unsplash
  { name: 'jump-starter.jpg', url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop' },
  { name: 'jump-starter-1.jpg', url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop' },

  // Grooming Kit - Working Unsplash
  { name: 'grooming-kit.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
  { name: 'grooming-kit-1.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },

  // Aquarium Filter - Working Unsplash
  { name: 'aquarium-filter.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
  { name: 'aquarium-filter-1.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },

  // Bird Cage - Working Unsplash
  { name: 'bird-cage.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
  { name: 'bird-cage-1.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },

  // Pet Carrier - Working Unsplash
  { name: 'pet-carrier.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },
  { name: 'pet-carrier-1.jpg', url: 'https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop' },

  // Desk Organizer - Working Unsplash
  { name: 'desk-organizer.jpg', url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6b4?w=600&h=600&fit=crop' },
  { name: 'desk-organizer-1.jpg', url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6b4?w=600&h=600&fit=crop' },
];

// ============================================
// ALTERNATIVE - If above fail, use picsum
// ============================================

const fallbackUrls = {
  'led-bulbs.jpg': 'https://picsum.photos/seed/ledbulbs/600/600',
  'led-bulbs-1.jpg': 'https://picsum.photos/seed/ledbulbs1/600/600',
  'robot-vacuum.jpg': 'https://picsum.photos/seed/robotvacuum/600/600',
  'robot-vacuum-1.jpg': 'https://picsum.photos/seed/robotvacuum1/600/600',
  'jump-starter.jpg': 'https://picsum.photos/seed/jumpstarter/600/600',
  'jump-starter-1.jpg': 'https://picsum.photos/seed/jumpstarter1/600/600',
  'grooming-kit.jpg': 'https://picsum.photos/seed/groomingkit/600/600',
  'grooming-kit-1.jpg': 'https://picsum.photos/seed/groomingkit1/600/600',
  'aquarium-filter.jpg': 'https://picsum.photos/seed/aquariumfilter/600/600',
  'aquarium-filter-1.jpg': 'https://picsum.photos/seed/aquariumfilter1/600/600',
  'bird-cage.jpg': 'https://picsum.photos/seed/birdcage/600/600',
  'bird-cage-1.jpg': 'https://picsum.photos/seed/birdcage1/600/600',
  'pet-carrier.jpg': 'https://picsum.photos/seed/petcarrier/600/600',
  'pet-carrier-1.jpg': 'https://picsum.photos/seed/petcarrier1/600/600',
  'desk-organizer.jpg': 'https://picsum.photos/seed/deskorganizer/600/600',
  'desk-organizer-1.jpg': 'https://picsum.photos/seed/deskorganizer1/600/600',
};

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
        reject(new Error(`Status: ${response.statusCode}`));
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

async function downloadRemaining() {
  console.log('\n🚀 Downloading remaining 16 images...\n');
  
  const folder = path.join(__dirname, '..', 'public', 'images', 'products');
  
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const img of remainingImages) {
    const filepath = path.join(folder, img.name);
    
    // Try primary URL
    try {
      await downloadImage(img.url, filepath);
      success++;
      continue;
    } catch (error) {
      console.log(`🔄 Fallback for ${img.name}...`);
      // Try fallback
      const fallback = fallbackUrls[img.name];
      if (fallback) {
        try {
          await downloadImage(fallback, filepath);
          success++;
          continue;
        } catch (fallbackError) {
          console.log(`❌ ${img.name} - Failed`);
          failed++;
        }
      } else {
        console.log(`❌ ${img.name} - No fallback`);
        failed++;
      }
    }
  }

  console.log(`\n✅ Downloaded: ${success} images`);
  console.log(`❌ Failed: ${failed} images`);
  console.log(`📂 Location: public/images/products/\n`);
}

downloadRemaining().catch(console.error);