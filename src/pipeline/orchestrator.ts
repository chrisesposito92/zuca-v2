/**
 * Pipeline Orchestrator
 *
 * Manages the execution of the ZUCA pipeline, coordinating all steps
 * and maintaining state for multi-turn conversations.
 *
 * OPTIMIZED PIPELINE (v2):
 * 1. Analyze Contract (COMBINED) - Extract contract intel + detect capabilities in one call
 * 2. Match Golden Use Cases - Find similar reference implementations (pure code)
 * 3. Design Subscription (COMBINED) - Create subscription + assign POB templates in one call
 * 4. Build Contracts/Orders + Build Billings (PARALLEL) - Run both simultaneously
 * 5. Build Rev Rec Waterfall
 * 6. Summarize
 */

import { v4 as uuidv4 } from 'uuid';
import { ZucaInput, validateZucaInput } from '../types/input';
import { ZucaOutput, DetectedCapabilities, MatchGoldenUseCasesOutput } from '../types/output';
import {
  ClarificationAnswer,
  ClarificationState,
  StepClarificationRequest,
  isClarificationRequest,
  getClarificationAnswerForStep,
  formatClarificationAnswerForPrompt,
} from '../types/clarification';
import { loadGoldenUseCasesData, GoldenSubscription, GoldenRatePlanCharge } from '../data/loader';
import { config, debugLog } from '../config';
import type { LlmModel } from '../types/llm';

// Import all pipeline steps (including new combined steps)
import {
  smartRoute,
  // Combined steps (v2)
  analyzeContract,
  designSubscription,
  type ContractAnalysisOutput,
  type SubscriptionDesignOutput,
  // Legacy individual steps (kept for backwards compatibility)
  detectCapabilities,
  // Shared steps
  matchGoldenUseCases,
  getMatchedUseCaseIds,
  buildContractsOrders,
  buildBillings,
  buildRevRecWaterfall,
  summarizeResults,
  expertAssistant,
  type ExpertResponse,
  // JSON schemas for judge validation
  // NOTE: Use NESTED schemas for judge validation (match actual output types)
  contractAnalysisNestedJsonSchema,
  buildSubscriptionDesignNestedJsonSchema,
  contractsOrdersJsonSchema,
  billingsJsonSchema,
  revRecWaterfallJsonSchema,
} from './steps/index';

// Import judge module
import { withJudge, buildInputContext } from './judge';

/**
 * Pipeline execution options
 */
export interface PipelineOptions {
  /** Skip certain steps (for debugging/testing) */
  skipSteps?: string[];
  /** Continue from a previous partial result */
  previousResult?: Partial<ZucaOutput>;
  /** Session ID for multi-turn tracking */
  sessionId?: string;
  /** LLM model override */
  model?: LlmModel;
  /** Enable interactive mode for clarification questions (web UI only) */
  interactiveMode?: boolean;
  /** Answers to previous clarification questions */
  clarificationAnswers?: ClarificationAnswer[];
  /** User preference to skip all clarifications */
  skipAllClarifications?: boolean;
}

/**
 * Result returned when pipeline pauses for clarification
 */
export interface PipelineClarificationPause {
  status: 'awaiting_clarification';
  question: StepClarificationRequest['question'];
  pausedAtStep: string;
  partialResult: Partial<ZucaOutput>;
  sessionId: string;
}

/**
 * Pipeline can return either completed output or a clarification pause
 */
export type PipelineResult = ZucaOutput | PipelineClarificationPause;

/**
 * Type guard to check if pipeline result is a clarification pause
 */
export function isPipelineClarificationPause(
  result: PipelineResult
): result is PipelineClarificationPause {
  return (
    typeof result === 'object' &&
    result !== null &&
    'status' in result &&
    result.status === 'awaiting_clarification'
  );
}

/**
 * Create a ClarificationState object for DB storage from a pipeline pause
 */
export function createClarificationState(
  pause: PipelineClarificationPause,
  existingAnswers: ClarificationAnswer[] = []
): ClarificationState {
  return {
    pendingQuestion: pause.question,
    pausedAtStep: pause.pausedAtStep,
    partialResult: pause.partialResult as Record<string, unknown>,
    askedAt: new Date().toISOString(),
    answers: existingAnswers,
  };
}

/**
 * Pipeline step result with timing
 */
