/**
 * OpenRLHF Module for ZUCA Pipeline
 *
 * This module provides an open-source alternative to OpenAI's RFT (Reinforcement Fine-Tuning).
 * It uses OpenRLHF + RunPod for GPU training with an LLM-as-judge reward function.
 *
 * Key components:
 * - Data conversion: Convert SFT data to OpenRLHF format
 * - Reward function: Python LLM-as-judge for scoring model outputs
 * - Training config: Generate configurations for different scenarios
 * - Scripts: Setup and training scripts for RunPod deployment
 *
 * Workflow:
 * 1. Convert your SFT training data to OpenRLHF format
 * 2. Generate a training configuration (preset or custom)
 * 3. Deploy to RunPod with setup scripts
 * 4. Run training with the reward function grading outputs
 * 5. Download fine-tuned model checkpoints
 */

// Types
export * from './types';

// Data conversion utilities
export {
  convertSFTtoOpenRLHF,
  convertToHuggingFaceDataset,
  splitOpenRLHFData,
  extractPromptsOnly,
  validateOpenRLHFData,
} from './convert-data';

// Training configuration
export {
  generateConfig,
  generateEnvExports,
  generateRunPodCommand,
  writeConfigFiles,
  validateConfig,
  listPresets,
} from './training-config';

// Re-export key types for convenience
export type {
  OpenRLHFPrompt,
  OpenRLHFConfig,
  LLMGraderConfig,
  OpenRLHFJobStatus,
  RunPodConfig,
  RewardFunctionResponse,
} from './types';
