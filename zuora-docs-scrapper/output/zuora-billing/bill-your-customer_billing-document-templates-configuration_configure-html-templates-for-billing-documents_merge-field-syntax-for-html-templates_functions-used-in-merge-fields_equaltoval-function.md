---
title: "EqualToVal function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/equaltoval-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:38.210Z"
---

# EqualToVal function

The EqualToVal function compares an input with an argument value, returning a boolean result for use in boolean sections.

This function compares the input with the argument value and returns a boolean value so that it can be used as a boolean section.

## Syntax

`EqualToVal(Value)`

## Remarks

The input of this function must be a scalar value.

The argument value of the `EqualToVal` function supports containing whitespaces. You can also use expressions to compare two strings with whitespaces. For more examples of this function, see Logic control and looping.

Use `EqualToVal(0)` to compare numbers, and it has the same behavior as `EqualToVal(0.00)` .

Use `EqualToVal("0")` to compare strings.

## Examples

`{{#Account.Status|EqualToVal(Active)}}` Handle Active Account `{{/Account.Status|EqualToVal(Active)}}`.
