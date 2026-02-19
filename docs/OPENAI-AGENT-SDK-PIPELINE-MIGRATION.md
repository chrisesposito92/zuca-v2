# OpenAI Agent SDK Pipeline Migration

## Context

The current pipeline (`src/pipeline/`) uses sequential `complete()` calls (raw LLM API) with manual context threading between steps. This makes persistent state management cumbersome and limits tool use on the Google/Gemini side. We're rebuilding the pipeline using the **OpenAI Agent SDK** (`@openai/agents`) to get first-class agent abstractions, structured output via Zod, and a cleaner context model. The new pipeline runs alongside the current one behind a feature flag, targeting **gpt-5.2** as the default model.

**Key constraint**: All existing functionality must be preserved -- Ralph self-improvement loop, mid-pipeline clarification questions, field-level edit/rerun, output patching via chat, and full regeneration.

---

## Architecture Overview

**Approach: Programmatic orchestration with individual Agent runs**

A TypeScript orchestrator (not an LLM agent) calls `run()` on step-specific `Agent` instances sequentially. This gives us:
- Deterministic step ordering (no LLM deciding what runs next)
- Easy partial reruns (skip steps whose outputs already exist)
- Clean Ralph wrapping (run step agent, then self-eval agent, loop)
- Same clarification pause/resume pattern as today

