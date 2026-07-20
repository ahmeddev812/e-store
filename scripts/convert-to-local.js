// scripts/convert-to-local.js
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(productsFile, 'utf8');

// Replace all Unsplash URLs with local paths
const urlRegex = /https:\/\/images\.unsplash\.com\/photo-[^?]+\?w=600&h=600&fit=crop/g;
const urlRegex2 = /https:\/\/images\.pexels\.com\/[^?]+\?w=600&h=600&fit=crop/g;

// Find all product slugs and their corresponding image names
const slugRegex = /slug:\s*["']([^"']+)["']/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1]);
}

// For each slug, find the image name from existing images
const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
const existingImages = fs.readdirSync(productsDir);
const thumbnails = existingImages.filter(img => 
  !img.includes('-1') && !img.includes('-2') && !img.includes('-3')
);

// Create mapping: slug → image name
const slugToImage = {};
for (const slug of slugs) {
  // Try to find matching image
  for (const img of thumbnails) {
    const baseName = img.replace(/\.jpg$/, '');
    if (slug.includes(baseName) || baseName.includes(slug.split('-')[0])) {
      slugToImage[slug] = baseName;
      break;
    }
  }
  // Fallback: use first part of slug
  if (!slugToImage[slug]) {
    const firstPart = slug.split('-')[0];
    const match = thumbnails.find(img => img.startsWith(firstPart));
    if (match) {
      slugToImage[slug] = match.replace(/\.jpg$/, '');
    }
  }
}

// Replace URLs in content
let updatedContent = content;

for (const [slug, imageName] of Object.entries(slugToImage)) {
  // Find the product block
  const slugRegex2 = new RegExp(`slug:\\s*["']${slug}["']`, 'g');
  const slugMatch = slugRegex2.exec(updatedContent);
  
  if (!slugMatch) continue;
  
  const startIndex = slugMatch.index;
  let braceCount = 0;
  let endIndex = startIndex;
  
  for (let i = startIndex; i < updatedContent.length; i++) {
    if (updatedContent[i] === '{') braceCount++;
    if (updatedContent[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i;
        break;
      }
    }
  }
  
  if (endIndex <= startIndex) continue;
  
  const block = updatedContent.substring(startIndex, endIndex + 1);
  let newBlock = block;
  
  // Replace thumbnail URL
  const thumbRegex = /thumbnail:\s*["'][^"']*["']/;
  const newThumb = `thumbnail: "/images/products/${imageName}.jpg"`;
  newBlock = newBlock.replace(thumbRegex, newThumb);
  
  // Replace images array URLs
  const imagesRegex = /images:\s*\[[^\]]*\]/;
  const galleryPath1 = `/images/products/${imageName}-1.jpg`;
  const galleryPath2 = `/images/products/${imageName}-2.jpg`;
  
  // Check if gallery images exist
  const exists1 = existingImages.some(img => img === `${imageName}-1.jpg`);
  const exists2 = existingImages.some(img => img === `${imageName}-2.jpg`);
  
  let galleryPaths = [];
  if (exists1) galleryPaths.push(`"${galleryPath1}"`);
  if (exists2) galleryPaths.push(`"${galleryPath2}"`);
  
  const newImages = galleryPaths.length > 0 
    ? `images: [${galleryPaths.join(', ')}]`
    : 'images: []';
  newBlock = newBlock.replace(imagesRegex, newImages);
  
  // Replace in content
  updatedContent = updatedContent.substring(0, startIndex) + newBlock + updatedContent.substring(endIndex + 1);
}

fs.writeFileSync(productsFile, updatedContent);

console.log('✅ All images converted to local paths!');
console.log(`📂 Updated: data/products.ts`);
console.log(`📸 Images folder: public/images/products/`);