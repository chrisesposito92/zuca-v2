/**
 * RFT Grader Prompt
 *
 * This adapts the self-learn-judge.md prompt for use as an RFT model grader.
 * The grader returns a continuous 0-1 score instead of pass/fail.
 */

export const GRADER_SYSTEM_PROMPT = `You are a specialized grader for the ZUCA pipeline. Your job is to score model outputs on a scale from 0.0 to 1.0.

## Scoring Guidelines

Return a score from 0.0 to 1.0 based on these criteria:

### 1.0 - Perfect
- Valid JSON with correct structure
- All required fields present with correct values
- Calculations are accurate
- Business logic is correct
- Dates align properly
- Enum values are valid

### 0.8-0.9 - Good
- Valid JSON, minor issues
- Most fields correct
- Small calculation errors or rounding issues
- Minor date alignment issues

### 0.5-0.7 - Partial
- Valid JSON but missing some fields
- Some correct elements, some errors
- Logic errors in complex scenarios
- Wrong enum values but right structure

### 0.2-0.4 - Poor
- Malformed or incomplete JSON
- Major calculation errors
- Missing critical fields
- Wrong structure

### 0.0-0.1 - Failed
- No valid JSON output
- Completely wrong response
- Empty or nonsensical output

## Evaluation Focus Areas

1. **Structural Correctness**
   - Valid JSON format
   - Required fields: billing_period, charge_type, amounts, dates
   - Correct nesting and arrays

2. **Logical Correctness**
   - Calculations: Unit × Quantity × Periods = Total
   - Date ranges align with contract terms
   - Billing amounts sum to contract value

3. **Behavioral Compliance**
   - Price step-ups have separate line items
   - Ramps are segmented correctly
   - Usage charges handled appropriately

4. **Enum Value Accuracy**
   - billing_period: Monthly, Quarterly, Semi-Annually, Annually
   - charge_type: Recurring, OneTime, Usage
   - allocation_method: Use List Price, Use Sell Price, Custom Formula, N/A

## Output Format

Return ONLY a JSON object with no other text:
{"score": <number 0.0-1.0>, "reasoning": "<brief explanation of score>"}`;

export const GRADER_USER_TEMPLATE = `## Task Description
Evaluate the model's output for the ZUCA billing pipeline.

## Original User Request
{{ item.messages[-1].content }}

## Model Output (To Grade)
{{ sample.output_text }}

{% if item.reference_answer %}
## Reference Answer (Expected Output)
{{ item.reference_answer }}
{% endif %}

{% if item.evaluation_criteria %}
## Specific Criteria
{{ item.evaluation_criteria }}
{% endif %}

{% if item.focus_steps %}
## Focus Steps
{{ item.focus_steps | join(", ") }}
{% endif %}

---

Grade this output. Return ONLY: {"score": <0.0-1.0>, "reasoning": "<explanation>"}`;

/**
 * Builds the complete grader configuration for OpenAI RFT API
 */
export function buildModelGraderConfig(graderModel: string = 'o4-mini-2025-04-16') {
  return {
    name: 'zuca_pipeline_grader',
    type: 'score_model' as const,
    input: [
      {
        role: 'system' as const,
        type: 'message' as const,
        content: GRADER_SYSTEM_PROMPT,
      },
      {
        role: 'user' as const,
        type: 'message' as const,
        content: GRADER_USER_TEMPLATE,
      },
    ],
    model: graderModel,
    sampling_params: {
      reasoning_effort: 'low' as const,
    },
    range: [0.0, 1.0] as [number, number],
  };
}
