/**
 * Corrections Injector
 *
 * Retrieves relevant corrections and formats them as few-shot examples
 * for injection into pipeline step prompts.
 */

import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import { findRelevantCorrections, getCorrectionsBackend, findRelevantClusters } from '../corrections';
import type {
  Correction,
  InjectionContext,
  InjectionResult,
  CorrectionRunContext,
  EffectivenessRecord,
  EffectivenessSummary,
} from '../types';

// =============================================================================
// Run Context Management (for effectiveness tracking)
// =============================================================================

/** Current active run context - tracks corrections applied during pipeline execution */
let currentRunContext: CorrectionRunContext | null = null;

/** Effectiveness log for the current evaluation run - persists across test cases */
let effectivenessLog: EffectivenessRecord[] = [];

/** Pattern lookup for building the summary */
const correctionPatternMap = new Map<string, string>();

/**
 * Start a new correction tracking context for a pipeline run
 *
 * Call this before running the pipeline to begin tracking which corrections
 * are applied. Then use `getRunContext()` after evaluation to see results.
 */
export function startCorrectionTracking(runId?: string): CorrectionRunContext {
  currentRunContext = {
    runId: runId || uuidv4(),
    appliedByStep: new Map(),
    startedAt: new Date(),
  };
  debugLog(`Started correction tracking for run: ${currentRunContext.runId}`);
  return currentRunContext;
}

/**
 * Get the current run context
 */
export function getRunContext(): CorrectionRunContext | null {
  return currentRunContext;
}

/**
 * Clear the current run context
 */
export function clearRunContext(): void {
  currentRunContext = null;
}

/**
 * Start a new effectiveness tracking session (call at start of evaluation run)
 */
export function startEffectivenessTracking(): void {
  effectivenessLog = [];
  correctionPatternMap.clear();
  debugLog('Started effectiveness tracking for evaluation run');
}

/**
 * Record that corrections were applied to a step (with pattern caching for summary)
 */
function recordAppliedCorrections(
  stepName: string,
  corrections: Correction[]
): void {
  if (!currentRunContext) return;

  const correctionIds = corrections.map((c) => c.id);
  const existing = currentRunContext.appliedByStep.get(stepName) || [];
  currentRunContext.appliedByStep.set(stepName, [...existing, ...correctionIds]);

  // Cache patterns for summary building
  for (const c of corrections) {
    correctionPatternMap.set(c.id, c.pattern);
  }
}

/**
 * Record effectiveness outcomes for corrections applied during a test case
 *
 * Call this after evaluating each test case to log whether corrections helped.
 *
 * @param testId - The test case ID
 * @param stepResults - Map of step name -> whether the step passed
 */
export function recordEffectivenessOutcomes(
  testId: string,
  stepResults: Map<string, boolean>
): void {
  if (!currentRunContext) return;

  for (const [stepName, correctionIds] of currentRunContext.appliedByStep) {
    const passed = stepResults.get(stepName);
    if (passed === undefined) continue; // Step wasn't evaluated

    for (const correctionId of correctionIds) {
      effectivenessLog.push({
        correctionId,
        stepName,
        testId,
        helped: passed,
        appliedAt: new Date().toISOString(),
      });
    }
  }
}

/**
 * Get the effectiveness summary for the current evaluation run
 */
export function getEffectivenessSummary(): EffectivenessSummary | undefined {
  if (effectivenessLog.length === 0) {
    return undefined;
  }

  const totalApplied = effectivenessLog.length;
  const helped = effectivenessLog.filter((r) => r.helped).length;
  const didNotHelp = totalApplied - helped;
  const effectivenessRate = totalApplied > 0 ? helped / totalApplied : 0;

  // Group by step
  const byStep: Record<string, { applied: number; helped: number; rate: number }> = {};
  for (const record of effectivenessLog) {
    if (!byStep[record.stepName]) {
      byStep[record.stepName] = { applied: 0, helped: 0, rate: 0 };
    }
    byStep[record.stepName].applied++;
    if (record.helped) {
      byStep[record.stepName].helped++;
    }
  }
  for (const step of Object.keys(byStep)) {
    byStep[step].rate =
      byStep[step].applied > 0 ? byStep[step].helped / byStep[step].applied : 0;
  }

  // Calculate per-correction stats
  const correctionStats = new Map<string, { helped: number; total: number }>();
  for (const record of effectivenessLog) {
    const stats = correctionStats.get(record.correctionId) || { helped: 0, total: 0 };
    stats.total++;
    if (record.helped) {
      stats.helped++;
    }
    correctionStats.set(record.correctionId, stats);
  }

  // Sort to find top and low performers
  const sortedCorrections = Array.from(correctionStats.entries())
    .map(([id, stats]) => ({
      correctionId: id,
      pattern: correctionPatternMap.get(id) || 'Unknown',
      helpedCount: stats.helped,
      totalApplied: stats.total,
      rate: stats.total > 0 ? stats.helped / stats.total : 0,
    }))
    .sort((a, b) => b.rate - a.rate || b.totalApplied - a.totalApplied);

  const topPerformers = sortedCorrections
    .filter((c) => c.rate >= 0.7 && c.totalApplied >= 1)
    .slice(0, 5);

  const lowPerformers = sortedCorrections
    .filter((c) => c.rate <= 0.3 && c.totalApplied >= 2)
    .slice(-5)
    .reverse();

  return {
    totalApplied,
    helped,
    didNotHelp,
    effectivenessRate,
    byStep,
    topPerformers: topPerformers.length > 0 ? topPerformers : undefined,
    lowPerformers: lowPerformers.length > 0 ? lowPerformers : undefined,
  };
}

