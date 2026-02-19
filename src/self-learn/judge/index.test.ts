/**
 * Tests for LLM Judge Module
 *
 * Tests evaluation logic, result analysis, and ensemble consensus.
 */

import { describe, it, expect } from 'vitest';
import {
  hasCriticalFailures,
  getFailedEvaluations,
  DEFAULT_ENSEMBLE_CONFIG,
  LIGHTWEIGHT_ENSEMBLE_CONFIG,
  createEnsembleConfig,
  formatEnsembleResultForDisplay,
} from './index';
import type {
  JudgeResult,
  EvaluationCriteria,
  Criterion,
  CriterionEvaluation,
} from '../types';
import type { EnsembleResult, SingleJudgeResult, Disagreement } from './ensemble-types';

/**
 * Create a mock criterion for testing
 */
function createMockCriterion(overrides: Partial<Criterion> = {}): Criterion {
  return {
    id: 'TEST-001',
    name: 'test-criterion',
    description: 'A test criterion',
    severity: 'high',
    patterns: ['test', 'example'],
    check: {
      type: 'behavioral',
      rule: 'Check that something is correct',
    },
    ...overrides,
  };
}

/**
 * Create a mock evaluation criteria file
 */
function createMockCriteria(criteria: Criterion[]): EvaluationCriteria {
  return {
    name: 'test-criteria',
    version: '1.0',
    step: 'test-step',
    criteria,
  };
}

/**
 * Create a mock evaluation result
 */
function createMockEvaluation(overrides: Partial<CriterionEvaluation> = {}): CriterionEvaluation {
  return {
    criterion_id: 'TEST-001',
    criterion_name: 'Test Criterion',
    passed: true,
    confidence: 0.9,
    explanation: 'Evaluation passed',
    correction: null,
    ...overrides,
  };
}

/**
 * Create a mock judge result
 */
function createMockJudgeResult(overrides: Partial<JudgeResult> = {}): JudgeResult {
  return {
    overall_pass: true,
    evaluations: [createMockEvaluation()],
    overall_notes: 'All criteria passed',
    ...overrides,
  };
}

describe('hasCriticalFailures', () => {
  it('should return true when a critical criterion fails', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'CRIT-001', severity: 'critical' }),
      createMockCriterion({ id: 'HIGH-001', severity: 'high' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'CRIT-001', passed: false }),
        createMockEvaluation({ criterion_id: 'HIGH-001', passed: true }),
      ],
    });

    expect(hasCriticalFailures(result, criteria)).toBe(true);
  });

  it('should return false when critical criteria pass', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'CRIT-001', severity: 'critical' }),
      createMockCriterion({ id: 'HIGH-001', severity: 'high' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'CRIT-001', passed: true }),
        createMockEvaluation({ criterion_id: 'HIGH-001', passed: false }),
      ],
    });

    expect(hasCriticalFailures(result, criteria)).toBe(false);
  });

  it('should return false when no critical criteria exist', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'HIGH-001', severity: 'high' }),
      createMockCriterion({ id: 'MED-001', severity: 'medium' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'HIGH-001', passed: false }),
        createMockEvaluation({ criterion_id: 'MED-001', passed: false }),
      ],
    });

    expect(hasCriticalFailures(result, criteria)).toBe(false);
  });

  it('should handle empty evaluations', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'CRIT-001', severity: 'critical' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: true,
      evaluations: [],
    });

    expect(hasCriticalFailures(result, criteria)).toBe(false);
  });
});

