---
title: "Configure notifications for the API Performance event"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/standard-events/common-use-cases-of-standard-events/configure-notifications-for-the-api-performance-event"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:26.011Z"
---

# Configure notifications for the API Performance event

Learn how to configure notifications with different triggering thresholds for the API Performance event.

Zuora System Health dashboard for API collects metrics on API performance, usage, failure, and concurrency limit in your Zuora tenant. The API performance metrics include percentile response time of API requests within a specified time range. You can leverage these metrics to monitor the performance of each API endpoint in near real time.

To ensure stability and prevent latency, Zuora provides you the ability to send email or callout notifications when declines in API performance arise. With this ability, you do not need to monitor API performance metrics from the System Health dashboard repeatedly.

You can configure notifications with different triggering thresholds for API performance. It is best practice to set up a notification with a generic threshold for all API requests, and individual notifications with practical thresholds for specific API requests.

To create a notification definition for the API Performance event, perform the following steps:

1.  Navigate to in the left navigation menu.

2.  Click \+ Add New Notification.

3.  Create the notification step-by-step with the following information. For more information, see [Create a notification](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification).
    |  | Configuration details |
    | --- | --- |
    | Step 1: Define Trigger | Click On An Event Occurrence. |
    | Step 2: Select Event | From the dropdown list, select System > Telemetry > API Performance. |
    | Step 3: Set Filters | Set the following system filters:Interval: The evaluation frequency of the event.Threshold: The triggering average response time (in milliseconds) of API requests.Window: The time range that the API requests occurred in.Threshold Percentile: The threshold value type. Percentile (P95, P90, or P50) or mean.Endpoint Operator: The operator for endpoint matching (Equal or NotEqual).Endpoint: The API endpoint of the API requests.Mute Active: The trigger that indicates whether to deactivate the notification for a designated duration (Mute Hour) after triggering it a certain number of times (Mute Limit).Mute Limit: The number of times Zuora will trigger this notification before deactivating it.Mute Hour: The duration (in hours) for which Zuora will deactivate this notification. |
    | Step 4: Set Delivery Options | From the Delivered By Email list, select System Health API Performance . |
    | Step 5: Define Target Accounts | Select Default from the communication profile list.For more information, see Communication profile overview. |
    | Step 6: Finalize Notification Details | Specify the following basic information:Name: The notification name.Description: The notification description.Active: Toggled on by default, indicating the notification will be sent when the API Performance event occurs. |
    | Step 7: Review Notification | Review the notification settings. |

4.  Click Done.


For example, if you create a callout notification with the following values:

-   Interval: 1440

-   Threshold: 5000

-   Window: 120

-   Threshold Percentile: P95

-   Endpoint Operator: Equal

-   Endpoint: All

-   Mute Active: false

-   Mute Limit: (any value)

-   Mute Hour: (any value)


Zuora evaluates this notification every 1440 minutes. During the evaluation, if the 95th percentile of the response time of all API requests over the last 120 minutes is greater than or equal to 5000 milliseconds, this notification will be triggered.

## Notifications for other System Health dashboard events

You can configure notifications for not only the API Performance event, but also events from other System Health dashboards. These events include Payments Failures, HPM Attack, Workflow Performance, and so on. The notification configuration process for other events is similar to the process for the API Performance event. For all supported System Health events and event parameters, see [Standard events for Zuora Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).
