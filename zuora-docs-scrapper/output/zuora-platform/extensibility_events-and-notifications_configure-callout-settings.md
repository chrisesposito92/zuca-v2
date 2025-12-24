---
title: "Configure callout settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-callout-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:07.471Z"
---

# Configure callout settings

Learn how to configure callout settings, such as the number of attempts.

1.  Navigate to in the left navigation menu.
2.  Click the Settings tab.
3.  Click Edit in the Callout Settings section.
4.  Set values for the following parameters:

    -   Maximum Number of Delivery Attempts: Specifies the number of times a callout will be tried.

        -   Default value: 3

        -   Maximum value: 5


    -   Minimum Interval between Delivery Attempts: Specifies the number of minutes between callout attempts.

        -   Default value: 30

        -   Maximum allowed minutes: 1440 (which is, 24 hours)


    -   Confirm success by parsing response content: Controls how Zuora determines the success or failure of callouts to your system. If enabled, Zuora parses the callout response body when the HTTP response code is 200 and the Content-Type header is set to application/json. Before you enable this option, you must modify your system to include the `success` field in the response body. Click What does...? for more information.

    -   For custom event triggered callouts, send empty strings as "null": With this setting enabled, all empty strings in callouts triggered by custom events are returned as "null". This setting applies not only to custom events created by you in your Zuora tenant, but also to pre-defined custom events created by Zuora, such as Order Processed or Order Action Processed. Note that Zuora recommends that you set returned empty strings as "null" for consistency with standard callout notifications.


5.  Click Save.
