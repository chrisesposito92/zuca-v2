---
title: "Notifications"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/notifications"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:22.078Z"
---

# Notifications

This article provides an overview of notification behaviors in Orders Harmonization, detailing configuration adjustments and integration changes required for different Zuora releases.

This article introduces Orders Harmonization.

## General behaviors

The notification behaviors vary depending on when you enable Orders Harmonization. In some cases, you might want to adjust the configuration for notifications. If your system integration depends on notification callouts, when you replace Subscribe and Amend notifications with Orders notifications, you might need to change your integration accordingly for the Orders notification. See details below:

If your tenants have Orders Harmonization enabled before Zuora Release 2022.01.R3, the notification behaviors of your tenants are as follows:

-   For any subscription creation or amendment created through the Subscribe and Amend API or UI, the existing Zuora Billing notifications configured on your tenant will continue to work.
-   By default, both order and amendment notifications are triggered for any subscription creation, amendment, or order action. If you do not want duplicate notifications, Zuora recommends configuring only the order notifications and turning off the existing amendment notifications.

If your tenants have Orders Harmonization enabled as of or after Zuora Release 2022.01.R3, the notification behaviors of your tenants are as follows:

-   Only amendment notifications are triggered for amendments created through the Subscribe and Amend API or UI.
-   Only Order notifications are triggered for order actions created through the Create an order operation or Orders UI.
-   The amendment notifications are sent only to the subscription owner of a subscription. The order notifications are sent only to the invoice owner of a subscription.
-   To configure the Orders notifications, navigate to Extension Studio > Events & Notifications in the left navigation menu.

## Notification behaviors for auto-renewals

Keep the tenant in Orders Harmonization mode and do not re-enable Orders. Orders without Harmonization mode not only removes the access to Subscribe and Amend, but also requires you to make necessary integration changes, migrate historical amendment data, and test your use cases.

## Inbound Subscribe and Amend APIs

When Orders Harmonization is enabled, you will see the following expected behaviors:

-   A subscription suspended by Subscribe and Amend APIs can only be resumed by the Subscribe and Amend UI or APIs.
-   If the last version of a subscription is created through the Subscribe or Amend APIs, when this subscription gets an autorenewal, it is renewed through an amendment of the Renewal type. When the equivalent order is auto-generated, the description for this order is "Created by migration".
