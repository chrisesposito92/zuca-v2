---
title: "Update multiple order line items and generate billing documents at the same time"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/billing-documents-generation-for-order-line-items-and-fulfillments/update-multiple-order-line-items-and-generate-billing-documents-at-the-same-time"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:43.407Z"
---

# Update multiple order line items and generate billing documents at the same time

This article explains how to update multiple order line items and generate billing documents simultaneously using the Update order line items operation.

To update order line items and generate the billing document at the same time, use the Update order line items operation.

1.  Determine the following values for the `Update order line items` operation:

    -   `orderLineItemId`: The ID of the order line item to be updated. You can obtain the order line item ID by using the Retrieve an order operation or from the URI of the Order Line Item Details page in the UI.

    -   `itemState`: The state of the order line item. This field must be set to `SentToBilling` for the billing document to be generated.

    -   `billTargetDate`: The date when the order line item is to be billed.

    -   `runBilling`: Set this field in the processingOptions section to true to generate the billing document at the same time when you update the order line items.


2.  Use the `Update order line items` operation to update the order line items and generate the billing document. The following API provides an array of the order line item IDs to be updated and generates the billing document when updating the order line items. The state of all order line items is changed to `SentToBilling` and the bill target date is set to 2021-02-01.

    | Request | POST /v1/order-line-items/bulk |
    | --- | --- |
    | Request Body | { "processingOptions": { "runBilling": true, "billingOptions": { "targetDate": "2021-01-01" } }, "orderLineItems": [ { "id": "{{orderLineItemId}}", "itemState": "SentToBilling", "billTargetDate": "2021-02-01" } ] } |
