import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  TemplateDesignRequest,
  TemplateDesignOutput,
  templateDesignJsonSchema,
  validateTemplateDesignOutput,
} from '../../types/html-template';
import { getDocContext } from '../../rag';
import { debugLog } from '../../config';

/**
 * RAG query to find relevant HTML template documentation
 */
async function getHTMLTemplateContext(description: string, industry: string): Promise<string> {
  // Build a targeted query for HTML template documentation
  const query = `Zuora HTML template invoice ${industry} merge fields syntax ${description}`;

  try {
    const context = await getDocContext(query, {
      limit: 8,
      minScore: 0.2,
      product: 'zuora-billing',
    });
    return context;
  } catch (error) {
    debugLog('RAG context retrieval failed:', error);
    return ''; // Continue without RAG context if unavailable
  }
}

/**
 * Build the user message from template design request
 */
function buildUserMessage(request: TemplateDesignRequest): string {
  const parts = [
    '## Requirements',
    '',
    request.description,
    '',
    '## Configuration',
    '',
    `- **Document Type**: ${request.documentType}`,
    `- **Industry**: ${request.industry}`,
    `- **Style**: ${request.style}`,
    `- **Currency**: ${request.currency}`,
  ];

  // Add section configuration if provided
  if (request.sections) {
    parts.push('', '### Section Requirements:');
    const s = request.sections;
    if (s.companyBranding !== undefined) parts.push(`- Company Branding: ${s.companyBranding ? 'Yes' : 'No'}`);
    if (s.invoiceHeader !== undefined) parts.push(`- Invoice Header: ${s.invoiceHeader ? 'Yes' : 'No'}`);
    if (s.customerInfo !== undefined) parts.push(`- Customer Info: ${s.customerInfo ? 'Yes' : 'No'}`);
    if (s.lineItemsTable !== undefined) parts.push(`- Line Items Table: ${s.lineItemsTable ? 'Yes' : 'No'}`);
    if (s.groupByEnabled) {
      parts.push(`- GroupBy: Enabled (field: ${s.groupByField || 'Subscription.Name'})`);
    }
    if (s.taxSummary !== undefined) parts.push(`- Tax Summary: ${s.taxSummary ? 'Yes' : 'No'}`);
    if (s.paymentInfo !== undefined) parts.push(`- Payment Info: ${s.paymentInfo ? 'Yes' : 'No'}`);
    if (s.footer !== undefined) parts.push(`- Footer: ${s.footer ? 'Yes' : 'No'}`);
  }

  // Add color configuration if provided
  if (request.colors) {
    parts.push('', '### Custom Colors:');
    if (request.colors.primary) parts.push(`- Primary: ${request.colors.primary}`);
    if (request.colors.secondary) parts.push(`- Secondary: ${request.colors.secondary}`);
    if (request.colors.accent) parts.push(`- Accent: ${request.colors.accent}`);
  }

  parts.push('', '## Task', '');
  parts.push('Generate a complete, production-ready HTML invoice template that:');
  parts.push('1. Includes proper HTML5 doctype and structure');
  parts.push('2. Uses inline CSS matching the specified style');
  parts.push('3. Incorporates all requested sections');
  parts.push('4. Uses appropriate merge fields for the document type');
  parts.push('5. Applies industry-specific customizations');
  parts.push('6. Is print-optimized and responsive');

  return parts.join('\n');
}

/**
 * Generate a complete HTML template from natural language description
 *
 * @param request - Template design request configuration
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Complete HTML template with metadata
 */
export async function generateTemplateDesign(
  request: TemplateDesignRequest,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<TemplateDesignOutput> {
  debugLog('Generating template design for:', {
    industry: request.industry,
    style: request.style,
    documentType: request.documentType,
  });

  // Load prompt and inject RAG context
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_DESIGN);
  const ragContext = await getHTMLTemplateContext(request.description, request.industry);

  if (ragContext) {
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', ragContext);
  } else {
    // Remove placeholder if no RAG context available
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', '');
  }

  const userMessage = buildUserMessage(request);

  const result = await complete<TemplateDesignOutput>({
    systemPrompt,
    userMessage,
    responseSchema: templateDesignJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate template design: no structured output');
  }

  // Validate with Zod
  const validated = validateTemplateDesignOutput(result.structured);

  debugLog('Template design generated:', {
    htmlLength: validated.html.length,
    sectionsIncluded: validated.sections_included,
    objectsUsed: validated.objects_used,
    functionsUsed: validated.functions_used,
  });

  return validated;
}

/**
 * Format template design output for display
 */
export function formatTemplateDesignForDisplay(output: TemplateDesignOutput): string {
  const parts = [
    '## Generated Template',
    '',
    '```html',
    output.html,
    '```',
    '',
    '## Design Explanation',
    output.explanation,
    '',
  ];

  if (output.sections_included.length > 0) {
    parts.push('## Sections Included');
    parts.push(output.sections_included.map((s) => `- ${s}`).join('\n'));
    parts.push('');
  }

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

  if (output.industry_customizations.length > 0) {
    parts.push('## Industry Customizations');
    parts.push(output.industry_customizations.map((c) => `- ${c}`).join('\n'));
    parts.push('');
  }

  if (output.customization_suggestions.length > 0) {
    parts.push('## Customization Suggestions');
    parts.push(output.customization_suggestions.map((s) => `- ${s}`).join('\n'));
  }

  return parts.join('\n');
}
