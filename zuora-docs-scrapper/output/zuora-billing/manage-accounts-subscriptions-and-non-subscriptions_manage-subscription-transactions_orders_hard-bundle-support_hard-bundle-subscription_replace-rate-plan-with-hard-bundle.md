---
title: "Replace rate plan with hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/hard-bundle-subscription/replace-rate-plan-with-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:39.657Z"
---

# Replace rate plan with hard bundle

This task topic explains how to use the Change Plan order action to subscribe to a hard bundle with an optional component charge.

Use the changePlan order action to subscribe to a hard bundle with one optional component charge.

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $existingAccountNumber | The number of the account that will own the order and the subscription. For example,A00003063. |
    | $orderDate | The date on which the order was created. For example, For example,2026-01-01. |
    | $subscriptionNumber | The subscription number. For example, A-S00007648 |
    | $RatePlanId | The ID of the subscription rate plan to be replaced. For example, edca2c537a99bd38671bdab3d4d40c0a . |
    | $productRatePlanId | The ID of the hard bundle rate plan. For example, 3c4a78d0205e45ee8c303b719dc3d42c . |
    | $productRatePlanChargeId1 | .The ID of the rate plan charge to include when adding the hard bundle rate plan. For example, 27ba5218ef0e4c43a51dd80b313ecb74 |
    | $productRatePlanChargeId2 | The ID of the rate plan charge to include when adding the hard bundle rate plan. For example, d0358e52a5aa410aaeffb11f644fef95 |

2.  Refer to the example payload to create a new order to replace an existing rate plan with a hard bundle with two optional component charges.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "$existingAccountNumber", "orderDate": "$orderDate", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "type": "ChangePlan", "changePlan": { "ratePlanId": "$rateplanId", "newProductRatePlan": { "productRatePlanId": "$productRatePlanId", "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId1" }, { "productRatePlanChargeId": "$productRatePlanChargeId2" } ] } }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "2026-01-01" }, { "name": "ServiceActivation", "triggerDate": "2026-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2026-01-01" } ] } ] } ] } |
