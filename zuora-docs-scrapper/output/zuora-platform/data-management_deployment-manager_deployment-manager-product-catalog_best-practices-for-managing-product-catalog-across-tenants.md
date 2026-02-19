---
title: "Best practices for managing product catalog across tenants"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-product-catalog/best-practices-for-managing-product-catalog-across-tenants"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:13.386Z"
---

# Best practices for managing product catalog across tenants

This article outlines the best practices for managing product catalogs in tenants, including deploying interdependent components, baselining catalog items, customizing SKUs, and ensuring unique naming conventions.

-   Zuora Deployment Manager clones the information from the source to the target tenant. For successful deployments, Zuora recommends deploying the interdependent components of Tax codes, Accounting Codes, Revenue Recognition Codes, Currency, and Custom Fields before product catalog deployments.

-   When modifying a catalog item in Production (higher environment), it is recommended to baseline it to lower environments (Zuora Central Sandbox and Sandbox).

-   Customize the SKU and Product Number prefix per the business operations so that products have consistency and uniqueness.

-   Provide unique names for Products, Rate Plans, and Rate Plan Charges for maintaining and managing product catalog.

-   Deployment Manager has a validation feature that does not allow Products, Rate Plans, and Rate Plan Charges with the same name to be displayed, validated, and deployed from the compare screen. In order to have the best results, it is recommended to maintain uniqueness at the naming convention level.
