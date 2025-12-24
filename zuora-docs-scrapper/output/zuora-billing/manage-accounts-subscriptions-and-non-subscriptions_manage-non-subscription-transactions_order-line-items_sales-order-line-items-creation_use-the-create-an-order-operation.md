---
title: "Use the Create an order operation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/sales-order-line-items-creation/use-the-create-an-order-operation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:36.000Z"
---

# Use the Create an order operation

This topic explains how to use the Create an order operation to add sales order line items, including setting required fields and understanding account ownership and fulfillment settings.

## Use the REST API

Depending on whether you want to create fulfillments to track the shipment of the sales order line item, select one of the following options:

-   To create a sales order line item without fulfillments through the REST API, only perform Task 1: Use the "Create an order" operation to create an order and add a sales order line item.
-   To create a sales order line item with fulfillments through the REST API, perform the following tasks:
    -   Task 1: Use the "Create an order" operation to create an order and add a sales order line item.
    -   Task 2: Use the "Create fulfillments" operation to add fulfillments for the sales order line item and generate invoices.

Use the Create an order operation to create an order line item and add a sales order line item. Keep the following points in mind when you run the "Create an order" operation:

-   Determine the following fields and other required custom fields for the sales order line item. Note that the default value for the `itemCategory` field is `Sales` , therefore you do not need to set the field for a sales order line item.

    -   `itemName`

    -   `itemType`

    -   `listPricePerUnit`

    -   `quantity`

-   The `existingAccountNumber` field specifies the invoice owner of the subscriptions and order line items in this order. The `ownerAccountNumber` field specifies the owner of the order line item, just as the subscription owner is the owner of a subscription. If you do not set the `ownerAccountNumber` field, the owner of the order line item is the same as the invoice owner.

-   To allow creating fulfillments for the order line item, the `itemState` field must be set to `Booked` and the `billingRule` field must be set to `TriggerAsFulfillmentOccurs` . For more information, see State transitions for an order line item, fulfillment, and order .


The following API request creates a sales order line item for an existing customer account.

| Request | POST /v1/orders |
| --- | --- |
| Request Body | { "existingAccountNumber": "AN_1660044119927", "orderDate": "2022-01-01", "description": "", "orderLineItems": [ { "ownerAccountNumber": "AN_1678833127890", "itemName": "LMS Device Fee", "itemType": "Product", "description": "webcam", "purchaseOrderNumber": "PO-12345678", "productCode": "P-0000001", "quantity": 10, "listPricePerUnit": 100, "transactionStartDate": "2022-01-01", "transactionEndDate": "2022-01-01", "soldTo": "4028fc828244a0ac018244dfc9a90bee", "itemState": "Booked", "billingRule": "TriggerAsFulfillmentOccurs" } ] } |

The following API request creates a sales order line item associated with a one-time charge for an existing customer account.

| Request | POST /v1/orders |
| --- | --- |
| Request Body | { "existingAccountNumber": "A00147327", "orderDate": "2024-01-06", "description": "", "orderLineItems": [ { "ownerAccountNumber": "A00147327", "itemType": "Fee", "quantity": 1, "productRatePlanChargeId": "86d4018d003f902baa0cd0ad21120000" } ] } |
