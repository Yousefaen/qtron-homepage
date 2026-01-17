# Qtron Investments Website Modernization Plan

## Executive Summary

A modern, professional website demo for Qtron Investments using **Next.js 14+**, **Tailwind CSS**, and **TypeScript**. The demo focuses on two polished pages (Homepage and About) showcasing modern web development while maintaining the brand's professional financial identity.

---

## Current Website Analysis

### Brand Identity (to preserve)
- **Logo**: Concentric circles forming "QI" symbol
- **Colors**: Deep burgundy/maroon primary, navy blue secondary
- **Tagline**: "OUTPERFORM • TRANSPARENT • COST-EFFICIENT"
- **Positioning**: Quantitative investment manager for institutional clients in Global Equity

### Issues with Current Design (2016)
- Dated visual aesthetic
- Heavy gradients and dense text
- Limited whitespace
- Basic animations
- Not optimized for modern devices

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14+** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Vercel** | Deployment platform |

---

## Design Direction

### Modern Aesthetic
- Minimalist with generous whitespace
- Modern typography (Inter font family)
- Subtle scroll animations
- Glass morphism accents where appropriate
- Clear visual hierarchy
- Professional but engaging

### Color Palette

```
Primary (Burgundy):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#8f1a40 (burgundy-800) - Primary actions, headings
#7a1a3a (burgundy-900) - Hover states
#fdf2f4 (burgundy-50)  - Light backgrounds

Secondary (Navy):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#243b53 (navy-800)     - Secondary elements
#102a43 (navy-900)     - Dark sections, footer
#f0f4f8 (navy-50)      - Subtle backgrounds

Neutral:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#ffffff               - Backgrounds
#f8fafc               - Alt backgrounds
#64748b               - Body text
#1e293b               - Headings
```

---

## Project Structure

```
/src
├── app/
│   ├── layout.tsx           # Root layout with fonts, metadata
│   ├── page.tsx             # Homepage
│   ├── about/
│   │   └── page.tsx         # About page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/            # Page sections
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   ├── ValueProps.tsx
│   │   │   └── QuoteSection.tsx
│   │   └── about/
│   │       ├── AboutHero.tsx
│   │       ├── Outperformance.tsx
│   │       ├── Transparency.tsx
│   │       └── CostEfficiency.tsx
│   └── shared/              # Shared components
│       ├── Logo.tsx
│       ├── AnimatedLogo.tsx
│       └── FadeIn.tsx
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── constants.ts         # Site constants
│   └── animations.ts        # Animation variants
└── hooks/
    └── useScrollAnimation.ts
```

---

## Page Layouts

### Homepage

```
┌─────────────────────────────────────────────┐
│  [Header - transparent, blur on scroll]     │
├─────────────────────────────────────────────┤
│                                             │
│  HERO SECTION (full viewport)               │
│  ─────────────────────────────              │
│  • Animated logo/graphic (right)            │
│  • Company name + tagline                   │
│  • Brief intro text                         │
│  • CTA buttons                              │
│  • Scroll indicator                         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  VALUE PROPS (3-column grid)                │
│  ─────────────────────────────              │
│  • Outperformance card                      │
│  • Transparency card                        │
│  • Cost Efficiency card                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  QUOTE SECTION (navy background)            │
│  ─────────────────────────────              │
│  • Aristotle quote                          │
│  • Elegant typography                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  PHILOSOPHY SECTION                         │
│  ─────────────────────────────              │
│  • "Markets Are Reflexive"                  │
│  • Two-column: text + visual                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CTA SECTION (burgundy background)          │
│  ─────────────────────────────              │
│  • Contact prompt                           │
│                                             │
├─────────────────────────────────────────────┤
│  [Footer - dark theme]                      │
└─────────────────────────────────────────────┘
```

### About Page

