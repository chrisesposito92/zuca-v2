---
title: "Amend a subscribed hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/amend-a-subscribed-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:32.378Z"
---

# Amend a subscribed hard bundle

This topic provides an outline about a subscribed hard bundle by updating the rate plan and managing optional component charges using the Orders REST API.

You can modify a subscribed hard bundle by using the UpdateProduct order action on the existing hard bundle rate plan and then by either adding or removing optional component charges via the Orders REST API.

## Adding optional charges

If a hard bundle is already subscribed, you can add optional charges that were not originally selected, for example if the end user wants to purchase additional add-ons.

Specify the `productRatePlanChargeId` in updateProduct > chargeOverrides.

-   For each charge to be added to the subscription, you can override its attributes in the same way as you add it using the create subscription or add product order action.

    Note:

    If an optional charge was subscribed and later removed, you cannot add it back. If a charge has been added to the hard bundle in the product catalog after the hard bundle has been subscribed, you can also add it to the subscription if needed. You cannot update the value of the optional field.
