---
title: "Cancel a subscription and write off all unpaid invoices using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation-and-write-off-all-unpaid-invoices/cancel-a-subscription-and-write-off-all-unpaid-invoices-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:28.654Z"
---

# Cancel a subscription and write off all unpaid invoices using the REST API

This topic explains how to cancel a subscription and write off all unpaid invoices using the REST API by utilizing the Create an order operation.

You can only cancel a subscription and write off all unpaid invoices through the Create an order operation, and you cannot perform the task through the Create an order asynchronously operation.

In the request body of the Create an order operation, specify the following nested fields under `processingOptions` to define write-off related information.

| Field Name | Data Type | Required/Optional | Description |
| --- | --- | --- | --- |
| writeOff | Boolean | Required | Indicates whether to write off all outstanding balance on the invoice.To write off all unpaid invoices, set this value to true .When this field is set to true , the generated credit memos have a reason code of Write-off and it cannot be overridden. |
| writeOffBehavior | Object | Optional | The financial information of the credit memo items that are generated to write off the invoice balance.Note:All the credit memo items (CMI) that are used to write off the invoice will be applied with the same financial information.The financial information specified here will not be added to CMIs generated from the unconsumed services of the canceled subscription.See writeOffBehavior in the request body of the Create an order operation for details. |
| runBilling | Boolean | Required | Indicates if the current request needs to generate an invoice. The invoice will be generated against all subscriptions included in this order.To avoid generating the final invoice, set it to false. |
| documentDate | string <date> | Required | The Invoice Date displayed on the invoice in UI. |
| targetDate | string <date> | Required | Date through which to calculate charges if an invoice is generated. See What is a Target Date? .The Target Date displayed on the invoice in UI. |
| collectPayment | Boolean | Required | Indicates if the current request needs to collect payments.To write off all unpaid invoices, set this value to false . |

You can view the status of each write-off transaction in the `writeOff` fields in the response body.

Below is a request example.

| Request | POST /v1/orders/ |
| --- | --- |
| Request Body | { "orderDate": "2023-05-24", "existingAccountNumber": "A00000850", "customFields": {}, "category": "NewSales", "subscriptions": [ { "subscriptionNumber": "A-S00002089", "orderActions": [ { "type": "CancelSubscription", "customFields": {}, "triggerDates": [ { "name": "CustomerAcceptance", "triggerDate": "2023-05-24" }, { "name": "ServiceActivation", "triggerDate": "2023-05-24" }, { "name": "ContractEffective", "triggerDate": "2023-05-24" } ], "cancelSubscription": { "cancellationPolicy": "SpecificDate", "cancellationEffectiveDate": "2023-05-24" } } ] } ], "processingOptions": { "runBilling": false, "writeOff": true, "billingOptions": { "documentDate": "2023-05-24", "targetDate": "2023-05-24" }, "collectPayment": false } } |

To use the above request body directly, replace the values, including the pre-defined variables, with your own data.

Below is the response returned:

| Response Body | { "success": true, "orderNumber": "O-00005009", "accountNumber": "A00000850", "status": "Completed", "subscriptionNumbers": [ "A-S00002089" ], "writeOff": [ { "invoiceNumber": "INV00029461", "amount": 30.00, "status": "Success", "writeOffCreditMemoNumber": "CM00000340" } ] } |
| --- | --- |

The `writeOff` fields display write-off results.
