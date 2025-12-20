import OpenAI from 'openai';
import { z } from 'zod';

import { config, debugLog } from '../config.js';

/**
 * OpenAI client instance
 */
const openai = new OpenAI({
  apiKey: config.openai.apiKey,
});

/**
 * Available built-in tools for the Responses API
 */
export type BuiltInTool = 'web_search' | 'code_interpreter';

/**
 * Reasoning effort levels for gpt-5.2 and reasoning models
 * - 'low': Minimal reasoning, faster responses
 * - 'medium': Balanced reasoning and speed (recommended default)
 * - 'high': Maximum reasoning effort, slower but more thorough
 */
export type ReasoningEffort = 'low' | 'medium' | 'high';

/**
 * MCP server tool configuration for the Responses API
 * See: https://platform.openai.com/docs/guides/tools-connectors-mcp
 */
export interface McpTool {
  type: 'mcp';
  /** Label to identify this MCP server in responses */
  server_label: string;
  /** Description of what this MCP server does */
  server_description: string;
  /** URL of the MCP server (must support Streamable HTTP or HTTP/SSE) */
  server_url: string;
  /** Whether tool calls require user approval */
  require_approval?: 'never' | 'always';
  /** Optional list of specific tool names to allow from this server */
  allowed_tools?: string[];
}

/**
 * Custom tool definition for function calling
 */
export interface CustomTool {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  };
}

/**
 * Message role types
 */
export type MessageRole = 'system' | 'user' | 'assistant';

/**
 * Message structure for conversations
 */
export interface Message {
  role: MessageRole;
  content: string;
}

/**
 * Options for LLM completion requests
 */
export interface CompletionOptions {
  /** System prompt */
  systemPrompt?: string;

  /** User message */
  userMessage: string;

  /** Previous messages for context */
  previousMessages?: Message[];

  /** Built-in tools to enable */
  tools?: BuiltInTool[];

  /** Custom function tools */
  customTools?: CustomTool[];

  /** MCP server tools */
  mcpTools?: McpTool[];

  /** JSON schema for structured output */
  responseSchema?: Record<string, unknown>;

  /** Temperature (0-2) */
  temperature?: number;

  /** Maximum tokens in response */
  maxTokens?: number;

  /** Model override */
  model?: string;

  /**
   * Reasoning effort level for gpt-5.2 and reasoning models
   * Required for gpt-5.2 to enable reasoning capabilities
   * Defaults to 'medium' for balanced performance
   */
  reasoningEffort?: ReasoningEffort;
}

/**
 * Result from an LLM completion
 */
export interface CompletionResult<T = unknown> {
  /** The raw text response */
  text: string;

  /** Parsed structured output (if schema provided) */
  structured?: T;

  /** Tool calls made during the response */
  toolCalls?: Array<{
    name: string;
    arguments: Record<string, unknown>;
    result?: unknown;
  }>;

  /** Usage statistics */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Build the tools array for the API request
 * Uses explicit any typing for tool objects due to OpenAI SDK type complexities
 */
function buildTools(
  builtInTools?: BuiltInTool[],
  customTools?: CustomTool[],
  mcpTools?: McpTool[]
): OpenAI.Responses.Tool[] | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tools: any[] = [];

  // Add built-in tools
  if (builtInTools?.includes('web_search')) {
    tools.push({ type: 'web_search' });
  }
  if (builtInTools?.includes('code_interpreter')) {
    tools.push({ type: 'code_interpreter', container: { type: 'auto' } });
  }

  // Add MCP server tools
  if (mcpTools) {
    for (const mcp of mcpTools) {
      tools.push({
        type: 'mcp',
        server_label: mcp.server_label,
        server_description: mcp.server_description,
        server_url: mcp.server_url,
        require_approval: mcp.require_approval || 'never',
        ...(mcp.allowed_tools && { allowed_tools: mcp.allowed_tools }),
      });
    }
  }

  // Add custom function tools
  if (customTools) {
    for (const tool of customTools) {
      tools.push({
        type: 'function',
        name: tool.function.name,
        description: tool.function.description,
        parameters: tool.function.parameters,
        strict: true,
      });
    }
  }

