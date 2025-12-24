---
title: "Task 2: Apply enhanced discounts and specify discount durations through API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/task-2-apply-enhanced-discounts-and-specify-discount-durations-through-api"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:22.089Z"
---

# Task 2: Apply enhanced discounts and specify discount durations through API

Learn how to apply enhanced discounts and specify discount durations using the API, depending on the configuration of the Apply Discount To field in the product catalog.

Depending on the value you set for the Apply Discount To field during discount creation in product catalog, you may perform one of the following tasks through API:

-   If you have set the field to All charges in the subscription and selected specific regular charges to be applied with enhanced discounts, you need to use the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/)API operation to specify your discount duration with the `startDatePolicy` and `endDatePolicy` fields.

-   If you have set the field to

    All charges in the rate plan, or set the field to All charges in the subscription but haven't selected specific regular charges to be applied with enhanced discounts, you need to apply the enhanced discount to subscription charges through the `createSubscription` or `addProduct` order actions of the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/) API operation and specify the discount duration with the `startDatePolicy` and `endDatePolicy` fields.
