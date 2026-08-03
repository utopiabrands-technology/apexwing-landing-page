# Apexwing Landing Page — Developer Handoff

Static, dependency-free build of the Apexwing ecommerce landing page. Ready to deploy as-is or wire into any framework.

## Structure
```
index.html          Markup for all 9 sections
css/style.css        All styles (responsive, mobile breakpoints included)
js/data.js           Content data (categories, benefits, launches, FAQ)
js/main.js           Renders dynamic lists, FAQ accordion, scroll-reveal animation
assets/              Logo files (navy for light backgrounds, white for dark)
```

## Setup
No build step. Open `index.html` directly or serve the folder with any static host (Netlify, Vercel, S3, nginx, etc).

## To do before launch
1. **Images** — every `.img-slot` div is a placeholder (grey box, labeled). Replace each with a real `<img src="..." alt="...">` at matching dimensions:
   - Hero / Featured Product shots: ~1200px+ wide, ~520px tall
   - Category cards (6): ~430px wide, 320px tall
   - Launch cards (2): ~655px wide, 280px tall
2. **Links** — set real URLs in `js/main.js`: `AMAZON_LINK` (storefront) and `SOCIAL_LINK` (social page for "Coming Soon"/"Notify Me" CTAs).
3. **Fonts** — currently loaded from Google Fonts CDN (Barlow Condensed + Manrope). Self-host if required by your infra/CSP.
4. **Copy** — hero headline, product description and FAQ answers are in `index.html` / `js/data.js` — edit directly.

## Design tokens
- Navy (primary dark): `#061334` / accent blue `#143DA3` / light blue `#9FCDD6`
- Neon green (CTA/accent): `#C4F609`
- Paper background: `#F6F5F1`
- Display font: Barlow Condensed (700/800 for headings, uppercase)
- Body font: Manrope (400/500/600/700)

## Sections
1. Sticky header — logo, nav, "Explore Collection" CTA
2. Hero — Soccer Ball promo, dual CTA (Book Your Soccer Ball / Coming Soon)
3. Category grid — Soccer, Padel Bats, Board Games, Golf, Tennis, Accessories
4. Featured Product — Soccer Ball detail + spec list + Notify Me
5. Benefits — Fearless / Focused / Performance-Driven
6. Upcoming Launches — Table Tennis, Apparel
7. FAQ accordion — shipping, returns, sizing, warranty
8. Footer — contact, policies, social links
