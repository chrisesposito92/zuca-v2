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
import {
  ZucaOutput,
  DetectedCapabilities,
  MatchGoldenUseCasesOutput,
  ContractsOrdersOutput,
  BillingsOutput,
  RevRecWaterfallOutput,
} from '../types/output';
import {
  ClarificationAnswer,
  ClarificationState,
  StepClarificationRequest,
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
} from './steps/index';

// Import Ralph self-improvement module
import {
  withRalph,
  isRalphEnabled,
  type RalphSessionState,
  type StepIterationState,
} from './ralph';

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
  /** Override Ralph enabled setting */
  ralphEnabled?: boolean;
  /** Ralph iteration state for resuming after clarification */
  ralphState?: RalphSessionState;
  /** Clarification answer specifically for Ralph (includes step name context) */
  ralphClarificationAnswer?: ClarificationAnswer;
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
  /** Ralph state for resuming iteration after clarification */
  ralphState?: RalphSessionState;
  /** Source of the clarification request */
  clarificationSource?: 'step' | 'self_eval';
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

  // Initialize or restore Ralph state
  const useRalph = options.ralphEnabled ?? isRalphEnabled();
  const ralphState: RalphSessionState = options.ralphState || { stepStates: {} };

  // Effective interactive mode: disabled if user opted to skip all clarifications
  const effectiveInteractiveMode = options.interactiveMode && !options.skipAllClarifications;

  debugLog('Ralph configuration', {
    enabled: useRalph,
    hasExistingState: !!options.ralphState,
    stepsWithState: Object.keys(ralphState.stepStates),
  });

  try {
    // ============================================
    // OPTIMIZED PIPELINE v2 - Combined Steps + Parallel Execution
    // ============================================

    // Step 1: Analyze Contract (COMBINED - replaces contract_intel + detect_capabilities)
    // Single LLM call extracts contract parameters AND detects capabilities together
    // Uses Ralph for self-improvement when enabled
    if (!skipSteps.has('analyze_contract') && (!result.contract_intel || !result.detected_capabilities)) {
      const ralphResult = await withRalph<ContractAnalysisOutput>({
        stepName: 'analyze_contract',
        originalInput: validatedInput,
        stepFn: (iterationContext) =>
          analyzeContract(
            validatedInput,
            goldenData.capabilities,
            goldenData.keyTerms,
            iterationContext || getClarificationContext('analyze_contract', options.clarificationAnswers),
            undefined,
            'medium',
            selectedModel
          ),
        previousState: ralphState.stepStates['analyze_contract'] as StepIterationState<ContractAnalysisOutput> | undefined,
        clarificationAnswer: options.ralphClarificationAnswer,
        model: selectedModel,
        interactiveMode: effectiveInteractiveMode,
      });

      ralphState.stepStates['analyze_contract'] = ralphResult.state;

      if (ralphResult.clarificationRequest && !ralphResult.completed) {
        debugLog('Ralph pausing for clarification at analyze_contract');
        return {
          status: 'awaiting_clarification',
          question: ralphResult.clarificationRequest.question,
          pausedAtStep: 'analyze_contract',
          partialResult: result,
          sessionId,
          ralphState,
          clarificationSource: ralphResult.clarificationRequest.source,
        };
      }

      result.contract_intel = ralphResult.output.contractIntel;
      result.detected_capabilities = ralphResult.output.detectedCapabilities;
      stepTimings.analyze_contract = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
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
    // This step supports clarification questions and Ralph self-improvement in interactive mode
    if (!skipSteps.has('design_subscription') && (!result.subscription_spec || !result.pob_mapping)) {
      const ralphResult = await withRalph<SubscriptionDesignOutput>({
        stepName: 'design_subscription',
        originalInput: validatedInput,
        stepFn: (iterationContext) =>
          designSubscription(
            validatedInput,
            result.contract_intel!,
            result.matched_golden_use_cases!,
            contextSubs,
            contextRpcs,
            goldenData.pobTemplates,
            iterationContext || getClarificationContext('design_subscription', options.clarificationAnswers),
            undefined, // previousDesign
            'high',
            selectedModel
          ),
        previousState: ralphState.stepStates['design_subscription'] as StepIterationState<SubscriptionDesignOutput> | undefined,
        clarificationAnswer: options.ralphClarificationAnswer,
        model: selectedModel,
        interactiveMode: effectiveInteractiveMode,
      });

      ralphState.stepStates['design_subscription'] = ralphResult.state;

      if (ralphResult.clarificationRequest && !ralphResult.completed) {
        debugLog('Ralph pausing for clarification at design_subscription', {
          source: ralphResult.clarificationRequest.source,
          iterationsUsed: ralphResult.iterationsUsed,
        });
        return {
          status: 'awaiting_clarification',
          question: ralphResult.clarificationRequest.question,
          pausedAtStep: 'design_subscription',
          partialResult: result,
          sessionId,
          ralphState,
          clarificationSource: ralphResult.clarificationRequest.source,
        };
      }

      result.subscription_spec = ralphResult.output.subscriptionSpec;
      result.pob_mapping = ralphResult.output.pobMapping;
      stepTimings.design_subscription = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);

      debugLog('Ralph completed design_subscription', {
        iterationsUsed: ralphResult.iterationsUsed,
        finalStatus: ralphResult.state.status,
      });
    }

    // Step 4: Build Contracts/Orders AND Billings
    // Uses Ralph for self-improvement; runs sequentially to support iteration/clarification
    const runContractsOrders = !skipSteps.has('contracts_orders') && !result.contracts_orders;
    const runBillings = !skipSteps.has('billings') && !result.billings;

    if (runContractsOrders) {
      const ralphResult = await withRalph<ContractsOrdersOutput>({
        stepName: 'contracts_orders',
        originalInput: validatedInput,
        stepFn: (iterationContext) =>
          buildContractsOrders(
            validatedInput,
            result.subscription_spec!,
            result.pob_mapping!,
            result.contract_intel!,
            iterationContext || getClarificationContext('contracts_orders', options.clarificationAnswers),
            undefined,
            'high',
            selectedModel
          ),
        previousState: ralphState.stepStates['contracts_orders'] as StepIterationState<ContractsOrdersOutput> | undefined,
        clarificationAnswer: options.ralphClarificationAnswer,
        model: selectedModel,
        interactiveMode: effectiveInteractiveMode,
      });

      ralphState.stepStates['contracts_orders'] = ralphResult.state;

      if (ralphResult.clarificationRequest && !ralphResult.completed) {
        debugLog('Ralph pausing for clarification at contracts_orders');
        return {
          status: 'awaiting_clarification',
          question: ralphResult.clarificationRequest.question,
          pausedAtStep: 'contracts_orders',
          partialResult: result,
          sessionId,
          ralphState,
          clarificationSource: ralphResult.clarificationRequest.source,
        };
      }

      result.contracts_orders = ralphResult.output;
      stepTimings.contracts_orders = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
    }

    if (runBillings) {
      const ralphResult = await withRalph<BillingsOutput>({
        stepName: 'billings',
        originalInput: validatedInput,
        stepFn: (iterationContext) =>
          buildBillings(
            validatedInput,
            result.subscription_spec!,
            result.contract_intel!,
            iterationContext || getClarificationContext('billings', options.clarificationAnswers),
            undefined,
            'medium',
            selectedModel
          ),
        previousState: ralphState.stepStates['billings'] as StepIterationState<BillingsOutput> | undefined,
        clarificationAnswer: options.ralphClarificationAnswer,
        model: selectedModel,
        interactiveMode: effectiveInteractiveMode,
      });

      ralphState.stepStates['billings'] = ralphResult.state;

      if (ralphResult.clarificationRequest && !ralphResult.completed) {
        debugLog('Ralph pausing for clarification at billings');
        return {
          status: 'awaiting_clarification',
          question: ralphResult.clarificationRequest.question,
          pausedAtStep: 'billings',
          partialResult: result,
          sessionId,
          ralphState,
          clarificationSource: ralphResult.clarificationRequest.source,
        };
      }

      result.billings = ralphResult.output;
      stepTimings.billings = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
    }

    // Step 5: Build Rev Rec Waterfall (depends on contracts_orders)
    // Uses Ralph for self-improvement
    if (!skipSteps.has('revrec_waterfall') && !result.revrec_waterfall) {
      const ralphResult = await withRalph<RevRecWaterfallOutput>({
        stepName: 'revrec_waterfall',
        originalInput: validatedInput,
        stepFn: (iterationContext) =>
          buildRevRecWaterfall(
            result.contracts_orders!,
            result.pob_mapping!,
            result.contract_intel!,
            goldenData.pobTemplates,
            iterationContext || getClarificationContext('revrec_waterfall', options.clarificationAnswers),
            undefined,
            'high',
            selectedModel
          ),
        previousState: ralphState.stepStates['revrec_waterfall'] as StepIterationState<RevRecWaterfallOutput> | undefined,
        clarificationAnswer: options.ralphClarificationAnswer,
        model: selectedModel,
        interactiveMode: effectiveInteractiveMode,
      });

      ralphState.stepStates['revrec_waterfall'] = ralphResult.state;

      if (ralphResult.clarificationRequest && !ralphResult.completed) {
        debugLog('Ralph pausing for clarification at revrec_waterfall');
        return {
          status: 'awaiting_clarification',
          question: ralphResult.clarificationRequest.question,
          pausedAtStep: 'revrec_waterfall',
          partialResult: result,
          sessionId,
          ralphState,
          clarificationSource: ralphResult.clarificationRequest.source,
        };
      }

      result.revrec_waterfall = ralphResult.output;
      stepTimings.revrec_waterfall = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
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
