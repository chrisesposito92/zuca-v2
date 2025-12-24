---
title: "Working with Events and Notifications"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/working-with-events-and-notifications"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:52.721Z"
---

# Working with Events and Notifications

This article explains about situations where notifications are not received and explore workarounds to ensure notifications are delivered when working with events and subscriptions.

In either of the following situations, you cannot receive notifications:

-   If you create an amendment or subscription through UI, but the amendment or subscription is in draft or pending status.
-   When you use the `Create an event trigge`r API operation and the `baseObject` is one of the following and the `changeType` is `INSERT` , `UPDATE`, or `DELETE` .
    -   `RatePlan`
    -   `RatePlanCharge`
    -   `RatePlanChargeTier`
    -   `Subscription`

You can use the following workarounds to receive the notifications:

-   Create an activated amendment or subscription through API.
-   Enable Orders

Orders is now generally available.

If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see Orders Harmonization for more information.If you want to enable Orders, submit a request at Zuora Global Support .
