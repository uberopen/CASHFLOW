# CashFlowSmart Design System v1.0
**Built from:** DESIGN-AUDIT-REPORT.md  
**Date:** April 26, 2026  
**For:** Atiq / AVOITS / Emon

---

## WHAT THIS FILE IS

This is the single source of truth for all design decisions in CashFlowSmart.
Before writing any code, read this file.
Before asking Claude Code to build anything, paste the relevant section.
Before Emon builds a new screen, send him this file.

---

## THE 3 BIGGEST PROBLEMS FOUND IN THE AUDIT

1. **Color chaos** — 3 different greens, 3 different ambers, 3 different reds, 
   receipt-upload.html uses completely different dark colors than the main dashboard
2. **AlertBanner broken in dark mode** — hardcoded light colors everywhere
3. **AICopilotPanel broken in light mode** — hardcoded dark gradient

Fix these 3 things first before anything else.

---

## PART 1 — COLOR TOKENS

### How themes work
Theme is toggled via class on `<html>` element:
- `<html class="light-mode">` = light theme
- `<html class="dark-mode">` = dark theme
- Theme is NOT persisted to localStorage — add this

### Surface colors (change with theme)

```css
/* LIGHT MODE */
html.light-mode {
  --color-bg-page:       #F8F9FB;
  --color-bg-card:       #FFFFFF;
  --color-bg-secondary:  #F3F4F6;
  --color-bg-tertiary:   #ECEEF2;
  --color-border:        #E5E7EB;
  --color-border-sidebar:#E9EAEC;
  --color-text-primary:  #111827;
  --color-text-secondary:#4B5563;
  --color-text-muted:    #9CA3AF;
  --color-card-border:   transparent;
  --color-card-shadow:   0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06);
  --color-sidebar-shadow:1px 0 0 #E9EAEC;
}

/* DARK MODE */
html.dark-mode {
  --color-bg-page:       #0A0F1C;
  --color-bg-card:       #0F1629;
  --color-bg-secondary:  #141D35;
  --color-bg-tertiary:   #1A2540;
  --color-border:        #1E2D4A;
  --color-border-sidebar:none;
  --color-text-primary:  #F0F4FF;
  --color-text-secondary:#9BAAC8;
  --color-text-muted:    #5C6B8A;
  --color-card-border:   #1E2D4A;
  --color-card-shadow:   none;
  --color-sidebar-shadow:none;
}
```

### Brand accent colors (STATIC — never change with theme)

```css
:root {
  /* Blue family */
  --color-blue:           #3D7BFF;
  --color-blue-bright:    #5B91FF;
  --color-blue-hover:     #2F68EE;
  --color-cyan:           #6FE8FF;

  /* Orange/amber family — TWO INTENTIONAL VARIANTS */
  --color-orange:         #EA580C;  /* wordmark "Flow", brand */
  --color-amber-warm:     #F6B54A;  /* buttons, visual charts */
  --color-amber-semantic: #D97706;  /* warning labels, chips */
  --color-amber-dark:     #B45309;  /* chip text on amber bg */

  /* Green family — TWO INTENTIONAL VARIANTS */
  --color-green-semantic: #059669;  /* chip text, data labels */
  --color-green-glow:     #3EE6A8;  /* live indicators, glow effects */

  /* Red family — TWO INTENTIONAL VARIANTS */
  --color-red-semantic:   #DC2626;  /* chip text, data danger */
  --color-red-soft:       #FF6A7A;  /* danger button bg, soft danger */
  --color-red-notif:      #EF4444;  /* notification badge ONLY */

  /* Special */
  --color-avatar-text:    #03060F;  /* text on colored avatar bg */
  --color-near-black:     #03060F;  /* submit button text */
}
```

### Status background colors (use with text colors above)

