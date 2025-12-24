---
title: "Case II: Writing off invoices with negative items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-ii-writing-off-invoices-with-negative-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:57.283Z"
---

# Case II: Writing off invoices with negative items

Learn how to write off invoices containing both positive and negative items, including their corresponding taxation items, and understand the impact on credit memos.

You want to write off an invoice that contains an invoice item with a positive amount, an invoice item with a negative amount, and their corresponding taxation items.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $-10 | $-10 | $0 |
| Taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

In this use case, no matter which option you set the Create credit memos mirroring invoice items billing rule to, the credit memo created during invoice write-off is as follows.

| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $-10 | $-10 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |
