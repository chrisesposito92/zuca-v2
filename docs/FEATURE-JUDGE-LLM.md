# Feature: Judge LLM Validation Step

## Overview

The Judge LLM is a validation layer inserted after each LLM step in the analyze pipeline. It reviews structured outputs, identifies errors, and applies corrections when highly confident. This provides a quality gate without significantly impacting latency.

### Key Characteristics

| Aspect | Design Choice |
|--------|---------------|
| **Model** | `gemini-3-flash-preview` (fast, ~1-2s per call) |
| **Integration** | Standalone (separate from self-learning system) |
| **Blocking** | Never blocks pipeline - always passes through |
| **Change Scope** | Errors + quality improvements |
| **Confidence Threshold** | Configurable (default 0.9) |

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Original Step  │────▶│   Judge LLM     │────▶│  Final Output   │
│  (gpt-5.2)      │     │  (gemini-flash) │     │  (same schema)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │  Low confidence │
                        │  → Pass through │
                        │  → Log details  │
                        └─────────────────┘
```

### Pipeline Steps with Judge

| Step | Judge Enabled | Notes |
|------|:-------------:|-------|
| analyze-contract | ✅ | Contract intel + capabilities |
| match-golden-use-cases | ❌ | Pure code matching (no LLM) |
| design-subscription | ✅ | Subscription spec + POB mapping |
| build-contracts-orders | ✅ | Orders table (runs in parallel) |
| build-billings | ✅ | Billing schedule (runs in parallel) |
| build-revrec-waterfall | ✅ | Revenue recognition waterfall |
| summarize | ❌ | Low value to validate |

---

## Configuration

### Environment Variable

```bash
# Master kill switch - overrides all YAML settings
JUDGE_ENABLED=true|false
```

### YAML Configuration

**File:** `config/judge.yaml`

```yaml
version: "1.0"
enabled: true

defaults:
  model: "gemini-3-flash-preview"
  confidence_threshold: 0.9       # Only apply changes above this
  timeout_ms: 30000               # 30 second timeout
  reasoning_effort: "low"         # Keep it fast

steps:
  analyze_contract:
    enabled: true
    confidence_threshold: 0.85    # Slightly more lenient

  design_subscription:
    enabled: true

  contracts_orders:
    enabled: true
    confidence_threshold: 0.95    # Extra conservative for orders

  billings:
    enabled: true

  revrec_waterfall:
    enabled: true

  summarize:
    enabled: false                # Skip summary validation
```

### Configuration Priority

1. `JUDGE_ENABLED` env var (if set, overrides everything)
2. Step-specific settings in `steps:` section
3. Global `defaults:` section
4. Hardcoded defaults in code

---

## How It Works

### Core Function: `withJudge<T>()`

```typescript
import { withJudge } from './pipeline/judge';

// After any LLM step:
const judgeResult = await withJudge(
  'analyze_contract',           // Step name
  stepOutput,                   // Original output to validate
  contractAnalysisJsonSchema,   // JSON schema for structured output
  inputContext                  // Summary of input for context
);

// Use the (potentially corrected) output
result.contract_intel = judgeResult.output.contractIntel;
```

### Judge Decision Flow

```
1. Check JUDGE_ENABLED env var
   └─ If false → return original output immediately

2. Load step config from YAML
   └─ If step disabled → return original output

3. Call judge LLM with:
   - System prompt (validation guidelines)
   - Original output as JSON
   - Input context for reference
   - Wrapped schema (original + change metadata)

4. Evaluate response:
   └─ If confidence >= threshold → apply corrections
   └─ If confidence < threshold → log but keep original
   └─ If error/timeout → log error, keep original
```

### Output Structure

The judge internally produces:

```typescript
interface JudgeEvaluation<T> {
  corrected_output: T;           // Same schema as original step
  made_changes: boolean;
  changes: Array<{
    field: string;               // Path to changed field
    original: unknown;           // Original value
    corrected: unknown;          // New value
    confidence: number;          // 0-1 confidence score
    reasoning: string;           // Why the change was made
  }>;
  validation_passed: boolean;    // Overall quality assessment
  overall_confidence: number;    // Average confidence
  notes?: string;                // Additional observations
}
```

The wrapper returns:

```typescript
interface JudgeWrapperResult<T> {
  output: T;                     // Final output (corrected or original)
  judgeApplied: boolean;         // Whether corrections were applied
  judgeDetails?: {...};          // Full evaluation details
  judgeError?: string;           // Error if judge failed
  judgeDurationMs: number;       // Latency tracking
}
```

---

## File Structure

```
src/pipeline/judge/
├── index.ts          # Public exports
├── types.ts          # TypeScript types and Zod schemas
├── config.ts         # YAML config loader
└── wrapper.ts        # withJudge<T>() implementation

