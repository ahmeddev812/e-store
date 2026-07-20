const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const FILES = {
  categories: {
    'groceries.jpg': 'https://images.unsplash.com/photo-1760463921956-b21cfa5cb2ac?w=600&h=600&fit=crop',
    'office.jpg': 'https://images.unsplash.com/photo-1683582411325-b87240c5b530?w=600&h=600&fit=crop',
  },
  products: {
    'smartwatch-1.jpg': 'https://images.unsplash.com/photo-1777496410096-1dcb2a08d4fc?w=600&h=600&fit=crop',
    'led-bulbs.jpg': 'https://images.unsplash.com/photo-1560692857-cca5501d8995?w=600&h=600&fit=crop',
    'led-bulbs-1.jpg': 'https://images.unsplash.com/photo-1564659318382-6d44cf680407?w=600&h=600&fit=crop',
    'cashmere-scarf.jpg': 'https://images.unsplash.com/photo-1545153252-0e2e698f0330?w=600&h=600&fit=crop',
    'cashmere-scarf-1.jpg': 'https://images.unsplash.com/photo-1457545195570-67f207084966?w=600&h=600&fit=crop',
    'skincare-set.jpg': 'https://images.pexels.com/photos/7038192/pexels-photo-7038192.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'skincare-set-1.jpg': 'https://images.pexels.com/photos/32565189/pexels-photo-32565189.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'protein-powder.jpg': 'https://images.unsplash.com/photo-1775200279682-cf9af4cb2e4e?w=600&h=600&fit=crop',
    'protein-powder-1.jpg': 'https://images.unsplash.com/photo-1693996045346-d0a9b9470909?w=600&h=600&fit=crop',
    'nintendo-switch.jpg': 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop',
    'nintendo-switch-1.jpg': 'https://images.unsplash.com/photo-1749135583906-3baa6e31434c?w=600&h=600&fit=crop',
    'pet-feeder.jpg': 'https://images.pexels.com/photos/20109378/pexels-photo-20109378.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'pet-feeder-1.jpg': 'https://images.pexels.com/photos/8473520/pexels-photo-8473520.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  },
};

const download = (url, dest) =>
  new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    const transport = url.startsWith('https') ? https : http;

    transport.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        resolve(false);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', () => {
      file.close();
      fs.unlinkSync(dest);
      resolve(false);
    });
  });

const run = async () => {
  const baseDir = path.join(__dirname, '..', 'public', 'images');

  for (const [dir, files] of Object.entries(FILES)) {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`  Created folder: public/images/${dir}/`);
    }

    for (const [name, url] of Object.entries(files)) {
      const dest = path.join(dirPath, name);
      process.stdout.write(`  Downloading ${dir}/${name} ... `);
      const ok = await download(url, dest);
      console.log(ok ? '✅' : '❌');
    }
  }

  console.log('\nDone!');
};

console.log('Downloading failed images...\n');
run().catch((e) => console.error(e));
