import { describe, expect, it } from 'vitest';

import { generateKeyValueTable, generateTable } from '../../src/utils/markdown-tables';

describe('generateTable', () => {
  it('formats rows with row numbers, escaped values, and rounded numbers', () => {
    const rows = [
      {
        name: 'Alpha|Beta',
        active: true,
        amount: 12.345,
      },
    ];

    const table = generateTable(
      rows,
      [
        { key: 'name', header: 'Name' },
        { key: 'active', header: 'Active' },
        { key: 'amount', header: 'Amount', align: 'right' },
      ],
      { showRowNumbers: true }
    );

    expect(table).toContain('| # | Name | Active | Amount |');
    expect(table).toContain('| 1 | Alpha\\|Beta | Yes | 12.35 |');
    expect(table).toContain('| --- | --- | --- | ---: |');
  });

  it('adds a truncation notice when maxRows is exceeded', () => {
    const rows = [
      { name: 'Row 1' },
      { name: 'Row 2' },
    ];

    const table = generateTable(rows, ['name'], { maxRows: 1 });
    expect(table).toContain('_...1 more rows_');
  });
});

describe('generateKeyValueTable', () => {
  it('filters empty values and renders a two-column table', () => {
    const table = generateKeyValueTable({
      empty: '',
      filled: 'Value',
      skipped: null,
    });

    expect(table).toContain('| filled | Value |');
    expect(table).not.toContain('empty');
    expect(table).not.toContain('skipped');
  });
});
