# Figma Design Patterns for Campaign Manager

> **Purpose:** This document captures design rules and layout patterns from the Campaign Manager Figma file. Use it as a reference when implementing UI to faithfully recreate the designs. See [FIGMA_LINKS.md](./FIGMA_LINKS.md) for direct links to specific nodes.

**Source:** Figma file `KFMCF5p9j00q3T1FrYngqP` (Campaign Manager)

---

## 1. Layout Architecture

### 1.1 App Shell: Two-Column Layout

The application uses a **fixed left sidebar + main content** structure:

| Region | Width | Purpose |
|--------|-------|---------|
| **Sidebar** | `230px` fixed | Global navigation, logo, primary action, user profile |
| **Main Content** | `1218px` (flexible) | Page-specific content, tabs, data tables, forms |

- **Container:** Full viewport, `rounded-[32px]` on root
- **Sidebar:** `h-[900px]`, `p-[16px]`, `gap-[12px]` between sections
- **Main content:** Scrollable, white background

### 1.2 Content Hierarchy Within Main Area

```
Tab Bar (top)
  └── Tabs + Settings dropdown
Main Content (scrollable)
  └── Page title (optional)
  └── Data table / Form / Dashboard
  └── Action bar (optional, bottom)
```

---

## 2. Typography

**Font family:** Inter (sans-serif)

| Style | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| **Heading/H3** | 20px | 600 (Semi Bold) | 28px | Page titles (e.g., "Campaign Details") |
| **Heading/H4** | 18px | 600 | 26px | Section headings |
| **Heading/H5** | 16px | 600 | 24px | Card titles, key metrics |
| **Heading/H6** | 14px | 500 (Medium) | 20px | Column headers, labels |
| **Body/Default** | 14px | 400 (Regular) | 22px | Body text |
| **Body/Default Medium** | 14px | 500 | 22px | Emphasized body, table cells |
| **Body/Small** | 13px | 400 | 20px | Secondary text, helper text |
| **Body/Small Medium** | 13px | 500 | 20px | Badges, small labels |
| **Caption/Uppercase** | 12px | 500 | 16px | Section labels (e.g., "BUDGET AND SPEND") |
| **Caption/Default** | 12px | 400 | 16px | Dates, supplementary info |
| **Caption/Small** | 11px | 400 | 14px | Percentages, micro copy |
| **UI/Label** | 14px | 500 | 20px | Form labels |
| **UI/Button Small** | 13px | 500 | 20px | Tab text, small buttons |

**Special:** `Source_Code_Pro` (Medium) for Billing IDs, segment names, and code-like values.

---

## 3. Color Tokens

Use CSS variables when available; fallbacks are hex values from Figma.

### 3.1 Semantic Text Colors

| Token | Fallback | Usage |
|-------|----------|-------|
| `--text/primary` | `#0f172a` | Primary headings, main content |
| `--text/secondary` | `#475569` | Labels, secondary content |
| `--text/muted` | `#94a3b8` | Placeholders, disabled, tertiary |
| `--text/danger` | `#dc2626` | Required asterisk, errors |
| `--text/inverse` | `white` | Text on dark backgrounds |

### 3.2 Background Colors

| Token | Fallback | Usage |
|-------|----------|-------|
| `--bg/subtle` | `#f1f5f9` | Active nav, tabs, progress bar track |
| `--bg/surface` | `white` | Cards, main content |
| `--bg/overlay` | `#0f172a` | Primary buttons |

### 3.3 Border & Foreground

| Token | Fallback | Usage |
|-------|----------|-------|
| `--border/default` | `#e2e8f0` | Dividers, input borders, sidebar |
| `--fg/primary` | `#0f172a` | Primary text |
| `--fg/secondary` | `#475569` | Secondary text |
| `--fg/muted` | `#94a3b8` | Muted text |
| `--fg/success` | `#16a34a` | Positive trends, success states |

### 3.4 Slate Palette (Raw)

