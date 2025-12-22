/**
 * Output Patching Module
 *
 * Handles incremental updates to pipeline output. When a user makes a small
 * change to the output (e.g., changing a billing timing), this module:
 * 1. Applies the change to the stored result
 * 2. Determines which downstream steps need updating
 * 3. Runs those steps in "incremental" mode (preserving unchanged rows)
 */

import { complete } from '../llm/client';
import { debugLog } from '../config';
import type { ZucaInput } from '../types/input';
import type { LlmModel } from '../types/llm';
import type {
  ZucaOutput,
  BillingsOutput,
  RevRecWaterfallOutput,
} from '../types/output';

// ============================================================================
// Types
// ============================================================================

export interface PatchOperation {
  /** JSON path to the field (e.g., "subscription_spec.rate_plans[0].charges[0].billingTiming") */
  path: string;
  /** New value to set */
  value: unknown;
  /** Previous value (for context in prompts) */
  previousValue?: unknown;
}

export interface PatchResult {
  success: boolean;
  updatedResult: ZucaOutput;
  affectedSteps: string[];
  changes: Array<{
    step: string;
    description: string;
  }>;
}

export interface IncrementalContext {
  input: ZucaInput;
  currentResult: ZucaOutput;
  patch: PatchOperation;
  model?: LlmModel;
}

// ============================================================================
// Output Path Dependencies
// ============================================================================

/**
 * Maps output paths to downstream steps that need updating.
 * More specific paths take precedence over general ones.
 */
