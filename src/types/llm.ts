import { z } from 'zod';

export const LLM_MODELS = [
  'gpt-5.2',
  'gemini-3-pro-preview',
  'gemini-3-flash-preview',
] as const;

export type LlmModel = (typeof LLM_MODELS)[number];

export const LlmModelSchema = z.enum(LLM_MODELS);
