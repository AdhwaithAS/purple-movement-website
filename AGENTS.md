# Purple Movement — Agent & Developer Guidelines

Welcome to the Purple Movement website repository. When working on this codebase, adhere strictly to the rules below:

---

## 🎨 Color System & Token Rules (STRICT)

**NEVER HARDCODE COLORS IN THIS REPOSITORY.**

### 1. Single Source of Truth
All color tokens are centralized in `src/app/globals.css` within `:root` (as `--pm-*` variables) and exposed via Tailwind CSS v4 `@theme inline` (as `--color-pm-*`).

### 2. Prohibited Patterns
- ❌ No raw hex codes (e.g., `#9333ea`, `#050511`, `#c084fc`, `#ffffff`)
- ❌ No raw `rgb()` or `rgba()` values in styles or JSX
- ❌ No arbitrary Tailwind hex bracket notation (e.g., `bg-[#020309]`, `text-[#ffffff]`, `border-[#8b5cf6]`)

### 3. Required Usage
- **In Tailwind utility classes**: Use `bg-pm-*`, `text-pm-*`, `border-pm-*`, `from-pm-*`, `via-pm-*`, `to-pm-*`, etc.
- **In SVG attributes & CSS styles**: Use `var(--pm-*)`.

### 4. Updating or Adding Colors
- If a color needs adjustment or a new design token is required, modify **ONLY** `src/app/globals.css`.
- Update both `:root` and `@theme inline`.
- Never create one-off ad-hoc colors directly in components.

---

## 📖 Design System Token Catalog (`src/app/globals.css`)

### Brand & Accents
| CSS Variable | Tailwind Utility | Semantic Purpose |
| :--- | :--- | :--- |
| `--pm-primary` | `bg-pm-primary`, `text-pm-primary` | Primary Brand Purple (`#9333ea`) |
| `--pm-primary-hover` | `bg-pm-primary-hover` | Interactive hover state (`#a855f7`) |
| `--pm-accent` | `bg-pm-accent`, `text-pm-accent` | Vibrant accent & active state (`#c084fc`) |
| `--pm-light` | `bg-pm-light`, `text-pm-light` | Light lavender highlight (`#e9d5ff`) |
| `--pm-dark` | `bg-pm-dark`, `text-pm-dark` | Deep purple shade (`#581c87`) |
| `--pm-deep` | `bg-pm-deep`, `text-pm-deep` | Atmospheric dark purple (`#3b0764`) |
| `--pm-glow` | `var(--pm-glow)` | Standard atmospheric ambient glow |
| `--pm-glow-strong` | `var(--pm-glow-strong)` | Intense neon glow / bloom |

### Surfaces & Backgrounds
| CSS Variable | Tailwind Utility | Semantic Purpose |
| :--- | :--- | :--- |
| `--pm-bg` | `bg-pm-bg` | Absolute canvas black (`#000000`) |
| `--pm-bg-dark` | `bg-pm-bg-dark` | Deep dark slate (`#050511`) |
| `--pm-bg-gradient-from` | `from-pm-bg-gradient-from` | Ambient background gradient start |
| `--pm-bg-gradient-via` | `via-pm-bg-gradient-via` | Ambient background gradient center |
| `--pm-bg-gradient-to` | `to-pm-bg-gradient-to` | Ambient background gradient end |
| `--pm-card` | `bg-pm-card` | Translucent glass surface |
| `--pm-card-hover` | `bg-pm-card-hover` | Glass surface on hover |
| `--pm-card-border` | `border-pm-card-border` | Glass container subtle border |
| `--pm-border` | `border-pm-border` | Purple brand border |
| `--pm-border-hover` | `border-pm-border-hover` | Highlighted brand border |

### Typography
| CSS Variable | Tailwind Utility | Semantic Purpose |
| :--- | :--- | :--- |
| `--pm-text-primary` | `text-pm-text-primary` | High-contrast headings & titles (`#ffffff`) |
| `--pm-text-secondary` | `text-pm-text-secondary` | Secondary text & descriptions (`#d4d4d8`) |
| `--pm-text-muted` | `text-pm-text-muted` | Badges, tags & metadata (`#a1a1aa`) |

### Timeline & Pyramid Elements
| CSS Variable | Tailwind Utility / SVG | Semantic Purpose |
| :--- | :--- | :--- |
| `--pm-timeline-track` | `bg-pm-timeline-track`, `var(--pm-timeline-track)` | Vertical connector line |
| `--pm-timeline-node` | `bg-pm-timeline-node`, `var(--pm-timeline-node)` | Node dot on timeline |
| `--pm-timeline-node-active` | `bg-pm-timeline-node-active` | Active/hovered node dot |
| `--pm-icon-box-bg` | `bg-pm-icon-box-bg` | Glassmorphic square icon card |
| `--pm-icon-box-border` | `border-pm-icon-box-border` | Icon card border |
| `--pm-pyramid-rim` | `var(--pm-pyramid-rim)` | Top rim neon stroke |
| `--pm-pyramid-rim-bright` | `var(--pm-pyramid-rim-bright)` | High-intensity horizontal flare |
| `--pm-pyramid-orbit` | `var(--pm-pyramid-orbit)` | Concentric orbit line |

### Status & Feedback
| CSS Variable | Tailwind Utility | Semantic Purpose |
| :--- | :--- | :--- |
| `--pm-success` | `text-pm-success`, `bg-pm-success` | Success feedback |
| `--pm-error` | `text-pm-error`, `border-pm-error` | Error feedback |
| `--pm-whatsapp` | `bg-pm-whatsapp` | WhatsApp button color |
| `--pm-red` | `text-pm-red`, `bg-pm-red` | Red youth marker (`#f43f5e`) |
| `--pm-blue` | `text-pm-blue`, `bg-pm-blue` | Blue professional marker (`#3b82f6`) |
| `--pm-story-card-bg` | `bg-pm-story-card-bg` | Why Purple story pill card surface |
| `--pm-story-card-border` | `border-pm-story-card-border` | Story card subtle border |
| `--pm-scrollbar-track` | `var(--pm-scrollbar-track)` | Scrollbar track background |
| `--pm-scrollbar-thumb` | `var(--pm-scrollbar-thumb)` | Scrollbar thumb |
| `--pm-teal` | `bg-pm-teal`, `text-pm-teal` | Teal accent — AI+Compassion flagship (`#0d9488`) |
| `--pm-teal-light` | `text-pm-teal-light` | Teal light — AI+Compassion highlights (`#2dd4bf`) |
| `--pm-teal-dark` | `bg-pm-teal-dark` | Teal dark — AI+Compassion deep tone (`#0f766e`) |
| `--pm-teal-glow` | `var(--pm-teal-glow)` | Teal glow shadow for AI+Compassion cards |

---

## 🛠️ Tech Stack & Conventions
- **Framework**: Next.js 15.5.3 (Turbopack, App Router)
- **Styling**: Tailwind CSS v4 (`@theme inline`, custom properties in `src/app/globals.css`)
- **Animation**: Framer Motion & GSAP
- **Linter**: `oxlint` (`bun run lint`)
- **Type Checking**: Run `npx tsc --noEmit` before concluding any task.
