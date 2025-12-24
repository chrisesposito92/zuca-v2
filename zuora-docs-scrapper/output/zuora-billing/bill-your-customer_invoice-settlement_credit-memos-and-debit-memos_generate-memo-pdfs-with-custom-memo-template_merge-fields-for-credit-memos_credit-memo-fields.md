---
title: "Credit Memo fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-credit-memos/credit-memo-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:51.703Z"
---

# Credit Memo fields

Learn about the Credit Memo fields

| Merge field | Description |
| --- | --- |
| CreditMemo.Number | The credit memo number.Example: CM00000028 |
| CreditMemo.AccountName | The account name of this credit memo.Example: Acme Corporation |
| CreditMemo.Currency | The currency that the credit memo associated with the account are paid with.This merge field is formatted based on the locale in the customer's communication profile. To use your own format, specify the currency format in the memo template.Values: a currency value defined in the administrative web-based UIExample: USD |
| CreditMemo.CreditMemoDate | The date when this credit memo takes effect.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/31/2019 |
| CreditMemo.TargetDate | The target date of the bill run that generates this credit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example : 01/31/2019 |
| CreditMemo.PostedOn | The date and time when this credit memo is posted.Example: 2019-05-28T18:34:49.643+08:00 |
| CreditMemo.TotalAmount | The total amount of this credit memo with tax.Example: $540 |
| CreditMemo.TaxAmount | The tax amount of this credit memo.Example: $12.30 |
| CreditMemo.AmountWithoutTax | The total amount of this memo without tax.Example: $790 |
| CreditMemo.UnappliedAmount | The amount of this credit memo that is not applied.Example: $56 |
| CreditMemo.RefundedAmount | The amount of this credit memo that is refunded to your customer.Example: $48 |
| CreditMemo.AppliedAmount | The amount of this credit memo that is applied to invoices and debit memos.Example: $120 |
| CreditMemo.Comment | The note of this credit memo.Example: Credit memo notes. |
| CreditMemo.ReferredInvoiceNumber | The invoice number associated with this credit memo.Example: INV00000047 |
| CreditMemo.ReferredInvoiceTax | The tax amount of the invoice associated with this credit memo.Example: $600 |
| CreditMemo.ReferredInvoiceTotal | Total amount of the invoice associated with this credit memo.Example : $65 |
| CreditMemo.ReferredInvoiceComments | The comments of the invoice associated with this credit memo.Example: Thank you for your business! Please contact us if you have any questions about your invoice! |
| CreditMemo.ReferredInvoiceDueDate | The due date of the invoice associated with this credit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 09/01/2019 |
| CreditMemo.ReferredInvoiceDate | The invoice date of the invoice associated with this credit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 02/01/2019 |
| CreditMemo.ReferredInvoicePaymentAmount | Total payment amount of the invoice associated with this credit memo.Example: $120 |
| CreditMemo.ReferredInvoiceBalance | The balance of the invoice associated with this credit memo.Example: $306.80 |
| CreditMemo.ReferredInvoiceAmountWithoutTax | Total amount of the invoice without tax. The invoice associated with this credit memo.Example: $540 |
| CreditMemo.ReferredInvoiceGrossAmount | Total of the invoice gross amount that is pre-discount and pre-tax. The invoice associated with this credit memo.Example: $540 |
| CreditMemo.ReferredInvoiceRefundAmount | Total refunds for the invoice associated with this credit memo. Example: $540 |
| CreditMemo.ReferredInvoiceNetPaymentAmount | Net Payments associated to this invoice (Payments - Refunds). The invoice associated with this credit memo.Example: $316.80 |
| CreditMemo.SequenceNumber | The credit memo number excluding the prefix.Example : 00000001 |
