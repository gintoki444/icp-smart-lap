const fs = require('fs');
const path = require('path');

const fontPath = path.resolve(__dirname, 'src/assets/scss/partials/font/THSarabunNew.ttf'); // 📌 ตรวจสอบว่าเส้นทางถูกต้อง
const outputPath = path.resolve(__dirname, 'src/assets/scss/partials/font/vfs_fonts_thaisarabun.js');

if (!fs.existsSync(fontPath)) {
  console.error('❌ Font file not found:', fontPath);
  process.exit(1);
}

// แปลงฟอนต์เป็น Base64
const fontBase64 = fs.readFileSync(fontPath).toString('base64');

// สร้างไฟล์ `vfs_fonts.js`
const vfsContent = `var vfs = { "THSarabunNew.ttf": "data:font/ttf;base64,${fontBase64}" };
export default vfs;`;

fs.writeFileSync(outputPath, vfsContent);
console.log('✅ VFS file generated successfully:', outputPath);
