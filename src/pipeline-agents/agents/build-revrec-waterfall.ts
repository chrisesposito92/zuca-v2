import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { BuildRevRecWaterfallOutputSchema } from '../schemas/build-revrec-waterfall';
import type { PipelineContext } from '../context';

export function createBuildRevRecWaterfallAgent() {
  return new Agent<PipelineContext, typeof BuildRevRecWaterfallOutputSchema>({
    name: 'build-revrec-waterfall',
    model: 'gpt-5.2',
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.BUILD_REVREC_WATERFALL);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: BuildRevRecWaterfallOutputSchema,
  });
}
