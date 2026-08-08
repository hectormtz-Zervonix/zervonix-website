# Minimalist Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement moderate minimalist redesign with micro-interactions, replacing emojis with Lucide SVG icons, and transforming team section to collective expertise.

**Architecture:** Static HTML/CSS/JS site. Changes involve CSS variable updates, new animation utilities, HTML structure modifications for icons and expertise section, and JavaScript for scroll animations and counter effects.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JavaScript, Lucide Icons (SVG inline)

## Global Constraints

- Maintain purple color palette (`#8A65E8`, `#A07AF0`, `#7250D4`)
- All Lucide icons: 24px size, 1.5px stroke width
- Transitions: 0.25s ease (base), 0.4s ease (slow)
- Section padding: 100px desktop, 60px mobile
- No external dependencies except Google Fonts (already loaded)
- Support modern browsers (ES6+, CSS custom properties)

---

## File Structure

| File | Changes |
|------|---------|
| `css/styles.css` | Update CSS variables (spacing, transitions, glow opacity) |
| `css/components.css` | Add scroll animation classes, update component styles, add expertise section styles |
| `js/main.js` | Add Intersection Observer for scroll animations, counter animation function |
| `index.html` | Replace emojis with SVG icons, update hero/team/AWS sections, add animation classes |
| `nosotros.html` | Apply expertise section changes, consistency updates |
| `contacto.html` | Apply visual consistency updates |
| `servicios/aws-migration.html` | Apply visual consistency updates |

---

### Task 1: Update CSS Variables

**Files:**
- Modify: `css/styles.css:9-45`

**Interfaces:**
- Produces: Updated CSS custom properties used by all components

- [ ] **Step 1: Open styles.css and locate :root block**

Read file to confirm current values at lines 9-45.

- [ ] **Step 2: Update spacing variables**

```css
/* In :root block, update these values: */
--section-py-desktop: 100px;  /* was 80px */
--section-py-mobile: 60px;    /* was 48px */
--card-gap: 24px;             /* was 20px */
```

- [ ] **Step 3: Update transition variables**

```css
/* In :root block, update these values: */
--transition-fast: 0.15s ease;  /* unchanged */
--transition-base: 0.25s ease;  /* was 0.2s */
--transition-slow: 0.4s ease;   /* was 0.3s */
```

- [ ] **Step 4: Add glow opacity variable**

```css
/* Add new variable in :root block: */
--glow-opacity: 0.15;
```

- [ ] **Step 5: Verify changes compile**

Open index.html in browser, inspect computed styles to verify variables are applied.

- [ ] **Step 6: Commit**

```bash
git add css/styles.css
git commit -m "style: update CSS variables for minimalist redesign

- Increase section padding (80px → 100px desktop, 48px → 60px mobile)
- Increase card gap (20px → 24px)
- Slow down transitions for premium feel (0.2s → 0.25s)
- Add glow-opacity variable (0.15)"
```

---

### Task 2: Add Scroll Animation CSS Classes

**Files:**
- Modify: `css/components.css` (append at end)

**Interfaces:**
- Produces: `.fade-in-on-scroll`, `.fade-in-on-scroll.visible`, `.stagger-*` classes

- [ ] **Step 1: Append scroll animation styles to components.css**

```css
/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for grouped elements */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }
.stagger-6 { transition-delay: 0.6s; }

/* Hero-specific animations */
.hero__content {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}

.hero__content.visible {
  opacity: 1;
  transform: translateX(0);
}

.hero__visual {
  opacity: 0;
  transition: opacity 0.6s ease 0.4s;
}

.hero__visual.visible {
  opacity: 1;
}

/* Button pulse animation for CTA */
@keyframes subtle-pulse {
  0%, 100% { box-shadow: 0 8px 24px rgba(138, 101, 232, 0.25); }
  50% { box-shadow: 0 8px 32px rgba(138, 101, 232, 0.4); }
}

.btn--pulse {
  animation: subtle-pulse 3s ease-in-out infinite;
}
```

