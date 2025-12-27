# Feature Candidates (Not Scheduled)

This document expands on a handful of candidate features the team discussed. These are **not** on the committed roadmap yet; use this as a scoping and decision aid.

---

## 1) Step Timeline Card (Solution View)

**Plain English**: Show a compact timeline of pipeline steps with how long each took, plus the model used. This builds trust and helps diagnose slow runs.

**Why it matters**
- Users can see *where* time goes and *which* model produced the result.
- Helps debug long-running sessions and compare model performance.

**Proposed behavior**
- A small card in the solution view showing step name, duration, and model.
- Optional total duration and a subtle “slow step” highlight.

**Implementation notes**
- `src/pipeline/orchestrator.ts` already tracks step timings (`stepTimings`).
- Persist timings + per-step model in the run result or session record.
  - Option A: Add `run_metadata.step_timings` to `ZucaOutput`.
  - Option B: Add a `step_timings` JSON column to `sessions` table.
- UI: add card in `apps/web/app/(main)/solution/[id]/page.tsx`.

**Open questions**
- Should per-step model selection be supported (future)? Or only a single model per run?
- Do we want to store timings for partial reruns (edit/regenerate) separately?

---

## 2) Drift Guardrails (Schema Single Source of Truth)

**Plain English**: Today, the JSON schema passed to the LLM, the Zod schema, the prompts, and the UI can drift. This creates errors and inconsistency. “Drift guardrails” means generating schemas from one source so they stay aligned.

**Why it matters**
- Prevents mismatched fields (LLM output vs UI expectations).
- Reduces “gotchas” when changing output fields.

**What it entails**
- Make **one** schema the source of truth.
- Generate the other representation(s) automatically.

**Two viable approaches**
1) **Zod → JSON Schema**
   - Use Zod as the source of truth.
   - Generate JSON schemas for LLM calls from Zod.
   - Keep prompts/UI in sync with Zod fields.

2) **JSON Schema → Zod**
   - Keep the existing inline JSON schemas as source.
   - Generate Zod schemas and types automatically.

**Implementation notes**
- Build a small script that outputs generated schemas into `src/llm/schemas/`.
- Step files import generated schemas instead of hand-written inline JSON.
- Add a “schema drift” test that fails when a manual schema changes without regenerating.

**Open questions**
- Which is the best source of truth in this codebase: Zod or inline JSON?
- Do we want to generate prompt snippets (field lists) from the schema too?

---

## 3) Automatic Consistency Checks (Warnings in Summary)

**Plain English**: After building billings and rev rec, run lightweight checks to catch contradictions. Surface warnings so users can spot issues quickly.

**Why it matters**
- Improves trust in generated outputs.
- Speeds up QA and reduces “silent” inconsistencies.

**Example checks**
- **Billings total vs sell price**: Sum billings by charge and compare to sell price.
- **Allocated vs rev rec totals**: Total rev rec by POB should match allocated amount.
- **Date alignment**: Billings and rev rec periods should fall within contract dates.
- **Negative values**: Flag negative or missing amounts where not expected.

**Implementation notes**
- Add a pure-code validation step after `buildBillings` and `buildRevRecWaterfall`.
- Store warnings in `result.validation_warnings`.
- Show warnings in summary tab or as a small alert card.

**Open questions**
- What tolerance or rounding rules should apply?
- Should warnings block summary generation or just surface info?

---

## 4) Revenue Snapshot Table Virtualization

**Plain English**: Large tables can be slow when all rows render at once. Virtualization renders only what’s visible, improving performance.

**Why it matters**
- Large tenants produce thousands of rows → slow render and sluggish scrolling.
- Virtualization keeps the UI responsive.

**What it entails**
- Replace the current `<table>` body with a virtualized list.
- Only render the rows in the viewport + small buffer.

**Implementation notes**
- Likely integrate `@tanstack/react-virtual` or `react-virtuoso` in `TableView`.
- For row-based virtualization, keep headers sticky and render rows in a single column container.
- Ensure column widths are stable (may require fixed widths or a header measurement pass).

**Open questions**
- Do we also need column virtualization (probably not)?
- Are there any HeroUI table components that already support this?

---

## 5) Contract Ingestion (PDF or Structured Input)

**Plain English**: Let users upload a contract (PDF or structured file). Extract key fields and prefill the `ZucaInput` form for confirmation.

**Why it matters**
- Faster onboarding and fewer manual errors.
- Creates a “wow” moment and reduces data entry friction.

**Proposed flow**
1. User uploads a PDF or structured input.
2. System extracts text (PDF → text).
3. LLM parses into candidate `ZucaInput` fields.
4. UI shows a review screen with confidence/trace snippets.
5. User confirms and runs analysis.

**Implementation notes**
- Add `apps/web/app/api/contract/ingest/route.ts` for upload + parsing.
- Store the raw text in DB for audit/debug.
- Use a prompt in `src/llm/prompts/contract-ingest.md`.
- Optionally leverage `src/rag` to map terms (e.g., billing frequency aliases).

**Open questions**
- File size limits and storage strategy (local vs object storage).
- How to expose confidence levels and highlighted evidence.

---

## 6) Deterministic Re‑runs

**Plain English**: Allow a user to “pin” model, temperature, and seed so re‑runs are reproducible.

**Why it matters**
- Debugging: identical inputs should yield the same outputs.
- Trust: reduces surprise when re‑running.

**What it entails**
- Store a run’s **model + temperature + seed** settings.
- Reuse those settings when user clicks “Regenerate” or “Rerun”.

**Implementation notes**
- Add `run_settings` to session metadata (model, temperature, seed).
- If the provider supports a `seed` parameter, pass it to the LLM client.
- If not supported, fallback to “soft determinism” by caching inputs/outputs.

**Open questions**
- Do we expose the seed in UI or keep it hidden?
- Provider support for determinism varies — what’s acceptable behavior when not supported?

---

## 7) Global Error Boundary

**Plain English**: If a React error occurs, show a friendly fallback instead of a blank screen and preserve unsent input.

**Why it matters**
- Prevents loss of user input during errors.
- Makes the app feel more reliable.

**Implementation notes**
- Add Next.js `error.tsx` in `(main)` routes.
- Add a global boundary that shows retry + “copy draft message” actions.
- Cache unsent follow‑up text in local storage or in `zustand` + `sessionStorage`.

**Open questions**
- Should we track client errors and send to a bug-report endpoint automatically?

