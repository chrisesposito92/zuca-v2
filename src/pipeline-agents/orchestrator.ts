/**
 * Pipeline Orchestrator — OpenAI Agent SDK
 *
 * Mirrors src/pipeline/orchestrator.ts but uses Agent SDK run() calls
 * instead of direct complete() calls. Each step is an Agent<PipelineContext>
 * with dynamic instructions that read RAG/corrections from context.
 *
 * PIPELINE SEQUENCE:
 * 1. Analyze Contract (combined) — extract contract intel + detect capabilities
 * 2. Match Golden Use Cases (pure code — no LLM)
 * 3. Design Subscription (combined) — create subscription + assign POB templates
 * 4. Build Contracts/Orders + Build Billings (sequential with Ralph)
 * 5. Build Rev Rec Waterfall
 * 6. Summarize
 */

import { run } from '@openai/agents';
import { v4 as uuidv4 } from 'uuid';
import { ZucaInput, validateZucaInput } from '../types/input';
import {
  ZucaOutput,
  ContractIntel,
  SubscriptionSpec,
  PobMappingOutput,
  ContractsOrdersOutput,
  BillingsOutput,
  RevRecWaterfallOutput,
  SummaryOutput,
} from '../types/output';
import {
  ClarificationAnswer,
  getClarificationAnswerForStep,
  formatClarificationAnswerForPrompt,
} from '../types/clarification';
import type { StepIterationState } from '../types/ralph';
import {
  loadGoldenUseCasesData,
  GoldenSubscription,
  GoldenRatePlanCharge,
  formatCapabilitiesForContext,
  formatKeyTermsForContext,
  formatPobTemplatesForContext,
} from '../data/loader';
import { config, debugLog } from '../config';
import type { LlmModel } from '../types/llm';
import { getDocContext, isIndexReady, extractRagKeywords } from '../rag';
import { getCorrectionsContext } from '../self-learn';

// Pipeline step formatters (reuse from existing steps)
import { formatContractIntelForContext } from '../pipeline/steps/contract-intel';
import { formatSubscriptionSpecForContext } from '../pipeline/steps/generate-subscription';
import { formatPobMappingForContext } from '../pipeline/steps/assign-pob-templates';
import { formatContractsOrdersForContext } from '../pipeline/steps/build-contracts-orders';
import { formatMatchResultsForContext, matchGoldenUseCases, getMatchedUseCaseIds } from '../pipeline/steps/match-golden-use-cases';
import { isRalphEnabled } from '../pipeline/ralph';
import type { RalphSessionState } from '../types/ralph';
import type { PobTemplate, GoldenRatePlanChargesDoc } from '../types/golden-use-cases';

// Agent factories
import { createAnalyzeContractAgent } from './agents/analyze-contract';
import { createDesignSubscriptionAgent } from './agents/design-subscription';
import { createBuildContractsOrdersAgent } from './agents/build-contracts-orders';
import { createBuildBillingsAgent } from './agents/build-billings';
import { createBuildRevRecWaterfallAgent } from './agents/build-revrec-waterfall';
import { createSummarizeAgent } from './agents/summarize';

// Ralph wrapper
import { withRalphAgent } from './ralph';
import type { PipelineContext } from './context';

// Re-export types that the API route needs
export type {
  PipelineResult,
  PipelineClarificationPause,
} from '../pipeline/orchestrator';
export {
  isPipelineClarificationPause,
  createClarificationState,
} from '../pipeline/orchestrator';
import type { PipelineClarificationPause } from '../pipeline/orchestrator';

/**
 * Pipeline execution options (same shape as existing pipeline)
 */
export interface AgentsPipelineOptions {
  skipSteps?: string[];
  previousResult?: Partial<ZucaOutput>;
  sessionId?: string;
  model?: LlmModel;
  interactiveMode?: boolean;
  clarificationAnswers?: ClarificationAnswer[];
  skipAllClarifications?: boolean;
  ralphEnabled?: boolean;
  ralphState?: RalphSessionState;
}

// ============================================================================
// Output Sanitization
// ============================================================================

/** Keys added by ClarificationFieldsSchema that must not leak into ZucaOutput */
type ClarificationKey =
  | 'needs_clarification'
  | 'clarification_question'
  | 'clarification_options'
  | 'clarification_context'
  | 'clarification_priority';

