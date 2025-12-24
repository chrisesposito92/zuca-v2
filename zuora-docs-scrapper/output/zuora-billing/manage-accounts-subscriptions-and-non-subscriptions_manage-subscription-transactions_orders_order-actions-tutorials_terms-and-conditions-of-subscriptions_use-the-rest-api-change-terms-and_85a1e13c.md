---
title: "Use the REST API - change terms and conditions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/terms-and-conditions-of-subscriptions/use-the-rest-api---change-terms-and-conditions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:57.396Z"
---

# Use the REST API - change terms and conditions

This topic explains how to change the terms and conditions of a subscription using the REST API by creating an order.

You can use the "Create order" operation to change the terms and conditions of a subscription. Before the Orders feature is enabled, you have to use the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To change the terms and conditions of a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2017-09-30 . |
    | $TermStartDate | The new start date of the current term. For example, 2017-11-01 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "TermsAndConditions", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "termsAndConditions": { "lastTerm": { "startDate": "$TermStartDate", "period": 20, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 6, "periodType": "Month" } ], "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "autoRenew": true } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
