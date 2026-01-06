/**
 * Fine-Tune Eval Runner
 *
 * Wraps the existing self-learn evaluation system to run evaluations
 * and save results in a format suitable for comparing fine-tuned models.
 */

import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { runEvaluationSuite } from '../self-learn/evaluation/runner';
import { loadTestSuite } from '../self-learn/evaluation/test-suites';
import type { LlmModel } from '../types/llm';
import type {
  FTEvalConfig,
  FTEvalResult,
  TestCaseEvalResult,
  StepEvalResult,
  EvalStats,
  EvalRunIndex,
} from './types';

// =============================================================================
// Constants
// =============================================================================

const EVALS_DIR = path.join(process.cwd(), 'data', 'ft-evals');
const INDEX_FILE = path.join(EVALS_DIR, 'index.json');

// =============================================================================
// Storage Functions
// =============================================================================

/**
 * Ensure the evals directory exists
 */
function ensureEvalsDir(): void {
  if (!fs.existsSync(EVALS_DIR)) {
    fs.mkdirSync(EVALS_DIR, { recursive: true });
  }
}

/**
 * Load the eval run index
 */
export function loadIndex(): EvalRunIndex {
  ensureEvalsDir();
  if (!fs.existsSync(INDEX_FILE)) {
    return { runs: [] };
  }
  const content = fs.readFileSync(INDEX_FILE, 'utf-8');
  return JSON.parse(content) as EvalRunIndex;
}

/**
 * Save the eval run index
 */
function saveIndex(index: EvalRunIndex): void {
  ensureEvalsDir();
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2), 'utf-8');
}

/**
 * Save an eval result to disk
 */
export function saveResult(result: FTEvalResult): string {
  ensureEvalsDir();

  // Create filename from run name and timestamp
  const safeName = result.config.name.replace(/[^a-zA-Z0-9-_]/g, '-');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `${safeName}_${timestamp}.json`;
  const filePath = path.join(EVALS_DIR, filename);

  // Save result
  fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf-8');

  // Update index
  const index = loadIndex();
  index.runs.push({
    run_id: result.run_id,
    name: result.config.name,
    model: result.config.model,
    suite: result.config.suite,
    pass_rate: result.overall.pass_rate,
    created_at: result.started_at,
    file_path: filename,
  });
  saveIndex(index);

  return filePath;
}

/**
 * Load an eval result by run ID or name
 */
export function loadResult(idOrName: string): FTEvalResult | null {
  const index = loadIndex();

  // Find by run_id or name
  const entry = index.runs.find(
    (r) => r.run_id === idOrName || r.name === idOrName
  );

  if (!entry) {
    return null;
  }

  const filePath = path.join(EVALS_DIR, entry.file_path);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as FTEvalResult;
}

/**
 * List all eval runs
 */
export function listRuns(): EvalRunIndex['runs'] {
  return loadIndex().runs;
}

// =============================================================================
// Runner Functions
// =============================================================================

/**
 * Run a fine-tune evaluation
 */
export async function runFTEval(
  config: FTEvalConfig,
  options: {
    onProgress?: (current: number, total: number, testId: string) => void;
    verbose?: boolean;
  } = {}
): Promise<FTEvalResult> {
  const runId = uuidv4();
  const startedAt = new Date();

  if (options.verbose) {
    console.log(`\n🧪 Starting fine-tune eval: ${config.name}`);
    console.log(`   Model: ${config.model}`);
    console.log(`   Suite: ${config.suite}`);
    console.log(`   Run ID: ${runId}\n`);
  }

  // Load test suite to get test names for our results
  const suite = await loadTestSuite(config.suite);
  const testNameMap = new Map<string, string>(
    suite.tests.map((t) => [t.id, t.name || t.id])
  );

  // Run the evaluation using existing infrastructure
  const evalResult = await runEvaluationSuite(config.suite, {
    model: config.model as LlmModel,
    steps: config.steps,
    testIds: config.test_ids,
    ensemble: config.ensemble,
    onProgress: options.onProgress,
  });

  const completedAt = new Date();
  const durationMs = completedAt.getTime() - startedAt.getTime();

  // Convert the evaluation result to our format
  const testResults = convertToTestResults(evalResult, testNameMap);

  // Calculate statistics
  const overall = calculateStats(testResults);
  const byStep = calculateStatsByStep(testResults);
  const byCriterion = calculateStatsByCriterion(testResults);

  const result: FTEvalResult = {
    run_id: runId,
    config,
    started_at: startedAt.toISOString(),
    completed_at: completedAt.toISOString(),
    duration_ms: durationMs,
    overall,
    by_step: byStep,
    by_criterion: byCriterion,
    test_results: testResults,
  };

  // Save result
  const savedPath = saveResult(result);

  if (options.verbose) {
    console.log(`\n✅ Evaluation complete!`);
    console.log(`   Pass rate: ${(overall.pass_rate * 100).toFixed(1)}%`);
    console.log(`   Passed: ${overall.passed}/${overall.total}`);
    console.log(`   Duration: ${(durationMs / 1000).toFixed(1)}s`);
    console.log(`   Saved to: ${savedPath}\n`);
  }

  return result;
}

