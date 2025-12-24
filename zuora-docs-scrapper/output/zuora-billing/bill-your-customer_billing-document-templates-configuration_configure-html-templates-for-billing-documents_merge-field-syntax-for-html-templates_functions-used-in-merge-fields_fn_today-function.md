---
title: "Fn_Today function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/fn_today-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:56.666Z"
---

# Fn\_Today function

The Fn\_Today function returns the current date in the session time zone in the format YYYY-MM-DD, and can be used with other functions like Localise and FilterbyRef.

This function returns a date in the current session time zone in the default format: YYYY-MM-DD.

## Syntax

`Fn_Today()`

## Remarks

This function works with other functions, for example, `Localise` and `FilterbyRef` .

-   To localise the current date in the tenant timezone, use `{{Fn_Today()|Localise}}` .

-   To filter the input data where the invoice date is earlier than the current date in the tenant timezone, use `FilterByRef(InvoiceDate,LT,Fn_Today())` .


## Examples

The current time is August 30, 2022 in the Pacific time Zone (UTC-8) and the language is en\_US.

-   The formula `{{Fn_Today()}}` has a result of "2022-08-30."

-   The formula `{{Fn_Today()|Localise}}` has a result of "08/30/2022."

-   You can use `FilterByRef(InvoiceDate,LT,Fn_Today())` to filter the input data where the invoice date is earlier than August 30, 2022.
