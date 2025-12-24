---
title: "Case V: Writing off invoices with all zero-amount items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases/case-v-writing-off-invoices-with-all-zero-amount-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:04.863Z"
---

# Case V: Writing off invoices with all zero-amount items

Guidelines for writing off invoices with zero-amount items, including regular and taxation items, and the impact of billing rules on credit memo creation.

You want to write off an invoice with two regular invoice items and their taxation items, and the amount of each invoice item or taxation item is zero.

For example:

| Invoice/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Invoice item 1 | $0 | $0 | $0 |
| Taxation item 1 | $0 | $0 | $0 |
| Invoice item 2 | $0 | $0 | $0 |
| Taxation item 2 | $0 | $0 | $0 |
| Total | $0 | $0 | $0 |

In this use case, if you set the Create credit memos mirroring invoice items billing rule to Yes
| Credit memo/Item | Amount | Balance before write-off | Balance after write-off |
| --- | --- | --- | --- |
| Credit memo item 1 | $0 | $0 | $0 |
| Credit memo taxation item 1 | $0 | $0 | $0 |
| Credit memo item 2 | $0 | $0 | $0 |
| Credit memo taxation item 2 | $0 | $0 | $0 |
| Total | $0 | $0 | $0 |

If you set the Create credit memos mirroring invoice items billing rule to Yes but do not create for zero balance invoice items or No, invoice write-off is not allowed.
