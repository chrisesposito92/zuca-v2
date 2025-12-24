---
title: "Add a product to the Ramp Deal using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/products-addition-in-ramp-deals/add-a-product-to-the-ramp-deal-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:02.463Z"
---

# Add a product to the Ramp Deal using the REST API

This topic explains how to use the REST API to create an order and add a product to a ramp deal.

You can use the "Create an order" operation to add a product to a ramp deal.

To add a product to a ramp deal by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $ProductRPId | The ID of the product rate plan to add to the subscription. For example, 2c92c0f9592a69410159432fab376d81 . |
    | $ProductRPChargeId | The ID of the product rate plan charge to use when adding the product rate plan. For example, 2c92c0f9592a6941015943308a2c6e72 . |
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
    | Request Body | { "orderDate": $Today, "existingAccountNumber": $AccountNum, "subscriptions": [ { "subscriptionNumber": $SubscriptionNum, "ramp": { "intervals": [ { "name": "Interval 1", "startDate": "$Interval1_StartDate", "endDate": "$Interval1_EndDate" }, { "name": "Interval 2", "startDate": "$Interval2_StartDate", "endDate": "$Interval2_EndDate" }, { "name": "Interval 3", "startDate": "$Interval3_StartDate", "endDate": "$Interval3_EndDate" } ] }, "orderActions": [ { "type": "AddProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": $Today }, { "name": "ServiceActivation", "triggerDate": $Today }, { "name": "CustomerAcceptance", "triggerDate": $Today } ], "addProduct": { "productRatePlanId": $ProductRPId, "chargeOverrides": [ { "productRatePlanChargeId": $ProductRPChargeId, "pricing": { "recurringPerUnit": { "listPrice": 30, "quantity": 200 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
