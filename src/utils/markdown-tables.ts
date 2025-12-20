/**
 * Utility functions for generating Markdown tables from structured data
 */

/**
 * Escape special characters for Markdown table cells
 */
function escapeMarkdown(value: unknown): string {
  const str = value == null ? '' : String(value);
  return str.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

/**
 * Round a number to 2 decimal places
 */
function round2(value: unknown): string {
  const num = Number(value);
  return Number.isFinite(num) ? (Math.round((num + Number.EPSILON) * 100) / 100).toString() : '';
}

/**
 * Format a cell value based on its type
 */
function formatCell(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'number') return round2(value);
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'object') return JSON.stringify(value);
  return escapeMarkdown(value);
}

/**
 * Column definition for table generation
 */
export interface ColumnDef {
  key: string;
  header?: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: unknown, row: Record<string, unknown>) => string;
}

/**
 * Options for table generation
 */
export interface TableOptions {
  maxRows?: number;
  showRowNumbers?: boolean;
  title?: string;
}

/**
 * Generate a Markdown table from an array of objects
 */
export function generateTable(
  rows: Record<string, unknown>[],
  columns: (string | ColumnDef)[],
  options: TableOptions = {}
): string {
  const { maxRows = 200, showRowNumbers = false, title } = options;

  if (!rows || rows.length === 0) {
    return '_(no rows)_';
  }

  // Normalize column definitions
  const colDefs: ColumnDef[] = columns.map((col) =>
    typeof col === 'string' ? { key: col, header: col } : { ...col, header: col.header || col.key }
  );

  // Add row number column if requested
  if (showRowNumbers) {
    colDefs.unshift({ key: '#', header: '#' });
  }

  // Build header row
  const headers = colDefs.map((col) => escapeMarkdown(col.header));
  const headerLine = `| ${headers.join(' | ')} |`;

  // Build separator row
  const separators = colDefs.map((col) => {
    switch (col.align) {
      case 'center':
        return ':---:';
      case 'right':
        return '---:';
      default:
        return '---';
    }
  });
  const separatorLine = `| ${separators.join(' | ')} |`;

  // Build data rows
  const dataRows: string[] = [];
  const limit = Math.min(rows.length, maxRows);

  for (let i = 0; i < limit; i++) {
    const row = rows[i];
    const cells = colDefs.map((col, colIndex) => {
      if (showRowNumbers && colIndex === 0) {
        return String(i + 1);
      }
      const value = row[col.key];
      if (col.format) {
        return escapeMarkdown(col.format(value, row));
      }
      return formatCell(value);
    });
    dataRows.push(`| ${cells.join(' | ')} |`);
  }

  // Build final table
  const parts: string[] = [];
  if (title) {
    parts.push(`## ${title}\n`);
  }
  parts.push(headerLine);
  parts.push(separatorLine);
  parts.push(...dataRows);

  if (rows.length > limit) {
    parts.push(`\n_...${rows.length - limit} more rows_`);
  }

  return parts.join('\n');
}

/**
 * Generate a key-value table (2 columns)
 */
export function generateKeyValueTable(
  data: Record<string, unknown>,
  title?: string
): string {
  const rows = Object.entries(data)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => ({ Key: key, Value: formatCell(value) }));

  if (rows.length === 0) {
    return title ? `## ${title}\n_(no data)_` : '_(no data)_';
  }

  const lines: string[] = [];
  if (title) {
    lines.push(`## ${title}\n`);
  }
  lines.push('|  |  |');
  lines.push('| --- | --- |');
  for (const row of rows) {
    lines.push(`| ${escapeMarkdown(row.Key)} | ${escapeMarkdown(row.Value)} |`);
  }

  return lines.join('\n');
}

/**
 * Format subscription data as Markdown
 */
export function formatSubscription(subscription: Record<string, unknown>): string {
  const fields = [
    { key: 'name', label: 'Name' },
    { key: 'termType', label: 'Term Type' },
    { key: 'status', label: 'Status' },
    { key: 'currency', label: 'Currency' },
    { key: 'contractEffectiveDate', label: 'Contract Effective Date' },
    { key: 'serviceActivationDate', label: 'Service Activation Date' },
    { key: 'customerAcceptanceDate', label: 'Customer Acceptance Date' },
    { key: 'subscriptionStartDate', label: 'Subscription Start Date' },
    { key: 'subscriptionEndDate', label: 'Subscription End Date' },
    { key: 'initialTerm', label: 'Initial Term' },
    { key: 'initialTermPeriodType', label: 'Initial Term Period' },
    { key: 'renewalTerm', label: 'Renewal Term' },
    { key: 'renewalTermPeriodType', label: 'Renewal Term Period' },
    { key: 'autoRenew', label: 'Auto Renew' },
  ];

  const data: Record<string, unknown> = {};
  for (const field of fields) {
    const value = subscription[field.key];
    if (value != null && value !== '') {
      data[field.label] = value;
    }
  }

  return generateKeyValueTable(data, 'Subscription');
}

/**
 * Format rate plan charges as Markdown table
 */
