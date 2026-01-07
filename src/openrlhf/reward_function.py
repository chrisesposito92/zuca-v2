"""
ZUCA Pipeline Reward Function for OpenRLHF

This implements an LLM-as-judge reward function that scores model outputs
on a 0-1 scale based on structural correctness, logical accuracy, and
business rule compliance.

Usage with OpenRLHF:
    --remote_rm_url /path/to/reward_function.py

The function receives batches of (queries, prompts, labels) and returns
rewards as a dictionary with 'rewards' and 'scores' tensors.
"""

import os
import json
import re
from typing import List, Dict, Any, Optional
import torch

# Grader system prompt (adapted from self-learn judge)
GRADER_SYSTEM_PROMPT = """You are a specialized grader for the ZUCA billing pipeline. Your job is to score model outputs on a scale from 0.0 to 1.0.

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
   - Calculations: Unit * Quantity * Periods = Total
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
{"score": <number 0.0-1.0>, "reasoning": "<brief explanation of score>"}"""


def build_grader_prompt(prompt: str, response: str, reference: Optional[str] = None) -> str:
    """Build the grader prompt for evaluating a response."""
    user_prompt = f"""## Task Description
Evaluate the model's output for the ZUCA billing pipeline.

## Original User Request
{prompt}

## Model Output (To Grade)
{response}
"""

    if reference:
        user_prompt += f"""
## Reference Answer (Expected Output)
{reference}
"""

    user_prompt += """
---

Grade this output. Return ONLY: {"score": <0.0-1.0>, "reasoning": "<explanation>"}"""

    return user_prompt


def parse_grader_response(response_text: str) -> float:
    """Parse the grader's JSON response and extract the score."""
    try:
        # Try to find JSON in the response
        json_match = re.search(r'\{[^}]+\}', response_text)
        if json_match:
            data = json.loads(json_match.group())
            score = float(data.get('score', 0.0))
            return max(0.0, min(1.0, score))  # Clamp to [0, 1]
    except (json.JSONDecodeError, ValueError, KeyError):
        pass

    # Fallback: try to find a number
    numbers = re.findall(r'0\.\d+|1\.0|0|1', response_text)
    if numbers:
        return float(numbers[0])

    return 0.0  # Default to 0 if parsing fails


