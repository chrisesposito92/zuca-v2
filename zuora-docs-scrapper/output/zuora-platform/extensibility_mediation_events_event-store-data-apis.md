---
title: "Event store data APIs"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/event-store-data-apis"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:57.554Z"
---

# Event store data APIs

The event store data APIs let you run SQL-style asynchronous queries against raw metering events stored for a specific meter. Use these APIs to validate event ingestion, troubleshoot metering workflows, perform post‑run reconciliation, and run ad‑hoc queries for QA or analytics.

An event store is a logical table of raw metering events associated with a specific meter. Each event store has a unique ID (for example, autoeventstore1764055040470), a fixed schema generated from the meter definition, and Zuora system metadata columns (such as internal event day or meter ID).

An event store query is a SQL-style asynchronous query that you can run against an event store. The typical flow is as follows:

1.  Submit a SQL query.

2.  Receive a queryId in the response.

3.  Poll the query results endpoint until the query is ready.

4.  Retrieve rows and column metadata, including total row count and field values.


## Submit an event store query

Use this operation to submit a SQL-style query against an event store. Endpoint: `POST /meters/event-store-queries`

When you submit a query, Zuora validates the SQL and starts execution asynchronously. The response includes a queryId that you use later to retrieve paginated results.

See [Submit an event store query](https://developer.zuora.com/v1-api-reference/api/operation/submitEventStoreQuery/) in the Zuora API documentation for more information.

## Retrieve the results for an event store query

Use this operation to retrieve paginated results for a previously submitted query. Endpoint: `GET /meters/event-store-queries/{queryId}`

See [Retrieve the results for an event store query](https://developer.zuora.com/v1-api-reference/api/operation/getQueryResultsForEventStore/) in the Zuora API documentation for more information.

## Supported SQL

| SQL Capability | Supported | Example Query |
| --- | --- | --- |
| SELECT | Yes | SELECT * FROM autoeventstore123 LIMIT 10 |
| Column selection | Yes | SELECT accountNumber, qty FROM autoeventstore123 LIMIT 5 |
| WHERE filters | Yes | SELECT * FROM autoeventstore123 WHERE accountNumber = 'A00001' LIMIT 20 |
| Aggregations (COUNT(*)) | Yes | SELECT COUNT(*) FROM autoeventstore123 |
| Column projection | Yes | SELECT qty * 2 AS doubledQty FROM autoeventstore123 LIMIT 10 |
| LIMIT | Yes | SELECT * FROM autoeventstore123 LIMIT 50 |
| JOINs | No |  |
| Subqueries | No |  |

## Errors

| Scenario | Error example |
| --- | --- |
| Empty query | 400 – "The parameter query is required" |
| Invalid queryId | 400 – "The parameter queryId is invalid" |
| pageSize > 50 | 400 – "pageSize must be ≤ 50" |
| page ≤ 0 | 400 – "page must be greater than 0" |
| SQL syntax error | isFailed=true + detailed parser error |

## Examples

Example 1: Validate meter input events after a run, to confirm that the correct events were received by the meter.

Sample query:

SELECT \* FROM autoeventstore1764055040470 WHERE subscriptionId = 'SUB‑00000123' LIMIT 50

This helps inspect raw source events for a specific subscription, check fields such as qty, chargeName, eventDate, and product identifiers, and to cross‑reference events with meter summaries or billing outcomes.

Example 2: Troubleshoot missing or incorrect usage, for example, to investigate issues such as 'we sent usage but the system didn't receive it'.

Sample query:

SELECT accountNumber, chargeName, qty, \_\_zuora\_event\_day FROM autoeventstore1763863543945 WHERE accountNumber = 'A00000021' ORDER BY eventDate DESC LIMIT 20

This provides confirmation that events were received for the account, provides visibility into Zuora system metadata (such as zuora\_event\_day and zuora\_meter\_id), and way to identify malformed fields or unexpected values.

## Usage considerations

-   Queries that return more than around 10,000 rows can take more time to execute and can only fetch up to approximately 10,000 rows. Design your queries with filters and LIMIT clauses.

-   Parallel queries are not supported for a tenant at present. Submit one query at a time and wait for it to complete before starting another.

-   Query results are cached for a limited time (for example, 60 minutes). If you do not retrieve results within the default TTL window, the data may be removed from the cache and must be recomputed by submitting the query again.

-   Intended use:

    -   The APIs are intended for sampling, validation, and debugging. They are not a bulk export mechanism or analytics engine. Large, unbounded queries may stall or time out.

    -   SQL support is limited to basic SELECT queries with filters and simple projections.

    -   Unselective WHERE clauses or wide column selections (selecting all columns from large schemas) can cause full table scans and increase response size and latency.

    -   The system does not guarantee ordering unless the query explicitly includes ORDER BY, and sorting is not recommended for very large datasets.

    -   The event store is not optimized for real-time analytics. Use it for sampling, validation, troubleshooting, and reconciliation, not as a general-purpose reporting or export tool.
