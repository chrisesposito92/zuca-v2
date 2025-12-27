import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, 'apps/web')}/` },
      { find: /^@zuca\/types$/, replacement: path.resolve(__dirname, 'src/types/index.ts') },
      { find: /^@zuca\/types\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/types')}/$1` },
      { find: /^@zuca\/pipeline$/, replacement: path.resolve(__dirname, 'src/pipeline/index.ts') },
      { find: /^@zuca\/pipeline\/(.*)$/, replacement: `${path.resolve(__dirname, 'src/pipeline')}/$1` },
    ],
  },
});
