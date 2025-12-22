/**
 * Combined Subscription Design Step
 *
 * This step combines generate-subscription and assign-pob-templates into a single LLM call
 * for improved efficiency and coherence. The model designs the subscription structure
 * AND assigns POB templates together, ensuring alignment between billing and revenue.
 */

import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  SubscriptionSpec,
  SubscriptionSpecSchema,
  PobMappingOutput,
  PobMappingOutputSchema,
  ContractIntel,
  MatchGoldenUseCasesOutput,
} from '../../types/output';
import { ZucaInput } from '../../types/input';
import { GoldenSubscription, GoldenRatePlanChargesDoc, PobTemplate } from '../../types/golden-use-cases';
import { formatMatchResultsForContext } from './match-golden-use-cases';
import { formatPobTemplatesForContext } from '../../data/loader';
import { debugLog } from '../../config';

/**
 * Combined output from subscription design
 */
export interface SubscriptionDesignOutput {
  subscriptionSpec: SubscriptionSpec;
  pobMapping: PobMappingOutput;
}

/**
 * Build JSON schema for combined subscription design with dynamic POB identifiers
 */
function buildSubscriptionDesignJsonSchema(pobTemplates: PobTemplate[]) {
  const validPobIdentifiers = pobTemplates.map(p => p['POB Identifier']);

  debugLog('Building subscription design schema with valid POB identifiers:', validPobIdentifiers);

  const chargeSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      type: { type: 'string', enum: ['Recurring', 'OneTime', 'Usage'] },
      model: { type: 'string', enum: ['FlatFee', 'PerUnit', 'Volume', 'Tiered', 'Overage'] },
      uom: { type: ['string', 'null'] },
      billingPeriod: { type: ['string', 'null'] },
      billingTiming: { type: ['string', 'null'], enum: ['InAdvance', 'InArrears', null] },
      billingDay: { type: ['string', 'null'] },
      billingPeriodAlignment: { type: ['string', 'null'] },
      listPriceBase: { type: ['string', 'null'] },
      triggerEvent: { type: 'string' },
      specificTriggerDate: { type: ['string', 'null'] },
      endDateCondition: { type: ['string', 'null'] },
      specificEndDate: { type: ['string', 'null'] },
      quantity: { type: ['number', 'null'] },
      listPrice: { type: ['number', 'null'] },
      sellPrice: { type: ['number', 'null'] },
      price: { type: ['number', 'null'] },
      effectiveStartDate: { type: 'string' },
      effectiveEndDate: { type: ['string', 'null'] },
      chargeFunction: { type: ['string', 'null'], enum: ['None', 'Prepayment', 'Drawdown', 'Commitment', 'Overage', null] },
      isAllocationEligible: { type: ['boolean', 'null'] },
      drawdownType: { type: ['string', 'null'] },
      commitmentType: { type: ['string', 'null'] },
      prepaymentUOM: { type: ['string', 'null'] },
      prepaymentUnits: { type: ['number', 'null'] },
      validityPeriod: { type: ['string', 'null'] },
    },
    required: [
      'name', 'type', 'model', 'uom', 'billingPeriod', 'billingTiming',
      'billingDay', 'billingPeriodAlignment', 'listPriceBase', 'triggerEvent',
      'specificTriggerDate', 'endDateCondition', 'specificEndDate', 'quantity',
      'listPrice', 'sellPrice', 'price', 'effectiveStartDate', 'effectiveEndDate',
      'chargeFunction', 'isAllocationEligible', 'drawdownType', 'commitmentType',
      'prepaymentUOM', 'prepaymentUnits', 'validityPeriod',
    ],
    additionalProperties: false,
  };

  const ratePlanSchema = {
    type: 'object',
    properties: {
      productName: { type: 'string' },
      ratePlanName: { type: 'string' },
      charges: { type: 'array', items: chargeSchema },
    },
    required: ['productName', 'ratePlanName', 'charges'],
    additionalProperties: false,
  };

  const subscriptionSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      termType: { type: 'string', enum: ['TERMED', 'EVERGREEN'] },
      status: { type: 'string' },
      currency: { type: 'string' },
      contractEffectiveDate: { type: 'string' },
      serviceActivationDate: { type: 'string' },
      customerAcceptanceDate: { type: 'string' },
      subscriptionStartDate: { type: 'string' },
      subscriptionEndDate: { type: ['string', 'null'] },
      initialTerm: { type: ['number', 'null'] },
      initialTermPeriodType: { type: ['string', 'null'], enum: ['Month', 'Year', null] },
      renewalTerm: { type: ['number', 'null'] },
      renewalTermPeriodType: { type: ['string', 'null'], enum: ['Month', 'Year', null] },
      autoRenew: { type: ['boolean', 'null'] },
    },
    required: [
      'name', 'termType', 'status', 'currency', 'contractEffectiveDate',
      'serviceActivationDate', 'customerAcceptanceDate', 'subscriptionStartDate',
      'subscriptionEndDate', 'initialTerm', 'initialTermPeriodType',
      'renewalTerm', 'renewalTermPeriodType', 'autoRenew',
    ],
    additionalProperties: false,
  };

  const usageRecordSchema = {
    type: 'object',
    properties: {
      Date: { type: 'string' },
      UOM: { type: 'string' },
      Quantity: { type: 'number' },
      'Charge Name': { type: 'string' },
      Amount: { type: 'number' },
    },
    required: ['Date', 'UOM', 'Quantity', 'Charge Name', 'Amount'],
    additionalProperties: false,
  };

  const pobMappingSchema = {
    type: 'object',
    properties: {
      chargeName: { type: 'string' },
      productName: { type: ['string', 'null'] },
      ratePlanName: { type: ['string', 'null'] },
      pob_identifier: {
        type: 'string',
        enum: validPobIdentifiers,
      },
      pob_name: { type: 'string' },
      ratable_method: {
        type: 'string',
        enum: ['Ratable', 'Immediate Using Open Period', 'Immediate Using Start Date', 'Invoice Ratable'],
      },
      release_event: {
        type: 'string',
        enum: [
          'Upon Booking (Full Booking Release)',
          'Upon Billing (Billed Release)',
          'Acceptance',
          'Go-Live Event',
          'BY_AMOUNT',
          'Completion',
          'Upon Consumption',
          'CUM_PCT_EVNT',
          'Hour Input',
          'POC',
          'USAGE_QTY',
          'BY_QTY',
        ],
      },
      recognition_window: {
        type: 'object',
        properties: {
          start: { type: 'string' },
          end: { type: ['string', 'null'] },
        },
        required: ['start', 'end'],
        additionalProperties: false,
      },
      rationale: { type: 'string' },
      confidence: { type: 'number' },
      alternatives: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            pob_identifier: {
              type: 'string',
              enum: validPobIdentifiers,
            },
            pob_name: { type: 'string' },
            why_not: { type: 'string' },
          },
          required: ['pob_identifier', 'pob_name', 'why_not'],
          additionalProperties: false,
        },
      },
    },
    required: [
      'chargeName', 'productName', 'ratePlanName', 'pob_identifier',
      'pob_name', 'ratable_method', 'release_event', 'recognition_window',
      'rationale', 'confidence', 'alternatives',
    ],
    additionalProperties: false,
  };

  return {
    type: 'object',
    properties: {
      subscription: subscriptionSchema,
      rate_plans: { type: 'array', items: ratePlanSchema },
      usage: { type: 'array', items: usageRecordSchema },
      charge_pob_map: { type: 'array', items: pobMappingSchema },
      assumptions: { type: 'array', items: { type: 'string' } },
      open_questions: { type: 'array', items: { type: 'string' } },
      mapping_notes: { type: 'array', items: { type: 'string' } },
    },
    required: ['subscription', 'rate_plans', 'usage', 'charge_pob_map', 'assumptions', 'open_questions', 'mapping_notes'],
    additionalProperties: false,
  };
}

