# Self-Learning System Enhancement Ideas

This document captures potential improvements to the ZUCA v2 self-learning system. Use this as a reference when planning future development.

**Current System Overview:** See `docs/FEATURE-SELF-LEARNING.md` for the existing implementation.

---

## Critical Bug Fix (2024-12-30)

**Issue:** Corrections were only being generated for `billings` step.

**Root Cause:** Criteria file naming mismatch:
- Files used hyphens: `analyze-contract.yaml`, `design-subscription.yaml`
- Step names use underscores: `analyze_contract`, `design_subscription`
- Only `billings.yaml` and `summarize.yaml` matched their step names

**Fix Applied:**
1. Renamed all criteria files to use underscores (matching step names)
2. Added `findCriteriaFile()` function in `src/self-learn/criteria/index.ts` that tries both naming conventions

**Files Changed:**
- `data/evaluation-criteria/*.yaml` - renamed to use underscores
- `src/self-learn/criteria/index.ts` - added name normalization

---

## Quick Reference: Priority Matrix

| # | Enhancement | Impact | Effort | Status |
|---|-------------|--------|--------|--------|
| 1 | [Complete Step Injection](#1-complete-step-injection) | High | Low | Not Started |
| 2 | [Contrastive Examples](#2-contrastive-examples) | High | Low | Not Started |
| 3 | [Semantic Deduplication](#3-semantic-deduplication--clustering) | High | Medium | Not Started |
| 4 | [Real-Time User Feedback](#10-real-time-user-feedback-loop) | High | Medium | Not Started |
| 5 | [Effectiveness-Based Pruning](#6-correction-confidence-decay--pruning) | Medium | Low | Not Started |
| 6 | [Auto-Apply Prompt Suggestions](#1-complete-step-injection) | High | Medium | Not Started |
| 7 | [Active Learning](#4-active-learning-uncertainty-sampling) | Medium | Medium | Not Started |
| 8 | [Synthetic Test Generation](#5-synthetic-test-case-generation) | Medium | Medium | Not Started |
| 9 | [Multi-Judge Ensemble](#7-multi-judge-ensemble) | Medium | Medium | Not Started |
| 10 | [Step-Specific Retrieval](#8-step-specific-retrieval-tuning) | Medium | Low | Not Started |
| 11 | [Correction Lineage](#9-correction-provenance--lineage) | Low | Medium | Not Started |
| 12 | [Hierarchical Criteria](#11-hierarchical-criteria) | Medium | Medium | Not Started |
| 13 | [Multiple Injection Strategies](#12-correction-injection-strategies) | High | High | Not Started |
| 14 | [Pattern-to-Prompt Mapping](#13-pattern-to-prompt-mapping) | Medium | Medium | Not Started |
| 15 | [Metrics Dashboard](#14-metrics-dashboard) | Medium | Medium | Not Started |

---

## Category A: Complete Existing Implementation

These close gaps in the current system with minimal new architecture.

### 1. Complete Step Injection

**Problem:** Only 3 of 6 pipeline steps have correction injection integrated.

**Current State:**
- ✅ `build-billings.ts` - Has injection
- ✅ `build-contracts-orders.ts` - Has injection
- ✅ `design-subscription.ts` - Has injection
- ❌ `analyze-contract.ts` - Missing
- ❌ `build-revrec-waterfall.ts` - Missing
- ❌ `summarize.ts` - Missing

**Implementation:**

Add to each missing step:

```typescript
// In analyze-contract.ts (and others)
import { getCorrectionsContext } from '@zuca/self-learn/injector';

// Inside the step function, before LLM call:
const correctionsResult = await getCorrectionsContext({
  stepName: 'analyze_contract',  // Match the step name in criteria
  inputSummary: [
    `Customer: ${input.customer_name}`,
    `Use Case: ${input.use_case_description?.substring(0, 300)}`,
    `Terms: ${input.terms_months} months`,
    `Billing: ${input.billing_period}`,
  ].join('\n'),
});

// Inject into the user message
const userMessage = buildUserMessage(input, correctionsResult.context);
```

**Effort:** ~1 hour per step (3 hours total)

**Files to modify:**
- `src/pipeline/steps/analyze-contract.ts`
- `src/pipeline/steps/build-revrec-waterfall.ts`
- `src/pipeline/steps/summarize.ts`

---

### 1b. Auto-Apply Approved Prompt Suggestions

**Problem:** Prompt suggestions are generated and approved, but must be manually applied to prompt files.

**Current State:**
- Suggestions stored in `prompt_suggestions` table with status: `pending` → `approved` → `applied`
- No automation to actually modify prompt files

**Implementation:**

```typescript
// src/self-learn/evolution/apply-suggestion.ts

import { readFile, writeFile } from 'fs/promises';
import { PROMPTS, getPromptPath } from '@zuca/llm/prompts';

interface ApplyResult {
  success: boolean;
  backupPath?: string;
  error?: string;
}

export async function applyPromptSuggestion(
  suggestionId: string
): Promise<ApplyResult> {
  const suggestion = await getSuggestion(suggestionId);
  if (suggestion.status !== 'approved') {
    return { success: false, error: 'Suggestion must be approved first' };
  }

  const promptPath = getPromptPath(suggestion.step_name);
  const currentContent = await readFile(promptPath, 'utf-8');

  // Create backup with timestamp
  const backupPath = `${promptPath}.backup.${Date.now()}`;
  await writeFile(backupPath, currentContent);

  // Parse suggestion.suggested_update for placement instructions
  // Format: "PLACEMENT: after '## Section Name'\nCONTENT:\n..."
  const newContent = insertSuggestion(currentContent, suggestion.suggested_update);

  await writeFile(promptPath, newContent);
  await updateSuggestionStatus(suggestionId, 'applied');

  return { success: true, backupPath };
}

export async function rollbackPromptSuggestion(
  suggestionId: string,
  backupPath: string
): Promise<void> {
  const suggestion = await getSuggestion(suggestionId);
  const promptPath = getPromptPath(suggestion.step_name);
  const backupContent = await readFile(backupPath, 'utf-8');

  await writeFile(promptPath, backupContent);
  await updateSuggestionStatus(suggestionId, 'approved'); // Revert to approved
}
```

**CLI Commands:**
```bash
npm run cli prompts apply <id>      # Apply approved suggestion
npm run cli prompts rollback <id>   # Rollback to backup
npm run cli prompts history         # Show applied suggestions with backups
```

**Effort:** ~4 hours

**Files to create/modify:**
- `src/self-learn/evolution/apply-suggestion.ts` (new)
- `src/cli/commands/prompts.ts` (add apply/rollback commands)

---

### 1c. Close Effectiveness Tracking Loop

**Problem:** `success_rate` is tracked but not fully connected to evaluation results.

**Current State:**
- `times_applied` incremented when correction injected
- `success_rate` calculation exists but isn't reliably updated

**Implementation:**

```typescript
// In evaluation/runner.ts, after evaluating a step:

async function updateCorrectionEffectiveness(
  runId: string,
  stepName: string,
  passed: boolean
): Promise<void> {
  // Get corrections that were injected for this step in this run
  const appliedCorrections = getAppliedCorrectionsForRun(runId, stepName);

  for (const correctionId of appliedCorrections) {
    const correction = await getCorrection(correctionId);

    // Update success rate using exponential moving average
    const alpha = 0.3; // Weight for new observation
    const newSuccessRate = passed ? 1 : 0;
    const updatedRate = alpha * newSuccessRate + (1 - alpha) * correction.success_rate;

    await updateCorrection(correctionId, {
      success_rate: updatedRate,
      updated_at: new Date().toISOString(),
    });
  }
}
```

**Effort:** ~2 hours

---

## Category B: Enhanced Correction Quality

These improve how corrections are stored, retrieved, and presented.

### 2. Contrastive Examples

**Problem:** Corrections only show correct behavior. Research shows contrastive (wrong vs right) examples are more effective for LLM learning.

**Current Format:**
```markdown
## Learned Correction: Ramp pricing segmentation

**Expected Behavior:**
Separate charges for each pricing tier...

**Example Correct Output:**
```json
{ "charges": [...] }
```
```

**Enhanced Format:**
```markdown
## Learned Correction: Ramp pricing segmentation

**What went wrong:**
The model averaged prices across the contract term instead of creating
separate charges for each pricing period.

❌ **INCORRECT** (do not produce output like this):
```json
{
  "charges": [{
    "name": "Wireless Plan",
    "price": 18.75,
    "periods": 12,
    "note": "WRONG: This averages $15 and $20 across 12 months"
  }]
}
```

✅ **CORRECT** (produce output like this):
```json
{
  "charges": [
    {
      "name": "Intro Rate",
      "price": 15.00,
      "periods": 3,
      "note": "First 3 months at introductory price"
    },
    {
      "name": "Standard Rate",
      "price": 20.00,
      "periods": 9,
      "note": "Remaining 9 months at standard price"
    }
  ]
}
```

**Key Difference:** Each distinct price period must be a separate charge,
not averaged together.
```

**Implementation:**

1. Update `Correction` type to include `incorrect_output` (already exists!)
2. Update `formatCorrectionsSection()` in `src/self-learn/injector/index.ts`:

```typescript
function formatSingleCorrection(correction: Correction): string {
  let content = `## Learned Correction: ${correction.pattern}\n\n`;

  content += `**What went wrong:**\n${correction.expected_behavior}\n\n`;

  // Add contrastive example if we have the incorrect output
  if (correction.incorrect_output) {
    content += `❌ **INCORRECT** (do not produce output like this):\n`;
    content += '```json\n';
    content += JSON.stringify(correction.incorrect_output, null, 2);
    content += '\n```\n\n';
  }

  content += `✅ **CORRECT** (produce output like this):\n`;
  content += '```json\n';
  content += JSON.stringify(correction.example_fix, null, 2);
  content += '\n```\n\n';

  content += `**How to fix:** ${correction.correction}\n`;

  return content;
}
```

**Effort:** ~1 hour (data already captured, just formatting change)

**Files to modify:**
- `src/self-learn/injector/index.ts`

---

### 3. Semantic Deduplication & Clustering

**Problem:** Similar corrections stored separately, fragmenting pattern counts and retrieval.

**Example of the problem:**
```
Correction 1: "DS-001: price-step-up-segments"
Correction 2: "step-up pricing not segmented"
Correction 3: "ramp pricing merged incorrectly"
Correction 4: "introductory pricing combined into single charge"
```

These are all the same underlying issue but counted as 4 different patterns.

**Solution:** Cluster semantically similar corrections.

**Implementation:**

```typescript
// src/self-learn/corrections/clustering.ts

interface CorrectionCluster {
  id: string;
  canonicalPattern: string;        // Representative name
  corrections: Correction[];       // All corrections in cluster
  count: number;
  centroidEmbedding: number[];     // Average embedding
  representativeCorrection: Correction;  // Best example
}

export async function clusterCorrections(
  stepName: string,
  similarityThreshold = 0.85
): Promise<CorrectionCluster[]> {
  const corrections = await getCorrectionsForStep(stepName);

  // Get embeddings for all corrections
  const embeddings = await Promise.all(
    corrections.map(c => getEmbedding(c.pattern + ' ' + c.input_summary))
  );

  // Agglomerative clustering
  const clusters: CorrectionCluster[] = [];
  const assigned = new Set<string>();

  for (let i = 0; i < corrections.length; i++) {
    if (assigned.has(corrections[i].id)) continue;

    const cluster: Correction[] = [corrections[i]];
    assigned.add(corrections[i].id);

    for (let j = i + 1; j < corrections.length; j++) {
      if (assigned.has(corrections[j].id)) continue;

      const similarity = cosineSimilarity(embeddings[i], embeddings[j]);
      if (similarity >= similarityThreshold) {
        cluster.push(corrections[j]);
        assigned.add(corrections[j].id);
      }
    }

    clusters.push({
      id: generateId(),
      canonicalPattern: selectCanonicalPattern(cluster),
      corrections: cluster,
      count: cluster.length,
      centroidEmbedding: averageEmbeddings(cluster.map((_, idx) => embeddings[idx])),
      representativeCorrection: selectBestCorrection(cluster),
    });
  }

  return clusters.sort((a, b) => b.count - a.count);
}

function selectBestCorrection(cluster: Correction[]): Correction {
  // Prefer: highest confidence, most times applied, has example_fix
  return cluster.sort((a, b) => {
    if (a.example_fix && !b.example_fix) return -1;
    if (b.example_fix && !a.example_fix) return 1;
    if (a.confidence !== b.confidence) return b.confidence - a.confidence;
    return b.times_applied - a.times_applied;
  })[0];
}
```

**Enhanced Retrieval:**

```typescript
// When searching, use cluster centroids instead of individual corrections
export async function findRelevantClusters(
  query: string,
  stepName: string,
  limit = 3
): Promise<CorrectionCluster[]> {
  const queryEmbedding = await getEmbedding(query);
  const clusters = await getClusteredCorrections(stepName);

  return clusters
    .map(cluster => ({
      ...cluster,
      similarity: cosineSimilarity(queryEmbedding, cluster.centroidEmbedding),
    }))
    .filter(c => c.similarity > 0.3)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);
}
```

**Effort:** ~6 hours

**Files to create:**
- `src/self-learn/corrections/clustering.ts`

**Files to modify:**
- `src/self-learn/corrections/index.ts` (add cluster-aware retrieval)
- `src/self-learn/injector/index.ts` (use clustered corrections)

---

### 4. Active Learning: Uncertainty Sampling

**Problem:** The model might produce correct-looking output by luck. We only learn from failures, missing near-misses.

**Concept:** Identify where the model is uncertain and prioritize those for human review.

**Implementation:**

```typescript
// src/self-learn/active-learning/index.ts

interface UncertaintySignal {
  stepName: string;
  sessionId: string;
  output: unknown;
  signals: {
    judgeConfidence: number;       // From evaluation
    modelSelfAssessment?: number;  // Ask model "how confident are you?"
    outputEntropy?: number;        // Measure output variability
    noveltyScore?: number;         // How different from training examples
  };
  priority: 'review' | 'verify' | 'trusted';
}

export async function assessUncertainty(
  stepName: string,
  input: unknown,
  output: unknown
): Promise<UncertaintySignal> {
  // 1. Ask the model to self-assess
  const selfAssessment = await getSelfAssessment(stepName, input, output);

  // 2. Check novelty against stored corrections
  const noveltyScore = await calculateNovelty(input, stepName);

  // 3. Combine signals
  const combinedScore = (
    selfAssessment * 0.4 +
    noveltyScore * 0.3 +
    // Add other signals...
  );

  return {
    stepName,
    output,
    signals: { modelSelfAssessment: selfAssessment, noveltyScore },
    priority: combinedScore < 0.5 ? 'review' :
              combinedScore < 0.7 ? 'verify' : 'trusted',
  };
}

async function getSelfAssessment(
  stepName: string,
  input: unknown,
  output: unknown
): Promise<number> {
  const prompt = `
You just generated this output for a ${stepName} task.

Input: ${JSON.stringify(input)}
Output: ${JSON.stringify(output)}

On a scale of 0-100, how confident are you that this output is correct?
Consider: completeness, accuracy, edge cases handled.

Respond with just a number.
`;

  const response = await complete(prompt, { model: 'gpt-4o-mini' });
  return parseInt(response) / 100;
}
```

**Integration:**

```typescript
// In pipeline step, after generating output:
const uncertainty = await assessUncertainty(stepName, input, output);

if (uncertainty.priority === 'review') {
  await flagForHumanReview({
    sessionId,
    stepName,
    output,
    reason: 'Low model confidence',
    signals: uncertainty.signals,
  });
}
```

**Effort:** ~8 hours

**Files to create:**
- `src/self-learn/active-learning/index.ts`
- `src/self-learn/active-learning/review-queue.ts`

---

### 5. Synthetic Test Case Generation

**Problem:** Test cases are manually written in YAML. Limited coverage of edge cases.

**Solution:** Use LLM to generate edge cases from existing failures.

**Implementation:**

```typescript
// src/self-learn/test-generation/index.ts

interface GeneratedTestCase {
  id: string;
  name: string;
  description: string;
  input: ZucaInput;
  derivedFrom: {
    type: 'correction' | 'pattern' | 'manual';
    sourceId: string;
  };
  expectedFailurePattern?: string;  // For adversarial tests
  tags: string[];
}

export async function generateEdgeCases(
  correction: Correction,
  count = 3
): Promise<GeneratedTestCase[]> {
  const prompt = `
You are a QA engineer creating test cases for a billing/subscription system.

This system recently failed on this scenario:
- Pattern: ${correction.pattern}
- Input that caused failure: ${correction.input_summary}
- What went wrong: ${correction.expected_behavior}

Generate ${count} DIFFERENT test cases that would test similar edge cases.
Each test case should:
1. Be realistic (use real company names and scenarios)
2. Test the same underlying issue but with variations
3. Include different billing periods, currencies, or term lengths

Return JSON array:
[{
  "name": "Test case name",
  "description": "What this tests",
  "customer_name": "Company name",
  "use_case_description": "Detailed scenario...",
  "terms_months": 12,
  "billing_period": "Monthly",
  "contract_start_date": "01/01/2026",
  "transaction_currency": "USD",
  "tags": ["edge-case", "ramp", "..."]
}]
`;

  const response = await complete<GeneratedTestCase[]>(prompt, {
    model: 'gpt-4o',
    responseFormat: 'json',
  });

  return response.map((tc, i) => ({
    ...tc,
    id: `generated-${correction.id}-${i}`,
    derivedFrom: { type: 'correction', sourceId: correction.id },
  }));
}

export async function generateAdversarialCases(
  pattern: string,
  stepName: string,
  count = 3
): Promise<GeneratedTestCase[]> {
  // Generate cases specifically designed to trigger the failure pattern
  const prompt = `
You are creating adversarial test cases to stress-test a billing system.

Known failure pattern: "${pattern}" in step "${stepName}"

Generate ${count} test cases specifically designed to trigger this failure.
Make them tricky but realistic - the kind of edge cases that catch bugs.
`;
  // ... similar implementation
}
```

**CLI Commands:**
```bash
npm run cli tests generate --from-correction <id>
npm run cli tests generate --from-pattern "ramp pricing" --step billings
npm run cli tests generate --adversarial --pattern "date boundaries"
```

**Effort:** ~6 hours

**Files to create:**
- `src/self-learn/test-generation/index.ts`
- `src/cli/commands/tests.ts`

---

### 6. Correction Confidence Decay & Pruning

**Problem:** Old corrections may become stale. Low-performing corrections add noise.

**Implementation:**

```typescript
// src/self-learn/corrections/maintenance.ts

interface MaintenanceResult {
  decayed: number;
  archived: number;
  promoted: number;
}

export async function runCorrectionMaintenance(): Promise<MaintenanceResult> {
  const corrections = await getAllCorrections();
  const result = { decayed: 0, archived: 0, promoted: 0 };

  for (const correction of corrections) {
    const ageInDays = daysSince(correction.updated_at);

    // Decay unused corrections
    if (ageInDays > 30 && correction.times_applied < 3) {
      const newConfidence = correction.confidence * 0.9;
      await updateCorrection(correction.id, { confidence: newConfidence });
      result.decayed++;
    }

    // Archive ineffective corrections
    if (correction.times_applied >= 10 && correction.success_rate < 0.2) {
      await archiveCorrection(correction.id, {
        reason: 'Low success rate after 10+ applications',
        archivedAt: new Date().toISOString(),
      });
      result.archived++;
    }

    // Promote highly effective corrections
    if (correction.times_applied >= 5 && correction.success_rate > 0.8) {
      await updateCorrection(correction.id, {
        confidence: Math.min(1.0, correction.confidence * 1.1),
      });
      result.promoted++;
    }
  }

  return result;
}

// Schedule to run weekly or after each evaluation suite
```

**Archive vs Delete:**
```typescript
// Archived corrections are moved to a separate table/file
// They can be restored if needed, and provide historical data

interface ArchivedCorrection extends Correction {
  archivedAt: string;
  archiveReason: string;
  finalSuccessRate: number;
  totalApplications: number;
}
```

**CLI Command:**
```bash
npm run cli corrections maintain     # Run maintenance
npm run cli corrections archived     # View archived corrections
npm run cli corrections restore <id> # Restore archived correction
```

**Effort:** ~3 hours

**Files to create:**
- `src/self-learn/corrections/maintenance.ts`

---

## Category C: Advanced Evaluation

These improve how outputs are evaluated.

### 7. Multi-Judge Ensemble

**Problem:** Single LLM judge may have blind spots or biases.

**Solution:** Use multiple judges and require consensus.

**Implementation:**

```typescript
// src/self-learn/judge/ensemble.ts

interface EnsembleConfig {
  judges: Array<{
    model: string;
    weight: number;  // Relative importance
  }>;
  consensusThreshold: number;  // e.g., 0.66 = 2/3 must agree
}

const DEFAULT_ENSEMBLE: EnsembleConfig = {
  judges: [
    { model: 'gpt-4o', weight: 1.0 },
    { model: 'claude-sonnet-4-20250514', weight: 1.0 },
    { model: 'gemini-2.0-flash', weight: 0.8 },
  ],
  consensusThreshold: 0.66,
};

interface EnsembleResult {
  consensus: JudgeResult;
  individualResults: Array<{
    model: string;
    result: JudgeResult;
  }>;
  disagreements: Array<{
    criterionId: string;
    votes: { model: string; passed: boolean; confidence: number }[];
  }>;
  confidence: number;  // Agreement level
}

export async function evaluateWithEnsemble(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: EvaluationCriteria,
  config = DEFAULT_ENSEMBLE
): Promise<EnsembleResult> {
  // Run all judges in parallel
  const results = await Promise.all(
    config.judges.map(async judge => ({
      model: judge.model,
      weight: judge.weight,
      result: await evaluateOutput(stepName, inputSummary, output, criteria, {
        model: judge.model,
      }),
    }))
  );

  // Calculate consensus per criterion
  const consensusEvaluations = criteria.criteria.map(criterion => {
    const votes = results.map(r => ({
      model: r.model,
      weight: r.weight,
      passed: r.result.evaluations.find(e => e.criterion_id === criterion.id)?.passed ?? true,
      confidence: r.result.evaluations.find(e => e.criterion_id === criterion.id)?.confidence ?? 0,
    }));

    const totalWeight = votes.reduce((sum, v) => sum + v.weight, 0);
    const passWeight = votes
      .filter(v => v.passed)
      .reduce((sum, v) => sum + v.weight, 0);

    const passRatio = passWeight / totalWeight;
    const consensusPassed = passRatio >= config.consensusThreshold;

    return {
      criterion_id: criterion.id,
      criterion_name: criterion.name,
      passed: consensusPassed,
      confidence: Math.abs(passRatio - 0.5) * 2,  // Higher when more agreement
      votes,
    };
  });

  // Build consensus result
  const consensus: JudgeResult = {
    overall_pass: consensusEvaluations.every(e => e.passed),
    evaluations: consensusEvaluations.map(e => ({
      criterion_id: e.criterion_id,
      criterion_name: e.criterion_name,
      passed: e.passed,
      confidence: e.confidence,
      explanation: e.passed
        ? 'Consensus: criterion passed'
        : 'Consensus: criterion failed',
      correction: e.passed ? null : mergeCorrectionSuggestions(results, e.criterion_id),
    })),
    overall_notes: `Ensemble evaluation with ${results.length} judges`,
  };

  // Find disagreements (interesting learning signals!)
  const disagreements = consensusEvaluations
    .filter(e => {
      const passCount = e.votes.filter(v => v.passed).length;
      return passCount > 0 && passCount < e.votes.length;
    })
    .map(e => ({
      criterionId: e.criterion_id,
      votes: e.votes,
    }));

  return {
    consensus,
    individualResults: results.map(r => ({ model: r.model, result: r.result })),
    disagreements,
    confidence: consensusEvaluations.reduce((sum, e) => sum + e.confidence, 0) /
                consensusEvaluations.length,
  };
}
```

**Disagreement Analysis:**
```typescript
// Disagreements are valuable - they highlight ambiguous criteria or edge cases
export async function analyzeDisagreements(
  disagreements: EnsembleResult['disagreements']
): Promise<void> {
  for (const d of disagreements) {
    console.log(`Disagreement on ${d.criterionId}:`);
    for (const vote of d.votes) {
      console.log(`  ${vote.model}: ${vote.passed ? 'PASS' : 'FAIL'} (${vote.confidence})`);
    }
    // Consider: flag for human review, or improve criterion definition
  }
}
```

**Effort:** ~6 hours

**Files to create:**
- `src/self-learn/judge/ensemble.ts`

---

### 8. Step-Specific Retrieval Tuning

**Problem:** Same retrieval parameters for all steps, but steps have different needs.

**Implementation:**

```typescript
// src/self-learn/injector/config.ts

interface StepRetrievalConfig {
  limit: number;                    // Max corrections to inject
  minConfidence: number;            // Minimum confidence threshold
  preferRecent: boolean;            // Weight recent corrections higher
  clusterSimilar: boolean;          // Use clustered retrieval
  keyFields: string[];              // Input fields to emphasize in search
  maxTokens: number;                // Limit injection size
}

export const STEP_RETRIEVAL_CONFIG: Record<string, StepRetrievalConfig> = {
  analyze_contract: {
    limit: 3,
    minConfidence: 0.5,
    preferRecent: false,           // Contract analysis is stable
    clusterSimilar: true,
    keyFields: ['use_case_description', 'terms_months'],
    maxTokens: 1500,
  },

  design_subscription: {
    limit: 4,
    minConfidence: 0.5,
    preferRecent: true,            // Subscription design evolves
    clusterSimilar: true,
    keyFields: ['use_case_description', 'billing_period'],
    maxTokens: 2000,
  },

  billings: {
    limit: 5,                      // Most complex step
    minConfidence: 0.6,            // Higher threshold (critical output)
    preferRecent: true,
    clusterSimilar: true,
    keyFields: ['billing_period', 'terms_months', 'use_case_description'],
    maxTokens: 2500,
  },

  contracts_orders: {
    limit: 4,
    minConfidence: 0.5,
    preferRecent: true,
    clusterSimilar: false,         // More varied patterns
    keyFields: ['use_case_description'],
    maxTokens: 2000,
  },

  revrec_waterfall: {
    limit: 3,
    minConfidence: 0.7,            // High accuracy required
    preferRecent: false,           // Rev rec rules are stable
    clusterSimilar: true,
    keyFields: ['is_allocations', 'use_case_description'],
    maxTokens: 1500,
  },

  summarize: {
    limit: 2,                      // Summary is simpler
    minConfidence: 0.5,
    preferRecent: false,
    clusterSimilar: false,
    keyFields: ['customer_name'],
    maxTokens: 1000,
  },
};

// Use in getCorrectionsContext:
export async function getCorrectionsContext(
  context: { stepName: string; inputSummary: string },
  options?: Partial<StepRetrievalConfig>
): Promise<InjectionResult> {
  const config = {
    ...STEP_RETRIEVAL_CONFIG[context.stepName],
    ...options,
  };

  // Apply config to retrieval...
}
```

**Effort:** ~2 hours

**Files to modify:**
- `src/self-learn/injector/index.ts`
- `src/self-learn/injector/config.ts` (new)

---

### 11. Hierarchical Criteria

**Problem:** Cascading failures are confusing. If dates are wrong, don't report 5 downstream failures.

**Implementation:**

```yaml
# data/evaluation-criteria/billings.yaml

name: billings-criteria
version: "2.0"
step: billings
description: Evaluation criteria for billing output with dependencies

criteria:
  # Foundation level - check these first
  - id: BL-000
    name: date-format-consistency
    level: foundation
    severity: critical
    # ... check definition

  - id: BL-001
    name: billing-period-alignment
    level: foundation
    depends_on: []  # No dependencies
    severity: critical

  # Derived level - only check if foundation passes
  - id: BL-002
    name: invoice-amount-accuracy
    level: derived
    depends_on: [BL-001]  # Requires correct periods first
    severity: critical

  - id: BL-003
    name: proration-handling
    level: derived
    depends_on: [BL-001, BL-002]
    severity: high
```

**Evaluation Logic:**

```typescript
// src/self-learn/judge/hierarchical.ts

export async function evaluateHierarchical(
  stepName: string,
  output: unknown,
  criteria: EvaluationCriteria
): Promise<JudgeResult> {
  const evaluated = new Map<string, EvaluationResult>();
  const skipped = new Set<string>();

  // Sort criteria by level (foundation first)
  const sorted = [...criteria.criteria].sort((a, b) => {
    if (a.level === 'foundation' && b.level !== 'foundation') return -1;
    if (b.level === 'foundation' && a.level !== 'foundation') return 1;
    return 0;
  });

  for (const criterion of sorted) {
    // Check if dependencies passed
    const dependenciesMet = (criterion.depends_on || []).every(depId => {
      const depResult = evaluated.get(depId);
      return depResult?.passed === true;
    });

    if (!dependenciesMet) {
      skipped.add(criterion.id);
      evaluated.set(criterion.id, {
        criterion_id: criterion.id,
        criterion_name: criterion.name,
        passed: false,
        confidence: 0,
        explanation: `Skipped: dependency failed (${criterion.depends_on?.join(', ')})`,
        correction: null,
        skipped: true,
      });
      continue;
    }

    // Evaluate this criterion
    const result = await evaluateSingleCriterion(stepName, output, criterion);
    evaluated.set(criterion.id, result);
  }

  return {
    overall_pass: [...evaluated.values()].every(e => e.passed || e.skipped),
    evaluations: [...evaluated.values()],
    overall_notes: skipped.size > 0
      ? `${skipped.size} criteria skipped due to dependency failures`
      : 'All criteria evaluated',
  };
}
```

**Effort:** ~4 hours

**Files to modify:**
- `src/self-learn/types.ts` (add `level`, `depends_on` to criterion type)
- `src/self-learn/judge/index.ts` (add hierarchical evaluation)
- `data/evaluation-criteria/*.yaml` (add dependencies)

---

## Category D: Feedback & Learning Loops

These create new sources of learning signal.

### 10. Real-Time User Feedback Loop

**Problem:** Learning only happens through batch evaluation. Missing production feedback.

**Solution:** Let users mark outputs as correct/incorrect and capture corrections.

**Implementation:**

```typescript
// apps/web/lib/feedback.ts

interface UserFeedback {
  id: string;
  sessionId: string;
  stepName: string;
  rating: 'correct' | 'partially_correct' | 'wrong';
  originalOutput: unknown;
  correctedOutput?: unknown;      // If user provided correction
  notes?: string;
  createdAt: string;
  userId?: string;
}

export async function submitFeedback(
  feedback: Omit<UserFeedback, 'id' | 'createdAt'>
): Promise<void> {
  const id = generateId();

  await db.insert('user_feedback', {
    id,
    ...feedback,
    createdAt: new Date().toISOString(),
  });

  // If user provided correction, create a high-confidence correction
  if (feedback.rating === 'wrong' && feedback.correctedOutput) {
    await storeCorrection({
      test_case_id: `user-feedback-${feedback.sessionId}`,
      step_name: feedback.stepName,
      issue_type: 'user_reported',
      pattern: `User correction: ${feedback.notes || 'output was incorrect'}`,
      input_summary: await getSessionInputSummary(feedback.sessionId),
      incorrect_output: feedback.originalOutput,
      expected_behavior: feedback.notes || 'See corrected output',
      correction: 'User provided correct output',
      example_fix: feedback.correctedOutput,
      confidence: 0.95,  // High confidence - user verified!
    });
  }
}
```

**UI Component:**

```tsx
// apps/web/components/feedback-widget.tsx

export function FeedbackWidget({
  sessionId,
  stepName,
  output
}: FeedbackWidgetProps) {
  const [rating, setRating] = useState<string | null>(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [correctedOutput, setCorrectedOutput] = useState('');

  const handleSubmit = async () => {
    await submitFeedback({
      sessionId,
      stepName,
      rating: rating as any,
      originalOutput: output,
      correctedOutput: correctedOutput ? JSON.parse(correctedOutput) : undefined,
    });
  };

  return (
    <div className="feedback-widget">
      <p>Was this output correct?</p>
      <div className="flex gap-2">
        <Button
          variant={rating === 'correct' ? 'solid' : 'outline'}
          onClick={() => setRating('correct')}
        >
          ✓ Correct
        </Button>
        <Button
          variant={rating === 'partially_correct' ? 'solid' : 'outline'}
          onClick={() => setRating('partially_correct')}
        >
          ~ Partially
        </Button>
        <Button
          variant={rating === 'wrong' ? 'solid' : 'outline'}
          onClick={() => {
            setRating('wrong');
            setShowCorrection(true);
          }}
        >
          ✗ Wrong
        </Button>
      </div>

      {showCorrection && (
        <div className="mt-4">
          <p>What should the output be?</p>
          <Textarea
            value={correctedOutput}
            onChange={e => setCorrectedOutput(e.target.value)}
            placeholder="Paste corrected JSON here..."
          />
        </div>
      )}

      {rating && (
        <Button onClick={handleSubmit} className="mt-4">
          Submit Feedback
        </Button>
      )}
    </div>
  );
}
```

**Database Schema:**
```sql
CREATE TABLE user_feedback (
    id UUID PRIMARY KEY,
    session_id UUID REFERENCES sessions(id),
    step_name VARCHAR(50),
    rating VARCHAR(20),  -- correct | partially_correct | wrong
    original_output JSONB,
    corrected_output JSONB,
    notes TEXT,
    user_id VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_feedback_session ON user_feedback(session_id);
CREATE INDEX idx_feedback_step ON user_feedback(step_name);
CREATE INDEX idx_feedback_rating ON user_feedback(rating);
```

**Effort:** ~8 hours

**Files to create:**
- `apps/web/lib/feedback.ts`
- `apps/web/components/feedback-widget.tsx`
- `apps/web/app/api/feedback/route.ts`

**Files to modify:**
- `apps/web/lib/schema.sql` (add table)
- Result view components (add feedback widget)

---

### 9. Correction Provenance & Lineage

**Problem:** Can't trace where corrections came from or how they evolved.

**Implementation:**

```typescript
// src/self-learn/types.ts - extend Correction type

interface CorrectionLineage {
  source: {
    type: 'evaluation' | 'user_feedback' | 'synthetic' | 'merged';
    testCaseId?: string;
    sessionId?: string;
    parentCorrectionIds?: string[];  // If merged from others
  };
  history: Array<{
    action: 'created' | 'updated' | 'merged' | 'promoted' | 'demoted' | 'archived';
    timestamp: string;
    reason?: string;
    previousValues?: Partial<Correction>;
  }>;
  promptApplication?: {
    suggestionId: string;
    appliedAt: string;
    promptVersion: string;
  };
  supersededBy?: string;  // If replaced by better correction
}

// Add to Correction type
interface Correction {
  // ... existing fields
  lineage: CorrectionLineage;
}
```

**Tracking Functions:**

```typescript
// src/self-learn/corrections/lineage.ts

export async function recordCorrectionEvent(
  correctionId: string,
  event: CorrectionLineage['history'][0]
): Promise<void> {
  const correction = await getCorrection(correctionId);
  correction.lineage.history.push(event);
  await updateCorrection(correctionId, { lineage: correction.lineage });
}

export async function getCorrectionHistory(
  correctionId: string
): Promise<CorrectionLineage['history']> {
  const correction = await getCorrection(correctionId);
  return correction.lineage.history;
}

export async function traceCorrection(
  correctionId: string
): Promise<{
  correction: Correction;
  derivedFrom: Correction[];
  supersededCorrections: Correction[];
  appliedToPrompts: PromptSuggestion[];
}> {
  // Build full trace of correction's lineage and impact
}
```

**Effort:** ~4 hours

**Files to modify:**
- `src/self-learn/types.ts`
- `src/self-learn/corrections/index.ts`
- `apps/web/lib/schema.sql` (add lineage JSONB column)

---

## Category E: Observability & Tooling

### 14. Metrics Dashboard

**Key Metrics to Track:**

```typescript
// src/self-learn/metrics/index.ts

interface SelfLearningMetrics {
  // Correction Health
  totalCorrections: number;
  activeCorrections: number;        // confidence > 0.5
  staleCorrections: number;         // not applied in 30 days
  archivedCorrections: number;
  avgSuccessRate: number;
  avgConfidence: number;

  // Effectiveness
  evaluationPassRate: number;       // % of test cases passing
  passRateTrend: number[];          // Last 10 evaluation runs
  correctionImpact: Array<{
    pattern: string;
    passRateBefore: number;
    passRateAfter: number;
    improvement: number;
  }>;

  // Coverage
  stepsWithInjection: string[];
  stepsWithoutInjection: string[];
  criteriaWithHighFailRate: Array<{
    criterionId: string;
    failRate: number;
  }>;

  // Patterns
  topFailingPatterns: Array<{
    pattern: string;
    count: number;
    stepName: string;
  }>;
  patternTrends: Array<{
    pattern: string;
    countOverTime: number[];
  }>;

  // Suggestions
  pendingSuggestions: number;
  approvedSuggestions: number;
  appliedSuggestions: number;
  rejectedSuggestions: number;
}

export async function collectMetrics(): Promise<SelfLearningMetrics> {
  const corrections = await getAllCorrections();
  const evaluationHistory = await getEvaluationHistory(10);
  const suggestions = await getAllSuggestions();

  // Calculate metrics...
  return {
    totalCorrections: corrections.length,
    activeCorrections: corrections.filter(c => c.confidence > 0.5).length,
    // ... etc
  };
}
```

**Dashboard API:**

```typescript
// apps/web/app/api/self-learn/metrics/route.ts

export async function GET() {
  const metrics = await collectMetrics();
  return Response.json(metrics);
}
```

**Dashboard UI:**

```tsx
// apps/web/app/(main)/self-learn/page.tsx

export default function SelfLearnDashboard() {
  const { data: metrics } = useQuery(['self-learn-metrics'], fetchMetrics);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <h3>Correction Health</h3>
        <Stat label="Active" value={metrics.activeCorrections} />
        <Stat label="Avg Success Rate" value={`${metrics.avgSuccessRate}%`} />
        <Stat label="Stale" value={metrics.staleCorrections} warning />
      </Card>

      <Card>
        <h3>Evaluation Trend</h3>
        <SparklineChart data={metrics.passRateTrend} />
      </Card>

      <Card>
        <h3>Top Failing Patterns</h3>
        <PatternList patterns={metrics.topFailingPatterns} />
      </Card>

      <Card>
        <h3>Pending Suggestions</h3>
        <SuggestionQueue count={metrics.pendingSuggestions} />
      </Card>
    </div>
  );
}
```

**Effort:** ~8 hours

**Files to create:**
- `src/self-learn/metrics/index.ts`
- `apps/web/app/api/self-learn/metrics/route.ts`
- `apps/web/app/(main)/self-learn/page.tsx`
- `apps/web/components/self-learn/` (dashboard components)

---

### 12. Correction Injection Strategies

**Problem:** One-size-fits-all few-shot injection may not be optimal for all error types.

**Solution:** Multiple injection strategies based on error type.

```typescript
// src/self-learn/injector/strategies.ts

type InjectionStrategy =
  | 'few_shot'           // Current approach: examples in prompt
  | 'chain_of_thought'   // Add reasoning steps
  | 'schema_constraint'  // Add to JSON schema
  | 'pre_validation'     // Check input before LLM
  | 'post_validation'    // Fix output after LLM
  | 'retry_with_feedback'; // If wrong, retry with error

interface StrategyConfig {
  strategy: InjectionStrategy;
  applicableTo: IssueType[];
  implementation: (correction: Correction, context: any) => any;
}

const STRATEGIES: StrategyConfig[] = [
  {
    strategy: 'few_shot',
    applicableTo: ['missing_field', 'wrong_format', 'logic_error'],
    implementation: formatAsFewShot,
  },
  {
    strategy: 'chain_of_thought',
    applicableTo: ['wrong_calculation', 'logic_error'],
    implementation: (correction, ctx) => {
      // Add reasoning steps to prompt
      return `
Before generating output, reason through these steps:
1. Identify all distinct pricing periods
2. For each period, calculate: price × quantity × months
3. Verify no averaging across periods
4. ${correction.correction}
`;
    },
  },
  {
    strategy: 'schema_constraint',
    applicableTo: ['wrong_format', 'missing_field'],
    implementation: (correction, ctx) => {
      // Return schema modifications
      return {
        additionalRequired: ['separate_pricing_periods'],
        propertyConstraints: {
          price: { description: 'Must not be an average of multiple prices' },
        },
      };
    },
  },
  {
    strategy: 'post_validation',
    applicableTo: ['wrong_calculation'],
    implementation: (correction, ctx) => {
      // Return validation function
      return (output: any) => {
        if (isAveragedPrice(output)) {
          return splitByPricePeriods(output, ctx.contract);
        }
        return output;
      };
    },
  },
];

export function selectStrategy(correction: Correction): InjectionStrategy {
  const applicable = STRATEGIES.filter(s =>
    s.applicableTo.includes(correction.issue_type)
  );

  // Could use ML to select best strategy based on historical effectiveness
  // For now, use priority order
  return applicable[0]?.strategy || 'few_shot';
}
```

**Effort:** ~10 hours (significant architectural change)

---

### 13. Pattern-to-Prompt Mapping

**Problem:** Suggestions are free-form text. Hard to auto-apply.

**Solution:** Structured mapping of patterns to specific prompt locations.

```typescript
// src/self-learn/evolution/prompt-mapping.ts

interface PromptSection {
  file: string;
  sectionId: string;
  sectionTitle: string;
  startLine: number;
  endLine: number;
  content: string;
}

interface PatternPromptMapping {
  pattern: string;
  affectedSections: PromptSection[];
  suggestedPlacement: 'before' | 'after' | 'replace';
  suggestedContent: string;
}

// Parse prompt files into sections
export async function parsePromptSections(
  promptKey: string
): Promise<PromptSection[]> {
  const content = await getPromptContent(promptKey);
  const lines = content.split('\n');
  const sections: PromptSection[] = [];

  let currentSection: Partial<PromptSection> | null = null;

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      if (currentSection) {
        currentSection.endLine = i - 1;
        currentSection.content = lines
          .slice(currentSection.startLine, i)
          .join('\n');
        sections.push(currentSection as PromptSection);
      }
      currentSection = {
        file: promptKey,
        sectionId: slugify(line.slice(3)),
        sectionTitle: line.slice(3),
        startLine: i,
      };
    }
  });

  return sections;
}

// Map pattern to relevant sections
export async function mapPatternToSections(
  pattern: string,
  stepName: string
): Promise<PatternPromptMapping> {
  const promptKey = stepNameToPromptKey(stepName);
  const sections = await parsePromptSections(promptKey);
  const corrections = await findCorrectionsForPattern(pattern, stepName);

  // Use embeddings to find most relevant sections
  const patternEmbedding = await getEmbedding(pattern);
  const sectionScores = await Promise.all(
    sections.map(async s => ({
      section: s,
      score: cosineSimilarity(
        patternEmbedding,
        await getEmbedding(s.content)
      ),
    }))
  );

  const relevantSections = sectionScores
    .filter(s => s.score > 0.5)
    .sort((a, b) => b.score - a.score)
    .map(s => s.section);

  return {
    pattern,
    affectedSections: relevantSections,
    suggestedPlacement: 'after',
    suggestedContent: generateSuggestionContent(pattern, corrections),
  };
}
```

**Effort:** ~6 hours

---

## Implementation Roadmap

### Phase 1: Quick Wins (1-2 weeks)
1. ✅ Complete step injection (3 hours)
2. ✅ Contrastive examples (1 hour)
3. ✅ Effectiveness-based pruning (3 hours)
4. ✅ Step-specific retrieval config (2 hours)

### Phase 2: Core Improvements (2-4 weeks)
5. Semantic deduplication (6 hours)
6. Auto-apply prompt suggestions (4 hours)
7. Close effectiveness loop (2 hours)
8. Hierarchical criteria (4 hours)

### Phase 3: Feedback Loops (4-6 weeks)
9. User feedback widget (8 hours)
10. Active learning (8 hours)
11. Synthetic test generation (6 hours)

### Phase 4: Advanced (6-8 weeks)
12. Multi-judge ensemble (6 hours)
13. Multiple injection strategies (10 hours)
14. Metrics dashboard (8 hours)
15. Correction lineage (4 hours)

---

## Appendix: Current Files Reference

```
src/self-learn/
├── index.ts                    # Main exports
├── types.ts                    # Type definitions
├── corrections/
│   ├── index.ts               # Correction store API
│   ├── json-backend.ts        # Local JSON storage
│   └── postgres-backend.ts    # Postgres + pgvector
├── criteria/
│   └── index.ts               # Load evaluation criteria
├── judge/
│   └── index.ts               # LLM evaluation
├── evaluation/
│   └── runner.ts              # Test suite orchestration
├── injector/
│   └── index.ts               # Format & inject corrections
└── evolution/
    ├── index.ts               # Pattern analysis
    ├── suggestions-json-backend.ts
    └── suggestions-postgres-backend.ts

data/
├── evaluation-criteria/        # YAML criterion definitions
│   ├── analyze-contract.yaml
│   ├── design-subscription.yaml
│   ├── billings.yaml
│   ├── contracts-orders.yaml
│   ├── revrec-waterfall.yaml
│   └── summarize.yaml
└── test-suites/               # YAML test cases
    ├── golden-scenarios.yaml
    ├── saas.yaml
    ├── media.yaml
    ├── membership.yaml
    ├── telecom.yaml
    └── fintech.yaml
```

---

## Notes

- Update this document as enhancements are implemented
- Mark status in the priority matrix table
- Add learnings and gotchas as you go
