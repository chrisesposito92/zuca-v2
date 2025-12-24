---
title: "Symbol function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/symbol-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:44.522Z"
---

# Symbol function

This function converts currency codes into their respective currency symbols.

This function converts a currency code to a currency symbol.

## Examples

`{{Account.Currency|Symbol}} {{Invoice.Balance|Localise}}`

The output of the example can be displayed as $ 1,000.00.
