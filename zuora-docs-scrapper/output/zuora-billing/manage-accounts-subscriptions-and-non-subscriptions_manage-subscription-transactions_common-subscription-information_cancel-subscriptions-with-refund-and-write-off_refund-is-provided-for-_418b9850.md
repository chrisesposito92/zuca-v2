---
title: "Refund is provided for undelivered services"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/cancel-subscriptions-with-refund-and-write-off/refund-is-provided-for-undelivered-services"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:17.279Z"
---

# Refund is provided for undelivered services

This task outlines the process for providing refunds for undelivered services, including cancellation procedures and invoice adjustments.

Example: A customer paid $100 for service for the period of April 1 – April 30. The customer called on April 16 to cancel.

-   The effective date of the cancellation should be April 16.
-   The customer's access to the system is revoked immediately.
-   The negative invoice created will be for -$50 for the period April 16 – April 30.
-   Net revenue for this series of invoices will be $50 for the period April 1 – April 15.
    -   Initial invoice = $100 for the period April 1 – April 30
    -   Negative cancellation invoice = -$50 for the period of April 16 – April 30.

Depending on your tenant type, perform one of the following tasks:

-   For Orders or Orders Harmonization tenant users, to perform a cancellation and provide a refund, you can enter the refund amount $50 when performing the cancellation. For steps and more refund examples, see Cancel subscriptions and refund end customers automatically.
-   For Subscribe and Amend users, to perform a cancellation and provide a refund, take the following actions:

1.  Perform a subscription cancellation that is effective on the day the customer cancelled. For more information, see Cancel subscriptions.
2.  Revoke the customer's access to the subscribed product or service, effective immediately.In the next bill run, Zuora creates a negative prorated invoice that reflects the undelivered portion of service. This negative invoice is used to offset any undelivered revenue from the initial invoice.
3.  Transfer the negative invoice to the credit balance.This increases the balance of this invoice to $0.
4.  Refund the credit balance to the customer. If a customer is still paying for other uncancelled services from your business, you can choose to hold the credit balance to offset a future invoice.
