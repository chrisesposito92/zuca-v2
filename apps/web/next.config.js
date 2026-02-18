/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable importing from the root src/ directory
  transpilePackages: ['zod'],
  // Keep @openai/agents out of the bundle — resolved at runtime via Node.js require
  serverExternalPackages: ['@openai/agents', '@openai/agents-core'],
  experimental: {
    // Allow importing TypeScript files from outside the app directory
    externalDir: true,
  },
  // Turbopack configuration (Next.js 16+)
  turbopack: {
    // Empty config silences the warning
  },
  // Include prompt files and golden use case data in serverless bundles
  outputFileTracingIncludes: {
    '/api/**/*': [
      '../../src/llm/prompts/**/*.md',
      '../../docs/Golden Use Cases/**/*.json',
    ],
  },
};

export default nextConfig;
