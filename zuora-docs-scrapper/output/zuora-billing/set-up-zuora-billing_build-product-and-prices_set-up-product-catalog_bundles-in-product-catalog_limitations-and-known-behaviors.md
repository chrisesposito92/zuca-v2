---
title: "Limitations and known behaviors"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/bundles-in-product-catalog/limitations-and-known-behaviors"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:38.692Z"
---

# Limitations and known behaviors

This section lists the limitations and known behaviors of Hard Bundles in Zuora Billing.

The initial Hard Bundles release has these important limitations and constraints:

-   Component products and plans cannot themselves be bundles. A bundle can only reference standalone products and plans.

-   V1 does not support post-sale “unbundling” flows where parts of a bundle are automatically split into standalone subscriptions. To unbundle, you must cancel the original subscription and create new subscriptions for the desired standalone components, or use soft-bundle constructs when available.

-   Once an optional charge has been:

    -   Subscribed, and then

    -   Explicitly removed from a subscription bundle it cannot be added back to the same subscription rate plan in V1 (for both amendments and renewals).

-   For inherited charges, only price and default quantity are editable at the bundle level. Other properties (for example, accounting codes, tax codes) must be changed on the component charge and do not automatically cascade to the bundle’s catalog entries in V1.

-   Merging multiple component charges into a single bundle charge typically requires compatible accounting and tax metadata (for example, same accounting codes). Cross-category merging is limited by Revenue Management in early versions.

-   If a component plan’s price changes later, the system can notify you that bundles reference that plan, but bundle prices are not automatically updated. Product teams must manually adjust bundle pricing to reflect new economics.

-   Dynamic Pricing rate cards defined on component charges are not inherited by bundle charges. You must create a new rate card on the bundle rate plan if dynamic pricing is required. However, in future releases, bundles are expected to support dynamic pricing inheritance.

-   Multi-Entity (ME) is not supported for bundles in the current release.

-   Editing an existing bundle does not allow adding additional products. To change bundle composition, you must create a new bundle.

-   Clone functionality is not supported for bundles in V1.

-   Pricing waterfall is not supported when using bundles.
