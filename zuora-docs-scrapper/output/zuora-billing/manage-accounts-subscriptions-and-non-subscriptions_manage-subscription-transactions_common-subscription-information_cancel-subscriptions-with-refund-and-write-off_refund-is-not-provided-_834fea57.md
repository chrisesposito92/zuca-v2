---
title: "Refund is not provided when a customer cancels for specific period"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/cancel-subscriptions-with-refund-and-write-off/refund-is-not-provided-when-a-customer-cancels-for-specific-period"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:14.939Z"
---

# Refund is not provided when a customer cancels for specific period

This task explains how to handle cancellations when a customer hasn't paid for the current period, including setting the cancellation date and writing off unpaid invoices.

A customer didn't pay for the period of March 1 – March 31, then called on March 15 to cancel. The effective date for the cancellation should be March 31, and the customer will have access to the system until the end of March 31.

For Orders or Orders Harmonization tenant users, you can write off all unpaid invoices when performing the cancellation.

To perform a cancellation and write off all unpaid invoices, take the following actions:

1.  Perform a subscription cancellation that is effective on the last day of the current invoice period. For more information, see Cancel subscriptions and write off all unpaid invoices.
2.  Revoke the customer's access to the subscribed product or service on the effective date of the cancellation.
