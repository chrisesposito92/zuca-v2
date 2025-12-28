import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  HTMLTemplateExpressionOutput,
  validateHTMLTemplateExpressionOutput,
  htmlTemplateExpressionJsonSchema,
} from '../../types/html-template';
import { getDocContext } from '../../rag';
import { debugLog } from '../../config';

/**
 * RAG query to find relevant expression documentation
 */
async function getExpressionContext(description: string): Promise<string> {
  // Build a targeted query for Wp_Eval expressions and JEXL syntax
  const query = `Zuora Wp_Eval expression JEXL ${description}`;

  try {
    const context = await getDocContext(query, {
      limit: 5,
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
 * Build the user message for expression generation
 */
function buildUserMessage(description: string, context?: string): string {
  const parts = ['Request:', description];

  if (context) {
    parts.push('', 'Additional Context:', context);
  }

  return parts.join('\n');
}

/**
 * Generate a Wp_Eval expression from natural language description
 *
 * @param description - Natural language description of the calculation/logic
 * @param additionalContext - Optional context (e.g., "inside InvoiceItems loop")
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Generated expression with explanation
 */
export async function generateExpression(
  description: string,
  additionalContext?: string,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<HTMLTemplateExpressionOutput> {
  debugLog('Generating Wp_Eval expression for:', description);

  // Load prompt and inject RAG context
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_EXPRESSION);
  const ragContext = await getExpressionContext(description);

  if (ragContext) {
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', ragContext);
  } else {
    // Remove placeholder if no RAG context available
    systemPrompt = systemPrompt.replace(
      /## REFERENCE DOCUMENTATION[\s\S]*?\{RAG_CONTEXT\}/,
      ''
    );
  }

  const userMessage = buildUserMessage(description, additionalContext);

  const result = await complete<HTMLTemplateExpressionOutput>({
    systemPrompt,
    userMessage,
    responseSchema: htmlTemplateExpressionJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate expression: no structured output');
  }

  // Validate with Zod
  const validated = validateHTMLTemplateExpressionOutput(result.structured);

  debugLog('Expression generated:', {
    inputFields: validated.input_fields,
    outputType: validated.output_type,
  });

  return validated;
}

/**
 * Format generated expression for display
 */
export function formatExpressionForDisplay(output: HTMLTemplateExpressionOutput): string {
  const parts = [
    '## Generated Expression',
    '',
    '```html',
    output.expression,
    '```',
    '',
    '## Explanation',
    output.explanation,
    '',
    '## Input Fields',
    output.input_fields.map((f) => `- \`${f}\``).join('\n'),
    '',
    `## Output Type: \`${output.output_type}\``,
  ];

  if (output.examples && output.examples.length > 0) {
    parts.push('', '## Examples');
    for (const ex of output.examples) {
      const inputs = ex.input_values.map((pair) => `${pair.field}=${pair.value}`).join(', ');
      parts.push(`- Input: { ${inputs} } → Output: \`${ex.output}\``);
    }
  }

  return parts.join('\n');
}
