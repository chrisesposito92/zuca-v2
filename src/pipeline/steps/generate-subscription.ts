import { complete, createAskZuoraTool } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import { SubscriptionSpec, SubscriptionSpecSchema, ContractIntel } from '../../types/output.js';
import { MatchGoldenUseCasesOutput } from '../../types/output.js';
import { GoldenSubscription, GoldenRatePlanChargesDoc } from '../../types/golden-use-cases.js';
import { ZucaInput } from '../../types/input.js';
import { formatMatchResultsForContext } from './match-golden-use-cases.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for subscription spec structured output (simplified for this file)
 */
const subscriptionSpecJsonSchema = {
  type: 'object',
  properties: {
    subscription: { type: 'object' },
    rate_plans: { type: 'array', items: { type: 'object' } },
    usage: { type: 'array', items: { type: 'object' } },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['subscription', 'rate_plans', 'usage', 'assumptions', 'open_questions'],
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
  previousSpec?: SubscriptionSpec
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
    customTools: [createAskZuoraTool()], // Enable Zuora MCP for guidance
    temperature: 0.5,
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
