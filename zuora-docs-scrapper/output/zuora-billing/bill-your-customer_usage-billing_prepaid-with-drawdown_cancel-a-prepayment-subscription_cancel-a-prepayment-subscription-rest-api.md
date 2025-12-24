---
title: "Cancel a prepayment subscription - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/cancel-a-prepayment-subscription/cancel-a-prepayment-subscription---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:14.169Z"
---

# Cancel a prepayment subscription - REST API

Learn how to use the REST API to cancel a prepayment subscription.

Use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to cancel a subscription.

Sample request body: Cancel an existing subscription with the cancellation effective date on 2022-05-01.

## Sample REST API request to cancel a prepayment subscription

Request: `POST /v1/orders`

Request Body: "subscriptions": \[ { "subscriptionNumber": "$SubscriptionNum", "orderActions": \[ { "type": "CancelSubscription", "triggerDates": \[ { "name": "ContractEffective", "triggerDate": "2022-03-15" }, { "name": "ServiceActivation", "triggerDate": "2022-03-15" }, { "name": "CustomerAcceptance", "triggerDate": "2022-03-15" } \], "cancelSubscription": { "cancellationPolicy": "SpecificDate", "cancellationEffectiveDate": "2022-05-01" } } \] } \],

Once the order action is activated, your customer's subscription will be canceled on 2022-05-01.

You can view the customer's prepaid balance through the Zuora UI or Data Query.
