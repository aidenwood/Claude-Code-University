# Architecture — Room

> Open this when adding a module, a department page, or a new interactive island.

## The shape

```
Astro 6 (static, no SSR)
  ↓
src/layouts/MainLayout.astro
  • header (logo + SkillToggle island)
  • <slot /> for page content
  • footer
  • ModuleNav island at the bottom (arrow keys + progress)
  ↓
src/pages/<route>.astro
  • Astro frontmatter pulls in Layout + content components
  • Static HTML output for production
  ↓
React islands hydrated client:load
  • SkillToggle (localStorage-backed Beginner/Moderate switch)
  • ModuleNav (arrow-key navigation, current-page progress bar)
```

## Page taxonomy
- **Module pages** (`src/pages/01-*.astro` through `10-*.astro`) — the linear curriculum. Arrow keys hop between them via `MODULE_PAGES` in `ModuleNav.tsx`.
- **Index** (`src/pages/index.astro`) — module grid, also part of `MODULE_PAGES` as the `/` entry.
- **Department pages** (`src/pages/departments/*.astro`) — role-specific guides (sales, marketing, ops, HR, finance, legal, IT, customer-service, executive, plus onboarding + Elliot's roadmap). **Not** part of the arrow-key carousel — separate flow.
- **Reference pages** (`brand-rules.astro`) — sit outside both flows; linked manually.

## Skill toggle plumbing
1. `MainLayout.astro` reads `localStorage.skillLevel` in an inline script and sets `<html data-skill="...">` before paint (prevents flash).
2. CSS in `src/styles/global.css` uses `[data-skill="beginner"] .moderate-only { display: none }` and the reverse pair to gate content.
3. `SkillToggle.tsx` (React island) flips the attribute + localStorage value when the user clicks.
4. To gate a chunk of content: wrap it in `<div class="beginner-only">...</div>` or `<div class="moderate-only">...</div>`.

Add a new toggle tier only with Aiden's signoff — it doubles the content surface and breaks the binary mental model.

## ModuleNav update protocol
When you add, rename, or reorder a module page:
1. Rename the file (keep the `NN-slug` convention).
2. Update the `MODULE_PAGES` array in `src/components/ModuleNav.tsx` to match the new order.
3. Update the `modules` array at the top of `src/pages/index.astro` so the grid cards match.
4. Update any cross-links in other module pages.

Forgetting step 2 silently breaks arrow-key navigation — Aiden will not be happy.

## Adding a department page
1. Create `src/pages/departments/<slug>.astro`.
2. Use `MainLayout` with a `title` and optional `subtitle`. Don't pass `module={n}` — departments aren't modules.
3. Link it from `src/pages/departments/index.astro`.
4. No need to touch `ModuleNav` — departments aren't in the carousel.

## Build output
- `astro build` → `dist/` static HTML/CSS/JS.
- Netlify deploys from `dist/` (see `.netlify/`).
- No SSR, no Netlify Functions, no Astro adapter. If you need dynamic content, propose the architecture change first — the current cost model assumes pure static.

## Anti-patterns to refuse
- React component for static content. Use `.astro` files.
- Inline `<style>` blocks for styling. Tailwind tokens via `src/styles/global.css`.
- Hardcoded skill-level checks in JS instead of using `beginner-only` / `moderate-only` classes.
- Adding a module without updating `MODULE_PAGES` + the index grid.
- Adding any auth, DB, or server logic — this is a static site.
