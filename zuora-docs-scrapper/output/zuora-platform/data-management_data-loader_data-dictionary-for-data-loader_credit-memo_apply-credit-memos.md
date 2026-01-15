---
title: "Apply credit memos"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/credit-memo/apply-credit-memos"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:59.255Z"
---

# Apply credit memos

This document lists all the data dictionary fields associated with the Apply Credit Memo and their descriptions.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Credit Memo | IsNewCreditMemo | TRUE or FALSE | This field is required when applying a Credit Memo to a Debit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Credit Memo | Credit Memo Key* | string | Required for applying credit memo to a debit memo or Invoice | The unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172. |
| Credit Memo | Effective Date | string <date> |  | The date when the credit memo is applied. |
| Array of objects (debitMemos) | IsNewDebitMemos | TRUE or FALSE | This field is required when applying a credit memo to a Debit Memo. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object Container for debit memos that the credit memo is applied to. The maximum number of debit memos is 1,000. |
| Debit Memo | Debit Memos Amount* | number <double> | Required for applying credit memo to a debit memo | The credit memo amount to be applied to the debit memo. |
| Debit Memo | Debit Memos Debit Memo Id* | string | Required for applying credit memo to a debit memo | The unique ID of the debit memo that the credit memo is applied to. |
| Array of objects (items) | IsNewDebitMemosItem | TRUE or FALSE | This field is required when applying a Credit Memo Item to a Debit Memo Item . Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Container for items. The maximum number of items is 1,000. If creditMemoItemId is the source, then it should be accompanied by a target debitMemoItemId. If creditTaxItemId is the source, then it should be accompanied by a target taxItemId. |
| Debit Memo Items | Debit Memos Items Amount* | number <double> | Required for applying credit memo item to a debit memo item | The amount that is applied to the specific item. |
| Debit Memo Items | Debit Memos Items Credit Memo Item Id | string | Optional | The ID of the credit memo item. |
| Debit Memo Items | Debit Memos Items Credit Tax Item Id | string | Optional | The ID of the credit memo taxation item. |
| Debit Memo Items | Debit Memos Items Debit Memo Item Id | string | Optional | The ID of the debit memo item that the credit memo item is applied to. |
| Debit Memo Items | Debit Memos Items Tax Item Id | string | Optional | The ID of the debit memo taxation item that the credit memo taxation item is applied to. |
| Array of objects (invoices) | IsNewinvoices | TRUE or FALSE | This field is required when applying a Credit Memo to a Invoice. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object Container for invoices that the credit memo is applied to. The maximum number of invoices is 1,000. |
| Invoice | Invoices Amount* | number <double> | Required for applying CreditMemo to Invoice | The credit memo amount to be applied to the invoice. |
| Invoice | Invoices Invoice Id* | string | Required for applying CreditMemo to Invoice | The unique ID of the invoice that the credit memo is applied to. |
| Array of objects (items) | IsNewinvoicesItem | TRUE or FALSE | This field is required when applying a Credit Memo Item to an Invoice Item . Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object Container for items. The maximum number of items is 1,000. If creditMemoItemId is the source, then it should be accompanied by a target invoiceItemId. If creditTaxItemId is the source, then it should be accompanied by a target taxItemId. |
| Invoice Items | Invoices Items Amount* | number <double> | Required, the amount that has to be applied to Credit memo | The amount that is applied to the specific item. |
| Invoice Items | Invoices Items Credit Memo Item Id | string | Optional | The ID of the credit memo item. |
| Invoice Items | Invoices Items Credit Tax Item Id | string | Optional | The ID of the credit memo taxation item. |
| Invoice Items | Invoices Items Invoice Item Id | string | Optional | The ID of the invoice item that the credit memo item is applied to. |
| Invoice Items | Invoices Items Tax Item Id | string | Optional | The ID of the invoice taxation item that the credit memo taxation item is applied to. |
