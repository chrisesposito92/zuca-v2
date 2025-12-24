---
title: "Creation of taxation items for invoices through API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/creation-of-taxation-items-for-invoices-through-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:41.979Z"
---

# Creation of taxation items for invoices through API

This topic explains how to create, update, delete, and retrieve taxation items for invoices using REST and SOAP APIs.

This article describes how to use the REST API to create taxation items and how to use the SOAP API create call to import a CSV or zipped CSV file of mass taxation items to invoices.

## Create taxation items via REST

You can create taxation items for invoices through Create taxation items for invoices . With this REST API, you can create multiple tax items for an invoice with one API call.

The create() call returns fail or success.

## Examples

-   Post taxation items for invoices

    Method: Post

    Endpoint: `v1/taxationitems/invoice/4028818585df3c6f0185e2f054da20eb`

    Request { "taxationItems": \[ { "taxRate": 0.1, "taxCodeDescription": "taxCodeDescription", "jurisdiction": "Jurisdiction", "name": "taxNameExclusive", "financeInformation": { "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode" }, "taxRateType": "Percentage", "locationCode": "8", "taxCode": "ExclusiveTaxCode", "taxRateDescription": "taxRateDescription", "taxAmount": 10, "taxDate": "2016-10-10", "invoiceItemId": "4028818585df3c6f0185e2d060951eed" }, { "jurisdiction": "Jurisdiction", "taxRateType": "Percentage", "taxCode": "InclusiveTaxCode", "taxRateDescription": "taxRateDescription", "taxDate": "2016-10-10", "invoiceItemId": "4028818585df3c6f0185e2d060951eed", "taxRate": 0.1, "taxCodeDescription": "taxCodeDescription", "taxMode": "TaxInclusive", "name": "taxNameInclusive", "financeInformation": { "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode" }, "locationCode": "8", "taxAmount": 10 }, { "jurisdiction": "Jurisdiction", "taxRateType": "Percentage", "taxCode": "ExclusiveTaxCode", "taxRateDescription": "taxRateDescription", "taxDate": "2016-10-10", "invoiceItemId": "4028818585df3c6f0185e2d060961eee", "taxRate": 0.1, "taxCodeDescription": "taxCodeDescription", "taxMode": "TaxExclusive", "name": "taxNameExclusive", "financeInformation": { "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode" }, "locationCode": "8", "taxAmount": 10 }, { "jurisdiction": "Jurisdiction", "taxRateType": "Percentage", "taxCode": "InclusiveTaxCode", "taxRateDescription": "taxRateDescription", "taxDate": "2016-10-10", "invoiceItemId": "4028818585df3c6f0185e2d060961eee", "taxRate": 0.1, "taxCodeDescription": "taxCodeDescription", "taxMode": "TaxInclusive", "name": "taxNameInclusive", "financeInformation": { "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode" }, "locationCode": "8", "taxAmount": 10 } \] }

-   Update taxation items for invoices

    Method: Put

    Endpoint: `/v1/taxationitems/4028818585df3c6f0185e2f5ea072100`

    Request

    { "name": "TAX NAME UPDATED", "financeInformation": { "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode" }, "taxCode": "ExclusiveTaxCode UPDATED", "taxAmount": 20 }

    Response

    { "createdById": "3ac2e5db41994fa0b04aaec918443701", "createdDate": "2023-01-24 14:17:24", "exemptAmount": 0.000000000, "id": "4028818585df3c6f0185e2f5ea072100", "memoItemId": null, "invoiceItemId": "4028818585df3c6f0185e2f0550220ec", "sourceTaxItemId": null, "jurisdiction": "Jurisdiction", "locationCode": "8", "name": "TAX NAME UPDATED", "taxAmount": 20.00, "taxCode": "ExclusiveTaxCode UPDATED", "taxCodeDescription": "taxCodeDescription", "taxDate": "2016-10-10", "taxRate": 0.100000000, "taxMode": "TaxExclusive", "taxRateDescription": "taxRateDescription", "taxRateType": "Percentage", "updatedById": "3ac2e5db41994fa0b04aaec918443701", "updatedDate": "2023-01-24 14:32:06", "financeInformation": { "onAccountAccountingCode": null, "onAccountAccountingCodeType": null, "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode", "salesTaxPayableAccountingCodeType": "SalesTaxPayable", "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "accountsReceivableAccountingCodeType": "AccountsReceivable" }, "success": true }
-   Delete taxation items for invoices

    Method: Delete

    Endpoint: `v1/taxationitems/4028818585df3c6f0185e2f5ea072100`

    Response

    { "success": true }
-   Retrieve taxation items for invoices

    Method: Get

    Endpoint: `v1/taxationitems/4028818585df3c6f0185e2f5ea082101`

    Response

    { "createdById": "3ac2e5db41994fa0b04aaec918443701", "createdDate": "2023-01-24 14:17:25", "exemptAmount": 0.000000000, "id": "4028818585df3c6f0185e2f5ea082101", "memoItemId": null, "invoiceItemId": "4028818585df3c6f0185e2f0550220ec", "sourceTaxItemId": null, "jurisdiction": "Jurisdiction", "locationCode": "8", "name": "taxNameInclusive", "taxAmount": 10.000000000, "taxCode": "InclusiveTaxCode", "taxCodeDescription": "taxCodeDescription", "taxDate": "2016-10-10", "taxRate": 0.100000000, "taxMode": "TaxInclusive", "taxRateDescription": "taxRateDescription", "taxRateType": "Percentage", "updatedById": "3ac2e5db41994fa0b04aaec918443701", "updatedDate": "2023-01-24 14:17:25", "financeInformation": { "onAccountAccountingCode": null, "onAccountAccountingCodeType": null, "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode", "salesTaxPayableAccountingCodeType": "SalesTaxPayable", "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "accountsReceivableAccountingCodeType": "AccountsReceivable" }, "success": true } { "createdById": "3ac2e5db41994fa0b04aaec918443701", "createdDate": "2023-01-24 14:17:25", "exemptAmount": 0.000000000, "id": "4028818585df3c6f0185e2f5ea082101", "memoItemId": null, "invoiceItemId": "4028818585df3c6f0185e2f0550220ec", "sourceTaxItemId": null, "jurisdiction": "Jurisdiction", "locationCode": "8", "name": "taxNameInclusive", "taxAmount": 10.000000000, "taxCode": "InclusiveTaxCode", "taxCodeDescription": "taxCodeDescription", "taxDate": "2016-10-10", "taxRate": 0.100000000, "taxMode": "TaxInclusive", "taxRateDescription": "taxRateDescription", "taxRateType": "Percentage", "updatedById": "3ac2e5db41994fa0b04aaec918443701", "updatedDate": "2023-01-24 14:17:25", "financeInformation": { "onAccountAccountingCode": null, "onAccountAccountingCodeType": null, "salesTaxPayableAccountingCode": "salesTaxPayableAccountingCode", "salesTaxPayableAccountingCodeType": "SalesTaxPayable", "accountsReceivableAccountingCode": "accountsReceivableAccountingCode", "accountsReceivableAccountingCodeType": "AccountsReceivable" }, "success": true }
