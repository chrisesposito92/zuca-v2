import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/self-learn/**/*.ts'],
      exclude: ['**/*.test.ts', '**/types.ts'],
    },
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, 'apps/web')}/` },
      { find: /^@zuca\/types$/, replacement: path.resolve(__dirname, 'src/types/index.ts') },
      { find: /^@zuca\/types\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/types')}/$1` },
      { find: /^@zuca\/pipeline$/, replacement: path.resolve(__dirname, 'src/pipeline/index.ts') },
      { find: /^@zuca\/pipeline\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/pipeline')}/$1` },
      { find: /^@zuca\/self-learn$/, replacement: path.resolve(__dirname, 'src/self-learn/index.ts') },
      { find: /^@zuca\/self-learn\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/self-learn')}/$1` },
      { find: /^@zuca\/pipeline-agents$/, replacement: path.resolve(__dirname, 'src/pipeline-agents/index.ts') },
      { find: /^@zuca\/pipeline-agents\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/pipeline-agents')}/$1` },
    ],
  },
});
