---
title: "State-based quantity calculations for order line items and fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-based-quantity-calculations-for-order-line-items-and-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:53.676Z"
---

# State-based quantity calculations for order line items and fulfillments

This topic explains about state-based quantity calculations for order line items and fulfillments for order line items and fulfillments based on their states, including examples and general rules.

Zuora calculates the quantities for order line items and fulfillments based on their states. For more information about states, see State transitions for an order line item, fulfillment, and order .

This article describes how Zuora calculates quantities for order line items and fulfillments based on their states with examples.

## General rules for quantity calculations

The general rules are as follows:

-   The quantity of order line items or fulfillments is the sum of the values of the `quantityPendingFulfillment` and `quantityFulfilled` fields.

-   The following states of the order line items or of their fulfillments trigger the quantity change in the `quantityPendingFulfillment` and `quantityFulfilled` fields of the order line items:

    -   Booked

    -   SentToBilling (if the Booked state has been skipped)

    -   Complete (if the Booked state has been skipped)

-   The `SentToBilling` state of the sales order line item or of their fulfillments triggers the quantity change in the `quantityAvailableForReturn` field of the sales order line item.

-   The following states of the return order line items or of their fulfillments trigger the quantity change in the `quantityAvailableForReturn` field of the associated sales order line item:

    -   Booked

    -   SentToBilling (if the Booked state has been skipped)

    -   Complete (if the Booked state has been skipped)


The calculation logic differs slightly in the following types of order line items:

-   Sales order line item without fulfillments

-   Sales order line item with fulfillments

-   Return order line item without fulfillments

-   Return order line item with fulfillments
