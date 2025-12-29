/**
 * Self-Learning Pipeline System
 *
 * Automated feedback loop for continuous pipeline improvement:
 * 1. Test cases run through pipeline
 * 2. LLM judge evaluates outputs against behavioral criteria
 * 3. Corrections stored when outputs fail
 * 4. Corrections injected as few-shot examples on future runs
 * 5. Prompt improvements suggested when patterns emerge
 */

// Types
export * from './types';

// Corrections Store
export {
  getCorrectionsBackend,
  storeCorrection,
  findRelevantCorrections,
  getPatternStats,
  getCorrectionsForStep,
  getAllCorrections,
  isCorrectionsReady,
  clearEmbeddingCache,
} from './corrections';

// Criteria Loading
export {
  loadCriteria,
  loadAllCriteria,
  listAvailableCriteria,
  clearCriteriaCache,
  getCriteriaIfExists,
} from './criteria';

// Judge (Phase 2)
export {
  evaluateOutput,
  evaluateSingleCriterion,
  hasCriticalFailures,
  getFailedEvaluations,
  type EvaluateOptions,
} from './judge';

// Evaluation Runner (Phase 2)
export {
  runEvaluationSuite,
  runStepEvaluation,
  evaluateSingleTest,
  loadTestSuite,
  loadAllTestSuites,
  listTestSuites,
  createQuickTestCase,
  type RunEvaluationOptions,
  type TestCaseResult,
} from './evaluation';

// Injection (Phase 3) + Effectiveness Tracking (Phase 5)
export {
  getCorrectionsContext,
  getCorrectionsContextString,
  formatCorrectionForPrompt,
  formatCorrectionsSection,
  hasCorrectionsForStep,
  markCorrectionEffectiveness,
  buildInputSummary,
  // Effectiveness tracking
  startCorrectionTracking,
  getRunContext,
  clearRunContext,
  type GetCorrectionsContextOptions,
} from './injector';

// Evolution (Phase 4)
export {
  analyzePatterns,
  analyzeAllPatterns,
  generatePromptSuggestion,
  getPendingSuggestions,
  getSuggestionsForStep,
  getSuggestion,
  approveSuggestion,
  rejectSuggestion,
  markSuggestionApplied,
  getPromptPath,
  runSelfImproveIteration,
  type PatternAnalysis,
  type AnalyzeOptions,
  type SelfImproveResult,
} from './evolution';
