---
title: "Change  the terms and conditions of ramp deals using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/terms-and-conditions-of-ramp-deals-changes/change-the-terms-and-conditions-of-ramp-deals-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:10.021Z"
---

# Change the terms and conditions of ramp deals using the REST API

This topic explains how to change the terms and conditions of a ramp deal using the "Create order" operation in the REST API.

You can use the "Create order" operation to change the terms and conditions of a ramp deal and update the ramp.

To change the terms and conditions of a ramp deal and update the ramp by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $Today | Today's date. For example, 2020-07-01 . |
    | $TermStartDate | The new start date of the current term. For example, 2020-07-01 . |
    | $Interval1_StartDate | Interval 1 start date. For example, 2020-07-01 . |
    | $Interval1_EndDate | Interval 1 end date. For example, 2021-06-30 . |
    | $Interval2_StartDate | Interval 2 start date. For example, 2021-07-01 . |
    | $Interval2_EndDate | Interval 2 end date. For example, 2022-06-30 . |
    | $Interval3_StartDate | Interval 3 start date. For example, 2022-07-01 . |
    | $Interval3_EndDate | Interval 3 end date. For example, 2023-06-30 . |
    | $Interval4_StartDate | Interval 4 start date. For example, 2023-07-01 . |
    | $Interval4_EndDate | Interval 4 end date. For example, 2024-06-30 . |

2.  Use the "Create order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "ramp": { "intervals": [ { "name": "Interval 1", "startDate": "$Interval1_StartDate", "endDate": "$Interval1_EndDate" }, { "name": "Interval 2", "startDate": "$Interval2_StartDate", "endDate": "$Interval2_EndDate" }, { "name": "Interval 3", "startDate": "$Interval3_StartDate", "endDate": "$Interval3_EndDate" }, { "name": "Interval 4", "startDate": "$Interval4_StartDate", "endDate": "$Interval4_EndDate" } ] }, "orderActions": [ { "type": "TermsAndConditions", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "termsAndConditions": { "lastTerm": { "startDate": "$TermStartDate", "period": 48, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "autoRenew": true } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
