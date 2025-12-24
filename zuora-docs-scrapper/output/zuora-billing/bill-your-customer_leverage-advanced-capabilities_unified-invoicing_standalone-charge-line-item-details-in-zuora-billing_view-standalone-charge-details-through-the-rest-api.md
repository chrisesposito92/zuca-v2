---
title: "View standalone charge details through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/standalone-charge-line-item-details-in-zuora-billing/view-standalone-charge-details-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:54.594Z"
---

# View standalone charge details through the REST API

Learn how to view detailed information about standalone charge line items in invoices using the REST API.

After a standalone invoice or consolidated invoice is created, you can view detailed information about standalone charge line items through the REST API.

You can use the List all items of an invoice operation to view detailed information about standalone charge line items included in a standalone or consolidated invoice.

To view detailed information about standalone charge line items included in a standalone or consolidated invoice through the Zuora REST API, perform the following steps:

1.  Determine the value of the `invoiceId` path parameter that you need for viewing detailed information about standalone charge line items included in a standalone or consolidated invoice.
2.  Use the List all items of an invoice operation to view detailed information about the standalone charge line items included in a standalone or consolidated invoice.

    The following sample API response displays detailed information about standalone charge line items included in a standalone or consolidated invoice:

    | Request | GET /v1/invoices/{invoiceId}/items |
    | --- | --- |
    | Response body | { "invoiceItems": [ { "id": "2c92c8fb7ae2ed7b017ae5d464ac693c", "subscriptionName": null, "subscriptionId": null, "serviceStartDate": "2021-07-27", "serviceEndDate": null, "chargeAmount": 10.000000000, "chargeDescription": null, "chargeName": "Consulting service", "chargeId": null, "productName": "Test Product", "quantity": 1.000000000, "taxAmount": 0.000000000, "unitOfMeasure": "", "IntegrationId__NS": null, "IntegrationStatus__NS": null, "InvoiceDetails_Date_Optional__c": null, "InvoiceDetails_Date_Required__c": null, "InvoiceDetails_Picklist_Optional__c": null, "InvoiceDetails_Picklist_Required_Default__c": "invItem_first", "InvoiceDetails_Text_Optional__c": null, "InvoiceDetails_Text_Required_Default__c": "Invoice Details Default Text", "SyncDate__NS": null, "chargeDate": "2021-07-27 00:00:00", "chargeType": "OneTime", "processingType": "Charge", "balance": 10.000000000, "appliedToItemId": null, "taxationItems": { "data": [] }, "availableToCreditAmount": 10.000000000, "unitPrice": 10.000000000, "bookingReference": null, "itemType": null, "purchaseOrderNumber": "", "revRecCode": null, "revRecTriggerCondition": null, "revenueRecognitionRuleName": "Recognize upon invoicing", "recognizedRevenueAccountingCode": null, "deferredRevenueAccountingCode": null, "accountingCode": null, "productRatePlanChargeId": "2c92c8fb7ac2863a017ac2cef11c1bb2", "sku": "SKU-00000553", "taxCode": "", "taxMode": "TaxExclusive", "description": "" } ], "success": true } |
