const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '..', 'public', 'images', 'block.jpg');
const outputPath = path.join(__dirname, '..', 'public', 'images', 'block-optimized.jpg');

async function optimizeImage() {
  try {
    // Get original file stats
    const originalStats = fs.statSync(inputPath);
    console.log(`Original file size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Optimize the image
    await sharp(inputPath)
      .resize(1200) // Resize to max width of 1200px, maintaining aspect ratio
      .jpeg({ 
        quality: 80, // Good quality with smaller file size
        mozjpeg: true // Enable mozjpeg compression
      })
      .toFile(outputPath);

    // Get optimized file stats
    const optimizedStats = fs.statSync(outputPath);
    const saved = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`Optimized file size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`File size reduced by ${saved}%`);
    
    // Replace original with optimized version
    fs.renameSync(outputPath, inputPath);
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
