---
title: "Save an order as a draft order during order creation using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/orders-saved-as-draft-orders/save-an-order-as-a-draft-order-during-order-creation-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:48.710Z"
---

# Save an order as a draft order during order creation using the REST API

This topic explains how to save an order as a draft during creation using the REST API.

When you create an order, you can put your order in the `Draft` status as follows:

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |

2.  Use the Create an order operation to create an order under the specified account and put the order in the `Draft` status. The following example shows how to create a new subscription with product rate plan `4028b2e68167594c0181675d8ab80a21` and add another product rate plan `8a90876c8901dac3018902ba81655a49` with a different start date to the subscription and save the order as a draft order.

| Request | POST/v1/orders/ |
| --- | --- |
| Request Body | { "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "createSubscription": { "subscribeToRatePlans": [ { "productRatePlanId": "4028b2e68167594c0181675d8ab80a21" } ], "terms": { "initialTerm": { "period": 12, "periodType": "Month", "termType": "TERMED", "startDate": "2020-01-01" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "autoRenew": false } }, "type": "CreateSubscription", "triggerDates": [ { "triggerDate": "2020-01-01", "name": "ContractEffective" }, { "triggerDate": "2020-01-01", "name": "ServiceActivation" }, { "triggerDate": "2020-01-01", "name": "CustomerAcceptance" } ] }, { "addProduct": { "productRatePlanId": "8a90876c8901dac3018902ba81655a49" }, "type": "AddProduct", "triggerDates": [ { "triggerDate": "2020-01-15", "name": "ContractEffective" }, { "triggerDate": "2020-01-15", "name": "ServiceActivation" }, { "triggerDate": "2020-01-15", "name": "CustomerAcceptance" } ] } ] } ], "orderDate": "2020-01-01", "status": "Draft" } |

To preview invoices for the new subscription, use the Preview order operation.
