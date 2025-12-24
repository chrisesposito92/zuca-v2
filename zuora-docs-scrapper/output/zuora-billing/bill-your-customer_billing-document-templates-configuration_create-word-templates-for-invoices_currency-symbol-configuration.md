---
title: "Currency symbol configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/currency-symbol-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:25.266Z"
---

# Currency symbol configuration

Learn how to configure invoice templates to display specific currency symbols, such as the Euro, by using separate templates and merge field definitions.

You can display currency symbols in the invoice template. To generate invoices with specific currency symbols, you must create separate invoice templates for each currency and include the MERGEFORMAT using examples described in Date and Numeric Format Examples .

You need to view the field codes for the currency field in the invoice template, then specify the currency symbol in the merge field definition:

MERGEFIELD InvoiceItem.AmountWithoutTax \\\# €#,##0.00

All future invoices will then display this currency with the Euro symbol.
