---
title: "Create a return order line item with or without fulfillments using the rest api"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-return/create-a-return-order-line-item-with-or-without-fulfillments-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:09.295Z"
---

# Create a return order line item with or without fulfillments using the rest api

This topic explains about creating a return order line item using the REST API, with options for fulfillments based on your requirements

Depending on whether you want to create fulfillments, select one of the following options:

-   If you want to create a return order line item without fulfillments, perform the Create an order operation.

-   If you want to create a return order line item with fulfillments, perform the following operations sequentially.


Use the `Create an order` operation to create a return order line item. Keep the following points in mind when you run the `Create an order` operation:

-   Determine the following fields and other required custom fields for a return order line item:

    -   `existingAccountNumber`: This must be set to the order account that owns the sales order line item to return.

    -   `category`: This must be set as `Return` for an order to contain the return order line item.

    -   `itemName`: The name of the return order line item

    -   `itemCategory`: This must be set as Return for a return order item.

    -   `itemState`: State of the return order line item. Valid values are `Executing`, `Booked`, `Sent To Billing`, `Complete`, and `Canceled`. By default, the starting state of an order line item is `Executing`. If you want to create fulfillment on the return order line item, set this field to `Booked`.

-   `originalOrderNumber`: the order number of the order containing the sales order line item to return

-   `originalOrderLineItemNumber`: the order line item number of the sales order line item to return

-   `quantity`: The quantity you are to return for the original sales order line item. The quantity to return must be less than or equal to the quantity of the original sales order line item.

-   `billingRule`: Specify this field to `TriggerAsFulfillmentOccurs` to allow you to create fulfillments on the return order line item and generate billing documents for the fulfillments.


The following API request creates a return order line item from an existing sales order line item and allows you to create fulfillments on the return order line item:

| Request | POST /v1/orders |
| --- | --- |
| Request Body | { "existingAccountNumber": "AN_1660044119927", "orderDate": "2022-01-01", "category": "Return", "orderLineItems": [ { "itemName": "Return Item", "itemCategory": "Return", "originalOrderNumber": "O-000001", "originalOrderLineItemNumber": "1", "quantity": 2, "transactionStartDate": "2022-01-01", "transactionEndDate": "2022-01-01", "itemState": "Booked", "billingRule": "TriggerAsFulfillmentOccurs" } ] } |

Use the `Create fulfillments` operation to create a return fulfillment. Keep the following points in mind when you run the `Create fulfillments` operation:

-   Determine the following fields and other required custom fields for a return order line item:

    -   `fulfillmentType`: The value should be `Return`.

    -   `fulfillment date`: The date of the fulfillment.

    -   `Quantity`: The quantity of the fulfillment items to be returned. The value must be less than or equal to the value in the `quantityPendingFulfillment`field.

    -   `State`: State of the fulfillment. Valid values are `Executing`, `Booked`, `Sent To Billing`, `Complete`, and `Canceled`.

    -   `orderLineItemId`: Specify the ID of the return order line item on which you want to create the fulfillments.

-   If you want to generate the invoice for the fulfillment of the return order line item, you need to further consider the following:

    -   Use the `State` and `billTargetDate` fields to determine that the fulfillments can be invoiced on the specified billing target date. Credit memos are generated for fulfillments if you have enabled the Invoice Settlement feature; otherwise, negative invoices are generated. For the fulfillment to be invoiced, its state must be `SentToBilling`. When a bill run is created, it picks up fulfillments to be invoiced based on the `billTargetDate` field.

    -   Use the `processingOptions` field to determine whether a billing document should be generated and whether payment should be collected along with the order creation.


The following API request creates a fulfillment on the return order line item:

| Request | POST {{host}}/apps/v1/fulfillments |
| --- | --- |
| Request Body | { "fulfillments": [ { "fulfillmentDate": "2022-01-02", "quantity": 2, "description": "return fulfillment", "state": "SentToBilling", "billTargetDate": "2022-01-02", "orderLineItemId": "4028828c82819b74018286e02e041bdc", "fulfillmentType": "Return", "trackingNumber": "T-0009874" } ] } |
