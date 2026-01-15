---
title: "Customer initiated cancelations"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-cancellation-with-refund-and-write-off/customer-initiated-cancelations"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:13.401Z"
---

# Customer initiated cancelations

This task outlines the process and considerations for handling customer-initiated subscription cancellations, including refund policies and revenue implications.

Key Question: When a customer cancels a subscription, do you provide a refund?

When a customer cancels a subscription, most companies does not provide a refund to the customer. The cancellation takes place at the end of the current invoice period, and the customer continues to be able to access the system until the cancellation becomes effective. Taking this approach has the benefit of avoiding a reduction in cash flow and simplifies accounting for revenue.

When the need to provide a refund arises, be sure to cancel the customer's subscription immediately and revoke the access to the system. This also has revenue implications as you need to reduce your revenue for any undelivered services.

Option 1 (Recommended): Refund is not provided when a customer cancels

Two examples are given. In Example 1, the invoice is fully paid, whereas in Example 2, the invoice is unpaid.

Example 1: A customer paid for the period of March 1 – March 31, then called on March 15 to cancel. The effective date for the cancellation should be March 31, and the customer will have access to the system until the end of March 31.

To perform a cancelation without providing a refund, take the following actions:

1.  Perform a subscription cancellation that is effective on the last day of the current invoice period. Depending on your tenant type, perform one of the following tasks:

    -   For Orders or Orders Harmonization tenant users, see Cancel subscriptions.

    -   For Subscribe and Amend tenant users, see Cancel subscriptions.


2.  Revoke the customer’s access to the subscribed product or service on the effective date of the cancellation.
