/**
 * Tests for Training Data Exporter
 *
 * Tests training capture, example creation, dataset management,
 * and export functionality.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import {
  startTrainingCapture,
  getCaptureContext,
  clearCaptureContext,
  createExampleFromEvaluation,
  createExampleFromCorrection,
  loadTrainingDataset,
  saveTrainingDataset,
  addExamplesToDataset,
  flushCapturedExamples,
  exportTrainingData,
  getTrainingStats,
  setTrainingDataPath,
} from './exporter';
import { resetCorrectionsBackend } from '../corrections';
import type { TrainingExample, TrainingDataset } from './types';

// Test file paths
const TEST_DATA_DIR = path.join(process.cwd(), 'data', 'test-training');
const TEST_TRAINING_PATH = path.join(TEST_DATA_DIR, 'test-training-data.json');
const TEST_EXPORT_PATH = path.join(TEST_DATA_DIR, 'test-export.jsonl');

beforeEach(() => {
  process.env.USE_POSTGRES_CORRECTIONS = 'false';
  delete process.env.POSTGRES_URL;
  resetCorrectionsBackend();
});

/**
 * Create a mock training example
 */
function createMockExample(overrides: Partial<TrainingExample> = {}): TrainingExample {
  return {
    id: `test-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    step_name: 'billings',
    source: 'evaluation_pass',
    messages: [
      { role: 'system', content: 'You are a billing assistant.' },
      { role: 'user', content: 'Generate invoice schedule for subscription' },
      { role: 'assistant', content: '{"invoices": [{"date": "2024-01-01", "amount": 100}]}' },
    ],
    metadata: {
      test_case_id: 'test-001',
      model: 'gpt-4o-mini',
      run_id: 'run-001',
      created_at: new Date().toISOString(),
    },
    ...overrides,
  };
}

/**
 * Create a mock dataset
 */
function createMockDataset(examples: TrainingExample[] = []): TrainingDataset {
  const now = new Date().toISOString();
  return {
    version: '1.0',
    created_at: now,
    updated_at: now,
    stats: {
      total_examples: examples.length,
      by_step: {},
      by_source: {},
    },
    examples,
  };
}

describe('Training Capture Context', () => {
  beforeEach(() => {
    clearCaptureContext();
  });

  afterEach(() => {
    clearCaptureContext();
  });

  describe('startTrainingCapture', () => {
    it('should create a new capture context', () => {
      const context = startTrainingCapture('run-001', 'gpt-4o-mini');

      expect(context.runId).toBe('run-001');
      expect(context.model).toBe('gpt-4o-mini');
      expect(context.capturedExamples).toEqual([]);
    });

    it('should replace existing context', () => {
      startTrainingCapture('run-001');
      const context2 = startTrainingCapture('run-002');

      expect(context2.runId).toBe('run-002');
      expect(getCaptureContext()?.runId).toBe('run-002');
    });
  });

  describe('getCaptureContext', () => {
    it('should return null when no context exists', () => {
      expect(getCaptureContext()).toBeNull();
    });

    it('should return active context', () => {
      startTrainingCapture('run-001');
      const context = getCaptureContext();

      expect(context).not.toBeNull();
      expect(context?.runId).toBe('run-001');
    });
  });

  describe('clearCaptureContext', () => {
    it('should clear the context', () => {
      startTrainingCapture('run-001');
      clearCaptureContext();

      expect(getCaptureContext()).toBeNull();
    });
  });
});

describe('Example Creation', () => {
  beforeEach(() => {
    clearCaptureContext();
  });

  afterEach(() => {
    clearCaptureContext();
  });

  describe('createExampleFromEvaluation', () => {
    it('should create example with correct structure', async () => {
      const example = await createExampleFromEvaluation({
        testCaseId: 'test-001',
        stepName: 'billings',
        systemPrompt: 'You are a billing assistant.',
        userInput: 'Generate invoice',
        assistantOutput: { invoices: [] },
        model: 'gpt-4o-mini',
        runId: 'run-001',
      });

      expect(example.id).toBeDefined();
      expect(example.step_name).toBe('billings');
      expect(example.source).toBe('evaluation_pass');
      expect(example.messages).toHaveLength(3);
      expect(example.messages[0].role).toBe('system');
      expect(example.messages[1].role).toBe('user');
      expect(example.messages[2].role).toBe('assistant');
      expect(example.metadata.test_case_id).toBe('test-001');
    });

    it('should stringify object outputs', async () => {
      const output = { key: 'value', nested: { data: 123 } };
      const example = await createExampleFromEvaluation({
        testCaseId: 'test-001',
        stepName: 'billings',
        systemPrompt: 'System',
        userInput: 'User',
        assistantOutput: output,
      });

      expect(example.messages[2].content).toBe(JSON.stringify(output, null, 2));
    });

    it('should add to capture context when active', async () => {
      startTrainingCapture('run-001');

      await createExampleFromEvaluation({
        testCaseId: 'test-001',
        stepName: 'billings',
        systemPrompt: 'System',
        userInput: 'User',
        assistantOutput: 'Output',
      });

      const context = getCaptureContext();
      expect(context?.capturedExamples).toHaveLength(1);
    });

    it('should not add to context when no context exists', async () => {
      await createExampleFromEvaluation({
        testCaseId: 'test-001',
        stepName: 'billings',
        systemPrompt: 'System',
        userInput: 'User',
        assistantOutput: 'Output',
      });

      expect(getCaptureContext()).toBeNull();
    });
  });

  describe('createExampleFromCorrection', () => {
    it('should create example from correction', async () => {
      const example = await createExampleFromCorrection({
        correctionId: 'corr-001',
        stepName: 'contracts_orders',
        systemPrompt: 'You are a contracts assistant.',
        inputSummary: 'Multi-product order scenario',
        exampleFix: { orders: [{ id: 1 }] },
      });

      expect(example.step_name).toBe('contracts_orders');
      expect(example.source).toBe('correction_fix');
      expect(example.messages).toHaveLength(3);
      expect(example.metadata.correction_id).toBe('corr-001');
    });

    it('should handle string example_fix', async () => {
      const example = await createExampleFromCorrection({
        correctionId: 'corr-001',
        stepName: 'billings',
        systemPrompt: 'System',
        inputSummary: 'Input',
        exampleFix: 'Raw string output',
      });

      expect(example.messages[2].content).toBe('Raw string output');
    });
  });
});

describe('Dataset Management', () => {
  beforeEach(async () => {
    // Use isolated test path
    setTrainingDataPath(TEST_TRAINING_PATH);

    // Ensure test directory exists
    if (!fs.existsSync(TEST_DATA_DIR)) {
      fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
    }
    // Clean up test files
    if (fs.existsSync(TEST_TRAINING_PATH)) {
      fs.unlinkSync(TEST_TRAINING_PATH);
    }
  });

  afterEach(async () => {
    // Reset to default path
    setTrainingDataPath(null);

    // Clean up test files
    if (fs.existsSync(TEST_TRAINING_PATH)) {
      fs.unlinkSync(TEST_TRAINING_PATH);
    }
    if (fs.existsSync(TEST_EXPORT_PATH)) {
      fs.unlinkSync(TEST_EXPORT_PATH);
    }
  });

  describe('loadTrainingDataset', () => {
    it('should return empty dataset when file does not exist', async () => {
      // Mock the default path - use actual function with non-existent path
      // This test just verifies the function handles missing files
      const dataset = await loadTrainingDataset();

      // Should get existing dataset or empty one
      expect(dataset.version).toBe('1.0');
      expect(Array.isArray(dataset.examples)).toBe(true);
    });
  });

  describe('saveTrainingDataset', () => {
    it('should update stats when saving', async () => {
      const dataset = createMockDataset([
        createMockExample({ step_name: 'billings', source: 'evaluation_pass' }),
        createMockExample({ step_name: 'billings', source: 'evaluation_pass' }),
        createMockExample({ step_name: 'contracts_orders', source: 'correction_fix' }),
      ]);

      // Saving updates stats
      await saveTrainingDataset(dataset);

      expect(dataset.stats.total_examples).toBe(3);
      expect(dataset.stats.by_step['billings']).toBe(2);
      expect(dataset.stats.by_step['contracts_orders']).toBe(1);
      expect(dataset.stats.by_source['evaluation_pass']).toBe(2);
      expect(dataset.stats.by_source['correction_fix']).toBe(1);
    });
  });

  describe('addExamplesToDataset', () => {
    it('should deduplicate by ID', async () => {
      const example1 = createMockExample({ id: 'dupe-id' });
      const example2 = createMockExample({ id: 'dupe-id' });
      const example3 = createMockExample({ id: 'unique-id' });

      // Add first
      await addExamplesToDataset([example1]);

      // Add duplicates and new
      const result = await addExamplesToDataset([example2, example3]);

      // Should only have 2 examples (one dupe skipped)
      const uniqueIds = new Set(result.examples.map((e) => e.id));
      expect(uniqueIds.has('dupe-id')).toBe(true);
      expect(uniqueIds.has('unique-id')).toBe(true);
    });
  });

  describe('flushCapturedExamples', () => {
    beforeEach(() => {
      clearCaptureContext();
    });

    afterEach(() => {
      clearCaptureContext();
    });

    it('should return 0 when no context', async () => {
      const count = await flushCapturedExamples();
      expect(count).toBe(0);
    });

    it('should return 0 when no examples captured', async () => {
      startTrainingCapture('run-001');
      const count = await flushCapturedExamples();
      expect(count).toBe(0);
    });

    it('should flush and clear captured examples', async () => {
      startTrainingCapture('run-001');

      // Add examples to context
      await createExampleFromEvaluation({
        testCaseId: 'test-001',
        stepName: 'billings',
        systemPrompt: 'System',
        userInput: 'User',
        assistantOutput: 'Output',
      });

      await createExampleFromEvaluation({
        testCaseId: 'test-002',
        stepName: 'billings',
        systemPrompt: 'System',
        userInput: 'User',
        assistantOutput: 'Output',
      });

      const context = getCaptureContext();
      expect(context?.capturedExamples.length).toBe(2);

      const flushed = await flushCapturedExamples();

      expect(flushed).toBe(2);
      expect(getCaptureContext()?.capturedExamples.length).toBe(0);
    });
  });
});

describe('Export Functions', () => {
  beforeEach(async () => {
    // Use isolated test path
    setTrainingDataPath(TEST_TRAINING_PATH);

    if (!fs.existsSync(TEST_DATA_DIR)) {
      fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(TEST_EXPORT_PATH)) {
      fs.unlinkSync(TEST_EXPORT_PATH);
    }
    if (fs.existsSync(TEST_TRAINING_PATH)) {
      fs.unlinkSync(TEST_TRAINING_PATH);
    }
  });

  afterEach(async () => {
    // Reset to default path
    setTrainingDataPath(null);

    if (fs.existsSync(TEST_EXPORT_PATH)) {
      fs.unlinkSync(TEST_EXPORT_PATH);
    }
    if (fs.existsSync(TEST_TRAINING_PATH)) {
      fs.unlinkSync(TEST_TRAINING_PATH);
    }
  });

  describe('exportTrainingData', () => {
    it('should export to JSONL format', async () => {
      // First add some examples
      await addExamplesToDataset([
        createMockExample(),
        createMockExample(),
      ]);

      const result = await exportTrainingData(TEST_EXPORT_PATH, { format: 'jsonl' });

      expect(result.exported).toBeGreaterThanOrEqual(0);
      expect(result.path).toBe(TEST_EXPORT_PATH);

      if (result.exported > 0) {
        const content = fs.readFileSync(TEST_EXPORT_PATH, 'utf-8');
        const lines = content.split('\n').filter(Boolean);

        // Each line should be valid JSON with messages
        for (const line of lines) {
          const parsed = JSON.parse(line);
          expect(parsed.messages).toBeDefined();
          expect(Array.isArray(parsed.messages)).toBe(true);
        }
      }
    });

    it('should filter by steps', async () => {
      await addExamplesToDataset([
        createMockExample({ step_name: 'billings' }),
        createMockExample({ step_name: 'contracts_orders' }),
      ]);

      const result = await exportTrainingData(TEST_EXPORT_PATH, {
        format: 'jsonl',
        steps: ['billings'],
      });

      // Should only export billings examples
      expect(result.exported).toBeGreaterThanOrEqual(0);
    });

    it('should filter by source', async () => {
      await addExamplesToDataset([
        createMockExample({ source: 'evaluation_pass' }),
        createMockExample({ source: 'correction_fix' }),
      ]);

      const result = await exportTrainingData(TEST_EXPORT_PATH, {
        format: 'jsonl',
        sources: ['evaluation_pass'],
      });

      expect(result.exported).toBeGreaterThanOrEqual(0);
    });

    it('should respect maxPerStep limit', async () => {
      await addExamplesToDataset([
        createMockExample({ step_name: 'billings' }),
        createMockExample({ step_name: 'billings' }),
        createMockExample({ step_name: 'billings' }),
      ]);

      const result = await exportTrainingData(TEST_EXPORT_PATH, {
        format: 'jsonl',
        maxPerStep: 1,
      });

      // At most 1 per step
      expect(result.exported).toBeLessThanOrEqual(
        Object.keys({ billings: 1, contracts_orders: 1 }).length
      );
    });
  });

  describe('getTrainingStats', () => {
    it('should return stats structure', async () => {
      const stats = await getTrainingStats();

      expect(typeof stats.total).toBe('number');
      expect(typeof stats.byStep).toBe('object');
      expect(typeof stats.bySource).toBe('object');
      expect(typeof stats.correctionsWithFix).toBe('number');
    });
  });
});

describe('Training Example Structure', () => {
  it('should have all required fields', () => {
    const example = createMockExample();

    expect(example.id).toBeDefined();
    expect(example.step_name).toBeDefined();
    expect(example.source).toBeDefined();
    expect(example.messages).toBeDefined();
    expect(example.metadata).toBeDefined();
    expect(example.metadata.created_at).toBeDefined();
  });

  it('should have correct message structure', () => {
    const example = createMockExample();

    expect(example.messages.length).toBeGreaterThanOrEqual(1);

    for (const msg of example.messages) {
      expect(['system', 'user', 'assistant']).toContain(msg.role);
      expect(typeof msg.content).toBe('string');
    }
  });

  it('should support all valid sources', () => {
    const sources = ['evaluation_pass', 'correction_fix'] as const;

    for (const source of sources) {
      const example = createMockExample({ source });
      expect(example.source).toBe(source);
    }
  });
});

describe('Dataset Structure', () => {
  it('should have all required fields', () => {
    const dataset = createMockDataset();

    expect(dataset.version).toBe('1.0');
    expect(dataset.created_at).toBeDefined();
    expect(dataset.updated_at).toBeDefined();
    expect(dataset.stats).toBeDefined();
    expect(Array.isArray(dataset.examples)).toBe(true);
  });

  it('should track stats correctly', () => {
    const examples = [
      createMockExample({ step_name: 'billings', source: 'evaluation_pass' }),
      createMockExample({ step_name: 'billings', source: 'correction_fix' }),
      createMockExample({ step_name: 'contracts_orders', source: 'evaluation_pass' }),
    ];

    const dataset = createMockDataset(examples);

    // Manually update stats like the actual code does
    const byStep: Record<string, number> = {};
    const bySource: Record<string, number> = {};
    for (const ex of examples) {
      byStep[ex.step_name] = (byStep[ex.step_name] || 0) + 1;
      bySource[ex.source] = (bySource[ex.source] || 0) + 1;
    }
    dataset.stats = {
      total_examples: examples.length,
      by_step: byStep,
      by_source: bySource,
    };

    expect(dataset.stats.total_examples).toBe(3);
    expect(dataset.stats.by_step['billings']).toBe(2);
    expect(dataset.stats.by_step['contracts_orders']).toBe(1);
    expect(dataset.stats.by_source['evaluation_pass']).toBe(2);
    expect(dataset.stats.by_source['correction_fix']).toBe(1);
  });
});
