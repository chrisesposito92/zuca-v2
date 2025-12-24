---
title: "Finalize notification details"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/finalize-notification-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:54.150Z"
---

# Finalize notification details

Learn how to specify basic information and additional settings when creating a notification definition.

Complete [Define target accounts](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/define-target-accounts).

1.  Specify the following information in the Basic Information section:

    -   Name

    -   Description

    -   Active: Switch this toggle to activate or deactivate the notification. Zuora does not send notifications that are inactive.


2.  Optional: From the Associated Account list in the Additional Settings section, select the account on which the histories of this notification will be displayed. The associated account does not enforce where the merge fields come from.

    -   Account: the primary customer account related to the notification. It is also the default value.

    -   Parent Account: the parent account of the primary account referenced above. This option can take effect only if you have the [Customer Hierarchy](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts) feature enabled.

    -   Subscription Owner Account: the account associated with the subscription. This option is available only if the base object of the related event of the notification is Order Action.


3.  Click Next.

See [Review notification](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/review-notification).
