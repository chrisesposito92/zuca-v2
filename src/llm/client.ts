import OpenAI from 'openai';
import { z } from 'zod';

import { config, debugLog } from '../config';
import { getMcpClient } from './mcp-client';
import { resolveModelId } from '../types/llm';

/**
 * OpenAI client instance (lazy)
 */
let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    if (!config.openai.apiKey) {
      throw new Error('OPENAI_API_KEY is required to use OpenAI models');
    }
    openaiClient = new OpenAI({ apiKey: config.openai.apiKey });
  }
  return openaiClient;
}

/**
 * Available built-in tools for the Responses API
 */
export type BuiltInTool = 'web_search' | 'code_interpreter' | 'url_context';

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
  // url_context is a Gemini-native tool; OpenAI does not support it

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

type LlmProvider = 'openai' | 'gemini';

function getProviderForModel(model: string): LlmProvider {
  return model.startsWith('gemini-') ? 'gemini' : 'openai';
}

type GeminiThinkingLevel = 'minimal' | 'low' | 'medium' | 'high';

function mapReasoningToGemini(
  model: string,
  reasoningEffort: ReasoningEffort
): GeminiThinkingLevel {
  // Both Pro and Flash: anything not 'low' becomes 'high' for maximum quality
  // Flash is fast enough to afford high reasoning across all steps
  if (model.startsWith('gemini-3')) {
    return reasoningEffort === 'low' ? 'low' : 'high';
  }
  // Fallback for other Gemini models
  return reasoningEffort as GeminiThinkingLevel;
}

interface GeminiFunctionDeclaration {
  name: string;
  description?: string;
  parameters?: Record<string, unknown>;
}

type GeminiTool =
  | { googleSearch: Record<string, never> }
  | { urlContext: Record<string, never> }
  | { codeExecution: Record<string, never> }
  | { functionDeclarations: GeminiFunctionDeclaration[] };

interface GeminiPart {
  text?: string;
  functionCall?: {
    name: string;
    args?: Record<string, unknown>;
  };
  functionResponse?: {
    name: string;
    response: Record<string, unknown>;
  };
}

interface GeminiContent {
  role: 'user' | 'model';
  parts: GeminiPart[];
}

function buildGeminiContents(
  systemPrompt: string | undefined,
  userMessage: string,
  previousMessages?: Message[]
): { systemInstruction?: { parts: Array<{ text: string }> }; contents: GeminiContent[] } {
  const contents: GeminiContent[] = [];

  if (previousMessages) {
    for (const msg of previousMessages) {
      const role = msg.role === 'assistant' ? 'model' : 'user';
      contents.push({ role, parts: [{ text: msg.content }] });
    }
  }

  contents.push({ role: 'user', parts: [{ text: userMessage }] });

  const systemInstruction = systemPrompt
    ? { parts: [{ text: systemPrompt }] }
    : undefined;

  return { systemInstruction, contents };
}

function getAskZuoraFunction(mcpTools?: McpTool[]): GeminiFunctionDeclaration | null {
  if (!mcpTools || mcpTools.length === 0) return null;

  const hasAskZuora = mcpTools.some((tool) =>
    !tool.allowed_tools || tool.allowed_tools.includes('ask_zuora')
  );

  if (!hasAskZuora) return null;

  return {
    name: 'ask_zuora',
    description: 'Query Zuora knowledge base via MCP for product guidance.',
    parameters: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: 'User question about Zuora' },
        session: { type: 'string', description: 'Session identifier for continuity' },
      },
      required: ['prompt', 'session'],
    },
  };
}

function buildGeminiTools(
  builtInTools?: BuiltInTool[],
  customTools?: CustomTool[],
  mcpTools?: McpTool[],
  options: { includeNative: boolean; includeFunctions: boolean } = {
    includeNative: true,
    includeFunctions: true,
  }
): GeminiTool[] | undefined {
  const tools: GeminiTool[] = [];

  if (options.includeNative) {
    if (builtInTools?.includes('web_search')) {
      tools.push({ googleSearch: {} });
    }
    if (builtInTools?.includes('code_interpreter')) {
      tools.push({ codeExecution: {} });
    }
    // Enable url_context everywhere for Gemini (per requirement)
    tools.push({ urlContext: {} });
  }

  if (options.includeFunctions) {
    const declarations: GeminiFunctionDeclaration[] = [];

    if (customTools) {
      for (const tool of customTools) {
        declarations.push({
          name: tool.function.name,
          description: tool.function.description,
          parameters: tool.function.parameters
            ? sanitizeSchemaForGemini(tool.function.parameters)
            : undefined,
        });
      }
    }

    const askZuora = getAskZuoraFunction(mcpTools);
    if (askZuora) {
      declarations.push(askZuora);
    }

    if (declarations.length > 0) {
      tools.push({ functionDeclarations: declarations });
    }
  }

  return tools.length > 0 ? tools : undefined;
}

