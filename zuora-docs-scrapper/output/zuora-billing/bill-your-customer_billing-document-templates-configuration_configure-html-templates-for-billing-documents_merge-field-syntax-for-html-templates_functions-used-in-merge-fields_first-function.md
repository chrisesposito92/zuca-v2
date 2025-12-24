---
title: "First function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/first-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:04.414Z"
---

# First function

This function returns the first N records of a list, useful for sorting operations.

This function returns the first N records of the input list. You can use this function with the `SortBy` function to define the sorting order.

## Syntax

`First(N)`

## Remarks

The value of N must be an integer greater than or equal to 1.

If less than N records exist, this function returns the original list.

## Examples

The `InvoiceItems|First(5)` function returns the first five invoice items in the rendering result based on the default sorting order.
