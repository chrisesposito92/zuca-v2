import { describe, expect, it, vi } from 'vitest';

// Agent factory imports
import { createAnalyzeContractAgent } from '../../src/pipeline-agents/agents/analyze-contract';
import { createBuildContractsOrdersAgent } from '../../src/pipeline-agents/agents/build-contracts-orders';
import { createBuildBillingsAgent } from '../../src/pipeline-agents/agents/build-billings';
import { createBuildRevRecWaterfallAgent } from '../../src/pipeline-agents/agents/build-revrec-waterfall';
import { createSummarizeAgent } from '../../src/pipeline-agents/agents/summarize';
import { createSelfEvalAgent } from '../../src/pipeline-agents/agents/self-eval';
import { createDesignSubscriptionAgent } from '../../src/pipeline-agents/agents/design-subscription';

// Schema imports
import { createDesignSubscriptionOutputSchema } from '../../src/pipeline-agents/schemas/design-subscription';
import type { PobTemplate } from '../../src/types/golden-use-cases';

// Minimal POB templates for testing
const testPobTemplates: PobTemplate[] = [
  {
    'POB Identifier': 'BK-OT-RATABLE-STARTDATE',
    'POB Name': 'Booking Over Time Ratable Start Date',
    'Charge Type': 'Recurring',
    'Charge Model': 'Flat Fee',
    'Recognition Notes': 'Recognize ratably over time from start date',
  } as PobTemplate,
  {
    'POB Identifier': 'BL-OT-INVRATABLE-STARTDATE',
    'POB Name': 'Billing Over Time Invoice Ratable Start Date',
    'Charge Type': 'Recurring',
    'Charge Model': 'Flat Fee',
    'Recognition Notes': 'Invoice ratable from start date',
  } as PobTemplate,
];

describe('agent factories: model parameter', () => {
  it('createAnalyzeContractAgent defaults to gpt-5.2', () => {
    const agent = createAnalyzeContractAgent();
    expect(agent.model).toBe('gpt-5.2');
  });

  it('createAnalyzeContractAgent accepts custom model', () => {
    const agent = createAnalyzeContractAgent('gemini-3-flash-preview');
    expect(agent.model).toBe('gemini-3-flash-preview');
  });

  it('createBuildContractsOrdersAgent accepts custom model', () => {
    const agent = createBuildContractsOrdersAgent('o4-mini');
    expect(agent.model).toBe('o4-mini');
  });

  it('createBuildBillingsAgent accepts custom model', () => {
    const agent = createBuildBillingsAgent('o4-mini');
    expect(agent.model).toBe('o4-mini');
  });

  it('createBuildRevRecWaterfallAgent accepts custom model', () => {
    const agent = createBuildRevRecWaterfallAgent('o4-mini');
    expect(agent.model).toBe('o4-mini');
  });

  it('createSummarizeAgent accepts custom model', () => {
    const agent = createSummarizeAgent('o4-mini');
    expect(agent.model).toBe('o4-mini');
  });

  it('createSelfEvalAgent accepts custom model', () => {
    const agent = createSelfEvalAgent('o4-mini');
    expect(agent.model).toBe('o4-mini');
  });

  it('createDesignSubscriptionAgent accepts custom model', () => {
    const agent = createDesignSubscriptionAgent(testPobTemplates, 'o4-mini');
    expect(agent.model).toBe('o4-mini');
  });
});

describe('design-subscription schema: empty pobTemplates guard', () => {
  it('throws when pobTemplates is empty', () => {
    expect(() => createDesignSubscriptionOutputSchema([])).toThrow(
      'No POB templates loaded'
    );
  });

  it('succeeds with valid pobTemplates', () => {
    const schema = createDesignSubscriptionOutputSchema(testPobTemplates);
    expect(schema).toBeDefined();
    expect(schema.shape).toBeDefined();
  });
});
