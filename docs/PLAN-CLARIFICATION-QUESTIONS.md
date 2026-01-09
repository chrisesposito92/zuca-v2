# Clarification Questions Feature - Implementation Plan

## Overview

Add the ability for LLM pipeline steps to pause execution and ask the user clarification questions before continuing. Questions are presented with:
- Multiple choice options (2-4 options)
- An "I don't know" option
- A free-text fallback

**Scope:** Start with the analyze pipeline, but design for reuse across all pipelines.

---

## Design Principles

1. **Clarification as a first-class return type** - Steps can return either their normal output OR a clarification request
2. **Minimal disruption** - Use existing patterns (session persistence, status tracking, structured outputs)
3. **Rate limiting built-in** - Only 1 clarification per step maximum to prevent question fatigue
4. **Fail gracefully** - If user skips or times out, continue with best-effort assumptions

---

## Architecture

### 1. New Types (`src/types/clarification.ts`)

```typescript
export interface ClarificationOption {
  id: string;          // e.g., "option_1"
  label: string;       // e.g., "Recognize revenue monthly"
  description?: string; // Optional longer explanation
}

export interface ClarificationQuestion {
  questionId: string;  // Unique ID for tracking
  stepName: string;    // Which step is asking
  question: string;    // The question text
  context?: string;    // Why this matters / what the LLM noticed
  options: ClarificationOption[];  // 2-4 specific options
  allowSkip: boolean;  // Whether "I don't know" is allowed (usually true)
  allowFreeText: boolean; // Whether free text is allowed (usually true)
  priority: 'critical' | 'important' | 'helpful';  // For UI styling
}

export interface ClarificationAnswer {
  questionId: string;
  selectedOptionId?: string;  // If they picked an option
  freeTextResponse?: string;  // If they typed something
  skipped: boolean;           // If they clicked "I don't know"
}

export interface StepClarificationRequest {
  type: 'clarification_needed';
  question: ClarificationQuestion;
  partialOutput?: unknown;  // What the step computed so far (for context)
}
```

### 2. Extended Step Return Type

Each step function can return either:
- `T` (the normal output type)
- `StepClarificationRequest` (needs user input)

```typescript
// Generic step result type
export type StepResult<T> = T | StepClarificationRequest;

// Type guard
export function isClarificationRequest<T>(
  result: StepResult<T>
): result is StepClarificationRequest {
  return (
    typeof result === 'object' &&
    result !== null &&
    'type' in result &&
    result.type === 'clarification_needed'
  );
}
```

### 3. Extended JSON Schema for Steps

Add optional clarification fields to each step's output schema:

```typescript
// Added to each step's JSON schema as optional alternative output
const clarificationOutputSchema = {
  type: 'object',
  properties: {
    needs_clarification: { type: 'boolean' },
    clarification_question: { type: 'string' },
    clarification_context: { type: 'string' },
    clarification_options: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          label: { type: 'string' },
          description: { type: 'string' },
        },
        required: ['id', 'label'],
      },
      minItems: 2,
      maxItems: 4,
    },
    clarification_priority: {
      type: 'string',
      enum: ['critical', 'important', 'helpful'],
    },
  },
};
```

### 4. Session State Extensions

**Database schema addition:**

```sql
ALTER TABLE sessions ADD COLUMN clarification_state JSONB DEFAULT NULL;

-- Structure:
-- {
--   "pending_question": ClarificationQuestion,
--   "paused_at_step": string,
--   "partial_result": Partial<ZucaOutput>,
--   "asked_at": timestamp,
--   "answers": ClarificationAnswer[]  -- All answers in this session
-- }
```

**New session status:**

```typescript
export type SessionStatus =
  | 'pending'
  | 'running'
  | 'awaiting_clarification'  // NEW
  | 'completed'
  | 'failed';
```

### 5. Orchestrator Changes (`src/pipeline/orchestrator.ts`)

