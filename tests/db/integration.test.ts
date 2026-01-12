import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createPool, sql } from '@vercel/postgres';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

type DbModule = typeof import('@/lib/db');

const projectRoot = path.resolve(__dirname, '../..');
const schemaPath = path.join(projectRoot, 'apps/web/lib/schema.sql');

if (!process.env.POSTGRES_URL_TEST && !process.env.POSTGRES_URL) {
  const envTestPath = path.join(projectRoot, '.env.test');
  if (fs.existsSync(envTestPath)) {
    dotenv.config({ path: envTestPath });
  } else {
    dotenv.config({ path: path.join(projectRoot, '.env') });
  }
}

const baseUrl = process.env.POSTGRES_URL_TEST || process.env.POSTGRES_URL || '';
const isLocalhost = baseUrl.includes('localhost');
const isPooled = baseUrl.includes('-pooler.');
const runDbTests = process.env.RUN_DB_TESTS === 'true';
const hasDb = runDbTests && Boolean(baseUrl) && (isLocalhost || isPooled);

let db: DbModule | null = null;
let adminPool: ReturnType<typeof createPool> | null = null;
let testPool: ReturnType<typeof createPool> | null = null;
let schemaName = '';
const useSchemaIsolation = !isPooled;

function addSearchPath(connectionString: string, schema: string) {
  const normalized = connectionString.replace(/^postgresql:\/\//, 'https://');
  const url = new URL(normalized);
  const existing = url.searchParams.get('options');
  const nextOptions = existing ? `${existing} -csearch_path=${schema}` : `-csearch_path=${schema}`;
  url.searchParams.set('options', nextOptions);
  return url.toString().replace(/^https:\/\//, 'postgresql://');
}

function splitStatements(source: string) {
  const statements: string[] = [];
  let current = '';
  let inDollar = false;
  let inSingle = false;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];

    if (!inSingle && char === '$' && next === '$') {
      inDollar = !inDollar;
      current += '$$';
      i += 1;
      continue;
    }

    if (!inDollar && char === "'" && source[i - 1] !== '\\') {
      inSingle = !inSingle;
    }

    if (!inDollar && !inSingle && char === ';') {
      const trimmed = current.trim();
      if (trimmed) statements.push(trimmed);
      current = '';
      continue;
    }

    current += char;
  }

  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

async function applySchema(pool: ReturnType<typeof createPool>) {
  const schemaSql = fs.readFileSync(schemaPath, 'utf8');
  const statements = splitStatements(schemaSql);

  let vectorAvailable = true;

  for (const statement of statements) {
    const normalized = statement.replace(/\s+/g, ' ').trim();
    const usesVector = normalized.includes('vector') || normalized.includes('doc_chunks');
    const isCreateTrigger = normalized.startsWith('CREATE TRIGGER');

    if (!vectorAvailable && usesVector) {
      continue;
    }

    try {
      await pool.query(normalized);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const lowerMessage = message.toLowerCase();
      if (normalized.includes('CREATE EXTENSION IF NOT EXISTS "vector"')) {
        vectorAvailable = false;
        continue;
      }
      if (usesVector && lowerMessage.includes('vector')) {
        vectorAvailable = false;
        continue;
      }
      if (isCreateTrigger && lowerMessage.includes('already exists')) {
        continue;
      }
      throw error;
    }
  }
}

const describeDb = hasDb ? describe : describe.skip;

describeDb('DB integration (Postgres)', () => {
  beforeAll(async () => {
    if (!hasDb) return;

    if (useSchemaIsolation) {
      schemaName = `test_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
      adminPool = createPool({ connectionString: baseUrl });
      await adminPool.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}"`);

      const scopedUrl = addSearchPath(baseUrl, schemaName);
      process.env.POSTGRES_URL = scopedUrl;
      process.env.POSTGRES_URL_NON_POOLING = scopedUrl;

      testPool = createPool({ connectionString: scopedUrl });
      await applySchema(testPool);
    } else {
      process.env.POSTGRES_URL = baseUrl;
      process.env.POSTGRES_URL_NON_POOLING = baseUrl;
      testPool = createPool({ connectionString: baseUrl });
      await applySchema(testPool);
    }

    db = await import('@/lib/db');
  });

  afterAll(async () => {
    if (!hasDb) return;
    if (testPool) {
      if (useSchemaIsolation) {
        await testPool.query(`DROP SCHEMA IF EXISTS "${schemaName}" CASCADE`);
      } else {
        const tables = [
          'messages',
          'sessions',
          'feedback',
          'bug_reports',
          'invite_codes',
          'auth_users',
          'zuora_connections',
          'doc_chunks',
        ];
        for (const table of tables) {
          try {
            await testPool.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
          } catch {
            // Ignore missing tables (e.g., doc_chunks when vector isn't available).
          }
        }
      }
      await testPool.end();
    }
    if (adminPool) {
      await adminPool.end();
    }
    await sql.end();
  });

  it('creates users, sessions, and messages end-to-end', async () => {
    if (!db) return;

    const user = await db.createUser('db-test@example.com', 'hash', null);
    const fetched = await db.getUserByEmail('db-test@example.com');
    expect(fetched?.id).toBe(user.id);

    const session = await db.createSession(
      'analyze',
      {
        customer_name: 'Acme Corp',
        contract_start_date: '01/01/2025',
        terms_months: 12,
        transaction_currency: 'USD',
        billing_period: 'Monthly',
        is_allocations: false,
        use_case_description: 'Annual SaaS subscription with monthly billing.',
      },
      user.id,
      'gpt-5.2'
    );

    await db.updateSessionStatus(session.id, 'running', 1);
    await db.addMessage(session.id, 'user', 'Hello');
    await db.addMessage(session.id, 'assistant', 'Hi!');

    const messages = await db.getMessages(session.id);
    expect(messages.map((m) => m.sequence_number)).toEqual([1, 2]);

    await db.updateSessionResult(session.id, { summary: { output: 'ok' } } as any);
    const stored = await db.getSession(session.id);
    expect(stored?.status).toBe('completed');

    const listed = await db.listSessions(user.id, 10, 0);
    expect(listed.find((s) => s.id === session.id)).toBeTruthy();

    await db.clearMessages(session.id);
    const cleared = await db.getMessages(session.id);
    expect(cleared).toHaveLength(0);
  });

  it('handles invite codes and usage limits', async () => {
    if (!db) return;
    const code = `INV-${Math.random().toString(16).slice(2, 8)}`;
    await db.createInviteCode(code, 1);

    expect(await db.validateInviteCode(code)).toBe(true);
    expect(await db.useInviteCode(code)).toBe(true);
    expect(await db.validateInviteCode(code)).toBe(false);
  });

  it('manages Zuora connections and active flags', async () => {
    if (!db) return;
    const user = await db.createUser(`conn-${Date.now()}@example.com`, 'hash', null);

    const first = await db.upsertZuoraConnection(
      user.id,
      'Sandbox',
      'https://rest.test.zuora.com',
      'client-1',
      'secret-1',
      true
    );

    const second = await db.upsertZuoraConnection(
      user.id,
      'Prod',
      'https://rest.zuora.com',
      'client-2',
      'secret-2',
      true
    );

    const active = await db.getActiveZuoraConnection(user.id);
    expect(active?.id).toBe(second.id);

    await db.setActiveZuoraConnection(user.id, first.id);
    const updated = await db.getActiveZuoraConnection(user.id);
    expect(updated?.id).toBe(first.id);

    await db.deleteZuoraConnection(user.id, first.id);
    const finalActive = await db.getActiveZuoraConnection(user.id);
    expect(finalActive?.id).toBe(second.id);
  });
});
