---
title: "How Hard Bundles work"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/bundles-in-product-catalog/how-hard-bundles-work"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:16.498Z"
---

# How Hard Bundles work

Hard bundles in Zuora are constructed from existing products and rate plans, ensuring consistent pricing, billing, and revenue handling through specific behaviors at the product, plan, and charge levels.

Hard bundles are built on top of existing products and rate plans. When you create a hard bundle, Zuora applies specific behaviors at the product, plan, and charge levels to ensure consistent pricing, billing, and revenue handling.

## Product-Level Behavior

At the product level, a hard bundle:

-   Represents a new bundle product that references multiple existing standalone products.

-   Inherits features and entitlements from all included component products, when these capabilities are enabled.

-   Uses effective dates derived from its component products. By default, the bundle cannot be effective beyond the earliest end date of its component products.

-   Cannot include other bundles as components.

    -   Nested bundles are not supported.

    -   All component products must be standalone products.


## Plan-Level Behavior

At the plan level, a hard bundle:

-   Is composed of rate plans that belong to the products included in the bundle.

-   Can only reference plans from products selected at the bundle product level.

-   Automatically inherits all charges from the selected component plans as the starting configuration for the bundle plan.

-   Uses effective dates based on the overlap of the component plans’ effective periods.

-   Effective date handling

    -   Zuora calculates a proposed effective date for the bundle plan based on the earliest expiring component plan.

    -   You may override the proposed effective date to an earlier date (for example, for backdating), as long as the component plan constraints allow it.

    -   The bundle plan cannot extend beyond the earliest expiring component plan.


## Charge-Level Behavior

When configuring charges for a bundle plan, Zuora starts by inheriting all active charges from the selected component plans. For each inherited charge, you can choose one of the following options:

-   Keep a 1:1 inherited charge

-   Exclude a charge - You can remove inherited charges that are not relevant to the bundle (for example, redundant installation or setup fees).

-   Create a new bundle-specific charge

    -   You can add charges that exist only at the bundle level.

    -   In the current release, combining charges with different accounting attributes is restricted due to revenue management requirements.

    -   If a new charge represents multiple underlying components and is not attributed back, revenue may be treated as belonging to the bundle rather than the individual components in early phases.

-   Discounts follow specific rules in bundles:

    -   Discount charges are not inherited from component plans.

    -   To apply a discount to a bundle, you must create the discount directly on the bundle rate plan.

    -   Bundle-level discounts apply only to the bundle charges and do not automatically cascade from component products or plans. This ensures that discounting is controlled at the bundle level and avoids unintended pricing or revenue attribution behavior.


## Use Case: Create a Hard Bundle in Zuora Billing

A SaaS company offers multiple standalone products, such as Core Platform, Advanced Analytics, and Premium Support. Customers frequently purchase these together as a single solution.

Using Zuora Bundles, the company creates a Hard Bundle that packages these products into one sellable offering.

Sales selects a single bundle SKU during quoting. When the order is placed, Zuora automatically expands the bundle into its component plans and charges. The customer receives one invoice, while usage tracking and billing remain intact at the component level.

Result: Sales sells one SKU, customers receive one invoice, and Finance retains component-level visibility.
