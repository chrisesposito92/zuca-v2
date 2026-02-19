---
title: "Communication profile overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/communication-profiles/communication-profile-overview"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:54.074Z"
---

# Communication profile overview

Communication profiles allow you to send event-driven notifications to targeted customer accounts.

Each customer account is associated with one communication profile. You can create communication profiles and assign notifications to them. When an event occurs, Zuora sends email and callout notifications defined on this event to customer accounts associated with the corresponding communication profile.

For example, suppose that you want to send notifications to different groups of customers under the following circumstances:

-   Send your Business Edition customers an email notification when their credit card payment is declined.

-   Send your Enterprise Edition customers an email notification when their subscription is 30 days from renewal.


You can create a communication profile called Enterprise and another called Business with specific email notifications for each customer group.

## Default communication profile

Zuora provides a default communication profile with built-in notifications. You can also create new communication profiles to meet your business needs. The following table describes the differences between the default and other communication profiles.

|  | Default communication profile | Other communication profiles |
| --- | --- | --- |
| Editable | Yes (cannot be deleted) | Yes |
| Allow notifications for tenant-level events (such as Bill Run Completion and Import Processed) | Yes | No |

## Best practices for communication profiles

The following table describes best practices for configuring communication profiles for different scenarios.

| Scenario | Recommended configuration |
| --- | --- |
| For a specific event, send notifications to all customers using the same template. | Use the default communication profile or create a new one if needed, and assign it to all customer accounts. |
| For a specific event, send notifications to customers using templates tailored to their customer groups. | Create multiple communication profiles and assign the appropriate profile to customer accounts in each group. |

In addition, when events are triggered, you can override the communication profile in real time. For more information, see [Flexible communication profile](/zuora-platform/extensibility/events-and-notifications/communication-profiles/flexible-communication-profile).