/**
 * Recursively sanitize a JSON schema for Gemini API compatibility.
 * - Removes `additionalProperties` (not supported)
 * - Converts `type: ["string", "null"]` to `type: "string"` + `nullable: true`
 * - Removes `null` from enum arrays
 */
function sanitizeSchemaForGemini(schema: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(schema)) {
    // Skip additionalProperties entirely
    if (key === 'additionalProperties') {
      continue;
    }

    // Handle type arrays like ["string", "null"] -> "string" + nullable: true
    if (key === 'type' && Array.isArray(value)) {
      const types = value.filter((t) => t !== 'null');
      if (value.includes('null')) {
        result.nullable = true;
      }
      result.type = types.length === 1 ? types[0] : types;
      continue;
    }

    // Handle enum arrays containing null or empty strings
    if (key === 'enum' && Array.isArray(value)) {
      const hasNull = value.includes(null);
      const hasEmptyString = value.includes('');
      // Filter out null and empty strings (Gemini doesn't support them)
      const filteredEnum = value.filter((v) => v !== null && v !== '');
      if (filteredEnum.length > 0) {
        result.enum = filteredEnum;
      }
      if (hasNull || hasEmptyString) {
        result.nullable = true;
      }
      continue;
    }

    // Recursively process nested objects
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      result[key] = sanitizeSchemaForGemini(value as Record<string, unknown>);
    } else if (Array.isArray(value)) {
      result[key] = value.map((item) =>
        item && typeof item === 'object'
          ? sanitizeSchemaForGemini(item as Record<string, unknown>)
          : item
      );
    } else {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Recursively sanitize a JSON schema for OpenAI strict mode compatibility.
 * GPT-5.2 and newer models have stricter schema validation:
 * - Converts `type: ["string", "null"]` to `type: "string"` (nullable by omitting from required)
 * - Removes `null` from enum arrays
 * - Ensures all objects have `required` array containing ALL property keys
 * - Ensures all objects have `additionalProperties: false`
 *
 * CRITICAL: OpenAI strict mode requires ALL properties to be in `required`.
 * This is stricter than JSON Schema standard where `required` only lists mandatory fields.
 */
function sanitizeSchemaForOpenAI(schema: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(schema)) {
    // Handle type arrays like ["string", "null"] -> "string"
    // OpenAI strict mode doesn't support union types - nullability is handled by required array
    if (key === 'type' && Array.isArray(value)) {
      const types = value.filter((t) => t !== 'null');
      result.type = types.length === 1 ? types[0] : types[0]; // Take first non-null type
      continue;
    }

    // Handle enum arrays containing null
    if (key === 'enum' && Array.isArray(value)) {
      // Filter out null (OpenAI strict mode doesn't support null in enums)
      const filteredEnum = value.filter((v) => v !== null);
      if (filteredEnum.length > 0) {
        result.enum = filteredEnum;
      }
      continue;
    }

    // Recursively process properties object
    if (key === 'properties' && value && typeof value === 'object') {
      const sanitizedProps: Record<string, unknown> = {};
      for (const [propKey, propValue] of Object.entries(value as Record<string, unknown>)) {
        if (propValue && typeof propValue === 'object') {
          sanitizedProps[propKey] = sanitizeSchemaForOpenAI(propValue as Record<string, unknown>);
        } else {
          sanitizedProps[propKey] = propValue;
        }
      }
      result[key] = sanitizedProps;
      continue;
    }

    // Handle items in arrays
    if (key === 'items' && value && typeof value === 'object' && !Array.isArray(value)) {
      result[key] = sanitizeSchemaForOpenAI(value as Record<string, unknown>);
      continue;
    }

    // Recursively process other nested objects
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      result[key] = sanitizeSchemaForOpenAI(value as Record<string, unknown>);
    } else if (Array.isArray(value)) {
      result[key] = value.map((item) =>
        item && typeof item === 'object'
          ? sanitizeSchemaForOpenAI(item as Record<string, unknown>)
          : item
      );
    } else {
      result[key] = value;
    }
  }

  // Ensure objects have required array containing ALL properties and additionalProperties: false
  // OpenAI strict mode requires EVERY property to be in required array
  if (result.type === 'object') {
    const properties = result.properties as Record<string, unknown> | undefined;
    if (properties) {
      // Get all property keys and set them as required
      const allPropertyKeys = Object.keys(properties);
      result.required = allPropertyKeys;
    } else if (!result.required) {
      result.required = [];
    }
    if (result.additionalProperties === undefined) {
      result.additionalProperties = false;
    }
  }

  return result;
}