class ZUCARewardFunction:
    """
    LLM-as-judge reward function for ZUCA pipeline outputs.

    Supports multiple backends:
    - OpenAI API (gpt-4o-mini, etc.)
    - Local vLLM server
    - HuggingFace transformers (for small models)
    """

    def __init__(self):
        self.provider = os.environ.get('REWARD_PROVIDER', 'openai')
        self.model = os.environ.get('REWARD_MODEL', 'gpt-4o-mini')
        self.api_base = os.environ.get('REWARD_API_BASE', None)
        self.client = None

        self._init_client()

    def _init_client(self):
        """Initialize the appropriate client based on provider."""
        if self.provider == 'openai':
            from openai import OpenAI
            self.client = OpenAI(
                api_key=os.environ.get('OPENAI_API_KEY'),
                base_url=self.api_base
            )
        elif self.provider == 'vllm':
            from openai import OpenAI
            # vLLM exposes OpenAI-compatible API
            self.client = OpenAI(
                api_key='EMPTY',  # vLLM doesn't need a real key
                base_url=self.api_base or 'http://localhost:8000/v1'
            )
        elif self.provider == 'local':
            # Use transformers directly
            from transformers import AutoModelForCausalLM, AutoTokenizer
            self.tokenizer = AutoTokenizer.from_pretrained(self.model)
            self.local_model = AutoModelForCausalLM.from_pretrained(
                self.model,
                torch_dtype=torch.float16,
                device_map='auto'
            )

    def _call_llm(self, system_prompt: str, user_prompt: str) -> str:
        """Call the LLM to get a grading response."""
        if self.provider in ('openai', 'vllm'):
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {'role': 'system', 'content': system_prompt},
                    {'role': 'user', 'content': user_prompt}
                ],
                max_tokens=256,
                temperature=0.0
            )
            return response.choices[0].message.content

        elif self.provider == 'local':
            # Format for local model
            messages = [
                {'role': 'system', 'content': system_prompt},
                {'role': 'user', 'content': user_prompt}
            ]

            # Apply chat template
            prompt = self.tokenizer.apply_chat_template(
                messages,
                tokenize=False,
                add_generation_prompt=True
            )

            inputs = self.tokenizer(prompt, return_tensors='pt').to(self.local_model.device)

            with torch.no_grad():
                outputs = self.local_model.generate(
                    **inputs,
                    max_new_tokens=256,
                    temperature=0.0,
                    do_sample=False
                )

            response = self.tokenizer.decode(outputs[0][inputs['input_ids'].shape[1]:], skip_special_tokens=True)
            return response

    def compute_rewards(
        self,
        queries: List[str],
        prompts: List[str],
        labels: Optional[List[str]] = None
    ) -> Dict[str, Any]:
        """
        Compute rewards for a batch of model outputs.

        Args:
            queries: Full generated text (prompt + response)
            prompts: Original prompts only
            labels: Reference answers from dataset (optional)

        Returns:
            Dictionary with 'rewards', 'scores', and 'extra_logs'
        """
        rewards = []
        scores = []
        reasonings = []

        for i, (query, prompt) in enumerate(zip(queries, prompts)):
            # Extract the response (query minus prompt)
            response = query[len(prompt):].strip() if query.startswith(prompt) else query

            # Get reference if available
            reference = labels[i] if labels and i < len(labels) else None

            # Build grader prompt
            grader_prompt = build_grader_prompt(prompt, response, reference)

            try:
                # Call LLM grader
                grader_response = self._call_llm(GRADER_SYSTEM_PROMPT, grader_prompt)
                score = parse_grader_response(grader_response)

                # Store reasoning for logging
                try:
                    data = json.loads(re.search(r'\{[^}]+\}', grader_response).group())
                    reasoning = data.get('reasoning', 'No reasoning provided')
                except:
                    reasoning = grader_response[:200]

            except Exception as e:
                print(f"Warning: Grader call failed: {e}")
                score = 0.0
                reasoning = f"Error: {str(e)}"

            # Convert score to reward (can apply transformations here)
            # Using simple linear mapping: reward = 2 * score - 1 (maps [0,1] to [-1,1])
            reward = 2 * score - 1

            rewards.append(reward)
            scores.append(score)
            reasonings.append(reasoning)

        return {
            'rewards': torch.tensor(rewards, dtype=torch.float32),
            'scores': torch.tensor(scores, dtype=torch.float32),
            'extra_logs': {
                'reward_mean': sum(rewards) / len(rewards),
                'reward_std': torch.tensor(rewards).std().item(),
                'score_mean': sum(scores) / len(scores),
                'reasonings': reasonings[:3]  # Log first 3 for debugging
            }
        }


# Global instance for OpenRLHF to use
_reward_fn_instance = None

def get_reward_fn():
    """Get or create the reward function instance."""
    global _reward_fn_instance
    if _reward_fn_instance is None:
        _reward_fn_instance = ZUCARewardFunction()
    return _reward_fn_instance


def reward_func(queries: List[str], prompts: List[str], labels: Optional[List[str]] = None) -> Dict[str, Any]:
    """
    Main entry point for OpenRLHF.

    This function is called by OpenRLHF during training to compute rewards
    for generated responses.

    Args:
        queries: Full generated text (prompt + response)
        prompts: Original prompts only
        labels: Reference answers from dataset (optional)

    Returns:
        Dictionary with 'rewards' tensor for advantage calculation
    """
    fn = get_reward_fn()
    return fn.compute_rewards(queries, prompts, labels)


# For testing
if __name__ == '__main__':
    # Test with mock data
    test_prompts = [
        "Design a subscription for a SaaS company with monthly billing..."
    ]
    test_queries = [
        'Design a subscription for a SaaS company with monthly billing...\n\n{"subscription": {"name": "Test", "billingPeriod": "Month"}}'
    ]

    result = reward_func(test_queries, test_prompts)
    print(f"Rewards: {result['rewards']}")
    print(f"Scores: {result['scores']}")
    print(f"Extra logs: {result['extra_logs']}")
