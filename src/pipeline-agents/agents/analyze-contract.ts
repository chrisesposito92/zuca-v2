import { Agent } from '@openai/agents';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { AnalyzeContractOutputSchema } from '../schemas/analyze-contract';
import type { PipelineContext } from '../context';

export function createAnalyzeContractAgent() {
  return new Agent<PipelineContext, typeof AnalyzeContractOutputSchema>({
    name: 'analyze-contract',
    model: 'gpt-5.2',
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.ANALYZE_CONTRACT);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: AnalyzeContractOutputSchema,
  });
}