interface StepResult<T> {
  data: T;
  durationMs: number;
  stepName: string;
}

/**
 * Pipeline session state for multi-turn conversations
 */
export interface PipelineSession {
  id: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  input: ZucaInput;
  result: Partial<ZucaOutput>;
  model: LlmModel;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
}

/**
 * Session storage (in-memory for now, could be extended to Redis/DB)
 */
const sessions = new Map<string, PipelineSession>();

/**
 * Execute a pipeline step with timing
 */
async function executeStep<T>(
  stepName: string,
  fn: () => Promise<T>
): Promise<StepResult<T>> {
  const startTime = Date.now();
  debugLog(`Starting step: ${stepName}`);

  try {
    const data = await fn();
    const durationMs = Date.now() - startTime;
    debugLog(`Completed step: ${stepName} (${durationMs}ms)`);
    return { data, durationMs, stepName };
  } catch (error) {
    const durationMs = Date.now() - startTime;
    debugLog(`Failed step: ${stepName} (${durationMs}ms)`, error);
    throw error;
  }
}

/**
 * Check if clarifications should be skipped for this pipeline run
 */
function shouldSkipClarifications(options: PipelineOptions): boolean {
  // Skip if not in interactive mode (CLI/API calls)
  if (!options.interactiveMode) return true;
  // Skip if user preference is set
  if (options.skipAllClarifications) return true;
  return false;
}

/**
 * Get clarification context string for a step (from previous user answers)
 */
function getClarificationContext(
  stepName: string,
  answers?: ClarificationAnswer[]
): string | undefined {
  if (!answers || answers.length === 0) return undefined;

  const answer = getClarificationAnswerForStep(stepName, answers);
  if (!answer) return undefined;

  return formatClarificationAnswerForPrompt(answer);
}

/**
 * Check if we already asked a clarification question for this step
 */
function hasAskedClarificationForStep(
  stepName: string,
  answers?: ClarificationAnswer[]
): boolean {
  if (!answers || answers.length === 0) return false;
  return answers.some((a) => a.questionId.startsWith(`${stepName}:`));
}

/**
 * Result of step execution with clarification support
 */
type StepWithClarificationResult<T> =
  | { type: 'output'; data: T; durationMs: number }
  | { type: 'clarification'; request: StepClarificationRequest };

/**
 * Execute a step that may return a clarification request
 * Handles the logic of when to ask vs skip clarifications
 */
async function executeStepWithClarification<T>(
  stepName: string,
  fn: (clarificationContext?: string) => Promise<T | StepClarificationRequest>,
  options: PipelineOptions
): Promise<StepWithClarificationResult<T>> {
  const startTime = Date.now();
  debugLog(`Starting step with clarification support: ${stepName}`);

  // Determine if we should skip clarifications
  const skipClarifications = shouldSkipClarifications(options);
  const alreadyAsked = hasAskedClarificationForStep(stepName, options.clarificationAnswers);

  // Get any previous clarification answer context
  const clarificationContext = getClarificationContext(stepName, options.clarificationAnswers);

  try {
    // Execute the step
    const result = await fn(clarificationContext);
    const durationMs = Date.now() - startTime;

    // Check if step returned a clarification request
    if (isClarificationRequest(result)) {
      // If we should skip clarifications or already asked, re-run without asking
      if (skipClarifications || alreadyAsked) {
        debugLog(`Auto-skipping clarification for ${stepName} (skipClarifications=${skipClarifications}, alreadyAsked=${alreadyAsked})`);
        // Re-run the step with a "skip" context that tells it to make assumptions
        const skipContext = clarificationContext
          ? `${clarificationContext}\n\nNote: Proceed with your best judgment, do not ask for clarification.`
          : 'Note: Proceed with your best judgment, do not ask for clarification.';
        const retryResult = await fn(skipContext);

        // If it still returns a clarification, something is wrong - but continue anyway
        if (isClarificationRequest(retryResult)) {
          debugLog(`Step ${stepName} still requesting clarification after skip - this shouldn't happen`);
          throw new Error(`Step ${stepName} requires clarification but clarifications are disabled`);
        }

        const retryDurationMs = Date.now() - startTime;
        debugLog(`Completed step (skipped clarification): ${stepName} (${retryDurationMs}ms)`);
        return { type: 'output', data: retryResult as T, durationMs: retryDurationMs };
      }

      // Return the clarification request to pause the pipeline
      debugLog(`Step ${stepName} requesting clarification`);
      return { type: 'clarification', request: result };
    }

    debugLog(`Completed step: ${stepName} (${durationMs}ms)`);
    return { type: 'output', data: result as T, durationMs };
  } catch (error) {
    const durationMs = Date.now() - startTime;
    debugLog(`Failed step: ${stepName} (${durationMs}ms)`, error);
    throw error;
  }
}

