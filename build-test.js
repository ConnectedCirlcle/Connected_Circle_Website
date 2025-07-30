// Simple script to test the build process
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Testing build configuration...');

// Check if the dist directory exists
const distPath = path.join(__dirname, 'dist');
const distPublicPath = path.join(__dirname, 'dist', 'public');

if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

if (!fs.existsSync(distPublicPath)) {
  console.error('❌ dist/public directory not found. Client build may have failed.');
  process.exit(1);
}

// Check for index.html in the public directory
const indexPath = path.join(distPublicPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found in dist/public. Client build may have failed.');
  process.exit(1);
}

// Check for server file
const serverPath = path.join(distPath, 'index.js');
if (!fs.existsSync(serverPath)) {
  console.error('❌ index.js not found in dist. Server build may have failed.');
  process.exit(1);
}

console.log('✅ Build configuration looks good!');
console.log('');
console.log('To deploy to Netlify:');
console.log('1. Push your code to a Git repository');
console.log('2. Connect your repository to Netlify');
console.log('3. Configure the build settings:');
console.log('   - Build command: npm run netlify:build');
console.log('   - Publish directory: dist/public');
console.log('4. Set up environment variables in Netlify');
console.log('');
console.log('For local testing:');
console.log('- Run "npm run dev" for development');
console.log('- Run "npm run build && npm run start" for production testing');