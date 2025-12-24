---
title: "Case I: Reversing invoices without discount items or negative items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases/case-i-reversing-invoices-without-discount-items-or-negative-items"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:01.105Z"
---

# Case I: Reversing invoices without discount items or negative items

This reference explains the process of reversing invoices with positive amounts, detailing the impact on balance before and after reversal.

You want to reverse an invoice with two regular invoice items and their taxation items, and the amount of each item is positive.

For example:

| Invoice/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Invoice item 1 | $100 | $100 | $0 |
| Taxation item 1 | $20 | $20 | $0 |
| Invoice item 2 | $10 | $10 | $0 |
| Taxation item 2 | $2 | $2 | $0 |
| Total | $132 | $132 | $0 |

In this use case, no matter which option you set the create credit memos mirroring invoice items billing rule to, the credit memo created during invoice reversal is as follows:

| Credit memo/Item | Amount | Balance before reversal | Balance after reversal |
| --- | --- | --- | --- |
| Credit memo item 1 | $100 | $100 | $0 |
| Credit memo taxation item 1 | $20 | $20 | $0 |
| Credit memo item 2 | $10 | $10 | $0 |
| Credit memo taxation item 2 | $2 | $2 | $0 |
| Total | $132 | $132 | $0 |
