---
title: "Relationship to standard pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/relationship-to-standard-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:17.042Z"
---

# Relationship to standard pricing

Explore how dynamic and standard pricing models cater to different business needs and use cases, with standard pricing offering uniform rates and dynamic pricing allowing for contextual variations.

Dynamic Pricing and Standard Pricing both define how charges are calculated in the Product Catalog. However, they serve different business needs and are designed for different use cases.

Standard pricing is the default method where you define a fixed price per unit, volume, or tier that applies uniformly across all customers or geographies. For example:

-   $10/month for all users, regardless of region or channel.

-   A flat $100 one-time setup fee for all customers.

-   Tiered pricing for usage, for example, $5 for 1-100 units, $4 for 101-500 units, same for everyone.


Dynamic Pricing is best when pricing needs to vary based on context, attributes, or rules. For example:

-   Adding a state-level compliance fee for California customers.

-   Applying discounted pricing for nonprofit or educational organizations.

-   Adjusting usage-based pricing depending on the delivery site or currency.


Use this table to help determine which pricing model is best suited for your specific business scenario:

| Scenario | Use Standard Pricing? | Use Dynamic Pricing? |
| --- | --- | --- |
| Same pricing for all customers | Yes | No |
| Pricing depends on the customer or region | No | Yes |
| One-time flat fee applies to everyone | Yes | No |
| Price needs to change based on the delivery site or currency | No | Yes |
| Complex pricing logic using formulas or conditions | No | Yes |
| Simple volume- or tier-based pricing | Yes | No |
| Condition/attribute-based volume- or tier-based pricing | No | Yes |
