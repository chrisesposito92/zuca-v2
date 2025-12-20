/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable importing from the root src/ directory
  transpilePackages: ['zod'],
  experimental: {
    // Allow importing TypeScript files from outside the app directory
    externalDir: true,
  },
  // Turbopack configuration (Next.js 16+)
  turbopack: {
    // Empty config silences the warning
  },
};

export default nextConfig;
