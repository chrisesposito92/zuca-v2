---
title: "DateAdd function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/dateadd-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:22.875Z"
---

# DateAdd function

The DateAdd function calculates a relative date by adding a specified time interval to the current date, useful for filtering transactions within a specific timeframe.

This function filters an input list by a relative date value, which is calculated by adding a specified time interval to the current date. For example, you can use this function to get previous transactions in the last 30 days or the last year.

## Syntax

`DateAdd(Value,DatePart)`

The `DateAdd` function syntax has the following arguments:

| Argument | Description |
| --- | --- |
| Value | Required. The number of intervals that you want to add to the part of a date specified in the DatePart argument. The argument value is an integer, and can be positive (to get dates in the future) or negative (to get dates in the past). |
| DatePart | Required. The part of the date to which the DateAdd function adds the number of intervals.The argument value can be any of the following options:D: stands for daysM: stands for monthsY: stands for years |

## Examples

Assume that you want to get payments with the effective date within the past month. To achieve this goal, you can use the following function sample:

{{Cmd\_Assign(VarTheInvoiceDate,Invoice.InvoiceDate,True)}} {{Cmd\_Assign(VarTheDate,Invoice.InvoiceDate|DateAdd(-1,M),True)}} {{#Invoice.Account.Payments|FilterByValue(Status,EQ,Processed)|FilterByRef(EffectiveDate,GT,VarTheDate)|FilterByRef(EffectiveDate,LE,VarTheInvoiceDate)}} {{PaymentNumber}}, {{EffectiveDate}} {{/Invoice.Account.Payments|FilterByValue(Status,EQ,Processed)|FilterByRef(EffectiveDate,GT,VarTheDate)|FilterByRef(EffectiveDate,LE,VarTheInvoiceDate)}}

The preceding function sample returns the following output in the rendered result:

`P-00000020, 2021-03-20 P-00000019, 2021-03-20 P-00000018, 2021-03-14`
