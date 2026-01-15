import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
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
import { loadBookingMappingCsv } from '../mappings';
import { debugLog } from '../../../config';

// Base fields for Rev Rec Waterfall output (excluding dynamic month columns)
const WATERFALL_BASE_FIELDS = [
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
  timeZone: 'UTC',
});

const MONTH_INDEX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
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

// ============================================================================
// Key Normalization (for case-insensitive API field matching)
// ============================================================================

/**
 * Normalize a key for case-insensitive matching.
 * Removes spaces, underscores, hyphens and converts to lowercase.
 */
function normalizeKey(key: string): string {
  return key.replace(/[\s_-]/g, '').toLowerCase();
}

// ============================================================================
// Date and Period Utilities
// ============================================================================

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
  const match = /^([A-Za-z]{3})-(\d{2})$/.test(value.trim()) ? value.trim().match(/^([A-Za-z]{3})-(\d{2})$/) : null;
  if (!match) return null;
  const monthToken = match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
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

// ============================================================================
// Source Date Extraction
// ============================================================================

function collectRecordDates(record: Record<string, unknown>): Date[] {
  const dates: Date[] = [];
  // Known date fields from BookingTransaction API
  const knownDateFields = [
    'currentstartdate', 'currentenddate', 'revenuestartdate', 'revenueenddate',
    'subscriptionstartdate', 'subscriptionenddate', 'subscriptiontermstartdate', 'subscriptiontermenddate',
    'effectivestartdate', 'effectiveenddate', 'startdate', 'enddate',
    'originalorddate', 'ordercreatedate', 'orderupdatedate',
    'originaltermstartdate', 'originaltermenddate',
  ];

  for (const [key, raw] of Object.entries(record)) {
    const normalizedKey = normalizeKey(key);
    // Check known fields or heuristic matching
    const isKnownDateField = knownDateFields.includes(normalizedKey);
    const matchesHeuristic = DATE_KEY_REGEX.test(key) && DATE_KEY_HINT_REGEX.test(key);

    if (!isKnownDateField && !matchesHeuristic) continue;
    const parsed = parseDate(raw);
    if (parsed) dates.push(parsed);
  }
  return dates;
}

/**
 * Collect only revenue-specific dates from a record.
 * Per docs/booking-template-revenue-field-mappings.csv:
 * - CurrentStartDate → Revenue Start Date
 * - CurrentEndDate → Revenue End Date
 */
function collectRevenueDates(record: Record<string, unknown>): Date[] {
  const dates: Date[] = [];
  // Revenue date fields from Zuora BookingTransaction API
  const revenueDateFields = [
    'currentstartdate', 'currentenddate',
    'revenuestartdate', 'revenueenddate',
  ];

  for (const [key, raw] of Object.entries(record)) {
    const normalizedKey = normalizeKey(key);
    if (!revenueDateFields.includes(normalizedKey)) continue;
    const parsed = parseDate(raw);
    if (parsed) dates.push(parsed);
  }
  return dates;
}

/**
 * Collect revenue-specific dates from all source buckets.
 * Used to determine period range based on actual revenue dates, not lifecycle dates.
 */
function collectSourceRevenueDates(source: RevenueSnapshotSource): Date[] {
  const buckets = [
    source.booking_transactions,
    source.billing_transactions,
    source.revenue_recognition_events,
  ];

  const dates: Date[] = [];
  buckets.forEach((records) => {
    if (!Array.isArray(records)) return;
    records.forEach((record) => {
      if (record && typeof record === 'object') {
        dates.push(...collectRevenueDates(record as Record<string, unknown>));
      }
    });
  });
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
        dates.push(...collectRecordDates(record as Record<string, unknown>));
      }
    });
  });

  return dates;
}

function buildPeriodFields(source: RevenueSnapshotSource): string[] {
  // First try revenue-specific dates (actual revenue recognition periods)
  let dates = collectSourceRevenueDates(source);

  // Fall back to all dates only if no revenue dates found
  if (dates.length === 0) {
    dates = collectSourceDates(source);
  }

  let start: Date;
  let end: Date;

  if (dates.length > 0) {
    const min = new Date(Math.min(...dates.map((date) => date.getTime())));
    const max = new Date(Math.max(...dates.map((date) => date.getTime())));
    start = new Date(Date.UTC(min.getUTCFullYear(), min.getUTCMonth(), 1));
    end = new Date(Date.UTC(max.getUTCFullYear(), max.getUTCMonth(), 1));
  } else {
    // Fallback: ±24 months from today
    const now = new Date();
    const base = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    start = new Date(base);
    start.setUTCMonth(start.getUTCMonth() - 24);
    end = new Date(base);
    end.setUTCMonth(end.getUTCMonth() + 24);
  }

  return listPeriods(start, end).map(monthKey);
}