```css
:root {
  --color-bg-success:     rgba(16,185,129,0.1);
  --color-bg-success-border: rgba(16,185,129,0.2);
  --color-bg-warning:     rgba(245,158,11,0.1);
  --color-bg-warning-border: rgba(245,158,11,0.2);
  --color-bg-danger:      rgba(239,68,68,0.1);
  --color-bg-danger-border: rgba(239,68,68,0.2);
  --color-bg-info:        rgba(61,123,255,0.1);
  --color-bg-info-border: rgba(61,123,255,0.2);
  --color-bg-ai:          rgba(111,232,255,0.08);
  --color-bg-ai-border:   rgba(111,232,255,0.18);
}
```

### Alert banner colors (FIXED — both themes)

```css
/* WARNING ALERT — works in both light and dark */
.alert-warning {
  background: rgba(217,119,6,0.1);
  border-left: 4px solid #D97706;
  color: var(--color-text-primary);  /* uses theme token */
}
.alert-warning .alert-icon { color: #D97706; }

/* DANGER ALERT — works in both light and dark */
.alert-danger {
  background: rgba(220,38,38,0.08);
  border-left: 4px solid #DC2626;
  color: var(--color-text-primary);
}
.alert-danger .alert-icon { color: #DC2626; }

/* INFO ALERT — works in both light and dark */
.alert-info {
  background: rgba(61,123,255,0.08);
  border-left: 4px solid #3D7BFF;
  color: var(--color-text-primary);
}
.alert-info .alert-icon { color: #3D7BFF; }
```

### Shadow tokens

```css
:root {
  --shadow-card:     0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06);
  --shadow-panel:    0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(61,123,255,0.08);
  --shadow-modal:    0 32px 80px rgba(0,0,0,0.7);
  --shadow-dropdown: 0 20px 50px -10px rgba(0,0,0,0.5);
  --shadow-btn-blue: 0 1px 3px rgba(61,123,255,0.3);
  --shadow-btn-amber:0 4px 20px -6px rgba(246,181,74,0.5);
  --shadow-btn-amber-hover: 0 8px 32px -6px rgba(246,181,74,0.6);
  --shadow-glow-green: 0 0 8px rgba(62,230,168,0.6);
  --shadow-glow-cyan:  0 0 14px -4px rgba(111,232,255,0.35);
  --shadow-glow-blue:  0 0 14px -4px rgba(61,123,255,0.35);
  --shadow-glow-red:   0 0 14px -4px rgba(220,38,38,0.35);
}
```

### Overlay colors

```css
:root {
  --overlay-light:   rgba(0,0,0,0.25);
  --overlay-medium:  rgba(0,0,0,0.5);
  --overlay-heavy:   rgba(0,0,0,0.6);
  --overlay-modal:   rgba(0,0,0,0.7);
}
```

---

## PART 2 — TYPOGRAPHY TOKENS

### Font families

```css
:root {
  --font-ui:      'Inter', 'Manrope', sans-serif;   /* main app UI */
  --font-display: 'Manrope', sans-serif;             /* standalone pages */
  --font-serif:   'Instrument Serif', serif;         /* AI answers, editorial */
  --font-mono:    'JetBrains Mono', monospace;       /* numbers, amounts */
}
```

**RULE:** Use `--font-mono` for ALL dollar amounts and financial numbers.
Use `--font-serif` ONLY for AI answer text (the "Yes — hire one foreman" style text).
Use `--font-ui` for everything else.

### Font size scale (STANDARDIZED — was 24 different values, now 10)

```css
:root {
  --text-xs:      10px;   /* labels, timestamps, uppercase tags */
  --text-sm:      11px;   /* chips, sub-labels, nav labels */
  --text-base:    12px;   /* table text, body text */
  --text-md:      13px;   /* nav items, descriptions */
  --text-lg:      14px;   /* section titles */
  --text-xl:      15px;   /* card titles, topbar title */
  --text-2xl:     18px;   /* large mono amounts */
  --text-3xl:     24px;   /* KPI card values */
  --text-4xl:     32px;   /* hero card values */
  --text-display: 44px;   /* MMT Safe-to-Spend (dashboard) */
  --text-hero:    64px;   /* Safe-to-Spend (full forecast screen) */
}
```

