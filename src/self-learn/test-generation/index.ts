/**
 * Test Generation Module
 *
 * Generates synthetic test cases from corrections, patterns, and clusters.
 * Export test cases to YAML test suites for evaluation.
 */

// Types
export type {
  GenerationSource,
  GeneratedTestInput,
  GeneratedTestCase,
  GenerationConfig,
  GenerationResult,
} from './types';
export { DEFAULT_GENERATION_CONFIG } from './types';

// Generator functions
export {
  generateFromCorrection,
  generateFromPattern,
  generateAdversarialTests,
  generateTestsFromFailures,
} from './generator';

// Suite writer functions
export type { WriteSuiteOptions, WriteSuiteResult } from './suite-writer';
export {
  writeTestSuite,
  exportToJson,
  listGeneratedSuites,
  getGeneratedTestStats,
} from './suite-writer';
