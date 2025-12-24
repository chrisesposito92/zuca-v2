---
title: "Example of a non-optimized pattern"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/example-of-a-non-optimized-pattern"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:57.239Z"
---

# Example of a non-optimized pattern

This document illustrates a non-optimized pattern using the FilterByRef function, leading to client-side filtering, and provides best practices for enabling server-side optimization.

The following example shows a pattern where the FilterByRef function is used incorrectly, resulting in client-side filtering instead of optimized server-side execution.

{{#InvoiceItems}} {{#default\_\_exchangerates|FilterByRef(OtherId\_\_c,EQ,Id)|First(1)}} {{Cmd\_Assign(TheRate,Rate\_\_c,True)}} {{/default\_\_exchangerates|FilterByRef(OtherId\_\_c,EQ,Id)|First(1)}} {{/InvoiceItems}}

Because `InvoiceItem.Id` changes in each iteration; this pattern prevents server-side optimization.

## Best practices summary

-   Enable the Filterable option on all relevant fields of the standalone custom object.

-   Keep reference fields global and ensure they resolve to a single value, for example, from a standard object field or constant.

-   If you’re unsure about configuration, contact Zuora Global Services for guidance.
