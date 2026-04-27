# CashFlow Smart — Full Design Extraction Audit
**Generated:** 2026-04-26
**Files audited:** Dashboard.html · CashFlow Smart Dashboard.html (too large to fully parse, shares codebase) · Dashboard-standalone-src.html · Components.jsx · ScreenDashboard.jsx · Screens.jsx · receipt-upload.html

---

## 1. EVERY COLOR VALUE

### CSS Variables — Light Mode (Dashboard.html `:root` / `html.light-mode`)

| Variable | Value | Purpose |
|---|---|---|
| `--cf-navy0` | `#F8F9FB` | Page/app background |
| `--cf-navy1` | `#FFFFFF` | Card surface |
| `--cf-navy2` | `#F3F4F6` | Secondary surface, input bg |
| `--cf-navy3` | `#ECEEF2` | Tertiary surface, progress bar bg |
| `--cf-navyLine` | `#E5E7EB` | Borders, dividers |
| `--cf-ink` | `#111827` | Primary text |
| `--cf-inkDim` | `#4B5563` | Secondary text |
| `--cf-inkMute` | `#9CA3AF` | Muted/placeholder text |
| `--cf-cardBorder` | `transparent` | Card border (light: invisible) |
| `--cf-sidebarShadow` | `1px 0 0 #E9EAEC` | Sidebar right border shadow |
| `--cf-cardShadow` | `0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)` | Card shadow |

### CSS Variables — Dark Mode (Dashboard.html `html.dark-mode`)

| Variable | Value | Purpose |
|---|---|---|
| `--cf-navy0` | `#0A0F1C` | Page/app background |
| `--cf-navy1` | `#0F1629` | Card surface |
| `--cf-navy2` | `#141D35` | Secondary surface |
| `--cf-navy3` | `#1A2540` | Tertiary surface |
| `--cf-navyLine` | `#1E2D4A` | Borders, dividers |
| `--cf-ink` | `#F0F4FF` | Primary text |
| `--cf-inkDim` | `#9BAAC8` | Secondary text |
| `--cf-inkMute` | `#5C6B8A` | Muted text |
| `--cf-cardBorder` | `#1E2D4A` | Card border (dark: visible) |
| `--cf-sidebarShadow` | `none` | Sidebar shadow |
| `--cf-cardShadow` | `none` | Card shadow |

Dark mode body/app-root override:
- `background: #0A0F1C; color: #F0F4FF`
- Inputs: `background: #141D35; color: #F0F4FF; border-color: #1E2D4A`

### CSS Variables — receipt-upload.html (dark-only standalone)

