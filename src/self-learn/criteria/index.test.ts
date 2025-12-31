/**
 * Tests for Evaluation Criteria Loader
 *
 * Tests the YAML criteria file loading and validation.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import {
  loadCriteria,
  loadAllCriteria,
  listAvailableCriteria,
  clearCriteriaCache,
  getCriteriaIfExists,
} from './index';

const TEST_CRITERIA_DIR = path.join(process.cwd(), 'data', 'test-criteria');

/**
 * Create a valid criteria YAML file for testing
 */
function createTestCriteriaFile(stepName: string, content?: string): string {
  const defaultContent = `
name: ${stepName}-criteria
version: "1.0"
step: ${stepName}
description: Test criteria for ${stepName}

criteria:
  - id: TEST-001
    name: test-criterion
    description: A test criterion
    severity: high
    patterns:
      - test
      - example
    check:
      type: behavioral
      rule: |
        This is a test rule that checks something.
    examples:
      passing:
        - scenario: "Valid input"
          expected: "Valid output"
      failing:
        - scenario: "Invalid input"
          incorrect: "Wrong output"
          why: "Because it's wrong"
`;

  const filePath = path.join(TEST_CRITERIA_DIR, `${stepName}.yaml`);
  fs.writeFileSync(filePath, content || defaultContent);
  return filePath;
}