- [ ] **Step 2: Verify CSS syntax**

Open browser dev tools, check for CSS parsing errors.

- [ ] **Step 3: Commit**

```bash
git add css/components.css
git commit -m "style: add scroll animation utility classes

- fade-in-on-scroll with visible state
- Stagger delay classes (0.1s increments)
- Hero-specific entrance animations
- Subtle pulse animation for CTA button"
```

---

### Task 3: Add Expertise Section CSS

**Files:**
- Modify: `css/components.css` (append after scroll animations)

**Interfaces:**
- Produces: `.expertise`, `.expertise__metrics`, `.expertise__metric`, `.expertise__specialties` classes

- [ ] **Step 1: Append expertise section styles**

```css
/* ============================================================
   EXPERTISE SECTION (replaces Team Cards)
   ============================================================ */
.expertise {
  text-align: center;
}

.expertise__metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 48px 40px;
  background: rgba(138, 101, 232, 0.05);
  border: 1px solid rgba(138, 101, 232, 0.15);
  border-radius: 16px;
  margin-bottom: 32px;
}

.expertise__metric {
  text-align: center;
}

.expertise__metric-value {
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--color-purple-bright);
  font-family: var(--font-brand);
  line-height: 1;
  margin-bottom: 8px;
}

.expertise__metric-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.expertise__specialties {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.expertise__specialty {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(138, 101, 232, 0.08);
  border: 1px solid rgba(138, 101, 232, 0.2);
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-purple-bright);
  transition: all var(--transition-base);
}

.expertise__specialty:hover {
  background: rgba(138, 101, 232, 0.12);
  border-color: rgba(138, 101, 232, 0.35);
}

.expertise__specialty svg {
  width: 18px;
  height: 18px;
  stroke-width: 1.5;
}

@media (max-width: 900px) {
  .expertise__metrics {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 32px 24px;
  }
}

@media (max-width: 640px) {
  .expertise__metrics {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 28px 20px;
  }

  .expertise__metric-value {
    font-size: 2.25rem;
  }

  .expertise__specialties {
    gap: 8px;
  }

  .expertise__specialty {
    padding: 8px 14px;
    font-size: 0.82rem;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/components.css
git commit -m "style: add expertise section CSS

Replaces team cards with collective expertise display:
- Metrics grid (4 columns desktop, 2 mobile)
- Specialty badges with Lucide icon support
- Purple theme with subtle hover effects"
```

---

### Task 4: Update Component Styles for Minimalism

**Files:**
- Modify: `css/components.css` (multiple sections)

**Interfaces:**
- Consumes: Updated CSS variables from Task 1
- Produces: Refined hover states, reduced shadows, updated opacity values

- [ ] **Step 1: Update hero subtitle font-weight**

Find `.hero__subtitle` (around line 394) and change:

```css
.hero__subtitle {
  font-size: 1.3rem;
  color: var(--color-purple-bright);
  font-weight: 400;  /* was 500 */
  margin-bottom: 16px;
  line-height: 1.4;
}
```

- [ ] **Step 2: Update stats bar label letter-spacing**

Find `.stats-bar__label` (around line 451) and update:

```css
.stats-bar__label {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-weight: 500;
  letter-spacing: 0.05em;  /* was 0.03em */
  text-transform: uppercase;
}
```

- [ ] **Step 3: Update stats bar value size**

Find `.stats-bar__value` (around line 442) and update:

```css
.stats-bar__value {
  font-size: 2.75rem;  /* was 2.5rem - 10% increase */
  font-weight: 800;
  color: var(--color-purple-bright);
  line-height: 1;
  margin-bottom: 8px;
  font-family: var(--font-brand);
}
```

- [ ] **Step 4: Update challenge option hover**

Find `.challenge__option:hover` (around line 494) and update:

