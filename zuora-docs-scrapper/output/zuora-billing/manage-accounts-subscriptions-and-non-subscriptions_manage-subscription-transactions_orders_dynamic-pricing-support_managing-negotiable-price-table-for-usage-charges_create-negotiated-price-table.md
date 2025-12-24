---
title: "Create Negotiated Price table"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/managing-negotiable-price-table-for-usage-charges/create-negotiated-price-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:04.004Z"
---

# Create Negotiated Price table

This topic explains how to create a negotiated price table for a subscription rate plan by configuring dynamic pricing and overriding tiered prices.

To subscribe to a rate plan and define a negotiated price table for the usage charge by creating an order:

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the subscription rate plan. For example, edcaaadd4f198397d0583bc94b90000e. . |
    | $productRatePlanChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 8ceac04750d648f493363556d139d061.. |
    | $Today | Today's date. For example, 2025-06-16. |

2.  Refer to the example payload to create a new order. This example will create a new subscription to subscribe to the usage charge $productRatePlanChargeId and override the tiered price of one rate card entry. In the chargeOverrides section, the user:

    -   provides the value of external attribute Age via pricingAttributes tag.
    -   overrides the tiered price of the last rate card entry (see the screenshot below) via the negotiatedPriceTable tag by increasing each tier’s price by 100.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "createSubscription": { "subscriptionOwnerAccountNumber": "$AccountNum", "terms": { "initialTerm": { "startDate":"$Today", "period": 12, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "autoRenew": true }, "subscribeToRatePlans": [ { "productRatePlanId":"$productRatePlanId", "customFields": { "RateClass__c": "Low" }, "chargeOverrides": [{ "productRatePlanChargeId":"$productRatePlanChargeId", "pricingAttributes": { "Age": 33 }, "negotiatedPriceTable": [ { "attributes": [ { "name": "AccountType", "operator": "==", "value": "VIP" }, { "name": "UsageState", "operator": "==", "value": "CA" }, { "name": "SubscriptionRatePlanChannel", "operator": "==", "value": "Reseller" }, { "name": "Age", "operator": ">", "value": 18 }, { "name": "EffectiveDate", "operator": ">=", "value": "2025-05-12T09:24:25Z[UTC]" } ], "pricing": { "tiers": [ { "from": 0, "up_to": 10, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 210 } }, { "from": 11, "up_to": 20, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 200 } }, { "from": 21, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 190 } } ] } } ] } ] } ] } } ] } ] } |

3.  After the subscription is created, the subscribed usage charge's negotiated price table has the following rate cards:

    ![Create Neg Table](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dff76319-fa98-4c9a-9582-011b65c06bf6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmZjc2MzE5LWZhOTgtNGM5YS05NTgyLTAxMWI2NWMwNmJmNiIsImV4cCI6MTc2NjY0MDcyMiwianRpIjoiNGUzNjUzZmIzYTQ5NDk2YWFkMGM5NjNmYzQ4NGFhYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Ck4QdcSfe8Bq74TpmKnT-5860EOATqKXFJ9XF3XO9Pw)