```typescript
// Add new options
export interface PipelineOptions {
  skipSteps?: string[];
  previousResult?: Partial<ZucaOutput>;
  sessionId?: string;
  model?: LlmModel;
  // NEW - Clarification support
  interactiveMode?: boolean;  // true = web UI, false = CLI/API (default false)
  clarificationAnswers?: ClarificationAnswer[];  // Answers from user
  skipAllClarifications?: boolean;  // User preference to never ask
}

// Modified step execution
async function executeStepWithClarification<T>(
  stepName: string,
  fn: (opts?: { skipClarification?: boolean }) => Promise<StepResult<T>>,
  options: PipelineOptions
): Promise<{ output: T } | { clarification: StepClarificationRequest }> {

  // Skip clarifications entirely if:
  // - Not in interactive mode (CLI/API)
  // - User preference is to skip all
  const shouldSkipClarifications =
    !options.interactiveMode ||
    options.skipAllClarifications;

  // Check if we already asked for clarification on this step (1 max)
  const alreadyAsked = options.clarificationAnswers?.some(
    a => a.questionId.startsWith(`${stepName}:`)
  );

  // Run step with skip flag if appropriate
  const result = await fn({
    skipClarification: shouldSkipClarifications || alreadyAsked
  });

  if (isClarificationRequest(result)) {
    // If skipping clarifications, re-run with explicit skip
    if (shouldSkipClarifications || alreadyAsked) {
      debugLog(`Auto-skipping clarification for ${stepName}`);
      return { output: await fn({ skipClarification: true }) as T };
    }
    return { clarification: result };
  }

  return { output: result };
}
```

**Main pipeline flow:**

```typescript
export async function runPipeline(
  input: ZucaInput,
  options: PipelineOptions = {}
): Promise<ZucaOutput | PipelineClarificationState> {

  // ... existing setup ...

  // Step 1: Analyze Contract
  if (!skipSteps.has('analyze_contract') && ...) {
    const stepResult = await executeStepWithClarification(
      'analyze_contract',
      () => analyzeContract(
        validatedInput,
        goldenData.capabilities,
        goldenData.keyTerms,
        getClarificationContext('analyze_contract', options.clarificationAnswers),
        undefined,
        selectedModel
      ),
      options
    );

    if ('clarification' in stepResult) {
      // Pause pipeline and return clarification request
      return {
        status: 'awaiting_clarification',
        question: stepResult.clarification.question,
        pausedAtStep: 'analyze_contract',
        partialResult: result,
        sessionId,
      };
    }

    // Normal flow continues...
    result.contract_intel = stepResult.output.contractIntel;
    result.detected_capabilities = stepResult.output.detectedCapabilities;
  }

  // ... rest of pipeline ...
}
```

### 6. API Endpoints

**New endpoint: `POST /api/sessions/[id]/clarify`**

```typescript
// apps/web/app/api/sessions/[id]/clarify/route.ts

export async function POST(request: NextRequest, { params }) {
  const { id } = params;
  const body = await request.json();
  const answer: ClarificationAnswer = body.answer;

  // Load session
  const session = await getSession(id);
  if (!session || session.status !== 'awaiting_clarification') {
    return NextResponse.json({ error: 'Invalid session state' }, { status: 400 });
  }

  // Record the answer
  const clarificationState = session.clarification_state;
  clarificationState.answers.push(answer);

  // Resume pipeline from where it paused
  await updateSessionStatus(id, 'running');

  const result = await runPipeline(session.input, {
    previousResult: clarificationState.partial_result,
    clarificationAnswers: clarificationState.answers,
    model: session.llm_model,
  });

  if (result.status === 'awaiting_clarification') {
    // Another question - update state
    await updateSessionClarificationState(id, result);
    return NextResponse.json({
      status: 'awaiting_clarification',
      question: result.question
    });
  }

  // Pipeline completed
  await updateSessionResult(id, result);
  return NextResponse.json({ status: 'completed', result });
}
```

**Modified: `POST /api/analyze`**

