---
title: "Dynamic pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:39.015Z"
---

# Dynamic pricing

Explore Zuora's Dynamic Pricing framework, which enables real-time, intelligent pricing based on contextual business inputs, replacing the traditional Attribute-Based Pricing model.

Note:

-   This feature is now Generally Available (GA) and ready for production use. Contact [Zuora Global Support](http://support.zuora.com/) to enable it in your tenant if it's not already provisioned.

-   Dynamic Pricing is the strategic evolution of Attribute-Based Pricing (ABP), which is now planned for deprecation. We recommend that all new implementations use the Dynamic Pricing framework going forward.


Zuora's Product Catalog now supports a Dynamic Pricing framework, enabling real-time, intelligent pricing based on contextual business inputs. Unlike traditional Attribute-Based Pricing, which uses static condition-based prices, Dynamic Pricing calculates prices at runtime using variables such as:

-   Customer segment

-   Location

-   Sales channel

-   Session behavior

-   Product configuration

-   Custom


Dynamic Pricing (DP) is supported only in the new Product Catalog called Catalog Beta. If you are enabled for Dynamic Pricing, you will see both the old Catalog and the new Catalog in the left navigation bar. Catalog Beta is a seamless migration of the old catalog where all existing products, rate plans, and charges are already available in the new experience. You can either:

-   Update existing Product Rate Plan Charges (PRPCs) with Dynamic Pricing, or

-   Create new PRPCs with Dynamic Pricing directly in Catalog Beta.

    Note:

    Be mindful when updating existing PRPCs, as they may already be tied to active subscriptions. Updates could impact downstream pricing and billing for those subscriptions.
