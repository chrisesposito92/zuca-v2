---
title: "Delete an order using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/orders-deletion/delete-an-order-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:32.350Z"
---

# Delete an order using the REST API

This topic explains how to use the REST API to delete an order by specifying the order number.

You can use the "Delete order" operation to remove an order.

To remove an order:

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | $OrderNumber | The order number of the order to delete. For example, O-00000003 . |

2.  Use the "Delete order" operation to delete an order of a specific order number:

    | Request | DELETE /v1/orders/{$OrderNumber} |
    | --- | --- |
