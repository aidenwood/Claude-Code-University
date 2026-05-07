# Research Findings — Key Content for Module Expansion

## Real Productivity Numbers
- 4hrs/week saved per developer ($320/week at $80/hr)
- 2-10x development velocity after adoption
- ~80% faster individual task execution
- -30% fewer iterations needed
- $37.50 cost per incremental PR vs $150 developer time = 4:1 ROI
- 4% of public GitHub commits are Claude Code-authored (135,000/day, Feb 2026)
- 84% of developers use or plan to use AI tools (Stack Overflow 2025)
- 1-2 week ramp period before consistent results

## Key CLI Features to Teach
- `/fast` — Opus 4.6 at 2.5x speed, same quality
- `/compact [retain description]` — compress context, keep specific info
- `/clear` — reset between unrelated tasks
- `claude -p "query"` — non-interactive one-shot mode for scripting
- `claude --worktree name` — isolated git worktree for parallel work
- Permission modes: default, acceptEdits, plan, dontAsk, bypassPermissions

## Hooks System (settings.json)
- PreToolUse: block dangerous ops (force push, rm -rf)
- PostToolUse: auto-format with Prettier/ESLint after edits
- OnSessionStart: inject project status context
- Config locations: ~/.claude/settings.json (global), .claude/settings.json (project), .claude/settings.local.json (personal)

## MCP Integrations
- Supabase MCP: direct SQL, RLS debugging, edge function logs
- Playwright MCP: cross-browser automation
- GitHub MCP: read issues, PRs, code
- Linear MCP: read/write tasks
- Sentry MCP: error monitoring
- 1000+ servers available in 2026
- Lazy loading reduces context by 95%

## Custom Agents
- Define in .claude/agents/agent-name.md
- Can specify isolation: worktree
- Trigger with /agent-name
- Examples: code-reviewer, code-migrator, test-validator

## CLAUDE.md Best Practices
- Keep under 200 lines (compliance degrades beyond)
- Break into .claude/rules/ for large projects
- Hierarchy: ~/.claude/CLAUDE.md → /project/CLAUDE.md → /dir/CLAUDE.md
- Include: build commands, code conventions, stack defaults, hard rules
- Don't include: architecture you're exploring, debugging notes, temporary context

## IDE Integrations
- VS Code: official extension, checkpoint undo, @-mention files, parallel conversations
- JetBrains: official plugin, side panel chat, shared settings
- CLI vs IDE: CLI has full hooks/agents/worktrees, IDE has visual diffs

## Common Anti-Patterns
- Kitchen sink sessions (mixing unrelated tasks — use /clear)
- Over-specified CLAUDE.md (200+ lines = ignored)
- Conflicting instructions in CLAUDE.md
- Never using /plan mode (jumps to wrong solution)
- Accepting "plausible-looking" code without review
- Missing auth checks in generated endpoints
- Including full files when only sections needed

## Department-Specific Stats
- HR: AI adoption 43% in 2026 (up from 26% in 2024)
- Finance: Invoice OCR 97%+ accuracy, reconciliation 40-60% faster, tax prep 30 days faster
- Operations: Gantt gen minutes not days, utilization +15-25%, incident resolution -40%
- Customer Service: Ticket triage -80% manual, response time -60%, CSAT +5-15%
- Legal: Clause extraction 94%+ accuracy, audit time -50%
- IT: IaC standard for 80%+ cloud deploys, security audit -90% manual work
- Executive: Dashboard prep -80% time, scenario modeling -60% planning time
