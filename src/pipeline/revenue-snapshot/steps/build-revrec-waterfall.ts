import { complete, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import { loadGoldenUseCasesData } from '../../../data/loader';
import type { PobTemplate } from '../../../types/golden-use-cases';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { extractJsonPayload } from './json';

const REVREC_BASE_FIELDS = [
  'Line Item Num',
  'POB Template',
  'POB Satisfied',
  'Customer Name',
  'Subscription Name',
  'RPC Num',
  'RPC Version',
  'Ordered Qty',
  'Revenue Start Date',
  'Revenue End Date',
  'Allocation Eligible Flag',
  'Event Name',
  'Ext List Price',
  'Ext Sell Price',
  'SSP Price',
  'Ext SSP Price',
  'Ext Allocated Price',
  'Carves Amount',
  'Unreleased Revenue',
  'Transaction Currency',
  'Total',
] as const;

const OPENAI_VALUE_SCHEMA = { type: ['string', 'number', 'boolean', 'null'] } as const;
const GEMINI_VALUE_SCHEMA = { type: 'string', nullable: true } as const;

const PERIOD_FORMAT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: '2-digit',
});

const MONTH_INDEX: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const DATE_KEY_REGEX = /date|datetime/i;
const DATE_KEY_HINT_REGEX = /(start|end|effective|service|revenue|recognition|term|billing|charge|event)/i;
const NUMERIC_FIELDS = new Set([
  'RPC Version',
  'Ordered Qty',
  'Ext List Price',
  'Ext Sell Price',
  'SSP Price',
  'Ext SSP Price',
  'Ext Allocated Price',
  'Carves Amount',
  'Unreleased Revenue',
  'Total',
]);

function parseDate(value: unknown): Date | null {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (typeof value !== 'string' || !value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function monthKey(date: Date): string {
  return PERIOD_FORMAT.format(date).replace(' ', '-');
}

function parsePeriodKey(value: string): Date | null {
  const match = /^([A-Za-z]{3})-(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const monthToken = `${match[1][0].toUpperCase()}${match[1].slice(1).toLowerCase()}`;
  const monthIndex = MONTH_INDEX[monthToken];
  if (monthIndex === undefined) return null;
  const year = Number(match[2]);
  if (!Number.isFinite(year)) return null;
  const fullYear = 2000 + year;
  return new Date(Date.UTC(fullYear, monthIndex, 1));
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

function getFallbackRange(periodFields: string[]): { start: Date; end: Date } | null {
  if (periodFields.length === 0) return null;
  const start = parsePeriodKey(periodFields[0]);
  const end = parsePeriodKey(periodFields[periodFields.length - 1]);
  if (!start || !end) return null;
  return { start, end };
}

function normalizeNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value.replace(/,/g, ''));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function round2(value: number): number {
  return Number(value.toFixed(2));
}

function normalizeAllocationFlag(value: unknown): string | null {
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['y', 'yes', 'true', '1'].includes(normalized)) return 'Y';
    if (['n', 'no', 'false', '0'].includes(normalized)) return 'N';
  }
  if (typeof value === 'boolean') return value ? 'Y' : 'N';
  return null;
}

function inferPattern(row: Record<string, any>): 'ratable' | 'point' {
  const template = String(row['POB Template'] ?? '').toLowerCase();
  const satisfied = String(row['POB Satisfied'] ?? '').toLowerCase();
  const eventName = String(row['Event Name'] ?? '').toLowerCase();

  if (
    template.includes('point') ||
    template.includes('pi') ||
    satisfied.includes('point') ||
    eventName.includes('point')
  ) {
    return 'point';
  }
  if (
    template.includes('ratable') ||
    template.includes('time') ||
    template.includes('term') ||
    satisfied.includes('over time')
  ) {
    return 'ratable';
  }
  return 'ratable';
}

function coerceNumericFields(row: Record<string, any>, periodFields: string[]): Record<string, any> {
  const next = { ...row };
  const numericKeys = [...NUMERIC_FIELDS, ...periodFields];
  numericKeys.forEach((key) => {
    if (!(key in next)) return;
    const value = next[key];
    const parsed = normalizeNumber(value);
    if (parsed !== null) {
      next[key] = parsed;
    } else if (value === '' || value === undefined) {
      next[key] = null;
    }
  });
  return next;
}

function collectRecordDates(record: Record<string, any>): Date[] {
  const dates: Date[] = [];
  for (const [key, raw] of Object.entries(record)) {
    if (!DATE_KEY_REGEX.test(key) || !DATE_KEY_HINT_REGEX.test(key)) continue;
    const parsed = parseDate(raw);
    if (parsed) dates.push(parsed);
  }
  return dates;
}

function collectSourceDates(source: RevenueSnapshotSource): Date[] {
  const buckets = [
    source.booking_transactions,
    source.billing_transactions,
    source.revenue_recognition_events,
    source.subscriptions,
    source.orders,
    source.invoices,
    source.credit_memos,
    source.rate_plan_charges,
    source.usage,
  ];

  const dates: Date[] = [];
  buckets.forEach((records) => {
    if (!Array.isArray(records)) return;
    records.forEach((record) => {
      if (record && typeof record === 'object') {
        dates.push(...collectRecordDates(record as Record<string, any>));
      }
    });
  });

  return dates;
}

function buildPeriodFields(source: RevenueSnapshotSource): string[] {
  const dates = collectSourceDates(source);
  let start: Date;
  let end: Date;

  if (dates.length > 0) {
    const min = new Date(Math.min(...dates.map((date) => date.getTime())));
    const max = new Date(Math.max(...dates.map((date) => date.getTime())));
    start = new Date(Date.UTC(min.getUTCFullYear(), min.getUTCMonth(), 1));
    end = new Date(Date.UTC(max.getUTCFullYear(), max.getUTCMonth(), 1));
  } else {
    const now = new Date();
    const base = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    start = new Date(base);
    start.setUTCMonth(start.getUTCMonth() - 60);
    end = new Date(base);
    end.setUTCMonth(end.getUTCMonth() + 60);
  }

  return listPeriods(start, end).map(monthKey);
}

function buildSnapshotSchema(
  periodFields: string[],
  valueSchema: typeof OPENAI_VALUE_SCHEMA | typeof GEMINI_VALUE_SCHEMA
) {
  const properties: Record<string, typeof valueSchema> = {};
  REVREC_BASE_FIELDS.forEach((field) => {
    properties[field] = valueSchema;
  });
  periodFields.forEach((field) => {
    properties[field] = valueSchema;
  });

  return {
    type: 'object',
    properties: {
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties,
          additionalProperties: false,
        },
      },
      assumptions: { type: 'array', items: { type: 'string' } },
      open_questions: { type: 'array', items: { type: 'string' } },
    },
    required: ['rows', 'assumptions', 'open_questions'],
    additionalProperties: false,
  } as const;
}

