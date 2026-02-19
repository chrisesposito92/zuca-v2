---
title: "How Hard Bundles are created"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/bundles-in-product-catalog/how-hard-bundles-are-created"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:16.561Z"
---

# How Hard Bundles are created

This section describes how Hard Bundles are constructed from existing products and rate plans, including how features, charges, and pricing are inherited and managed at the bundle level.

When you create a bundle, Zuora uses your existing products and rate plans as the starting point.

-   Features and entitlements are inherited from the selected component products.

-   Charges from selected component plans are copied into a new bundle rate plan.

-   You can then:

    -   Override prices

    -   Update default quantities

    -   Exclude charges

    -   Mark charges as optional, allowing them to be included or excluded at order or quote time based on bundle rules

    -   Add new bundle-specific charges


The bundle has its own product, rate plan, and charges, which are managed independently from the original component products.

Changes to the original products do not automatically cascade to existing bundles in the current release.
