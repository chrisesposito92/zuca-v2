/**
 * React Query hooks for the revenue snapshot feature.
 */

"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { RevenueSnapshotInput, RevenueSnapshotOutput } from "@zuca/types/revenue-snapshot";

export interface ZuoraConnection {
  id: string;
  tenant_name: string;
  base_url: string;
  client_id: string;
  is_active: boolean;
  updated_at: string;
}

export interface ZuoraConnectionsResponse {
  connected: boolean;
  active_connection_id: string | null;
  connections: ZuoraConnection[];
}

export interface SubscriptionSummary {
  subscription_number: string;
  subscription_name?: string | null;
  account_name?: string | null;
  account_number?: string | null;
  status?: string | null;
  term_start_date?: string | null;
  term_end_date?: string | null;
  version?: number | null;
  has_allocation_eligible?: boolean;
}

interface SubscriptionsResponse {
  success: boolean;
  subscriptions: SubscriptionSummary[];
  total: number;
}

interface SnapshotResponse {
  success: boolean;
  session_id: string;
  result: RevenueSnapshotOutput;
}

async function parseJsonSafe(res: Response) {
  const text = await res.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

async function fetchConnections(): Promise<ZuoraConnectionsResponse> {
  const res = await fetch("/api/revenue-snapshot/auth");
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

async function saveConnection(payload: {
  tenant_name: string;
  base_url?: string;
  client_id: string;
  client_secret: string;
  set_active?: boolean;
}): Promise<{ connected: boolean; connection: ZuoraConnection }> {
  const res = await fetch("/api/revenue-snapshot/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

async function deleteConnection(connectionId: string): Promise<{ success: boolean }> {
  const res = await fetch("/api/revenue-snapshot/auth", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ connection_id: connectionId }),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

async function setActiveConnection(connectionId: string): Promise<{ success: boolean; active_connection_id: string }> {
  const res = await fetch("/api/revenue-snapshot/auth", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ connection_id: connectionId }),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

async function fetchSubscriptions(connectionId?: string | null): Promise<SubscriptionsResponse> {
  const url = connectionId
    ? `/api/revenue-snapshot/subscriptions?connection_id=${encodeURIComponent(connectionId)}`
    : "/api/revenue-snapshot/subscriptions";
  const res = await fetch(url);
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

async function generateSnapshot(payload: { input: RevenueSnapshotInput; model?: string; connection_id?: string | null }): Promise<SnapshotResponse> {
  const res = await fetch("/api/revenue-snapshot/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) throw data;
  return data;
}

export function useZuoraConnections() {
  return useQuery({
    queryKey: ["zuora-connections"],
    queryFn: fetchConnections,
  });
}

export function useSaveZuoraConnection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: saveConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["zuora-connections"] });
    },
  });
}

export function useDeleteZuoraConnection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["zuora-connections"] });
      queryClient.invalidateQueries({ queryKey: ["zuora-subscriptions"] });
    },
  });
}

export function useSetActiveZuoraConnection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: setActiveConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["zuora-connections"] });
      queryClient.invalidateQueries({ queryKey: ["zuora-subscriptions"] });
    },
  });
}

export function useZuoraSubscriptions(enabled: boolean, connectionId?: string | null) {
  return useQuery({
    queryKey: ["zuora-subscriptions", connectionId ?? "active"],
    queryFn: () => fetchSubscriptions(connectionId),
    enabled,
  });
}

export function useRevenueSnapshotGenerate() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: generateSnapshot,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      router.push(`/solution/${data.session_id}`);
    },
  });
}
