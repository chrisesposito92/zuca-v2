---
title: "Create a subscription using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/create-a-subscription-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:50.501Z"
---

# Create a subscription using the REST API

This topic explains how to create a subscription using the REST API by utilizing the "Create an order" operation.

You can use the Create an order operation to create a subscription.

Before the Orders feature is enabled, you would have used the "Create subscription", "Subscribe", or "Create account" operation.

To create a subscription and subscribe to a product rate plan by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order and the subscription. For example, A00000001 .To create the order under a new account instead of an existing account, specify the newAccount field instead of the existingAccountNumber field. |
    | $productRatePlanId | The ID of the product rate plan to subscribe to. For example, 2c92c0f85e5019d7015e513826e650f7 . |
    | $Today | Today's date. For example, 2017-09-30 . |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "createSubscription": { "terms": { "initialTerm": { "startDate": "$Today", "period": 12, "periodType": "Month", "termType": "TERMED" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ] }, "subscribeToRatePlans": [ { "productRatePlanId": "$productRatePlanId" } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the new subscription, use the `Preview order` operation.
