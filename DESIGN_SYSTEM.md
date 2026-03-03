# Design System

Semantic tokens and typography rules for the Campaign Manager UI. All tokens live in `tokens.css` as CSS custom properties on `:root`. Link before Tailwind CDN.

**Related docs:** [FIGMA_DESIGN_PATTERNS.md](./FIGMA_DESIGN_PATTERNS.md) | [FIGMA_LINKS.md](./FIGMA_LINKS.md)

---

## Token Groups

| Prefix | Purpose |
|--------|---------|
| `--text-*` | Typography colors (body, links, states) |
| `--fg-*` | Foreground elements — icons, UI chrome |
| `--bg-*` | Background surfaces and overlays |
| `--border-*` | Border colors |
| `--button-*` | Button variant colors |
| `--input-*` | Form input colors |
| `--nav-*` | Sidebar navigation states |
| `--tab-*` | Tab navigation states |
| `--status-*` | Badge/status indicator colors |

---

## Rules

1. **Always use semantic tokens.** Never use hardcoded hex values in components.
2. **Never use raw palette tokens.** Add a new semantic token rather than using hex directly.
3. **Token intent matters.** Use tokens for their described purpose:
   - `--bg-surface` → white card/panel backgrounds
   - `--bg-subtle` → secondary surface backgrounds, metric cards, monospace pills
   - `--bg-page` → page-level background
   - `--bg-accent` → accent-colored backgrounds, historical changelog borders
   - `--bg-warning` → warning/alert banner backgrounds (amber)
   - `--nav-*` → sidebar nav only
   - `--tab-*` → tab navigation only
   - `--status-*` → badge and status indicators only
   - `--status-active-*` → "Active" campaign/IO badges specifically (distinct green from success)

---

## Token Quick Reference

### Text

| Token | Color | Use |
|-------|-------|-----|
| `--text-primary` | #0F172A | Main body, headings, section labels |
| `--text-secondary` | #475569 | Supporting text, labels, metadata |
| `--text-muted` | #94A3B8 | Placeholder, disabled, chart axes |
| `--text-link` | #4F46E5 | Links, external value references |
| `--text-danger` | #DC2626 | Error text |

### Backgrounds

| Token | Color | Use |
|-------|-------|-----|
| `--bg-page` | #F8FAFC | Page background |
| `--bg-surface` | #FFFFFF | Cards, panels |
| `--bg-subtle` | #F1F5F9 | Metric cards, monospace pills |
| `--bg-accent` | #EEF2FF | Accent backgrounds, changelog borders |
| `--bg-warning` | #fbbf24 | Warning/alert banners (amber) |

### Nav & Tabs

| Token | Color | Use |
|-------|-------|-----|
| `--nav-active-bg` | #EEF2FF | Active nav item background |
| `--nav-active-text` | #4338CA | Active nav item text |
| `--tab-active-bg` | #EEF2FF | Active tab background |
| `--tab-active-border` | #4F46E5 | Active tab indicator |

### Status Badges

`--status-active-*` and `--status-success-*` are different greens. Never substitute one for the other.

| Token | Colors | Use |
|-------|--------|-----|
| `--status-active-bg` / `--status-active-text` | #d2f0df / #11552f | "Active" campaign/IO badge only |
| `--status-success-bg` / `--status-success-text` | #f0fdf4 / #16a34a | Complete, confirmed |
| `--status-error-bg` / `--status-error-text` | #fef2f2 / #dc2626 | Error, failed |
| `--status-warning-bg` / `--status-warning-text` | #fffbeb / #d97706 | Warning pills |
| `--status-neutral-bg` / `--status-neutral-text` | #f1f5f9 / #64748b | Draft, inactive |

---

## Color Notes

- **Active vs Success greens.** Use `--status-active-*` only for "Active" campaign/IO badges. Use `--status-success-*` for complete, confirmed states.
- **Warning backgrounds.** `--bg-warning` (#fbbf24) is amber for full-width banners. `--status-warning-bg` (#fffbeb) is light yellow for small badge pills.
- **Links.** Use `--text-link` (#4F46E5) for links and external value references.
- **Foreground elements.** `--fg-primary` and `--fg-secondary` are for icons and UI chrome, not body text.

---

## Typography

All type uses **Inter**. Use the scale below — never set arbitrary font sizes.

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| Heading/H2 | 24px | Bold (700) | 32px | Large stat numbers |
| Heading/H3 | 20px | SemiBold (600) | 28px | Campaign names, page titles |
| Heading/H5 | 16px | SemiBold (600) | 24px | Card headings |
| Heading/H6 | 14px | Medium (500) | 20px | Sub-headings |
| Body/Default | 14px | Regular (400) | 22px | General body text |
| Body/Small | 13px | Regular (400) | 20px | Secondary body, labels |
| Caption/Default | 12px | Regular (400) | 16px | Timestamps, metadata |
| Caption/Uppercase | 12px | Medium (500) | 16px | Section labels (ALL CAPS), 0.6px letter-spacing |
| UI/Button Default | 14px | Medium (500) | 20px | Button labels |

Monospace data values (Billing IDs, App IDs) use **Source Code Pro Medium 13px**.
