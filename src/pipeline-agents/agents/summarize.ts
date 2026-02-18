import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { SummarizeOutputSchema } from '../schemas/summarize';
import type { PipelineContext } from '../context';

export function createSummarizeAgent() {
  return new Agent<PipelineContext, typeof SummarizeOutputSchema>({
    name: 'summarize',
    model: 'gpt-5.2',
    modelSettings: {
      temperature: 0.3,
    },
    instructions: async () => {
      return await loadPrompt(PROMPTS.SUMMARIZE);
    },
    outputType: SummarizeOutputSchema,
  });
}
