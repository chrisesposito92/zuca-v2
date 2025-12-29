import { complete, ReasoningEffort } from '../../llm/client';
import type { LlmModel } from '../../types/llm';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import {
  SampleDataRequest,
  SampleDataOutput,
  sampleDataJsonSchema,
  ExtractedField,
} from '../../types/html-template';
import { parseTemplateMergeFields, groupFieldsByObject } from './html-template-parser';
import { debugLog } from '../../config';

/**
 * Build the user message from extracted fields and configuration
 */
function buildUserMessage(
  config: SampleDataRequest,
  fields: ExtractedField[],
  lists: string[],
  rootObjects: string[]
): string {
  const parts = [
    '## Configuration',
    '',
    '**Document Type**: ' + config.documentType,
    '**Industry**: ' + config.industry,
    '**Currency**: ' + config.currency,
    '**Number of Items**: ' + config.itemCount,
  ];

  if (config.companyName) {
    parts.push('**Company Name**: ' + config.companyName);
  }

  parts.push('', '## Detected Template Structure', '');

  // Root objects
  if (rootObjects.length > 0) {
    parts.push('### Root Objects:');
    parts.push(rootObjects.map((o) => '- ' + o).join('\n'));
    parts.push('');
  }

  // Lists/loops
  if (lists.length > 0) {
    parts.push('### Lists/Loops (generate items for these):');
    parts.push(lists.map((l) => '- ' + l + ' (generate ' + config.itemCount + ' items)').join('\n'));
    parts.push('');
  }

  // Group fields by context
  const grouped = groupFieldsByObject(fields);

  parts.push('### Fields by Context:');
  for (const [context, contextFields] of Object.entries(grouped)) {
    parts.push('\n**' + context + '**:');
    for (const field of contextFields) {
      const funcs = field.functions.length > 0 ? ' [' + field.functions.join(', ') + ']' : '';
      parts.push('- `' + field.path + '` (' + field.type + ')' + funcs);
    }
  }

  parts.push('', '## Task', '');
  parts.push('Generate realistic sample data that includes all detected fields and lists.');
  parts.push('Generate exactly ' + config.itemCount + ' items for each list/array.');
  parts.push('Ensure numeric totals are consistent (Invoice.Amount = sum of ChargeAmounts, etc.).');
  parts.push('Use the specified industry context for realistic naming and pricing.');

  return parts.join('\n');
}

/**
 * Generate sample data for an HTML template
 *
 * @param config - Sample data generation configuration
 * @param reasoningEffort - LLM reasoning effort level
 * @param model - Optional model override
 * @returns Generated sample data with metadata
 */
export async function generateSampleData(
  config: SampleDataRequest,
  reasoningEffort: ReasoningEffort = 'medium',
  model?: LlmModel
): Promise<SampleDataOutput> {
  debugLog('Generating sample data for template:', {
    industry: config.industry,
    itemCount: config.itemCount,
    templateLength: config.template.length,
  });

  // Parse template to extract fields
  const { fields, lists, rootObjects } = parseTemplateMergeFields(config.template);

  debugLog('Template parsing results:', {
    fieldsCount: fields.length,
    lists,
    rootObjects,
  });

  // If no fields detected, return minimal sample data
  if (fields.length === 0 && lists.length === 0) {
    return {
      data: {
        Invoice: {
          InvoiceNumber: 'INV-00001234',
          InvoiceDate: new Date().toISOString().split('T')[0],
          Amount: 0,
          Currency: config.currency,
        },
      },
      fields_extracted: [],
      lists_detected: [],
      notes: ['No merge fields detected in template. Generated minimal sample data.'],
      industry: config.industry || 'general',
      currency: config.currency,
    };
  }

  // Load prompt
  let systemPrompt = await loadPrompt(PROMPTS.HTML_TEMPLATE_SAMPLE_DATA);

  // Remove RAG placeholder (not using RAG for sample data generation)
  systemPrompt = systemPrompt.replace(
    /\{RAG_CONTEXT\}/,
    ''
  );

  const userMessage = buildUserMessage(config, fields, lists, rootObjects);

  const result = await complete<{ data_json: string; notes: string[] }>({
    systemPrompt,
    userMessage,
    responseSchema: sampleDataJsonSchema,
    reasoningEffort,
    model,
  });

  if (!result.structured) {
    throw new Error('Failed to generate sample data: no structured output');
  }

  // Parse the JSON string into an object
  let parsedData: Record<string, unknown>;
  try {
    parsedData = JSON.parse(result.structured.data_json);
  } catch (parseError) {
    debugLog('Failed to parse data_json:', result.structured.data_json);
    throw new Error(`Failed to parse generated sample data: ${parseError instanceof Error ? parseError.message : 'Invalid JSON'}`);
  }

  // Build the final output
  const output: SampleDataOutput = {
    data: parsedData,
    fields_extracted: fields,
    lists_detected: lists,
    notes: result.structured.notes,
    industry: config.industry || 'general',
    currency: config.currency,
  };

  debugLog('Sample data generated:', {
    dataKeys: Object.keys(output.data),
    notesCount: output.notes.length,
  });

  return output;
}

/**
 * Format sample data output for display
 */
export function formatSampleDataForDisplay(output: SampleDataOutput): string {
  const parts = [
    '## Generated Sample Data',
    '',
    '```json',
    JSON.stringify(output.data, null, 2),
    '```',
    '',
  ];

  if (output.fields_extracted.length > 0) {
    parts.push('## Fields Extracted');
    parts.push('Found ' + output.fields_extracted.length + ' merge fields in template.');
    parts.push('');
  }

  if (output.lists_detected.length > 0) {
    parts.push('## Lists Detected');
    parts.push(output.lists_detected.map((l) => '- ' + l).join('\n'));
    parts.push('');
  }

  if (output.notes.length > 0) {
    parts.push('## Notes');
    parts.push(output.notes.map((n) => '- ' + n).join('\n'));
  }

  return parts.join('\n');
}
