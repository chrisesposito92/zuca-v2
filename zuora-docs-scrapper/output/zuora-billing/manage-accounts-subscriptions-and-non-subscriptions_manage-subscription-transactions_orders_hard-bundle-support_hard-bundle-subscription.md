---
title: "Hard Bundle subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/hard-bundle-subscription"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:38.903Z"
---

# Hard Bundle subscription

This topic provides an overview on subscribing to hard bundle rate plans using order actions, including handling optional component charges via REST API.

You can subscribe to hard bundle rate plan using the same order actions as a normal rate plan, such as:

-   Create Subscription

-   Add Product

-   Change Plan


When subscribing to a hard bundle rate plan with optional component charges:

-   For each charge, you cannot override the value of the optional field

-   In order to add an optional component charge to the subscription, you must add it explicitly by specifying the Product Rate Plan Charge (PRPC) ID in the chargeOverrides section. If you do not include it in the chargeOverrides section, this optional component charge will not be subscribed automatically.

-   If a charge’s optional field is set to False, it will become a non-optional or mandatory charge and will be added to the subscription automatically. You cannot exclude it from the subscription.


Currently, subscribing to hard bundles and the ability to include optional component charges is only supported via REST API. If you subscribe to a hard bundle via Orders UI, all the charges are subscribed automatically.
