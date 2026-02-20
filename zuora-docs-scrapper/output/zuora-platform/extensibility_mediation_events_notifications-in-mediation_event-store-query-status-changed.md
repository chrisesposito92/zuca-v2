---
title: "Event Store Query Status Changed"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/notifications-in-mediation/event-store-query-status-changed"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:11.043Z"
---

# Event Store Query Status Changed

The Event Store Query Status Changed event fires when an asynchronous Event Store query changes status.

Use this event to know when Event Store maintenance or backfill operations have completed and whether they succeeded or failed. Typical uses include triggering a follow‑up process when an Event Store Insert/Update/Delete query finishes or alerting operations if a maintenance query fails.

## Key fields

The event payload for Event Store Query Status Changed includes the following output fields:

| Field | Description |
| --- | --- |
| EventStoreQuery.Id | Identifier of the Event Store query |
| EventStoreQuery.Query | Text or identifier of the query that was run |
| EventStoreQuery.Status | Status of the query, such as `RUNNING`, `COMPLETED`, or `FAILED` |
| EventStoreQuery.ModifiedRowCount | Number of rows modified by the query |
| EventStore.Id | Identifier of the Event Store |
| EventStore.Name | Display name of the Event Store |

You can filter notifications by Event Store, by status (for example, failures only), or by other parameters exposed for this event.
