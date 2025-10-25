# NRG Landing Site - Deployment Guide

## 🚀 Vercel Deployment (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   cd nrg-landing
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/nrg-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., `nrg.ae`)
   - Follow DNS configuration instructions

4. **Set Environment Variables** (if needed)
   - Go to "Settings" → "Environment Variables"
   - Add variables from `.env.example`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Other Deployment Options

### Netlify

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t nrg-landing .
docker run -p 3000:3000 nrg-landing
```

### Traditional VPS (Ubuntu/Debian)

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and build
git clone https://github.com/yourusername/nrg-landing.git
cd nrg-landing
npm install
npm run build

# Run with PM2
npm install -g pm2
pm2 start npm --name "nrg" -- start
pm2 startup
pm2 save
```

---

## 🔧 Pre-Deployment Checklist

### 1. Replace Placeholders

- [ ] **Open Graph Image**: Create and replace `/public/og-nrg.png`
  - Dimensions: 1200x630px
  - Include NRG logo, tagline, and visual
  - Use neon-green (#28F27E) brand colors

- [ ] **Favicon**: Replace `/public/favicon.ico`
  - Use NRG logo
  - Generate multiple sizes (16x16, 32x32, 48x48)

### 2. Update URLs

Search and replace `nrg.example.com` with your actual domain:

- [ ] `app/layout.tsx` - metadataBase
- [ ] `app/sitemap.ts` - baseUrl
- [ ] `app/robots.ts` - sitemap URL
- [ ] `next-sitemap.config.js` - siteUrl

### 3. Configure SEO

- [ ] Update page titles and descriptions in `app/layout.tsx`
- [ ] Add Google Analytics or Plausible tracking
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines

### 4. Set Up Forms (if needed)

The current site has placeholder links for:
- "Start your subscription" → Connect to payment flow
- "Partner with us" → Connect to contact form or CRM

Options:
- **Stripe Checkout** for subscriptions
- **Tap Payments** for UAE market
- **Typeform/Google Forms** for partner inquiries
- **Custom API** for full control

### 5. Performance Optimization

- [ ] Compress images (if you add photos)
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Test on PageSpeed Insights

### 6. Security

- [ ] Add rate limiting for forms
- [ ] Set up CORS policies
- [ ] Configure CSP headers
- [ ] Enable HTTPS (automatic on Vercel)

---

## 📊 Post-Deployment Testing

### Functionality Checks

- [ ] Navigation links work (desktop & mobile)
- [ ] Mobile menu toggles correctly
- [ ] Anchor links scroll to sections
- [ ] Legal pages load properly
- [ ] All animations work smoothly

### SEO Checks

```bash
# Test metadata
curl -I https://yourdomain.com

# Validate sitemap
curl https://yourdomain.com/sitemap.xml

# Check robots.txt
curl https://yourdomain.com/robots.txt
```

### Performance Testing

- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

### Accessibility Testing

- [ ] WAVE: https://wave.webaim.org/
- [ ] axe DevTools (browser extension)
- [ ] Lighthouse accessibility audit

### Browser Testing

- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & mobile)
- [ ] Edge

---

## 🔐 Environment Variables

For production, set these in your hosting platform:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - Payments (if implementing subscription flow)
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
TAP_PUBLIC_KEY=pk_live_xxxxx
TAP_SECRET_KEY=sk_live_xxxxx
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📈 Monitoring & Analytics

### Google Analytics Setup

1. Get GA4 measurement ID from [analytics.google.com](https://analytics.google.com)

2. Add to `app/layout.tsx`:
```tsx
import Script from 'next/script'

// Inside <body>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Vercel Analytics

Enable in Vercel dashboard → Settings → Analytics (free tier available)

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Images Not Loading

- Ensure images are in `/public` directory
- Check Next.js config for domains
- Verify file permissions

### Fonts Not Loading

- Fonts are loaded via next/font/google (Inter)
- Should work automatically
- Check network tab for font requests

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **TailwindCSS Docs**: https://tailwindcss.com/docs

---

**🎉 Your NRG landing site is ready for the world!**

