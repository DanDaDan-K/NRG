# 🚀 NRG Landing Site - Quick Start

## What You Just Built

A **production-ready** landing site for NRG, a campus power bank rental network, featuring:

✅ **13 components** with animations  
✅ **Custom SVG illustrations** (logo, station, map, battery meter)  
✅ **3-tier pricing** section  
✅ **Legal pages** (Privacy & Terms)  
✅ **SEO optimized** (sitemap, robots.txt, OG tags)  
✅ **Fully responsive** mobile-first design  
✅ **Accessibility compliant** (WCAG AA)  

---

## 🏃 Get Started in 30 Seconds

The development server is already running at:

### 👉 **http://localhost:3000** 👈

Open this URL in your browser to see the site!

---

## 🎯 Navigation Guide

### Main Page Sections (with anchor links):
- **Hero** - Main tagline and CTAs
- **Problem/Solution** - Pain points vs NRG benefits
- **How It Works** (#how) - 4-step process
- **Features** (#features) - 6 feature cards
- **Pricing** (#pricing) - 3 subscription plans
- **Campus Map** (#campuses) - UAE campus locations
- **Partners** (#partners) - Host benefits
- **Security & Sustainability** - Trust factors
- **FAQ** (#faq) - Common questions
- **Final CTA** - Conversion section

### Other Pages:
- **/privacy** - Privacy Policy
- **/terms** - Terms of Service

---

## 📝 Commands You Need

```bash
# Development (already running)
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Lint code
npm run lint
```

---

## 🎨 Customization Tips

### 1. **Change Colors**
Edit `tailwind.config.ts`:
```typescript
nrg: {
  bg: "#0B0B10",      // Background
  ink: "#F4F6F8",     // Text
  accent: "#28F27E",  // Primary accent (green)
  secondary: "#6E56CF", // Secondary (violet)
  sand: "#CFB994",    // Tertiary (gold)
}
```

### 2. **Update Copy**
Main content is in:
- `components/hero.tsx` - Headline
- `components/pricing.tsx` - Plans & prices
- `components/faq.tsx` - Questions
- `app/(legal)/privacy/page.tsx` - Privacy policy
- `app/(legal)/terms/page.tsx` - Terms

### 3. **Modify Layout**
Main page structure is in `app/page.tsx` - reorder sections as needed.

### 4. **Add More Pages**
```bash
# Create new page
mkdir app/about
touch app/about/page.tsx
```

---

## 🖼️ Assets to Replace

Before going live, replace these placeholders:

1. **`/public/og-nrg.png`** - Social media preview image (1200x630px)
2. **`/public/favicon.ico`** - Browser tab icon
3. Update all instances of `nrg.example.com` with your real domain

---

## 🔧 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page (imports all sections) |
| `app/layout.tsx` | Root layout with metadata & SEO |
| `components/*` | All page sections (Hero, Pricing, etc.) |
| `tailwind.config.ts` | Brand colors & utilities |
| `app/globals.css` | Custom CSS utilities |

---

## 📱 Mobile Testing

The site is fully responsive. Test on:

1. **Chrome DevTools** - Press `F12` → Toggle device toolbar
2. **Real devices** - Access via your local IP (e.g., `http://192.168.1.x:3000`)
3. **Browser Stack** or similar testing tools

---

## 🚀 Deploy to Vercel (2 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and get live URL!
```

Or push to GitHub and connect to Vercel dashboard.

See `DEPLOYMENT.md` for detailed instructions.

---

## 💡 Pro Tips

### Add Real Functionality

1. **Subscription Flow**: Integrate Stripe or Tap Payments
2. **Partner Form**: Add form submission (Formspree, EmailJS, or custom API)
3. **Analytics**: Add Google Analytics or Plausible
4. **CMS**: Connect to Sanity or Contentful for dynamic content

### Optimize Performance

```bash
# Analyze bundle size
npm run build
# Check the output for bundle sizes
```

### Improve SEO

1. Generate real OG image with brand assets
2. Submit sitemap to Google Search Console
3. Add structured data (JSON-LD)

---

## 📚 Documentation

- **Full README**: `README.md`
- **Project Summary**: `PROJECT_SUMMARY.md`
- **Deployment Guide**: `DEPLOYMENT.md`

---

## 🐛 Issues?

### Common Problems

**Port 3000 already in use:**
```bash
# Kill the process
npx kill-port 3000
npm run dev
```

**Styling not working:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

**Build errors:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## ✨ What Makes This Special

- ✅ **Zero external images** - All visuals are inline SVG
- ✅ **No heavy libraries** - No Three.js, no chart.js
- ✅ **Accessibility first** - ARIA labels, keyboard nav, screen reader optimized
- ✅ **Motion-safe** - Respects `prefers-reduced-motion`
- ✅ **Type-safe** - Full TypeScript coverage
- ✅ **Production-ready** - Lint-free, build-optimized

---

## 🎉 You're All Set!

Your NRG landing site is **ready to customize and deploy**. 

**Next steps:**
1. Explore the live site at http://localhost:3000
2. Customize colors, copy, and assets
3. Deploy to Vercel or your preferred platform
4. Share your live URL!

---

**Built with 💚 for campus communities.**

