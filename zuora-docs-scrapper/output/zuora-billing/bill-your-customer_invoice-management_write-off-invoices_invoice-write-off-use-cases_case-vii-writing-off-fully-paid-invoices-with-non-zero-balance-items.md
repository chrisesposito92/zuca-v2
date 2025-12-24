---
title: "Case VII: Writing off fully paid invoices with non-zero balance items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-vii-writing-off-fully-paid-invoices-with-non-zero-balance-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:09.809Z"
---

# Case VII: Writing off fully paid invoices with non-zero balance items

Learn how to write off fully paid invoices where each item still has a non-zero balance, including the creation of credit memos during the write-off process.

You want to write off an invoice that is fully paid but each of its items still has a non-zero balance.

The invoice originally had the total amount of $108, and it contained two invoice items and their corresponding taxation items. Later, you applied a payment with the total amount of $108 to invoice item 1 and taxation item 1.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $10 | $0 |
| Taxation item 1 | $20 | $2 | $0 |
| Invoice item 2 | $-10 | $-10 | $0 |
| Taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $0 | $0 |

In this use case, no matter which option the Create credit memos mirroring invoice items billing rule is set to, the credit memo created during invoice write-off is as follows.

| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $10 | $10 | $0 |
| Credit memo taxation item 1 | $2 | $2 | $0 |
| Credit memo item 2 | $-10 | $-10 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $0 | $0 | $0 |
