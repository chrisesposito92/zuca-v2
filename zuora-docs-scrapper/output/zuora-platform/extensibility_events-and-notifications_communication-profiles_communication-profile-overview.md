---
title: "Communication profile overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/communication-profiles/communication-profile-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:21.832Z"
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