```css
.challenge__option:hover {
  border-color: var(--color-purple);
  background: rgba(138, 101, 232, 0.05);  /* was 0.06 */
  color: var(--color-white);
  transform: translateY(-2px);
}
```

- [ ] **Step 5: Update service card coming-soon opacity**

Find `.service-card--coming-soon` (around line 613) and update:

```css
.service-card--coming-soon {
  opacity: 0.7;  /* was 0.6 */
  pointer-events: none;
}
```

- [ ] **Step 6: Update why item number opacity**

Find `.why__item-number` (around line 737) and update:

```css
.why__item-number {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--color-purple);
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  opacity: 0.6;  /* add this */
}
```

- [ ] **Step 7: Update CTA final padding and border**

Find `.cta-final` (around line 828) and update:

```css
.cta-final {
  background: linear-gradient(135deg, #1a0f2e 0%, #0d1117 100%);
  border-top: 1px solid rgba(138, 101, 232, 0.15);  /* was 0.2 */
  border-bottom: 1px solid rgba(138, 101, 232, 0.15);  /* was 0.2 */
  text-align: center;
  padding: 100px 0;  /* was 96px */
  position: relative;
  overflow: hidden;
}
```

- [ ] **Step 8: Update footer inner gap**

Find `.footer__inner` (around line 877) and update:

```css
.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;  /* was 40px */
  margin-bottom: 48px;
}
```

- [ ] **Step 9: Update footer border opacity**

Find `.footer` (around line 871) and update:

```css
.footer {
  background: #07090f;
  padding: 60px 0 32px;
  border-top: 1px solid rgba(138, 101, 232, 0.1);  /* was var(--color-border) */
}
```

- [ ] **Step 10: Commit**

```bash
git add css/components.css
git commit -m "style: refine component styles for minimalism

- Lighter hero subtitle (font-weight 400)
- Larger stats values (+10%)
- Subtler hover states
- Increased coming-soon opacity (0.6 → 0.7)
- Why numbers at 60% opacity
- More whitespace in CTA and footer"
```

---

### Task 5: Add JavaScript Scroll Animations

**Files:**
- Modify: `js/main.js` (append at end)

**Interfaces:**
- Produces: `initScrollAnimations()`, `initCounterAnimations()` functions

- [ ] **Step 1: Add Intersection Observer for scroll animations**

Append to `js/main.js`:

