# BlazeCart UI/UX Audit

**Auditor:** Senior UI/UX designer + frontend engineer
**Date:** July 20, 2026
**Scope:** All routes under `app/` + `components/layout/`

---

## Critical Issues

### C1. Invalid Tailwind class `$text-foreground/20` (breaks icon rendering)
- **`app/wishlist/page.tsx:41`** — `<Heart className={`size-16 $text-foreground/20`} />` — the `$` is a literal character, not a template interpolation. No actual color applied to the heart icon.
- **`app/search/page.tsx:52,64`** — Same `$text-foreground/20` on `SearchX` icons in empty state and no-results state.

### C2. Broken CSS class injection in `help/page.tsx`
- **`app/help/page.tsx:255`** — `className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${category.color} p-3 ..."` — Uses **double quotes** instead of **backtick template literal**, so `${category.color}` renders as literal text. Category gradient backgrounds never apply.

### C3. Dynamic Tailwind classes that JIT cannot generate
- **`app/admin/page.tsx:191`** — `text-${card.color.split(' ')[1]}` — `card.color` is `"from-blue-500 to-blue-600"` → split produces `to-blue-500`, but `text-to-blue-500` is invalid. Icon has no color.
- **`app/admin/page.tsx:436-437`** — `bg-${item.color}/10` and `text-${item.color}` — Tailwind JIT cannot see partial dynamic class names; these classes will never exist.

### C4. Missing `not-found.tsx`
- **`app/not-found.tsx`** does not exist. Next.js will render a bare unstyled 404 page with no branding, navigation, or search.

### C5. Scroll-to-top sticky bar never activates
- **`app/products/[slug]/page.tsx:598`** — `{typeof window !== 'undefined' && window.scrollY > 300 && (…)` — uses `window.scrollY` directly in JSX with **no scroll listener**; value never updates after initial render.

### C6. Invalid `text-white` use on spinner that is invisible in dark mode
- **`app/cart/page.tsx:480`** — `border-t-white` on a spinner inside an orange button. The white border blends into the button's dark background → spinner invisible in dark mode.

---

## Medium Issues

### M1. Hydration-mismatch risk: `page.tsx` components use `isDark` without `mounted` guard
- (Already partially fixed in the previous session — `useMounted` was added but some components may still lack it. Re-verify during Phase 2.)
- **`app/page.tsx`** — 6 components use `const isDark = mounted && theme === 'dark'` — verify this holds after recent edits.

### M2. `text-white` on gradient buttons/badges (non-photo surfaces) — ~25+ occurrences across the codebase
These use `text-white` where `text-primary-foreground` or no explicit text color would be more theme-adaptable. Not broken today, but fragile.

Key locations:
- `app/page.tsx:264,354,595` — gradient buttons
- `app/products/page.tsx:66,92,96,109,437,632` — filter buttons, progress bar
- `app/products/[slug]/page.tsx:64,178,353,405,571,610` — badges, CTA buttons
- `app/cart/page.tsx:49,233,475` — checkout buttons
- `app/checkout/page.tsx:156,169,361` — place order
- `app/categories/page.tsx:178,179,245,248,253` — category arrows, photo overlays
- `app/about/page.tsx:274,524` — CTA buttons
- `app/contact/page.tsx:208,405,554` — submit buttons
- `app/faq/page.tsx:332,408` — CTA buttons
- `app/blog/page.tsx:231,264,428,458` — CTA buttons
- `app/wishlist/page.tsx:48` — gradient button
- `app/order-tracking/page.tsx:164` — step indicator
- `app/order-success/page.tsx:103,346,551` — badges, buttons
- `app/careers/page.tsx:128,260,322` — apply buttons
- `app/help/page.tsx:397,403,432` — contact buttons
- `app/returns/page.tsx:240` — step number badge
- `app/new-arrivals/page.tsx:30,138,144,153,218` — buttons, badges
- `app/flash-sales/page.tsx:68,82,164,264` — filter pills, badges
- `app/best-sellers/page.tsx:66,187,204,217` — buttons, badges
- `app/admin/page.tsx:157,168,232` — buttons, badges
- `app/contact/page.tsx:408-409` — `border-t-white` on spinner (see C6)

