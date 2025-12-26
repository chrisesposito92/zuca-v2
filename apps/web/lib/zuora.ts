import { RevenueSnapshotSource } from '@zuca/types/revenue-snapshot';

export interface ZuoraCredentials {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
}

export interface ZuoraAccessToken {
  access_token: string;
  expires_in?: number;
  token_type?: string;
}

const DEFAULT_OAUTH_PATH = '/oauth/token';
const DEFAULT_ZOQL_QUERY_PATH = '/v1/action/query';
const DEFAULT_ZOQL_QUERY_MORE_PATH = '/v1/action/queryMore';
const DATA_QUERY_JOBS_PATH = '/query/jobs';
const LEGACY_DATA_QUERY_PATH = '/v1/data/query';

function normalizeBaseUrl(baseUrl: string): string {
  const trimmed = baseUrl.trim();
  const withoutTrailingSlash = trimmed.replace(/\/$/, '');
  // Prevent accidental double /v1 when users paste a versioned base URL.
  return withoutTrailingSlash.replace(/\/v1\/?$/, '');
}

function withBaseUrl(baseUrl: string, path: string): string {
  return `${normalizeBaseUrl(baseUrl)}${path}`;
}

async function parseJsonSafe(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

export async function fetchZuoraAccessToken(credentials: ZuoraCredentials): Promise<string> {
  const url = withBaseUrl(credentials.baseUrl, DEFAULT_OAUTH_PATH);
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: credentials.clientId,
    client_secret: credentials.clientSecret,
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    const data = await parseJsonSafe(response);
    throw new Error(`Zuora auth failed (${response.status}): ${JSON.stringify(data)}`);
  }

  const data = (await response.json()) as ZuoraAccessToken;
  if (!data.access_token) {
    throw new Error('Zuora auth failed: missing access_token');
  }
  return data.access_token;
}

async function zuoraFetch<T>(
  baseUrl: string,
  token: string,
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = withBaseUrl(baseUrl, path);
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const data = await parseJsonSafe(response);
    throw new Error(`Zuora API error (${response.status}) at ${path}: ${JSON.stringify(data)}`);
  }

  return (await response.json()) as T;
}

async function fetchProductRatePlanChargeById(
  baseUrl: string,
  token: string,
  id: string
): Promise<Record<string, any>> {
  const path = `/v1/object/product-rate-plan-charge/${encodeURIComponent(id)}`;
  return zuoraFetch<Record<string, any>>(baseUrl, token, path, { method: 'GET' });
}

async function fetchRatePlanChargeById(
  baseUrl: string,
  token: string,
  id: string
): Promise<Record<string, any>> {
  const path = `/v1/object/rate-plan-charge/${encodeURIComponent(id)}`;
  return zuoraFetch<Record<string, any>>(baseUrl, token, path, { method: 'GET' });
}

async function resolveProductRatePlanChargeId(
  baseUrl: string,
  token: string,
  ratePlanChargeId: string
): Promise<string | null> {
  try {
    const record = await fetchRatePlanChargeById(baseUrl, token, ratePlanChargeId);
    return (
      record.productRatePlanChargeId ||
      record.ProductRatePlanChargeId ||
      record.productrateplanchargeid ||
      null
    );
  } catch (error) {
    console.error('Failed to resolve ProductRatePlanChargeId from RatePlanCharge.', {
      id: ratePlanChargeId,
      error,
    });
    return null;
  }
}

interface ZoqlQueryResponse {
  records?: any[];
  done?: boolean;
  queryLocator?: string;
}

type ZoqlQueryPayload =
  | { queryLocator: string }
  | { queryString: string; pageSize: number };

