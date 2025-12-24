---
title: "Use the REST API - update products on subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/update-products-on-subscriptions-with-future-dated-updates/use-the-rest-api---update-products-on-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:27.600Z"
---

# Use the REST API - update products on subscriptions

This topic explains how to use the REST API to update a product on subscription with future-dated updates by creating an order.

You can use the "Create order" operation and the `specificUpdateDate` field to update a product on subscription with future-dated updates. Before the Orders feature is enabled, you have to use the "Update subscription", "Amend", or "CRUD: Create amendment" operation.

To update a product on subscription with future-dated updates by creating an order:

1.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | $SubscriptionNum | The number of the subscription to update. For example, A-S00000001 . |
    | $AccountNum | The number of the account that will own the order. For example, A00000001 . |
    | $RPId | The ID of the rate plan to update in the subscription. For example, 2c92c0f85d7d53d3015dac494dfc5cbf . |
    | $ChargeNum | The number of the charge to update in the rate plan. For example, C-00000020 . |
    | $Today | Today's date. For example, 2020-01-17 . |
    | $UpdateDatePremium | The Service Activation Date and Customer Acceptance Date for the Premium Service. For example, 2021-07-01 . |
    | $UpdateDateSpecial | The Service Activation Date and Customer Acceptance Date for the Special Service. For example, 2021-05-01 . |

2.  Use the "Create and activate order" operation to create an order under an existing account: To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "subscriptionNumber": "$SubscriptionNum", "orderActions": [ { "type": "UpdateProduct", "triggerDates": [ { "triggerDate": "$Today", "name": "ContractEffective" }, { "triggerDate": "$UpdateDatePremium", "name": "ServiceActivation" }, { "triggerDate": "$UpdateDatePremium", "name": "CustomerAcceptance" } ], "updateProduct": { "ratePlanId": "$RPId", "chargeUpdates": [ { "description": null, "chargeNumber": "$ChargeNum", "pricing": { "recurringPerUnit": { "listPrice": 8, "quantity": 20, "priceChangeOption": null, "priceIncreasePercentage": null } }, "effectiveDate": { "specificTriggerDate": "$UpdateDatePremium", "triggerEvent": "SpecificDate" }, "customFields": {} } ], "customFields": {} } }, { "type": "UpdateProduct", "triggerDates": [ { "triggerDate": "$Today", "name": "ContractEffective" }, { "triggerDate": "$UpdateDateSpecial", "name": "ServiceActivation" }, { "triggerDate": "2$UpdateDateSpecial", "name": "CustomerAcceptance" } ], "updateProduct": { "ratePlanId": "$RPId", "uniqueToken": null, "specificUpdateDate": "$UpdateDateSpecial", "chargeUpdates": [ { "description": null, "chargeNumber": "$ChargeNum", "pricing": { "recurringPerUnit": { "listPrice": 9, "quantity": 15, "priceChangeOption": "NoChange", "priceIncreasePercentage": null } }, "effectiveDate": { "specificTriggerDate": "$UpdateDateSpecial", "triggerEvent": "SpecificDate" }, "billing": { "billingPeriodAlignment": null }, "customFields": {} } ] } } ] } ] } |


To preview invoices for the updated subscription, use the "Preview order" operation.