function formatPobTemplatesForContext(
  templates: PobTemplate[],
  rows: Array<Record<string, any>>
): string {
  if (!templates.length) return 'No POB template metadata available.';

  const templateMap = new Map<string, PobTemplate>();
  templates.forEach((template) => {
    templateMap.set(template['POB Identifier'], template);
  });

  const seen = new Set<string>();
  const lines: string[] = [];

  rows.forEach((row) => {
    const templateId = row['POB Template'];
    if (!templateId || seen.has(templateId)) return;
    seen.add(templateId);
    const template = templateMap.get(String(templateId));
    if (!template) {
      lines.push(`- ${templateId}: (no template metadata found)`);
      return;
    }
    const notes = template['Recognition Notes'] ?? template.Description ?? 'No recognition notes.';
    lines.push(
      `- ${template['POB Identifier']} (${template['Template Name']}): ${notes} ` +
        `(Release Event: ${template['Release Event']}, POB Satisfied: ${template['POB Satisfied']})`
    );
  });

  if (!lines.length) {
    return 'No POB template identifiers found in allocations rows.';
  }

  return lines.join('\n');
}

function ensureAllocationDefaults(
  row: Record<string, any>,
  input: RevenueSnapshotInput
): { row: Record<string, any>; assumptions: string[] } {
  const assumptions: string[] = [];
  const next = { ...row };

  const orderedQty = normalizeNumber(next['Ordered Qty']) ?? 1;
  const allocationFlag = normalizeAllocationFlag(next['Allocation Eligible Flag']);

  let extList = normalizeNumber(next['Ext List Price']);
  let extSell = normalizeNumber(next['Ext Sell Price']);
  let sspPrice = normalizeNumber(next['SSP Price']);
  let extSsp = normalizeNumber(next['Ext SSP Price']);
  let extAllocated = normalizeNumber(next['Ext Allocated Price']);

  if (extSell === null && extList !== null) {
    extSell = extList;
  }
  if (extList === null && extSell !== null) {
    extList = extSell;
  }

  if (extSsp === null && extSell !== null) {
    extSsp = extSell;
  }
  if (sspPrice === null && extSsp !== null && orderedQty) {
    sspPrice = extSsp / orderedQty;
  }

  if (extAllocated === null) {
    if (extSell !== null) {
      extAllocated = extSell;
    } else if (extList !== null) {
      extAllocated = extList;
    } else if (extSsp !== null) {
      extAllocated = extSsp;
    } else {
      extAllocated = 0;
      assumptions.push('Ext Allocated Price defaulted to 0 due to missing pricing data.');
    }
  }

  if (!next['Allocation Eligible Flag']) {
    next['Allocation Eligible Flag'] = allocationFlag ?? 'N';
  }

  if (next['Ext List Price'] === undefined) next['Ext List Price'] = extList;
  if (next['Ext Sell Price'] === undefined) next['Ext Sell Price'] = extSell;
  if (next['SSP Price'] === undefined) next['SSP Price'] = sspPrice;
  if (next['Ext SSP Price'] === undefined) next['Ext SSP Price'] = extSsp;
  if (next['Ext Allocated Price'] === undefined) next['Ext Allocated Price'] = extAllocated;

  if (next['Carves Amount'] === undefined || next['Carves Amount'] === null) {
    next['Carves Amount'] = 0;
  }

  if (next['Transaction Currency'] === undefined) {
    next['Transaction Currency'] =
      next['Currency'] ?? next['Functional Currency'] ?? next['Transaction Currency'] ?? null;
  }

  if (next['POB Satisfied'] === undefined || next['POB Satisfied'] === null) {
    next['POB Satisfied'] = inferPattern(next) === 'point' ? 'Point in Time' : 'Over Time';
  }

  if (input.ssp_method && input.ssp_method !== 'None' && allocationFlag !== 'N') {
    assumptions.push(`SSP method '${input.ssp_method}' applied to allocation defaults when possible.`);
  }

  return { row: next, assumptions };
}

