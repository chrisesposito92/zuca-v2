import type { QuickTemplate, QuickTemplateCategory, HTMLTemplateMode } from '../../types/html-template';

/**
 * Pre-built templates for Code Generator
 *
 * These templates provide common starting points for generating
 * HTML invoice template merge field code.
 */
export const CODE_TEMPLATES: QuickTemplate[] = [
  // Tables category
  {
    id: 'charge-details-table',
    name: 'Charge Details Table',
    description: 'Invoice line items showing charge name, quantity, unit price, and subtotal',
    category: 'tables',
    mode: 'code',
    prompt:
      'Generate an HTML table showing all invoice items with columns for: charge name (description), quantity, unit price, and charge amount (subtotal). Format currency with the account currency symbol and round to 2 decimal places. Sort by service start date.',
  },
  {
    id: 'payment-history-table',
    name: 'Payment History Table',
    description: 'Payments applied to the invoice with payment method details',
    category: 'payments',
    mode: 'code',
    prompt:
      'Generate an HTML table showing all payments applied to this invoice. Include columns for: payment number, payment date, payment method (masked card number), and amount. Only show if payments exist.',
  },
  {
    id: 'tax-summary-table',
    name: 'Tax Summary Table',
    description: 'Tax breakdown by jurisdiction and rate',
    category: 'taxes',
    mode: 'code',
    prompt:
      'Generate an HTML table showing tax details for the invoice. Include columns for: tax name/jurisdiction, tax rate, and tax amount. Show a total tax amount row at the bottom.',
  },
  {
    id: 'usage-details-table',
    name: 'Usage Details Table',
    description: 'Usage-based charges with consumption breakdown',
    category: 'tables',
    mode: 'code',
    prompt:
      'Generate an HTML table for usage-based invoice items only. Filter for usage charges and show: charge name, quantity (usage amount), unit of measure (UOM), unit price, and total charge amount.',
  },
  {
    id: 'subscription-summary-table',
    name: 'Subscription Summary Table',
    description: 'Active subscriptions with their rate plans',
    category: 'subscriptions',
    mode: 'code',
    prompt:
      'Generate an HTML section showing all subscriptions associated with the invoice. Group invoice items by subscription name and show a subtotal for each subscription.',
  },
  {
    id: 'open-invoices-table',
    name: 'Open Invoices Table',
    description: 'Outstanding invoices for the account',
    category: 'tables',
    mode: 'code',
    prompt:
      'Generate an HTML table showing all open (unpaid) invoices for this account. Include columns for: invoice number, invoice date, due date, amount, and balance. Sort by due date ascending.',
  },

  // Address category
  {
    id: 'bill-to-address',
    name: 'Bill-To Address Block',
    description: 'Formatted billing address with conditional lines',
    category: 'addresses',
    mode: 'code',
    prompt:
      'Generate an HTML address block for the bill-to contact. Include: contact name (first + last), company name (if exists), address line 1, address line 2 (skip if empty), city/state/zip on one line, and country. Use proper line breaks.',
  },
  {
    id: 'sold-to-address',
    name: 'Sold-To Address Block',
    description: 'Formatted sold-to address with conditional lines',
    category: 'addresses',
    mode: 'code',
    prompt:
      'Generate an HTML address block for the sold-to contact. Include: contact name, address line 1, address line 2 (skip if empty), city/state/zip, and country. Skip the entire block if sold-to is the same as bill-to.',
  },

  // Conditional sections
  {
    id: 'draft-watermark',
    name: 'Draft Invoice Watermark',
    description: 'Show DRAFT watermark for unpublished invoices',
    category: 'conditionals',
    mode: 'code',
    prompt:
      'Generate HTML that displays a "DRAFT" watermark (styled in red, semi-transparent) only when the invoice status is Draft. Hide completely when the invoice is Posted.',
  },
  {
    id: 'autopay-notice',
    name: 'AutoPay Notice',
    description: 'Payment method info for AutoPay accounts',
    category: 'payments',
    mode: 'code',
    prompt:
      'Generate HTML that shows a payment notice only when the account has AutoPay enabled. Display the message "Payment will be automatically charged to [masked card number] on [due date]". Show the last 4 digits of the default payment method.',
  },
  {
    id: 'empty-invoice-message',
    name: 'Empty Invoice Message',
    description: 'Message when invoice has no line items',
    category: 'conditionals',
    mode: 'code',
    prompt:
      'Generate HTML that shows a message "No charges for this billing period" when the invoice has no invoice items. Only display when the InvoiceItems list is empty.',
  },

  // Grouped displays
  {
    id: 'charges-by-type',
    name: 'Charges Grouped by Type',
    description: 'Invoice items grouped by charge type with subtotals',
    category: 'tables',
    mode: 'code',
    prompt:
      'Generate HTML that groups invoice items by charge type (Recurring, OneTime, Usage). Show a heading for each group, list the charges with their amounts, and display a subtotal for each group.',
  },
  {
    id: 'charges-by-subscription',
    name: 'Charges Grouped by Subscription',
    description: 'Invoice items grouped by subscription with subtotals',
    category: 'subscriptions',
    mode: 'code',
    prompt:
      'Generate HTML that groups invoice items by subscription. For each subscription, show the subscription name as a heading, list all charges underneath, and show a subtotal for that subscription.',
  },
];

/**
 * Pre-built templates for Expression Builder
 *
 * These templates provide common starting points for generating
 * Wp_Eval expressions for calculations and conditional logic.
 */
