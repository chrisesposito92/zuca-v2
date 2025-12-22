import { randomUUID } from 'crypto';
import { debugLog } from '../config';

interface JsonRpcRequest {
  jsonrpc: '2.0';
  id?: string;
  method: string;
  params?: Record<string, unknown>;
}

interface JsonRpcResponse<T = unknown> {
  jsonrpc: '2.0';
  id?: string;
  result?: T;
  error?: { message?: string; code?: number; data?: unknown };
}

const MCP_PROTOCOL_VERSION = '2024-11-05';

class McpHttpClient {
  private initialized = false;
  private initializing?: Promise<void>;

  constructor(private readonly serverUrl: string) {}

  async callTool<T = unknown>(name: string, args: Record<string, unknown>): Promise<T> {
    await this.ensureInitialized();
    return this.request<T>('tools/call', {
      name,
      arguments: args,
    });
  }

  private async ensureInitialized(): Promise<void> {
    if (this.initialized) return;
    if (!this.initializing) {
      this.initializing = this.initialize();
    }
    await this.initializing;
  }

  private async initialize(): Promise<void> {
    try {
      await this.request('initialize', {
        protocolVersion: MCP_PROTOCOL_VERSION,
        capabilities: {},
        clientInfo: {
          name: 'zuca-v2',
          version: '1.0.0',
        },
      });

      await this.notify('initialized', {});

      this.initialized = true;
      debugLog('MCP initialized', { serverUrl: this.serverUrl });
    } catch (error) {
      debugLog('MCP initialize failed, proceeding without handshake', error);
      // Mark as initialized to avoid repeated attempts
      this.initialized = true;
    }
  }

  private async notify(method: string, params?: Record<string, unknown>): Promise<void> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method,
      params,
    };

    try {
      await fetch(this.serverUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      debugLog('MCP notification failed', error);
    }
  }

  private async request<T = unknown>(
    method: string,
    params?: Record<string, unknown>
  ): Promise<T> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      id: randomUUID(),
      method,
      params,
    };

    const response = await fetch(this.serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as JsonRpcResponse<T>;

    if (!response.ok) {
      throw new Error(data.error?.message || `MCP request failed (${response.status})`);
    }

    if (data.error) {
      throw new Error(data.error.message || 'MCP request failed');
    }

    return data.result as T;
  }
}

const clients = new Map<string, McpHttpClient>();

export function getMcpClient(serverUrl: string): McpHttpClient {
  const existing = clients.get(serverUrl);
  if (existing) return existing;

  const client = new McpHttpClient(serverUrl);
  clients.set(serverUrl, client);
  return client;
}
