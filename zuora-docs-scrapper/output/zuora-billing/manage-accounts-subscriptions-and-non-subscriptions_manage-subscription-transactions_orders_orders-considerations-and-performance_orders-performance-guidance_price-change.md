---
title: "Price change"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance/price-change"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:33.943Z"
---

# Price change

This topic provides performance data for updating product order actions to change subscription rate plan charges, categorized by charge model.

The following table shows performance data for Update Product order actions used to change the price of subscription rate plan charges. The data is broken down by charge model.

| Charge Model | # Subscriptions | # Actions | # Charges | # Tiers | Response Time (Seconds) |
| --- | --- | --- | --- | --- | --- |
| Per Unit Pricing | 5 | 5 | 8 | N/A | 115 |
| 1 | 1 | 165 | N/A | 105 |  |
| 1 | 65 | 1 | N/A | 104 |  |
| 85 | 1 | 1 | N/A | 100 |  |
| 5 | 1 | 1 | N/A | 1 |  |
| Flat Fee Pricing | 5 | 5 | 8 | N/A | 106 |
| 1 | 1 | 175 | N/A | 108 |  |
| 1 | 65 | 1 | N/A | 102 |  |
| 90 | 1 | 1 | N/A | 108 |  |
| 5 | 1 | 1 | N/A | 1 |  |
| Tiered Pricing | 4 | 5 | 6 | 10 | 77 |
| 1 | 1 | 1 | 10500 | 84 |  |
| 1 | 1 | 175 | 1 | 116 |  |
| 1 | 65 | 1 | 1 | 108 |  |
| 85 | 1 | 1 | 1 | 102 |  |
| 4 | 1 | 1 | 1 | 1 |  |
