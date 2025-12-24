---
title: "Amendment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:55.919Z"
---

# Amendment

The Amendment object holds the changes that you want to make to the relevant Subscription object, including its RatePlan, RatePlanCharge, and RatePlanChargeTier.

Amendments change subscriptions. When a customer needs to make a change to a subscription, you make that change through an amendment. Common changes include the following:

-   Change the terms and conditions of a contract.

-   Add a product to, or remove of product from, a subscription.

-   Update an existing product, such as changing the quantity.

-   Renew a subscription on the autorenewal date or before.

-   Cancel a subscription, or transfer to another owner (can be also be done directly on a subscription without an amendment)

-   Suspend an active subscription. (This feature is in Limited Availability.)

-   Resume a suspended subscription. (This feature is in Limited Availability.)


## Supported calls

You can use this object with the following calls:

-   amend()

-   create()

-   query()

-   update()

-   delete()
    Note: Invoiced amendments cannot usually be deleted. One exception to this rule is auto-renew amendments. You can delete the last auto-renew amendment even if an invoice has been generated.


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Add a product to the subscription - set `Type` to `NewProduct`

-   Update information about a product's rate plan charge - set `Type` to `UpdateProduct`

-   Remove a product or part of a product from a subscription - set `Type` to `RemoveProduct`

-   Change the terms and conditions of the subscription - set `Type` to `TermsAndConditions`

-   Change the owner of the subscription set `Type` to `OwnerTransfer`

-   Renew a subscription - set `Type` to `Renewal`

-   Cancel a subscription - set `Type` to `Cancellation`

-   Suspend a subscription (This feature is in Limited Availability.) set `Type` to `SuspendSubscription`

-   Resume a subscription (This feature is in Limited Availability.) set `Type` to `ResumeSubscription`
