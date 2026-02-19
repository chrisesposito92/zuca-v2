---
title: "Amount less than calculated credit memo refund"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples/amount-less-than-calculated-credit-memo-refund"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:00.681Z"
---

# Amount less than calculated credit memo refund

This example demonstrates a refund of $40.0, which is less than the calculated credit memo of $74.2, resulting in an unapplied credit amount of $34.2.

In this example, based on the business policy, you have decided to refund $40.0 to the end customer. The following table shows that you specify this refund of $40.0, less than the calculated credit memo of $74.2.

| Your setting | Refund | $40 |  |  |
| --- | --- | --- | --- | --- |
| Zuora processed result | Payment | $100 | Applied amount | $60 |
|  | Credit Memo | $74.2 | Unapplied amount | $34.2 |
|  | Invoice (01/01/2022 ~ 1/31/2022) | $100 | Balance | $0 |

The result is: the refund of $40.0 is unapplied from the original payment of $100, so the payment amount applied to the invoice becomes $60. To keep the invoice balance to 0, $40 out of the $74.2 credit memo is applied to the invoice. The remaining unapplied credit amount is $34.2.
