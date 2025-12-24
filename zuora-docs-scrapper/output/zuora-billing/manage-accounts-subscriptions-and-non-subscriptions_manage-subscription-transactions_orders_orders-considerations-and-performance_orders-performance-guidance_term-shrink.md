---
title: "Term Shrink"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance/term-shrink"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:36.847Z"
---

# Term Shrink

This topic provides performance data for order actions that shrink subscription terms, categorized by charge model.

The following table shows performance data for Terms and Conditions order actions used to shrink the term of subscriptions. The data is broken down by charge model.

| Charge Model | # Subscriptions | # Actions | # Charges | # Tiers | Response Time (Seconds) |
| --- | --- | --- | --- | --- | --- |
| Per Unit Pricing | 12 | 1 | 20 | N/A | 85 |
| 1 | 1 | 185 | N/A | 68 |  |
| 100 | 1 | 1 | N/A | 107 |  |
| 12 | 1 | 1 | N/A | 4 |  |
| Flat Fee Pricing | 12 | 1 | 20 | N/A | 81 |
| 1 | 1 | 195 | N/A | 73 |  |
| 100 | 1 | 1 | N/A | 103 |  |
| 12 | 1 | 1 | N/A | 4 |  |
| Tiered Pricing | 11 | 1 | 19 | 10 | 92 |
| 1 | 1 | 1 | 23500 | 81 |  |
| 1 | 1 | 190 | 1 | 73 |  |
| 100 | 1 | 1 | 1 | 106 |  |
| 11 | 1 | 1 | 1 | 3 |  |
