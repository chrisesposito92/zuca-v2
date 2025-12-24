---
title: "Remove a prepayment product from a subscription - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/remove-a-prepayment-product-from-a-subscription/remove-a-prepayment-product-from-a-subscription---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:24.498Z"
---

# Remove a prepayment product from a subscription - REST API

Learn how to use the REST API to remove prepayment products from an existing subscription.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to remove prepayment products from an existing subscription.

Sample request body: Remove a prepayment product from an existing subscription from 2022-07-01.

## Sample REST API request to remove prepayment products from an existing subscription

Request: `POST /v1/orders`

Request Body: "orderActions":\[ { "type":"RemoveProduct", "triggerDates":\[{ "name":"ContractEffective", "triggerDate":"2022-07-01" }, { "name":"ServiceActivation", "triggerDate":"2022-07-01" }, { "name":"CustomerAcceptance", "triggerDate":"2022-07-01" } \], "removeProduct":{ "ratePlanId":"2c98903d7e27f4e8017e296c0b6800f7" } } \]

Once the order action is activated, the 1 million API calls included in the original subscription are removed.

You can view the customer's prepaid balance through the Zuora UI or Data Query.
