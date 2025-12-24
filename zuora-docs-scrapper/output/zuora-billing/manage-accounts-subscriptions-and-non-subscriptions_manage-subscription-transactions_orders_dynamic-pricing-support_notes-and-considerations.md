---
title: "Notes and considerations"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/notes-and-considerations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:09.007Z"
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


-   We're still working on the following functionalities:
    -   Supporting dynamic usage charge.

    -   Creating/updating negotiated price table entries via Orders UI.

    -   Viewing negotiated price table entries on the Subscription details Page.