```typescript
// Return early if clarification needed
const result = await runPipeline(validatedInput, { model });

if ('status' in result && result.status === 'awaiting_clarification') {
  await updateSessionStatus(session.id, 'awaiting_clarification');
  await updateSessionClarificationState(session.id, {
    pending_question: result.question,
    paused_at_step: result.pausedAtStep,
    partial_result: result.partialResult,
    asked_at: new Date().toISOString(),
    answers: [],
  });

  return NextResponse.json({
    status: 'awaiting_clarification',
    session_id: session.id,
    question: result.question,
  });
}

// Normal completion
return NextResponse.json({ success: true, session_id, result });
```

### 7. Prompt Engineering

**Update `src/llm/prompts/analyze-contract.md`:**

Add a section instructing the LLM when to ask for clarification:

```markdown
## When to Request Clarification

You may request clarification from the user ONLY when:
1. The input is genuinely ambiguous about a CRITICAL revenue recognition decision
2. Multiple valid interpretations exist with materially different outcomes
3. The decision cannot be reasonably inferred from context

DO NOT ask clarification for:
- Minor details that can be assumed with industry standard defaults
- Information that is clearly stated or implied
- Questions where "I don't know" would be the most likely answer

If you need clarification, set `needs_clarification: true` and provide:
- A clear, specific question (1-2 sentences)
- 2-4 concrete options that represent the most likely scenarios
- Brief context explaining why this matters

Example scenarios warranting clarification:
- Contract mentions "milestone billing" but doesn't specify the milestones
- Revenue recognition mentions "upon delivery" but multiple deliverables exist
- Pricing mentions discounts but discount timing/conditions are unclear
```

### 8. UI Components

**New component: `apps/web/components/clarification-question.tsx`**

```tsx
interface ClarificationQuestionProps {
  question: ClarificationQuestion;
  onAnswer: (answer: ClarificationAnswer) => void;
  isSubmitting: boolean;
}

export function ClarificationQuestion({
  question,
  onAnswer,
  isSubmitting
}: ClarificationQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [freeText, setFreeText] = useState('');

  return (
    <Card className="glass-card-elevated p-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        {/* Priority badge */}
        <Badge color={priorityColors[question.priority]}>
          {question.priority} question
        </Badge>

        {/* Question */}
        <h3 className="text-lg font-semibold">{question.question}</h3>

        {/* Context */}
        {question.context && (
          <p className="text-sm text-gray-500">{question.context}</p>
        )}

        {/* Options */}
        <RadioGroup value={selected} onValueChange={setSelected}>
          {question.options.map(opt => (
            <RadioGroupItem key={opt.id} value={opt.id}>
              <span className="font-medium">{opt.label}</span>
              {opt.description && (
                <span className="text-sm text-gray-500 block">
                  {opt.description}
                </span>
              )}
            </RadioGroupItem>
          ))}
        </RadioGroup>

        {/* I don't know */}
        {question.allowSkip && (
          <Button
            variant="ghost"
            onClick={() => onAnswer({
              questionId: question.questionId,
              skipped: true
            })}
          >
            I don't know - use your best judgment
          </Button>
        )}

        {/* Free text */}
        {question.allowFreeText && (
          <div className="pt-4 border-t">
            <p className="text-sm mb-2">Or describe in your own words:</p>
            <Textarea
              value={freeText}
              onChange={e => setFreeText(e.target.value)}
              placeholder="Type your answer here..."
            />
          </div>
        )}

        {/* Submit */}
        <Button
          onClick={() => onAnswer({
            questionId: question.questionId,
            selectedOptionId: selected || undefined,
            freeTextResponse: freeText || undefined,
            skipped: false,
          })}
          disabled={isSubmitting || (!selected && !freeText)}
        >
          {isSubmitting ? 'Continuing...' : 'Continue'}
        </Button>
      </div>
    </Card>
  );
}
```

**Integrate into analyze page flow:**

The analyze page will check the API response for `status: 'awaiting_clarification'` and show the clarification component instead of results.

---

## Implementation Steps

### Phase 1: Core Infrastructure (Backend)
1. Add new types in `src/types/clarification.ts`
2. Extend session schema with `clarification_state` column
3. Add `awaiting_clarification` status to session types
4. Create DB helper functions for clarification state

### Phase 2: Orchestrator Changes
5. Modify `runPipeline` to handle clarification returns
6. Add `executeStepWithClarification` wrapper
7. Implement clarification rate limiting (1 per step)
8. Create resume-from-clarification logic

