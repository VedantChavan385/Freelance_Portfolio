# Portfolio — 7 New Sections Implementation Plan

## Background

The portfolio currently has only the **Hero** page with a Navbar. The goal is to build **7 new sections** as a single-page scrollable experience that matches the clean, minimal premium aesthetic seen in the reference images (Novaire-inspired).

**Design Language** (from reference images):
- Light gray background: `#efefef` / `#f4f4f4`
- Typography: Mix of `Inter` (body) + italic serif accent on headings
- Black & white photography, grayscale imagery
- Clean pill-shaped category labels
- Card-based layouts with subtle `1px` borders
- Consistent section anatomy: `[label pill] → [big heading] → [subtitle] → [content]`
- Minimal, high contrast — no decorative gradients or colors

---

## Architecture Decision

> [!IMPORTANT]
> The entire portfolio will be a **single-page scrollable app** — all sections live in `App.tsx` stacked vertically. No routing/page navigation needed yet. Navigation links will smooth-scroll to sections via `id` anchors.
>
> This is the fastest build strategy and matches the Novaire reference design.

---

## Execution Order

The build will happen **section by section**, from top to bottom of the page:

```
[Already Built]
  ✅ Navbar
  ✅ Hero

[To Build — in this order]
  1 → Portfolio (Work Grid)
  2 → Case Study (Featured Work)
  3 → Services
  4 → How I Work (Process)
  5 → About
  6 → Why Choose Me
  7 → FAQ
  + Footer (bonus)
```

Reason for this order: Portfolio and Case Study create the main content hook early on the page.

---

## Proposed Changes

---

### Global Design System

#### [NEW] `src/content/portfolioContent.ts`
All section data in one file — projects, services, process steps, FAQs, etc. This separates data from UI and makes it easy to edit content without touching components.

#### [MODIFY] `src/index.css`
- Add `@import url(...)` for **Playfair Display** or **Lora** font (for the italic serif accent in headings like *"activation"*, *"done"*, *"know"*)
- Add serif font variable to `@theme`
- Add helper utility class `.font-serif-italic` for the mixed heading style

#### [MODIFY] `src/App.tsx`
- Import and render all 7 new section components in order
- Wrap with `overflow-x-hidden` to prevent any section overflow

---

### Section 1 — Portfolio (Work Grid)

#### [NEW] `src/components/Portfolio.tsx`

**Layout** (from reference image):
```
[Portfolio label pill]
"Curated projects you'll love."  ← mixed italic serif
[subtitle text]

[2-column grid of project cards]
  ┌─────────────────┐  ┌─────────────────┐
  │ [image]         │  │ [image]         │
  │ [Web Design tag]│  │ [Branding tag]  │
  ├─────────────────┤  ├─────────────────┤
  │ Project Name    │  │ Project Name    │
  │ Short subtitle  │  │ Short subtitle  │
  └─────────────────┘  └─────────────────┘
```

- **6 project cards** in a responsive 2-column grid (1-col on mobile)
- Category pill tag overlaid on the top-left of each image
- Grayscale project images (B&W aesthetic)
- Hover: subtle scale + shadow lift on card
- Filter tabs: All / Web Design / Development / Branding

---

### Section 2 — Case Study (Featured Work)

#### [NEW] `src/components/CaseStudy.tsx`

**Layout** (from reference image):
```
[Case study label pill]
"Powering activation from first click."  ← mixed italic serif

[Two-column alternating layout per case study]

LEFT BLOCK:                        RIGHT BLOCK:
  Project description text         Project image (B&W photo)
  [Metric card] [Metric card]      [Testimonial quote block]
  e.g. "5.6M Revenue Impact"       "The redesign greatly improved..."
       "97% Client Satisfaction"   — Client Name, Role @ Company
```

- **2–3 featured case studies** in alternating left/right layout
- Metric stat cards with large number + label
- Testimonial quote block with client avatar, name, company
- Staggered fade-in animation as user scrolls

---

### Section 3 — Services

#### [NEW] `src/components/Services.tsx`

**Layout** (from reference image):
```
[Services label pill]
"How I can help bring ideas to life."  ← mixed italic serif
                                       + right-aligned subtitle

[3×2 grid of service cards]
  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
  │ [icon black]   │ │ [icon black]   │ │ [icon black]   │
  │ Web Design     │ │ App Design     │ │ Branding       │
  │ description... │ │ description... │ │ description... │
  └────────────────┘ └────────────────┘ └────────────────┘

[scrolling marquee strip of skill keywords at the bottom]
Synchronization • Performance • Data Integration • Visual Reports • ...
```

- 6 service cards: Web Design, Development, Branding, UI/UX, Logo Design, 3D Motion
- Dark circular icon on the top-right of each card
- Marquee scroll strip of tech keywords at the bottom
- Cards: white/off-white background, `1px` border, `rounded-2xl`

---

### Section 4 — How I Work (Process)

#### [NEW] `src/components/Process.tsx`