/**
 * Convert existing evaluation result to our format
 */
function convertToTestResults(
  evalResult: Awaited<ReturnType<typeof runEvaluationSuite>>,
  testNameMap: Map<string, string>
): TestCaseEvalResult[] {
  // Group failures by test ID
  const failuresByTest = new Map<string, typeof evalResult.failures>();
  for (const failure of evalResult.failures) {
    const existing = failuresByTest.get(failure.testId) || [];
    existing.push(failure);
    failuresByTest.set(failure.testId, existing);
  }

  // Build results for each test
  const results: TestCaseEvalResult[] = [];

  // Note: The existing runner doesn't give us passed test IDs explicitly,
  // so we only include failed tests with detail. In the future, we could
  // enhance the existing runner to return per-test results for complete tracking.

  for (const [testId, failures] of failuresByTest) {
    const stepResultsMap = new Map<string, StepEvalResult>();

    for (const failure of failures) {
      let stepResult = stepResultsMap.get(failure.stepName);

      if (!stepResult) {
        stepResult = {
          step: failure.stepName,
          passed: false,
          criteria_results: [],
        };
        stepResultsMap.set(failure.stepName, stepResult);
      }

      if (failure.criterionId !== 'ERROR') {
        stepResult.criteria_results.push({
          criterion_id: failure.criterionId,
          criterion_name: failure.criterionId, // We don't have the name in the failure
          passed: false,
          confidence: 0,
          explanation: failure.explanation,
        });
      }
    }

    const hasError = failures.some((f) => f.criterionId === 'ERROR');
    const errorMessage = failures.find((f) => f.criterionId === 'ERROR')?.explanation;

    results.push({
      test_id: testId,
      test_name: testNameMap.get(testId) || testId,
      passed: false,
      step_results: Array.from(stepResultsMap.values()),
      error: hasError ? errorMessage : undefined,
    });
  }

  // Add passed tests (we know the count but not the individual IDs from the existing runner)
  // This is a limitation of the current integration - we only have detailed results for failures
  // For a full comparison, we'd need to enhance the existing runner

  return results;
}

/**
 * Calculate overall statistics
 */
function calculateStats(testResults: TestCaseEvalResult[]): EvalStats {
  const total = testResults.length;
  const failed = testResults.filter((t) => !t.passed).length;
  const passed = total - failed;

  return {
    total,
    passed,
    failed,
    pass_rate: total > 0 ? passed / total : 0,
  };
}

/**
 * Calculate statistics by step
 */
function calculateStatsByStep(testResults: TestCaseEvalResult[]): Record<string, EvalStats> {
  const stepCounts = new Map<string, { total: number; failed: number }>();

  for (const test of testResults) {
    for (const step of test.step_results) {
      const current = stepCounts.get(step.step) || { total: 0, failed: 0 };
      current.total++;
      if (!step.passed) {
        current.failed++;
      }
      stepCounts.set(step.step, current);
    }
  }

  const result: Record<string, EvalStats> = {};
  for (const [step, counts] of stepCounts) {
    const passed = counts.total - counts.failed;
    result[step] = {
      total: counts.total,
      passed,
      failed: counts.failed,
      pass_rate: counts.total > 0 ? passed / counts.total : 0,
    };
  }

  return result;
}

/**
 * Calculate statistics by criterion
 */
function calculateStatsByCriterion(testResults: TestCaseEvalResult[]): Record<string, EvalStats> {
  const criterionCounts = new Map<string, { total: number; failed: number }>();

  for (const test of testResults) {
    for (const step of test.step_results) {
      for (const criterion of step.criteria_results) {
        const current = criterionCounts.get(criterion.criterion_id) || { total: 0, failed: 0 };
        current.total++;
        if (!criterion.passed) {
          current.failed++;
        }
        criterionCounts.set(criterion.criterion_id, current);
      }
    }
  }

  const result: Record<string, EvalStats> = {};
  for (const [criterionId, counts] of criterionCounts) {
    const passed = counts.total - counts.failed;
    result[criterionId] = {
      total: counts.total,
      passed,
      failed: counts.failed,
      pass_rate: counts.total > 0 ? passed / counts.total : 0,
    };
  }

  return result;
}

/**
 * Quick evaluation for testing - runs only a few test cases
 */
export async function runQuickEval(
  model: string,
  options: {
    suite?: string;
    maxCases?: number;
    verbose?: boolean;
  } = {}
): Promise<FTEvalResult> {
  const suite = options.suite || 'golden-scenarios';
  const maxCases = options.maxCases || 5;

  // Load suite to get first N test IDs
  const suiteData = await loadTestSuite(suite);
  const testIds = suiteData.tests.slice(0, maxCases).map((t) => t.id);

  return runFTEval(
    {
      name: `quick-eval-${model}`,
      model,
      suite,
      test_ids: testIds,
    },
    { verbose: options.verbose }
  );
}
