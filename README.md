# Textile Business Website

A modern, responsive website for a textile business built with Next.js and Tailwind CSS.

## Features

- **Home Page**: Hero section, featured categories, trust indicators, chatbot entry
- **About Us**: Company story, manufacturing capabilities, certifications
- **Products**: Catalog with categories and inquiry CTAs
- **Contact**: Form for general inquiries
- **Bulk Order Inquiry**: Detailed form for bulk orders
- **Chatbot**: Floating widget with predefined prompts and lead capture
- **Google Sheets Integration**: API routes for storing form and chatbot data

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Responsive design

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Sheets Integration

The API routes are set up to receive form data. To integrate with Google Sheets:

1. Create a Google Apps Script webhook
2. Update the API route to send data to the webhook
3. The webhook can append data to your Google Sheet

## Deployment Options

### 🚀 Recommended: Vercel (Easiest for Next.js)

1. **Sign up for Vercel**: Go to [vercel.com](https://vercel.com) and create a free account
2. **Connect GitHub**: Link your GitHub account
3. **Import Project**: Click "New Project" and import your repository
4. **Deploy**: Vercel will automatically detect Next.js and deploy it
5. **Custom Domain**: Optional - add a custom domain or use the provided `.vercel.app` URL

**Pros**: Native Next.js support, automatic deployments, great performance

### 🌐 Alternative: Netlify

1. **Sign up for Netlify**: Go to [netlify.com](https://netlify.com) and create a free account
2. **Connect Repository**: Link your GitHub repository
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build` (or `out` if using static export)
4. **Deploy**: Netlify will build and deploy automatically

### 📄 GitHub Pages (Static Export)

**Note**: Next.js 14 with App Router has limitations with static export. For best results, use Vercel or Netlify above.

#### Manual GitHub Pages Deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **The static files should be in the `build/` directory**

3. **Create GitHub Repository**:
   - Create a new repository on GitHub
   - Don't initialize with README

4. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/` folder (or `/build` if files are in build folder)
   - Save

6. **Update next.config.js** if using a project repository:
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true },
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name/',
   }
   ```

### 🔧 Troubleshooting

**GitHub Pages Issues:**
- Ensure `output: 'export'` is set in `next.config.js`
- Check that `images: { unoptimized: true }` is configured
- Verify `trailingSlash: true` is set
- Make sure no API routes exist (they prevent static export)

**Form Submissions:**
- For demo purposes, forms log to console
- To collect real data, integrate with Google Forms or a form service
- Update form `action` URLs in contact and inquiry pages

**Build Issues:**
- Clear `.next` and `build` directories before rebuilding
- Ensure all dependencies are installed with `npm install`

## SEO and Performance

- Meta tags configured
- Mobile-first responsive design
- Optimized images (placeholder for now)
- Fast loading with Next.js optimizations