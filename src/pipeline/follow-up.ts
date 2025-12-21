/**
 * Follow-up Processing Module
 *
 * Handles conversational follow-up queries for existing ZUCA sessions.
 * This module is designed for serverless environments where session state
 * must be loaded from the database rather than kept in memory.
 */

import { complete, type Message } from '../llm/client';
import { readFileSync } from 'fs';
import { join } from 'path';
import type { ZucaInput } from '../types/input';
import type { ZucaOutput, SubscriptionSpec, PobMappingOutput } from '../types/output';
import { debugLog } from '../config';

// ============================================================================
// Types
// ============================================================================

export interface FollowUpContext {
  input: ZucaInput;
  result: ZucaOutput;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export interface SuggestedEdit {
  field: string;
  currentValue: unknown;
  suggestedValue: unknown;
  reason: string;
}

export interface FollowUpResponse {
  type: 'answer' | 'clarification' | 'suggestion';
  content: string;
  suggestedEdits?: SuggestedEdit[];
}

// ============================================================================
// Prompt Loading
// ============================================================================

let cachedPrompt: string | null = null;

function loadFollowUpPrompt(): string {
  if (cachedPrompt) return cachedPrompt;

  try {
    const promptPath = join(__dirname, '../llm/prompts/follow-up.md');
    cachedPrompt = readFileSync(promptPath, 'utf-8');
    return cachedPrompt;
  } catch {
    // Fallback to inline prompt if file not found
    debugLog('Follow-up prompt file not found, using inline fallback');
    return getInlinePrompt();
  }
}

function getInlinePrompt(): string {
  return `# ZUCA Follow-up Assistant

You are a Zuora billing and revenue recognition expert helping users understand and refine their ZUCA analysis.

## Your Role

Answer questions about the current analysis with deep expertise in:
- Zuora Billing (subscriptions, charges, billing periods, triggers)
- Zuora Revenue (POB templates, recognition methods, SSP allocation)
- Contract modifications, ramp deals, variable consideration
- PPDD (Prepaid with Drawdown) configurations

## Response Guidelines

1. **Be Specific**: Reference the actual data from this analysis (charge names, POB templates, dates, amounts)
2. **Be Concise**: Keep answers focused and actionable
3. **Explain Why**: When explaining choices, cite Zuora best practices
4. **Suggest Improvements**: If you notice potential issues, mention them

## Response Format

Respond with valid JSON in this structure:
{
  "type": "answer" | "clarification" | "suggestion",
  "content": "Your response text with markdown formatting",
  "suggestedEdits": [
    {
      "field": "field.path",
      "currentValue": "current",
      "suggestedValue": "new",
      "reason": "Why this change helps"
    }
  ]
}

- Use "answer" for direct answers to questions
- Use "clarification" when you need more information from the user
- Use "suggestion" when recommending changes to the analysis

Only include suggestedEdits when type is "suggestion".`;
}

// ============================================================================
// Context Summarization
// ============================================================================

function summarizeSubscription(spec: SubscriptionSpec | undefined): string {
  if (!spec) return 'No subscription data available.';

  const { subscription, rate_plans } = spec;
  const lines: string[] = [];

  lines.push(`**${subscription.name}** (${subscription.termType})`);
  lines.push(`- Currency: ${subscription.currency}`);
  lines.push(`- Contract Effective: ${subscription.contractEffectiveDate}`);
  lines.push(`- Service Activation: ${subscription.serviceActivationDate}`);

  if (subscription.initialTerm) {
    lines.push(`- Initial Term: ${subscription.initialTerm} ${subscription.initialTermPeriodType || 'Month'}(s)`);
  }

  lines.push('\n**Rate Plans & Charges (with paths for editing):**');
  rate_plans.forEach((rp, rpIndex) => {
    lines.push(`\n### Rate Plan [${rpIndex}]: ${rp.productName} / ${rp.ratePlanName}`);
    rp.charges.forEach((charge, chargeIndex) => {
      const price = charge.sellPrice ?? charge.listPrice ?? charge.price ?? 0;
      const path = `subscription_spec.rate_plans[${rpIndex}].charges[${chargeIndex}]`;
      lines.push(`\n**Charge [${chargeIndex}]: ${charge.name}** (path: \`${path}\`)`);
      lines.push(`- Type: ${charge.type}, Model: ${charge.model}`);
      lines.push(`- Price: $${price}${charge.quantity ? `, Qty: ${charge.quantity}` : ''}`);
      lines.push(`- Billing: ${charge.billingPeriod || 'N/A'} ${charge.billingTiming || ''}`);
      lines.push(`- Trigger: ${charge.triggerEvent}`);
    });
  });

  return lines.join('\n');
}

function summarizePobMappings(mapping: PobMappingOutput | undefined): string {
  if (!mapping) return 'No POB mapping data available.';

  const lines: string[] = [];
  lines.push('**POB Mappings (with paths for editing):**\n');
  mapping.charge_pob_map.forEach((item, index) => {
    const path = `pob_mapping.charge_pob_map[${index}]`;
    lines.push(`### [${index}] ${item.chargeName} (path: \`${path}\`)`);
    lines.push(`- POB: ${item.pob_name} (\`${item.pob_identifier}\`)`);
    lines.push(`- Method: ${item.ratable_method}`);
    lines.push(`- Release Event: ${item.release_event}`);
    lines.push(`- Recognition: ${item.recognition_window.start} to ${item.recognition_window.end || 'End of Term'}`);
    if (item.rationale) {
      lines.push(`- Rationale: ${item.rationale}`);
    }
    lines.push('');
  });
  return lines.join('\n');
}

function formatConversationHistory(history: Array<{ role: 'user' | 'assistant'; content: string }>): string {
  if (history.length === 0) return 'No previous conversation.';

  return history
    .map((msg) => `**${msg.role === 'user' ? 'User' : 'Assistant'}**: ${msg.content}`)
    .join('\n\n');
}

function buildContextSection(context: FollowUpContext): string {
  const { input, result } = context;

  const sections: string[] = [];

  // Customer and Use Case Context
  sections.push('## Customer Context\n');
  sections.push(`**Customer:** ${input.customer_name}`);
  sections.push(`**Use Case:** ${input.use_case_description}`);
  if (input.rev_rec_notes) {
    sections.push(`**Rev Rec Notes:** ${input.rev_rec_notes}`);
  }
  sections.push(`**Contract Start:** ${input.contract_start_date}`);
  sections.push(`**Term:** ${input.terms_months} months`);
  sections.push(`**Currency:** ${input.transaction_currency || 'USD'}`);

  // Contract Intel
  if (result.contract_intel) {
    sections.push('\n## Contract Intel\n');
    const ci = result.contract_intel;
    sections.push(`- Service Period: ${ci.service_start_mdy} to ${ci.service_end_mdy || 'Ongoing'}`);
    sections.push(`- Billing: ${ci.billing_period || 'Monthly'} ${ci.billing_timing || 'In Advance'}`);
    sections.push(`- Trigger: ${ci.trigger_event}`);
    sections.push(`- Go-Live: ${ci.go_live_mdy}`);
  }

  // Subscription Spec
  sections.push('\n## Subscription Configuration\n');
  sections.push(summarizeSubscription(result.subscription_spec));

  // POB Mappings
  sections.push('\n## Revenue Recognition (POB Mappings)\n');
  sections.push(summarizePobMappings(result.pob_mapping));

  // Key Assumptions & Open Questions
  if (result.summary?.assumptions?.length) {
    sections.push('\n## Key Assumptions\n');
    sections.push(result.summary.assumptions.map((a: string) => `- ${a}`).join('\n'));
  }

  if (result.summary?.open_questions?.length) {
    sections.push('\n## Open Questions\n');
    sections.push(result.summary.open_questions.map((q: string) => `- ${q}`).join('\n'));
  }

  // Conversation History
  if (context.conversationHistory.length > 0) {
    sections.push('\n## Previous Conversation\n');
    sections.push(formatConversationHistory(context.conversationHistory));
  }

  return sections.join('\n');
}

// ============================================================================
// Response Schema for Structured Output
// ============================================================================

const followUpResponseSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['answer', 'clarification', 'suggestion'],
      description: 'The type of response',
    },
    content: {
      type: 'string',
      description: 'The response content with markdown formatting',
    },
    suggestedEdits: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          field: { type: 'string', description: 'JSON path to the field to change' },
          currentValue: { type: 'string', description: 'Current value (stringified)' },
          suggestedValue: { type: 'string', description: 'New value to set (stringified)' },
          reason: { type: 'string', description: 'Why this change is recommended' },
        },
        required: ['field', 'currentValue', 'suggestedValue', 'reason'],
        additionalProperties: false,
      },
      description: 'Suggested edits when type is suggestion',
    },
  },
  required: ['type', 'content', 'suggestedEdits'],
  additionalProperties: false,
};

