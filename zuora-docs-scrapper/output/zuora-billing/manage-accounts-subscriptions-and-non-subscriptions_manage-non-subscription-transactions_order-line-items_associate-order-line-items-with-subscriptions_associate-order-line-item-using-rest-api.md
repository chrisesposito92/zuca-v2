---
title: "Associate order line item using REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/associate-order-line-items-with-subscriptions/associate-order-line-item-using-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:53.999Z"
---

# Associate order line item using REST API

This topic explains how to create an order line item with a new subscription using the REST API.

You can use the Create an order operation to create an order line item with a new subscription.

To create an order line item with a new subscription:

1.  Determine the mandatory fields you will need for creating an order, including: These fields are a minimal set of fields required for an order. You can configure other optional fields based on your business needs.

    -   The following fields for a subscription:

        -   orderDate

        -   productRatePlanId

        -   existingAccountNumber
            Note: You can also create both a subscription and a new account at the same time. In this case, you need to provide several other fields instead of `existingAccountNumber` . See Create an order for details.

    -   The following fields and other required custom fields for order line items:

        -   itemName

        -   itemType

        -   itemState

        -   amountPerUnit


2.  Use the "Create an order" operation to create an order.

The following sample API request creates a subscription and two order line items under an existing account:

| Request | POST /v1/orders |
| --- | --- |
| Request Body | { "existingAccountNumber": "A00000002", "orderDate": "2021-04-27", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "triggerDate": "$Today", "name": "ContractEffective" }, { "triggerDate": "$Today", "name": "ServiceActivation" }, { "triggerDate": "$Today", "name": "CustomerAcceptance" } ], "createSubscription": { "terms": { "autoRenew": false, "renewalSetting": "RENEW_TO_EVERGREEN", "initialTerm": { "startDate": "$Today", "period": 12, "periodType": "Month", "termType": "TERMED" } }, "subscribeToRatePlans": [ { "productRatePlanId": "4028828c7a83d76f017a85747d4e1aec" } ] } } ] } ], "orderLineItems": [ { "itemName": "LMS Training Fee", "itemType": "Product", "description": "webcam", "purchaseOrderNumber": "PO-12345678", "productCode": "P-0000001", "quantity": 10, "amountPerUnit": 499, "listPricePerUnit": 50, "transactionDate": "2021-02-01", "itemState": "SentToBilling", "billTargetDate": "2021-02-01" }, { "itemName": "delivery fee", "itemType": "Fee", "description": "delivery fee", "purchaseOrderNumber": "PO-12345678", "productCode": "F-0000001", "quantity": 1, "amountPerUnit": 12.95, "listPricePerUnit": 12.95, "transactionDate": "2021-02-01", "itemState": "SentToBilling", "billTargetDate": "2021-02-01", "customFields": { "Color__c": "black", "Mode__c": "scalar" } } ], "processingOptions": { "runBilling": true, "collectPayment": true } } |

To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

To preview invoices for the new subscription, use the Preview an order operation.
