import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  ValidationIssue,
  ValidationSummary,
  TemplateValidationOutput,
  templateValidationJsonSchema,
  DocumentType,
} from '../../types/html-template';
import { getDocContext } from '../../rag';
import { debugLog } from '../../config';

// ============================================================================
// CODE-BASED STRUCTURAL VALIDATION
// ============================================================================

/**
 * Parse template and find all merge fields, sections, and functions
 */
interface ParsedTemplate {
  mergeFields: Array<{ field: string; line: number; column: number }>;
  sections: Array<{
    type: 'open' | 'close' | 'inverted';
    name: string;
    line: number;
    column: number;
    full: string;
  }>;
  functions: Array<{ name: string; line: number; column: number }>;
  wpEvalBlocks: Array<{ content: string; line: number; column: number }>;
}

/**
 * Parse template into structured components
 */
function parseTemplate(template: string): ParsedTemplate {
  const lines = template.split('\n');
  const result: ParsedTemplate = {
    mergeFields: [],
    sections: [],
    functions: [],
    wpEvalBlocks: [],
  };

  // Regex patterns
  const mergeFieldPattern = /\{\{([^{}]+)\}\}/g;
  const sectionOpenPattern = /\{\{#([^|}]+)(?:\|[^}]+)?\}\}/g;
  const sectionClosePattern = /\{\{\/([^|}]+)(?:\|[^}]+)?\}\}/g;
  const invertedSectionPattern = /\{\{\^([^|}]+)(?:\|[^}]+)?\}\}/g;
  const functionPattern = /\|([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
  const wpEvalPattern = /\{\{#Wp_Eval\}\}([\s\S]*?)\{\{\/Wp_Eval\}\}/g;

  lines.forEach((line, lineIndex) => {
    const lineNum = lineIndex + 1;

    // Find all merge fields
    let match;
    while ((match = mergeFieldPattern.exec(line)) !== null) {
      result.mergeFields.push({
        field: match[1],
        line: lineNum,
        column: match.index + 1,
      });
    }

    // Reset regex lastIndex
    mergeFieldPattern.lastIndex = 0;

    // Find section opens
    while ((match = sectionOpenPattern.exec(line)) !== null) {
      result.sections.push({
        type: 'open',
        name: match[1],
        line: lineNum,
        column: match.index + 1,
        full: match[0],
      });
    }
    sectionOpenPattern.lastIndex = 0;

    // Find section closes
    while ((match = sectionClosePattern.exec(line)) !== null) {
      result.sections.push({
        type: 'close',
        name: match[1],
        line: lineNum,
        column: match.index + 1,
        full: match[0],
      });
    }
    sectionClosePattern.lastIndex = 0;

    // Find inverted sections
    while ((match = invertedSectionPattern.exec(line)) !== null) {
      result.sections.push({
        type: 'inverted',
        name: match[1],
        line: lineNum,
        column: match.index + 1,
        full: match[0],
      });
    }
    invertedSectionPattern.lastIndex = 0;

    // Find functions
    while ((match = functionPattern.exec(line)) !== null) {
      result.functions.push({
        name: match[1],
        line: lineNum,
        column: match.index + 1,
      });
    }
    functionPattern.lastIndex = 0;
  });

  // Find Wp_Eval blocks (multi-line)
  let wpMatch;
  while ((wpMatch = wpEvalPattern.exec(template)) !== null) {
    const beforeMatch = template.substring(0, wpMatch.index);
    const lineNum = beforeMatch.split('\n').length;
    result.wpEvalBlocks.push({
      content: wpMatch[1],
      line: lineNum,
      column: 1,
    });
  }

  return result;
}

/**
 * Validate structural syntax issues (fast, code-based)
 */
function validateStructure(template: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const lines = template.split('\n');
  const parsed = parseTemplate(template);

  // Check for malformed merge fields
  lines.forEach((line, lineIndex) => {
    const lineNum = lineIndex + 1;

    // Check for unclosed braces: {{ without }}
    const openBraces = (line.match(/\{\{/g) || []).length;
    const closeBraces = (line.match(/\}\}/g) || []).length;

    if (openBraces > closeBraces) {
      issues.push({
        severity: 'error',
        category: 'syntax',
        line: lineNum,
        column: line.indexOf('{{') + 1,
        code_snippet: line.trim(),
        message: 'Unclosed merge field: missing }}',
        suggestion: 'Add closing braces }} to complete the merge field',
      });
    } else if (closeBraces > openBraces) {
      issues.push({
        severity: 'error',
        category: 'syntax',
        line: lineNum,
        column: line.indexOf('}}') + 1,
        code_snippet: line.trim(),
        message: 'Unexpected closing braces: }} without matching {{',
        suggestion: 'Add opening braces {{ or remove the extra }}',
      });
    }

    // Check for empty merge fields
    if (line.includes('{{}}')) {
      issues.push({
        severity: 'error',
        category: 'syntax',
        line: lineNum,
        column: line.indexOf('{{}}') + 1,
        code_snippet: '{{}}',
        message: 'Empty merge field',
        suggestion: 'Add a field name inside the braces: {{FieldName}}',
      });
    }

    // Check for single braces (common typo)
    const singleOpenPattern = /(?<!\{)\{(?!\{)/g;

    if (
      singleOpenPattern.test(line) &&
      !line.includes('style=') &&
      !line.includes('class=')
    ) {
      // Ignore CSS/JS braces
      const match = line.match(/(?<!\{)\{(?!\{)/);
      if (match && !isInsideHtmlAttribute(line, match.index!)) {
        issues.push({
          severity: 'warning',
          category: 'syntax',
          line: lineNum,
          column: match.index! + 1,
          code_snippet: line.substring(
            Math.max(0, match.index! - 10),
            match.index! + 10
          ),
          message: 'Single brace found - did you mean {{?',
          suggestion: 'Use double braces {{ for merge fields',
        });
      }
    }
  });

  // Check for unclosed sections
  const sectionStack: Array<{
    name: string;
    line: number;
    type: 'open' | 'inverted';
  }> = [];

  for (const section of parsed.sections) {
    if (section.type === 'open' || section.type === 'inverted') {
      sectionStack.push({
        name: section.name,
        line: section.line,
        type: section.type,
      });
    } else if (section.type === 'close') {
      if (sectionStack.length === 0) {
        issues.push({
          severity: 'error',
          category: 'section',
          line: section.line,
          column: section.column,
          code_snippet: section.full,
          message: `Closing section {{/${section.name}}} without matching opening`,
          suggestion: `Add {{#${section.name}}} or {{^${section.name}}} before this`,
        });
      } else {
        const lastOpen = sectionStack.pop()!;
        if (lastOpen.name !== section.name) {
          issues.push({
            severity: 'error',
            category: 'section',
            line: section.line,
            column: section.column,
            code_snippet: section.full,
            message: `Section mismatch: closing {{/${section.name}}} but last opened was {{#${lastOpen.name}}} on line ${lastOpen.line}`,
            suggestion: `Either change to {{/${lastOpen.name}}} or add {{/${lastOpen.name}}} before this`,
          });
        }
      }
    }
  }

  // Report any unclosed sections
  for (const unclosed of sectionStack) {
    issues.push({
      severity: 'error',
      category: 'section',
      line: unclosed.line,
      column: 1,
      code_snippet: `{{${unclosed.type === 'inverted' ? '^' : '#'}${unclosed.name}}}`,
      message: `Unclosed section: ${unclosed.name} opened but never closed`,
      suggestion: `Add {{/${unclosed.name}}} after the section content`,
    });
  }

  // Check for function syntax issues
  for (const field of parsed.mergeFields) {
    const fieldContent = field.field;

    // Check for function without parentheses (e.g., |Round instead of |Round(2))
    const funcWithoutParens = fieldContent.match(
      /\|([A-Za-z]+)(?!\s*\(|\|)(?:\s*$|\s*\|)/
    );
    if (funcWithoutParens) {
      const funcName = funcWithoutParens[1];
      // Skip functions that don't need parentheses
      const noParensFunctions = [
        'Localise',
        'Symbol',
        'IsEmpty',
        'IsBlank',
        'Fn_Today',
      ];
      if (!noParensFunctions.includes(funcName)) {
        issues.push({
          severity: 'warning',
          category: 'function',
          line: field.line,
          column: field.column,
          code_snippet: `{{${fieldContent}}}`,
          message: `Function ${funcName} may be missing parentheses`,
          suggestion: `Use ${funcName}(...) with appropriate arguments`,
        });
      }
    }

    // Check for missing pipe before function
    const missingPipe = fieldContent.match(
      /([A-Za-z0-9_]+)(Round|Localise|Sum|GroupBy|SortBy|FilterBy)/
    );
    if (missingPipe && !fieldContent.includes('|' + missingPipe[2])) {
      issues.push({
        severity: 'error',
        category: 'syntax',
        line: field.line,
        column: field.column,
        code_snippet: `{{${fieldContent}}}`,
        message: `Missing pipe (|) before function ${missingPipe[2]}`,
        suggestion: `Use {{${missingPipe[1]}|${missingPipe[2]}...}}`,
      });
    }
  }

  return issues;
}

/**
 * Helper: Check if position is inside an HTML attribute
 */
function isInsideHtmlAttribute(line: string, position: number): boolean {
  // Simple check: are we between quotes after an = sign?
  const before = line.substring(0, position);
  const afterEquals = before.lastIndexOf('=');
  if (afterEquals === -1) return false;

  const afterEqualsStr = before.substring(afterEquals);
  const quoteCount = (afterEqualsStr.match(/["']/g) || []).length;
  return quoteCount % 2 === 1; // Inside quotes if odd number
}

// ============================================================================
// LLM SEMANTIC VALIDATION
// ============================================================================

/**
 * RAG query for validation context
 */
async function getValidationContext(template: string): Promise<string> {
  // Extract key terms from template for targeted RAG
  const objects = template.match(
    /\{\{#?(Invoice|Account|BillTo|SoldTo|InvoiceItems?|Payment|Subscription|TaxationItem)/gi
  );
  const objectTerms = objects ? [...new Set(objects)].join(' ') : '';

  const query = `Zuora HTML template merge fields validation ${objectTerms} syntax reference`;

  try {
    const context = await getDocContext(query, {
      limit: 4,
      minScore: 0.2,
      product: 'zuora-billing',
    });
    return context;
  } catch (error) {
    debugLog('RAG context for validation failed:', error);
    return '';
  }
}

/**
 * LLM semantic validation response
 */
interface LLMValidationResponse {
  issues: Array<{
    severity: 'error' | 'warning' | 'suggestion';
    category:
      | 'syntax'
      | 'section'
      | 'object_path'
      | 'function'
      | 'expression'
      | 'best_practice';
    line: number | null;
    column: number | null;
    code_snippet: string;
    message: string;
    suggestion: string | null;
  }>;
  objects_detected: string[];
  functions_detected: string[];
}

/**
 * Perform semantic validation with LLM
 */
async function validateSemantically(
  template: string,
  documentType: DocumentType,
  reasoningEffort: ReasoningEffort,
  model?: LlmModel
): Promise<LLMValidationResponse> {
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_VALIDATOR);
  const ragContext = await getValidationContext(template);

  if (ragContext) {
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', ragContext);
  } else {
    systemPrompt = systemPrompt.replace(
      /## REFERENCE DOCUMENTATION[\s\S]*?\{RAG_CONTEXT\}/,
      ''
    );
  }

  const userMessage = [
    `Document Type: ${documentType}`,
    '',
    'Template to validate:',
    '```html',
    template,
    '```',
    '',
    'Analyze this template for errors, warnings, and improvement suggestions.',
    'Include line numbers where possible.',
    'Focus on object path validity, function usage, and best practices.',
  ].join('\n');

  const result = await complete<LLMValidationResponse>({
    systemPrompt,
    userMessage,
    responseSchema: templateValidationJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to validate template: no structured output');
  }

  return result.structured;
}

// ============================================================================
// MAIN VALIDATION FUNCTION
// ============================================================================

/**
 * Validate HTML template code for errors, warnings, and suggestions
 *
 * Uses hybrid approach:
 * 1. Code-based parsing for structural/syntax issues (fast, precise)
 * 2. LLM analysis for semantic validation (object paths, best practices)
 *
 * @param template - Template code to validate
 * @param documentType - Type of billing document
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Validation output with issues and summary
 */
export async function validateTemplate(
  template: string,
  documentType: DocumentType = 'invoice',
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<TemplateValidationOutput> {
  debugLog('Validating HTML template, length:', template.length);

  // Step 1: Code-based structural validation (fast)
  const structuralIssues = validateStructure(template);
  debugLog('Structural issues found:', structuralIssues.length);

  // Step 2: LLM semantic validation
  let llmResult: LLMValidationResponse;
  try {
    llmResult = await validateSemantically(
      template,
      documentType,
      reasoningEffort,
      model
    );
    debugLog('LLM issues found:', llmResult.issues.length);
  } catch (error) {
    debugLog('LLM validation failed, using structural only:', error);
    llmResult = {
      issues: [],
      objects_detected: [],
      functions_detected: [],
    };
  }

  // Step 3: Merge issues (deduplicate)
  const allIssues = mergeIssues(structuralIssues, llmResult.issues);

  // Step 4: Build summary
  const summary = buildSummary(allIssues, llmResult);

  debugLog('Validation complete:', {
    totalIssues: summary.total_issues,
    isValid: summary.is_valid,
  });

  return {
    issues: allIssues,
    summary,
  };
}

/**
 * Merge structural and LLM issues, deduplicating by line and message similarity
 */
function mergeIssues(
  structuralIssues: ValidationIssue[],
  llmIssues: Array<{
    severity: 'error' | 'warning' | 'suggestion';
    category:
      | 'syntax'
      | 'section'
      | 'object_path'
      | 'function'
      | 'expression'
      | 'best_practice';
    line: number | null;
    column: number | null;
    code_snippet: string;
    message: string;
    suggestion: string | null;
  }>
): ValidationIssue[] {
  const merged: ValidationIssue[] = [...structuralIssues];
  const structuralKeys = new Set(
    structuralIssues.map((i) => `${i.line}:${i.category}:${i.message.slice(0, 30)}`)
  );

  for (const llmIssue of llmIssues) {
    const key = `${llmIssue.line}:${llmIssue.category}:${llmIssue.message.slice(0, 30)}`;

    // Skip if structural validation already caught this
    if (!structuralKeys.has(key)) {
      merged.push({
        severity: llmIssue.severity,
        category: llmIssue.category,
        line: llmIssue.line,
        column: llmIssue.column,
        code_snippet: llmIssue.code_snippet,
        message: llmIssue.message,
        suggestion: llmIssue.suggestion,
      });
    }
  }

  // Sort by severity (errors first), then by line number
  return merged.sort((a, b) => {
    const severityOrder = { error: 0, warning: 1, suggestion: 2 };
    const sevDiff = severityOrder[a.severity] - severityOrder[b.severity];
    if (sevDiff !== 0) return sevDiff;
    return (a.line ?? 999) - (b.line ?? 999);
  });
}

/**
 * Build summary statistics
 */
function buildSummary(
  issues: ValidationIssue[],
  llmResult: LLMValidationResponse
): ValidationSummary {
  const errors = issues.filter((i) => i.severity === 'error').length;
  const warnings = issues.filter((i) => i.severity === 'warning').length;
  const suggestions = issues.filter((i) => i.severity === 'suggestion').length;

  return {
    total_issues: issues.length,
    errors,
    warnings,
    suggestions,
    is_valid: errors === 0,
    objects_detected: llmResult.objects_detected,
    functions_detected: llmResult.functions_detected,
  };
}

/**
 * Format validation results for display
 */
export function formatValidationForDisplay(
  output: TemplateValidationOutput
): string {
  const parts: string[] = [];

  // Overall status
  if (output.summary.is_valid) {
    parts.push('## Template Valid');
    parts.push('');
    parts.push('No critical errors found.');
  } else {
    parts.push('## Template Has Errors');
    parts.push('');
    parts.push(
      `Found ${output.summary.errors} error(s) that must be fixed.`
    );
  }

  parts.push('');
  parts.push('---');
  parts.push('');

  // Issues by severity
  const errors = output.issues.filter((i) => i.severity === 'error');
  const warnings = output.issues.filter((i) => i.severity === 'warning');
  const suggestions = output.issues.filter((i) => i.severity === 'suggestion');

  if (errors.length > 0) {
    parts.push('## Errors');
    parts.push('');
    for (const issue of errors) {
      parts.push(formatIssue(issue));
    }
  }

  if (warnings.length > 0) {
    parts.push('## Warnings');
    parts.push('');
    for (const issue of warnings) {
      parts.push(formatIssue(issue));
    }
  }

  if (suggestions.length > 0) {
    parts.push('## Suggestions');
    parts.push('');
    for (const issue of suggestions) {
      parts.push(formatIssue(issue));
    }
  }

  // Summary
  parts.push('---');
  parts.push('');
  parts.push('## Summary');
  parts.push('');
  parts.push(`- **Total Issues**: ${output.summary.total_issues}`);
  parts.push(`- **Errors**: ${output.summary.errors}`);
  parts.push(`- **Warnings**: ${output.summary.warnings}`);
  parts.push(`- **Suggestions**: ${output.summary.suggestions}`);

  if (output.summary.objects_detected.length > 0) {
    parts.push('');
    parts.push('**Objects Detected:**');
    parts.push(output.summary.objects_detected.map((o) => `- ${o}`).join('\n'));
  }

  if (output.summary.functions_detected.length > 0) {
    parts.push('');
    parts.push('**Functions Detected:**');
    parts.push(
      output.summary.functions_detected.map((f) => `- ${f}`).join('\n')
    );
  }

  return parts.join('\n');
}

/**
 * Format a single issue for display
 */
function formatIssue(issue: ValidationIssue): string {
  const lines: string[] = [];
  const location = issue.line ? `Line ${issue.line}` : 'General';

  lines.push(`### ${location}: ${issue.message}`);
  lines.push('');
  lines.push('```');
  lines.push(issue.code_snippet);
  lines.push('```');

  if (issue.suggestion) {
    lines.push('');
    lines.push(`**Fix:** ${issue.suggestion}`);
  }

  lines.push('');

  return lines.join('\n');
}
