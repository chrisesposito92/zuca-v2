/**
 * Benchmark Module
 *
 * Cross-model comparison and performance benchmarking for ZUCA.
 */

// Types
export * from './types';

// Metrics utilities
export {
  calculateCost,
  formatCost,
  formatDuration,
  formatDurationCompact,
  formatNumber,
  formatPercent,
  aggregateTokenUsage,
  aggregateSpeedMetrics,
  aggregateQualityMetrics,
  aggregateCostMetrics,
  aggregateReliabilityMetrics,
  standardDeviation,
  percentile,
} from './metrics';

// Runner
export { runBenchmark, runQuickBenchmark } from './runner';

// Reporting
export {
  printConsoleSummary,
  generateMarkdownReport,
  serializeToJson,
  createConsoleProgressCallback,
} from './report';
