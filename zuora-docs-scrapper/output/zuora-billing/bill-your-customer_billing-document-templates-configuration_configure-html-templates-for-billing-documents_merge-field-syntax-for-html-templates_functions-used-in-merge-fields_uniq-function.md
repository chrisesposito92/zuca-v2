---
title: "Uniq function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/uniq-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:19.743Z"
---

# Uniq function

The Uniq function is used to filter out duplicate records from a list, ensuring a unique set of results.

This function filters out the duplicate records in the list.

## Remarks

You can use the `Uniq` function to dedup the rendering result.

## Examples

An invoice can be generated for multiple subscriptions, which are linked on `InvoiceItem` according to the object model. Use the following function to get all the subscriptions of this invoice:

`Invoice.InvoiceItems|Map(Subscription)`

But the problem is that the result contains duplicate records, since there are multiple invoice items for the same subscription.

To get a unique list of the subscription, append a `Uniq` function to the preceding function:

`Invoice.InvoiceItems|Map(Subscription)|Uniq`
