import { z } from 'zod';
import {
  SubscriptionSchema,
  RatePlanSchema,
  UsageRecordSchema,
} from '../../types/output';
import { ClarificationFieldsSchema } from './clarification';
import type { PobTemplate } from '../../types/golden-use-cases';

/**
 * Dynamic schema factory for the Design Subscription step.
 *
 * Must be called per-run because the pob_identifier enum depends on
 * which POB templates are loaded from golden data.
 */
export function createDesignSubscriptionOutputSchema(pobTemplates: PobTemplate[]) {
  const validPobIdentifiers = pobTemplates.map(p => p['POB Identifier']);

  if (validPobIdentifiers.length === 0) {
    throw new Error('No POB templates loaded — cannot build design-subscription schema');
  }

  const PobMappingItemSchema = z.object({
    chargeName: z.string().describe('Name of the charge being mapped'),
    productName: z.string().nullable().describe('Product name from rate plan'),
    ratePlanName: z.string().nullable().describe('Rate plan name'),
    pob_identifier: z.enum(validPobIdentifiers as [string, ...string[]]).describe(
      'POB template identifier. Must be one of the valid identifiers from the reference data'
    ),
    pob_name: z.string().describe('Human-readable POB name'),
    ratable_method: z.enum([
      'Ratable',
      'Immediate Using Open Period',
      'Immediate Using Start Date',
      'Invoice Ratable',
    ]).describe('Revenue recognition ratable method'),
    release_event: z.enum([
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
    ]).describe('Revenue release event type'),
    recognition_window: z.object({
      start: z.string().describe('Recognition window start date'),
      end: z.string().nullable().describe('Recognition window end date, null for ongoing'),
    }),
    rationale: z.string().describe('Explanation of why this POB template was chosen'),
    confidence: z.number().min(0).max(1).describe('Confidence score for this mapping'),
    alternatives: z.array(z.object({
      pob_identifier: z.string(),
      pob_name: z.string(),
      why_not: z.string(),
    })).optional().describe('Alternative POB templates considered'),
  });

  return z.object({
    subscriptionSpec: z.object({
      subscription: SubscriptionSchema.describe('Subscription configuration'),
      rate_plans: z.array(RatePlanSchema).describe('Rate plans with charges'),
      usage: z.array(UsageRecordSchema).describe('Usage records if applicable'),
      assumptions: z.array(z.string()).describe('Assumptions made during subscription design'),
      open_questions: z.array(z.string()).describe('Questions that remain unresolved'),
    }).describe('Complete subscription specification'),
    pobMapping: z.object({
      charge_pob_map: z.array(PobMappingItemSchema).describe('Charge-to-POB template mapping'),
      mapping_notes: z.array(z.string()).describe('Notes about the POB mapping decisions'),
    }).describe('POB template mapping for revenue recognition'),
  }).merge(ClarificationFieldsSchema);
}

export type DesignSubscriptionOutput = ReturnType<typeof createDesignSubscriptionOutputSchema> extends z.ZodType<infer T> ? T : never;
