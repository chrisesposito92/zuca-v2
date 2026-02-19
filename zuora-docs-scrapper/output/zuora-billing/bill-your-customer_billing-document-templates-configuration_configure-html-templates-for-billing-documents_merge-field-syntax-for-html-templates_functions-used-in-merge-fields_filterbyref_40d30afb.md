---
title: "Example of a non-optimized pattern"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/filterbyref-function-examples/example-of-a-non-optimized-pattern"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:32.645Z"
---

# Example of a non-optimized pattern

This section illustrates a non-optimized pattern using the FilterByRef function, leading to client-side filtering.

The following example shows a pattern where the FilterByRef function is used incorrectly, resulting in client-side filtering instead of optimized server-side execution.

{{#InvoiceItems}} {{#default\_\_exchangerates|FilterByRef(OtherId\_\_c,EQ,Id)|First(1)}} {{Cmd\_Assign(TheRate,Rate\_\_c,True)}} {{/default\_\_exchangerates|FilterByRef(OtherId\_\_c,EQ,Id)|First(1)}} {{/InvoiceItems}}

Because `InvoiceItem.Id` changes in each iteration; this pattern prevents server-side optimization.
