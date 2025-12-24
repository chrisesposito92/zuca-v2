---
title: "Case IV: Writing off invoices with zero-amount taxation items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-iv-writing-off-invoices-with-zero-amount-taxation-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:02.322Z"
---

# Case IV: Writing off invoices with zero-amount taxation items

Guidelines for writing off invoices with zero-amount taxation items, including the impact of different billing rules on credit memo creation.

You want to write off an invoice with two regular invoice items and their taxation items, and the amount of each taxation item is zero. The specific implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $0 | $0 | $0 |
| Invoice item 2 | $10 | $10 | $0 |
| Taxation item 2 | $0 | $0 | $0 |
| Total | $110 | $110 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to Yes , the credit memo created during invoice write-off is as follows.

| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $0 | $0 | $0 |
| Credit memo item 2 | $10 | $10 | $0 |
| Credit memo taxation item 2 | $0 | $0 | $0 |
| Total | $110 | $110 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to Yes but do not create for zero balance invoice items or No
| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| - | - | - | - |
| Credit memo item 2 | $10 | $10 | $0 |
| - | - | - | - |
| Total | $110 | $110 | $0 |
