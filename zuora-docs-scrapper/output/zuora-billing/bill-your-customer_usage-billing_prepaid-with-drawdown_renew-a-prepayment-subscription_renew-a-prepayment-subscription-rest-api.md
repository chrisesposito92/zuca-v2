---
title: "Renew a prepayment subscription - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/renew-a-prepayment-subscription/renew-a-prepayment-subscription---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:19.216Z"
---

# Renew a prepayment subscription - REST API

Learn how to use the REST API to renew a prepayment subscription.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to renew a subscription.

Sample request body: Renew a subscription for another 12 months with the new term start date as 2023-01-01.

## Sample REST API request to renew a prepayment subscription

Request: `POST /v1/orders`

Request Body: "orderActions": \[ { "type": "RenewSubscription", "triggerDates": \[ { "name": "ContractEffective", "triggerDate": "2023-01-01" }, { "name": "ServiceActivation", "triggerDate": "2023-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2023-01-01" } \]

Once the order action is activated, your customer is granted 10 million API calls valid to use each month from 2023-01-01 to 2023-12-31 on a use-it-or-lose-it basis.

You can view the customer's prepaid balance through the Zuora UI or Data Query.
