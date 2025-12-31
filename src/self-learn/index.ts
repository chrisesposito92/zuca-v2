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
  // Clustering
  clusterCorrections,
  findRelevantClusters,
  getClusterStats,
  clusterAllCorrections,
  type CorrectionCluster,
  type ClusteringConfig,
  type ClusteringResult,
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
  // Ensemble evaluation
  evaluateWithEnsemble,
  formatEnsembleResultForDisplay,
  createEnsembleConfig,
  DEFAULT_ENSEMBLE_CONFIG,
  LIGHTWEIGHT_ENSEMBLE_CONFIG,
  type EvaluateOptions,
  type EnsembleConfig,
  type EnsembleResult,
  type JudgeConfig,
  type SingleJudgeResult,
  type Disagreement,
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
  // Apply suggestion functionality
  applyPromptSuggestion,
  rollbackPromptSuggestion,
  listBackups,
  getAvailableSteps,
  type PatternAnalysis,
  type AnalyzeOptions,
  type SelfImproveResult,
  type SelfImproveOptions,
  type ApplyResult,
  type RollbackResult,
} from './evolution';

// Training Data Export (for SLM fine-tuning)
export {
  // Capture functions (for use during evaluation)
  startTrainingCapture,
  getCaptureContext,
  clearCaptureContext,
  captureSuccessfulOutput,
  flushCapturedExamples,
  // Example creation
  createExampleFromEvaluation,
  createExampleFromCorrection,
  generateExamplesFromCorrections,
  // Dataset management
  loadTrainingDataset,
  saveTrainingDataset,
  addExamplesToDataset,
  // Export functions
  exportTrainingData,
  getTrainingStats,
  syncCorrectionsToTraining,
  // Types
  type ChatMessage,
  type TrainingExample,
  type TrainingDataset,
  type TrainingExportOptions,
  type TrainingCaptureContext,
} from './training';
