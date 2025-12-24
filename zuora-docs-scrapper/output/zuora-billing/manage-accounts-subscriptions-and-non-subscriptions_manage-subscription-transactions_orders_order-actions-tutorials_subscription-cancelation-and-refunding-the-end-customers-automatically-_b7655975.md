---
title: "Example 3: Refund amount greater than calculated credit memo"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples/example-3-refund-amount-greater-than-calculated-credit-memo"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:20.907Z"
---

# Example 3: Refund amount greater than calculated credit memo

This example demonstrates a refund of $100, which exceeds the calculated credit memo of $74.2, with the outstanding balance written off.

In this example, based on the business policy, you have decided to refund $100.0 to the end customer. Among the $100 refund, $74.2 is for the unconsumed subscription period, and $25.8 is for the compensation to the end customer agreed upon between you and the end customer.

The following table shows that you specify this refund of $100, greater than the calculated credit memo of $74.2, and choose to write off the outstanding balance of the invoice.

| Your setting | Refund | $100 |  |  |
| --- | --- | --- | --- | --- |
| Zuora processed result | Payment | $100 | Applied amount | $0 |
|  | Credit Memo 1 | $74.2 | Unapplied amount | $0 |
|  | Credit Memo 2 | $25.8 | Unapplied amount | $0 |
|  | Invoice (01/01/2022 ~ 1/31/2022) | $100 | Balance | $0 |

The result is: the refund of $100 is unapplied from the original payment of $100, so the payment amount applied to the invoice becomes $0. Besides credit memo 1 of $74.2 for the unconsumed subscription period, credit memo 2 of $25.8 to write off the outstanding balance of the invoice is also automatically generated and applied to the invoice.
