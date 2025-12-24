---
title: "Case V: Reversing invoices with all zero-amount items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-v-reversing-invoices-with-all-zero-amount-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:11.091Z"
---

# Case V: Reversing invoices with all zero-amount items

Learn how to reverse invoices with zero-amount items, considering different billing rules for credit memos.

You want to reverse an invoice with two regular invoice items and their taxation items, and the amount of each invoice item or taxation item is zero. The specific implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

For example:
| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $0 | $0 | $0 |
| Taxation item 1 | $0 | $0 | $0 |
| Invoice item 2 | $0 | $0 | $0 |
| Taxation item 2 | $0 | $0 | $0 |
| Total | $0 | $0 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to `Yes`, the credit memo created during invoice reversal is as follows.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $0 | $0 | $0 |
| Credit memo taxation item 1 | $0 | $0 | $0 |
| Credit memo item 2 | $0 | $0 | $0 |
| Credit memo taxation item 2 | $0 | $0 | $0 |
| Total | $0 | $0 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to `Yes` but do not create for zero balance invoice items or `No`, invoice reversal is not allowed.