// ============================================================================
// Main Processing Function
// ============================================================================

export async function processFollowUp(
  query: string,
  context: FollowUpContext
): Promise<FollowUpResponse> {
  debugLog('Processing follow-up query', {
    queryLength: query.length,
    historyLength: context.conversationHistory.length,
    hasResult: !!context.result,
  });

  const systemPrompt = loadFollowUpPrompt();
  const contextSection = buildContextSection(context);

  // Build previous messages for conversation continuity
  const previousMessages: Message[] = context.conversationHistory.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  // Build the full user message with context
  const userMessage = `
${contextSection}

---

## Current Question

${query}
`;

  try {
    const result = await complete<FollowUpResponse>({
      systemPrompt,
      userMessage,
      previousMessages,
      responseSchema: followUpResponseSchema,
      temperature: 0.7,
    });

    if (result.structured) {
      debugLog('Follow-up response', {
        type: result.structured.type,
        contentLength: result.structured.content.length,
        hasSuggestions: !!result.structured.suggestedEdits?.length,
      });
      return result.structured;
    }

    // Fallback if structured parsing failed
    return {
      type: 'answer',
      content: result.text || 'I apologize, but I encountered an issue processing your question. Please try rephrasing it.',
    };
  } catch (error) {
    debugLog('Follow-up processing error', error);

    return {
      type: 'answer',
      content: `I encountered an error while processing your question: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
    };
  }
}
