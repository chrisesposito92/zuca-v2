---
title: "Auto-refund and write-off process during subscription cancellation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation-and-refund-end-customers-automatically/auto-refund-and-write-off-process-during-subscription-cancellation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:05.621Z"
---

# Auto-refund and write-off process during subscription cancellation

This task outlines the automatic refund and write-off process during subscription cancellation, including steps for generating credit memos and handling payments.

If the cancel and refund request, including the write-off setting, is submitted, the refund and write-off process is automatically initiated as follows:

1.  The subscription is canceled.
2.  A credit memo or final invoice is generated depending on the cancellation effective date. The credit memo is generated for covering any unconsumed services of the subscription.
3.  The payment is unapplied from the invoice.
4.  The refund is returned to the end customer account of the payments.
5.  The credit memo is fully or partially applied to the invoices depending on the refund amount.
6.  Depending on your settings, more credit memos could be created to write off the outstanding balances on the invoices.
