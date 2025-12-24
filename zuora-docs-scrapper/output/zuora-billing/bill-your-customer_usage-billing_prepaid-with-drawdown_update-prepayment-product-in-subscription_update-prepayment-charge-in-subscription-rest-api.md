---
title: "Update prepayment charge in subscription - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/update-prepayment-product-in-subscription/update-prepayment-charge-in-subscription---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:01.391Z"
---

# Update prepayment charge in subscription - REST API

Use the REST API to update a prepaid charge in a subscription, including changing the prepaid quantity and checking the updated balance.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to update the prepaid charge in a subscription. Determine the value of the field specific to the prepayment charge to be updated.

Sample request body: Update the prepaid quantity in a subscription from 10 to 20.

## Sample REST API request to update a prepayment charge in a subscription

Request: `POST /v1/orders`

Request Body: ... "orderActions": \[ { "type": "UpdateProduct", "updateProduct": { "ratePlanId": "4028818c7dc31247017dc36f40430113", "chargeUpdates": \[ { "chargeNumber": "C-00000014", "prepaidQuantity": 20 } \] } } \]

Once the order action is activated, for the remaining validity periods in the subscription term, the customer is granted 20 Million API calls valid to use each month on a use-it-or-lose-it basis. The prepaid total quantity is recalculated.

You can view the customer's prepaid balance through the Zuora UI or Data Query.
