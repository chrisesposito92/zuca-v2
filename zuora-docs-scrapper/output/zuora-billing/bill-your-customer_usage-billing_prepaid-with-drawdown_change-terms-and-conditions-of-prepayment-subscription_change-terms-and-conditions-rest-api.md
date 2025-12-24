---
title: "Change terms and conditions - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/change-terms-and-conditions-of-prepayment-subscription/change-terms-and-conditions---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:09.169Z"
---

# Change terms and conditions - REST API

Learn how to use the REST API to change the terms and conditions of a subscription, including modifying contract dates and viewing the prepaid balance.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to change the terms and conditions of a subscription.

Sample request body: Original subscription ends on 2022-12-31, shorten it by 3 months to end on 2022/09/30.

## Sample REST API request to change the terms and conditions of a subscription

Request: `POST /v1/orders`

Request Body: ... "orderActions": \[ { "type": "TermsAndConditions", "triggerDates": \[ { "name": "ContractEffective", "triggerDate": "2022-01-01" }, { "name": "ServiceActivation", "triggerDate": "2022-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2022-01-01" } \], "termsAndConditions": { "lastTerm":{ "startDate":"2022-01-01", "period": 9, "periodType": "Month", "termType": "TERMED" } } } \]

Once the order action is activated, the 30 million API calls that would be granted to the customer for the 3 validity periods (from 2022-10-01 to 2022-10-31, from 2022-11-01 to 2022-11-30, from 2022-12-01 to 2022-12-31) are removed.

You can view the customer's prepaid balance through the Zuora UI or Data Query.
