/**
 * Prompt Evolution Module
 *
 * Analyzes correction patterns and generates prompt improvement suggestions.
 * When the same types of errors occur repeatedly, this module suggests
 * permanent prompt updates to prevent future failures.
 *
 * Uses dual-backend pattern: JSON for local dev, Postgres for production.
 * Set USE_POSTGRES_SUGGESTIONS=true (with POSTGRES_URL) for Postgres.
 */

import { complete } from '../../llm/client';
import { loadPrompt, PROMPTS } from '../../llm/prompts';
import { debugLog } from '../../config';
import { getCorrectionsForStep, getPatternStats, getAllCorrections } from '../corrections';
import type { Correction } from '../types';

// Backend imports
import { SuggestionsJsonBackend } from './suggestions-json-backend';
import { SuggestionsPostgresBackend } from './suggestions-postgres-backend';
import type {
  SuggestionsBackend,
  PromptSuggestion,
  PromptSuggestionStatus,
} from './suggestions-types';

// Re-export types for convenience
export type { PromptSuggestion, PromptSuggestionStatus } from './suggestions-types';

// =============================================================================
// Dual Backend Setup
// =============================================================================

/**
 * Check if we should use Postgres backend
 * Requires both POSTGRES_URL and USE_POSTGRES_SUGGESTIONS=true
 */
function usePostgres(): boolean {
  return !!process.env.POSTGRES_URL && process.env.USE_POSTGRES_SUGGESTIONS === 'true';
}

/**
 * Singleton backend instance
 */
let backend: SuggestionsBackend | null = null;

/**
 * Get the suggestions backend (creates singleton on first call)
 */
export function getSuggestionsBackend(): SuggestionsBackend {
  if (!backend) {
    if (usePostgres()) {
      debugLog('Using Postgres suggestions backend');
      backend = new SuggestionsPostgresBackend();
    } else {
      debugLog('Using JSON suggestions backend');
      backend = new SuggestionsJsonBackend();
    }
  }
  return backend;
}

/**
 * Reset the backend (useful for testing)
 */
export function resetSuggestionsBackend(): void {
  backend = null;
}

/**
 * Pattern analysis result
 */
export interface PatternAnalysis {
  stepName: string;
  totalCorrections: number;
  patterns: Array<{
    pattern: string;
    count: number;
    percentage: number;
    issueTypes: string[];
    sampleCorrections: Correction[];
  }>;
  suggestedActions: string[];
}

/**
 * Options for pattern analysis
 */
export interface AnalyzeOptions {
  /** Minimum occurrences to consider a pattern significant */
  minOccurrences?: number;
  /** Maximum patterns to return */
  maxPatterns?: number;
  /** Include sample corrections in output */
  includeSamples?: boolean;
}

/**
 * Analyze correction patterns for a specific step
 */
export async function analyzePatterns(
  stepName: string,
  options: AnalyzeOptions = {}
): Promise<PatternAnalysis> {
  const { minOccurrences = 2, maxPatterns = 10, includeSamples = true } = options;

  debugLog(`Analyzing patterns for step: ${stepName}`);

  // Get all corrections for this step
  const corrections = await getCorrectionsForStep(stepName);
  const patternStats = await getPatternStats(stepName);

  if (corrections.length === 0) {
    return {
      stepName,
      totalCorrections: 0,
      patterns: [],
      suggestedActions: ['No corrections found - run evaluation to generate corrections'],
    };
  }

  // Build pattern analysis
  const patterns = patternStats
    .filter((p) => p.count >= minOccurrences)
    .slice(0, maxPatterns)
    .map((stat) => {
      const matchingCorrections = corrections.filter((c) => c.pattern === stat.pattern);
      const issueTypes = [...new Set(matchingCorrections.map((c) => c.issue_type))];

      return {
        pattern: stat.pattern,
        count: stat.count,
        percentage: Math.round((stat.count / corrections.length) * 100),
        issueTypes,
        sampleCorrections: includeSamples ? matchingCorrections.slice(0, 2) : [],
      };
    });

  // Generate suggested actions based on patterns
  const suggestedActions: string[] = [];

  if (patterns.length === 0) {
    suggestedActions.push('No recurring patterns found yet - more evaluation data needed');
  } else {
    const topPattern = patterns[0];
    if (topPattern.percentage > 50) {
      suggestedActions.push(
        `High priority: "${topPattern.pattern}" accounts for ${topPattern.percentage}% of failures`
      );
      suggestedActions.push('Consider running `prompts suggest` to generate a prompt improvement');
    }

    if (patterns.length > 3) {
      suggestedActions.push(
        `Multiple recurring issues detected (${patterns.length} patterns) - systematic prompt review recommended`
      );
    }
  }

  return {
    stepName,
    totalCorrections: corrections.length,
    patterns,
    suggestedActions,
  };
}

