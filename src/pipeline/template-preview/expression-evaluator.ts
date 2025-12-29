/**
 * Expression Evaluator for Zuora HTML Template Preview
 *
 * Handles {{#Wp_Eval}}...{{/Wp_Eval}} expression blocks.
 * Supports basic arithmetic, field references, and common operations.
 *
 * Phase 1 (MVP): Basic arithmetic operations
 * Phase 2: Full JEXL-like expression support
 */

import { getNestedValue, parseNumericValue } from './function-registry';

// ============================================================================
// Types
// ============================================================================

export interface ExpressionContext {
  data: Record<string, unknown>;
  loopStack?: Array<{ items: unknown[]; index: number; item: unknown }>;
  currency?: string;
}

type TokenType =
  | 'number'
  | 'string'
  | 'identifier'
  | 'operator'
  | 'paren'
  | 'dot'
  | 'comma';

interface Token {
  type: TokenType;
  value: string;
  position: number;
}

// ============================================================================
// Tokenizer
// ============================================================================

/**
 * Tokenize an expression string
 */
function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let pos = 0;

  while (pos < expression.length) {
    const char = expression[pos];

    // Skip whitespace
    if (/\s/.test(char)) {
      pos++;
      continue;
    }

    // Numbers (including decimals)
    if (/[0-9]/.test(char) || (char === '-' && /[0-9]/.test(expression[pos + 1] || ''))) {
      let numStr = char;
      pos++;
      while (pos < expression.length && /[0-9.]/.test(expression[pos])) {
        numStr += expression[pos];
        pos++;
      }
      tokens.push({ type: 'number', value: numStr, position: pos - numStr.length });
      continue;
    }

    // Strings (single or double quoted)
    if (char === '"' || char === "'") {
      const quote = char;
      let strVal = '';
      pos++; // skip opening quote
      while (pos < expression.length && expression[pos] !== quote) {
        if (expression[pos] === '\\' && pos + 1 < expression.length) {
          // Handle escape sequences
          pos++;
          strVal += expression[pos];
        } else {
          strVal += expression[pos];
        }
        pos++;
      }
      pos++; // skip closing quote
      tokens.push({ type: 'string', value: strVal, position: pos - strVal.length - 2 });
      continue;
    }

    // Identifiers (field names, variable names)
    if (/[a-zA-Z_]/.test(char)) {
      let ident = char;
      pos++;
      while (pos < expression.length && /[a-zA-Z0-9_]/.test(expression[pos])) {
        ident += expression[pos];
        pos++;
      }
      tokens.push({ type: 'identifier', value: ident, position: pos - ident.length });
      continue;
    }

    // Operators
    if ('+-*/%'.includes(char)) {
      tokens.push({ type: 'operator', value: char, position: pos });
      pos++;
      continue;
    }

    // Comparison operators
    if (char === '=' && expression[pos + 1] === '=') {
      tokens.push({ type: 'operator', value: '==', position: pos });
      pos += 2;
      continue;
    }

    if (char === '!' && expression[pos + 1] === '=') {
      tokens.push({ type: 'operator', value: '!=', position: pos });
      pos += 2;
      continue;
    }

    if (char === '<') {
      if (expression[pos + 1] === '=') {
        tokens.push({ type: 'operator', value: '<=', position: pos });
        pos += 2;
      } else {
        tokens.push({ type: 'operator', value: '<', position: pos });
        pos++;
      }
      continue;
    }

    if (char === '>') {
      if (expression[pos + 1] === '=') {
        tokens.push({ type: 'operator', value: '>=', position: pos });
        pos += 2;
      } else {
        tokens.push({ type: 'operator', value: '>', position: pos });
        pos++;
      }
      continue;
    }

    // Logical operators
    if (char === '&' && expression[pos + 1] === '&') {
      tokens.push({ type: 'operator', value: '&&', position: pos });
      pos += 2;
      continue;
    }

    if (char === '|' && expression[pos + 1] === '|') {
      tokens.push({ type: 'operator', value: '||', position: pos });
      pos += 2;
      continue;
    }

    // Ternary operator
    if (char === '?') {
      tokens.push({ type: 'operator', value: '?', position: pos });
      pos++;
      continue;
    }

    if (char === ':') {
      tokens.push({ type: 'operator', value: ':', position: pos });
      pos++;
      continue;
    }

    // Parentheses
    if (char === '(' || char === ')') {
      tokens.push({ type: 'paren', value: char, position: pos });
      pos++;
      continue;
    }

    // Dot for property access
    if (char === '.') {
      tokens.push({ type: 'dot', value: char, position: pos });
      pos++;
      continue;
    }

    // Comma
    if (char === ',') {
      tokens.push({ type: 'comma', value: char, position: pos });
      pos++;
      continue;
    }

    // Unknown character - skip
    pos++;
  }

  return tokens;
}

