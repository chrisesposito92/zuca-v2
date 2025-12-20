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

  /** JSON schema for structured output */
  responseSchema?: Record<string, unknown>;

  /** Temperature (0-2) */
  temperature?: number;

  /** Maximum tokens in response */
  maxTokens?: number;

  /** Model override */
  model?: string;
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
  customTools?: CustomTool[]
): OpenAI.Responses.Tool[] | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tools: any[] = [];

  // Add built-in tools
  if (builtInTools?.includes('web_search')) {
    tools.push({ type: 'web_search_preview' });
  }
  if (builtInTools?.includes('code_interpreter')) {
    tools.push({ type: 'code_interpreter', container: { type: 'auto' } });
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
    responseSchema,
    temperature = 0.7,
    maxTokens,
    model = config.openai.model,
  } = options;

  debugLog('LLM Request:', {
    model,
    tools,
    hasSchema: !!responseSchema,
    messageLength: userMessage.length,
  });

  // Build request parameters
  const requestParams: OpenAI.Responses.ResponseCreateParamsNonStreaming = {
    model,
    input: buildMessages(systemPrompt, userMessage, previousMessages),
    tools: buildTools(tools, customTools),
    temperature,
  };

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

      // Extract tool calls if any
      const toolCalls: CompletionResult['toolCalls'] = [];
      for (const item of response.output) {
        if (item.type === 'function_call') {
          toolCalls.push({
            name: item.name,
            arguments: JSON.parse(item.arguments),
          });
        }
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
 * Create a custom tool definition for Zuora MCP ask_zuora
 */
export function createAskZuoraTool(): CustomTool {
  return {
    type: 'function',
    function: {
      name: 'ask_zuora',
      description:
        'Query Zuora knowledge base for product, billing, and revenue recognition information. ' +
        'Use this to get accurate Zuora-specific guidance on rate plans, charges, POB templates, ' +
        'and revenue recognition rules.',
      parameters: {
        type: 'object',
        properties: {
          question: {
            type: 'string',
            description: 'The question to ask about Zuora functionality',
          },
          context: {
            type: 'string',
            description: 'Optional context about the use case being analyzed',
          },
        },
        required: ['question'],
      },
    },
  };
}

/**
 * Build a response schema from a Zod schema
 */
export function zodToJsonSchema(schema: z.ZodSchema): Record<string, unknown> {
  // This is a simplified implementation
  // For production, consider using zod-to-json-schema library
  return schema._def as Record<string, unknown>;
}