### M3. Hardcoded brand color `#F57224` — 100+ occurrences across all files
Where these appear outside of brand-highlight contexts (icon containers, decorative blurs), they should use CSS variables (`--accent` or `text-primary`). Not breaking but maintenance burden.

### M4. Missing `aria-label` on icon-only buttons — 20+ occurrences
- **`app/products/page.tsx:69`** — mobile filter close button
- **`app/products/page.tsx:174-192`** — category filter buttons
- **`app/products/[slug]/page.tsx:69,80-93`** — zoom, thumbnail buttons
- **`app/cart/page.tsx:72,89`** — quantity +/- buttons
- **`app/products/[slug]/page.tsx:332-341`** — social share buttons
- **`app/order-success/page.tsx:312-325`** — share buttons (Twitter, Facebook, copy link)
- **`app/contact/page.tsx:462-473`** — social link icons
- **`app/blog/page.tsx:407-413`** — tag items (use `<span>` with `cursor-pointer` instead of `<button>`)
- **`app/search/page.tsx`** — empty state browse buttons
- **`app/flash-sales/page.tsx:79-91`** — Quick View overlay
- **`app/best-sellers/page.tsx:210-226`** — Quick View overlay

### M5. Missing `aria-expanded`/`aria-controls` on FAQ accordion buttons
- **`app/contact/page.tsx:516-521`**
- **`app/faq/page.tsx:106-131`**
- **`app/help/page.tsx:305-319`**
- **`app/returns/page.tsx:348-358`**

### M6. Missing `aria-pressed` on filter/tab toggle buttons
- **`app/faq/page.tsx:298-315`** — category filter buttons
- **`app/blog/page.tsx:381-392`** — category buttons
- **`app/flash-sales/page.tsx:258-275`** — filter buttons
- **`app/admin/page.tsx:226-238`** — timeframe filter buttons

### M7. No `aria-live="polite"` on dynamic content
- **`app/flash-sales/page.tsx:197-218`** — countdown timer values change every second
- **`app/search/page.tsx:49-60`** — search results update dynamically
- **`app/returns/page.tsx:278-316`** — form submission result area

### M8. Form inputs missing label association (`htmlFor`/`id`)
- **`app/returns/page.tsx:279-307`** — Order ID input, select element

### M9. FAQ accordions animate `height` (layout property)
- **`app/contact/page.tsx:526-530`** — `height: ["auto", 0]`
- **`app/faq/page.tsx:136-138`** — `height: 0 ↔ auto`
- **`app/help/page.tsx:322-334`** — `height: 0 ↔ auto`
- **`app/returns/page.tsx:360-367`** — `height: 0 ↔ auto`

Animating `height` triggers forced layout; should use `opacity` + `max-height` or `grid-template-rows`.

### M10. Admin chart bars animate `height`/`width` (layout property)
- **`app/admin/page.tsx:259-263`** — bar chart animates `height` → use `scaleY` with `transform-origin: bottom`
- **`app/admin/page.tsx:299-304`** — category bars animate `width` → use `scaleX` with `transform-origin: left`

### M11. Product page filter sidebar animates `width`
- **`app/products/page.tsx:136-138`** — `width` animation triggers layout → use `scaleX` with `transform-origin: right`

### M12. Cart summary panel animates `height`
- **`app/cart/page.tsx:445-447`** — `initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}` → triggers layout

### M13. `!important` overrides on shadcn Card component
- **`app/order-tracking/page.tsx:106,125`** — `!bg-muted/50 !backdrop-blur-xl` — fragile, breaks component encapsulation

### M14. Low-contrast text at `text-foreground/30`
- **`app/profile-settings/page.tsx:95`** — "Managed by Clerk" at 30% opacity
- **`app/order-success/page.tsx:164,375,565-575`** — timestamps, step dates, trust badges at 30% opacity — fail WCAG AA

### M15. Hardcoded social brand colors not theme-adaptive
- **`app/products/[slug]/page.tsx:329-341`** — `{ color: '#1877F2' }`, `{ color: '#1DA1F2' }` — inline styles don't adapt to dark/light
- **`app/contact/page.tsx:81-86,468-471`** — same pattern with `socialLinks` array

### M16. `fill-white/10 text-white/10` stars invisible on both themes
- **`app/flash-sales/page.tsx:106-107`** — unfilled star icons have `fill-white/10 text-white/10`. On dark bg (`bg-card`) these are barely visible. On light bg they're invisible.

