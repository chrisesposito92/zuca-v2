---
title: "Remove optional charges from the subscribed hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support/amend-a-subscribed-hard-bundle/remove-optional-charges-from-the-subscribed-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:16.945Z"
---

# Remove optional charges from the subscribed hard bundle

This task topic explains how to remove optional charges from a subscribed hard bundle by configuring the rate plan and creating a new order.

Follow these steps to remove optional charge from the subscribed hard bundle using the updateProduct order action:

1.  Determine the values of the following variables and configure the hard bundle rate plan accordingly:

    | Variable | Description |
    | --- | --- |
    | $Category | The category. For example,NewSales. |
    | $existingAccountNumber | The number of the account that will own the order and the subscription. For example,A00003063. |
    | $orderDate | The date on which the order was created. For example, For example,2025-11-27. |
    | $subscriptionNumber | The subscription number. For example A-S00007646 . |
    | $RatePlanId | The ID of the subscription hard bundle rate plan to be updated. For example, edca2c537449baa531bbb198e11c034f . |
    | $chargeNumber1 | The number of the subscription rate plan charge to be removed. For example, 27ba5218ef0e4c43a51dd80b313ecb74. |
    | $chargeNumber2 | The number of the subscription rate plan charge to be removed. For example, d0358e52a5aa410aaeffb11f644fef95. |

2.  Refer to the example payload to remove two optional component charges from the hard bundle.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "category": "NewSales", "existingAccountNumber": "A00003063", "orderDate": "2025-11-27", "subscriptions": [ { "subscriptionNumber": "A-S00007646", "orderActions": [ { "type": "UpdateProduct", "updateProduct": { "ratePlanId": "{{ratePlanId}}", "chargeRemovals": [ { "chargeNumber": "{{chargeNumber1}}" }, { "chargeNumber": "{{chargeNumber2}}" }, ] }, "triggerDates": [ { "triggerDate": "2025-11-28", "name": "ContractEffective" }, { "triggerDate": "2025-11-28", "name": "ServiceActivation" }, { "triggerDate": "2025-11-28", "name": "CustomerAcceptance" } ] } ] } ] } |


On the Subscription details page, the charges removed by the Update Product order action appear in the Details column of the Subscription Change History section.

Removed charges are hidden by default in the Included Products section on the Order details page and Subscription details page. The removed charges can be displayed by enabling the Display Removed Products in the Order details page and Show Removed toggle in the Subscription details page.
