# Celibery

Marketing + storefront-style website for **Celibery**, a GaN charger / cable / power bank
brand. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4
- Framer Motion (available for future micro-interactions)
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 Routes (home, /products, /products/[slug], /about, /contact, /cart)
  components/
    layout/            Header, Footer
    home/               Homepage sections (hero, categories, testimonials, ...)
    products/            ProductCard, AddToCart, etc.
    contact/            Contact form + FAQ accordion
    ui/                 Shared primitives (Button, Badge, Container, ProductVisual, ...)
  data/                 Site content and product catalog (single source of truth)
  lib/                  Small utilities
```

## Content

All copy, pricing, and product data live in `src/data/products.ts` and `src/data/site.ts`.
Product imagery currently uses generated gradient/icon placeholders (`ProductVisual`) —
swap in real product photography by replacing that component's usage with `<Image>` once
photos are available.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — no configuration needed,
   Vercel auto-detects Next.js.
3. Deploy. Every push to the connected branch redeploys automatically.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the project
