@echo off
echo 🚀 Textile Business Website Deployment Script
echo.

echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🔨 Building the project...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo.
echo ✅ Build completed successfully!
echo.
echo 📤 To deploy:
echo 1. Create a GitHub repository
echo 2. Push this code to GitHub
echo 3. Use Vercel, Netlify, or GitHub Pages to deploy
echo.
echo 🌐 Recommended: Use Vercel for the best Next.js experience
echo    - Go to vercel.com
echo    - Import your GitHub repository
echo    - Deploy automatically
echo.
pause