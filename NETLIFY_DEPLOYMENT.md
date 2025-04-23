# Deploying to Netlify

This guide will help you deploy the Gauntlet Inc. website frontend to your Netlify VPS.

## Prerequisites

- A Netlify account
- Access to your private VPS in Netlify
- Git installed on your local machine

## Deployment Options

### Option 1: Direct Deployment from Git Repository

1. **Connect your Git repository to Netlify**:
   - Log in to your Netlify account
   - Click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository
   - Configure build settings as follows:
     - **Build command**: `node netlify-build.mjs`
     - **Publish directory**: `dist/public`

2. **Deploy the site**:
   - Click "Deploy site"
   - Netlify will clone your repository, build the site, and deploy it

### Option 2: Manual Deployment using Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site locally**:
   ```bash
   node netlify-build.mjs
   ```

3. **Deploy to Netlify**:
   ```bash
   netlify deploy --prod
   ```
   When prompted, select the `dist/public` directory as your publish directory.

## Deployed Files

After a successful build, the following files will be created in the `dist/public` directory:
- `index.html` - The main HTML file
- `assets/index-*.css` - The compiled CSS file
- `assets/index-*.js` - The compiled JavaScript file

The total built package is approximately 582KB (64KB for CSS and 517KB for JS).

## Environment Variables

No environment variables are currently required for the frontend-only deployment.

## Client-Side Routing

The included `netlify.toml` file already contains the necessary redirect rules to support client-side routing with Wouter. This ensures that all routes will properly resolve to the application's main HTML file.

## Troubleshooting

If you encounter issues during deployment:

1. **Build errors**: Check the build logs in the Netlify dashboard
2. **Routing issues**: Verify the redirects in netlify.toml are correctly configured
3. **JS errors after deployment**: Check browser console for any errors

## Local Testing Before Deployment

To test your build locally before deployment:

```bash
# Build the frontend
node netlify-build.mjs

# Install a simple HTTP server if you don't have one
npm install -g serve

# Serve the static files
serve dist/public
```

Your site should be available at http://localhost:5000 for local testing.