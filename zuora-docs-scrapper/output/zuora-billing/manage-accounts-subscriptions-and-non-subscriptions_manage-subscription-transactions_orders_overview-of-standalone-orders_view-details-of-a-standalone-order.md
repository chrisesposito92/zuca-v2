---
title: "View details of a standalone order"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders/view-details-of-a-standalone-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:19.123Z"
---

# View details of a standalone order

This topic explains how to view details of a standalone order using the "Retrieve an order" operation.

You can use the Retrieve an order operation to view a standalone order.

To view a standalone order:

1.  Determine the value of the following field:

    | Variable | Description |
    | --- | --- |
    | orderNumber | The order number of the order to view. For example, O-00000003 . |

2.  Use the "Retrieve an order" operation to view an order of a specific order number:

    | Request | GET /v1/orders/{$OrderNumber} |
    | --- | --- |
