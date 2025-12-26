import { complete, getZuoraMcpTools, ReasoningEffort } from '../../../llm/client';
import type { LlmModel } from '../../../types/llm';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import {
  RevenueSnapshotInput,
  RevenueSnapshotSource,
  RevenueSnapshotTableOutput,
  RevenueSnapshotTableOutputSchema,
} from '../../../types/revenue-snapshot';
import { loadBookingMappingCsv } from '../mappings';
import { extractJsonPayload } from './json';

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

function getFirstValue(row: Record<string, any>, keys: string[]): any {
  for (const key of keys) {
    if (row[key] !== undefined && row[key] !== null && row[key] !== '') {
      return row[key];
    }
  }
  return undefined;
}

function coerceBool(value: unknown): boolean | null {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['true', 'yes', 'y', '1'].includes(normalized)) return true;
    if (['false', 'no', 'n', '0'].includes(normalized)) return false;
  }
  return null;
}

function applyDeterministicAllocations(
  rows: Array<Record<string, any>>,
  input: RevenueSnapshotInput
): { rows: Array<Record<string, any>>; assumptions: string[] } {
  const assumptions: string[] = [];
  const allocationMethod = input.ssp_method || 'None';
  const isCustomFormula = allocationMethod === 'Custom Formula';
  const requiredFields = [
    'Unit List Price',
    'Unit Sell Price',
    'Ext List Price',
    'Ext Sell Price',
    'SSP Price',
    'Ext SSP Price',
    'SSP Percent',
    'Ext Allocated Price',
    'Allocation Eligible Flag',
    'Unreleased Revenue',
    'Released Revenue',
    'POB Template',
    'ATR1',
  ];
  if (isCustomFormula && input.ssp_custom_formula) {
    assumptions.push(`SSP custom formula applied deterministically using Sell Price fallback: ${input.ssp_custom_formula}`);
  }

  const normalizedRows = rows.map((row) => {
    const orderedQty = normalizeNumber(getFirstValue(row, ['Ordered Qty', 'Quantity', 'OrderedQty'])) ?? 1;
    const unitList = normalizeNumber(getFirstValue(row, ['Unit List Price', 'List Price', 'UnitListPrice']));
    const unitSell = normalizeNumber(getFirstValue(row, ['Unit Sell Price', 'Unit Sell', 'UnitSellPrice', 'Unit Sale Price']));
    let extList = normalizeNumber(getFirstValue(row, ['Ext List Price', 'Ext List', 'ExtListPrice']));
    let extSell = normalizeNumber(
      getFirstValue(row, [
        'Ext Sell Price',
        'Ext Sell',
        'ExtSellPrice',
        'Revenue Extended Selling Price',
        'Transaction Price',
        'Transaction Price (T)',
        'Transaction Amount',
      ])
    );
    if (extList === null && unitList !== null) {
      extList = unitList * orderedQty;
    }
    if (extSell === null && unitSell !== null) {
      extSell = unitSell * orderedQty;
    }
    if (extSell === null && extList !== null) {
      extSell = extList;
      assumptions.push('Ext Sell Price missing; defaulted to Ext List Price.');
    }

    const allocationEligible =
      coerceBool(getFirstValue(row, ['Allocation Eligible Flag', 'CV Eligible Flag', 'Is Allocation Eligible', 'IsAllocationEligible', 'isAllocationEligible'])) ??
      false;

    const pobTemplate = getFirstValue(row, ['POB Template', 'ATR1']);
    if (!row['POB Template'] && pobTemplate) {
      row['POB Template'] = pobTemplate;
    }
    if (!row['ATR1'] && pobTemplate) {
      row['ATR1'] = pobTemplate;
    }

    row['Ordered Qty'] = orderedQty;
    if (unitList !== null) row['Unit List Price'] = unitList;
    if (unitSell !== null) row['Unit Sell Price'] = unitSell;
    if (extList !== null) row['Ext List Price'] = round2(extList);
    if (extSell !== null) row['Ext Sell Price'] = round2(extSell);
    row['Allocation Eligible Flag'] = allocationEligible;

    const skipAllocation = allocationMethod === 'None' || !allocationEligible;
    if (skipAllocation) {
      if (row['SSP Price'] === undefined && unitSell !== null) row['SSP Price'] = unitSell;
      if (row['Ext SSP Price'] === undefined && extSell !== null) row['Ext SSP Price'] = round2(extSell);
      row['SSP Percent'] = 0;
      if (row['Ext Allocated Price'] === undefined && extSell !== null) {
        row['Ext Allocated Price'] = round2(extSell);
      }
      if (row['Unreleased Revenue'] === undefined && row['Ext Allocated Price'] !== undefined) {
        row['Unreleased Revenue'] = row['Ext Allocated Price'];
      }
      if (row['Released Revenue'] === undefined) {
        row['Released Revenue'] = 0;
      }
    } else {
      if (allocationMethod === 'List Price') {
        if (unitList !== null) row['SSP Price'] = unitList;
        if (extList !== null) row['Ext SSP Price'] = round2(extList);
      } else {
        // Sell Price or Custom Formula fallback
        if (unitSell !== null) row['SSP Price'] = unitSell;
        if (extSell !== null) row['Ext SSP Price'] = round2(extSell);
      }
    }

    if (row['Ext Allocated Price'] === undefined || row['Ext Allocated Price'] === null) {
      if (extSell !== null) {
        row['Ext Allocated Price'] = round2(extSell);
      } else if (extList !== null) {
        row['Ext Allocated Price'] = round2(extList);
        assumptions.push('Ext Allocated Price defaulted to Ext List Price due to missing sell price.');
      } else {
        row['Ext Allocated Price'] = 0;
        assumptions.push('Ext Allocated Price defaulted to 0 due to missing pricing data.');
      }
    }

    if (row['Unreleased Revenue'] === undefined && row['Ext Allocated Price'] !== undefined) {
      row['Unreleased Revenue'] = row['Ext Allocated Price'];
    }
    if (row['Released Revenue'] === undefined) {
      row['Released Revenue'] = 0;
    }

    for (const field of requiredFields) {
      if (!(field in row)) {
        row[field] = null;
      }
    }
    return row;
  });

  const eligibleRows = normalizedRows.filter((row) => row['Allocation Eligible Flag']);
  const totalExtSsp = eligibleRows.reduce((sum, row) => sum + (normalizeNumber(row['Ext SSP Price']) ?? 0), 0);
  const totalTransactionPrice = eligibleRows.reduce(
    (sum, row) => sum + (normalizeNumber(row['Ext Sell Price']) ?? normalizeNumber(row['Ext SSP Price']) ?? 0),
    0
  );

  if (allocationMethod !== 'None' && totalExtSsp > 0) {
    eligibleRows.forEach((row) => {
      const extSsp = normalizeNumber(row['Ext SSP Price']) ?? 0;
      const percent = extSsp / totalExtSsp;
      row['SSP Percent'] = round2(percent * 100);
      row['Ext Allocated Price'] = round2(totalTransactionPrice * percent);
      row['Unreleased Revenue'] = row['Ext Allocated Price'];
      if (row['Released Revenue'] === undefined) {
        row['Released Revenue'] = 0;
      }
    });
  } else if (allocationMethod !== 'None' && totalExtSsp === 0 && eligibleRows.length) {
    assumptions.push('Allocation requested but SSP totals were zero; defaulted allocations to Ext Sell Price.');
    eligibleRows.forEach((row) => {
      const extSell = normalizeNumber(row['Ext Sell Price']) ?? normalizeNumber(row['Ext SSP Price']) ?? 0;
      row['SSP Percent'] = 0;
      row['Ext Allocated Price'] = round2(extSell);
      row['Unreleased Revenue'] = row['Ext Allocated Price'];
      if (row['Released Revenue'] === undefined) {
        row['Released Revenue'] = 0;
      }
    });
  }

  return { rows: normalizedRows, assumptions };
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
  bookingMappingCsv?: string
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

  if (source.otr_enabled && bookingMappingCsv) {
    parts.push('BookingTransaction → Revenue Field Mapping (CSV):', bookingMappingCsv, '');
  }

  parts.push('Source Data (JSON):', JSON.stringify(source, null, 2));

  return parts.join('\n');
}

export async function buildSnapshotContractsOrders(
  input: RevenueSnapshotInput,
  source: RevenueSnapshotSource,
  previousOutput?: RevenueSnapshotTableOutput,
  reasoningEffort: ReasoningEffort = 'high',
  model?: LlmModel
): Promise<RevenueSnapshotTableOutput> {
  const bookingMappingCsv = source.otr_enabled ? await loadBookingMappingCsv() : undefined;
  const systemPrompt = await loadPrompt(PROMPTS.SNAPSHOT_CONTRACTS_ORDERS);
  let userMessage = buildUserMessage(input, source, bookingMappingCsv);

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
      `Failed to parse snapshot Contracts/Orders JSON: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }

  if (!parsed) {
    throw new Error('Failed to build snapshot Contracts/Orders table: empty response');
  }

  const validation = RevenueSnapshotTableOutputSchema.safeParse(parsed);
  if (!validation.success) {
    throw new Error(`Invalid snapshot Contracts/Orders output: ${validation.error.message}`);
  }

  const allocationResult = applyDeterministicAllocations(validation.data.rows, input);
  return {
    ...validation.data,
    rows: allocationResult.rows,
    assumptions: [...validation.data.assumptions, ...allocationResult.assumptions],
  };
}
