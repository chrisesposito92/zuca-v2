import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { SelfEvalOutputSchema } from '../schemas/self-eval';
import type { PipelineContext } from '../context';

export function createSelfEvalAgent() {
  return new Agent<PipelineContext, typeof SelfEvalOutputSchema>({
    name: 'ralph-self-eval',
    model: 'gpt-5.2',
    modelSettings: {
      temperature: 0.3,
    },
    instructions: async () => {
      return await loadPrompt(PROMPTS.RALPH_SELF_EVAL);
    },
    outputType: SelfEvalOutputSchema,
  });
}
