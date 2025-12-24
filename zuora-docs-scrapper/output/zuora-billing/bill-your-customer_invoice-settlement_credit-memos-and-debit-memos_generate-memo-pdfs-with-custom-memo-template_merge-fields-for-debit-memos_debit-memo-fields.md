---
title: "Debit Memo fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-debit-memos/debit-memo-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:09.368Z"
---

# Debit Memo fields

Learn about the Debit Memo fields

| Merge field | Description |
| --- | --- |
| DebitMemo.Number | The debit memo number.Example: DM00000014 |
| DebitMemo.AccountName | The account name of this debit memo.Example: Acme Corporation |
| DebitMemo.Currency | The currency that the debit memo associated with the account are paid with.This merge field is formatted based on the locale in the customer's communication profile. To use your own format, specify the currency format in the template.Values: a currency value defined in the administrative web-based UIExample: USD |
| DebitMemo.DebitMemoDate | The date when this debit memo takes effect.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/31/2019 |
| DebitMemo.DueDate | The due date of the debit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 02/31/2019 |
| DebitMemo.PostedOn | The date and time when this debit memo is posted.Example: 2019-05-28T18:34:49.643+08:00 |
| DebitMemo.TotalAmount | The total amount of this debit memo with tax.Example: $540 |
| DebitMemo.Balance | The total amount that your customer owes to you for this memo.Example: $304.50 |
| DebitMemo.PaidAmount | The amount of debit memo that your customer has already paid for.Example: $200 |
| DebitMemo.TaxAmount | The tax amount of this debit memo.Example: $12.30 |
| DebitMemo.AmountWithoutTax | The total amount of this memo without tax.Example: $790 |
| DebitMemo.Comment | The note of this debit memo.Example: Debit memo notes. |
| DebitMemo.ReferredInvoiceNumber | The invoice number associated with this debit memo.Example: INV00000047 |
| DebitMemo.ReferredInvoiceTax | The tax amount of the invoice associated with this debit memo.Example: $600 |
| DebitMemo.ReferredInvoiceTotal | Total amount of the invoice associated with this debit memo.Example: $65 |
| DebitMemo.ReferredInvoiceComments | The comments of the invoice associated with this debit memo.Example : Thank you for your business! Please contact us if you have any questions about your invoice! |
| DebitMemo.ReferredInvoiceDueDate | The due date of the invoice associated with this debit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 09/01/2019 |
| DebitMemo.ReferredInvoiceDate | The invoice date of the invoice associated with this debit memo.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 02/01/2019 |
| DebitMemo.ReferredInvoicePaymentAmount | Total payment amount of the invoice associated with this debit memo.Example : $120 |
| DebitMemo.ReferredInvoiceBalance | The balance of the invoice associated with this debit memo.Example: $306.80 |
| DebitMemo.ReferredInvoiceAmountWithoutTax | Total amount of the invoice without tax. The invoice associated with this debit memo.Example: $540 |
| DebitMemo.ReferredInvoiceGrossAmount | Total of the invoice gross amount that is pre-discount and pre-tax. The invoice associated with this debit memo.Example: $540 |
| DebitMemo.ReferredInvoiceRefundAmount | Total refunds for the invoice associated with this debit memo. Example: $540 |
| DebitMemo.ReferredInvoiceNetPaymentAmount | Net Payments associated to this invoice (Payments - Refunds). The invoice associated with this debit memo.Example: $316.80 |
| DebitMemo.SequenceNumber | The debit memo number excluding the prefix.Example: 00000001 |
