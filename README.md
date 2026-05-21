# Capricorn Global Properties — Website

A world-class, responsive real estate website for Capricorn Global Properties.

## Tech Stack
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — all theme tokens in `src/index.css` via `@theme {}`
- **React Router DOM v7** — client-side routing
- **Framer Motion** — scroll-triggered & hover animations
- **Lucide React** — iconography
- **Vite** — build tool

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
src/
├── assets/
│   └── logo.png              # Brand logo
├── components/
│   ├── Navbar.tsx            # Sticky nav, transparent→solid on scroll, mobile drawer
│   ├── Hero.tsx              # Full-viewport hero with search bar
│   ├── PageHeader.tsx        # Reusable header for inner pages
│   └── Footer.tsx            # 4-column footer with newsletter
├── lib/
│   └── motion.ts             # Shared Framer Motion variants (typed)
├── pages/
│   ├── HomePage.tsx          # / — Hero + Properties + Services + CTA
│   ├── AboutUsPage.tsx       # /about-us
│   ├── OurPropertiesPage.tsx # /our-properties — filterable grid
│   ├── ServicesPage.tsx      # /services
│   └── ContactUsPage.tsx     # /contact-us — form + office cards
├── App.tsx                   # Router setup
├── main.tsx                  # Entry point
└── index.css                 # Tailwind v4 @theme{} design system
```

## Design System (index.css)

All tokens are defined inside `@theme {}` and usable as Tailwind utilities:

| Token group | Examples |
|---|---|
| Gold palette | `bg-gold-500`, `text-gold-400`, `border-gold-300` |
| Charcoal | `bg-charcoal-950`, `text-charcoal-600` |
| Ivory | `bg-ivory-100`, `text-ivory-200` |
| Terracotta | `text-terra-500` |
| Fonts | `--font-serif` (Cormorant Garamond), `--font-sans` (DM Sans) |

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero, featured listings, story, services, CTA |
| `/about-us` | `AboutUsPage` | Mission, values, team |
| `/our-properties` | `OurPropertiesPage` | Filterable property grid |
| `/services` | `ServicesPage` | 8 service cards |
| `/contact-us` | `ContactUsPage` | Office cards + contact form |

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Deploy to Netlify, Vercel, or any static host.  
**Important:** For React Router to work on Netlify/Vercel, add a redirect rule:
```
/* → /index.html (200)
```
