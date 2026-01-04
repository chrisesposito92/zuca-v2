/**
 * Benchmark Runner
 *
 * Orchestrates running test suites across multiple LLM models
 * and collecting comprehensive performance metrics.
 */

import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../config';
import type { LlmModel } from '../types/llm';
import { LLM_MODELS } from '../types/llm';
import { runPipeline } from '../pipeline/index';
import { loadTestSuite, testCaseToZucaInput } from '../self-learn/evaluation/test-suites';
import { evaluateOutput } from '../self-learn/judge';
import { getCriteriaIfExists } from '../self-learn/criteria';
import type { TestCase, EvaluationCriteria, JudgeResult } from '../self-learn/types';
import type { ZucaOutput } from '../types/output';
import {
  aggregateSpeedMetrics,
  aggregateQualityMetrics,
  aggregateCostMetrics,
  aggregateReliabilityMetrics,
} from './metrics';
import type {
  BenchmarkOptions,
  BenchmarkComparison,
  ModelBenchmarkResult,
  TestRunResult,
  BenchmarkRankings,
  ModelRanking,
  BenchmarkProgressCallback,
  TokenUsage,
} from './types';

// =============================================================================
// Step Output Mapping (same as evaluation runner)
// =============================================================================

/**
 * Mapping from step names to output fields in pipeline result
 */
const STEP_OUTPUT_MAP: Record<string, string | string[]> = {
  analyze_contract: ['contract_intel', 'detected_capabilities'],
  design_subscription: ['subscription_spec', 'pob_mapping'],
  contracts_orders: ['contracts_orders', 'pob_mapping'],
  billings: 'billings',
  revrec_waterfall: ['revrec_waterfall', 'contracts_orders', 'pob_mapping'],
  summarize: 'summary',
};

/**
 * Get step output from pipeline result
 */
function getStepOutput(stepName: string, pipelineResult: Record<string, unknown>): unknown {
  const outputField = STEP_OUTPUT_MAP[stepName];

  if (Array.isArray(outputField)) {
    const combined: Record<string, unknown> = {};
    for (const field of outputField) {
      const value = pipelineResult[field];
      if (value !== undefined) {
        combined[field] = value;
      }
    }
    return Object.keys(combined).length > 0 ? combined : null;
  }

  return outputField ? pipelineResult[outputField] : null;
}

// =============================================================================
// Single Test Execution
// =============================================================================

/**
 * Run a single test case and collect all metrics
 */
