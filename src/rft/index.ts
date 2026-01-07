/**
 * RFT Module - Reinforcement Fine-Tuning
 *
 * Provides tools for training models using OpenAI's RFT API with
 * custom graders based on the ZUCA self-learning judge.
 *
 * Currently supported: o4-mini
 * Future: gpt-4.1 series when OpenAI adds support
 */

export * from './types';
export * from './grader-prompt';
export * from './convert-data';
export * from './client';
