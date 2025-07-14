## Deep Ubuntu Research - Production Website

**This repository contains proprietary code and assets belonging to Deep Ubuntu Research. All rights reserved. Distribution, modification, or use of this code without explicit written permission is strictly prohibited.**

---

## Project Overview

A science-centric corporate website showcasing Deep Ubuntu Research's AI tooling and research initiatives. Built with Next.js 14, featuring interactive 3D scenes, scroll-driven storytelling, and enterprise-grade architecture.

### Key Features

- **Scale AI-level Polish**: Iridescent hero objects, depth cards, gradient highlights
- **Interactive 3D Scenes**: WebGL-powered mathematical visualizations
- **Dark Purple → White Brand**: Unique color palette with neon accents
- **Hotkey System**: Power-user shortcuts for theme, animations, and formulas
- **Offline-First Content**: MDX-driven content management
- **Enterprise Ready**: Full CI/CD pipeline with testing and deployment

## 🛠 Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14 (App Router) | React framework with SSR/SSG |
| **Language** | TypeScript (strict) | Type safety and developer experience |
| **Styling** | Tailwind CSS v3 | Utility-first CSS framework |
| **Components** | shadcn/ui | Accessible Radix UI bindings |
| **3D Graphics** | react-three-fiber + drei | WebGL rendering and 3D scenes |
| **Animations** | Framer Motion, React-Spring, GSAP | Layered animation system |
| **Content** | MDX + Custom Parser | Markdown with React components |
| **State** | Zustand | Lightweight state management |
| **Testing** | Playwright + Vitest | E2E and unit testing |
| **CI/CD** | GitHub Actions → Vercel | Automated deployment pipeline |

## Animation Architecture

The website uses a sophisticated three-library animation system:

### **Framer Motion** - UI Micro-interactions
- Section reveal animations
- Page transitions
- Hover states and click feedback
- `AnimatePresence` for conditional rendering

### **React-Spring** - Physics-based Animations
- Carousel bounce effects
- Card hover lift animations
- Parallax scrolling with natural "settling"
- Spring configurations: `{ mass: 1, tension: 180, friction: 26 }`

### **GSAP** - Timeline & Scroll Animations
- Hero torus introduction timeline
- `ScrollTrigger` for pinned sections
- Complex multi-element choreography
- High-performance scroll-driven effects

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm or pnpm package manager

### Installation

```bash
# Clone the repository (authorized personnel only)
git clone [PRIVATE_REPO_URL]
cd deep-ubuntu-research

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Environment Variables

Create a `.env.local` file:

```bash
# Analytics (optional)
PLAUSIBLE_DOMAIN=deepubuntu.com

# Vercel Deployment (production)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

## 📁 Project Structure

```
deep-ubuntu-research/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page
│   ├── products/          # Products pages
│   ├── enterprise/        # Enterprise page
│   ├── government/        # Government page
│   ├── resources/         # Resources/blog
│   └── not-found.tsx      # 404 page with ASCII cow
├── components/
│   ├── canvas/            # 3D React Three Fiber components
│   ├── providers/         # React context providers
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── content/               # MDX content files
│   ├── products/          # Product documentation
│   └── blog/              # Blog posts and guides
├── lib/
│   ├── stores/            # Zustand state stores
│   ├── utils/             # Utility functions
│   └── mdx.ts             # Content processing
├── tests/                 # Test files
│   ├── setup.ts           # Test configuration
│   ├── homepage.spec.ts   # E2E tests
│   └── products.spec.ts   # Product page tests
└── .github/workflows/     # CI/CD configuration
```

## ⌨️ Hotkey System

The website includes power-user shortcuts:

| Key | Action | Description |
|-----|--------|-------------|
| `m` | Toggle Math Formulas | Show/hide KaTeX mathematical expressions |
| `g` | Toggle Animations | Enable/disable all animations (respects `prefers-reduced-motion`) |
| `t` | Toggle Theme | Switch between dark and light themes |
| `Cmd/Ctrl + K` | Command Palette | Open search and navigation interface |

All hotkeys show toast notifications for user feedback.

## Testing

### Unit Tests (Vitest)
```bash
npm run test
```

### E2E Tests (Playwright)
```bash
npm run test:e2e
npm run test:e2e:ui  # Interactive mode
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Deployment

### Automatic Deployment

The CI/CD pipeline automatically:
1. Runs tests on every push/PR
2. Deploys preview builds for PRs
3. Deploys to production on `main` branch merges

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Design System

### Brand Colors

```css
:root {
  --dbu-bg-primary: #11001F;    /* Near-black purple */
  --dbu-bg-elevated: #18002D;   /* Elevated surfaces */
  --dbu-fg-primary: #FFFFFF;    /* Primary text */
  --dbu-fg-secondary: #D6D3E0;  /* Secondary text */
  --dbu-gradient: linear-gradient(90deg, #AA00FF 0%, #6E00FF 100%);
  --dbu-shadow-card: 0 6px 24px rgba(110, 0, 255, 0.25);
}
```

### Typography

- **Display**: Space Grotesk (headlines, hero text)
- **UI**: Inter (interface elements, body text)
- **Code**: Fira Code (code blocks, terminal)

### Motion Design

- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions
- **Duration**: 300ms for micro-interactions, 800ms for section reveals
- **Reduced Motion**: Automatically detected and respected

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for real-world performance
- **Bundle Size**: Tree-shaken and code-split for minimal payload
- **3D Rendering**: Adaptive quality based on device capabilities

## Security & Privacy

- **No External Analytics**: Optional self-hosted Plausible
- **CSP Headers**: Content Security Policy implemented
- **Private Repository**: All code and assets are proprietary
- **Access Control**: Repository access limited to authorized personnel

## Development Team

[@thabhelo](github.com/thabhelo)
---

**© 2024 Deep Ubuntu Research. All rights reserved.** 
