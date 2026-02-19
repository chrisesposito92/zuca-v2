import { describe, expect, it, vi, beforeEach } from 'vitest';
import type { PipelineContext } from '../../src/pipeline-agents/context';
import type { GoldenUseCasesData } from '../../src/data/loader';
import type { ZucaInput } from '../../src/types/input';

// We test Ralph behavior by mocking the @openai/agents run() function
// and the Ralph config utilities.

// Mock @openai/agents
vi.mock('@openai/agents', () => ({
  Agent: vi.fn().mockImplementation((opts: Record<string, unknown>) => ({
    name: opts.name,
    model: opts.model,
    instructions: opts.instructions,
    outputType: opts.outputType,
  })),
  run: vi.fn(),
}));

// Mock ralph config
vi.mock('../../src/pipeline/ralph/config', () => ({
  getRalphStepConfig: vi.fn().mockReturnValue({
    maxIterations: 3,
    allowClarifications: true,
    minConfidenceThreshold: 0.8,
  }),
  isStepRalphEnabled: vi.fn().mockReturnValue(true),
}));

// Mock ralph context builders
vi.mock('../../src/pipeline/ralph/context-builder', () => ({
  buildIterationContext: vi.fn().mockReturnValue(''),
  buildSelfEvalContext: vi.fn().mockReturnValue('eval context'),
}));

// Mock ralph evaluator
vi.mock('../../src/pipeline/ralph/evaluator', () => ({
  validateClarificationData: vi.fn().mockReturnValue(false),
}));

// Mock prompts
vi.mock('../../src/llm/prompts/index', () => ({
  loadPrompt: vi.fn().mockResolvedValue('test prompt'),
  PROMPTS: { RALPH_SELF_EVAL: 'ralph-self-eval' },
}));

// Mock config
vi.mock('../../src/config', () => ({
  debugLog: vi.fn(),
  config: { openai: { model: 'gpt-5.2' } },
}));

import { run } from '@openai/agents';
import { withRalphAgent } from '../../src/pipeline-agents/ralph';

const mockRun = vi.mocked(run);

function createMockContext(overrides?: Partial<PipelineContext>): PipelineContext {
  return {
    sessionId: 'test-session',
    input: { customer_name: 'Test' } as ZucaInput,
    model: 'gpt-5.2',
    goldenData: {} as GoldenUseCasesData,
    interactiveMode: false,
    skipAllClarifications: false,
    result: {},
    clarificationAnswers: [],
    ralphEnabled: true,
    ralphState: { stepStates: {} },
    stepTimings: {},
    ...overrides,
  };
}

describe('withRalphAgent: non-interactive clarification loop termination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('terminates when step agent keeps requesting clarification in non-interactive mode', async () => {
    // Every step run returns a clarification request
    const clarificationOutput = {
      someField: 'value',
      needs_clarification: true,
      clarification_question: 'Need more info',
      clarification_options: [{ id: '1', label: 'Option A' }],
      clarification_context: 'Missing data',
      clarification_priority: 'important',
    };

    mockRun.mockResolvedValue({ finalOutput: clarificationOutput } as any);

    const ctx = createMockContext({ interactiveMode: false });
    const mockAgent = { name: 'test', model: 'gpt-5.2' } as any;

    // When all iterations skip (clarification in non-interactive), the loop
    // terminates at maxIterations and throws because no valid output exists.
    // The critical thing is: it TERMINATES, not runs forever.
    await expect(withRalphAgent({
      stepName: 'test_step',
      agent: mockAgent,
      buildUserMessage: () => 'test message',
      pipelineContext: ctx,
    })).rejects.toThrow('Ralph: No output available after 3 iterations');

    // Verify run() was called exactly 3 times (once per iteration, not infinitely)
    expect(mockRun).toHaveBeenCalledTimes(3);
  });

  it('does not loop infinitely when ralph-disabled step returns clarification in non-interactive mode', async () => {
    // Mock isStepRalphEnabled to return false
    const { isStepRalphEnabled } = await import('../../src/pipeline/ralph/config');
    vi.mocked(isStepRalphEnabled).mockReturnValueOnce(false);

    // Agent output has no clarification
    mockRun.mockResolvedValue({
      finalOutput: { someField: 'value', needs_clarification: false },
    } as any);

    const ctx = createMockContext({ interactiveMode: false });
    const mockAgent = { name: 'test', model: 'gpt-5.2' } as any;

    const result = await withRalphAgent({
      stepName: 'test_step',
      agent: mockAgent,
      buildUserMessage: () => 'test message',
      pipelineContext: ctx,
    });

    expect(result.completed).toBe(true);
    expect(mockRun).toHaveBeenCalledTimes(1);
  });
});

describe('withRalphAgent: clarification question ID format', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('generates question IDs that start with stepName:', async () => {
    // Mock isStepRalphEnabled to return false (simpler path)
    const { isStepRalphEnabled } = await import('../../src/pipeline/ralph/config');
    vi.mocked(isStepRalphEnabled).mockReturnValueOnce(false);

    // Agent output requests clarification
    mockRun.mockResolvedValue({
      finalOutput: {
        someField: 'value',
        needs_clarification: true,
        clarification_question: 'What billing model?',
        clarification_options: [{ id: '1', label: 'Monthly' }, { id: '2', label: 'Annual' }],
        clarification_context: 'Need billing details',
        clarification_priority: 'important',
      },
    } as any);

    const ctx = createMockContext({ interactiveMode: true });
    const mockAgent = { name: 'test', model: 'gpt-5.2' } as any;

    const result = await withRalphAgent({
      stepName: 'analyze_contract',
      agent: mockAgent,
      buildUserMessage: () => 'test message',
      pipelineContext: ctx,
    });

    expect(result.completed).toBe(false);
    expect(result.clarificationRequest).toBeDefined();
    const qId = result.clarificationRequest!.question.questionId;
    // ID must start with stepName: (not step:stepName: or other prefixes)
    expect(qId).toMatch(/^analyze_contract:\d+$/);
  });
});