/**
 * Run the full pipeline for a new use case
 *
 * Returns either a completed ZucaOutput or a PipelineClarificationPause if
 * a step requests user clarification (only in interactive mode).
 */
export async function runPipeline(
  input: ZucaInput,
  options: PipelineOptions = {}
): Promise<PipelineResult> {
  const sessionId = options.sessionId || uuidv4();
  const skipSteps = new Set(options.skipSteps || []);
  const selectedModel = options.model || (config.openai.model as LlmModel);

  debugLog('Starting pipeline', {
    sessionId,
    customerName: input.customer_name,
    interactiveMode: options.interactiveMode ?? false,
    hasClarificationAnswers: (options.clarificationAnswers?.length ?? 0) > 0,
  });

  // Validate input
  const validatedInput = validateZucaInput(input);

  // Load reference data
  const goldenData = await loadGoldenUseCasesData();

  // Initialize result
  const result: Partial<ZucaOutput> = {
    session_id: sessionId,
    timestamp: new Date().toISOString(),
    input: validatedInput,
    ...options.previousResult,
  };

  const stepTimings: Record<string, number> = {};

  try {
    // ============================================
    // OPTIMIZED PIPELINE v2 - Combined Steps + Parallel Execution
    // ============================================

    // Step 1: Analyze Contract (COMBINED - replaces contract_intel + detect_capabilities)
    // Single LLM call extracts contract parameters AND detects capabilities together
    // This step supports clarification questions in interactive mode
    if (!skipSteps.has('analyze_contract') && (!result.contract_intel || !result.detected_capabilities)) {
      const stepResult = await executeStepWithClarification<ContractAnalysisOutput>(
        'analyze_contract',
        (clarificationContext) =>
          analyzeContract(
            validatedInput,
            goldenData.capabilities,
            goldenData.keyTerms,
            clarificationContext,
            undefined, // previousAnalysis
            'medium',
            selectedModel
          ),
        options
      );

      // Check if step returned a clarification request
      if (stepResult.type === 'clarification') {
        debugLog('Pipeline pausing for clarification at analyze_contract');
        return {
          status: 'awaiting_clarification',
          question: stepResult.request.question,
          pausedAtStep: 'analyze_contract',
          partialResult: result,
          sessionId,
        };
      }

      // Apply judge validation (using NESTED schema that matches ContractAnalysisOutput)
      const judgeResult = await withJudge(
        'analyze_contract',
        stepResult.data,
        contractAnalysisNestedJsonSchema,
        buildInputContext(validatedInput)
      );

      result.contract_intel = judgeResult.output.contractIntel;
      result.detected_capabilities = judgeResult.output.detectedCapabilities;
      stepTimings.analyze_contract = stepResult.durationMs + judgeResult.judgeDurationMs;

      if (judgeResult.judgeApplied) {
        debugLog('Judge applied corrections to analyze_contract', judgeResult.judgeDetails);
      }
    }

    // Step 2: Match Golden Use Cases (Pure Code - No LLM)
    if (!skipSteps.has('match_golden_use_cases') && !result.matched_golden_use_cases) {
      const step = await executeStep('match_golden_use_cases', async () =>
        matchGoldenUseCases(result.detected_capabilities!, goldenData.capabilities)
      );
      result.matched_golden_use_cases = step.data;
      stepTimings.match_golden_use_cases = step.durationMs;
    }

    // Get context slices for matched use cases
    const matchedIds = getMatchedUseCaseIds(result.matched_golden_use_cases!);
    const contextSubs = goldenData.subscriptions.filter((s: GoldenSubscription) =>
      matchedIds.includes(s['Use Case Id'])
    );
    const contextRpcs = goldenData.ratePlansCharges.filter((r: GoldenRatePlanCharge) =>
      matchedIds.includes(r['Use Case Id'])
    );

    // Step 3: Design Subscription (COMBINED - replaces subscription_spec + pob_mapping)
    // Single LLM call creates subscription AND assigns POB templates together
    if (!skipSteps.has('design_subscription') && (!result.subscription_spec || !result.pob_mapping)) {
      const step = await executeStep<SubscriptionDesignOutput>('design_subscription', () =>
        designSubscription(
          validatedInput,
          result.contract_intel!,
          result.matched_golden_use_cases!,
          contextSubs,
          contextRpcs,
          goldenData.pobTemplates,
          undefined,
          undefined,
          selectedModel
        )
      );

      // Build dynamic NESTED schema with POB templates for judge validation
      const designNestedSchema = buildSubscriptionDesignNestedJsonSchema(goldenData.pobTemplates);
      const judgeResult = await withJudge(
        'design_subscription',
        step.data,
        designNestedSchema,
        buildInputContext(validatedInput, `Contract: ${result.contract_intel?.term_months} months, Start: ${result.contract_intel?.service_start_mdy}`)
      );

      result.subscription_spec = judgeResult.output.subscriptionSpec;
      result.pob_mapping = judgeResult.output.pobMapping;
      stepTimings.design_subscription = step.durationMs + judgeResult.judgeDurationMs;

      if (judgeResult.judgeApplied) {
        debugLog('Judge applied corrections to design_subscription', judgeResult.judgeDetails);
      }
    }

    // Step 4: Build Contracts/Orders AND Billings (PARALLEL)
    // These steps don't depend on each other, so run them simultaneously
    const parallelSteps: Promise<void>[] = [];

    if (!skipSteps.has('contracts_orders') && !result.contracts_orders) {
      parallelSteps.push(
        executeStep('contracts_orders', () =>
          buildContractsOrders(
            validatedInput,
            result.subscription_spec!,
            result.pob_mapping!,
            result.contract_intel!,
            undefined,
            undefined,
            selectedModel
          )
        ).then(async (step) => {
          // Apply judge validation
          const judgeResult = await withJudge(
            'contracts_orders',
            step.data,
            contractsOrdersJsonSchema,
            buildInputContext(validatedInput, `Subscription: ${result.subscription_spec?.rate_plans?.length || 0} rate plans`)
          );
          result.contracts_orders = judgeResult.output;
          stepTimings.contracts_orders = step.durationMs + judgeResult.judgeDurationMs;
          if (judgeResult.judgeApplied) {
            debugLog('Judge applied corrections to contracts_orders', judgeResult.judgeDetails);
          }
        })
      );
    }

    if (!skipSteps.has('billings') && !result.billings) {
      parallelSteps.push(
        executeStep('billings', () =>
          buildBillings(
            validatedInput,
            result.subscription_spec!,
            result.contract_intel!,
            undefined,
            undefined,
            selectedModel
          )
        ).then(async (step) => {
          // Apply judge validation
          const judgeResult = await withJudge(
            'billings',
            step.data,
            billingsJsonSchema,
            buildInputContext(validatedInput, `Billing period: ${result.contract_intel?.billing_period}`)
          );
          result.billings = judgeResult.output;
          stepTimings.billings = step.durationMs + judgeResult.judgeDurationMs;
          if (judgeResult.judgeApplied) {
            debugLog('Judge applied corrections to billings', judgeResult.judgeDetails);
          }
        })
      );
    }

    // Wait for parallel steps to complete
    if (parallelSteps.length > 0) {
      debugLog('Running contracts_orders and billings in PARALLEL');
      await Promise.all(parallelSteps);
    }

    // Step 5: Build Rev Rec Waterfall (depends on contracts_orders)
    if (!skipSteps.has('revrec_waterfall') && !result.revrec_waterfall) {
      const step = await executeStep('revrec_waterfall', () =>
        buildRevRecWaterfall(
          result.contracts_orders!,
          result.pob_mapping!,
          result.contract_intel!,
          goldenData.pobTemplates,
          undefined,
          undefined,
          selectedModel
        )
      );

      // Apply judge validation
      const judgeResult = await withJudge(
        'revrec_waterfall',
        step.data,
        revRecWaterfallJsonSchema,
        buildInputContext(validatedInput, `Orders: ${result.contracts_orders?.zr_contracts_orders?.length || 0} line items`)
      );

      result.revrec_waterfall = judgeResult.output;
      stepTimings.revrec_waterfall = step.durationMs + judgeResult.judgeDurationMs;

      if (judgeResult.judgeApplied) {
        debugLog('Judge applied corrections to revrec_waterfall', judgeResult.judgeDetails);
      }
    }

    // Step 6: Summarize
    if (!skipSteps.has('summary') && !result.summary) {
      const step = await executeStep('summary', () =>
        summarizeResults(
          validatedInput.use_case_description,
          result.subscription_spec,
          result.pob_mapping,
          result.contracts_orders,
          result.billings,
          result.revrec_waterfall,
          undefined,
          selectedModel
        )
      );
      result.summary = step.data;
      stepTimings.summary = step.durationMs;
    }

    debugLog('Pipeline completed', {
      sessionId,
      stepTimings,
      totalMs: Object.values(stepTimings).reduce((a, b) => a + b, 0),
    });

    // Store session for multi-turn
    sessions.set(sessionId, {
      id: sessionId,
      createdAt: new Date(),
      lastUpdatedAt: new Date(),
      input: validatedInput,
      result: result as Partial<ZucaOutput>,
      model: selectedModel,
      conversationHistory: [],
    });

    return result as ZucaOutput;
  } catch (error) {
    debugLog('Pipeline failed', { sessionId, error });
    throw error;
  }
}