| Token | Value | Usage |
|-------|-------|-------|
| `--color/slate/100` | `#f1f5f9` | Badge backgrounds, subtle fills |
| `--color/slate/200` | `#e2e8f0` | Inactive badge background |
| `--color/slate/300` | `#cbd5e1` | Input borders |
| `--color/slate/500` | `#64748b` | Secondary text in badges |
| `--color/slate/600` | `#475569` | Inactive nav text |
| `--color/slate/800` | `#1e293b` | Dark text |

### 3.5 Status & Accent Colors

| State | Background | Text |
|-------|------------|------|
| **Active** | `#d2f0df` | `#11552f` |
| **Inactive/Ended** | `#e2e8f0` (slate/200) | `#475569` |
| **Processing** | `#f1f5f9` (slate/100) | `#475569` |
| **Indigo (links/emphasis)** | — | `#3730a3` (indigo/800) |
| **Red (warning)** | — | `#f87171` (red/400) |

---

## 4. Spacing System

Use consistent increments:

| Value | Usage |
|-------|-------|
| `4px` | Gap between badges, label + asterisk |
| `8px` | Nav item padding, badge padding, icon gaps |
| `12px` | Row padding (label row), section gaps |
| `16px` | Sidebar padding, section padding, tab bar |
| `24px` | Form section gaps, card padding |
| `32px` | Table row horizontal padding, column gaps |
| `48px` | Child row indent (hierarchy) |

---

## 5. Border Radius

| Value | Usage |
|-------|-------|
| `6px` | Primary/secondary buttons |
| `8px` | Inputs, badges, nav items, dropdowns, tabs |
| `16px` | Progress bars, cards, alert banners |
| `32px` | "+ Create" pill button, root container |

---

## 6. Component Patterns

### 6.1 Sidebar

- **Width:** `230px`
- **Sections (top to bottom):**
  1. **Logo area:** Infinity icon + "CMS" text, `gap-[8px]`, `pb-[16px] pt-[8px]`
  2. **Create row:** "+ Create" pill (`rounded-[32px]`, `bg-[--bg/subtle]`) + chevron left/right
  3. **Navigation:** Vertical list, `gap-[8px]`, each item `px-[12px] py-[10px] rounded-[8px]`
  4. **Spacer:** `flex-1` to push profile down
  5. **User profile:** Avatar (32px) + name, bordered container `rounded-[8px]`

**Nav item states:**
- **Active:** `bg-[#f1f5f9]`, `font-medium`, `text-[--text/primary]`
- **Inactive:** `font-normal`, `text-[--color/slate/600]`

### 6.2 Tab Bar

- **Layout:** `px-[32px] py-[16px]`, `border-b` with `--border/default`
- **Tabs:** `gap-[4px]`, each tab `px-[10px] py-[8px] rounded-[8px]`
- **Active tab:** `border border-[#d9d9d9]`, `font-medium`, `text-[--text/primary]`
- **Add tab (+):** Same border, `text-[#808080]`, `text-[16px]`
- **Settings dropdown:** `bg-[--bg/subtle]`, chevron down icon, right-aligned

### 6.3 Data Table Rows

**Header row:**
- `py-[12px]` (Segments) or `py-[12px]` (Campaigns)
- Labels: `font-medium`, `text-[--text/muted]` or `text-[--text/secondary]`
- Column widths: Name `200px`, Status `81–88px`, Audience `72px`, Conditions `402px`, Edited `104px`

**Data rows:**
- `py-[20px]` (Segments) or `py-[24px]` (Campaigns)
- `px-[32px]`, `border-b` with `--border/default`
- **Hierarchy:** Parent rows get `pl-[32px]`, child rows get `pl-[48px]` + 2px indigo bar (`bg-[--color/indigo/800]` or `--color/indigo/600`)
- **Row actions:** 4×16px ellipsis icon on far right

### 6.4 Status Badges

- **Shape:** `rounded-[8px]`, `px-[8px] py-[2px]`
- **Active:** `bg-[#d2f0df]`, `text-[#11552f]`, `font-medium`, `text-[14px]`
- **Inactive/Ended:** `bg-[--color/slate/200]`, `text-[--color/slate/600]`
- **Condition badges:** `bg-[--color/slate/100]`, `text-[--fg/secondary]`, `text-[13px]`

