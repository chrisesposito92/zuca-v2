---
title: "Objects and fields for creating rules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-business-regions-configuration/objects-and-fields-for-creating-rules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:56.070Z"
---

# Objects and fields for creating rules

You can use Invoice, Invoice Item, Credit Memo, Credit Memo Item, Debit Memo, and Debit Memo base objects and their related objects to create rules.

The following table lists the base objects and their related objects that can be used to create rules. Besides the objects below, you can use both standard and custom fields of these objects to create rules. To create custom fields on base objects and related objects, see Manage custom fields with the Object Manager .

Note:

If you want to add custom fields and let the custom fields display as part of the Condition, you must configure the custom fields as indexed fields.

| Base object | Related objects |
| --- | --- |
| Invoice | InvoiceInvoice.SoldToContactSnapshotInvoice.SoldToContactInvoice.BillToContactSnapshotInvoice.BillToContactInvoice.Account.* * indicates that you can associate standard and custom fields of the account objects. |
| InvoiceItem | InvoiceItemInvoiceItem.Invoice.Account.*InvoiceItem.InvoiceInvoiceItem.ProductRatePlanChargeInvoiceItem.Product* indicates that you can associate standard and custom fields of the account objects. |
| CreditMemo | CreditMemoCreditMemo.Account.*CreditMemo.BillToContactCreditMemo.BillToContactSnapshotCreditMemo.SoldToContactSnapshotCreditMemo.Invoice* indicates that you can associate standard and custom fields of the account objects. |
| CreditMemoItem | CreditMemoItemCreditMemoItem.CreditMemo.Account.*CreditMemoItem.CreditMemoCreditMemoItem.ProductRatePlanChargeCreditMemoItem.Product* indicates that you can associate standard and custom fields of the account objects. |
| DebitMemo | DebitMemoDebitMemo.Account.*DebitMemo.BillToContactDebitMemo.BillToContactSnapshotDebitMemo.SoldToContactSnapshotDebitMemo.Invoice* indicates that you can associate standard and custom fields of the account objects. |
| DebitMemoItem | DebitMemoItemDebitMemoItem.DebitMemo.Account.*DebitMemoItem.DebitMemoDebitMemoItem.ProductRatePlanChargeDebitMemoItem.Product* indicates that you can associate standard and custom fields of the account objects. |

Note: You are now ready to configure an e-invoicing profile for your customer account that must comply with e-invoicing business requirements.