| Variable | Value | Notes |
|---|---|---|
| `--navy0` | `#030712` | DIFFERENT from dark --cf-navy0 (#0A0F1C) |
| `--navy1` | `#080F1E` | DIFFERENT from --cf-navy1 (#0F1629) |
| `--navy2` | `#0C1528` | DIFFERENT from --cf-navy2 (#141D35) |
| `--navy3` | `#111E38` | DIFFERENT from --cf-navy3 (#1A2540) |
| `--line` | `#1C2A48` | DIFFERENT from --cf-navyLine (#1E2D4A) |
| `--ink` | `#F0F4FF` | Matches --cf-ink dark |
| `--inkDim` | `#9BAAC8` | Matches --cf-inkDim dark |
| `--inkMute` | `#5C6B8A` | Matches --cf-inkMute dark |
| `--amber` | `#F6B54A` | DIFFERENT from CF.amber (#D97706) |
| `--orange` | `#FF8A00` | DIFFERENT from CF.orange (#EA580C) |
| `--green` | `#3EE6A8` | DIFFERENT from CF.green (#059669) |
| `--blue` | `#3D7BFF` | Matches CF.blue |

### Dashboard-standalone-src.html (dark-only, hardcoded)

| Value | Element | Purpose |
|---|---|---|
| `#030712` | body, .app-root | Background |
| `#F0F4FF` | body | Text |
| `#1C2A48` | scrollbar thumb | Scrollbar |
| `#2A3E68` | scrollbar thumb hover | Scrollbar hover |
| `#080F1E` | .tweaks-panel | Tweaks bg |
| `#1C2A48` | .tweaks-panel border | Tweaks border |
| `rgba(111,232,255,0.03)` | .tweaks-drag | Drag header bg |
| `#9BAAC8` | .tweaks-title | Tweaks title text |
| `#5C6B8A` | .tweak-label | Label text |
| `rgba(3,7,18,0.55)` | .cashiq-sheet | Overlay backdrop |
| `#F0F4FF` | .pill-opt.on | Active pill text |
| `rgba(61,123,255,0.2)` | .pill-opt.on | Active pill bg |

### CF Design Token Object (Components.jsx, line 3–9)

| Token | Value | Purpose |
|---|---|---|
| `CF.blue` | `#3D7BFF` | Primary brand blue |
| `CF.blueBright` | `#5B91FF` | Brighter blue (hover/gradients) |
| `CF.cyan` | `#6FE8FF` | AI/accent cyan |
| `CF.amber` | `#D97706` | Warning amber |
| `CF.green` | `#059669` | Success green |
| `CF.red` | `#DC2626` | Danger red |
| `CF.orange` | `#EA580C` | Orange (wordmark "Flow") |

### Hardcoded Colors in Components.jsx

| Value | Location | Element | Purpose |
|---|---|---|---|
| `linear-gradient(145deg,#0F1C3A,#060C1A)` | CFMark | Logo bg | Dark gradient |
| `#FF8A00` | CFMark SVG | Logo polygon | Orange accent |
| `white` | CFMark SVG | Logo stroke | White lines |
| `rgba(16,185,129,0.1)` | Chip green bg | bg | Green chip |
| `#059669` | Chip green fg | text | Same as CF.green |
| `rgba(16,185,129,0.2)` | Chip green border | border | Green chip |
| `rgba(239,68,68,0.1)` | Chip red bg | bg | Red chip |
| `#DC2626` | Chip red fg | text | Same as CF.red |
| `rgba(239,68,68,0.2)` | Chip red border | border | Red chip |
| `rgba(245,158,11,0.1)` | Chip amber bg | bg | Amber chip |
| `#B45309` | Chip amber fg | text | **DIFFERENT from CF.amber #D97706** |
| `rgba(245,158,11,0.2)` | Chip amber border | border | Amber chip |
| `rgba(61,123,255,0.1)` | Chip blue bg | bg | Blue chip |
| `rgba(61,123,255,0.08)` | Chip cyan bg | bg | Cyan chip uses blue rgba |
| `rgba(61,123,255,0.15)` | Chip cyan border | border | Cyan chip uses blue rgba |
| `#2F68EE` | Btn primary hover | bg | Darker blue on hover |
| `rgba(61,123,255,0.3)` | Btn primary shadow | shadow | Blue shadow |
| `rgba(255,106,122,0.06)` | Btn danger default | bg | **Different red from CF.red** |
| `rgba(255,106,122,0.1)` | Btn danger hover | bg | Pinkish red, not CF.red |
| `rgba(61,123,255,0.22)` | Range picker active | bg | |
| `#FFFFFF` | Sidebar active text/icon | color | White on active nav |
| `#111827` | Sidebar active item bg | bg | **Hardcoded — same as light ink, bad in dark** |
| `#FEE2E2` | Sidebar badge inactive | bg | Light red badge bg |
| `#DC2626` | Sidebar badge inactive | color | CF.red |
| `linear-gradient(135deg,#F6B54A,#E07420)` | Sidebar user avatar | bg | Warm gradient |
| `#03060F` | Sidebar user avatar text | color | Near-black |
| `rgba(111,232,255,0.05)` | MobileNav AI active | bg | Cyan tint |
| `rgba(61,123,255,0.1)` | Topbar icon btn active | bg | Blue tint |
| `rgba(61,123,255,0.3)` | Topbar icon btn border | border | Blue border |
| `rgba(0,0,0,0.5)` | Notif dropdown shadow | shadow | Dark shadow |
| `rgba(61,123,255,0.03)` | Notif unread item | bg | Very subtle blue |
| `rgba(61,123,255,0.05)` | Notif item hover | bg | Hover state |
| `#FDE68A` | AlertBanner warning border | border | Light yellow — **hardcoded light only** |
| `#FFFBEB` | AlertBanner warning bg | bg | Light yellow bg — **hardcoded light only** |
| `#D97706` | AlertBanner warning icon | color | Same as CF.amber |
| `#92400E` | AlertBanner warning text | color | Dark amber — **hardcoded light only** |
| `#FECACA` | AlertBanner danger border | border | Light red — **hardcoded light only** |
| `#FEF2F2` | AlertBanner danger bg | bg | Light red bg — **hardcoded light only** |
| `#991B1B` | AlertBanner danger text | color | Dark red — **hardcoded light only** |
| `#BFDBFE` | AlertBanner info border | border | Light blue — **hardcoded light only** |
| `#EFF6FF` | AlertBanner info bg | bg | Light blue bg — **hardcoded light only** |
| `#1D4ED8` | AlertBanner info text | color | Dark blue — **hardcoded light only** |
| `#6FE8FF` | MiniChart gradient stop | chart | Cyan |
| `#4A84FF` | MiniChart gradient mid | chart | Mid blue |
| `#3D7BFF` | MiniChart gradient end | chart | CF.blue |

### Hardcoded Colors in ScreenDashboard.jsx

| Value | Location | Purpose |
|---|---|---|
| `linear-gradient(135deg,#0A1020,#0F1C3A,#0D1A35)` | AICopilotPanel header | Dark gradient — **dark only** |
| `rgba(61,123,255,0.1)` | AICopilotPanel glow | Ambient |
| `#3EE6A8` | Online indicator | Green pulse — **different from CF.green** |
| `rgba(62,230,168,0.8)` | Online indicator shadow | Glow |
| `#0A1020` | Online indicator border | Dark bg |
| `#F1F5F9` | CashIQ title text | **Slightly different from CF.ink dark #F0F4FF** |
| `#6BA3FF` | BETA badge / accuracy % | **Different from CF.blue #3D7BFF or CF.cyan #6FE8FF** |
| `rgba(61,123,255,0.16)` | BETA badge bg | Blue tint |
| `rgba(241,245,249,0.4)` | Sub text | Dimmed white |
| `rgba(255,106,122,0.25)` | Top Priority card border | Soft red |
| `rgba(255,106,122,0.05)` | Top Priority card bg | Very soft red |
| `rgba(255,106,122,0.12)` | CTA button bg | Soft red |
| `rgba(255,106,122,0.3)` | CTA button border | Soft red |
| `rgba(5,150,105,0.06)` | Opportunities card bg | Very soft green |
| `rgba(5,150,105,0.18)` | Opportunities card border | Soft green |
| `rgba(217,119,6,0.3)` | MMT card border | CF.amber rgba |
| `rgba(217,119,6,0.5)` | MMT card border top | Thicker amber |
| `rgba(217,119,6,0.08)` | Cash at risk badge bg | Amber tint |
| `rgba(217,119,6,0.5)` | Pulse dot shadow | Amber glow |
| `rgba(220,38,38,0.3)` | Overdue alert border | CF.red rgba |
| `rgba(220,38,38,0.04)` | Overdue alert bg | Very soft red |
| `rgba(220,38,38,0.1)` | Overdue icon bg | Soft red |
| `rgba(220,38,38,0.25)` | Overdue icon border | Soft red |
| `#fff` | Review now btn text | White |
| `#ffffff` | CashIQ FAB bg | White — **hardcoded light** |
| `#E5E7EB` | CashIQ FAB border | **Same as light navyLine — hardcoded light** |
| `#111827` | CashIQ FAB title | **Same as light ink — hardcoded** |
| `#6B7280` | CashIQ FAB sub | Gray — **hardcoded light** |
| `#EF4444` | CashIQ notification badge | **Different from CF.red #DC2626** |
| `#fff` | Notification badge border | White |
| `#F3F4F6` | Arrow button bg | Light gray — **hardcoded light** |
| `#9CA3AF` | Arrow icon | Same as light inkMute |
| `rgba(220,38,38,0.5)` | cashiq-pulse animation | Red pulse |
| `rgba(62,230,168,0.07)` | Safe-to-spend hero gradient | Soft green |
| `rgba(61,123,255,0.04)` | Safe-to-spend hero gradient | Soft blue |
| `rgba(62,230,168,0.1)` | Radial glow (orb) | Green glow |
| `rgba(61,123,255,0.08)` | Radial glow (orb) | Blue glow |
| `rgba(255,255,255,0.025)` | Mini-KPI card bg | **Near-invisible in light mode** |
| `rgba(168,179,212,0.08)` | Conservative bars bg | Muted blue-gray |
| `rgba(168,179,212,0.15)` | Conservative bars border | Muted blue-gray |
| `rgba(246,181,74,0.75)` | Labor bars | **F6B54A ≠ CF.amber D97706** |
| `rgba(62,230,168,0.65)` | Materials bars | **3EE6A8 ≠ CF.green 059669** |
| `rgba(61,123,255,0.75)` | Revenue bars | CF.blue rgba |
| `#2CA01C` | QuickBooks integration dot | Green — not in token set |

### Hardcoded Colors in Screens.jsx

| Value | Location | Purpose |
|---|---|---|
| `rgba(62,230,168,0.25)` | Safe-to-spend hero border | Green border |
| `rgba(255,106,122,0.8)` | Progress bar committed | Red-pink |
| `rgba(246,181,74,0.7)` | Progress bar committed blend | Orange-amber |
| `rgba(62,230,168,0.5/0.85)` | Progress bar safe | Green |
| `rgba(255,255,255,0.025)` | AR mini-KPI cards | Subtle bg |
| `rgba(61,123,255,0.3)` | Hire answer card border | Blue |
| `linear-gradient(135deg,rgba(61,123,255,0.1),rgba(111,232,255,0.05))` | Hire answer card bg | |
| `rgba(111,232,255,0.15)` | Hire AI background glow | Cyan radial |
| `rgba(111,232,255,0.12/0.25)` | AI icon bg/border | |
| `rgba(111,232,255,0.18)` | AI chat container border | |
| `rgba(111,232,255,0.08)` | AI chat container shadow | |
| `rgba(111,232,255,0.3)` | AI avatar border | |
| `rgba(111,232,255,0.1)` | AI loading bubble border | |
| `rgba(111,232,255,0.35)` | AI avatar box-shadow | |
| `rgba(111,232,255,0.06)` | Suggestion btn bg | |
| `rgba(111,232,255,0.18)` | Suggestion btn border | |
| `rgba(111,232,255,0.12)` | Suggestion btn hover bg | |
| `rgba(111,232,255,0.35)` | Suggestion btn hover border | |
| `linear-gradient(135deg,#F6B54A,#E07420)` | Receipt submit / user avatar | Amber gradient |
| `#03060F` | Submit btn text / avatar text | Near-black |
| `rgba(246,181,74,0.5)` | Submit btn shadow | Amber shadow |
| `rgba(246,181,74,0.04)` | Upload zone drag bg | Very subtle amber |
| `rgba(246,181,74,0.1)` | Upload icon bg | Soft amber |
| `rgba(246,181,74,0.25)` | Upload icon border | Soft amber |
| `rgba(255,106,122,0.6)` | Validation error border | Pinkish red |
| `rgba(62,230,168,0.08)` | Matched success bg | Soft green |
| `rgba(62,230,168,0.2)` | Matched success border | Soft green |
| `#6BA3FF` | Upload Receipt btn icon | **Different from CF.blue** |
| `rgba(0,0,0,0.6)` | Modal backdrop | Dark overlay |
| `rgba(0,0,0,0.7)` | Receipt modal shadow | Dark shadow |
| `rgba(62,230,168,0.1)` | Success icon bg | Soft green |
| `rgba(62,230,168,0.3)` | Success icon border | Green border |
| `rgba(62,230,168,0.4)` | Success icon shadow | Green glow |
| `rgba(61,123,255,0.12)` | Account icon bg | |
| `rgba(61,123,255,0.25)` | Account icon border | |
| `rgba(61,123,255,0.2)` | Filter active bg | |
| `rgba(5,150,105,0.08)` | Jobs closing total bg | Soft green |
| `rgba(5,150,105,0.18)` | Jobs closing total border | Soft green |
| `rgba(220,38,38,0.08)` | OVERDUE badge bg | CF.red rgba |
| `rgba(220,38,38,0.2)` | OVERDUE badge border | CF.red rgba |
| `rgba(217,119,6,0.08/0.22)` | Invoice send reminder btn | CF.amber rgba |
| `rgba(255,255,255,0.02)` | Table row hover | Near-invisible in light |
| `#3D5A9E` | Payroll avatar 1 | Unique — not in token set |
| `#2E7D64` | Payroll avatar 2 | Unique |
| `#7B4EA0` | Payroll avatar 3 | Unique |
| `#9E5A2E` | Payroll avatar 4 | Unique |
| `#2E7098` | Payroll avatar 5 | Unique |
| `#9E3D5A` | Payroll avatar 6 | Unique |
| `#5A9E3D` | Payroll avatar 7 | Unique |
| `#7D6B2E` | Payroll avatar 8 | Unique |
| `rgba(255,255,255,0.9)` | Payroll avatar text | Bright white |
| `#3a4a6a` | receipt-upload.html notes label | **Unique, not in any token set** |
| `rgba(255,255,255,0.04)` | btn-new hover bg | Subtle white |

---

### Color Groupings

#### Background Colors

| Color | Context |
|---|---|
| `#F8F9FB` | Page bg (light) |
| `#FFFFFF` | Card surface (light) |
| `#F3F4F6` | Secondary surface (light) |
| `#ECEEF2` | Tertiary surface (light) |
| `#0A0F1C` | Page bg (dark) |
| `#0F1629` | Card surface (dark) |
| `#141D35` | Secondary surface (dark) |
| `#1A2540` | Tertiary surface (dark) |
| `#030712` | Page bg (receipt-upload / standalone) |
| `#080F1E` | Card surface (receipt-upload) |
| `#0C1528` | Secondary surface (receipt-upload) |
| `#111E38` | Tertiary surface (receipt-upload) |
| `#080F1E` | Tweaks panel bg |
| `linear-gradient(145deg,#0F1C3A,#060C1A)` | CFMark logo bg |
| `linear-gradient(135deg,#0A1020,#0F1C3A,#0D1A35)` | CashIQ panel header |

#### Text Colors

| Color | Context |
|---|---|
| `#111827` | Primary text (light) |
| `#4B5563` | Secondary text (light) |
| `#9CA3AF` | Muted text (light) |
| `#F0F4FF` | Primary text (dark) |
| `#9BAAC8` | Secondary text (dark) |
| `#5C6B8A` | Muted text (dark) |
| `#F1F5F9` | CashIQ panel title (slightly off) |
| `#6B7280` | CashIQ FAB subtitle |
| `#92400E` | AlertBanner warning text (light only) |
| `#991B1B` | AlertBanner danger text (light only) |
| `#1D4ED8` | AlertBanner info text (light only) |
| `#03060F` | Avatar text, submit button text |
| `#3a4a6a` | receipt-upload notes label (unique) |

#### Border Colors

| Color | Context |
|---|---|
| `#E5E7EB` | Borders (light) |
| `#E9EAEC` | Sidebar shadow (light) |
| `#1E2D4A` | Borders (dark) |
| `#1C2A48` | receipt-upload borders, tweaks |
| `transparent` | Card border (light) |
| `#FDE68A` | AlertBanner warning (light only) |
| `#FECACA` | AlertBanner danger (light only) |
| `#BFDBFE` | AlertBanner info (light only) |

#### Accent / Brand Colors

| Color | Token | Purpose |
|---|---|---|
| `#3D7BFF` | `CF.blue` | Primary interactive |
| `#5B91FF` | `CF.blueBright` | Hover state |
| `#6FE8FF` | `CF.cyan` | AI/live indicator |
| `#6BA3FF` | — | BETA badge, upload btn (inconsistent) |
| `#EA580C` | `CF.orange` | Wordmark "Flow" |
| `#FF8A00` | — | Logo polygon, receipt-upload --orange |

#### Status Colors

| Color | Token | Purpose |
|---|---|---|
| `#059669` | `CF.green` | Success (chip fg) |
| `#3EE6A8` | — | Success glow/live (receipt-upload --green) |
| `#D97706` | `CF.amber` | Warning |
| `#F6B54A` | — | Warm amber (submit btn, receipt-upload --amber) |
| `#B45309` | — | Amber chip foreground (darker) |
| `#DC2626` | `CF.red` | Danger |
| `#EF4444` | — | Notification badge red (different) |
| `rgba(255,106,122,...)` | — | Danger variant (pinkish) |

#### Shadow Colors

| Value | Context |
|---|---|
| `rgba(0,0,0,0.05)` + `rgba(0,0,0,0.06)` | Card shadow (light) |
| `rgba(0,0,0,0.4)` | CFMark shadow, CashIQ backdrop |
| `rgba(0,0,0,0.5)` | Notification dropdown shadow |
| `rgba(0,0,0,0.6)` | Modal backdrop, Why AI modal |
| `rgba(0,0,0,0.7)` | Receipt modal shadow |
| `rgba(0,0,0,0.8)` | Tweaks panel shadow |
| `rgba(61,123,255,0.18/0.24)` | FAB shadow |
| `rgba(61,123,255,0.3)` | Primary btn shadow, CashIQ avatar glow |
| `rgba(246,181,74,0.5/0.6)` | Submit button shadow |
| `rgba(62,230,168,0.3/0.4)` | Success icon glow |

#### Light Theme Only Colors

`#F8F9FB`, `#FFFFFF`, `#F3F4F6`, `#ECEEF2`, `#E5E7EB`, `#111827`, `#4B5563`, `#9CA3AF`, `#E9EAEC`, `#FFFBEB`, `#FEF2F2`, `#EFF6FF`, `#FDE68A`, `#FECACA`, `#BFDBFE`, `#92400E`, `#991B1B`, `#1D4ED8`, `#FEE2E2`

CashIQ FAB: `#fff`, `#E5E7EB`, `#111827`, `#6B7280`, `#F3F4F6`

#### Dark Theme Only Colors

`#0A0F1C`, `#0F1629`, `#141D35`, `#1A2540`, `#1E2D4A`, `#F0F4FF`, `#9BAAC8`, `#5C6B8A`, `#030712`, `#080F1E`, `#0C1528`, `#111E38`, `#1C2A48`, `linear-gradient(135deg,#0A1020,#0F1C3A,#0D1A35)`

#### Shared / Theme-Agnostic (accent colors used in both)

`#3D7BFF`, `#6FE8FF`, `#059669`, `#D97706`, `#DC2626`, `#EA580C`, `#5B91FF`

---

## 2. EVERY TYPOGRAPHY VALUE

### Font Families

| Family | Weights Loaded | Where | Role |
|---|---|---|---|
| `Inter` | 400, 500, 600, 700, 800 | Dashboard.html | Primary UI (v2 Dashboard) |
| `Manrope` | 400, 500, 600, 700, 800 | All files | Primary UI (standalone, receipt, components) |
| `Instrument Serif` | 400 (normal + italic) | Dashboard.html | Editorial display (AI answers) |
| `JetBrains Mono` | 400, 500, 600 | Dashboard.html (500,600), receipt-upload.html (400,600) | Monospace numbers/code |

**Font stack (body):**
- Dashboard.html: `font-family: 'Inter', 'Manrope', sans-serif`
- Dashboard-standalone-src.html: `font-family: 'Manrope', sans-serif`
- receipt-upload.html: `font-family: 'Manrope', sans-serif`
- Components.jsx Btn: `fontFamily: "'Inter','Manrope',sans-serif"`
- Components.jsx CFWordmark: `fontFamily: "'Manrope',sans-serif"`

### Font Sizes (Smallest to Largest)

| Size | Element | File | Notes |
|---|---|---|---|
| 7px | Chart micro-labels (WeeklyRhythmChart) | ScreenDashboard.jsx | Very small |
| 7.5px | WeeklyRhythmChart week labels | ScreenDashboard.jsx | |
| 8px | TODAY label, Conf. label, chart axis labels | Components.jsx, ScreenDashboard.jsx | |
| 8.5px | Bar chart income value labels | ScreenDashboard.jsx | |
| 9px | Section labels, CashIQ sub text, chart labels | Multiple | |
| 10px | Section labels, timestamps, form labels (uppercase) | Multiple | Very common |
| 11px | Chip font, card sublabels, nav labels, tweaks-title | Multiple | **Most used** |
| 12px | Button sm size, table secondary text, notif. titles | Multiple | Very common |
| 13px | Nav item text, table primary text, modal body, button md | Multiple | Common |
| 14px | Card/section titles, Tweaks button, JetBrains Mono amounts | Multiple | Common |
| 15px | Major card titles, topbar page title, button lg | Multiple | |
| 16px | Receipt amounts in list | Screens.jsx | |
| 17px | KPI mini-card selected value | ScreenDashboard.jsx | |
| 18px | Account balances (JetBrains Mono), payroll amounts | Multiple | |
| 20px | KPI card compact value, Instrument Serif inline | Multiple | |
| 22px | Modal header title, Instrument Serif answer cards | Multiple | |
| 24px | KPI card default value | Components.jsx | |
| 26px | Bottom row widget values (Payroll, Bills) | ScreenDashboard.jsx | |
| 28px | Net Worth / AI Forecast values | ScreenDashboard.jsx | |
| 30px | Account balance (JetBrains Mono) | Screens.jsx | |
| 32px | Asset Total value | ScreenDashboard.jsx | |
| 34px | Largest Open Invoice value | ScreenDashboard.jsx | |
| 38px | MMT safe-to-spend (mobile override, @520px) | Dashboard.html | Responsive |
| 44px | MMT safe-to-spend (default) | ScreenDashboard.jsx | |
| 48px | ForecastScreen safe-to-spend (compact) | Screens.jsx | |
| 64px | ForecastScreen safe-to-spend (default, JetBrains Mono) | Screens.jsx | Largest UI value |
| 120px | Thumbnail SVG letter "CF" | Dashboard-standalone-src.html | Decorative only |

### Font Weights

| Weight | Usage |
|---|---|
| 400 | Inactive nav, default body text |
| 500 | Secondary labels, inactive nav, body secondary |
| 600 | Card titles, section headings, button text, chip text |
| 700 | KPI values, critical data, section titles, bold labels |
| 800 | CFWordmark, modal headers, submit buttons, avatar initials |

### Letter Spacing Values

| Value | Element |
|---|---|
| `-0.04em` | 64px JetBrains Mono (safe-to-spend) |
| `-0.03em` | Large account/invoice values (30–34px) |
| `-0.02em` | KPI card values (24px), modal headers |
| `-0.025em` | KPISparkCard value |
| `-0.015em` | Topbar page title |
| `-0.01em` | Instrument Serif text |
| `0.02em` | Mobile nav labels |
| `0.04em` | BETA badge in CashIQ FAB |
| `0.06em` | Label text in charts, some percentage badges |
| `0.08em` | "Conf." label, JetBrains Mono chart labels |
| `0.09em` | Sidebar section labels, AI section headers |
| `0.1em` | Table headers, form labels |
| `0.12em` | tweaks-title, tweak-label |
| `0.14em` | Section labels in AI panels (Safe-to-Spend Live) |
| `0.16em` | CFWordmark "Smart" subscript |
| `6` (SVG px) | Thumbnail "CASHFLOW" text |

### Line Height Values

| Value | Element |
|---|---|
| 1 | Large numeric values, CFWordmark |
| 1.15 | KPI card values |
| 1.2 | Modal headers, Instrument Serif |
| 1.25 | Instrument Serif answers |
| 1.3 | Instrument Serif general |
| 1.35 | AI risk sub-text |
| 1.4 | Form textarea |
| 1.45 | AI insight body, priority card text |
| 1.5 | Body text, upload zone body |
| 1.55 | Notification body, AI insight secondary |
| 1.6 | Tweaks panel footer, receipt-upload header-title |
| 1.65 | AI chat messages, learn more modal |

### Text Transform Values

| Value | Elements |
|---|---|
| `uppercase` | tweaks-title, tweak-label, sidebar section labels, table headers, chart axis labels, form field labels (all), Chip "Smart" subscript, status labels in SVG charts |
| `none` (default) | All other text |

---

## 3. EVERY SPACING VALUE

### Padding (Most Common)

| Value | Elements |
|---|---|
| `2px 8px` | Chips, small percentage badges |
| `2px 7px` | Percentage badge in trend indicators |
| `3px` | Range picker container, pill-row container |
| `4px 10px` | Range picker option tabs |
| `5px 13px` | AI suggestion buttons |
| `5px 14px` | Status filter tabs |
| `6px 11px` | Accuracy badge in CashIQ |
| `7px 0` | Pill options |
| `7px 12px` | Risk/opportunity item cards |
| `7px 14px` | View breakdown button |
| `8px 12px` | AI action buttons, opportunity items |
| `9px 12px` | Confidence breakdown items |
| `9px 16px` | AI action CTA buttons |
| `10px 14px` | Mini-KPI cards, notification items |
| `12px 14px` | Top priority card |
| `12px 16px` | tweaks-drag, notification items |
| `13px 17px` | Chat message bubbles |
| `14px 16px` | tweaks-body |
| `14px 18px` | MMT section (mobile override) |
| `14px 22px` | Table row items, table headers |
| `16px 18px` | KPI card compact mode |
| `16px` | screen-scroll compact padding |
| `18px 20px` | Receipt modal header |
| `20px 22px` | Account cards, payroll rows |
| `20px 24px` | Standard cards |
| `20px` | AI screen chat panel |
| `22px 24px` | Forecast card |
| `24px` | screen-scroll standard padding |
| `28px 16px` | Upload zone (receipt-upload) |
| `32px 36px` | Safe-to-spend hero (standard) |
| `22px 24px` | Standard content padding |

### Margin / Gap

| Value | Usage |
|---|---|
| `4px` | Tiny icon gaps |
| `5px` | Small label+icon rows |
| `6px` | Badge gaps, form field gaps |
| `7px` | Label and icon spacing |
| `8px` | Common small row gaps, form row gaps |
| `9px` | Risk item gaps |
| `10px` | Standard row content gap |
| `12px` | Standard grid gap (kpi-grid, bottom-grid) |
| `14px` | Charts grid gap |
| `16px` | Standard section gap, card grid gap, screen-scroll gaps |
| `18px` | Why AI heading margin |
| `20px` | Larger content sections |

### Sidebar / Layout Widths

| Element | Collapsed | Expanded |
|---|---|---|
| Sidebar (Dashboard.html) | 64px | 240px |
| Sidebar (Dashboard-standalone-src.html) | 64px | 220px |
| Sidebar inner `W` (Components.jsx) | 56px | 220px |
| AI panel docked (>1200px) | — | 340px |
| AI panel docked (≤1200px) | — | 300px |
| AI panel docked (≤1000px) | — | 280px |
| CashIQ floating panel | — | 380px |
| Topbar height | — | 56px |

### Inconsistent Spacing Patterns

| Issue | Values Found |
|---|---|
| Sidebar expanded width | 220px (inner), 240px (Dashboard.html shell) — differ by 20px |
| Card horizontal padding | `16px`, `18px`, `20px`, `22px`, `24px` — 5 different values |
| Section padding compact vs standard | `16px` / `24px` — reasonable but inner cards don't follow |
| Grid gaps | `12px`, `14px`, `16px` — three close values with no clear rule |
| Topbar padding | `20px` default, `16px` at ≤1100px, `14px` at ≤520px |
| Mobile bottom padding | `80px` on `.screen-scroll` at ≤768px |

---

## 4. BORDERS AND RADIUS

### Border Radius Values

| Value | Elements |
|---|---|
| 0 | None used explicitly |
| 2px | SVG rect elements in charts (`rx="2"`) |
| 3px | Chart bar rects (`rx="3"`) |
| 4px | Chart bar rects (`rx="4"`) |
| 5px | AI badge in Sidebar (inline `borderRadius: 5`) |
| 6px | Filter tab hover, reasoning step number circles |
| 7px | Range picker tabs, some inline elements |
| 8px | Topbar icon buttons, sidebar nav items, modal close btn |
| 9px | Button sm, ghost filter toggles, pill-row |
| 10px | Form inputs (SettingsScreen), account filter, AI action btns, opportunity/risk items |
| 11px | KPI compact cards, receipt-upload inputs |
| 12px | KPI cards, receipt items, notification dropdown, AI section cards |
| 13px | Submit button (receipt-upload.html standalone) |
| 14px | Forecast scenario cards, receipt modal upload zone, chart tooltips |
| 16px | Primary card radius (most widespread), CashIQ panel, receipt modal header |
| 18px | Safe-to-spend hero, CashIQ panel mobile override |
| 20px | CashIQ launcher (FAB), receipt modal outer wrapper |
| `50%` | Circular avatars, status indicator dots |
| `999px` | Chips, progress bars, scrollbar thumbs (pill shape) |
| `Math.round(size * 0.26)` | CFMark (computed — ~9px at size=34) |

### Border Widths

| Width | Usage |
|---|---|
| `1px solid` | Universal — nearly all borders |
| `1.5px solid` | Notification badge border, MMT vertical dividers |
| `2px solid` | CashIQ avatar border (AI panel), MiniChart TODAY circle |
| `2px dashed` | Receipt upload zone |
| `2px solid` (top only) | MMT card border-top accent |
| `6px` / `10px` | SVG circle stroke widths (gauge, confidence ring) |

### Outline Values

- All interactive elements use `outline: none` (removed native focus ring)
- No custom `outline` styles defined — **focus accessibility gap**

---

## 5. SHADOWS AND EFFECTS

### Box Shadows

| Value | Element |
|---|---|
| `var(--cf-cardShadow)` | All `.cf-card` elements and most inline cards |
| `0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)` | Card shadow (light mode resolved) |
| `0 2px 8px rgba(0,0,0,0.4)` | CFMark logo |
| `0 1px 3px rgba(61,123,255,0.3)` | Primary button |
| `0 4px 20px -6px rgba(246,181,74,0.5)` | Submit button (Screens.jsx modal) |
| `0 4px 24px -6px rgba(246,181,74,0.5)` | Submit button (receipt-upload.html) |
| `0 8px 32px -6px rgba(246,181,74,0.6)` | Submit button hover |
| `0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(111,232,255,0.04)` | Tweaks panel |
| `0 20px 50px -10px rgba(0,0,0,0.5)` | Notification dropdown |
| `0 32px 80px rgba(0,0,0,0.7)` | Receipt upload modal |
| `0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(61,123,255,0.08)` | CashIQ floating panel |
| `0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 30px -4px rgba(61,123,255,0.18)` | CashIQ FAB default |
| `0 8px 12px -2px rgba(0,0,0,0.09), 0 20px 40px -4px rgba(61,123,255,0.24)` | CashIQ FAB hover |
| `0 0 0 3px rgba(61,123,255,0.1), 0 4px 16px rgba(0,0,0,0.4)` | CashIQ AI avatar ring |
| `0 0 14px -4px rgba(111,232,255,0.35)` | AI loading/chat avatar |
| `0 0 16px -4px rgba(111,232,255,0.4)` | AI screen avatar |
| `0 8px 30px rgba(0,0,0,0.12)` | Learn more modal |
| `0 16px 48px rgba(0,0,0,0.18)` | Why AI modal |
| `0 0 40px -12px rgba(62,230,168,0.4)` | Receipt success icon |
| `0 0 40px -12px rgba(62,230,168,0.3)` | receipt-upload.html success icon |
| `0 0 5px ${CF.green}` | Sync indicator dots, job margin line |
| `0 0 6px ${CF.green}` | Integration status dots |
| `0 0 6px rgba(217,119,6,0.5)` | MMT amber pulse dot |
| `0 0 8px rgba(62,230,168,0.8)` | Online indicator (AICopilotPanel) |
| `0 0 60px rgba(62,230,168,0.25)` | Safe-to-spend value text-shadow |

### Text Shadows

| Value | Element |
|---|---|
| `0 0 60px rgba(62,230,168,0.25)` | $184,200 safe-to-spend in ForecastScreen (technically `textShadow`) |

### Filters / Backdrop Filters

| Value | Element |
|---|---|
| `backdrop-filter: blur(4px)` | Receipt modal backdrop, Why AI modal backdrop |
| `backdrop-filter: blur(3px)` | CashIQ sheet (standalone) |
| `backdrop-filter: blur(2px)` | CashIQ panel backdrop |
| `backdrop-filter: blur(4px)` | Learn more modal |
| `filter: url(#glow)` | MiniChart TODAY circle (SVG `feGaussianBlur`) |
| `-webkit-font-smoothing: antialiased` | Body (all files) |
| `-moz-osx-font-smoothing: grayscale` | Body (Dashboard.html) |

### Opacity Values

| Value | Usage |
|---|---|
| `0.02` | Table row hover backgrounds |
| `0.025` | AI chat bubble bg, mini-KPI cards |
| `0.03` | Notification unread bg, tweaks-drag bg |
| `0.04` | Receipt upload zone hover |
| `0.25` | @keyframes pulse minimum opacity |
| `0.4` | Sidebar expand/collapse button default, CashIQ panel backdrop |
| `0.45` | Btn disabled, TODAY line in MiniChart |
| `0.5` | Close button default opacity, modal backdrop |
| `0.55` | CashIQ backdrop |
| `0.6` | Dismiss btn, "Learn more" text |
| `0.65` | Chart items |
| `0.7` | AI status live text opacity hint |
| `1` | Hover states (full opacity) |

### Transitions

| Value | Elements |
|---|---|
| `all 0.12s` | Sidebar nav item background |
| `all 0.15s` | Most hover states (Btn, KPICard, NavItem, pill-opt, icon buttons) |
| `all 0.15s ease` | Btn, KPICard |
| `all 0.18s` | Form inputs, btn-new, modal close, receipt submit btn |
| `all 0.2s` | Receipt upload zone, toggle, cashiq-in timing |
| `all 0.22s` | Modal close button |
| `background 0.12s` | Sidebar nav item |
| `background 0.15s` | Table rows |
| `border-color 0.18s` | Form inputs |
| `opacity 0.15s` | Sidebar expand button |
| `transform 0.2s` | Accordion chevrons |
| `width 0.22s cubic-bezier(.4,0,.2,1)` | Sidebar aside |
| `width 0.25s cubic-bezier(.4,0,.2,1)` | Sidebar wrapper shell |

### Animations

| Name | Definition | Used On |
|---|---|---|
| `pulse` | opacity 0.25/scale 0.8 → opacity 1/scale 1.05 → repeat (1.3s ease-in-out) | Loading dots in MiniChart |
| `cashiq-in` | opacity 0 + translateY(16px) scale(0.97) → full (0.22s cubic-bezier(0.34,1.56,0.64,1)) | CashIQ floating panel entrance |
| `cashiq-pulse` | box-shadow 0→5px rgba(220,38,38) expand+fade (2.4s ease-in-out infinite) | Notification badge, online indicator |

### Transforms

| Value | Element |
|---|---|
| `translateY(-1px)` | KPICard hover (with onClick), btn-submit hover |
| `translateY(-3px)` | CashIQ FAB hover |
| `translateY(0)` | btn-submit active (reset) |
| `rotate(-90deg)` | SVG confidence/gauge rings (start from top) |
| `rotate(0deg)` / `rotate(-90deg)` | Accordion chevron icons |
| `translateX(-50%)` | Chart label centering |
| `translateY(-50%)` | Form field prefix symbol centering |

---

## 6. FULL COMPONENT LIST

### From Components.jsx

---

**`Icon`**
- Renders: SVG icon from a path library (24 icons defined)
- Props: `name`, `size` (default 16), `color` (default `CF.inkDim`), `strokeWidth` (default 1.6)
- Styling: inline SVG, no CSS classes
- Light theme: yes (uses `color` prop — inherits from parent context)
- Dark theme: yes
- Missing states: none (purely decorative)
- Hardcoded: default color `CF.inkDim` resolves to var; 24 named paths

---

**`CFMark`**
- Renders: Logo mark (square with gradient bg + SVG dollar/C letter shape)
- Props: `size` (default 34)
- Styling: inline styles
- Light theme: no — gradient `#0F1C3A,#060C1A` is always dark
- Dark theme: yes
- Missing: no light version of logo mark
- Hardcoded: `#0F1C3A`, `#060C1A`, `#FF8A00`, `white`, border uses `CF.navyLine`

---

**`CFWordmark`**
- Renders: "CashFlowSmart" text wordmark
- Props: `size` (default 15)
- Styling: inline styles
- Light theme: partial (uses `CF.ink` which adapts, but orange `CF.orange` is always orange)
- Dark theme: partial
- Hardcoded: `CF.orange` (`#EA580C`) for "Flow", font, weights

---

**`Chip`**
- Renders: Status label pill
- Props: `children`, `color` (mute|green|red|amber|blue|cyan), `style`
- Styling: inline styles with color map
- Light theme: yes (mute uses CF.navy3/navyLine — theme-aware)
- Dark theme: yes
- Missing: hover/focus/active states
- Hardcoded: `#B45309` for amber fg (inconsistent with CF.amber `#D97706`), cyan chip uses blue rgba not cyan rgba

---

**`Btn`**
- Renders: Button with 5 variants
- Props: `children`, `variant` (primary|ghost|ghostBlue|danger|ai), `size` (sm|md|lg), `onClick`, `style`, `disabled`
- Styling: inline styles + useState hover
- Light theme: yes (uses CF tokens)
- Dark theme: yes
- Missing: focus state (no `outline` or `ring`), active state
- Hardcoded: `#2F68EE` hover, `rgba(255,106,122,...)` danger (not CF.red)

---

**`KPICard`**
- Renders: KPI metric card with optional chip and sub-label
- Props: `label`, `value`, `sub`, `chip`, `chipColor`, `mono`, `accent`, `onClick`, `compact`
- Styling: inline styles + useState hover
- Light theme: yes
- Dark theme: yes
- Missing: focus state, keyboard accessibility
- Hardcoded: `rgba(61,123,255,0.35)` hover border, uses `CF.green` for accent color (hardcoded positive=green assumption)

---

**`Sidebar`**
- Renders: Left navigation with logo, nav items, user card, theme toggle awareness
- Props: `active`, `onNav`, `collapsed`, `onToggle`
- Styling: inline styles
- Light theme: yes (reads from CF tokens)
- Dark theme: yes (observes `dark-mode` class via MutationObserver, swaps logo src)
- Missing: collapsed tooltip on keyboard, focus rings on nav items
- Hardcoded: `#111827` active item bg (same as light --cf-ink — visible in dark but semantically wrong), avatar gradient `#F6B54A/#E07420`, `#03060F` avatar text, badge colors `#FEE2E2/#DC2626`
- Logo images: `assets/favicon_cashflow.png` (collapsed), `assets/cashflow_logo.svg` (dark expanded), `assets/cashflow_dark_logo.png` (light expanded)

---

**`MobileNav`**
- Renders: Bottom navigation bar (5 items)
- Props: `active`, `onNav`
- Styling: inline styles
- Light theme: yes (uses CF tokens for bg/border)
- Dark theme: yes
- Missing: active indicator line/dot, focus states
- Hardcoded: `rgba(111,232,255,0.05)` AI active bg

---

**`Topbar`**
- Renders: Page header with title, subtitle, actions, theme toggle, notification bell, new job button
- Props: `title`, `sub`, `actions`, `onMenuClick`
- Styling: inline styles + useState
- Light theme: yes
- Dark theme: yes (contains theme toggle, observes isDark state)
- Missing: mobile menu button hidden with CSS display:none but no media query toggle
- Hardcoded: notification dot uses `CF.red` + `CF.navy1` border (border shows card bg behind dot)

---

**`MiniChart`**
- Renders: SVG sparkline chart with gradient fill, TODAY marker, projected tooltip
- Props: `range` (7D|30D|90D|1Y)
- Styling: inline SVG
- Light theme: partial (uses CF tokens for labels, but gradient fills are hardcoded blue/cyan)
- Dark theme: yes
- Missing: no actual data injection; uses hardcoded dataset per range
- Hardcoded: gradient `#6FE8FF → #4A84FF → #3D7BFF`, `JetBrains Mono` font in SVG text

---

**`AlertBanner`**
- Renders: Alert/notice bar with icon, text, optional dismiss
- Props: `type` (warning|danger|info), `children`, `onDismiss`
- Styling: inline styles, hardcoded color map
- **Light theme: YES** (color map uses explicit light-mode colors only)
- **Dark theme: BROKEN** — uses `#FFFBEB`, `#92400E`, `#FEF2F2`, `#991B1B`, `#EFF6FF`, `#1D4ED8` — all light-background colors
- Missing: dark theme support, focus state on dismiss
- Hardcoded: entire color map is light-specific

---

### From ScreenDashboard.jsx

---

**`SparkLine`**
- Renders: Simple SVG line chart with gradient fill
- Props: `data[]`, `color`, `h`, `w`, `filled`, `responsive`
- Styling: inline SVG
- Light theme: yes (color passed as prop)
- Dark theme: yes (color passed as prop)
- Missing: no hover/tooltip
- Hardcoded: `stopOpacity: 0.28` and `0` for gradient

---

**`CashFloorGauge`**
- Renders: Circular gauge SVG with percentage label
- Props: `pct` (default 145)
- Styling: inline SVG
- Light theme: yes (uses CF tokens)
- Dark theme: yes
- Missing: responsive sizing
- Hardcoded: `r=46`, `cx/cy=60`, `120x120` fixed SVG size, color thresholds at pct≥100/50

---

**`ProjectedCashFlowChart`**
- Renders: 6-month dual-line (optimistic + conservative) chart
- Props: none
- Styling: inline SVG, uses CF tokens
- Light theme: yes
- Dark theme: yes
- Missing: no props — fully hardcoded data
- Hardcoded: all data, colors (`CF.blue`, `CF.amber`), dimensions (520×160)

---

**`WeeklyRhythmChart`**
- Renders: Grouped 3-bar weekly chart (revenue, labor, materials)
- Props: none
- Styling: inline SVG
- Light theme: yes (uses CF tokens for labels)
- Dark theme: yes
- Missing: no props — fully hardcoded data
- Hardcoded: all data, bar colors `rgba(61,123,255,0.75)`, `rgba(246,181,74,0.75)`, `rgba(62,230,168,0.65)` — uses F6B54A not CF.amber D97706

---

**`KPISparkCard`**
- Renders: KPI card with inline sparkline, delta badge
- Props: `label`, `value`, `delta`, `deltaDir`, `sparkData`, `sparkColor`, `icon`, `compact`
- Styling: inline styles + SparkLine
- Light theme: yes (CF.navy1 bg, CF tokens)
- Dark theme: yes
- Missing: hover state, onClick, focus
- Hardcoded: positive color `#059669` / bg `rgba(16,185,129,0.1)`, negative `#DC2626` / bg `rgba(239,68,68,0.1)` — should use CF tokens

---

**`AICopilotPanel`**
- Renders: Right sidebar AI panel with priorities, risks, opportunities, action center, learning bar
- Props: `onNavigate`
- Styling: inline styles
- **Light theme: BROKEN** — header uses hardcoded dark gradient (`#0A1020`, `#0F1C3A`, `#0D1A35`), online dot `#0A1020` border would match only dark bg
- **Dark theme: YES**
- Missing: light mode header, scroll within content
- Hardcoded: header gradient, `#3EE6A8` online dot, `#F1F5F9` title text, `#6BA3FF` badge/accuracy

---

**`AssetTotalWidget`**
- Renders: Asset total line chart + Net Worth + AI Forecast Summary cards (2-column grid)
- Props: none
- Styling: inline styles + SVG
- Light theme: yes (CF tokens)
- Dark theme: yes
- Missing: no props — fully hardcoded data (84 hardcoded data points)
- Hardcoded: all data, `$18,293.00`, `$14,892.44`, `$3,297.32`

---

**`CashFlowForecastWidget`**
- Renders: Bar chart (income vs expenses) with KPI mini-cards and AI insight footer
- Props: none
- Styling: inline styles + SVG
- Light theme: yes (CF tokens)
- Dark theme: yes
- Missing: no props — hardcoded data (Jan–Jun 2026)
- Hardcoded: all data, bar colors `CF.blue`/`CF.amber`, font `Inter,sans-serif` in SVG text

---

**`DashboardScreen`**
- Renders: Full dashboard layout — alerts, MMT, KPI row, invoice+jobs, forecast+activity, chart+hire, overdue alert, bottom row, CashIQ panel/launcher
- Props: `compact`, `onNavigate`
- Styling: inline styles + CSS classes
- Light theme: yes
- Dark theme: yes (partially — CashIQ FAB is hardcoded light)
- Missing: CashIQ FAB dark mode, several hardcoded data values should be props
- Hardcoded: CashIQ FAB `#fff/#111827/#6B7280/#E5E7EB/#F3F4F6`, all dashboard data

---

### From Screens.jsx

---

**`ForecastScreen`**
- Renders: 12-month cash projection bar chart with KPIs and scenario cards
- Props: `compact`
- Styling: inline styles
- Light theme: yes (CF tokens)
- Dark theme: yes
- Missing: chart interactivity, no data props
- Hardcoded: all chart data, `rgba(168,179,212,...)` conservative color not in token set

---

**`JobsScreen`**
- Renders: Job table with KPIs, margin bars, status chips
- Props: `compact`
- Styling: inline styles + CSS classes
- Light theme: yes
- Dark theme: yes
- Missing: row selection, sort columns, no data props
- Hardcoded: all job data, margin threshold colors (50%/30%)

---

**`AccountsScreen`**
- Renders: Account cards + transaction list with filters
- Props: `compact`
- Styling: inline styles
- Light theme: yes
- Dark theme: yes
- Missing: pagination, no data props
- Hardcoded: all transaction data, account data

---

**`PayrollScreen`**
- Renders: KPIs, alert, payroll runs, team roster
- Props: `compact`
- Styling: inline styles
- Light theme: yes
- Dark theme: yes
- Missing: accordion animation, no data props
- Hardcoded: avatar colors array (8 unique hex values not in token set), all team data

---

**`AIScreen`**
- Renders: Full-page AI chat interface with KPIs, chat, suggestions, input
- Props: `compact`
- Styling: inline styles
- Light theme: yes (uses CF tokens, but chat bubbles use `rgba(255,255,255,0.025)` that's nearly invisible in light)
- Dark theme: yes (optimized for dark)
- Missing: message history persistence, chat bubble light theme support
- Hardcoded: `CONTEXT` prompt string, suggestion text, all KPI values

---

**`SettingsScreen`**
- Renders: Financial target settings form with inputs
- Props: `compact`
- Styling: inline styles
- Light theme: yes
- Dark theme: yes
- Missing: form validation, save feedback, no data props
- Hardcoded: all default field values

---

**`ReceiptUploadModal`**
- Renders: Modal overlay with file upload zone, form fields, success state
- Props: `onClose`, `onSubmit`
- Styling: inline styles + labelStyle/inputStyle functions
- Light theme: yes (CF tokens for inputs)
- Dark theme: yes
- Missing: actual file upload, onSubmit does nothing (simulated timeout)
- Hardcoded: job options list, category list, error color `rgba(255,106,122,0.6)`, notes optional text `CF.navy3` (uses bg color as text color — **bug**)

---

**`ReceiptsScreen`**
- Renders: Receipt queue list with filter tabs, stats KPIs, upload modal trigger
- Props: `compact`
- Styling: inline styles
- Light theme: yes
- Dark theme: yes
- Missing: actual receipt images/thumbnails, no pagination
- Hardcoded: all receipt data, category/status color maps

---

## 7. HOW THEMES WORK

### Theme Trigger Mechanism

Theme is toggled via CSS class on `<html>` element:
- Default: `<html class="light-mode">` (set in Dashboard.html line 2)
- Dark mode: `<html class="dark-mode">`
- Toggle function (in `Topbar`):
  ```js
  document.documentElement.classList.toggle('dark-mode', next);
  document.documentElement.classList.toggle('light-mode', !next);
  ```
- State tracked in `Topbar` via `useState(isDark)`, persisted only in memory (no localStorage)

### CSS Classes / Variables That Switch

All `--cf-*` CSS variables are redefined under `html.light-mode` and `html.dark-mode`:
- `--cf-navy0` through `--cf-navy3` (surface layers)
- `--cf-navyLine` (borders)
- `--cf-ink`, `--cf-inkDim`, `--cf-inkMute` (text)
- `--cf-cardShadow`, `--cf-cardBorder`, `--cf-sidebarShadow`

Additional dark-mode overrides in Dashboard.html:
- `html.dark-mode body { background: #0A0F1C; color: #F0F4FF; }`
- `html.dark-mode .app-root { background: #0A0F1C; }`
- `html.dark-mode input, select, textarea { background: #141D35; color: #F0F4FF; border-color: #1E2D4A; }`

### Components Fully Supporting Both Themes

All CF token usage adapts automatically:
- Icon, Chip, Btn, KPICard, Sidebar (with logo swap), MobileNav, Topbar, SparkLine, CashFloorGauge, KPISparkCard, ForecastScreen, JobsScreen, AccountsScreen, PayrollScreen, SettingsScreen, ReceiptsScreen, AssetTotalWidget, CashFlowForecastWidget, ProjectedCashFlowChart, WeeklyRhythmChart (labels adapt, fill hardcoded but acceptable)

### Components With Broken / Missing Theme Support

| Component | Issue |
|---|---|
| `AlertBanner` | **Fully broken in dark.** Hardcoded light-mode colors: `#FFFBEB`, `#FECACA`, `#EFF6FF`, text colors `#92400E`, `#991B1B`, `#1D4ED8` |
| `AICopilotPanel` | **Header broken in light.** Header gradient `#0A1020 → #0F1C3A` is dark-only. Online dot `border: '#0A1020'` matches only dark bg |
| `DashboardScreen` CashIQ FAB | **Broken in dark.** FAB bg `#fff`, text `#111827`, border `#E5E7EB`, arrow bg `#F3F4F6` are all hardcoded light |
| `receipt-upload.html` | **Dark only.** No theme toggle, no CF variable system, uses standalone dark variables |
| `Dashboard-standalone-src.html` | **Dark only.** Hardcoded `#030712` background, no theme support |
| `Tweaks panel` | **Dark only.** Hardcoded `#080F1E`, `#1C2A48`, `#9BAAC8`, `#5C6B8A` |
| `AIScreen` chat bubbles | **Suboptimal in light.** `rgba(255,255,255,0.025)` AI bubble bg and `rgba(61,123,255,0.12)` user bubble work but look very different in light |
| `MiniChart` | Partial — gradient fills are hardcoded but look fine in both since they're accent colors |

---

## 8. ALL ASSETS REFERENCED

| Asset | Referenced In | Exists? | Notes |
|---|---|---|---|
| `assets/favicon_cashflow.png` | Dashboard.html (favicon), Components.jsx (Sidebar collapsed, Topbar mobile dark mode) | Unknown — not in project root | PNG favicon + logo |
| `assets/cashflow_logo.svg` | Components.jsx (Sidebar dark expanded), receipt-upload.html (header) | Unknown | SVG light/white logo |
| `assets/cashflow_dark_logo.png` | Components.jsx (Sidebar light expanded, Topbar mobile light mode) | Unknown | PNG dark/colored logo |
| `assets/ai_agent_avater.png` | ScreenDashboard.jsx (AICopilotPanel avatar, CashIQ FAB) | Unknown | Typo: "avater" — note spelling in code |

**External CDN References:**

| Asset | URL | Version |
|---|---|---|
| React | unpkg.com/react | 18.3.1 |
| ReactDOM | unpkg.com/react-dom | 18.3.1 |
| Babel Standalone | unpkg.com/@babel/standalone | 7.29.0 |
| JSCharting | code.jscharting.com/latest | latest |
| Google Fonts: Inter | fonts.googleapis.com | — |
| Google Fonts: Manrope | fonts.googleapis.com | — |
| Google Fonts: Instrument Serif | fonts.googleapis.com | — |
| Google Fonts: JetBrains Mono | fonts.googleapis.com | — |

**Note:** `jscharting.js` is loaded in Dashboard.html but no JSCharting API calls are used in any component file. Possibly unused or for future implementation.

**Missing assets to create:**
- If `assets/` folder is empty, all 4 image assets need to be created/sourced
- `cashflow_logo.svg` (white/light version for dark sidebar)
- `cashflow_dark_logo.png` (colored version for light sidebar)
- `favicon_cashflow.png` (16×16 or 32×32 icon)
- `ai_agent_avater.png` (note: typo in code — filename has "avater" not "avatar")

---

## 9. INCONSISTENCY FLAGS

### Color Inconsistencies

| # | Issue | Values Conflicting |
|---|---|---|
| 1 | **Three different greens** | CF.green `#059669` vs receipt-upload/ScreenDashboard `#3EE6A8` vs `rgba(62,230,168,...)` `#3EE6A8` — the "glow" green and the "chip" green are different values |
| 2 | **Two different ambers** | CF.amber `#D97706` (warning chip text, AlertBanner) vs `#F6B54A` (submit button, receipt-upload `--amber`, WeeklyRhythmChart bars) |
| 3 | **Chip amber fg vs CF.amber** | Chip amber uses `#B45309` (darker) — differs from both `#D97706` and `#F6B54A` |
| 4 | **Upload receipt button color** | Uses `#6BA3FF` which is neither CF.blue `#3D7BFF` nor CF.cyan `#6FE8FF` |
| 5 | **CashIQ panel title color** | `#F1F5F9` vs CF.ink dark `#F0F4FF` — 1 hex step different |
| 6 | **Notification badge red** | `#EF4444` vs CF.red `#DC2626` |
| 7 | **Danger button** | `rgba(255,106,122,...)` pinkish red vs CF.red `#DC2626` |
| 8 | **receipt-upload.html navies** | `#030712`, `#080F1E`, `#0C1528`, `#111E38` are ALL different from CF dark variables `#0A0F1C`, `#0F1629`, `#141D35`, `#1A2540` |
| 9 | **receipt-upload.html `--orange`** | `#FF8A00` vs CF.orange `#EA580C` |
| 10 | **receipt-upload.html notes optional text** | `#3a4a6a` — unique, not in any token |
| 11 | **QuickBooks integration color** | `#2CA01C` — not in any token set |
| 12 | **Payroll avatar colors** | 8 unique hardcoded hex values (`#3D5A9E`, `#2E7D64`, `#7B4EA0`, `#9E5A2E`, `#2E7098`, `#9E3D5A`, `#5A9E3D`, `#7D6B2E`) not in token set |
| 13 | **Conservative forecast color** | `rgba(168,179,212,...)` — not tokenized |
| 14 | **`#6FE8FF` in ScreenDashboard legend** | Hard-coded where CF.cyan should be used |
| 15 | **`#3D7BFF` in ScreenDashboard legend** | Hard-coded where CF.blue should be used |
| 16 | **`#1C2A48` risk reserve legend** | Hard-coded dark nav color (same as receipt-upload `--line`) |

### Same Element, Different Font Sizes

| Element | Values Found |
|---|---|
| KPI card value | 20px (compact), 24px (default) — intentional |
| KPI card value (SparkCard) | 22px (compact), 28px (default) |
| Safe-to-spend value | 36px (mobile), 38px (mobile override), 44px (default), 48px (compact Forecast), 64px (default Forecast) — 5 different sizes for same semantic element across screens |
| Card/section titles | 13px, 14px, 15px all used for "section title" level |

### Hover States Missing

| Component | Issue |
|---|---|
| `Chip` | No hover state |
| `KPICard` | Hover only when `onClick` provided — no visual feedback otherwise |
| `AlertBanner` dismiss | No hover on dismiss button (only opacity change via inline) |
| Sidebar badge | No hover |
| Table rows in Jobs/Accounts | Hover set via `onMouseEnter/Leave` (inline JS, not CSS — won't work without JS) |
| Payroll rows | No hover |

### Focus States Missing

**All interactive elements are missing `outline`/`box-shadow` focus rings:**
- All `<button>` elements use `outline: none` (via `*::before, *::after` reset or none applied)
- All `<input>` / `<select>` / `<textarea>` use `outline: none`
- The only focus treatment is `receipt-upload.html` `.field input:focus` which has `border-color: rgba(246,181,74,0.5); box-shadow: 0 0 0 3px rgba(246,181,74,0.08)`
- **Accessibility gap:** No keyboard focus indicators on nav items, buttons, or form elements in Components.jsx or Screens.jsx

### Mobile Styles Missing / Incomplete

| Issue | Location |
|---|---|
| `AIScreen` chat has no mobile layout adjustment | Screens.jsx — fixed padding only |
| `PayrollScreen` team grid has no explicit mobile breakpoint | Uses `auto-fill` which may be okay |
| `CashIQ FAB launcher` — no mobile adjustment | Fixed position, hardcoded light colors |
| `AICopilotPanel` inner content padding not responsive | Fixed 14px/16px |
| `receipt-upload.html` — mobile padding relies on `env(safe-area-inset-bottom)` but no max-width on `.page` below 480px | Fine as-is but limited |

### Components That Look the Same But Are Coded Differently

| Issue | Components |
|---|---|
| Two KPI card types | `KPICard` (Components.jsx) vs `KPISparkCard` (ScreenDashboard.jsx) — similar visual but separate code |
| Two receipt upload implementations | `ReceiptUploadModal` in Screens.jsx (React) and `receipt-upload.html` (vanilla JS) — duplicated functionality, different color tokens |
| Two safe-to-spend hero sections | One in `_PLACEHOLDER_` (Screens.jsx) and one in `DashboardScreen` (ScreenDashboard.jsx) — different styling |
| Table row hover | Done via `onMouseEnter/Leave` inline in 4+ places instead of shared CSS |

---

## 10. FINAL EXTRACTION SUMMARY

### COLORS FOUND

**Total raw color values encountered:** ~180+
**Unique resolved values (non-variable):** ~65

**Unique Colors (all distinct non-CSS-variable values):**

`#F8F9FB`, `#FFFFFF`, `#F3F4F6`, `#ECEEF2`, `#E5E7EB`, `#E9EAEC`, `#111827`, `#4B5563`, `#9CA3AF`, `#0A0F1C`, `#0F1629`, `#141D35`, `#1A2540`, `#1E2D4A`, `#F0F4FF`, `#9BAAC8`, `#5C6B8A`, `#030712`, `#080F1E`, `#0C1528`, `#111E38`, `#1C2A48`, `#3D7BFF`, `#5B91FF`, `#6FE8FF`, `#6BA3FF`, `#4A84FF`, `#D97706`, `#F6B54A`, `#B45309`, `#059669`, `#3EE6A8`, `#DC2626`, `#EF4444`, `#EA580C`, `#FF8A00`, `#FF6A7A` (implied from rgba 255,106,122), `#0F1C3A`, `#060C1A`, `#FF8A00`, `#0A1020`, `#0D1A35`, `#F1F5F9`, `#2F68EE`, `#2CA01C`, `#3a4a6a`, `#2A3E68`, `#168A8D` (implied #A8B3D4 from rgba 168,179,212), `#FFFBEB`, `#FEF2F2`, `#EFF6FF`, `#FDE68A`, `#FECACA`, `#BFDBFE`, `#92400E`, `#991B1B`, `#1D4ED8`, `#FEE2E2`, `#03060F`, `#E07420`, `#3D5A9E`, `#2E7D64`, `#7B4EA0`, `#9E5A2E`, `#2E7098`, `#9E3D5A`, `#5A9E3D`, `#7D6B2E`

**Duplicate/Near-Duplicate Colors (should be one token):**

| Intended Color | Values Used |
|---|---|
| Success green | `#059669` (CF token), `#3EE6A8` (glow/live), both used for "green" |
| Warning amber | `#D97706` (CF token), `#F6B54A` (submit/warm), `#B45309` (chip text) |
| Dark page bg | `#0A0F1C` (CF dark), `#030712` (standalone/receipt), `#080F1E` (tweaks/receipt card) |
| Dark card bg | `#0F1629` (CF dark), `#080F1E` (receipt), `#0A1020` (copilot header) |
| Dark border | `#1E2D4A` (CF), `#1C2A48` (tweaks/receipt), differ by 2 hex steps |
| Primary blue | `#3D7BFF` (CF), `#6BA3FF` (badge/upload btn) — arguably accent vs primary |
| Danger red | `#DC2626` (CF), `#EF4444` (notification badge), `rgba(255,106,122)` (danger btn) |

---

### TYPOGRAPHY FOUND

**Font Families:** `Inter` (400–800), `Manrope` (400–800), `Instrument Serif` (regular+italic), `JetBrains Mono` (400–600)

**Font Sizes (smallest to largest):** 7px, 7.5px, 8px, 8.5px, 9px, 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 24px, 26px, 28px, 30px, 32px, 34px, 38px, 44px, 48px, 64px, 120px (decorative)

**Font Weights:** 400, 500, 600, 700, 800

---

### SPACING FOUND

**Most Used Values:** `4px`, `6px`, `8px`, `10px`, `12px`, `14px`, `16px`, `20px`, `24px`
**Most Common Grid Gap:** `12px` (kpi-grid, bottom-grid), `16px` (section-level, card grids)
**Screen Scroll Padding:** `16px` (compact) / `24px` (default)

**Inconsistent Patterns:**
- Card inner padding has 5 variations (`16px 18px`, `20px 22px`, `20px 24px`, `22px 24px`, `20px`)
- Sidebar expanded width: 220px vs 240px across files
- Safe-to-spend font size: 5 different values across breakpoints and screens
- "Section title" font size: 13px, 14px, 15px all used

---

### COMPONENTS FOUND: 28

**COMPONENTS WITH BOTH THEMES:** 22
Icon, CFWordmark (partial), Chip, Btn, KPICard, Sidebar, MobileNav, Topbar, MiniChart (partial), SparkLine, CashFloorGauge, KPISparkCard, ProjectedCashFlowChart, WeeklyRhythmChart, AssetTotalWidget, CashFlowForecastWidget, ForecastScreen, JobsScreen, AccountsScreen, PayrollScreen, SettingsScreen, ReceiptsScreen

**COMPONENTS MISSING DARK SUPPORT:**
`AlertBanner` (hardcoded light colors), `CFMark` (always dark gradient), `receipt-upload.html` (standalone, no theme)

**COMPONENTS MISSING LIGHT SUPPORT:**
`AICopilotPanel` (hardcoded dark header), `DashboardScreen` CashIQ FAB (hardcoded white), `Dashboard-standalone-src.html` (dark only), `Tweaks panel` (dark only), `receipt-upload.html` (dark only)

**COMPONENTS MISSING DARK AND LIGHT (standalone dark-only files):**
`receipt-upload.html`, `Dashboard-standalone-src.html`

---

## RECOMMENDED DESIGN TOKEN SET

Based on full audit, here is the standardized token set to resolve all inconsistencies:

### Colors

```css
/* ─── Surfaces (light/dark via class) ─── */
--color-bg-page:       /* light: #F8F9FB   | dark: #0A0F1C */
--color-bg-card:       /* light: #FFFFFF   | dark: #0F1629 */
--color-bg-secondary:  /* light: #F3F4F6   | dark: #141D35 */
--color-bg-tertiary:   /* light: #ECEEF2   | dark: #1A2540 */

/* ─── Borders ─── */
--color-border-default: /* light: #E5E7EB  | dark: #1E2D4A */
--color-border-sidebar: /* light: #E9EAEC  | dark: none   */

/* ─── Text ─── */
--color-text-primary:   /* light: #111827  | dark: #F0F4FF */
--color-text-secondary: /* light: #4B5563  | dark: #9BAAC8 */
--color-text-muted:     /* light: #9CA3AF  | dark: #5C6B8A */

/* ─── Brand Accents (static) ─── */
--color-accent-blue:        #3D7BFF
--color-accent-blue-bright: #5B91FF
--color-accent-cyan:        #6FE8FF
--color-accent-orange:      #EA580C

/* ─── Status (static) ─── */
--color-status-success:      #059669   /* chip/text/data */
--color-status-success-glow: #3EE6A8   /* glow/live indicators */
--color-status-warning:      #D97706   /* semantic warning text */
--color-status-warning-warm: #F6B54A   /* warm amber (buttons, visuals) */
--color-status-danger:       #DC2626   /* semantic danger */
--color-status-danger-soft:  #FF6A7A   /* soft danger (rgba-based uses) */

/* ─── Overlays (static) ─── */
--color-overlay-light: rgba(0,0,0,0.25)
--color-overlay-medium: rgba(0,0,0,0.5)
--color-overlay-heavy: rgba(0,0,0,0.6)

/* ─── Cards/Shadows ─── */
--color-shadow-card:   /* light: rgba(0,0,0,0.05)+rgba(0,0,0,0.06) | dark: none */
--color-shadow-modal:  rgba(0,0,0,0.7)
--color-shadow-blue:   rgba(61,123,255,0.3)
--color-shadow-amber:  rgba(246,181,74,0.5)
--color-shadow-green:  rgba(62,230,168,0.4)
```

### Typography

```css
--font-family-ui:      'Inter', 'Manrope', sans-serif
--font-family-display: 'Manrope', sans-serif
--font-family-serif:   'Instrument Serif', serif
--font-family-mono:    'JetBrains Mono', monospace

/* Scale (7 steps + display) */
--font-size-xs:    10px   /* labels, timestamps */
--font-size-sm:    11px   /* chips, sublabels */
--font-size-base:  12px   /* table text, body */
--font-size-md:    13px   /* nav, descriptions */
--font-size-lg:    14px   /* section titles */
--font-size-xl:    15px   /* card titles, topbar */
--font-size-2xl:   18px   /* large monospace */
--font-size-3xl:   24px   /* KPI values */
--font-size-4xl:   32px   /* hero values */
--font-size-display: 44px /* MMT safe-to-spend */
--font-size-hero:  64px   /* full-screen hero */

--font-weight-regular:  400
--font-weight-medium:   500
--font-weight-semibold: 600
--font-weight-bold:     700
--font-weight-black:    800
```

### Spacing

```css
--space-1:  4px
--space-2:  6px
--space-3:  8px
--space-4: 10px
--space-5: 12px
--space-6: 14px
--space-7: 16px
--space-8: 20px
--space-9: 24px
--space-10: 32px
```

### Borders

```css
--radius-sm:   6px    /* inner elements, badges */
--radius-md:   9px    /* buttons sm, filter toggles */
--radius-lg:  12px    /* KPI cards, chips */
--radius-xl:  16px    /* main cards (primary) */
--radius-2xl: 20px    /* modals, CashIQ panels */
--radius-full: 999px  /* pills, progress bars */
--radius-circle: 50%  /* avatars, dots */

--border-width-default: 1px
--border-width-accent:  2px  /* upload zones, top accents */
```

### Shadows

```css
--shadow-card:   0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)
--shadow-panel:  0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(61,123,255,0.08)
--shadow-modal:  0 32px 80px rgba(0,0,0,0.7)
--shadow-dropdown: 0 20px 50px -10px rgba(0,0,0,0.5)
--shadow-btn-primary: 0 1px 3px rgba(61,123,255,0.3)
--shadow-btn-amber: 0 4px 20px -6px rgba(246,181,74,0.5)
--shadow-glow-green: 0 0 8px rgba(62,230,168,0.6)
--shadow-glow-blue: 0 0 14px -4px rgba(111,232,255,0.35)
```

---

*End of Design Audit Report*
*Files fully audited: Dashboard.html, Dashboard-standalone-src.html, Components.jsx, ScreenDashboard.jsx (full), Screens.jsx (full), receipt-upload.html*
*CashFlow Smart Dashboard.html: Not fully parseable (1.5MB file); shares codebase with Dashboard.html + Components.jsx + ScreenDashboard.jsx + Screens.jsx*
