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

/**
 * MCP client that supports SSE transport.
 * SSE transport works by:
 * 1. Connecting to /sse endpoint via GET to receive events
 * 2. Server sends an "endpoint" event with a session-specific POST URL
 * 3. Client POSTs JSON-RPC messages to that session URL
 */
class McpHttpClient {
  private initialized = false;
  private initializing?: Promise<void>;
  private sessionEndpoint?: string;

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

  /**
   * Connect to SSE endpoint to get the session-specific POST URL
   */
  private async getSessionEndpoint(): Promise<string> {
    // Check if this is an SSE URL (ends with /sse)
    if (!this.serverUrl.endsWith('/sse')) {
      // Not SSE transport, use URL directly
      return this.serverUrl;
    }

    // For SSE transport, connect and get the endpoint event
    const baseUrl = this.serverUrl.replace(/\/sse$/, '');

    return new Promise<string>((resolve, reject) => {
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort();
        reject(new Error('SSE connection timeout'));
      }, 15000);

      fetch(this.serverUrl, {
        method: 'GET',
        headers: { 'Accept': 'text/event-stream' },
        signal: controller.signal,
      })
        .then(async (response) => {
          if (!response.ok || !response.body) {
            throw new Error(`SSE connection failed: ${response.status}`);
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (let i = 0; i < lines.length; i++) {
              const line = lines[i].trim();
              if (line.startsWith('event: endpoint')) {
                // Next line should be the data
                const nextLine = lines[i + 1]?.trim();
                if (nextLine?.startsWith('data: ')) {
                  const endpoint = nextLine.slice(6).trim();
                  clearTimeout(timeout);
                  reader.cancel();
                  debugLog('SSE session endpoint obtained:', endpoint);
                  resolve(endpoint);
                  return;
                }
              }
            }
          }

          // If we get here without finding endpoint, use fallback
          clearTimeout(timeout);
          debugLog('SSE endpoint event not found, using fallback');
          resolve(baseUrl);
        })
        .catch((error) => {
          clearTimeout(timeout);
          debugLog('SSE connection error:', error);
          // Fallback to base URL
          resolve(baseUrl);
        });
    });
  }

  private async initialize(): Promise<void> {
    try {
      // Get the session endpoint first (for SSE transport)
      this.sessionEndpoint = await this.getSessionEndpoint();
      debugLog('MCP session endpoint:', this.sessionEndpoint);

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
      debugLog('MCP initialized', { serverUrl: this.serverUrl, sessionEndpoint: this.sessionEndpoint });
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

    const endpoint = this.sessionEndpoint || this.serverUrl;

    try {
      await fetch(endpoint, {
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

    const endpoint = this.sessionEndpoint || this.serverUrl;

    const response = await fetch(endpoint, {
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