/**
 * Strip clarification fields from agent output before storing in ZucaOutput.
 * Step schemas merge ClarificationFieldsSchema for the LLM, but those fields
 * must not leak into the final pipeline result.
 */
function stripClarificationFields<T>(output: T): Omit<T, ClarificationKey> {
  const obj = output as Record<string, unknown>;
  const {
    needs_clarification: _nc,
    clarification_question: _cq,
    clarification_options: _co,
    clarification_context: _cc,
    clarification_priority: _cp,
    ...clean
  } = obj;
  return clean as Omit<T, ClarificationKey>;
}

// ============================================================================
// Context Prefetch Helpers
// ============================================================================

/**
 * Pre-fetch RAG docs and corrections for a step, then set them on PipelineContext.
 * Agents read these via dynamic instructions.
 */
async function prefetchStepContext(
  ctx: PipelineContext,
  stepName: string,
  ragQuery: string,
  answers?: ClarificationAnswer[]
): Promise<void> {
  // RAG context
  ctx.ragContext = undefined;
  if (await isIndexReady()) {
    debugLog(`RAG: fetching docs for ${stepName}...`);
    ctx.ragContext = await getDocContext(ragQuery, { limit: 3, minScore: 0.3 });
    debugLog(`RAG: got ${ctx.ragContext?.length || 0} chars for ${stepName}`);
  }

  // Corrections context
  ctx.correctionsContext = undefined;
  const correctionsResult = await getCorrectionsContext({
    stepName,
    inputSummary: ragQuery,
  });
  if (correctionsResult.count > 0) {
    ctx.correctionsContext = correctionsResult.context;
    debugLog('Injecting corrections context', {
      step: stepName,
      count: correctionsResult.count,
      ids: correctionsResult.appliedCorrectionIds,
    });
  }

  // Clarification context
  ctx.clarificationContext = undefined;
  if (answers && answers.length > 0) {
    const answer = getClarificationAnswerForStep(stepName, answers);
    if (answer) {
      ctx.clarificationContext = formatClarificationAnswerForPrompt(answer);
    }
  }
}

// ============================================================================
// User Message Builders
// ============================================================================

function buildAnalyzeContractMessage(ctx: PipelineContext): string {
  const { input, goldenData } = ctx;
  const parts = [
    `Customer: ${input.customer_name}`,
    `Contract Start Date: ${input.contract_start_date}`,
    `Terms (Months): ${input.terms_months}`,
    `Billing Period: ${input.billing_period}`,
    '',
    'Use Case Description:',
    input.use_case_description,
  ];

  if (input.rev_rec_notes) {
    parts.push('', 'Revenue Recognition Notes:', input.rev_rec_notes);
  }

  parts.push(
    '',
    'Capability Dictionaries (JSON):',
    '',
    'capabilities:',
    formatCapabilitiesForContext(goldenData.capabilities),
    '',
    'keyTerms:',
    formatKeyTermsForContext(goldenData.keyTerms),
    '',
    'Only pick capability labels that exist in the dictionaries. Use exact strings.'
  );

  return parts.join('\n');
}

function buildDesignSubscriptionMessage(ctx: PipelineContext): string {
  const { input, result, goldenData } = ctx;
  const contractIntel = result.contract_intel!;
  const matchResults = result.matched_golden_use_cases!;
  const contextSubs = ctx.contextSubscriptions || [];
  const contextRpcs = ctx.contextRatePlanCharges || [];

  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
    input.rev_rec_notes ? `Rev Rec Notes (optional):\n${input.rev_rec_notes}` : '',
    '',
    `DO ALLOCATIONS (T/F): ${input.is_allocations}`,
    input.is_allocations ? `Allocation Method: ${input.allocation_method || 'Use List Price'}` : '',
    '',
    'Date & term envelope (authoritative):',
    `- serviceStart: ${contractIntel.service_start_mdy}`,
    `- serviceEnd: ${contractIntel.service_end_mdy || 'not specified'}`,
    `- termMonths: ${contractIntel.term_months}`,
    '',
    `Billing Period: ${contractIntel.billing_period || input.billing_period}`,
    `Billing Timing: ${contractIntel.billing_timing || 'InAdvance'}`,
    `Trigger Event: ${contractIntel.trigger_event}`,
    '',
    'Matched golden UCs (string summary):',
    formatMatchResultsForContext(matchResults),
    '',
    'Context slices (string summaries):',
    '- Subscriptions:',
    formatContextSubscriptions(contextSubs),
    '',
    '- Rate plans & charges:',
    formatContextRatePlansCharges(contextRpcs as unknown as GoldenRatePlanChargesDoc[]),
    '',
    'Available ZR POB templates (YOU MUST USE IDENTIFIERS FROM THIS LIST):',
    formatPobTemplatesForContext(goldenData.pobTemplates),
  ];

  return parts.filter(Boolean).join('\n');
}

