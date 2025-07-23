#!/bin/bash

# GitHub Pages Build Script for Francesco Marchetto Portfolio

echo "Building for GitHub Pages deployment..."

# Clean previous build
rm -rf dist/public

# Build the frontend only (static files for GitHub Pages)
npm run build

# Create .nojekyll file to prevent GitHub Pages from ignoring files starting with _
touch dist/public/.nojekyll

# Copy index.html to 404.html for SPA routing support
cp dist/public/index.html dist/public/404.html

echo "Build complete! Deploy the 'dist/public' folder to GitHub Pages."
echo ""
echo "To deploy:"
echo "1. Push this repository to GitHub"
echo "2. Go to Settings > Pages in your GitHub repository"
echo "3. Set source to 'GitHub Actions'"
echo "4. The workflow will automatically deploy on push to main branch"