---
title: "Refund is provided for undelivered services"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-cancellation-with-refund-and-write-off/refund-is-provided-for-undelivered-services"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:22.817Z"
---

# Refund is provided for undelivered services

This task topic outlines the process for providing refunds for undelivered services, including the cancelation procedures and invoice adjustments.

Example: A customer has paid $100 for service for the period of April 1 – April 30. The customer called on April 16 to cancel the service.

-   The effective date of the cancellation must be April 16.
-   The customer's access to the system is revoked immediately.
-   The negative invoice created will be for -$50 for the period April 16 – April 30.
-   Net revenue for this series of invoices will be $50 for the period April 1 – April 15.
    -   Initial invoice = $100 for the period April 1 – April 30
    -   Negative cancellation invoice = -$50 for the period of April 16 – April 30.

Depending on your tenant type, perform one of the following tasks:

-   For Orders or Orders Harmonization tenant users, to perform a cancellation and provide a refund, you can enter the refund amount $50 when performing the cancellation. For steps and more refund examples, see [Cancel subscriptions and refund end customers automatically](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples).
-   For Subscribe and Amend users, to perform a cancellation and provide a refund, perform the following actions:

1.  Perform a subscription cancellation that is effective on the day the customer canceled. For more information, see [Cancel subscriptions](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-cancelation/canceling-a-subscription).
2.  Revoke the customer's access to the subscribed product or service, effective immediately. In the next bill run, Zuora creates a negative prorated invoice that reflects the undelivered portion of the service. This negative invoice is used to offset any undelivered revenue from the initial invoice.
3.  Transfer the negative invoice to the credit balance.This increases the balance of this invoice to $0.
4.  Refund the credit balance to the customer. If a customer is still paying for other uncancelled services from your business, you can choose to hold the credit balance to offset a future invoice.
