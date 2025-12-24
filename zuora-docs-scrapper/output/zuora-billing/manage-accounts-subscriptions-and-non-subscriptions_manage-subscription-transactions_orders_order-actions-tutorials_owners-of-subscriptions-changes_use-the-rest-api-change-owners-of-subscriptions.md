---
title: "Use the REST API - change owners of  subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/use-the-rest-api---change-owners-of-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:47.968Z"
---

# Use the REST API - change owners of subscriptions

This topic explains how to change the owner of a subscription using the "Create order" operation in the REST API.

You can use the "Create order" operation to change the owner of a subscription.

Before the Orders feature is enabled, you would have used the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To change the owner of a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $TransferAccountNum | The number of the account that will own the subscription and invoices. For example, A00000002 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "OwnerTransfer", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "ownerTransfer": { "destinationAccountNumber": "$AccountNumNew", "destinationInvoiceAccountNumber": "$AccountNumNew" } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
