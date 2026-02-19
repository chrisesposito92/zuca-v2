---
title: "Deploying context, attributes, and dynamic pricing"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deploying-context-attributes-and-dynamic-pricing"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:23.626Z"
---

# Deploying context, attributes, and dynamic pricing

This topic provides the guidelines for deploying Context, Attributes, and Dynamic Pricing using Deployment Manager.

-   For successful deployments, Zuora recommends deploying Context and Attributes before deploying Product, Product Rate Plans, and Product Rate Plan Charges. This is because Context and Attributes are configured before Dynamic Pricing rules.

-   In a Multi-Entity setup, sharing of Context and Attributes, Dynamic Pricing Rules, Product, Product Rate Plans, and Product Rate Plan Charges is not supported.

-   If the Compare screen shows no data for Context or Attributes, ensure Context and Attributes are enabled in both the source and target tenants.

-   Deployment Manager does not support deploying Discount Rate Plan Charges.
