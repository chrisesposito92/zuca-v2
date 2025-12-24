---
title: "Revert an order using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription/orders-revert/revert-an-order-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:39.683Z"
---

# Revert an order using the REST API

Learn how to revert an order using the REST API by determining variable values and executing the revert operation.

| Variable | Description |
| --- | --- |
| $OrderNumber | The order number of the order to revert. For example, O-00000003. |
| $OrderDate | The order date when order is booked in YYYY-MM-DD format. |

1.  Determine the values of the following variables:
2.  Use the Revert an order operation to revert the order that is in the completed status:

| Request | PUT/v1/orders/{orderNumber}/revert |
| --- | --- |
| Request Body | {"orderDate": "2000-01-23"} |

The status of the order in the response of this operation is still `Completed` . However, if you retrieve the order through the following order operations, the status is `Reverted` .

-   Retrieve an order

-   List orders

-   List orders of a subscription owner

-   List orders by subscription number

-   List orders of an invoice owner

-   List pending orders by subscription number