```
┌─────────────────────────────────────────────┐
│  [Header]                                   │
├─────────────────────────────────────────────┤
│                                             │
│  ABOUT HERO (shorter, 60vh)                 │
│  ─────────────────────────────              │
│  • "About Qtron" heading                    │
│  • Mission statement                        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  OUTPERFORMANCE (white bg)                  │
│  ─────────────────────────────              │
│  • Two-column: content + visual             │
│  • Bullet points                            │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  TRANSPARENCY (light burgundy bg)           │
│  ─────────────────────────────              │
│  • Two-column: visual + content             │
│  • Alternating layout                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  COST EFFICIENCY (white bg)                 │
│  ─────────────────────────────              │
│  • Two-column: content + visual             │
│                                             │
├─────────────────────────────────────────────┤
│  [CTA Section + Footer]                     │
└─────────────────────────────────────────────┘
```

---

## Animation Strategy

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero text | Fade up with stagger | Page load |
| Hero buttons | Slide up | Page load (delayed) |
| Background graphic | Subtle float | Continuous |
| Section headings | Fade up | Scroll into view |
| Cards | Scale in with stagger | Scroll into view |
| Navigation links | Underline slide | Hover |
| Buttons | Scale + shadow lift | Hover |

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Initialize Next.js project with TypeScript & Tailwind
- [ ] Configure Tailwind with custom theme (brand colors, animations)
- [ ] Set up ESLint and Prettier
- [ ] Install dependencies (framer-motion, clsx, tailwind-merge)

### Phase 2: Design System
- [ ] Create utility functions (`cn` helper)
- [ ] Build UI primitives (Button, Card, Container)
- [ ] Create Layout components (Header, Footer, Navigation)
- [ ] Build shared components (Logo, FadeIn, SectionHeading)

### Phase 3: Homepage
- [ ] Hero section with animated logo
- [ ] Value props section (3 cards)
- [ ] Quote section
- [ ] Philosophy section
- [ ] CTA section

### Phase 4: About Page
- [ ] About hero section
- [ ] Outperformance section
- [ ] Transparency section
- [ ] Cost Efficiency section

### Phase 5: Polish
- [ ] Animation refinement
- [ ] Responsive testing & fixes
- [ ] Performance optimization
- [ ] Accessibility audit

---

## Files to Create (~35 files)

### Configuration (7)
- `package.json`, `tsconfig.json`, `tailwind.config.ts`
- `postcss.config.js`, `next.config.js`
- `.eslintrc.json`, `.prettierrc`

### App (4)
- `src/app/layout.tsx`, `src/app/page.tsx`
- `src/app/globals.css`, `src/app/about/page.tsx`

### UI Components (4)
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/index.ts`

### Layout Components (3)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navigation.tsx`

### Shared Components (4)
- `src/components/shared/Logo.tsx`
- `src/components/shared/AnimatedLogo.tsx`
- `src/components/shared/FadeIn.tsx`
- `src/components/shared/SectionHeading.tsx`

### Home Sections (5)
- `src/components/sections/home/Hero.tsx`
- `src/components/sections/home/ValueProps.tsx`
- `src/components/sections/home/QuoteSection.tsx`
- `src/components/sections/home/Philosophy.tsx`
- `src/components/sections/home/CTASection.tsx`

### About Sections (4)
- `src/components/sections/about/AboutHero.tsx`
- `src/components/sections/about/Outperformance.tsx`
- `src/components/sections/about/Transparency.tsx`
- `src/components/sections/about/CostEfficiency.tsx`

### Utilities (4)
- `src/lib/utils.ts`
- `src/lib/constants.ts`
- `src/lib/animations.ts`
- `src/hooks/useScrollAnimation.ts`

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |

---

## Key Differentiators for Demo

1. **Modern Tech Stack**: Next.js 14 with App Router (latest patterns)
2. **Smooth Animations**: Framer Motion scroll-triggered animations
3. **Responsive Design**: Mobile-first, works beautifully on all devices
4. **Accessibility**: WCAG AA compliant
5. **Performance**: Optimized images, fonts, and code splitting
6. **Clean Code**: TypeScript, consistent patterns, well-organized

---

## Deployment

**Recommended: Vercel**
- Free tier sufficient for demo
- Automatic Next.js optimization
- Preview deployments for each commit
- Custom domain support

---

*This demo showcases modern web development skills while respecting Qtron's professional brand identity.*
