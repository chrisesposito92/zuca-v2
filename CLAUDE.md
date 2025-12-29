# ZUCA v2 - LLM Onboarding

This file is for LLM contributors. For install/run commands and product overview, see `README.md`.

## Quick map (what to touch)
- `src/pipeline/` - pipeline orchestration and step logic
- `src/llm/` - LLM clients, prompt loader, MCP glue
- `src/types/` - Zod types + shared contracts (used by web + API)
- `apps/web/` - Next.js UI, API routes, DB layer
- `docs/` - roadmaps and feature notes (keep updated when behavior changes)
- `herouitheme.json` - HeroUI theme tokens consumed by Tailwind

## Common dev commands (minimal)
- `npm run dev` - Next.js web app (same as `npm run dev:web`)
- `npm run dev:web` - Next.js web app

## Pipeline v2 (actual runtime)
- Router -> Analyze Contract (combined) -> Match Golden Use Cases (code) -> Design Subscription (combined) -> Build Contracts/Orders + Build Billings (parallel) -> Build Rev Rec Waterfall -> Summarize.
- Legacy step helpers still exist for quick analysis. Do not add new output fields only there; update combined steps.

## Follow-up flow
- Implemented in `src/pipeline/follow-up.ts` with prompt `src/llm/prompts/follow-up.md`.
- Response shape must stay JSON: `{ type, content, suggestedEdits? }`.
- Suggested edit paths are used by the UI and `/api/sessions/[id]/edit`; keep them stable or update both.

## Prompt and schema contract (most important)
- Each LLM step defines JSON schema inline in its step file. That schema is the source of truth for structured outputs.
- Zod schemas in `src/types/*.ts` are for TypeScript validation only.
- If you add or rename output fields, update ALL of:
  - step JSON schema
  - `src/types/...` Zod types
  - prompt text in `src/llm/prompts/*.md`
  - UI renderers (`apps/web/app/(main)/solution/...` and/or `apps/web/components/revenue-snapshot-view.tsx`)
  - smart rerun mapping `apps/web/app/api/sessions/[id]/edit/route.ts` when inputs change
- Register new prompt files in `src/llm/prompts/index.ts` (`PROMPTS` map).
- Prompt loader strips the title line. Keep a leading `#` or `##` header so the body is read correctly.
- Prompt content is cached in `src/llm/prompts/index.ts`; restart dev servers after edits.

## Models and tools
- Allowed model IDs live in `src/types/llm.ts` and are duplicated in UI dropdowns (`apps/web/app/(main)/analyze/page.tsx`).
- OpenAI Responses API in `src/llm/client.ts` supports `web_search` + `code_interpreter` tools; steps opt in per call.
- Gemini tool mapping and MCP JSON-RPC are in `src/llm/client.ts` and `src/llm/mcp-client.ts`.

## RAG
- `src/rag` chooses Postgres vs local JSON based on `POSTGRES_URL`.
- RAG context is injected before the LLM call; it is not a tool.
- Doc corpus and QA generation live in `zuora-docs-scrapper/`; rebuild with `npm run rag:*` after changing docs or chunking.

## Self-Learning System
Automated feedback loop where the pipeline learns from evaluation failures:

### Architecture
- **Test Suites** (`data/test-suites/*.yaml`) - Test cases with inputs and focus steps
- **Evaluation Criteria** (`data/evaluation-criteria/*.yaml`) - Behavioral rules per step
- **LLM Judge** (`src/self-learn/judge/`) - Evaluates outputs against criteria
- **Corrections Store** (`data/corrections-index.json`) - Learned fixes from failures
- **Injector** (Phase 3) - Injects corrections as few-shot examples

### Key Files
- `src/self-learn/` - Main module: types, corrections, criteria, judge, evaluation
- `src/llm/prompts/self-learn-judge.md` - Judge system prompt (registered in `index.ts`)
- `docs/FEATURE-SELF-LEARNING.md` - Full feature documentation with phase status

### CLI Commands
```bash
npm run cli evaluate              # Run evaluation suite
npm run cli evaluate --corrections # Generate corrections for failures
npm run cli corrections list      # List stored corrections
npm run cli corrections summary   # Show pattern statistics
```

