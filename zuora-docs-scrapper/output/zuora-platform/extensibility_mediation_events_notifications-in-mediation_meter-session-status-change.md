---
title: "Meter Session Status Change"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/notifications-in-mediation/meter-session-status-change"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:11.100Z"
---

# Meter Session Status Change

The Meter Session Status Change event triggers when a Mediation meter session changes status.

For example, it can trigger when a session moves from \`RUNNING\` to \`COMPLETED\` or \`FAILED\`. You can use this event for both NORMAL and DEBUG/TESTING runs. Typical uses include alerting operations teams when a production meter run fails or sending completion notifications when a large batch run finishes.

## Key fields

The event payload for Meter Session Status Change includes the following output fields:

| Field | Description |
| --- | --- |
| Meter Id | Unique identifier of the meter |
| Meter Name | Display name of the meter |
| Session Id | Unique identifier for the meter session (each run instance |
| Session Run Type | Type of run, such as NORMAL or DEBUG |
| Session Status | Current status of the session, for example `NEVER_RUN`, `TESTING`, `TESTING_PASSED`, `TESTING_FAILED`, `INITIALIZING`, `RUNNING`, `PAUSED`, `USAGE_PUSHING`, `PUSH_COMPLETED`, `CONSUME_COMPLETED`, `COMPLETED`, `FAILED`, `CANCELED` |
| Session Previous Status | The previous status before the current status change |
| Session start time | Timestamp when the session started |
| Session end time | Timestamp when the session ended (if completed) |

You can use Session Status, Session Previous Status, and Session Run Type in notification conditions. For example, you can trigger only when a session moves into \`FAILED\` or \`TESTING\_FAILED\`.

## Statuses

| Status | Description |
| --- | --- |
| NEVER_RUN | The meter session has been defined but has not yet been executed. |
| TESTING | The meter session is running in test mode to validate configuration or logic. |
| TESTING_PASSED | The test execution completed successfully. |
| TESTING_FAILED | The test execution failed due to configuration or processing errors. |
| INITIALIZING | The meter session is being prepared for execution. |
| RUNNING | The meter session is actively processing usage data. |
| PAUSED | Execution of the meter session has been temporarily suspended. |
| USAGE_PUSHING | Processed usage data is being pushed to downstream systems. |
| PUSH_COMPLETED | Usage data has been successfully pushed to the downstream. |
| COMPLETED | The meter session finished successfully with all processing steps completed. |
| FAILED | The meter session terminated due to an error. |
| CANCELED | The meter session was manually or system-canceled before completion. |
