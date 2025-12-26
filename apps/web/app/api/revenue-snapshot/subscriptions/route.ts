/**
 * GET /api/revenue-snapshot/subscriptions
 *
 * Fetch subscriptions from Zuora using ZOQL + Retrieve-by-key in batches.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getActiveZuoraConnection, getZuoraConnectionById } from '@/lib/db';
import { decryptSecret } from '@/lib/crypto';
import { fetchZuoraAccessToken, runZoqlQuery, runDataQuery, getSubscriptionByKey } from '@/lib/zuora';

interface SubscriptionSummary {
  subscription_number: string;
  subscription_name?: string | null;
  account_name?: string | null;
  account_number?: string | null;
  status?: string | null;
  term_start_date?: string | null;
  term_end_date?: string | null;
  version?: number | null;
  has_allocation_eligible?: boolean;
}

function extractAllocationEligible(subscription: any): boolean {
  if (!subscription?.ratePlans) return false;
  for (const plan of subscription.ratePlans) {
    if (!plan?.ratePlanCharges) continue;
    for (const charge of plan.ratePlanCharges) {
      if (charge?.isAllocationEligible === true) return true;
      if (charge?.IsAllocationEligible === true) return true;
      if (charge?.isallocationeligible === true) return true;
    }
  }
  return false;
}

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const connectionId = request.nextUrl.searchParams.get('connection_id');
    const connection = connectionId
      ? await getZuoraConnectionById(user.userId, connectionId)
      : await getActiveZuoraConnection(user.userId);
    if (!connection) {
      return NextResponse.json({ error: 'No Zuora connection configured' }, { status: 400 });
    }

    const clientSecret = decryptSecret(connection.client_secret_encrypted);
    const token = await fetchZuoraAccessToken({
      baseUrl: connection.base_url,
      clientId: connection.client_id,
      clientSecret,
    });

    const zoql = 'SELECT Name FROM Subscription';
    let records: any[] = [];
    try {
      records = await runZoqlQuery(connection.base_url, token, zoql);
    } catch (error) {
      console.error('ZOQL subscription query failed, falling back to Data Query:', error);
      records = await runDataQuery(connection.base_url, token, 'SELECT Name FROM Subscription');
    }

    const subscriptionNumbers = Array.from(
      new Set(
        records
          .map((r) => r.Name || r.name)
          .filter(Boolean) as string[]
      )
    );

    const summaries: SubscriptionSummary[] = [];
    const batchSize = 10;

    for (let i = 0; i < subscriptionNumbers.length; i += batchSize) {
      const batch = subscriptionNumbers.slice(i, i + batchSize);
      const batchResults = await Promise.allSettled(
        batch.map((subscriptionNumber) =>
          getSubscriptionByKey(connection.base_url, token, subscriptionNumber)
        )
      );

      for (const result of batchResults) {
        if (result.status !== 'fulfilled') continue;
        const subscription = result.value;
        summaries.push({
          subscription_number: subscription.subscriptionNumber || subscription.number || subscription.name,
          subscription_name: subscription.name || subscription.subscriptionName || null,
          account_name: subscription.accountName || subscription.account?.name || null,
          account_number: subscription.accountNumber || subscription.account?.accountNumber || null,
          status: subscription.status || null,
          term_start_date: subscription.termStartDate || null,
          term_end_date: subscription.termEndDate || null,
          version: subscription.version ?? null,
          has_allocation_eligible: extractAllocationEligible(subscription),
        });
      }
    }

    const deduped = new Map<string, SubscriptionSummary>();
    for (const summary of summaries) {
      const existing = deduped.get(summary.subscription_number);
      if (!existing) {
        deduped.set(summary.subscription_number, summary);
        continue;
      }
      const existingVersion = existing.version ?? 0;
      const nextVersion = summary.version ?? 0;
      if (nextVersion >= existingVersion) {
        deduped.set(summary.subscription_number, summary);
      }
    }

    const uniqueSummaries = Array.from(deduped.values());

    return NextResponse.json({
      success: true,
      subscriptions: uniqueSummaries,
      total: uniqueSummaries.length,
    });
  } catch (error: unknown) {
    console.error('Revenue snapshot subscriptions error:', error);
    const message = error instanceof Error ? error.message : 'Failed to load subscriptions';
    return NextResponse.json({ error: 'Failed to load subscriptions', details: message }, { status: 500 });
  }
}
