---
title: "Skip function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/skip-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:10.405Z"
---

# Skip function

The Skip function allows you to bypass a specified number of records in a list, facilitating advanced layout configurations such as fixed content on the first page followed by dynamic content on subsequent pages.

This function skips the processing of N records from the input list, and returns the remaining records after N records are skipped.

With the `Skip` function, you can implement advanced use cases like displaying a fixed layout on the first page. For example, you can configure this function to display a fixed number of records, followed by a payment slip at the bottom of the first page. Meanwhile, the remaining records are displayed on the next pages.

## Syntax

`Skip(N)`

## Remarks

The value of N must be an integer greater than or equal to 1.

If less than N records exist, this function returns an empty list.

## Examples

You can split an input data list into two parts with the following merge field code. The first part is a fixed-size list, so that they can fit in the first page. The second part can be dynamic.

You can use the following functions to display the first seven invoice items on the first page, followed by a payment skip of seven invoice items at the bottom, and then display the remaining invoice items on the next pages.

{{#Invoice.InvoiceItems|First(7)}} .. show header {{/Invoice.InvoiceItems|First(7)}} {{#Invoice.InvoiceItems|Skip(7) .. for the others. {{/Invoice.InvoiceItems|Skip(7)