function buildContractsOrdersMessage(ctx: PipelineContext): string {
  const { input, result } = ctx;
  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
    `Allocations: ${input.is_allocations ? 'Yes' : 'No'}`,
    input.is_allocations ? `Allocation Method: ${input.allocation_method || 'Use List Price'}` : '',
    '',
    'Contract Intel:',
    formatContractIntelForContext(result.contract_intel!),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(result.subscription_spec!),
    '',
    'POB Mapping:',
    formatPobMappingForContext(result.pob_mapping!),
    '',
    'Generate the ZR Contracts/Orders table with proper pricing and allocations.',
  ];

  return parts.filter(Boolean).join('\n');
}

function buildBillingsMessage(ctx: PipelineContext): string {
  const { input, result } = ctx;
  const parts = [
    `Customer: ${input.customer_name}`,
    '',
    'Use case & notes:',
    input.use_case_description,
    '',
    'Contract Intel:',
    formatContractIntelForContext(result.contract_intel!),
    '',
    'Subscription Spec:',
    formatSubscriptionSpecForContext(result.subscription_spec!),
    '',
    'Generate the complete billing schedule for this subscription.',
    'Include all billing events from contract start through contract end.',
  ];

  return parts.join('\n');
}

function buildRevRecWaterfallMessage(ctx: PipelineContext): string {
  const { result, goldenData } = ctx;
  const pobMapping = result.pob_mapping!;
  const pobTemplates = goldenData.pobTemplates;

  const parts = [
    'Generate the revenue recognition waterfall based on the following:',
    '',
    '## Contract Intel',
    formatContractIntelForContext(result.contract_intel!),
    '',
    '## POB Mapping with Recognition Instructions',
    '',
    'CRITICAL: Follow the WATERFALL INSTRUCTIONS for each POB exactly. These instructions are authoritative and must be followed precisely.',
    formatPobMappingWithRecognitionNotes(pobMapping, pobTemplates),
    '',
    '## Contracts/Orders Table',
    formatContractsOrdersForContext(result.contracts_orders!),
    '',
    '## Instructions',
    '1. For each charge, follow the WATERFALL INSTRUCTIONS from its POB template exactly',
    '2. Event-driven templates (EVT-PIT-*) should show $0 in months without events',
    '3. Ratable templates (BK-OT-*, BL-OT-*) spread amounts evenly over the period',
    '4. Point-in-time templates recognize 100% in a single month',
    '5. If usage/consumption data is not provided for event-driven templates, show $0 amounts and add an open question',
    '',
    'Return one row per Line Item per Period with the recognition amount.',
  ];

  return parts.join('\n');
}

function buildSummarizeMessage(ctx: PipelineContext): string {
  const { input, result } = ctx;

  const allAssumptions = collectAssumptions(
    result.subscription_spec,
    result.pob_mapping,
    result.contracts_orders,
    result.billings,
    result.revrec_waterfall
  );
  const allQuestions = collectOpenQuestions(
    result.subscription_spec,
    result.pob_mapping,
    result.contracts_orders,
    result.billings,
    result.revrec_waterfall
  );

  const parts = [
    'Original Use Case:',
    input.use_case_description,
    '',
    'All Assumptions (from pipeline steps):',
    ...allAssumptions.map((a, i) => `${i + 1}. ${a}`),
    '',
    'All Open Questions (from pipeline steps):',
    ...allQuestions.map((q, i) => `${i + 1}. ${q}`),
    '',
    'Consolidate and prioritize these assumptions and questions.',
    'Remove duplicates, group related items, and order by business impact.',
  ];

  return parts.join('\n');
}

// ============================================================================
// Formatting Helpers (replicated from step files to avoid circular deps)
// ============================================================================