export async function runZoqlQuery(
  baseUrl: string,
  token: string,
  queryString: string,
  pageSize = 2000
): Promise<any[]> {
  const records: any[] = [];
  let queryLocator: string | null = null;
  let hasMore = true;

  while (hasMore) {
    const path: string = queryLocator ? DEFAULT_ZOQL_QUERY_MORE_PATH : DEFAULT_ZOQL_QUERY_PATH;
    const payload: ZoqlQueryPayload = queryLocator
      ? { queryLocator }
      : { queryString, pageSize };

    const data: ZoqlQueryResponse = await zuoraFetch<ZoqlQueryResponse>(baseUrl, token, path, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (Array.isArray(data.records)) {
      records.push(...data.records);
    }

    if (data.done === true || !data.queryLocator) {
      hasMore = false;
    } else {
      queryLocator = data.queryLocator;
    }
  }

  return records;
}

async function safeZoqlQuery(
  baseUrl: string,
  token: string,
  queryString: string
): Promise<any[]> {
  try {
    return await runZoqlQuery(baseUrl, token, queryString);
  } catch {
    return [];
  }
}

export async function getSubscriptionByKey(
  baseUrl: string,
  token: string,
  subscriptionKey: string
): Promise<any> {
  const path = `/v1/subscriptions/${encodeURIComponent(subscriptionKey)}`;
  return zuoraFetch<any>(baseUrl, token, path, { method: 'GET' });
}

interface DataQueryJob {
  id?: string;
  jobId?: string;
  dataQueryId?: string;
  queryStatus?: string;
  status?: string;
  dataFile?: string;
  outputRows?: number;
  resultUrl?: string;
  downloadUrl?: string;
  fileUrl?: string;
  url?: string;
}

function unwrapDataQueryJob(response: unknown): DataQueryJob {
  const record = response as DataQueryJob | { data?: DataQueryJob };
  return (record as { data?: DataQueryJob })?.data ?? (record as DataQueryJob);
}

async function runDataQueryJobs(
  baseUrl: string,
  token: string,
  sql: string,
  options: {
    outputFormat?: 'JSON' | 'CSV' | 'TSV' | 'DSV';
    pollIntervalMs?: number;
    maxAttempts?: number;
    sourceData?: 'LIVE' | 'WAREHOUSE';
  } = {}
): Promise<any[]> {
  const outputFormat = options.outputFormat || 'JSON';
  const sourceData = options.sourceData || 'LIVE';
  const submit = await zuoraFetch<DataQueryJob | { data: DataQueryJob }>(baseUrl, token, DATA_QUERY_JOBS_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: sql,
      compression: 'NONE',
      output: { target: 'S3' },
      outputFormat,
      sourceData,
    }),
  });

  const submitJob = unwrapDataQueryJob(submit);
  const jobId = submitJob.id || submitJob.jobId || submitJob.dataQueryId;
  if (!jobId) {
    throw new Error('Data Query submission failed: missing job id');
  }

  const pollIntervalMs = options.pollIntervalMs || 2000;
  const maxAttempts = options.maxAttempts || 30;

  let attempt = 0;
  let job: DataQueryJob | null = null;

  while (attempt < maxAttempts) {
    const jobResponse = await zuoraFetch<DataQueryJob | { data: DataQueryJob }>(
      baseUrl,
      token,
      `${DATA_QUERY_JOBS_PATH}/${jobId}`,
      { method: 'GET' }
    );
    job = unwrapDataQueryJob(jobResponse);
    const status = (job.queryStatus || job.status || '').toLowerCase();
    if (status === 'completed' || status === 'complete') {
      break;
    }
    if (status === 'failed' || status === 'cancelled') {
      throw new Error(`Data Query failed with status: ${job.queryStatus || job.status}`);
    }
    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    attempt += 1;
  }

  if (!job) {
    throw new Error('Data Query status check failed');
  }

  const resultUrl = job.dataFile || job.resultUrl || job.downloadUrl || job.fileUrl || job.url;
  if (!resultUrl) {
    throw new Error('Data Query completed without result URL');
  }

  const resultResponse = await fetch(resultUrl);
  if (!resultResponse.ok) {
    throw new Error(`Failed to download Data Query results (${resultResponse.status})`);
  }

  const text = await resultResponse.text();
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (outputFormat === 'JSON') {
    return trimmed
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  return [{ raw: trimmed }];
}

