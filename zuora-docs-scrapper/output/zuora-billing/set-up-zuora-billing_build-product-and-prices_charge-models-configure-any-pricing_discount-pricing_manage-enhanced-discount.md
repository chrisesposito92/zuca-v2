---
title: "Manage enhanced discount"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:39.658Z"
---

# Manage enhanced discount

Learn how to manage enhanced discounts by applying flexible discount durations and policies through the Enhanced Discount feature.

Through the Enhanced Discount feature, you can apply a discount to charges according to the discount duration more accurately. You can also define the discount duration more flexibly by adopting the new start date policy and end date policy of a discount and specify the apply-to scope of the discount, when adding a discount through the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) API operation.

This feature is only available to the [Orders Harmonization](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization) and [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) tenants.

You can perform the following tasks to create enhanced discounts starting from the product catalog.

## Task 1: Create and apply enhanced discounts through Zuora UI

You can create a discount charge and enable the discount charge as an enhanced discount in the product catalog. For how to create a discount charge, see [Manage discount charges](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-discount-charges) . If you checked the Allow apply to billing period partially checkbox when creating the discount charge, the discount charge is enabled as an enhanced discount.

The charge model of the discount charge can be Discount-Fixed Amount or Discount-Percentage.
