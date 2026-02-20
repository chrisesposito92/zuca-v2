---
title: "Create Ramp Deals using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/ramp-deals-creation/create-ramp-deals-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:27.847Z"
---

# Create Ramp Deals using the REST API

This topic explains how to create ramp deals using the REST API by performing order operations and managing unique tokens for rate plans and charges.

You can use the "Create order" operation to create a ramp deal.

To create a ramp deal by creating an order:

1.  Determine the values of the following variables: You will also need to provide two unique tokens for use in the API call. In the `CreateSubscription` order action you will assign the unique tokens to the rate plan and rate plan charge, respectively. This will enable you to identify the same rate plan and rate plan charge in the `UpdateProduct` order actions. In this tutorial, you will use "newsub\_rp\_Ybt80k" as the unique token for the rate plan and "newsub\_rpcharge\_BE7FHe" as the unique token for the rate plan charge.

    | Variable | Description |
    | --- | --- |
    | $AccountNum | The number of the account that will own the order and the subscription. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to subscribe to. For example, 2c92c0f85e5019d7015e513826e650f7 . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when subscribing to the product rate plan. For example, 2c92c0f85e5019d7015e5138b0395347 . |
    | $Today | Today's date. For example, 2020-07-01 . |
    | $Interval1_StartDate | Interval 1 start date. For example, 2020-07-01 . |
    | $Interval1_EndDate | Interval 1 end date. For example, 2021-06-30 . |
    | $Interval2_StartDate | Interval 2 start date. For example, 2021-07-01 . |
    | $Interval2_EndDate | Interval 2 end date. For example, 2022-06-30 . |
    | $Interval3_StartDate | Interval 3 start date. For example, 2022-07-01 . |
    | $Interval3_EndDate | Interval 3 end date. For example, 2023-06-30 . |

2.  Use the "Create and activate order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "ramp": { "intervals": [ { "name": "Interval 1", "startDate": "$Interval1_StartDate", "endDate": "$Interval1_EndDate" }, { "name": "Interval 2", "startDate": "$Interval2_StartDate", "endDate": "$Interval2_EndDate" }, { "name": "Interval 3", "startDate": "$Interval3_StartDate", "endDate": "$Interval3_EndDate" } ] }, "orderActions": [ { "type": "CreateSubscription", "createSubscription": { "terms": { "initialTerm": { "startDate": "$Today", "period": 36, "periodType": "Month", "termType": "TERMED" }, "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "autoRenew": true }, "subscribeToRatePlans": [ { "productRatePlanId": "$ProductRPId", "uniqueToken": "newsub_rp_Ybt80k", "chargeOverrides": [ { "productRatePlanChargeId": "$ProductRPChargeId", "uniqueToken": "newsub_rpcharge_BE7FHe" } ] } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ] }, { "type": "UpdateProduct", "updateProduct": { "uniqueToken": "newsub_rp_Ybt80k", "chargeUpdates": [ { "uniqueToken": "newsub_rpcharge_BE7FHe", "description": "test_description_regular", "pricing": { "recurringFlatFee": { "listPrice": 1200 } } } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Interval2_StartDate" }, { "name": "ServiceActivation", "triggerDate": "$Interval2_StartDate" }, { "name": "CustomerAcceptance", "triggerDate": "$Interval2_StartDate" } ] }, { "type": "UpdateProduct", "updateProduct": { "uniqueToken": "newsub_rp_Ybt80k", "chargeUpdates": [ { "uniqueToken": "newsub_rpcharge_BE7FHe", "description": "test_description_regular", "pricing": { "recurringFlatFee": { "listPrice": 1400 } } } ] }, "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Interval3_StartDate" }, { "name": "ServiceActivation", "triggerDate": "$Interval3_StartDate" }, { "name": "CustomerAcceptance", "triggerDate": "$Interval3_StartDate" } ] } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the new subscription, use the "Preview order" operation.
