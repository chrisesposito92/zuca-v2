---
title: "Functions used in merge fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/supported-objects-and-fields/functions-used-in-merge-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:39.609Z"
---

# Functions used in merge fields

Learn how to use filter, aggregator, and formatter functions to customize merge fields in HTML templates for billing documents.

When customizing HTML templates for billing documents, you can decorate merge fields with filter, aggregator, and formatter functions. These functions cannot exist alone. Use them together with a data field, for example:

`{{Invoice.Amount|Localise}}`

The `Localise` function must be used with a numeric data field `Invoice.Amount` . A pipe "|" is used between the data field and the decorator function.

## Supported filter functions

Use filter functions to take in a list and output a list of filtered records.

The following sections list the filter functions used to decorate merge fields when customizing HTML templates for billing documents, including invoices, credit memos, and debit memos.
