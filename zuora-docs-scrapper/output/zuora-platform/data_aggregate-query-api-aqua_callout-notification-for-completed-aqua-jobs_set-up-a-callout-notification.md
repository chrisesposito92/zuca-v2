---
title: "Set up a callout notification"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/callout-notification-for-completed-aqua-jobs/set-up-a-callout-notification"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:07.590Z"
---

# Set up a callout notification

Perform the following steps to set up a notification. Remember only callout notification is supported.

1.  Navigate to in the left navigation menu.
2.  Click \+ Add New Notification .
3.  Create the notification step-by-step with the following information:

    |  | Configuration details |
    | --- | --- |
    | Step 1: Define Trigger | Click On An Event Occurrence . |
    | Step 2: Select Event | Select 2610 - AQUA Data Export Completion from . |
    | Step 3: Set Filters | Enter the unique ID of a data integration partner. This is the same partner name used for the incremental load with AQuA version 1.1. Only one notification can be configured for each partner. For stateful AQuA callouts, this field is required. For stateless AQuA callouts, this field can be null.Zuora highly recommends using the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices. |
    | Step 4: Set Delivery Options | From the Delivered By Callout list, select the callout template you just created. |
    | Step 5: Define Target Accounts | Select a communication profile.For more information, see Communication profiles . |
    | Step 6: Finalize Notification Details | Specify the following basic information:Name : The notification name.Description : The notification description.Active : Toggled on by default, indicating the notification will be sent when the AQUA Data Export Completion event occurs. |
    | Step 7: Review Notification | Review the notification settings. |

    For more information, see Create a notification.

4.  Click Done .
