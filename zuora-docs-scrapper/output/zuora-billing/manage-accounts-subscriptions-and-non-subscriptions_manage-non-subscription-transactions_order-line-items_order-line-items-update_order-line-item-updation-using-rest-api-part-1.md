---
title: "Order line item updation using REST API (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-update/order-line-item-updation-using-rest-api-part-1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:29.555Z"
---

# Order line item updation using REST API (Part 1)

This topic explains how to update an order line item using the REST API, including determining required fields and understanding editable states.

Use the Update an order line item operation to update an order line item. Keep the following points in mind when you run the "Update an order" operation:

-   Determine the required field "itemId" and other required custom fields for the order line item.

-   The fields of an order line item are only editable in certain states, depending on the "itemState" field. See the field description for the Update an order line item operation.


The following API request updates an existing order line item without fulfillment in an order.

| Request | PUT /v1/order-line-items/{itemId} |
| --- | --- |
| Request Body | { "itemName": "LMS Training Fee", "itemType": "Product", "description": "webcam", "purchaseOrderNumber": "PO-12345678", "productCode": "P-0000001", "quantity": 10, "amountPerUnit": 499, "listPricePerUnit": 500, "transactionStartDate": "2021-02-01", "transactionEndDate": "2021-02-01", "itemState": "SentToBilling", "billTargetDate": "2021-02-01" } |
