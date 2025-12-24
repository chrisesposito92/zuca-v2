---
title: "Remove a rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/remove-products-from-subscriptions/remove-a-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:45.344Z"
---

# Remove a rate plan using the REST API

This topic explains how to remove a rate plan from a subscription using the REST API by creating an order.

You can use the Create an order operation to remove a rate plan from a subscription.

Before the Orders feature is enabled, you have to use the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To remove a rate plan from a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 .To create the order under a new account instead of an existing account, specify the newAccount field instead of the existingAccountNumber field. |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPId | The ID of the rate plan to remove from the subscription. For example, 402892c42ce80787012ce80ea2310019 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "RemoveProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "removeProduct": { "ratePlanId": "$RPId" } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