/**
 * Analyze patterns across all steps
 */
export async function analyzeAllPatterns(
  options: AnalyzeOptions = {}
): Promise<Map<string, PatternAnalysis>> {
  const corrections = await getAllCorrections();
  const stepNames = [...new Set(corrections.map((c) => c.step_name))];

  const results = new Map<string, PatternAnalysis>();

  for (const stepName of stepNames) {
    const analysis = await analyzePatterns(stepName, options);
    results.set(stepName, analysis);
  }

  return results;
}

/**
 * Generate a prompt suggestion based on correction patterns
 */
export async function generatePromptSuggestion(
  stepName: string,
  pattern: string
): Promise<PromptSuggestion | null> {
  debugLog(`Generating prompt suggestion for ${stepName}: ${pattern}`);

  // Get corrections matching this pattern
  const corrections = await getCorrectionsForStep(stepName);
  const matchingCorrections = corrections.filter((c) => c.pattern === pattern);

  if (matchingCorrections.length === 0) {
    debugLog('No corrections found for pattern');
    return null;
  }

  // Load the current prompt for this step
  const promptKey = stepNameToPromptKey(stepName);
  if (!promptKey) {
    debugLog(`No prompt key found for step: ${stepName}`);
    return null;
  }

  let currentPrompt: string;
  try {
    currentPrompt = await loadPrompt(promptKey);
  } catch {
    debugLog(`Failed to load prompt for ${promptKey}`);
    return null;
  }

  // Build context for the LLM to generate a suggestion
  const correctionsSummary = matchingCorrections
    .slice(0, 5)
    .map(
      (c, i) =>
        `${i + 1}. Issue: ${c.issue_type}\n` +
        `   Input: ${c.input_summary.substring(0, 100)}...\n` +
        `   Expected: ${c.expected_behavior}\n` +
        `   Fix: ${c.correction}`
    )
    .join('\n\n');

  // Use LLM to generate prompt improvement
  const systemPrompt = `You are a prompt engineering expert. Your task is to suggest improvements to an LLM prompt based on recurring failure patterns.

Analyze the current prompt and the correction patterns, then suggest a specific addition or modification to prevent these failures in the future.

Output format:
{
  "suggested_update": "The specific text to add or modify in the prompt",
  "placement": "Where in the prompt to add this (e.g., 'after the output format section', 'in the behavioral rules')",
  "rationale": "Why this change will help prevent the failures"
}`;

  const userMessage = `## Current Prompt (${stepName})
\`\`\`
${currentPrompt.substring(0, 2000)}${currentPrompt.length > 2000 ? '...(truncated)' : ''}
\`\`\`

## Recurring Failure Pattern: ${pattern}
Occurrences: ${matchingCorrections.length}

## Sample Corrections
${correctionsSummary}

Based on these recurring failures, suggest a specific improvement to the prompt that would prevent this issue in the future.`;

  const result = await complete<{
    suggested_update: string;
    placement: string;
    rationale: string;
  }>({
    systemPrompt,
    userMessage,
    responseSchema: {
      type: 'object',
      properties: {
        suggested_update: { type: 'string' },
        placement: { type: 'string' },
        rationale: { type: 'string' },
      },
      required: ['suggested_update', 'placement', 'rationale'],
      additionalProperties: false,
    },
  });

  if (!result.structured) {
    debugLog('Failed to generate prompt suggestion');
    return null;
  }

  // Create and store the suggestion using the backend
  const suggestion = await getSuggestionsBackend().insert({
    step_name: stepName,
    pattern,
    occurrence_count: matchingCorrections.length,
    suggested_update: `## Placement: ${result.structured.placement}\n\n${result.structured.suggested_update}\n\n## Rationale\n${result.structured.rationale}`,
  });

  debugLog(`Generated suggestion: ${suggestion.id}`);
  return suggestion;
}

/**
 * Get all pending prompt suggestions
 */
export async function getPendingSuggestions(): Promise<PromptSuggestion[]> {
  return getSuggestionsBackend().getByStatus('pending');
}

/**
 * Get all suggestions
 */
export async function getAllSuggestions(): Promise<PromptSuggestion[]> {
  return getSuggestionsBackend().getAll();
}

/**
 * Get all suggestions for a step
 */
