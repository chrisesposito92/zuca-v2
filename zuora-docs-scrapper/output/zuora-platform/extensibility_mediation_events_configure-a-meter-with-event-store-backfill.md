---
title: "Configure a meter with Event Store backfill"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/configure-a-meter-with-event-store-backfill"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:08.787Z"
---

# Configure a meter with Event Store backfill

Learn how to backfill event data in a custom meter using an event store to re-populate or recompute meter values.

If a custom meter uses an event store as a source, you can backfill event data in the event store to re-populate or recompute meter values.

1.  On the event store details page, click the Backfill button and select Delete events.
    If the event store is in progress of writing data, the backfill button will be grayed out.

2.  Download the template and upload the event to be deleted. The limit is a CSV file with a 1000 rows.
3.  Confirm the delete action.
    When the delete process finishes, you will see a delete success message on the page. The event store status will also be updated from `in use and writing` to `in use and idle` .
