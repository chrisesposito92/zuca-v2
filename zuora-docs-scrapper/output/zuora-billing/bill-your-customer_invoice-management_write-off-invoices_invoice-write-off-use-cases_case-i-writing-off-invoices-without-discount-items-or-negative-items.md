---
title: "Case I: Writing off invoices without discount items or negative items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-i-writing-off-invoices-without-discount-items-or-negative-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:54.484Z"
---

# Case I: Writing off invoices without discount items or negative items

Guide to writing off invoices with positive amounts for regular and taxation items.

You want to write off an invoice with two regular invoice items and their taxation items, and the amount of each item is positive.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $10 | $10 | $0 |
| Taxation item 2 | $2 | $2 | $0 |
| Total | $132 | $132 | $0 |

In this use case, no matter which option you set the Create credit memos mirroring invoice items
| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $10 | $10 | $0 |
| Credit memo taxation item 2 | $2 | $2 | $0 |
| Total | $132 | $132 | $0 |
