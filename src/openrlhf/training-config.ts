/**
 * OpenRLHF Training Configuration Generator
 *
 * Creates training configurations for different scenarios:
 * - PPO (Proximal Policy Optimization) - classic RLHF
 * - GRPO (Group Relative Policy Optimization) - recent improvement
 * - REINFORCE with baseline - simpler alternative
 * - RLOO (REINFORCE Leave-One-Out) - variance reduction
 */

import fs from 'fs';
import path from 'path';
import { OpenRLHFConfig, LLMGraderConfig } from './types';

// Default grader configuration using the same prompt as OpenAI RFT
// Exported for use in future extensions (e.g., local grader deployment)
export const DEFAULT_GRADER_CONFIG: LLMGraderConfig = {
  model: 'gpt-4o-mini',
  provider: 'openai',
  systemPrompt: 'You are a specialized grader for the ZUCA billing pipeline...',
  userTemplate: '## Task Description\nEvaluate the model output...',
  maxTokens: 256,
  temperature: 0.0,
};

// Recommended configurations for different scenarios
const PRESET_CONFIGS = {
  // Quick experiments with smaller models
  quick: {
    baseModel: 'Qwen/Qwen2.5-7B-Instruct',
    algorithm: 'reinforce_baseline' as const,
    learningRate: 1e-6,
    epochs: 1,
    batchSize: 64,
    rolloutBatchSize: 64,
    maxLength: 4096,
  },

  // Standard PPO training
  standard: {
    baseModel: 'Qwen/Qwen2.5-7B-Instruct',
    algorithm: 'ppo' as const,
    learningRate: 5e-7,
    epochs: 2,
    batchSize: 128,
    rolloutBatchSize: 128,
    maxLength: 4096,
    klCoef: 0.02,
    clipRange: 0.2,
    valueClipRange: 0.2,
  },

  // GRPO for better sample efficiency
  grpo: {
    baseModel: 'Qwen/Qwen2.5-7B-Instruct',
    algorithm: 'grpo' as const,
    learningRate: 1e-6,
    epochs: 2,
    batchSize: 128,
    rolloutBatchSize: 128,
    maxLength: 4096,
    groupSize: 8,
  },

  // Production config for larger models
  production: {
    baseModel: 'Qwen/Qwen2.5-14B-Instruct',
    algorithm: 'ppo' as const,
    learningRate: 2e-7,
    epochs: 3,
    batchSize: 256,
    rolloutBatchSize: 256,
    maxLength: 8192,
    klCoef: 0.01,
    clipRange: 0.1,
    valueClipRange: 0.1,
  },
} as const;

type PresetName = keyof typeof PRESET_CONFIGS;

/**
 * Generate a complete OpenRLHF training configuration
 */
export function generateConfig(options: {
  preset?: PresetName;
  baseModel?: string;
  algorithm?: OpenRLHFConfig['hyperparameters']['algorithm'];
  dataPath: string;
  outputDir: string;
  wandbProject?: string;
  gpuType?: OpenRLHFConfig['resources']['gpuType'];
  numGpus?: number;
  // Override hyperparameters
  learningRate?: number;
  epochs?: number;
  batchSize?: number;
  maxLength?: number;
  // Grader configuration
  graderModel?: string;
  graderProvider?: LLMGraderConfig['provider'];
}): OpenRLHFConfig {
  // Start with preset or defaults
  const preset = options.preset ? PRESET_CONFIGS[options.preset] : PRESET_CONFIGS.standard;

  // GPU recommendations based on model size
  const modelSize = options.baseModel || preset.baseModel;
  const recommendedGpu = getRecommendedGpu(modelSize);

  const config: OpenRLHFConfig = {
    baseModel: options.baseModel || preset.baseModel,
    rewardSource: {
      type: 'function',
      path: 'reward_function.py',
    },
    hyperparameters: {
      algorithm: options.algorithm || preset.algorithm,
      learningRate: options.learningRate ?? preset.learningRate,
      epochs: options.epochs ?? preset.epochs,
      batchSize: options.batchSize ?? preset.batchSize,
      rolloutBatchSize: preset.rolloutBatchSize,
      maxLength: options.maxLength ?? preset.maxLength,
      ...(preset.algorithm === 'ppo' && 'klCoef' in preset
        ? {
            klCoef: preset.klCoef,
            clipRange: preset.clipRange,
            valueClipRange: preset.valueClipRange,
          }
        : {}),
      ...(preset.algorithm === 'grpo' && 'groupSize' in preset
        ? { groupSize: preset.groupSize }
        : {}),
    },
    data: {
      promptDataset: options.dataPath,
      evalDataset: options.dataPath.replace('.jsonl', '-validation.jsonl'),
      inputKey: 'prompt',
      referenceKey: 'reference',
    },
    output: {
      saveDir: options.outputDir,
      wandbProject: options.wandbProject || 'zuca-rlhf',
      checkpointInterval: 100,
    },
    resources: {
      numGpus: options.numGpus || recommendedGpu.numGpus,
      gpuType: options.gpuType || recommendedGpu.type,
      vllmTensorParallel: recommendedGpu.tensorParallel,
    },
  };

  return config;
}

