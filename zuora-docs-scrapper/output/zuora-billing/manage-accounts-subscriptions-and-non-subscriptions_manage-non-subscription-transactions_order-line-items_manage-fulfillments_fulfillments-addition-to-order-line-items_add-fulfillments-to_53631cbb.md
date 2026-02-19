---
title: "Add fulfillments to return order line items through API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/fulfillments-addition-to-order-line-items/add-fulfillments-to-return-order-line-items-through-api"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:04.710Z"
---

# Add fulfillments to return order line items through API

This topic provides an overview on creating and managing fulfillments to return order line items using the API by executing the "Create fulfillments" operation.

Use the Create fulfillments operation to create a return fulfillment. Keep the following points in mind when you run the "Create fulfillments" operation:

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

| Request | POST /v1/fulfllments |
| --- | --- |
| Request Body | { "fulfillments": [ { "fulfillmentDate": "2022-01-02", "quantity": 2, "description": "return fulfillment", "state": "SentToBilling", "billTargetDate": "2022-01-02", "orderLineItemId": "4028828c82819b74018286e02e041bdc", "fulfillmentType": "Return", "trackingNumber": "T-0009874" } ] } |