const OUTPUT_DEPENDENCIES: Array<{
  pattern: RegExp;
  affectedSteps: Array<keyof ZucaOutput>;
  description: string;
}> = [
  // Subscription spec changes
  {
    pattern: /^subscription_spec\.subscription\./,
    affectedSteps: ['contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Subscription-level change',
  },
  {
    pattern: /^subscription_spec\.rate_plans\[\d+\]\.charges\[\d+\]\.(billingPeriod|billingTiming|billingDay)/,
    affectedSteps: ['billings', 'summary'],
    description: 'Billing configuration change',
  },
  {
    pattern: /^subscription_spec\.rate_plans\[\d+\]\.charges\[\d+\]\.(price|listPrice|sellPrice|quantity)/,
    affectedSteps: ['contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Pricing/quantity change',
  },
  {
    pattern: /^subscription_spec\.rate_plans\[\d+\]\.charges\[\d+]\.(triggerEvent|effectiveStartDate|effectiveEndDate)/,
    affectedSteps: ['contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Timing/trigger change',
  },
  {
    pattern: /^subscription_spec\.rate_plans\[\d+\]\.charges\[\d+]/,
    affectedSteps: ['pob_mapping', 'contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Charge-level change',
  },
  {
    pattern: /^subscription_spec\.rate_plans\[\d+]/,
    affectedSteps: ['pob_mapping', 'contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Rate plan change',
  },
  {
    pattern: /^subscription_spec/,
    affectedSteps: ['pob_mapping', 'contracts_orders', 'billings', 'revrec_waterfall', 'summary'],
    description: 'Subscription spec change',
  },

  // POB mapping changes
  {
    pattern: /^pob_mapping\.charge_pob_map\[\d+\]\.(pob_identifier|pob_name|ratable_method|release_event)/,
    affectedSteps: ['contracts_orders', 'revrec_waterfall', 'summary'],
    description: 'POB template change',
  },
  {
    pattern: /^pob_mapping\.charge_pob_map\[\d+]\.recognition_window/,
    affectedSteps: ['revrec_waterfall', 'summary'],
    description: 'Recognition window change',
  },
  {
    pattern: /^pob_mapping/,
    affectedSteps: ['contracts_orders', 'revrec_waterfall', 'summary'],
    description: 'POB mapping change',
  },

  // Contracts/Orders changes
  {
    pattern: /^contracts_orders\.zr_contracts_orders\[\d+\]/,
    affectedSteps: ['revrec_waterfall', 'summary'],
    description: 'Contract line change',
  },

  // Billings changes (usually terminal, but summary needs update)
  {
    pattern: /^billings/,
    affectedSteps: ['summary'],
    description: 'Billing change',
  },

  // RevRec changes (terminal)
  {
    pattern: /^revrec_waterfall/,
    affectedSteps: ['summary'],
    description: 'Revenue waterfall change',
  },
];

/**
 * Determine which downstream steps need updating based on the patch path
 */
export function getAffectedSteps(path: string): Array<keyof ZucaOutput> {
  for (const dep of OUTPUT_DEPENDENCIES) {
    if (dep.pattern.test(path)) {
      debugLog(`Path "${path}" matches pattern, affecting: ${dep.affectedSteps.join(', ')}`);
      return dep.affectedSteps;
    }
  }

  // Default: if unknown path, update summary only
  debugLog(`Path "${path}" has no known dependencies, defaulting to summary`);
  return ['summary'];
}

// ============================================================================
// Path Utilities
// ============================================================================

/**
 * Get a value from an object using a JSON path
 */
export function getValueAtPath(obj: unknown, path: string): unknown {
  const parts = parsePath(path);
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined) return undefined;

    if (typeof part === 'number') {
      current = (current as unknown[])[part];
    } else {
      current = (current as Record<string, unknown>)[part];
    }
  }

  return current;
}

/**
 * Set a value in an object using a JSON path (immutable - returns new object)
 */
export function setValueAtPath<T>(obj: T, path: string, value: unknown): T {
  const parts = parsePath(path);
  return setValueAtPathRecursive(obj, parts, value) as T;
}

function setValueAtPathRecursive(obj: unknown, parts: Array<string | number>, value: unknown): unknown {
  if (parts.length === 0) return value;

  const [head, ...tail] = parts;

  if (typeof head === 'number') {
    const arr = Array.isArray(obj) ? [...obj] : [];
    arr[head] = setValueAtPathRecursive(arr[head], tail, value);
    return arr;
  } else {
    const record = (obj && typeof obj === 'object' ? { ...obj } : {}) as Record<string, unknown>;
    record[head] = setValueAtPathRecursive(record[head], tail, value);
    return record;
  }
}

function parsePath(path: string): Array<string | number> {
  const parts: Array<string | number> = [];
  const regex = /([^.\[\]]+)|\[(\d+)\]/g;
  let match;

  while ((match = regex.exec(path)) !== null) {
    if (match[1] !== undefined) {
      parts.push(match[1]);
    } else if (match[2] !== undefined) {
      parts.push(parseInt(match[2], 10));
    }
  }

  return parts;
}

/**
 * Parse a path to extract which charge/row is being modified
 */
export function parsePathContext(path: string): {
  section: string;
  ratePlanIndex?: number;
  chargeIndex?: number;
  chargeName?: string;
  field?: string;
} {
  const result: ReturnType<typeof parsePathContext> = { section: '' };

  // Extract section
  const sectionMatch = path.match(/^(\w+)/);
  if (sectionMatch) {
    result.section = sectionMatch[1];
  }

  // Extract rate plan index
  const rpMatch = path.match(/rate_plans\[(\d+)\]/);
  if (rpMatch) {
    result.ratePlanIndex = parseInt(rpMatch[1], 10);
  }

  // Extract charge index
  const chargeMatch = path.match(/charges\[(\d+)\]/);
  if (chargeMatch) {
    result.chargeIndex = parseInt(chargeMatch[1], 10);
  }

  // Extract field name (last part of path)
  const fieldMatch = path.match(/\.(\w+)$/);
  if (fieldMatch) {
    result.field = fieldMatch[1];
  }

  return result;
}

// ============================================================================
// Incremental Update Prompts
// ============================================================================

const INCREMENTAL_BILLINGS_SCHEMA = {
  type: 'object',
  properties: {
    zb_billings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'Invoice Date': { type: 'string' },
          'Billing Date': { type: 'string' },
          'Charge Name': { type: 'string' },
          'Rate Plan': { type: 'string' },
          'Product': { type: 'string' },
          'Billing Period Start': { type: 'string' },
          'Billing Period End': { type: 'string' },
          'Quantity': { type: 'number' },
          'Unit Price': { type: 'number' },
          'Amount': { type: 'number' },
          'Currency': { type: 'string' },
        },
        required: ['Invoice Date', 'Charge Name', 'Amount'],
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zb_billings'],
  additionalProperties: false,
};

const INCREMENTAL_REVREC_SCHEMA = {
  type: 'object',
  properties: {
    zr_revrec: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          'Line Item Num': { type: 'number' },
          'POB Name': { type: 'string' },
          'Event Name': { type: 'string' },
          'Revenue Start Date': { type: 'string' },
          'Revenue End Date': { type: 'string' },
          'Ext Allocated Price': { type: 'number' },
          'Period': { type: 'string' },
          'Amount': { type: 'number' },
        },
        required: ['Line Item Num', 'POB Name', 'Period', 'Amount'],
        additionalProperties: false,
      },
    },
    assumptions: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
  },
  required: ['zr_revrec'],
  additionalProperties: false,
};

