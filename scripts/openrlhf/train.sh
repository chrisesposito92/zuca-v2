#!/bin/bash
# =============================================================================
# OpenRLHF Training Script for ZUCA Pipeline
# =============================================================================
#
# This script runs RLHF training using OpenRLHF with the ZUCA reward function.
#
# Configuration (set these before running):
#   - BASE_MODEL: HuggingFace model to fine-tune
#   - REWARD_PROVIDER: 'openai', 'vllm', or 'local'
#   - REWARD_MODEL: Model to use for grading
#   - DATA_PATH: Path to training prompts
#
# =============================================================================

set -e

# =============================================================================
# Configuration - EDIT THESE
# =============================================================================

# Base model to fine-tune (good options for structured output)
BASE_MODEL="${BASE_MODEL:-Qwen/Qwen2.5-7B-Instruct}"

# Reward function configuration
export REWARD_PROVIDER="${REWARD_PROVIDER:-openai}"
export REWARD_MODEL="${REWARD_MODEL:-gpt-4o-mini}"
# export REWARD_API_BASE="http://localhost:8000/v1"  # Uncomment for local vLLM

# Data paths
DATA_PATH="${DATA_PATH:-/workspace/data/train.jsonl}"
EVAL_DATA_PATH="${EVAL_DATA_PATH:-/workspace/data/validation.jsonl}"

# Training hyperparameters
ALGORITHM="${ALGORITHM:-reinforce_baseline}"  # Options: ppo, grpo, reinforce_baseline, rloo
LEARNING_RATE="${LEARNING_RATE:-1e-6}"
NUM_EPISODES="${NUM_EPISODES:-1}"  # Number of epochs
ROLLOUT_BATCH_SIZE="${ROLLOUT_BATCH_SIZE:-128}"
MICRO_BATCH_SIZE="${MICRO_BATCH_SIZE:-4}"
MAX_LENGTH="${MAX_LENGTH:-4096}"

# Output
OUTPUT_DIR="${OUTPUT_DIR:-/workspace/checkpoints/zuca-rlhf}"
WANDB_PROJECT="${WANDB_PROJECT:-zuca-rlhf}"

# Resources
NUM_GPUS="${NUM_GPUS:-1}"

# =============================================================================
# Validate environment
# =============================================================================

echo "=================================================="
echo "ZUCA OpenRLHF Training"
echo "=================================================="
echo ""
echo "Configuration:"
echo "  Base model:     $BASE_MODEL"
echo "  Algorithm:      $ALGORITHM"
echo "  Reward:         $REWARD_PROVIDER / $REWARD_MODEL"
echo "  Learning rate:  $LEARNING_RATE"
echo "  Batch size:     $ROLLOUT_BATCH_SIZE"
echo "  Max length:     $MAX_LENGTH"
echo "  Output:         $OUTPUT_DIR"
echo ""

# Check data exists
if [ ! -f "$DATA_PATH" ]; then
    echo "ERROR: Training data not found at $DATA_PATH"
    echo "Please upload your data first."
    exit 1
fi

# Check API key for OpenAI grader
if [ "$REWARD_PROVIDER" = "openai" ] && [ -z "$OPENAI_API_KEY" ]; then
    echo "ERROR: OPENAI_API_KEY not set but using OpenAI for grading"
    exit 1
fi

# Get the reward function path
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REWARD_FUNC_PATH="${SCRIPT_DIR}/../../src/openrlhf/reward_function.py"

if [ ! -f "$REWARD_FUNC_PATH" ]; then
    echo "ERROR: Reward function not found at $REWARD_FUNC_PATH"
    exit 1
fi

echo "Using reward function: $REWARD_FUNC_PATH"
echo ""

# =============================================================================
# Run training
# =============================================================================

echo "Starting training..."
echo ""

# Single GPU training
if [ "$NUM_GPUS" -eq 1 ]; then
    python -m openrlhf.cli.train_ppo \
        --pretrain "$BASE_MODEL" \
        --remote_rm_url "$REWARD_FUNC_PATH" \
        --prompt_data "$DATA_PATH" \
        --eval_dataset "$EVAL_DATA_PATH" \
        --input_key "prompt" \
        --apply_chat_template \
        --advantage_estimator "$ALGORITHM" \
        --save_path "$OUTPUT_DIR" \
        --micro_train_batch_size "$MICRO_BATCH_SIZE" \
        --train_batch_size "$ROLLOUT_BATCH_SIZE" \
        --rollout_batch_size "$ROLLOUT_BATCH_SIZE" \
        --max_len "$MAX_LENGTH" \
        --zero_stage 2 \
        --bf16 \
        --learning_rate "$LEARNING_RATE" \
        --num_episodes "$NUM_EPISODES" \
        --save_steps 100 \
        --logging_steps 10 \
        --eval_steps 50 \
        --use_wandb \
        --wandb_project "$WANDB_PROJECT"

# Multi-GPU training with Ray
else
    python -m openrlhf.cli.train_ppo_ray \
        --pretrain "$BASE_MODEL" \
        --remote_rm_url "$REWARD_FUNC_PATH" \
        --prompt_data "$DATA_PATH" \
        --eval_dataset "$EVAL_DATA_PATH" \
        --input_key "prompt" \
        --apply_chat_template \
        --advantage_estimator "$ALGORITHM" \
        --save_path "$OUTPUT_DIR" \
        --micro_train_batch_size "$MICRO_BATCH_SIZE" \
        --train_batch_size "$ROLLOUT_BATCH_SIZE" \
        --rollout_batch_size "$ROLLOUT_BATCH_SIZE" \
        --max_len "$MAX_LENGTH" \
        --zero_stage 2 \
        --bf16 \
        --learning_rate "$LEARNING_RATE" \
        --num_episodes "$NUM_EPISODES" \
        --save_steps 100 \
        --logging_steps 10 \
        --eval_steps 50 \
        --use_wandb \
        --wandb_project "$WANDB_PROJECT" \
        --vllm_tensor_parallel_size 1 \
        --actor_num_nodes 1 \
        --actor_num_gpus_per_node "$NUM_GPUS" \
        --colocate_all_actors
fi

echo ""
echo "=================================================="
echo "Training complete!"
echo "Checkpoints saved to: $OUTPUT_DIR"
echo "=================================================="
