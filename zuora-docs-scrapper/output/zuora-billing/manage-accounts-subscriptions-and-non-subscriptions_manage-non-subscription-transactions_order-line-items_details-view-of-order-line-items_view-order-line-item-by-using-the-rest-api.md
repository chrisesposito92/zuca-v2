---
title: "View order line item by using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/details-view-of-order-line-items/view-order-line-item-by-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:21.021Z"
---

# View order line item by using the REST API

This topic explains how to retrieve and view the details of an order line item using the REST API.

Use the Retrieve an order line item operation to get the details of an order line item.

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | itemId | The ID of the order line item. For example, 4028fc827a0e48c1017a0e4dccc60002 . You can obtain the ID of an order line item from the order that includes the order line item by using the Retrieve an order operation or from the URI of the Order Line Item Details page in the UI. |

2.  Use the "Retrieve an order line item" operation to view the details of the order line item:

    | Request | GET /v1/order-line-items/{itemId} |
    | --- | --- |