function getFallbackRange(periodFields: string[]): { start: Date; end: Date } | null {
  if (periodFields.length === 0) return null;
  const start = parsePeriodKey(periodFields[0]);
  const end = parsePeriodKey(periodFields[periodFields.length - 1]);
  if (!start || !end) return null;
  return { start, end };
}

// ============================================================================
// Schema Building
// ============================================================================

function buildWaterfallSchema(
  periodFields: string[],
  valueSchema: typeof OPENAI_VALUE_SCHEMA | typeof GEMINI_VALUE_SCHEMA
) {
  const properties: Record<string, typeof valueSchema> = {};
  WATERFALL_BASE_FIELDS.forEach((field) => {
    properties[field] = valueSchema;
  });
  periodFields.forEach((field) => {
    properties[field] = valueSchema;
  });

  // OpenAI structured output requires all properties in 'required' array
  const allFields = [...WATERFALL_BASE_FIELDS, ...periodFields];

  return {
    type: 'object',
    properties: {
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties,
          required: allFields,
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

// ============================================================================
// POB Template Context
// ============================================================================

function formatPobTemplatesForContext(
  templates: PobTemplate[],
  pobCriteriaMap: Record<string, string | null> | undefined
): string {
  if (!templates.length) return 'No POB template metadata available.';

  const lines: string[] = [];
  const usedTemplates = new Set<string>(Object.values(pobCriteriaMap || {}).filter(Boolean) as string[]);

  // If we have a pob_criteria_map, show only templates that are in use
  if (usedTemplates.size > 0) {
    lines.push('POB Templates in use for this subscription:');
    templates.forEach((template) => {
      if (!usedTemplates.has(template['POB Identifier'])) return;
      const notes = template['Recognition Notes'] ?? template.Description ?? 'No recognition notes.';
      lines.push(
        '- ' + template['POB Identifier'] + ' (' + template['Template Name'] + '): ' + notes +
        ' (Release Event: ' + template['Release Event'] + ', POB Satisfied: ' + template['POB Satisfied'] +
        ', Ratable Method: ' + template['Ratable Method'] + ')'
      );
    });
  }

  // Always include common templates as reference
  lines.push('\nCommon POB Template Reference:');
  const commonTemplates = ['BK-OT-RATABLE', 'BK-PI-ONETIME', 'BL-OT-RATABLE', 'EVT-PIT-CONSUMP-USAGE'];
  templates.forEach((template) => {
    if (!commonTemplates.includes(template['POB Identifier'])) return;
    lines.push(
      '- ' + template['POB Identifier'] + ': ' + template.Description + ' (' + template['POB Satisfied'] + ')'
    );
  });

  return lines.join('\n');
}

// ============================================================================
// User Message Building
// ============================================================================

function buildUserMessage(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  pobTemplates: PobTemplate[],
  bookingMappingCsv?: string,
  periodFields?: string[]
): string {
  const parts: string[] = [];

  parts.push(
    '## Configuration',
    'Selected Subscriptions: ' + input.subscription_numbers.join(', '),
    'OTR Enabled: ' + (source.otr_enabled ? 'Yes' : 'No'),
    'SSP Method: ' + (input.ssp_method || 'None'),
    ''
  );

  if (input.ssp_method === 'Custom Formula' && input.ssp_custom_formula) {
    parts.push('SSP Custom Formula: ' + input.ssp_custom_formula, '');
  }

  if (input.data_augmentation_rules) {
    parts.push('## Data Augmentation Rules', input.data_augmentation_rules, '');
  }

  if (input.notes) {
    parts.push('## Notes', input.notes, '');
  }

  // POB Criteria Map
  if (source.pob_criteria_map && Object.keys(source.pob_criteria_map).length > 0) {
    parts.push(
      '## POB Criteria Map (Charge ID → POB Template)',
      JSON.stringify(source.pob_criteria_map, null, 2),
      ''
    );
  }

  // POB Template metadata
  parts.push(
    '## POB Template Metadata',
    formatPobTemplatesForContext(pobTemplates, source.pob_criteria_map),
    ''
  );

  // Booking mapping CSV for OTR
  if (source.otr_enabled && bookingMappingCsv) {
    parts.push(
      '## BookingTransaction Field Mapping (CSV)',
      bookingMappingCsv,
      ''
    );
  }

  // Period fields hint
  if (periodFields && periodFields.length > 0) {
    const firstFive = periodFields.slice(0, 5).join(', ');
    const lastTwo = periodFields.slice(-2).join(', ');
    parts.push(
      '## Expected Month Columns',
      'Generate columns for: ' + firstFive + (periodFields.length > 5 ? ' ... ' + lastTwo : ''),
      'Total months: ' + periodFields.length,
      ''
    );
  }

  // Source data
  parts.push(
    '## Source Data',
    '',
    '### BookingTransaction Records',
    JSON.stringify(source.booking_transactions || [], null, 2),
    ''
  );

  if (source.billing_transactions && source.billing_transactions.length > 0) {
    parts.push(
      '### BillingTransaction Records',
      JSON.stringify(source.billing_transactions, null, 2),
      ''
    );
  }

  if (source.revenue_recognition_events && source.revenue_recognition_events.length > 0) {
    parts.push(
      '### RevenueRecognitionEventsTransaction Records',
      JSON.stringify(source.revenue_recognition_events, null, 2),
      ''
    );
  }

  if (source.usage && source.usage.length > 0) {
    parts.push(
      '### Usage Records',
      JSON.stringify(source.usage, null, 2),
      ''
    );
  }

  parts.push(
    '## Instructions',
    '1. Create one row per BookingTransaction record',
    '2. Assign POB Template from pob_criteria_map or infer from charge type',
    '3. Calculate allocations per the SSP method (if applicable)',
    '4. Generate month columns using daily rate method for ratable items',
    '5. Ensure Total = Ext Allocated Price for each row',
    '6. Use code_interpreter for allocation and periodization calculations',
    ''
  );

  return parts.join('\n');
}

// ============================================================================
// Post-Processing
// ============================================================================

function normalizeAllocationFlag(value: unknown): string {
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['y', 'yes', 'true', '1'].includes(normalized)) return 'Y';
    if (['n', 'no', 'false', '0'].includes(normalized)) return 'N';
  }
  if (typeof value === 'boolean') return value ? 'Y' : 'N';
  return 'N';
}

function inferPattern(row: Record<string, unknown>): 'ratable' | 'point' {
  const template = String(row['POB Template'] ?? '').toLowerCase();
  const satisfied = String(row['POB Satisfied'] ?? '').toLowerCase();
  const eventName = String(row['Event Name'] ?? '').toLowerCase();

  if (
    template.includes('-pi-') ||
    template.includes('point') ||
    satisfied.includes('point') ||
    eventName.includes('point')
  ) {
    return 'point';
  }
  if (
    template.includes('-ot-') ||
    template.includes('ratable') ||
    template.includes('over time') ||
    satisfied.includes('over time')
  ) {
    return 'ratable';
  }
  return 'ratable'; // Default
}

function coerceNumericFields(row: Record<string, unknown>, periodFields: string[]): Record<string, unknown> {
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

function ensureRequiredDefaults(
  row: Record<string, unknown>,
  _input: RevenueSnapshotInput
): { row: Record<string, unknown>; assumptions: string[] } {
  const assumptions: string[] = [];
  const next = { ...row };

  // Normalize allocation flag
  next['Allocation Eligible Flag'] = normalizeAllocationFlag(next['Allocation Eligible Flag']);

  // Ensure numeric fields have values
  const orderedQty = normalizeNumber(next['Ordered Qty']) ?? 1;
  next['Ordered Qty'] = orderedQty;

  let extList = normalizeNumber(next['Ext List Price']);
  let extSell = normalizeNumber(next['Ext Sell Price']);
  let extAllocated = normalizeNumber(next['Ext Allocated Price']);

  // Fallback pricing
  if (extSell === null && extList !== null) {
    extSell = extList;
    assumptions.push('Ext Sell Price defaulted to Ext List Price.');
  }
  if (extList === null && extSell !== null) {
    extList = extSell;
  }
  if (extAllocated === null && extSell !== null) {
    extAllocated = extSell;
    assumptions.push('Ext Allocated Price defaulted to Ext Sell Price.');
  }

  next['Ext List Price'] = extList ?? 0;
  next['Ext Sell Price'] = extSell ?? 0;
  next['Ext Allocated Price'] = extAllocated ?? 0;

  // Default SSP fields if not set
  if (next['SSP Price'] === undefined || next['SSP Price'] === null) {
    next['SSP Price'] = extSell !== null ? extSell / orderedQty : null;
  }
  if (next['Ext SSP Price'] === undefined || next['Ext SSP Price'] === null) {
    next['Ext SSP Price'] = extSell;
  }

  // Default other fields
  if (next['Carves Amount'] === undefined || next['Carves Amount'] === null) {
    next['Carves Amount'] = 0;
  }
  if (next['Unreleased Revenue'] === undefined || next['Unreleased Revenue'] === null) {
    next['Unreleased Revenue'] = 0;
  }
  if (next['RPC Version'] === undefined || next['RPC Version'] === null) {
    next['RPC Version'] = 1;
  }

  // POB Satisfied inference
  if (!next['POB Satisfied']) {
    next['POB Satisfied'] = inferPattern(next) === 'point' ? 'Point in Time' : 'Over Time';
    assumptions.push('POB Satisfied inferred from POB Template pattern.');
  }

  return { row: next, assumptions };
}

function applyPeriodization(
  row: Record<string, unknown>,
  periodFields: string[],
  fallbackRange?: { start: Date; end: Date } | null
): { row: Record<string, unknown>; assumptions: string[]; openQuestions: string[] } {
  const assumptions: string[] = [];
  const openQuestions: string[] = [];
  const next = { ...row };

  // Check if periods are already populated
  const hasPeriods = periodFields.some((field) => {
    const value = next[field];
    return value !== undefined && value !== null && value !== '' && value !== 0;
  });

  if (hasPeriods) {
    // Recalculate Total from period columns
    const total = periodFields.reduce((sum, field) => {
      const value = normalizeNumber(next[field]);
      return sum + (value ?? 0);
    }, 0);
    next['Total'] = round2(total);
    return { row: next, assumptions, openQuestions };
  }

  // Need to periodize
  let startDate = parseDate(next['Revenue Start Date']);
  let endDate = parseDate(next['Revenue End Date']);
  const allocated = normalizeNumber(next['Ext Allocated Price']) ?? 0;

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
      'Revenue dates missing; defaulted to snapshot range (' + monthKey(startDate) + ' to ' + monthKey(endDate) + ').'
    );
  }

  if (!startDate || !endDate) {
    openQuestions.push('Missing revenue dates; unable to periodize rev rec amounts.');
    next['Total'] = allocated;
    return { row: next, assumptions, openQuestions };
  }

  const pattern = inferPattern(next);

  if (pattern === 'point') {
    // Point in time: full amount in start month
    const key = monthKey(startDate);
    if (periodFields.includes(key)) {
      next[key] = round2(allocated);
    } else {
      assumptions.push('Recognition month ' + key + ' outside output range.');
    }
    next['Total'] = round2(allocated);
  } else {
    // Ratable: daily rate method
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const dailyRate = totalDays > 0 ? allocated / totalDays : 0;

    const periods = listPeriods(startDate, endDate);
    let remaining = allocated;

    periods.forEach((period, index) => {
      const key = monthKey(period);
      if (!periodFields.includes(key)) return;

      // Calculate days in this month within revenue period
      const monthStart = new Date(Date.UTC(period.getUTCFullYear(), period.getUTCMonth(), 1));
      const monthEnd = new Date(Date.UTC(period.getUTCFullYear(), period.getUTCMonth() + 1, 0));

      const effectiveStart = startDate > monthStart ? startDate : monthStart;
      const effectiveEnd = endDate < monthEnd ? endDate : monthEnd;

      const daysInMonth = Math.ceil((effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;

      if (index === periods.length - 1) {
        // Last period gets remaining to avoid rounding errors
        next[key] = round2(remaining);
      } else {
        const amount = round2(dailyRate * daysInMonth);
        next[key] = amount;
        remaining = round2(remaining - amount);
      }
    });

    next['Total'] = round2(allocated);
  }

  return { row: next, assumptions, openQuestions };
}

// ============================================================================
// Fallback: Build rows directly from BookingTransactions
// ============================================================================

/**
 * Pick a value from a record using case-insensitive key matching.
 * Handles API field names that may differ in casing or spacing.
 */
function pickRecordValue(record: Record<string, unknown>, keys: string[]): unknown {
  const normalizedKeys = keys.map(normalizeKey);

  for (const [recordKey, value] of Object.entries(record)) {
    if (value === undefined || value === null || value === '') continue;
    const normalizedRecordKey = normalizeKey(recordKey);
    if (normalizedKeys.includes(normalizedRecordKey)) {
      return value;
    }
  }
  return undefined;
}

function getChargeId(record: Record<string, unknown>): string | undefined {
  const candidates = [
    'Product Rate Plan Charge ID',
    'Product Rate Plan Charge Id',
    'ProductRatePlanChargeId',
    'Rate Plan Charge ID',
    'Rate Plan Charge Id',
    'RatePlanChargeId',
    'Original Rate Plan Charge Id',
  ];
  const value = pickRecordValue(record, candidates);
  return value ? String(value) : undefined;
}

/**
 * Build waterfall rows directly from BookingTransaction records.
 * Uses case-insensitive matching for Zuora API field names.
 * Field mappings based on docs/booking-template-revenue-field-mappings.csv
 */
function buildRowsFromBookingTransactions(
  source: RevenueSnapshotSource,
  input: RevenueSnapshotInput,
  periodFields: string[],
  fallbackRange?: { start: Date; end: Date } | null
): RevenueSnapshotTableOutput | null {
  const booking = source.booking_transactions;
  if (!booking || booking.length === 0) return null;

  const assumptions: string[] = ['The waterfall was constructed using BookingTransaction records as a fallback data source.'];
  const openQuestions: string[] = [];

  const rows = booking.map((record) => {
    const row: Record<string, unknown> = {};

    // Line Item Num: ItemName (API) -> Line Item Num (Revenue)
    row['Line Item Num'] = pickRecordValue(record, [
      'Item Name', 'ItemName', 'Product Rate Plan Charge Name', 'ProductRatePlanChargeName',
      'Rate Plan Charge Name', 'RatePlanChargeName',
    ]);
    // Customer Name: CompanyName (API) -> Customer Name (Revenue)
    row['Customer Name'] = pickRecordValue(record, [
      'Company Name', 'CompanyName', 'Customer Name', 'CustomerName', 'Account Name', 'AccountName',
    ]);
    // Subscription Name: SubscriptionNumber (API) -> Subscription Name (Revenue)
    row['Subscription Name'] = pickRecordValue(record, [
      'Subscription Number', 'SubscriptionNumber', 'Subscription Name', 'SubscriptionName',
    ]);
    // RPC Num: ChargeNumber (API) -> Rate Plan Charge Num (Revenue)
    row['RPC Num'] = pickRecordValue(record, [
      'Charge Number', 'ChargeNumber', 'Rate Plan Charge Num', 'RatePlanChargeNum', 'RPC Num',
    ]);
    // RPC Version: RatePlanChargeVersion (API)
    row['RPC Version'] = pickRecordValue(record, [
      'Rate Plan Charge Version', 'RatePlanChargeVersion', 'RPC Version', 'RPCVersion',
    ]) ?? 1;
    // Ordered Qty: CurrentQuantity (API) -> Ordered Qty (Revenue)
    row['Ordered Qty'] = pickRecordValue(record, [
      'Current Quantity', 'CurrentQuantity', 'Ordered Qty', 'OrderedQty', 'Quantity',
    ]) ?? 1;
    // Revenue Start Date: CurrentStartDate (API) -> Revenue Start Date (Revenue)
    row['Revenue Start Date'] = pickRecordValue(record, [
      'Current Start Date', 'CurrentStartDate', 'Revenue Start Date', 'RevenueStartDate',
      'Start Date', 'StartDate', 'EffectiveStartDate',
    ]);
    // Revenue End Date: CurrentEndDate (API) -> Revenue End Date (Revenue)
    row['Revenue End Date'] = pickRecordValue(record, [
      'Current End Date', 'CurrentEndDate', 'Revenue End Date', 'RevenueEndDate',
      'End Date', 'EndDate', 'EffectiveEndDate',
    ]);
    // Transaction Currency: CurrencyCode (API)
    row['Transaction Currency'] = pickRecordValue(record, [
      'Currency Code', 'CurrencyCode', 'Transaction Currency', 'TransactionCurrency', 'Currency',
    ]);
    // Allocation Eligible Flag: IsAllocationEligible (API) -> CV Eligible Flag (Revenue)
    row['Allocation Eligible Flag'] = normalizeAllocationFlag(
      pickRecordValue(record, [
        'Is Allocation Eligible', 'IsAllocationEligible', 'Allocation Eligible Flag',
        'CV Eligible Flag', 'CVEligibleFlag',
      ])
    );
    // Event Name: TriggerEvent (API) -> Rate Plan Charge Trigger Event (Revenue)
    row['Event Name'] = pickRecordValue(record, [
      'Trigger Event', 'TriggerEvent', 'Release Event', 'ReleaseEvent',
      'Rate Plan Charge Trigger Event', 'RatePlanChargeTriggerEvent',
    ]) ?? 'Upon Booking';
    // Ext List Price: CurrentELP (API) -> Ext List Price (Revenue)
    row['Ext List Price'] = pickRecordValue(record, [
      'Current ELP', 'CurrentELP', 'Ext List Price', 'ExtListPrice', 'Extended List Price',
    ]);
    // Ext Sell Price: RevenueExtendedSellingPrice (API) -> Ext Sell Price (Revenue)
    row['Ext Sell Price'] = pickRecordValue(record, [
      'Revenue Extended Selling Price', 'RevenueExtendedSellingPrice', 'RevenueExtendedSellPrice',
      'Ext Sell Price', 'ExtSellPrice', 'Extended Selling Price', 'ExtendedSellingPrice',
      'Transaction Price', 'TransactionPrice',
    ]);

    // POB Template from map
    const chargeId = getChargeId(record);
    const pobTemplate = chargeId ? source.pob_criteria_map?.[chargeId] : undefined;
    row['POB Template'] = pobTemplate ?? 'BK-OT-RATABLE';
    if (!pobTemplate) {
      assumptions.push('POB Template defaulted to BK-OT-RATABLE for ' + row['Line Item Num'] + '.');
    }

    // Apply defaults
    const defaultResult = ensureRequiredDefaults(row, input);
    assumptions.push(...defaultResult.assumptions);
    const normalized = coerceNumericFields(defaultResult.row, periodFields);

    // Apply periodization
    const periodResult = applyPeriodization(normalized, periodFields, fallbackRange);
    assumptions.push(...periodResult.assumptions);
    openQuestions.push(...periodResult.openQuestions);

    return periodResult.row;
  });

  return { rows, assumptions, open_questions: openQuestions };
}

// ============================================================================
// Main Step Function
// ============================================================================

export async function buildSnapshotWaterfall(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel,
  iterationContext?: string
): Promise<RevenueSnapshotTableOutput> {
  debugLog('Building Revenue Snapshot Waterfall (combined allocations + periodization)');

  // Load resources
  const [bookingMappingCsv, goldenData] = await Promise.all([
    source.otr_enabled ? loadBookingMappingCsv() : Promise.resolve(undefined),
    loadGoldenUseCasesData(),
  ]);
  const pobTemplates = goldenData.pobTemplates;

  // Build period fields from source data dates
  const periodFields = buildPeriodFields(source);
  const fallbackRange = getFallbackRange(periodFields);
  debugLog('Period fields:', { count: periodFields.length, first: periodFields[0], last: periodFields[periodFields.length - 1] });

  // Load prompt and build message
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_WATERFALL);
  let userMessage = buildUserMessage(input, source, pobTemplates, bookingMappingCsv, periodFields);

  if (previousOutput) {
    userMessage = 'Previous Results:\n' + JSON.stringify(previousOutput, null, 2) + '\n\n' + userMessage;
  }

  // Add iteration context from Ralph self-improvement
  if (iterationContext) {
    userMessage = iterationContext + '\n\n' + userMessage;
  }

  // Build schema with dynamic period fields
  const resolvedModel = model ?? process.env.LLM_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-5.2';
  const useGeminiSchema = resolvedModel.startsWith('gemini');
  const responseSchema = buildWaterfallSchema(
    periodFields,
    useGeminiSchema ? GEMINI_VALUE_SCHEMA : OPENAI_VALUE_SCHEMA
  );

  // Call LLM
  const result = await complete<RevenueSnapshotTableOutput>({
    systemPrompt,
    userMessage,
    tools: ['web_search', 'code_interpreter'],
    mcpTools: getZuoraMcpTools(),
    reasoningEffort,
    model,
    responseSchema,
  });

  // Parse response
  let parsed: unknown;
  try {
    parsed = result.structured ?? (result.text ? JSON.parse(extractJsonPayload(result.text)) : null);
  } catch (error) {
    debugLog('Failed to parse LLM response, falling back to BookingTransactions');
    const fallback = buildRowsFromBookingTransactions(source, input, periodFields, fallbackRange);
    if (fallback) return fallback;
    throw new Error('Failed to parse waterfall JSON: ' + (error instanceof Error ? error.message : 'unknown'));
  }

  if (!parsed) {
    debugLog('Empty LLM response, falling back to BookingTransactions');
    const fallback = buildRowsFromBookingTransactions(source, input, periodFields, fallbackRange);
    if (fallback) return fallback;
    throw new Error('Failed to build waterfall: empty response');
  }

  // Normalize response format (handle "REV REC" key from LLM)
  const normalized = (() => {
    const asObj = parsed as Record<string, unknown>;
    if (Array.isArray(asObj?.['REV REC']) && !asObj?.rows) {
      return {
        rows: asObj['REV REC'] as Record<string, unknown>[],
        assumptions: Array.isArray(asObj.assumptions) ? asObj.assumptions as string[] : [],
        open_questions: Array.isArray(asObj.open_questions) ? asObj.open_questions as string[] : [],
      };
    }
    if (Array.isArray(asObj?.zr_revrec) && !asObj?.rows) {
      return {
        rows: asObj.zr_revrec as Record<string, unknown>[],
        assumptions: Array.isArray(asObj.assumptions) ? asObj.assumptions as string[] : [],
        open_questions: Array.isArray(asObj.open_questions) ? asObj.open_questions as string[] : [],
      };
    }
    return parsed;
  })();

  // Validate
  const validation = RevenueSnapshotTableOutputSchema.safeParse(normalized);
  if (!validation.success) {
    debugLog('Validation failed, falling back to BookingTransactions');
    const fallback = buildRowsFromBookingTransactions(source, input, periodFields, fallbackRange);
    if (fallback) return fallback;
    throw new Error('Invalid waterfall output: ' + validation.error.message);
  }

  // Post-process rows
  const assumptions: string[] = [...validation.data.assumptions];
  const openQuestions: string[] = [...validation.data.open_questions];

  const processedRows = validation.data.rows.map((row) => {
    const defaultResult = ensureRequiredDefaults(row, input);
    assumptions.push(...defaultResult.assumptions);

    const normalizedRow = coerceNumericFields(defaultResult.row, periodFields);
    const periodResult = applyPeriodization(normalizedRow, periodFields, fallbackRange);
    assumptions.push(...periodResult.assumptions);
    openQuestions.push(...periodResult.openQuestions);

    return periodResult.row;
  });

  // Check if we have meaningful data
  const hasMeaningfulRows = processedRows.some(
    (row) => row?.['Line Item Num'] || row?.['Subscription Name'] || row?.['RPC Num']
  );
  const hasPeriods = processedRows.some((row) =>
    periodFields.some((field) => {
      const val = row?.[field];
      return val !== undefined && val !== null && val !== '' && val !== 0;
    })
  );

  if (!hasMeaningfulRows || !processedRows.length || !hasPeriods) {
    debugLog('LLM output lacks meaningful data, falling back to BookingTransactions');
    const fallback = buildRowsFromBookingTransactions(source, input, periodFields, fallbackRange);
    if (fallback) {
      fallback.assumptions.unshift(...assumptions);
      fallback.open_questions.unshift(...openQuestions);
      return fallback;
    }
  }

  debugLog('Waterfall built:', {
    rowCount: processedRows.length,
    periodCount: periodFields.length,
    totalAllocated: processedRows.reduce((sum, row) => sum + (normalizeNumber(row['Ext Allocated Price']) ?? 0), 0),
  });

  return {
    rows: processedRows,
    assumptions: [...new Set(assumptions)], // Deduplicate
    open_questions: [...new Set(openQuestions)],
  };
}
