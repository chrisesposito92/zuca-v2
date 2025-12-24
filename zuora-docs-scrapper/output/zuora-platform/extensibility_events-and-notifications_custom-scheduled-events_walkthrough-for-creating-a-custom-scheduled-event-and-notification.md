---
title: "Walkthrough for creating a custom scheduled event and notification"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/walkthrough-for-creating-a-custom-scheduled-event-and-notification"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:27.853Z"
---

# Walkthrough for creating a custom scheduled event and notification

Demonstrates the high-level process of creating a custom scheduled event and a corresponding notification definition.

Take the following steps to create a "Three days before subscription term end date" custom scheduled event notification:

1.  Create a "Subscription term end date" scheduled event through the [Create a scheduled event](https://developer.zuora.com/v1-api-reference/api/operation/POST_ScheduledEvent/) API operation with the following settings:
    | Field | Value |
    | --- | --- |
    | apiObject | Subscription |
    | apiField | TermEndDate (assume the term end date is Oct 5th) |
    | hours | 10 |
    | minutes | 30 |

2.  Create a "Three days before subscription term end date" custom scheduled event notification through Zuora UI or the [Create a notification definition](https://www.zuora.com/developer/api-references/api/operation/POST_Create_Notification_Definition/) API operation. Configure the system filter as follows:
    | System filter | Value |
    | --- | --- |
    | Days | 3 |
    | Condition | Before |


After the notification is created, Zuora evaluates it every day at 10:30 AM. The notification will be triggered on Oct 2nd at 10:30 AM, three days before the subscription term end date (Oct 5th).
