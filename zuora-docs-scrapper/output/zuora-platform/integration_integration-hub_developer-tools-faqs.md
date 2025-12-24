---
title: "Developer Tools FAQs"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/developer-tools-faqs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:19.874Z"
---

# Developer Tools FAQs

This article addresses frequently asked questions about Developer Tools, including support for Zuora charge models and guidelines for overriding product prices using API Loaders.

This article provides answers to FAQs about Developer Tools.

1.  Q : Does Developer Tools support all Zuora charge models? A : You can use [all charge models](/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/example/product-rate-plan-charges) in the Product Catalog ​​​​​​and Orders API Loaders. However, you cannot override any of the charge field values in the Subscription or Amendment API Loader because of API limitations for the following charge models:

    -   MultiAttributePricing

    -   PreratedPerUnit

    -   PreratedPricing


2.  Q : What should I pay attention to when overriding product prices by importing a `.csv` file with the Subscription or Amendment API Loader? A : Ensure you have specified the following fields in the `.csv` file: For more information about the required fields, see [Template fields](/zuora-platform/integration/integration-hub/configure-generic-api-loader).

    | Price type | Field |
    | --- | --- |
    | flat-fee or per-unit | Charge.ID (or Charge.Name instead)Charge.ProductRatePlanChargeIdTier.Price |
    | tiered or volume | Charge.ID (or Charge.Name instead)Charge.ProductRatePlanChargeIdTier.TierTier.FromTier.ToTier.PriceTier.PriceFormat |