/**
 * Format context subscriptions for the prompt
 */
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

/**
 * Format context rate plans/charges for the prompt
 */
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

/**
 * Build the user message for combined subscription design
 */
function buildUserMessage(
  input: ZucaInput,
  contractIntel: ContractIntel,
  matchResults: MatchGoldenUseCasesOutput,
  contextSubs: GoldenSubscription[],
  contextRpcs: GoldenRatePlanChargesDoc[],
  pobTemplates: PobTemplate[]
): string {
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
    formatContextRatePlansCharges(contextRpcs),
    '',
    'Available ZR POB templates (YOU MUST USE IDENTIFIERS FROM THIS LIST):',
    formatPobTemplatesForContext(pobTemplates),
  ];

  return parts.filter(Boolean).join('\n');
}

/**
 * Combined subscription design output (flat structure from LLM)
 */
interface CombinedOutput {
  subscription: SubscriptionSpec['subscription'];
  rate_plans: SubscriptionSpec['rate_plans'];
  usage: SubscriptionSpec['usage'];
  charge_pob_map: PobMappingOutput['charge_pob_map'];
  assumptions: string[];
  open_questions: string[];
  mapping_notes: string[];
}

/**
 * Execute combined subscription design
 * Creates subscription spec AND assigns POB templates in a single LLM call
 */
