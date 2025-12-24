---
title: "Update one order line item and then create a bill run"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/billing-documents-generation-for-order-line-items-and-fulfillments/update-one-order-line-item-and-then-create-a-bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:40.894Z"
---

# Update one order line item and then create a bill run

This topic explains how to update a single order line item and generate a billing document using the Update an order line item operation.

To update a single order line item and then generate the billing document, use the Update an order line item operation.

1.  Determine the following values for the `Update an order line item` operation:

    -   `orderLineItemId`: The ID of the order line item to be updated. You can obtain the order line item ID by using the `Retrieve an order` operation or from the URI of the Order Line Item Details page in the UI.

    -   `itemState`: The state of the order line item. This field must be set to `SentToBilling` for the billing document to be generated.

    -   `billTargetDate`: The date when the order line item is to be billed. The subsequent bill run will pick up order line items based on this date.


2.  Use the `Update an order line item` operation to update the order line item state and bill target date appropriately. The following API updates the state of an order line item to `SentToBilling` and sets the Bill Target Date for the order line item to 2021-02-01.

    | Request | PUT /v1/order-line-items/{orderLineItemId} |
    | --- | --- |
    | Request Body | { "itemState": "SentToBilling", "billTargetDate": "2021-02-01" } |

3.  Use the `CRUD: Create a bill run` operation to create an ad hoc bill run.
