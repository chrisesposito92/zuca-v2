# Plan: AI-Powered Conversation Follow-up

## Problem Statement

The current follow-up feature doesn't work because `handleFollowUp` in `src/pipeline/orchestrator.ts` relies on an **in-memory session store** (`sessions` Map). In Next.js serverless API routes, this memory doesn't persist between requests, so the session is always "not found."

## Current Architecture (Broken)

```
User sends message
    ↓
API route: /api/sessions/[id]/follow-up
    ↓
Calls handleFollowUp(sessionId, query) from @zuca/pipeline
    ↓
handleFollowUp looks for session in memory: sessions.get(sessionId)
    ↓
❌ FAILS - session not in memory (serverless = no persistent memory)
```

## Proposed Solution

### Option A: Database-Backed Follow-up (Recommended)

Instead of relying on in-memory sessions, load all necessary context from the database and call the LLM directly.

```
User sends message
    ↓
API route: /api/sessions/[id]/follow-up
    ↓
Load session from DB (input, result, conversation_history)
    ↓
Build context for LLM from DB data
    ↓
Call OpenAI with context + user query
    ↓
Save assistant response to DB
    ↓
Return response to frontend
```

### Option B: Persistent Session Store (Redis/etc)

Use Redis or another persistent store to maintain session state across serverless invocations. More complex, requires additional infrastructure.

---

## Implementation Plan (Option A)

### Phase 1: Create Follow-up LLM Function

**File to create:** `src/pipeline/follow-up.ts`

```typescript
import { callLLM } from '../llm/client';
import type { ZucaOutput } from '../types/output';

interface FollowUpContext {
  input: Record<string, unknown>;
  result: ZucaOutput;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

interface FollowUpResponse {
  type: 'answer' | 'clarification' | 'suggestion';
  content: string;
  suggestedEdits?: Array<{ field: string; value: unknown; reason: string }>;
}

export async function processFollowUp(
  query: string,
  context: FollowUpContext
): Promise<FollowUpResponse> {
  // Build system prompt with context
  const systemPrompt = buildFollowUpSystemPrompt(context);

  // Call LLM
  const response = await callLLM({
    systemPrompt,
    userMessage: query,
    // Use structured output schema for consistent responses
  });

  return parseFollowUpResponse(response);
}

function buildFollowUpSystemPrompt(context: FollowUpContext): string {
  return `You are a Zuora billing and revenue recognition expert assistant.

## Current Analysis Context

**Customer:** ${context.input.customer_name}
**Use Case:** ${context.input.use_case_description}
**Contract Start:** ${context.input.contract_start_date}
**Term:** ${context.input.terms_months} months

## Analysis Results Summary

**Subscription:**
${summarizeSubscription(context.result.subscription_spec)}

**POB Mappings:**
${summarizePobMappings(context.result.pob_mapping)}

**Key Assumptions:**
${context.result.summary?.assumptions?.join('\n- ') || 'None listed'}

**Open Questions:**
${context.result.summary?.open_questions?.join('\n- ') || 'None listed'}

## Conversation History
${formatConversationHistory(context.conversationHistory)}

## Your Task

Answer the user's question about this analysis. You can:
1. Explain billing/revenue concepts
2. Clarify why certain POB mappings were chosen
3. Suggest changes to the analysis (respond with type: "suggestion" and include suggestedEdits)
4. Answer questions about Zuora configuration

Be concise and specific to this customer's use case.`;
}
```

### Phase 2: Update Follow-up API Route

**File to modify:** `apps/web/app/api/sessions/[id]/follow-up/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getSession, addMessage, getConversationHistory } from '@/lib/db';
import { processFollowUp } from '@zuca/pipeline/follow-up';
import type { ZucaOutput } from '@zuca/types';

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { query } = await request.json();

    // 1. Load session from database
    const session = await getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // 2. Load conversation history
    const conversationHistory = await getConversationHistory(id);

    // 3. Add user message to DB
    await addMessage(id, 'user', query);

    // 4. Build context and call LLM
    const response = await processFollowUp(query, {
      input: session.input as Record<string, unknown>,
      result: session.result as ZucaOutput,
      conversationHistory,
    });

    // 5. Save assistant response to DB
    await addMessage(id, 'assistant', response.content);

    // 6. Return response
    return NextResponse.json({
      success: true,
      type: response.type,
      data: response.content,
      suggestedEdits: response.suggestedEdits,
    });
  } catch (error) {
    console.error('Follow-up error:', error);
    return NextResponse.json({ error: 'Follow-up failed' }, { status: 500 });
  }
}
```

### Phase 3: Add Database Helper Functions

**File to modify:** `apps/web/lib/db.ts`

Add these functions if not already present:

```typescript
export async function getConversationHistory(sessionId: string) {
  const result = await sql`
    SELECT role, content, created_at
    FROM messages
    WHERE session_id = ${sessionId}
    ORDER BY sequence_number ASC
  `;
  return result.rows.map(row => ({
    role: row.role as 'user' | 'assistant',
    content: row.content,
    created_at: row.created_at,
  }));
}
```

### Phase 4: Create Follow-up System Prompt

**File to create:** `src/llm/prompts/follow-up.md`

```markdown
# ZUCA Follow-up Assistant