function extractGeminiText(parts: GeminiPart[] | undefined): string {
  if (!parts) return '';
  return parts
    .map((part) => part.text)
    .filter((text): text is string => Boolean(text))
    .join('\n');
}

function extractGeminiFunctionCalls(
  parts: GeminiPart[] | undefined
): Array<{ name: string; arguments: Record<string, unknown> }> {
  if (!parts) return [];
  return parts
    .filter((part) => part.functionCall)
    .map((part) => ({
      name: part.functionCall?.name || 'unknown',
      arguments: part.functionCall?.args || {},
    }));
}

async function callGeminiTool(
  call: { name: string; arguments: Record<string, unknown> },
  mcpTools?: McpTool[]
): Promise<Record<string, unknown>> {
  if (call.name === 'ask_zuora') {
    const mcp = mcpTools?.find((tool) =>
      !tool.allowed_tools || tool.allowed_tools.includes('ask_zuora')
    );
    if (!mcp) {
      throw new Error('ask_zuora requested but MCP tool is not configured');
    }

    const session = typeof call.arguments.session === 'string' && call.arguments.session
      ? call.arguments.session
      : 'zuca';

    const args = {
      ...call.arguments,
      session,
    };

    const client = getMcpClient(mcp.server_url);
    const result = await client.callTool('ask_zuora', args);

    return typeof result === 'object' && result !== null
      ? (result as Record<string, unknown>)
      : { result };
  }

  debugLog('Unhandled Gemini function call', call.name);
  return { error: `Unhandled tool: ${call.name}` };
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: GeminiPart[];
    };
  }>;
  usageMetadata?: {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
    totalTokenCount?: number;
  };
}