/**
 * Handle a follow-up query in an existing session
 */
export async function handleFollowUp(
  sessionId: string,
  query: string,
  modelOverride?: LlmModel
): Promise<{ type: 'answer' | 'updated_result'; data: ExpertResponse | ZucaOutput }> {
  const session = sessions.get(sessionId);
  if (!session) {
    throw new Error(`Session not found: ${sessionId}`);
  }

  const selectedModel = modelOverride || session.model;

  debugLog('Handling follow-up', { sessionId, queryLength: query.length });

  // Route the query
  const routeResult = await smartRoute(query, true, selectedModel);

  // Add to conversation history
  session.conversationHistory.push({
    role: 'user',
    content: query,
    timestamp: new Date(),
  });

  if (routeResult.classification === 'general_question') {
    // Use expert assistant for questions
    const response = await expertAssistant(query, session.result, undefined, selectedModel);

    session.conversationHistory.push({
      role: 'assistant',
      content: response.answer,
      timestamp: new Date(),
    });

    session.lastUpdatedAt = new Date();
    return { type: 'answer', data: response };
  } else {
    // Re-run pipeline with modifications
    // For now, we'll re-run the full pipeline with the updated use case
    const updatedInput: ZucaInput = {
      ...session.input,
      use_case_description: `${session.input.use_case_description}\n\nAdditional context: ${query}`,
    };

    const pipelineResult = await runPipeline(updatedInput, {
      sessionId,
      previousResult: session.result,
      model: selectedModel,
      // Follow-ups don't need clarification questions - they're adding context
      interactiveMode: false,
    });

    // Handle clarification pause (shouldn't happen with interactiveMode: false)
    if (isPipelineClarificationPause(pipelineResult)) {
      throw new Error('Unexpected clarification request during follow-up');
    }

    session.result = pipelineResult;
    session.lastUpdatedAt = new Date();

    return { type: 'updated_result', data: pipelineResult };
  }
}

/**
 * Get an existing session
 */
export function getSession(sessionId: string): PipelineSession | undefined {
  return sessions.get(sessionId);
}

/**
 * List all active sessions
 */
export function listSessions(): PipelineSession[] {
  return Array.from(sessions.values());
}

/**
 * Delete a session
 */
export function deleteSession(sessionId: string): boolean {
  return sessions.delete(sessionId);
}

/**
 * Quick analysis without full pipeline (for previewing)
 */
export async function quickAnalysis(
  useCaseDescription: string,
  model?: LlmModel
): Promise<{
  detected: DetectedCapabilities;
  matched: MatchGoldenUseCasesOutput;
}> {
  const goldenData = await loadGoldenUseCasesData();

  const detected = await detectCapabilities(
    useCaseDescription,
    undefined,
    goldenData.capabilities,
    goldenData.keyTerms,
    undefined,
    undefined,
    model || (config.openai.model as LlmModel)
  );

  const matched = matchGoldenUseCases(detected, goldenData.capabilities);

  return { detected, matched };
}
