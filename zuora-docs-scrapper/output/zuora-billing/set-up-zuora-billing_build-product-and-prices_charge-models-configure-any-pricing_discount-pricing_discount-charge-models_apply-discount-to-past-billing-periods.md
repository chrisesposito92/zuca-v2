---
title: "Apply discount to past billing periods"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/apply-discount-to-past-billing-periods"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:39.089Z"
---

# Apply discount to past billing periods

Learn how to apply discounts to past billing periods for add-on products, ensuring discounts are utilized even in non-open periods.

Zuora tracks the fixed amount discount balance for every recurring billing period. This allows you to take advantage of available discounts, even in past (non-open) periods. You can apply a discount for billing in a past period for add-on products that you later added as amendments.

The service period to use for the discount is always selected based on the service period of the recurring charge to which you apply the discount.

You can apply a discount to charges of a specific type: One-time, recurring, or usage.

A discount will always terminate at the end of a subscription term, even if the subscription is set to auto-renew. However, if you run an invoice after the auto-renew has been activated, the subscription term will be set to the next period.
