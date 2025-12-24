---
title: "Create a ramp deal using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/product-mid-interval-updates-on-ramp-deals-addition/create-a-ramp-deal-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:17.801Z"
---

# Create a ramp deal using the REST API

This topic explains how to update a product in a ramp deal using the "Create order" operation in the REST API.

You can use the "Create order" operation to update a product in a ramp deal.

To update a product in a ramp deal by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPId | The ID of the rate plan to update in the subscription. For example, 2c92c0f85d7d53d3015dac494dfc5cbf . |
    | $ChargeNum | The number of the charge to update in the rate plan. For example, C-00000020 . |
    | $Today | Today's date. For example, 2020-07-01 . |
    | $SpecificUpdateDate | The specific date to make an update before a future date change. For example, 2022-01-01 . |

2.  Use the "Create and activate order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": $Today, "existingAccountNumber": $AccountNum, "subscriptions": [ { "subscriptionNumber": $SubscriptionNum, "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "name": "ContractEffective", "triggerDate": $Today }, { "name": "ServiceActivation", "triggerDate": $Today }, { "name": "CustomerAcceptance", "triggerDate": $Today } ], "updateProduct": { "ratePlanId": $RPId, "specificUpdateDate": $SpecificUpdateDate, "chargeUpdates": [ { "chargeNumber": $ChargeNum, "effectiveDate": { "triggerEvent": "ContractEffective" }, "pricing": { "recurringFlatFee": { "listPrice": 1300 } } } ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |


To preview invoices for the updated subscription, use the "Preview order" operation.