function applyPeriodization(
  row: Record<string, any>,
  periodFields: string[],
  fallbackRange?: { start: Date; end: Date } | null
): { row: Record<string, any>; assumptions: string[]; openQuestions: string[] } {
  const assumptions: string[] = [];
  const openQuestions: string[] = [];
  const next = { ...row };

  const hasPeriods = periodFields.some((field) => {
    const value = next[field];
    return value !== undefined && value !== null && value !== '';
  });

  if (hasPeriods) {
    const total = periodFields.reduce((sum, field) => {
      const value = normalizeNumber(next[field]);
      return sum + (value ?? 0);
    }, 0);
    if (next['Total'] === undefined || next['Total'] === null) {
      next['Total'] = round2(total);
    }
    return { row: next, assumptions, openQuestions };
  }

  let startDate = parseDate(next['Revenue Start Date']);
  let endDate = parseDate(next['Revenue End Date']);
  let allocated = normalizeNumber(next['Ext Allocated Price']);

  if ((!startDate || !endDate) && fallbackRange) {
    startDate = fallbackRange.start;
    endDate = fallbackRange.end;
    if (!next['Revenue Start Date']) {
      next['Revenue Start Date'] = startDate.toISOString().slice(0, 10);
    }
    if (!next['Revenue End Date']) {
      next['Revenue End Date'] = endDate.toISOString().slice(0, 10);
    }
    assumptions.push(
      `Revenue dates missing; defaulted to overall snapshot range (${monthKey(startDate)} to ${monthKey(endDate)}).`
    );
  }

  if (allocated === null) {
    allocated = 0;
    assumptions.push('Ext Allocated Price missing; defaulted to 0 for periodization.');
  }

  if (!startDate || !endDate) {
    openQuestions.push('Missing revenue dates; unable to periodize rev rec amounts.');
    return { row: next, assumptions, openQuestions };
  }

  const periods = listPeriods(startDate, endDate);
  if (!periods.length) {
    assumptions.push(`No periods found between ${startDate.toISOString()} and ${endDate.toISOString()}.`);
    return { row: next, assumptions, openQuestions };
  }
  const pattern = inferPattern(next);
  const skipped: string[] = [];

  if (pattern === 'point') {
    const key = monthKey(startDate);
    if (!periodFields.includes(key)) {
      skipped.push(key);
    } else {
      next[key] = round2(allocated);
    }
  } else {
    const rawAmount = allocated / periods.length;
    let remaining = allocated;

    periods.forEach((period, index) => {
      const amount = index === periods.length - 1 ? round2(remaining) : round2(rawAmount);
      remaining = round2(remaining - amount);
      const key = monthKey(period);
      if (!periodFields.includes(key)) {
        skipped.push(key);
        return;
      }
      next[key] = amount;
    });
  }

  if (skipped.length) {
    assumptions.push(`Rev rec periods outside schema (${skipped.join(', ')}) omitted from output.`);
  }

  const total = periodFields.reduce((sum, field) => {
    const value = normalizeNumber(next[field]);
    return sum + (value ?? 0);
  }, 0);
  next['Total'] = round2(total);

  return { row: next, assumptions, openQuestions };
}

