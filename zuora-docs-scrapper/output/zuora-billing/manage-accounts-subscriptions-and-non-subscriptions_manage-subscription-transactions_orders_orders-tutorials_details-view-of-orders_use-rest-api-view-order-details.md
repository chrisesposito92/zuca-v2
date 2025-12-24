---
title: "Use REST API - view order details"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/details-view-of-orders/use-rest-api---view-order-details"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:35.440Z"
---

# Use REST API - view order details

Learn how to use the REST API to retrieve and view order details by utilizing the "Get an order" operation with a specific order number.

You can use the "Get an order" operation to view an order.

To view an order:

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | $OrderNumber | The order number of the order to view. For example, O-00000003 . |

2.  Use the Retrieve an order operation to view an order of a specific order number:

    | Request | GET /v1/orders/{$OrderNumber} |
    | --- | --- |


For a subscription created in the draft order, since the subscription is not actually created in the system and thus the subscription does not have the number, the `subscriptionNumber` field will not be shown in the response.
