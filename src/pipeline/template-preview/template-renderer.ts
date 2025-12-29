/**
 * Template Renderer for Zuora HTML Template Preview
 *
 * Client-side rendering engine that processes Zuora merge field syntax:
 * - Simple fields: {{Field}}, {{Object.Path.Field}}
 * - Loops: {{#List}}...{{/List}}
 * - Conditionals: {{^Field|IsEmpty}}...{{/Field}}
 * - Pipe operations: {{Amount|Round(2)|Localise}}
 * - Expressions: {{#Wp_Eval}}...{{/Wp_Eval}}
 */

import {
  pipeRegistry,
  type PipeContext,
  isEmptyValue,
  getNestedValue,
} from './function-registry';
import { evaluateExpression } from './expression-evaluator';

// ============================================================================
// Types
// ============================================================================

export interface RenderError {
  type: 'syntax' | 'reference' | 'pipe' | 'expression' | 'loop';
  message: string;
  location?: string;
  field?: string;
}

export interface RenderWarning {
  type: 'missing_field' | 'empty_loop' | 'unknown_pipe' | 'expression_fallback';
  message: string;
  field?: string;
}

export interface RenderResult {
  html: string;
  errors: RenderError[];
  warnings: RenderWarning[];
  stats: {
    fieldsProcessed: number;
    loopsProcessed: number;
    conditionalsProcessed: number;
    expressionsProcessed: number;
  };
}

export interface RenderOptions {
  currency?: string;
  locale?: string;
  strictMode?: boolean; // If true, throw on errors instead of showing placeholders
  showMissingFields?: boolean; // If true, show [MISSING: field] for undefined fields
}

interface LoopContext {
  items: unknown[];
  index: number;
  item: unknown;
  key?: string;
}

interface RenderContext {
  data: Record<string, unknown>;
  options: RenderOptions;
  loopStack: LoopContext[];
  errors: RenderError[];
  warnings: RenderWarning[];
  stats: {
    fieldsProcessed: number;
    loopsProcessed: number;
    conditionalsProcessed: number;
    expressionsProcessed: number;
  };
}

// ============================================================================
// Regex Patterns
// ============================================================================

// Matches {{...}} merge fields (non-greedy)
const MERGE_FIELD_PATTERN = /\{\{([^{}]+?)\}\}/g;

