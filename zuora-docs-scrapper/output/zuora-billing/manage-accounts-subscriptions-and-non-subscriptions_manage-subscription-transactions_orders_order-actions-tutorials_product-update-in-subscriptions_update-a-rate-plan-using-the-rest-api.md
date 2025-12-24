---
title: "Update a rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/product-update-in-subscriptions/update-a-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:14.621Z"
---

# Update a rate plan using the REST API

This topic explains how to update a rate plan in a subscription using the REST API by creating an order.

You can use the Create an order operation to update a rate plan in a subscription.

Before the Orders feature is enabled, you have to use the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To update a rate plan in a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 .To create the order under a new account instead of an existing account, specify the newAccount field instead of the existingAccountNumber field. |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPId | The ID of the rate plan to update in the subscription. For example, 2c92c0f85d7d53d3015dac494dfc5cbf . |
    | $ChargeNum | The number of the charge to update in the rate plan. For example, C-00000020 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create an order" operation to create an order under an existing account: To preview invoices for the updated subscription, use the "Preview order" operation.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": $Today }, { "name": "ServiceActivation", "triggerDate": $Today }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "updateProduct": { "ratePlanId": "$RPId", "chargeUpdates": [ { "chargeNumber": "$ChargeNum", "pricing": { "recurringVolume": { "quantity": 50 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |
