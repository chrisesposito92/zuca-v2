---
title: "Notes and considerations"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/notes-and-considerations"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:40.069Z"
---

# Notes and considerations

This topic outlines the notes and considerations for dynamic pricing, order line items, and negotiated price tables in the Orders API and UI.

## Dynamic Pricing

-   We're still working on the following charge types and charge models. Currently we can't support subscribing such as dynamic pricing enabled charges via Orders API or UI:

    -   Charge Type: Order Line Item.

    -   Charge Models: Prepaid Drawdown, Minimum Commitment, Delivery Pricing.


Note:

The user can still create an Order Line Item by selecting an one time product rate plan charge, however the default list price instead of attribute based pricing is used.

-   The following operations will not trigger automatic list price re-lookup:

    -   Update a charge's pricing attribute values via updateProduct order action.

    -   Update a draft or scheduled order's order date.


-   We're still working on the following functionalities in the Orders UI:

    -   Update a charge's pricing attribute values via Update Product order action.

    -   Update a charge's pricing attribute values in a draft or schedule order.

    -   Edit order actions with dynamic pricing enabled charges (createSubscription, addProduct) in Review Order page - for order actions involving DP charges.


Note:

The edit icon in the Order Actions tab is hidden.

## Negotiated Price Table

-   We cannot create a negotiated price table for the following charge types because such charges' pricing attribute values should be known when the order is created.

    -   One-time

    -   Recurring charge types

-   The negotiated price table is designed for usage charges whose sales price depends on dynamic usage records. When you place an order for these usage charges, you cannot determine the sales price in advance. In such cases, you must contact [Zuora Global Support](https://support.zuora.com/auth/v3/signin?brand_id=825826&locale=en-us&return_to=https%3A%2F%2Fsupport.zuora.com%2Fhc%2Fen-us&role=end_user) to enable this feature so that you can create the negotiated price table or rate cards.

    Note:

    Note:

    This feature is currently in the

    Limited Availability phase

    . It was originally built to support specific customer use cases and is now being actively enhanced to cover a broader range of scenarios based on the feedback. Its functionality and behavior may change over time as new improvements are delivered.


-   We're still working on the following functionalities:
    -   Supporting dynamic usage charge.

    -   Creating/updating negotiated price table entries via Orders UI.

    -   Viewing negotiated price table entries on the Subscription details Page.
