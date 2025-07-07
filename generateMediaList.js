// generateMediaList.js
const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, 'public', 'images', 'mediaGallery');
const outputFile = path.join(mediaDir, 'mediaList.json');

const supportedImageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const supportedVideoExtensions = ['.mp4', '.webm', '.ogg'];

const files = fs.readdirSync(mediaDir);

const mediaList = files
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return supportedImageExtensions.includes(ext) || supportedVideoExtensions.includes(ext);
  })
  .map(file => {
    const ext = path.extname(file).toLowerCase();
    const type = supportedVideoExtensions.includes(ext) ? 'video' : 'image';
    return {
      type,
      src: `/images/mediaGallery/${file}`
    };
  });

fs.writeFileSync(outputFile, JSON.stringify(mediaList, null, 2));
console.log(`✅ mediaList.json generado con ${mediaList.length} elementos`);