// ============================================================================
// Parser & Evaluator
// ============================================================================

class ExpressionParser {
  private tokens: Token[];
  private pos: number;
  private context: ExpressionContext;

  constructor(tokens: Token[], context: ExpressionContext) {
    this.tokens = tokens;
    this.pos = 0;
    this.context = context;
  }

  private current(): Token | undefined {
    return this.tokens[this.pos];
  }

  private consume(): Token | undefined {
    return this.tokens[this.pos++];
  }

  /**
   * Main parse entry point
   */
  parse(): unknown {
    return this.parseTernary();
  }

  /**
   * Ternary: condition ? trueValue : falseValue
   */
  private parseTernary(): unknown {
    const condition = this.parseOr();

    if (this.current()?.value === '?') {
      this.consume(); // consume '?'
      const trueValue = this.parseTernary();

      if (this.current()?.value !== ':') {
        throw new Error('Expected ":" in ternary expression');
      }
      this.consume(); // consume ':'

      const falseValue = this.parseTernary();

      return condition ? trueValue : falseValue;
    }

    return condition;
  }

  /**
   * Logical OR: a || b
   */
  private parseOr(): unknown {
    let left = this.parseAnd();

    while (this.current()?.value === '||') {
      this.consume();
      const right = this.parseAnd();
      left = Boolean(left) || Boolean(right);
    }

    return left;
  }

  /**
   * Logical AND: a && b
   */
  private parseAnd(): unknown {
    let left = this.parseComparison();

    while (this.current()?.value === '&&') {
      this.consume();
      const right = this.parseComparison();
      left = Boolean(left) && Boolean(right);
    }

    return left;
  }

  /**
   * Comparison: a == b, a != b, a < b, etc.
   */
  private parseComparison(): unknown {
    let left = this.parseAddSub();

    const op = this.current()?.value;
    if (op && ['==', '!=', '<', '>', '<=', '>='].includes(op)) {
      this.consume();
      const right = this.parseAddSub();

      const leftNum = parseNumericValue(left);
      const rightNum = parseNumericValue(right);

      switch (op) {
        case '==':
          return left === right || (leftNum !== null && rightNum !== null && leftNum === rightNum);
        case '!=':
          return left !== right && !(leftNum !== null && rightNum !== null && leftNum === rightNum);
        case '<':
          return leftNum !== null && rightNum !== null && leftNum < rightNum;
        case '>':
          return leftNum !== null && rightNum !== null && leftNum > rightNum;
        case '<=':
          return leftNum !== null && rightNum !== null && leftNum <= rightNum;
        case '>=':
          return leftNum !== null && rightNum !== null && leftNum >= rightNum;
      }
    }

    return left;
  }

  /**
   * Addition/Subtraction: a + b, a - b
   */
  private parseAddSub(): unknown {
    let left = this.parseMulDiv();

    while (this.current()?.value === '+' || this.current()?.value === '-') {
      const op = this.consume()!.value;
      const right = this.parseMulDiv();

      const leftNum = parseNumericValue(left);
      const rightNum = parseNumericValue(right);

      if (leftNum === null || rightNum === null) {
        // String concatenation for +
        if (op === '+') {
          return String(left ?? '') + String(right ?? '');
        }
        throw new Error(`Cannot perform ${op} on non-numeric values`);
      }

      left = op === '+' ? leftNum + rightNum : leftNum - rightNum;
    }

    return left;
  }

