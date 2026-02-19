---
title: "Unapply credit memo"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/credit-memo/unapply-credit-memo"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:17.202Z"
---

# Unapply credit memo

This reference topic lists all the fields associated with the Unapply Credit Memo data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to unapply | Description |
| --- | --- | --- | --- | --- |
| Credit Memo | IsNewCreditMemo | True or False | This field is required when unapplying a Credit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Credit Memo | Credit Memo Key* | string | Required for unapplying credit memo | The unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 |
| Credit Memo | Effective Date | string <date> | Optional | The date when the credit memo is unapplied. |
| Debit Memo | IsNewDebitMemos | True or False | This field is required when unapplying a Credit Memo amount on a Debit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Container for debit memos that the credit memo is unapplied from. The maximum number of debit memos is 1,000. |
| Debit Memo | Debit Memos Amount* | number <double> | Required for unapplying amount of credit memo | The credit memo amount to be unapplied from the debit memo |
| Debit Memo | Debit Memos Debit Memo Id* | string | Required for unapplying credit memo on a debit memo | The unique ID of the debit memo that the credit memo is unapplied from |
| Debit Memo>Debit Memo Items | IsNewDebitMemosItem | True or False | This field is required when unapplying a Credit Memo amount on specific Debit Memo Item. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Container for items. The maximum number of items is 1,000. |
| Debit Memo Items | Debit Memos Items Amount* | number <double> | Required for unapplying amount from specific item | The amount that is unapplied from the specific item. |
| Debit Memo Items | Debit Memos Items Credit Memo Item Id | string | Optional | The ID of the credit memo item. |
| Debit Memo Items | Debit Memos Items Credit Tax Item Id | string | Optional | The ID of the credit memo taxation item. |
| Debit Memo Items | Debit Memos Items Debit Memo Item Id | string | Optional | The ID of the debit memo item that the credit memo item is unapplied from. |
| Debit Memo Items | Debit Memos Items Tax Item Id | string | Optional | The ID of the debit memo taxation item that the credit memo taxation item is unapplied from. |
| Invoices | IsNewInvoices | True or False | This field is required when unapplying a Credit Memo amount on an Invoice. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Container for invoices that the credit memo is unapplied from. The maximum number of invoices is 1,000 |
| Invoices | Invoices Amount* | number <double> | Required for unapplying amount of credit memo | The credit memo amount to be unapplied from the invoice |
| Invoices | Invoices Invoice Id* | string | Required for unapplying credit memo on an Invoice | The unique ID of the invoice that the credit memo is unapplied from |
| Invoices>Invoice Items | IsNewInvoicesItem | True or False | This field is required when unapplying a Credit Memo amount on specific Invoice Item. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Container for items. The maximum number of items is 1,000. |
| Invoice Items | Invoices Items Amount* | number <double> | Required for unapplying amount from specific item | The amount that is unapplied from the specific item. |
| Invoice Items | Invoices Items Credit Memo Item Id | string | Optional | The ID of the credit memo item. |
| Invoice Items | Invoices Items Credit Tax Item Id | string | Optional | The ID of the credit memo taxation item. |
| Invoice Items | Invoices Items Invoice Item Id | string | Optional | The ID of the invoice item that the credit memo item is unapplied from. |
| Invoice Items | Invoices Items Tax Item Id | string | Optional | The ID of the invoice taxation item that the credit memo taxation item is unapplied from. |
