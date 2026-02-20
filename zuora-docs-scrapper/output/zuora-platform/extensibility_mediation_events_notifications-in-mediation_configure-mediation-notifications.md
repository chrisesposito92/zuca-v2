---
title: "Configure Mediation Notifications"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/notifications-in-mediation/configure-mediation-notifications"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:10.066Z"
---

# Configure Mediation Notifications

Learn how to configure mediation notifications by defining triggers, selecting events, setting filters, and choosing delivery options.

Read the detailed steps to [Create a notification](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification).

1.  Navigate to Extension Studio > Events & Notifications in the left navigation menu.
2.  Click \+ Add New Notification .
3.  Create the notification step-by-step with the information specified in the table.

    |  | Configuration details |
    | --- | --- |
    | Step 1: Define Trigger | Click On An Event Occurrence. |
    | Step 2: Select Event | Under the System notification group and the Mediation event group, select one of the following:Meter Session Status ChangeMeter Session Periodic Status UpdateEvent Store Query Status Changed |
    | Step 3: Set Filters | Use the condition builder to narrow down when the notification fires.Examples:Alert on meter failures only - Condition:`MeterSession.Status == FAILED`(Optional) `MeterSession.RunType == NORMAL`Alert when periodic error rate exceeds a threshold - Condition based on periodic updates:`MeterOperator.ErrorPercentage = 5`(Optional) filter by `Meter.Id`, `MeterOperator.Id`, or `MeterSession.RunType`Alert when an Event Store query fails - Condition:`EventStoreQuery.Status == FAILED` |
    | Step 4: Set Delivery Options | You can select either Email or Callout.Email - Use or clone the Mediation email templates.Callout - Use a callout template to send the payload to external systems such as Slack, incident management tools, or internal webhooks. For callouts, configure the target URL, headers, and body as you would for a notification callout. |
    | Step 5: Define Target Accounts | Select a communication profile. |
    | Step 6: Finalize Notification Details | Specify the following basic information:Name: Enter a name that indicates the purpose of this notification. For example - `Alert – Mediation meter failures`.Description: A short description of what the notification does (optional).Communication profile: Specify which accounts or profiles should receive the notification.Active: Enable the notification. |
    | Step 7: Review Notification | Review the notification settings. |

4.  Click Done.

The notification is saved and alerts will be sent when triggered.
