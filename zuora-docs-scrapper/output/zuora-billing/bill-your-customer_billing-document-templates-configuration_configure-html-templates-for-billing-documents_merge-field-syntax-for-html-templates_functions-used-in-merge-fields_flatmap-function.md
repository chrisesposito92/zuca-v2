---
title: "FlatMap function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/flatmap-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:16.679Z"
---

# FlatMap function

The FlatMap function processes list-type fields, transforming nested lists into a single list by applying a mapping function.

This function is similar to the `Map` function, except that FieldName has to be a list type.

## Syntax

`FlatMap(ListFieldName)`

## Examples

Assume that an input of this function is as follows:

\[ { "A": "...", "L": \[ {"B": "b1"},{"B": "b2"} \] }, { "A": "...", "L": \[ {"B": "b3"} \] } \]

The `FlatMap(L)` function returns the following output in the rendering result:

\[ {"B": "b1"}, {"B": "b2"}, {"B": "b3"} \]