```javascript
// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-on-scroll, .hero__content, .hero__visual');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

- [ ] **Step 2: Add counter animation function**

Append to `js/main.js`:

```javascript
// ============================================================
// COUNTER ANIMATIONS
// ============================================================
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  const isPlus = target.toString().includes('+');
  const numericTarget = parseInt(target.toString().replace(/[^0-9]/g, ''));

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(easedProgress * numericTarget);

    element.textContent = current + (isPlus ? '+' : '');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-counter');
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(el => {
    el.textContent = '0';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initCounterAnimations);
```

- [ ] **Step 3: Verify no JavaScript errors**

Open browser console, reload page, check for errors.

- [ ] **Step 4: Commit**

```bash
git add js/main.js
git commit -m "feat: add scroll and counter animations

- Intersection Observer for fade-in animations
- Counter animation with easeOutQuart easing
- data-counter attribute triggers number animation
- 1.5s duration for counters"
```

---

### Task 6: Create Lucide Icon SVG Constants

**Files:**
- Modify: `js/main.js` (add before scroll animations)

**Interfaces:**
- Produces: `LUCIDE_ICONS` object with SVG strings

- [ ] **Step 1: Add Lucide icon SVG definitions**

Add before the scroll animations section in `js/main.js`:

```javascript
// ============================================================
// LUCIDE ICONS (SVG inline)
// ============================================================
const LUCIDE_ICONS = {
  'cloud-upload': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>',

  'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',

  'trending-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',

  'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',

  'git-merge': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>',

  'brain': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',

  'cloud': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',

  'network': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',

  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
};

// Helper function to get icon
function getLucideIcon(name, size = 24) {
  const icon = LUCIDE_ICONS[name];
  if (!icon) return '';
  return icon.replace(/width="24"/g, `width="${size}"`).replace(/height="24"/g, `height="${size}"`);
}
```

- [ ] **Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add Lucide icon SVG definitions

Icons for services and challenges:
- cloud-upload, git-branch, trending-down
- shield-check, git-merge, brain
- cloud, network, arrow-right
- Helper function getLucideIcon(name, size)"
```

---

### Task 7: Update Hero Section HTML

**Files:**
- Modify: `index.html:71-241`

**Interfaces:**
- Consumes: Scroll animation CSS classes from Task 2

- [ ] **Step 1: Update badge to remove border styling**

Find the badge element (around line 80) and update:

```html
<span class="badge badge--minimal" data-i18n="hero.badge">● Cloud Consulting LATAM</span>
```

- [ ] **Step 2: Add badge--minimal CSS**

In `css/components.css`, find `.badge` section and add:

```css
.badge--minimal {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.85rem;
}
```

- [ ] **Step 3: Shorten hero description**

Find hero description (around line 84) and update the Spanish text:

```html
<p class="hero__desc" data-i18n="hero.desc">Diseñamos, migramos y optimizamos tu AWS.</p>
```

- [ ] **Step 4: Update hero SVG bg-aura opacity**

Find the SVG (around line 107-109) and update the radialGradient:

```html
<radialGradient id="bg-aura" cx="50%" cy="50%" r="50%">
  <stop offset="0%" stop-color="#8A65E8" stop-opacity="0.10"/>  <!-- was 0.18 -->
  <stop offset="100%" stop-color="#8A65E8" stop-opacity="0"/>
</radialGradient>
```

- [ ] **Step 5: Update translations in main.js for shortened description**

Find the translations object in `js/main.js` and update:

```javascript
// In Spanish translations:
'hero.desc': 'Diseñamos, migramos y optimizamos tu AWS.',

// In English translations:
'hero.desc': 'We design, migrate, and optimize your AWS.',
```

- [ ] **Step 6: Commit**

```bash
git add index.html css/components.css js/main.js
git commit -m "refactor: simplify hero section

- Minimal badge style (no border)
- Shortened description to one line
- Reduced SVG glow opacity (0.18 → 0.10)
- Updated ES/EN translations"
```

---

### Task 8: Update Stats Bar with Counter Attributes

**Files:**
- Modify: `index.html:243-265`

**Interfaces:**
- Consumes: `initCounterAnimations()` from Task 5

- [ ] **Step 1: Add data-counter attributes to stat values**

Update the stats bar section:

```html
<section class="stats-bar" aria-label="Estadísticas">
  <div class="container">
    <div class="stats-bar__grid">
      <div class="stats-bar__item">
        <div class="stats-bar__value" data-counter="5">5</div>
        <div class="stats-bar__label" data-i18n="stats.engineers_label">Ingenieros AWS</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value" data-counter="4+">4+</div>
        <div class="stats-bar__label" data-i18n="stats.specs_label">Especialidades AWS</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value" data-counter="100">100%</div>
        <div class="stats-bar__label" data-i18n="stats.focus_label">AWS Focus</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value">LATAM</div>
        <div class="stats-bar__label" data-i18n="stats.coverage_label">Cobertura regional</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Update counter animation to handle percentage**

In `js/main.js`, update `animateCounter` function:

```javascript
function animateCounter(element, target, duration = 1500) {
  const startTime = performance.now();
  const isPlus = target.toString().includes('+');
  const isPercent = target.toString().includes('%') || parseInt(target) === 100;
  const numericTarget = parseInt(target.toString().replace(/[^0-9]/g, ''));

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(easedProgress * numericTarget);

    let suffix = '';
    if (isPlus) suffix = '+';
    if (isPercent) suffix = '%';

    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html js/main.js
git commit -m "feat: add counter animation to stats bar

- data-counter attributes trigger animations
- Handles +, %, and plain numbers
- LATAM text stays static (no counter)"
```

---

### Task 9: Replace Challenge Panel Emojis with Lucide Icons

**Files:**
- Modify: `index.html:267-303`

**Interfaces:**
- Consumes: `LUCIDE_ICONS` from Task 6

- [ ] **Step 1: Update challenge options HTML**

Replace the challenge grid section:

```html
<div class="challenge__grid" role="group" aria-label="Selecciona tu desafío">
  <div class="challenge__option" data-index="1" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
    </span>
    <span data-i18n="challenge.opt1">Migrar mi infraestructura a AWS</span>
  </div>
  <div class="challenge__option" data-index="2" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
    </span>
    <span data-i18n="challenge.opt2">Diseñar una arquitectura escalable</span>
  </div>
  <div class="challenge__option" data-index="3" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
    </span>
    <span data-i18n="challenge.opt3">Reducir costos en cloud</span>
  </div>
  <div class="challenge__option" data-index="4" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    </span>
    <span data-i18n="challenge.opt4">Fortalecer la seguridad de mi infraestructura</span>
  </div>
  <div class="challenge__option" data-index="5" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
    </span>
    <span data-i18n="challenge.opt5">Implementar DevOps y automatización</span>
  </div>
  <div class="challenge__option" data-index="6" role="button" tabindex="0">
    <span class="challenge__option-icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
    </span>
    <span data-i18n="challenge.opt6">Integrar AI/ML en mis procesos</span>
  </div>
</div>
```

- [ ] **Step 2: Update challenge icon CSS for SVG**

In `css/components.css`, update `.challenge__option-icon`:

```css
.challenge__option-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-purple-bright);
}

