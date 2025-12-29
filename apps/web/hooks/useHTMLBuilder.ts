/**
 * React Query hooks for HTML Template Builder.
 *
 * Provides mutations for generating template code and expressions,
 * and queries for fetching quick templates.
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  HTMLTemplateRequest,
  HTMLTemplateCodeOutput,
  HTMLTemplateExpressionOutput,
  QuickTemplate,
  HTMLTemplateMode,
  TemplateValidationRequest,
  TemplateValidationOutput,
  GroupByWizardRequest,
  GroupByWizardOutput,
} from "@zuca/types/html-template";

// Response types

interface GenerateResponse {
  success: boolean;
  session_id: string;
  mode: HTMLTemplateMode;
  result: HTMLTemplateCodeOutput | HTMLTemplateExpressionOutput;
}

interface TemplatesResponse {
  success: boolean;
  templates: QuickTemplate[];
}

interface GroupedTemplatesResponse {
  success: boolean;
  templates: Record<string, QuickTemplate[]>;
}

interface ValidateResponse {
  success: boolean;
  session_id: string;
  result: TemplateValidationOutput;
}

interface GroupByResponse {
  success: boolean;
  session_id: string;
  mode: "groupby";
  result: GroupByWizardOutput;
}

// API functions

async function generateTemplate(
  payload: HTMLTemplateRequest & { model?: string }
): Promise<GenerateResponse> {
  const response = await fetch("/api/html-template", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

async function fetchTemplates(mode?: HTMLTemplateMode): Promise<TemplatesResponse> {
  const params = mode ? `?mode=${mode}` : "";
  const response = await fetch(`/api/html-template/templates${params}`);
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

async function fetchGroupedTemplates(
  mode?: HTMLTemplateMode
): Promise<GroupedTemplatesResponse> {
  const params = mode ? `?mode=${mode}&grouped=true` : "?grouped=true";
  const response = await fetch(`/api/html-template/templates${params}`);
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

async function validateTemplateCode(
  payload: TemplateValidationRequest & { model?: string }
): Promise<ValidateResponse> {
  const response = await fetch("/api/html-template/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

async function generateGroupByTemplate(
  payload: GroupByWizardRequest & { model?: string }
): Promise<GroupByResponse> {
  const response = await fetch("/api/html-template/groupby", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Hooks

/**
 * Hook for generating HTML template code or expressions.
 * Returns a mutation that can be called with the request payload.
 */
export function useHTMLBuilder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: generateTemplate,
    onSuccess: () => {
      // Invalidate sessions list to show the new session
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
}

/**
 * Hook for fetching quick templates.
 * Optionally filter by mode (code or expression).
 */
export function useQuickTemplates(mode?: HTMLTemplateMode) {
  return useQuery({
    queryKey: ["html-templates", mode ?? "all"],
    queryFn: () => fetchTemplates(mode),
    staleTime: 1000 * 60 * 60, // Cache for 1 hour - templates don't change often
  });
}

/**
 * Hook for fetching quick templates grouped by category.
 * Optionally filter by mode (code or expression).
 */
export function useGroupedTemplates(mode?: HTMLTemplateMode) {
  return useQuery({
    queryKey: ["html-templates-grouped", mode ?? "all"],
    queryFn: () => fetchGroupedTemplates(mode),
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });
}

/**
 * Hook for validating HTML template code.
 * Returns a mutation that validates template syntax, object paths, and best practices.
 */
export function useTemplateValidator() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: validateTemplateCode,
    onSuccess: () => {
      // Invalidate sessions list to show the new session
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
}

/**
 * Hook for generating GroupBy template code via wizard.
 * Handles nested loops with subtotals using GroupBy, Cmd_Assign, and Sum patterns.
 */
export function useGroupByWizard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: generateGroupByTemplate,
    onSuccess: () => {
      // Invalidate sessions list to show the new session
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
}

// Re-export types for convenience
export type {
  GenerateResponse,
  TemplatesResponse,
  GroupedTemplatesResponse,
  ValidateResponse,
  GroupByResponse,
  HTMLTemplateRequest,
  HTMLTemplateCodeOutput,
  HTMLTemplateExpressionOutput,
  QuickTemplate,
  HTMLTemplateMode,
  TemplateValidationRequest,
  TemplateValidationOutput,
  GroupByWizardRequest,
  GroupByWizardOutput,
};