  /**
   * Multiplication/Division/Modulo: a * b, a / b, a % b
   */
  private parseMulDiv(): unknown {
    let left = this.parseUnary();

    while (
      this.current()?.value === '*' ||
      this.current()?.value === '/' ||
      this.current()?.value === '%'
    ) {
      const op = this.consume()!.value;
      const right = this.parseUnary();

      const leftNum = parseNumericValue(left);
      const rightNum = parseNumericValue(right);

      if (leftNum === null || rightNum === null) {
        throw new Error(`Cannot perform ${op} on non-numeric values`);
      }

      if (op === '*') {
        left = leftNum * rightNum;
      } else if (op === '/') {
        if (rightNum === 0) {
          throw new Error('Division by zero');
        }
        left = leftNum / rightNum;
      } else {
        if (rightNum === 0) {
          throw new Error('Modulo by zero');
        }
        left = leftNum % rightNum;
      }
    }

    return left;
  }

  /**
   * Unary: -a, !a
   */
  private parseUnary(): unknown {
    const token = this.current();

    if (token?.value === '-') {
      this.consume();
      const value = this.parseUnary();
      const num = parseNumericValue(value);
      if (num === null) {
        throw new Error('Cannot negate non-numeric value');
      }
      return -num;
    }

    if (token?.value === '!') {
      this.consume();
      const value = this.parseUnary();
      return !value;
    }

    return this.parsePrimary();
  }

  /**
   * Primary: literals, identifiers, parentheses
   */
  private parsePrimary(): unknown {
    const token = this.current();

    if (!token) {
      throw new Error('Unexpected end of expression');
    }

    // Parenthesized expression
    if (token.type === 'paren' && token.value === '(') {
      this.consume(); // consume '('
      const value = this.parseTernary();
      if (this.current()?.value !== ')') {
        throw new Error('Expected closing parenthesis');
      }
      this.consume(); // consume ')'
      return value;
    }

    // Number literal
    if (token.type === 'number') {
      this.consume();
      return parseFloat(token.value);
    }

    // String literal
    if (token.type === 'string') {
      this.consume();
      return token.value;
    }

    // Identifier (field reference)
    if (token.type === 'identifier') {
      return this.parseIdentifier();
    }

    throw new Error(`Unexpected token: ${token.value}`);
  }

  /**
   * Parse identifier with possible property access
   */
  private parseIdentifier(): unknown {
    let path = this.consume()!.value;

    // Handle dot notation: obj.prop.subprop
    while (this.current()?.type === 'dot') {
      this.consume(); // consume '.'
      const prop = this.current();
      if (prop?.type !== 'identifier') {
        throw new Error('Expected property name after "."');
      }
      path += '.' + this.consume()!.value;
    }

    // Resolve the value from context
    return this.resolveIdentifier(path);
  }

  /**
   * Resolve an identifier from the context
   */
  private resolveIdentifier(path: string): unknown {
    // Check for special loop variables
    if (this.context.loopStack && this.context.loopStack.length > 0) {
      const currentLoop = this.context.loopStack[this.context.loopStack.length - 1];

      if (path === '_index') return currentLoop.index;
      if (path === '_count') return currentLoop.index + 1;
      if (path === '_first') return currentLoop.index === 0;
      if (path === '_last') return currentLoop.index === currentLoop.items.length - 1;
      if (path === '_length') return currentLoop.items.length;

      // Check loop item first
      if (currentLoop.item && typeof currentLoop.item === 'object') {
        const itemValue = getNestedValue(currentLoop.item, path);
        if (itemValue !== undefined) {
          return itemValue;
        }
      }
    }

    // Look up in main data context
    return getNestedValue(this.context.data, path);
  }
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Evaluate a Wp_Eval expression
 */
export function evaluateExpression(
  expression: string,
  context: ExpressionContext
): unknown {
  // Handle empty expressions
  if (!expression.trim()) {
    return '';
  }

  try {
    const tokens = tokenize(expression);

    if (tokens.length === 0) {
      return '';
    }

    const parser = new ExpressionParser(tokens, context);
    return parser.parse();
  } catch (error) {
    throw new Error(
      `Expression error: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

/**
 * Safe evaluation with fallback
 */
export function safeEvaluate(
  expression: string,
  context: ExpressionContext,
  fallback: unknown = null
): unknown {
  try {
    return evaluateExpression(expression, context);
  } catch {
    return fallback;
  }
}
