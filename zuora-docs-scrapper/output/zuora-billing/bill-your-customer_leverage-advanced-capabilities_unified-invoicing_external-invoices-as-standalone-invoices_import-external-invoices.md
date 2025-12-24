---
title: "Import external invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/external-invoices-as-standalone-invoices/import-external-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:46.894Z"
---

# Import external invoices

Learn how to import external invoices into Zuora using the REST API, including handling tax information.

This tutorial shows you how to import an external invoice into Zuora through the REST API.

Assume that your end customers have purchased some hardware products and you want to import the corresponding invoices with pre-calculated taxes into Zuora as standalone invoices with predefined data. In this scenario, you can use the Create a standalone invoice operation to achieve it. Zuora does not recalculate the taxes.

In the preceding scenario, you have to provide tax information in the `invoiceItems` > `taxItems` field in the request body of this operation.

To import an invoice from an external billing system into Zuora as a standalone invoice through the Zuora REST API, perform the following steps:

1.  Determine the mandatory fields you need for importing an external invoice, including:

    -   accountId

    -   externalId

    -   invoiceDate

    -   invoiceItems


2.  Use the Create a standalone invoice operation to import an invoice from an external billing system into Zuora as a standalone invoice.

    The following sample API request imports an invoice with tax information from an external billing system into Zuora as a standalone invoice.

    | Request | POST /v1/invoices |
    | --- | --- |
    | Request body | { "accountId": "402894847af12293017af1a0406701e7", "invoiceDate": "2021-02-01", "comments": "comments", "autoPay": false, "invoiceItems": [ { "amount": 100, "description": "description", "chargeDate": "2021-02-01 00:00:00", "productRatePlanChargeId": "402894847af12293017af1a03be901e4", "quantity": 1, "serviceStartDate": "2021-02-01", "serviceEndDate": "2021-02-10", "purchaseOrderNumber": "PO-000303", "taxItems": [ { "exemptAmount": 0, "jurisdiction": "", "locationCode": "", "name": "country tax", "taxAmount": 10, "taxCode": "VAT", "taxCodeDescription": "country tax", "taxDate": "2021-02-01", "taxRate": 0.1, "taxRateDescription": "", "taxRateType": "Percentage", "taxMode": "TaxExclusive" } ] } ] } |

    After the sample API request is submitted, the following sample API response is returned:

    | Request | POST /v1/invoices |
    | --- | --- |
    | Response body | { "id": "402894847af12293017af1a04067088f", "invoiceNumber": "INV00000035", "accountId": "402894847af12293017af1a0406701e7", "amount": 110, "amountWithoutTax": 100, "invoiceDate": "2021-02-01 00:00:00", "dueDate": "2021-02-01 00:00:00", "autoPay": true, "comments": "comments string", "status": "Draft", "taxAmount": 10, "taxExemptAmount": 0, "transferredToAccounting": null, "success": true } |
