---
title: "Object descriptions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-object-model/object-descriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:38.040Z"
---

# Object descriptions

This reference lists the objects in the object model of the Invoice Settlement feature and their descriptions.

| Object | Description |
| --- | --- |
| Account | A customer account.Corresponding data source: Account |
| Billing Run | A process that generates invoices and credit memos for customers.Corresponding data source: Billing Run |
| Credit Memo | A credit memo that is owned by a customer.Corresponding data source: Credit Memo |
| Credit Memo Item | A line item on a credit memo.Corresponding data source: Credit Memo Item |
| Credit Memo Part | The portion of a credit memo that is applied to a particular invoice, is applied to a particular debit memo, or is unapplied.Corresponding data source: Credit Memo PartNote : After a credit memo is fully refunded, it doesn’t contain any credit memo part. |
| Credit Memo Part Item | The portion of a credit memo that is applied to a particular item on an invoice or debit memo.Corresponding data source: Credit Memo Part Item |
| Credit Taxation Item | Taxation information about a credit memo item.Corresponding data source: Credit Taxation Item |
| Debit Memo | A debit memo that is owned by a customer.Corresponding data source: Debit Memo |
| Debit Memo Item | A line item on a debit memo.Corresponding data source: Debit Memo Item |
| Debit Taxation Item | Taxation information about a debit memo item.Corresponding data source: Debit Taxation Item |
| Invoice | An invoice that is owned by a customer.Corresponding data source: Invoice |
| Invoice Item | A line item on an invoice.Corresponding data source: Invoice Item |
| Payment | A payment by a customer.Corresponding data source: Payment |
| Payment Method | A payment method that is owned by a customer.Corresponding data source: Payment Method |
| Payment Method Snapshot | A copy of the payment method that was used in a particular transaction. If the payment method is deleted, the payment method snapshot continues to retain the data used in the transaction.Corresponding data source: Payment Method Snapshot (only available in Zuora Reporting) |
| Payment Part | The portion of a payment that is applied to a particular invoice, is applied to a particular debit memo, or is unapplied.Corresponding data source: Payment PartNote : After a payment is fully refunded, it doesn’t contain any payment part. |
| Payment Part Item | The portion of a payment that is applied to a particular item on an invoice or debit memo.Corresponding data source: Payment Part Item |
| Payment Run | A process that collects payment from customers.Corresponding data source: Payment Run |
| Refund | A refund to a customer.Corresponding data source: Refund |
| Refund Part | The portion of a refund that is applied to a particular payment or credit memo.Corresponding data source: Refund Part |
| Refund Part Item | The portion of a refund that is applied to a particular item on a credit memo.Corresponding data source: Refund Part Item |
| Taxation Item | Taxation information about an invoice item.Corresponding data source: Taxation Item |

When the amount in a record of the following objects is 0, the record will be hard deleted:

-   RefundPart

-   RefundPartItem


When the amount in a record of the following objects is 0, the record will be soft deleted: (enables you to retain data within the Zuora system)

-   PaymentPart

-   PaymentPartItem

-   CreditMemoPart

-   CreditMemoPartItem
