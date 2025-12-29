/**
 * Registry for Zuora HTML Template Preview
 *
 * Implements the core Zuora merge field handlers for client-side preview rendering.
 * These handlers mirror Zuora's server-side behavior for accurate template previews.
 *
 * Phase 1 (MVP): 8 core handlers
 * Phase 2: Additional handlers (SortBy, GroupBy, FilterByValue, etc.)
 */

// Currency symbol lookup table
const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥',
  CAD: 'CA$',
  AUD: 'A$',
  CHF: 'CHF',
  INR: '₹',
  KRW: '₩',
  BRL: 'R$',
  MXN: 'MX$',
  SGD: 'S$',
  HKD: 'HK$',
  NZD: 'NZ$',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  ZAR: 'R',
  RUB: '₽',
  PLN: 'zł',
  THB: '฿',
  MYR: 'RM',
  IDR: 'Rp',
  PHP: '₱',
  VND: '₫',
  AED: 'د.إ',
  SAR: '﷼',
  ILS: '₪',
  TRY: '₺',
  CZK: 'Kč',
  HUF: 'Ft',
  CLP: 'CL$',
  COP: 'CO$',
  PEN: 'S/',
  ARS: 'AR$',
};

// Locale mapping for currency formatting
const CURRENCY_LOCALES: Record<string, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  GBP: 'en-GB',
  JPY: 'ja-JP',
  CNY: 'zh-CN',
  CAD: 'en-CA',
  AUD: 'en-AU',
  CHF: 'de-CH',
  INR: 'en-IN',
  KRW: 'ko-KR',
  BRL: 'pt-BR',
  MXN: 'es-MX',
};

export type PipeHandler = (
  value: unknown,
  args: string[],
  context: PipeContext
) => unknown;

export interface PipeContext {
  currency?: string;
  locale?: string;
  data?: Record<string, unknown>;
  loopStack?: Array<{ items: unknown[]; index: number; item: unknown }>;
}

export interface PipeDefinition {
  name: string;
  description: string;
  handler: PipeHandler;
  examples: string[];
}

/**
 * Check if a value is considered "empty" in Zuora terms
 */
function isEmptyValue(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

/**
 * Check if a value is considered "blank" (null, undefined, or empty string)
 */
function isBlankValue(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value === '') return true;
  return false;
}

/**
 * Parse a numeric value from various input types
 */
