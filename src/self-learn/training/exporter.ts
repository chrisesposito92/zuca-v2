/**
 * Training Data Exporter
 *
 * Captures and exports training data from the self-learning system.
 * Supports exporting to HuggingFace-compatible formats for fine-tuning.
 */

import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadPrompt, PROMPTS } from '../../llm/prompts/index';
import { getAllCorrections } from '../corrections';
import { debugLog } from '../../config';
import type {
  TrainingExample,
  TrainingDataset,
  TrainingExportOptions,
  TrainingCaptureContext,
  SuccessfulEvaluationInput,
  CorrectionExampleInput,
} from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Default path for training data storage
const DEFAULT_TRAINING_DATA_PATH = join(__dirname, '../../../data/training-sources/pipeline-outputs.json');

// Configurable path (set via setTrainingDataPath for tests)
let trainingDataPath = DEFAULT_TRAINING_DATA_PATH;

/**
 * Set custom path for training data (used for test isolation)
 */
export function setTrainingDataPath(customPath: string | null): void {
  trainingDataPath = customPath ?? DEFAULT_TRAINING_DATA_PATH;
}

/**
 * Get current training data path
 */
export function getTrainingDataPath(): string {
  return trainingDataPath;
}

// =============================================================================
// Step to Prompt Mapping
// =============================================================================

const STEP_TO_PROMPT: Record<string, string> = {
  analyze_contract: PROMPTS.ANALYZE_CONTRACT,
  design_subscription: PROMPTS.DESIGN_SUBSCRIPTION,
  contracts_orders: PROMPTS.BUILD_CONTRACTS_ORDERS,
  billings: PROMPTS.BUILD_BILLINGS,
  revrec_waterfall: PROMPTS.BUILD_REVREC_WATERFALL,
  summarize: PROMPTS.SUMMARIZE,
};

// =============================================================================
// Capture Context (singleton for during evaluation runs)
// =============================================================================

let captureContext: TrainingCaptureContext | null = null;

/**
 * Start capturing training examples for an evaluation run
 */
export function startTrainingCapture(runId: string, model?: string): TrainingCaptureContext {
  captureContext = {
    runId,
    model,
    capturedExamples: [],
  };
  return captureContext;
}

/**
 * Get the current capture context
 */
export function getCaptureContext(): TrainingCaptureContext | null {
  return captureContext;
}

/**
 * Clear the capture context
 */
export function clearCaptureContext(): void {
  captureContext = null;
}

// =============================================================================
// Training Example Creation
// =============================================================================

/**
 * Create a training example from a successful evaluation
 */
export async function createExampleFromEvaluation(
  input: SuccessfulEvaluationInput
): Promise<TrainingExample> {
  const { testCaseId, stepName, systemPrompt, userInput, assistantOutput, model, runId } = input;

  const example: TrainingExample = {
    id: uuidv4(),
    step_name: stepName,
    source: 'evaluation_pass',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userInput },
      {
        role: 'assistant',
        content: typeof assistantOutput === 'string'
          ? assistantOutput
          : JSON.stringify(assistantOutput, null, 2),
      },
    ],
    metadata: {
      test_case_id: testCaseId,
      model,
      run_id: runId,
      created_at: new Date().toISOString(),
    },
  };

  // Add to capture context if active
  if (captureContext) {
    captureContext.capturedExamples.push(example);
  }

  return example;
}

/**
 * Create a training example from a correction with example_fix
 */
export async function createExampleFromCorrection(
  input: CorrectionExampleInput
): Promise<TrainingExample> {
  const { correctionId, stepName, systemPrompt, inputSummary, exampleFix } = input;

  return {
    id: uuidv4(),
    step_name: stepName,
    source: 'correction_fix',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: inputSummary },
      {
        role: 'assistant',
        content: typeof exampleFix === 'string'
          ? exampleFix
          : JSON.stringify(exampleFix, null, 2),
      },
    ],
    metadata: {
      correction_id: correctionId,
      created_at: new Date().toISOString(),
    },
  };
}

