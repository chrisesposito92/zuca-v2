/**
 * React Query hooks for the analyze API endpoint.
 */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { ZucaInput, ZucaOutput } from "@zuca/types";

interface AnalyzeResponse {
  success: boolean;
  session_id: string;
  result: ZucaOutput;
}

interface AnalyzeError {
  error: string;
  details?: string;
  step?: string;
}

interface AnalyzeRequest {
  input: ZucaInput;
  model?: string;
}

async function runAnalysis(payload: AnalyzeRequest): Promise<AnalyzeResponse> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data as AnalyzeError;
  }

  return data;
}

export function useAnalyze() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: runAnalysis,
    onSuccess: (data) => {
      // Invalidate sessions list to show new session
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      // Navigate to solution page
      router.push(`/solution/${data.session_id}`);
    },
  });
}

/**
 * Helper to transform form data to ZucaInput
 */
export function formDataToZucaInput(formData: FormData): ZucaInput {
  const customer_name = formData.get("customer_name") as string;
  const contract_start_date = formData.get("contract_start_date") as string;
  const use_case_description = formData.get("use_case_description") as string;
  const terms_months = parseInt(formData.get("terms_months") as string, 10) || 12;
  const transaction_currency = (formData.get("transaction_currency") as string) || "USD";
  const billing_period = (formData.get("billing_period") as string) || "Monthly";
  const is_allocations = formData.get("is_allocations") === "true";
  const allocation_method = formData.get("allocation_method") as string | undefined;
  const rev_rec_notes = formData.get("rev_rec_notes") as string | undefined;

  return {
    customer_name,
    contract_start_date,
    use_case_description,
    terms_months,
    transaction_currency: transaction_currency as ZucaInput["transaction_currency"],
    billing_period: billing_period as ZucaInput["billing_period"],
    is_allocations,
    ...(allocation_method && { allocation_method: allocation_method as ZucaInput["allocation_method"] }),
    ...(rev_rec_notes && { rev_rec_notes }),
  };
}
