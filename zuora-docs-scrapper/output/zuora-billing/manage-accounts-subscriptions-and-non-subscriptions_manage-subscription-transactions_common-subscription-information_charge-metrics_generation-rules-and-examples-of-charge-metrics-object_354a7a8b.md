---
title: "Subscription updation - Example"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics/generation-rules-and-examples-of-charge-metrics-object/subscription-updation---example"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:14.296Z"
---

# Subscription updation - Example

This article explains how to update a subscription by modifying charge details and demonstrates the management of Charge Metrics during subscription modifications.

When you update a subscription to modify charge details, for example, adjusting charge prices, changing subscription terms, or removing charges, Zuora might generate Charge Metrics objects during these modifications.

The example in this section demonstrates how Zuora manages the Charge Metric object during different types of subscription modifications.

## Create a subscription with a single charge

As shown in the following table, a subscription is created with a single charge.

| Subscription number | Charge number | RPC ID | Price (per month) | Charge start date | Charge end date |
| --- | --- | --- | --- | --- | --- |
| S1 | C1 | RPC1 | $100 | 01/01/2025 | 01/01/2026 |

When the subscription is created, Zuora creates a Charge Metrics object ( `M1` ) for `RPC1`

| Charge metrics | RPC ID | Amendment type | Gross MRR | Charge metrics start date | Charge metrics end date |
| --- | --- | --- | --- | --- | --- |
| M1 | RPC1 | Composite | $100 | 01/01/2025 | 01/01/2026 |

## Update the charge price

When you update the charge price from `$100` to `$120` for the service period from `06/01/2025` to `01/01/2026` , Zuora generates `RPC2` for the first service period from `01/01/2025` to `06/01/2025` and `RPC3` for the second service period from `06/01/2025` to `01/01/2026`

| Subscription number | Charge number | RPC ID | Price (per month) | Charge start date | Charge end date |
| --- | --- | --- | --- | --- | --- |
| S1 | C1 | RPC2 | $100 | 01/01/2025 | 06/01/2025 |
| C1 | RPC3 | $120 | 06/01/2025 | 01/01/2026 |  |

As part of this product update, Zuora updates the charge end date of the Charge Metrics object ( `M1` ) to `06/01/2025` . The object remains linked to `RPC1` because both `RPC1` and `RPC2` include the same service period with identical sell prices and `RPC1` was created before `RPC2` .

Zuora also generates a new Charge Metrics object ( `M2` ) for `RPC3`.

| Charge metrics | RPC ID | Amendment type | Gross MRR | Charge metrics start date | Charge metrics end date |
| --- | --- | --- | --- | --- | --- |
| M1 | RPC1 | Composite | $100 | 01/01/2025 | 06/01/2025 |
| M2 | RPC3 | UpdateProduct | $120 | 06/01/2025 | 01/01/2026 |

## Update the subscription term

When you change the subscription term from 12 to 13 months, Zuora generates `RPC4` and `RPC5` . The charge details of `RPC4` are the same as `RPC2`. The only difference between `RPC5` and `RPC3.`

| Subscription number | Charge number | RPC ID | Price (per month) | Charge start date | Charge end date |
| --- | --- | --- | --- | --- | --- |
| S1 | C1 | RPC4 | $100 | 01/01/2025 | 06/01/2025 |
| C1 | RPC5 | $120 | 06/01/2025 | 02/01/2026 |  |

As part of this term update, Zuora generates a new Charge Metrics object ( `M3` ) for `RPC5` . The charge metrics start date of `M3` is `01/01/2026` because the service period from `06/01/2025` to `01/01/2026` is included in `M2` .

Note that `M2` remains linked to `RPC3` because `RPC3` and `RPC5` overlap during the service period from `06/01/2025` to `01/01/2026` with identical sell prices. As a result, `RPC3` is selected because it was created before `RPC5`

| Charge metrics | RPC ID | Amendment type | Gross MRR | Charge metrics start date | Charge metrics end date |
| --- | --- | --- | --- | --- | --- |
| M1 | RPC1 | Composite | $100 | 01/01/2025 | 06/01/2025 |
| M2 | RPC3 | UpdateProduct | $120 | 06/01/2025 | 01/01/2026 |
| M3 | RPC5 | TermsAndConditions | $120 | 01/01/2026 | 02/01/2026 |

## Remove the product

When you schedule a product removal for `10/01/2025` , Zuora generates `RPC6` and `RPC7` . The charge details of `RPC6` are the same as `RPC2` and `RPC4` . The only difference between `RPC7` and `RPC5`

| Subscription number | Charge number | RPC ID | Price (per month) | Charge start date | Charge end date |
| --- | --- | --- | --- | --- | --- |
| S1 | C1 | RPC6 | $100 | 01/01/2025 | 06/01/2025 |
| C1 | RPC7 | $120 | 06/01/2025 | 10/01/2025 |  |

As part of this product removal, Zuora updates the charge metrics end date for `M2` and generates a new Charge Metrics object ( `M4` ) for `RPC7` . The gross MRR value of `M4` is `$0`

The Charge Metrics object `M3` , which links to `RPC5` , is deprecated because its service period is overridden by `RPC7`

| Charge metrics | RPC ID | Amendment type | Gross MRR | Charge metrics start date | Charge metrics end date |
| --- | --- | --- | --- | --- | --- |
| M1 | RPC1 | Composite | $100 | 01/01/2025 | 06/01/2025 |
| M2 | RPC3 | UpdateProduct | $120 | 06/01/2025 | 10/01/2025 |
| M4 | RPC7 | RemoveProduct | $0 | 10/01/2025 | 02/01/2026 |

In this example, Zuora generates a total of seven RPCs. After the last step, only three of them have corresponding Charge Metrics objects.