describe('getFailedEvaluations', () => {
  it('should return only failed evaluations', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'CRIT-001', severity: 'critical' }),
      createMockCriterion({ id: 'HIGH-001', severity: 'high' }),
      createMockCriterion({ id: 'MED-001', severity: 'medium' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'CRIT-001', passed: true }),
        createMockEvaluation({ criterion_id: 'HIGH-001', passed: false }),
        createMockEvaluation({ criterion_id: 'MED-001', passed: false }),
      ],
    });

    const failed = getFailedEvaluations(result, criteria);

    expect(failed.length).toBe(2);
    expect(failed.every((e) => !e.passed)).toBe(true);
  });

  it('should sort failed evaluations by severity (critical first)', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'LOW-001', severity: 'low' }),
      createMockCriterion({ id: 'CRIT-001', severity: 'critical' }),
      createMockCriterion({ id: 'MED-001', severity: 'medium' }),
      createMockCriterion({ id: 'HIGH-001', severity: 'high' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'LOW-001', passed: false }),
        createMockEvaluation({ criterion_id: 'CRIT-001', passed: false }),
        createMockEvaluation({ criterion_id: 'MED-001', passed: false }),
        createMockEvaluation({ criterion_id: 'HIGH-001', passed: false }),
      ],
    });

    const failed = getFailedEvaluations(result, criteria);

    expect(failed.length).toBe(4);
    expect(failed[0].criterion_id).toBe('CRIT-001');
    expect(failed[1].criterion_id).toBe('HIGH-001');
    expect(failed[2].criterion_id).toBe('MED-001');
    expect(failed[3].criterion_id).toBe('LOW-001');
  });

  it('should return empty array when all pass', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'TEST-001' }),
    ]);

    const result = createMockJudgeResult({
      overall_pass: true,
      evaluations: [createMockEvaluation({ passed: true })],
    });

    const failed = getFailedEvaluations(result, criteria);

    expect(failed).toEqual([]);
  });

  it('should handle unknown severity gracefully', () => {
    const criteria = createMockCriteria([
      createMockCriterion({ id: 'UNKNOWN-001' }),
    ]);

    // Evaluation for a criterion not in criteria list
    const result = createMockJudgeResult({
      overall_pass: false,
      evaluations: [
        createMockEvaluation({ criterion_id: 'ORPHAN-001', passed: false }),
      ],
    });

    const failed = getFailedEvaluations(result, criteria);

    expect(failed.length).toBe(1);
    // Should default to 'low' severity and appear at end
  });
});

describe('DEFAULT_ENSEMBLE_CONFIG', () => {
  it('should have sensible default values', () => {
    expect(DEFAULT_ENSEMBLE_CONFIG.judges.length).toBeGreaterThanOrEqual(2);
    expect(DEFAULT_ENSEMBLE_CONFIG.consensusThreshold).toBeGreaterThan(0.5);
    expect(DEFAULT_ENSEMBLE_CONFIG.consensusThreshold).toBeLessThanOrEqual(1);
    expect(DEFAULT_ENSEMBLE_CONFIG.parallel).toBe(true);
    expect(DEFAULT_ENSEMBLE_CONFIG.tolerateFailures).toBe(true);
    expect(DEFAULT_ENSEMBLE_CONFIG.minJudgesRequired).toBeGreaterThanOrEqual(2);
  });

  it('should have positive weights for all judges', () => {
    for (const judge of DEFAULT_ENSEMBLE_CONFIG.judges) {
      expect(judge.weight).toBeGreaterThan(0);
      expect(judge.model).toBeDefined();
    }
  });
});

describe('LIGHTWEIGHT_ENSEMBLE_CONFIG', () => {
  it('should have fewer judges than default', () => {
    expect(LIGHTWEIGHT_ENSEMBLE_CONFIG.judges.length).toBeLessThanOrEqual(
      DEFAULT_ENSEMBLE_CONFIG.judges.length
    );
  });

  it('should require all judges for consensus (stricter)', () => {
    // Lightweight config should have tolerateFailures = false
    expect(LIGHTWEIGHT_ENSEMBLE_CONFIG.tolerateFailures).toBe(false);
  });
});