.challenge__option-icon svg {
  width: 24px;
  height: 24px;
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/components.css
git commit -m "refactor: replace challenge emojis with Lucide SVG icons

Icons: cloud-upload, git-branch, trending-down,
shield-check, git-merge, brain"
```

---

### Task 10: Replace Service Card Emojis with Lucide Icons

**Files:**
- Modify: `index.html:306-351`

**Interfaces:**
- Consumes: Lucide SVG icons

- [ ] **Step 1: Update service cards HTML**

Replace service cards section with SVG icons:

```html
<div class="services__grid">
  <div class="service-card">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s1.name">Migración AWS</h3>
    <p class="service-card__desc" data-i18n="services.s1.desc">Lift &amp; shift, re-platforming y re-architecting con mínimo riesgo.</p>
    <a href="servicios/aws-migration.html" class="service-card__link">
      <span data-i18n="services.learn_more">Ver más</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  </div>
  <div class="service-card service-card--coming-soon">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s2.name">Arquitectura Cloud</h3>
    <p class="service-card__desc" data-i18n="services.s2.desc">Well-Architected Framework, diseño escalable y resiliente.</p>
    <span class="service-card__link" data-i18n="services.coming_soon">Próximamente</span>
  </div>
  <div class="service-card service-card--coming-soon">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s3.name">Optimización de Costos</h3>
    <p class="service-card__desc" data-i18n="services.s3.desc">FinOps, rightsizing y Reserved Instances para reducir tu gasto.</p>
    <span class="service-card__link" data-i18n="services.coming_soon">Próximamente</span>
  </div>
  <div class="service-card service-card--coming-soon">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s4.name">Seguridad Cloud</h3>
    <p class="service-card__desc" data-i18n="services.s4.desc">IAM, compliance, threat detection y respuesta a incidentes.</p>
    <span class="service-card__link" data-i18n="services.coming_soon">Próximamente</span>
  </div>
  <div class="service-card service-card--coming-soon">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s5.name">DevOps &amp; CI/CD</h3>
    <p class="service-card__desc" data-i18n="services.s5.desc">Pipelines, IaC con Terraform/CDK, Kubernetes y monitoreo.</p>
    <span class="service-card__link" data-i18n="services.coming_soon">Próximamente</span>
  </div>
  <div class="service-card service-card--coming-soon">
    <div class="service-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
    </div>
    <h3 class="service-card__title" data-i18n="services.s6.name">AI / ML en AWS</h3>
    <p class="service-card__desc" data-i18n="services.s6.desc">SageMaker, Bedrock y GenAI integrations para escalar con IA.</p>
    <span class="service-card__link" data-i18n="services.coming_soon">Próximamente</span>
  </div>
</div>
```

- [ ] **Step 2: Update service card icon CSS**

In `css/components.css`, update `.service-card__icon`:

```css
.service-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(138, 101, 232, 0.1);
  border-radius: 12px;
  margin-bottom: 16px;
  color: var(--color-purple-bright);
}

