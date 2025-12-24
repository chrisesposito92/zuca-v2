---
title: "Custom scheduled event overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/custom-scheduled-event-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:06.721Z"
---

# Custom scheduled event overview

Custom scheduled events are user-defined events that allow you to trigger notifications based on a daily schedule.

To define a custom scheduled event, you must specify the base object, base field, and scheduled time (hour and minute). Zuora evaluates each custom scheduled event at the scheduled time on a daily basis.

Once you have defined a custom scheduled event, you can specify a date condition (N days before or after) when creating a notification definition for this event. Zuora will send the notification based on the date in the base field of the custom scheduled event and the date condition in the notification definition.

You can manage custom scheduled events through the Zuora UI or the Custom scheduled events API operations.

## Evaluation and triggering strategy for custom scheduled events and notifications

Zuora evaluates each custom scheduled event and associated notification definitions at the scheduled time (the Hour and Minute) on a daily basis.

During the evaluation, Zuora compares today's date with the target date based on the Base Field, Days, and Condition. If they match, the notification is triggered. See [Walkthrough for creating a custom scheduled event and notification](/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/walkthrough-for-creating-a-custom-scheduled-event-and-notification) for an example of how to calculate the target date.

The date condition (N days before or after) is configured in notification definitions. In addition, you can specify custom filters to apply advanced conditions.

The following table lists evaluation and triggering-related configurations in custom scheduled events and notification definitions:

|  | Field | Description |
| --- | --- | --- |
| Custom scheduled event | Base Object | The object that the event is associated with. |
| Base Field | The date that the date condition in notification definitions is based on. The base field must be a date or timestamp formatted field on the base object. |  |
| Hour | The scheduled time (hour) at which the event and associated notifications are evaluated on a daily basis. |  |
| Minute | The scheduled time (minute) at which the event and associated notifications are evaluated on a daily basis. |  |
| Notification definition | Days | The date condition (number of days) that determines the day that the notification will be triggered. |
| Condition | The date condition (before or after) that determines the day that the notification will be triggered. |  |

## Base object and field for custom scheduled events

Each custom scheduled event must be associated with a base object and a date or timestamp formatted field from that object.

Custom scheduled events created on base objects, such as Accounting Code, do not have the context of a customer account, and the default communication profile of the tenant is used for notifications. For example, the Accounting Code object is set up in your Zuora tenant based on your corporate business rules. This does not vary or depend on any configuration of the account. Instead, accounting codes are settings on the system level. Therefore, no customer account is associated with this object and Zuora uses and localizes notification messages based on the default communication profile.

In contrast, custom scheduled events created on objects like Invoice have the context of a customer account, and thus the the communication profile specified in the account is used for notifications. Zuora sends localized data, such as date formatting, based on the communication profile associated with the account.

When creating custom scheduled events through API operations, use the `apiObject` field to specify the base object and the `apiField` field to specify the base field.

For a list of supported base objects, base fields, and their communication profile behavior, see [Supported base object and field for custom scheduled events](/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/supported-base-object-and-field-for-custom-scheduled-events).

## Limitations

Custom scheduled events have the following limitations:

-   A maximum of 1000 custom scheduled event triggers can be created.

-   The trigger for custom scheduled events is based on the localized default timezone of your tenant.
