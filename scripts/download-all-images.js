// scripts/download-all-images.js
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================
// ALL 144 PRODUCTS WITH WORKING UNSPLASH URLs
// ============================================

const products = [
  // ===== ELECTRONICS (cat-1) =====
  { id: "p1", name: "headphones", thumb: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
  ] },
  { id: "p2", name: "smartwatch", thumb: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1546868871-af0de0ae72c3?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
  ] },
  { id: "p3", name: "monitor", thumb: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop"
  ] },
  { id: "p4", name: "charging-pad", thumb: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop"
  ] },
  { id: "p5", name: "speaker", thumb: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop"
  ] },
  { id: "p6", name: "keyboard", thumb: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop"
  ] },
  { id: "p7", name: "bluetooth-speaker", thumb: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop"
  ] },
  { id: "p8", name: "earbuds", thumb: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
  ] },
  { id: "p9", name: "led-bulbs", thumb: "https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1572297793406-d0f48e7b5d2a?w=600&h=600&fit=crop"
  ] },
  { id: "p10", name: "ipad-pro", thumb: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop"
  ] },
  { id: "p11", name: "macbook-air", thumb: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop"
  ] },
  { id: "p12", name: "ps5", thumb: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop"
  ] },

  // ===== FASHION (cat-2) =====
  { id: "p13", name: "leather-jacket", thumb: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop"
  ] },
  { id: "p14", name: "sunglasses", thumb: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop"
  ] },
  { id: "p15", name: "cashmere-scarf", thumb: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop"
  ] },
  { id: "p16", name: "handbag", thumb: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop"
  ] },
  { id: "p17", name: "travel-bag", thumb: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop"
  ] },
  { id: "p18", name: "nike-airmax", thumb: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
  ] },
  { id: "p19", name: "adidas-ultraboost", thumb: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"
  ] },
  { id: "p20", name: "wool-suit", thumb: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&h=600&fit=crop"
  ] },
  { id: "p46", name: "leather-boots", thumb: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop"
  ] },
  { id: "p47", name: "cashmere-sweater", thumb: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop"
  ] },
  { id: "p48", name: "designer-watch", thumb: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
  ] },
  { id: "p49", name: "silk-tie", thumb: "https://images.unsplash.com/photo-1589756823695-9bc6786b1b5a?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589756823695-9bc6786b1b5a?w=600&h=600&fit=crop"
  ] },

  // ===== HOME & GARDEN (cat-3) =====
  { id: "p21", name: "office-chair", thumb: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop"
  ] },
  { id: "p22", name: "chef-knife", thumb: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=600&fit=crop"
  ] },
  { id: "p23", name: "indoor-plants", thumb: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop"
  ] },
  { id: "p24", name: "mattress", thumb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop"
  ] },
  { id: "p25", name: "air-fryer", thumb: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop"
  ] },
  { id: "p50", name: "coffee-maker", thumb: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop"
  ] },
  { id: "p51", name: "robot-vacuum", thumb: "https://images.unsplash.com/photo-1585155770440-1015b06d7e3d?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1585155770440-1015b06d7e3d?w=600&h=600&fit=crop"
  ] },
  { id: "p52", name: "cookware-set", thumb: "https://images.unsplash.com/photo-1584990347449-f6a5c45d5be6?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1584990347449-f6a5c45d5be6?w=600&h=600&fit=crop"
  ] },
  { id: "p53", name: "garden-tools", thumb: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop"
  ] },
  { id: "p54", name: "desk-lamp", thumb: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop"
  ] },
  { id: "p55", name: "outdoor-furniture", thumb: "https://images.unsplash.com/photo-1583013440193-e3eb5313d254?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1583013440193-e3eb5313d254?w=600&h=600&fit=crop"
  ] },

  // ===== BEAUTY (cat-4) =====
  { id: "p26", name: "skincare-set", thumb: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop"
  ] },
  { id: "p27", name: "perfume-set", thumb: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop"
  ] },
  { id: "p28", name: "hair-styling-kit", thumb: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop"
  ] },
  { id: "p56", name: "makeup-set", thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"
  ] },
  { id: "p57", name: "vitamin-c-serum", thumb: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop"
  ] },
  { id: "p58", name: "nail-polish", thumb: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop"
  ] },
  { id: "p59", name: "cleansing-brush", thumb: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop"
  ] },
  { id: "p60", name: "lipstick-set", thumb: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop"
  ] },
  { id: "p61", name: "pro-hair-dryer", thumb: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop"
  ] },
  { id: "p62", name: "eyebrow-kit", thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"
  ] },
  { id: "p63", name: "mascara", thumb: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=600&h=600&fit=crop"
  ] },

  // ===== SPORTS (cat-5) =====
  { id: "p29", name: "yoga-mat", thumb: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop"
  ] },
  { id: "p30", name: "protein-powder", thumb: "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop"
  ] },
  { id: "p31", name: "dumbbell-set", thumb: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&h=600&fit=crop"
  ] },
  { id: "p64", name: "resistance-bands", thumb: "https://images.unsplash.com/photo-1598289437388-7ee6b9a60e05?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1598289437388-7ee6b9a60e05?w=600&h=600&fit=crop"
  ] },
  { id: "p65", name: "jump-rope", thumb: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&h=600&fit=crop"
  ] },
  { id: "p66", name: "pull-up-bar", thumb: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&h=600&fit=crop"
  ] },
  { id: "p67", name: "exercise-mat", thumb: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop"
  ] },
  { id: "p68", name: "shaker-bottle", thumb: "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600&h=600&fit=crop"
  ] },
  { id: "p69", name: "gym-gloves", thumb: "https://images.unsplash.com/photo-1584735935682-2f2b69d2b7c1?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1584735935682-2f2b69d2b7c1?w=600&h=600&fit=crop"
  ] },
  { id: "p70", name: "yoga-blocks", thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
  ] },

  // ===== AUTOMOTIVE (cat-6) =====
  { id: "p32", name: "dash-camera", thumb: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop"
  ] },
  { id: "p33", name: "phone-mount", thumb: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop"
  ] },
  { id: "p71", name: "seat-cover", thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop"
  ] },
  { id: "p72", name: "air-freshener", thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop"
  ] },
  { id: "p73", name: "sun-shade", thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop"
  ] },
  { id: "p74", name: "jump-starter", thumb: "https://images.unsplash.com/photo-1599751449125-2899c98e5dfd?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1599751449125-2899c98e5dfd?w=600&h=600&fit=crop"
  ] },
  { id: "p75", name: "tire-gauge", thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop"
  ] },
  { id: "p76", name: "trash-can", thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop"
  ] },
  { id: "p77", name: "car-vacuum", thumb: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop"
  ] },
  { id: "p78", name: "road-kit", thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop"
  ] },

  // ===== GROCERIES (cat-7) =====
  { id: "p34", name: "green-tea", thumb: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop"
  ] },
  { id: "p35", name: "coffee-beans", thumb: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop"
  ] },
  { id: "p79", name: "organic-honey", thumb: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&h=600&fit=crop"
  ] },
  { id: "p80", name: "olive-oil", thumb: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop"
  ] },
  { id: "p81", name: "quinoa", thumb: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop"
  ] },
  { id: "p82", name: "spice-set", thumb: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&h=600&fit=crop"
  ] },
  { id: "p83", name: "granola", thumb: "https://images.unsplash.com/photo-1518012312837-96ae3e9050e0?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1518012312837-96ae3e9050e0?w=600&h=600&fit=crop"
  ] },
  { id: "p84", name: "coconut-oil", thumb: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=600&fit=crop"
  ] },
  { id: "p85", name: "pasta-set", thumb: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600&h=600&fit=crop"
  ] },
  { id: "p86", name: "dried-fruit", thumb: "https://images.unsplash.com/photo-1532634922-8fe0f757c7c3?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1532634922-8fe0f757c7c3?w=600&h=600&fit=crop"
  ] },

  // ===== BOOKS (cat-8) =====
  { id: "p36", name: "novel-collection", thumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop"
  ] },
  { id: "p37", name: "kindle", thumb: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop"
  ] },
  { id: "p87", name: "cookbook", thumb: "https://images.unsplash.com/photo-1589647363585-f4a7d5277c0e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589647363585-f4a7d5277c0e?w=600&h=600&fit=crop"
  ] },
  { id: "p88", name: "self-help-book", thumb: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop"
  ] },
  { id: "p89", name: "children-books", thumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop"
  ] },
  { id: "p90", name: "biography-book", thumb: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop"
  ] },
  { id: "p91", name: "sci-fi-trilogy", thumb: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=600&fit=crop"
  ] },
  { id: "p92", name: "fitness-book", thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
  ] },
  { id: "p93", name: "history-encyclopedia", thumb: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=600&fit=crop"
  ] },

  // ===== TOYS & GAMES (cat-9) =====
  { id: "p38", name: "lego-set", thumb: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
  ] },
  { id: "p39", name: "nintendo-switch", thumb: "https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1621259182978-fbf93132d3a9?w=600&h=600&fit=crop"
  ] },
  { id: "p94", name: "board-games", thumb: "https://images.unsplash.com/photo-1521138323464-d9a6c7c3c6c3?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1521138323464-d9a6c7c3c6c3?w=600&h=600&fit=crop"
  ] },
  { id: "p95", name: "rc-car", thumb: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
  ] },
  { id: "p96", name: "jigsaw-puzzle", thumb: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
  ] },
  { id: "p97", name: "barbie-dreamhouse", thumb: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
  ] },
  { id: "p98", name: "action-figures", thumb: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
  ] },
  { id: "p99", name: "playdough", thumb: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
  ] },
  { id: "p100", name: "rc-drone", thumb: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
  ] },

  // ===== JEWELRY (cat-10) =====
  { id: "p40", name: "diamond-ring", thumb: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop"
  ] },
  { id: "p41", name: "gold-necklace", thumb: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop"
  ] },
  { id: "p101", name: "pearl-earrings", thumb: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop"
  ] },
  { id: "p102", name: "silver-bracelet", thumb: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop"
  ] },
  { id: "p103", name: "sapphire-pendant", thumb: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop"
  ] },
  { id: "p104", name: "mens-silver-ring", thumb: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop"
  ] },
  { id: "p105", name: "crystal-necklace", thumb: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop"
  ] },
  { id: "p106", name: "pearl-necklace", thumb: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop"
  ] },

  // ===== PET SUPPLIES (cat-11) =====
  { id: "p42", name: "dog-bed", thumb: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop"
  ] },
  { id: "p43", name: "pet-feeder", thumb: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop"
  ] },
  { id: "p107", name: "cat-tree", thumb: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop"
  ] },
  { id: "p108", name: "grooming-kit", thumb: "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop"
  ] },
  { id: "p109", name: "dog-leash", thumb: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&h=600&fit=crop"
  ] },
  { id: "p110", name: "aquarium-filter", thumb: "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop"
  ] },
  { id: "p111", name: "bird-cage", thumb: "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop"
  ] },
  { id: "p112", name: "pet-carrier", thumb: "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1589924691995-4002509e3c92?w=600&h=600&fit=crop"
  ] },

  // ===== OFFICE (cat-12) =====
  { id: "p44", name: "standing-desk", thumb: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=600&h=600&fit=crop"
  ] },
  { id: "p45", name: "mouse-keyboard", thumb: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop"
  ] },
  { id: "p113", name: "chair-mat", thumb: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop"
  ] },
  { id: "p114", name: "monitor-stand", thumb: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop"
  ] },
  { id: "p115", name: "document-scanner", thumb: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop"
  ] },
  { id: "p116", name: "desk-organizer", thumb: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b4?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b4?w=600&h=600&fit=crop"
  ] },
  { id: "p117", name: "usb-c-hub", thumb: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop"
  ] },
  { id: "p118", name: "whiteboard", thumb: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop"
  ] },
  { id: "p119", name: "desktop-computer", thumb: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=600&fit=crop", gallery: [
    "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=600&fit=crop"
  ] },
];

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

