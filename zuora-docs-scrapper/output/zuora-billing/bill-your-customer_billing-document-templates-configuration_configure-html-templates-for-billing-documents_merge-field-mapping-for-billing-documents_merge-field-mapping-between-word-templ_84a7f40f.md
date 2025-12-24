---
title: "Debit memo fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-debit-memos/debit-memo-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:39.015Z"
---

# Debit memo fields

This article provides a mapping of Debit Memo fields between Word templates and HTML templates.

The following table lists the mapping for Debit Memo fields in Word templates and HTML templates for debit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| DebitMemo.Number | DebitMemo.MemoNumber |
| DebitMemo.AccountName | DebitMemo.Account.Name |
| DebitMemo.Currency | DebitMemo.Account.Currency |
| DebitMemo.DebitMemoDate | DebitMemo.MemoDate |
| DebitMemo.DueDate | DebitMemo.DueDate |
| DebitMemo.PostedOn | DebitMemo.PostedOn |
| DebitMemo.TotalAmount | DebitMemo.TotalAmount |
| DebitMemo.Balance | DebitMemo.Balance |
| DebitMemo.PaidAmount | {{#Wp_Eval}} {{DebitMemo.TotalAmount}} - {{DebitMemo.Balance}} {{/Wp_Eval}} |
| DebitMemo.TaxAmount | DebitMemo.TaxAmount |
| DebitMemo.AmountWithoutTax | DebitMemo.TotalAmountWithoutTax |
| DebitMemo.Comment | DebitMemo.Comments |
| DebitMemo.ReferredInvoiceNumber | DebitMemo.Invoice.InvoiceNumberNote:The referred invoice is only available when a debit memo is created from an invoice. |
| DebitMemo.ReferredInvoiceTax | DebitMemo.Invoice.TaxAmount |
| DebitMemo.ReferredInvoiceTotal | DebitMemo.Invoice.Amount |
| DebitMemo.ReferredInvoiceComments | DebitMemo.Invoice.Comments |
| DebitMemo.ReferredInvoiceDueDate | DebitMemo.Invoice.DueDate |
| DebitMemo.ReferredInvoiceDate | DebitMemo.Invoice.InvoiceDate |
| DebitMemo.ReferredInvoicePaymentAmount | DebitMemo.Invoice.PaymentAmount |
| DebitMemo.ReferredInvoiceBalance | DebitMemo.Invoice.Balance |
| DebitMemo.ReferredInvoiceAmountWithoutTax | DebitMemo.Invoice.AmountWithoutTax |
| DebitMemo.ReferredInvoiceGrossAmount | {{DebitMemo.Invoice.InvoiceItems\|FilterByValue(ProcessingType,NE,1)\|Sum(ChargeAmount)}} |
| DebitMemo.ReferredInvoiceRefundAmount | DebitMemo.Invoice.RefundAmount |
| DebitMemo.ReferredInvoiceNetPaymentAmount | Currently unavailable |
| DebitMemo.SequenceNumber | {{DebitMemo.MemoNumber\|Substr(2,11)}}Note:The first parameter of the Substr function needs to change according to the prefix. If the prefix is DM for debit memos, you can use Substr(2,11) to get the debit memo sequence number. For example, if a debit memo number is DM00000075, the rendered result is displayed as 00000075. To learn more information about the Substr function, see Functions used in merge fields . |
