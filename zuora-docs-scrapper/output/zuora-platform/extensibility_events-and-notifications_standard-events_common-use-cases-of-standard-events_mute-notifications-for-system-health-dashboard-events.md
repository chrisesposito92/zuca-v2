---
title: "Mute notifications for System Health dashboard events"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/standard-events/common-use-cases-of-standard-events/mute-notifications-for-system-health-dashboard-events"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:28.818Z"
---

# Mute notifications for System Health dashboard events

Learn how to stop triggering notifications for particular System Health dashboard events.

Active notifications for System Health dashboard events ensure you get notified with email or callout notifications when your system metrics exceed the pre-defined threshold. For example, Zuora will trigger the System Health API Failure notification if the number of failed API requests within a specified time range exceeds the threshold. However, you might want to stop triggering some notifications for a period of time if you have already noticed the errors. You can leverage the mute parameters of System Health events to achieve this.

After specifying the mute parameters for a notification, Zuora will mute this notification for a designated duration after the notification has been triggered a certain number of times.

To mute notifications for System Health dashboard events, perform the following steps:

1.  Navigate to in the left navigation menu.

2.  Find the notification you want to mute from the list, and then click the Edit icon ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjY0MDI2NiwianRpIjoiODQ1NzQ1ZjE4Zjk1NDc1NzgzOWQ0NzE4NzFlYjAzOTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YvwtOPEOFCV2cr6YAVurTb4zyXrvDLeaIVHvm38phU0).

3.  In the Edit Notification Definition dialog, specify the following fields in the Custom Filter(s) section:
    -   Mute Active: true

    -   Mute Limit: the number of times Zuora will trigger this notification before muting it

    -   Mute Hour: the duration (in hours) for which Zuora will mute this notification

4.  Click Save.

For example, suppose that you have updated the System Health API Failure notification with the following settings:

-   Mute Active: true

-   Mute Limit: 5

-   Mute Hour: 1


After triggering this notification five times, Zuora will mute it for one hour, regardless of how many times the API Failure event appears during this time. When one hour passes, Zuora resets the counter for total triggering times, and will trigger this notification at the next appearance of the API Failure event.

The following diagram illustrates this muting process:

Figure 1.

![Mute notifications for the System Health API Failure event](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9eeff0f3-b77d-4d6a-9dad-51803304d5f6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjllZWZmMGYzLWI3N2QtNGQ2YS05ZGFkLTUxODAzMzA0ZDVmNiIsImV4cCI6MTc2NjY0MDI2NiwianRpIjoiMTUyZmNmNjU3NzRlNDNlYWE5NjcxZmU5NjI3ZGE3Y2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Geq8aOKbosOxzxVzThfOFfjUzLhQhHRJGbZ3d3mJFcs)

Additionally, notifications for the following System Health events are triggered on a job basis:

-   Bill Preview Run Long Running

-   Bill Run Long Running

-   HPM Attack

-   Journal Run Long Running

-   Payment Run Long Running

-   Trial Balance Long Running

-   Workflow Task Failures


For these events, the mute parameters are separately handled against each job.

For example, when evaluating the Bill Run Long Running event, if the bill run JobA and JobB both exceed the execution time threshold, Zuora will trigger the System Health Bill Run Long Running notification twice.

Suppose that you have updated the notification with the following settings:

-   Mute Active: true

-   Mute Limit: 5

-   Mute Hour: 1


After triggering the notification for JobA exceeding the execution time threshold five times, Zuora will stop sending notifications for JobA in the next hour. However, if JobB exceeds the execution time threshold in the next hour, Zuora will trigger the notification because Zuora counts the triggering time of each job separately.

The following diagram illustrates the triggering process of the System Health Bill Run Long Running notification for two bill run jobs:

Figure 2.

![Mute notifications for the Bill Run Long Running event](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4f82cf64-7a35-4b67-8bcf-ad4550fad4ed?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRmODJjZjY0LTdhMzUtNGI2Ny04YmNmLWFkNDU1MGZhZDRlZCIsImV4cCI6MTc2NjY0MDI2NiwianRpIjoiZjNlMTVkZjU5YzNkNGFiOTkxYjY5NjFjNWM2NjZmYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xbQ8oPUl9klxl9TT2V9yNlXniVmY-vGdMUMwk1_MDTE)