function pickRecordValue(record: Record<string, any>, keys: string[]): any {
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined && value !== null && value !== '') {
      return value;
    }
  }
  return undefined;
}

function getChargeId(record: Record<string, any>): string | undefined {
  const candidates = [
    'Product Rate Plan Charge ID',
    'Product Rate Plan Charge Id',
    'ProductRatePlanChargeId',
    'Rate Plan Charge ID',
    'Rate Plan Charge Id',
    'RatePlanChargeId',
    'Original Rate Plan Charge Id',
    'Original Rate Plan Charge ID',
  ];
  const value = pickRecordValue(record, candidates);
  return value ? String(value) : undefined;
}

function buildRowsFromBookingTransactions(
  source: RevenueSnapshotSource,
  input: RevenueSnapshotInput,
  periodFields: string[],
  fallbackRange?: { start: Date; end: Date } | null
): RevenueSnapshotTableOutput | null {
  const booking = source.booking_transactions;
  if (!booking || booking.length === 0) return null;

  const assumptions: string[] = [];
  const openQuestions: string[] = [];
  const rows = booking.map((record) => {
    const row: Record<string, any> = {};

    row['Line Item Num'] = pickRecordValue(record, [
      'Line Item Num',
      'Item Name',
      'Product Rate Plan Charge Name',
      'Rate Plan Charge Name',
    ]);
    row['Customer Name'] = pickRecordValue(record, ['Company Name', 'Customer Name', 'Account Name']);
    row['Subscription Name'] = pickRecordValue(record, ['Subscription Name', 'Subscription Number']);
    row['RPC Num'] = pickRecordValue(record, ['Charge Number', 'Rate Plan Charge Num', 'RPC Num']);
    row['RPC Version'] = pickRecordValue(record, ['Rate Plan Charge Version', 'RPC Version']);
    row['Ordered Qty'] = pickRecordValue(record, ['Current Quantity', 'Ordered Qty', 'Quantity']);
    row['Revenue Start Date'] = pickRecordValue(record, ['Revenue Start Date', 'Current Start Date', 'Start Date']);
    row['Revenue End Date'] = pickRecordValue(record, ['Revenue End Date', 'Current End Date', 'End Date']);
    row['Transaction Currency'] = pickRecordValue(record, ['Currency Code', 'Transaction Currency', 'Currency']);
    row['Allocation Eligible Flag'] = normalizeAllocationFlag(
      pickRecordValue(record, ['Is Allocation Eligible', 'Allocation Eligible Flag', 'CV Eligible Flag'])
    ) ?? 'N';
    row['Event Name'] = pickRecordValue(record, [
      'Release Event',
      'Rate Plan Charge Trigger Event',
      'Trigger Event',
    ]);
    row['Ext List Price'] = pickRecordValue(record, ['Ext List Price', 'Current ELP', 'Extended List Price']);
    row['Ext Sell Price'] = pickRecordValue(record, [
      'Ext Sell Price',
      'Revenue Extended Selling Price',
      'Extended Selling Price',
      'Transaction Price',
    ]);

    const chargeId = getChargeId(record);
    const pobTemplate = chargeId ? source.pob_criteria_map?.[chargeId] : undefined;
    if (pobTemplate) {
      row['POB Template'] = pobTemplate;
    }

    const allocationResult = ensureAllocationDefaults(row, input);
    assumptions.push(...allocationResult.assumptions);
    const normalized = coerceNumericFields(allocationResult.row, periodFields);

    const periodResult = applyPeriodization(normalized, periodFields, fallbackRange);
    assumptions.push(...periodResult.assumptions);
    openQuestions.push(...periodResult.openQuestions);

    return periodResult.row;
  });

  if (!rows.length) {
    openQuestions.push('No BookingTransaction rows available to build Rev Rec Waterfall.');
  }

  return { rows, assumptions, open_questions: openQuestions };
}

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  allocations: RevenueSnapshotTableOutput,
  pobTemplates: PobTemplate[]
): string {
  const parts: string[] = [];

  parts.push(
    `Selected Subscriptions: ${input.subscription_numbers.join(', ')}`,
    `OTR Enabled: ${source.otr_enabled ? 'Yes' : 'No'}`,
    ''
  );

  if (input.ssp_method) {
    parts.push(`SSP Method: ${input.ssp_method}`);
    if (input.ssp_custom_formula) {
      parts.push(`SSP Custom Formula: ${input.ssp_custom_formula}`);
    }
    parts.push('');
  }

  if (input.data_augmentation_rules) {
    parts.push('Data Augmentation Rules:', input.data_augmentation_rules, '');
  }

  if (input.notes) {
    parts.push('Notes:', input.notes, '');
  }

  if (allocations.assumptions.length) {
    parts.push('Allocations Assumptions:', allocations.assumptions.join('\n'), '');
  }

  if (allocations.open_questions.length) {
    parts.push('Allocations Open Questions:', allocations.open_questions.join('\n'), '');
  }

  parts.push('Allocations Table (JSON):', JSON.stringify(allocations.rows, null, 2), '');

  parts.push('POB Template Recognition Notes:', formatPobTemplatesForContext(pobTemplates, allocations.rows), '');

  const eventContext = {
    billing_transactions: source.billing_transactions ?? [],
    revenue_recognition_events: source.revenue_recognition_events ?? [],
    usage: source.usage ?? [],
  };
  parts.push('Event Data (JSON):', JSON.stringify(eventContext, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotRevRecWaterfall(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  allocations: RevenueSnapshotTableOutput,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_REVREC_WATERFALL);
  const pobTemplates = (await loadGoldenUseCasesData()).pobTemplates;
  let userMessage = buildUserMessage(input, source, allocations, pobTemplates);

  if (previousOutput) {
    userMessage = `Previous Results:\n${JSON.stringify(previousOutput, null, 2)}\n\n${userMessage}`;
  }

  const periodFields = buildPeriodFields(source);
  const fallbackRange = getFallbackRange(periodFields);
  const resolvedModel = model ?? process.env.LLM_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-5.2';
  const useGeminiSchema = resolvedModel.startsWith('gemini');
  const responseSchema = buildSnapshotSchema(
    periodFields,
    useGeminiSchema ? GEMINI_VALUE_SCHEMA : OPENAI_VALUE_SCHEMA
  );

  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    reasoningEffort,
    model,
    responseSchema,
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
    if (Array.isArray(asObj?.['REV REC']) && !asObj?.rows) {
      return {
        rows: asObj['REV REC'],
        assumptions: Array.isArray(asObj.assumptions) ? asObj.assumptions : [],
        open_questions: Array.isArray(asObj.open_questions) ? asObj.open_questions : [],
      };
    }
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

  const assumptions = [...allocations.assumptions, ...validation.data.assumptions];
  const openQuestions = [...allocations.open_questions, ...validation.data.open_questions];
  const processedRows = validation.data.rows.map((row) => {
    const allocationResult = ensureAllocationDefaults(row, input);
    assumptions.push(...allocationResult.assumptions);

    const normalized = coerceNumericFields(allocationResult.row, periodFields);
    const periodResult = applyPeriodization(normalized, periodFields, fallbackRange);
    assumptions.push(...periodResult.assumptions);
    openQuestions.push(...periodResult.openQuestions);

    return periodResult.row;
  });

  const hasMeaningfulRows = processedRows.some(
    (row) => row?.['Line Item Num'] || row?.['Subscription Name'] || row?.['RPC Num']
  );
  const hasPeriods = processedRows.some((row) =>
    periodFields.some((field) => row?.[field] !== undefined && row?.[field] !== null && row?.[field] !== '')
  );

  const allocationFallback = allocations.rows.length
    ? allocations.rows.map((row) => {
        const allocationResult = ensureAllocationDefaults(row, input);
        assumptions.push(...allocationResult.assumptions);
        const normalized = coerceNumericFields(allocationResult.row, periodFields);
        const periodResult = applyPeriodization(normalized, periodFields, fallbackRange);
        assumptions.push(...periodResult.assumptions);
        openQuestions.push(...periodResult.openQuestions);
        return periodResult.row;
      })
    : [];

  if ((!hasMeaningfulRows || !processedRows.length || !hasPeriods) && allocationFallback.length) {
    return {
      rows: allocationFallback,
      assumptions,
      open_questions: openQuestions,
    };
  }

  if (!hasPeriods) {
    const fallback = buildRowsFromBookingTransactions(source, input, periodFields, fallbackRange);
    if (fallback) {
      return fallback;
    }
  }

  return {
    rows: processedRows,
    assumptions,
    open_questions: openQuestions,
  };
}
