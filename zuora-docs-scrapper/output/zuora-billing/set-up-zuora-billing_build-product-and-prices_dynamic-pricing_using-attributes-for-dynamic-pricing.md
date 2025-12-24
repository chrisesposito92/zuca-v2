---
title: "Using attributes for dynamic pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/using-attributes-for-dynamic-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:13.012Z"
---

# Using attributes for dynamic pricing

Learn how Attribute-based Pricing (ABP) allows for flexible product pricing by using customer or product attributes, enabling dynamic pricing without duplicating rate plans.

Attribute-based Pricing (ABP) is a flexible way to set product charges based on customer or product attributes, rather than creating separate rate plans for each variation. Instead of duplicating catalog entries, you define conditions that determine which price applies at runtime. ABP is useful when you want to apply different prices by geography or customer type without duplicating rate plans.

With ABP in Dynamic Pricing, you can:

-   Support both categorical attributes (like customer type) and numeric thresholds (like volume tiers).

-   Avoid creating multiple rate plans for each variation.

-   Ensure pricing logic is maintained centrally and applied automatically based on attributes.


## How ABP works in dynamic pricing

-   Attributes define conditions: Attributes such as Customer Type, Region, Currency, or Trading System Product Name are used to segment customers or usage.

-   Dynamic Pricing applies rules: When a charge is created, Zuora checks the attribute values and applies the corresponding price or tier.

-   Single catalog entry, multiple outcomes: A single product rate plan can support multiple price points, reducing catalog complexity.


## Creating and mapping attributes

When creating attributes, you must decide how they will be sourced and mapped.

## Source object and field mapping

-   Choose the Zuora object field or external attribute that the attribute should map to.

-   If the attribute value comes from a usage record, map it to a Usage object field.

-   If the attribute value is known when placing an order, you can either:

    -   Define it as an external attribute, or

    -   Map it to a Zuora object field.

-   If you map an attribute to a standard Zuora object field, Zuora automatically retrieves its value when applying Dynamic Pricing.

-   To determine which object to choose:

    -   Account: If the attribute affects all charges under an account.

    -   Subscription: If the attribute affects all charges within a subscription.

    -   Subscription Rate Plan: If the attribute affects all charges under a single rate plan.

    -   External Attribute: If the attribute only affects an individual charge.


Example: Regional Pricing

| Attribute | Condition | Price |
| --- | --- | --- |
| Region | EU | €90 |
| Region | US | $100 |

Example: Tiered Usage Pricing

| Attribute | Condition | Price |
| --- | --- | --- |
| Trading System Product Name | SUPR | $300 (1–2 units), $400 (3+ units) |
| Trading System Product Name | EUGV | $450 (1–2 units), $50 (3+ units) |
