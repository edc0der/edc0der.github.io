# CLAUDE.md — Portfolio (GitHub Pages)

## Goal
Build a fast, modern personal portfolio site hosted on GitHub Pages using **vanilla HTML/CSS/JS only**.
No frameworks, no bundlers, no external UI libraries.

## Non-negotiables
- **No third-party JS/CSS libraries** (no React/Vue/Tailwind/Bootstrap/jQuery, no animation libs).
- Minimal dependencies: only use system fonts or self-hosted fonts (optional).
- Keep the site lightweight: few files, small assets, no build step.
- Must work on GitHub Pages with static files.

## Design direction
- Clean, premium, modern: generous spacing, subtle shadows, accessible contrast.
- Responsive: great on mobile and desktop.
- Smooth but restrained interactions (CSS first; JS only when needed).

## Site structure (simple)
- `index.html` as the main page.
- `/assets/` for images, icons, favicon.
- `/css/styles.css`
- `/js/main.js`

## Core sections (MVP)
- Hero: name, role, short value statement, CTA buttons (Email / GitHub / LinkedIn).
- Projects: 3–6 cards with title, short description, tech tags, links.
- About: short bio + skills highlights.
- Contact: email link + social links.

## Functionality (nice-to-have, still simple)
- Dark mode toggle using `prefers-color-scheme` + saved user preference in `localStorage`.
- Sticky top nav with smooth scroll to sections.
- Basic project filtering (optional) with minimal JS.

## Quality bar
- Semantic HTML, BEM-ish or simple class naming.
- Accessibility: keyboard navigation, focus states, alt text, aria where needed.
- Performance: optimize images, avoid huge backgrounds, no layout shift.
- SEO basics: title/description, OpenGraph tags, favicon, sitemap optional.

## How to work
When you make changes:
1) Propose the file tree and the minimal set of files you'll edit.
2) Implement in small commits/steps: structure → styling → interactions.
3) Keep code readable; explain any tradeoffs briefly.
