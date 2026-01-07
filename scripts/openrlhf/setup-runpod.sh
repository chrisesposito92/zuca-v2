#!/bin/bash
# =============================================================================
# OpenRLHF Setup Script for RunPod
# =============================================================================
#
# This script sets up the OpenRLHF environment on a RunPod GPU instance.
#
# Prerequisites:
#   - RunPod account with GPU pod (A100-40GB or A100-80GB recommended)
#   - Use the PyTorch template: nvcr.io/nvidia/pytorch:25.02-py3
#
# Usage:
#   1. SSH into your RunPod instance
#   2. Clone your repo or upload files
#   3. Run: bash scripts/openrlhf/setup-runpod.sh
#
# =============================================================================

set -e  # Exit on error

echo "=================================================="
echo "OpenRLHF Setup for ZUCA Pipeline Training"
echo "=================================================="

# Check GPU
echo ""
echo "Checking GPU..."
nvidia-smi --query-gpu=name,memory.total --format=csv
echo ""

# Install OpenRLHF with vLLM support
echo "Installing OpenRLHF..."
pip install openrlhf[vllm] --quiet

# Install additional dependencies
echo "Installing additional dependencies..."
pip install openai transformers datasets wandb --quiet

# Verify installation
echo ""
echo "Verifying installation..."
python -c "import openrlhf; print(f'OpenRLHF version: {openrlhf.__version__}')"
python -c "import vllm; print(f'vLLM installed successfully')"
python -c "import torch; print(f'PyTorch: {torch.__version__}, CUDA: {torch.cuda.is_available()}')"

# Create data directory
mkdir -p /workspace/data
mkdir -p /workspace/checkpoints
mkdir -p /workspace/logs

echo ""
echo "=================================================="
echo "Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Upload your training data to /workspace/data/"
echo "  2. Set environment variables:"
echo "     export OPENAI_API_KEY='your-key'  # For LLM grader"
echo "     export WANDB_API_KEY='your-key'   # For logging (optional)"
echo "     export HF_TOKEN='your-token'      # For HuggingFace models"
echo ""
echo "  3. Run training:"
echo "     bash scripts/openrlhf/train.sh"
echo "=================================================="