### Phase 3: Step Integration (Analyze Contract First)
9. Update `analyze-contract.ts` step to support clarification output
10. Update JSON schema with clarification fields
11. Update prompt with clarification guidelines
12. Test clarification flow end-to-end

### Phase 4: API & UI
13. Create `POST /api/sessions/[id]/clarify` endpoint
14. Modify `/api/analyze` to return clarification status
15. Build `ClarificationQuestion` UI component
16. Integrate into analyze page flow

### Phase 5: User Preferences & Polish
17. Add user preference for "skip all clarifications" in settings
18. Ensure CLI/API calls skip clarifications automatically
19. Add clarification to other steps as needed (optional)
20. Document the feature

---

## Key Decisions

### Q: Why 1 clarification max per step?
A: Prevents "20 questions" fatigue. If the LLM needs more info after one question, it should make assumptions and note them in `open_questions`.

### Q: What happens if user never answers?
A: Session stays in `awaiting_clarification` status. UI can show a "Continue anyway" option that submits a skip response. Timeout after 24h could auto-skip.

### Q: Should clarifications persist across session restarts?
A: Yes - answers are stored in `clarification_state.answers` and used on resume.

### Q: How do we prevent the LLM from asking too many questions?
A:
1. Prompt engineering tells it to be selective
2. Orchestrator enforces 1-per-step max
3. Judge could penalize over-clarification in evals

### Q: Can we make this work with streaming?
A: Not in current architecture. Would need significant refactoring. Clarification works fine with current sync model.

### Q: What about CLI and direct API usage?
A: Non-interactive mode by default. When `interactiveMode: false` (the default), the pipeline auto-skips all clarification questions and proceeds with best-effort assumptions. These assumptions are noted in `open_questions`. Only the web UI passes `interactiveMode: true`.

---

## Files to Create/Modify

### New Files
- `src/types/clarification.ts` - Type definitions
- `apps/web/app/api/sessions/[id]/clarify/route.ts` - API endpoint
- `apps/web/components/clarification-question.tsx` - UI component

### Modified Files
- `apps/web/lib/schema.sql` - Add clarification_state column + user preferences
- `apps/web/lib/db.ts` - Add clarification state helpers + user pref helpers
- `src/types/output.ts` - Add clarification types
- `src/pipeline/orchestrator.ts` - Handle clarification flow with interactiveMode
- `src/pipeline/steps/analyze-contract.ts` - Add clarification support
- `src/llm/prompts/analyze-contract.md` - Add clarification guidelines
- `apps/web/app/api/analyze/route.ts` - Pass interactiveMode=true, check user prefs
- `apps/web/app/(main)/analyze/page.tsx` - Show clarification UI
- `apps/web/app/(main)/settings/page.tsx` - Add "skip clarifications" toggle

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| LLM asks too many questions | Rate limit (1/step) + prompt engineering + eval criteria |
| User abandons session | Timeout + "skip all" option + good defaults |
| Clarification adds latency | Only ask for critical decisions; cache partial results |
| Complex state management | Use existing session persistence pattern |
| Scope creep to other pipelines | Design generic, implement focused on analyze first |

---

## Success Metrics

1. **Quality improvement** - Outputs with clarification should have fewer errors
2. **User engagement** - Track clarification completion rate (target >80%)
3. **Question quality** - Users shouldn't feel questions are unnecessary
4. **Latency impact** - Total pipeline time with clarification vs assumptions

---

## Decisions Made

1. **Show partial results while waiting?** → **No.** Keep the UI simple - show the question, not partial data.

2. **"Never ask me questions" setting?** → **Yes.** Add a user preference to skip all clarifications. Power users who know what they're doing can enable this.

3. **Feed into self-learning corrections?** → **No (for now).** Keep clarifications separate from the correction system. May revisit later if we see patterns.

4. **CLI/API mode handling?** → **Auto-skip all clarifications.** Treat any non-web-UI invocation as "never ask" mode. The pipeline proceeds with best-effort assumptions and notes them in `open_questions`.