src/llm/prompts/
└── judge-llm.md      # Judge system prompt

config/
└── judge.yaml        # Configuration file
```

---

## Failure Modes

The judge is designed to **never block the pipeline**:

| Scenario | Behavior |
|----------|----------|
| Judge times out (>30s) | Return original, log timeout error |
| Judge returns malformed output | Return original, log parse error |
| Confidence below threshold | Return original, log potential issues |
| Judge LLM unavailable | Return original, log connection error |
| Config file missing | Use hardcoded defaults, log warning |

---

## Observability

### Debug Logging

When `DEBUG=true`, the judge logs:

```
[Judge] Running for step: analyze_contract
[Judge] Completed: {
  madeChanges: true,
  changeCount: 2,
  confidence: 0.92,
  validationPassed: true,
  durationMs: 1847
}
[Judge] Applying 2 changes to analyze_contract
```

Or when not applying:

```
[Judge] Found changes but confidence (0.78) below threshold (0.9), not applying
```

### Metrics

- `judgeDurationMs` - Time taken by judge call
- `judgeApplied` - Boolean flag for tracking application rate
- Change count and types for quality monitoring

---

## Implementation Roadmap

### Phase 1: Foundation
- [ ] Create `src/pipeline/judge/types.ts`
- [ ] Create `src/pipeline/judge/config.ts`
- [ ] Create `config/judge.yaml`
- [ ] Create `src/llm/prompts/judge-llm.md`
- [ ] Register prompt in `src/llm/prompts/index.ts`

### Phase 2: Core Logic
- [ ] Create `src/pipeline/judge/wrapper.ts`
- [ ] Create `src/pipeline/judge/index.ts`
- [ ] Export JSON schemas from step files:
  - [ ] `analyze-contract.ts`
  - [ ] `design-subscription.ts`
  - [ ] `build-contracts-orders.ts`
  - [ ] `build-billings.ts`
  - [ ] `build-revrec-waterfall.ts`

### Phase 3: Integration
- [ ] Update `orchestrator.ts` with judge calls
- [ ] Handle parallel steps (contracts_orders + billings)
- [ ] Add timing metrics

### Phase 4: Testing
- [ ] Unit tests for wrapper function
- [ ] Config loading tests
- [ ] Timeout and error handling tests
- [ ] Integration test with pipeline

---

## Usage Examples

### Enable Judge Globally

```bash
# In .env or shell
JUDGE_ENABLED=true
```

### Disable Judge for Specific Step

```yaml
# config/judge.yaml
steps:
  billings:
    enabled: false
```

### Adjust Confidence Threshold

```yaml
# config/judge.yaml
steps:
  contracts_orders:
    confidence_threshold: 0.95  # More conservative
```

### Override Model for a Step

```yaml
# config/judge.yaml
steps:
  design_subscription:
    model: "gpt-4.1"  # Use a different model
```

---

## Design Decisions

### Why Gemini Flash?

- **Speed**: ~1-2 second response time vs 3-5s for larger models
- **Cost**: Significantly cheaper per token
- **Accuracy**: Sufficient for validation/review tasks
- **Parallelism**: Can run alongside pipeline without major latency impact

### Why Separate from Self-Learning?

The existing self-learning system focuses on:
- Storing corrections for future training
- Injecting past mistakes as contrastive examples
- Building evaluation datasets

The Judge LLM focuses on:
- Real-time validation during inference
- Immediate corrections (not stored)
- Quality gate before downstream steps

Keeping them separate:
- Simpler implementation
- No risk of feedback loops
- Clearer responsibilities
- Can be enabled/disabled independently

### Why Never Block?

Production reliability is prioritized over validation strictness:
- Partial results are often useful
- Users can see and correct issues manually
- Logging captures all findings for review
- Prevents cascading failures

---

## Future Enhancements

1. **Step-specific prompts**: Custom validation rules per step
2. **Correction persistence**: Optional mode to store high-confidence corrections
3. **Quality metrics dashboard**: Track judge application rates over time
4. **A/B testing mode**: Compare outputs with/without judge
5. **Human review queue**: Flag low-confidence items for manual review