async function runSingleTest(
  testCase: TestCase,
  model: LlmModel,
  criteriaByStep: Map<string, EvaluationCriteria>,
  options: BenchmarkOptions
): Promise<TestRunResult> {
  const startTime = Date.now();
  const input = testCaseToZucaInput(testCase);

  const stepTimings: Record<string, number> = {};
  let tokenUsage: TokenUsage | undefined;
  let judgeResult: JudgeResult | undefined;
  let error: string | undefined;
  let errorType: TestRunResult['errorType'];
  let completed = true;
  let passed = true;

  try {
    // Run pipeline
    const pipelineStartTime = Date.now();
    const pipelineResult = (await runPipeline(input, { model })) as ZucaOutput & Record<string, unknown>;
    const pipelineDuration = Date.now() - pipelineStartTime;

    // Extract step timings from pipeline result if available
    // For now, we'll just track total pipeline time
    stepTimings['pipeline'] = pipelineDuration;

    // Skip quality evaluation if requested
    if (options.skipEvaluation) {
      passed = true;
    } else {
      // Evaluate each step that has criteria
      let allStepsPassed = true;
      let lastJudgeResult: JudgeResult | undefined;

      for (const [stepName, criteria] of criteriaByStep) {
        // Skip if filtering steps and this isn't in the list
        if (options.steps?.length && !options.steps.includes(stepName)) {
          continue;
        }

        // Skip if test case has focus_steps and this step isn't focused
        if (testCase.focus_steps?.length && !testCase.focus_steps.includes(stepName)) {
          continue;
        }

        const stepOutput = getStepOutput(stepName, pipelineResult);
        if (!stepOutput) continue;

        // Build input summary for judge
        const inputSummary = [
          `Customer: ${input.customer_name}`,
          `Contract: ${input.contract_start_date} - ${input.terms_months} months`,
          `Billing: ${input.billing_period}`,
          `Description: ${input.use_case_description?.substring(0, 200) || 'N/A'}...`,
        ].join('\n');

        try {
          const evalStartTime = Date.now();
          const evalResult = await evaluateOutput(
            stepName,
            inputSummary,
            stepOutput,
            criteria,
            { model: options.judgeModel || model }
          );
          stepTimings[`eval_${stepName}`] = Date.now() - evalStartTime;

          lastJudgeResult = evalResult;

          if (!evalResult.overall_pass) {
            allStepsPassed = false;
          }
        } catch (evalError) {
          debugLog(`Evaluation error for ${stepName}:`, evalError);
          allStepsPassed = false;
          errorType = 'evaluation_error';
        }
      }

      passed = allStepsPassed;
      judgeResult = lastJudgeResult;
    }

    // Note: Token usage tracking would require changes to the LLM client
    // to accumulate tokens across a pipeline run. For now, we leave it undefined
    // and could enhance this in the future.

  } catch (e) {
    completed = false;
    passed = false;
    error = e instanceof Error ? e.message : String(e);
    errorType = 'pipeline_error';
    debugLog(`Test ${testCase.id} failed:`, error);
  }

  const durationMs = Date.now() - startTime;

  return {
    testId: testCase.id,
    testName: testCase.name,
    passed,
    completed,
    durationMs,
    stepTimings,
    tokenUsage,
    judgeResult,
    error,
    errorType,
  };
}

// =============================================================================
// Model-Level Aggregation
// =============================================================================

/**
 * Aggregate test results into model-level metrics
 */
function aggregateModelResults(
  model: LlmModel,
  suiteName: string,
  results: TestRunResult[],
  startedAt: string
): ModelBenchmarkResult {
  return {
    model,
    suiteName,
    startedAt,
    completedAt: new Date().toISOString(),
    testResults: results,
    speed: aggregateSpeedMetrics(results),
    quality: aggregateQualityMetrics(results),
    cost: aggregateCostMetrics(model, results),
    reliability: aggregateReliabilityMetrics(results),
  };
}

// =============================================================================
// Rankings
// =============================================================================

/**
 * Create rankings from model results
 */
function createRankings(
  results: Record<string, ModelBenchmarkResult>
): BenchmarkRankings {
  const models = Object.keys(results) as LlmModel[];

  // Quality ranking (higher is better)
  const byQuality: ModelRanking[] = models
    .map((m) => ({ model: m, value: results[m].quality.passRate, rank: 0 }))
    .sort((a, b) => b.value - a.value)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  // Speed ranking (lower is better)
  const bySpeed: ModelRanking[] = models
    .map((m) => ({ model: m, value: results[m].speed.avgTestMs, rank: 0 }))
    .sort((a, b) => a.value - b.value)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  // Cost ranking (lower is better)
  const byCost: ModelRanking[] = models
    .map((m) => ({ model: m, value: results[m].cost.estimatedCostUsd, rank: 0 }))
    .sort((a, b) => a.value - b.value)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  // Reliability ranking (higher is better)
  const byReliability: ModelRanking[] = models
    .map((m) => ({ model: m, value: results[m].reliability.completionRate, rank: 0 }))
    .sort((a, b) => b.value - a.value)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  // Overall composite score (average of ranks - lower is better)
  const rankMap = new Map<LlmModel, number[]>();
  for (const model of models) {
    rankMap.set(model, []);
  }

  for (const ranking of [byQuality, bySpeed, byCost, byReliability]) {
    for (const r of ranking) {
      rankMap.get(r.model)!.push(r.rank);
    }
  }

  const overall: ModelRanking[] = models
    .map((m) => {
      const ranks = rankMap.get(m)!;
      const avgRank = ranks.reduce((sum, r) => sum + r, 0) / ranks.length;
      return { model: m, value: avgRank, rank: 0 };
    })
    .sort((a, b) => a.value - b.value)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  return { byQuality, bySpeed, byCost, byReliability, overall };
}

