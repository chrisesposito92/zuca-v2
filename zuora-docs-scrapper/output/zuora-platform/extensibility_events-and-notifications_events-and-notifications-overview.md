---
title: "Events and Notifications overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/events-and-notifications-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:08.185Z"
---

# Events and Notifications overview

The Events and Notifications feature enables automatic delivery of notifications triggered by standard, custom, or scheduled events, using customizable and reusable templates to meet your business needs.

Zuora supports two types of notifications: email notifications, which are sent from Zuora's email server or your own SMTP server, and callout notifications, which deliver information to external web services.

## Basic concepts of Events and Notifications

The following are basic concepts of the Events and Notifications feature:

-   Event: An event is a significant system occurrence that can trigger a notification. For example, an event occurs when a subscription is created. Zuora supports several event types, such as standard events and custom events. See the following sections on this page for more details on each supported event type.

-   Email and callout template: A template defines the delivery details of a notification and can be reused across multiple notification definitions. Zuora supports two template types, each corresponding to a different notification type:

    -   Email templates specify the details of email notifications, such as the sender, recipients, email subject, and email body.

    -   Callout templates specify the details of callout notifications, such as the HTTP method, request URL, and request body.


-   Notification definition: A notification definition specifies how and when a notification is triggered and delivered by tying together an event, filtering logic, email or callout templates, and communication profiles. When an event occurs, Zuora evaluates all active notification definitions associated with that event and triggers the corresponding notifications. You can configure a notification definition to send an email, a callout, or both.

-   Notification: A notification is the actual message sent to the recipient. Zuora supports two types of notifications:

    -   Email notifications are delivered via email. They can be sent from Zuora's email server or from your own SMTP server.

    -   Callout notifications are HTTP requests sent to external web services, also known as webhooks.


-   Communication profile: A communication profile defines which notifications are sent to which customer accounts. You can use communication profiles to send different sets of notifications to different groups of customers, based on their business needs or preferences.


## User permissions for Events and Notifications

To view or manage Events and Notifications data through the UI or API, such as notification definitions, event triggers, email or callout templates, communication profiles, or notification histories, you must have the appropriate platform user permissions:

-   Events & Notifications View Access : Allows you to view data in the UI or via API operations of the GET type.

-   Events & Notifications Manage Access : Allows you to create, update, or delete data in the UI or via API operations of the POST, PUT, or DELETE types.

-   Events & Notifications Resend Access : Allows you to resend notification histories in the UI or via the resend notification history API operations. For more information about user roles and permissions, see [User roles](/zuora-platform/system-management/administrator-settings/user-roles).


## Supported event types

The following table describes the supported event types in Zuora:

| Event type | Description | Created by | Editable? |
| --- | --- | --- | --- |
| Standard event | Standard events are pre-defined business events for Zuora Billing, Zuora Payment, Zuora Finance, and Zuora Central Platform.For more information, see Standard event overview. | Zuora | No |
| Custom event | You can define a custom event by specifying a base object and trigger condition.Custom events are triggered when the base object changes and the trigger condition is satisfied, and Zuora will send notifications associated with the triggered custom event.For more information, see Custom event overview. | Tenant users | YesFor more information, see the following pages:In Zuora UI: Create a custom eventThrough the REST API: Custom event triggers |
| Zuora custom event | Zuora custom events are pre-defined business events for Zuora Orders and other features.For more information, see Zuora custom event overview. | Zuora | No |
| Custom scheduled event | You can define a custom scheduled event by specifying a base object, base field, and scheduled time (hour and minute).Zuora evaluates custom scheduled events and associated notifications on a daily basis and will send the notification if the date and time match the custom scheduled event and notification settings.For more information, see Custom scheduled event overview. | Tenant users | YesFor more information, see the following pages:In Zuora UI: Create a custom scheduled eventThrough the REST API: Custom scheduled events |

## Note

Zuora notification system processes the events in the same order in which they are triggered. The timing and delivery of notifications can still vary based on factors such as retries, concurrency, and network latency. But Zuora guarantees the best performance possible with the right performance boosters and tuning.