/**
 * Clear effectiveness log (call at end of evaluation run)
 */
export function clearEffectivenessLog(): void {
  effectivenessLog = [];
  correctionPatternMap.clear();
}

/**
 * Options for getting corrections context
 */
export interface GetCorrectionsContextOptions {
  /** Maximum number of corrections to include */
  limit?: number;
  /** Minimum confidence threshold */
  minConfidence?: number;
  /** Include example fix in output */
  includeExampleFix?: boolean;
  /** Track that corrections were applied */
  trackApplied?: boolean;
  /**
   * Use semantic clustering for retrieval (default: false)
   *
   * When enabled, corrections are first clustered by semantic similarity,
   * and only the best representative from each cluster is returned.
   * This reduces noise when there are many similar corrections.
   */
  useClustering?: boolean;
}

/**
 * Truncate text for prompt inclusion (avoid token bloat)
 */
function truncateForPrompt(text: string, maxChars: number = 800): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + '\n... [truncated]';
}

/**
 * Format a single correction as a contrastive few-shot example for the LLM
 *
 * Uses contrastive learning format showing both:
 * - ❌ What NOT to do (incorrect output)
 * - ✅ What TO do (correct output)
 *
 * This helps the LLM understand boundaries better than only showing correct examples.
 */
export function formatCorrectionForPrompt(correction: Correction): string {
  const lines: string[] = [];

  // Header with criterion ID if available
  const headerSuffix = correction.criteria_id ? ` (${correction.criteria_id})` : '';
  lines.push(`## 🔧 Past Mistake: ${correction.pattern}${headerSuffix}`);
  lines.push('');

  // Context: when this occurs
  lines.push(`**Scenario:** ${correction.input_summary}`);
  lines.push('');

  // Contrastive section: What NOT to do
  if (correction.incorrect_output) {
    lines.push('### ❌ INCORRECT OUTPUT (What NOT to do):');
    const incorrectStr = typeof correction.incorrect_output === 'object'
      ? JSON.stringify(correction.incorrect_output, null, 2)
      : String(correction.incorrect_output);
    lines.push('```json');
    lines.push(truncateForPrompt(incorrectStr));
    lines.push('```');
    lines.push('');
  }

  // Contrastive section: What TO do
  if (correction.example_fix) {
    lines.push('### ✅ CORRECT OUTPUT (What to produce):');
    const correctStr = typeof correction.example_fix === 'object'
      ? JSON.stringify(correction.example_fix, null, 2)
      : String(correction.example_fix);
    lines.push('```json');
    lines.push(truncateForPrompt(correctStr));
    lines.push('```');
    lines.push('');
  }

  // Explanation: Why this matters
  lines.push(`### 📝 Why This Matters:`);
  lines.push(`**Issue Type:** ${correction.issue_type.replace(/_/g, ' ')}`);
  lines.push('');
  lines.push(`**Expected Behavior:** ${correction.expected_behavior}`);
  lines.push('');
  lines.push(`**Fix:** ${correction.correction}`);

  return lines.join('\n');
}

/**
 * Format multiple corrections as a prompt section with contrastive examples
 */
export function formatCorrectionsSection(corrections: Correction[]): string {
  if (corrections.length === 0) {
    return '';
  }

  const header = [
    '---',
    '# 🎯 Learned Corrections (Contrastive Examples)',
    '',
    'The following corrections show **past mistakes** to help you avoid them.',
    'Each includes:',
    '- ❌ **INCORRECT** - What NOT to produce',
    '- ✅ **CORRECT** - What you SHOULD produce instead',
    '',
    'Study these patterns carefully to avoid repeating the same mistakes:',
    '',
  ];

  const formattedCorrections = corrections.map(formatCorrectionForPrompt);

  return [...header, ...formattedCorrections.join('\n\n---\n\n'), '---', ''].join('\n');
}

