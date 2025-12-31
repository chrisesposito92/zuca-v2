/**
 * Evaluation Runner
 *
 * Orchestrates running test cases through the pipeline
 * and evaluating outputs against criteria.
 */

import { v4 as uuidv4 } from 'uuid';
import { debugLog } from '../../config';
import type { LlmModel } from '../../types/llm';
import { runPipeline } from '../../pipeline/index';
import {
  evaluateOutput,
  getFailedEvaluations,
  evaluateWithEnsemble,
  createEnsembleConfig,
} from '../judge';
import type { EnsembleConfig } from '../judge';
import { getCriteriaIfExists } from '../criteria';
import { storeCorrection, getCorrectionsBackend } from '../corrections';
import {
  startCorrectionTracking,
  clearRunContext,
  startEffectivenessTracking,
  recordEffectivenessOutcomes,
  getEffectivenessSummary,
  clearEffectivenessLog,
} from '../injector';
import {
  startTrainingCapture,
  captureSuccessfulOutput,
  flushCapturedExamples,
  clearCaptureContext,
} from '../training';
import type {
  TestCase,
  EvaluationCriteria,
  EvaluationRunResult,
  EvaluationFailure,
  CorrectionInsert,
  JudgeResult,
  CorrectionRunContext,
} from '../types';
import { loadTestSuite, testCaseToZucaInput } from './test-suites';

/**
 * Mapping from step names to output fields in pipeline result
 * For most steps, this is a single field. For design_subscription,
 * we use a special marker to combine subscription_spec + pob_mapping.
 */
const STEP_OUTPUT_MAP: Record<string, string | string[]> = {
  analyze_contract: ['contract_intel', 'detected_capabilities'], // Combined for evaluation
  design_subscription: ['subscription_spec', 'pob_mapping'], // Combined for evaluation
  contracts_orders: ['contracts_orders', 'pob_mapping'], // Include pob_mapping for CO-011 cross-reference
  billings: 'billings',
  revrec_waterfall: ['revrec_waterfall', 'contracts_orders', 'pob_mapping'], // Include context for cross-step validation
  summarize: 'summary',
};

/**
 * Get step output from pipeline result, handling combined outputs
 */
