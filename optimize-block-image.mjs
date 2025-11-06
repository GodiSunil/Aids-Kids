import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImage() {
  try {
    const inputPath = join(__dirname, 'public', 'images', 'block.webp');
    const outputPath = join(__dirname, 'public', 'images', 'block-optimized.webp');

    // Get original file stats
    const originalStats = await fs.stat(inputPath);
    console.log(`Original file size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Optimize the image
    await sharp(inputPath)
      .resize(1200) // Resize to max width of 1200px
      .webp({ 
        quality: 75, // Good quality with smaller file size
        effort: 6, // Higher effort for better compression
        alphaQuality: 80, // Preserve transparency quality
        smartSubsample: true // Better quality for downscaling
      })
      .toFile(outputPath);

    // Get optimized file stats
    const optimizedStats = await fs.stat(outputPath);
    const saved = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`Optimized file size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`File size reduced by ${saved}%`);
    
    // Replace original with optimized version
    await fs.rename(outputPath, inputPath);
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
