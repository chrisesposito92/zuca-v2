---
title: "Configure dynamic price using the add product order action"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/configure-dynamic-price-using-the-add-product-order-action"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:32.339Z"
---

# Configure dynamic price using the add product order action

This topic guides you through adding a product to a subscription by configuring dynamic pricing and setting pricing attributes.

To add a product to the subscription:

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, edcad42fa5697665a4d767394f590000. . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 41137e9965e2445fbb57dae2daab7580. . |
    | $subscriptionNumber | The number of the subscription that will own the rate plans. For example, A-S0000001. |
    | $Today | Today's date. For example,2025-06-20. |

2.  Refer to the example payload to create a new order. In this example, you can set the value of pricing attributes: `Site_Size` and `EffectiveDate` directly in `pricingAttributes`. For the pricing attribute `Subscription_RatePlan_Class` that is mapped to the custom field `RateClass__c`, its value is set in customFields and automatically used by Zuora during list price lookup.

    Note:

    Assuming the subscription's renewal term length = 12 months.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "addProduct": { "productRatePlanId": "$productRatePlanId", "customFields": { "Channel__c": "Reseller", "RateClass__c": "Low" }, "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId", "pricingAttributes": { "EffectiveDate": "2025-06-20", "Site_Size": 7 } } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" } ], "type": "AddProduct" } |

3.  After the rate plan is subscribed successfully, you can retrieve the price and pricingAttributes value of the charge via the GET subscription end point. This is an example response of pricingAttributes of the charge created from "$productRatePlanChargeId" in the previous step.

    "price": 9.000000000,

    "pricingAttributes": {

    "Site\_Size": 7,

    "Account\_Type": "VIP",

    "EffectiveDate": "2025-06-20T00:00:00+08:00",

    "Subscription\_Renewal\_Term": 12,

    "Subscription\_RatePlan\_Class": "Low"

    }

    Note:

    pricingAttributes includes all the pricing attribute values including both external attributes and attributes mapped to Zuora object fields.
