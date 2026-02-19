---
title: "Invoice fields for merge field mapping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/invoice-fields-for-merge-field-mapping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:48.071Z"
---

# Invoice fields for merge field mapping

This reference details the mapping of invoice fields between Word invoice templates and HTML invoice templates.

The following table lists the mapping for Invoice fields in Word invoice templates and HTML invoice templates.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| Invoice.Adjustment | Invoice.AdjustmentAmount |
| Invoice.AmountWithoutTax | Invoice.AmountWithoutTax |
| Invoice.Balance | Invoice.Balance |
| Invoice.BillRunID | {{#Invoice.Source\|EqualToVal(BillRun)}} {{Invoice.SourceId}} {{/Invoice.Source\|EqualToVal(BillRun)}} |
| Invoice.Comments | Invoice.Comments |
| Invoice.CreditMemoAmount | Invoice.CreditMemoAmount Note: This field is only available if Invoice Settlement is enabled |
| Invoice.Discount | {{Invoice.InvoiceItems\|FilterByValue(ProcessingType,EQ,1)\|Sum(ChargeAmount)}} |
| Invoice.DueDate | Invoice.DueDate |
| Invoice.FileVersionNumber | Currently unavailable |
| Invoice.GrossAmount | {{Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|Sum(ChargeAmount)}} |
| Invoice.InvoiceDate | Invoice.InvoiceDate |
| Invoice.InvoiceNumber | Invoice.InvoiceNumber |
| Invoice.PaymentAmount | Invoice.PaymentAmount |
| Invoice.Tax | Invoice.TaxAmount |
| Invoice.Total | Invoice.Amount |
| Invoice.RefundAmount | Invoice.RefundAmount |
| Invoice.SubTotalOneTimeChargeAmount | {{Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|FilterByValue(RatePlanCharge.ChargeType,EQ,OneTime)\|Sum(ChargeAmount)}} |
| Invoice.NetTotalOneTimeChargeAmount | Currently unavailable |
| Invoice.TotalOneTimeChargeAmount | Currently unavailable |
| Invoice.SubTotalRecurringChargeAmount | {{Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|FilterByValue(RatePlanCharge.ChargeType,EQ,Recurring)\|Sum(ChargeAmount)}} |
| Invoice.NetTotalRecurringChargeAmount | Currently unavailable |
| Invoice.TotalRecurringChargeAmount | Currently unavailable |
| Invoice.SubTotalUsageChargeAmount | {{Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|FilterByValue(RatePlanCharge.ChargeType,EQ,Usage)\|Sum(ChargeAmount)}} |
| Invoice.NetTotalUsageChargeAmount | Currently unavailable |
| Invoice.TotalUsageChargeAmount | Currently unavailable |
| Invoice.NetPaymentAmount | Currently unavailable |
| Invoice.TaxInvoiceItemAdjustmentAmount | Currently unavailable |
| Invoice.ChargeInvoiceItemAdjustmentAmount | Currently unavailable |
| Invoice.InvoiceItemAdjustmentAmount | Currently unavailable |
| Invoice.CreditBalanceAdjustmentAmount | Invoice.CreditBalanceAdjustmentAmount |
| Invoice.TotalInvoiceAdjustmentAmount | Currently unavailable |
| Invoice.TotalAdjustmentAmount | Currently unavailable |
| Invoice.CreditBalanceIncreaseAmount | {{CreditBalanceAdjustments\|FilterByValue(Type,NE,Decrease)\|Sum(Amount)}} |
| Invoice.CreditBalanceDecreaseAmount | {{CreditBalanceAdjustments\|FilterByValue(Type,EQ,Decrease)\|Sum(Amount)}} |
| Invoice.SequenceNumber | {{Invoice.InvoiceNumber\|Substr(3,11)}}Note:The first parameter of the Substr function needs to change according to the prefix. If the prefix is INV for invoices, you can use Substr(3,11) to get the invoice sequence number. For example, if an invoice number is INV00000001, the rendered result is displayed as 00000001. To learn more information about the Substr function, see Functions used in merge fields . |
| Currently unavailable | Invoice.PaymentLink |
