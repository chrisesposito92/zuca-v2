---
title: "Nth function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/nth-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:28.072Z"
---

# Nth function

This function retrieves the Nth element from an input list, supporting both positive and negative indexing.

This function returns the Nth element of an input list.

## Syntax

`Nth(number)`

The `Nth` function syntax has the following arguments:

| Argument | Description |
| --- | --- |
| number | Required. The value of this argument is an ordinal number that specifies the position of an item in the input list.The argument value is an integer, and can be positive or negative. A positive integer indexes from the beginning of the input list; a negative integer indexes from the end of the input list. For example:Nth(1) returns the first item of the input list.Nth(2) returns the second item of the input list.Nth(-1) returns the last item of the input listNth(-2) returns the last but one item of the input list. |

## Remarks

If the input list is undefined, this function always returns `null` in the rendered result. If the index is out of the boundary, this function always returns `null` instead of throwing errors.

## Examples

If you want to achieve the same goal as one filter option `FromLastInvoice` is used in the Previous Transaction table in Word templates to get the last but one invoice with the transaction date right before the date the current invoice is posted in the list of `Account.Invoices` , you can use the following function in HTML templates:

`Invoice.Account.Invoices|Nth(-2)`

This function returns the last but one item of the invoices associated with the corresponding account.
