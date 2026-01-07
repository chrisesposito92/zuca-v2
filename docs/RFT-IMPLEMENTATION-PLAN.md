# Reinforcement Fine-Tuning (RFT) Implementation Plan

This document outlines how to adapt the existing self-learning system to work with OpenAI's Reinforcement Fine-Tuning API.

## Current Limitation

**RFT only supports o4-mini** (as of January 2025). This plan is for when OpenAI expands RFT to gpt-4.1 series or if you decide to use o4-mini.

## Architecture Comparison

### Current Self-Learning (SFT Approach)
```
Test Cases → Pipeline → LLM Judge → Corrections → Training Data → SFT
                              ↓
                         Pass/Fail + Feedback
```

### RFT Approach
```
Prompts → Model generates candidates → Grader scores (0-1) → RL updates weights
                                            ↑
                              Your LLM Judge becomes the Grader
```

## Data Format Conversion

### SFT Format (Current)
```json
{
  "messages": [
    {"role": "system", "content": "..."},
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."}
  ]
}
```

### RFT Format (Required)
```json
{
  "messages": [
    {"role": "system", "content": "..."},
    {"role": "user", "content": "..."}
  ],
  "reference_answer": "...",
  "evaluation_criteria": "..."
}
```

Key difference: **No assistant message** - the model generates its own, which gets graded.

## Grader Implementation

### Option 1: Model Grader (Recommended)

Adapts your existing `self-learn-judge.md` prompt into an RFT grader:

```python
from openai.types.graders import ScoreModelGrader

# Your judge prompt adapted for RFT
GRADER_PROMPT = """
You are evaluating a ZUCA pipeline output for correctness.

## Input (User Request)
{{ item.messages[-1].content }}

## Model Output (To Evaluate)
{{ sample.output_text }}

## Reference Answer (Expected)
{{ item.reference_answer }}

## Evaluation Criteria
{{ item.evaluation_criteria }}

## Scoring Guidelines
Return a score from 0.0 to 1.0:
- 1.0: Perfect - matches expected behavior exactly
- 0.8-0.9: Good - minor issues but functionally correct
- 0.5-0.7: Partial - some correct elements, some errors
- 0.2-0.4: Poor - mostly incorrect but attempted the task
- 0.0-0.1: Failed - wrong format, missing output, or completely wrong

Consider:
1. Structural correctness (valid JSON, correct fields)
2. Logical correctness (calculations, date alignment)
3. Behavioral compliance (follows business rules)
4. Completeness (all required elements present)

Return ONLY a JSON object:
{"score": <0.0-1.0>, "reasoning": "<brief explanation>"}
"""

grader = ScoreModelGrader(
    name="zuca_pipeline_grader",
    type="score_model",
    input=[{
        "role": "user",
        "type": "message",
        "content": GRADER_PROMPT
    }],
    model="o4-mini-2025-04-16",  # or gpt-4.1 when supported
    sampling_params={"reasoning_effort": "low"},
    range=[0.0, 1.0]
)
```

### Option 2: Python Grader (For Structural Checks)

For fast, deterministic structural validation:

```python
from openai.types.graders import PythonGrader

def grade_output(sample_output: str, reference: str, criteria: dict) -> float:
    """
    Grades pipeline output on structural correctness.
    Returns 0.0-1.0 score.
    """
    import json

    score = 0.0

    # Check 1: Valid JSON (0.3 points)
    try:
        output = json.loads(sample_output)
        score += 0.3
    except:
        return 0.0  # Can't proceed without valid JSON

    # Check 2: Required fields present (0.3 points)
    required_fields = criteria.get('required_fields', [])
    present = sum(1 for f in required_fields if f in output)
    score += 0.3 * (present / max(len(required_fields), 1))

    # Check 3: Enum values correct (0.2 points)
    enum_checks = criteria.get('enum_fields', {})
    valid_enums = 0
    for field, valid_values in enum_checks.items():
        if field in output and output[field] in valid_values:
            valid_enums += 1
    score += 0.2 * (valid_enums / max(len(enum_checks), 1))

    # Check 4: Numeric sanity (0.2 points)
    # Add domain-specific checks here
    score += 0.2  # Placeholder

    return min(score, 1.0)

python_grader = PythonGrader(
    name="zuca_structural_grader",
    type="python",
    source=grade_output,
    image="python:3.11"  # Docker image for execution
)
```

