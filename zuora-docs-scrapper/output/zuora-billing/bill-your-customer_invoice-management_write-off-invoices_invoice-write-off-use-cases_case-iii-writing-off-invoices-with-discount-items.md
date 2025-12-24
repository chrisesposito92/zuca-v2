---
title: "Case III: Writing off invoices with discount items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-iii-writing-off-invoices-with-discount-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:59.472Z"
---

# Case III: Writing off invoices with discount items

Learn how to write off invoices containing discount items and taxation items, with options for creating credit memos that mirror invoice items.

You want to write off an invoice that contains an invoice item with a positive amount, a discount item, and their corresponding taxation items. The specific implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $90 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Discount invoice item 2 | $-10 | $-0 | $0 |
| Taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to Yes or Yes but do not create for zero balance invoice items:
| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $90 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Discount credit memo item 2 | $-10 | $-0 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to No, the credit memo created during invoice write-off is as follows. The item "Credit memo item 2" of the Charge processing type.

| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $90 | $90 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $-0 | $-0 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |
