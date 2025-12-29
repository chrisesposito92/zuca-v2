import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  GroupByWizardRequest,
  GroupByWizardOutput,
  validateGroupByWizardOutput,
  groupByWizardJsonSchema,
} from '../../types/html-template';
import { getDocContext } from '../../rag';
import { debugLog } from '../../config';

/**
 * RAG query to find relevant GroupBy documentation
 */
async function getGroupByContext(config: GroupByWizardRequest): Promise<string> {
  // Build a targeted query for GroupBy and related functions
  const groupFields = config.groupByFields.map((f) => f.field).join(' ');
  const query = `Zuora HTML template GroupBy function ${groupFields} subtotals Cmd_Assign FlatMap Sum`;

  try {
    const context = await getDocContext(query, {
      limit: 6,
      minScore: 0.2,
      product: 'zuora-billing',
    });
    return context;
  } catch (error) {
    debugLog('RAG context retrieval failed:', error);
    return '';
  }
}

/**
 * Build the user message from configuration
 */
function buildUserMessage(config: GroupByWizardRequest): string {
  const parts = [
    '## Configuration',
    '',
    `**Document Type**: ${config.documentType}`,
    `**Source List**: ${config.source}`,
    '',
    '### Group By Fields (in order):',
    ...config.groupByFields.map((f, i) =>
      `${i + 1}. \`${f.field}\`${f.label ? ` (label: "${f.label}")` : ''}`
    ),
    '',
  ];

  // Sort
  if (config.sortBy) {
    parts.push(
      '### Sort Before Grouping:',
      `- Field: \`${config.sortBy.field}\``,
      `- Direction: ${config.sortBy.direction}`,
      ''
    );
  }

  // Columns
  parts.push(
    '### Columns to Display:',
    ...config.columns.map((c) => {
      const opts = [];
      if (c.localise) opts.push('localise');
      if (c.decimals !== undefined) opts.push(`decimals: ${c.decimals}`);
      if (c.align !== 'left') opts.push(`align: ${c.align}`);
      const optStr = opts.length > 0 ? ` (${opts.join(', ')})` : '';
      return `- "${c.label}": \`${c.field}\`${optStr}`;
    }),
    ''
  );

  // Aggregations
  if (config.aggregations && config.aggregations.length > 0) {
    parts.push(
      '### Aggregations (Subtotals):',
      ...config.aggregations.map((a) => {
        const label = a.label || a.field;
        return `- ${a.type}(\`${a.field}\`) as "${label}" (${a.decimals} decimals, localise: ${a.localise})`;
      }),
      ''
    );
  }

  // Options
  parts.push('### Options:');
  parts.push(`- Include subtotals per group: ${config.includeSubtotals}`);
  parts.push(`- Include grand total: ${config.includeGrandTotal}`);
  parts.push('');

  // Additional description
  if (config.description) {
    parts.push(
      '### Additional Requirements:',
      config.description,
      ''
    );
  }

  parts.push(
    '## Task',
    '',
    'Generate the complete HTML and merge field code for this GroupBy configuration.',
    'Use proper Cmd_Assign variables for nested group access.',
    'Include subtotal rows using Sum (and FlatMap where needed for parent-level totals).',
    'Format numbers with Round and Localise as specified.',
    'Use semantic HTML table structure (thead, tbody).'
  );

  return parts.join('\n');
}

/**
 * Generate GroupBy template code from wizard configuration
 *
 * @param config - GroupBy wizard configuration
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Generated GroupBy code with explanation
 */
export async function generateGroupByCode(
  config: GroupByWizardRequest,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<GroupByWizardOutput> {
  debugLog('Generating GroupBy template code for:', config);

  // Load prompt and inject RAG context
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_GROUPBY);
  const ragContext = await getGroupByContext(config);

  if (ragContext) {
    systemPrompt = systemPrompt.replace('{RAG_CONTEXT}', ragContext);
  } else {
    systemPrompt = systemPrompt.replace(
      /## REFERENCE DOCUMENTATION[\s\S]*?\{RAG_CONTEXT\}/,
      ''
    );
  }

  const userMessage = buildUserMessage(config);

  const result = await complete<GroupByWizardOutput>({
    systemPrompt,
    userMessage,
    responseSchema: groupByWizardJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate GroupBy code: no structured output');
  }

  // Validate with Zod
  const validated = validateGroupByWizardOutput(result.structured);

  debugLog('GroupBy code generated:', {
    variables: validated.variables.map((v) => v.name),
    functions: validated.functions_used,
  });

  return validated;
}

/**
 * Format GroupBy output for display
 */
export function formatGroupByForDisplay(output: GroupByWizardOutput): string {
  const parts = [
    '## Generated GroupBy Code',
    '',
    '```html',
    output.code,
    '```',
    '',
    '## How It Works',
    output.explanation,
    '',
  ];

  if (output.variables.length > 0) {
    parts.push('## Variables Used');
    parts.push(
      output.variables.map((v) => `- **${v.name}**: ${v.purpose}`).join('\n')
    );
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

  if (output.customization_tips.length > 0) {
    parts.push('## Customization Tips');
    parts.push(output.customization_tips.map((t) => `- ${t}`).join('\n'));
  }

  return parts.join('\n');
}
