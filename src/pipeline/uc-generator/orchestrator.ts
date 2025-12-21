/**
 * UC Generator Pipeline Orchestrator
 *
 * Manages the execution of the Use Case Generator pipeline,
 * coordinating research, generation, and formatting steps.
 */

import { v4 as uuidv4 } from 'uuid';
import {
  UCGeneratorInput,
  UCGeneratorOutput,
  CustomerResearch,
  GeneratedUseCase,
  validateUCGeneratorInput,
} from '../../types/uc-generator';
import { ZucaInput, BillingPeriod, Currency, AllocationMethod } from '../../types/input';
import { debugLog } from '../../config';

// Import all pipeline steps
import { researchCustomer, generateUseCases, formatOutput, formatOutputLocally } from './steps/index';

/**
 * Pipeline execution options
 */
export interface UCGeneratorOptions {
  /** Use local formatting instead of LLM (faster, more deterministic) */
  useLocalFormatting?: boolean;
  /** Skip research step (for testing with pre-provided research) */
  preResearch?: CustomerResearch;
  /** Session ID for tracking */
  sessionId?: string;
}

/**
 * Pipeline step result with timing
 */
interface StepResult<T> {
  data: T;
  durationMs: number;
  stepName: string;
}

/**
 * Execute a pipeline step with timing
 */
async function executeStep<T>(stepName: string, fn: () => Promise<T>): Promise<StepResult<T>> {
  const startTime = Date.now();
  debugLog(`[UC Generator] Starting step: ${stepName}`);

  try {
    const data = await fn();
    const durationMs = Date.now() - startTime;
    debugLog(`[UC Generator] Completed step: ${stepName} (${durationMs}ms)`);
    return { data, durationMs, stepName };
  } catch (error) {
    const durationMs = Date.now() - startTime;
    debugLog(`[UC Generator] Failed step: ${stepName} (${durationMs}ms)`, error);
    throw error;
  }
}

/**
 * Run the UC Generator pipeline
 *
 * Generates 1-3 demo-ready use cases for a customer based on web research.
 */
export async function runUCGenerator(
  input: UCGeneratorInput,
  options: UCGeneratorOptions = {}
): Promise<UCGeneratorOutput> {
  const sessionId = options.sessionId || uuidv4();

  debugLog('[UC Generator] Starting pipeline', {
    sessionId,
    customerName: input.customer_name,
    numUseCases: input.num_use_cases,
  });

  // Validate input
  const validatedInput = validateUCGeneratorInput(input);

  const stepTimings: Record<string, number> = {};

  try {
    // Step 1: Research Customer (or use pre-provided research)
    let research: CustomerResearch;
    if (options.preResearch) {
      research = options.preResearch;
      debugLog('[UC Generator] Using pre-provided research');
    } else {
      const researchStep = await executeStep('research_customer', () => researchCustomer(validatedInput));
      research = researchStep.data;
      stepTimings.research_customer = researchStep.durationMs;
    }

    // Step 2: Generate Use Cases
    const generateStep = await executeStep('generate_use_cases', () =>
      generateUseCases(validatedInput, research)
    );
    const generated = generateStep.data;
    stepTimings.generate_use_cases = generateStep.durationMs;

    // Step 3: Format Output
    let formatted: string;
    if (options.useLocalFormatting) {
      formatted = formatOutputLocally(generated);
      debugLog('[UC Generator] Used local formatting');
    } else {
      const formatStep = await executeStep('format_output', () => formatOutput(generated));
      formatted = formatStep.data;
      stepTimings.format_output = formatStep.durationMs;
    }

    debugLog('[UC Generator] Pipeline completed', {
      sessionId,
      stepTimings,
      totalMs: Object.values(stepTimings).reduce((a, b) => a + b, 0),
    });

    return {
      research,
      generated,
      formatted,
      use_cases: generated.use_cases,
      session_id: sessionId,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    debugLog('[UC Generator] Pipeline failed', { sessionId, error });
    throw error;
  }
}

/**
 * Convert a generated use case's otr_workflow_inputs to ZucaInput
 *
 * This allows the output of the UC Generator to be fed directly
 * into the main ZUCA pipeline.
 */
export function mapToZucaInput(useCase: GeneratedUseCase): ZucaInput {
  const inputs = useCase.otr_workflow_inputs;

  // Map transaction_currency to valid Currency type
  const currencyMap: Record<string, Currency> = {
    USD: 'USD',
    EUR: 'EUR',
    CAD: 'CAD',
    other: 'USD', // Default to USD for 'other'
  };

  // Map billing_period to valid BillingPeriod type
  const billingPeriodMap: Record<string, BillingPeriod> = {
    Monthly: 'Monthly',
    Quarterly: 'Quarterly',
    Annually: 'Annually',
  };

  // Map allocation_method to valid AllocationMethod type
  const allocationMethodMap: Record<string, AllocationMethod | undefined> = {
    'Use List Price': 'Use List Price',
    'Use Sell Price': 'Use Sell Price',
    'Custom Formula': 'Custom Formula',
    '': undefined,
  };

  // Format rev_rec_notes as a string for the main pipeline
  const revRecNotesString = inputs.rev_rec_notes
    .map((note) => `${note.charge_group}: ${note.likely_pob_type}, ${note.release_pattern} (${note.notes})`)
    .join('\n');

  return {
    customer_name: inputs.customer_name,
    contract_start_date: inputs.contract_start_date,
    terms_months: inputs.terms_months,
    transaction_currency: currencyMap[inputs.transaction_currency] || 'USD',
    billing_period: billingPeriodMap[inputs.billing_period] || 'Monthly',
    is_allocations: inputs.is_allocations,
    allocation_method: allocationMethodMap[inputs.allocation_method],
    allocation_custom_formula: inputs.allocation_custom_formula || undefined,
    use_case_description: inputs.use_case,
    rev_rec_notes: revRecNotesString || undefined,
  };
}

/**
 * Quick research only (for previewing customer info)
 */
export async function quickResearch(input: UCGeneratorInput): Promise<CustomerResearch> {
  const validatedInput = validateUCGeneratorInput(input);
  return researchCustomer(validatedInput);
}