/**
 * Capture a successful step output during evaluation
 * Call this when a step passes evaluation
 */
export async function captureSuccessfulOutput(
  testCaseId: string,
  stepName: string,
  userInput: string,
  output: unknown
): Promise<TrainingExample | null> {
  if (!captureContext) {
    debugLog('No capture context active, skipping training data capture');
    return null;
  }

  // Get the system prompt for this step
  const promptName = STEP_TO_PROMPT[stepName];
  if (!promptName) {
    debugLog(`No prompt mapping for step ${stepName}, skipping`);
    return null;
  }

  try {
    const systemPrompt = await loadPrompt(promptName);

    return createExampleFromEvaluation({
      testCaseId,
      stepName,
      systemPrompt,
      userInput,
      assistantOutput: output,
      model: captureContext.model,
      runId: captureContext.runId,
    });
  } catch (error) {
    debugLog(`Failed to capture training example: ${error}`);
    return null;
  }
}

// =============================================================================
// Training Dataset Storage
// =============================================================================

/**
 * Load existing training dataset or create empty one
 */
export async function loadTrainingDataset(): Promise<TrainingDataset> {
  if (!existsSync(trainingDataPath)) {
    return createEmptyDataset();
  }

  try {
    const content = await readFile(trainingDataPath, 'utf-8');
    return JSON.parse(content) as TrainingDataset;
  } catch {
    return createEmptyDataset();
  }
}

/**
 * Create an empty training dataset
 */
function createEmptyDataset(): TrainingDataset {
  const now = new Date().toISOString();
  return {
    version: '1.0',
    created_at: now,
    updated_at: now,
    stats: {
      total_examples: 0,
      by_step: {},
      by_source: {},
    },
    examples: [],
  };
}

/**
 * Update dataset statistics
 */
function updateStats(dataset: TrainingDataset): void {
  const byStep: Record<string, number> = {};
  const bySource: Record<string, number> = {};

  for (const example of dataset.examples) {
    byStep[example.step_name] = (byStep[example.step_name] || 0) + 1;
    bySource[example.source] = (bySource[example.source] || 0) + 1;
  }

  dataset.stats = {
    total_examples: dataset.examples.length,
    by_step: byStep,
    by_source: bySource,
  };
  dataset.updated_at = new Date().toISOString();
}

/**
 * Save training dataset
 */