**REMOVED:** 7px, 7.5px, 8px, 8.5px, 9px, 16px, 17px, 20px, 22px, 26px, 28px, 30px, 34px, 38px, 48px, 120px
Use the nearest standard step instead.

### Font weights

```css
:root {
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    800;
}
```

### Letter spacing (STANDARDIZED — was 16 different values, now 5)

```css
:root {
  --tracking-tight:   -0.03em;  /* large mono numbers */
  --tracking-normal:   0;        /* body text */
  --tracking-wide:     0.06em;   /* percentage badges */
  --tracking-wider:    0.09em;   /* sidebar section labels */
  --tracking-widest:   0.14em;   /* AI section headers, form labels */
}
```

### Line heights (STANDARDIZED)

```css
:root {
  --leading-none:   1;     /* large numeric values */
  --leading-tight:  1.2;   /* headings, modal headers */
  --leading-snug:   1.35;  /* AI panel text */
  --leading-normal: 1.5;   /* body text */
  --leading-relaxed:1.65;  /* AI chat messages */
}
```

### Typography patterns (copy these exactly)

```css
/* LABEL — use for all metric labels above numbers */
.label {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* KPI VALUE — use for all financial numbers in cards */
.kpi-value {
  font-family: var(--font-mono);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-none);
  color: var(--color-text-primary);
}

/* HERO VALUE — Safe-to-Spend on dashboard */
.hero-value {
  font-family: var(--font-mono);
  font-size: var(--text-display);
  font-weight: var(--weight-black);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-none);
}
.hero-value.positive { color: var(--color-green-glow); }
.hero-value.danger   { color: var(--color-red-semantic); }
.hero-value.warning  { color: var(--color-amber-warm); }

/* AI ANSWER — for Instrument Serif responses */
.ai-answer {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  font-weight: var(--weight-regular);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
}

/* SECTION LABEL — sidebar sections, AI panel sections */
.section-label {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}

/* TABLE HEADER */
.table-header {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}
```

---

## PART 3 — SPACING TOKENS

### Spacing scale (STANDARDIZED — was irregular, now consistent 4px base)

```css
:root {
  --space-1:  4px;
  --space-2:  6px;
  --space-3:  8px;
  --space-4:  10px;
  --space-5:  12px;
  --space-6:  14px;
  --space-7:  16px;
  --space-8:  20px;
  --space-9:  24px;
  --space-10: 32px;
  --space-11: 40px;
  --space-12: 48px;
}
```

### Layout rules (STANDARDIZED)

```css
:root {
  --sidebar-width-collapsed: 64px;
  --sidebar-width-expanded:  220px;  /* was 220px vs 240px — now 220px everywhere */
  --topbar-height:           56px;
  --ai-panel-width:          340px;  /* >1200px */
  --ai-panel-width-md:       300px;  /* ≤1200px */
  --ai-panel-width-sm:       280px;  /* ≤1000px */
  --cashiq-panel-width:      380px;
  --mobile-nav-height:       64px;
  --mobile-bottom-padding:   80px;
}
```

### Card padding rules (STANDARDIZED — was 5 different values)

```css
/* Standard card — use for 95% of cards */
.card { padding: var(--space-8) var(--space-9); }  /* 20px 24px */

/* Compact card — use inside grids with limited space */
.card-compact { padding: var(--space-7); }          /* 16px */

/* Hero card — MMT section only */
.card-hero { padding: var(--space-9) var(--space-10); }  /* 24px 32px */

/* Table row — uniform for all tables */
.table-row { padding: var(--space-6) var(--space-8); }   /* 14px 20px */
```

---

## PART 4 — BORDER & RADIUS TOKENS

### Border radius (STANDARDIZED — was 18 different values, now 7)

```css
:root {
  --radius-xs:    4px;    /* chart bar corners (SVG rx) */
  --radius-sm:    6px;    /* icon buttons, small badges */
  --radius-md:    9px;    /* filter tabs, ghost toggles */
  --radius-lg:   12px;    /* KPI cards, chips, dropdowns */
  --radius-xl:   16px;    /* main cards (PRIMARY — use most) */
  --radius-2xl:  20px;    /* modals, CashIQ floating panel */
  --radius-full:  999px;  /* chips/pills, progress bars */
  --radius-circle: 50%;   /* avatars, status dots */
}
```