### Option 3: Multi-Grader (Best of Both)

Combine structural (Python) + semantic (Model) grading:

```python
from openai.types.graders import MultiGrader

multi_grader = MultiGrader(
    name="zuca_combined_grader",
    type="multi",
    graders=[python_grader, model_grader],
    calculate_output="0.3 * graders.zuca_structural_grader + 0.7 * graders.zuca_pipeline_grader"
)
```

## Converting Test Suites to RFT Data

Script to convert your test suites to RFT format:

```typescript
// scripts/convert-to-rft.ts
import fs from 'fs';
import yaml from 'yaml';

interface TestCase {
  id: string;
  name: string;
  input: Record<string, unknown>;
  focus_steps: string[];
}

interface RFTExample {
  messages: Array<{role: string; content: string}>;
  reference_answer?: string;
  evaluation_criteria: string;
  test_id: string;
}

async function convertToRFT(suitePath: string, outputPath: string) {
  const suite = yaml.parse(fs.readFileSync(suitePath, 'utf-8'));
  const rftData: RFTExample[] = [];

  for (const test of suite.tests) {
    // Build the user prompt (same as your pipeline input)
    const userPrompt = buildPipelinePrompt(test.input);

    // Load reference output if available (from previous successful runs)
    const referenceOutput = await loadReferenceOutput(test.id);

    // Build evaluation criteria based on focus_steps
    const criteria = buildCriteriaForSteps(test.focus_steps);

    rftData.push({
      messages: [
        { role: "system", content: PIPELINE_SYSTEM_PROMPT },
        { role: "user", content: userPrompt }
      ],
      reference_answer: referenceOutput,
      evaluation_criteria: criteria,
      test_id: test.id
    });
  }

  // Write JSONL
  const jsonl = rftData.map(d => JSON.stringify(d)).join('\n');
  fs.writeFileSync(outputPath, jsonl);

  console.log(`Converted ${rftData.length} test cases to RFT format`);
}
```

## Creating an RFT Job

```python
from openai import OpenAI
from openai.types.fine_tuning import ReinforcementMethod, ReinforcementHyperparameters

client = OpenAI()

# Upload training data
training_file = client.files.create(
    file=open("data/rft-train.jsonl", "rb"),
    purpose="fine-tune"
)

validation_file = client.files.create(
    file=open("data/rft-validation.jsonl", "rb"),
    purpose="fine-tune"
)

# Create RFT job
job = client.fine_tuning.jobs.create(
    training_file=training_file.id,
    validation_file=validation_file.id,
    model="o4-mini-2025-04-16",  # Only supported model currently
    method={
        "type": "reinforcement",
        "reinforcement": ReinforcementMethod(
            grader=grader,  # Your grader from above
            hyperparameters=ReinforcementHyperparameters(
                reasoning_effort="medium",
                n_epochs=3,
                batch_size=4
            )
        )
    }
)

print(f"RFT Job created: {job.id}")
```

## Cost Estimation

| Component | Cost |
|-----------|------|
| Training compute | $100/hour of wall-clock time |
| Model grader calls | Standard API rates (tokens used for grading) |
| Estimated total for ~1000 examples | $50-200 depending on complexity |

## Migration Checklist

When RFT becomes available for gpt-4.1-nano:

- [ ] Convert test suites to RFT JSONL format
- [ ] Adapt self-learn-judge.md to grader prompt format
- [ ] Implement scoring (0-1 continuous) instead of pass/fail
- [ ] Create reference outputs from successful SFT runs
- [ ] Run small test job (100 examples) to validate grader
- [ ] Scale to full dataset if grader works well

## Key Differences from SFT

| Aspect | SFT | RFT |
|--------|-----|-----|
| Learning signal | Copy examples | Maximize score |
| Data requirement | Input→Output pairs | Input + Grader |
| Reasoning learned | Imitation | Optimization |
| Best for | Format/structure | Complex reasoning |
| Cost | Lower | Higher |

## References

- [OpenAI RFT Guide](https://platform.openai.com/docs/guides/reinforcement-fine-tuning)
- [RFT Cookbook](https://cookbook.openai.com/examples/reinforcement_fine_tuning)
- [Grader Best Practices](https://platform.openai.com/docs/guides/rft-use-cases)
