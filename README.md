# Campaign Manager Design System

Standalone component storybook and design documentation for the Campaign Manager UI. Operates independently of any parent project.

## NPM Package

Install as a dependency:

```bash
npm install @campaign-manager/design-system
```

### Usage

**Design tokens (JS/JSON):**
```js
const { tokens } = require('@campaign-manager/design-system');
// or
import tokens from '@campaign-manager/design-system';
```

**CSS (link before your app styles):**
```html
<link rel="stylesheet" href="node_modules/@campaign-manager/design-system/tokens/tokens.css">
<link rel="stylesheet" href="node_modules/@campaign-manager/design-system/css/atoms.css">
```

Or in JS/React:
```js
import '@campaign-manager/design-system/tokens.css';
import '@campaign-manager/design-system/atoms.css';
```

**Design guidelines (markdown):**
- `node_modules/@campaign-manager/design-system/guidelines/design-guidelines.md` — Figma layout patterns, components
- `node_modules/@campaign-manager/design-system/guidelines/design-system.md` — Token rules, typography

**Direct exports:**
- `@campaign-manager/design-system` — tokens object
- `@campaign-manager/design-system/tokens.css` — CSS variables
- `@campaign-manager/design-system/atoms.css` — Global atom classes
- `@campaign-manager/design-system/tokens.json` — Raw JSON tokens

---

## Contents

- **Component Storybook** — HTML-based component/state reference pages
- **Design Tokens** — Semantic color, typography, and spacing tokens
- **Design Guidelines** — Figma layout patterns and implementation rules
- **Design System** — Canonical token rules and typography scale
- **Figma Links** — Direct links to Figma file and nodes

## Quick Start (Storybook)

1. **Open in browser:** Open `COMPONENT_STORYBOOK.html` in a browser (double-click or drag into Chrome/Firefox).

2. **Or run a local server:**
   ```bash
   cd campaign-manager-design-system
   python3 -m http.server 8080
   ```
   Then visit: http://localhost:8080/COMPONENT_STORYBOOK.html

3. **Or use npx:**
   ```bash
   npx serve .
   ```

## File Structure

```
campaign-manager-design-system/
├── package.json
├── index.js                      # NPM entry, exports tokens
├── tokens/
│   ├── tokens.css               # CSS variables (import this first)
│   ├── tokens.json               # Raw JSON tokens
│   └── index.js
├── css/
│   └── atoms.css                # Global atom classes (buttons, badges, inputs, etc.)
├── guidelines/
│   ├── design-guidelines.md      # Figma layout patterns, components
│   └── design-system.md          # Token rules, typography
├── COMPONENT_STORYBOOK.html      # Entry point / home
├── DESIGN_TOKENS.html            # Token reference
├── DESIGN_GUIDELINES.html        # Figma design patterns
├── GLOBAL_ATOMS_COMPONENT_LIBRARY.html
├── FIGMA_LINKS.md                # Figma file and node URLs
├── lucide-migration.js           # Icon mapping (Iconoir → Lucide)
├── README.md
└── *_COMPONENT_STATE_REFERENCE.html   # Per-page component states
```

## Dependencies

- **Icons:** Loaded from CDN (Iconoir, Lucide). No local install required.
- **Fonts:** Inter, Source Code Pro (system or Google Fonts).

## Links

- Figma file: https://www.figma.com/design/KFMCF5p9j00q3T1FrYngqP/Campaign-Manager
