---
title: "Impact on existing product catalog"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/impact-on-existing-product-catalog"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:09.510Z"
---

# Impact on existing product catalog

Enabling the Attribute-based Pricing feature maintains existing product structures while introducing new charge definitions for enhanced pricing flexibility.

The experience of enabling the Attribute-based Pricing feature for your existing product catalog is seamless. The following things happen to your current product catalog after enabling this feature:

-   The existing products and product rate plans are intact.

-   Existing APIs, data retrieval mechanisms, and subscriptions continue to function as is.

-   One product charge definition is automatically created as default for each product rate plan charge to store its current information about billing, pricing, accounting, and taxation.

-   The product rate plan charge object is updated to store only the basic information such as charge name, charge number, charge type, and charge model.

-   When linked to other product rate plans, the default product charge definition of the linked charge will apply to that product rate plan as well.


After the Attribute-based Pricing feature is enabled, you can do the following to enhance your product catalog:

-   Add more product charge definitions for a single product rate plan charge to have an attribute-based pricing structure, with each charge definition containing different attribute values and pricing.

-   Adopt the changes in the APIs to include product charge definitions.
