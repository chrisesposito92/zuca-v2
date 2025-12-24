---
title: "SortBy function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/sortby-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:02.092Z"
---

# SortBy function

The SortBy function organizes input data according to specified fields and directions, supporting both ascending and descending order.

This function sorts input data based on the specified argument fields.

## Syntax

`SortBy(FieldName,Direction(,FieldName,Direction){0..2})`\\

This function supports the following directions:

-   ASC: Digits first → Lowercase letters → Uppercase letters → Alphabetical order from A to Z. For instance, in the sequence 0123 > 9aAbBcC > zZ. When sorting the list {123 abc, example, Abc, Example, EXAMPLE, abc 123}, the order would be:

    -   123 abc

    -   Abc

    -   abc 123

    -   example

    -   Example

    -   EXAMPLE

        Sample:

        | Sample | Previous Sort | Enhanced Sort |
        | --- | --- | --- |
        | example | Example Test | based |
        | based | RANDOM | example |
        | Example Test | based | Example Test |
        | RANDOM | example | RANDOM |

-   DESC: sorting data from the largest to the smallest.


## Remarks

You can specify the FieldName argument to be dotted paths.

This function supports at most three pairs of field names and directions.

## Examples

Assume that you want to show all the charges in the order of service start date, use the following functions:

`{{#InvoiceItems|SortBy(ServiceStartDate,ASC)}}`

`{{ChargeName}} - {{ChargeAmount}} - {{ServiceStartDate}}`

`{{/InvoiceItems|SortBy(ServiceStartDate,ASC)}}`
