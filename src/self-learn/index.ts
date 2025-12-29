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
} from './corrections';

// Criteria Loading
export {
  loadCriteria,
  loadAllCriteria,
  listAvailableCriteria,
  clearCriteriaCache,
  getCriteriaIfExists,
} from './criteria';

// Evaluation (Phase 2)
// export { runEvaluationSuite, listSuites } from './evaluation';

// Judge (Phase 2)
// export { evaluateOutput } from './judge';

// Injection (Phase 3)
// export { getCorrectionsContext } from './injector';

// Evolution (Phase 4)
// export { analyzePatterns, approvePromptUpdate } from './evolution';
