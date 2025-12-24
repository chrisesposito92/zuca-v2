---
title: "Understand Available To Credit and Invoice Balance"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/understand-available-to-credit-and-invoice-balance"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:48.256Z"
---

# Understand Available To Credit and Invoice Balance

Available To Credit and the Balance attributes

Invoice, Invoice Item, and Invoice Taxation Item all have the Available To Credit and the Balance attributes. They are separate concepts and serve different purposes.

Available To Credit indicates how much you can credit back to your customers. When you create credit memos against an invoice, the Available To Credit ensures that you don't over-credit your customer for this invoice. Invoice Balance indicates how much your customer needs to pay you.

They are calculated in the following ways:

-   Available To Credit = Invoice amount – Posted credit memo amount created from this invoice

-   Invoice Balance = Invoice amount – Transaction amount (such as payment, credit memo, etc) applied to the invoice


## Examples

Suppose there is an invoice with a total amount of $100.

Create a $30 credit memo (CM1) from the invoice and post CM1, the impact on the invoice is as follows:

| Invoice | Available To Credit | $100 - $30 = $70 | Because CM1 is posted, the Available to credit amount of this invoice is decreased to $70. |
| --- | --- | --- | --- |
| Balance | $100 | Because no transaction is applied to the invoice, the Balance of this invoice is still $100. |  |

Create a $20 draft credit memo (CM2) from the invoice, the impact is as follows:

| Invoice | Available To Credit | $70 | Because CM2 is not posted, the Available to credit amount of this invoice is still $70. |
| --- | --- | --- | --- |
| Balance | $100 | Because no transaction is applied to the invoice, the Balance of this invoice is still $100. |  |

Apply a $15 payment to the invoice, the impact is as follows:

| Invoice | Available To Credit | $70 | Because no credit memo created from the invoice is posted, the Available to credit amount of this invoice is still $70. |
| --- | --- | --- | --- |
| Balance | $100 - $15 = $85 | Because a $15 payment transaction is applied to the invoice, the Balance of this invoice is decreased to $85. |  |

Create a $40 draft credit memo (CM3) from the invoice, the impact is as follows:

| Invoice | Available To Credit | $70 | Because CM3 is not posted, the Available to credit amount of this invoice is still $70. |
| --- | --- | --- | --- |
| Balance | $100 - $15 = $85 | Because no other transaction is applied to the invoice, the Balance of this invoice is still $85. |  |

Post the $40 credit memo (CM3), the impact is as follows:

| Invoice | Available To Credit | $70 - $40 = $30 | Because CM3 is posted, the Available to credit amount of this invoice is decreased to $30. |
| --- | --- | --- | --- |
| Balance | $100 - $15 = $85 | Because no other transaction is applied to the invoice, the Balance of this invoice is still $85. |  |
