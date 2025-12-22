/**
 * React Query hooks for session management.
 */

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { ZucaOutput } from "@zuca/types";
import type { UCGeneratorOutput } from "@zuca/types/uc-generator";

// Types
interface Session {
  id: string;
  session_type: "analyze" | "uc-generate";
  customer_name: string;
  status: "pending" | "running" | "completed" | "failed";
  created_at: string;
  updated_at: string;
  llm_model?: string | null;
}

interface SessionDetail extends Session {
  input: Record<string, unknown>;
  result: ZucaOutput | UCGeneratorOutput | null;
  current_step: number;
  error_message: string | null;
  conversation_history: Array<{
    role: "user" | "assistant";
    content: string;
    created_at: string;
  }>;
}

interface SessionsResponse {
  success: boolean;
  sessions: Session[];
  pagination: {
    limit: number;
    offset: number;
    count: number;
  };
}

interface SessionDetailResponse {
  success: boolean;
  session: SessionDetail;
}

// Fetch all sessions
async function fetchSessions(limit = 50, offset = 0): Promise<SessionsResponse> {
  const response = await fetch(`/api/sessions?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Fetch single session
async function fetchSession(id: string): Promise<SessionDetailResponse> {
  const response = await fetch(`/api/sessions/${id}`);
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Delete session
async function deleteSession(id: string): Promise<void> {
  const response = await fetch(`/api/sessions/${id}`, { method: "DELETE" });
  const data = await response.json();
  if (!response.ok) throw data;
}

// Follow-up response type
interface FollowUpResponse {
  success: boolean;
  type: "answer" | "clarification" | "suggestion";
  data: string;
  suggestedEdits?: Array<{
    field: string;
    currentValue?: unknown;
    suggestedValue?: unknown;
    reason: string;
  }>;
}

// Follow-up query
async function sendFollowUp(sessionId: string, query: string): Promise<FollowUpResponse> {
  const response = await fetch(`/api/sessions/${sessionId}/follow-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Edit field (smart rerun)
async function editField(
  sessionId: string,
  field: string,
  value: unknown
): Promise<{ success: boolean; result: ZucaOutput }> {
  const response = await fetch(`/api/sessions/${sessionId}/edit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ field, value }),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Regenerate (full rerun)
async function regenerateSession(
  sessionId: string,
  inputUpdates?: Record<string, unknown>,
  model?: string
): Promise<{ success: boolean; result: ZucaOutput }> {
  const response = await fetch(`/api/sessions/${sessionId}/regenerate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input_updates: inputUpdates, model }),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Patch response type
interface PatchResponse {
  success: boolean;
  message: string;
  session_id: string;
  affected_steps: string[];
  changes: Array<{ step: string; description: string }>;
  result: ZucaOutput;
}

// Patch output (incremental update)
async function patchOutput(
  sessionId: string,
  path: string,
  value: unknown,
  description?: string
): Promise<PatchResponse> {
  const response = await fetch(`/api/sessions/${sessionId}/patch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path, value, description }),
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Clear conversation
async function clearConversation(sessionId: string): Promise<{ success: boolean }> {
  const response = await fetch(`/api/sessions/${sessionId}/messages`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

// Hooks

export function useSessions(limit = 50, offset = 0) {
  return useQuery({
    queryKey: ["sessions", limit, offset],
    queryFn: () => fetchSessions(limit, offset),
  });
}

export function useSession(id: string) {
  return useQuery({
    queryKey: ["session", id],
    queryFn: () => fetchSession(id),
    enabled: !!id,
  });
}

export function useDeleteSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
}

export function useFollowUp(sessionId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (query: string) => sendFollowUp(sessionId, query),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}

export function useEditField(sessionId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ field, value }: { field: string; value: unknown }) =>
      editField(sessionId, field, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}

export function useRegenerate(sessionId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params?: { inputUpdates?: Record<string, unknown>; model?: string }) =>
      regenerateSession(sessionId, params?.inputUpdates, params?.model),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}

export function usePatchOutput(sessionId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      path,
      value,
      description,
    }: {
      path: string;
      value: unknown;
      description?: string;
    }) => patchOutput(sessionId, path, value, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}

export function useClearConversation(sessionId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => clearConversation(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}

// Re-export types for convenience
export type { FollowUpResponse, PatchResponse };