/**
 * Get recommended GPU configuration based on model size
 */
function getRecommendedGpu(modelPath: string): {
  type: OpenRLHFConfig['resources']['gpuType'];
  numGpus: number;
  tensorParallel: number;
} {
  const modelName = modelPath.toLowerCase();

  // Extract model size from name
  if (modelName.includes('70b') || modelName.includes('72b')) {
    return { type: 'H100', numGpus: 4, tensorParallel: 4 };
  } else if (modelName.includes('32b') || modelName.includes('34b')) {
    return { type: 'A100-80GB', numGpus: 2, tensorParallel: 2 };
  } else if (modelName.includes('14b') || modelName.includes('13b')) {
    return { type: 'A100-80GB', numGpus: 1, tensorParallel: 1 };
  } else if (modelName.includes('7b') || modelName.includes('8b')) {
    return { type: 'A100-40GB', numGpus: 1, tensorParallel: 1 };
  } else if (modelName.includes('3b') || modelName.includes('1b')) {
    return { type: 'A100-40GB', numGpus: 1, tensorParallel: 1 };
  }

  // Default for unknown sizes
  return { type: 'A100-40GB', numGpus: 1, tensorParallel: 1 };
}

/**
 * Generate shell environment exports from config
 */
export function generateEnvExports(config: OpenRLHFConfig): string {
  const lines = [
    '# OpenRLHF Training Configuration',
    '# Generated by ZUCA Pipeline',
    '',
    '# Model',
    `export BASE_MODEL="${config.baseModel}"`,
    '',
    '# Algorithm',
    `export ALGORITHM="${config.hyperparameters.algorithm}"`,
    '',
    '# Hyperparameters',
    `export LEARNING_RATE="${config.hyperparameters.learningRate}"`,
    `export NUM_EPISODES="${config.hyperparameters.epochs}"`,
    `export ROLLOUT_BATCH_SIZE="${config.hyperparameters.rolloutBatchSize}"`,
    `export MICRO_BATCH_SIZE="${Math.min(4, Math.floor(config.hyperparameters.batchSize / 32))}"`,
    `export MAX_LENGTH="${config.hyperparameters.maxLength}"`,
    '',
    '# Data',
    `export DATA_PATH="${config.data.promptDataset}"`,
    `export EVAL_DATA_PATH="${config.data.evalDataset || ''}"`,
    '',
    '# Output',
    `export OUTPUT_DIR="${config.output.saveDir}"`,
    `export WANDB_PROJECT="${config.output.wandbProject}"`,
    '',
    '# Resources',
    `export NUM_GPUS="${config.resources.numGpus}"`,
  ];

  return lines.join('\n');
}

/**
 * Generate a RunPod start command
 */
