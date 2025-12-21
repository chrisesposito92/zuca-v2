/**
 * Pipeline Orchestrator
 *
 * Manages the execution of the ZUCA pipeline, coordinating all steps
 * and maintaining state for multi-turn conversations.
 */

import { v4 as uuidv4 } from 'uuid';
import { ZucaInput, validateZucaInput } from '../types/input';
import { ZucaOutput, DetectedCapabilities, MatchGoldenUseCasesOutput } from '../types/output';
import { loadGoldenUseCasesData } from '../data/loader';
import { debugLog } from '../config';

// Import all pipeline steps
import {
  smartRoute,
  extractContractIntel,
  detectCapabilities,
  matchGoldenUseCases,
  getMatchedUseCaseIds,
  generateSubscriptionSpec,
  assignPobTemplates,
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
    // Step 1: Contract Intel
    if (!skipSteps.has('contract_intel') && !result.contract_intel) {
      const step = await executeStep('contract_intel', () =>
        extractContractIntel(validatedInput)
      );
      result.contract_intel = step.data;
      stepTimings.contract_intel = step.durationMs;
    }

    // Step 2: Detect Capabilities
    if (!skipSteps.has('detect_capabilities') && !result.detected_capabilities) {
      const step = await executeStep('detect_capabilities', () =>
        detectCapabilities(
          validatedInput.use_case_description,
          validatedInput.rev_rec_notes,
          goldenData.capabilities,
          goldenData.keyTerms
        )
      );
      result.detected_capabilities = step.data;
      stepTimings.detect_capabilities = step.durationMs;
    }

    // Step 3: Match Golden Use Cases (Pure Code - No LLM)
    if (!skipSteps.has('match_golden_use_cases') && !result.matched_golden_use_cases) {
      const step = await executeStep('match_golden_use_cases', async () =>
        matchGoldenUseCases(result.detected_capabilities!, goldenData.capabilities)
      );
      result.matched_golden_use_cases = step.data;
      stepTimings.match_golden_use_cases = step.durationMs;
    }

    // Get context slices for matched use cases
    const matchedIds = getMatchedUseCaseIds(result.matched_golden_use_cases!);
    const contextSubs = goldenData.subscriptions.filter((s) =>
      matchedIds.includes(s['Use Case Id'])
    );
    const contextRpcs = goldenData.ratePlansCharges.filter((r) =>
      matchedIds.includes(r['Use Case Id'])
    );

    // Step 4: Generate Subscription Spec
    if (!skipSteps.has('subscription_spec') && !result.subscription_spec) {
      const step = await executeStep('subscription_spec', () =>
        generateSubscriptionSpec(
          validatedInput,
          result.contract_intel!,
          result.matched_golden_use_cases!,
          contextSubs,
          contextRpcs
        )
      );
      result.subscription_spec = step.data;
      stepTimings.subscription_spec = step.durationMs;
    }

    // Step 5: Assign POB Templates
    if (!skipSteps.has('pob_mapping') && !result.pob_mapping) {
      const step = await executeStep('pob_mapping', () =>
        assignPobTemplates(
          validatedInput.use_case_description,
          validatedInput.rev_rec_notes,
          result.matched_golden_use_cases!,
          result.contract_intel!,
          result.subscription_spec!,
          goldenData.pobTemplates
        )
      );
      result.pob_mapping = step.data;
      stepTimings.pob_mapping = step.durationMs;
    }

    // Step 6: Build Contracts/Orders Table
    if (!skipSteps.has('contracts_orders') && !result.contracts_orders) {
      const step = await executeStep('contracts_orders', () =>
        buildContractsOrders(
          validatedInput,
          result.subscription_spec!,
          result.pob_mapping!,
          result.contract_intel!
        )
      );
      result.contracts_orders = step.data;
      stepTimings.contracts_orders = step.durationMs;
    }

    // Step 7: Build Billings Table
    if (!skipSteps.has('billings') && !result.billings) {
      const step = await executeStep('billings', () =>
        buildBillings(validatedInput, result.subscription_spec!, result.contract_intel!)
      );
      result.billings = step.data;
      stepTimings.billings = step.durationMs;
    }

    // Step 8: Build Rev Rec Waterfall
    if (!skipSteps.has('revrec_waterfall') && !result.revrec_waterfall) {
      const step = await executeStep('revrec_waterfall', () =>
        buildRevRecWaterfall(
          result.contracts_orders!,
          result.pob_mapping!,
          result.contract_intel!
        )
      );
      result.revrec_waterfall = step.data;
      stepTimings.revrec_waterfall = step.durationMs;
    }

    // Step 9: Summarize
    if (!skipSteps.has('summary') && !result.summary) {
      const step = await executeStep('summary', () =>
        summarizeResults(
          validatedInput.use_case_description,
          result.subscription_spec,
          result.pob_mapping,
          result.contracts_orders,
          result.billings,
          result.revrec_waterfall
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
  query: string
): Promise<{ type: 'answer' | 'updated_result'; data: ExpertResponse | ZucaOutput }> {
  const session = sessions.get(sessionId);
  if (!session) {
    throw new Error(`Session not found: ${sessionId}`);
  }

  debugLog('Handling follow-up', { sessionId, queryLength: query.length });

  // Route the query
  const routeResult = await smartRoute(query, true);

  // Add to conversation history
  session.conversationHistory.push({
    role: 'user',
    content: query,
    timestamp: new Date(),
  });

  if (routeResult.classification === 'general_question') {
    // Use expert assistant for questions
    const response = await expertAssistant(query, session.result);

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
  useCaseDescription: string
): Promise<{
  detected: DetectedCapabilities;
  matched: MatchGoldenUseCasesOutput;
}> {
  const goldenData = await loadGoldenUseCasesData();

  const detected = await detectCapabilities(
    useCaseDescription,
    undefined,
    goldenData.capabilities,
    goldenData.keyTerms
  );

  const matched = matchGoldenUseCases(detected, goldenData.capabilities);

  return { detected, matched };
}
