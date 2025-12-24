---
title: "Update Pricing Attributes"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/update-pricing-attributes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:48.667Z"
---

# Update Pricing Attributes

This topic explains how to update the PricingAttributes of ABP charges using the REST API, including explicit updates to the originalListPrice field.

The `PricingAttributes` of ABP charges can be updated via update product order action through REST API.

When `PricingAttributes` is updated, the charge's originalListPrice will not be updated automatically, the user needs to update its value via the `originalListPrice` field explicitly.

To update a charge's pricing attributes by creating an order:

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $subscriptionNumber | The number of the subscription that will own the rate plans. For example, A-S0000001. |
    | $subscriptionRatePlanId | The ID of the subscription rate plan. For example, 8a90876c84ae5ef70184c2080c307343. |
    | $chargeNumber | The number of the subscription rate plan charge to be updated. For example, C-00036197.. |
    | $Today | Today's date. For example,2025-07-20. |

2.  Refer to the example payload to create a new order. In this example, the user updates the charge’s pricing attribute, site\_size from 7 to 99, originalListPrice to $22 and quantity of the charge to 15. The charge with number, $chargeNumber was added by the previous Add Product example.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "$AccountNum", "orderDate": "$Today", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "updateProduct": { "ratePlanId": "$subscriptionRatePlanId", "customFields": { "RateClass__c": "High" }, "chargeUpdates": [ { "chargeNumber": "$chargeNumber", "pricingAttributes": { "Site_Size": 99 }, "pricing": { "recurringPerUnit": { "originalListPrice": 22, "quantity": 15 } } } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" } ], "type": "UpdateProduct" } ] } ] } |

3.  After the rate plan is updated successfully, you can retrieve the `pricingAttributes` value of the charge via the GET subscription end point. This is an example response of `pricingAttributes`.

    "pricingAttributes": {

    "Site\_Size": 99,

    "Account\_Type": "VIP",

    "EffectiveDate": "2025-06-20T00:00:00+08:00",

    "Subscription\_Renewal\_Term": 12,

    "Subscription\_RatePlan\_Class": "Low"

    }

    Note:

    pricingAttributes includes all the pricing attribute values including both external attributes and attributes mapped to Zuora object fields.
