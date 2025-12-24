---
title: "Update a draft order and save the updated draft order using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/orders-saved-as-draft-orders/update-a-draft-order-and-save-the-updated-draft-order-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:51.365Z"
---

# Update a draft order and save the updated draft order using the REST API

This topic explains how to update and save a draft order using the REST API when the order is in Draft status.

When an order is in `Draft` status, you can update the draft order and save the updated draft order as follows:

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | $OrderNumber | The order number of the order to update. For example, O-00000003 . |

2.  Update the order that is in the `Draft` status. The following example shows how to update an existing draft order that adds a new product to an existing subscription `A-S00000001` . The update is to change the product rate plan ID to a new value `4028b2e6811f5f5f01811f818a4209ec` through the Add Product order action.

| Request | PUT/v1/orders/{orderNumber} |
| --- | --- |
| Request Body | { "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "addProduct": { "productRatePlanId": "4028b2e6811f5f5f01811f818a4209ec" }, "type": "AddProduct", "triggerDates": [ { "triggerDate": "2020-02-01", "name": "ServiceActivation" }, { "triggerDate": "2020-02-01", "name": "CustomerAcceptance" }, { "triggerDate": "2020-02-01", "name": "ContractEffective" } ] } ], "subscriptionNumber": "A-S00000001" } ], "orderDate": "2020-01-01" } |

To preview invoices for the new subscription, use the Preview order operation.