function formatContextSubscriptions(subs: GoldenSubscription[]): string {
  if (subs.length === 0) return '(no reference subscriptions available)';

  return subs
    .map((s) => {
      const subList = s.Subscriptions.map(
        (sub) =>
          `  - ${sub.subscriptionNumber}: ${sub.termType}, ${sub.subscriptionStartDate} - ${sub.subscriptionEndDate || 'ongoing'}`
      ).join('\n');
      return `${s['Use Case Id']} - ${s['Use Case Name'] || 'Unnamed'}:\n${subList}`;
    })
    .join('\n\n');
}

function formatContextRatePlansCharges(rpcs: GoldenRatePlanChargesDoc[]): string {
  if (rpcs.length === 0) return '(no reference rate plans available)';

  return rpcs
    .map((rpc) => {
      const plans = rpc['Rate Plans']
        .map((p) => `  - ${p.productName} / ${p.ratePlanName}`)
        .join('\n');
      const charges = rpc['Rate Plan Charges']
        .slice(0, 5)
        .map((c) => `  - ${c.name}: ${c.type}/${c.model}`)
        .join('\n');
      return `${rpc['Use Case Id']}:\n  Rate Plans:\n${plans}\n  Charges (sample):\n${charges}`;
    })
    .join('\n\n');
}

function formatPobMappingWithRecognitionNotes(
  pobMapping: PobMappingOutput,
  pobTemplates: PobTemplate[]
): string {
  const templateMap = new Map<string, string>();
  for (const template of pobTemplates) {
    if (template['Recognition Notes']) {
      templateMap.set(template['POB Identifier'], template['Recognition Notes']);
    }
  }

  const lines = pobMapping.charge_pob_map.map((m) => {
    const recognitionNotes = templateMap.get(m.pob_identifier) || 'No specific notes';
    return (
      `\n### ${m.chargeName}\n` +
      `- POB Template: ${m.pob_name} (${m.pob_identifier})\n` +
      `- Ratable Method: ${m.ratable_method}\n` +
      `- Release Event: ${m.release_event}\n` +
      `- Recognition Window: ${m.recognition_window.start} to ${m.recognition_window.end || 'ongoing'}\n` +
      `- **WATERFALL INSTRUCTIONS**: ${recognitionNotes}`
    );
  });

  return lines.join('\n');
}

function collectAssumptions(
  subscriptionSpec?: SubscriptionSpec,
  pobMapping?: PobMappingOutput,
  contractsOrders?: ContractsOrdersOutput,
  billings?: BillingsOutput,
  revRecWaterfall?: RevRecWaterfallOutput
): string[] {
  const assumptions: string[] = [];
  if (subscriptionSpec?.assumptions) {
    assumptions.push(...subscriptionSpec.assumptions.map((a) => `[Subscription] ${a}`));
  }
  if (pobMapping?.mapping_notes) {
    assumptions.push(...pobMapping.mapping_notes.map((n) => `[POB Mapping] ${n}`));
  }
  if (contractsOrders?.assumptions) {
    assumptions.push(...contractsOrders.assumptions.map((a) => `[Contracts/Orders] ${a}`));
  }
  if (billings?.assumptions) {
    assumptions.push(...billings.assumptions.map((a) => `[Billings] ${a}`));
  }
  if (revRecWaterfall?.assumptions) {
    assumptions.push(...revRecWaterfall.assumptions.map((a) => `[Rev Rec] ${a}`));
  }
  return assumptions;
}

function collectOpenQuestions(
  subscriptionSpec?: SubscriptionSpec,
  _pobMapping?: PobMappingOutput,
  contractsOrders?: ContractsOrdersOutput,
  billings?: BillingsOutput,
  revRecWaterfall?: RevRecWaterfallOutput
): string[] {
  const questions: string[] = [];
  if (subscriptionSpec?.open_questions) {
    questions.push(...subscriptionSpec.open_questions.map((q) => `[Subscription] ${q}`));
  }
  if (contractsOrders?.open_questions) {
    questions.push(...contractsOrders.open_questions.map((q) => `[Contracts/Orders] ${q}`));
  }
  if (billings?.open_questions) {
    questions.push(...billings.open_questions.map((q) => `[Billings] ${q}`));
  }
  if (revRecWaterfall?.open_questions) {
    questions.push(...revRecWaterfall.open_questions.map((q) => `[Rev Rec] ${q}`));
  }
  return questions;
}