function parseNumericValue(value: unknown): number | null {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    // Remove currency symbols and commas
    const cleaned = value.replace(/[^0-9.-]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== 'object') return undefined;

  const parts = path.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

// ============================================================================
// Core Handlers (Phase 1 MVP)
// ============================================================================

/**
 * Round - Rounds a number to specified decimal places
 * Usage: {{Amount|Round(2)}}
 */
const roundHandler: PipeHandler = (value, args) => {
  const num = parseNumericValue(value);
  if (num === null) return value;

  const decimals = args.length > 0 ? parseInt(args[0], 10) : 0;
  const validDecimals = isNaN(decimals) ? 0 : Math.max(0, decimals);

  return num.toFixed(validDecimals);
};

/**
 * Check if a string looks like a date (YYYY-MM-DD or similar patterns)
 */
function isDateString(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  // Match ISO date formats: YYYY-MM-DD, YYYY/MM/DD, MM/DD/YYYY, etc.
  const datePatterns = [
    /^\d{4}-\d{2}-\d{2}$/,           // 2024-01-15
    /^\d{4}\/\d{2}\/\d{2}$/,         // 2024/01/15
    /^\d{2}\/\d{2}\/\d{4}$/,         // 01/15/2024
    /^\d{4}-\d{2}-\d{2}T/,           // 2024-01-15T00:00:00
  ];
  return datePatterns.some(pattern => pattern.test(value));
}

/**
 * Format a date string for display
 */
function formatDateString(value: string, locale: string): string {
  try {
    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch {
    return value;
  }
}

/**
 * Localise - Formats a number or date with locale-specific formatting
 * Usage: {{Amount|Localise}} or {{Date|Localise}}
 */
const localiseHandler: PipeHandler = (value, _args, context) => {
  const currency = context.currency || 'USD';
  const locale = context.locale || CURRENCY_LOCALES[currency] || 'en-US';

  // Check if it's a date string first
  if (isDateString(value)) {
    return formatDateString(value as string, locale);
  }

  // Otherwise try to format as number
  const num = parseNumericValue(value);
  if (num === null) return value;

  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  } catch {
    return num.toFixed(2);
  }
};

/**
 * Default - Returns fallback value if the input is empty/null
 * Usage: {{Description|Default("N/A")}}
 */
const defaultHandler: PipeHandler = (value, args) => {
  if (isEmptyValue(value)) {
    // Remove surrounding quotes from the default value
    const defaultVal = args[0] || '';
    return defaultVal.replace(/^["']|["']$/g, '');
  }
  return value;
};

/**
 * Symbol - Returns the currency symbol for a currency code
 * Usage: {{Currency|Symbol}}
 */
const symbolHandler: PipeHandler = (value, _args, context) => {
  const currency = typeof value === 'string' ? value : context.currency || 'USD';
  return CURRENCY_SYMBOLS[currency.toUpperCase()] || currency;
};

/**
 * IsEmpty - Returns true if the value is empty (for conditionals)
 * Usage: {{^Items|IsEmpty}}...{{/Items}}
 */
const isEmptyHandler: PipeHandler = (value) => {
  return isEmptyValue(value);
};

/**
 * IsBlank - Returns true if the value is blank (null/undefined/empty string)
 * Usage: {{^Name|IsBlank}}...{{/Name}}
 */
const isBlankHandler: PipeHandler = (value) => {
  return isBlankValue(value);
};

/**
 * EqualToVal - Returns true if the value equals the specified value
 * Usage: {{^Status|EqualToVal("Active")}}...{{/Status}}
 */
const equalToValHandler: PipeHandler = (value, args) => {
  if (args.length === 0) return false;

  // Remove surrounding quotes
  const compareVal = args[0].replace(/^["']|["']$/g, '');

  // String comparison
  if (typeof value === 'string') {
    return value === compareVal;
  }

  // Numeric comparison
  const numValue = parseNumericValue(value);
  const numCompare = parseNumericValue(compareVal);
  if (numValue !== null && numCompare !== null) {
    return numValue === numCompare;
  }

  // Fallback to string comparison
  return String(value) === compareVal;
};

/**
 * Sum - Sums a field across an array of objects
 * Usage: {{InvoiceItems|Sum("Amount")}}
 */
const sumHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return 0;
  if (args.length === 0) return 0;

  const field = args[0].replace(/^["']|["']$/g, '');

  let sum = 0;
  for (const item of value) {
    if (item && typeof item === 'object') {
      const fieldValue = getNestedValue(item, field);
      const num = parseNumericValue(fieldValue);
      if (num !== null) {
        sum += num;
      }
    }
  }

  return sum;
};

// ============================================================================
// Additional Handlers (Phase 2)
// ============================================================================

/**
 * Format - Formats a date using a pattern
 * Usage: {{Date|Format("MM/dd/yyyy")}}
 */
const formatHandler: PipeHandler = (value, args) => {
  if (!value) return '';

  const pattern = args[0]?.replace(/^["']|["']$/g, '') || 'MM/dd/yyyy';

  let date: Date;
  if (value instanceof Date) {
    date = value;
  } else if (typeof value === 'string') {
    date = new Date(value);
  } else {
    return String(value);
  }

  if (isNaN(date.getTime())) return String(value);

  // Simple pattern replacement
  const replacements: Record<string, string> = {
    'yyyy': date.getFullYear().toString(),
    'yy': date.getFullYear().toString().slice(-2),
    'MM': (date.getMonth() + 1).toString().padStart(2, '0'),
    'M': (date.getMonth() + 1).toString(),
    'dd': date.getDate().toString().padStart(2, '0'),
    'd': date.getDate().toString(),
    'HH': date.getHours().toString().padStart(2, '0'),
    'H': date.getHours().toString(),
    'mm': date.getMinutes().toString().padStart(2, '0'),
    'm': date.getMinutes().toString(),
    'ss': date.getSeconds().toString().padStart(2, '0'),
    's': date.getSeconds().toString(),
  };

  let result = pattern;
  for (const [token, replacement] of Object.entries(replacements)) {
    result = result.replace(new RegExp(token, 'g'), replacement);
  }

  return result;
};

/**
 * Concat - Concatenates array values with a separator
 * Usage: {{Items|Concat(", ")}}
 */
const concatHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return String(value || '');

  const separator = args[0]?.replace(/^["']|["']$/g, '') || ', ';
  return value.map(item => String(item)).join(separator);
};

/**
 * Substr - Extracts a substring
 * Usage: {{Text|Substr(0, 10)}}
 */
const substrHandler: PipeHandler = (value, args) => {
  if (typeof value !== 'string') return value;

  const start = parseInt(args[0] || '0', 10);
  const length = args[1] ? parseInt(args[1], 10) : undefined;

  return value.substring(start, length !== undefined ? start + length : undefined);
};

/**
 * Upper - Converts to uppercase
 * Usage: {{Name|Upper}}
 */
const upperHandler: PipeHandler = (value) => {
  return typeof value === 'string' ? value.toUpperCase() : value;
};

/**
 * Lower - Converts to lowercase
 * Usage: {{Name|Lower}}
 */
const lowerHandler: PipeHandler = (value) => {
  return typeof value === 'string' ? value.toLowerCase() : value;
};

/**
 * Map - Extracts a field from each item in an array
 * Usage: {{Items|Map("Name")}}
 */
const mapHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];
  if (args.length === 0) return value;

  const field = args[0].replace(/^["']|["']$/g, '');
  return value.map(item => {
    if (item && typeof item === 'object') {
      return getNestedValue(item, field);
    }
    return undefined;
  });
};

/**
 * Length - Returns the length of an array or string
 * Usage: {{Items|Length}}
 */
const lengthHandler: PipeHandler = (value) => {
  if (Array.isArray(value)) return value.length;
  if (typeof value === 'string') return value.length;
  return 0;
};

/**
 * Abs - Returns the absolute value
 * Usage: {{Amount|Abs}}
 */
const absHandler: PipeHandler = (value) => {
  const num = parseNumericValue(value);
  if (num === null) return value;
  return Math.abs(num);
};

// ============================================================================
// Phase 4+ Advanced Handlers
// ============================================================================

/**
 * SortBy - Sorts an array by a field
 * Usage: {{Items|SortBy("Name", "ASC")}} or {{Items|SortBy("Amount", "DESC")}}
 */
const sortByHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return value;
  if (value.length === 0) return value;

  const field = args[0]?.replace(/^["']|["']$/g, '') || '';
  const direction = (args[1]?.replace(/^["']|["']$/g, '') || 'ASC').toUpperCase();
  const isDesc = direction === 'DESC';

  // Create a shallow copy to avoid mutating the original
  const sorted = [...value].sort((a, b) => {
    const aVal = field ? getNestedValue(a, field) : a;
    const bVal = field ? getNestedValue(b, field) : b;

    // Handle null/undefined
    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return isDesc ? 1 : -1;
    if (bVal == null) return isDesc ? -1 : 1;

    // Numeric comparison
    const aNum = parseNumericValue(aVal);
    const bNum = parseNumericValue(bVal);
    if (aNum !== null && bNum !== null) {
      return isDesc ? bNum - aNum : aNum - bNum;
    }

    // Date comparison
    if (isDateString(aVal) && isDateString(bVal)) {
      const aDate = new Date(aVal as string).getTime();
      const bDate = new Date(bVal as string).getTime();
      return isDesc ? bDate - aDate : aDate - bDate;
    }

    // String comparison
    const aStr = String(aVal);
    const bStr = String(bVal);
    const cmp = aStr.localeCompare(bStr);
    return isDesc ? -cmp : cmp;
  });

  return sorted;
};

/**
 * GroupBy - Groups an array by one or more fields
 * Usage: {{Items|GroupBy("Category")}} or {{Items|GroupBy("Category", "SubCategory")}}
 * Returns an array of group objects with { key, items } structure
 */
const groupByHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];
  if (value.length === 0) return [];
  if (args.length === 0) return [{ key: 'all', items: value }];

  // Parse all group fields
  const fields = args.map(a => a.replace(/^["']|["']$/g, ''));

  // Build a nested grouping structure
  const groupMap = new Map<string, unknown[]>();

  for (const item of value) {
    // Build composite key from all fields
    const keyParts = fields.map(field => {
      const val = getNestedValue(item, field);
      return val != null ? String(val) : '__null__';
    });
    const compositeKey = keyParts.join('|||');

    if (!groupMap.has(compositeKey)) {
      groupMap.set(compositeKey, []);
    }
    groupMap.get(compositeKey)!.push(item);
  }

  // Convert to array of group objects
  const groups: Array<{ key: string; keys: Record<string, unknown>; items: unknown[] }> = [];
  for (const [compositeKey, items] of groupMap) {
    const keyParts = compositeKey.split('|||');
    const keys: Record<string, unknown> = {};
    fields.forEach((field, i) => {
      const val = keyParts[i];
      keys[field] = val === '__null__' ? null : val;
    });

    // Use the first field value as the primary key for simple access
    const primaryKey = keyParts[0] === '__null__' ? '' : keyParts[0];

    groups.push({ key: primaryKey, keys, items });
  }

  return groups;
};

/**
 * FlatMap - Flattens nested arrays by extracting a field
 * Usage: {{Groups|FlatMap("items")}} - extracts and flattens "items" arrays from each group
 */
const flatMapHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];

  const field = args[0]?.replace(/^["']|["']$/g, '') || '';

  if (!field) {
    // No field specified - flatten one level
    return value.flat();
  }

  // Extract the field from each item and flatten
  const result: unknown[] = [];
  for (const item of value) {
    if (item && typeof item === 'object') {
      const fieldValue = getNestedValue(item, field);
      if (Array.isArray(fieldValue)) {
        result.push(...fieldValue);
      } else if (fieldValue !== undefined) {
        result.push(fieldValue);
      }
    }
  }

  return result;
};

/**
 * FilterByValue - Filters an array by comparing a field to a value
 * Usage: {{Items|FilterByValue("Status", "EQ", "Active")}}
 * Operators: EQ, NE, GT, LT, GE, LE, CONTAINS, STARTSWITH, ENDSWITH
 */
const filterByValueHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];
  if (args.length < 3) return value;

  const field = args[0]?.replace(/^["']|["']$/g, '') || '';
  const operator = (args[1]?.replace(/^["']|["']$/g, '') || 'EQ').toUpperCase();
  const compareValue = args[2]?.replace(/^["']|["']$/g, '') || '';

  return value.filter(item => {
    const fieldValue = field ? getNestedValue(item, field) : item;
    return compareValues(fieldValue, operator, compareValue);
  });
};

/**
 * FilterByRef - Filters an array by comparing a field to a reference value from context
 * Usage: {{Items|FilterByRef("SubscriptionId", "EQ", "Subscription.Id")}}
 */
const filterByRefHandler: PipeHandler = (value, args, context) => {
  if (!Array.isArray(value)) return [];
  if (args.length < 3) return value;

  const field = args[0]?.replace(/^["']|["']$/g, '') || '';
  const operator = (args[1]?.replace(/^["']|["']$/g, '') || 'EQ').toUpperCase();
  const refPath = args[2]?.replace(/^["']|["']$/g, '') || '';

  // Get the reference value from context
  const refValue = context.data ? getNestedValue(context.data, refPath) : undefined;
  if (refValue === undefined) return value;

  return value.filter(item => {
    const fieldValue = field ? getNestedValue(item, field) : item;
    return compareValues(fieldValue, operator, refValue);
  });
};

/**
 * Helper function for comparison operations
 */
function compareValues(fieldValue: unknown, operator: string, compareValue: unknown): boolean {
  // Handle null/undefined
  if (fieldValue == null) {
    return operator === 'NE' ? compareValue != null : false;
  }

  const fieldStr = String(fieldValue);
  const compareStr = String(compareValue);

  switch (operator) {
    case 'EQ':
      return fieldStr === compareStr;
    case 'NE':
      return fieldStr !== compareStr;
    case 'GT': {
      const fNum = parseNumericValue(fieldValue);
      const cNum = parseNumericValue(compareValue);
      if (fNum !== null && cNum !== null) return fNum > cNum;
      return fieldStr > compareStr;
    }
    case 'LT': {
      const fNum = parseNumericValue(fieldValue);
      const cNum = parseNumericValue(compareValue);
      if (fNum !== null && cNum !== null) return fNum < cNum;
      return fieldStr < compareStr;
    }
    case 'GE': {
      const fNum = parseNumericValue(fieldValue);
      const cNum = parseNumericValue(compareValue);
      if (fNum !== null && cNum !== null) return fNum >= cNum;
      return fieldStr >= compareStr;
    }
    case 'LE': {
      const fNum = parseNumericValue(fieldValue);
      const cNum = parseNumericValue(compareValue);
      if (fNum !== null && cNum !== null) return fNum <= cNum;
      return fieldStr <= compareStr;
    }
    case 'CONTAINS':
      return fieldStr.toLowerCase().includes(compareStr.toLowerCase());
    case 'STARTSWITH':
      return fieldStr.toLowerCase().startsWith(compareStr.toLowerCase());
    case 'ENDSWITH':
      return fieldStr.toLowerCase().endsWith(compareStr.toLowerCase());
    default:
      return fieldStr === compareStr;
  }
}

/**
 * DateAdd - Adds a duration to a date
 * Usage: {{Date|DateAdd(30, "days")}} or {{Date|DateAdd(-1, "months")}}
 * Units: days, weeks, months, years, hours, minutes
 */
const dateAddHandler: PipeHandler = (value, args) => {
  if (!value) return '';

  let date: Date;
  if (value instanceof Date) {
    date = new Date(value);
  } else if (typeof value === 'string') {
    date = new Date(value);
  } else {
    return String(value);
  }

  if (isNaN(date.getTime())) return String(value);

  const amount = parseInt(args[0] || '0', 10);
  const unit = (args[1]?.replace(/^["']|["']$/g, '') || 'days').toLowerCase();

  switch (unit) {
    case 'days':
    case 'day':
      date.setDate(date.getDate() + amount);
      break;
    case 'weeks':
    case 'week':
      date.setDate(date.getDate() + amount * 7);
      break;
    case 'months':
    case 'month':
      date.setMonth(date.getMonth() + amount);
      break;
    case 'years':
    case 'year':
      date.setFullYear(date.getFullYear() + amount);
      break;
    case 'hours':
    case 'hour':
      date.setHours(date.getHours() + amount);
      break;
    case 'minutes':
    case 'minute':
      date.setMinutes(date.getMinutes() + amount);
      break;
    default:
      // Default to days
      date.setDate(date.getDate() + amount);
  }

  // Return ISO date string
  return date.toISOString().split('T')[0];
};

// Timezone offset mapping (common timezones)
const TIMEZONE_OFFSETS: Record<string, number> = {
  // North America
  'PST': -8, 'PDT': -7, 'MST': -7, 'MDT': -6, 'CST': -6, 'CDT': -5,
  'EST': -5, 'EDT': -4,
  // Europe
  'GMT': 0, 'UTC': 0, 'WET': 0, 'WEST': 1, 'CET': 1, 'CEST': 2,
  'EET': 2, 'EEST': 3,
  // Asia
  'IST': 5.5, 'SGT': 8, 'CST_CHINA': 8, 'JST': 9, 'KST': 9, 'AEST': 10,
  // Pacific
  'NZST': 12, 'NZDT': 13,
};

/**
 * ConvertTZ - Converts a date to a different timezone
 * Usage: {{Date|ConvertTZ("PST")}} or {{Date|ConvertTZ("America/Los_Angeles")}}
 * Note: For preview purposes, uses simplified timezone handling
 */
const convertTzHandler: PipeHandler = (value, args) => {
  if (!value) return '';

  let date: Date;
  if (value instanceof Date) {
    date = new Date(value);
  } else if (typeof value === 'string') {
    date = new Date(value);
  } else {
    return String(value);
  }

  if (isNaN(date.getTime())) return String(value);

  const tz = args[0]?.replace(/^["']|["']$/g, '') || 'UTC';

  try {
    // Try using Intl.DateTimeFormat for IANA timezone names
    if (tz.includes('/')) {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(date);
    }

    // Fallback to simple offset-based conversion
    const offset = TIMEZONE_OFFSETS[tz.toUpperCase()];
    if (offset !== undefined) {
      const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
      const targetTime = utcTime + offset * 3600000;
      const targetDate = new Date(targetTime);
      return targetDate.toISOString().replace('T', ' ').slice(0, 19);
    }

    // Unknown timezone, return as-is
    return date.toISOString().split('T')[0];
  } catch {
    return date.toISOString().split('T')[0];
  }
};

/**
 * Count - Returns the count of items matching a condition
 * Usage: {{Items|Count}} or {{Items|Count("Status", "EQ", "Active")}}
 */
const countHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return 0;

  if (args.length >= 3) {
    // Filter and count
    const field = args[0]?.replace(/^["']|["']$/g, '') || '';
    const operator = (args[1]?.replace(/^["']|["']$/g, '') || 'EQ').toUpperCase();
    const compareValue = args[2]?.replace(/^["']|["']$/g, '') || '';

    return value.filter(item => {
      const fieldValue = field ? getNestedValue(item, field) : item;
      return compareValues(fieldValue, operator, compareValue);
    }).length;
  }

  return value.length;
};

/**
 * Average - Calculates the average of a numeric field
 * Usage: {{Items|Average("Amount")}}
 */
const averageHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value) || value.length === 0) return 0;
  if (args.length === 0) return 0;

  const field = args[0].replace(/^["']|["']$/g, '');

  let sum = 0;
  let count = 0;
  for (const item of value) {
    if (item && typeof item === 'object') {
      const fieldValue = getNestedValue(item, field);
      const num = parseNumericValue(fieldValue);
      if (num !== null) {
        sum += num;
        count++;
      }
    }
  }

  return count > 0 ? sum / count : 0;
};

/**
 * Min - Returns the minimum value of a numeric field
 * Usage: {{Items|Min("Amount")}}
 */
const minHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value) || value.length === 0) return 0;
  if (args.length === 0) return 0;

  const field = args[0].replace(/^["']|["']$/g, '');

  let min: number | null = null;
  for (const item of value) {
    if (item && typeof item === 'object') {
      const fieldValue = getNestedValue(item, field);
      const num = parseNumericValue(fieldValue);
      if (num !== null) {
        if (min === null || num < min) {
          min = num;
        }
      }
    }
  }

  return min ?? 0;
};

/**
 * Max - Returns the maximum value of a numeric field
 * Usage: {{Items|Max("Amount")}}
 */
const maxHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value) || value.length === 0) return 0;
  if (args.length === 0) return 0;

  const field = args[0].replace(/^["']|["']$/g, '');

  let max: number | null = null;
  for (const item of value) {
    if (item && typeof item === 'object') {
      const fieldValue = getNestedValue(item, field);
      const num = parseNumericValue(fieldValue);
      if (num !== null) {
        if (max === null || num > max) {
          max = num;
        }
      }
    }
  }

  return max ?? 0;
};

/**
 * First - Returns the first item from an array
 * Usage: {{Items|First}} or {{Items|First("Name")}}
 */
const firstHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value) || value.length === 0) return null;

  const item = value[0];
  if (args.length > 0 && item && typeof item === 'object') {
    const field = args[0].replace(/^["']|["']$/g, '');
    return getNestedValue(item, field);
  }

  return item;
};

/**
 * Last - Returns the last item from an array
 * Usage: {{Items|Last}} or {{Items|Last("Name")}}
 */
const lastHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value) || value.length === 0) return null;

  const item = value[value.length - 1];
  if (args.length > 0 && item && typeof item === 'object') {
    const field = args[0].replace(/^["']|["']$/g, '');
    return getNestedValue(item, field);
  }

  return item;
};

/**
 * Take - Returns the first N items from an array
 * Usage: {{Items|Take(5)}}
 */
const takeHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];

  const count = parseInt(args[0] || '1', 10);
  return value.slice(0, count);
};

/**
 * Skip - Skips the first N items from an array
 * Usage: {{Items|Skip(5)}}
 */
const skipHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];

  const count = parseInt(args[0] || '0', 10);
  return value.slice(count);
};

/**
 * Distinct - Returns unique values from an array
 * Usage: {{Items|Distinct}} or {{Items|Distinct("Category")}}
 */
const distinctHandler: PipeHandler = (value, args) => {
  if (!Array.isArray(value)) return [];

  if (args.length > 0) {
    const field = args[0].replace(/^["']|["']$/g, '');
    const seen = new Set<string>();
    return value.filter(item => {
      const key = String(getNestedValue(item, field) ?? '');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // Simple deduplication for primitive arrays
  return [...new Set(value.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));
};

// ============================================================================
// Pipe Registry
// ============================================================================

const PIPE_DEFINITIONS: PipeDefinition[] = [
  // Phase 1 MVP
  {
    name: 'Round',
    description: 'Rounds a number to specified decimal places',
    handler: roundHandler,
    examples: ['{{Amount|Round(2)}}', '{{Total|Round(0)}}'],
  },
  {
    name: 'Localise',
    description: 'Formats a number with locale-specific formatting',
    handler: localiseHandler,
    examples: ['{{Amount|Localise}}', '{{Price|Localise}}'],
  },
  {
    name: 'Default',
    description: 'Returns fallback value if the input is empty/null',
    handler: defaultHandler,
    examples: ['{{Description|Default("N/A")}}', '{{Notes|Default("-")}}'],
  },
  {
    name: 'Symbol',
    description: 'Returns the currency symbol for a currency code',
    handler: symbolHandler,
    examples: ['{{Currency|Symbol}}', '{{Account.Currency|Symbol}}'],
  },
  {
    name: 'IsEmpty',
    description: 'Returns true if the value is empty',
    handler: isEmptyHandler,
    examples: ['{{^Items|IsEmpty}}No items{{/Items}}'],
  },
  {
    name: 'IsBlank',
    description: 'Returns true if the value is blank',
    handler: isBlankHandler,
    examples: ['{{^Name|IsBlank}}(Unnamed){{/Name}}'],
  },
  {
    name: 'EqualToVal',
    description: 'Returns true if the value equals the specified value',
    handler: equalToValHandler,
    examples: ['{{^Status|EqualToVal("Active")}}...{{/Status}}'],
  },
  {
    name: 'Sum',
    description: 'Sums a field across an array of objects',
    handler: sumHandler,
    examples: ['{{InvoiceItems|Sum("Amount")}}', '{{LineItems|Sum("Total")}}'],
  },
  // Phase 2 Additional
  {
    name: 'Format',
    description: 'Formats a date using a pattern',
    handler: formatHandler,
    examples: ['{{Date|Format("MM/dd/yyyy")}}', '{{CreatedDate|Format("yyyy-MM-dd")}}'],
  },
  {
    name: 'Concat',
    description: 'Concatenates array values with a separator',
    handler: concatHandler,
    examples: ['{{Tags|Concat(", ")}}', '{{Names|Concat(" | ")}}'],
  },
  {
    name: 'Substr',
    description: 'Extracts a substring',
    handler: substrHandler,
    examples: ['{{Text|Substr(0, 10)}}', '{{Code|Substr(0, 3)}}'],
  },
  {
    name: 'Upper',
    description: 'Converts to uppercase',
    handler: upperHandler,
    examples: ['{{Status|Upper}}', '{{Code|Upper}}'],
  },
  {
    name: 'Lower',
    description: 'Converts to lowercase',
    handler: lowerHandler,
    examples: ['{{Email|Lower}}', '{{Username|Lower}}'],
  },
  {
    name: 'Map',
    description: 'Extracts a field from each item in an array',
    handler: mapHandler,
    examples: ['{{Items|Map("Name")}}', '{{Users|Map("Email")}}'],
  },
  {
    name: 'Length',
    description: 'Returns the length of an array or string',
    handler: lengthHandler,
    examples: ['{{Items|Length}}', '{{Description|Length}}'],
  },
  {
    name: 'Abs',
    description: 'Returns the absolute value',
    handler: absHandler,
    examples: ['{{Adjustment|Abs}}', '{{Difference|Abs}}'],
  },
  // Phase 4+ Advanced
  {
    name: 'SortBy',
    description: 'Sorts an array by a field with optional direction',
    handler: sortByHandler,
    examples: ['{{Items|SortBy("Name")}}', '{{Items|SortBy("Amount", "DESC")}}'],
  },
  {
    name: 'GroupBy',
    description: 'Groups an array by one or more fields',
    handler: groupByHandler,
    examples: ['{{Items|GroupBy("Category")}}', '{{Items|GroupBy("Type", "Status")}}'],
  },
  {
    name: 'FlatMap',
    description: 'Flattens nested arrays by extracting a field',
    handler: flatMapHandler,
    examples: ['{{Groups|FlatMap("items")}}', '{{Nested|FlatMap}}'],
  },
  {
    name: 'FilterByValue',
    description: 'Filters an array by comparing a field to a value',
    handler: filterByValueHandler,
    examples: ['{{Items|FilterByValue("Status", "EQ", "Active")}}', '{{Items|FilterByValue("Amount", "GT", "100")}}'],
  },
  {
    name: 'FilterByRef',
    description: 'Filters an array by comparing a field to a reference value from data',
    handler: filterByRefHandler,
    examples: ['{{Items|FilterByRef("SubscriptionId", "EQ", "Subscription.Id")}}'],
  },
  {
    name: 'DateAdd',
    description: 'Adds a duration to a date',
    handler: dateAddHandler,
    examples: ['{{Date|DateAdd(30, "days")}}', '{{Date|DateAdd(-1, "months")}}'],
  },
  {
    name: 'ConvertTZ',
    description: 'Converts a date to a different timezone',
    handler: convertTzHandler,
    examples: ['{{Date|ConvertTZ("PST")}}', '{{Date|ConvertTZ("America/New_York")}}'],
  },
  {
    name: 'Count',
    description: 'Returns the count of items, optionally matching a condition',
    handler: countHandler,
    examples: ['{{Items|Count}}', '{{Items|Count("Status", "EQ", "Active")}}'],
  },
  {
    name: 'Average',
    description: 'Calculates the average of a numeric field',
    handler: averageHandler,
    examples: ['{{Items|Average("Amount")}}', '{{LineItems|Average("Quantity")}}'],
  },
  {
    name: 'Min',
    description: 'Returns the minimum value of a numeric field',
    handler: minHandler,
    examples: ['{{Items|Min("Amount")}}', '{{Prices|Min("Value")}}'],
  },
  {
    name: 'Max',
    description: 'Returns the maximum value of a numeric field',
    handler: maxHandler,
    examples: ['{{Items|Max("Amount")}}', '{{Prices|Max("Value")}}'],
  },
  {
    name: 'First',
    description: 'Returns the first item from an array',
    handler: firstHandler,
    examples: ['{{Items|First}}', '{{Items|First("Name")}}'],
  },
  {
    name: 'Last',
    description: 'Returns the last item from an array',
    handler: lastHandler,
    examples: ['{{Items|Last}}', '{{Items|Last("Name")}}'],
  },
  {
    name: 'Take',
    description: 'Returns the first N items from an array',
    handler: takeHandler,
    examples: ['{{Items|Take(5)}}', '{{TopProducts|Take(3)}}'],
  },
  {
    name: 'Skip',
    description: 'Skips the first N items from an array',
    handler: skipHandler,
    examples: ['{{Items|Skip(5)}}', '{{AllItems|Skip(10)}}'],
  },
  {
    name: 'Distinct',
    description: 'Returns unique values from an array',
    handler: distinctHandler,
    examples: ['{{Items|Distinct}}', '{{Items|Distinct("Category")}}'],
  },
];

/**
 * PipeRegistry class for managing and executing template pipe operations
 */
export class PipeRegistry {
  private pipes: Map<string, PipeDefinition> = new Map();

  constructor() {
    // Register all built-in pipes
    for (const def of PIPE_DEFINITIONS) {
      this.pipes.set(def.name.toLowerCase(), def);
    }
  }

  /**
   * Check if a pipe is registered
   */
  has(name: string): boolean {
    return this.pipes.has(name.toLowerCase());
  }

  /**
   * Get a pipe definition
   */
  get(name: string): PipeDefinition | undefined {
    return this.pipes.get(name.toLowerCase());
  }

  /**
   * Execute a pipe
   */
  execute(
    name: string,
    value: unknown,
    args: string[],
    context: PipeContext
  ): unknown {
    const def = this.pipes.get(name.toLowerCase());
    if (!def) {
      // Unknown pipe - return value unchanged with a warning
      console.warn(`Unknown pipe: ${name}`);
      return value;
    }

    return def.handler(value, args, context);
  }

  /**
   * Register a custom pipe
   */
  register(definition: PipeDefinition): void {
    this.pipes.set(definition.name.toLowerCase(), definition);
  }

  /**
   * Get all registered pipe names
   */
  getNames(): string[] {
    return Array.from(this.pipes.keys());
  }

  /**
   * Get all pipe definitions
   */
  getAll(): PipeDefinition[] {
    return Array.from(this.pipes.values());
  }
}

// Export singleton instance
export const pipeRegistry = new PipeRegistry();

// Export utility helpers
export { isEmptyValue, isBlankValue, parseNumericValue, getNestedValue };
