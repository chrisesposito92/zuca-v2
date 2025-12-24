---
title: "Add fulfillments to sales order line items through API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/fulfillments-addition-to-order-line-items/add-fulfillments-to-sales-order-line-items-through-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:49.900Z"
---

# Add fulfillments to sales order line items through API

This topic explains about adding fulfillments to sales order line items and generate invoices using the API.

Use the Create fulfillments operation to add fulfillments for the sales order line item and generate invoices for the fulfillments. Keep the following points in mind when you run the "Create fulfillments" operation:U

-   Determine the following fields and other required custom fields for the fulfillment:

    -   `fulfillmentDate`
    -   `quantity`
-   Use the `state` and `billTargetDate` fields to determine the fulfillments that are to be invoiced on the specified date. For a fulfillment to be invoiced, its state must be `SentToBilling`. When a bill run is created, it will pick up fulfillments to be invoiced based on the `billTargetDate` field.

-   Use the `processingOptions` nested field to indicate whether an invoice should be generated.


The following API request creates two fulfillments for the sales order line item and also runs billing at the same time.

| Request | POST /v1/fulfllments |
| --- | --- |
| Request Body | { "fulfillments": [ { "fulfillmentDate": "2022-01-01", "quantity": 5, "description": "fulfillment batch 1", "state": "SentToBilling", "billTargetDate": "2022-01-01", "orderLineItemId": "4028828c82819b74018286e02e041bd6", "fulfillmentType": "Delivery", "trackingNumber": "T-0009872", "carrier": "CarrierA", "fulfillmentSystem": "SystemA", "fulfillmentLocation": "LocationA", "externalId": "SRC-0987123" }, { "fulfillmentDate": "2022-01-02", "quantity": 5, "description": "fulfillment batch 2", "state": "SentToBilling", "billTargetDate": "2022-01-01", "orderLineItemId": "4028828c82819b74018286e02e041bd6", "fulfillmentType": "Delivery", "trackingNumber": "T-00098721", "carrier": "CarrierB", "fulfillmentSystem": "SystemB", "fulfillmentLocation": "LocationB", "externalId": "SRC-09871234" } ], "processingOptions": { "billingOptions": { "documentDate": "2022-01-02", "targetDate": "2022-01-02" }, "runBilling": true } } |
