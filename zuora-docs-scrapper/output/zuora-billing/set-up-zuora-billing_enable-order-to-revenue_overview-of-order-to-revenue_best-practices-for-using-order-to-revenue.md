---
title: "Best practices for using Order to Revenue"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/best-practices-for-using-order-to-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:19.255Z"
---

# Best practices for using Order to Revenue

Learn best practices for maintaining data consistency and proper revenue accounting in Zuora Revenue, including using invoice reversals, avoiding deletions, and regenerating transactions.

We recommend the following best practices to achieve proper revenue accounting results in Zuora Revenue.

## Use invoice reversal instead of un-posting, canceling, or deleting invoices and memos

Once the following transactions are posted, do not perform the un-posting, canceling, or deleting operations in Zuora Billing, as the transactions might have already been accounted for in Zuora Revenue. These operations disturb the accounting generated in Zuora Revenue and cause data inconsistency between Billing and Revenue. Instead, you can use invoice reversals to perform the preceding operation.

-   Invoice items

-   Credit memos

-   Debit memos

-   Invoice item adjustments


## Regenerate transactions manually

If you find data inconsistency between the booking CCV amount and the total billing amount, use the [Regenerate booking transactions](https://developer.zuora.com/v1-api-reference/api/tag/Operations/) API operation to regenerate the booking transactions.
