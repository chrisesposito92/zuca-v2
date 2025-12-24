---
title: "Last function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/last-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:07.547Z"
---

# Last function

This function retrieves the last N records from a list, allowing for sorting with the SortBy function. It requires N to be an integer of 1 or more.

This function returns the last N records of the input list. You can use this function with the `SortBy` function to define the sorting order.

## Syntax

`Last(N)`

## Remarks

The value of N must be an integer greater than or equal to 1.

If less than N records exist, this function returns the original list.

## Examples

The `InvoiceItems|Last(5)` function returns the last five invoice items in the rendering result based on the default sorting order.
