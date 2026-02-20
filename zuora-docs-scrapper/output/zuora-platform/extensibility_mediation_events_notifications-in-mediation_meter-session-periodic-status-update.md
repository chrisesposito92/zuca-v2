---
title: "Meter Session Periodic Status Update"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/notifications-in-mediation/meter-session-periodic-status-update"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:11.005Z"
---

# Meter Session Periodic Status Update

The Meter Session Periodic Status Update event generates periodic summaries for a running meter session at the operator level.

This is especially useful for long‑running or streaming meters, where the status might stay \`RUNNING\` for hours or days. Instead of waiting for a final status, you can receive snapshots every defined interval. These snapshots show how many records an operator has processed and how many errors have occurred. Currently, an interval of every 30 minutes is set.

## Key fields

The event payload for Meter Session Periodic Status Update includes the following output fields:

| Field | Description |
| --- | --- |
| Meter Id | Unique identifier of the meter |
| Meter Name | Display name of the meter |
| Operator Id | Identifier for the operator or processor |
| Session Id | Unique identifier for the meter session (each run instance |
| Session Run Type | Type of run, such as NORMAL or DEBUG |
| Session start time | Timestamp when the session started |
| Session end time | Timestamp when the session ended (if completed) |
| Operator Output Count | Total number of successfully processed records |
| Operator Error Count | Number of failed records encountered during processing |
| Operator Total Count | Total number of records handled by the operator |
| Operator Error Percentage | Percentage of records that failed, based on error and total counts |

You can also configure additional event parameters that are exposed in the condition builder when you define a notification, such as:

-   Meter Id – filter by a specific meter
-   Operator Id – filter by a specific operator
-   Run Type – \`NORMAL\` or \`DEBUG\`

These parameters are available as fields when you set up conditions for the notification.
