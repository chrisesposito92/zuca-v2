---
title: "Configure dynamic pricing using the change plan order action"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/configure-dynamic-pricing-using-the-change-plan-order-action"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:00.709Z"
---

# Configure dynamic pricing using the change plan order action

This topic explains how to replace a product rate plan by creating an order and configuring dynamic pricing.

To replace a product rate plan by creating an order

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 8a90876c84ae5ef70184bef2c94c7b2c. . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 41137e9965e2445fbb57dae2daab7580. . |
    | $subscriptionNumber | The number of the subscription that will own the rate plans. For example, A-S0000001. |
    | $subscriptionRatePlanID | The ID of the subscription rate plan. For example, 8a90876c84ae5ef70184c2080c307343. |
    | $Today | Today's date. For example,2025-08-01. |

2.  Refer to the example payload to create a new order. In this example, the user sets the value of pricing attributes: `Site_Size` and `EffectiveDate` directly in `pricingAttributes`. For pricing attribute `Subscription_RatePlan_Class`, that is mapped to the custom field `RateClass__c`, its value is set in customFields and automatically used by Zuora during list price lookup.

    Note:

    Assuming the subscription's renewal term length = 12 months.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "$AccountNum", "orderDate": "$Today", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions":[ { "type":"ChangePlan", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "changePlan": { "ratePlanId": "$subscriptionRatePlanId", "newProductRatePlan": { "productRatePlanId":"$productRatePlanId", "customFields": { "Channel__c": "Reseller", "RateClass__c": "Low" }, "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId", "pricingAttributes": { "Site_Size": 20 } } ] } } } ] } ] } |
