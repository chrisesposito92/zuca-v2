# Self-Learning Pipeline System

An automated feedback loop where the ZUCA pipeline learns from its mistakes through LLM-based evaluation and correction injection.

## Overview

The self-learning system enables the pipeline to:
1. **Test cases** run through the pipeline
2. **LLM judge** evaluates outputs against behavioral criteria
3. **Corrections** are stored when outputs fail
4. **Few-shot examples** are injected on future runs
5. **Prompt improvements** suggested when patterns emerge

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Test Suites   │────▶│   Evaluation    │────▶│   Corrections   │
│   (YAML)        │     │   Engine        │     │   Store         │
└─────────────────┘     │   (LLM Judge)   │     │  (JSON/Postgres)│
                        └────────┬────────┘     └────────┬────────┘
                                 │                       │
                                 ▼                       ▼
                        ┌─────────────────┐     ┌─────────────────┐
                        │   Pattern       │◀────│   Few-Shot      │
                        │   Analysis      │     │   Injector      │
                        └────────┬────────┘     └────────┬────────┘
                                 │                       ▼
                                 ▼               ┌─────────────────┐
                        ┌─────────────────┐     │   Pipeline      │
                        │   Prompt        │────▶│   Steps         │
                        │   Evolution     │     └─────────────────┘
                        └─────────────────┘
```

## CLI Commands

```bash
# Run evaluation suite
npm run cli -- evaluate [--suite <name>] [-m <model>] [--step <step>]

# Manage corrections
npm run cli -- corrections list [--step <name>]
npm run cli -- corrections summary [--step <name>]

# (Phase 4) Self-improve: evaluate + apply learnings
npm run cli -- self-improve [--iterations N] [--auto-apply]

# (Phase 4) Manage prompt evolution
npm run cli -- prompts analyze [--step <name>]
npm run cli -- prompts approve <id>
```

## File Structure

```
src/self-learn/
├── index.ts                 # Main exports
├── types.ts                 # Shared types (Correction, Criterion, etc.)
├── evaluation/              # ✅ Phase 2
│   ├── index.ts             # Evaluation runner ✅
│   ├── runner.ts            # Test execution ✅
│   └── test-suites.ts       # Test suite loader ✅
├── judge/                   # ✅ Phase 2
│   └── index.ts             # LLM judge with evaluateOutput() ✅
├── corrections/
│   ├── index.ts             # Dual backend router ✅
│   ├── types.ts             # Correction types ✅
│   ├── json-backend.ts      # Local JSON storage ✅
│   └── postgres-backend.ts  # (Phase 4) Production Postgres
├── criteria/
│   └── index.ts             # YAML criteria loader ✅
├── injector/                # ✅ Phase 3
│   └── index.ts             # Few-shot injection ✅
└── evolution/               # (Phase 4)
    └── index.ts             # Pattern analysis + suggestions

src/llm/prompts/
└── self-learn-judge.md      # ✅ Judge system prompt

data/
├── evaluation-criteria/     # Behavioral rules (YAML)
│   ├── analyze-contract.yaml
│   ├── design-subscription.yaml
│   ├── contracts-orders.yaml
│   ├── billings.yaml
│   ├── revrec-waterfall.yaml
│   └── summarize.yaml
├── test-suites/             # Auto-generated from golden use cases
│   └── golden-scenarios.yaml
└── corrections-index.json   # Local corrections store
```

## Current Status

### Phase 1: Foundation ✅ (Complete)
- [x] Create `src/self-learn/` directory structure
- [x] Implement correction types (`types.ts`)
- [x] Implement JSON backend for corrections (no embeddings yet)
- [x] Implement YAML criteria loader
- [x] Create CLI skeleton (`evaluate`, `corrections list/summary`)
- [ ] Write evaluation criteria for ALL pipeline steps (6 YAML files)
- [x] Create `docs/FEATURE-SELF-LEARNING.md`

### Phase 2: Evaluation Engine ✅ (Complete)
- [x] Create judge prompt (`self-learn-judge.md`)
- [x] Implement `evaluateOutput()` with structured output
- [x] Implement evaluation runner
- [x] Add correction generation from failures
- [ ] Add embeddings to corrections (reuse `src/rag/embeddings.ts`) - Deferred to Phase 3
- [x] Create test suite format and loader
- [x] Create sample test suite (`golden-scenarios.yaml`)

### Phase 3: Few-Shot Injection ✅ (Complete)
- [x] Implement `getCorrectionsContext()` function
- [x] Implement correction formatter for prompts
- [x] Modify `build-billings.ts` to inject corrections
- [x] Modify `build-contracts-orders.ts` to inject corrections
- [x] Modify `design-subscription.ts` to inject corrections
- [x] Track `times_applied` when corrections are used
- [ ] Full effectiveness tracking (did correction help?) - Deferred to Phase 4

### Phase 4: Prompt Evolution ✅ (Complete)
- [x] Implement pattern frequency analysis (`analyzePatterns()`)
- [x] Implement prompt suggestion generation (`generatePromptSuggestion()`)
- [x] Add `prompts analyze` CLI command
- [x] Add `prompts suggest/list/approve/reject` CLI commands
- [x] Add `self-improve` CLI command
- [ ] Implement Postgres backend for corrections - Deferred to Phase 5
- [ ] Add embeddings to corrections (semantic search) - Deferred to Phase 5
- [ ] Full effectiveness tracking (pass correction IDs through pipeline) - Deferred to Phase 5

### Phase 5: Polish & Scale (In Progress)
- [x] Implement Postgres backend for corrections (`postgres-backend.ts`)
- [x] Add embeddings to corrections for semantic search (pgvector with HNSW index)
- [x] Database schema for corrections and prompt_suggestions tables
- [ ] Full effectiveness tracking (pass correction IDs through pipeline)
- [ ] Add criteria for all pipeline steps
- [ ] Build test suite from golden use cases
- [ ] Add CI integration option
- [ ] Performance optimization
- [ ] Complete documentation

## Evaluation Criteria Format (YAML)

Criteria files define behavioral rules for each pipeline step:

```yaml
# data/evaluation-criteria/contracts-orders.yaml
name: contracts-orders-criteria
version: "1.0"
step: contracts_orders
description: Rules for contracts/orders table generation

