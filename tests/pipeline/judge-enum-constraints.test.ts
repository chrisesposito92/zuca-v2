import { describe, expect, it } from 'vitest';

import { collectEnumConstraints, formatEnumConstraints } from '../../src/pipeline/judge/wrapper';

describe('judge enum constraint helpers', () => {
  it('collects enum paths across nested objects and arrays', () => {
    const schema = {
      type: 'object',
      properties: {
        status: { type: 'string', enum: ['Active', 'Draft'] },
        nested: {
          type: 'object',
          properties: {
            mode: { type: 'string', enum: ['A', 'B'] },
          },
          required: ['mode'],
          additionalProperties: false,
        },
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              kind: { type: 'string', enum: ['X', 'Y'] },
            },
            required: ['kind'],
            additionalProperties: false,
          },
        },
      },
      required: ['status', 'nested', 'items'],
      additionalProperties: false,
    };

    const constraints = collectEnumConstraints(schema).map(({ path, values }) => ({ path, values }));

    expect(constraints).toEqual(
      expect.arrayContaining([
        { path: 'status', values: ['Active', 'Draft'] },
        { path: 'nested.mode', values: ['A', 'B'] },
        { path: 'items[].kind', values: ['X', 'Y'] },
      ])
    );
  });

  it('formats enum constraints as a markdown section', () => {
    const schema = {
      type: 'object',
      properties: {
        status: { type: 'string', enum: ['Active', 'Draft'] },
      },
      required: ['status'],
      additionalProperties: false,
    };

    const formatted = formatEnumConstraints(schema);

    expect(formatted).toContain('## Enum Constraints');
    expect(formatted).toContain('- status: ["Active","Draft"]');
  });
});
