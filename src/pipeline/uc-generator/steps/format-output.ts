/**
 * UC Generator Step 3: Format Final Output
 *
 * Takes generated use cases and formats them as human-readable markdown
 * with JSON code blocks for copy-paste into ZUCA.
 */

import { complete, ReasoningEffort } from '../../../llm/client';
import { loadPrompt, PROMPTS } from '../../../llm/prompts/index';
import { GeneratedUseCases, GeneratedUseCase } from '../../../types/uc-generator';
import { debugLog } from '../../../config';
import { formatUseCasesForOutput } from './generate-use-cases';

/**
 * Execute the Format Output step
 *
 * Converts structured use cases into human-readable markdown
 * with JSON code blocks for easy copy-paste.
 */
export async function formatOutput(
  useCases: GeneratedUseCases,
  reasoningEffort: ReasoningEffort = 'low' // Simple formatting task
): Promise<string> {
  debugLog('Formatting use cases output');

  const systemPrompt = await loadPrompt(PROMPTS.UC_FORMAT_OUTPUT);
  const userMessage = formatUseCasesForOutput(useCases);

  const result = await complete({
    systemPrompt,
    userMessage,
    // No structured output - we want markdown text
    reasoningEffort,
  });

  if (!result.text) {
    throw new Error('Failed to format output: no text response');
  }

  debugLog('Output formatted, length:', result.text.length);

  return result.text;
}

/**
 * Alternative: Format output without LLM call (pure code)
 * Use this for faster, more deterministic output
 */
export function formatOutputLocally(useCases: GeneratedUseCases): string {
  const sections: string[] = [];

  useCases.use_cases.forEach((uc: GeneratedUseCase, index: number) => {
    const ucNumber = index + 1;

    // Header
    sections.push(`## Use Case ${ucNumber} - ${uc.label}`);
    sections.push('');

    // Overview (first sentence of use_case narrative)
    const firstSentence = uc.otr_workflow_inputs.use_case.split('.')[0] + '.';
    sections.push('**Overview**');
    sections.push(firstSentence);
    sections.push('');

    // Scenario Narrative
    sections.push('**Scenario Narrative**');
    sections.push(uc.otr_workflow_inputs.use_case);
    sections.push('');

    // Revenue Recognition Summary
    sections.push('**Revenue Recognition Summary**');
    uc.otr_workflow_inputs.rev_rec_notes.forEach((note) => {
      sections.push(
        `- ${note.charge_group}: ${note.likely_pob_type.replace(/_/g, ' ')}, ${note.release_pattern.replace(/_/g, ' ')} (${note.confidence} confidence)`
      );
    });
    sections.push('');

    // Key Assumptions
    sections.push('**Key Assumptions**');
    uc.assumptions.forEach((assumption) => {
      sections.push(`- ${assumption}`);
    });
    sections.push('');

    // Risks & Open Questions
    sections.push('**Risks & Open Questions**');
    uc.risks_or_open_questions.forEach((risk) => {
      sections.push(`- ${risk}`);
    });
    sections.push('');

    // OTR Workflow Inputs JSON
    sections.push('**OTR Workflow Inputs**');
    sections.push('```json');
    sections.push(JSON.stringify(uc.otr_workflow_inputs, null, 2));
    sections.push('```');

    // Separator between use cases
    if (index < useCases.use_cases.length - 1) {
      sections.push('');
      sections.push('---');
      sections.push('');
    }
  });

  return sections.join('\n');
}
