# Self-Learning System: Implementation Plan

This document contains detailed implementation plans for the 4 priority enhancements.

**Target Enhancements:**
1. [Complete What's Started](#1-complete-whats-started)
2. [Multi-Judge Ensemble](#2-multi-judge-ensemble)
3. [Semantic Deduplication & Clustering](#3-semantic-deduplication--clustering)
4. [Synthetic Test Case Generation](#4-synthetic-test-case-generation)

**Prerequisites:**
- Bug fix applied (criteria file naming - done 2024-12-30)
- Node 20+, Postgres with pgvector for production features

---

## 1. Complete What's Started

This section covers closing gaps in the existing implementation.

### 1.1 Complete Step Injection

**Goal:** Add correction injection to all 6 pipeline steps (currently only 3 have it).

**Current State:**
| Step | Has Injection | File |
|------|---------------|------|
| `analyze_contract` | ❌ | `src/pipeline/steps/analyze-contract.ts` |
| `design_subscription` | ✅ | `src/pipeline/steps/design-subscription.ts` |
| `contracts_orders` | ✅ | `src/pipeline/steps/build-contracts-orders.ts` |
| `billings` | ✅ | `src/pipeline/steps/build-billings.ts` |
| `revrec_waterfall` | ❌ | `src/pipeline/steps/build-revrec-waterfall.ts` |
| `summarize` | ❌ | `src/pipeline/steps/summarize.ts` |

**Implementation:**

#### Task 1.1.1: Add injection to `analyze-contract.ts`

```typescript
// src/pipeline/steps/analyze-contract.ts

// Add import at top
import { getCorrectionsContext } from '@zuca/self-learn/injector';

// Inside analyzeContract function, before LLM call:
const correctionsResult = await getCorrectionsContext({
  stepName: 'analyze_contract',
  inputSummary: [
    `Customer: ${input.customer_name}`,
    `Use Case: ${input.use_case_description?.substring(0, 300)}`,
    `Terms: ${input.terms_months} months`,
    `Billing Period: ${input.billing_period}`,
    `Start Date: ${input.contract_start_date}`,
  ].join('\n'),
});

// Append to user message or system prompt
const userMessage = buildUserMessage(input);
const enhancedMessage = correctionsResult.context
  ? `${userMessage}\n\n${correctionsResult.context}`
  : userMessage;
```

#### Task 1.1.2: Add injection to `build-revrec-waterfall.ts`

```typescript
// src/pipeline/steps/build-revrec-waterfall.ts

import { getCorrectionsContext } from '@zuca/self-learn/injector';

// Before LLM call:
const correctionsResult = await getCorrectionsContext({
  stepName: 'revrec_waterfall',
  inputSummary: [
    `Customer: ${input.customer_name}`,
    `Allocations: ${input.is_allocations ? 'Yes' : 'No'}`,
    `Terms: ${input.terms_months} months`,
    `Billing: ${input.billing_period}`,
    `Contract Value: ${contractsOrders?.total_contract_value || 'N/A'}`,
  ].join('\n'),
});
```

#### Task 1.1.3: Add injection to `summarize.ts`

```typescript
// src/pipeline/steps/summarize.ts

import { getCorrectionsContext } from '@zuca/self-learn/injector';

// Before LLM call:
const correctionsResult = await getCorrectionsContext({
  stepName: 'summarize',
  inputSummary: [
    `Customer: ${input.customer_name}`,
    `Use Case: ${input.use_case_description?.substring(0, 200)}`,
  ].join('\n'),
});
```

**Files to Modify:**
- `src/pipeline/steps/analyze-contract.ts`
- `src/pipeline/steps/build-revrec-waterfall.ts`
- `src/pipeline/steps/summarize.ts`

**Testing:**
```bash
# Run evaluation and verify corrections are injected for all steps
DEBUG=true npm run cli evaluate -m gemini-3-flash-preview 2>&1 | grep "corrections"
```

---

### 1.2 Auto-Apply Approved Prompt Suggestions

**Goal:** Automatically apply approved prompt suggestions to prompt files with versioning and rollback.

**Architecture:**

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ Prompt          │     │ Apply            │     │ Prompt File     │
│ Suggestion      │────▶│ Suggestion       │────▶│ (with backup)   │
│ (approved)      │     │ Function         │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌──────────────────┐
                        │ Backup File      │
                        │ (.backup.{ts})   │
                        └──────────────────┘
```

**Implementation:**

#### Task 1.2.1: Create suggestion application module

**File:** `src/self-learn/evolution/apply-suggestion.ts`

```typescript
/**
 * Apply Prompt Suggestions
 *
 * Applies approved prompt suggestions to prompt files with backup and rollback support.
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { getSuggestion, updateSuggestionStatus } from './index';
import { PROMPTS, getPromptPath } from '../../llm/prompts';

export interface ApplyResult {
  success: boolean;
  backupPath?: string;
  promptPath?: string;
  error?: string;
}

export interface RollbackResult {
  success: boolean;
  error?: string;
}

/**
 * Map step names to prompt keys
 */
const STEP_TO_PROMPT: Record<string, keyof typeof PROMPTS> = {
  analyze_contract: 'ANALYZE_CONTRACT',
  design_subscription: 'DESIGN_SUBSCRIPTION',
  contracts_orders: 'BUILD_CONTRACTS_ORDERS',
  billings: 'BUILD_BILLINGS',
  revrec_waterfall: 'BUILD_REVREC_WATERFALL',
  summarize: 'SUMMARIZE',
};

/**
 * Get the file path for a prompt
 */
function getPromptFilePath(stepName: string): string {
  const promptKey = STEP_TO_PROMPT[stepName];
  if (!promptKey) {
    throw new Error(`Unknown step name: ${stepName}`);
  }

  // Map prompt keys to file paths
  const promptFiles: Record<string, string> = {
    ANALYZE_CONTRACT: 'src/llm/prompts/analyze-contract.md',
    DESIGN_SUBSCRIPTION: 'src/llm/prompts/design-subscription.md',
    BUILD_CONTRACTS_ORDERS: 'src/llm/prompts/build-contracts-orders.md',
    BUILD_BILLINGS: 'src/llm/prompts/build-billings.md',
    BUILD_REVREC_WATERFALL: 'src/llm/prompts/build-revrec-waterfall.md',
    SUMMARIZE: 'src/llm/prompts/summarize.md',
  };

  return path.join(process.cwd(), promptFiles[promptKey]);
}

/**
 * Parse suggestion content for placement instructions
 *
 * Expected format in suggested_update:
 * ```
 * PLACEMENT: after "## Section Name"
 * CONTENT:
 * Your content here...
 * ```
 */
interface ParsedSuggestion {
  placement: 'before' | 'after' | 'replace' | 'append';
  anchor?: string;  // Section name or marker
  content: string;
}

function parseSuggestionContent(suggestedUpdate: string): ParsedSuggestion {
  const lines = suggestedUpdate.split('\n');
  let placement: ParsedSuggestion['placement'] = 'append';
  let anchor: string | undefined;
  let contentStartIndex = 0;

  // Look for PLACEMENT directive
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('PLACEMENT:')) {
      const directive = line.substring('PLACEMENT:'.length).trim().toLowerCase();

      if (directive.startsWith('after')) {
        placement = 'after';
        // Extract anchor (e.g., 'after "## Section"' -> '## Section')
        const match = directive.match(/after\s+["'](.+?)["']/i);
        anchor = match?.[1];
      } else if (directive.startsWith('before')) {
        placement = 'before';
        const match = directive.match(/before\s+["'](.+?)["']/i);
        anchor = match?.[1];
      } else if (directive.startsWith('replace')) {
        placement = 'replace';
        const match = directive.match(/replace\s+["'](.+?)["']/i);
        anchor = match?.[1];
      } else if (directive === 'append' || directive === 'end') {
        placement = 'append';
      }
      continue;
    }

    if (line === 'CONTENT:') {
      contentStartIndex = i + 1;
      break;
    }
  }

  const content = lines.slice(contentStartIndex).join('\n').trim();

  return { placement, anchor, content };
}

/**
 * Insert content into prompt at specified location
 */
function insertContent(
  promptContent: string,
  parsed: ParsedSuggestion
): string {
  if (parsed.placement === 'append' || !parsed.anchor) {
    // Append to end of file
    return `${promptContent.trim()}\n\n${parsed.content}\n`;
  }

  const lines = promptContent.split('\n');
  const anchorIndex = lines.findIndex(line => line.includes(parsed.anchor!));

  if (anchorIndex === -1) {
    // Anchor not found, append to end
    console.warn(`Anchor "${parsed.anchor}" not found, appending to end`);
    return `${promptContent.trim()}\n\n${parsed.content}\n`;
  }

  if (parsed.placement === 'after') {
    // Find end of section (next ## header or end of file)
    let insertIndex = anchorIndex + 1;
    for (let i = anchorIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ')) {
        insertIndex = i;
        break;
      }
      insertIndex = i + 1;
    }

    lines.splice(insertIndex, 0, '', parsed.content);
  } else if (parsed.placement === 'before') {
    lines.splice(anchorIndex, 0, parsed.content, '');
  } else if (parsed.placement === 'replace') {
    // Replace the section until next ## header
    let endIndex = anchorIndex + 1;
    for (let i = anchorIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ')) {
        endIndex = i;
        break;
      }
      endIndex = i + 1;
    }

    lines.splice(anchorIndex, endIndex - anchorIndex, parsed.content);
  }

  return lines.join('\n');
}

/**
 * Apply a prompt suggestion
 *
 * @param suggestionId - The suggestion ID to apply
 * @returns Result with backup path for potential rollback
 */
export async function applyPromptSuggestion(
  suggestionId: string
): Promise<ApplyResult> {
  try {
    // Get suggestion
    const suggestion = await getSuggestion(suggestionId);

    if (!suggestion) {
      return { success: false, error: `Suggestion ${suggestionId} not found` };
    }

    if (suggestion.status !== 'approved') {
      return {
        success: false,
        error: `Suggestion must be approved first (current status: ${suggestion.status})`
      };
    }

    // Get prompt file path
    const promptPath = getPromptFilePath(suggestion.step_name);

    // Read current content
    const currentContent = await fs.readFile(promptPath, 'utf-8');

    // Create backup with timestamp
    const timestamp = Date.now();
    const backupPath = `${promptPath}.backup.${timestamp}`;
    await fs.writeFile(backupPath, currentContent);

    // Parse and apply suggestion
    const parsed = parseSuggestionContent(suggestion.suggested_update);
    const newContent = insertContent(currentContent, parsed);

    // Write updated content
    await fs.writeFile(promptPath, newContent);

    // Update suggestion status
    await updateSuggestionStatus(suggestionId, 'applied', {
      appliedAt: new Date().toISOString(),
      backupPath,
    });

    return {
      success: true,
      backupPath,
      promptPath,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Rollback a prompt suggestion
 *
 * @param suggestionId - The suggestion ID to rollback
 * @param backupPath - Path to the backup file
 */
export async function rollbackPromptSuggestion(
  suggestionId: string,
  backupPath: string
): Promise<RollbackResult> {
  try {
    const suggestion = await getSuggestion(suggestionId);

    if (!suggestion) {
      return { success: false, error: `Suggestion ${suggestionId} not found` };
    }

    if (suggestion.status !== 'applied') {
      return {
        success: false,
        error: `Can only rollback applied suggestions (current status: ${suggestion.status})`
      };
    }

    // Read backup content
    const backupContent = await fs.readFile(backupPath, 'utf-8');

    // Get prompt path and restore
    const promptPath = getPromptFilePath(suggestion.step_name);
    await fs.writeFile(promptPath, backupContent);

    // Update suggestion status back to approved
    await updateSuggestionStatus(suggestionId, 'approved');

    // Optionally delete backup
    // await fs.unlink(backupPath);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * List all backups for a step
 */
export async function listBackups(stepName: string): Promise<string[]> {
  const promptPath = getPromptFilePath(stepName);
  const dir = path.dirname(promptPath);
  const basename = path.basename(promptPath);

  const files = await fs.readdir(dir);
  return files
    .filter(f => f.startsWith(`${basename}.backup.`))
    .map(f => path.join(dir, f))
    .sort()
    .reverse();  // Most recent first
}
```

#### Task 1.2.2: Add CLI commands

**File:** `src/cli/commands/prompts.ts` (modify existing)

```typescript
// Add to existing prompts command

import {
  applyPromptSuggestion,
  rollbackPromptSuggestion,
  listBackups
} from '../../self-learn/evolution/apply-suggestion';

// Add 'apply' subcommand
program
  .command('apply <suggestionId>')
  .description('Apply an approved prompt suggestion')
  .action(async (suggestionId: string) => {
    console.log(`Applying suggestion ${suggestionId}...`);

    const result = await applyPromptSuggestion(suggestionId);

    if (result.success) {
      console.log('✅ Suggestion applied successfully');
      console.log(`   Prompt: ${result.promptPath}`);
      console.log(`   Backup: ${result.backupPath}`);
      console.log('\nTo rollback:');
      console.log(`   npm run cli prompts rollback ${suggestionId} "${result.backupPath}"`);
    } else {
      console.error(`❌ Failed to apply: ${result.error}`);
      process.exit(1);
    }
  });

// Add 'rollback' subcommand
program
  .command('rollback <suggestionId> <backupPath>')
  .description('Rollback an applied prompt suggestion')
  .action(async (suggestionId: string, backupPath: string) => {
    console.log(`Rolling back suggestion ${suggestionId}...`);

    const result = await rollbackPromptSuggestion(suggestionId, backupPath);

    if (result.success) {
      console.log('✅ Rollback successful');
    } else {
      console.error(`❌ Failed to rollback: ${result.error}`);
      process.exit(1);
    }
  });

// Add 'backups' subcommand
program
  .command('backups <stepName>')
  .description('List backups for a step')
  .action(async (stepName: string) => {
    const backups = await listBackups(stepName);

    if (backups.length === 0) {
      console.log('No backups found');
    } else {
      console.log('Backups (most recent first):');
      backups.forEach((b, i) => console.log(`  ${i + 1}. ${b}`));
    }
  });
```

**Files to Create:**
- `src/self-learn/evolution/apply-suggestion.ts`

**Files to Modify:**
- `src/cli/commands/prompts.ts`
- `src/self-learn/evolution/index.ts` (add exports)

**Testing:**
```bash
# Generate and approve a suggestion
npm run cli prompts suggest design_subscription "ramp-pricing"
npm run cli prompts list
npm run cli prompts approve <id>

# Apply it
npm run cli prompts apply <id>

# Verify the prompt was updated
cat src/llm/prompts/design-subscription.md | grep -A5 "your-expected-content"

# Test rollback
npm run cli prompts rollback <id> <backup-path>
```

---

### 1.3 Close Effectiveness Tracking Loop

**Goal:** Properly track whether corrections actually helped when they were injected.

**Current Gap:** `success_rate` exists but isn't reliably updated after evaluation.

**Implementation:**

#### Task 1.3.1: Enhance effectiveness tracking

**File:** `src/self-learn/injector/index.ts` (modify)

```typescript
// Add to existing file

/**
 * Track which corrections were applied and their outcomes
 */
interface EffectivenessRecord {
  correctionId: string;
  stepName: string;
  appliedAt: string;
  inputHash: string;  // Hash of input for deduplication
  outcome?: 'helped' | 'did_not_help' | 'unknown';
  evaluatedAt?: string;
}

const effectivenessLog: EffectivenessRecord[] = [];

/**
 * Record that a correction was applied
 */
export function recordCorrectionApplication(
  correctionId: string,
  stepName: string,
  inputSummary: string
): void {
  effectivenessLog.push({
    correctionId,
    stepName,
    appliedAt: new Date().toISOString(),
    inputHash: hashString(inputSummary),
  });
}

/**
 * Update outcomes for corrections applied in a run
 */
export async function recordOutcomes(
  stepResults: Map<string, { passed: boolean }>
): Promise<void> {
  const backend = getCorrectionsBackend();

  for (const record of effectivenessLog) {
    if (record.outcome) continue;  // Already recorded

    const stepResult = stepResults.get(record.stepName);
    if (!stepResult) continue;

    record.outcome = stepResult.passed ? 'helped' : 'did_not_help';
    record.evaluatedAt = new Date().toISOString();

    // Update correction stats in backend
    await backend.updateStats(
      record.correctionId,
      false,  // applied already tracked
      stepResult.passed  // helped
    );
  }
}

/**
 * Get effectiveness summary for reporting
 */
export function getEffectivenessSummary(): {
  total: number;
  helped: number;
  didNotHelp: number;
  unknown: number;
  helpRate: number;
} {
  const helped = effectivenessLog.filter(r => r.outcome === 'helped').length;
  const didNotHelp = effectivenessLog.filter(r => r.outcome === 'did_not_help').length;
  const unknown = effectivenessLog.filter(r => !r.outcome).length;
  const total = effectivenessLog.length;

  return {
    total,
    helped,
    didNotHelp,
    unknown,
    helpRate: total > 0 ? helped / (helped + didNotHelp) : 0,
  };
}

/**
 * Clear effectiveness log (call at start of new evaluation run)
 */
export function clearEffectivenessLog(): void {
  effectivenessLog.length = 0;
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}
```

#### Task 1.3.2: Integrate into evaluation runner

**File:** `src/self-learn/evaluation/runner.ts` (modify)

```typescript
// Import new functions
import {
  recordOutcomes,
  clearEffectivenessLog,
  getEffectivenessSummary
} from '../injector';

// In runEvaluationSuite, at start:
clearEffectivenessLog();

// After all test cases complete:
await recordOutcomes(aggregatedStepResults);

// In the return value, add:
return {
  // ... existing fields
  effectivenessSummary: getEffectivenessSummary(),
};
```

#### Task 1.3.3: Add effectiveness reporting to CLI

```typescript
// In CLI evaluate command output:
if (result.effectivenessSummary) {
  const eff = result.effectivenessSummary;
  console.log('\nCorrection Effectiveness:');
  console.log(`  Applied: ${eff.total}`);
  console.log(`  Helped: ${eff.helped} (${(eff.helpRate * 100).toFixed(1)}%)`);
  console.log(`  Did not help: ${eff.didNotHelp}`);
}
```

**Files to Modify:**
- `src/self-learn/injector/index.ts`
- `src/self-learn/evaluation/runner.ts`
- `src/cli/commands/evaluate.ts`

---

## 2. Multi-Judge Ensemble

**Goal:** Use multiple LLM judges and require consensus to reduce false positives/negatives.

**Architecture:**

```
                    ┌─────────────────┐
                    │  Ensemble       │
                    │  Orchestrator   │
                    └────────┬────────┘
                             │
           ┌─────────────────┼─────────────────┐
           ▼                 ▼                 ▼
    ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
    │  GPT-4o     │   │  Claude     │   │  Gemini     │
    │  Judge      │   │  Judge      │   │  Judge      │
    └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
           │                 │                 │
           └─────────────────┼─────────────────┘
                             ▼
                    ┌─────────────────┐
                    │  Consensus      │
                    │  Calculator     │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Final Result   │
                    │  + Disagreements│
                    └─────────────────┘
```

### Implementation

#### Task 2.1: Create ensemble types

**File:** `src/self-learn/judge/ensemble-types.ts`

```typescript
/**
 * Ensemble Judge Types
 */

import type { JudgeResult, EvaluationCriteria } from '../types';
import type { LlmModel } from '../../types/llm';

/**
 * Configuration for a single judge in the ensemble
 */
export interface JudgeConfig {
  /** Model to use for this judge */
  model: LlmModel;
  /** Relative weight in consensus calculation (default: 1.0) */
  weight: number;
  /** Optional timeout in ms */
  timeout?: number;
}

/**
 * Configuration for the ensemble
 */
export interface EnsembleConfig {
  /** Judges to use */
  judges: JudgeConfig[];
  /** Minimum agreement ratio for consensus (default: 0.66 = 2/3) */
  consensusThreshold: number;
  /** Run judges in parallel (default: true) */
  parallel: boolean;
  /** Continue if some judges fail (default: true) */
  tolerateFailures: boolean;
  /** Minimum judges required for valid result */
  minJudgesRequired: number;
}

/**
 * Result from a single judge
 */
export interface SingleJudgeResult {
  model: LlmModel;
  weight: number;
  result: JudgeResult;
  durationMs: number;
  error?: string;
}

/**
 * Vote on a single criterion
 */
export interface CriterionVote {
  model: LlmModel;
  weight: number;
  passed: boolean;
  confidence: number;
  explanation?: string;
}

/**
 * Consensus result for a single criterion
 */
export interface CriterionConsensus {
  criterionId: string;
  criterionName: string;
  passed: boolean;
  confidence: number;  // Higher when more agreement
  votes: CriterionVote[];
  passRatio: number;  // Weighted ratio of pass votes
}

/**
 * Disagreement between judges
 */
export interface Disagreement {
  criterionId: string;
  criterionName: string;
  votes: CriterionVote[];
  /** Severity: how much judges disagree */
  severity: 'minor' | 'major' | 'split';
}

/**
 * Full ensemble result
 */
export interface EnsembleResult {
  /** Consensus judge result */
  consensus: JudgeResult;
  /** Individual results from each judge */
  individualResults: SingleJudgeResult[];
  /** Criteria where judges disagreed */
  disagreements: Disagreement[];
  /** Overall confidence (agreement level) */
  overallConfidence: number;
  /** Number of judges that completed */
  judgesCompleted: number;
  /** Total evaluation time */
  totalDurationMs: number;
}

/**
 * Default ensemble configuration
 */
export const DEFAULT_ENSEMBLE_CONFIG: EnsembleConfig = {
  judges: [
    { model: 'gpt-4o', weight: 1.0 },
    { model: 'claude-sonnet-4-20250514', weight: 1.0 },
    { model: 'gemini-2.0-flash', weight: 0.8 },
  ],
  consensusThreshold: 0.66,
  parallel: true,
  tolerateFailures: true,
  minJudgesRequired: 2,
};

/**
 * Lightweight ensemble (faster, cheaper)
 */
export const LIGHTWEIGHT_ENSEMBLE_CONFIG: EnsembleConfig = {
  judges: [
    { model: 'gpt-4o-mini', weight: 1.0 },
    { model: 'gemini-2.0-flash', weight: 1.0 },
  ],
  consensusThreshold: 0.5,  // Both must agree
  parallel: true,
  tolerateFailures: false,
  minJudgesRequired: 2,
};
```

#### Task 2.2: Create ensemble orchestrator

**File:** `src/self-learn/judge/ensemble.ts`

```typescript
/**
 * Ensemble Judge
 *
 * Runs multiple LLM judges and calculates consensus.
 */

import { evaluateOutput } from './index';
import type { EvaluationCriteria, JudgeResult } from '../types';
import type {
  EnsembleConfig,
  EnsembleResult,
  SingleJudgeResult,
  CriterionConsensus,
  CriterionVote,
  Disagreement,
} from './ensemble-types';
import { DEFAULT_ENSEMBLE_CONFIG } from './ensemble-types';

/**
 * Evaluate output using multiple judges
 */
export async function evaluateWithEnsemble(
  stepName: string,
  inputSummary: string,
  output: unknown,
  criteria: EvaluationCriteria,
  config: Partial<EnsembleConfig> = {}
): Promise<EnsembleResult> {
  const fullConfig: EnsembleConfig = { ...DEFAULT_ENSEMBLE_CONFIG, ...config };
  const startTime = Date.now();

  // Run judges
  const judgePromises = fullConfig.judges.map(async (judgeConfig) => {
    const judgeStart = Date.now();
    try {
      const result = await evaluateOutput(
        stepName,
        inputSummary,
        output,
        criteria,
        { model: judgeConfig.model }
      );

      return {
        model: judgeConfig.model,
        weight: judgeConfig.weight,
        result,
        durationMs: Date.now() - judgeStart,
      } as SingleJudgeResult;
    } catch (error) {
      if (!fullConfig.tolerateFailures) {
        throw error;
      }

      return {
        model: judgeConfig.model,
        weight: judgeConfig.weight,
        result: createFailedResult(criteria),
        durationMs: Date.now() - judgeStart,
        error: error instanceof Error ? error.message : 'Unknown error',
      } as SingleJudgeResult;
    }
  });

  // Wait for results (parallel or sequential)
  const individualResults = fullConfig.parallel
    ? await Promise.all(judgePromises)
    : await runSequential(judgePromises);

  // Filter out failed judges
  const validResults = individualResults.filter(r => !r.error);

  if (validResults.length < fullConfig.minJudgesRequired) {
    throw new Error(
      `Not enough judges completed: ${validResults.length}/${fullConfig.minJudgesRequired} required`
    );
  }

  // Calculate consensus for each criterion
  const consensusResults = calculateConsensus(
    criteria,
    validResults,
    fullConfig.consensusThreshold
  );

  // Find disagreements
  const disagreements = findDisagreements(consensusResults);

  // Build consensus JudgeResult
  const consensus = buildConsensusResult(
    criteria,
    consensusResults,
    validResults
  );

  // Calculate overall confidence
  const overallConfidence = consensusResults.reduce(
    (sum, c) => sum + c.confidence,
    0
  ) / consensusResults.length;

  return {
    consensus,
    individualResults,
    disagreements,
    overallConfidence,
    judgesCompleted: validResults.length,
    totalDurationMs: Date.now() - startTime,
  };
}

/**
 * Calculate consensus for each criterion
 */
function calculateConsensus(
  criteria: EvaluationCriteria,
  results: SingleJudgeResult[],
  threshold: number
): CriterionConsensus[] {
  return criteria.criteria.map(criterion => {
    // Collect votes from each judge
    const votes: CriterionVote[] = results.map(r => {
      const evaluation = r.result.evaluations.find(
        e => e.criterion_id === criterion.id
      );

      return {
        model: r.model,
        weight: r.weight,
        passed: evaluation?.passed ?? true,
        confidence: evaluation?.confidence ?? 0,
        explanation: evaluation?.explanation,
      };
    });

    // Calculate weighted pass ratio
    const totalWeight = votes.reduce((sum, v) => sum + v.weight, 0);
    const passWeight = votes
      .filter(v => v.passed)
      .reduce((sum, v) => sum + v.weight, 0);
    const passRatio = passWeight / totalWeight;

    // Determine consensus
    const passed = passRatio >= threshold;

    // Confidence is higher when there's more agreement
    // 1.0 when all agree, lower when split
    const confidence = Math.abs(passRatio - 0.5) * 2;

    return {
      criterionId: criterion.id,
      criterionName: criterion.name,
      passed,
      confidence,
      votes,
      passRatio,
    };
  });
}

/**
 * Find criteria where judges disagreed
 */
function findDisagreements(consensusResults: CriterionConsensus[]): Disagreement[] {
  return consensusResults
    .filter(c => {
      const passCount = c.votes.filter(v => v.passed).length;
      return passCount > 0 && passCount < c.votes.length;
    })
    .map(c => {
      const passCount = c.votes.filter(v => v.passed).length;
      const totalCount = c.votes.length;

      let severity: Disagreement['severity'];
      if (passCount === 1 || passCount === totalCount - 1) {
        severity = 'minor';  // One outlier
      } else if (Math.abs(passCount - totalCount / 2) < 0.5) {
        severity = 'split';  // Even split
      } else {
        severity = 'major';
      }

      return {
        criterionId: c.criterionId,
        criterionName: c.criterionName,
        votes: c.votes,
        severity,
      };
    });
}

/**
 * Build final JudgeResult from consensus
 */
function buildConsensusResult(
  criteria: EvaluationCriteria,
  consensusResults: CriterionConsensus[],
  validResults: SingleJudgeResult[]
): JudgeResult {
  const evaluations = consensusResults.map(c => {
    // For failed criteria, merge correction suggestions from judges that failed it
    let correction = null;
    if (!c.passed) {
      const failingJudges = validResults.filter(r => {
        const eval_ = r.result.evaluations.find(e => e.criterion_id === c.criterionId);
        return eval_ && !eval_.passed && eval_.correction;
      });

      if (failingJudges.length > 0) {
        // Use correction from highest-weight judge
        const bestJudge = failingJudges.sort((a, b) => b.weight - a.weight)[0];
        const eval_ = bestJudge.result.evaluations.find(
          e => e.criterion_id === c.criterionId
        );
        correction = eval_?.correction ?? null;
      }
    }

    return {
      criterion_id: c.criterionId,
      criterion_name: c.criterionName,
      passed: c.passed,
      confidence: c.confidence,
      explanation: c.passed
        ? `Consensus: ${(c.passRatio * 100).toFixed(0)}% of judges passed this criterion`
        : `Consensus: ${((1 - c.passRatio) * 100).toFixed(0)}% of judges failed this criterion`,
      correction,
    };
  });

  return {
    overall_pass: evaluations.every(e => e.passed),
    evaluations,
    overall_notes: `Ensemble evaluation with ${validResults.length} judges. ` +
      `Overall agreement: ${(consensusResults.reduce((s, c) => s + c.confidence, 0) / consensusResults.length * 100).toFixed(0)}%`,
  };
}

/**
 * Create a failed result when judge errors
 */
function createFailedResult(criteria: EvaluationCriteria): JudgeResult {
  return {
    overall_pass: false,
    evaluations: criteria.criteria.map(c => ({
      criterion_id: c.id,
      criterion_name: c.name,
      passed: false,
      confidence: 0,
      explanation: 'Judge failed to evaluate',
      correction: null,
    })),
    overall_notes: 'Judge failed',
  };
}

/**
 * Run promises sequentially
 */
async function runSequential<T>(promises: Promise<T>[]): Promise<T[]> {
  const results: T[] = [];
  for (const promise of promises) {
    results.push(await promise);
  }
  return results;
}

/**
 * Analyze disagreements for learning insights
 */
export function analyzeDisagreements(
  disagreements: Disagreement[]
): {
  summary: string;
  recommendations: string[];
} {
  if (disagreements.length === 0) {
    return {
      summary: 'All judges agreed on all criteria.',
      recommendations: [],
    };
  }

  const splitCount = disagreements.filter(d => d.severity === 'split').length;
  const majorCount = disagreements.filter(d => d.severity === 'major').length;
  const minorCount = disagreements.filter(d => d.severity === 'minor').length;

  const recommendations: string[] = [];

  if (splitCount > 0) {
    recommendations.push(
      `${splitCount} criteria have split decisions - consider clarifying the evaluation criteria definitions.`
    );
  }

  if (majorCount > 0) {
    recommendations.push(
      `${majorCount} criteria have major disagreements - consider adding more examples to the criteria.`
    );
  }

  // Find criteria that consistently cause disagreement
  const problematicCriteria = disagreements
    .filter(d => d.severity !== 'minor')
    .map(d => d.criterionName);

  if (problematicCriteria.length > 0) {
    recommendations.push(
      `Review these criteria definitions: ${problematicCriteria.join(', ')}`
    );
  }

  return {
    summary: `${disagreements.length} disagreements: ${splitCount} split, ${majorCount} major, ${minorCount} minor.`,
    recommendations,
  };
}
```

#### Task 2.3: Add ensemble option to CLI

**File:** `src/cli/commands/evaluate.ts` (modify)

```typescript
// Add option to evaluate command
.option('--ensemble', 'Use multi-judge ensemble evaluation')
.option('--ensemble-models <models>', 'Comma-separated list of models for ensemble')

// In action handler:
if (options.ensemble) {
  const ensembleConfig = options.ensembleModels
    ? {
        judges: options.ensembleModels.split(',').map((m: string) => ({
          model: m.trim() as LlmModel,
          weight: 1.0,
        })),
      }
    : undefined;

  // Use evaluateWithEnsemble instead of evaluateOutput
  const result = await evaluateWithEnsemble(
    stepName,
    inputSummary,
    output,
    criteria,
    ensembleConfig
  );

  // Log disagreements
  if (result.disagreements.length > 0) {
    console.log('\n⚠️  Judge Disagreements:');
    for (const d of result.disagreements) {
      console.log(`  ${d.criterionName} (${d.severity}):`);
      for (const v of d.votes) {
        console.log(`    ${v.model}: ${v.passed ? 'PASS' : 'FAIL'} (${(v.confidence * 100).toFixed(0)}%)`);
      }
    }
  }
}
```

**Files to Create:**
- `src/self-learn/judge/ensemble-types.ts`
- `src/self-learn/judge/ensemble.ts`

**Files to Modify:**
- `src/self-learn/judge/index.ts` (add exports)
- `src/cli/commands/evaluate.ts`

**Testing:**
```bash
# Run with ensemble
npm run cli evaluate --ensemble -m gpt-4o

# Run with custom models
npm run cli evaluate --ensemble --ensemble-models "gpt-4o,claude-sonnet-4-20250514,gemini-2.0-flash"

# Verify disagreements are logged
```

---

## 3. Semantic Deduplication & Clustering

**Goal:** Group semantically similar corrections to reduce noise and improve retrieval.

**Architecture:**

```
┌─────────────────┐
│  Corrections    │
│  (raw)          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  Embedding      │────▶│  Embedding      │
│  Generator      │     │  Cache          │
└────────┬────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐
│  Agglomerative  │
│  Clustering     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Clusters       │
│  (deduplicated) │
└─────────────────┘
```

### Implementation

#### Task 3.1: Create clustering types

**File:** `src/self-learn/corrections/clustering-types.ts`

```typescript
/**
 * Clustering Types
 */

import type { Correction } from '../types';

/**
 * A cluster of semantically similar corrections
 */
export interface CorrectionCluster {
  /** Unique cluster ID */
  id: string;
  /** Step name these corrections belong to */
  stepName: string;
  /** Canonical pattern name (representative of the cluster) */
  canonicalPattern: string;
  /** All corrections in this cluster */
  corrections: Correction[];
  /** Number of corrections in cluster */
  count: number;
  /** Average embedding of cluster (centroid) */
  centroidEmbedding: number[];
  /** Best representative correction (highest confidence, has example) */
  representativeCorrection: Correction;
  /** Merged input summaries for better search */
  mergedInputSummary: string;
  /** Average confidence across corrections */
  avgConfidence: number;
  /** Average success rate across corrections */
  avgSuccessRate: number;
  /** Total times applied across all corrections */
  totalTimesApplied: number;
  /** When cluster was created/updated */
  updatedAt: string;
}

/**
 * Clustering configuration
 */
export interface ClusteringConfig {
  /** Minimum cosine similarity to be in same cluster (default: 0.85) */
  similarityThreshold: number;
  /** Minimum corrections to form a cluster (default: 1) */
  minClusterSize: number;
  /** Maximum clusters to return (default: 50) */
  maxClusters: number;
  /** Recalculate embeddings even if cached (default: false) */
  forceRecalculate: boolean;
}

/**
 * Clustering result
 */
export interface ClusteringResult {
  /** Generated clusters */
  clusters: CorrectionCluster[];
  /** Corrections that couldn't be clustered */
  unclustered: Correction[];
  /** Statistics */
  stats: {
    totalCorrections: number;
    totalClusters: number;
    avgClusterSize: number;
    largestCluster: number;
    reductionRatio: number;  // 1 - (clusters / corrections)
  };
}

/**
 * Default clustering configuration
 */
export const DEFAULT_CLUSTERING_CONFIG: ClusteringConfig = {
  similarityThreshold: 0.85,
  minClusterSize: 1,
  maxClusters: 50,
  forceRecalculate: false,
};
```

#### Task 3.2: Create clustering module

**File:** `src/self-learn/corrections/clustering.ts`

```typescript
/**
 * Correction Clustering
 *
 * Groups semantically similar corrections using embeddings.
 */

import { v4 as uuidv4 } from 'uuid';
import { getCorrectionsForStep, getCorrectionsBackend } from './index';
import { getEmbedding } from '../../llm/embeddings';
import type { Correction } from '../types';
import type {
  CorrectionCluster,
  ClusteringConfig,
  ClusteringResult,
} from './clustering-types';
import { DEFAULT_CLUSTERING_CONFIG } from './clustering-types';

/**
 * Embedding cache to avoid recomputing
 */
const embeddingCache = new Map<string, number[]>();

/**
 * Get or compute embedding for a correction
 */
async function getCorrectionEmbedding(
  correction: Correction,
  forceRecalculate: boolean
): Promise<number[]> {
  const cacheKey = `${correction.id}:${correction.pattern}:${correction.input_summary}`;

  if (!forceRecalculate && embeddingCache.has(cacheKey)) {
    return embeddingCache.get(cacheKey)!;
  }

  // If correction has embedding stored, use it
  if (!forceRecalculate && correction.pattern_embedding?.length) {
    embeddingCache.set(cacheKey, correction.pattern_embedding);
    return correction.pattern_embedding;
  }

  // Generate new embedding
  const text = `${correction.pattern} ${correction.input_summary} ${correction.expected_behavior}`;
  const embedding = await getEmbedding(text);

  embeddingCache.set(cacheKey, embedding);
  return embedding;
}

/**
 * Calculate cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

/**
 * Calculate centroid (average) of embeddings
 */
function calculateCentroid(embeddings: number[][]): number[] {
  if (embeddings.length === 0) return [];

  const dim = embeddings[0].length;
  const centroid = new Array(dim).fill(0);

  for (const embedding of embeddings) {
    for (let i = 0; i < dim; i++) {
      centroid[i] += embedding[i];
    }
  }

  for (let i = 0; i < dim; i++) {
    centroid[i] /= embeddings.length;
  }

  return centroid;
}

/**
 * Select the best representative correction from a cluster
 */
function selectRepresentative(corrections: Correction[]): Correction {
  return corrections.sort((a, b) => {
    // Prefer corrections with example_fix
    if (a.example_fix && !b.example_fix) return -1;
    if (b.example_fix && !a.example_fix) return 1;

    // Then by confidence
    if (a.confidence !== b.confidence) return b.confidence - a.confidence;

    // Then by success rate
    if (a.success_rate !== b.success_rate) return b.success_rate - a.success_rate;

    // Then by times applied
    return b.times_applied - a.times_applied;
  })[0];
}

/**
 * Generate a canonical pattern name from cluster
 */
function generateCanonicalPattern(corrections: Correction[]): string {
  // Use most common pattern or the representative's pattern
  const patternCounts = new Map<string, number>();

  for (const c of corrections) {
    const count = patternCounts.get(c.pattern) ?? 0;
    patternCounts.set(c.pattern, count + 1);
  }

  let maxCount = 0;
  let canonical = corrections[0].pattern;

  for (const [pattern, count] of patternCounts) {
    if (count > maxCount) {
      maxCount = count;
      canonical = pattern;
    }
  }

  return canonical;
}

/**
 * Merge input summaries from corrections
 */
function mergeInputSummaries(corrections: Correction[]): string {
  const uniqueSummaries = new Set<string>();

  for (const c of corrections) {
    // Take first 100 chars of each summary
    const summary = c.input_summary.substring(0, 100);
    uniqueSummaries.add(summary);
  }

  return Array.from(uniqueSummaries).slice(0, 5).join(' | ');
}

/**
 * Cluster corrections for a step
 */
export async function clusterCorrections(
  stepName: string,
  config: Partial<ClusteringConfig> = {}
): Promise<ClusteringResult> {
  const fullConfig: ClusteringConfig = { ...DEFAULT_CLUSTERING_CONFIG, ...config };

  // Get all corrections for step
  const corrections = await getCorrectionsForStep(stepName);

  if (corrections.length === 0) {
    return {
      clusters: [],
      unclustered: [],
      stats: {
        totalCorrections: 0,
        totalClusters: 0,
        avgClusterSize: 0,
        largestCluster: 0,
        reductionRatio: 0,
      },
    };
  }

  // Get embeddings for all corrections
  const embeddings = await Promise.all(
    corrections.map(c => getCorrectionEmbedding(c, fullConfig.forceRecalculate))
  );

  // Agglomerative clustering
  const clusters: CorrectionCluster[] = [];
  const assigned = new Set<string>();

  for (let i = 0; i < corrections.length; i++) {
    if (assigned.has(corrections[i].id)) continue;

    // Start new cluster with this correction
    const clusterCorrections: Correction[] = [corrections[i]];
    const clusterEmbeddings: number[][] = [embeddings[i]];
    assigned.add(corrections[i].id);

    // Find all similar corrections
    for (let j = i + 1; j < corrections.length; j++) {
      if (assigned.has(corrections[j].id)) continue;

      const similarity = cosineSimilarity(embeddings[i], embeddings[j]);

      if (similarity >= fullConfig.similarityThreshold) {
        clusterCorrections.push(corrections[j]);
        clusterEmbeddings.push(embeddings[j]);
        assigned.add(corrections[j].id);
      }
    }

    // Only create cluster if meets minimum size
    if (clusterCorrections.length >= fullConfig.minClusterSize) {
      const representative = selectRepresentative(clusterCorrections);

      clusters.push({
        id: uuidv4(),
        stepName,
        canonicalPattern: generateCanonicalPattern(clusterCorrections),
        corrections: clusterCorrections,
        count: clusterCorrections.length,
        centroidEmbedding: calculateCentroid(clusterEmbeddings),
        representativeCorrection: representative,
        mergedInputSummary: mergeInputSummaries(clusterCorrections),
        avgConfidence: clusterCorrections.reduce((s, c) => s + c.confidence, 0) / clusterCorrections.length,
        avgSuccessRate: clusterCorrections.reduce((s, c) => s + c.success_rate, 0) / clusterCorrections.length,
        totalTimesApplied: clusterCorrections.reduce((s, c) => s + c.times_applied, 0),
        updatedAt: new Date().toISOString(),
      });
    }
  }

  // Sort by count (largest first)
  clusters.sort((a, b) => b.count - a.count);

  // Limit to maxClusters
  const limitedClusters = clusters.slice(0, fullConfig.maxClusters);

  // Find unclustered corrections
  const clusteredIds = new Set(
    limitedClusters.flatMap(c => c.corrections.map(corr => corr.id))
  );
  const unclustered = corrections.filter(c => !clusteredIds.has(c.id));

  return {
    clusters: limitedClusters,
    unclustered,
    stats: {
      totalCorrections: corrections.length,
      totalClusters: limitedClusters.length,
      avgClusterSize: limitedClusters.length > 0
        ? limitedClusters.reduce((s, c) => s + c.count, 0) / limitedClusters.length
        : 0,
      largestCluster: limitedClusters.length > 0 ? limitedClusters[0].count : 0,
      reductionRatio: corrections.length > 0
        ? 1 - (limitedClusters.length / corrections.length)
        : 0,
    },
  };
}

/**
 * Find relevant clusters for a query
 */
export async function findRelevantClusters(
  query: string,
  stepName: string,
  limit = 3
): Promise<CorrectionCluster[]> {
  const { clusters } = await clusterCorrections(stepName);

  if (clusters.length === 0) return [];

  // Get query embedding
  const queryEmbedding = await getEmbedding(query);

  // Score clusters by similarity to query
  const scoredClusters = clusters.map(cluster => ({
    cluster,
    similarity: cosineSimilarity(queryEmbedding, cluster.centroidEmbedding),
  }));

  // Filter and sort
  return scoredClusters
    .filter(sc => sc.similarity > 0.3)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
    .map(sc => sc.cluster);
}

/**
 * Get cluster statistics for a step
 */
export async function getClusterStats(stepName: string): Promise<{
  totalCorrections: number;
  clusters: { pattern: string; count: number; avgConfidence: number }[];
}> {
  const { clusters, stats } = await clusterCorrections(stepName);

  return {
    totalCorrections: stats.totalCorrections,
    clusters: clusters.map(c => ({
      pattern: c.canonicalPattern,
      count: c.count,
      avgConfidence: c.avgConfidence,
    })),
  };
}

/**
 * Clear embedding cache
 */
export function clearEmbeddingCache(): void {
  embeddingCache.clear();
}
```

#### Task 3.3: Create embeddings utility

**File:** `src/llm/embeddings.ts`

```typescript
/**
 * Embeddings Utility
 *
 * Generate text embeddings using OpenAI's API.
 */

import OpenAI from 'openai';

const openai = new OpenAI();

/**
 * Embedding cache with TTL
 */
interface CacheEntry {
  embedding: number[];
  timestamp: number;
}

const embeddingCache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 30 * 60 * 1000;  // 30 minutes

/**
 * Get embedding for text
 */
export async function getEmbedding(
  text: string,
  model = 'text-embedding-3-small'
): Promise<number[]> {
  // Check cache
  const cacheKey = `${model}:${text}`;
  const cached = embeddingCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.embedding;
  }

  // Generate embedding
  const response = await openai.embeddings.create({
    model,
    input: text,
  });

  const embedding = response.data[0].embedding;

  // Cache result
  embeddingCache.set(cacheKey, {
    embedding,
    timestamp: Date.now(),
  });

  return embedding;
}

/**
 * Get embeddings for multiple texts (batched)
 */
export async function getEmbeddings(
  texts: string[],
  model = 'text-embedding-3-small'
): Promise<number[][]> {
  // Check cache for each
  const results: (number[] | null)[] = texts.map(text => {
    const cacheKey = `${model}:${text}`;
    const cached = embeddingCache.get(cacheKey);
    return cached && Date.now() - cached.timestamp < CACHE_TTL_MS
      ? cached.embedding
      : null;
  });

  // Find uncached texts
  const uncachedIndices = results
    .map((r, i) => r === null ? i : -1)
    .filter(i => i !== -1);

  if (uncachedIndices.length === 0) {
    return results as number[][];
  }

  // Batch request for uncached
  const uncachedTexts = uncachedIndices.map(i => texts[i]);
  const response = await openai.embeddings.create({
    model,
    input: uncachedTexts,
  });

  // Update cache and results
  for (let i = 0; i < uncachedIndices.length; i++) {
    const originalIndex = uncachedIndices[i];
    const embedding = response.data[i].embedding;

    results[originalIndex] = embedding;

    const cacheKey = `${model}:${texts[originalIndex]}`;
    embeddingCache.set(cacheKey, {
      embedding,
      timestamp: Date.now(),
    });
  }

  return results as number[][];
}

/**
 * Clear embedding cache
 */
export function clearEmbeddingCache(): void {
  embeddingCache.clear();
}
```

#### Task 3.4: Integrate clustering into injector

**File:** `src/self-learn/injector/index.ts` (modify)

```typescript
// Add import
import { findRelevantClusters } from '../corrections/clustering';

// Add option to use clustered retrieval
export interface CorrectionContextOptions {
  // ... existing options
  useClustering?: boolean;
}

// Modify getCorrectionsContext to optionally use clustering
export async function getCorrectionsContext(
  context: { stepName: string; inputSummary: string },
  options: CorrectionContextOptions = {}
): Promise<InjectionResult> {
  let corrections: Correction[];

  if (options.useClustering) {
    // Use clustered retrieval
    const clusters = await findRelevantClusters(
      context.inputSummary,
      context.stepName,
      options.limit ?? 3
    );

    // Use representative correction from each cluster
    corrections = clusters.map(c => c.representativeCorrection);
  } else {
    // Use existing retrieval
    corrections = await findRelevantCorrections(
      context.inputSummary,
      context.stepName,
      options.limit ?? 3
    );
  }

  // ... rest of function
}
```

#### Task 3.5: Add CLI command for clustering

**File:** `src/cli/commands/corrections.ts` (modify)

```typescript
// Add cluster subcommand
program
  .command('cluster <stepName>')
  .description('Cluster corrections for a step')
  .option('--threshold <number>', 'Similarity threshold (default: 0.85)')
  .action(async (stepName: string, options) => {
    const { clusterCorrections } = await import('../../self-learn/corrections/clustering');

    console.log(`Clustering corrections for ${stepName}...`);

    const result = await clusterCorrections(stepName, {
      similarityThreshold: options.threshold ? parseFloat(options.threshold) : undefined,
    });

    console.log('\nClustering Results:');
    console.log(`  Total corrections: ${result.stats.totalCorrections}`);
    console.log(`  Clusters formed: ${result.stats.totalClusters}`);
    console.log(`  Avg cluster size: ${result.stats.avgClusterSize.toFixed(1)}`);
    console.log(`  Largest cluster: ${result.stats.largestCluster}`);
    console.log(`  Reduction ratio: ${(result.stats.reductionRatio * 100).toFixed(1)}%`);

    console.log('\nClusters:');
    for (const cluster of result.clusters.slice(0, 10)) {
      console.log(`\n  "${cluster.canonicalPattern}"`);
      console.log(`    Count: ${cluster.count}`);
      console.log(`    Avg confidence: ${(cluster.avgConfidence * 100).toFixed(0)}%`);
      console.log(`    Total applied: ${cluster.totalTimesApplied}`);
    }

    if (result.unclustered.length > 0) {
      console.log(`\n  (${result.unclustered.length} unclustered corrections)`);
    }
  });
```

**Files to Create:**
- `src/self-learn/corrections/clustering-types.ts`
- `src/self-learn/corrections/clustering.ts`
- `src/llm/embeddings.ts`

**Files to Modify:**
- `src/self-learn/injector/index.ts`
- `src/cli/commands/corrections.ts`

**Testing:**
```bash
# Cluster corrections
npm run cli corrections cluster billings

# Verify clustering reduces noise
npm run cli corrections cluster billings --threshold 0.9
```

---

## 4. Synthetic Test Case Generation

**Goal:** Automatically generate test cases from corrections to expand coverage.

**Architecture:**

```
┌─────────────────┐
│  Correction     │
│  or Pattern     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  LLM Generator  │────▶│  Generated      │
│  (GPT-4o)       │     │  Test Cases     │
└─────────────────┘     └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  Validation     │
                        │  & Dedup        │
                        └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  Test Suite     │
                        │  (YAML)         │
                        └─────────────────┘
```

### Implementation

#### Task 4.1: Create test generation types

**File:** `src/self-learn/test-generation/types.ts`

```typescript
/**
 * Test Generation Types
 */

import type { Correction } from '../types';

/**
 * Source for generating test cases
 */
export interface GenerationSource {
  type: 'correction' | 'pattern' | 'cluster';
  /** Correction ID, pattern string, or cluster ID */
  sourceId: string;
  /** Additional context for generation */
  context?: string;
}

/**
 * Generated test case (before validation)
 */
export interface GeneratedTestCase {
  /** Generated ID */
  id: string;
  /** Test case name */
  name: string;
  /** Description of what this tests */
  description: string;
  /** Input fields (ZucaInput partial) */
  input: {
    customer_name: string;
    use_case_description: string;
    terms_months: number;
    billing_period: string;
    contract_start_date: string;
    transaction_currency: string;
    is_allocations?: boolean;
  };
  /** Steps to focus evaluation on */
  focus_steps: string[];
  /** Tags for filtering */
  tags: string[];
  /** Source information */
  derivedFrom: GenerationSource;
  /** Expected failure pattern (for adversarial tests) */
  expectedFailurePattern?: string;
  /** Generation metadata */
  metadata: {
    generatedAt: string;
    model: string;
    validated: boolean;
  };
}

/**
 * Generation configuration
 */
export interface GenerationConfig {
  /** Number of test cases to generate */
  count: number;
  /** Model to use for generation */
  model: string;
  /** Generate adversarial tests (designed to trigger failures) */
  adversarial: boolean;
  /** Ensure diversity in generated tests */
  ensureDiversity: boolean;
  /** Temperature for generation (higher = more diverse) */
  temperature: number;
}

/**
 * Generation result
 */
export interface GenerationResult {
  /** Successfully generated test cases */
  testCases: GeneratedTestCase[];
  /** Generation errors */
  errors: string[];
  /** Statistics */
  stats: {
    requested: number;
    generated: number;
    validated: number;
    duplicatesRemoved: number;
  };
}

/**
 * Default generation configuration
 */
export const DEFAULT_GENERATION_CONFIG: GenerationConfig = {
  count: 3,
  model: 'gpt-4o',
  adversarial: false,
  ensureDiversity: true,
  temperature: 0.7,
};
```

#### Task 4.2: Create test generator

**File:** `src/self-learn/test-generation/generator.ts`

```typescript
/**
 * Test Case Generator
 *
 * Generates test cases from corrections, patterns, or clusters.
 */

import { v4 as uuidv4 } from 'uuid';
import { complete } from '../../llm/client';
import { getCorrection, getCorrectionsForStep } from '../corrections';
import { clusterCorrections } from '../corrections/clustering';
import type { Correction } from '../types';
import type {
  GenerationSource,
  GeneratedTestCase,
  GenerationConfig,
  GenerationResult,
} from './types';
import { DEFAULT_GENERATION_CONFIG } from './types';

/**
 * Build generation prompt
 */
function buildGenerationPrompt(
  source: GenerationSource,
  corrections: Correction[],
  config: GenerationConfig
): string {
  const isAdversarial = config.adversarial;

  const correctionContext = corrections.map(c => `
Pattern: ${c.pattern}
Issue Type: ${c.issue_type}
What went wrong: ${c.expected_behavior}
Input that caused failure: ${c.input_summary}
`).join('\n---\n');

  return `You are a QA engineer creating test cases for a billing/subscription system.

${isAdversarial ? `
TASK: Generate ${config.count} ADVERSARIAL test cases designed to trigger the same failures.
These should be tricky edge cases that stress-test the system.
` : `
TASK: Generate ${config.count} test cases that test similar scenarios.
These should be realistic variations that would catch similar bugs.
`}

CONTEXT - Previous failures:
${correctionContext}

REQUIREMENTS:
1. Use realistic company names (real or plausible)
2. Each test case should be DIFFERENT from the others
3. Include variations in:
   - Billing periods (Monthly, Quarterly, Annual)
   - Term lengths (6, 12, 18, 24 months)
   - Currencies (USD, EUR, GBP)
   - Pricing structures (flat, ramp, tiered)
4. Focus on the specific failure patterns shown above
5. Make descriptions clear about what the test validates

${config.ensureDiversity ? `
DIVERSITY: Ensure significant variation between test cases:
- Different industries (SaaS, telecom, media, fintech)
- Different pricing models
- Different contract structures
` : ''}

RESPOND WITH JSON ARRAY:
[
  {
    "name": "Short descriptive name",
    "description": "What this test validates and why",
    "customer_name": "Company Name",
    "use_case_description": "Detailed scenario with specific pricing, terms, etc.",
    "terms_months": 12,
    "billing_period": "Monthly",
    "contract_start_date": "01/01/2026",
    "transaction_currency": "USD",
    "is_allocations": false,
    "focus_steps": ["billings", "design_subscription"],
    "tags": ["tag1", "tag2"]
  }
]

Generate exactly ${config.count} test cases.`;
}

/**
 * Parse and validate generated test cases
 */
function parseGeneratedTests(
  response: string,
  source: GenerationSource,
  config: GenerationConfig
): GeneratedTestCase[] {
  try {
    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = response;
    const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1];
    }

    const parsed = JSON.parse(jsonStr);

    if (!Array.isArray(parsed)) {
      throw new Error('Response is not an array');
    }

    return parsed.map((tc, i) => ({
      id: `generated-${source.sourceId}-${uuidv4().slice(0, 8)}`,
      name: tc.name || `Generated Test ${i + 1}`,
      description: tc.description || '',
      input: {
        customer_name: tc.customer_name || 'Generated Corp',
        use_case_description: tc.use_case_description || '',
        terms_months: tc.terms_months || 12,
        billing_period: tc.billing_period || 'Monthly',
        contract_start_date: tc.contract_start_date || '01/01/2026',
        transaction_currency: tc.transaction_currency || 'USD',
        is_allocations: tc.is_allocations ?? false,
      },
      focus_steps: tc.focus_steps || ['billings'],
      tags: [
        ...(tc.tags || []),
        'generated',
        config.adversarial ? 'adversarial' : 'variation',
      ],
      derivedFrom: source,
      expectedFailurePattern: config.adversarial ? source.sourceId : undefined,
      metadata: {
        generatedAt: new Date().toISOString(),
        model: config.model,
        validated: false,
      },
    }));
  } catch (error) {
    console.error('Failed to parse generated tests:', error);
    return [];
  }
}

/**
 * Remove duplicate test cases
 */
function deduplicateTests(tests: GeneratedTestCase[]): {
  unique: GeneratedTestCase[];
  removed: number;
} {
  const seen = new Set<string>();
  const unique: GeneratedTestCase[] = [];

  for (const test of tests) {
    // Create fingerprint from key fields
    const fingerprint = [
      test.input.customer_name.toLowerCase(),
      test.input.use_case_description.substring(0, 100).toLowerCase(),
      test.input.terms_months,
      test.input.billing_period,
    ].join('|');

    if (!seen.has(fingerprint)) {
      seen.add(fingerprint);
      unique.push(test);
    }
  }

  return {
    unique,
    removed: tests.length - unique.length,
  };
}

/**
 * Generate test cases from a correction
 */
export async function generateFromCorrection(
  correctionId: string,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig = { ...DEFAULT_GENERATION_CONFIG, ...config };

  const correction = await getCorrection(correctionId);
  if (!correction) {
    return {
      testCases: [],
      errors: [`Correction ${correctionId} not found`],
      stats: { requested: fullConfig.count, generated: 0, validated: 0, duplicatesRemoved: 0 },
    };
  }

  const source: GenerationSource = {
    type: 'correction',
    sourceId: correctionId,
  };

  const prompt = buildGenerationPrompt(source, [correction], fullConfig);

  try {
    const response = await complete(prompt, {
      model: fullConfig.model as any,
      temperature: fullConfig.temperature,
    });

    const generated = parseGeneratedTests(response, source, fullConfig);
    const { unique, removed } = deduplicateTests(generated);

    return {
      testCases: unique,
      errors: [],
      stats: {
        requested: fullConfig.count,
        generated: generated.length,
        validated: unique.length,
        duplicatesRemoved: removed,
      },
    };
  } catch (error) {
    return {
      testCases: [],
      errors: [error instanceof Error ? error.message : 'Unknown error'],
      stats: { requested: fullConfig.count, generated: 0, validated: 0, duplicatesRemoved: 0 },
    };
  }
}

/**
 * Generate test cases from a pattern string
 */
export async function generateFromPattern(
  pattern: string,
  stepName: string,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig = { ...DEFAULT_GENERATION_CONFIG, ...config };

  // Find corrections matching this pattern
  const allCorrections = await getCorrectionsForStep(stepName);
  const matchingCorrections = allCorrections.filter(c =>
    c.pattern.toLowerCase().includes(pattern.toLowerCase()) ||
    c.expected_behavior.toLowerCase().includes(pattern.toLowerCase())
  );

  if (matchingCorrections.length === 0) {
    return {
      testCases: [],
      errors: [`No corrections found matching pattern "${pattern}"`],
      stats: { requested: fullConfig.count, generated: 0, validated: 0, duplicatesRemoved: 0 },
    };
  }

  const source: GenerationSource = {
    type: 'pattern',
    sourceId: pattern,
    context: stepName,
  };

  // Use top 5 matching corrections for context
  const topCorrections = matchingCorrections.slice(0, 5);
  const prompt = buildGenerationPrompt(source, topCorrections, fullConfig);

  try {
    const response = await complete(prompt, {
      model: fullConfig.model as any,
      temperature: fullConfig.temperature,
    });

    const generated = parseGeneratedTests(response, source, fullConfig);
    const { unique, removed } = deduplicateTests(generated);

    return {
      testCases: unique,
      errors: [],
      stats: {
        requested: fullConfig.count,
        generated: generated.length,
        validated: unique.length,
        duplicatesRemoved: removed,
      },
    };
  } catch (error) {
    return {
      testCases: [],
      errors: [error instanceof Error ? error.message : 'Unknown error'],
      stats: { requested: fullConfig.count, generated: 0, validated: 0, duplicatesRemoved: 0 },
    };
  }
}

/**
 * Generate adversarial test cases designed to trigger failures
 */
export async function generateAdversarialTests(
  stepName: string,
  count = 5,
  config: Partial<GenerationConfig> = {}
): Promise<GenerationResult> {
  const fullConfig = {
    ...DEFAULT_GENERATION_CONFIG,
    ...config,
    count,
    adversarial: true,
  };

  // Get clusters to find common failure patterns
  const { clusters } = await clusterCorrections(stepName);

  if (clusters.length === 0) {
    return {
      testCases: [],
      errors: ['No correction clusters found - run evaluation first'],
      stats: { requested: count, generated: 0, validated: 0, duplicatesRemoved: 0 },
    };
  }

  // Generate from top clusters
  const topClusters = clusters.slice(0, 3);
  const allTests: GeneratedTestCase[] = [];
  const allErrors: string[] = [];

  for (const cluster of topClusters) {
    const source: GenerationSource = {
      type: 'cluster',
      sourceId: cluster.id,
      context: cluster.canonicalPattern,
    };

    const prompt = buildGenerationPrompt(
      source,
      cluster.corrections.slice(0, 3),
      { ...fullConfig, count: Math.ceil(count / topClusters.length) }
    );

    try {
      const response = await complete(prompt, {
        model: fullConfig.model as any,
        temperature: fullConfig.temperature,
      });

      const generated = parseGeneratedTests(source, source, fullConfig);
      allTests.push(...generated);
    } catch (error) {
      allErrors.push(error instanceof Error ? error.message : 'Unknown error');
    }
  }

  const { unique, removed } = deduplicateTests(allTests);

  return {
    testCases: unique.slice(0, count),
    errors: allErrors,
    stats: {
      requested: count,
      generated: allTests.length,
      validated: unique.length,
      duplicatesRemoved: removed,
    },
  };
}
```

#### Task 4.3: Create test suite writer

**File:** `src/self-learn/test-generation/suite-writer.ts`

```typescript
/**
 * Test Suite Writer
 *
 * Writes generated test cases to YAML files.
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { stringify as stringifyYaml } from 'yaml';
import type { GeneratedTestCase } from './types';

const TEST_SUITES_DIR = path.join(process.cwd(), 'data', 'test-suites');

/**
 * Test suite structure
 */
interface TestSuite {
  name: string;
  version: string;
  description: string;
  tests: Array<{
    id: string;
    name: string;
    description: string;
    input: Record<string, unknown>;
    focus_steps: string[];
    tags: string[];
  }>;
}

/**
 * Write generated test cases to a new suite file
 */
export async function writeTestSuite(
  suiteName: string,
  testCases: GeneratedTestCase[],
  options: {
    description?: string;
    append?: boolean;
  } = {}
): Promise<string> {
  const filePath = path.join(TEST_SUITES_DIR, `${suiteName}.yaml`);

  let existingTests: TestSuite['tests'] = [];

  // If appending, load existing tests
  if (options.append) {
    try {
      const existing = await fs.readFile(filePath, 'utf-8');
      const parsed = require('yaml').parse(existing);
      existingTests = parsed.tests || [];
    } catch {
      // File doesn't exist, start fresh
    }
  }

  // Convert generated test cases to suite format
  const newTests = testCases.map(tc => ({
    id: tc.id,
    name: tc.name,
    description: tc.description,
    input: tc.input,
    focus_steps: tc.focus_steps,
    tags: tc.tags,
  }));

  const suite: TestSuite = {
    name: suiteName,
    version: '1.0',
    description: options.description || `Generated test suite: ${suiteName}`,
    tests: [...existingTests, ...newTests],
  };

  const yaml = stringifyYaml(suite, {
    lineWidth: 100,
    defaultStringType: 'QUOTE_DOUBLE',
  });

  await fs.writeFile(filePath, yaml);

  return filePath;
}

/**
 * List existing test suites
 */
export async function listTestSuites(): Promise<string[]> {
  const files = await fs.readdir(TEST_SUITES_DIR);
  return files
    .filter(f => f.endsWith('.yaml') || f.endsWith('.yml'))
    .map(f => f.replace(/\.(yaml|yml)$/, ''));
}
```

#### Task 4.4: Add CLI commands

**File:** `src/cli/commands/tests.ts` (new)

```typescript
/**
 * Test Generation CLI Commands
 */

import { Command } from 'commander';
import {
  generateFromCorrection,
  generateFromPattern,
  generateAdversarialTests,
} from '../../self-learn/test-generation/generator';
import { writeTestSuite, listTestSuites } from '../../self-learn/test-generation/suite-writer';

const program = new Command('tests')
  .description('Test case generation commands');

program
  .command('generate')
  .description('Generate test cases')
  .option('--from-correction <id>', 'Generate from a specific correction')
  .option('--from-pattern <pattern>', 'Generate from a pattern string')
  .option('--step <step>', 'Step name (required with --from-pattern)')
  .option('--adversarial', 'Generate adversarial tests')
  .option('-c, --count <number>', 'Number of tests to generate', '3')
  .option('-m, --model <model>', 'Model to use', 'gpt-4o')
  .option('-o, --output <suite>', 'Output suite name')
  .option('--append', 'Append to existing suite')
  .action(async (options) => {
    const count = parseInt(options.count);
    const config = { count, model: options.model };

    let result;

    if (options.fromCorrection) {
      console.log(`Generating ${count} tests from correction ${options.fromCorrection}...`);
      result = await generateFromCorrection(options.fromCorrection, config);
    } else if (options.fromPattern) {
      if (!options.step) {
        console.error('--step is required with --from-pattern');
        process.exit(1);
      }
      console.log(`Generating ${count} tests from pattern "${options.fromPattern}"...`);
      result = await generateFromPattern(options.fromPattern, options.step, config);
    } else if (options.adversarial) {
      if (!options.step) {
        console.error('--step is required with --adversarial');
        process.exit(1);
      }
      console.log(`Generating ${count} adversarial tests for ${options.step}...`);
      result = await generateAdversarialTests(options.step, count, config);
    } else {
      console.error('Specify --from-correction, --from-pattern, or --adversarial');
      process.exit(1);
    }

    // Report results
    console.log('\nGeneration Results:');
    console.log(`  Requested: ${result.stats.requested}`);
    console.log(`  Generated: ${result.stats.generated}`);
    console.log(`  Validated: ${result.stats.validated}`);
    console.log(`  Duplicates removed: ${result.stats.duplicatesRemoved}`);

    if (result.errors.length > 0) {
      console.log('\nErrors:');
      result.errors.forEach(e => console.log(`  - ${e}`));
    }

    if (result.testCases.length > 0) {
      console.log('\nGenerated Test Cases:');
      for (const tc of result.testCases) {
        console.log(`\n  ${tc.name}`);
        console.log(`    ID: ${tc.id}`);
        console.log(`    Customer: ${tc.input.customer_name}`);
        console.log(`    Terms: ${tc.input.terms_months} months, ${tc.input.billing_period}`);
        console.log(`    Tags: ${tc.tags.join(', ')}`);
      }

      // Write to suite if output specified
      if (options.output) {
        const filePath = await writeTestSuite(
          options.output,
          result.testCases,
          { append: options.append }
        );
        console.log(`\n✅ Written to ${filePath}`);
      }
    }
  });

program
  .command('list')
  .description('List available test suites')
  .action(async () => {
    const suites = await listTestSuites();
    console.log('Available test suites:');
    suites.forEach(s => console.log(`  - ${s}`));
  });

export default program;
```

#### Task 4.5: Register CLI command

**File:** `src/cli/index.ts` (modify)

```typescript
// Add import
import testsCommand from './commands/tests';

// Register command
program.addCommand(testsCommand);
```

**Files to Create:**
- `src/self-learn/test-generation/types.ts`
- `src/self-learn/test-generation/generator.ts`
- `src/self-learn/test-generation/suite-writer.ts`
- `src/cli/commands/tests.ts`

**Files to Modify:**
- `src/cli/index.ts`

**Testing:**
```bash
# Generate from a correction
npm run cli tests generate --from-correction <id> -c 3 -o generated-tests

# Generate from a pattern
npm run cli tests generate --from-pattern "ramp pricing" --step billings -c 5

# Generate adversarial tests
npm run cli tests generate --adversarial --step design_subscription -c 5 -o adversarial-tests

# List suites
npm run cli tests list

# Run evaluation on generated suite
npm run cli evaluate --suite generated-tests
```

---

## Implementation Order

### Phase 1: Foundation (Week 1)
1. **1.1 Complete Step Injection** - 3 hours
2. **1.3 Close Effectiveness Loop** - 2 hours
3. **3.3 Create Embeddings Utility** - 1 hour

### Phase 2: Core Features (Week 2)
4. **3.1-3.2 Semantic Clustering** - 6 hours
5. **3.4-3.5 Integrate Clustering** - 2 hours
6. **1.2 Auto-Apply Suggestions** - 4 hours

### Phase 3: Advanced Evaluation (Week 3)
7. **2.1-2.3 Multi-Judge Ensemble** - 6 hours

### Phase 4: Test Generation (Week 4)
8. **4.1-4.5 Synthetic Test Generation** - 8 hours

---

## Testing Checklist

After each phase, verify:

- [ ] `npm run typecheck` passes
- [ ] `npm run test:run` passes
- [ ] Manual test of new CLI commands
- [ ] Integration test: full evaluation cycle works

---

## Dependencies

```
# Required packages (should already be installed)
uuid
yaml
openai

# May need to add
# (none expected)
```

---

## Notes

- All file paths are relative to project root
- Step names use underscores (e.g., `analyze_contract`)
- Criteria files use underscores (fixed in bug fix)
- Embeddings require OpenAI API key
