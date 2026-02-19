---
title: "Empty Sink"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/empty-sink"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:08.482Z"
---

# Empty Sink

The Empty Sink operator consumes events, halts processing, and logs records without storing data.

The Empty Sink is a terminal sink operator that:

-   Consumes the incoming event and stops further processing for that branch.

-   Does not write data to Event Store, S3, Snowflake, or other storage targets.

-   Logs each record in the Mediation audit trail with the same payload as the input, so you can still review what was processed.

-   Follows Mediation's standard audit retention policies, but records cannot be replayed as Event Store entries


This target is especially useful for fire‑and‑forget use cases, such as invoking an external API via the HTTP processor when no additional mediation or data storage is required.

## Common use cases

Use the Empty Sink target in scenarios such as:

-   HTTP call only (no storage): Trigger invoice creation or downstream workflows via the HTTP processor and terminate the flow once the call completes, without persisting the event payload in a target store.

-   Data validation: Stop processing events that fail validation checks after logging them in the audit trail for review.

-   Business rule enforcement: Halt execution when certain business rules are violated. For example, when a threshold is exceeded or a precondition is not met.

-   Debugging flows: Intentionally terminate execution at a specific step during development while preserving audit visibility into what reached that point in the meter.