describe('createEnsembleConfig', () => {
  it('should create config with specified models', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview']);

    expect(config.judges.length).toBe(2);
    expect(config.judges[0].model).toBe('gpt-5.2');
    expect(config.judges[1].model).toBe('gemini-3-flash-preview');
  });

  it('should assign equal weights to all judges', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview', 'gemini-3.1-pro-preview']);

    for (const judge of config.judges) {
      expect(judge.weight).toBe(1.0);
    }
  });

  it('should use default consensus threshold when not specified', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview']);

    expect(config.consensusThreshold).toBe(0.66);
  });

  it('should allow overriding consensus threshold', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview'], {
      consensusThreshold: 0.8,
    });

    expect(config.consensusThreshold).toBe(0.8);
  });

  it('should calculate minJudgesRequired as ceil(n/2)', () => {
    // 2 judges -> min 2
    const config2 = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview']);
    expect(config2.minJudgesRequired).toBe(2);

    // 3 judges -> min 2
    const config3 = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview', 'gemini-3.1-pro-preview']);
    expect(config3.minJudgesRequired).toBe(2);

    // 4 judges -> min 2 (using duplicates for test since only 3 models exist)
    const config4 = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview', 'gemini-3.1-pro-preview', 'gpt-5.2']);
    expect(config4.minJudgesRequired).toBe(2);
  });

  it('should allow overriding minJudgesRequired', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview'], {
      minJudgesRequired: 1,
    });

    expect(config.minJudgesRequired).toBe(1);
  });

  it('should default to parallel execution', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview']);

    expect(config.parallel).toBe(true);
  });

  it('should allow disabling parallel execution', () => {
    const config = createEnsembleConfig(['gpt-5.2', 'gemini-3-flash-preview'], {
      parallel: false,
    });

    expect(config.parallel).toBe(false);
  });
});

describe('formatEnsembleResultForDisplay', () => {
  /**
   * Create a mock single judge result
   */
  function createMockSingleResult(overrides: Partial<SingleJudgeResult> = {}): SingleJudgeResult {
    return {
      model: 'gpt-5.2',
      weight: 1.0,
      result: createMockJudgeResult(),
      durationMs: 1500,
      success: true,
      ...overrides,
    };
  }

  /**
   * Create a mock ensemble result
   */
  function createMockEnsembleResult(overrides: Partial<EnsembleResult> = {}): EnsembleResult {
    return {
      consensus: createMockJudgeResult(),
      individualResults: [createMockSingleResult()],
      disagreements: [],
      overallConfidence: 0.95,
      judgesSucceeded: 1,
      totalDurationMs: 1500,
      ...overrides,
    };
  }

  it('should include overall pass/fail status', () => {
    const passingResult = createMockEnsembleResult({
      consensus: createMockJudgeResult({ overall_pass: true }),
    });
    const passingOutput = formatEnsembleResultForDisplay(passingResult);
    expect(passingOutput).toContain('PASS');

    const failingResult = createMockEnsembleResult({
      consensus: createMockJudgeResult({ overall_pass: false }),
    });
    const failingOutput = formatEnsembleResultForDisplay(failingResult);
    expect(failingOutput).toContain('FAIL');
  });

  it('should include confidence percentage', () => {
    const result = createMockEnsembleResult({ overallConfidence: 0.85 });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('85.0%');
  });

  it('should include judge success count', () => {
    const result = createMockEnsembleResult({
      judgesSucceeded: 2,
      individualResults: [
        createMockSingleResult({ model: 'gpt-5.2', success: true }),
        createMockSingleResult({ model: 'gemini-3-flash-preview', success: true }),
        createMockSingleResult({ model: 'gemini-3.1-pro-preview', success: false, error: 'Timeout' }),
      ],
    });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('2/3 succeeded');
  });

  it('should include duration', () => {
    const result = createMockEnsembleResult({ totalDurationMs: 2500 });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('2500ms');
  });

  it('should include individual judge results', () => {
    const result = createMockEnsembleResult({
      individualResults: [
        createMockSingleResult({
          model: 'gpt-5.2',
          result: createMockJudgeResult({ overall_pass: true }),
          durationMs: 1200,
        }),
        createMockSingleResult({
          model: 'gemini-3-flash-preview',
          result: createMockJudgeResult({ overall_pass: false }),
          durationMs: 800,
        }),
      ],
    });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('gpt-5.2: PASS');
    expect(output).toContain('gemini-3-flash-preview: FAIL');
  });

  it('should show errors for failed judges', () => {
    const result = createMockEnsembleResult({
      individualResults: [
        createMockSingleResult({
          model: 'gpt-5.2',
          success: false,
          error: 'Connection timeout',
        }),
      ],
    });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('ERROR');
    expect(output).toContain('Connection timeout');
  });

  it('should show disagreements when present', () => {
    const disagreement: Disagreement = {
      criterionId: 'TEST-001',
      criterionName: 'Test Criterion',
      severity: 'high',
      votes: [
        { model: 'gpt-5.2', passed: true, confidence: 0.9, explanation: 'Looks good' },
        { model: 'gemini-3-flash-preview', passed: false, confidence: 0.8, explanation: 'Missing field' },
      ],
      weightedPassRatio: 0.5,
      consensusDecision: false,
    };

    const result = createMockEnsembleResult({
      disagreements: [disagreement],
    });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).toContain('Disagreements');
    expect(output).toContain('Test Criterion');
    expect(output).toContain('high');
    expect(output).toContain('50.0%');
  });

  it('should not show disagreements section when none exist', () => {
    const result = createMockEnsembleResult({
      disagreements: [],
    });
    const output = formatEnsembleResultForDisplay(result);

    expect(output).not.toContain('Disagreements:');
  });
});