/**
 * Decode POB template codes into human-readable keywords for RAG search.
 */
const pobCodeMap: Record<string, string> = {
  'BK': 'booking-based',
  'BL': 'billing-based',
  'EVT': 'event-based',
  'OT': 'over-time recognition',
  'PIT': 'point-in-time recognition',
  'RATABLE': 'ratable method',
  'CONSUMP': 'consumption-based',
  'PAYGO': 'pay-as-you-go',
  'USAGE': 'usage-based',
  'INVRATABLE': 'invoice ratable',
  'CURRENT_PERIOD': 'current period',
  'STARTDATE': 'start date trigger',
  'COMPLETION': 'completion event',
  'ACCEPTAN': 'acceptance event',
  'GOLIVE': 'go-live event',
  'PM': 'prior month',
  'VC': 'variable consideration',
  'POC': 'percentage of completion',
  'QTY': 'quantity-based',
  'HOURS': 'hours-based',
  'AMOUNT': 'amount-based',
  'CUMPERCENT': 'cumulative percentage',
  'DELIVERY': 'delivery event',
};

function decodePobName(pobName: string): string {
  const parts = pobName.split('-');
  return parts
    .map((part) => pobCodeMap[part] || '')
    .filter(Boolean)
    .join(' ');
}

// ============================================================================
// Main Pipeline
// ============================================================================

/**
 * Run the full pipeline using OpenAI Agent SDK agents.
 *
 * Same contract as runPipeline() in src/pipeline/orchestrator.ts —
 * returns ZucaOutput on success or PipelineClarificationPause if a step
 * requests user clarification.
 */
