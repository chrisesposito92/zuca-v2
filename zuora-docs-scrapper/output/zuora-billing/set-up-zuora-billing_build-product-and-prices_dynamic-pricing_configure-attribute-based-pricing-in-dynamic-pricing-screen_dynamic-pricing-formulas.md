---
title: "Dynamic Pricing: Formulas"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen/dynamic-pricing-formulas"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:05.341Z"
---

# Dynamic Pricing: Formulas

Explore how formulas in Dynamic Pricing enable flexible pricing models by using charge attributes, contextual values, and mathematical logic.

Formulas in Dynamic Pricing allow you to calculate prices dynamically using charge attributes, contextual values, and mathematical or conditional logic.

They enable flexible pricing models such as usage-based adjustments, discounts, currency markups, or conditional rate application at runtime.

## Supported Fields

| Field | Description |
| --- | --- |
| Price | The base price value defined in the rate plan charge. |
| Adjustment | A custom adjustment or modifier applied on top of the base price. |

Note:

Currently, formulas do not consider attribute fields. Only price and adjustment are available as variables.

## Supported Operators

| Operator | Description | Example |
| --- | --- | --- |
| + | Addition | price + adjustment |
| - | Subtraction | price - adjustment |
| * | Multiplication (into) | price * scaleFactor |
| / | Division | price / 2 |
| ( | Start of grouped expression | (price + adjustment) * scaleFactor |
| ) | End of grouped expression | (price + adjustment) * scaleFactor |
| ^ | Exponent / Power | price ^ 2 |