// Matches loop start: {{#FieldName}} or {{#Field|Pipe(args)}}
const LOOP_START_PATTERN = /\{\{#([^{}|]+)(?:\|([^{}]+))?\}\}/;

// Matches conditional start: {{^FieldName|Condition}} or {{^FieldName}}
const CONDITIONAL_START_PATTERN = /\{\{\^([^{}|]+)(?:\|([^{}]+))?\}\}/;

// Matches Wp_Eval expression block
const WP_EVAL_PATTERN = /\{\{#Wp_Eval\}\}([\s\S]*?)\{\{\/Wp_Eval\}\}/g;

// Matches Cmd_Assign: {{#Cmd_Assign:varName}}...{{/Cmd_Assign}}
const CMD_ASSIGN_PATTERN = /\{\{#Cmd_Assign:([^{}]+)\}\}([\s\S]*?)\{\{\/Cmd_Assign\}\}/g;

// ============================================================================
// Parsing Helpers
// ============================================================================

/**
 * Parse a field reference with optional pipe operations
 * Example: "Amount|Round(2)|Localise" -> { field: "Amount", pipes: [{name: "Round", args: ["2"]}, {name: "Localise", args: []}] }
 */
function parseFieldReference(reference: string): {
  field: string;
  pipes: Array<{ name: string; args: string[] }>;
} {
  const parts = reference.split('|');
  const field = parts[0].trim();
  const pipes: Array<{ name: string; args: string[] }> = [];

  for (let i = 1; i < parts.length; i++) {
    const pipePart = parts[i].trim();
    const match = pipePart.match(/^(\w+)(?:\(([^)]*)\))?$/);

    if (match) {
      const name = match[1];
      const argsStr = match[2] || '';
      const args = argsStr
        ? argsStr.split(',').map((a) => a.trim())
        : [];
      pipes.push({ name, args });
    }
  }

  return { field, pipes };
}

/**
 * Resolve a field value from the data context
 * Handles dot notation and loop context
 */
function resolveFieldValue(
  fieldPath: string,
  ctx: RenderContext
): unknown {
  // Check for special loop variables first
  if (ctx.loopStack.length > 0) {
    const currentLoop = ctx.loopStack[ctx.loopStack.length - 1];

    // _index: current 0-based index
    if (fieldPath === '_index') {
      return currentLoop.index;
    }

    // _count: 1-based count
    if (fieldPath === '_count') {
      return currentLoop.index + 1;
    }

    // _first: true if first item
    if (fieldPath === '_first') {
      return currentLoop.index === 0;
    }

    // _last: true if last item
    if (fieldPath === '_last') {
      return currentLoop.index === currentLoop.items.length - 1;
    }

    // _length: total items
    if (fieldPath === '_length') {
      return currentLoop.items.length;
    }

    // Check if field is directly on current loop item
    if (currentLoop.item && typeof currentLoop.item === 'object') {
      const itemValue = getNestedValue(currentLoop.item, fieldPath);
      if (itemValue !== undefined) {
        return itemValue;
      }
    }
  }

  // Look up in main data context
  return getNestedValue(ctx.data, fieldPath);
}

/**
 * Apply pipe operations to a value
 */
function applyPipes(
  value: unknown,
  pipes: Array<{ name: string; args: string[] }>,
  ctx: RenderContext
): unknown {
  const pipeContext: PipeContext = {
    currency: ctx.options.currency,
    locale: ctx.options.locale,
    data: ctx.data,
    loopStack: ctx.loopStack.map((l) => ({
      items: l.items,
      index: l.index,
      item: l.item,
    })),
  };

  let result = value;

  for (const pipe of pipes) {
    if (!pipeRegistry.has(pipe.name)) {
      ctx.warnings.push({
        type: 'unknown_pipe',
        message: `Unknown pipe: ${pipe.name}`,
        field: pipe.name,
      });
      continue;
    }

    try {
      result = pipeRegistry.execute(pipe.name, result, pipe.args, pipeContext);
    } catch (error) {
      ctx.errors.push({
        type: 'pipe',
        message: `Error in pipe ${pipe.name}: ${error instanceof Error ? error.message : String(error)}`,
        field: pipe.name,
      });
    }
  }

  return result;
}

// ============================================================================
// Block Processing (Loops, Conditionals, Expressions)
// ============================================================================

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Find matching closing tag for a block
 * Returns { index, length } so caller knows the full closing tag length
 */
function findClosingTag(
  template: string,
  startIndex: number,
  tagName: string
): { index: number; length: number } | null {
  let depth = 1;
  let pos = startIndex;

  // Patterns for nested blocks
  // Opening: {{#Field}} or {{^Field|Condition}}
  const openPattern = new RegExp(`\\{\\{[#^]${escapeRegex(tagName)}(?:\\|[^{}]+)?\\}\\}`, 'g');
  // Closing: {{/Field}} or {{/Field|Condition}} - Zuora includes pipe in closing tag
  const closePattern = new RegExp(`\\{\\{\\/${escapeRegex(tagName)}(?:\\|[^{}]+)?\\}\\}`, 'g');

  while (depth > 0 && pos < template.length) {
    openPattern.lastIndex = pos;
    closePattern.lastIndex = pos;

    const openMatches = template.substring(pos).match(openPattern);
    const closeMatches = template.substring(pos).match(closePattern);

    // Find first occurrence of each
    const openIdx = openMatches ? template.indexOf(openMatches[0], pos) : -1;
    const closeIdx = closeMatches ? template.indexOf(closeMatches[0], pos) : -1;

    if (closeIdx === -1) {
      // No closing tag found
      return null;
    }

    if (openIdx !== -1 && openIdx < closeIdx) {
      // Found another opening tag before close
      depth++;
      pos = openIdx + (openMatches?.[0]?.length || 1);
    } else {
      // Found closing tag
      depth--;
      if (depth === 0) {
        return { index: closeIdx, length: closeMatches![0].length };
      }
      pos = closeIdx + (closeMatches?.[0]?.length || 1);
    }
  }

  return null;
}

/**
 * Process a loop block
 */
function processLoop(
  template: string,
  fieldName: string,
  pipeStr: string | undefined,
  ctx: RenderContext
): { html: string; endIndex: number } {
  // Find the closing tag
  const startTagEnd = template.indexOf('}}') + 2;
  const closeResult = findClosingTag(template, startTagEnd, fieldName);

  if (!closeResult) {
    ctx.errors.push({
      type: 'loop',
      message: `Unclosed loop: {{#${fieldName}}}`,
      field: fieldName,
    });
    return { html: template, endIndex: template.length };
  }

  // Extract loop body
  const loopBody = template.substring(startTagEnd, closeResult.index);
  const closeTagEnd = closeResult.index + closeResult.length;

  // Get the array value
  const { field, pipes: additionalPipes } = parseFieldReference(
    pipeStr ? `${fieldName}|${pipeStr}` : fieldName
  );

  let items = resolveFieldValue(field, ctx);

  // Apply any pipes (like SortBy, FilterByValue)
  if (additionalPipes.length > 0 && field !== fieldName) {
    items = applyPipes(items, additionalPipes, ctx);
  }

  // Check if items is an array
  if (!Array.isArray(items)) {
    if (items === undefined || items === null) {
      ctx.warnings.push({
        type: 'empty_loop',
        message: `Loop field "${fieldName}" is empty or undefined`,
        field: fieldName,
      });
    }
    return { html: '', endIndex: closeTagEnd };
  }

  if (items.length === 0) {
    ctx.warnings.push({
      type: 'empty_loop',
      message: `Loop field "${fieldName}" is an empty array`,
      field: fieldName,
    });
    return { html: '', endIndex: closeTagEnd };
  }

  ctx.stats.loopsProcessed++;

  // Render each item
  const results: string[] = [];

  for (let i = 0; i < items.length; i++) {
    const loopContext: LoopContext = {
      items,
      index: i,
      item: items[i],
      key: fieldName,
    };

    ctx.loopStack.push(loopContext);

    try {
      const rendered = renderTemplate(loopBody, ctx);
      results.push(rendered);
    } finally {
      ctx.loopStack.pop();
    }
  }

  return { html: results.join(''), endIndex: closeTagEnd };
}

/**
 * Process a conditional block
 */
function processConditional(
  template: string,
  fieldName: string,
  conditionStr: string | undefined,
  ctx: RenderContext
): { html: string; endIndex: number } {
  // Find the closing tag
  const startTagEnd = template.indexOf('}}') + 2;
  const closeResult = findClosingTag(template, startTagEnd, fieldName);

  if (!closeResult) {
    ctx.errors.push({
      type: 'syntax',
      message: `Unclosed conditional: {{^${fieldName}}}`,
      field: fieldName,
    });
    return { html: template, endIndex: template.length };
  }

  // Extract conditional body
  const conditionalBody = template.substring(startTagEnd, closeResult.index);
  const closeTagEnd = closeResult.index + closeResult.length;

  // Evaluate condition
  const value = resolveFieldValue(fieldName, ctx);
  let conditionResult: boolean;

  if (conditionStr) {
    // Parse and apply condition pipe
    const { pipes } = parseFieldReference(`_|${conditionStr}`);
    if (pipes.length > 0) {
      const pipeResult = applyPipes(value, pipes, ctx);
      conditionResult = Boolean(pipeResult);
    } else {
      conditionResult = isEmptyValue(value);
    }
  } else {
    // Default: check if value is truthy
    conditionResult = !isEmptyValue(value);
  }

  ctx.stats.conditionalsProcessed++;

  // ^Field means "if field is empty/falsy, show content"
  // So we invert the condition
  if (!conditionResult) {
    return { html: renderTemplate(conditionalBody, ctx), endIndex: closeTagEnd };
  }

  return { html: '', endIndex: closeTagEnd };
}

/**
 * Process Wp_Eval expression blocks
 */
function processExpressions(template: string, ctx: RenderContext): string {
  return template.replace(WP_EVAL_PATTERN, (_match, expression) => {
    ctx.stats.expressionsProcessed++;

    try {
      const result = evaluateExpression(expression.trim(), {
        data: ctx.data,
        loopStack: ctx.loopStack,
        currency: ctx.options.currency,
      });
      return String(result ?? '');
    } catch (error) {
      ctx.warnings.push({
        type: 'expression_fallback',
        message: `Expression error: ${error instanceof Error ? error.message : String(error)}`,
      });
      return '[Expression Error]';
    }
  });
}

/**
 * Process Cmd_Assign variable assignments
 */
function processAssignments(template: string, ctx: RenderContext): string {
  return template.replace(CMD_ASSIGN_PATTERN, (_match, varName, expression) => {
    try {
      // First render any merge fields in the expression
      const renderedExpr = renderMergeFields(expression.trim(), ctx);

      // Try to evaluate as expression or use as literal
      let value: unknown;
      try {
        value = evaluateExpression(renderedExpr, {
          data: ctx.data,
          loopStack: ctx.loopStack,
          currency: ctx.options.currency,
        });
      } catch {
        // Use rendered value as-is
        value = renderedExpr;
      }

      // Store in data context for later use
      (ctx.data as Record<string, unknown>)[varName.trim()] = value;

      return ''; // Cmd_Assign produces no output
    } catch (error) {
      ctx.errors.push({
        type: 'expression',
        message: `Assignment error for ${varName}: ${error instanceof Error ? error.message : String(error)}`,
        field: varName,
      });
      return '';
    }
  });
}

// ============================================================================
// Main Rendering Logic
// ============================================================================

/**
 * Render simple merge fields (no loops/conditionals)
 */
function renderMergeFields(template: string, ctx: RenderContext): string {
  return template.replace(MERGE_FIELD_PATTERN, (match, content) => {
    const trimmed = content.trim();

    // Skip block markers (handled separately)
    if (trimmed.startsWith('#') || trimmed.startsWith('/') || trimmed.startsWith('^')) {
      return match;
    }

    ctx.stats.fieldsProcessed++;

    const { field, pipes } = parseFieldReference(trimmed);
    let value = resolveFieldValue(field, ctx);

    if (value === undefined) {
      if (ctx.options.showMissingFields) {
        ctx.warnings.push({
          type: 'missing_field',
          message: `Field not found: ${field}`,
          field,
        });
        return `[MISSING: ${field}]`;
      }
      return '';
    }

    // Apply pipes
    if (pipes.length > 0) {
      value = applyPipes(value, pipes, ctx);
    }

    // Convert to string
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'object') {
      return JSON.stringify(value);
    }

    return String(value);
  });
}

/**
 * Main template rendering helper
 */
function renderTemplate(template: string, ctx: RenderContext): string {
  let result = template;
  let pos = 0;
  let output = '';

  while (pos < result.length) {
    // Look for loop start
    const loopMatch = result.substring(pos).match(LOOP_START_PATTERN);
    // Look for conditional start
    const condMatch = result.substring(pos).match(CONDITIONAL_START_PATTERN);

    // Determine which comes first
    let nextBlockStart = -1;
    let blockType: 'loop' | 'conditional' | null = null;

    if (loopMatch && loopMatch.index !== undefined) {
      nextBlockStart = pos + loopMatch.index;
      blockType = 'loop';
    }

    if (condMatch && condMatch.index !== undefined) {
      const condStart = pos + condMatch.index;
      if (nextBlockStart === -1 || condStart < nextBlockStart) {
        nextBlockStart = condStart;
        blockType = 'conditional';
      }
    }

    if (blockType === null || nextBlockStart === -1) {
      // No more blocks, render remaining merge fields
      output += renderMergeFields(result.substring(pos), ctx);
      break;
    }

    // Render content before the block
    output += renderMergeFields(result.substring(pos, nextBlockStart), ctx);

    // Process the block
    const blockContent = result.substring(nextBlockStart);

    if (blockType === 'loop' && loopMatch) {
      const { html, endIndex } = processLoop(
        blockContent,
        loopMatch[1],
        loopMatch[2],
        ctx
      );
      output += html;
      pos = nextBlockStart + endIndex;
    } else if (blockType === 'conditional' && condMatch) {
      const { html, endIndex } = processConditional(
        blockContent,
        condMatch[1],
        condMatch[2],
        ctx
      );
      output += html;
      pos = nextBlockStart + endIndex;
    }
  }

  return output;
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Render a Zuora HTML template with the provided data
 */
export function render(
  template: string,
  data: Record<string, unknown>,
  options: RenderOptions = {}
): RenderResult {
  const ctx: RenderContext = {
    data: { ...data }, // Clone to allow Cmd_Assign modifications
    options: {
      currency: options.currency || 'USD',
      locale: options.locale,
      strictMode: options.strictMode || false,
      showMissingFields: options.showMissingFields ?? true,
    },
    loopStack: [],
    errors: [],
    warnings: [],
    stats: {
      fieldsProcessed: 0,
      loopsProcessed: 0,
      conditionalsProcessed: 0,
      expressionsProcessed: 0,
    },
  };

  try {
    // Process Cmd_Assign first (they set variables for later use)
    let processed = processAssignments(template, ctx);

    // Process Wp_Eval expressions
    processed = processExpressions(processed, ctx);

    // Render loops, conditionals, and merge fields
    const html = renderTemplate(processed, ctx);

    return {
      html,
      errors: ctx.errors,
      warnings: ctx.warnings,
      stats: ctx.stats,
    };
  } catch (error) {
    ctx.errors.push({
      type: 'syntax',
      message: `Rendering failed: ${error instanceof Error ? error.message : String(error)}`,
    });

    return {
      html: ctx.options.strictMode ? '' : template,
      errors: ctx.errors,
      warnings: ctx.warnings,
      stats: ctx.stats,
    };
  }
}

/**
 * Create a reusable renderer instance with preset options
 */
export class TemplateRenderer {
  private options: RenderOptions;

  constructor(options: RenderOptions = {}) {
    this.options = options;
  }

  render(template: string, data: Record<string, unknown>): RenderResult {
    return render(template, data, this.options);
  }

  setOption<K extends keyof RenderOptions>(key: K, value: RenderOptions[K]): void {
    this.options[key] = value;
  }

  getOptions(): RenderOptions {
    return { ...this.options };
  }
}
