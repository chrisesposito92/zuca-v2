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

// Follow-up query
async function sendFollowUp(sessionId: string, query: string): Promise<{ type: string; data: unknown }> {
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
  inputUpdates?: Record<string, unknown>
): Promise<{ success: boolean; result: ZucaOutput }> {
  const response = await fetch(`/api/sessions/${sessionId}/regenerate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input_updates: inputUpdates }),
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
    mutationFn: (inputUpdates?: Record<string, unknown>) =>
      regenerateSession(sessionId, inputUpdates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });
}
