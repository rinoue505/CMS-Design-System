# Campaign Manager Design System

Standalone component storybook and design documentation for the Campaign Manager UI. Operates independently of any parent project.

## Contents

- **Component Storybook** — HTML-based component/state reference pages
- **Design Tokens** — Semantic color, typography, and spacing tokens
- **Design Guidelines** — Figma layout patterns and implementation rules
- **Design System** — Canonical token rules and typography scale
- **Figma Links** — Direct links to Figma file and nodes

## Quick Start

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
├── COMPONENT_STORYBOOK.html      # Entry point / home
├── DESIGN_TOKENS.html            # Token reference
├── DESIGN_GUIDELINES.html        # Figma design patterns
├── GLOBAL_ATOMS_COMPONENT_LIBRARY.html
├── DESIGN_SYSTEM.md              # Token rules, typography
├── FIGMA_DESIGN_PATTERNS.md      # Layout, components, implementation notes
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
