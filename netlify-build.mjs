#!/usr/bin/env node

// This script builds only the frontend for Netlify deployment
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

console.log(`${colors.blue}Starting Netlify frontend-only build process...${colors.reset}`);

try {
  // Build the frontend using Vite
  console.log(`${colors.yellow}Building frontend with Vite...${colors.reset}`);
  execSync('npx vite build', { stdio: 'inherit' });

  // Create static directory in the output folder if it doesn't exist
  const staticOutputDir = path.join(__dirname, 'dist', 'public', 'static');
  if (!fs.existsSync(staticOutputDir)) {
    fs.mkdirSync(staticOutputDir, { recursive: true });
  }

  // Copy static assets
  console.log(`${colors.yellow}Copying static assets...${colors.reset}`);
  const staticSourceDir = path.join(__dirname, 'static');
  
  // Get all files in the static directory
  const staticFiles = fs.readdirSync(staticSourceDir);
  
  // Copy each file to the output directory
  for (const file of staticFiles) {
    const sourcePath = path.join(staticSourceDir, file);
    const destPath = path.join(staticOutputDir, file);
    
    // Skip directories or non-image files if needed
    const stats = fs.statSync(sourcePath);
    if (stats.isDirectory()) continue;
    
    // Copy the file
    fs.copyFileSync(sourcePath, destPath);
    console.log(`${colors.green}Copied: ${file}${colors.reset}`);
  }

  console.log(`${colors.green}Frontend build completed successfully!${colors.reset}`);
  console.log(`${colors.blue}Static files are ready in the dist/public directory.${colors.reset}`);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}