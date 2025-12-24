---
title: "Overview of Single Version Subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription/overview-of-single-version-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:24.372Z"
---

# Overview of Single Version Subscription

The Single Version Subscription feature simplifies subscription management by offering a single version for new customers and tenants, ensuring consistency and transparency through a clear change history and a consistent user experience.

The Single Version Subscription feature, only available to new customers and tenants, offers the following benefits:

-   Simplicity and clarity: With a single version, customers do not have to manage multiple versions of a subscription. This simplifies the subscription management process and reduces confusion.

-   Change history transparency: The introduction of the Change History object provides a clear record of all orders-related changes made to single version subscriptions. This transparency can help customers understand the evolution of the service and make informed decisions.

-   Consistent experience: A single version ensures that all customers have a consistent experience with the product or service, which is particularly important for brand consistency and user satisfaction.

-   Consistent UI experience: Users will benefit from a consistent look and feel. This uniformity helps in reducing the learning curve and ensures a seamless experience.

-   Revert Order order action: This new order action allows users to revert an order containing single version subscriptions.


Note:

-   Only subscriptions created through orders can be single version subscriptions. The Single Version Subscription feature is in the Early Availability phase. We are actively soliciting feedback from a small group of early users before releasing it as generally available. If you want to join this early availability program, submit a request at Zuora Global Support .

-   In the Early Availability phase, you can turn on this feature only for new customers and new tenants. Single version subscriptions and versioned subscriptions cannot coexist in the same tenant, which means you cannot turn on this feature in a tenant with versioned subscriptions.


## Change history

An object called Change History records the following orders-related changes to single version subscriptions.

The following tables list the change history available in UI. For more information, see View details of single version subscriptions . For change history available in API, see Subscription Change History .
