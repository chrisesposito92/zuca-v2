---
title: "Case II: Reversing invoices with negative items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-ii-reversing-invoices-with-negative-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:03.976Z"
---

# Case II: Reversing invoices with negative items

This reference explains how to reverse an invoice with both positive and negative items, detailing the impact on balances and credit memos.

You want to reverse an invoice that contains an invoice item with a positive amount, an invoice item with a negative amount, and their corresponding taxation items.

For example:

| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $-10 | $-10 | $0 |
| Taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

In this use case, no matter which option you set the create credit memos mirroring invoice items billing rule to, the credit memo created during invoice reversal is as follows.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $-10 | $-10 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |
