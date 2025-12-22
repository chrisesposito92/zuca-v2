/**
 * React Query hooks for the UC Generator API endpoint.
 */

import { useMutation } from "@tanstack/react-query";
import type { UCGeneratorInput, GeneratedUseCase } from "@zuca/types/uc-generator";

interface UCGeneratorResponse {
  success: boolean;
  session_id: string;
  use_cases: GeneratedUseCase[];
  research?: unknown;
  generated?: { customer_name?: string };
  formatted?: string;
}

interface UCGeneratorError {
  error: string;
  details?: string;
}

interface UCGeneratorRequest {
  input: UCGeneratorInput;
  model?: string;
}

async function runUCGenerator(payload: UCGeneratorRequest): Promise<UCGeneratorResponse> {
  const response = await fetch("/api/uc-generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data as UCGeneratorError;
  }

  return data;
}

export function useUCGenerator() {
  return useMutation({
    mutationFn: runUCGenerator,
  });
}
