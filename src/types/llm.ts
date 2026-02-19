import { z } from 'zod';

export const LLM_MODELS = [
  'gpt-5.2',
  'gemini-3.1-pro-preview',
  'gemini-3-flash-preview',
] as const;

/**
 * Resolve a model name to its actual API model ID.
 * Returns the input unchanged (kept for backwards compatibility).
 */
export function resolveModelId(model: string): string {
  return model;
}

export type LlmModel = (typeof LLM_MODELS)[number];

export const LlmModelSchema = z.enum(LLM_MODELS);

/**
 * Check if a model is supported by the OpenAI Agent SDK pipeline.
 * Gemini models require the original pipeline which routes through src/llm/client.ts.
 */
export function isOpenAIModel(model: string): boolean {
  return model.startsWith('gpt-') || model.startsWith('o');
}
