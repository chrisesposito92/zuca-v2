/**
 * POST /api/sessions/[id]/edit
 *
 * Edit a specific field in the session input and re-run only affected pipeline steps.
 * This is the "smart rerun" feature that avoids re-running the entire pipeline.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getSession, updateSessionInput, updateSessionResult, updateSessionStatus } from '@/lib/db';
import { runPipeline, isPipelineClarificationPause } from '@zuca/pipeline';
import type { ZucaInput, ZucaOutput } from '@zuca/types';
import { isOpenAIModel } from '@zuca/types/llm';

const USE_AGENTS = process.env.USE_AGENTS_PIPELINE === 'true';

async function getRunPipelineFn(model?: string) {
  if (USE_AGENTS && (!model || isOpenAIModel(model))) {
    const { runAgentsPipeline } = await import('@zuca/pipeline-agents');
    return runAgentsPipeline;
  }
  return runPipeline;
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * Field to affected steps mapping.
 * When a field changes, we need to clear these step results to force re-computation.
 */
const FIELD_DEPENDENCIES: Record<string, (keyof ZucaOutput)[]> = {
  // customer_name is display only, no rerun needed
  customer_name: [],

  // Contract dates affect contract intel and downstream calculations
  contract_start_date: [
    'contract_intel',
    'contracts_orders',
    'billings',
    'revrec_waterfall',
    'summary',
  ],

  // Term length affects many calculations
  terms_months: [
    'contract_intel',
    'subscription_spec',
    'contracts_orders',
    'billings',
    'revrec_waterfall',
    'summary',
  ],

  // Use case description affects capability detection and downstream
  use_case_description: [
    'detected_capabilities',
    'matched_golden_use_cases',
    'subscription_spec',
    'pob_mapping',
    'contracts_orders',
    'billings',
    'revrec_waterfall',
    'summary',
  ],

  // Allocation settings affect POB mapping and orders
  is_allocations: ['pob_mapping', 'contracts_orders', 'revrec_waterfall', 'summary'],
  allocation_method: ['pob_mapping', 'contracts_orders', 'revrec_waterfall', 'summary'],

  // Currency affects billing calculations
  transaction_currency: ['billings', 'summary'],

  // Billing period affects billing schedule
  billing_period: ['subscription_spec', 'billings', 'summary'],

  // Rev rec notes affect POB mapping
  rev_rec_notes: ['pob_mapping', 'contracts_orders', 'revrec_waterfall', 'summary'],
};

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { field, value } = body;

    // Validate field
    if (!field || typeof field !== 'string') {
      return NextResponse.json(
        { error: 'Missing field', details: 'Request body must include a "field" string' },
        { status: 400 }
      );
    }

    // Get existing session
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Only support analyze sessions for now
    if (session.session_type !== 'analyze') {
      return NextResponse.json(
        { error: 'Edit not supported for this session type' },
        { status: 400 }
      );
    }

    const currentInput = session.input as ZucaInput;
    const currentResult = session.result as ZucaOutput | null;

    // Validate field exists in input
    if (!(field in currentInput)) {
      return NextResponse.json(
        { error: 'Invalid field', details: `Field "${field}" does not exist in session input` },
        { status: 400 }
      );
    }

    // Check if value actually changed
    if (currentInput[field as keyof ZucaInput] === value) {
      return NextResponse.json({
        success: true,
        message: 'No change detected',
        session_id: id,
        result: currentResult,
      });
    }

    // Update the input with new value
    const updatedInput: ZucaInput = {
      ...currentInput,
      [field]: value,
    };

    // Persist updated input
    await updateSessionInput(id, updatedInput);

    // Determine which steps need to be re-run
    const affectedSteps = FIELD_DEPENDENCIES[field] || [];

    // If no steps affected (e.g., customer_name), just return current result
    if (affectedSteps.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'Field updated (no pipeline rerun needed)',
        session_id: id,
        result: currentResult,
      });
    }

    // Clear affected steps from previous result to force re-computation
    let previousResult: Partial<ZucaOutput> = {};
    if (currentResult) {
      previousResult = { ...currentResult };
      for (const step of affectedSteps) {
        delete (previousResult as Record<string, unknown>)[step];
      }
    }

    // Update session status
    await updateSessionStatus(id, 'running', 0);

    try {
      const defaultModel = (process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2') as 'gpt-5.2' | 'gemini-3-pro-preview' | 'gemini-3-flash-preview';
      const selectedModel = (session.llm_model as typeof defaultModel) || defaultModel;

      // Re-run pipeline with previous partial result (non-interactive mode skips clarifications)
      const runFn = await getRunPipelineFn(selectedModel);
      const result = await runFn(updatedInput, {
        sessionId: id,
        previousResult,
        model: selectedModel,
        interactiveMode: false,
      });

      // Edit mode shouldn't get clarification pauses since interactiveMode is false
      if (isPipelineClarificationPause(result)) {
        return NextResponse.json(
          { error: 'Unexpected clarification pause in edit mode' },
          { status: 500 }
        );
      }

      // Persist updated result
      await updateSessionResult(id, result);

      return NextResponse.json({
        success: true,
        message: `Reran ${affectedSteps.length} affected steps`,
        affected_steps: affectedSteps,
        session_id: id,
        result,
      });
    } catch (pipelineError: unknown) {
      const message = pipelineError instanceof Error ? pipelineError.message : 'Pipeline failed';
      await updateSessionStatus(id, 'failed', undefined, message);
      return NextResponse.json(
        { error: 'Pipeline rerun failed', details: message },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Edit session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
