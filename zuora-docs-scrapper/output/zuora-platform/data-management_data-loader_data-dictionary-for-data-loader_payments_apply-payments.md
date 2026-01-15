---
title: "Apply payments"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/payments/apply-payments"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:28.772Z"
---

# Apply payments

This reference article lists the fields associated with the Payments data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Payment | IsNewPayments | True or False | This field is required when applying a payment to a Debit Memo or Invoice. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object. |
| Payment | Payment Key* | string | Required for applying payment to debit memo, invoice | The unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |
| Payment | Effective Date | string <date> | Optional | The date when the payment application takes effect, in yyyy-mm-dd format. The effective date must be later than or equal to the maximum effective date of the payment. |
| Array of objects (debitMemos) | IsNewDebitMemos | True or False | This field is required when applying a payment to a Debit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Debit Memo | Debit Memos Amount* | number <double> | Required for applying the payment to debit memo | The amount that is applied from the payment to the debit memo. |
| Debit Memo | Debit Memos Debit Memo Id | string | Optional | The unique ID of the debit memo that the payment is applied to. |
| Debit Memo | Debit Memos Debit Memo Number | string | Optional | The number of the debit memo that the payment is applied to. |
| Array of objects (debitMemos) | IsNewDebitMemosItem | True or False | This field is required when applying a payment to a Debit Memo Item or Taxataion Item. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | This field is only available if you have the Invoice Item Settlement feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| Debit Memo>DebitMemo ITems | Debit Memos Items Amount* | number <double> | Required when applying payment to a debit memo or taxation item | The amount of the payment that is applied to the specific debit memo or taxation item. |
| Debit Memo>DebitMemo ITems | Debit Memos Items Debit Memo Item Id | string | Optional | The ID of the specific debit memo item. |
| Debit Memo>DebitMemo ITems | Debit Memos Items Tax Item Id | string | Optional | The ID of the specific taxation item. |
| Array of objects (invoices) | IsNewinvoices | True or False | This field is required when applying a payment to a Debit Memo Item or Taxataion Item. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | This field is only available if you have the Invoice Item Settlement feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| Invoice | Invoices Amount* | number <double> | Required when applying payments to invoice ot invoice item | The amount that is applied from the payment to the invoice. |
| Invoice | Invoices Invoice Id | string | Optional | The unique ID of the invoice that the payment is applied to. |
| Invoice | Invoices Invoice Number | string | Optional | The number of the invoice that the payment is applied to. For example, INV00000001.Note: When both the invoiceNumber and invoiceId fields are specified, the two fields must match with each other. |
| Array of objects (items) | IsNewinvoicesItem | True or False | Required when applying payments to invoice or invoice item.Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Invoice>InvoiceItem | Invoices Items Amount* | number <double> | Optional | The amount of the payment that is applied to the specific invoice or taxation item. |
| Invoice>InvoiceItem | Invoices Items Invoice Item Id | string | Optional | The ID of the specific invoice item. |
| Invoice>InvoiceItem | Invoices Items Tax Item Id | string | Optional | The ID of the specific taxation item. |