export function formatRatePlanCharges(
  ratePlans: Array<{ productName: string; ratePlanName: string; charges: unknown[] }>
): string {
  const rows: Record<string, unknown>[] = [];

  for (const rp of ratePlans) {
    for (const charge of rp.charges as Record<string, unknown>[]) {
      rows.push({
        Product: rp.productName,
        'Rate Plan': rp.ratePlanName,
        Charge: charge.name,
        Type: charge.type,
        Model: charge.model,
        UOM: charge.uom || '',
        'Billing Period': charge.billingPeriod || '',
        'Billing Timing': charge.billingTiming || '',
        'Trigger Event': charge.triggerEvent || '',
        Quantity: charge.quantity || '',
        'List Price': charge.listPrice || charge.price || '',
        'Sell Price': charge.sellPrice || charge.price || '',
        'Start Date': charge.effectiveStartDate || '',
        'End Date': charge.effectiveEndDate || '',
      });
    }
  }

  const columns: ColumnDef[] = [
    { key: 'Product', header: 'Product' },
    { key: 'Rate Plan', header: 'Rate Plan' },
    { key: 'Charge', header: 'Charge' },
    { key: 'Type', header: 'Type' },
    { key: 'Model', header: 'Model' },
    { key: 'UOM', header: 'UOM' },
    { key: 'Billing Period', header: 'Period' },
    { key: 'Billing Timing', header: 'Timing' },
    { key: 'Trigger Event', header: 'Trigger' },
    { key: 'Quantity', header: 'Qty', align: 'right' },
    { key: 'List Price', header: 'List', align: 'right' },
    { key: 'Sell Price', header: 'Sell', align: 'right' },
    { key: 'Start Date', header: 'Start' },
    { key: 'End Date', header: 'End' },
  ];

  return generateTable(rows, columns, { title: 'Rate Plan Charges' });
}

/**
 * Format billings table as Markdown
 */
export function formatBillingsTable(
  billings: Array<Record<string, unknown>>
): string {
  const columns: ColumnDef[] = [
    { key: 'Billing Date', header: 'Date' },
    { key: 'Charge Name', header: 'Charge' },
    { key: 'Rate Plan', header: 'Rate Plan' },
    { key: 'Product', header: 'Product' },
    { key: 'Billing Period Start', header: 'Period Start' },
    { key: 'Billing Period End', header: 'Period End' },
    { key: 'Quantity', header: 'Qty', align: 'right' },
    { key: 'Unit Price', header: 'Unit Price', align: 'right' },
    { key: 'Amount', header: 'Amount', align: 'right' },
    { key: 'Currency', header: 'Curr' },
  ];

  return generateTable(billings, columns, { title: 'Billings Schedule' });
}

/**
 * Format revenue waterfall as Markdown (pivoted by month)
 */
export function formatRevRecWaterfall(
  revRecRows: Array<Record<string, unknown>>
): string {
  if (!revRecRows || revRecRows.length === 0) {
    return '## Revenue Recognition Waterfall\n_(no rows)_';
  }

  // Collect all month columns
  const monthPattern = /^[A-Za-z]{3}-\d{2}$/;
  const monthCols = new Set<string>();

  for (const row of revRecRows) {
    for (const key of Object.keys(row)) {
      if (monthPattern.test(key)) {
        monthCols.add(key);
      }
    }
  }

  // Sort months chronologically
  const sortedMonths = Array.from(monthCols).sort((a, b) => {
    const monthOrder: Record<string, number> = {
      JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
      JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
    };
    const [mA, yA] = a.toUpperCase().split('-');
    const [mB, yB] = b.toUpperCase().split('-');
    const yearA = 2000 + parseInt(yA);
    const yearB = 2000 + parseInt(yB);
    return yearA * 12 + monthOrder[mA] - (yearB * 12 + monthOrder[mB]);
  });

  // Build columns
  const columns: ColumnDef[] = [
    { key: 'Line Item Num', header: 'POB' },
    { key: 'POB Name', header: 'Name' },
    { key: 'Revenue Start Date', header: 'Start' },
    { key: 'Revenue End Date', header: 'End' },
    { key: 'Event Name', header: 'Event' },
    { key: 'Ext Allocated Price', header: 'Allocated', align: 'right' },
    ...sortedMonths.map((m) => ({ key: m, header: m, align: 'right' as const })),
    { key: 'Total', header: 'Total', align: 'right' },
  ];

  // Calculate totals if not present
  const rowsWithTotals = revRecRows.map((row) => {
    const newRow = { ...row };
    if (newRow['Total'] == null) {
      let total = 0;
      for (const month of sortedMonths) {
        const val = Number(row[month]);
        if (Number.isFinite(val)) total += val;
      }
      newRow['Total'] = total;
    }
    return newRow;
  });

  return generateTable(rowsWithTotals, columns, { title: 'Revenue Recognition Waterfall' });
}

/**
 * Format complete ZUCA output as Markdown
 */
export function formatFullOutput(output: {
  subscription?: Record<string, unknown>;
  ratePlans?: Array<{ productName: string; ratePlanName: string; charges: unknown[] }>;
  billings?: Array<Record<string, unknown>>;
  revRecWaterfall?: Array<Record<string, unknown>>;
  assumptions?: string[];
  openQuestions?: string[];
}): string {
  const parts: string[] = [];

  if (output.subscription) {
    parts.push(formatSubscription(output.subscription));
    parts.push('');
  }

  if (output.ratePlans && output.ratePlans.length > 0) {
    parts.push(formatRatePlanCharges(output.ratePlans));
    parts.push('');
  }

  if (output.billings && output.billings.length > 0) {
    parts.push(formatBillingsTable(output.billings));
    parts.push('');
  }

  if (output.revRecWaterfall && output.revRecWaterfall.length > 0) {
    parts.push(formatRevRecWaterfall(output.revRecWaterfall));
    parts.push('');
  }

  if (output.assumptions && output.assumptions.length > 0) {
    parts.push('## Assumptions');
    for (const assumption of output.assumptions) {
      parts.push(`- ${assumption}`);
    }
    parts.push('');
  }

  if (output.openQuestions && output.openQuestions.length > 0) {
    parts.push('## Open Questions');
    for (const question of output.openQuestions) {
      parts.push(`- ${question}`);
    }
    parts.push('');
  }

  return parts.join('\n');
}