export async function saveTrainingDataset(dataset: TrainingDataset): Promise<void> {
  updateStats(dataset);

  // Ensure directory exists
  const dir = dirname(trainingDataPath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  await writeFile(trainingDataPath, JSON.stringify(dataset, null, 2));
}

/**
 * Add examples to the training dataset
 */
export async function addExamplesToDataset(examples: TrainingExample[]): Promise<TrainingDataset> {
  const dataset = await loadTrainingDataset();

  // Deduplicate by ID
  const existingIds = new Set(dataset.examples.map((e) => e.id));
  const newExamples = examples.filter((e) => !existingIds.has(e.id));

  dataset.examples.push(...newExamples);
  await saveTrainingDataset(dataset);

  debugLog(`Added ${newExamples.length} new training examples (${examples.length - newExamples.length} duplicates skipped)`);

  return dataset;
}

/**
 * Flush captured examples to the dataset
 */
export async function flushCapturedExamples(): Promise<number> {
  if (!captureContext || captureContext.capturedExamples.length === 0) {
    return 0;
  }

  const count = captureContext.capturedExamples.length;
  await addExamplesToDataset(captureContext.capturedExamples);
  captureContext.capturedExamples = [];

  return count;
}

// =============================================================================
// Training Data Generation from Corrections
// =============================================================================

/**
 * Generate training examples from all corrections that have example_fix
 */
export async function generateExamplesFromCorrections(): Promise<TrainingExample[]> {
  const corrections = await getAllCorrections();
  const examples: TrainingExample[] = [];

  for (const correction of corrections) {
    // Only use corrections that have example_fix
    if (!correction.example_fix) {
      continue;
    }

    const promptName = STEP_TO_PROMPT[correction.step_name];
    if (!promptName) {
      continue;
    }

    try {
      const systemPrompt = await loadPrompt(promptName);

      const example = await createExampleFromCorrection({
        correctionId: correction.id,
        stepName: correction.step_name,
        systemPrompt,
        inputSummary: correction.input_summary,
        exampleFix: correction.example_fix,
      });

      examples.push(example);
    } catch (error) {
      debugLog(`Failed to create example from correction ${correction.id}: ${error}`);
    }
  }

  return examples;
}

// =============================================================================
// Export Functions
// =============================================================================

/**
 * Export training data in various formats
 */
export async function exportTrainingData(
  outputPath: string,
  options: TrainingExportOptions = {}
): Promise<{ exported: number; path: string }> {
  const dataset = await loadTrainingDataset();
  let examples = dataset.examples;

  // Apply filters
  if (options.steps?.length) {
    examples = examples.filter((e) => options.steps!.includes(e.step_name));
  }

  if (options.sources?.length) {
    examples = examples.filter((e) => options.sources!.includes(e.source));
  }

  if (options.after) {
    const afterTime = options.after.getTime();
    examples = examples.filter((e) => new Date(e.metadata.created_at).getTime() > afterTime);
  }

  // Balance by step if requested
  if (options.maxPerStep) {
    const byStep = new Map<string, TrainingExample[]>();
    for (const ex of examples) {
      if (!byStep.has(ex.step_name)) {
        byStep.set(ex.step_name, []);
      }
      byStep.get(ex.step_name)!.push(ex);
    }

    examples = [];
    for (const stepExamples of byStep.values()) {
      examples.push(...stepExamples.slice(0, options.maxPerStep));
    }
  }

  // Remove system prompt if not wanted (for smaller file size)
  if (options.includeSystemPrompt === false) {
    examples = examples.map((e) => ({
      ...e,
      messages: e.messages.filter((m) => m.role !== 'system'),
    }));
  }

  // Export in requested format
  const format = options.format || 'jsonl';

  // Ensure output directory exists
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (format === 'jsonl') {
    // JSONL format - one example per line, just the messages (HuggingFace standard)
    const lines = examples.map((e) => JSON.stringify({ messages: e.messages }));
    await writeFile(outputPath, lines.join('\n'));
  } else if (format === 'huggingface') {
    // HuggingFace datasets format - array of message objects
    const hfFormat = examples.map((e) => ({ messages: e.messages }));
    await writeFile(outputPath, JSON.stringify(hfFormat, null, 2));
  } else {
    // JSON format - full examples with metadata
    await writeFile(outputPath, JSON.stringify(examples, null, 2));
  }

  return { exported: examples.length, path: outputPath };
}

/**
 * Get training data statistics
 */
export async function getTrainingStats(): Promise<{
  total: number;
  byStep: Record<string, number>;
  bySource: Record<string, number>;
  correctionsWithFix: number;
}> {
  const dataset = await loadTrainingDataset();
  const corrections = await getAllCorrections();
  const correctionsWithFix = corrections.filter((c) => c.example_fix).length;

  return {
    total: dataset.stats.total_examples,
    byStep: dataset.stats.by_step,
    bySource: dataset.stats.by_source,
    correctionsWithFix,
  };
}

/**
 * Sync corrections to training dataset
 * Adds any corrections with example_fix that aren't already in the dataset
 */
export async function syncCorrectionsToTraining(): Promise<number> {
  const examples = await generateExamplesFromCorrections();

  if (examples.length === 0) {
    return 0;
  }

  const dataset = await loadTrainingDataset();

  // Find corrections not yet in dataset
  const existingCorrectionIds = new Set(
    dataset.examples
      .filter((e) => e.source === 'correction_fix')
      .map((e) => e.metadata.correction_id)
  );

  const newExamples = examples.filter(
    (e) => !existingCorrectionIds.has(e.metadata.correction_id)
  );

  if (newExamples.length > 0) {
    await addExamplesToDataset(newExamples);
  }

  return newExamples.length;
}
