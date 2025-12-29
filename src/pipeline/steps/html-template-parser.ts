/**
 * HTML Template Merge Field Parser
 *
 * Parses Zuora HTML template code to extract merge fields, loops, and sections.
 * This enables code-based analysis of templates for sample data generation.
 */

import type { ExtractedField, ExtractedFieldType } from '../../types/html-template';

/**
 * Known Zuora object fields and their types
 */
const KNOWN_FIELD_TYPES: Record<string, ExtractedFieldType> = {
  // Invoice root
  InvoiceNumber: 'string',
  InvoiceDate: 'date',
  DueDate: 'date',
  PostedOn: 'date',
  Amount: 'currency',
  Balance: 'currency',
  AmountWithoutTax: 'currency',
  TaxAmount: 'currency',
  Status: 'string',
  Comments: 'string',
  Currency: 'string',

  // Account
  Name: 'string',
  AccountNumber: 'string',
  AutoPay: 'boolean',

  // Contact (BillTo/SoldTo)
  FirstName: 'string',
  LastName: 'string',
  WorkEmail: 'string',
  WorkPhone: 'string',
  Address1: 'string',
  Address2: 'string',
  City: 'string',
  State: 'string',
  PostalCode: 'string',
  Country: 'string',

  // InvoiceItem
  ChargeName: 'string',
  ChargeAmount: 'currency',
  Quantity: 'number',
  UnitPrice: 'currency',
  UOM: 'string',
  ServiceStartDate: 'date',
  ServiceEndDate: 'date',
  Description: 'string',
  ProcessingType: 'string',

  // RatePlanCharge
  ChargeModel: 'string',
  ChargeType: 'string',
  ChargeNumber: 'string',

  // Subscription
  SubscriptionNumber: 'string',

  // Taxation
  TaxRate: 'number',
  Jurisdiction: 'string',

  // Payment
  PaymentNumber: 'string',
  PaymentDate: 'date',
  PaymentAmount: 'currency',
  PaymentMethod: 'string',
};

/**
 * Known list objects in Zuora templates
 */
const KNOWN_LISTS = new Set([
  'InvoiceItems',
  'TaxationItems',
  'InvoicePayments',
  'PaymentParts',
  'CreditMemoItems',
  'DebitMemoItems',
  '_Group', // GroupBy result
]);

/**
 * Known functions that can be applied to fields
 * Exported for reference and potential future validation use
 */
export const KNOWN_FUNCTIONS = new Set([
  'Round',
  'Localise',
  'SortBy',
  'GroupBy',
  'FilterByValue',
  'FilterByRef',
  'Sum',
  'Map',
  'FlatMap',
  'Default',
  'Symbol',
  'IsEmpty',
  'IsBlank',
  'EqualToVal',
  'First',
  'Last',
  'Skip',
  'Nth',
  'Uniq',
  'DateAdd',
  'Format',
  'ConvertTZ',
  'Concat',
  'Substr',
]);

interface ParsedMergeField {
  fullMatch: string;
  path: string;
  functions: string[];
  isSection: boolean;
  isSectionEnd: boolean;
  isInverted: boolean;
}

interface LoopContext {
  name: string;
  depth: number;
}

/**
 * Parse a single merge field expression to extract path and functions
 */
function parseMergeField(content: string): ParsedMergeField {
  const isSection = content.startsWith('#');
  const isSectionEnd = content.startsWith('/');
  const isInverted = content.startsWith('^');

  // Remove section markers
  let cleanContent = content;
  if (isSection || isSectionEnd || isInverted) {
    cleanContent = content.substring(1);
  }

  // Split by pipe to get path and functions
  const parts = cleanContent.split('|').map((p) => p.trim());
  const path = parts[0];
  const functions = parts.slice(1).map((f) => {
    // Extract function name from "FunctionName(args)"
    const match = f.match(/^(\w+)/);
    return match ? match[1] : f;
  });

  return {
    fullMatch: content,
    path,
    functions,
    isSection,
    isSectionEnd,
    isInverted,
  };
}

/**
 * Infer the type of a field based on its name and functions
 */
function inferFieldType(fieldName: string, functions: string[]): ExtractedFieldType {
  // Check known types first
  if (KNOWN_FIELD_TYPES[fieldName]) {
    return KNOWN_FIELD_TYPES[fieldName];
  }

  // Infer from function usage
  if (functions.includes('Round') || functions.includes('Sum')) {
    return 'currency';
  }
  if (functions.includes('Format') || functions.includes('DateAdd') || functions.includes('ConvertTZ')) {
    return 'date';
  }
  if (functions.includes('Symbol')) {
    return 'string';
  }
  if (functions.includes('Localise')) {
    // Could be number or date, default to currency
    return 'currency';
  }

  // Infer from field name patterns
  const lowerName = fieldName.toLowerCase();
  if (lowerName.includes('amount') || lowerName.includes('price') || lowerName.includes('total') || lowerName.includes('balance')) {
    return 'currency';
  }
  if (lowerName.includes('date') || lowerName.includes('time') || lowerName.includes('created') || lowerName.includes('updated')) {
    return 'date';
  }
  if (lowerName.includes('count') || lowerName.includes('quantity')) {
    return 'number';
  }
  if (lowerName.startsWith('is') || lowerName.startsWith('has') || lowerName.includes('enabled') || lowerName.includes('active')) {
    return 'boolean';
  }

  return 'string';
}

