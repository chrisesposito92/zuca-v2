---
title: "Add a prepayment product charge - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/add-prepayment-product-in-subscription/add-a-prepayment-product-charge---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:53.846Z"
---

# Add a prepayment product charge - REST API

Learn how to use the REST API to add a prepayment charge to a subscription, including determining specific field values and viewing the prepaid balance.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to add a prepayment charge to a subscription. Determine the values of the following fields specific to the prepayment charge and drawdown charge to be added:

-   Prepayment charge:

    -   `prepaidQuantity`

    -   `validityPeriodType`

-   Drawdown charge:

    -   `drawdownRate`


Sample request body: Add a one-time prepayment charge to an existing subscription.

## Sample REST API request to add a one-time prepayment charge to an existing subscription

Request: `POST /v1/orders`

Request Body: ... "orderActions": \[ { "type": "AddProduct", "addProduct": { "productRatePlanId": "4028818a7e2ef879017e327fb1ff0008", "chargeOverrides":\[ { "productRatePlanChargeId": "4028818a7e2ef879017e327fb276000a", "prepaidQuantity": 10, "validityPeriodType": "MONTH" } \] } } \]

You can view the customer's prepaid balance through the Zuora UI or Data Query.
