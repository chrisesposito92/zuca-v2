/**
 * Convert SFT training data to OpenRLHF format
 *
 * OpenRLHF expects JSONL with configurable keys. We convert:
 * - messages array -> single "prompt" string (system + user concatenated)
 * - assistant message -> "reference" for grading
 */

import fs from 'fs';
import path from 'path';
import { OpenRLHFPrompt, OpenRLHFPromptSchema } from './types';

interface SFTMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface SFTExample {
  messages: SFTMessage[];
}

/**
 * Convert a messages array to a single prompt string.
 * OpenRLHF will use this as input to the model.
 */
function messagesToPrompt(messages: SFTMessage[]): string {
  const systemMsg = messages.find((m) => m.role === 'system');
  const userMsg = messages.find((m) => m.role === 'user');

  let prompt = '';

  if (systemMsg) {
    prompt += systemMsg.content + '\n\n';
  }

  if (userMsg) {
    prompt += userMsg.content;
  }

  return prompt.trim();
}

/**
 * Convert SFT JSONL to OpenRLHF format
 *
 * Input: {"messages": [{"role": "system", ...}, {"role": "user", ...}, {"role": "assistant", ...}]}
 * Output: {"prompt": "...", "reference": "...", "metadata": {...}}
 */
export async function convertSFTtoOpenRLHF(
  inputPath: string,
  outputPath: string,
  options: {
    includeReference?: boolean;
    maxExamples?: number;
  } = {}
): Promise<{ converted: number; skipped: number }> {
  const { includeReference = true, maxExamples } = options;

  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  const openrlhfExamples: OpenRLHFPrompt[] = [];
  let skipped = 0;

  for (const line of lines) {
    if (maxExamples && openrlhfExamples.length >= maxExamples) break;

    try {
      const sftExample: SFTExample = JSON.parse(line);

      // Find messages
      const userMsg = sftExample.messages.find((m) => m.role === 'user');
      const assistantMsg = sftExample.messages.find((m) => m.role === 'assistant');

      if (!userMsg) {
        skipped++;
        continue;
      }

      // Build OpenRLHF example
      const openrlhfExample: OpenRLHFPrompt = {
        prompt: messagesToPrompt(sftExample.messages.filter(m => m.role !== 'assistant')),
      };

      // Include assistant response as reference for grading
      if (includeReference && assistantMsg) {
        openrlhfExample.reference = assistantMsg.content;
      }

      // Validate
      const parsed = OpenRLHFPromptSchema.safeParse(openrlhfExample);
      if (parsed.success) {
        openrlhfExamples.push(parsed.data);
      } else {
        skipped++;
      }
    } catch {
      skipped++;
    }
  }

  // Write output
  const outputContent = openrlhfExamples.map((e) => JSON.stringify(e)).join('\n');
  fs.writeFileSync(outputPath, outputContent);

  return { converted: openrlhfExamples.length, skipped };
}

/**
 * Convert OpenRLHF data to HuggingFace dataset format
 * This creates a dataset that can be uploaded to HuggingFace Hub
 */
export async function convertToHuggingFaceDataset(
  inputPath: string,
  outputDir: string,
  options: {
    datasetName?: string;
    splitRatio?: number; // validation ratio
  } = {}
): Promise<{ train: number; validation: number }> {
  const { datasetName = 'zuca-rlhf-prompts', splitRatio = 0.1 } = options;

  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');
  const examples = lines.map((line) => JSON.parse(line));

  // Shuffle
  const shuffled = [...examples].sort(() => Math.random() - 0.5);

  // Split
  const validCount = Math.floor(shuffled.length * splitRatio);
  const validExamples = shuffled.slice(0, validCount);
  const trainExamples = shuffled.slice(validCount);

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });

  // Write as JSONL files
  fs.writeFileSync(
    path.join(outputDir, 'train.jsonl'),
    trainExamples.map((e) => JSON.stringify(e)).join('\n')
  );

  fs.writeFileSync(
    path.join(outputDir, 'validation.jsonl'),
    validExamples.map((e) => JSON.stringify(e)).join('\n')
  );

  // Write dataset info
  const datasetInfo = {
    name: datasetName,
    description: 'ZUCA pipeline prompts for RLHF training',
    features: {
      prompt: { dtype: 'string' },
      reference: { dtype: 'string' },
    },
    splits: {
      train: { num_examples: trainExamples.length },
      validation: { num_examples: validExamples.length },
    },
  };

  fs.writeFileSync(
    path.join(outputDir, 'dataset_info.json'),
    JSON.stringify(datasetInfo, null, 2)
  );

  return { train: trainExamples.length, validation: validExamples.length };
}

/**
 * Split OpenRLHF data into train/validation sets
 */
export function splitOpenRLHFData(
  inputPath: string,
  trainPath: string,
  validPath: string,
  validationRatio: number = 0.1
): { train: number; valid: number } {
  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  // Shuffle
  const shuffled = lines.sort(() => Math.random() - 0.5);

  // Split
  const validCount = Math.floor(shuffled.length * validationRatio);
  const validLines = shuffled.slice(0, validCount);
  const trainLines = shuffled.slice(validCount);

  fs.writeFileSync(trainPath, trainLines.join('\n'));
  fs.writeFileSync(validPath, validLines.join('\n'));

  return { train: trainLines.length, valid: validLines.length };
}

/**
 * Create a prompts-only file from SFT data (no references)
 * This is useful for pure RL training without reference comparison
 */
export async function extractPromptsOnly(
  inputPath: string,
  outputPath: string
): Promise<number> {
  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  const prompts: Array<{ prompt: string }> = [];

  for (const line of lines) {
    try {
      const sftExample: SFTExample = JSON.parse(line);
      const prompt = messagesToPrompt(sftExample.messages.filter(m => m.role !== 'assistant'));

      if (prompt) {
        prompts.push({ prompt });
      }
    } catch {
      // Skip invalid lines
    }
  }

  const outputContent = prompts.map((p) => JSON.stringify(p)).join('\n');
  fs.writeFileSync(outputPath, outputContent);

  return prompts.length;
}

/**
 * Validate OpenRLHF data format
 */
export function validateOpenRLHFData(inputPath: string): {
  valid: number;
  invalid: number;
  errors: string[];
} {
  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  let valid = 0;
  let invalid = 0;
  const errors: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    try {
      const example = JSON.parse(lines[i]);

      // Check required fields
      if (!example.prompt || typeof example.prompt !== 'string') {
        invalid++;
        errors.push(`Line ${i + 1}: Missing or invalid 'prompt' field`);
        continue;
      }

      // Check prompt is not empty
      if (example.prompt.trim().length === 0) {
        invalid++;
        errors.push(`Line ${i + 1}: Empty prompt`);
        continue;
      }

      valid++;
    } catch (e) {
      invalid++;
      errors.push(`Line ${i + 1}: Invalid JSON - ${e}`);
    }
  }

  return { valid, invalid, errors: errors.slice(0, 10) }; // Limit errors shown
}
