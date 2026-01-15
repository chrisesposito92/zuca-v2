import { v4 as uuidv4 } from 'uuid';
import type { LlmModel } from '../../types/llm';
import {
  RevenueSnapshotInput,
  RevenueSnapshotOutput,
  RevenueSnapshotSource,
  RevenueSnapshotSourceCounts,
  RevenueSnapshotTableOutput,
  RevenueSnapshotSummary,
} from '../../types/revenue-snapshot';
import {
  buildSnapshotWaterfall,
  summarizeSnapshot,
} from './steps';
import { withRalph } from '../ralph';

export interface RevenueSnapshotOptions {
  sessionId?: string;
  model?: LlmModel;
  /** Override Ralph enabled setting */
  ralphEnabled?: boolean;
}

function buildSourceCounts(source: RevenueSnapshotSource): RevenueSnapshotSourceCounts {
  return {
    booking_transactions: source.booking_transactions?.length,
    billing_transactions: source.billing_transactions?.length,
    revenue_recognition_events: source.revenue_recognition_events?.length,
    subscriptions: source.subscriptions?.length,
    orders: source.orders?.length,
    invoices: source.invoices?.length,
    credit_memos: source.credit_memos?.length,
    rate_plan_charges: source.rate_plan_charges?.length,
    usage: source.usage?.length,
  };
}

export async function runRevenueSnapshotPipeline(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  options: RevenueSnapshotOptions = {}
): Promise<RevenueSnapshotOutput> {
  const sessionId = options.sessionId || uuidv4();
  const selectedModel = options.model;

  // Step 1: Build waterfall (allocations + periodization)
  const waterfallResult = await withRalph<RevenueSnapshotTableOutput>({
    stepName: 'snapshot_waterfall',
    originalInput: { input, source },
    stepFn: (iterationContext) =>
      buildSnapshotWaterfall(input, source, undefined, 'high', selectedModel, iterationContext),
    model: selectedModel,
    interactiveMode: false, // Revenue Snapshot is non-interactive
  });
  const revrec = waterfallResult.output;

  // Step 2: Summarize
  const summaryResult = await withRalph<RevenueSnapshotSummary>({
    stepName: 'snapshot_summary',
    originalInput: { input, source, revrec },
    stepFn: (iterationContext) =>
      summarizeSnapshot(input, source, revrec, undefined, 'high', selectedModel, iterationContext),
    model: selectedModel,
    interactiveMode: false,
  });
  const summary = summaryResult.output;

  return {
    session_id: sessionId,
    timestamp: new Date().toISOString(),
    input,
    otr_enabled: source.otr_enabled,
    source_counts: buildSourceCounts(source),
    revrec_waterfall: revrec,
    summary,
  };
}
