# GitHub Pages Deployment Guide

This portfolio website is configured for easy deployment to GitHub Pages using GitHub Actions.

## Quick Setup

1. **Push to GitHub**: Upload this repository to GitHub
2. **Enable GitHub Pages**: 
   - Go to your repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions"
3. **Automatic Deployment**: The workflow will automatically build and deploy when you push to the main branch

## Manual Build

If you want to build locally:

```bash
# Make the build script executable
chmod +x build-github-pages.sh

# Run the build
./build-github-pages.sh
```

The built files will be in `dist/public/` directory.

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:
- Installs Node.js dependencies
- Builds the React application
- Deploys to GitHub Pages
- Handles SPA routing with 404.html fallback

## Repository Name Considerations

If your repository name is different from "francesco-marchetto-portfolio", the website will be available at:
`https://yourusername.github.io/your-repository-name/`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `dist/public/` directory
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Features Included

- ✅ Static site generation
- ✅ SPA routing support
- ✅ Optimized assets
- ✅ Responsive design
- ✅ Dark/light theme
- ✅ Interactive animations
- ✅ WebGL fluid cursor effects

The website is fully client-side and doesn't require a backend server for GitHub Pages deployment.