  return tools.length > 0 ? tools : undefined;
}

/**
 * Build the messages array for the API request
 */
function buildMessages(
  systemPrompt: string | undefined,
  userMessage: string,
  previousMessages?: Message[]
): OpenAI.Responses.ResponseInput {
  const messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }> = [];

  // Add system prompt if provided
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }

  // Add previous messages for context
  if (previousMessages) {
    for (const msg of previousMessages) {
      messages.push({ role: msg.role, content: msg.content });
    }
  }

  // Add current user message
  messages.push({ role: 'user', content: userMessage });

  return messages;
}

/**
 * Extract text content from response output
 */
function extractTextContent(output: OpenAI.Responses.ResponseOutputItem[]): string {
  const textParts: string[] = [];

  for (const item of output) {
    if (item.type === 'message') {
      for (const content of item.content) {
        if (content.type === 'output_text') {
          textParts.push(content.text);
        }
      }
    }
  }

  return textParts.join('\n');
}

/**
 * Execute a completion with the OpenAI Responses API
 */
export async function complete<T = unknown>(
  options: CompletionOptions
): Promise<CompletionResult<T>> {
  const {
    systemPrompt,
    userMessage,
    previousMessages,
    tools,
    customTools,
    mcpTools,
    responseSchema,
    temperature = 0.7,
    maxTokens,
    model = config.openai.model,
    reasoningEffort = config.openai.reasoningEffort, // Use config default for gpt-5.2
  } = options;

  debugLog('LLM Request:', {
    model,
    reasoningEffort,
    builtInTools: tools,
    customToolCount: customTools?.length || 0,
    mcpToolCount: mcpTools?.length || 0,
    hasSchema: !!responseSchema,
    messageLength: userMessage.length,
  });

  // Build request parameters
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const requestParams: any = {
    model,
    input: buildMessages(systemPrompt, userMessage, previousMessages),
    tools: buildTools(tools, customTools, mcpTools),
  };

  // Check if model supports reasoning (gpt-5.2 and reasoning models)
  const isReasoningModel = model.includes('gpt-5') || model.includes('o1') || model.includes('o3');

  if (isReasoningModel) {
    // Reasoning models don't support temperature - use reasoning.effort instead
    requestParams.reasoning = {
      effort: reasoningEffort,
    };
    debugLog(`Using reasoning effort: ${reasoningEffort} (temperature not supported for reasoning models)`);
  } else {
    // Non-reasoning models use temperature
    requestParams.temperature = temperature;
  }

  // Add structured output if schema provided
  if (responseSchema) {
    requestParams.text = {
      format: {
        type: 'json_schema',
        name: 'structured_output',
        schema: responseSchema,
        strict: true,
      },
    };
  }

  // Add max tokens if specified
  if (maxTokens) {
    requestParams.max_output_tokens = maxTokens;
  }

  // Execute request with retries
  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= config.openai.maxRetries; attempt++) {
    try {
      const response = await openai.responses.create(requestParams);

      // Extract text content
      const text = extractTextContent(response.output);

      // Parse structured output if schema was provided
      let structured: T | undefined;
      if (responseSchema && text) {
        try {
          structured = JSON.parse(text) as T;
        } catch (parseError) {
          debugLog('Failed to parse structured output:', parseError);
        }
      }

      // Extract tool calls if any (function calls for custom tools)
      const toolCalls: CompletionResult['toolCalls'] = [];
      const outputTypes: string[] = [];

      for (const item of response.output) {
        outputTypes.push(item.type);

        if (item.type === 'function_call') {
          toolCalls.push({
            name: item.name,
            arguments: JSON.parse(item.arguments),
          });
        }
        // Log built-in tool usage
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const anyItem = item as any;
        if (item.type === 'web_search_call' || anyItem.type?.includes('web_search')) {
          debugLog('Web search tool was used');
        }
        if (item.type === 'code_interpreter_call' || anyItem.type?.includes('code_interpreter')) {
          debugLog('Code interpreter tool was used');
        }
        if (item.type === 'mcp_call' || anyItem.type?.includes('mcp')) {
          debugLog('MCP tool was called:', anyItem.server_label || 'unknown server');
        }
      }

      if (outputTypes.length > 0) {
        debugLog('Response output types:', outputTypes);
      }

      const result: CompletionResult<T> = {
        text,
        structured,
        toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
        usage: response.usage
          ? {
              promptTokens: response.usage.input_tokens,
              completionTokens: response.usage.output_tokens,
              totalTokens: response.usage.input_tokens + response.usage.output_tokens,
            }
          : undefined,
      };

      debugLog('LLM Response:', {
        textLength: text.length,
        hasStructured: !!structured,
        toolCallCount: toolCalls.length,
        outputTypes,
        usage: result.usage,
      });

      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      debugLog(`LLM request failed (attempt ${attempt}/${config.openai.maxRetries}):`, lastError.message);

      if (attempt < config.openai.maxRetries) {
        // Exponential backoff
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error('LLM request failed after all retries');
}

/**
 * Execute a completion with structured output validation
 */
export async function completeWithSchema<T>(
  options: CompletionOptions,
  schema: z.ZodSchema<T>
): Promise<CompletionResult<T>> {
  const result = await complete<T>(options);

  if (result.structured) {
    // Validate against Zod schema
    const validation = schema.safeParse(result.structured);
    if (!validation.success) {
      debugLog('Schema validation failed:', validation.error.errors);
      // Return raw result but clear structured to indicate validation failure
      return { ...result, structured: undefined };
    }
    return { ...result, structured: validation.data };
  }

  return result;
}

/**
 * Simple text completion without structured output
 */
export async function completeText(
  systemPrompt: string,
  userMessage: string,
  options?: Partial<CompletionOptions>
): Promise<string> {
  const result = await complete({
    systemPrompt,
    userMessage,
    ...options,
  });
  return result.text;
}

/**
 * Completion with web search enabled
 */
export async function completeWithWebSearch(
  systemPrompt: string,
  userMessage: string,
  options?: Partial<CompletionOptions>
): Promise<CompletionResult> {
  return complete({
    systemPrompt,
    userMessage,
    tools: ['web_search'],
    ...options,
  });
}

/**
 * Completion with code interpreter enabled
 */
export async function completeWithCodeInterpreter(
  systemPrompt: string,
  userMessage: string,
  options?: Partial<CompletionOptions>
): Promise<CompletionResult> {
  return complete({
    systemPrompt,
    userMessage,
    tools: ['code_interpreter'],
    ...options,
  });
}

/**
 * Create Zuora MCP server tool configuration
 * Checks for ZUORA_MCP_SERVER_URL or ZUORA_MCP_URL environment variables
 * Supports both HTTP and SSE endpoints
 */
export function createZuoraMcpTool(serverUrl?: string): McpTool | null {
  // Check multiple possible env var names
  const url =
    serverUrl ||
    process.env.ZUORA_MCP_SERVER_URL ||
    process.env.ZUORA_MCP_URL ||
    process.env.MCP_ZUORA_URL;

  if (!url) {
    debugLog('Zuora MCP server URL not configured, skipping MCP tool');
    return null;
  }

  debugLog(`Zuora MCP configured with URL: ${url}`);

  return {
    type: 'mcp',
    server_label: 'zuora',
    server_description:
      'Zuora MCP server for querying Zuora knowledge base, product catalog, ' +
      'billing configurations, and revenue recognition rules. Use ask_zuora for ' +
      'questions about Zuora functionality, query_objects to search Zuora data.',
    server_url: url,
    require_approval: 'never',
    allowed_tools: ['ask_zuora', 'query_objects', 'zuora_codegen', 'sdk_upgrade'],
  };
}

/**
 * Get Zuora MCP tools array if configured, otherwise empty array
 * Use this to easily add Zuora MCP to any pipeline step
 */
export function getZuoraMcpTools(): McpTool[] {
  const mcpTool = createZuoraMcpTool();
  return mcpTool ? [mcpTool] : [];
}

/**
 * Build a response schema from a Zod schema
 */
export function zodToJsonSchema(schema: z.ZodSchema): Record<string, unknown> {
  // This is a simplified implementation
  // For production, consider using zod-to-json-schema library
  return schema._def as Record<string, unknown>;
}