describe('Criteria Loader', () => {
  beforeEach(() => {
    // Create test directory
    if (!fs.existsSync(TEST_CRITERIA_DIR)) {
      fs.mkdirSync(TEST_CRITERIA_DIR, { recursive: true });
    }
    clearCriteriaCache();
  });

  afterEach(() => {
    // Clean up test files
    if (fs.existsSync(TEST_CRITERIA_DIR)) {
      const files = fs.readdirSync(TEST_CRITERIA_DIR);
      for (const file of files) {
        fs.unlinkSync(path.join(TEST_CRITERIA_DIR, file));
      }
      fs.rmdirSync(TEST_CRITERIA_DIR);
    }
    clearCriteriaCache();
  });

  describe('loadCriteria', () => {
    it('should load and validate criteria from YAML file', async () => {
      createTestCriteriaFile('billings');

      const criteria = await loadCriteria('billings', TEST_CRITERIA_DIR);

      expect(criteria.name).toBe('billings-criteria');
      expect(criteria.version).toBe('1.0');
      expect(criteria.step).toBe('billings');
      expect(criteria.criteria).toHaveLength(1);
      expect(criteria.criteria[0].id).toBe('TEST-001');
    });

    it('should validate criterion structure', async () => {
      createTestCriteriaFile('test-step');

      const criteria = await loadCriteria('test-step', TEST_CRITERIA_DIR);
      const criterion = criteria.criteria[0];

      expect(criterion.name).toBe('test-criterion');
      expect(criterion.description).toBeDefined();
      expect(criterion.severity).toBe('high');
      expect(criterion.patterns).toContain('test');
      expect(criterion.check.type).toBe('behavioral');
      expect(criterion.check.rule).toContain('test rule');
    });

    it('should parse examples correctly', async () => {
      createTestCriteriaFile('examples-test');

      const criteria = await loadCriteria('examples-test', TEST_CRITERIA_DIR);
      const criterion = criteria.criteria[0];

      expect(criterion.examples?.passing).toHaveLength(1);
      expect(criterion.examples?.passing?.[0].scenario).toBe('Valid input');
      expect(criterion.examples?.failing).toHaveLength(1);
      expect(criterion.examples?.failing?.[0].why).toBe("Because it's wrong");
    });

    it('should throw for non-existent file', async () => {
      await expect(loadCriteria('non-existent', TEST_CRITERIA_DIR)).rejects.toThrow(
        'Criteria file not found'
      );
    });

    it('should try hyphenated name if underscore version not found', async () => {
      createTestCriteriaFile('contracts-orders');

      // Should find contracts-orders.yaml when asked for contracts_orders
      const criteria = await loadCriteria('contracts_orders', TEST_CRITERIA_DIR);

      expect(criteria.step).toBe('contracts-orders');
    });

    it('should try underscore name if hyphenated version not found', async () => {
      createTestCriteriaFile('analyze_contract');

      // Should find analyze_contract.yaml when asked for analyze-contract
      const criteria = await loadCriteria('analyze-contract', TEST_CRITERIA_DIR);

      expect(criteria.step).toBe('analyze_contract');
    });

    it('should cache loaded criteria', async () => {
      createTestCriteriaFile('cached-step');

      const criteria1 = await loadCriteria('cached-step', TEST_CRITERIA_DIR);
      const criteria2 = await loadCriteria('cached-step', TEST_CRITERIA_DIR);

      // Should be same object reference (cached)
      expect(criteria1).toBe(criteria2);
    });

    it('should throw for invalid YAML structure', async () => {
      const invalidContent = `
name: invalid
# Missing required fields
`;
      createTestCriteriaFile('invalid-step', invalidContent);

      await expect(loadCriteria('invalid-step', TEST_CRITERIA_DIR)).rejects.toThrow();
    });

    it('should handle all severity levels', async () => {
      const multiSeverityContent = `
name: multi-severity
version: "1.0"
step: test
criteria:
  - id: CRIT-001
    name: critical-criterion
    description: Critical test
    severity: critical
    patterns: [test]
    check:
      type: behavioral
      rule: Critical rule
  - id: HIGH-001
    name: high-criterion
    description: High test
    severity: high
    patterns: [test]
    check:
      type: behavioral
      rule: High rule
  - id: MED-001
    name: medium-criterion
    description: Medium test
    severity: medium
    patterns: [test]
    check:
      type: structural
      rule: Medium rule
  - id: LOW-001
    name: low-criterion
    description: Low test
    severity: low
    patterns: [test]
    check:
      type: numeric
      rule: Low rule
      threshold: 0.95
`;
      createTestCriteriaFile('multi-severity', multiSeverityContent);

      const criteria = await loadCriteria('multi-severity', TEST_CRITERIA_DIR);

      expect(criteria.criteria).toHaveLength(4);
      expect(criteria.criteria.map((c) => c.severity)).toEqual([
        'critical',
        'high',
        'medium',
        'low',
      ]);
    });

    it('should handle all check types', async () => {
      const multiCheckContent = `
name: multi-check
version: "1.0"
step: test
criteria:
  - id: BEH-001
    name: behavioral-check
    description: Behavioral
    severity: high
    patterns: [test]
    check:
      type: behavioral
      rule: Behavioral rule
  - id: STR-001
    name: structural-check
    description: Structural
    severity: high
    patterns: [test]
    check:
      type: structural
      rule: Structural rule
  - id: NUM-001
    name: numeric-check
    description: Numeric
    severity: high
    patterns: [test]
    check:
      type: numeric
      rule: Numeric rule
      threshold: 0.9
`;
      createTestCriteriaFile('multi-check', multiCheckContent);

      const criteria = await loadCriteria('multi-check', TEST_CRITERIA_DIR);

      expect(criteria.criteria).toHaveLength(3);
      expect(criteria.criteria.map((c) => c.check.type)).toEqual([
        'behavioral',
        'structural',
        'numeric',
      ]);
      expect(criteria.criteria[2].check.threshold).toBe(0.9);
    });
  });

  describe('loadAllCriteria', () => {
    it('should load all criteria files from directory', async () => {
      createTestCriteriaFile('step-one');
      createTestCriteriaFile('step-two');
      createTestCriteriaFile('step-three');

      const allCriteria = await loadAllCriteria(TEST_CRITERIA_DIR);

      expect(allCriteria.size).toBe(3);
      expect(allCriteria.has('step-one')).toBe(true);
      expect(allCriteria.has('step-two')).toBe(true);
      expect(allCriteria.has('step-three')).toBe(true);
    });

    it('should return empty map for non-existent directory', async () => {
      const allCriteria = await loadAllCriteria('/non/existent/path');

      expect(allCriteria.size).toBe(0);
    });

    it('should skip invalid files and continue loading', async () => {
      createTestCriteriaFile('valid-step');
      fs.writeFileSync(
        path.join(TEST_CRITERIA_DIR, 'invalid-step.yaml'),
        'this is not valid yaml: ['
      );

      const allCriteria = await loadAllCriteria(TEST_CRITERIA_DIR);

      expect(allCriteria.size).toBe(1);
      expect(allCriteria.has('valid-step')).toBe(true);
    });
  });

  describe('listAvailableCriteria', () => {
    it('should list all YAML files in directory', () => {
      createTestCriteriaFile('billings');
      createTestCriteriaFile('contracts-orders');

      const available = listAvailableCriteria(TEST_CRITERIA_DIR);

      expect(available).toContain('billings');
      expect(available).toContain('contracts-orders');
      expect(available.length).toBe(2);
    });

    it('should return empty array for non-existent directory', () => {
      const available = listAvailableCriteria('/non/existent/path');

      expect(available).toEqual([]);
    });

    it('should handle both .yaml and .yml extensions', () => {
      createTestCriteriaFile('yaml-ext');
      fs.writeFileSync(
        path.join(TEST_CRITERIA_DIR, 'yml-ext.yml'),
        fs.readFileSync(path.join(TEST_CRITERIA_DIR, 'yaml-ext.yaml'))
      );

      const available = listAvailableCriteria(TEST_CRITERIA_DIR);

      expect(available).toContain('yaml-ext');
      expect(available).toContain('yml-ext');
    });
  });

  describe('clearCriteriaCache', () => {
    it('should clear the cache forcing reload', async () => {
      createTestCriteriaFile('cached');

      // Load to cache
      await loadCriteria('cached', TEST_CRITERIA_DIR);

      // Modify the file
      const modifiedContent = `
name: modified-criteria
version: "2.0"
step: cached
criteria:
  - id: MOD-001
    name: modified
    description: Modified
    severity: low
    patterns: [mod]
    check:
      type: behavioral
      rule: Modified rule
`;
      fs.writeFileSync(path.join(TEST_CRITERIA_DIR, 'cached.yaml'), modifiedContent);

      // Clear cache
      clearCriteriaCache();

      // Should load modified version
      const criteria = await loadCriteria('cached', TEST_CRITERIA_DIR);
      expect(criteria.version).toBe('2.0');
    });
  });

  describe('getCriteriaIfExists', () => {
    it('should return criteria if exists', async () => {
      createTestCriteriaFile('exists');

      const criteria = await getCriteriaIfExists('exists', TEST_CRITERIA_DIR);

      expect(criteria).toBeDefined();
      expect(criteria?.step).toBe('exists');
    });

    it('should return undefined for non-existent file', async () => {
      const criteria = await getCriteriaIfExists('does-not-exist', TEST_CRITERIA_DIR);

      expect(criteria).toBeUndefined();
    });

    it('should not throw for missing files', async () => {
      await expect(
        getCriteriaIfExists('missing', TEST_CRITERIA_DIR)
      ).resolves.toBeUndefined();
    });
  });
});

describe('Real Criteria Files', () => {
  // Test against actual criteria files in the project
  const REAL_CRITERIA_DIR = path.join(process.cwd(), 'data', 'evaluation-criteria');

  beforeEach(() => {
    clearCriteriaCache();
  });

  it('should list available real criteria files', () => {
    const available = listAvailableCriteria(REAL_CRITERIA_DIR);

    // Should have criteria for main pipeline steps
    expect(available.length).toBeGreaterThan(0);
  });

  it('should load real billings criteria if exists', async () => {
    const criteria = await getCriteriaIfExists('billings', REAL_CRITERIA_DIR);

    if (criteria) {
      expect(criteria.step).toBe('billings');
      expect(criteria.criteria.length).toBeGreaterThan(0);

      // Each criterion should have required fields
      for (const c of criteria.criteria) {
        expect(c.id).toBeDefined();
        expect(c.name).toBeDefined();
        expect(c.severity).toBeDefined();
        expect(c.check.type).toBeDefined();
        expect(c.check.rule).toBeDefined();
      }
    }
  });
});
