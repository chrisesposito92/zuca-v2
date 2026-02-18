import { config as dotenvConfig } from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env file
dotenvConfig();

/**
 * Environment configuration schema with validation
 */
const ConfigSchema = z.object({
  // OpenAI Configuration
  openai: z.object({
    apiKey: z.string().optional(),
    model: z.string().default('gpt-5.2'),
    maxRetries: z.number().int().positive().default(3),
    reasoningEffort: z.enum(['low', 'medium', 'high']).default('medium'),
  }),

  // Gemini Configuration
  gemini: z.object({
    apiKey: z.string().optional(),
    baseUrl: z.string().url().default('https://generativelanguage.googleapis.com/v1beta'),
  }),

  // Server Configuration
  server: z.object({
    port: z.number().int().positive().default(3000),
    host: z.string().default('localhost'),
  }),

  // Zuora MCP Configuration
  zuora: z.object({
    baseUrl: z.string().url().default('https://rest.test.zuora.com'),
    clientId: z.string().optional(),
    clientSecret: z.string().optional(),
  }),

  // Application Settings
  app: z.object({
    debug: z.boolean().default(false),
    nodeEnv: z.string().default('development'),
    goldenUseCasesPath: z.string().default('./docs/Golden Use Cases'),
  }),
});

export type Config = z.infer<typeof ConfigSchema>;

/**
 * Parse and validate configuration from environment variables
 */
export function loadConfig(): Config {
  const rawConfig = {
    openai: {
      apiKey: process.env.OPENAI_API_KEY || undefined,
      model: process.env.LLM_MODEL || process.env.OPENAI_MODEL || 'gpt-5.2',
      maxRetries: parseInt(process.env.MAX_RETRIES || '3', 10),
      reasoningEffort: (process.env.OPENAI_REASONING_EFFORT || 'medium') as 'low' | 'medium' | 'high',
    },
    gemini: {
      apiKey: process.env.GEMINI_API_KEY || undefined,
      baseUrl: process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta',
    },
    server: {
      port: parseInt(process.env.PORT || '3000', 10),
      host: process.env.HOST || 'localhost',
    },
    zuora: {
      baseUrl: process.env.ZUORA_BASE_URL || 'https://rest.test.zuora.com',
      clientId: process.env.ZUORA_CLIENT_ID,
      clientSecret: process.env.ZUORA_CLIENT_SECRET,
    },
    app: {
      debug: process.env.DEBUG === 'true',
      nodeEnv: process.env.NODE_ENV || 'development',
      goldenUseCasesPath: process.env.GOLDEN_USE_CASES_PATH || './docs/Golden Use Cases',
    },
  };

  const result = ConfigSchema.safeParse(rawConfig);

  if (!result.success) {
    const errors = result.error.issues
      .map((e) => `  - ${e.path.join('.')}: ${e.message}`)
      .join('\n');
    throw new Error(`Configuration validation failed:\n${errors}`);
  }

  return result.data;
}

/**
 * Global configuration instance
 * Loaded once at startup
 */
export const config = loadConfig();

/**
 * Check if Zuora MCP is configured
 */
export function isZuoraMcpConfigured(): boolean {
  return Boolean(config.zuora.clientId && config.zuora.clientSecret);
}

/**
 * Get OpenAI model configuration for Responses API
 */
export function getModelConfig() {
  return {
    model: config.openai.model,
    // Add any model-specific settings here
  };
}

/**
 * Debug logging helper
 */
export function debugLog(message: string, data?: unknown): void {
  if (config.app.debug) {
    console.log(`[DEBUG] ${message}`, data !== undefined ? data : '');
  }
}
