---
title: "Case VI: Writing off partially paid invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-vi-writing-off-partially-paid-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:07.319Z"
---

# Case VI: Writing off partially paid invoices

Learn how to write off invoices that are partially paid, considering different billing rules and credit memo creation options.

You want to write off an invoice that is partially paid. The specific write-off implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

The invoice originally with the total amount of $132 contained two invoice items and their corresponding taxation items, and each item had a positive amount. Later, you applied a payment with the total amount of $12 to invoice item 2 and taxation item 2.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $10 | $0 | $0 |
| Taxation item 2 | $2 | $0 | $0 |
| Total | $132 | $120 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to Yes , the credit memo created during invoice write-off is as follows.

| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $0 | $0 | $0 |
| Credit memo taxation item 2 | $0 | $0 | $0 |
| Total | $120 | $120 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to Yes but do not create for zero balance invoice items or No
| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Total | $120 | $120 | $0 |
