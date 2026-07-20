// scripts/fix-remaining.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const remainingImages = [
  { name: 'jump-starter.jpg', url: 'https://picsum.photos/seed/jumpstarter/600/600' },
  { name: 'car-vacuum.jpg', url: 'https://picsum.photos/seed/carvacuum/600/600' },
  { name: 'sci-fi-trilogy.jpg', url: 'https://picsum.photos/seed/scifi/600/600' },
  { name: 'desk-organizer.jpg', url: 'https://picsum.photos/seed/deskorg/600/600' },
  { name: 'gym-gloves-1.jpg', url: 'https://picsum.photos/seed/gymgloves/600/600' },
];

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

async function fixRemaining() {
  console.log('\n🚀 Downloading remaining 5 images...\n');
  
  const folder = 'public/images/products';
  
  for (const img of remainingImages) {
    const filepath = path.join(folder, img.name);
    try {
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.log(`❌ ${img.name} - ${error.message}`);
    }
  }
  
  console.log('\n✅ All remaining images downloaded!');
}

fixRemaining().catch(console.error);