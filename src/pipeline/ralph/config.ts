import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parse as parseYaml } from 'yaml';
import { debugLog } from '../../config';
import { RalphConfigSchema, type RalphConfig } from '../../types/ralph';

// ============================================================================
// Ralph-Enabled Steps
// ============================================================================

/**
 * Steps that can be wrapped with Ralph self-improvement
 */
export const RALPH_ENABLED_STEPS = [
  // Main analysis pipeline
  'analyze_contract',
  'design_subscription',
  'contracts_orders',
  'billings',
  'revrec_waterfall',
  // Revenue snapshot pipeline
  'snapshot_waterfall',
  'snapshot_summary',
] as const;

export type RalphEnabledStep = (typeof RALPH_ENABLED_STEPS)[number];

/**
 * Type guard to check if a step name is Ralph-enabled
 */
export function isRalphEnabledStep(stepName: string): stepName is RalphEnabledStep {
  return RALPH_ENABLED_STEPS.includes(stepName as RalphEnabledStep);
}

// ============================================================================
// Default Configuration
// ============================================================================

const DEFAULT_CONFIG: RalphConfig = {
  enabled: false,
  defaultMaxIterations: 3,
  steps: {},
};

// ============================================================================
// Configuration Loading
// ============================================================================

let cachedConfig: RalphConfig | null = null;

function findConfigPath(): string | null {
  const envPath = process.env.RALPH_CONFIG_PATH;
  if (envPath) {
    const resolved = join(process.cwd(), envPath);
    if (existsSync(resolved)) return resolved;
    if (existsSync(envPath)) return envPath;
  }

  let currentDir = process.cwd();
  const visited = new Set<string>();

  while (!visited.has(currentDir)) {
    visited.add(currentDir);
    const candidate = join(currentDir, 'config', 'ralph.yaml');
    if (existsSync(candidate)) return candidate;

    const parent = join(currentDir, '..');
    if (parent === currentDir) break;
    currentDir = parent;
  }

  return null;
}

/**
 * Load Ralph configuration from YAML file
 * Falls back to defaults if file not found or invalid
 */
export function loadRalphConfig(): RalphConfig {
  if (cachedConfig) return cachedConfig;

  const configPath = findConfigPath();

  try {
    if (!configPath) {
      debugLog('Ralph config file not found, using defaults', { path: configPath });
      cachedConfig = DEFAULT_CONFIG;
      return cachedConfig;
    }

    const content = readFileSync(configPath, 'utf-8');
    const parsed = parseYaml(content);
    const validated = RalphConfigSchema.parse(parsed);

    debugLog('Loaded Ralph config', {
      enabled: validated.enabled,
      defaultMaxIterations: validated.defaultMaxIterations,
      stepsConfigured: Object.keys(validated.steps).length,
    });

    cachedConfig = validated;
    return cachedConfig;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    debugLog('Failed to load Ralph config, using defaults', { error: message });
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  }
}

/**
 * Clear cached configuration (useful for testing)
 */
export function clearRalphConfigCache(): void {
  cachedConfig = null;
}

// ============================================================================
// Configuration Helpers
// ============================================================================

/**
 * Check if Ralph is globally enabled
 * Environment variable takes precedence over YAML config
 */
export function isRalphEnabled(): boolean {
  // Environment variable takes precedence
  const envEnabled = process.env.RALPH_ENABLED;
  if (envEnabled !== undefined) {
    return envEnabled === 'true' || envEnabled === '1';
  }

  const config = loadRalphConfig();
  return config.enabled;
}

/**
 * Resolved step configuration with all defaults applied
 */
export interface ResolvedRalphStepConfig {
  enabled: boolean;
  maxIterations: number;
  allowClarifications: boolean;
}

/**
 * Get configuration for a specific step with defaults applied
 */
export function getRalphStepConfig(stepName: string): ResolvedRalphStepConfig {
  const config = loadRalphConfig();
  const stepConfig = config.steps[stepName] || {};

  // Environment variable for max iterations
  const envMaxIterations = process.env.RALPH_MAX_ITERATIONS;
  const maxIterations = envMaxIterations
    ? parseInt(envMaxIterations, 10)
    : stepConfig.maxIterations ?? config.defaultMaxIterations;

  return {
    enabled: stepConfig.enabled ?? true,
    maxIterations: Math.max(1, Math.min(10, maxIterations)),
    allowClarifications: stepConfig.allowClarifications ?? true,
  };
}

/**
 * Check if a specific step has Ralph enabled
 */
export function isStepRalphEnabled(stepName: string): boolean {
  if (!isRalphEnabled()) return false;
  if (!isRalphEnabledStep(stepName)) return false;
  const stepConfig = getRalphStepConfig(stepName);
  return stepConfig.enabled;
}