// =============================================================================
// Main Benchmark Runner
// =============================================================================

/**
 * Run benchmark across all specified models
 */
export async function runBenchmark(
  options: BenchmarkOptions,
  onProgress?: BenchmarkProgressCallback
): Promise<BenchmarkComparison> {
  const runId = uuidv4();
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  // Default to all models if not specified
  const modelsToRun = options.models.length > 0
    ? options.models
    : [...LLM_MODELS];

  debugLog('Starting benchmark', {
    runId,
    models: modelsToRun,
    suite: options.suite,
  });

  // Load test suite
  const suite = await loadTestSuite(options.suite);
  const tests = options.testIds?.length
    ? suite.tests.filter((t) => options.testIds!.includes(t.id))
    : suite.tests;

  debugLog(`Loaded ${tests.length} tests from suite ${options.suite}`);

  // Load criteria for all steps
  const criteriaByStep = new Map<string, EvaluationCriteria>();
  const stepsToLoad = options.steps?.length ? options.steps : Object.keys(STEP_OUTPUT_MAP);

  for (const stepName of stepsToLoad) {
    const criteria = await getCriteriaIfExists(stepName);
    if (criteria) {
      criteriaByStep.set(stepName, criteria);
      debugLog(`Loaded criteria for step: ${stepName}`);
    }
  }

  // Run benchmark for each model
  const modelResults: Record<string, ModelBenchmarkResult> = {};

  for (const model of modelsToRun) {
    const modelStartedAt = new Date().toISOString();
    const testResults: TestRunResult[] = [];

    debugLog(`Starting benchmark for model: ${model}`);

    onProgress?.('model_start', { model });

    for (let i = 0; i < tests.length; i++) {
      const testCase = tests[i];

      onProgress?.('test_start', {
        model,
        testIndex: i + 1,
        totalTests: tests.length,
        testId: testCase.id,
      });

      const result = await runSingleTest(testCase, model, criteriaByStep, options);
      testResults.push(result);

      onProgress?.('test_complete', {
        model,
        testIndex: i + 1,
        totalTests: tests.length,
        testId: testCase.id,
        passed: result.passed,
        durationMs: result.durationMs,
      });
    }

    modelResults[model] = aggregateModelResults(model, options.suite, testResults, modelStartedAt);

    onProgress?.('model_complete', { model });

    debugLog(`Completed benchmark for model: ${model}`, {
      passRate: modelResults[model].quality.passRate,
      avgTime: modelResults[model].speed.avgTestMs,
    });
  }

  const totalDurationMs = Date.now() - startTime;

  // Create rankings
  const rankings = createRankings(modelResults);

  // Build summary
  const bestQuality = rankings.byQuality[0];
  const bestSpeed = rankings.bySpeed[0];
  const bestCost = rankings.byCost[0];

  const comparison: BenchmarkComparison = {
    runId,
    suiteName: options.suite,
    timestamp,
    models: modelsToRun,
    results: modelResults as Record<LlmModel, ModelBenchmarkResult>,
    rankings,
    summary: {
      totalTests: tests.length,
      totalDurationMs,
      bestQuality: {
        model: bestQuality.model,
        passRate: bestQuality.value,
      },
      bestSpeed: {
        model: bestSpeed.model,
        avgMs: bestSpeed.value,
      },
      bestCost: {
        model: bestCost.model,
        costUsd: bestCost.value,
      },
    },
  };

  debugLog('Benchmark complete', {
    runId,
    totalDuration: totalDurationMs,
    modelsRun: modelsToRun.length,
  });

  return comparison;
}

/**
 * Run a quick benchmark with a single model (useful for testing)
 */
export async function runQuickBenchmark(
  model: LlmModel,
  suite: string = 'golden-quick',
  testIds?: string[]
): Promise<ModelBenchmarkResult> {
  const options: BenchmarkOptions = {
    models: [model],
    suite,
    testIds,
  };

  const result = await runBenchmark(options);
  return result.results[model];
}