.service-card__icon svg {
  width: 24px;
  height: 24px;
}
```

- [ ] **Step 3: Update service card link for arrow icon**

In `css/components.css`, update `.service-card__link`:

```css
.service-card__link {
  font-size: 0.875rem;
  color: var(--color-purple-bright);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap var(--transition-fast), color var(--transition-fast);
  text-decoration: none;
}

.service-card__link svg {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-fast);
}

.service-card:hover .service-card__link svg {
  transform: translateX(4px);
}
```

- [ ] **Step 4: Commit**

```bash
git add index.html css/components.css
git commit -m "refactor: replace service card emojis with Lucide SVG icons

- Icon container with purple background
- Arrow icon on 'Ver más' link
- Hover animation on arrow"
```

---

### Task 11: Update AWS Section (Remove Partner References)

**Files:**
- Modify: `index.html:354-374`

**Interfaces:**
- Produces: Renamed section without partner badge

- [ ] **Step 1: Replace AWS Partner section**

Replace the entire aws-partner section:

```html
<!-- ============ AWS EXPERTISE ============ -->
<section class="section aws-expertise">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title" data-i18n="aws.title">Especialistas AWS Certificados</h2>
      <p class="section__subtitle" data-i18n="aws.subtitle">Nuestro equipo cuenta con certificaciones en las especialidades más demandadas.</p>
    </div>
    <div class="aws-expertise__certs">
      <span class="aws-cert-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
        Solutions Architect
      </span>
      <span class="aws-cert-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
        DevOps Engineer
      </span>
      <span class="aws-cert-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
        Security Specialty
      </span>
      <span class="aws-cert-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
        Networking
      </span>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS for aws-expertise section**

In `css/components.css`, replace the aws-partner section:

```css
/* ============================================================
   AWS EXPERTISE (replaces AWS Partner)
   ============================================================ */
.aws-expertise {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.aws-expertise__certs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.aws-cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-aws);
  background: rgba(255, 153, 0, 0.08);
  border: 1px solid rgba(255, 153, 0, 0.2);
  transition: all var(--transition-base);
}

.aws-cert-badge:hover {
  background: rgba(255, 153, 0, 0.12);
  border-color: rgba(255, 153, 0, 0.35);
}

.aws-cert-badge svg {
  flex-shrink: 0;
}
```

- [ ] **Step 3: Add translations**

In `js/main.js`, add to translations:

```javascript
// Spanish
'aws.title': 'Especialistas AWS Certificados',
'aws.subtitle': 'Nuestro equipo cuenta con certificaciones en las especialidades más demandadas.',

// English
'aws.title': 'Certified AWS Specialists',
'aws.subtitle': 'Our team holds certifications in the most in-demand specialties.',
```

- [ ] **Step 4: Commit**

```bash
git add index.html css/components.css js/main.js
git commit -m "refactor: rename AWS Partner to AWS Expertise

- Remove partner badge and references
- Center-aligned certification badges
- Lucide icons for each certification
- Updated translations"
```

