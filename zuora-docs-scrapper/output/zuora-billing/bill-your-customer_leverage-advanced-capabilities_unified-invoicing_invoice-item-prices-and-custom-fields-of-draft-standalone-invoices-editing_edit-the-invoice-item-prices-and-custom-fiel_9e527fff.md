---
title: "Edit the invoice item prices and custom fields of standalone invoices through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/invoice-item-prices-and-custom-fields-of-draft-standalone-invoices-editing/edit-the-invoice-item-prices-and-custom-fields-of-standalone-invoices-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:31.577Z"
---

# Edit the invoice item prices and custom fields of standalone invoices through the REST API

Edit invoice item prices and custom fields of draft standalone invoices using the Zuora REST API.

You can use the Update an invoice operation to edit the invoice item price and custom fields of a draft standalone invoice, or the Update invoices operation to edit the invoice item prices and custom fields of multiple draft standalone invoices in one single request.

In the aforementioned scenario, you have to provide a new price in the `invoiceItems` > `price` field and new custom field values in the request body of the Update an invoice operation.

To edit the invoice item price and custom fields of a draft standalone invoice through the Zuora REST API, perform the following steps:

1.  Determine the mandatory fields that you need for editing the invoice item price and custom fields of a standalone invoice, including:

    -   Path parameter: `invoiceId`

    -   Request field: `invoiceItems` > `price`

    -   Request field: custom fields to change


2.  Use the Update an invoice operation to edit the invoice item price and custom fields of a draft standalone invoice.

    The following sample API request edits the invoice item price and two custom fields of a draft standalone invoice:

    | Request | PUT /v1/invoices/{invoiceId} |
    | --- | --- |
    | Request body | { "autoPay": true, "comments": "Invoice comments", "invoiceItems": [ { "unitPrice": 120, "InvoiceDetails_Date_Optional__c": "2021-08-01", "InvoiceDetails_Date_Required__c": "2021-08-01", "amount": 360, "id": "2c92c8fb7ae2ed7b017ae5d464ac693c" } ] } |

    After the sample API request is submitted, the following sample API response is returned:

    | Request | PUT /v1/invoices/{invoiceId} |
    | --- | --- |
    | Response body | { "id": "2c92c8fb7ae2ed7b017ae5d4647d693b", "number": "INV00001508", "accountId": "2c92c8fb7ae2ed67017ae5c126a361ea", "invoiceDate": "2021-02-01", "currency": "USD", "targetDate": null, "dueDate": "2021-03-03", "postedOn": null, "postedById": null, "status": "Draft", "amount": 360.000000000, "taxAmount": 0.000000000, "totalTaxExemptAmount": 0.000000000, "balance": 360.000000000, "comment": "Invoice comments", "autoPay": true, "transferredToAccounting": "No", "creditBalanceAdjustmentAmount": 0.000000000, "createdDate": "2021-07-26 19:38:59", "createdById": "2c92c8fe78a9a0740178a9b0b06c007a", "updatedDate": "2021-07-29 03:04:11", "updatedById": "2c92c8fe78a9a0740178a9b0b06c007a", "cancelledOn": null, "cancelledById": null, "InvoiceNumber__c": null, "Invoice_Text_Required_Default__c": "Invoice Default Text", "Invoice_Date_Required__c": null, "IntegrationId__NS": null, "IntegrationStatus__NS": null, "Invoice_Picklist_Required_Default__c": "inv_first", "Invoice_Text_Optional__c": null, "Invoice_Picklist_Optional__c": "inv_first", "Invoice_Date_Optional__c": null, "Entity__c": "STD", "SyncDate__NS": null, "success": true } |