export function generateRunPodCommand(config: OpenRLHFConfig): string {
  const gpuMapping: Record<OpenRLHFConfig['resources']['gpuType'], string> = {
    'A100-40GB': 'NVIDIA A100 40GB',
    'A100-80GB': 'NVIDIA A100 80GB',
    'H100': 'NVIDIA H100',
  };

  return `runpodctl create pod \\
  --name "zuca-rlhf-training" \\
  --gpuType "${gpuMapping[config.resources.gpuType]}" \\
  --gpuCount ${config.resources.numGpus} \\
  --imageName "nvcr.io/nvidia/pytorch:25.02-py3" \\
  --volumeSize 100 \\
  --containerDiskSize 50 \\
  --ports "8888/http,22/tcp" \\
  --env "WANDB_PROJECT=${config.output.wandbProject}"`;
}

/**
 * Write configuration files for RunPod deployment
 */
export async function writeConfigFiles(
  config: OpenRLHFConfig,
  outputDir: string
): Promise<{ files: string[] }> {
  fs.mkdirSync(outputDir, { recursive: true });

  const files: string[] = [];

  // Write JSON config
  const configPath = path.join(outputDir, 'training-config.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  files.push(configPath);

  // Write environment exports
  const envPath = path.join(outputDir, 'training-env.sh');
  fs.writeFileSync(envPath, generateEnvExports(config));
  files.push(envPath);

  // Write README with instructions
  const readmePath = path.join(outputDir, 'README.md');
  fs.writeFileSync(readmePath, generateReadme(config));
  files.push(readmePath);

  return { files };
}

/**
 * Generate README with deployment instructions
 */
function generateReadme(config: OpenRLHFConfig): string {
  return `# ZUCA OpenRLHF Training Configuration

## Configuration Summary
- **Base Model**: ${config.baseModel}
- **Algorithm**: ${config.hyperparameters.algorithm}
- **Learning Rate**: ${config.hyperparameters.learningRate}
- **Epochs**: ${config.hyperparameters.epochs}
- **Batch Size**: ${config.hyperparameters.batchSize}
- **Max Length**: ${config.hyperparameters.maxLength}

## GPU Requirements
- **Type**: ${config.resources.gpuType}
- **Count**: ${config.resources.numGpus}
- **Tensor Parallel**: ${config.resources.vllmTensorParallel}

## Deployment Steps

### 1. Create RunPod Instance
\`\`\`bash
${generateRunPodCommand(config)}
\`\`\`

### 2. SSH into the Pod
\`\`\`bash
ssh root@<pod-ip>
\`\`\`

### 3. Clone Repository and Setup
\`\`\`bash
git clone <your-repo-url> /workspace/zuca
cd /workspace/zuca
bash scripts/openrlhf/setup-runpod.sh
\`\`\`

### 4. Upload Training Data
\`\`\`bash
# Copy your data to the pod
scp data/train.jsonl root@<pod-ip>:/workspace/data/train.jsonl
scp data/validation.jsonl root@<pod-ip>:/workspace/data/validation.jsonl
\`\`\`

### 5. Set Environment Variables
\`\`\`bash
export OPENAI_API_KEY='your-key'  # For LLM grader
export WANDB_API_KEY='your-key'   # For logging
export HF_TOKEN='your-token'      # For HuggingFace models

# Load training config
source training-env.sh
\`\`\`

### 6. Start Training
\`\`\`bash
bash scripts/openrlhf/train.sh
\`\`\`

### 7. Monitor Training
- WandB: https://wandb.ai/${config.output.wandbProject}
- Logs: \`/workspace/logs/\`
- Checkpoints: \`${config.output.saveDir}\`

## Cost Estimate
${generateCostEstimate(config)}

## Troubleshooting

### Out of Memory
- Reduce \`MICRO_BATCH_SIZE\` or \`MAX_LENGTH\`
- Enable gradient checkpointing
- Use a larger GPU

### Training Instability
- Lower \`LEARNING_RATE\` by 10x
- Increase KL coefficient for PPO
- Try REINFORCE baseline instead of PPO

### Slow Training
- Increase \`ROLLOUT_BATCH_SIZE\`
- Use vLLM tensor parallelism
- Consider multi-GPU Ray training
`;
}

/**
 * Generate cost estimate for RunPod
 */
function generateCostEstimate(config: OpenRLHFConfig): string {
  // RunPod pricing (approximate, varies by availability)
  const hourlyRates: Record<OpenRLHFConfig['resources']['gpuType'], number> = {
    'A100-40GB': 1.24,
    'A100-80GB': 1.99,
    'H100': 3.99,
  };

  const rate = hourlyRates[config.resources.gpuType];
  const totalRate = rate * config.resources.numGpus;

  // Rough training time estimates
  const estimatedHours = config.hyperparameters.epochs * 2; // Very rough estimate

  return `
Estimated RunPod Cost:
- GPU: ${config.resources.gpuType} x ${config.resources.numGpus}
- Hourly Rate: $${totalRate.toFixed(2)}/hr
- Estimated Training Time: ${estimatedHours}+ hours
- Estimated Total: $${(totalRate * estimatedHours).toFixed(2)}+

Note: Actual costs depend on dataset size, convergence speed, and spot pricing.
`;
}

/**
 * Validate a configuration before deployment
 */
export function validateConfig(config: OpenRLHFConfig): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  if (!config.baseModel) {
    errors.push('baseModel is required');
  }

  if (!config.data.promptDataset) {
    errors.push('data.promptDataset is required');
  }

  if (!config.output.saveDir) {
    errors.push('output.saveDir is required');
  }

  // Check hyperparameters
  if (config.hyperparameters.learningRate > 1e-4) {
    warnings.push('Learning rate is very high (> 1e-4), may cause instability');
  }

  if (config.hyperparameters.learningRate < 1e-8) {
    warnings.push('Learning rate is very low (< 1e-8), training may be slow');
  }

  if (config.hyperparameters.batchSize < 32) {
    warnings.push('Small batch size may lead to high variance in gradient estimates');
  }

  if (config.hyperparameters.maxLength > 8192) {
    warnings.push('Max length > 8192 requires significant GPU memory');
  }

  // Check GPU configuration
  const modelSize = config.baseModel.toLowerCase();
  if (modelSize.includes('70b') && config.resources.gpuType === 'A100-40GB') {
    errors.push('70B models require A100-80GB or H100 GPUs');
  }

  if (modelSize.includes('14b') && config.resources.numGpus < 1) {
    warnings.push('14B models benefit from at least 1 A100-80GB GPU');
  }

  // Algorithm-specific checks
  if (config.hyperparameters.algorithm === 'ppo' && !config.hyperparameters.klCoef) {
    warnings.push('PPO without KL coefficient may diverge from reference policy');
  }

  if (config.hyperparameters.algorithm === 'grpo' && !config.hyperparameters.groupSize) {
    warnings.push('GRPO without groupSize will use default (may not be optimal)');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * List available presets
 */
export function listPresets(): Array<{
  name: PresetName;
  description: string;
  model: string;
  algorithm: string;
}> {
  return [
    {
      name: 'quick',
      description: 'Fast experiments with 7B model, REINFORCE baseline',
      model: PRESET_CONFIGS.quick.baseModel,
      algorithm: PRESET_CONFIGS.quick.algorithm,
    },
    {
      name: 'standard',
      description: 'Standard PPO training with 7B model',
      model: PRESET_CONFIGS.standard.baseModel,
      algorithm: PRESET_CONFIGS.standard.algorithm,
    },
    {
      name: 'grpo',
      description: 'GRPO for better sample efficiency',
      model: PRESET_CONFIGS.grpo.baseModel,
      algorithm: PRESET_CONFIGS.grpo.algorithm,
    },
    {
      name: 'production',
      description: 'Production PPO with 14B model',
      model: PRESET_CONFIGS.production.baseModel,
      algorithm: PRESET_CONFIGS.production.algorithm,
    },
  ];
}
