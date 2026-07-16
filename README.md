# SoftwareDesign.io

Production-ready website for SoftwareDesign.io — a Boston-based design studio.

**Tagline:** Software design that ships.

---

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** (build tool)
- **Tailwind CSS 3** (styling)
- **Framer Motion** (page transitions, hero animations)
- **Lenis** (smooth scroll, desktop only)
- **react-leaflet** + **CartoDB Positron** tiles (map)
- **react-hook-form** + **Zod** (contact form)
- **lucide-react** (icons)
- **@fontsource** (self-hosted Inter + Instrument Serif + Geist Mono)

---

## Quick start

```bash
npm install
npm run dev
```

Then visit `http://localhost:5173`.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Vite) |
| `npm run build` | Build for production (`tsc -b && vite build`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier across `src/` |

---

## Project structure

```
softwaredesign-io/
├── public/                      # Static assets (favicon, headers, sitemap)
│   ├── _headers                 # Cloudflare Pages security headers
│   ├── _redirects               # SPA fallback
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── effects/             # SmoothScrollProvider, MagneticButton, RevealOnScroll
│   │   ├── layout/              # Container, Section, Nav, Footer
│   │   ├── sections/            # Hero, ServiceGrid, ProcessTimeline, ContactForm, MapEmbed, ...
│   │   └── ui/                  # Button, Card, Input, Select, Textarea, Badge, Tag, Accordion
│   ├── data/                    # Services, case studies, testimonials, team, FAQs, site config
│   ├── hooks/                   # useReveal, useMagnetic
│   ├── lib/                     # Utility functions, SEO helper
│   ├── pages/
│   │   ├── services/            # Six service detail pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Process.tsx
│   │   ├── Work.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── App.tsx                  # Router + layout shell
│   ├── main.tsx                 # Entry point + font imports
│   └── index.css                # Global styles + design tokens
├── index.html                   # SEO meta tags, JSON-LD schema
├── tailwind.config.ts           # Design tokens (colors, type scale, motion)
├── vite.config.ts               # Build config + code splitting
└── tsconfig.json                # TypeScript strict mode
```

---

## Design system

Brand voice: clean, confident, agency-grade. Light mode primary. Heavy whitespace, big serif headlines, single signature accent.

### Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `bg-primary` | `#FAFAF7` | Warm off-white page background |
| `bg-secondary` | `#F2F1EC` | Section alternation |
| `bg-tertiary` | `#FFFFFF` | Cards, contrast panels |
| `ink-primary` | `#0A0A0A` | Body text, headlines |
| `ink-secondary` | `#3A3A3A` | Secondary copy |
| `ink-tertiary` | `#6B6B6B` | Captions, meta |
| `accent` | `#0F62FE` | Single signature accent (IBM electric blue) |
| `accent-hover` | `#0848C7` | Hover state |
| `accent-soft` | `#E6EEFF` | Soft backgrounds, badges |

### Typography

- **Display / headlines:** Instrument Serif (use `serif-italic` class for accent words)
- **Body / UI:** Inter
- **Eyebrows / technical:** Geist Mono (`eyebrow` utility class)

### Motion

- Soft easing: `cubic-bezier(0.32, 0.72, 0, 1)`
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Hover transitions: 150–250ms
- Page transitions: 300ms cross-fade
- All animations respect `prefers-reduced-motion`

---

## Pre-launch checklist

Before pushing live, swap the placeholders below. Each is intentionally flagged with a code comment, so search the repo for the marker if you can't remember where it lives.

### Required swaps

- [ ] **Formspree endpoint** — `src/data/site.ts`. Replace `https://formspree.io/f/REPLACE_ME` with the real form endpoint.
- [ ] **Client logos** — `src/data/site.ts`. Replace `clientLogos` array with real client wordmarks (or swap the LogoStrip component to render real SVG logos).
- [ ] **Case studies** — `src/data/caseStudies.ts`. Currently three placeholder studies (`brewlab-coffee`, `linewise`, `northshore-roofing`). Replace with real engagements and outcomes.
- [ ] **Testimonials** — `src/data/testimonials.ts`. Currently six placeholders with comment markers. Replace with real, signed-off quotes only.
- [ ] **Team** — `src/data/team.ts`. Replace placeholder names, roles, and bios with real team. Add real avatars if desired (currently typographic initials).
- [ ] **Trust badge profiles** — `src/components/sections/TrustBadgeRow.tsx` and `TrustBadgeGrid.tsx`. Each badge `href` is currently `#` with `aria-label="Pending verification"`. Wire to:
  - Real Google Business Profile URL
  - Real Trustpilot business URL
  - BBB accreditation profile (only if accredited)
  - Verify insurance and bonding before displaying that badge
- [ ] **Social links** — `src/data/site.ts`. Currently `#` placeholders for LinkedIn, Twitter, Dribbble, Instagram.
- [ ] **OG image** — Create `/public/og-image.png` (1200×630) and update `index.html` references.
- [ ] **Favicon** — Current SVG is a placeholder geometric mark. Replace with real brand mark if available.

### Recommended

- [ ] Run `npm run build` and verify Lighthouse scores (target 95+ across the board).
- [ ] Test contact form submission end-to-end after Formspree wire-up.
- [ ] Verify all `mailto:contact@softwaredesign.io` links route correctly.
- [ ] Test map loads on slow 3G simulation.
- [ ] Verify mobile menu, accordion, and form work on real iOS Safari + Android Chrome.
- [ ] Run `axe` accessibility audit on every page.
- [ ] Confirm `_headers` file deploys correctly to Cloudflare Pages.

---

## Deployment to Cloudflare Pages

### One-time setup

1. Push the repo to GitHub.
2. In Cloudflare Pages dashboard, click **Create a project** and connect the GitHub repo.
3. Configure build:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (project root)
   - **Node version:** 20 (set as environment variable `NODE_VERSION=20`)
4. Save and deploy.

### Custom domain

In Cloudflare Pages → **Custom domains**, add `softwaredesign.io` and `www.softwaredesign.io`. Cloudflare auto-provisions SSL.

### Subsequent deploys

Every push to `main` triggers an auto-deploy. Pull requests get preview URLs.

### Security headers

`public/_headers` is read by Cloudflare Pages at deploy and applied to all responses. Includes HSTS, X-Frame-Options, Permissions-Policy, etc. Verify by inspecting response headers after deploy.

---

## Accessibility

- WCAG 2.1 AA target across the site
- Semantic HTML throughout (no `<div>` soup)
- Focus rings: 2px accent ring with 2px offset
- Skip-to-content link at the top of every page
- All form fields have associated labels and ARIA attributes
- Form errors announced via `role="alert"`
- Reveal animations respect `prefers-reduced-motion`
- Smooth scroll disabled on touch devices and reduced-motion users
- Mockup SVGs marked `aria-hidden` where appropriate
- Map has descriptive `aria-label` for screen readers

---

## Performance targets

- Lighthouse: 95+ across Performance, Accessibility, Best Practices, SEO
- LCP: < 1.5s
- CLS: < 0.05
- Total JS budget: ~150KB gzipped
- Self-hosted fonts (no external font requests)
- Code-split routes via `React.lazy`
- Manual chunks for React, Framer Motion, Leaflet, forms

---

## Notes

- No phone number anywhere in the site. Email-only intake.
- All testimonials, case studies, and team members are flagged as PLACEHOLDER in code. Do not ship to production without swapping for real content.
- Smooth scroll (Lenis) is desktop-only by design — mobile uses native scroll for performance.
- `_headers` and `_redirects` are Cloudflare Pages conventions. If deploying elsewhere, port equivalents.

---

© 2026 SoftwareDesign.io
