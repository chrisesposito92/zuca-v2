import { Agent } from '@openai/agents';
import type { ZodObject } from 'zod';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { createDesignSubscriptionOutputSchema } from '../schemas/design-subscription';
import type { PipelineContext } from '../context';
import type { PobTemplate } from '../../types/golden-use-cases';

/**
 * Creates a Design Subscription agent dynamically per-run.
 * The schema depends on POB template identifiers from golden data.
 */
export function createDesignSubscriptionAgent(pobTemplates: PobTemplate[], model: string = 'gpt-5.2') {
  const outputSchema = createDesignSubscriptionOutputSchema(pobTemplates);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Agent<PipelineContext, ZodObject<any, any>>({
    name: 'design-subscription',
    model,
    instructions: async (ctx) => {
      const pctx = ctx.context;
      const basePrompt = await loadPrompt(PROMPTS.DESIGN_SUBSCRIPTION);
      const sections = [basePrompt];
      if (pctx.ragContext) sections.push('\n\n## Relevant Documentation\n' + pctx.ragContext);
      if (pctx.correctionsContext) sections.push('\n\n' + pctx.correctionsContext);
      if (pctx.clarificationContext) sections.push('\n\n## User Clarification\n' + pctx.clarificationContext);
      return sections.join('');
    },
    outputType: outputSchema,
  });
}
