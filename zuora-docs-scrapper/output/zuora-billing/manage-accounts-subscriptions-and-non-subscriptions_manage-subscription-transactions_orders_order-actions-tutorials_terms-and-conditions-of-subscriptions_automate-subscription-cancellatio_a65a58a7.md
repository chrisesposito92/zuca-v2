---
title: "Schedule a subscription cancellation using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/terms-and-conditions-of-subscriptions/automate-subscription-cancellations-suspensions-or-resumptions-with-terms-and-conditions-order-action/schedule-a-subscription-cancellation-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:10.575Z"
---

# Schedule a subscription cancellation using the REST API

This topic explains how to schedule a subscription cancellation using the REST API by creating an order with the Terms And Conditions order action.

You can use the Create an order API operation to schedule a subscription cancellation.

To create an order with the Terms And Conditions order action for canceling a subscription on a scheduled date, perform the following steps:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2025-02-12 . |
    | $SubscriptionNum | The number of the subscription to cancel. For example, A-S00000001 . |
    | $ScheduledCancelDate | The date to cancel the subscription. For example, 2025-04-01 . |

2.  Use the 'Create an order' API operation to create an order for the existing subscription. The following is a request example: If you want to suspend or resume the subscription on a future date, specify the date in the `scheduledSuspendDate` or `scheduledResumeDate` field. When specifying multiple scheduled dates in the same order action, the date values must follow the rules described in Introduction to scheduled actions for subscription automation .

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "$AccountNum", "orderDate": "$Today", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "TermsAndConditions", "termsAndConditions": { "scheduledCancelDate": "$ScheduledCancelDate" } } ] } ] } |
