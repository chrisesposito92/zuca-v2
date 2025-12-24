---
title: "Case III: Reversing invoices with discount items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-iii-reversing-invoices-with-discount-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:06.106Z"
---

# Case III: Reversing invoices with discount items

This reference explains how to reverse invoices containing discount items and their corresponding taxation items, with examples of credit memo creation based on different billing rules.

You want to reverse an invoice that contains an invoice item with a positive amount, a discount item, and their corresponding taxation items. The specific implementation might be different according to the option of the Create credit memos mirroring invoice items billing rule.

For example:

| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $90 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Discount invoice item 2 | $-10 | $-0 | $0 |
| Taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to `Yes` or Yes but do not create for zero balance invoice items , the credit memo created during invoice reversal is as follows. The item "Discount credit memo item 2" of the Discount processing type.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $90 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Discount credit memo item 2 | $-10 | $-0 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to `No` , the credit memo created during invoice reversal is as follows. The item "Credit memo item 2" of the Charge processing type.

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $90 | $90 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $-0 | $-0 | $0 |
| Credit memo taxation item 2 | $-2 | $-2 | $0 |
| Total | $108 | $108 | $0 |