/**
 * Extract the last segment of a path (the field name)
 */
function getFieldName(path: string): string {
  const parts = path.split('.');
  return parts[parts.length - 1];
}

/**
 * Parse template and extract all merge fields with context
 */
export function parseTemplateMergeFields(template: string): {
  fields: ExtractedField[];
  lists: string[];
  rootObjects: string[];
} {
  const fields: ExtractedField[] = [];
  const lists = new Set<string>();
  const rootObjects = new Set<string>();
  const seenPaths = new Set<string>();

  // Track loop context stack
  const loopStack: LoopContext[] = [];

  // Regex to match all merge field patterns
  // Matches: {{...}}, {{#...}}, {{/...}}, {{^...}}
  const mergeFieldRegex = /\{\{([#/^]?[^{}]+)\}\}/g;

  let match: RegExpMatchArray | null;
  while ((match = mergeFieldRegex.exec(template)) !== null) {
    const content = match[1].trim();
    const parsed = parseMergeField(content);

    // Handle section end - pop from loop stack
    if (parsed.isSectionEnd) {
      const sectionName = parsed.path.split('|')[0];
      if (loopStack.length > 0 && loopStack[loopStack.length - 1].name === sectionName) {
        loopStack.pop();
      }
      continue;
    }

    // Handle section start - might be a loop
    if (parsed.isSection || parsed.isInverted) {
      const sectionName = parsed.path;

      // Check if this is a known list or has list-like patterns
      const isLoop = KNOWN_LISTS.has(sectionName) ||
        sectionName.endsWith('Items') ||
        sectionName.endsWith('s') && sectionName.length > 3;

      if (isLoop) {
        lists.add(sectionName);
        loopStack.push({ name: sectionName, depth: loopStack.length });
      }

      // Track root object if it's an object section
      if (!isLoop && !parsed.isInverted) {
        const rootObj = sectionName.split('.')[0];
        if (rootObj && !KNOWN_LISTS.has(rootObj)) {
          rootObjects.add(rootObj);
        }
      }

      continue;
    }

    // Skip special functions
    if (parsed.path.startsWith('Cmd_') || parsed.path.startsWith('Fn_') || parsed.path.startsWith('Wp_')) {
      continue;
    }

    // Skip pure function calls on lists (like Sum)
    if (parsed.functions.length > 0 && KNOWN_LISTS.has(parsed.path)) {
      continue;
    }

    // Build the full path key for deduplication
    const pathKey = loopStack.length > 0
      ? `${loopStack[loopStack.length - 1].name}:${parsed.path}`
      : parsed.path;

    if (seenPaths.has(pathKey)) {
      continue;
    }
    seenPaths.add(pathKey);

    // Extract root object
    const rootObj = parsed.path.split('.')[0];
    if (rootObj && !KNOWN_LISTS.has(rootObj)) {
      rootObjects.add(rootObj);
    }

    // Create extracted field
    const fieldName = getFieldName(parsed.path);
    const field: ExtractedField = {
      path: parsed.path,
      type: inferFieldType(fieldName, parsed.functions),
      inLoop: loopStack.length > 0,
      loopContext: loopStack.length > 0 ? loopStack[loopStack.length - 1].name : null,
      functions: parsed.functions,
    };

    fields.push(field);
  }

  return {
    fields,
    lists: Array.from(lists),
    rootObjects: Array.from(rootObjects),
  };
}

/**
 * Group extracted fields by their root object for structured output
 */
export function groupFieldsByObject(fields: ExtractedField[]): Record<string, ExtractedField[]> {
  const grouped: Record<string, ExtractedField[]> = {};

  for (const field of fields) {
    const rootObj = field.loopContext || field.path.split('.')[0];
    if (!grouped[rootObj]) {
      grouped[rootObj] = [];
    }
    grouped[rootObj].push(field);
  }

  return grouped;
}

/**
 * Generate a summary of what the template needs for sample data
 */
export function summarizeTemplateNeeds(template: string): {
  fields: ExtractedField[];
  lists: string[];
  rootObjects: string[];
  summary: string;
} {
  const { fields, lists, rootObjects } = parseTemplateMergeFields(template);

  const parts: string[] = [];

  if (rootObjects.length > 0) {
    parts.push(`Root objects: ${rootObjects.join(', ')}`);
  }

  if (lists.length > 0) {
    parts.push(`Lists/loops: ${lists.join(', ')}`);
  }

  const fieldsByType = fields.reduce((acc, f) => {
    acc[f.type] = (acc[f.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (Object.keys(fieldsByType).length > 0) {
    const typeStr = Object.entries(fieldsByType)
      .map(([type, count]) => `${count} ${type}`)
      .join(', ');
    parts.push(`Fields: ${typeStr}`);
  }

  return {
    fields,
    lists,
    rootObjects,
    summary: parts.join('; '),
  };
}