Each step is an `Agent<PipelineContext>` with:
- **Dynamic `instructions`**: async function that reads `RunContext<PipelineContext>` to inject RAG context, corrections, and clarification answers into the system prompt
- **`outputType`**: Nested Zod schema (replaces dual flat/nested JSON schema pattern)
- **No tools on structured-output agents** (SDK constraint: agents with `outputType` can't use tools). RAG and corrections are pre-fetched by the orchestrator and injected via dynamic instructions.

---

## File Structure

```
src/pipeline-agents/
  index.ts                       # Public API: runAgentsPipeline + re-exports
  orchestrator.ts                # Step sequencing, context passing, partial reruns
  context.ts                     # PipelineContext type definition
  ralph.ts                       # Ralph wrapper adapted for Agent SDK
  agents/
    analyze-contract.ts          # Step 1 agent factory
    design-subscription.ts       # Step 3 agent factory (dynamic schema)
    build-contracts-orders.ts    # Step 4a agent factory
    build-billings.ts            # Step 4b agent factory
    build-revrec-waterfall.ts    # Step 5 agent factory
    summarize.ts                 # Step 6 agent factory
    self-eval.ts                 # Ralph self-evaluation agent
  schemas/
    index.ts                     # Re-exports + shared ClarificationFieldsSchema
    analyze-contract.ts          # Nested Zod output schema
    design-subscription.ts       # Dynamic schema factory (POB identifiers)
    build-contracts-orders.ts
    build-billings.ts
    build-revrec-waterfall.ts
    summarize.ts
    self-eval.ts                 # SelfEvaluation Zod schema
```

---

## Phase 1: Foundation

**Files to create/modify:**

1. **Install dependency**
   - `npm install @openai/agents` (Zod already installed, v4)

2. **`src/pipeline-agents/context.ts`** -- PipelineContext type
   ```typescript
   export interface PipelineContext {
     sessionId: string;
     input: ZucaInput;
     model: LlmModel;
     goldenData: GoldenUseCasesData;
     interactiveMode: boolean;
     skipAllClarifications: boolean;
     result: Partial<ZucaOutput>;            // Grows as steps complete
     clarificationAnswers: ClarificationAnswer[];
     ralphEnabled: boolean;
     ralphState: RalphSessionState;
     ralphClarificationAnswer?: ClarificationAnswer;
     stepTimings: Record<string, number>;
     // Pre-fetched per-step context (set by orchestrator before each agent run)
     ragContext?: string;
     correctionsContext?: string;
     clarificationContext?: string;
     // Derived data (set after match step)
     matchedUseCaseIds?: string[];
     contextSubscriptions?: GoldenSubscription[];
     contextRatePlanCharges?: GoldenRatePlanCharge[];
   }
   ```

3. **`apps/web/tsconfig.json`** -- Add path alias
   ```json
   "@zuca/pipeline-agents": ["../../src/pipeline-agents/index.ts"],
   "@zuca/pipeline-agents/*": ["../../src/pipeline-agents/*"]
   ```

4. **Feature flag**: `USE_AGENTS_PIPELINE=true` in `.env`

---

## Phase 2: Schemas (Zod as Single Source of Truth)

**Files to create**: `src/pipeline-agents/schemas/*.ts`

Each schema file defines a nested Zod schema used as the agent's `outputType`. Every step schema merges in shared clarification fields:

```typescript
// schemas/index.ts
export const ClarificationFieldsSchema = z.object({
  needs_clarification: z.boolean().describe('Set to true if user clarification is needed'),
  clarification_question: z.string().nullable(),
  clarification_context: z.string().nullable(),
  clarification_options: z.array(z.object({
    id: z.string(), label: z.string(), description: z.string().optional(),
  })).nullable(),
  clarification_priority: z.enum(['critical', 'important', 'helpful']).nullable(),
});
```

**Per-step schemas** import existing Zod types from `src/types/output.ts` where possible, extending them with `.describe()` annotations for the LLM:

- `schemas/analyze-contract.ts`: `{ contractIntel, detectedCapabilities } + clarification`
- `schemas/design-subscription.ts`: **Dynamic factory** -- takes `validPobIdentifiers: string[]` and creates schema with constrained enum. Agent must be created per-run.
- `schemas/build-contracts-orders.ts`: `ContractsOrdersOutput + clarification`
- `schemas/build-billings.ts`: `BillingsOutput + clarification`
- `schemas/build-revrec-waterfall.ts`: `RevRecWaterfallOutput + clarification`
- `schemas/summarize.ts`: `Summary` (no clarification -- simple consolidation step)
- `schemas/self-eval.ts`: `{ decision, confidence, reasoning, iterationFeedback?, specificIssues?, clarificationQuestion?, ... }`

**Key advantage**: Eliminates the current dual-schema pattern (flat JSON schema for LLM + nested for judge). One Zod schema = outputType + TypeScript type + validation.

---

## Phase 3: Step Agents

**Files to create**: `src/pipeline-agents/agents/*.ts`

Each agent factory follows this pattern:

```typescript
// agents/analyze-contract.ts
import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { AnalyzeContractOutputSchema } from '../schemas/analyze-contract';
import type { PipelineContext } from '../context';

export function createAnalyzeContractAgent() {
  return new Agent<PipelineContext>({
    name: 'analyze-contract',
    model: 'gpt-5.2',
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.ANALYZE_CONTRACT);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: AnalyzeContractOutputSchema,
  });
}
```

The **user message** is built by the orchestrator (not the agent). It contains the actual input data, golden data context, iteration feedback from Ralph, etc. -- same content as the current step functions' `userMessage` variable.

**Special cases:**
- `design-subscription.ts`: Agent created dynamically per-run because its schema depends on POB template identifiers from golden data
- `summarize.ts`: No clarification fields, simpler schema, lower reasoning effort
- `self-eval.ts`: Uses the `ralph-self-eval` prompt, returns `SelfEvaluationSchema`

**Agents for each step**: 6 LLM steps + 1 self-eval agent = 7 agent factories total. The `match_golden_use_cases` step remains pure code (no agent).

---

## Phase 4: Ralph Wrapper

**File to create**: `src/pipeline-agents/ralph.ts`

Adapts the current `withRalph()` pattern to work with Agent SDK `run()` calls instead of direct `complete()` calls:

```typescript
export interface WithRalphAgentOptions<T> {
  stepName: string;
  agent: Agent<PipelineContext>;
  buildUserMessage: (iterationContext: string) => string;
  pipelineContext: PipelineContext;
  previousState?: StepIterationState<T>;
}

export async function withRalphAgent<T>(opts: WithRalphAgentOptions<T>): Promise<WithRalphResult<T>>
```

**Iteration loop** (same logic as `src/pipeline/ralph/wrapper.ts`):
1. Build iteration context from previous attempts via existing `buildIterationContext()`
2. Run step agent: `run(agent, userMessage, { context: pipelineContext })`
3. Check `output.needs_clarification` -- if true and interactive, return pause
4. Run self-eval agent: `run(selfEvalAgent, evalMessage, { context: pipelineContext })`
5. Record attempt, check decision (done/iterate/clarify), loop or return

**Reused from current Ralph**: `buildIterationContext()`, `buildSelfEvalContext()`, config loading (`getRalphStepConfig`, `isStepRalphEnabled`), all types (`StepIterationState`, `IterationAttempt`, etc.)

**What changes**: `stepFn(iterationContext)` calling `complete()` becomes `run(agent, userMessage, { context })`. The self-eval function calling `complete()` becomes `run(selfEvalAgent, evalMessage, { context })`.

---

## Phase 5: Orchestrator

**File to create**: `src/pipeline-agents/orchestrator.ts`

Direct mirror of `src/pipeline/orchestrator.ts` (~400 lines) with these changes:

| Current | New |
|---------|-----|
| `withRalph({ stepFn: () => analyzeContract(...) })` | `withRalphAgent({ agent: createAnalyzeContractAgent(), buildUserMessage: ... })` |
| Step functions build their own prompts | Orchestrator builds user message, agent's dynamic instructions handle system prompt |
| `complete()` calls via `src/llm/client.ts` | `run()` calls via `@openai/agents` |
| Flat output → manual split to nested | Nested output directly from agent |
| `PipelineOptions` type | Same type, reused from `src/pipeline/orchestrator.ts` |
| `PipelineResult` type | Same type, reused |

**Pre-fetch helper** called before each step:
```typescript
async function prefetchStepContext(stepName: string, pctx: PipelineContext): Promise<void> {
  // RAG: extractRagKeywords() + getDocContext()
  // Corrections: getCorrectionsContext()
  // Clarification: getClarificationAnswerForStep() + formatClarificationAnswerForPrompt()
  // Results stored on pctx.ragContext / pctx.correctionsContext / pctx.clarificationContext
}
```

**Step sequence** (identical to current):
1. Analyze Contract (Ralph-wrapped)
2. Match Golden Use Cases (pure code, reused directly)
3. Design Subscription (Ralph-wrapped, dynamic agent)
4. Build Contracts/Orders (Ralph-wrapped)
5. Build Billings (Ralph-wrapped)
6. Build Rev Rec Waterfall (Ralph-wrapped)
7. Summarize (no Ralph)

**Partial rerun**: Same pattern -- `options.previousResult` pre-populates `pctx.result`, each step checks `if (!pctx.result.X)` before running.

**Clarification pause/resume**: Same pattern -- returns `PipelineClarificationPause`, API route serializes to DB, resume passes `previousResult` + `clarificationAnswers` + `ralphState`.

---

## Phase 6: API Integration & Feature Flag

**Files to modify:**

1. **`apps/web/app/api/analyze/route.ts`** -- Feature flag switch
   ```typescript
   const USE_AGENTS = process.env.USE_AGENTS_PIPELINE === 'true';

   async function getRunPipelineFn() {
     if (USE_AGENTS) {
       const { runAgentsPipeline } = await import('@zuca/pipeline-agents');
       return runAgentsPipeline;
     }
     const { runPipeline } = await import('@zuca/pipeline');
     return runPipeline;
   }
   ```
   The function signature is identical (`(input, options) => Promise<PipelineResult>`), so the rest of the route stays unchanged.

2. **`apps/web/app/api/sessions/[id]/clarify/route.ts`** -- Same pattern for resume
3. **`apps/web/app/api/sessions/[id]/edit/route.ts`** -- Same pattern for field-level reruns
4. **`apps/web/app/api/sessions/[id]/regenerate/route.ts`** -- Same pattern for full reruns

**No changes needed to:**
- `/api/sessions/[id]/follow-up/route.ts` -- Works with `ZucaOutput` regardless of pipeline
- `/api/sessions/[id]/patch/route.ts` -- Works with `ZucaOutput` regardless of pipeline
- `src/pipeline/follow-up.ts` -- Independent of pipeline implementation
- `src/pipeline/patch.ts` -- Independent of pipeline implementation
- All UI components -- They consume `ZucaOutput`, which has identical shape

---

## Phase 7: Index & Re-exports

**File to create**: `src/pipeline-agents/index.ts`

```typescript
export { runAgentsPipeline } from './orchestrator';
// Re-export shared types from current pipeline (no duplication)
export type { PipelineOptions, PipelineResult, PipelineClarificationPause } from '../pipeline/orchestrator';
export { isPipelineClarificationPause, createClarificationState } from '../pipeline/orchestrator';
// Re-export follow-up and patch (unchanged, work with both pipelines)
export { processFollowUp } from '../pipeline/follow-up';
export { applyPatch, getAffectedSteps } from '../pipeline/patch';
```

---

## What Gets Reused vs Rebuilt

| Component | Status |
|-----------|--------|
| Prompts (`src/llm/prompts/*.md`) | **Reused** -- loaded via `loadPrompt()` in dynamic instructions |
| RAG (`src/rag/`) | **Reused** -- called by orchestrator, injected via context |
| Self-learning corrections (`src/self-learn/injector/`) | **Reused** -- called by orchestrator, injected via context |
| Golden data (`src/data/loader.ts`) | **Reused** -- loaded once by orchestrator |
| Match Golden Use Cases (pure code step) | **Reused** -- called directly by orchestrator |
| Ralph config (`src/pipeline/ralph/config.ts`) | **Reused** |
| Ralph context builder (`src/pipeline/ralph/context-builder.ts`) | **Reused** |
| Types (`src/types/`) | **Reused** -- new Zod schemas extend/reference existing ones |
| Follow-up chat (`src/pipeline/follow-up.ts`) | **Reused unchanged** -- operates on `ZucaOutput` |
| Output patching (`src/pipeline/patch.ts`) | **Reused unchanged** -- operates on `ZucaOutput` |
| FIELD_DEPENDENCIES (edit route) | **Reused unchanged** -- same step output keys |
| OUTPUT_DEPENDENCIES (patch route) | **Reused unchanged** -- same output structure |
| All UI components | **No changes** -- consume `ZucaOutput` |
| LLM client (`src/llm/client.ts`) | **Not used** by new pipeline (SDK handles LLM calls) |
| Step functions (`src/pipeline/steps/*.ts`) | **Not used** by new pipeline (replaced by agents) |
| Orchestrator (`src/pipeline/orchestrator.ts`) | **Not used** by new pipeline (replaced) |
| Ralph wrapper (`src/pipeline/ralph/wrapper.ts`) | **Replaced** by `src/pipeline-agents/ralph.ts` |

---

## Verification Plan

1. **Typecheck**: `npm run typecheck` after each phase
2. **Unit tests**: New test file `tests/pipeline-agents/orchestrator.test.ts` mirroring existing pipeline tests
3. **Integration test**: Run both pipelines on the same input, compare output structure
4. **Manual E2E**:
   - Set `USE_AGENTS_PIPELINE=true` in `.env`
   - Run `npm run dev`, submit a use case through the UI
   - Verify full pipeline completes with all steps populated
   - Test clarification flow (Ralph asks a question, answer it, pipeline resumes)
   - Test field-level edit (change billing_period, verify only affected steps rerun)
   - Test follow-up chat ("change the billing period to Quarterly", verify suggested edit appears, apply it)
   - Test full regenerate
5. **Typecheck again**: `npm run typecheck` before any commit
6. **Test suite**: `npm run test:run` passes
