# Conventions — Room

> Open this before adding sections, refactoring components, or styling anything.

## Astro vs React — when to use which
- **`.astro` file** = default. All static content, every page, every server-rendered component.
- **React island (`.tsx` + `client:load`)** = only when the component needs:
  - Browser-only state (skill toggle, current-route awareness).
  - Keyboard / event listeners.
  - localStorage / sessionStorage access.

If you're tempted to reach for React for "convenience" — stop. Write an `.astro` component.

## Component composition pattern
Modules are built by composing small `.astro` blocks inside `MainLayout`. Look at `src/pages/01-getting-set-up.astro` for the canonical example.

Standard section shell:
```astro
<section class="rounded-xl border border-border bg-surface p-6 md:p-8">
  <h2 class="text-xl font-bold text-text">Section title</h2>
  <p class="mt-3 text-sm text-text-secondary">Lead paragraph.</p>
  <!-- Optional gated tier -->
  <BeginnerNote>
    <p>Plain-English explanation.</p>
  </BeginnerNote>
</section>
```

## Reusable content blocks
- **`<BeginnerNote>`** — Box for beginner-only explanations. Already gated with `beginner-only` class internally. Use for jargon-busting and intuition.
- **`<ThisNotThat>`** — Side-by-side good vs bad pattern (for prompting / commands). Use in module 5 "Think Like a Developer" style sections.
- **`<CopyBlock>`** — Code or command block with a copy button.
- **`<StackCard>`** — Tile representing a tool / tech in a stack rundown. Use in module 6 scaffolding sections.

If a section repeats across pages 3+ times, extract it into a new block under `src/components/`. Don't proliferate one-off variants.

## Tailwind token usage
Tokens defined in `src/styles/global.css` — use these, never raw hex:
- Text: `text-text`, `text-text-secondary`, `text-text-muted`.
- Background: `bg-background`, `bg-background-alt`, `bg-surface`.
- Border: `border-border`.
- Brand: `text-purple`, `bg-purple/10` (purple is the only accent token — Rebuild Relief brand).

Side padding lockstep: `px-5 md:px-10 lg:px-16` everywhere — see `MainLayout.astro`. Don't eyeball different values per page.

## Heading sizes
- Page H1: `text-3xl md:text-4xl lg:text-5xl font-extrabold` — already in `MainLayout`. Don't write it inline.
- Section H2: `text-xl font-bold`.
- Subsection H3: `text-base font-semibold`.

Match the existing pages. No new heading sizes without Aiden's signoff.

## Naming
- Component files: PascalCase (`BeginnerNote.astro`, `ModuleNav.tsx`).
- Page files: kebab-case with optional `NN-` prefix for modules.
- Tailwind classes: ordered roughly layout → spacing → typography → color → state. Don't enforce, but stay readable.

## Skill-toggle gating
- Wrap beginner-only paragraphs in `<div class="beginner-only">...</div>`.
- Wrap moderate-only sections in `<div class="moderate-only">...</div>`.
- For larger chunks, gate the whole `<section>` element.
- Don't write JS `if (skillLevel === 'beginner')` — CSS gating only.

## When in doubt
Open the closest existing module page and copy the structure exactly. The pages are intentionally repetitive — that's the design system.
