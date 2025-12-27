import { z } from 'zod';

export const SnapshotSspMethodSchema = z.enum([
  'None',
  'List Price',
  'Sell Price',
  'Custom Formula',
]);
export type SnapshotSspMethod = z.infer<typeof SnapshotSspMethodSchema>;

export const RevenueSnapshotInputSchema = z.object({
  subscription_numbers: z
    .array(z.string().min(1))
    .min(1, 'At least one subscription is required'),
  ssp_method: SnapshotSspMethodSchema.optional(),
  ssp_custom_formula: z.string().optional(),
  data_augmentation_rules: z.string().optional(),
  notes: z.string().optional(),
});

export type RevenueSnapshotInput = z.infer<typeof RevenueSnapshotInputSchema>;

export const RevenueSnapshotSourceSchema = z.object({
  otr_enabled: z.boolean(),
  booking_transactions: z.array(z.record(z.any())).optional(),
  billing_transactions: z.array(z.record(z.any())).optional(),
  revenue_recognition_events: z.array(z.record(z.any())).optional(),
  subscriptions: z.array(z.record(z.any())).optional(),
  orders: z.array(z.record(z.any())).optional(),
  invoices: z.array(z.record(z.any())).optional(),
  credit_memos: z.array(z.record(z.any())).optional(),
  rate_plan_charges: z.array(z.record(z.any())).optional(),
  usage: z.array(z.record(z.any())).optional(),
  pob_criteria_map: z.record(z.string().nullable()).optional(),
});

export type RevenueSnapshotSource = z.infer<typeof RevenueSnapshotSourceSchema>;

export const RevenueSnapshotTableOutputSchema = z.object({
  rows: z.array(z.record(z.any())),
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
});

export type RevenueSnapshotTableOutput = z.infer<typeof RevenueSnapshotTableOutputSchema>;

export const RevenueSnapshotSummarySchema = z.object({
  assumptions: z.array(z.string()),
  open_questions: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
});

export type RevenueSnapshotSummary = z.infer<typeof RevenueSnapshotSummarySchema>;

export const RevenueSnapshotSourceCountsSchema = z.object({
  booking_transactions: z.number().optional(),
  billing_transactions: z.number().optional(),
  revenue_recognition_events: z.number().optional(),
  subscriptions: z.number().optional(),
  orders: z.number().optional(),
  invoices: z.number().optional(),
  credit_memos: z.number().optional(),
  rate_plan_charges: z.number().optional(),
  usage: z.number().optional(),
});

export type RevenueSnapshotSourceCounts = z.infer<typeof RevenueSnapshotSourceCountsSchema>;

export const RevenueSnapshotOutputSchema = z.object({
  session_id: z.string(),
  timestamp: z.string(),
  input: RevenueSnapshotInputSchema,
  otr_enabled: z.boolean(),
  source_counts: RevenueSnapshotSourceCountsSchema.optional(),
  revrec_waterfall: RevenueSnapshotTableOutputSchema,
  summary: RevenueSnapshotSummarySchema,
});

export type RevenueSnapshotOutput = z.infer<typeof RevenueSnapshotOutputSchema>;
