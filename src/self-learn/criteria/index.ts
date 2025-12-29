/**
 * Evaluation Criteria Loader
 *
 * Loads behavioral criteria from YAML files for LLM judge evaluation.
 * Files are stored in data/evaluation-criteria/<step-name>.yaml
 */

import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { EvaluationCriteriaSchema, type EvaluationCriteria } from '../types';

const DEFAULT_CRITERIA_DIR = path.join(process.cwd(), 'data', 'evaluation-criteria');

/**
 * Cache for loaded criteria
 */
const criteriaCache = new Map<string, EvaluationCriteria>();

/**
 * Load evaluation criteria for a specific step
 *
 * @param stepName - The pipeline step name (e.g., 'analyze-contract', 'build-billings')
 * @param criteriaDir - Optional custom directory path
 * @returns Parsed and validated evaluation criteria
 */
export async function loadCriteria(
  stepName: string,
  criteriaDir: string = DEFAULT_CRITERIA_DIR
): Promise<EvaluationCriteria> {
  // Check cache first
  const cacheKey = `${criteriaDir}:${stepName}`;
  if (criteriaCache.has(cacheKey)) {
    return criteriaCache.get(cacheKey)!;
  }

  const filePath = path.join(criteriaDir, `${stepName}.yaml`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Criteria file not found: ${filePath}`);
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseYaml(content);

    // Validate against schema
    const validated = EvaluationCriteriaSchema.parse(parsed);

    criteriaCache.set(cacheKey, validated);
    return validated;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load criteria for ${stepName}: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Load all available criteria files
 *
 * @param criteriaDir - Optional custom directory path
 * @returns Map of step names to their criteria
 */
export async function loadAllCriteria(
  criteriaDir: string = DEFAULT_CRITERIA_DIR
): Promise<Map<string, EvaluationCriteria>> {
  const criteria = new Map<string, EvaluationCriteria>();

  if (!fs.existsSync(criteriaDir)) {
    console.warn(`Criteria directory not found: ${criteriaDir}`);
    return criteria;
  }

  const files = fs.readdirSync(criteriaDir);
  const yamlFiles = files.filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));

  for (const file of yamlFiles) {
    const stepName = file.replace(/\.(yaml|yml)$/, '');
    try {
      const loaded = await loadCriteria(stepName, criteriaDir);
      criteria.set(stepName, loaded);
    } catch (error) {
      console.warn(`Skipping invalid criteria file ${file}:`, error);
    }
  }

  return criteria;
}

/**
 * List available criteria files
 *
 * @param criteriaDir - Optional custom directory path
 * @returns Array of step names that have criteria defined
 */
export function listAvailableCriteria(criteriaDir: string = DEFAULT_CRITERIA_DIR): string[] {
  if (!fs.existsSync(criteriaDir)) {
    return [];
  }

  const files = fs.readdirSync(criteriaDir);
  return files
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .map((f) => f.replace(/\.(yaml|yml)$/, ''));
}

/**
 * Clear the criteria cache
 * Useful for testing or when criteria files are updated
 */
export function clearCriteriaCache(): void {
  criteriaCache.clear();
}

/**
 * Get criteria for a step if it exists, undefined otherwise
 * Does not throw if criteria file is missing
 *
 * @param stepName - The pipeline step name
 * @param criteriaDir - Optional custom directory path
 */
export async function getCriteriaIfExists(
  stepName: string,
  criteriaDir: string = DEFAULT_CRITERIA_DIR
): Promise<EvaluationCriteria | undefined> {
  try {
    return await loadCriteria(stepName, criteriaDir);
  } catch {
    return undefined;
  }
}
