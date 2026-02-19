---
title: "Add optional charges to the subscribed hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/amend-a-subscribed-hard-bundle/add-optional-charges-to-the-subscribed-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:52.501Z"
---

# Add optional charges to the subscribed hard bundle

This task topic explains how to add optional charges to a subscribed hard bundle by configuring the rate plan and creating a new order.

Follow these steps to add optional charges to the subscribed hard bundle using the updateProduct order action:

1.  Determine the values of the following variables and configure the hard bundle rate plan accordingly:

    | Variable | Description |
    | --- | --- |
    | $Category | The category. For example,NewSales. |
    | $existingAccountNumber | The number of the account that will own the order and the subscription. For example,A00003063. |
    | $orderDate | The date on which the order was created. For example, For example,2026-01-01. |
    | $subscriptionNumber | The subscription number. For example A-S00007646 . |
    | $RatePlanId | The ID of the subscription hard bundle rate plan to be updated. For example, edca2c537449baa531bbb198e11c034f . |
    | $productRatePlanChargeId | The ID of the rate plan charge to include when adding the hard bundle rate plan. For example, 27ba5218ef0e4c43a51dd80b313ecb74. |

2.  Refer to the example payload to create a new order with two optional component charge.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "category": "NewSales", "existingAccountNumber": "$existingAccountNumber", "orderDate": "$orderDate", "subscriptions": [ { "subscriptionNumber": "$subscriptionNumber", "orderActions": [ { "type": "UpdateProduct", "updateProduct": { "ratePlanId": "$ratePlanId", "chargeOverrides": [ { "productRatePlanChargeId": "$productRatePlanChargeId" } ] }, "triggerDates": [ { "triggerDate": "2026-01-01", "name": "ContractEffective" }, { "triggerDate": "2026-01-01", "name": "ServiceActivation" }, { "triggerDate": "2026-01-01", "name": "CustomerAcceptance" } ] } ] } ] } |


On the Subscription details page, the charges added by the Update Product order action appear in the Details column of the Subscription Change History section.
