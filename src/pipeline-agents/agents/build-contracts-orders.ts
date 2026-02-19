import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { BuildContractsOrdersOutputSchema } from '../schemas/build-contracts-orders';
import type { PipelineContext } from '../context';

export function createBuildContractsOrdersAgent(model: string = 'gpt-5.2') {
  return new Agent<PipelineContext, typeof BuildContractsOrdersOutputSchema>({
    name: 'build-contracts-orders',
    model,
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.BUILD_CONTRACTS_ORDERS);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: BuildContractsOrdersOutputSchema,
  });
}