async function runDataQueryLegacy(
  baseUrl: string,
  token: string,
  sql: string,
  options: { outputFormat?: 'JSON' | 'CSV' | 'TSV' | 'DSV'; pollIntervalMs?: number; maxAttempts?: number } = {}
): Promise<any[]> {
  const outputFormat = options.outputFormat || 'JSON';
  const submit = await zuoraFetch<DataQueryJob>(baseUrl, token, LEGACY_DATA_QUERY_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: sql,
      outputFormat,
      compression: 'NONE',
    }),
  });

  const jobId = submit.id || submit.jobId || submit.dataQueryId;
  if (!jobId) {
    throw new Error('Data Query submission failed: missing job id');
  }

  const pollIntervalMs = options.pollIntervalMs || 2000;
  const maxAttempts = options.maxAttempts || 30;

  let attempt = 0;
  let job: DataQueryJob | null = null;

  while (attempt < maxAttempts) {
    job = await zuoraFetch<DataQueryJob>(baseUrl, token, `${LEGACY_DATA_QUERY_PATH}/${jobId}`, { method: 'GET' });
    const status = (job.queryStatus || job.status || '').toLowerCase();
    if (status === 'completed' || status === 'complete') {
      break;
    }
    if (status === 'failed' || status === 'cancelled') {
      throw new Error(`Data Query failed with status: ${job.queryStatus || job.status}`);
    }
    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    attempt += 1;
  }

  if (!job) {
    throw new Error('Data Query status check failed');
  }

  const resultUrl = job.resultUrl || job.downloadUrl || job.fileUrl || job.url;
  if (!resultUrl) {
    throw new Error('Data Query completed without result URL');
  }

  const resultResponse = await fetch(resultUrl);
  if (!resultResponse.ok) {
    throw new Error(`Failed to download Data Query results (${resultResponse.status})`);
  }

  const text = await resultResponse.text();
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (outputFormat === 'JSON') {
    return trimmed
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  return [{ raw: trimmed }];
}

export async function runDataQuery(
  baseUrl: string,
  token: string,
  sql: string,
  options: {
    outputFormat?: 'JSON' | 'CSV' | 'TSV' | 'DSV';
    pollIntervalMs?: number;
    maxAttempts?: number;
    sourceData?: 'LIVE' | 'WAREHOUSE';
  } = {}
): Promise<any[]> {
  try {
    return await runDataQueryJobs(baseUrl, token, sql, options);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const shouldFallback =
      message.includes(DATA_QUERY_JOBS_PATH) &&
      (message.includes('(404)') || message.includes('(405)'));
    if (!shouldFallback) {
      throw error;
    }
    return runDataQueryLegacy(baseUrl, token, sql, options);
  }
}

function toSqlInList(values: string[]): string {
  return values.map((value) => `'${value.replace(/'/g, "''")}'`).join(',');
}

function sanitizeIds(ids: string[]): string[] {
  const normalized = ids.map((id) => String(id).trim()).filter(Boolean);
  const filtered = normalized.filter((id) => /^[A-Za-z0-9]{32}$/.test(id));
  if (filtered.length !== normalized.length) {
    console.warn('Dropped invalid charge IDs for POB criteria lookup.', {
      total: normalized.length,
      kept: filtered.length,
    });
  }
  return filtered;
}

export async function detectOtrEnabled(baseUrl: string, token: string): Promise<boolean> {
  try {
    await runDataQuery(baseUrl, token, 'SELECT * FROM BookingTransaction LIMIT 1');
    return true;
  } catch {
    return false;
  }
}

