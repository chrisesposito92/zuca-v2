/**
 * Corrections Injector
 *
 * Retrieves relevant corrections and formats them as few-shot examples
 * for injection into pipeline step prompts.
 */

import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import { findRelevantCorrections, getCorrectionsBackend } from '../corrections';
import type { Correction, InjectionContext, InjectionResult, CorrectionRunContext } from '../types';

// =============================================================================
// Run Context Management (for effectiveness tracking)
// =============================================================================

/** Current active run context - tracks corrections applied during pipeline execution */
let currentRunContext: CorrectionRunContext | null = null;

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
 * Record that corrections were applied to a step
 */
function recordAppliedCorrections(stepName: string, correctionIds: string[]): void {
  if (!currentRunContext) return;

  const existing = currentRunContext.appliedByStep.get(stepName) || [];
  currentRunContext.appliedByStep.set(stepName, [...existing, ...correctionIds]);
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
}

/**
 * Format a single correction as a few-shot example for the LLM
 */
export function formatCorrectionForPrompt(correction: Correction): string {
  const lines = [
    `## Learned Correction: ${correction.pattern}`,
    '',
    `**Issue Type:** ${correction.issue_type.replace('_', ' ')}`,
    '',
    `**When this occurs:**`,
    correction.input_summary,
    '',
    `**Expected Behavior:**`,
    correction.expected_behavior,
    '',
    `**How to Fix:**`,
    correction.correction,
  ];

  // Include example fix if available
  if (correction.example_fix) {
    lines.push('', `**Example Correct Output:**`);
    if (typeof correction.example_fix === 'object') {
      lines.push('```json', JSON.stringify(correction.example_fix, null, 2), '```');
    } else {
      lines.push(String(correction.example_fix));
    }
  }

  return lines.join('\n');
}

/**
 * Format multiple corrections as a prompt section
 */
export function formatCorrectionsSection(corrections: Correction[]): string {
  if (corrections.length === 0) {
    return '';
  }

  const header = [
    '---',
    '# Learned Corrections',
    '',
    'The following corrections were learned from previous evaluation failures.',
    'Apply these patterns when you see similar inputs:',
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
  const { limit = 3, minConfidence = 0.5, trackApplied = true } = options;

  const emptyResult: InjectionResult = { context: '', appliedCorrectionIds: [], count: 0 };

  try {
    // Search for relevant corrections
    let corrections = await findRelevantCorrections(context.inputSummary, context.stepName, limit);

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

      // Record in run context for effectiveness tracking
      recordAppliedCorrections(context.stepName, appliedIds);
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