export async function runAgentsPipeline(
  input: ZucaInput,
  options: AgentsPipelineOptions = {}
): Promise<ZucaOutput | PipelineClarificationPause> {
  const sessionId = options.sessionId || uuidv4();
  const skipSteps = new Set(options.skipSteps || []);
  const selectedModel = options.model || (config.openai.model as LlmModel);

  debugLog('Starting agents pipeline', {
    sessionId,
    customerName: input.customer_name,
    interactiveMode: options.interactiveMode ?? false,
    hasClarificationAnswers: (options.clarificationAnswers?.length ?? 0) > 0,
  });

  const validatedInput = validateZucaInput(input);
  const goldenData = await loadGoldenUseCasesData();

  const result: Partial<ZucaOutput> = {
    session_id: sessionId,
    timestamp: new Date().toISOString(),
    input: validatedInput,
    ...options.previousResult,
  };

  const stepTimings: Record<string, number> = {};
  const useRalph = options.ralphEnabled ?? isRalphEnabled();
  const ralphState: RalphSessionState = options.ralphState || { stepStates: {} };
  const effectiveInteractiveMode = options.interactiveMode && !options.skipAllClarifications;

  // Build shared pipeline context
  const ctx: PipelineContext = {
    sessionId,
    input: validatedInput,
    model: selectedModel,
    goldenData,
    interactiveMode: effectiveInteractiveMode ?? false,
    skipAllClarifications: options.skipAllClarifications ?? false,
    result,
    clarificationAnswers: options.clarificationAnswers || [],
    ralphEnabled: useRalph,
    ralphState,
    stepTimings,
  };

  debugLog('Ralph configuration', {
    enabled: useRalph,
    hasExistingState: !!options.ralphState,
    stepsWithState: Object.keys(ralphState.stepStates),
  });

  try {
    // ====================================================================
    // Step 1: Analyze Contract (combined)
    // ====================================================================
    if (!skipSteps.has('analyze_contract') && (!result.contract_intel || !result.detected_capabilities)) {
      const ragQuery = await extractRagKeywords(validatedInput.use_case_description);
      await prefetchStepContext(ctx, 'analyze_contract', ragQuery, options.clarificationAnswers);

      const agent = createAnalyzeContractAgent(selectedModel);

      interface AnalyzeContractOutput {
        contractIntel: ContractIntel;
        detectedCapabilities: { billing_caps: string[]; revenue_caps: string[]; hints: string[]; confidence: number };
      }

      const ralphResult = await withRalphAgent<AnalyzeContractOutput>({
        stepName: 'analyze_contract',
        agent,
        buildUserMessage: (iterationContext) => {
          const base = buildAnalyzeContractMessage(ctx);
          return iterationContext ? `${base}\n\n${iterationContext}` : base;
        },
        pipelineContext: ctx,
        previousState: ralphState.stepStates['analyze_contract'] as StepIterationState<AnalyzeContractOutput> | undefined,
        clarificationAnswer: getClarificationAnswerForStep('analyze_contract', options.clarificationAnswers || []),
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

    // ====================================================================
    // Step 2: Match Golden Use Cases (pure code — no LLM)
    // ====================================================================
    if (!skipSteps.has('match_golden_use_cases') && !result.matched_golden_use_cases) {
      const startTime = Date.now();
      debugLog('Starting step: match_golden_use_cases');
      result.matched_golden_use_cases = matchGoldenUseCases(
        result.detected_capabilities!,
        goldenData.capabilities
      );
      stepTimings.match_golden_use_cases = Date.now() - startTime;
      debugLog(`Completed step: match_golden_use_cases (${stepTimings.match_golden_use_cases}ms)`);
    }

    // Derive context slices from matched use cases
    const matchedIds = getMatchedUseCaseIds(result.matched_golden_use_cases!);
    ctx.matchedUseCaseIds = matchedIds;
    ctx.contextSubscriptions = goldenData.subscriptions.filter((s: GoldenSubscription) =>
      matchedIds.includes(s['Use Case Id'])
    );
    ctx.contextRatePlanCharges = goldenData.ratePlansCharges.filter((r: GoldenRatePlanCharge) =>
      matchedIds.includes(r['Use Case Id'])
    );

    // ====================================================================
    // Step 3: Design Subscription (combined)
    // ====================================================================
    if (!skipSteps.has('design_subscription') && (!result.subscription_spec || !result.pob_mapping)) {
      const ragQuery = await extractRagKeywords(validatedInput.use_case_description, {
        revRecNotes: validatedInput.rev_rec_notes,
      });
      await prefetchStepContext(ctx, 'design_subscription', ragQuery, options.clarificationAnswers);

      const agent = createDesignSubscriptionAgent(goldenData.pobTemplates, selectedModel);

      interface DesignSubscriptionOutput {
        subscriptionSpec: SubscriptionSpec;
        pobMapping: PobMappingOutput;
      }

      const ralphResult = await withRalphAgent<DesignSubscriptionOutput>({
        stepName: 'design_subscription',
        agent,
        buildUserMessage: (iterationContext) => {
          const base = buildDesignSubscriptionMessage(ctx);
          return iterationContext ? `${base}\n\n${iterationContext}` : base;
        },
        pipelineContext: ctx,
        previousState: ralphState.stepStates['design_subscription'] as StepIterationState<DesignSubscriptionOutput> | undefined,
        clarificationAnswer: getClarificationAnswerForStep('design_subscription', options.clarificationAnswers || []),
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

    // ====================================================================
    // Step 4a: Build Contracts/Orders
    // ====================================================================
    if (!skipSteps.has('contracts_orders') && !result.contracts_orders) {
      const ragQuery = await extractRagKeywords(validatedInput.use_case_description);
      await prefetchStepContext(ctx, 'contracts_orders', ragQuery, options.clarificationAnswers);

      const agent = createBuildContractsOrdersAgent(selectedModel);

      const ralphResult = await withRalphAgent<ContractsOrdersOutput>({
        stepName: 'contracts_orders',
        agent,
        buildUserMessage: (iterationContext) => {
          const base = buildContractsOrdersMessage(ctx);
          return iterationContext ? `${base}\n\n${iterationContext}` : base;
        },
        pipelineContext: ctx,
        previousState: ralphState.stepStates['contracts_orders'] as StepIterationState<ContractsOrdersOutput> | undefined,
        clarificationAnswer: getClarificationAnswerForStep('contracts_orders', options.clarificationAnswers || []),
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

      result.contracts_orders = stripClarificationFields(ralphResult.output);
      stepTimings.contracts_orders = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
    }

    // ====================================================================
    // Step 4b: Build Billings
    // ====================================================================
    if (!skipSteps.has('billings') && !result.billings) {
      const ragQuery = await extractRagKeywords(validatedInput.use_case_description);
      await prefetchStepContext(ctx, 'billings', ragQuery, options.clarificationAnswers);

      const agent = createBuildBillingsAgent(selectedModel);

      const ralphResult = await withRalphAgent<BillingsOutput>({
        stepName: 'billings',
        agent,
        buildUserMessage: (iterationContext) => {
          const base = buildBillingsMessage(ctx);
          return iterationContext ? `${base}\n\n${iterationContext}` : base;
        },
        pipelineContext: ctx,
        previousState: ralphState.stepStates['billings'] as StepIterationState<BillingsOutput> | undefined,
        clarificationAnswer: getClarificationAnswerForStep('billings', options.clarificationAnswers || []),
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

      result.billings = stripClarificationFields(ralphResult.output);
      stepTimings.billings = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
    }

    // ====================================================================
    // Step 5: Build Rev Rec Waterfall
    // ====================================================================
    if (!skipSteps.has('revrec_waterfall') && !result.revrec_waterfall) {
      // Build RAG query from POB template codes
      const pobMapping = result.pob_mapping!;
      const pobKeywords = pobMapping.charge_pob_map
        ?.map((m) => decodePobName(m.pob_name))
        .filter(Boolean)
        .join(', ') || '';
      const ragQuery = `Zuora Revenue recognition waterfall ${pobKeywords} SSP allocation`;

      await prefetchStepContext(ctx, 'revrec_waterfall', ragQuery, options.clarificationAnswers);

      const agent = createBuildRevRecWaterfallAgent(selectedModel);

      const ralphResult = await withRalphAgent<RevRecWaterfallOutput>({
        stepName: 'revrec_waterfall',
        agent,
        buildUserMessage: (iterationContext) => {
          const base = buildRevRecWaterfallMessage(ctx);
          return iterationContext ? `${base}\n\n${iterationContext}` : base;
        },
        pipelineContext: ctx,
        previousState: ralphState.stepStates['revrec_waterfall'] as StepIterationState<RevRecWaterfallOutput> | undefined,
        clarificationAnswer: getClarificationAnswerForStep('revrec_waterfall', options.clarificationAnswers || []),
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

      result.revrec_waterfall = stripClarificationFields(ralphResult.output);
      stepTimings.revrec_waterfall = ralphResult.state.attempts.reduce((sum, a) => sum + a.durationMs, 0);
    }

    // ====================================================================
    // Step 6: Summarize
    // ====================================================================
    if (!skipSteps.has('summary') && !result.summary) {
      // Summarize uses corrections only (no RAG needed)
      const inputSummary = [
        `Use Case: ${validatedInput.use_case_description.substring(0, 200)}`,
        `Assumptions Count: ${collectAssumptions(result.subscription_spec, result.pob_mapping, result.contracts_orders, result.billings, result.revrec_waterfall).length}`,
        `Questions Count: ${collectOpenQuestions(result.subscription_spec, result.pob_mapping, result.contracts_orders, result.billings, result.revrec_waterfall).length}`,
      ].join('\n');

      ctx.ragContext = undefined;
      const correctionsResult = await getCorrectionsContext({
        stepName: 'summarize',
        inputSummary,
      });
      ctx.correctionsContext = correctionsResult.count > 0 ? correctionsResult.context : undefined;
      ctx.clarificationContext = undefined;

      const allAssumptions = collectAssumptions(
        result.subscription_spec, result.pob_mapping,
        result.contracts_orders, result.billings, result.revrec_waterfall
      );
      const allQuestions = collectOpenQuestions(
        result.subscription_spec, result.pob_mapping,
        result.contracts_orders, result.billings, result.revrec_waterfall
      );

      // If no assumptions or questions, skip the LLM call
      if (allAssumptions.length === 0 && allQuestions.length === 0) {
        result.summary = { assumptions: [], open_questions: [] };
      } else {
        const startTime = Date.now();
        const agent = createSummarizeAgent(selectedModel);
        const userMessage = buildSummarizeMessage(ctx);
        const runResult = await run(agent, userMessage, { context: ctx });
        result.summary = runResult.finalOutput as SummaryOutput;
        stepTimings.summary = Date.now() - startTime;
      }
    }

    debugLog('Agents pipeline completed', {
      sessionId,
      stepTimings,
      totalMs: Object.values(stepTimings).reduce((a, b) => a + b, 0),
    });

    return result as ZucaOutput;
  } catch (error) {
    debugLog('Agents pipeline failed', { sessionId, error });
    throw error;
  }
}