function extractChargeIds(records: Array<Record<string, any>>, includeGenericId = false): string[] {
  const ids = new Set<string>();
  const keys = ['rateplanchargeid', 'productrateplanchargeid', 'originalrateplanchargeid'];
  if (includeGenericId) keys.push('id');

  for (const record of records) {
    for (const key of Object.keys(record)) {
      const normalized = key.toLowerCase();
      if (keys.includes(normalized)) {
        const value = record[key];
        if (value) ids.add(String(value));
      }
    }
  }

  return Array.from(ids);
}

export async function fetchPobCriteriaMap(
  baseUrl: string,
  token: string,
  chargeIds: string[],
  useDataQuery = false
): Promise<Record<string, string | null>> {
  const sanitizedIds = sanitizeIds(chargeIds);
  if (!sanitizedIds.length) return {};

  const map: Record<string, string | null> = {};
  const chunks: string[][] = [];
  const chunkSize = 50;
  for (let i = 0; i < sanitizedIds.length; i += chunkSize) {
    chunks.push(sanitizedIds.slice(i, i + chunkSize));
  }

  for (const chunk of chunks) {
    if (useDataQuery) {
      try {
        const sql = `SELECT Id, POBCRITERIA__c FROM ProductRatePlanCharge WHERE Id IN (${toSqlInList(chunk)})`;
        if (process.env.DEBUG === 'true') {
          console.log('[POB] Data Query SQL:', sql);
        }
        const rows = await runDataQuery(baseUrl, token, sql);
        for (const row of rows) {
          const id = row.id || row.Id;
          if (id) {
            map[String(id)] = row.pobcriteria__c ?? row.POBCRITERIA__c ?? null;
          }
        }
      } catch (error) {
        console.error('POB criteria Data Query failed:', error);
      }
    } else {
      const zoql = `SELECT Id, POBCRITERIA__c FROM ProductRatePlanCharge WHERE Id IN (${toSqlInList(chunk)})`;
      try {
        if (process.env.DEBUG === 'true') {
          console.log('[POB] ZOQL:', zoql);
        }
        const rows = await runZoqlQuery(baseUrl, token, zoql);
        for (const row of rows) {
          const id = row.Id || row.id;
          if (id) {
            map[String(id)] = row.POBCRITERIA__c ?? row.pobcriteria__c ?? null;
          }
        }
      } catch (error) {
        console.error('POB criteria ZOQL failed, attempting Data Query fallback.', {
          error,
          chunkSize: chunk.length,
          ids: chunk,
          zoql,
        });
        try {
          const sql = `SELECT Id, POBCRITERIA__c FROM ProductRatePlanCharge WHERE Id IN (${toSqlInList(chunk)})`;
          if (process.env.DEBUG === 'true') {
            console.log('[POB] Data Query fallback SQL:', sql);
          }
          const rows = await runDataQuery(baseUrl, token, sql);
          for (const row of rows) {
            const id = row.id || row.Id;
            if (id) {
              map[String(id)] = row.pobcriteria__c ?? row.POBCRITERIA__c ?? null;
            }
          }
        } catch (fallbackError) {
          console.error('POB criteria Data Query fallback failed:', fallbackError);
          const missingIds = chunk.filter((id) => !(id in map));
          if (missingIds.length) {
            for (let i = 0; i < missingIds.length; i += 5) {
              const batch = missingIds.slice(i, i + 5);
              const results = await Promise.allSettled(
                batch.map(async (id) => {
                  try {
                    const record = await fetchProductRatePlanChargeById(baseUrl, token, id);
                    return { id, record };
                  } catch {
                    const resolvedId = await resolveProductRatePlanChargeId(baseUrl, token, id);
                    if (!resolvedId) {
                      throw new Error('Unable to resolve ProductRatePlanChargeId');
                    }
                    const record = await fetchProductRatePlanChargeById(baseUrl, token, resolvedId);
                    return { id, record, resolvedId };
                  }
                })
              );
              results.forEach((result, index) => {
                if (result.status !== 'fulfilled') {
                  console.error('POB criteria REST fallback failed:', {
                    id: batch[index],
                    error: result.reason,
                  });
                  return;
                }
                const { id, record, resolvedId } = result.value;
                const recordId = record.id || record.Id || resolvedId || id;
                const pobValue = record.pobcriteria__c ?? record.POBCRITERIA__c ?? null;
                map[String(recordId)] = pobValue;
                // Also map the original id if it was a RatePlanCharge id
                if (resolvedId && resolvedId !== id) {
                  map[String(id)] = pobValue;
                }
              });
            }
          }
        }
      }
    }
  }

  return map;
}

