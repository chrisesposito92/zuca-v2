import { z } from 'zod';

export const LLM_MODELS = [
  'gpt-5.2',
  'gpt-4.1',
  'gemini-3-pro-preview',
  'gemini-3-flash-preview',
  'zuca-gpt-nano',
  'zuca-gpt-mini',
] as const;

/**
 * Model ID mapping for aliased models.
 * Maps friendly names to actual API model IDs.
 */
export const MODEL_ID_MAP: Record<string, string> = {
  'zuca-gpt-nano': 'ft:gpt-4.1-nano-2025-04-14:personal:zuca:Cu3RhczG',
  'zuca-gpt-mini': 'ft:gpt-4.1-mini-2025-04-14:personal:zuca-mini:CuBZwHVI',
};

/**
 * Resolve a model name to its actual API model ID.
 * Returns the input if no mapping exists.
 */
export function resolveModelId(model: string): string {
  return MODEL_ID_MAP[model] || model;
}

export type LlmModel = (typeof LLM_MODELS)[number];

export const LlmModelSchema = z.enum(LLM_MODELS);