/**
 * Run incremental update for billings
 */
export async function incrementalBillingsUpdate(
  context: IncrementalContext
): Promise<BillingsOutput> {
  const { input, currentResult, patch } = context;
  const pathContext = parsePathContext(patch.path);

  // Find the charge name for context
  let chargeName = 'Unknown';
  if (pathContext.ratePlanIndex !== undefined && pathContext.chargeIndex !== undefined) {
    const charge = currentResult.subscription_spec?.rate_plans[pathContext.ratePlanIndex]?.charges[pathContext.chargeIndex];
    chargeName = charge?.name || 'Unknown';
  }

  const systemPrompt = `You are updating a Zuora billing schedule based on a specific change.

## Change Made
- **Path**: ${patch.path}
- **Charge**: ${chargeName}
- **Field**: ${pathContext.field || 'Unknown'}
- **Previous Value**: ${JSON.stringify(patch.previousValue)}
- **New Value**: ${JSON.stringify(patch.value)}

## Instructions
1. Review the current billing schedule below
2. Update ONLY the rows affected by this change
3. Keep all unaffected rows exactly as they are
4. Recalculate amounts if pricing changed
5. Adjust billing dates if billing period/timing changed

Do NOT regenerate the entire schedule - only modify what's necessary.`;

  const userMessage = `## Contract Details
- Start: ${input.contract_start_date}
- Term: ${input.terms_months} months
- Currency: ${input.transaction_currency}

## Updated Subscription Spec
${JSON.stringify(currentResult.subscription_spec, null, 2)}

## Current Billing Schedule
${JSON.stringify(currentResult.billings, null, 2)}

Please update the billing schedule to reflect the change.`;

  const result = await complete<BillingsOutput>({
    systemPrompt,
    userMessage,
    responseSchema: INCREMENTAL_BILLINGS_SCHEMA,
    temperature: 0.3, // Lower temperature for more consistent updates
    model: context.model,
  });

  return result.structured || currentResult.billings;
}

/**
 * Run incremental update for revenue waterfall
 */
export async function incrementalRevRecUpdate(
  context: IncrementalContext
): Promise<RevRecWaterfallOutput> {
  const { currentResult, patch } = context;
  const pathContext = parsePathContext(patch.path);

  const systemPrompt = `You are updating a Zuora Revenue recognition waterfall based on a specific change.

## Change Made
- **Path**: ${patch.path}
- **Field**: ${pathContext.field || 'Unknown'}
- **Previous Value**: ${JSON.stringify(patch.previousValue)}
- **New Value**: ${JSON.stringify(patch.value)}

## Instructions
1. Review the current revenue waterfall below
2. Update ONLY the rows affected by this change
3. Keep all unaffected POBs and periods exactly as they are
4. Recalculate revenue amounts if allocation changed
5. Adjust recognition periods if timing changed

Do NOT regenerate the entire waterfall - only modify what's necessary.`;

  const userMessage = `## Current POB Mapping
${JSON.stringify(currentResult.pob_mapping, null, 2)}

## Current Contracts/Orders
${JSON.stringify(currentResult.contracts_orders, null, 2)}

## Current Revenue Waterfall
${JSON.stringify(currentResult.revrec_waterfall, null, 2)}

Please update the revenue waterfall to reflect the change.`;

  const result = await complete<RevRecWaterfallOutput>({
    systemPrompt,
    userMessage,
    responseSchema: INCREMENTAL_REVREC_SCHEMA,
    temperature: 0.3,
    model: context.model,
  });

  return result.structured || currentResult.revrec_waterfall;
}

