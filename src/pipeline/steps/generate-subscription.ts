import { complete, getZuoraMcpTools, ReasoningEffort } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import { SubscriptionSpec, SubscriptionSpecSchema, ContractIntel } from '../../types/output.js';
import { MatchGoldenUseCasesOutput } from '../../types/output.js';
import { GoldenSubscription, GoldenRatePlanChargesDoc } from '../../types/golden-use-cases.js';
import { ZucaInput } from '../../types/input.js';
import { formatMatchResultsForContext } from './match-golden-use-cases.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for subscription spec structured output
 * Must define all nested objects with explicit properties and additionalProperties: false
 */
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

const subscriptionSpecJsonSchema = {
  type: 'object',
  properties: {
    subscription: subscriptionSchema,
    rate_plans: { type: 'array', items: ratePlanSchema },
    usage: { type: 'array', items: usageRecordSchema },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['subscription', 'rate_plans', 'usage', 'assumptions', 'open_questions'],
  additionalProperties: false,
};

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
        .slice(0, 5) // Limit to first 5 charges per use case
        .map((c) => `  - ${c.name}: ${c.type}/${c.model}`)
        .join('\n');
      return `${rpc['Use Case Id']}:\n  Rate Plans:\n${plans}\n  Charges (sample):\n${charges}`;
    })
    .join('\n\n');
}

/**
 * Build the user message for subscription generation
 */
function buildUserMessage(
  input: ZucaInput,
  contractIntel: ContractIntel,
  matchResults: MatchGoldenUseCasesOutput,
  contextSubs: GoldenSubscription[],
  contextRpcs: GoldenRatePlanChargesDoc[]
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
  ];

  return parts.filter(Boolean).join('\n');
}

/**
 * Execute the Generate Subscription Spec step
 * Creates subscription, rate plans, and charges based on use case
 */
export async function generateSubscriptionSpec(
  input: ZucaInput,
  contractIntel: ContractIntel,
  matchResults: MatchGoldenUseCasesOutput,
  contextSubs: GoldenSubscription[],
  contextRpcs: GoldenRatePlanChargesDoc[],
  previousSpec?: SubscriptionSpec,
  reasoningEffort: ReasoningEffort = 'high' // Complex subscription design needs thorough reasoning
): Promise<SubscriptionSpec> {
  debugLog('Generating subscription spec');

  const systemPrompt = await loadPrompt(PROMPTS.GENERATE_SUBSCRIPTION);
  let userMessage = buildUserMessage(
    input,
    contractIntel,
    matchResults,
    contextSubs,
    contextRpcs
  );

  // Include previous results for multi-turn support
  if (previousSpec) {
    userMessage = `Previous Results:\n${JSON.stringify(previousSpec, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<SubscriptionSpec>({
    systemPrompt,
    userMessage,
    responseSchema: subscriptionSpecJsonSchema,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
  });

  if (!result.structured) {
    throw new Error('Failed to generate subscription spec: no structured output');
  }

  // Validate with Zod
  const validation = SubscriptionSpecSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('Subscription spec validation failed:', validation.error.errors);
  }

  debugLog('Subscription spec generated:', {
    subscriptionName: result.structured.subscription?.name,
    ratePlanCount: result.structured.rate_plans?.length,
    chargeCount: result.structured.rate_plans?.reduce(
      (sum, rp) => sum + (rp.charges?.length || 0),
      0
    ),
    assumptionCount: result.structured.assumptions?.length,
    questionCount: result.structured.open_questions?.length,
  });

  return result.structured;
}

/**
 * Format subscription spec for use in downstream prompts
 */
export function formatSubscriptionSpecForContext(spec: SubscriptionSpec): string {
  const subInfo = [
    `Subscription: ${spec.subscription.name}`,
    `  Type: ${spec.subscription.termType}`,
    `  Start: ${spec.subscription.subscriptionStartDate}`,
    `  End: ${spec.subscription.subscriptionEndDate || 'ongoing'}`,
    `  Currency: ${spec.subscription.currency}`,
  ];

  const chargeInfo = spec.rate_plans.flatMap((rp) =>
    rp.charges.map(
      (c) =>
        `  - ${rp.productName}/${rp.ratePlanName}/${c.name}: ${c.type}/${c.model}, ` +
        `${c.billingPeriod || 'N/A'} ${c.billingTiming || ''}, trigger=${c.triggerEvent}`
    )
  );

  return [...subInfo, '', 'Rate Plans & Charges:', ...chargeInfo].join('\n');
}
