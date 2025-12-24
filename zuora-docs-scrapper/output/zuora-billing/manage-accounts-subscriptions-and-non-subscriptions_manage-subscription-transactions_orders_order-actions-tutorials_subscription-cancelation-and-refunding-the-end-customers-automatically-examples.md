---
title: "Subscription cancelation and refunding the end customers automatically - Examples"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:13.314Z"
---

# Subscription cancelation and refunding the end customers automatically - Examples

This topic provides examples of canceling a subscription and issuing refunds with calculated credit memos, focusing on different refund scenarios for a termed subscription.

The section includes examples of canceling a subscription with different refunds but the same calculated credit memo.

The following subscription will be used in the examples:

-   Subscription Term Type: Termed

-   Charge: 1 monthly recurring charge of 100 USD

-   Contract Effective Date: 2022-12-01


For simplification, the following table only lists information on the first two billing periods of the subscription.

| Billing period | Billing period start date | Billing period end date | Payment |
| --- | --- | --- | --- |
| 1st | 12/01/2022 | 12/31/2022 | $100 |
| 2nd | 01/01/2022 | 1/31/2022 | $100 |
| Cancel Effective Date | Specific Date: 01/09/2022 | Calculated credit memo: $74.2 |  |

An end customer requests you (the merchant) to cancel the subscription by specifying the cancellation effective date as 01/09/2022, which only affects the 2nd billing period and payment. A credit memo is calculated based on the specified cancellation effective date. That is, counting from 01/09/2022, 23 out of 31 days do not need to be paid, and thus $74.2 is calculated as a credit memo.

You may specify different refund amounts based on the business policy and the calculated credit memo in different situations.
