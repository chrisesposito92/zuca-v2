---
title: "Use the REST API - suspend  subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-suspension/use-the-rest-api---suspend-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:17.299Z"
---

# Use the REST API - suspend subscriptions

This topic explains how to suspend subscriptions using the REST API by creating an order.

You can use the "Create order" operation to suspend a subscription. Before the Orders feature is enabled, you have to use the "Suspend subscription" operation.

To suspend a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2019-01-01 . |

2.  Use the "Create order" operation to suspend a subscription:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "Suspend", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "suspend": { "suspendPolicy": "FixedPeriodsFromToday", "suspendPeriods": 2, "suspendPeriodsType": "Month" } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for a subscription to suspend, use the "Preview order" operation.
