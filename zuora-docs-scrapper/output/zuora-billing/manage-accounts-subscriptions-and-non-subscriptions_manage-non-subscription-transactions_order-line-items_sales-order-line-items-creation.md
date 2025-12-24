---
title: "Sales order line items creation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/sales-order-line-items-creation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:27.037Z"
---

# Sales order line items creation

This topic explains how to create and manage sales order line items and fulfillments in Zuora Billing, including options for using the UI or REST API.

You can create a sales order line item for your non subscription based transactional charges.

Optionally, you can create fulfillments to track the shipment of the sales order line item.

A fulfillment can be created to a sales order line item only when the billing rule of the order line item is configured as `Trigger As Fulfillment` `Occurs` and the order line item is in the `Booked` state.

A sales order line item is managed in Zuora Billing as an order line item of the `Sales` item category. A fulfillment is a subordinate object created to an order line item. The maximum number of fulfillments that can be created to an order line item is 100.

You can use one of the following ways to create a sales order line item with fulfillments:

-   In the Zuora UI, create an order, add a sales order line item to this order, and then add fulfillments to the order line item.

-   Use the Create an order API operation, and then use the Create fulfillments API operation.


## Use the Zuora UI

Depending on whether you want to create fulfillments to track the shipment of the sales order line item, select one of the following options:

-   To create a sales order line item without fulfillments from the UI, only perform Task 1: Create an order and add a sales order line item.
-   To create a sales order line item with fulfillments from the UI, perform the following tasks:
    -   Task 1: Create an order and add a sales order line item
    -   Task 2: Add fulfillments to the sales order line item
