# CashFlowSmart Theme Guide
**Version:** 1.0
**For:** Emon / devs building new screens
**Read before writing any code.**

---

## HOW THEMES WORK

Theme is a class on the `<html>` element. Two states only:

```html
<html class="light-mode">   <!-- default -->
<html class="dark-mode">    <!-- toggled by user -->
```

**Toggle in JavaScript:**
```js
document.documentElement.classList.toggle('dark-mode', isDark);
document.documentElement.classList.toggle('light-mode', !isDark);
localStorage.setItem('cf-theme', isDark ? 'dark' : 'light');
```

**Restore on page load** (add before `root.render`):
```js
const saved = localStorage.getItem('cf-theme');
if (saved === 'dark') {
  document.documentElement.classList.replace('light-mode', 'dark-mode');
}
```

**Never hardcode surface or text colors.** Always use `var(--color-*)`.

---

## ALL TOKEN NAMES AND VALUES

### Surface colors (change with theme)

| Token | Light value | Dark value | When to use |
|-------|-------------|------------|-------------|
| `--color-bg-page` | `#F8F9FB` | `#0A0F1C` | App background **and sidebar bg** (sidebar is part of app shell, NOT `--color-bg-card`) |
| `--color-bg-card` | `#FFFFFF` | `#0F1629` | Cards, panels, modals, FAB |
| `--color-bg-secondary` | `#F3F4F6` | `#141D35` | Inputs, hover rows, arrow buttons |
| `--color-bg-tertiary` | `#ECEEF2` | `#1A2540` | Hover states, progress tracks |
| `--color-border` | `#E5E7EB` | `#1E2D4A` | Card borders, table dividers, inputs |
| `--color-card-border` | `transparent` | `#1E2D4A` | Border on `.card` elements |
| `--color-text-primary` | `#111827` | `#F0F4FF` | Headings, card titles, important text |
| `--color-text-secondary` | `#4B5563` | `#9BAAC8` | Subtitles, descriptions, secondary data |
| `--color-text-muted` | `#9CA3AF` | `#5C6B8A` | Labels, timestamps, placeholders |
| `--color-card-shadow` | `0 1px 3px…` | `none` | Box shadow on cards |
| `--color-sidebar-shadow` | `1px 0 0 #E9EAEC` | `none` | Right border of sidebar |

### Accent colors (STATIC — same in both themes)

| Token | Value | When to use |
|-------|-------|-------------|
| `--color-blue` | `#3D7BFF` | Primary CTAs, active states, links, focus rings |
| `--color-blue-bright` | `#5B91FF` | Hover on blue, highlights |
| `--color-blue-hover` | `#2F68EE` | Button hover state |
| `--color-cyan` | `#6FE8FF` | AI features, live charts, sparklines |
| `--color-orange` | `#EA580C` | Wordmark "Flow", brand mark only |
| `--color-amber-warm` | `#F6B54A` | Buttons, visual charts, question chips |
| `--color-amber-semantic` | `#D97706` | Warning text, chip foreground, alert icons |
| `--color-green-semantic` | `#059669` | Success chip text, positive data labels |
| `--color-green-glow` | `#3EE6A8` | Live indicators, Safe-to-Spend value, glow dots |
| `--color-red-semantic` | `#DC2626` | Danger chip text, overdue, error states |
| `--color-red-notif` | `#EF4444` | Notification badge dot ONLY |
| `--color-purple` | `#A78BFA` | AI accent features |

### Status backgrounds (semi-transparent, theme-safe)

| Token | Value | Use with |
|-------|-------|----------|
| `--color-bg-success` | `rgba(16,185,129,0.1)` | Green chip bg |
| `--color-bg-warning` | `rgba(245,158,11,0.1)` | Amber chip bg |
| `--color-bg-danger` | `rgba(239,68,68,0.1)` | Red chip bg |
| `--color-bg-info` | `rgba(61,123,255,0.1)` | Blue chip bg |
| `--color-bg-ai` | `rgba(111,232,255,0.08)` | Cyan/AI chip bg |

---

## CARD PADDING RULE

One standard. No exceptions except the two below.