---

### Task 12: Update Why Zervonix Descriptions

**Files:**
- Modify: `index.html:376-400`
- Modify: `js/main.js` (translations)

**Interfaces:**
- Produces: Shortened descriptions in HTML and translations

- [ ] **Step 1: Update Why Zervonix HTML descriptions**

The HTML uses data-i18n, so just verify the structure is correct. The actual text changes happen in translations.

- [ ] **Step 2: Update Spanish translations**

In `js/main.js`, update:

```javascript
'why.1.desc': '100% AWS. Más profundidad, mejores resultados.',
'why.2.desc': 'Tu contexto, tu idioma, tu realidad.',
'why.3.desc': 'Métricas claras desde el día uno.',
```

- [ ] **Step 3: Update English translations**

In `js/main.js`, update:

```javascript
'why.1.desc': '100% AWS. More depth, better results.',
'why.2.desc': 'Your context, your language, your reality.',
'why.3.desc': 'Clear metrics from day one.',
```

- [ ] **Step 4: Commit**

```bash
git add js/main.js
git commit -m "content: shorten Why Zervonix descriptions

Reduced from 2 lines to 1 line each for cleaner look"
```

---

### Task 13: Replace Team Section with Expertise Section

**Files:**
- Modify: `index.html:402-438`

**Interfaces:**
- Consumes: Expertise CSS from Task 3, counter animations from Task 5

- [ ] **Step 1: Replace team section HTML**

Replace the entire team section:

```html
<!-- ============ EXPERTISE ============ -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title" data-i18n="expertise.title">Nuestro Expertise</h2>
      <p class="section__subtitle" data-i18n="expertise.subtitle">Un equipo de ingenieros certificados AWS con experiencia en proyectos enterprise.</p>
    </div>
    <div class="expertise">
      <div class="expertise__metrics fade-in-on-scroll">
        <div class="expertise__metric">
          <div class="expertise__metric-value" data-counter="5">5</div>
          <div class="expertise__metric-label" data-i18n="expertise.engineers">Ingenieros AWS</div>
        </div>
        <div class="expertise__metric">
          <div class="expertise__metric-value" data-counter="15+">15+</div>
          <div class="expertise__metric-label" data-i18n="expertise.years">Años combinados</div>
        </div>
        <div class="expertise__metric">
          <div class="expertise__metric-value" data-counter="20+">20+</div>
          <div class="expertise__metric-label" data-i18n="expertise.projects">Proyectos entregados</div>
        </div>
        <div class="expertise__metric">
          <div class="expertise__metric-value" data-counter="4">4</div>
          <div class="expertise__metric-label" data-i18n="expertise.certs">Certificaciones AWS</div>
        </div>
      </div>
      <div class="expertise__specialties fade-in-on-scroll">
        <span class="expertise__specialty">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          Solutions Architecture
        </span>
        <span class="expertise__specialty">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
          DevOps Engineering
        </span>
        <span class="expertise__specialty">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
          Security Specialty
        </span>
        <span class="expertise__specialty">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
          Networking Specialty
        </span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add expertise translations**

In `js/main.js`, add:

```javascript
// Spanish
'expertise.title': 'Nuestro Expertise',
'expertise.subtitle': 'Un equipo de ingenieros certificados AWS con experiencia en proyectos enterprise.',
'expertise.engineers': 'Ingenieros AWS',
'expertise.years': 'Años combinados',
'expertise.projects': 'Proyectos entregados',
'expertise.certs': 'Certificaciones AWS',

// English
'expertise.title': 'Our Expertise',
'expertise.subtitle': 'A team of certified AWS engineers with enterprise project experience.',
'expertise.engineers': 'AWS Engineers',
'expertise.years': 'Combined Years',
'expertise.projects': 'Projects Delivered',
'expertise.certs': 'AWS Certifications',
```

- [ ] **Step 3: Commit**

```bash
git add index.html js/main.js
git commit -m "refactor: replace team cards with expertise metrics

