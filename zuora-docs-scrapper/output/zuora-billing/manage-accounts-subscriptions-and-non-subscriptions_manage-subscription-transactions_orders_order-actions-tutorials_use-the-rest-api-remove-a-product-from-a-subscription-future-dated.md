---
title: "Use the REST API - remove a product from a subscription future-dated"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/use-the-rest-api---remove-a-product-from-a-subscription-future-dated"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:50.424Z"
---

# Use the REST API - remove a product from a subscription future-dated

This topic explains how to use the "Create order" operation to remove a product from a subscription with a future-dated removal.

You can use the "Create order" operation to remove a product from a subscription even if there is a future-dated removal.

To remove a product from a subscription earlier than the previous removal date by creating an order:

1.  Determine the values of the following variables: Assuming a previous order will remove the rate plan ( `$RPId` ) on a future-dated removal date, which is later than the current removal date ( `$Removal_date` ).

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPId | The ID of the rate plan to remove from the subscription. For example, 402892c42ce80787012ce80ea2310019 . |
    | $Removal_date | The current removal date, 2021-05-01 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Removal_date", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "RemoveProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Removal_date" }, { "name": "ServiceActivation", "triggerDate": "$Removal_date" }, { "name": "CustomerAcceptance", "triggerDate": "$Removal_date" } ], "removeProduct": { "ratePlanId": "$RPId" }, } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the subscription, use the "Preview order" operation.