| Context | Padding | Class |
|---------|---------|-------|
| Standard card (use everywhere) | `20px 24px` | `.card` |
| Compact card (dense grids, sidebar widgets) | `16px` | `.card-compact` |
| Hero card (MMT section only) | `24px 32px` | `.card-hero` |
| Table row | `14px 20px` | `.table-row` |

**Rule:** Default to `.card` (20px 24px). Only use compact inside a tight grid.

---

## FONT RULE

Three families. Each has one job.

| Font | Token | Use for |
|------|-------|---------|
| Inter / Manrope | `--font-ui` | Everything — nav, labels, buttons, body |
| JetBrains Mono | `--font-mono` | ALL dollar amounts, financial numbers, percentages |
| Instrument Serif | `--font-serif` | AI answer text only (the "Yes — hire one foreman" style) |

**Size scale:**

| Token | px | Use for |
|-------|----|---------|
| `--text-xs` | 10px | Labels above numbers, uppercase tags, timestamps |
| `--text-sm` | 11px | Chips, sub-labels, nav descriptions |
| `--text-base` | 12px | Table text, body text |
| `--text-md` | 13px | Nav items, modal body, descriptions |
| `--text-lg` | 14px | Section titles, card titles |
| `--text-xl` | 15px | Topbar page title ONLY |
| `--text-2xl` | 18px | Large mono amounts in cards |
| `--text-3xl` | 24px | KPI card values |
| `--text-4xl` | 32px | Hero card values |
| `--text-display` | 44px | Safe-to-Spend on Dashboard (MMT) |
| `--text-hero` | 64px | Safe-to-Spend on full Forecast screen |

---

## BORDER RADIUS RULE

| Token | px | Use for |
|-------|----|---------|
| `--radius-xs` | 4px | Chart bar corners |
| `--radius-sm` | 6px | Icon buttons, small badges, focus rings |
| `--radius-md` | 9px | Filter tabs, ghost toggles |
| `--radius-lg` | 12px | KPI cards, chips, dropdowns, inputs |
| `--radius-xl` | 16px | **PRIMARY — use for all main cards** |
| `--radius-2xl` | 20px | Modals, CashIQ floating panel |
| `--radius-full` | 999px | Chips/pills, progress bars |

**Rule:** Default card radius = `--radius-xl` (16px). Never use 14px, 18px, or anything between.

---

## DO'S AND DON'TS

```
DO:
  Use var(--color-bg-card) for any card/panel background
  Use var(--color-text-primary) for headings and important text
  Use --font-mono for ALL financial numbers
  Use rgba() backgrounds for status colors (they work in both themes)
  Use :focus-visible not :focus
  Use --color-amber-semantic (#D97706) for chip/warning text
  Use --color-green-glow (#3EE6A8) for live indicators

DON'T:
  Hardcode #111827 or #F8F9FB — these are theme colors
  Hardcode #FFFFFF as background — use var(--color-bg-card)
  Use rgba(255,255,255,0.025) as a card background — invisible in light mode
  Use outline: none without :focus-visible replacement
  Mix --navy* variables (receipt-upload) with --cf-* variables (main app)
  Use #B45309 for amber chip text — it's too dark, use #D97706
  Use a background color (--color-bg-*) as a text color
  Use 14px, 18px, 22px border radius — pick the nearest token step
```

---

## QUICK REFERENCE

```
NEW CARD?      background: var(--color-bg-card)
               border: 1px solid var(--color-card-border)
               border-radius: 16px  (--radius-xl)
               padding: 20px 24px   (standard)
               box-shadow: var(--color-card-shadow)

NEW TEXT?      Heading:     color: var(--color-text-primary)
               Body:        color: var(--color-text-secondary)
               Muted/label: color: var(--color-text-muted)

NEW BORDER?    border: 1px solid var(--color-border)

NEW INPUT?     background: var(--color-bg-secondary)
               border: 1px solid var(--color-border)
               focus: border-color: #3D7BFF + box-shadow: 0 0 0 3px rgba(61,123,255,0.2)

NUMBER VALUE?  font-family: 'JetBrains Mono', monospace

AI ANSWER?     font-family: 'Instrument Serif', serif
```

---

*CashFlowSmart Design System v1.0 — AVOITS*
*Source of truth: DESIGN/CASHFLOW-DESIGN-SYSTEM.md*
