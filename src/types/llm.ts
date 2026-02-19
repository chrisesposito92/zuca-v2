import { z } from 'zod';

export const LLM_MODELS = [
  'gpt-5.2',
  'gemini-3.1-pro-preview',
  'gemini-3-flash-preview',
] as const;

/**
 * Legacy model IDs that should be transparently mapped to their replacements.
 * Handles pre-migration sessions stored in the database.
 */
const LEGACY_MODEL_ALIASES: Record<string, LlmModel> = {
  'gemini-3-pro-preview': 'gemini-3.1-pro-preview',
};

/**
 * Resolve a model name to its actual API model ID.
 * Maps legacy/renamed model IDs to their current equivalents.
 */
export function resolveModelId(model: string): string {
  return LEGACY_MODEL_ALIASES[model] ?? model;
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
