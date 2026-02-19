---
title: "State transitions for order line items, fulfillments, and orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-transitions-for-order-line-items-fulfillments-and-orders"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:04.367Z"
---

# State transitions for order line items, fulfillments, and orders

This article outlines the states and transitions for order line items, fulfillments, and orders, detailing their roles in non-subscription business models and lifecycle management.

Order line items are introduced in Orders to facilitate launching non-subscription business models in Zuora. Order line items represent non subscription based transactional charges, such as one-time fees, physical goods, or professional service charges. Fulfillments are subordinate objects attached to an order line item to track the shipment or fulfillment of the order line item. To support a series of business processes, states are introduced on orders, order line items, and fulfillments. These states are used for the following purposes:

-   Identify where an object is in its lifecycle.

-   Determine what actions can be performed on an object of a certain state; for example, if an order line item is complete it cannot be canceled.


The state of an order line item can be one of the following:

-   Executing

-   Booked

-   SentToBilling

-   Complete

-   Canceled


When the state of an order line item is set to `Booked` and the billing rule of the order line item is configured as `Trigger As Fulfillment Occurs` , fulfillments can be created and attached to an order line item. In this case, the state of an order line item can be one of the following:

-   Executing

-   Booked

-   Complete

-   Canceled


The state of a fulfillment can be one of the following:

The state of an order can be one of the following:

-   Executing

-   Complete

-   Canceled
