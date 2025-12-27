# Feature: Zuora Billing → Revenue Snapshot

## Summary
This feature lets users connect a Zuora Billing tenant, select subscription(s), and generate a **snapshot preview** of the Zuora Revenue Recognition Waterfall.

## Scope (Read-Only)
- Uses **actual tenant data** only; no projections or future-period estimates.
- Handles both OTR-enabled and non-OTR tenants.
- Multiple subscriptions are combined into a single snapshot (RC grouping style).

## Key Flows
1. **Tenant Connection**
   - OAuth client credentials stored encrypted in Postgres.
   - Multiple named tenants per user with a single active selection.
   - Removing a tenant deletes its stored credentials.

2. **Subscription Selection**
   - ZOQL query fetches subscription numbers.
   - Retrieve-by-key API pulls detailed subscription data in batches.
   - Client-side search + pagination + sorting.

3. **Data Retrieval**
   - **OTR**: Data Query via `/query/jobs` for BookingTransaction, BillingTransaction, RevenueRecognitionEventsTransaction (queries run in parallel; OTR is inferred by successful BookingTransaction retrieval).
   - **Non-OTR**: ZOQL/REST for Subscription, Order, Invoice, Credit Memo, Usage, Rate Plan Charge.
   - Custom field `POBCRITERIA__c` is fetched from ProductRatePlanCharge for POB template assignment.
   - **POB Template** in Zuora Revenue corresponds to ProductRatePlanCharge.POBCRITERIA__c.
   - Custom fields are case-sensitive and require the `__c` suffix in queries.

4. **Snapshot Pipeline**
   - Rev Rec Waterfall (LLM, high reasoning)
   - Rev Rec Waterfall outputs one row per line item with month columns (Mon-YY) plus Total.
   - Summary (LLM)
   - Allocation columns are populated from SSP method + pricing fields; Ext Allocated Price defaults to Ext Sell Price when allocations are not applied.
5. **Execution Model**
   - User-selected model (GPT-5.2, Gemini 3 Pro, Gemini 3 Flash) applied to all snapshot steps
6. **Exports & Visualization**
   - Export tables to Excel (Rev Rec raw + pivot, Summary).
   - Rev Rec Waterfall includes an optional chart toggle with modes: Totals, Stacked by line item, or Grouped by line item.
   - Rev Rec Waterfall pivot table always includes a Total column at the far right.
7. **Column Filtering**
   - Rev Rec Waterfall uses a fixed schema with month columns (Mon-YY) plus allocation fields.
8. **Session Naming**
   - Revenue Snapshot sessions in History are labeled using selected subscription numbers (up to 3, with “+N more”).

## API Routes
- `POST /api/revenue-snapshot/auth` – save credentials for a named tenant (encrypted)
- `GET /api/revenue-snapshot/auth` – list saved tenants + active selection
- `PATCH /api/revenue-snapshot/auth` – set active tenant
- `DELETE /api/revenue-snapshot/auth?connection_id=` – remove a tenant
- `GET /api/revenue-snapshot/subscriptions?connection_id=` – list subscriptions for active or specified tenant
- `POST /api/revenue-snapshot/generate` – run snapshot pipeline

## Data Storage
- `zuora_connections` table stores encrypted OAuth credentials per user (multiple named tenants).
- Snapshot results are stored as sessions with `session_type = revenue-snapshot`.

## Environment
- `ZUORA_CREDENTIALS_KEY` – encryption key for stored credentials