You are a Zuora billing and revenue recognition expert helping users understand and refine their analysis.

## Context
You have access to:
- The original use case description
- The generated subscription specification
- POB (Performance Obligation) mappings
- Contracts/Orders data
- Billing schedule
- Revenue recognition waterfall

## Response Types

1. **answer** - Direct answer to a question about the analysis
2. **clarification** - Asking for more information to better understand
3. **suggestion** - Proposing changes to the analysis

## Guidelines

- Be specific to Zuora terminology and concepts
- Reference specific charges, POBs, or periods when relevant
- If suggesting changes, explain the impact on billing and revenue
- Keep responses concise but complete
```

### Phase 5: Handle Suggested Edits in Frontend

**File to modify:** `apps/web/components/chat/ConversationPanel.tsx`

Update `handleSendMessage` to handle suggested edits:

```typescript
const handleSendMessage = async (message: string) => {
  try {
    const response = await followUpMutation.mutateAsync(message);

    if (response.type === 'suggestion' && response.suggestedEdits?.length) {
      // Show a toast or modal asking if user wants to apply suggestions
      addToast({
        title: "Suggestion Available",
        description: "The assistant suggested some changes. Review them in the conversation.",
        color: "primary",
      });
    }

    onRefresh?.();
  } catch {
    addToast({
      title: "Error",
      description: "Failed to send message.",
      color: "danger",
    });
  }
};
```

---

## Files to Create/Modify Summary

| File | Action | Description |
|------|--------|-------------|
| `src/pipeline/follow-up.ts` | CREATE | New follow-up processing logic |
| `src/llm/prompts/follow-up.md` | CREATE | System prompt for follow-up |
| `apps/web/app/api/sessions/[id]/follow-up/route.ts` | MODIFY | Use new processFollowUp function |
| `apps/web/lib/db.ts` | MODIFY | Add getConversationHistory if needed |
| `apps/web/components/chat/ConversationPanel.tsx` | MODIFY | Handle suggested edits |
| `src/pipeline/index.ts` | MODIFY | Export processFollowUp |

---

## Advanced Features (Future)

### 1. Smart Edit Detection

Detect when the user's query implies they want to change something:
- "Can we change the billing period to quarterly?"
- "What if we used a different POB template?"

Automatically trigger the edit flow with pre-filled values.

### 2. Context Window Management

For long conversations, summarize older messages to fit within context limits:

```typescript
function compressConversationHistory(history: Message[], maxTokens: number) {
  // Keep recent messages verbatim
  // Summarize older messages
  // Ensure we stay within token limit
}
```

### 3. RAG with Golden Use Cases

Include relevant golden use cases in the context for better answers:

```typescript
async function getRelevantGoldenUseCases(query: string, result: ZucaOutput) {
  // Find golden use cases similar to current analysis
  // Include them in context for better recommendations
}
```

### 4. Streaming Responses

For better UX, stream the LLM response:

```typescript
// Use OpenAI streaming API
// Update frontend to handle streaming
// Show typing indicator while streaming
```

---

## Estimated Effort

| Phase | Effort | Priority |
|-------|--------|----------|
| Phase 1: Follow-up LLM Function | 2-3 hours | HIGH |
| Phase 2: Update API Route | 1 hour | HIGH |
| Phase 3: Database Helpers | 30 min | HIGH |
| Phase 4: System Prompt | 1-2 hours | HIGH |
| Phase 5: Frontend Updates | 1 hour | MEDIUM |
| Advanced Features | 4-8 hours each | LOW |

**Total for basic implementation: ~6-8 hours**

---

## Testing Plan

1. **Unit Tests**
   - Test `processFollowUp` with mock context
   - Test prompt building functions
   - Test response parsing

2. **Integration Tests**
   - Test full flow from API to LLM to DB
   - Test conversation history persistence

3. **Manual Testing**
   - Ask clarifying questions about an analysis
   - Ask for explanations of POB mappings
   - Ask "what if" questions
   - Verify suggestions are actionable
