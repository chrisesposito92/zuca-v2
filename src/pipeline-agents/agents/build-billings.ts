import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { BuildBillingsOutputSchema } from '../schemas/build-billings';
import type { PipelineContext } from '../context';

export function createBuildBillingsAgent(model: string = 'gpt-5.2') {
  return new Agent<PipelineContext, typeof BuildBillingsOutputSchema>({
    name: 'build-billings',
    model,
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.BUILD_BILLINGS);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: BuildBillingsOutputSchema,
  });
}