**RULE:** Default card radius = `--radius-xl` (16px). Do not use 14px, 18px, or anything between.

### Border widths

```css
:root {
  --border-thin:   1px solid;   /* all standard borders */
  --border-medium: 1.5px solid; /* notification badges, MMT dividers */
  --border-thick:  2px solid;   /* AI avatar rings, upload zones (dashed) */
  --border-accent: 3px solid;   /* left accent bars on stat cards */
  --border-fat:    4px solid;   /* alert banner left bars */
}
```

---

## PART 5 — COMPONENT SPECIFICATIONS

### Stat card with left accent bar

```css
.stat-card {
  background: var(--color-bg-card);
  border: var(--border-thin) var(--color-card-border);
  border-left: var(--border-accent) [accent-color];
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-9);
  box-shadow: var(--color-card-shadow);
  transition: all 0.15s ease;
}
.stat-card:hover {
  border-left-color: [accent-color];
  transform: translateY(-1px);
}

/* Variants */
.stat-card-blue   { border-left-color: var(--color-blue); }
.stat-card-green  { border-left-color: var(--color-green-semantic); }
.stat-card-amber  { border-left-color: var(--color-amber-semantic); }
.stat-card-red    { border-left-color: var(--color-red-semantic); }
.stat-card-purple { border-left-color: #A78BFA; }
```

### Alert banner (FIXED — now works in both themes)

```css
/* Replace the entire AlertBanner component color map with this: */
const alertColors = {
  warning: {
    bg:     'rgba(217,119,6,0.1)',
    border: 'rgba(217,119,6,0.3)',
    icon:   '#D97706',
    /* text uses var(--color-text-primary) — theme adaptive */
  },
  danger: {
    bg:     'rgba(220,38,38,0.08)',
    border: 'rgba(220,38,38,0.3)',
    icon:   '#DC2626',
  },
  info: {
    bg:     'rgba(61,123,255,0.08)',
    border: 'rgba(61,123,255,0.3)',
    icon:   '#3D7BFF',
  }
}
```

### Chip / badge

```css
.chip {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  border: 1px solid;
  letter-spacing: var(--tracking-wide);
}

/* Color variants */
.chip-green  { bg: var(--color-bg-success);  color: var(--color-green-semantic); border-color: var(--color-bg-success-border); }
.chip-red    { bg: var(--color-bg-danger);   color: var(--color-red-semantic);   border-color: var(--color-bg-danger-border); }
.chip-amber  { bg: var(--color-bg-warning);  color: var(--color-amber-semantic); border-color: var(--color-bg-warning-border); }
.chip-blue   { bg: var(--color-bg-info);     color: var(--color-blue);           border-color: var(--color-bg-info-border); }
.chip-cyan   { bg: var(--color-bg-ai);       color: var(--color-cyan);           border-color: var(--color-bg-ai-border); }
```

