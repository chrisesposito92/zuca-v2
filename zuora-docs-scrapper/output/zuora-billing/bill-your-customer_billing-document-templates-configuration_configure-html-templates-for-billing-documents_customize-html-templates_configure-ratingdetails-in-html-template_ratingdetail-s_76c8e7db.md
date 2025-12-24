---
title: "Example: Per unit pricing model"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema/example-per-unit-pricing-model"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:38.400Z"
---

# Example: Per unit pricing model

This example demonstrates the per unit pricing model, where a single tier formula calculates charges based on the quantity of units.

Using the HTML template snippet above, the output appears as follows:

| Charge Type | Charge Model | Quantity | Calculated Amount | Formula | Calculation |
| --- | --- | --- | --- | --- | --- |
| Usage | Per Unit Pricing | 120.00 | 12000.0.0 | 1:0:0::100.00; | 120 * USD100.00 = USD12,000.0 |

Understanding the Formula:

-   For Per Unit Pricing , the formula follows the same format as Tiered Pricing but always contains a single tier .

-   Example: `1:0:0::100.00;`

-   This indicates a per-unit price of $100.00 .

-   For 120 units , the total charge is calculated as 120 × $100.00 = $12,000.00 .
