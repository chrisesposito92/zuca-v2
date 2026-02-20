---
title: "Create Subscriptions with hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/hard-bundle-subscription/create-subscriptions-with-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:00.562Z"
---

# Create Subscriptions with hard bundle

This task topic explains how to configure a hard bundle using the Create Subscription order action, including subscribing to optional component charges.

Use the createSubscription order action to subscribe to a hard bundle with two optional component charges.

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $existingAccountNumber | The number of the account that will own the order and the subscription. For example,A00003063. |
    | $orderDate | The date on which the order was created. For example, For example,2025-12-01. |
    | $productRatePlanId | The ID of the product rate plan to subscribe to. For example, 3c4a78d0205e45ee8c303b719dc3d42c . |
    | $productRatePlanChargeId1 | The ID of the rate plan charge to include when adding the hard bundle rate plan. For example, d0358e52a5aa410aaeffb11f644fef95. |
    | $productRatePlanChargeId2 | The ID of the rate plan charge to include when adding the hard bundle rate plan. For example, 27ba5218ef0e4c43a51dd80b313ecb74 |

2.  Refer to the example payload to create a new order with two optional component charge.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "category": "NewSales", "existingAccountNumber": "$existingAccountNumber", "orderDate": "$orderDate", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "createSubscription": { "subscribeToRatePlans": [ { "productRatePlanId": "$productRatePlanId", "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId1" }, { "productRatePlanChargeId": "$productRatePlanChargeId2" } ] } ], "terms": { "initialTerm": { "period": 12, "periodType": "Month", "termType": "TERMED", "startDate": "2025-12-01" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [{ "period": 6, "periodType": "Month" }], "autoRenew": false } }, "triggerDates": [ { "triggerDate": "2025-12-01", "name": "ContractEffective" }, { "triggerDate": "2025-12-01", "name": "ServiceActivation" }, { "triggerDate": "2025-12-01", "name": "CustomerAcceptance" } ] } ] } ] } |


After subscribing a hard bundle, you can retrieve the hard bundle specific information using the [Get Subscription](https://developer.zuora.com/v1-api-reference/api/operation/GET_SubscriptionsByKey/) end point.

-   ratePlans > productRatePlanType > RatePlanHardBundle

-   ratePlans > ratePlanCharges > optional: true/false