export async function fetchOtrSnapshotData(
  baseUrl: string,
  token: string,
  subscriptionNumbers: string[]
): Promise<RevenueSnapshotSource> {
  const inList = toSqlInList(subscriptionNumbers);
  const [booking, billing, revrec] = await Promise.all([
    runDataQuery(
      baseUrl,
      token,
      `SELECT * FROM BookingTransaction WHERE SubscriptionNumber IN (${inList})`
    ),
    runDataQuery(
      baseUrl,
      token,
      `SELECT * FROM BillingTransaction WHERE SubscriptionName IN (${inList})`
    ),
    runDataQuery(
      baseUrl,
      token,
      `SELECT * FROM RevenueRecognitionEventsTransaction WHERE SubscriptionName IN (${inList})`
    ),
  ]);

  const chargeIds = extractChargeIds(booking);
  const pobCriteriaMap = await fetchPobCriteriaMap(baseUrl, token, chargeIds, true);

  return {
    otr_enabled: true,
    booking_transactions: booking,
    billing_transactions: billing,
    revenue_recognition_events: revrec,
    pob_criteria_map: pobCriteriaMap,
  };
}

export async function fetchNonOtrSnapshotData(
  baseUrl: string,
  token: string,
  subscriptionNumbers: string[]
): Promise<RevenueSnapshotSource> {
  const subscriptions: any[] = [];
  const ratePlanCharges: any[] = [];

  for (const subscriptionNumber of subscriptionNumbers) {
    const subscription = await getSubscriptionByKey(baseUrl, token, subscriptionNumber);
    subscriptions.push(subscription);
    if (Array.isArray(subscription.ratePlans)) {
      for (const plan of subscription.ratePlans) {
        if (Array.isArray(plan.ratePlanCharges)) {
          ratePlanCharges.push(...plan.ratePlanCharges);
        }
      }
    }
  }

  const chargeIds = extractChargeIds(ratePlanCharges as Array<Record<string, any>>);
  const pobCriteriaMap = await fetchPobCriteriaMap(baseUrl, token, chargeIds, false);

  const inList = toSqlInList(subscriptionNumbers);
  const orders = await safeZoqlQuery(baseUrl, token, `SELECT Id, OrderNumber, SubscriptionNumber, OrderDate FROM Order WHERE SubscriptionNumber IN (${inList})`);
  const invoices = await safeZoqlQuery(baseUrl, token, `SELECT Id, InvoiceNumber, AccountId, SubscriptionNumber, InvoiceDate, Status FROM Invoice WHERE SubscriptionNumber IN (${inList})`);
  const creditMemos = await safeZoqlQuery(baseUrl, token, `SELECT Id, CreditMemoNumber, AccountId, SubscriptionNumber, Status, CreditMemoDate FROM CreditMemo WHERE SubscriptionNumber IN (${inList})`);
  const usage = await safeZoqlQuery(baseUrl, token, `SELECT Id, SubscriptionNumber, AccountId, StartDateTime, EndDateTime, Quantity, UOM FROM Usage WHERE SubscriptionNumber IN (${inList})`);

  return {
    otr_enabled: false,
    subscriptions,
    orders,
    invoices,
    credit_memos: creditMemos,
    rate_plan_charges: ratePlanCharges,
    usage,
    pob_criteria_map: pobCriteriaMap,
  };
}
