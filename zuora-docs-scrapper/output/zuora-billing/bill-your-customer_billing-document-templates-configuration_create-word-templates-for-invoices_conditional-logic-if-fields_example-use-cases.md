---
title: "Example Use Cases"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/conditional-logic-if-fields/example-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:05.864Z"
---

# Example Use Cases

This topic provides examples of using IF fields to conditionally display text, merge field values, or hide empty tables in invoices.

## Example 1: Display Text or a Merge Field Value

The IF field in this example tests `InvoiceItem.ExtendedPrice` to see if the value of the merge field equals `0` . If the value equals `0` , the test returns `true` and the IF field displays "FREE" on the invoice. If the value of the field does not equal `0` , then the IF field displays the value of the merge field `InvoiceItem.ExtendedPrice` on the invoice instead.

`{ IF {MERGEFIELD InvoiceItem.ExtendedPrice \* MERGEFORMAT​} = 0 "FREE" {MERGEFIELD InvoiceItem.ExtendedPrice \* MERGEFORMAT​} }`

Note:

Add the `\*` `MERGEFORMAT` switch to the end of all fields, including IF fields. The switch ensures that any formatting you apply to a result displayed by a field is retained in subsequent results.

Here is what the invoice might look like when the IF field in this example is used in the TOTAL column of a Rate Plan Summary table:

| RATE PLAN SUMMARY |  |  |  |  |
| --- | --- | --- | --- | --- |
| Subscription Identifier | Rate Plan Name | Subtotal | Tax | TOTAL |
| A- S00000010 | Data Plan | $39.99 | $0.00 | $39.99 |
| A- S00000010 | Cable Plan | $0.00 | $0.00 | FREE |
| A- S00000011 | Data Plan | $19.99 | $0.00 | $19.99 |
| A- S00000011 | Cable Plan | $0.00 | $0.00 | FREE |

## Example 2: Display Nothing or a Merge Field Value

The IF field in this example tests `Invoice.Discount` to see if the value of the merge field equals `0` . If the value equals `0` , the test returns `true` , and the IF field does not display anything on the invoice. If the value of `Invoice.Discount` does not equal `0` , the test returns `false` , and the IF field displays "You saved $X this month" (where X is the value of `Invoice.Discount` ).

`{ IF {MERGEFIELD Invoice.Discount \* MERGEFORMAT} = 0 "" "You saved {MERGEFIELD Invoice.Discount \* MERGEFORMAT} this month." }`

Note:

The IF field displays nothing if the result is two consecutive double quotes ( `""` ).

Here is what the invoice might look like when this IF field is used to display the Invoice Discount in an Invoice Summary table:

| INVOICE SUMMARY |  |
| --- | --- |
| Invoice Number | INV-00000123 |
| Subtotal | $80.00 |
| Tax | $16.00 |
| TOTAL | $96.00 |
| Invoice Discount | You saved $20.00 this month |

## Example 3: Hide Empty Tables

If you want to hide an empty table on a billing document, you can use the TableNameTable.Size merge field to control its visibility.

For example, the following IF clause can be used to hide an empty tax summary table from an invoice PDF file.

{ IF "{MERGEFIELD TaxSummaryTable.Size \\\* MERGEFORMAT}" = "0" "" "

| TAX SUMMARY | Tax Name | Tax Rate | Tax Rate Type | Tax Amount |
| --- | --- | --- | --- | --- |
| Tax Name | Tax Rate | Tax Rate Type | Tax Amount |  |
| {MERGEFIELD TableStart:TaxSummary \* MERGEFORMAT}{MERGEFIELD TaxSummary.TaxName \* MERGEFORMAT} | {MERGEFIELD TaxSummary.TaxRate \* MERGEFORMAT} | {MERGEFIELD TaxSummary.TaxRateType \* MERGEFORMAT} | {MERGEFIELD TaxSummary.TaxExtendedAmount \* MERGEFORMAT}{MERGEFIELD TableEnd:TaxSummary \* MERGEFORMAT} |  |

`" \* MERGEFORMAT }`

If tax summary data exists, the tax summary table is displayed as follows. Otherwise, the table is hidden.

| TAX SUMMARY | Tax Name | Tax Rate | Tax Rate Type | Tax Amount |
| --- | --- | --- | --- | --- |
| Tax Name | Tax Rate | Tax Rate Type | Tax Amount |  |
| tax1 | 0.1 | Percentage | $10.00 |  |