export const EXPRESSION_TEMPLATES: QuickTemplate[] = [
  // Calculations category
  {
    id: 'calculate-total',
    name: 'Calculate Line Total',
    description: 'Sum of charge amount and tax amount',
    category: 'calculations',
    mode: 'expression',
    prompt:
      'Create an expression that calculates the total by adding ChargeAmount and TaxAmount. Round to 2 decimal places and format for locale.',
  },
  {
    id: 'unit-price-excl-tax',
    name: 'Unit Price Excluding Tax',
    description: 'Calculate unit price from charge amount and quantity',
    category: 'calculations',
    mode: 'expression',
    prompt:
      'Create an expression that calculates the unit price by dividing ChargeAmount by Quantity. Round to 2 decimal places and format for locale. Handle divide-by-zero by checking if quantity is greater than 0.',
  },
  {
    id: 'discount-percentage',
    name: 'Discount Percentage',
    description: 'Calculate discount as a percentage of list price',
    category: 'calculations',
    mode: 'expression',
    prompt:
      'Create an expression that calculates the discount percentage: ((ListPrice - SellPrice) / ListPrice) * 100. Round to 1 decimal place and append "% off".',
  },
  {
    id: 'days-until-due',
    name: 'Days Until Due',
    description: 'Calculate days remaining until payment is due',
    category: 'calculations',
    mode: 'expression',
    prompt:
      'Create an expression that shows "Due in X days" based on the difference between DueDate and today. Show "Overdue" if the due date has passed.',
  },

  // Conditionals category
  {
    id: 'conditional-text',
    name: 'Conditional Text Display',
    description: 'Show different text based on a field value',
    category: 'conditionals',
    mode: 'expression',
    prompt:
      'Create an expression that shows "Flat Rate" if ChargeModel equals "Flat Fee Pricing", "Per Unit" if it equals "Per Unit Pricing", or "Other" otherwise.',
  },
  {
    id: 'red-when-negative',
    name: 'Red Text for Negative Amounts',
    description: 'Style negative amounts in red',
    category: 'conditionals',
    mode: 'expression',
    prompt:
      'Create an expression that outputs an opening <span> tag with red color styling when ChargeAmount is less than 0, or a regular <span> tag otherwise. The closing tag should follow separately.',
  },
  {
    id: 'skip-empty-line',
    name: 'Skip Empty Address Line',
    description: 'Conditionally show Address2 only if not empty',
    category: 'conditionals',
    mode: 'expression',
    prompt:
      'Create an expression that outputs Address2 followed by a <br/> tag if Address2 is not empty, or outputs nothing if it is empty.',
  },
  {
    id: 'overdue-warning',
    name: 'Overdue Account Warning',
    description: 'Show warning message for overdue accounts',
    category: 'conditionals',
    mode: 'expression',
    prompt:
      'Create an expression that shows "Your account is now overdue." if the Invoice Balance is less than the Account Balance, or shows nothing otherwise.',
  },

  // Formatting category
  {
    id: 'format-currency',
    name: 'Format Currency Amount',
    description: 'Currency symbol with rounded, localized amount',
    category: 'formatting',
    mode: 'expression',
    prompt:
      'Create an expression that displays an amount with the account currency symbol, rounded to 2 decimal places, and formatted for locale.',
  },
  {
    id: 'state-abbreviation',
    name: 'State Abbreviation Mapper',
    description: 'Map full state names to abbreviations',
    category: 'formatting',
    mode: 'expression',
    prompt:
      'Create an expression that maps common US state names to their abbreviations: California → CA, New York → NY, Texas → TX, Florida → FL. For other states, show the original value.',
  },
  {
    id: 'date-format-short',
    name: 'Short Date Format',
    description: 'Format date as MM/DD/YYYY',
    category: 'formatting',
    mode: 'expression',
    prompt:
      'Create an expression that formats a date field (like InvoiceDate) in MM/DD/YYYY format using the Format function.',
  },
  {
    id: 'charge-model-display',
    name: 'Charge Model Display',
    description: 'Format charge model and pricing for display',
    category: 'formatting',
    mode: 'expression',
    prompt:
      'Create an expression that shows "Per Unit: [currency][price] Per [UOM]" for Per Unit Pricing charges, or "Flat Fee: [currency][price]" for Flat Fee Pricing charges.',
  },
];

/**
 * Get all quick templates
 */
export function getAllTemplates(): QuickTemplate[] {
  return [...CODE_TEMPLATES, ...EXPRESSION_TEMPLATES];
}

/**
 * Get templates by mode
 */
export function getTemplatesByMode(mode: HTMLTemplateMode): QuickTemplate[] {
  return mode === 'code' ? CODE_TEMPLATES : EXPRESSION_TEMPLATES;
}

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: QuickTemplateCategory): QuickTemplate[] {
  return getAllTemplates().filter((t) => t.category === category);
}

/**
 * Get a specific template by ID
 */
export function getTemplateById(id: string): QuickTemplate | undefined {
  return getAllTemplates().find((t) => t.id === id);
}

/**
 * Get all unique categories
 */
export function getCategories(): QuickTemplateCategory[] {
  const categories = new Set(getAllTemplates().map((t) => t.category));
  return Array.from(categories) as QuickTemplateCategory[];
}

/**
 * Group templates by category
 */
export function getTemplatesGroupedByCategory(
  mode?: HTMLTemplateMode
): Record<QuickTemplateCategory, QuickTemplate[]> {
  const templates = mode ? getTemplatesByMode(mode) : getAllTemplates();

  return templates.reduce(
    (acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    },
    {} as Record<QuickTemplateCategory, QuickTemplate[]>
  );
}
