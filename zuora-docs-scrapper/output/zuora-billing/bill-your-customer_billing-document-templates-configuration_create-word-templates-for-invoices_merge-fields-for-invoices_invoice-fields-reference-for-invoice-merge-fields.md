---
title: "Invoice fields reference for invoice merge fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/invoice-fields-reference-for-invoice-merge-fields"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:48.787Z"
---

# Invoice fields reference for invoice merge fields

This reference details various invoice fields, including adjustments, balances, and charges, along with examples for each field.

| Merge Field | Description |
| --- | --- |
| Invoice.Adjustment | Total of all Invoice Adjustments for this invoice. This does not include Invoice Item or Credit Balance Adjustments.Note: Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment to adjust invoices.Example: ($15.00) |
| Invoice.AmountWithoutTax | Subtotal of all charges without any taxes.Example: $754.00 |
| Invoice.Balance | Invoice Balance as of invoice generation.Example: $306.80 |
| Invoice.BillRunID | The ID of the bill run where the invoice is generated.Example: BR-132399Note:If Unified Invoicing is enabled, standalone invoices are not generated from bill runs, so the value of this field is empty |
| Invoice.Comments | Example: Thank you for your business! Please contact us if you have any questions about your invoice! |
| Invoice.CreditMemoAmount | Total amount of the credit memos that are applied to the invoice.Example : $500.00Only available to users of Invoice Settlement. |
| Invoice.Discount | Total amount of discount charges.Example: ($8.00) |
| Invoice.DueDate | Example: 02/01/2009 |
| Invoice.FileVersionNumber | Invoice PDF file version number.This field is available for new PDF files generated in R186 or later.Example: 1423786755800This field cannot be translated. |
| Invoice.GrossAmount | Total of charge gross amount that is pre-discount and pre-tax.Example: $762.00 |
| Invoice.InvoiceDate | Example: 02/01/2009 |
| Invoice.InvoiceNumber | Example: Inv-549241This field cannot be translated. |
| Invoice.PaymentAmount | Total payments associated with the invoice.Example: $400.00 |
| Invoice.Tax | Total of all taxes for this invoice.Example: $12.80 |
| Invoice.Total | Total charges and taxes for this invoice.Example: $766.80 |
| Invoice.RefundAmount | Total refunds for this invoice.Example: $300.00 |
| Invoice.SubTotalOneTimeChargeAmount | Subtotal of Invoice Items that were generated from One Time charges. This value does not include any associated discounts or any associated taxes.Example: $168.80 |
| Invoice.NetTotalOneTimeChargeAmount | This value includes any associated discounts, but does not include any associated taxes.Example: $166.80 |
| Invoice.TotalOneTimeChargeAmount | This value includes any associated discounts and also includes any associated taxes.Example: $169.60 |
| Invoice.SubTotalRecurringChargeAmount | Subtotal of Invoice Items that were generated from Recurring charges. This value does not include any associated discounts or any associated taxes.Example: $400.00 |
| Invoice.NetTotalRecurringChargeAmount | This value includes any associated discounts, but does not include any associated taxes.Example: $397.00 |
| Invoice.TotalRecurringChargeAmount | This value includes any associated discounts and also includes any associated taxes.Example: $403.00 |
| Invoice.SubTotalUsageChargeAmount | Subtotal of Invoice Items that were generated from Usage charges. This value does not include any associated discounts or any associated taxes.Example: $300.00 |
| Invoice.NetTotalUsageChargeAmount | This value includes any associated discounts, but does not include any associated taxes.Example: $297.00 |
| Invoice.TotalUsageChargeAmount | This value includes any associated discounts and also includes any associated taxes.Example: $301.00 |
| Invoice.NetPaymentAmount | Net Payments associated to this invoice (Payments - Refunds).Example: $100.00 |
| Invoice.TaxInvoiceItemAdjustmentAmount | The sum of all invoice item adjustments that were associated to taxation items.Example: ($10.00) |
| Invoice.ChargeInvoiceItemAdjustmentAmount | The sum of all invoice item adjustments that were associated to charges.Example: ($20.00) |
| Invoice.InvoiceItemAdjustmentAmount | The sum of all invoice item adjustments that were associated to this invoice (includes both charge and tax).Example: ($30.00) |
| Invoice.CreditBalanceAdjustmentAmount | This is the sum of all Credit Balance Adjustments associated to this invoice. These can be applied to the invoice and/or transferred from the invoice.Example: ($5.00) |
| Invoice.TotalInvoiceAdjustmentAmount | Sum of invoice adjustments and invoice item adjustments.Example: ($45.00) |
| Invoice.TotalAdjustmentAmount | Sum of invoice adjustments and invoice item adjustments and credit balance adjustments.Example: ($50.00) |
| Invoice.CreditBalanceIncreaseAmount | Total credit balance adjustment increases.Example: $0.00 |
| Invoice.CreditBalanceDecreaseAmount | Total credit balance adjustment decreases.Example: $5.00 |
| Invoice.SequenceNumber | The invoice number excluding the prefix.Example : 00000001 |
