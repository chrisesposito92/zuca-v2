---
title: "Considerations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/considerations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:56.303Z"
---

# Considerations

Understand the limitations of Dynamic Pricing in specific tenant configurations, including charge type resets, impact on active subscriptions, unsupported clone functionality, and tenant configuration restrictions.

Dynamic Pricing has the following limitations in specific tenant configurations:

-   Advanced charge models - The following advanced charge models are not supported:

    -   Pre-rated High Watermark

    -   Pre-rated Per Unit

    -   Delivery

    -   Map

        Note:

        Zuora plans to introduce support for the Overage and Tiered with Overage pricing models for usage charge types in a future update.

-   Price Limit Configuration in Dynamic Pricing - With Dynamic Pricing, you can define price limits (Min and Max) in the rate card for the following charge models under the Usage charge type:

    -   Per Unit

    -   Volume

    -   Tiered

        Price limits can be defined at both the charge (row) level and the tier level in the rate card.

        -   Charge-level price limits apply to the overall charge.

        -   Tier-level price limits apply within each tier for Tiered and Volume charge models.

-   Charge Type/Model Reset: Changing the charge type and/or charge model on a Product Rate Plan Charge (PRPC) will reset any existing Dynamic Pricing configuration. It is recommended to select the appropriate charge type and model before defining the Dynamic Pricing decision table.

-   Impact on Active Subscriptions: Updating existing PRPCs that are tied to active subscriptions can immediately affect downstream pricing and billing. If you do not want to impact existing subscriptions, create a new PRPC instead of modifying an existing one.

-   Clone Limitation

    -   The clone functionality is supported for products, product rate plans (PRPs), and PRPC. However, Dynamic Pricing does not support cloning of rate cards. If a charge is created using Dynamic Pricing (which involves a rate card), the rate card cannot be cloned.

    -   If a rate plan created in the legacy Product Catalog is cloned, and you edit its PRPC charge definition to enable Dynamic Pricing, the system may encounter unexpected errors, such as a

        `JavaNullPointerException`. This issue occurs because the charge ID is not retained after cloning. To resolve this, set the charge ID using the appropriate Zuora API before updating the Dynamic Pricing configuration. Once the charge ID is correctly set, the error will no longer occur.
-   Tenant Configuration Limitations:

    -   Multi-entity tenants: Pricing tables and attributes are not cascaded to child entities. Each child entity must have its own Dynamic Pricing setup.

    -   Multi-org (MO) tenants: Pricing configurations are not inherited by child orgs. Each org must be managed independently.

    -   DAC-enabled tenants: Dynamic Pricing attributes are not automatically shared or inherited across entities or orgs.

    -   Order Harmonization (OH): If a customer creates or amends a subscription with Dynamic Pricing enabled charges via the Subscriptions/Amendments (S/A) API, an error will be returned.

-   Legacy ABP Compatibility: You cannot enable both Dynamic Pricing and legacy Attribute-Based Pricing on the same tenant.

-   Dynamic Pricing Object and Reporting Tools - The Dynamic Pricing object is currently not supported in Data Query (DQ) or Data Source (DS) exports. This means that you cannot generate reports or extract data directly from the DP object. This limitation exists because the DP object stores data in a JSON format, which is not compatible with traditional CSV-based reporting tools. As adoption of Dynamic Pricing increases, Zuora will continue to gather customer feedback and insights to help shape future enhancements, including support for Data Query, Reporting, and other data extraction capabilities.

-   Catalog and Charge Model Availability - You cannot view or edit existing MAP (Multi-Attribute Pricing) charge models, nor create new MAP-based charges in the New Product Catalog. The old catalog is fully accessible for you and you can continue to create, view, and edit them in the old Catalog option.

-   API Behaviour - The Subscribe and Amend APIs are not supported for subscriptions that include Dynamic Pricing (DP)–based charges. Attempting to amend such subscriptions will result in an error. These APIs will continue to function normally for subscriptions created with non–Attribute-Based Pricing (ABP) charges.

-   Decision Tables - The following operators are not yet supported in Dynamic Pricing Decision Tables:

    -   IN

    -   NOT IN

    -   NOT EQUAL


Support for these operators depends on upcoming enhancements to the ZRules engine.
