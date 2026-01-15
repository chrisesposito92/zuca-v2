import type { IterationAttempt, IterationClarification, SelfEvaluation } from '../../types/ralph';
import { formatClarificationAnswerForPrompt } from '../../types/clarification';

// ============================================================================
// Context Formatting
// ============================================================================

/**
 * Format a self-evaluation for display in context
 */
function formatSelfEvaluation(eval_: SelfEvaluation): string {
  const parts: string[] = [];
  parts.push(`Decision: ${eval_.decision}`);
  parts.push(`Confidence: ${(eval_.confidence * 100).toFixed(0)}%`);
  parts.push(`Reasoning: ${eval_.reasoning}`);

  if (eval_.iterationFeedback) {
    parts.push(`Feedback: ${eval_.iterationFeedback}`);
  }

  if (eval_.specificIssues && eval_.specificIssues.length > 0) {
    parts.push('Issues found:');
    for (const issue of eval_.specificIssues) {
      parts.push(`  - ${issue.field}: ${issue.issue} → ${issue.suggestion}`);
    }
  }

  return parts.join('\n');
}

/**
 * Format previous attempts for inclusion in the iteration context
 */
export function formatPreviousAttempts<T>(attempts: IterationAttempt<T>[]): string {
  if (attempts.length === 0) {
    return '';
  }

  const sections: string[] = [];

  for (const attempt of attempts) {
    sections.push(`### Attempt ${attempt.attemptNumber}`);
    sections.push('');
    sections.push('**Output:**');
    sections.push('```json');
    sections.push(JSON.stringify(attempt.output, null, 2));
    sections.push('```');
    sections.push('');
    sections.push('**Self-Evaluation:**');
    sections.push(formatSelfEvaluation(attempt.selfEvaluation));
    sections.push('');
  }

  return sections.join('\n');
}

/**
 * Format previous clarifications for inclusion in the iteration context
 */
export function formatPreviousClarifications(clarifications: IterationClarification[]): string {
  if (clarifications.length === 0) {
    return '';
  }

  const sections: string[] = [];

  for (const clarification of clarifications) {
    sections.push(`### Question from Iteration ${clarification.iterationNumber}`);
    sections.push(`Source: ${clarification.source === 'step' ? 'Pipeline Step' : 'Self-Evaluation'}`);
    sections.push('');
    sections.push(`**Question:** ${clarification.question.question}`);

    if (clarification.question.context) {
      sections.push(`**Context:** ${clarification.question.context}`);
    }

    sections.push('**Options:**');
    for (const opt of clarification.question.options) {
      sections.push(`  - ${opt.label}${opt.description ? `: ${opt.description}` : ''}`);
    }

    if (clarification.answer) {
      sections.push('');
      sections.push(`**Answer:** ${formatClarificationAnswerForPrompt(clarification.answer)}`);
    } else {
      sections.push('');
      sections.push('**Answer:** (awaiting response)');
    }
    sections.push('');
  }

  return sections.join('\n');
}

/**
 * Build the complete iteration context string for injection into prompts
 */
export function buildIterationContext<T>(
  previousAttempts: IterationAttempt<T>[],
  clarifications: IterationClarification[],
  iterationFeedback?: string
): string {
  const sections: string[] = [];

  // Add iteration feedback from last self-evaluation
  if (iterationFeedback) {
    sections.push('## Feedback from Previous Attempt');
    sections.push('');
    sections.push(iterationFeedback);
    sections.push('');
  }

  // Add previous clarification Q&A
  const clarificationContext = formatPreviousClarifications(clarifications);
  if (clarificationContext) {
    sections.push('## Previous Clarifications');
    sections.push('');
    sections.push(clarificationContext);
  }

  // Add previous attempts (abbreviated for context efficiency)
  if (previousAttempts.length > 0) {
    sections.push('## Previous Attempts');
    sections.push('');
    sections.push(`You have made ${previousAttempts.length} previous attempt(s).`);

    // Only show the last attempt in detail to save context space
    const lastAttempt = previousAttempts[previousAttempts.length - 1];
    sections.push('');
    sections.push('**Last Attempt Self-Evaluation:**');
    sections.push(formatSelfEvaluation(lastAttempt.selfEvaluation));

    // Summarize earlier attempts if any
    if (previousAttempts.length > 1) {
      sections.push('');
      sections.push('**Earlier Attempts Summary:**');
      for (let i = 0; i < previousAttempts.length - 1; i++) {
        const attempt = previousAttempts[i];
        sections.push(
          `  - Attempt ${attempt.attemptNumber}: ${attempt.selfEvaluation.decision} (${(attempt.selfEvaluation.confidence * 100).toFixed(0)}% confidence)`
        );
      }
    }
  }

  const result = sections.join('\n').trim();

  if (!result) {
    return '';
  }

  return `\n\n---\n\n## Ralph Iteration Context\n\n${result}`;
}

/**
 * Build context for the self-evaluation prompt
 */
export function buildSelfEvalContext<T>(
  stepName: string,
  output: T,
  originalInput: unknown,
  previousAttempts: IterationAttempt<T>[],
  clarifications: IterationClarification[]
): string {
  const sections: string[] = [];

  // Step name
  sections.push(`Step: ${stepName}`);
  sections.push('');

  // Current output to evaluate
  sections.push('## Your Output');
  sections.push('```json');
  sections.push(JSON.stringify(output, null, 2));
  sections.push('```');
  sections.push('');

  // Original input (summarized if too long)
  sections.push('## Original Input');
  const inputStr = JSON.stringify(originalInput, null, 2);
  if (inputStr.length > 3000) {
    // Truncate long inputs
    sections.push('```json');
    sections.push(inputStr.substring(0, 3000) + '\n... (truncated)');
    sections.push('```');
  } else {
    sections.push('```json');
    sections.push(inputStr);
    sections.push('```');
  }
  sections.push('');

  // Previous attempts
  if (previousAttempts.length > 0) {
    sections.push('## Previous Attempts');
    sections.push('');
    sections.push(formatPreviousAttempts(previousAttempts));
  }

  // Previous clarifications
  if (clarifications.length > 0) {
    sections.push('## Previous Clarifications');
    sections.push('');
    sections.push(formatPreviousClarifications(clarifications));
  }

  return sections.join('\n');
}
