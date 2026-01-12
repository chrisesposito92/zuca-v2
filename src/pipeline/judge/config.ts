import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';
import { debugLog } from '../../config';
import type { JudgeableStep } from './types';

// ============================================================================
// Configuration Schemas
// ============================================================================

/**
 * Per-step configuration schema
 */
const JudgeStepConfigSchema = z.object({
  enabled: z.boolean().default(true),
  model: z.string().optional(),
  confidence_threshold: z.number().min(0).max(1).optional(),
  timeout_ms: z.number().positive().optional(),
  reasoning_effort: z.enum(['low', 'medium', 'high']).optional(),
});

export type JudgeStepConfig = z.infer<typeof JudgeStepConfigSchema>;

/**
 * Full judge configuration schema
 */
const JudgeConfigSchema = z.object({
  version: z.string(),
  enabled: z.boolean().default(true),
  defaults: z
    .object({
      model: z.string().default('gemini-3-flash-preview'),
      confidence_threshold: z.number().min(0).max(1).default(0.9),
      timeout_ms: z.number().positive().default(30000),
      reasoning_effort: z.enum(['low', 'medium', 'high']).default('low'),
    })
    .default({}),
  steps: z.record(JudgeStepConfigSchema).default({}),
});

export type JudgeConfig = z.infer<typeof JudgeConfigSchema>;

// ============================================================================
// Default Configuration
// ============================================================================

const DEFAULT_CONFIG: JudgeConfig = {
  version: '1.0',
  enabled: true,
  defaults: {
    model: 'gemini-3-flash-preview',
    confidence_threshold: 0.9,
    timeout_ms: 30000,
    reasoning_effort: 'low',
  },
  steps: {},
};

// ============================================================================
// Configuration Loading
// ============================================================================

let cachedConfig: JudgeConfig | null = null;

function findConfigPath(): string | null {
  const envPath = process.env.JUDGE_CONFIG_PATH;
  if (envPath) {
    const resolved = join(process.cwd(), envPath);
    if (existsSync(resolved)) return resolved;
    if (existsSync(envPath)) return envPath;
  }

  let currentDir = process.cwd();
  const visited = new Set<string>();

  while (!visited.has(currentDir)) {
    visited.add(currentDir);
    const candidate = join(currentDir, 'config', 'judge.yaml');
    if (existsSync(candidate)) return candidate;

    const parent = join(currentDir, '..');
    if (parent === currentDir) break;
    currentDir = parent;
  }

  return null;
}

/**
 * Load judge configuration from YAML file
 * Falls back to defaults if file not found or invalid
 */
export function loadJudgeConfig(): JudgeConfig {
  if (cachedConfig) return cachedConfig;

  const configPath = findConfigPath();

  try {
    if (!configPath) {
      debugLog('Judge config file not found, using defaults', { path: configPath });
      cachedConfig = DEFAULT_CONFIG;
      return cachedConfig;
    }

    const content = readFileSync(configPath, 'utf-8');
    const parsed = parseYaml(content);
    const validated = JudgeConfigSchema.parse(parsed);

    debugLog('Loaded judge config', {
      enabled: validated.enabled,
      model: validated.defaults.model,
      threshold: validated.defaults.confidence_threshold,
      stepsConfigured: Object.keys(validated.steps).length,
    });

    cachedConfig = validated;
    return cachedConfig;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    debugLog('Failed to load judge config, using defaults', { error: message });
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }
}

/**
 * Clear cached configuration (useful for testing)
 */
export function clearJudgeConfigCache(): void {
  cachedConfig = null;
}

// ============================================================================
// Configuration Helpers
// ============================================================================

/**
 * Check if judge is globally enabled
 * Environment variable takes precedence over YAML config
 */
export function isJudgeEnabled(): boolean {
  // Environment variable takes precedence
  const envEnabled = process.env.JUDGE_ENABLED;
  if (envEnabled !== undefined) {
    return envEnabled === 'true' || envEnabled === '1';
  }

  const config = loadJudgeConfig();
  return config.enabled;
}

/**
 * Resolved step configuration with all defaults applied
 */
export interface ResolvedStepConfig {
  enabled: boolean;
  model: string;
  confidenceThreshold: number;
  timeoutMs: number;
  reasoningEffort: 'low' | 'medium' | 'high';
}

/**
 * Get configuration for a specific step with defaults applied
 */
export function getStepConfig(stepName: JudgeableStep): ResolvedStepConfig {
  const config = loadJudgeConfig();
  const stepConfig = config.steps[stepName] || {};

  return {
    enabled: stepConfig.enabled ?? true,
    model: stepConfig.model ?? config.defaults.model,
    confidenceThreshold: stepConfig.confidence_threshold ?? config.defaults.confidence_threshold,
    timeoutMs: stepConfig.timeout_ms ?? config.defaults.timeout_ms,
    reasoningEffort: stepConfig.reasoning_effort ?? config.defaults.reasoning_effort,
  };
}

/**
 * Check if a specific step has judge enabled
 */
export function isStepJudgeEnabled(stepName: JudgeableStep): boolean {
  if (!isJudgeEnabled()) return false;
  const stepConfig = getStepConfig(stepName);
  return stepConfig.enabled;
}
