import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  HTMLTemplateCodeOutput,
  validateHTMLTemplateCodeOutput,
  htmlTemplateCodeJsonSchema,
  DocumentType,
} from '../../types/html-template';
import { getDocContext } from '../../rag';
import { debugLog } from '../../config';

/**
 * RAG query to find relevant HTML template documentation
 */
async function getHTMLTemplateContext(description: string, documentType: DocumentType): Promise<string> {
  // Build a targeted query for HTML template merge field syntax
  const query = `Zuora HTML template merge fields ${description} ${documentType} syntax`;

  try {
    const context = await getDocContext(query, {
      limit: 6,
      minScore: 0.2,
      product: 'zuora-billing', // HTML templates are part of Zuora Billing
    });
    return context;
  } catch (error) {
    debugLog('RAG context retrieval failed:', error);
    return ''; // Continue without RAG context if unavailable
  }
}

/**
 * Build the user message for template code generation
 */
function buildUserMessage(
  description: string,
  documentType: DocumentType,
  existingCode?: string
): string {
  const parts = [
    `Document Type: ${documentType}`,
    '',
    'Request:',
    description,
  ];

  if (existingCode) {
    parts.push('', 'Existing Code for Reference:', '```html', existingCode, '```');
  }

  return parts.join('\n');
}

/**
 * Generate HTML template merge field code from natural language description
 *
 * @param description - Natural language description of what to display
 * @param documentType - Type of billing document (invoice, credit_memo, debit_memo)
 * @param existingCode - Optional existing code for context
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Generated template code with explanation
 */
export async function generateTemplateCode(
  description: string,
  documentType: DocumentType = 'invoice',
  existingCode?: string,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<HTMLTemplateCodeOutput> {
  debugLog('Generating HTML template code for:', description);

  // Load prompt and inject RAG context
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_CODE);
  const ragContext = await getHTMLTemplateContext(description, documentType);

  if (ragContext) {
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', ragContext);
  } else {
    // Remove placeholder if no RAG context available
    systemPrompt = systemPrompt.replace(
      /## REFERENCE DOCUMENTATION[\s\S]*?\{RAG_CONTEXT\}/,
      ''
    );
  }

  const userMessage = buildUserMessage(description, documentType, existingCode);

  const result = await complete<HTMLTemplateCodeOutput>({
    systemPrompt,
    userMessage,
    responseSchema: htmlTemplateCodeJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate template code: no structured output');
  }

  // Validate with Zod
  const validated = validateHTMLTemplateCodeOutput(result.structured);

  debugLog('Template code generated:', {
    objects: validated.objects_used,
    functions: validated.functions_used,
  });

  return validated;
}

/**
 * Format generated code for display
 */
export function formatTemplateCodeForDisplay(output: HTMLTemplateCodeOutput): string {
  const parts = [
    '## Generated Code',
    '',
    '```html',
    output.code,
    '```',
    '',
    '## Explanation',
    output.explanation,
    '',
  ];

  if (output.objects_used.length > 0) {
    parts.push('## Objects Used');
    parts.push(output.objects_used.map((o) => `- ${o}`).join('\n'));
    parts.push('');
  }

  if (output.functions_used.length > 0) {
    parts.push('## Functions Used');
    parts.push(output.functions_used.map((f) => `- ${f}`).join('\n'));
    parts.push('');
  }

  if (output.notes && output.notes.length > 0) {
    parts.push('## Notes');
    parts.push(output.notes.map((n) => `- ${n}`).join('\n'));
  }

  return parts.join('\n');
}
