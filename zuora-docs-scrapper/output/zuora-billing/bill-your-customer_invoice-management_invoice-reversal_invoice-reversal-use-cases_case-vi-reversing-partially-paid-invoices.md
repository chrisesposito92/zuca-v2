---
title: "Case VI: Reversing partially paid invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-vi-reversing-partially-paid-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:13.702Z"
---

# Case VI: Reversing partially paid invoices

Learn how to handle the reversal of invoices that have been partially paid, including the impact on invoice items and taxation items.

You want to reverse an invoice that is partially paid.

The invoice originally with the total amount of $132 contained two invoice items and their corresponding taxation items, and each item had a positive amount. Later, you applied a payment with the total amount of $12 to invoice item 2 and taxation item 2.

For example:
| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $10 | $0 | $0 |
| Taxation item 2 | $2 | $0 | $0 |
| Total | $132 | $120 | $0 |

In this use case, no matter which option you set the Create credit memos mirroring invoice items billing rule to, invoice reversal is not allowed.
