/**
 * Types for OpenRLHF Training
 *
 * OpenRLHF is an open-source RLHF framework that supports
 * custom reward functions (LLM-as-judge) for reinforcement fine-tuning.
 */

import { z } from 'zod';

// OpenRLHF prompt data format
export const OpenRLHFPromptSchema = z.object({
  // The prompt/query for the model to respond to
  prompt: z.string(),
  // Optional reference answer for grading
  reference: z.string().optional(),
  // Optional metadata
  metadata: z.object({
    test_id: z.string().optional(),
    focus_steps: z.array(z.string()).optional(),
    evaluation_criteria: z.string().optional(),
  }).optional(),
});

export type OpenRLHFPrompt = z.infer<typeof OpenRLHFPromptSchema>;

// Reward function response
export interface RewardFunctionResponse {
  rewards: number[];      // Reward values for advantage calculation
  scores: number[];       // Scores (0-1) for filtering
  extra_logs: Record<string, unknown>;  // Additional logging
}

// Training configuration
export interface OpenRLHFConfig {
  // Base model to fine-tune
  baseModel: string;
  // Reward model or function path
  rewardSource: {
    type: 'model' | 'function' | 'api';
    path: string;  // HF model path, Python file path, or API URL
  };
  // Training hyperparameters
  hyperparameters: {
    algorithm: 'ppo' | 'grpo' | 'reinforce_baseline' | 'rloo';
    learningRate: number;
    epochs: number;
    batchSize: number;
    rolloutBatchSize: number;
    maxLength: number;
    // PPO-specific
    klCoef?: number;
    clipRange?: number;
    valueClipRange?: number;
    // GRPO-specific
    groupSize?: number;
  };
  // Data configuration
  data: {
    promptDataset: string;
    evalDataset?: string;
    inputKey: string;
    referenceKey?: string;
  };
  // Output configuration
  output: {
    saveDir: string;
    wandbProject?: string;
    checkpointInterval: number;
  };
  // Resource configuration (for RunPod)
  resources: {
    numGpus: number;
    gpuType: 'A100-40GB' | 'A100-80GB' | 'H100';
    vllmTensorParallel: number;
  };
}

// RunPod pod configuration
export interface RunPodConfig {
  podName: string;
  gpuType: string;
  gpuCount: number;
  containerImage: string;
  volumeSize: number;  // GB
  envVars: Record<string, string>;
}

// Job status tracking
export interface OpenRLHFJobStatus {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  currentEpoch: number;
  totalEpochs: number;
  currentStep: number;
  metrics: {
    rewardMean: number;
    rewardStd: number;
    klDivergence: number;
    policyLoss: number;
    valueLoss: number;
  };
  startedAt: string;
  updatedAt: string;
  error?: string;
}

// Grader configuration (for LLM-as-judge)
export interface LLMGraderConfig {
  model: string;  // e.g., 'gpt-4o-mini', 'Qwen/Qwen2.5-7B-Instruct'
  provider: 'openai' | 'local' | 'vllm';
  systemPrompt: string;
  userTemplate: string;
  maxTokens: number;
  temperature: number;
}