/**
 * Update summary based on changes
 */
export async function incrementalSummaryUpdate(
  context: IncrementalContext,
  changedSteps: string[]
): Promise<{ assumptions: string[]; open_questions: string[] }> {
  const { currentResult, patch } = context;

  const systemPrompt = `You are updating the summary assumptions and open questions after a change was made.

## Change Made
- **Path**: ${patch.path}
- **Previous Value**: ${JSON.stringify(patch.previousValue)}
- **New Value**: ${JSON.stringify(patch.value)}
- **Affected Steps**: ${changedSteps.join(', ')}

## Instructions
1. Review current assumptions and open questions
2. Remove any that are no longer relevant after this change
3. Add any new assumptions or questions raised by this change
4. Keep assumptions/questions unrelated to this change`;

  const userMessage = `## Current Summary
${JSON.stringify(currentResult.summary, null, 2)}

Please update the assumptions and open questions.`;

  const result = await complete<{ assumptions: string[]; open_questions: string[] }>({
    systemPrompt,
    userMessage,
    responseSchema: {
      type: 'object',
      properties: {
        assumptions: { type: 'array', items: { type: 'string' } },
        open_questions: { type: 'array', items: { type: 'string' } },
      },
      required: ['assumptions', 'open_questions'],
      additionalProperties: false,
    },
    temperature: 0.5,
    model: context.model,
  });

  return result.structured || currentResult.summary;
}

// ============================================================================
// Main Patch Function
// ============================================================================

/**
 * Apply a patch to the output and run incremental updates on affected steps
 */
export async function applyPatch(
  input: ZucaInput,
  currentResult: ZucaOutput,
  patch: PatchOperation,
  model?: LlmModel
): Promise<PatchResult> {
  debugLog('Applying patch', { path: patch.path, value: patch.value });

  // 1. Get the previous value for context
  const previousValue = getValueAtPath(currentResult, patch.path);
  patch.previousValue = previousValue;

  // 2. Apply the direct change
  let updatedResult = setValueAtPath(currentResult, patch.path, patch.value);

  // 3. Determine affected downstream steps
  const affectedSteps = getAffectedSteps(patch.path);
  const changes: PatchResult['changes'] = [];

  const context: IncrementalContext = {
    input,
    currentResult: updatedResult,
    patch,
    model,
  };

  // 4. Run incremental updates for each affected step
  for (const step of affectedSteps) {
    try {
      switch (step) {
        case 'billings':
          debugLog('Running incremental billings update');
          const newBillings = await incrementalBillingsUpdate(context);
          updatedResult = { ...updatedResult, billings: newBillings };
          changes.push({ step: 'billings', description: 'Updated billing schedule' });
          break;

        case 'revrec_waterfall':
          debugLog('Running incremental revrec update');
          const newRevRec = await incrementalRevRecUpdate(context);
          updatedResult = { ...updatedResult, revrec_waterfall: newRevRec };
          changes.push({ step: 'revrec_waterfall', description: 'Updated revenue waterfall' });
          break;

        case 'summary':
          debugLog('Running incremental summary update');
          const newSummary = await incrementalSummaryUpdate(context, affectedSteps.filter((s) => s !== 'summary'));
          updatedResult = { ...updatedResult, summary: newSummary };
          changes.push({ step: 'summary', description: 'Updated assumptions and questions' });
          break;

        case 'contracts_orders':
          // For contracts_orders, we'd need a more complex incremental update
          // For now, mark it as needing attention
          changes.push({ step: 'contracts_orders', description: 'May need manual review' });
          break;

        case 'pob_mapping':
          // POB mapping changes are complex - flag for review
          changes.push({ step: 'pob_mapping', description: 'May need manual review' });
          break;

        default:
          debugLog(`No incremental handler for step: ${step}`);
      }
    } catch (error) {
      debugLog(`Error updating step ${step}:`, error);
      changes.push({ step, description: `Update failed: ${error instanceof Error ? error.message : 'Unknown error'}` });
    }
  }

  return {
    success: true,
    updatedResult,
    affectedSteps,
    changes,
  };
}
