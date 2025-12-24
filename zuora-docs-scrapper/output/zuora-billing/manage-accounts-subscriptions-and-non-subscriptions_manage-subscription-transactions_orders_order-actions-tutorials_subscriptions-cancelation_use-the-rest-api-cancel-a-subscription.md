---
title: "Use the REST API - cancel a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation/use-the-rest-api---cancel-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:36.216Z"
---

# Use the REST API - cancel a subscription

This article explains how to cancel subscriptions using the REST API by creating an order.

You can use the "Create order" operation to cancel a subscription. Before the Orders feature is enabled, you have to use the "Cancel subscription", "Amend", or "CRUD: Create amendment" operation.

To cancel a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "CancelSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "cancelSubscription": { "cancellationPolicy": "SpecificDate", "cancellationEffectiveDate": "$Today" } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
