import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertToWebP() {
  try {
    const inputPath = join(__dirname, 'public', 'images', 'block.jpg');
    const outputPath = join(__dirname, 'public', 'images', 'block.webp');

    // Get original file stats
    const originalStats = await fs.stat(inputPath);
    console.log(`Original JPG size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Convert to WebP format
    await sharp(inputPath)
      .resize(1200)
      .webp({ 
        quality: 75, 
        effort: 6 // Higher effort for better compression (1-6)
      })
      .toFile(outputPath);

    // Get WebP file stats
    const webpStats = await fs.stat(outputPath);
    const saved = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`WebP size: ${(webpStats.size / 1024).toFixed(2)} KB`);
    console.log(`File size reduced by ${saved}%`);
    
    // Update the image reference in the component
    const componentPath = join(__dirname, 'app', 'our-programs', 'exigency-block', 'page.tsx');
    let content = await fs.readFile(componentPath, 'utf-8');
    content = content.replace('images/block.jpg', 'images/block.webp');
    await fs.writeFile(componentPath, content, 'utf-8');
    
    console.log('Image converted to WebP and component updated!');
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertToWebP();
