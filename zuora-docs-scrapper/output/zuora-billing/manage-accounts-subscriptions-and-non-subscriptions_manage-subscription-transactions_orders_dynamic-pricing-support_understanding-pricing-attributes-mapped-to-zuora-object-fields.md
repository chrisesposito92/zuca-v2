---
title: "Understanding pricing attributes mapped to Zuora object fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/understanding-pricing-attributes-mapped-to-zuora-object-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:56.425Z"
---

# Understanding pricing attributes mapped to Zuora object fields

This topic allows you to explore how dynamic pricing enables real-time price adjustments based on pricing attribute values.

## Mapped pricing attributes

For the pricing attribute that is mapped to a Zuora object field, Zuora retrieves its value automatically during list price lookup

-   The Orders module supports the following Zuora standard objects:

    -   account (mapped to Subscription owner account)

    -   account.soldtocontact (mapped to Subscription owner account default soldto contact)

    -   account.billtocontact (mapped to Subscription owner account default billto contact)

    -   subscription

    -   rateplan (also known as Subscription Rate Plan)

    -   paymentmethod (mapped to Subscription owner account default payment method)

-   At the beginning of order request processing, Zuora retrieves the attribute values from the existing Zuora objects automatically. If a new account or subscription is created via API, Zuora retrieves the values from the `newAccount` or createSubscription section in the Order payload; if a new subscription is created via UI, Zuora retrieves the values from the subscription information that the user enters.

    -   In the Orders UI, such attribute values are read-only

    -   During the order processing - For the pricing attribute mapped to a Zuora object field whose value will not be affected by the order, such as account, account.billtocontact, account.soldtocontact, account.paymentmethod, Zuora will not reload its value from those objects again.

    -   During the order processing - For the pricing attribute mapped to a Subscription object field, if its value has been updated by an order action, the order actions after this change will use the latest value.


This example illustrates how the changing pricing attribute value within an order could affect the list price.

Assuming rate plan charge A has a simple price table:

| Pricing Attribute Name: Subscription.CurrentTerm | List Price |
| --- | --- |
| =12 | $10/month |
| = 6 | $15/month |

Now create a new order to amend an existing subscription whose current term length is 12 months:

| Order Description | Pricing Attributes value used to retrieve list price | Charge A's list price |
| --- | --- | --- |
| Order Action 1: add product order action to subscribe to the rate plan with charge A | Subscription.CurrentTerm = 12 | $10/month |
| Order Action 2: terms and conditions order action to change the current term to 6 months | N/A | N/A |
| Order Action 3: add product order action to subscribe to the rate plan with charge A | Subscription.CurrentTerm = 6 | $15/month |
