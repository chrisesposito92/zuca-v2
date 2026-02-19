---
title: "Cancel the subscription at the start of the current invoice period"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-cancellation-with-refund-and-write-off/cancel-the-subscription-at-the-start-of-the-current-invoice-period"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:33.624Z"
---

# Cancel the subscription at the start of the current invoice period

This task topic explains how to cancel a subscription at the start of the current invoice period, a common approach for B2C companies with short collections periods, resulting in a full write-off of the existing invoice.

Cancel the subscription at the start of the current invoice period: Use this functionality when your company has a short collections period prior to write-off, such as in most B2C companies.

Using this option, the subscription is retroactively canceled at the start of the current invoice period. This approach is the most common and simplest to implement. However, following this approach results in a full write-off of the existing invoice. This also introduces a variance between the true subscription term and the recorded subscription term in Zuora for the canceled customers. For most B2C businesses, this variance is very small and is deemed immaterial, making this the more scalable and thus a preferred approach.

1.  Perform a subscription cancellation that is effective at the start of the current invoice period.
2.  Revoke the customer’s access to the subscribed product/service immediately. The Zuora application creates a negative invoice in the next bill run. This negative invoice is used to offset all the revenue from the original invoice.
3.  Transfer the negative invoice to the credit balance. This increases the balance of this invoice to $0.
4.  Apply the credit balance to the outstanding invoice. This reduces the balance of the original invoice to $0. This step can be automated using payment runs for accounts through an electronic payment method.