**Layout** (from reference image):
```
[How I work label pill]
"See how I get things done."  ← mixed italic serif
[subtitle]

[LEFT: Vertical numbered step list]   [RIGHT: sticky image + quote]
  ○─── Step 1: Discover               [large B&W photo]
  │    Understanding goals...         
  ●─── Step 2: Define                 [quote block at bottom]
  │    Structuring flows...           "Detail-oriented and precise..."
  ○─── Step 3: Design
  │    Creating interfaces...
  ○─── Step 4: Refine
       Iterating through testing...
```

- Left: vertical timeline with dot/connector, step number badge, icon
- Right: sticky image panel + testimonial quote (stays in view while steps scroll)
- Smooth scroll-driven highlight: active step is bold, others are muted
- On mobile: full-width stacked list, image hidden

---

### Section 5 — About

#### [NEW] `src/components/About.tsx`

**Layout:**
```
[About label pill]
"Crafting digital experiences  [Right: portrait photo, circular or card]
 that speak for themselves."

[Body text — 2–3 paragraphs]
[Tech stack icons/pills: React, TypeScript, Figma, etc.]
[Availability badge: "● Available for new projects"]
```

- Left-right split: text + bio on left, portrait image on right
- Subtle skill tags for tech stack
- Animated availability indicator (green pulsing dot)
- Quote or personal philosophy sentence styled large

---

### Section 6 — Why Choose Me

#### [NEW] `src/components/WhyChooseMe.tsx`

**Layout:**
```
[Why Choose Me label pill]
"Why clients choose to work with me."

[4 horizontal value cards / pillars]
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │ 🎯 Precision │ │ ⚡ Speed     │ │ 🔄 Process   │ │ 💬 Comms     │
  │ Pixel-perfect│ │ On-time      │ │ Structured   │ │ Responsive   │
  │ execution   │ │ delivery    │ │ approach    │ │ updates     │
  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

[Social proof numbers row]
  50+ Projects  ·  100% On-time  ·  4.9★ Rating  ·  3+ Years
```

- 4 differentiator cards with icon, title, description
- Stats row with animated count-up numbers
- Optional: mini client logo strip

---

### Section 7 — FAQ

#### [NEW] `src/components/FAQ.tsx`

**Layout** (from reference image):
```
[FAQ label pill]
"All you need to know."  ← mixed italic serif
[subtitle]

[Accordion list]
  ✕ What services do you offer?          ← expanded (shows X icon)
    UI/UX design, web design, app design, branding...

  + Who do you work with?               ← collapsed (shows + icon)
  + What tools do you use?
  + How long does a project take?
  + Do you work worldwide?
  + What is your pricing model?
```

- Clean accordion: only one item open at a time
- `+` icon → `×` icon when open
- Smooth height animation on expand/collapse
- `1px` border separator between items
- Max-width centered container

---

### Bonus — Footer

#### [NEW] `src/components/Footer.tsx`

```
[Logo]    [Nav links]    [Social links]
"Let's build something great together."
© 2025 Elian Moreau. All rights reserved.
```

---

## Content Data Structure

All content will live in `src/content/portfolioContent.ts`:

```typescript
// Projects
export const projects = [{ id, title, subtitle, category, image, link }]

// Case Studies
export const caseStudies = [{ title, description, metrics[], testimonial{}, image }]

// Services
export const services = [{ icon, title, description }]

// Process Steps
export const processSteps = [{ step, icon, title, description }]

// FAQ
export const faqs = [{ question, answer }]

// Why Choose Me
export const differentiators = [{ icon, title, description }]
export const stats = [{ value, label }]
```

---

## Animation Strategy

| Section | Animation |
|---------|-----------|
| Portfolio | Cards fade + slide up on scroll (staggered) |
| Case Study | Alternating blocks slide in from opposite sides |
| Services | Cards appear with stagger as section enters view |
| Process | Active step highlights as user scrolls through |
| About | Portrait fades in, text slides in from left |
| Why Choose Me | Numbers count up when section enters viewport |
| FAQ | Accordion smooth height transition |

**Tool:** Framer Motion `useInView` + `motion.div` variants (already in use in Hero)

---

## File Structure After Build

```
src/
├── components/
│   ├── Navbar.tsx          ✅ existing
│   ├── Hero.tsx            ✅ existing
│   ├── Portfolio.tsx       🆕
│   ├── CaseStudy.tsx       🆕
│   ├── Services.tsx        🆕
│   ├── Process.tsx         🆕
│   ├── About.tsx           🆕
│   ├── WhyChooseMe.tsx     🆕
│   ├── FAQ.tsx             🆕
│   ├── Footer.tsx          🆕
│   ├── SkillTag.tsx        ✅ existing
│   └── SpeechBubble.tsx    ✅ existing
├── content/
│   ├── heroContent.ts      ✅ existing
│   └── portfolioContent.ts 🆕
└── index.css               🔧 modify (add serif font)
```

---

## Verification Plan

### Per-Section Checks
- Visual match to reference design images provided
- Responsive: mobile (390px), tablet (768px), desktop (1440px)
- All animations trigger correctly on scroll
- No horizontal overflow

### Final Check
- Full-page scroll from Hero → Footer
- Navbar links scroll to correct sections
- Build compiles without TypeScript errors (`npm run build`)
