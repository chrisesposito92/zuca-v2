import TurndownService from 'turndown';
import { ScrapedPage } from './types.js';

export class MarkdownConverter {
  private turndown: TurndownService;

  constructor() {
    this.turndown = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      bulletListMarker: '-',
      emDelimiter: '*',
      strongDelimiter: '**',
    });

    // Custom rules for better markdown output
    this.setupCustomRules();
  }

  private setupCustomRules(): void {
    // Handle code blocks better
    this.turndown.addRule('codeBlocks', {
      filter: (node) => {
        return (
          node.nodeName === 'PRE' &&
          node.firstChild !== null &&
          node.firstChild.nodeName === 'CODE'
        );
      },
      replacement: (content, node) => {
        const codeNode = (node as HTMLElement).querySelector('code');
        const language = codeNode?.className?.match(/language-(\w+)/)?.[1] || '';
        const code = codeNode?.textContent || content;
        return `\n\`\`\`${language}\n${code.trim()}\n\`\`\`\n`;
      },
    });

    // Handle inline code
    this.turndown.addRule('inlineCode', {
      filter: (node) => {
        return (
          node.nodeName === 'CODE' &&
          node.parentNode?.nodeName !== 'PRE'
        );
      },
      replacement: (content) => {
        if (!content.trim()) return '';
        return `\`${content}\``;
      },
    });

    // Handle tables better
    this.turndown.addRule('tables', {
      filter: 'table',
      replacement: (content, node) => {
        const table = node as HTMLTableElement;
        const rows: string[][] = [];

        // Extract header row
        const headerCells = table.querySelectorAll('thead th, thead td, tr:first-child th');
        if (headerCells.length > 0) {
          const headerRow: string[] = [];
          headerCells.forEach((cell) => {
            headerRow.push(cell.textContent?.trim().replace(/\|/g, '\\|') || '');
          });
          rows.push(headerRow);
        }

        // Extract body rows
        const bodyRows = table.querySelectorAll('tbody tr, tr');
        bodyRows.forEach((row, index) => {
          // Skip first row if it was a header
          if (index === 0 && headerCells.length > 0) return;

          const cells = row.querySelectorAll('td, th');
          const rowData: string[] = [];
          cells.forEach((cell) => {
            rowData.push(cell.textContent?.trim().replace(/\|/g, '\\|').replace(/\n/g, ' ') || '');
          });
          if (rowData.length > 0) {
            rows.push(rowData);
          }
        });

        if (rows.length === 0) return '';

        // Build markdown table
        const colCount = Math.max(...rows.map((r) => r.length));
        let markdown = '\n';

        rows.forEach((row, index) => {
          // Pad row to have consistent columns
          while (row.length < colCount) row.push('');

          markdown += '| ' + row.join(' | ') + ' |\n';

          // Add separator after header
          if (index === 0) {
            markdown += '| ' + row.map(() => '---').join(' | ') + ' |\n';
          }
        });

        return markdown + '\n';
      },
    });

    // Remove empty links
    this.turndown.addRule('removeEmptyLinks', {
      filter: (node) => {
        return node.nodeName === 'A' && !node.textContent?.trim();
      },
      replacement: () => '',
    });

    // Handle divs that act as paragraphs
    this.turndown.addRule('divParagraphs', {
      filter: (node) => {
        return (
          node.nodeName === 'DIV' &&
          node.childNodes.length > 0 &&
          Array.from(node.childNodes).every(
            (child) => child.nodeType === 3 || ['SPAN', 'A', 'STRONG', 'EM', 'CODE'].includes(child.nodeName)
          )
        );
      },
      replacement: (content) => {
        const trimmed = content.trim();
        return trimmed ? `\n${trimmed}\n` : '';
      },
    });
  }

  convert(page: ScrapedPage): string {
    // Generate YAML frontmatter
    const frontmatter = this.generateFrontmatter(page);

    // Convert HTML content to markdown
    let markdown = this.turndown.turndown(page.content);

    // Clean up the markdown
    markdown = this.cleanupMarkdown(markdown);

    // Combine frontmatter and content
    return frontmatter + markdown;
  }

  private generateFrontmatter(page: ScrapedPage): string {
    const lines = [
      '---',
      `title: "${this.escapeYaml(page.title)}"`,
      `url: "${page.url}"`,
      `product: "${page.product}"`,
      `scraped_at: "${page.scrapedAt}"`,
    ];

    if (page.breadcrumbs.length > 0) {
      lines.push(`breadcrumbs:`);
      page.breadcrumbs.forEach((crumb) => {
        lines.push(`  - "${this.escapeYaml(crumb)}"`);
      });
    }

    lines.push('---', '', '');

    return lines.join('\n');
  }

  private escapeYaml(str: string): string {
    return str.replace(/"/g, '\\"').replace(/\n/g, ' ');
  }

  private cleanupMarkdown(markdown: string): string {
    return markdown
      // Remove excessive blank lines
      .replace(/\n{4,}/g, '\n\n\n')
      // Remove leading/trailing whitespace from lines
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n')
      // Remove blank lines at start
      .replace(/^\n+/, '')
      // Ensure single newline at end
      .trimEnd() + '\n';
  }
}
