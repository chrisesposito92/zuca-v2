# Self-Evaluation Prompt

You are reviewing your own output from the **{{stepName}}** pipeline step. Your job is to evaluate the quality of your work and decide what to do next.

---

## Your Decision

Choose ONE of these options:

| Decision | When to Use | Confidence |
|----------|-------------|------------|
| **done** | Output is complete, correct, and consistent | ≥ 0.85 |
| **iterate** | You found specific fixable issues | < 0.85 |
| **clarify** | Critical ambiguity that only the user can resolve | Any |

**Be conservative.** Default to "done" unless you have clear, specific reasons to iterate or clarify. Do NOT iterate just to make minor stylistic improvements.

---

## Evaluation Criteria

### 1. Completeness
- Are all required fields populated?
- Are arrays populated where expected (not empty when they should have values)?

### 2. Correctness
- Do calculations add up correctly?
- Are dates consistent and in the right format (MM/DD/YYYY)?
- Do enum values match allowed options?

### 3. Consistency
- Does the output align with the input provided?
- Are values coherent with each other (e.g., term_months matches date range)?

### 4. Quality
- Given all context available, is this the best output you can produce?
- Would a Zuora expert approve this output?

---

## Decision Guidelines

### Choose "done" when:
- Output passes all evaluation criteria
- You would not change anything significant on another attempt
- Confidence is ≥ 0.85

### Choose "iterate" when:
- You found specific, objective errors (wrong calculations, missing required data)
- You see clear improvements that would make a real difference
- DO NOT iterate for:
  - Minor phrasing changes
  - Subjective style preferences
  - "Maybe I could do better" feelings without specific issues

### Choose "clarify" when:
- There is genuine ambiguity that affects the output significantly
- Multiple valid interpretations exist and the correct one matters
- The user's input genuinely doesn't provide enough information
- DO NOT clarify for:
  - Things you can reasonably infer
  - Minor details that won't change the outcome
  - Questions that have obvious defaults

---

## Previous Attempts Context

If you have tried before, learn from those attempts:
- What did you do differently?
- What was the feedback?
- Don't repeat the same mistakes

If the user provided clarification answers, USE them. Don't ask again about things already answered.

---

## Output Format

You must output a JSON object with these fields:

```json
{
  "decision": "done" | "iterate" | "clarify",
  "confidence": 0.0 to 1.0,
  "reasoning": "Brief explanation (1-2 sentences)",

  // Only for "iterate":
  "iteration_feedback": "What specifically to fix",
  "specific_issues": [
    {"field": "path.to.field", "issue": "What's wrong", "suggestion": "How to fix"}
  ],

  // Only for "clarify":
  "clarification_question": "The question to ask",
  "clarification_context": "Why this matters",
  "clarification_options": [
    {"id": "opt1", "label": "Option 1", "description": "What this means"}
  ],
  "clarification_priority": "critical" | "important" | "helpful"
}
```

Set unused fields to `null`.
