---
title: "Cancel a draft order using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/draft-orders-cancelation/cancel-a-draft-order-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:14.312Z"
---

# Cancel a draft order using the REST API

This topic explains how to cancel a draft order using the REST API by determining necessary variables and executing the cancel operation.

1.  Determine the value of the following variables:

    | Variable | Description |
    | --- | --- |
    | $OrderNumber | The order number of the order to cancel. For example, O-00000003 . |
    | $CancelReason | The reason to cancel the draft order, for example, test cancel. |

2.  Use the Cancel an order operation to cancel the order that is in the `Draft` status:

| Request | PUT/v1/orders/{orderNumber}/cancel |
| --- | --- |
| Request Body | { "cancelReason": "$CancelReason" } |
