---
title: "Update Negotiated Price table"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/managing-negotiable-price-table-for-usage-charges/update-negotiated-price-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:06.750Z"
---

# Update Negotiated Price table

This topic explains how to update the negotiated price table of a usage charge by creating an order.

To update the negotiated price table of a usage charge by creating an order::

1.  Determine the values of the following variables and configure the dynamic pricing enabled charge in the product catalog accordingly:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $SubscriptionNumber | The number of the subscription that owns the rate plans. For example, A-S0000001. . |
    | $subscriptionRatePlanId | The ID of the subscription rate plan. For example, 8a90876c84ae5ef70184c2080c307343.. |
    | $chargeNumber | The number of the subscription rate plan charge to be updated. For example, C-00036197. |
    | $Today | Today's date. For example,2025-07-20. |
    | $effectiveDate | The date from which the subscription will be effective. For example,2025-05-12T09:24:25Z[UTC]. |

2.  Refer to the example payload to update a new order. In the chargeUpdates section, the user changes the tiered price of the last rate card entry via the negotiatedPriceTable tag by increasing each tier’s price by 100 again. In the chargeUpdates section, the user changes the tiered price of the last rate card entry via the negotiatedPriceTable tag by increasing each tier’s price by 100 again.

    Note: The usage charge with number $chargeNumber was added by the create subscription order in the previous section.
    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "$AccountNum", "orderDate": "$Today", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "updateProduct": { "ratePlanId": "$subscriptionRatePlanId", "chargeUpdates": [ { "chargeNumber": "$chargeNumber", "negotiatedPriceTable": [ { "attributes": [ { "name": "AccountType", "operator": "==", "value": "VIP" }, { "name": "UsageState", "operator": "==", "value": "CA" }, { "name": "SubscriptionRatePlanChannel", "operator": "==", "value": "Reseller" }, { "name": "Age", "operator": ">", "value": 18 }, { "name": "EffectiveDate", "operator": ">=", "value": "2025-05-12T09:24:25Z[UTC]" } ], "pricing": { "tiers": [ { "from": 0, "up_to": 10, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 310 } }, { "from": 11, "up_to": 20, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 300 } }, { "from": 21, "price_format": "price_format_per_unit", "unit_amounts": { "USD": 290 } } ] } } ] } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" } ], "type": "UpdateProduct" } ] } ] } |

3.  After the update is completed, the subscribed usage charge’s negotiated price table has the following rate cards:

    ![update Neg Table](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d4e55dcc-8e15-4eb9-955f-1f375c4e87e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0ZTU1ZGNjLThlMTUtNGViOS05NTVmLTFmMzc1YzRlODdlOSIsImV4cCI6MTc2NjY0MDcyNCwianRpIjoiYWQ4Nzk2ZjA0ZGNkNDUzODgxZjZlMmQ5ZWYzMjVlNTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.upmOEctPbwkBltS_cMb9OR0Q6tefPpc9Znw_mRKf-V8)
