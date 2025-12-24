---
title: "Create new subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/dynamic-pricing-enabled-products-addition-to-subscriptions/create-new-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:41.110Z"
---

# Create new subscriptions

This topic explains how to create new subscriptions and configure dynamic pricing enabled charges in the product catalog.

This task guides you on how to create a new subscription.

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 2c92c0f9592a69410159432fab376d81 . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 41137e9965e2445fbb57dae2daab7580. . |
    | $Today | Today's date. For example, 2025-06-16. . |
    | $Site_Size | The size of the site. For example, 33. |

2.  Refer to the example payload to create a new order. In this example, the user sets the value of pricing attributes: Site\_Size and `EffectiveDate` directly in `pricingAttributes`. For the pricing attribute Subscription\_RatePlan\_Class that is mapped to the custom field `RateClass__c,` the value is set in customFields and automatically used by Zuora during list price lookup.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "createSubscription": { "subscriptionOwnerAccountNumber": "$AccountNum", "terms": { "initialTerm": { "startDate":"$Today", "period": 12, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "autoRenew": true }, "subscribeToRatePlans": [ { "productRatePlanId":"$productRatePlanId", "customFields": { "RateClass__c": "High" }, "chargeOverrides": [ { "productRatePlanChargeId":"$productRatePlanChargeId" "pricingAttributes": { "Site_Size": 33, "EffectiveDate": "2025-06-16" } } ] } ] } } ] } ] } |

3.  After the subscription is created successfully, you can retrieve the price and pricingAttributes value of the charge via the GET subscription end point. This is an example response of pricingAttributes of a charge created from "$productRatePlanChargeId" in the previous step.

    "price": 12.000000000,

    "pricingAttributes": {

    "Site\_Size": 33,

    "Account\_Type": "VIP",

    "EffectiveDate": "2025-06-16T00:00:00+08:00",

    "Subscription\_Renewal\_Term": 12,

    "Subscription\_RatePlan\_Class": "High"

    }

    Note:

    pricingAttributes includes all the pricing attribute values, including both external attributes and attributes mapped to the Zuora object fields.