**FIXED:** Chip amber now uses `--color-amber-semantic` (#D97706) for text. 
Was incorrectly using #B45309.

### Buttons

```css
/* PRIMARY */
.btn-primary {
  background: var(--color-blue);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  box-shadow: var(--shadow-btn-blue);
  transition: all 0.15s ease;
}
.btn-primary:hover {
  background: var(--color-blue-hover);  /* #2F68EE */
  transform: translateY(-1px);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
}

/* AMBER/SUBMIT */
.btn-amber {
  background: linear-gradient(135deg, #F6B54A, #E07420);
  color: var(--color-avatar-text);  /* #03060F */
  box-shadow: var(--shadow-btn-amber);
}
.btn-amber:hover {
  box-shadow: var(--shadow-btn-amber-hover);
  transform: translateY(-1px);
}

/* GHOST */
.btn-ghost {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
.btn-ghost:hover {
  border-color: var(--color-blue);
  color: var(--color-blue);
}

/* DANGER */
.btn-danger {
  background: rgba(220,38,38,0.08);  /* FIXED: was wrong pinkish red */
  border: 1px solid rgba(220,38,38,0.25);
  color: var(--color-red-semantic);
}
.btn-danger:hover {
  background: rgba(220,38,38,0.15);
}

/* SIZE VARIANTS */
.btn-sm { padding: var(--space-1) var(--space-5); font-size: var(--text-sm); border-radius: var(--radius-sm); }
.btn-md { padding: var(--space-3) var(--space-7); font-size: var(--text-base); }
.btn-lg { padding: var(--space-4) var(--space-9); font-size: var(--text-md); }
```

### Sidebar (FIXED active item)

```css
.sidebar-item-active {
  /* FIXED: was hardcoded #111827 which is light ink color */
  background: rgba(61,123,255,0.1);  /* theme-safe blue tint */
  border-left: 3px solid var(--color-blue);
  color: var(--color-blue);
  font-weight: var(--weight-semibold);
}
```

### AICopilotPanel header (FIXED for light mode)

```css
/* FIXED: was hardcoded dark gradient */
.ai-panel-header {
  /* Dark mode */
  background: linear-gradient(135deg,#0A1020,#0F1C3A,#0D1A35);
}
html.light-mode .ai-panel-header {
  /* Light mode — use brand blue gradient instead */
  background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
  border-bottom: 1px solid var(--color-border);
}
html.light-mode .ai-panel-header .online-dot-border {
  border-color: #DBEAFE;  /* match light header bg */
}
```

### CashIQ FAB (FIXED for dark mode)

```css
/* FIXED: was all hardcoded white/light colors */
.cashiq-fab {
  background: var(--color-bg-card);        /* theme adaptive */
  border: 1px solid var(--color-border);   /* theme adaptive */
}
.cashiq-fab-title {
  color: var(--color-text-primary);        /* theme adaptive */
}
.cashiq-fab-sub {
  color: var(--color-text-secondary);      /* theme adaptive */
}
.cashiq-fab-arrow {
  background: var(--color-bg-secondary);   /* theme adaptive */
}
```

### Input / form fields

```css
.input {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  font-size: var(--text-md);
  padding: var(--space-3) var(--space-5);
  transition: border-color 0.18s, box-shadow 0.18s;
  outline: none;
}
.input:focus {
  border-color: var(--color-blue);
  box-shadow: 0 0 0 3px rgba(61,123,255,0.12);
}
.input::placeholder {
  color: var(--color-text-muted);
}
```

### Progress bar

```css
.progress-track {
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  height: 6px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}
.progress-fill-blue   { background: var(--color-blue); }
.progress-fill-green  { background: var(--color-green-glow); }
.progress-fill-amber  { background: var(--color-amber-warm); }
.progress-fill-red    { background: var(--color-red-semantic); }
```

### Quick question chips (AI Engine)

```css
.question-chip {
  background: var(--color-bg-card);
  border: 1px solid var(--color-amber-warm);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-5);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  color: var(--color-amber-warm);
  cursor: pointer;
  transition: all 0.15s;
}
.question-chip:hover {
  background: var(--color-amber-warm);
  color: var(--color-avatar-text);
  box-shadow: var(--shadow-btn-amber);
}
```

### Table rows

```css
.table-row {
  padding: var(--space-6) var(--space-8);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.15s;
  cursor: default;
}
.table-row:hover {
  background: var(--color-bg-secondary);
}
/* FIXED: was rgba(255,255,255,0.02) which is invisible */
```

---

## PART 6 — SCREEN-SPECIFIC RULES

### Dashboard screen rules

```
Safe-to-Spend hero value:
  - > 5-day floor AND > $10k → color: green-glow, text-shadow: 0 0 60px rgba(62,230,168,0.25)
  - < 5-day floor OR < $10k → color: red-semantic, no glow
  - Between → color: amber-warm

Cash Runway chip:
  - ≥ 14 days → chip-green
  - 7–13 days → chip-amber
  - < 7 days  → chip-red

Gross Margin chip:
  - ≥ 45% → chip-green
  - 30–44% → chip-amber
  - < 30% → chip-red
```

### Jobs & Margins screen rules

```
Margin bar colors:
  - ≥ 50% (at/above target) → color-green-glow
  - 30–49% (below target) → color-amber-warm
  - < 30% (at risk) → color-red-semantic

Job status badges:
  - Active  → chip-green
  - At risk → chip-red
  - Pending → chip-amber
  - Closed  → muted (bg: color-bg-tertiary, text: color-text-muted)
```

### AI Engine screen rules

```
Confidence score:
  - ≥ 80% → color-green-semantic
  - 60–79% → color-amber-semantic
  - < 60% → color-red-semantic

AI bubble styling:
  background: rgba(111,232,255,0.06)
  border-left: 2px solid var(--color-cyan)
  border-radius: var(--radius-xl)
  NEVER use rgba(255,255,255,0.025) — invisible in light mode
```

### Receipt upload rules

```
receipt-upload.html MUST be updated to use 
CF CSS variables instead of standalone --navy* variables.
The two sets are slightly different — 
receipt-upload.html currently uses:
  --navy0: #030712  (should be --color-bg-page dark value #0A0F1C)
  --navy1: #080F1E  (should be --color-bg-card dark value #0F1629)
This file must import the main design system tokens.
```

---

## PART 7 — ANIMATION & TRANSITION TOKENS

```css
:root {
  --transition-fast:    all 0.12s;
  --transition-normal:  all 0.15s ease;
  --transition-medium:  all 0.18s;
  --transition-slow:    all 0.2s;
  --transition-sidebar: width 0.25s cubic-bezier(.4,0,.2,1);
  --transition-modal:   opacity 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}

@keyframes pulse {
  0%, 100% { opacity: 0.25; transform: scale(0.8); }
  50%       { opacity: 1; transform: scale(1.05); }
}

@keyframes cashiq-in {
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes cashiq-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.4); }
  50%       { box-shadow: 0 0 0 5px rgba(220,38,38,0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

---

## PART 8 — ACCESSIBILITY RULES

The audit found ZERO focus states across all interactive elements. This must be fixed.

```css
/* Add this globally — never remove */
:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Override for specific elements */
.btn:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
}

