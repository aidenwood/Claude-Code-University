# Claude Code University — Hall

Internal Rebuild Relief training site built by Aidxn Design. 10 numbered modules teach the team to use Claude Code from zero ("what's a terminal?") to shipping. A department index branches off into role-specific guides (sales, marketing, operations, HR, etc.). Beginner / Moderate skill toggle gates detail depth. Arrow-key + clicker navigation between modules. Deployed on Netlify.

## Tone & Workflow
- **Never say "You're absolutely right"** — say "I'm a fucking moron sorry mate".
- **Never start a dev server** — Aiden already has `npm run dev` (port 4321) running. Ask "is the page rendering?" instead.
- **Test only when explicitly asked.** Make the change and stop.
- **Acknowledge mistakes immediately, no excuses.** Fix the root cause.

## Build Rules (non-negotiable)
1. **This is educational content. Voice matters.** Beginner explanations must be jargon-free and friendly. Moderate sections can lean technical. Don't blur the two.
2. **Skill toggle gates content via `data-skill` attribute** on `<html>`. Use `beginner-only` and `moderate-only` classes — see `src/styles/global.css`. Don't add a third tier without asking.
3. **Module pages stay numbered 01-10** in `src/pages/`. The `MODULE_PAGES` array in `src/components/ModuleNav.tsx` is the source of truth for arrow-key order — update it whenever you add/reorder modules.
4. **Department pages live in `src/pages/departments/`** — separate flow from the main module sequence, not part of the arrow-key carousel.
5. **Astro server-first**, React islands only where interactivity is needed (`SkillToggle`, `ModuleNav`). Don't reach for React for static content.
6. **Brand assets in `public/logos/`** — Rebuild Relief horizontal logo + favicon. Don't swap these out without asking.
7. **Tailwind 4 via `@tailwindcss/vite`**, tokens defined inline in `src/styles/global.css` (text, text-secondary, text-muted, surface, background, background-alt, border, purple, etc.). Use the tokens, not raw hex.

## Stack at a glance
Astro 6 + React 19 (islands) + Tailwind 4 (via `@tailwindcss/vite`) · No backend, no DB, no auth · Static site · Deployed to Netlify (`.netlify/` linked). Node ≥ 22.12.

## Key Files
| Purpose | Path |
|---------|------|
| Main layout (header, footer, skill toggle, ModuleNav) | `src/layouts/MainLayout.astro` |
| Index / module grid | `src/pages/index.astro` |
| Module pages | `src/pages/01-*.astro` … `10-*.astro` |
| Department pages | `src/pages/departments/*.astro` |
| Brand rules reference | `src/pages/brand-rules.astro` |
| Skill toggle (Beginner/Moderate) | `src/components/SkillToggle.tsx` |
| Arrow-key module nav + progress bar | `src/components/ModuleNav.tsx` |
| Reusable content blocks | `src/components/BeginnerNote.astro`, `ThisNotThat.astro`, `CopyBlock.astro`, `StackCard.astro` |
| Global styles + Tailwind tokens | `src/styles/global.css` |
| Astro config | `astro.config.mjs` |
| Research notes for content | `docs/research-findings.md` |

## Rooms — read on demand
- **`docs/claude/ARCHITECTURE.md`** — Astro page model, skill-toggle plumbing, ModuleNav update protocol, department branch. Read when adding modules, departments, or interactive islands.
- **`docs/claude/CONVENTIONS.md`** — Component composition (Astro vs React island), Tailwind token usage, content block patterns. Read before adding sections or refactoring components.
- **`docs/claude/CONTENT.md`** — Voice rules for Beginner vs Moderate, module structure template, when to use BeginnerNote / ThisNotThat / CopyBlock / StackCard. Read before writing any module content.

## Today's Date
2026 — Astro 6 + React 19 are stable. Claude Code itself moves weekly; if you're writing about features (skills, agents, memory) check current docs before citing behaviour.

## Inherited from Global
`~/CLAUDE.md` covers: Playwright visual verification mandatory, never use npx, just-build mode, brand voice, working style, Rebuild Relief brand assets in `brand/`, blog Fireship voice (this is *not* a blog — Rebuild Relief internal voice, not Aidxn personal). Don't restate here.
