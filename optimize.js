const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'images', 'block.webp');
const outputPath = path.join(__dirname, 'public', 'images', 'block-optimized.webp');

async function optimize() {
  try {
    // Get original size
    const originalSize = fs.statSync(inputPath).size;
    console.log(`Original size: ${(originalSize / 1024).toFixed(2)} KB`);

    // Optimize the image
    await sharp(inputPath)
      .resize(1000) // Reduce dimensions
      .webp({ 
        quality: 70,
        effort: 6
      })
      .toFile(outputPath);

    // Get new size
    const newSize = fs.statSync(outputPath).size;
    console.log(`New size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`Reduced by: ${((originalSize - newSize) / originalSize * 100).toFixed(2)}%`);
    
    // Replace the original file
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimize();
