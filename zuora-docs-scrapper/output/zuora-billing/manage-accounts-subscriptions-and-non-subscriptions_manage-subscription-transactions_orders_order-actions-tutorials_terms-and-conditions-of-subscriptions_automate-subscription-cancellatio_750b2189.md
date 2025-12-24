---
title: "Automate subscription cancellations, suspensions, or resumptions with Terms And Conditions order action"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/terms-and-conditions-of-subscriptions/automate-subscription-cancellations-suspensions-or-resumptions-with-terms-and-conditions-order-action"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:00.227Z"
---

# Automate subscription cancellations, suspensions, or resumptions with Terms And Conditions order action

This topic explains how to automate subscription cancellations, suspensions, or resumptions using the Terms And Conditions order action in Zuora.

This tutorial demonstrates how to schedule a subscription cancellation by creating an order with the Terms And Conditions order action. The procedure for scheduling a suspension or resumption is similar to cancellation.

You can do this from the Zuora UI or through the REST API.

## Introduction to scheduled actions for subscription automation

Zuora allows you to set the following settings in orders using the Terms And Conditions order action to cancel, suspend, or resume subscriptions automatically:

-   Scheduled cancellation date

-   Scheduled suspension date

-   Scheduled resumption date


You can specify one or more of these dates for a subscription, following these rules:

-   Each scheduled date must be in the future.

-   Each scheduled date must not be earlier than the base subscription’s start date.

-   The scheduled cancellation date must be later than any other scheduled date.

-   The scheduled resumption date must be later than the scheduled suspension date.


When a scheduled date arrives, the system automatically creates an order with the corresponding order actions to cancel, suspend, or resume the existing subscription.