.input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(61,123,255,0.2);
  border-color: var(--color-blue);
}

/* Remove the blanket outline:none that's breaking accessibility */
/* DELETE THIS from your CSS: */
/* * { outline: none; } */
/* Replace with: */
* { outline: none; }
*:focus-visible { outline: 2px solid var(--color-blue); outline-offset: 2px; }
```

---

## PART 9 — FIXES PRIORITY LIST

Fix these in order before C+ pitch:

### CRITICAL (do today)
1. **AlertBanner dark mode** — replace hardcoded light colors with rgba tokens above
2. **CashIQ FAB dark mode** — replace hardcoded #fff/#111827 with theme variables
3. **Sidebar active item** — replace hardcoded #111827 with rgba(61,123,255,0.1)
4. **Theme persistence** — add localStorage to remember dark/light choice

### HIGH (do this week)
5. **AICopilotPanel light mode header** — add light gradient override
6. **receipt-upload.html tokens** — import CF variables instead of standalone dark set
7. **AI chat bubble light mode** — replace rgba(255,255,255,0.025) with theme-aware bg
8. **Chip amber text** — change #B45309 to var(--color-amber-semantic) #D97706
9. **ReceiptUploadModal notes label** — bug: uses #CF.navy3 (bg color) as text color

### MEDIUM (before launch)
10. Focus states on all interactive elements
11. Standardize safe-to-spend to 2 sizes: --text-display (dashboard) and --text-hero (forecast)
12. Standardize card padding to 20px 24px everywhere
13. Fix sidebar width mismatch (220px vs 240px)
14. Add localStorage theme persistence

### LOW (post-launch)
15. Payroll avatar colors → create 8 official avatar token set
16. Remove JSCharting CDN if unused
17. Fix ai_agent_avater.png typo in code (avater → avatar)
18. Mobile focus states

---

## PART 10 — CF DESIGN TOKEN OBJECT (for Components.jsx)

Replace the current CF object at the top of Components.jsx with this:

```javascript
const CF = {
  // Accent colors (static)
  blue:         '#3D7BFF',
  blueBright:   '#5B91FF',
  blueHover:    '#2F68EE',
  cyan:         '#6FE8FF',
  orange:       '#EA580C',      // wordmark "Flow"
  amberWarm:    '#F6B54A',      // buttons, visuals
  amber:        '#D97706',      // semantic warning
  green:        '#059669',      // semantic success
  greenGlow:    '#3EE6A8',      // live indicators
  red:          '#DC2626',      // semantic danger
  redSoft:      '#FF6A7A',      // soft danger
  redNotif:     '#EF4444',      // notification badge only
  purple:       '#A78BFA',      // AI features
  
  // Avatar colors (official set)
  avatars: [
    '#3D5A9E','#2E7D64','#7B4EA0','#9E5A2E',
    '#2E7098','#9E3D5A','#5A9E3D','#7D6B2E'
  ],
  
  // Typography
  fontUI:      "'Inter','Manrope',sans-serif",
  fontDisplay: "'Manrope',sans-serif",
  fontSerif:   "'Instrument Serif',serif",
  fontMono:    "'JetBrains Mono',monospace",
  
  // Helpers — read from CSS variables (theme-adaptive)
  // Use these via getComputedStyle or CSS var() in inline styles
  // DO NOT hardcode surface/text colors — use CSS variables
  
  // Shadow presets
  shadows: {
    card:      '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)',
    panel:     '0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(61,123,255,0.08)',
    modal:     '0 32px 80px rgba(0,0,0,0.7)',
    btnBlue:   '0 1px 3px rgba(61,123,255,0.3)',
    btnAmber:  '0 4px 20px -6px rgba(246,181,74,0.5)',
    glowGreen: '0 0 8px rgba(62,230,168,0.6)',
    glowCyan:  '0 0 14px -4px rgba(111,232,255,0.35)',
  },
  
  // Border radius
  radius: {
    xs:     4,
    sm:     6,
    md:     9,
    lg:     12,
    xl:     16,   // PRIMARY card radius — use this most
    '2xl':  20,
    full:   999,
  },
}
```

---

## PART 11 — QUICK REFERENCE CARD (for Emon)

```
BACKGROUNDS
  Page:      var(--color-bg-page)
  Card:      var(--color-bg-card)
  Input:     var(--color-bg-secondary)
  Hover:     var(--color-bg-tertiary)