criteria:
  - id: CO-001
    name: price-step-up-segments
    description: Each pricing period must appear as separate line
    severity: high
    patterns: [step-up, ramp, introductory, promotional]
    check:
      type: behavioral
      rule: |
        If input has multiple price periods (e.g., intro pricing, ramps),
        output must have one row per price period with distinct dates and amounts.
    examples:
      passing:
        - scenario: "3 months @ $15, then 9 months @ $20"
          expected: "Two lines: $45 for 3 months, $180 for 9 months"
      failing:
        - scenario: "3 months @ $15, then 9 months @ $20"
          incorrect: "Single line for $225 total"
          why: "Should be 2 lines with distinct dates and amounts per period"

  - id: CO-002
    name: date-alignment
    description: Revenue dates must match service period
    severity: high
    patterns: [service period, recognition window]
    check:
      type: behavioral
      rule: |
        Revenue Start Date and Revenue End Date must match the
        actual service period for each charge segment.
```

## Correction Schema

Corrections store learned fixes from evaluation failures:

```typescript
interface Correction {
  id: string;
  test_case_id: string;
  step_name: string;
  issue_type: 'missing_field' | 'wrong_calculation' | 'logic_error' |
              'format_error' | 'behavioral_violation' | 'structural_error';
  pattern: string;                    // Pattern that triggers this correction
  pattern_embedding?: number[];       // (Phase 2) For semantic search

  input_summary: string;              // Brief description of input
  incorrect_output?: unknown;         // What was produced
  expected_behavior: string;          // What should happen
  correction: string;                 // How to fix it
  example_fix?: unknown;              // Example correct output

  criteria_id?: string;               // Link to criterion that caught it
  confidence: number;                 // 0-1 confidence score
  times_applied: number;              // Usage tracking
  success_rate: number;               // Effectiveness tracking

  created_at: string;
  updated_at: string;
}
```

## Database Schema (Postgres - Phase 4)

```sql
-- Corrections table
CREATE TABLE corrections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_case_id VARCHAR(100) NOT NULL,
    step_name VARCHAR(50) NOT NULL,
    issue_type VARCHAR(50) NOT NULL,
    pattern VARCHAR(255),
    pattern_embedding vector(1536),
    input_summary TEXT NOT NULL,
    incorrect_output JSONB,
    expected_behavior TEXT NOT NULL,
    correction TEXT NOT NULL,
    example_fix JSONB,
    criteria_id VARCHAR(100),
    confidence FLOAT DEFAULT 1.0,
    times_applied INT DEFAULT 0,
    success_rate FLOAT DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Prompt suggestions table
CREATE TABLE prompt_suggestions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    step_name VARCHAR(50) NOT NULL,
    pattern VARCHAR(255) NOT NULL,
    occurrence_count INT DEFAULT 1,
    suggested_update TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Critical Files to Modify (Future Phases)

| File | Change |
|------|--------|
| `src/pipeline/steps/build-contracts-orders.ts` | Add corrections injection to `buildUserMessage()` |
| `src/pipeline/steps/build-billings.ts` | Add corrections injection to `buildUserMessage()` |
| `src/pipeline/steps/design-subscription.ts` | Add corrections injection to `buildUserMessage()` |
| `src/cli/index.ts` | Register new self-learn commands (Done ✅) |
| `src/llm/prompts/index.ts` | Add `SELF_LEARN_JUDGE` prompt |
| `apps/web/lib/schema.sql` | Add corrections and prompt_suggestions tables |

## Key Design Decisions

1. **Dual Backend**: JSON for local dev, Postgres for production (matching RAG pattern)
2. **Behavioral Criteria**: Rules focus on behavior, not exact output matching
3. **Semantic Search**: Corrections retrieved by embedding similarity to input (Phase 2)
4. **Injection Point**: User message augmentation (simplest, most flexible)
5. **Manual Approval**: Prompt suggestions require human approval by default

## Success Metrics

- Evaluation suite passes without manual prompt fixes
- Correction hit rate > 70% (relevant corrections found)
- Correction effectiveness > 50% (when applied, issue resolved)
- Prompt suggestions accepted > 60%

## Dependencies

- Existing: OpenAI embeddings (`src/rag/embeddings.ts`)
- Existing: LLM client (`src/llm/client.ts`)
- Existing: Commander.js CLI patterns
- New: `yaml` package for criteria parsing ✅

## Usage Examples

### Running Evaluation (Phase 2)

```bash
# Evaluate all steps with default test suite
npm run cli -- evaluate

# Evaluate specific step
npm run cli -- evaluate --step contracts_orders

# Use specific model for evaluation
npm run cli -- evaluate -m gemini-3-pro-preview
```

### Managing Corrections

```bash
# List all stored corrections
npm run cli -- corrections list

# List corrections for specific step
npm run cli -- corrections list --step contracts_orders

# Show pattern statistics
npm run cli -- corrections summary

# Show stats for specific step
npm run cli -- corrections summary --step billings
```

### Self-Improvement Loop (Phase 4)

```bash
# Run one iteration of self-improvement
npm run cli -- self-improve

# Run multiple iterations
npm run cli -- self-improve --iterations 3

# Auto-apply suggestions above threshold
npm run cli -- self-improve --auto-apply
```