function getStepOutput(stepName: string, pipelineResult: Record<string, unknown>): unknown {
  const outputField = STEP_OUTPUT_MAP[stepName];

  if (Array.isArray(outputField)) {
    // Combine multiple fields into a single object for evaluation
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

/**
 * Options for running evaluation
 */
export interface RunEvaluationOptions {
  /** LLM model for pipeline and evaluation */
  model?: LlmModel;
  /** Only evaluate specific steps */
  steps?: string[];
  /** Only run specific test IDs */
  testIds?: string[];
  /** Generate and store corrections for failures */
  generateCorrections?: boolean;
  /** Capture successful outputs as training data */
  captureTraining?: boolean;
  /** Stop on first failure */
  stopOnFirstFailure?: boolean;
  /** Callback for progress updates */
  onProgress?: (current: number, total: number, testId: string) => void;
  /** Use multi-judge ensemble evaluation */
  ensemble?: boolean;
  /** Custom ensemble configuration */
  ensembleConfig?: Partial<EnsembleConfig>;
  /** Models to use for ensemble (creates config from these) */
  ensembleModels?: LlmModel[];
}

/**
 * Result of evaluating a single test case
 */
export interface TestCaseResult {
  testId: string;
  passed: boolean;
  stepResults: Map<string, JudgeResult>;
  pipelineOutput?: unknown;
  error?: string;
}

/**
 * Update effectiveness stats for corrections that were applied during a run
 *
 * @param testId - The test case ID
 * @param runContext - The run context with applied corrections
 * @param stepResults - Map of step name -> judge result
 */
async function updateEffectivenessStats(
  testId: string,
  runContext: CorrectionRunContext | null,
  stepResults: Map<string, JudgeResult>
): Promise<void> {
  if (!runContext) return;

  const backend = getCorrectionsBackend();

  // Build a simple pass/fail map for the effectiveness log
  const stepPassMap = new Map<string, boolean>();

  for (const [stepName, correctionIds] of runContext.appliedByStep) {
    const judgeResult = stepResults.get(stepName);

    // If we evaluated this step, update effectiveness based on pass/fail
    if (judgeResult) {
      const helped = judgeResult.overall_pass;
      stepPassMap.set(stepName, helped);

      for (const correctionId of correctionIds) {
        try {
          // Update success rate: applied=false (already tracked), helped=result
          await backend.updateStats(correctionId, false, helped);
          debugLog(
            `Updated effectiveness for correction ${correctionId}: ${helped ? 'helped' : 'did not help'}`
          );
        } catch {
          debugLog(`Failed to update effectiveness for ${correctionId}`);
        }
      }
    }
  }

  // Record outcomes for the run-level effectiveness summary
  recordEffectivenessOutcomes(testId, stepPassMap);
}

/**
 * Run a single test case through the pipeline and evaluate
 */
async function runTestCase(
  testCase: TestCase,
  criteriaByStep: Map<string, EvaluationCriteria>,
  options: RunEvaluationOptions
): Promise<TestCaseResult> {
  const result: TestCaseResult = {
    testId: testCase.id,
    passed: true,
    stepResults: new Map(),
  };

  // Start tracking corrections for this test case
  const runContext = startCorrectionTracking(testCase.id);

  try {
    // Convert test case to ZucaInput and run pipeline
    const input = testCaseToZucaInput(testCase);
    debugLog(`Running test case: ${testCase.id}`);

    const pipelineResult = await runPipeline(input, { model: options.model });
    result.pipelineOutput = pipelineResult;

    // Evaluate each step that has criteria
    for (const [stepName, criteria] of criteriaByStep) {
      // Skip if we're filtering steps and this isn't in the list
      if (options.steps?.length && !options.steps.includes(stepName)) {
        continue;
      }

      // Skip if test case has focus_steps and this step isn't focused
      if (testCase.focus_steps?.length && !testCase.focus_steps.includes(stepName)) {
        continue;
      }

      // Get the output for this step (may combine multiple fields for some steps)
      const stepOutput = getStepOutput(stepName, pipelineResult as Record<string, unknown>);

      if (!stepOutput) {
        debugLog(`No output found for step ${stepName}, skipping evaluation`);
        continue;
      }

      // Create input summary for the judge
      const inputSummary = [
        `Customer: ${input.customer_name}`,
        `Contract: ${input.contract_start_date} for ${input.terms_months} months`,
        `Billing: ${input.billing_period}`,
        `Description: ${input.use_case_description?.substring(0, 200)}...`,
      ].join('\n');

      // Evaluate the output (using ensemble if enabled)
      let judgeResult: JudgeResult;

      if (options.ensemble) {
        // Build ensemble config
        const ensembleConfig = options.ensembleModels
          ? createEnsembleConfig(options.ensembleModels, options.ensembleConfig)
          : options.ensembleConfig;

        debugLog(`Using ensemble evaluation for step: ${stepName}`);
        const ensembleResult = await evaluateWithEnsemble(
          stepName,
          inputSummary,
          stepOutput,
          criteria,
          ensembleConfig
        );

        judgeResult = ensembleResult.consensus;

        // Log disagreements if any
        if (ensembleResult.disagreements.length > 0) {
          debugLog(
            `Ensemble had ${ensembleResult.disagreements.length} disagreements ` +
              `(confidence: ${(ensembleResult.overallConfidence * 100).toFixed(1)}%)`
          );
        }
      } else {
        // Standard single-judge evaluation
        judgeResult = await evaluateOutput(
          stepName,
          inputSummary,
          stepOutput,
          criteria,
          { model: options.model }
        );
      }

      result.stepResults.set(stepName, judgeResult);

      if (judgeResult.overall_pass) {
        // Capture successful output as training data if enabled
        if (options.captureTraining) {
          // Build full input context for training (more detailed than inputSummary)
          const fullInputContext = JSON.stringify(input, null, 2);
          await captureSuccessfulOutput(testCase.id, stepName, fullInputContext, stepOutput);
          debugLog(`Captured training example for ${stepName} from test ${testCase.id}`);
        }
      } else {
        result.passed = false;

        // Generate corrections if enabled
        if (options.generateCorrections) {
          await generateCorrectionsFromResult(
            testCase.id,
            stepName,
            inputSummary,
            stepOutput,
            judgeResult,
            criteria
          );
        }

        if (options.stopOnFirstFailure) {
          break;
        }
      }
    }
  } catch (error) {
    result.passed = false;
    result.error = error instanceof Error ? error.message : 'Unknown error';
    debugLog(`Test case ${testCase.id} failed with error: ${result.error}`);
  } finally {
    // Update effectiveness stats for any corrections that were applied
    await updateEffectivenessStats(testCase.id, runContext, result.stepResults);

    // Clear run context to prepare for next test
    clearRunContext();
  }

  return result;
}

/**
 * Generate and store corrections from evaluation failures
 */
async function generateCorrectionsFromResult(
  testCaseId: string,
  stepName: string,
  inputSummary: string,
  output: unknown,
  judgeResult: JudgeResult,
  criteria: EvaluationCriteria
): Promise<void> {
  const failures = getFailedEvaluations(judgeResult, criteria);

  for (const failure of failures) {
    if (!failure.correction) continue;

    const correction: CorrectionInsert = {
      test_case_id: testCaseId,
      step_name: stepName,
      issue_type: failure.correction.issue_type,
      pattern: `${failure.criterion_id}: ${failure.criterion_name}`,
      input_summary: inputSummary,
      incorrect_output: output,
      expected_behavior: failure.correction.expected_behavior,
      correction: failure.correction.suggested_fix,
      example_fix: failure.correction.example_output,
      criteria_id: failure.criterion_id,
      confidence: failure.confidence,
    };

    try {
      await storeCorrection(correction);
      debugLog(`Stored correction for ${stepName}:${failure.criterion_id}`);
    } catch (error) {
      debugLog(`Failed to store correction: ${error}`);
    }
  }
}

/**
 * Run an evaluation suite
 *
 * @param suiteName - Name of the test suite to run
 * @param options - Evaluation options
 * @returns Aggregated evaluation results
 */
export async function runEvaluationSuite(
  suiteName: string,
  options: RunEvaluationOptions = {}
): Promise<EvaluationRunResult> {
  const runId = uuidv4();
  const startedAt = new Date().toISOString();

  debugLog(`Starting evaluation run ${runId} for suite: ${suiteName}`);

  // Start effectiveness tracking for this evaluation run
  startEffectivenessTracking();

  // Start training capture if enabled
  if (options.captureTraining) {
    startTrainingCapture(runId, options.model);
    debugLog('Training capture enabled for this run');
  }

  // Load test suite
  const suite = await loadTestSuite(suiteName);

  // Load all available criteria
  const criteriaByStep = new Map<string, EvaluationCriteria>();
  const stepsToLoad = options.steps?.length
    ? options.steps
    : Object.keys(STEP_OUTPUT_MAP);

  for (const stepName of stepsToLoad) {
    const criteria = await getCriteriaIfExists(stepName);
    if (criteria) {
      criteriaByStep.set(stepName, criteria);
    }
  }

  if (criteriaByStep.size === 0) {
    return {
      runId,
      suiteName,
      startedAt,
      completedAt: new Date().toISOString(),
      total: 0,
      passed: 0,
      failed: 0,
      correctionsGenerated: 0,
      failures: [],
      model: options.model,
    };
  }

  // Filter tests if needed
  let testsToRun = suite.tests;
  if (options.testIds?.length) {
    testsToRun = testsToRun.filter((t) => options.testIds!.includes(t.id));
  }

  // Run each test
  const failures: EvaluationFailure[] = [];
  let passed = 0;
  let correctionsGenerated = 0;

  for (let i = 0; i < testsToRun.length; i++) {
    const testCase = testsToRun[i];

    if (options.onProgress) {
      options.onProgress(i + 1, testsToRun.length, testCase.id);
    }

    const result = await runTestCase(testCase, criteriaByStep, options);

    if (result.passed) {
      passed++;
    } else {
      // Collect failures
      for (const [stepName, judgeResult] of result.stepResults) {
        const criteria = criteriaByStep.get(stepName)!;
        const failedEvals = getFailedEvaluations(judgeResult, criteria);

        for (const eval_ of failedEvals) {
          failures.push({
            testId: testCase.id,
            stepName,
            criterionId: eval_.criterion_id,
            explanation: eval_.explanation,
            correction: eval_.correction,
          });

          if (eval_.correction) {
            correctionsGenerated++;
          }
        }
      }

      if (result.error) {
        failures.push({
          testId: testCase.id,
          stepName: 'pipeline',
          criterionId: 'ERROR',
          explanation: result.error,
          correction: null,
        });
      }

      if (options.stopOnFirstFailure) {
        break;
      }
    }
  }

  // Get effectiveness summary before clearing the log
  const effectivenessSummary = getEffectivenessSummary();

  // Clear the effectiveness log for the next run
  clearEffectivenessLog();

  // Flush training examples if capture was enabled
  let trainingExamplesCaptured = 0;
  if (options.captureTraining) {
    trainingExamplesCaptured = await flushCapturedExamples();
    clearCaptureContext();
    debugLog(`Flushed ${trainingExamplesCaptured} training examples`);
  }

  return {
    runId,
    suiteName,
    startedAt,
    completedAt: new Date().toISOString(),
    total: testsToRun.length,
    passed,
    failed: testsToRun.length - passed,
    correctionsGenerated,
    trainingExamplesCaptured,
    failures,
    model: options.model,
    effectivenessSummary,
  };
}

/**
 * Run evaluation for a specific step only
 */
export async function runStepEvaluation(
  stepName: string,
  suiteName: string,
  options: Omit<RunEvaluationOptions, 'steps'> = {}
): Promise<EvaluationRunResult> {
  return runEvaluationSuite(suiteName, {
    ...options,
    steps: [stepName],
  });
}

/**
 * Quick evaluation of a single test case
 */
export async function evaluateSingleTest(
  testCase: TestCase,
  stepName: string,
  options: RunEvaluationOptions = {}
): Promise<TestCaseResult> {
  const criteria = await getCriteriaIfExists(stepName);
  if (!criteria) {
    return {
      testId: testCase.id,
      passed: true,
      stepResults: new Map(),
      error: `No criteria found for step: ${stepName}`,
    };
  }

  const criteriaByStep = new Map([[stepName, criteria]]);
  return runTestCase(testCase, criteriaByStep, options);
}
