---
title: "Re-run a meter with an Event Store source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/re-run-a-meter-with-an-event-store-source"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:08.302Z"
---

# Re-run a meter with an Event Store source

Learn how to re-run a custom meter using an event store as a source to process specific events within a date range.

When a custom meter has an event store as a source, you can re-run the meter to use only specific events between a date range, since the event store contains all the event data.

1.  Select the meter and click Run in the meter list page or in the meter page.
2.  Select one of the following as the Event Store Data Scope:

    -   All-time: : To load all the event data from the event store.

    -   Specify time frame: : To load event data between a specific time range. Select the Start Date and End Date.


3.  Click Run.
