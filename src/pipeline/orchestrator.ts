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
 * Run the full pipeline for a new use case
 */
export async function runPipeline(
  input: ZucaInput,
  options: PipelineOptions = {}
): Promise<ZucaOutput> {
  const sessionId = options.sessionId || uuidv4();
  const skipSteps = new Set(options.skipSteps || []);
  const selectedModel = options.model || (config.openai.model as LlmModel);

  debugLog('Starting pipeline', { sessionId, customerName: input.customer_name });

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
    if (!skipSteps.has('analyze_contract') && (!result.contract_intel || !result.detected_capabilities)) {
      const step = await executeStep<ContractAnalysisOutput>('analyze_contract', () =>
        analyzeContract(
          validatedInput,
          goldenData.capabilities,
          goldenData.keyTerms,
          undefined,
          undefined,
          selectedModel
        )
      );
      result.contract_intel = step.data.contractIntel;
      result.detected_capabilities = step.data.detectedCapabilities;
      stepTimings.analyze_contract = step.durationMs;
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
      result.subscription_spec = step.data.subscriptionSpec;
      result.pob_mapping = step.data.pobMapping;
      stepTimings.design_subscription = step.durationMs;
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
        ).then((step) => {
          result.contracts_orders = step.data;
          stepTimings.contracts_orders = step.durationMs;
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
        ).then((step) => {
          result.billings = step.data;
          stepTimings.billings = step.durationMs;
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
      result.revrec_waterfall = step.data;
      stepTimings.revrec_waterfall = step.durationMs;
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

    const updatedResult = await runPipeline(updatedInput, {
      sessionId,
      previousResult: session.result,
      model: selectedModel,
    });

    session.result = updatedResult;
    session.lastUpdatedAt = new Date();

    return { type: 'updated_result', data: updatedResult };
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