describe('JudgeResult structure', () => {
  it('should validate a well-formed judge result', () => {
    const result: JudgeResult = {
      overall_pass: true,
      evaluations: [
        {
          criterion_id: 'BL-001',
          criterion_name: 'Invoice total validation',
          passed: true,
          confidence: 0.95,
          explanation: 'Invoice total matches sum of line items',
          correction: null,
        },
      ],
      overall_notes: 'All criteria passed successfully',
    };

    expect(result.overall_pass).toBe(true);
    expect(result.evaluations.length).toBe(1);
    expect(result.evaluations[0].passed).toBe(true);
    expect(result.evaluations[0].correction).toBeNull();
  });

  it('should validate a failing judge result with corrections', () => {
    const result: JudgeResult = {
      overall_pass: false,
      evaluations: [
        {
          criterion_id: 'BL-002',
          criterion_name: 'Discount calculation',
          passed: false,
          confidence: 0.85,
          explanation: 'Discount percentage not applied correctly',
          correction: {
            issue_type: 'wrong_calculation',
            expected_behavior: 'Apply 10% discount to subtotal before tax',
            suggested_fix: 'Calculate discount as subtotal * 0.10',
            example_output: '{"discount": 25.00, "subtotal": 250.00}',
          },
        },
      ],
      overall_notes: 'Discount calculation needs fixing',
    };

    expect(result.overall_pass).toBe(false);
    expect(result.evaluations[0].correction).not.toBeNull();
    expect(result.evaluations[0].correction?.issue_type).toBe('wrong_calculation');
  });
});

describe('Criterion structure', () => {
  it('should validate behavioral check type', () => {
    const criterion: Criterion = {
      id: 'BEH-001',
      name: 'behavioral-criterion',
      description: 'Tests behavioral rule',
      severity: 'high',
      patterns: ['test'],
      check: {
        type: 'behavioral',
        rule: 'Must do something specific',
      },
    };

    expect(criterion.check.type).toBe('behavioral');
    expect(criterion.check.threshold).toBeUndefined();
  });

  it('should validate numeric check type with threshold', () => {
    const criterion: Criterion = {
      id: 'NUM-001',
      name: 'numeric-criterion',
      description: 'Tests numeric rule',
      severity: 'medium',
      patterns: ['calculation'],
      check: {
        type: 'numeric',
        rule: 'Value must be within tolerance',
        threshold: 0.95,
      },
    };

    expect(criterion.check.type).toBe('numeric');
    expect(criterion.check.threshold).toBe(0.95);
  });

  it('should validate criterion examples', () => {
    const criterion: Criterion = {
      id: 'EX-001',
      name: 'criterion-with-examples',
      description: 'Has examples',
      severity: 'high',
      patterns: ['example'],
      check: {
        type: 'behavioral',
        rule: 'Rule text',
      },
      examples: {
        passing: [
          { scenario: 'Valid input', expected: 'Valid output' },
        ],
        failing: [
          { scenario: 'Invalid input', incorrect: 'Wrong output', why: 'Missing field' },
        ],
      },
    };

    expect(criterion.examples?.passing?.length).toBe(1);
    expect(criterion.examples?.failing?.length).toBe(1);
    expect(criterion.examples?.failing?.[0].why).toBe('Missing field');
  });
});
