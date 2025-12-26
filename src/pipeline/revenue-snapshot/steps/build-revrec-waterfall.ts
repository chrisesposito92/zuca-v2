import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { extractJsonPayload } from './json';

const PERIOD_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: '2-digit',
});

function parseDate(value: unknown): Date | null {
  if (typeof value !== 'string' || !value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function monthKey(date: Date): string {
  return PERIOD_FORMAT.format(date).replace(' ', '-');
}

function listPeriods(start: Date, end: Date): Date[] {
  const periods: Date[] = [];
  const current = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), 1));
  const last = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 1));
  while (current <= last) {
    periods.push(new Date(current));
    current.setUTCMonth(current.getUTCMonth() + 1);
  }
  return periods;
}

function normalizeNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value.replace(/,/g, ''));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function inferPattern(pobTemplate: string | undefined | null): 'ratable' | 'point' {
  const template = (pobTemplate || '').toLowerCase();
  if (template.includes('point') || template.includes('pi') || template.includes('event')) return 'point';
  if (template.includes('ratable') || template.includes('time') || template.includes('term')) return 'ratable';
  return 'ratable';
}

function buildFallbackRows(contractsOrders: RevenueSnapshotTableOutput): RevenueSnapshotTableOutput {
  const assumptions: string[] = [];
  const openQuestions: string[] = [];
  const rows: Array<Record<string, any>> = [];

  for (const row of contractsOrders.rows) {
    const lineItemNum = normalizeNumber(row['Line Item Num']) ?? 0;
    const pobName = row['POB Name'] ?? row['POB Name'] ?? 'Unknown POB';
    const eventName = row['Release Event'] ?? row['Event Name'] ?? 'Revenue';
    const startDate = parseDate(row['Revenue Start Date'] ?? row['Revenue Start']);
    const endDate = parseDate(row['Revenue End Date'] ?? row['Revenue End']);
    const allocated = normalizeNumber(row['Ext Allocated Price'] ?? row['Ext Allocated']);
    const pobTemplate = row['POB Template'] ?? row['POBTemplate'] ?? row['POB Template Name'];

    if (!startDate || !endDate || allocated === null) {
      assumptions.push(
        `Missing revenue dates or allocated price for line ${lineItemNum}; rev rec schedule could not be derived.`
      );
      continue;
    }

    const pattern = inferPattern(pobTemplate);
    if (pattern === 'point') {
      rows.push({
        'Line Item Num': lineItemNum,
        'POB Name': pobName,
        'Event Name': eventName,
        'Revenue Start Date': startDate.toISOString().slice(0, 10),
        'Revenue End Date': endDate.toISOString().slice(0, 10),
        'Ext Allocated Price': allocated,
        Period: monthKey(startDate),
        Amount: Number(allocated.toFixed(2)),
      });
      continue;
    }

    const periods = listPeriods(startDate, endDate);
    if (!periods.length) {
      assumptions.push(`No periods found between ${startDate.toISOString()} and ${endDate.toISOString()}.`);
      continue;
    }

    const rawAmount = allocated / periods.length;
    let remaining = allocated;

    periods.forEach((period, index) => {
      const amount =
        index === periods.length - 1
          ? Number(remaining.toFixed(2))
          : Number(rawAmount.toFixed(2));
      remaining = Number((remaining - amount).toFixed(2));
      rows.push({
        'Line Item Num': lineItemNum,
        'POB Name': pobName,
        'Event Name': eventName,
        'Revenue Start Date': startDate.toISOString().slice(0, 10),
        'Revenue End Date': endDate.toISOString().slice(0, 10),
        'Ext Allocated Price': allocated,
        Period: monthKey(period),
        Amount: amount,
      });
    });
  }

  if (!rows.length) {
    openQuestions.push('Unable to derive Rev Rec Waterfall periods from Contracts/Orders data.');
  }

  return {
    rows,
    assumptions,
    open_questions: openQuestions,
  };
}

const snapshotTableSchema = {
  type: 'object',
  properties: {
    rows: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: true,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['rows', 'assumptions', 'open_questions'],
  additionalProperties: false,
} as const;

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  contractsOrders: RevenueSnapshotTableOutput
): string {
  const parts: string[] = [];

  parts.push(
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
    ''
  );

  if (input.data_augmentation_rules) {
    parts.push('Data Augmentation Rules:', input.data_augmentation_rules, '');
  }

  if (input.notes) {
    parts.push('Notes:', input.notes, '');
  }

  parts.push('Contracts/Orders Snapshot Rows (JSON):', JSON.stringify(contractsOrders.rows, null, 2), '');
  parts.push('Source Data (JSON):', JSON.stringify(source, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotRevRecWaterfall(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  contractsOrders: RevenueSnapshotTableOutput,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_REVREC_WATERFALL);
  let userMessage = buildUserMessage(input, source, contractsOrders);

  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
  });

  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    throw new Error(
      `Failed to parse snapshot Rev Rec JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Rev Rec Waterfall: empty response');
  }

  const normalized = (() => {
    const asObj = parsed as Record<string, any>;
    if (Array.isArray(asObj?.zr_revrec) && !asObj?.rows) {
      return {
        rows: asObj.zr_revrec,
        assumptions: Array.isArray(asObj.assumptions) ? asObj.assumptions : [],
        open_questions: Array.isArray(asObj.open_questions) ? asObj.open_questions : [],
      };
    }
    return parsed;
  })();

  const validation = RevenueSnapshotTableOutputSchema.safeParse(normalized);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Rev Rec output: ${validation.error.message}`);
  }

  const needsFallback =
    validation.data.rows.length === 0 ||
    validation.data.rows.some((row) => row?.Period === undefined || row?.Amount === undefined);

  if (!needsFallback) {
    return validation.data;
  }

  const fallback = buildFallbackRows(contractsOrders);
  return {
    rows: fallback.rows,
    assumptions: [...(validation.data.assumptions || []), ...fallback.assumptions, 'Rev Rec Waterfall derived from Contracts/Orders schedule.'],
    open_questions: [...(validation.data.open_questions || []), ...fallback.open_questions],
  };
}