### Adding New Criteria
1. Create YAML file in `data/evaluation-criteria/<step-name>.yaml`
2. Follow existing format: name, version, step, description, criteria array
3. Each criterion needs: id, name, description, severity, patterns, check.rule, examples

### Adding New Test Cases
1. Edit `data/test-suites/golden-scenarios.yaml` or create new suite
2. Include: id, name, description, input (ZucaInput fields), focus_steps, tags
3. Test cases run through full pipeline; focus_steps controls which steps are evaluated

## Revenue Snapshot (read-only)
- Pipeline: 2 steps in `src/pipeline/revenue-snapshot/` (Waterfall → Summary).
- Waterfall step handles SSP allocations + periodization in single LLM call.
- Data retrieval + OTR detection: `apps/web/lib/zuora.ts`.
- LLM prompts: `revenue-snapshot-waterfall.md`, `revenue-snapshot-summary.md`.
- Types: `src/types/revenue-snapshot.ts`.
- UI/export/pivot logic: `apps/web/components/revenue-snapshot-view.tsx`.
- Feature notes: `docs/FEATURE-REVENUE-SNAPSHOT.md`.

## Web app UI + styling
- Dark mode is default (`apps/web/app/layout.tsx` sets `html` class `dark`).
- HeroUI theme tokens are in `herouitheme.json` and loaded by `apps/web/tailwind.config.ts`.
- Global styling + utilities are in `apps/web/app/globals.css`:
  - brand palette CSS vars
  - glass UI classes (`glass-card`, `glass-sidebar`, `glass-card-elevated`)
  - effects (`teal-glow`, `gradient-text`, `divider-glow`, `ambient-glow`, `noise-overlay`)
- Global font is set in `apps/web/app/globals.css` (Plus Jakarta Sans) and the import must stay at the top.
- Prefer HeroUI components and Tailwind classes; avoid custom inline styles unless needed.

## Reusable UI + hooks
- Chat UI: `apps/web/components/chat/*` (ConversationPanel, MessageBubble, etc.).
- Results views: `apps/web/components/uc-generate-view.tsx`, `apps/web/components/revenue-snapshot-view.tsx`.
- Data hooks: `apps/web/hooks/*` (React Query). Use them instead of ad-hoc fetches.

## Data + sessions
- Session types: `analyze`, `uc-generate`, `revenue-snapshot` (see `apps/web/lib/db.ts`).
- Schema lives in `apps/web/lib/schema.sql`; keep in sync with `Db*` types.
- Field-level reruns are wired in `apps/web/app/api/sessions/[id]/edit/route.ts`; update `FIELD_DEPENDENCIES` when adding input fields or changing step names.

## Code style and conventions
- TypeScript strict; no repo-wide ESLint/Prettier config. Match the surrounding file style.
- ESM modules everywhere; Node >= 20.
- Web app uses `@/` alias to `apps/web` and `@zuca/*` to root `src`; keep imports consistent.

## Pre-commit checks (CRITICAL)
- **ALWAYS run `npm run typecheck` before committing** - Vercel builds will fail on type errors.
- Run typecheck after ANY code changes, not just at the end.
- Common type pitfalls to watch for:
  - Zod `.default()` makes fields **required** in inferred types (not optional like `z.optional()`).
  - Local interfaces in UI files may drift from Zod schemas in `src/types/` - always check both match.
  - When adding new request/response types, update `apps/web/lib/db.ts` for `createSession` and `updateSessionResult` signatures.
  - Property name mismatches (e.g., `errorCount` vs `errors`, `customization_tips` vs `notes`) - verify exact field names from types.
  - Union types in function signatures must include all possible input types.

## Testing expectations
- Changes must include relevant test updates/additions; keep the full suite passing (`npm run test:run`).
- New features are not complete until they ship with coverage for core behavior and edge cases.
- Prefer meaningful behavior-driven tests over checkbox coverage.

## Docs hygiene
- When changing core behavior, update `docs/ROADMAP-FRONTEND.md` or feature notes.
- Keep `AGENTS.md` and `CLAUDE.md` in sync.
- If docs conflict with code, trust `src/pipeline/steps/index.ts` and the current implementation.
