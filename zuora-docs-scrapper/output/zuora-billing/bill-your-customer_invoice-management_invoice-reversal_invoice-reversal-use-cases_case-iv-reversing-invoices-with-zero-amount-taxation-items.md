---
title: "Case IV: Reversing invoices with zero-amount taxation items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-iv-reversing-invoices-with-zero-amount-taxation-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:08.946Z"
---

# Case IV: Reversing invoices with zero-amount taxation items

Learn how to reverse invoices with zero-amount taxation items, considering different billing rule options for creating credit memos.

You want to reverse an invoice with two regular invoice items and their taxation items, and the amount of each taxation item is zero. The specific implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

For example:

| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $0 | $0 | $0 |
| Invoice item 2 | $10 | $10 | $0 |
| Taxation item 2 | $0 | $0 | $0 |
| Total | $110 | $110 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to `Yes`, the credit memo created during invoice reversal is as follows.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $0 | $0 | $0 |
| Credit memo item 2 | $10 | $10 | $0 |
| Credit memo taxation item 2 | $0 | $0 | $0 |
| Total | $110 | $110 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to `Yes` but do not create for zero balance invoice items or `No`, the credit memo created during invoice reversal is as follows.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| - | - | - | - |
| Credit memo item 2 | $10 | $10 | $0 |
| - | - | - | - |
| Total | $110 | $110 | $0 |