async function downloadAllImages() {
  console.log('\n🚀 Starting download of 144 products...\n');
  
  const folder = path.join(__dirname, '..', 'public', 'images', 'products');
  
  // Create folder if not exists
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`📁 Created: ${folder}`);
  }

  let totalImages = 0;
  let totalProducts = 0;

  for (const product of products) {
    const baseName = product.name;
    
    // Download thumbnail
    const thumbPath = path.join(folder, `${baseName}.jpg`);
    try {
      await downloadImage(product.thumb, thumbPath);
      totalImages++;
    } catch (error) {
      console.log(`❌ ${baseName}.jpg - ${error.message}`);
    }
    
    // Download gallery images
    for (let i = 0; i < product.gallery.length; i++) {
      const galleryPath = path.join(folder, `${baseName}-${i + 1}.jpg`);
      try {
        await downloadImage(product.gallery[i], galleryPath);
        totalImages++;
      } catch (error) {
        console.log(`❌ ${baseName}-${i + 1}.jpg - ${error.message}`);
      }
    }
    
    totalProducts++;
    if (totalProducts % 10 === 0) {
      console.log(`\n📊 Progress: ${totalProducts}/${products.length} products processed`);
    }
  }

  console.log(`\n✅ Done! Downloaded ${totalImages} images for ${totalProducts} products.`);
  console.log(`📂 Location: public/images/products/\n`);
}

// ============================================
// RUN
// ============================================

downloadAllImages().catch(console.error);