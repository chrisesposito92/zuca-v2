---
title: "Quantity Decrease"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance/quantity-decrease"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:31.782Z"
---

# Quantity Decrease

This topic provides performance data for actions that decrease product quantities, categorized by charge model.

The following table shows performance data for Update Product order actions used to decrease the quantity of products. The data is broken down by charge model.

| Charge Model | # Subscriptions | # Actions | # Charges | # Tiers | Response Time (Seconds) |
| --- | --- | --- | --- | --- | --- |
| Per Unit Pricing | 5 | 4 | 8 | N/A | 94 |
| 1 | 1 | 145 | N/A | 105 |  |
| 1 | 65 | 1 | N/A | 107 |  |
| 80 | 1 | 1 | N/A | 105 |  |
| 5 | 1 | 1 | N/A | 2 |  |
| Tiered Pricing | 4 | 5 | 7 | 10 | 105 |
| 1 | 1 | 1 | 16000 | 97 |  |
| 1 | 1 | 190 | 1 | 83 |  |
| 1 | 65 | 1 | 1 | 96 |  |
| 105 | 1 | 1 | 1 | 114 |  |
| 4 | 1 | 1 | 1 | 1 |  |
