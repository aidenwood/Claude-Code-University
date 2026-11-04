# Content — Room

> Open this BEFORE writing any module text or department guide. Voice is the product.

## The audience
Rebuild Relief team members — claims managers, sales reps, marketing coordinators, ops, HR, finance. Mix of:
- People who have **never used a terminal** (literal first-time devs).
- People who write SQL / use Pipedrive APIs daily.

The skill toggle is how we serve both without dumbing down for the experienced or losing the beginners.

## Voice rules
- **Plain English. No jargon in Beginner sections.** If a term must appear (e.g. "terminal", "repo"), define it the first time.
- **Friendly, not corporate.** Second-person ("you'll do this..."). Acknowledge that some of this feels weird at first.
- **No filler.** "In this section, we will discuss..." is dead. Just say the thing.
- **No emoji in body text.** Numbered headers / icons in components only.
- **No marketing-speak.** "Powerful AI-powered productivity" → "Claude reads your code and edits it".
- **Concrete examples > abstract explanations.** Show the command, then explain it.

This is Rebuild Relief internal voice — **not** the Aidxn blog Fireship voice. Don't pull blog phrases ("If you've been living under a rock...", "plot twist:", etc.) into here.

## Beginner vs Moderate
- **Beginner** = a smart adult who has never opened Terminal. Assume zero CS background, full general intelligence. Explain what a folder path is. Explain why we use the terminal at all. Build intuition before showing syntax.
- **Moderate** = comfortable with the command line, has shipped something. Skip the "what is X" sections. Show the money command, the edge cases, and what to watch for.

A module page typically opens with a `<BeginnerNote>` framing the concept, then `moderate-only` sections layer in the depth.

## Module structure template
Every numbered module page follows:
1. **MainLayout title + subtitle + module number** — top heading auto-generated.
2. **Intro section** — what this module covers, why it matters. One `<BeginnerNote>` for context.
3. **Concept sections** — 3-6 `<section>` blocks, each one concept. Beginner explanation → moderate detail.
4. **Hands-on** — a `<CopyBlock>` or two with actual commands the reader runs.
5. **Common mistakes / This vs Not That** — for prompting modules especially.
6. **Recap** — short bullet list of takeaways.
7. (No "next module" button — `ModuleNav` handles that with arrow keys.)

Look at `src/pages/01-getting-set-up.astro` as the canonical reference.

## Department pages
Different structure — they're role-specific Claude Code use cases, not a curriculum.
- Open with "What you'll use Claude for as a [role]" — 3-5 concrete tasks.
- For each task: scenario → prompt to use → what Claude does → output you can act on.
- End with team-specific links (Pipedrive workflows, internal docs, etc.).

Department index: `src/pages/departments/index.astro` lists every role tile.

## When to use which content block
| Need to show... | Use |
|-----------------|-----|
| Jargon-free intuition for beginners | `<BeginnerNote>` |
| Right way vs wrong way (prompts, commands) | `<ThisNotThat>` |
| A command or code the reader runs | `<CopyBlock>` |
| A tool in a stack rundown | `<StackCard>` |
| A paragraph only beginners see | `<div class="beginner-only">...</div>` |
| A paragraph only moderates see | `<div class="moderate-only">...</div>` |

## Source material for new content
- `docs/research-findings.md` — captured research notes, use as the factual base.
- `~/CLAUDE.md` (global) — Aiden's tech stack + working style, useful for module 6 (scaffolding) and 8 (power features).
- Real internal Rebuild Relief workflows (Pipedrive, Google Maps, BigQuery dashboards) — for department pages.

## Hard "don't"s
- Don't recommend installing things globally without a security note (module 9 owns this).
- Don't write a module that requires a paid API account without flagging cost.
- Don't ship a `<CopyBlock>` with a command you haven't tested.
- Don't write department content for a role without checking with the relevant team lead first.
