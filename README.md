# Plugo Landing

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
# NRG - Campus Power Bank Network

**Borrow. Charge. Return. Repeat.**

A production-ready landing site for NRG, a subscription-based campus power bank rental network.

---

## 🚀 Features

- **Next.js 14 App Router** with TypeScript
- **TailwindCSS** with custom NRG brand colors and utilities
- **shadcn/ui** components (Button, Card, Badge, Accordion, Tabs, Sheet)
- **Framer Motion** animations with reduced-motion support
- **Lucide React** icons
- **Fully responsive** mobile-first design
- **SEO optimized** with metadata, Open Graph tags, sitemap, and robots.txt
- **Accessible** with semantic HTML, ARIA labels, and keyboard navigation
- **Dark theme** optimized with custom color system
- **Inline SVG illustrations** (logos, station mockup, UAE map, battery meter)

---

## 🎨 Brand System

### Colors
```css
--nrg-bg: #0B0B10        /* Rich charcoal background */
--nrg-ink: #F4F6F8       /* Near-white text */
--nrg-accent: #28F27E    /* Neon-green energy accent */
--nrg-secondary: #6E56CF /* NYU-adjacent violet */
--nrg-sand: #CFB994      /* Desert gold accent */
```

### Utilities
- `bg-grid` - Grid background pattern
- `glow-ring` - Neon glow effect
- `card-gradient` - Gradient card style

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

```bash
# Install dependencies
pnpm install
# or
npm install
# or
yarn install

# Run development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured to deploy automatically to GitHub Pages when you push to the main branch.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🏗️ Project Structure

```
nrg-landing/
├── app/
│   ├── (legal)/
│   │   ├── privacy/page.tsx    # Privacy policy
│   │   └── terms/page.tsx      # Terms of service
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt config
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   └── sheet.tsx
│   ├── site-header.tsx         # Sticky navigation
│   ├── hero.tsx                # Hero section with SVG station
│   ├── problem-solution.tsx    # Pain points vs solutions
│   ├── how-it-works.tsx        # 4-step process
│   ├── feature-card.tsx        # Feature grid + battery meter
│   ├── pricing.tsx             # 3-tier pricing cards
│   ├── campus-map.tsx          # UAE map with campus pins
│   ├── partners.tsx            # Partner benefits + station mockup
│   ├── security-sustainability.tsx # Security & eco features
│   ├── faq.tsx                 # Accordion FAQ
│   ├── cta.tsx                 # Final call-to-action
│   └── site-footer.tsx         # Footer with links
├── lib/
│   └── utils.ts                # Utility functions (cn)
├── public/
│   ├── nrg-logo.svg            # NRG logo (light)
│   ├── nrg-logo-dark.svg       # NRG logo (dark)
│   ├── og-nrg.png              # Open Graph preview image
│   └── favicon.ico             # Favicon
├── tailwind.config.ts          # Tailwind configuration
├── next-sitemap.config.js      # Sitemap configuration
├── package.json
└── README.md
```

---

## 🧩 Page Sections

The landing page includes:

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Headline, CTAs, social proof badges, station illustration
3. **Problem/Solution** - Two-column comparison
4. **How It Works** - 4-step animated process
5. **Features** - 6 feature cards + battery health meter
6. **Pricing** - 3 subscription tiers
7. **Campus Map** - UAE map with campus pins
8. **Partners** - Host benefits + branded station mockup
9. **Security & Sustainability** - Two-column cards with icons
10. **FAQ** - Accordion with 6 common questions
11. **CTA** - Final conversion section
12. **Footer** - Links, legal, social icons

---

## 🎭 Animations

Framer Motion animations include:
- Fade-in on scroll
- Slide-in on viewport entry
- Pulsing glow effects
- Hover states
- **Prefers-reduced-motion** respected

---

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Collapsible mobile menu
- Stacked layouts for small screens
- Touch-optimized interactions

---

## 🔍 SEO

- Comprehensive metadata in `app/layout.tsx`
- Open Graph and Twitter cards
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Semantic HTML structure
- Alt text for images and SVGs

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast AA compliant
- Screen reader optimized

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

---

## 📄 License

© 2025 NRG. All rights reserved.

---

## 🤝 Contributing

This is a showcase project. For production use, customize:
- Replace placeholder images (`og-nrg.png`, `favicon.ico`)
- Update metadata URLs in `app/layout.tsx`
- Configure environment variables for API endpoints
- Connect payment processing (Stripe/Tap)
- Add analytics (Google Analytics, Plausible, etc.)

---

## 📞 Contact

- Website: [nrg.example.com](https://nrg.example.com)
- Email: support@nrg.example.com

---

**Built with 💚 for campus communities.**
