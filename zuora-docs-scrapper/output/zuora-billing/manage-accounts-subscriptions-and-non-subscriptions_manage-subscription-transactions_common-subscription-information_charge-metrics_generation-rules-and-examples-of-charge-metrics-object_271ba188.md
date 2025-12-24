---
title: "Subscription creation with a single charge - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics/generation-rules-and-examples-of-charge-metrics-object/subscription-creation-with-a-single-charge---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:09.524Z"
---

# Subscription creation with a single charge - Example

This example demonstrates how to create a subscription with a single charge, detailing the subscription and charge numbers, RPC ID, and charge dates.

As shown in the following table, a subscription is created with a single charge.

| Subscription number | Charge number | RPC ID | Charge start date | Charge end date |
| --- | --- | --- | --- | --- |
| S1 | C1 | RPC1 | 01/01/2025 | 01/01/2026 |

When the subscription is created, Zuora creates a Charge Metrics object for the charge. The charge metrics start and end dates are the same as the charge start and end dates.

| Charge metrics | RPC ID | Amendment type | Charge metrics start date | Charge metrics end date |
| --- | --- | --- | --- | --- |
| M1 | RPC1 | Composite | 01/01/2025 | 01/01/2026 |
