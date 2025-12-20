import { complete } from '../../llm/client.js';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index.js';
import {
  PobMappingOutput,
  PobMappingOutputSchema,
  SubscriptionSpec,
  ContractIntel,
  MatchGoldenUseCasesOutput,
} from '../../types/output.js';
import { PobTemplate } from '../../types/golden-use-cases.js';
import { formatPobTemplatesForContext } from '../../data/loader.js';
import { formatMatchResultsForContext } from './match-golden-use-cases.js';
import { debugLog } from '../../config.js';

/**
 * JSON schema for POB mapping structured output
 */
const pobMappingJsonSchema = {
  type: 'object',
  properties: {
    charge_pob_map: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          chargeName: { type: 'string' },
          productName: { type: ['string', 'null'] },
          ratePlanName: { type: ['string', 'null'] },
          pob_identifier: { type: 'string' },
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
          },
          rationale: { type: 'string' },
          confidence: { type: 'number' },
          alternatives: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                pob_identifier: { type: 'string' },
                pob_name: { type: 'string' },
                why_not: { type: 'string' },
              },
            },
          },
        },
        required: [
          'chargeName',
          'pob_identifier',
          'pob_name',
          'ratable_method',
          'release_event',
          'recognition_window',
          'rationale',
          'confidence',
        ],
      },
    },
    mapping_notes: { type: 'array', items: { type: 'string' } },
  },
  required: ['charge_pob_map', 'mapping_notes'],
};

/**
 * Format rate plans/charges for POB mapping prompt
 */
function formatChargesForMapping(spec: SubscriptionSpec): string {
  const lines: string[] = [];
  let chargeIndex = 0;

  for (const rp of spec.rate_plans) {
    for (const charge of rp.charges) {
      chargeIndex++;
      lines.push(
        `ID=${chargeIndex} | product=${rp.productName} | ratePlan=${rp.ratePlanName} | ` +
          `name=${charge.name} | type=${charge.type} | model=${charge.model} | ` +
          `uom=${charge.uom || 'N/A'} | billingPeriod=${charge.billingPeriod || 'N/A'} | ` +
          `billingTiming=${charge.billingTiming || 'N/A'} | triggerEvent=${charge.triggerEvent} | ` +
          `start=${charge.effectiveStartDate} | end=${charge.effectiveEndDate || 'ongoing'}`
      );
    }
  }

  return lines.join('\n');
}

/**
 * Build the user message for POB template assignment
 */
function buildUserMessage(
  useCaseDescription: string,
  revRecNotes: string | undefined,
  matchResults: MatchGoldenUseCasesOutput,
  contractIntel: ContractIntel,
  subscriptionSpec: SubscriptionSpec,
  pobTemplates: PobTemplate[]
): string {
  const parts = [
    'Map these ZB charges to ZR POB templates.',
    '',
    'Business context',
    `- Use case & notes: ${useCaseDescription}`,
    `- Rev rec notes (optional): ${revRecNotes || '(none)'}`,
    `- Matched golden UCs (summary):`,
    formatMatchResultsForContext(matchResults),
    '',
    'Dates & term envelope (authoritative)',
    `- serviceStart: ${contractIntel.service_start_mdy}`,
    `- serviceEnd: ${contractIntel.service_end_mdy || 'not specified'}`,
    '',
    `Billing Period: ${contractIntel.billing_period || 'Month'}`,
    `Billing Timing: ${contractIntel.billing_timing || 'InAdvance'}`,
    `Trigger Event: ${contractIntel.trigger_event}`,
    '',
    'ZB Charges',
    formatChargesForMapping(subscriptionSpec),
    '',
    'Available ZR POB templates',
    formatPobTemplatesForContext(pobTemplates),
  ];

  return parts.join('\n');
}

/**
 * Execute the Assign POB Templates step
 * Maps each charge to appropriate ZR POB templates
 */
export async function assignPobTemplates(
  useCaseDescription: string,
  revRecNotes: string | undefined,
  matchResults: MatchGoldenUseCasesOutput,
  contractIntel: ContractIntel,
  subscriptionSpec: SubscriptionSpec,
  pobTemplates: PobTemplate[],
  previousMapping?: PobMappingOutput
): Promise<PobMappingOutput> {
  debugLog('Assigning POB templates to charges');

  const systemPrompt = await loadPrompt(PROMPTS.ASSIGN_POB_TEMPLATES);
  let userMessage = buildUserMessage(
    useCaseDescription,
    revRecNotes,
    matchResults,
    contractIntel,
    subscriptionSpec,
    pobTemplates
  );

  // Include previous results for multi-turn support
  if (previousMapping) {
    userMessage = `Previous Results:\n${JSON.stringify(previousMapping, null, 2)}\n\nUser Query:\n${userMessage}`;
  }

  const result = await complete<PobMappingOutput>({
    systemPrompt,
    userMessage,
    responseSchema: pobMappingJsonSchema,
    temperature: 0.3,
  });

  if (!result.structured) {
    throw new Error('Failed to assign POB templates: no structured output');
  }

  // Validate with Zod
  const validation = PobMappingOutputSchema.safeParse(result.structured);
  if (!validation.success) {
    debugLog('POB mapping validation failed:', validation.error.errors);
  }

  debugLog('POB templates assigned:', {
    mappingCount: result.structured.charge_pob_map?.length,
    notesCount: result.structured.mapping_notes?.length,
  });

  return result.structured;
}

/**
 * Format POB mapping for use in downstream prompts
 */
export function formatPobMappingForContext(mapping: PobMappingOutput): string {
  const lines = mapping.charge_pob_map.map(
    (m) =>
      `${m.chargeName}: ${m.pob_name} (${m.pob_identifier}) | ` +
      `${m.ratable_method} | ${m.release_event} | ` +
      `${m.recognition_window.start} - ${m.recognition_window.end || 'ongoing'} | ` +
      `confidence=${(m.confidence * 100).toFixed(0)}%`
  );

  return lines.join('\n');
}
