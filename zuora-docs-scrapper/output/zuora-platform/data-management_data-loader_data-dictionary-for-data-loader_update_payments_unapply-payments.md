---
title: "Unapply payments"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/payments/unapply-payments"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:15.885Z"
---

# Unapply payments

This reference document lists all fields in the Payments data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Payment | IsNewPayment | TRUE or FALSE | This field is required when unapplying a payment to a Debit Memo or Invoice. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Payment | Effective Date | STRING <date> | Optional | The date when the payment is unapplied, in yyyy-mm-dd format. The effective date must be later than or equal to the maximum effective date of the payment. |
| Payment | paymentKey * | STRING | Required for updating payment record | The unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |
| Array of objects (debitMemos) | IsNewDebitMemo | TRUE or FALSE | This field is required when unapplying a payment to a Debit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Debit Memo | Debit Memo Amount* | number <double> | Required when unapplying payment to Debit Memo | The amount of the payment that is unapplied from the debit memo. |
| Debit Memo | Debit Memo Id | STRING |  | The unique ID of the debit memo that the payment is unapplied from. |
| Debit Memo | Debit Memo Number | STRING |  | The number of the debit memo that the payment is unapplied from. |
| Array of objects (items) | IsNewDebitMemoItem | TRUE or FALSE | This field is required when unapplying a payment to a Debit Memo Items. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Debit Memo Items | Debit Memo Items Amount* | number <double> | Required when unapplying payment to Debit Memo Item | The amount of the payment that is unapplied from the specific debit mem or taxation item. |
| Debit Memo Items | Debit Memo Items Debit Memo Item Id | STRING |  | The ID of the specific debit memo item. |
| Debit Memo Items | Debit Memo Items Tax Item Id | STRING |  | The ID of the specific taxation item. |
| Array of objects (invoices) | IsNewInvoice | TRUE or FALSE | This field is required when unapplying a payment to an Invoice. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Invoice | Invoice Amount* | number <double> | Required when unapplying payment to Invoice | The amount of the payment that is unapplied from the invoice. |
| Invoice | Invoice Id | STRING | When both the invoiceNumber and invoiceId fields are specified, the two fields must match with each other. | The unique ID of the invoice that the payment is unapplied from. |
| Invoice | Invoice Number | STRING | When both the invoiceNumber and invoiceId fields are specified, the two fields must match with each other. | The number of the invoice that the payment is unapplied from. For example, INV00000001. |
| Array of objects (items) | IsNewInvoiceItem | TRUE or FALSE | This field is required when unapplying a payment to Invoice Items. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Invoice Items | Invoice Items Amount* | number <double> | Required when unapplying payment to Invoice Items | The amount of the payment that is unapplied from the specific invoice or taxation item. |
| Invoice Items | Invoice Items Invoice Item Id | STRING |  | The ID of the specific invoice item. |
| Invoice Items | Invoice Items Tax Item Id | STRING |  | The ID of the specific taxation item. |
