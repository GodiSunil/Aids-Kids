const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'public', 'images', 'block.webp');

try {
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    console.log('Image found at:', imagePath);
    console.log('Size:', (stats.size / 1024).toFixed(2), 'KB');
    console.log('Last modified:', stats.mtime);
  } else {
    console.log('Image not found at:', imagePath);
    console.log('Checking public directory contents:');
    
    const publicPath = path.join(__dirname, 'public');
    console.log('Public directory exists:', fs.existsSync(publicPath));
    
    const imagesPath = path.join(publicPath, 'images');
    console.log('Images directory exists:', fs.existsSync(imagesPath));
    
    if (fs.existsSync(imagesPath)) {
      console.log('Files in images directory:');
      fs.readdirSync(imagesPath).forEach(file => {
        console.log('-', file);
      });
    }
  }
} catch (err) {
  console.error('Error checking image:', err);
}
