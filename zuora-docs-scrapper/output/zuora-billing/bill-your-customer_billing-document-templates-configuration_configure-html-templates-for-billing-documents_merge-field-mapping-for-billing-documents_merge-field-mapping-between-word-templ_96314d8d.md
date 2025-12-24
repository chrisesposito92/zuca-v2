---
title: "Credit memo fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-credit-memos/credit-memo-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:21.017Z"
---

# Credit memo fields

This article provides a mapping of Credit Memo fields between Word templates and HTML templates.

The following table lists the mapping for Credit Memo fields in Word templates and HTML templates for credit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| CreditMemo.Number | CreditMemo.MemoNumber |
| CreditMemo.AccountName | CreditMemo.Account.Name |
| CreditMemo.CreditMemoDate | CreditMemo.MemoDate |
| CreditMemo.TargetDate | CreditMemo.TargetDate |
| CreditMemo.PostedOn | CreditMemo.PostedOn |
| CreditMemo.TotalAmount | CreditMemo.TotalAmount |
| CreditMemo.TaxAmount | CreditMemo.TaxAmount |
| CreditMemo.AmountWithoutTax | CreditMemo.TotalAmountWithoutTax |
| CreditMemo.UnappliedAmount | CreditMemo.Balance |
| CreditMemo.RefundedAmount | CreditMemo.RefundAmount |
| CreditMemo.AppliedAmount | CreditMemo.AppliedAmount |
| CreditMemo.Comment | CreditMemo.Comments |
| CreditMemo.ReferredInvoiceNumber | CreditMemo.Invoice.InvoiceNumberNote:The referred invoice is only available when a credit memo is created from an invoice. |
| CreditMemo.ReferredInvoiceTax | CreditMemo.Invoice.TaxAmount |
| CreditMemo.ReferredInvoiceTotal | CreditMemo.Invoice.Amount |
| CreditMemo.ReferredInvoiceComments | CreditMemo.Invoice.Comments |
| CreditMemo.ReferredInvoiceDueDate | CreditMemo.Invoice.DueDate |
| CreditMemo.ReferredInvoiceDate | CreditMemo.Invoice.InvoiceDate |
| CreditMemo.ReferredInvoicePaymentAmount | CreditMemo.Invoice.PaymentAmount |
| CreditMemo.ReferredInvoiceBalance | CreditMemo.Invoice.Balance |
| CreditMemo.ReferredInvoiceAmountWithoutTax | CreditMemo.Invoice.AmountWithoutTax |
| CreditMemo.ReferredInvoiceGrossAmount | {{CreditMemo.Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|Sum(ChargeAmount)}} |
| CreditMemo.ReferredInvoiceRefundAmount | CreditMemo.Invoice.RefundAmount |
| CreditMemo.ReferredInvoiceNetPaymentAmount | Currently unavailable |
| CreditMemo.SequenceNumber | {{CreditMemo.MemoNumber\|Substr(2,11)}}Note:The first parameter of the Substr function needs to change according to the prefix. If the prefix is CM for credit memos, you can use Substr(2,11) to get the credit memo sequence number. For example, if a credit memo number is CM00000075, the rendered result is displayed as 00000075. To learn more information about the Substr function, see Functions used in merge fields . |
