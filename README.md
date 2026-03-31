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

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js.

## SEO and Performance

- Meta tags configured
- Mobile-first responsive design
- Optimized images (placeholder for now)
- Fast loading with Next.js optimizations