export async function designSubscription(
  input: ZucaInput,
  contractIntel: ContractIntel,
  matchResults: MatchGoldenUseCasesOutput,
  contextSubs: GoldenSubscription[],
  contextRpcs: GoldenRatePlanChargesDoc[],
  pobTemplates: PobTemplate[],
  previousDesign?: SubscriptionDesignOutput,
  reasoningEffort: ReasoningEffort = 'high', // Complex design task needs thorough reasoning
  model?: LlmModel
): Promise<SubscriptionDesignOutput> {
  debugLog('Designing subscription (combined subscription spec + POB mapping)');

  const systemPrompt = await loadPrompt(PROMPTS.DESIGN_SUBSCRIPTION);
  let userMessage = buildUserMessage(
    input,
    contractIntel,
    matchResults,
    contextSubs,
    contextRpcs,
    pobTemplates
  );

  // Include previous results for multi-turn support
  if (previousDesign) {
    const flatPrevious = {
      subscription: previousDesign.subscriptionSpec.subscription,
      rate_plans: previousDesign.subscriptionSpec.rate_plans,
      usage: previousDesign.subscriptionSpec.usage,
      charge_pob_map: previousDesign.pobMapping.charge_pob_map,
      assumptions: previousDesign.subscriptionSpec.assumptions,
      open_questions: previousDesign.subscriptionSpec.open_questions,
      mapping_notes: previousDesign.pobMapping.mapping_notes,
    };
    userMessage = `Previous Results:\n${JSON.stringify(flatPrevious, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  // Build schema dynamically with valid POB identifiers
  const subscriptionDesignJsonSchema = buildSubscriptionDesignJsonSchema(pobTemplates);

  const result = await complete<CombinedOutput>({
    systemPrompt,
    userMessage,
    responseSchema: subscriptionDesignJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to design subscription: no structured output');
  }

  // Split the combined result into separate outputs
  const subscriptionSpec: SubscriptionSpec = {
    subscription: result.structured.subscription,
    rate_plans: result.structured.rate_plans,
    usage: result.structured.usage,
    assumptions: result.structured.assumptions,
    open_questions: result.structured.open_questions,
  };

  const pobMapping: PobMappingOutput = {
    charge_pob_map: result.structured.charge_pob_map,
    mapping_notes: result.structured.mapping_notes,
  };

  // Validate with Zod
  const subValidation = SubscriptionSpecSchema.safeParse(subscriptionSpec);
  if (!subValidation.success) {
    debugLog('Subscription spec validation failed:', subValidation.error.errors);
  }

  const pobValidation = PobMappingOutputSchema.safeParse(pobMapping);
  if (!pobValidation.success) {
    debugLog('POB mapping validation failed:', pobValidation.error.errors);
  }

  debugLog('Subscription design complete:', {
    subscriptionName: subscriptionSpec.subscription?.name,
    ratePlanCount: subscriptionSpec.rate_plans?.length,
    chargeCount: subscriptionSpec.rate_plans?.reduce((sum, rp) => sum + (rp.charges?.length || 0), 0),
    pobMappingCount: pobMapping.charge_pob_map?.length,
    assumptionCount: subscriptionSpec.assumptions?.length,
    questionCount: subscriptionSpec.open_questions?.length,
  });

  return {
    subscriptionSpec,
    pobMapping,
  };
}
