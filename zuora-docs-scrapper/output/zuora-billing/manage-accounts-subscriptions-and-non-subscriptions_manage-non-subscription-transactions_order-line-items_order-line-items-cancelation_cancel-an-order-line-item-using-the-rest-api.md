---
title: "Cancel an order line item using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-cancelation/cancel-an-order-line-item-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:39.849Z"
---

# Cancel an order line item using the REST API

This topic explains about canceling an order line item using the REST API by updating the item state to Canceled.

Use the Update an order line item operation to cancel an order line item. Use the Update order line items operation to cancel multiple order line items at once. You must first determine the following field values for this operation:

-   itemId: The ID of the order line item to be canceled. You can obtain the ID of an order line item from the order that includes the order line item by using the Retrieve an order operation or from the URI of the Order Line Item Details page in the UI.

-   itemState: The state of the order line item. Set this field to the Canceled to cancel the order line item immediately.


| Request | PUT /v1/order-line-items/{itemId} |
| --- | --- |
| Request Body | { "itemState": "Canceled", "billTargetDate": "2021-02-01" } |