---

## Minor Issues

### m1. Grid breakpoint inconsistency on products page
- **`app/products/page.tsx:277`** (skeleton grid) uses `xl:grid-cols-4` but **`app/products/page.tsx:591`** (real grid) uses `lg:grid-cols-3` — no `xl:grid-cols-4`.

### m2. Framer Motion inconsistency across pages
- **`wishlist/page.tsx`** and **`order-tracking/page.tsx`** use CSS `animate-fade-in` class instead of `motion.div` — inconsistent with the rest of the app.

### m3. `<AvatarImage>` missing `alt` prop
- **`app/dashboard/page.tsx:121`** — `<AvatarImage>` with no `alt` attribute
- **`app/profile-settings/page.tsx:85-90`** — same issue

### m4. Share trigger uses `<button>` instead of shadcn `<Button>`
- **`app/order-success/page.tsx:297-303`** — native `<button>` with no variant styling

### m5. Step connector creates horizontal scroll at certain breakpoints
- **`app/returns/page.tsx:234`** — absolutely positioned step line causes phantom scroll

### m6. `text-foreground/20` on Truck icon (< 20% opacity)
- **`app/order-tracking/page.tsx:251`** — icon at 20% opacity, insufficient contrast

### m7. Emoji icons used for category icons
- **`app/faq/page.tsx:18-25`** — emoji render inconsistently across platforms and are not accessible to screen readers

### m8. Timeline responsive gap on about page
- **`app/about/page.tsx:300-301`** — timeline vertical line is `hidden lg:block` but grid uses `lg:grid-cols-5`; on tablet (`md`–`lg`) items stack without connecting line

---

## Suggestions

### S1. Theme token consolidation
Replace all hardcoded `#F57224` with a Tailwind CSS variable like `text-accent` / `bg-accent`. The CSS variable is defined in globals.css but not used as a utility class name mapping in `@theme inline { … }`.

### S2. Grid product card uniformity
Standardize product card hover patterns across all pages — currently mixes `hover:border-[#F57224]/30`, `hover:shadow-[0_0_40px_rgba(245,114,36,0.2)]`, and `glass-premium` class.

### S3. Reduce animated blur circles
Pages with 3+ `animate-pulse` blur circles cause continuous style recalculations. Consider `will-change` or reducing count on mobile.

### S4. Cart height animation
Replace `height: auto` animation with `max-height` + `overflow: hidden` to avoid layout thrashing.

### S5. Add `will-change: transform` to glass elements
`glass-premium`, `glass-card`, and `glass-navbar` use `backdrop-filter` which is GPU-accelerated but could benefit from `will-change: transform` hints.

### S6. Monorepo-consistent skeleton loading patterns
Product skeletons exist on some pages but not others. Add consistent skeleton loading for product grids on all listing pages.

### S7. Add `prefers-reduced-motion` support
No page currently checks `prefers-reduced-motion`. Add `@media (prefers-reduced-motion: reduce)` to disable or slow all Framer Motion and CSS animations.

### S8. Form validation UX
**`app/checkout/page.tsx:66-71`** — only validates one missing field at a time; no inline error styling or `aria-invalid`/`aria-describedby`. Add real-time per-field validation.

### S9. Add `viewport={{ once: true }}` consistently
Some `whileInView` animations lack `{ once: true }`, meaning they re-trigger on scroll. Add consistently across the app for performance.

---

## Summary Counts

| Category | Count |
|----------|-------|
| Critical bugs | 6 |
| Medium (theme/a11y/anim) | 16 |
| Minor | 8 |
| Suggestions | 9 |
| **Hardcoded `#F57224` occurrences** | 100+ |
| **`text-white` on non-photo surfaces** | 25+ |
| **Missing `aria-label`** | 20+ |
| **Animating layout properties** | 6 |
| **Missing `aria-expanded` on FAQ buttons** | 4 |

---

## Files Not Audited (excluded per scope)
- `app/api/*` — server routes
- `app/seller/[id]/page.tsx` — seller routes
- `app/sign-in/*`, `app/sign-up/*` — Clerk-managed
- `app/admin/page.tsx` — admin panel (included, but logic not changed)
