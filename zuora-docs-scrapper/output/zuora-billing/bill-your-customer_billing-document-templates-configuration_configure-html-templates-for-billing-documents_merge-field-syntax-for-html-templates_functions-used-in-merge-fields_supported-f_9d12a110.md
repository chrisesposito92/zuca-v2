---
title: "Supported formatter functions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/supported-formatter-functions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:33.209Z"
---

# Supported formatter functions

Explore formatter functions that transform scalar inputs into outputs, essential for customizing HTML templates in billing documents.

Use formatter functions to take in a scalar type input and generate a scalar type value as output.

The following sections list the formatter functions used to decorate merge fields when customizing HTML templates for billing documents, including invoices, credit memos, and debit memos.

## Substr function

This function takes in a text type input and returns a text value.

## Syntax

`Substr(Begin,End)`

Arguments Begin and End are integers. The value of these arguments must follow the following formula:

0 <= Begin < End

## Remarks

If the input text length is less than End, the End value is set to the length of the input list.

For example, if you define the function as `Substr(0,10)` but the input text has only six characters, all the six characters are considered as the input data.