async function runGeminiRequest(
  requestBody: Record<string, unknown>,
  model: string
): Promise<GeminiResponse> {
  if (!config.gemini.apiKey) {
    throw new Error('GEMINI_API_KEY is required to use Gemini models');
  }

  const url = `${config.gemini.baseUrl}/models/${model}:generateContent?key=${config.gemini.apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });

  const data = (await response.json()) as GeminiResponse & {
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(data.error?.message || `Gemini request failed (${response.status})`);
  }

  return data;
}

async function completeOpenAI<T = unknown>(
  options: CompletionOptions & { model: string; reasoningEffort: ReasoningEffort }
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
    model,
    reasoningEffort,
  } = options;

  // Some models don't support web_search:
  // - Fine-tuned models (ft:*)
  // - Nano/mini models (models containing 'nano' or 'mini' in the name)
  const isFineTunedModel = model.startsWith('ft:');
  const isSmallModel = model.includes('nano') || model.includes('mini');
  const supportsWebSearch = !isFineTunedModel && !isSmallModel;

  // Filter out web_search for models that don't support it
  const filteredBuiltInTools = supportsWebSearch
    ? tools
    : tools?.filter(t => t !== 'web_search');

  debugLog('OpenAI Request:', {
    model,
    reasoningEffort,
    isFineTuned: isFineTunedModel,
    isSmallModel,
    supportsWebSearch,
    builtInTools: filteredBuiltInTools,
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
    tools: buildTools(filteredBuiltInTools, customTools, mcpTools),
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
  // Sanitize schema for OpenAI strict mode (GPT-5.2+ has stricter validation)
  if (responseSchema) {
    const sanitizedSchema = sanitizeSchemaForOpenAI(responseSchema);
    requestParams.text = {
      format: {
        type: 'json_schema',
        name: 'structured_output',
        schema: sanitizedSchema,
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
      const response = await getOpenAIClient().responses.create(requestParams);

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

      debugLog('OpenAI Response:', {
        textLength: text.length,
        hasStructured: !!structured,
        toolCallCount: toolCalls.length,
        outputTypes,
        usage: result.usage,
      });

      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      debugLog(`OpenAI request failed (attempt ${attempt}/${config.openai.maxRetries}):`, lastError.message);

      if (attempt < config.openai.maxRetries) {
        // Exponential backoff
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error('OpenAI request failed after all retries');
}

async function completeGemini<T = unknown>(
  options: CompletionOptions & { model: string; reasoningEffort: ReasoningEffort }
): Promise<CompletionResult<T>> {
  const {
    systemPrompt,
    userMessage,
    previousMessages,
    tools,
    customTools,
    // mcpTools intentionally not used - Gemini doesn't support MCP natively
    // and analysis shows the model never calls ask_zuora anyway
    responseSchema,
    temperature = 0.7,
    maxTokens,
    model,
    reasoningEffort,
  } = options;

  debugLog('Gemini Request:', {
    model,
    reasoningEffort,
    builtInTools: tools,
    customToolCount: customTools?.length || 0,
    hasSchema: !!responseSchema,
    messageLength: userMessage.length,
  });

  const { systemInstruction, contents } = buildGeminiContents(
    systemPrompt,
    userMessage,
    previousMessages
  );

  const mappedThinkingLevel = mapReasoningToGemini(model, reasoningEffort);
  debugLog(`Gemini thinking level: ${reasoningEffort} → ${mappedThinkingLevel}`);

  const generationConfig: Record<string, unknown> = {
    temperature,
    thinkingConfig: {
      thinkingLevel: mappedThinkingLevel,
    },
  };

  if (maxTokens) {
    generationConfig.maxOutputTokens = maxTokens;
  }

  if (responseSchema) {
    generationConfig.responseMimeType = 'application/json';
    generationConfig.responseSchema = sanitizeSchemaForGemini(responseSchema);
  }

  const runWithTools = async (toolConfig?: GeminiTool[], overrideContents?: GeminiContent[]): Promise<CompletionResult<T>> => {
    let lastError: Error | null = null;
    for (let attempt = 1; attempt <= config.openai.maxRetries; attempt++) {
      try {
        const toolCalls: CompletionResult['toolCalls'] = [];
        let workingContents = [...(overrideContents || contents)];

        for (let step = 0; step < 5; step++) {
          const requestBody = {
            systemInstruction,
            generationConfig,
            contents: workingContents,
            ...(toolConfig ? { tools: toolConfig } : {}),
          };

          const response = await runGeminiRequest(requestBody, model);
          const candidate = response.candidates?.[0];
          const parts = candidate?.content?.parts || [];

          const functionCalls = extractGeminiFunctionCalls(parts);
          if (functionCalls.length === 0) {
            const text = extractGeminiText(parts);

            let structured: T | undefined;
            if (responseSchema && text) {
              try {
                structured = JSON.parse(text) as T;
              } catch (parseError) {
                debugLog('Failed to parse Gemini structured output:', parseError);
                debugLog('Gemini response text length:', text.length);
                debugLog('Gemini response text preview:', text.substring(0, 500));
                debugLog('Gemini response text end:', text.substring(Math.max(0, text.length - 200)));
              }
            } else if (responseSchema && !text) {
              debugLog('Gemini returned empty text with responseSchema. Parts:', JSON.stringify(parts?.map(p => Object.keys(p))));
            }

            const usage = response.usageMetadata
              ? {
                  promptTokens: response.usageMetadata.promptTokenCount || 0,
                  completionTokens: response.usageMetadata.candidatesTokenCount || 0,
                  totalTokens: response.usageMetadata.totalTokenCount || 0,
                }
              : undefined;

            return {
              text,
              structured,
              toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
              usage,
            };
          }

          // Add tool call parts for context
          workingContents = [
            ...workingContents,
            {
              role: 'model',
              parts: functionCalls.map((call) => ({
                functionCall: {
                  name: call.name,
                  args: call.arguments,
                },
              })),
            },
          ];

          // Execute tool calls and append responses
          const responseParts: GeminiPart[] = [];
          for (const call of functionCalls) {
            const result = await callGeminiTool(call, undefined);
            toolCalls.push({
              name: call.name,
              arguments: call.arguments,
              result,
            });

            responseParts.push({
              functionResponse: {
                name: call.name,
                response: result,
              },
            });
          }

          workingContents = [
            ...workingContents,
            {
              role: 'user',
              parts: responseParts,
            },
          ];
        }

        throw new Error('Gemini tool loop exceeded max steps');
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        debugLog(`Gemini request failed (attempt ${attempt}/${config.openai.maxRetries}):`, lastError.message);

        if (attempt < config.openai.maxRetries) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError || new Error('Gemini request failed after all retries');
  };

  // Build tools for Gemini - no MCP tools, just native + custom function tools
  const initialTools = buildGeminiTools(tools, customTools, undefined, {
    includeNative: true,
    includeFunctions: true,
  });

  // Log the actual Gemini tools being used
  if (initialTools) {
    const nativeTools = initialTools
      .filter((t) => 'googleSearch' in t || 'codeExecution' in t || 'urlContext' in t)
      .map((t) => Object.keys(t)[0]);
    debugLog('Gemini native tools enabled:', nativeTools);
  }

  try {
    return await runWithTools(initialTools);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const isToolConflict =
      /multi-tool|function calling.*tools|tools.*function calling|tool use.*function calling|function calling.*unsupported|live api|response schema/i.test(
        message
      );

    if (isToolConflict) {
      debugLog('Gemini tool conflict detected, retrying with function tools only', message);
      const fallbackTools = buildGeminiTools(tools, customTools, undefined, {
        includeNative: false,
        includeFunctions: true,
      });
      return runWithTools(fallbackTools);
    }

    throw error;
  }
}

/**
 * Execute a completion with the configured LLM provider
 */
export async function complete<T = unknown>(
  options: CompletionOptions
): Promise<CompletionResult<T>> {
  const requestedModel = options.model || config.openai.model;
  // Resolve model names to API model IDs (currently passthrough)
  const resolvedModel = resolveModelId(requestedModel);
  const reasoningEffort = options.reasoningEffort || config.openai.reasoningEffort;
  const provider = getProviderForModel(resolvedModel);

  debugLog('LLM Request:', {
    provider,
    model: resolvedModel,
    ...(requestedModel !== resolvedModel && { alias: requestedModel }),
  });

  let result: CompletionResult<T>;
  if (provider === 'gemini') {
    result = await completeGemini<T>({ ...options, model: resolvedModel, reasoningEffort });
  } else {
    result = await completeOpenAI<T>({ ...options, model: resolvedModel, reasoningEffort });
  }

  // Accumulate token usage if accumulator is active
  if (result.usage) {
    accumulateTokens(result.usage);
  }

  return result;
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

// =============================================================================
// Token Accumulator
// =============================================================================

/**
 * Token usage accumulator for tracking usage across multiple LLM calls.
 * Used by the benchmark system to measure token costs per test/model.
 */
export interface TokenUsageStats {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  callCount: number;
}

let tokenAccumulator: TokenUsageStats | null = null;

/**
 * Start accumulating token usage.
 * Call this before running a pipeline/test to track total tokens.
 */
export function startTokenAccumulator(): void {
  tokenAccumulator = {
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
    callCount: 0,
  };
  debugLog('Token accumulator started');
}

/**
 * Stop accumulating and return the total usage.
 */
export function stopTokenAccumulator(): TokenUsageStats | null {
  const result = tokenAccumulator;
  tokenAccumulator = null;
  if (result) {
    debugLog('Token accumulator stopped:', result);
  }
  return result;
}

/**
 * Get current accumulated token usage without stopping.
 */
export function getTokenAccumulator(): TokenUsageStats | null {
  return tokenAccumulator ? { ...tokenAccumulator } : null;
}

/**
 * Check if token accumulator is active.
 */
export function isTokenAccumulatorActive(): boolean {
  return tokenAccumulator !== null;
}

/**
 * Add token usage to the accumulator (called internally by complete()).
 */
function accumulateTokens(usage: { promptTokens: number; completionTokens: number; totalTokens: number }): void {
  if (tokenAccumulator) {
    tokenAccumulator.promptTokens += usage.promptTokens;
    tokenAccumulator.completionTokens += usage.completionTokens;
    tokenAccumulator.totalTokens += usage.totalTokens;
    tokenAccumulator.callCount += 1;
  }
}