- 4 metric counters with animations
- Specialty badges with Lucide icons
- No individual team member info
- Full ES/EN translations"
```

---

### Task 14: Update CTA Section

**Files:**
- Modify: `index.html:440-447`
- Modify: `js/main.js` (translations)

**Interfaces:**
- Consumes: Pulse animation from Task 2

- [ ] **Step 1: Update CTA subtitle**

In the Spanish translations, update:

```javascript
'cta.subtitle': 'Primera consulta sin costo.',
```

In English:

```javascript
'cta.subtitle': 'Free first consultation.',
```

- [ ] **Step 2: Add pulse class to CTA button**

Update the CTA button HTML:

```html
<a href="contacto.html" class="btn btn--primary btn--large btn--pulse" data-i18n="cta.btn">Agenda tu consulta gratuita →</a>
```

- [ ] **Step 3: Commit**

```bash
git add index.html js/main.js
git commit -m "refactor: simplify CTA section

- Shortened subtitle
- Added pulse animation to button"
```

---

### Task 15: Apply Changes to Other Pages

**Files:**
- Modify: `nosotros.html`
- Modify: `contacto.html`
- Modify: `servicios/aws-migration.html`

**Interfaces:**
- Consumes: All previous CSS and JS changes

- [ ] **Step 1: Update nosotros.html team section**

Find the team section in nosotros.html and replace with expertise section (same HTML as Task 13).

- [ ] **Step 2: Verify CSS is already linked**

Confirm nosotros.html, contacto.html, and servicios/aws-migration.html all link to the same CSS files.

- [ ] **Step 3: Test all pages**

Open each page in browser and verify:
- Animations work
- Icons display correctly
- No console errors

- [ ] **Step 4: Commit**

```bash
git add nosotros.html contacto.html servicios/aws-migration.html
git commit -m "refactor: apply minimalist changes to all pages

- Expertise section in nosotros.html
- Visual consistency across all pages"
```

---

### Task 16: Final Testing and Cleanup

**Files:**
- All modified files

**Interfaces:**
- N/A (testing task)

- [ ] **Step 1: Test on desktop**

Open index.html and verify:
- [ ] Hero animations work
- [ ] Stats counter animates
- [ ] Challenge icons display as SVG
- [ ] Service icons display as SVG
- [ ] Expertise section with counters works
- [ ] CTA button pulses

- [ ] **Step 2: Test on mobile (responsive)**

Use browser dev tools to test at 375px width:
- [ ] Navigation works
- [ ] Expertise grid stacks to 2 columns
- [ ] All sections readable

- [ ] **Step 3: Test in both languages**

Toggle ES/EN and verify all new translations appear.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "test: verify minimalist redesign complete

All sections tested on desktop and mobile"
```

---

## Execution Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Update CSS Variables | styles.css |
| 2 | Add Scroll Animation CSS | components.css |
| 3 | Add Expertise Section CSS | components.css |
| 4 | Update Component Styles | components.css |
| 5 | Add JS Scroll Animations | main.js |
| 6 | Add Lucide Icon Constants | main.js |
| 7 | Update Hero Section | index.html, components.css, main.js |
| 8 | Update Stats Bar | index.html, main.js |
| 9 | Replace Challenge Emojis | index.html, components.css |
| 10 | Replace Service Emojis | index.html, components.css |
| 11 | Update AWS Section | index.html, components.css, main.js |
| 12 | Shorten Why Descriptions | main.js |
| 13 | Replace Team with Expertise | index.html, main.js |
| 14 | Update CTA Section | index.html, main.js |
| 15 | Apply to Other Pages | nosotros.html, contacto.html, aws-migration.html |
| 16 | Final Testing | All files |

**Estimated commits:** 16
