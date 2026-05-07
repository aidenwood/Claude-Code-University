# Claude Code University — Design Spec

## Overview
A training web app for teaching people how to use Claude Code effectively — from terminal basics through advanced multi-agent workflows and non-code use cases. Dual-purpose: works as a self-serve learning site AND a click-through presentation.

**Title:** Rebuild Relief Claude Code University  
**Subtitle:** by Aidxn Design  
**URL:** Deployed to Netlify via GitHub auto-deploy

## Target Audience
- Primary: semi-technical staff (CMS users, HTML editors, people who can follow instructions but aren't developers)
- Secondary: mixed groups ranging from non-technical to junior devs
- Global skill toggle adapts content density to the reader's level

## Visual Identity

### Palette (Aidxn Design light mode)
| Token | Hex | Usage |
|-------|-----|-------|
| Purple (primary) | `#6b5ce6` | Accents, links, active states, buttons |
| Purple (secondary) | `#8b7ff0` | Gradients, hover states |
| White | `#ffffff` | Card backgrounds, content surfaces |
| Light grey | `#fafafa` | Page background, outer areas |
| Dark text | `#1a1a2e` | Headings, body text |
| Medium text | `#666666` | Secondary text, descriptions |
| Success green | `#22c55e` | "This" cards, correct examples |
| Warning red | `#ef4444` | "Not That" cards, anti-patterns |

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (headings)
- **Fallback:** `ui-sans-serif, system-ui, sans-serif`

### Style
- Card-based layout with subtle shadows
- Rounded corners (`rounded-xl` / `rounded-2xl`)
- Side padding: `px-5 md:px-10 lg:px-16`
- Clean, approachable, not intimidating
- Rebuild Relief horizontal logo in header
- Aidxn Design credit in footer

## Global UX Features

### Skill Level Toggle
- Position: top-right corner of header
- Two modes: **Beginner** / **Moderate**
- Persisted in `localStorage` key `skillLevel`
- Implementation: React island component sets `data-skill="beginner"` or `data-skill="moderate"` on `<html>`
- Content uses CSS visibility or conditional rendering based on data attribute
- **Beginner:** Full explanations, visual breakdowns, analogies, step-by-step
- **Moderate:** Concise descriptions, just commands and key context, minimal hand-holding

### Presentation Mode (Clicker Support)
- Left/right arrow key navigation between module pages
- Presentation clicker maps to arrow keys (standard HID behavior)
- Progress bar at bottom showing current position across all modules
- Smooth scroll to top on page transition
- Can still scroll freely within a page

### One-Click Copy Blocks
- Every bash command / code snippet gets a copy-to-clipboard button
- Below each command: a **Command Breakdown** showing colored segments with explanation lines
- Example: `npm install -g @anthropic-ai/claude-code` breaks into:
  - `npm` — Node.js package manager (the app store for code tools)
  - `install` — download and set up
  - `-g` — install globally (available everywhere, not just this folder)
  - `@anthropic-ai/claude-code` — the specific package to install

## Content Modules

### Module 1 — Getting Set Up
- What is a terminal (and why it's not scary)
- The shortcut: right-click folder → "Open Terminal Here" / Finder → Services → Terminal at Folder
- What you're looking at when it opens (prompt, cursor, path)
- Installing Node.js (prerequisite)
- Installing Claude Code with command breakdown
- First run and API key setup

### Module 2 — Terminal Survival Kit
- Only the commands they'll actually use:
  - `ls` — list files (same as looking at a folder in Finder)
  - `cd` — change directory (same as double-clicking a folder)
  - `pwd` — print where you are (check your location)
  - `mkdir` — make a new folder
  - `open .` — open current folder in Finder
  - `clear` — clean up the screen
- Each with visual breakdown + real example
- Finder ↔ Terminal mental model diagram
- Beginner mode: full explanations. Moderate mode: quick reference table.

### Module 3 — Your First Claude Conversation
- Running `claude` in a project folder
- Asking it something simple (with example prompts)
- Understanding the output: diffs, file reads, tool calls
- The permission system: what Allow/Deny means
- When Claude asks vs when it just does

### Module 4 — Working With Projects
- How Claude reads your codebase (it explores files)
- CLAUDE.md — giving Claude persistent project context
- Pointing Claude at specific files vs letting it explore
- The edit → review → approve cycle
- How to course-correct when Claude goes the wrong direction

### Module 5 — Think Like a Developer (This / Not That)
- Multi-section comparison layout
- Each comparison: red "Not That" card vs green "This" card with explanations
- Comparisons:
  1. **Vague vs Specific prompts** — "Build me a landing page" vs "Add a hero section to `src/pages/index.astro` using the spacing pattern from `src/components/Hero.astro`"
  2. **No context vs Full context** — "Fix the bug" vs "The form at `src/components/BookingForm.tsx` line 42 silently fails on Supabase insert — check the RLS policy"
  3. **Claude picks stack vs You declare architecture** — letting Claude choose vs "Use Astro 5 with React islands, Supabase for auth, deploy to Netlify"
  4. **Accept first output vs Verify the diff** — blindly accepting vs reading changes, checking for orphaned imports, testing
  5. **One mega-prompt vs Focused tasks** — cramming everything in one message vs sequential, scoped requests
  6. **"Make it look good" vs Reference existing patterns** — vague aesthetic request vs "Match the card style in `src/components/ServiceCard.astro`"
  7. **Ask Claude to plan everything vs You own the architecture** — letting Claude decide your app structure vs defining it yourself and letting Claude execute

### Module 6 — Scaffolding a Project
**Subheading:** *Choosing a stack that sets yourself up for success*

Decision-tree approach: "What are you building?" → recommended stack

**Database (security-first ordering):**
- **Supabase (recommended)** — built-in auth, Row Level Security, encryption at rest, realtime, scales with you. Default choice for anything with user data.
- **SQLite** — local-only tools with zero user data. Not for production apps with auth.

**Framework:**
- **Astro** (recommended for content/marketing sites) — fast, static-first, island architecture
- **Next.js** (recommended for apps) — SSR, API routes, full React ecosystem
- **React SPA** — dashboards, internal tools where SEO doesn't matter
- **Plain HTML/JS** — throwaway prototypes only, not for production

**Deployment:**
- **Netlify (recommended)** — full control, transparent, great DX, auto-deploy from GitHub
- **Static hosting** — for zero-backend simple cases
- **Vercel — NOT RECOMMENDED (security risk)** — explicit callout with explanation of security concerns

Each comparison card: when to use, when NOT to use, complexity level indicator.

### Module 7 — The GitHub → Netlify Pipeline
- What Git actually is (beginner: "save points for your project")
- Creating a repo on GitHub
- Connecting GitHub → Netlify
- Push → auto-deploy flow explained visually
- "Your changes go live in 60 seconds" — the magic moment
- What to do when a deploy fails

### Module 8 — Claude Power Features
**Memory & CLAUDE.md:**
- What CLAUDE.md is and why it matters
- Project-level vs global instructions
- Teaching Claude your patterns and preferences

**Skills that matter:**
- **brainstorming + writing-plans** — design before you build (grouped: the planning workflow)
- **TDD + verification-before-completion** — prove it works before claiming done
- **`/loop` command** — iterate until converged, used correctly
- **Caveman mode** — save tokens, still accurate
- **Cavekit** — spec-driven development for bigger projects

**Agents & Multi-Agent Workflows:**
- What subagents are, when Claude spawns them
- Parallel agents for independent tasks
- Worktrees for isolated work
- When to use multi-agent vs single-agent

**UI Libraries:**
- **shadcn/ui** — copy-paste components, full control
- **Radix UI** — accessible primitives under the hood
- **Aceternity UI** — animated, visual-heavy components

### Module 9 — Security & Privacy for Business
- What data goes to the Claude API vs stays local
- **WhisperFlow vs GhostPepper** — WhisperFlow keeps transcription local, GhostPepper sends data to external services. Always prefer local.
- What NOT to paste into Claude: credentials, customer PII, API keys, internal secrets
- `.claudeignore` — how to exclude sensitive files and directories
- Environment variables: keep them in `.env`, never commit them
- Audit trail and accountability
- Company policy recommendations for Claude Code usage
- When to use Claude vs when human review is mandatory

### Module 10 — Uses Beyond Code
Each with a real example prompt + what Claude does:
- **CAD file manipulation** — modifying SVG/DXF files, generating parametric designs
- **PowerPoint/presentation generation** — creating slide decks from outlines
- **CMS data wrangling** — cleaning up messy content, bulk transformations
- **CSV/data pipelines** — parsing exports, deduping, reformatting columns
- **PDF analysis** — reading contracts, extracting invoice data, summarizing documents
- **Browser automation** — Chrome MCP tools for scraping, form filling, testing flows
- **Image/screenshot analysis** — "what's wrong with this layout" from a screenshot
- **File batch operations** — renaming hundreds of files, reorganizing folder structures
- **Writing** — blog posts, compliance docs, email drafts in your voice
- **Spreadsheet wrangling** — transforming Excel/CSV without opening Excel
- **API debugging** — hitting endpoints, parsing responses, testing webhooks

## Tech Stack
- **Astro 5** with React islands
- **Tailwind CSS 4**
- **TypeScript strict**
- **Inter** from Google Fonts
- Content as `.astro` page files
- Deployed to **Netlify** via GitHub auto-deploy

## File Structure
```
src/
  layouts/
    MainLayout.astro              # Shell: header, nav, footer, skill toggle slot
  components/
    SkillToggle.tsx               # React island — beginner/moderate switch
    CopyBlock.astro               # Command + copy button + optional breakdown
    CommandBreakdown.astro        # Colored segment explanations for commands
    ThisNotThat.astro             # Red/green comparison card pair
    StackCard.astro               # Stack recommendation card with badge
    ModuleNav.tsx                 # React island — arrow key navigation + progress bar
    TableOfContents.astro         # Landing page module list
  pages/
    index.astro                   # Landing page / table of contents
    01-getting-set-up.astro
    02-terminal-survival.astro
    03-first-conversation.astro
    04-working-with-projects.astro
    05-think-like-a-developer.astro
    06-scaffolding-a-project.astro
    07-github-netlify-pipeline.astro
    08-claude-power-features.astro
    09-security-privacy.astro
    10-beyond-code.astro
  styles/
    global.css                    # Tailwind imports, Inter font, custom properties
public/
  logos/                          # RR + Aidxn logos
```

## Implementation Notes
- Skill toggle state flows via `data-skill` attribute on `<html>` element
- Beginner content wrapped in `[data-skill="beginner"] &` selectors or conditional `data-skill` checks
- Arrow key navigation reads page order from a manifest array, navigates via `window.location`
- Copy blocks use `navigator.clipboard.writeText()` with visual feedback
- All content is in `.astro` files — easy for trainees to edit as a learning exercise
- No database, no auth — pure static site
