---
title: "Resume subscriptions using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-resumption/resume-subscriptions-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:25.214Z"
---

# Resume subscriptions using the REST API

This topic explains how to use the REST API to manage subscriptions, including resuming and suspending subscriptions through order operations.

You can use the "Create order" operation to resume a subscription. Before the Orders feature is enabled, you have to use the "Resume subscription" operation.

To suspend a subscription by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2019-01-01 . |

2.  Use the "Create order" operation to resume a subscription:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "Resume", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "resume": { "resumePolicy": "FixedPeriodsFromSuspendDate", "resumePeriods": 2, "resumePeriodsType": "Month", "extendsTerm": true } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for a subscription to resume, use the "Preview order" operation.