### 6.5 Form Inputs

**Label:**
- `font-medium`, `text-[14px]`, `text-[--text/secondary]`
- Required: red asterisk `*` after label (`text-[--text/danger]`)

**Input fields:**
- `border border-[--color/slate/300]`, `rounded-[8px]`
- `px-[16px] py-[12px]`
- Placeholder: `text-[--color/slate/800]`

**Select/Dropdown:**
- Same border/radius as input
- `p-[12px]`, `justify-between` for value + chevron
- Optional: icon + value (e.g., Globe icon for Partner Type)
- Optional: secondary line (e.g., "Estimated Audience: ~20,420 users") in `text-[12px]`

### 6.6 Action Bar (Bottom)

- **Position:** Fixed at bottom of main content, `border-t` with `--border/default`
- **Layout:** `px-[24px] py-[16px]`, `justify-between`
- **Left:** Cancel (text button, `text-[#595959]`)
- **Right:** Step indicator ("Step 1 of 6", "Next Step: …") + Primary button
- **Primary button:** `bg-[--bg/overlay]`, `text-white`, `px-[24px] py-[10px]`, `rounded-[6px]`, optional arrow icon

### 6.7 Progress Bar

- **Track:** `bg-[--bg/subtle]`, `h-[6px]` or `h-[12px]`, `rounded-[12px]` or `rounded-[16px]`
- **Fill:** `bg-[--fg/primary]` or `bg-[--fg/secondary]` or `bg-[--color/red/400]` for over-budget
- **Labels:** Left = current value + %, right = total

### 6.8 Metric Cards (Budget/Spend)

- **Layout:** Horizontal row, `gap-[36px]`
- **Each metric:** Label (13px, secondary) + Value (16px, semibold, black)
- **Optional:** Percentage in parentheses, trend indicator (e.g., "+5.7%" in `--fg/success`)

### 6.9 Alert/Note Banner

- `bg-[--bg/subtle]`, `rounded-[16px]`, `px-[16px] py-[8px]`
- Alert icon (16px) + italic text `text-[13px]`

### 6.10 Empty State

- Centered text: `text-[14px]`, `text-[#99a6b2]`
- Example: "No active campaigns found. Create your first one!"

---

## 7. Icon Sizes

| Size | Usage |
|------|-------|
| 12px | Small inline icons |
| 14px | Nav icons (campaign, database, etc.) |
| 16px | Alert, dropdown chevron |
| 20px | Active nav icon (users), chevron down |
| 24px | Sidebar chevrons (left/right) |
| 32px | User avatar |

---

## 8. Implementation Notes for Coding Agents

1. **Convert Tailwind to project stack:** Figma MCP outputs React + Tailwind. Map tokens to your design system (e.g., CSS variables, theme object, or styled-components).

2. **Preserve exact values:** Use the specified px values for spacing, font sizes, and colors. Avoid arbitrary rounding.

3. **Reuse shared components:** Sidebar, NavItem, TabBar, Badges, and form field patterns appear across multiple screens. Extract them.

4. **Hierarchy in tables:** Parent/child rows use indentation (`pl-[48px]`) and a 2px vertical bar. Maintain this for segment/campaign hierarchies.

5. **Responsive behavior:** Design specifies fixed widths (230px sidebar, 1218px content). Consider breakpoints for smaller viewports (e.g., collapsible sidebar).

6. **Asset URLs:** Figma MCP asset URLs expire after 7 days. Download and commit icons/images to the repo, or use a design token/icon library.

7. **Node IDs:** Generated code includes `data-node-id` attributes. These help trace back to Figma; optional to keep for debugging.

---

## 9. Figma Node Reference

| Screen/Component | Node ID |
|------------------|---------|
| View Segment (All Segments list) | 226:12430 |
| New Segment (create form) | 226:12560 |
| View All Campaigns | 198:3741 |
| Campaign Details (form) | 37:4065 |
| Budget and Spend | 232:20000 |
| Tab Component Set | 303:2 |

Full list: [FIGMA_LINKS.md](./FIGMA_LINKS.md)
