---
title: "Example 1: Refund amount equals calculated credit memo"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples/example-1-refund-amount-equals-calculated-credit-memo"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:15.956Z"
---

# Example 1: Refund amount equals calculated credit memo

This example demonstrates a scenario where a refund of $74.2 matches the calculated credit memo, resulting in a zero invoice balance.

The following table shows an example in which you specify a refund of $74.2, the same as the calculated credit memo.

| Your setting | Refund | $74.2 |  |  |
| --- | --- | --- | --- | --- |
| Zuora processed result | Payment | $100 | Applied amount | $25.8 |
|  | Credit Memo | $74.2 | Unapplied amount | $0 |
|  | Invoice (01/01/2022 ~ 1/31/2022) | $100 | Balance | $0 |

The result is: the refund of $74.2 is unapplied from the original payment of $100, so the payment applied amount to the invoice becomes $25.8. Then the credit memo of $74.2 is fully applied to the invoice. As a result, the invoice balance is 0.
