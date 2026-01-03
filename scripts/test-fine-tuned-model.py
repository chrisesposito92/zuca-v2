#!/usr/bin/env python3
"""
Quick test script for the fine-tuned Zuora model.
Run: python scripts/test-fine-tuned-model.py
"""

from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import torch

MODEL_ID = "topher39/zuca-v2-autotrain"

def test_model():
    print(f"Loading model: {MODEL_ID}")
    print("This may take a few minutes to download...")

    # Load with appropriate settings for M4 Mac
    pipe = pipeline(
        "text-generation",
        model=MODEL_ID,
        torch_dtype=torch.float16,
        device_map="auto",
    )

    # Test questions about Zuora
    test_questions = [
        "What is a Performance Obligation (POB) in Zuora Revenue?",
        "How do I configure a recurring subscription with usage-based billing in Zuora?",
        "What is the difference between Invoice Owner and Subscription Owner?",
        "Explain the purpose of the BK-STD-SASTERM POB template.",
    ]

    print("\n" + "="*60)
    print("TESTING FINE-TUNED ZUORA MODEL")
    print("="*60)

    for question in test_questions:
        print(f"\n📝 Question: {question}")
        print("-" * 40)

        messages = [
            {"role": "system", "content": "You are a Zuora Billing and Revenue expert."},
            {"role": "user", "content": question},
        ]

        response = pipe(
            messages,
            max_new_tokens=512,
            temperature=0.7,
            do_sample=True,
        )

        # Extract assistant response
        generated = response[0]["generated_text"]
        if isinstance(generated, list):
            # Chat format - get last message
            assistant_msg = generated[-1]["content"] if generated else "No response"
        else:
            assistant_msg = generated

        print(f"🤖 Response: {assistant_msg}")
        print()

if __name__ == "__main__":
    test_model()