TEXT
  Primary:   var(--color-text-primary)
  Secondary: var(--color-text-secondary)
  Muted:     var(--color-text-muted)

BORDERS
  Default:   var(--color-border)
  Card:      var(--color-card-border)

ACCENTS
  Blue:      #3D7BFF
  Amber:     #F6B54A (warm/visual) or #D97706 (semantic/text)
  Green:     #3EE6A8 (glow) or #059669 (text)
  Red:       #DC2626 (semantic) or #FF6A7A (soft)
  Cyan:      #6FE8FF

CARD RADIUS:   16px (--radius-xl)
CARD PADDING:  20px 24px
FONT NUMBERS:  JetBrains Mono
FONT UI:       Inter/Manrope
FONT AI TEXT:  Instrument Serif

TRANSITIONS:   all 0.15s ease (standard)

NEVER DO:
  ❌ Hardcode #111827 or #F8F9FB (these are theme colors)
  ❌ Hardcode #FFFFFF as background (use var(--color-bg-card))
  ❌ Use outline: none without :focus-visible replacement
  ❌ Use rgba(255,255,255,0.025) as a visible background
  ❌ Mix --navy* variables from receipt-upload with --cf-* variables
```

---

*CashFlowSmart Design System v1.0 — Built by AVOITS*  
*Do not edit without updating version number*