export async function getSuggestionsForStep(stepName: string): Promise<PromptSuggestion[]> {
  return getSuggestionsBackend().getByStep(stepName);
}

/**
 * Get a suggestion by ID
 */
export async function getSuggestion(id: string): Promise<PromptSuggestion | null> {
  return getSuggestionsBackend().getById(id);
}

/**
 * Update suggestion status
 */
export async function updateSuggestionStatus(
  id: string,
  status: PromptSuggestionStatus
): Promise<PromptSuggestion | null> {
  return getSuggestionsBackend().updateStatus(id, status);
}

/**
 * Approve a prompt suggestion
 */
export async function approveSuggestion(id: string): Promise<PromptSuggestion | null> {
  return updateSuggestionStatus(id, 'approved');
}

/**
 * Reject a prompt suggestion
 */
export async function rejectSuggestion(id: string): Promise<PromptSuggestion | null> {
  return updateSuggestionStatus(id, 'rejected');
}

/**
 * Mark a suggestion as applied
 */
export async function markSuggestionApplied(id: string): Promise<PromptSuggestion | null> {
  return updateSuggestionStatus(id, 'applied');
}

/**
 * Map step names to prompt keys
 */
function stepNameToPromptKey(stepName: string): string | null {
  const mapping: Record<string, string> = {
    analyze_contract: PROMPTS.ANALYZE_CONTRACT,
    design_subscription: PROMPTS.DESIGN_SUBSCRIPTION,
    contracts_orders: PROMPTS.BUILD_CONTRACTS_ORDERS,
    billings: PROMPTS.BUILD_BILLINGS,
    revrec_waterfall: PROMPTS.BUILD_REVREC_WATERFALL,
    summarize: PROMPTS.SUMMARIZE,
  };

  return mapping[stepName] || null;
}

/**
 * Get prompt file path for a step
 */
export function getPromptPath(stepName: string): string | null {
  const promptKey = stepNameToPromptKey(stepName);
  if (!promptKey) return null;

  return `src/llm/prompts/${promptKey}.md`;
}

/**
 * Self-improvement iteration
 * Runs evaluation, generates corrections, and suggests prompt improvements
 */
export interface SelfImproveResult {
  evaluationPassed: number;
  evaluationFailed: number;
  correctionsGenerated: number;
  suggestionsGenerated: number;
  topPatterns: Array<{ step: string; pattern: string; count: number }>;
}

export interface SelfImproveOptions {
  autoSuggest?: boolean;
  minPatternCount?: number;
  model?: string;
  onProgress?: (current: number, total: number, testId: string) => void;
}

export async function runSelfImproveIteration(
  suiteName: string,
  options: SelfImproveOptions = {}
): Promise<SelfImproveResult> {
  const { autoSuggest = false, minPatternCount = 3, model, onProgress } = options;

  // Import evaluation runner dynamically to avoid circular deps
  const { runEvaluationSuite } = await import('../evaluation');

  debugLog('Running self-improvement iteration');

  // Step 1: Run evaluation with corrections
  const evalResult = await runEvaluationSuite(suiteName, {
    generateCorrections: true,
    model: model as import('../../types/llm').LlmModel | undefined,
    onProgress,
  });

  debugLog(`Evaluation complete: ${evalResult.passed}/${evalResult.total} passed`);

  // Step 2: Analyze patterns
  const allAnalysis = await analyzeAllPatterns({ minOccurrences: minPatternCount });

  // Step 3: Collect top patterns across all steps
  const topPatterns: Array<{ step: string; pattern: string; count: number }> = [];
  for (const [step, analysis] of allAnalysis) {
    for (const pattern of analysis.patterns.slice(0, 3)) {
      topPatterns.push({
        step,
        pattern: pattern.pattern,
        count: pattern.count,
      });
    }
  }

  // Sort by count descending
  topPatterns.sort((a, b) => b.count - a.count);

  // Step 4: Generate suggestions if auto-suggest is enabled
  let suggestionsGenerated = 0;
  if (autoSuggest && topPatterns.length > 0) {
    const topPattern = topPatterns[0];
    const suggestion = await generatePromptSuggestion(topPattern.step, topPattern.pattern);
    if (suggestion) {
      suggestionsGenerated = 1;
    }
  }

  return {
    evaluationPassed: evalResult.passed,
    evaluationFailed: evalResult.failed,
    correctionsGenerated: evalResult.correctionsGenerated,
    suggestionsGenerated,
    topPatterns: topPatterns.slice(0, 5),
  };
}