/**
 * Get corrections context for a pipeline step
 *
 * Retrieves relevant corrections based on the input and formats them
 * for injection into the prompt.
 *
 * @param context - Information about the current step and input
 * @param options - Configuration options
 * @returns InjectionResult with formatted text and applied correction IDs
 */
export async function getCorrectionsContext(
  context: InjectionContext,
  options: GetCorrectionsContextOptions = {}
): Promise<InjectionResult> {
  const { limit = 3, minConfidence = 0.5, trackApplied = true, useClustering = false } = options;

  const emptyResult: InjectionResult = { context: '', appliedCorrectionIds: [], count: 0 };

  try {
    let corrections: Correction[];

    if (useClustering) {
      // Use clustered retrieval - returns representative correction from each cluster
      debugLog(`Using clustered correction retrieval for step: ${context.stepName}`);
      const clusters = await findRelevantClusters(context.inputSummary, context.stepName, limit);
      corrections = clusters.map((cluster) => cluster.representativeCorrection);
      debugLog(`Retrieved ${corrections.length} cluster representatives`);
    } else {
      // Standard retrieval - search for relevant corrections directly
      corrections = await findRelevantCorrections(context.inputSummary, context.stepName, limit);
    }

    // Filter by confidence
    corrections = corrections.filter((c) => c.confidence >= minConfidence);

    if (corrections.length === 0) {
      debugLog(`No corrections found for step: ${context.stepName}`);
      return emptyResult;
    }

    debugLog(`Found ${corrections.length} relevant corrections for ${context.stepName}`);

    const appliedIds = corrections.map((c) => c.id);

    // Track that these corrections were applied
    if (trackApplied) {
      const backend = getCorrectionsBackend();
      for (const correction of corrections) {
        try {
          await backend.updateStats(correction.id, true, false);
        } catch {
          // Non-critical, don't fail the pipeline
          debugLog(`Failed to track correction application: ${correction.id}`);
        }
      }

      // Record in run context for effectiveness tracking (pass full corrections for pattern caching)
      recordAppliedCorrections(context.stepName, corrections);
    }

    return {
      context: formatCorrectionsSection(corrections),
      appliedCorrectionIds: appliedIds,
      count: corrections.length,
    };
  } catch (error) {
    debugLog(`Error getting corrections context: ${error}`);
    return emptyResult;
  }
}

/**
 * Get corrections context as a simple string (for backward compatibility)
 *
 * @deprecated Use getCorrectionsContext() which returns InjectionResult
 */
export async function getCorrectionsContextString(
  context: InjectionContext,
  options: GetCorrectionsContextOptions = {}
): Promise<string> {
  const result = await getCorrectionsContext(context, options);
  return result.context;
}

/**
 * Check if corrections are available for a step
 */
export async function hasCorrectionsForStep(stepName: string): Promise<boolean> {
  try {
    const corrections = await findRelevantCorrections('', stepName, 1);
    return corrections.length > 0;
  } catch {
    return false;
  }
}

/**
 * Mark a correction as having helped (or not) with the current output
 *
 * This is called after evaluation to track correction effectiveness.
 *
 * @param correctionId - The correction ID
 * @param helped - Whether the correction helped produce correct output
 */
export async function markCorrectionEffectiveness(
  correctionId: string,
  helped: boolean
): Promise<void> {
  try {
    const backend = getCorrectionsBackend();
    await backend.updateStats(correctionId, false, helped);
  } catch (error) {
    debugLog(`Failed to update correction effectiveness: ${error}`);
  }
}

/**
 * Build an input summary for correction matching
 *
 * Creates a concise summary of the input that can be used
 * to find relevant corrections.
 */
export function buildInputSummary(input: Record<string, unknown>): string {
  const parts: string[] = [];

  // Extract key fields that affect correction matching
  if (input.customer_name) {
    parts.push(`Customer: ${input.customer_name}`);
  }

  if (input.use_case_description) {
    const desc = String(input.use_case_description);
    parts.push(`Description: ${desc.substring(0, 200)}${desc.length > 200 ? '...' : ''}`);
  }

  if (input.billing_period) {
    parts.push(`Billing: ${input.billing_period}`);
  }

  if (input.terms_months) {
    parts.push(`Terms: ${input.terms_months} months`);
  }

  if (input.is_allocations) {
    parts.push(`Allocations: ${input.allocation_method || 'Yes'}`);
  }

  return parts.join('\n');
}
