#!/usr/bin/env node

// This script builds only the frontend for Netlify deployment
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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

  console.log(`${colors.green}Frontend build completed successfully!${colors.reset}`);
  console.log(`${colors.blue}Static files are ready in the dist/public directory.${colors.reset}`);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}