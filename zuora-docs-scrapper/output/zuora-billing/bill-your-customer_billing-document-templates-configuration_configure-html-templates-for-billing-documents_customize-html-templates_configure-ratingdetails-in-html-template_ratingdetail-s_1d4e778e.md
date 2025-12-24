---
title: "Example: Tiered pricing mode"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema/example-tiered-pricing-mode"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:33.385Z"
---

# Example: Tiered pricing mode

This example demonstrates the tiered pricing mode, where usage is calculated across multiple tiers with different pricing, including overage charges.

Using the HTML template snippet above, the output appears as follows:

| Charge Type | Charge Model | Quantity | Calculated Amount | Formula | Calculation |
| --- | --- | --- | --- | --- | --- |
| Usage | Tiered with Overage Pricing | 130.0 | 60.0 | 1:1:0:100:0.00;2:1:101:200:2.00; | 100 * USD0.00 + 30 * USD2.00 = USD60.00 |

Understanding the Formula:

-   For Tiered with Overage Pricing, the formula format can include multiple tiers, depending on usage crossing different thresholds.

-   Example: `1:1:0:100:0.00;2:1:101:200:2.00;`

-   This represents the usage of 130 units across 2 tiers. The first tier is priced at $0, and the second is priced at $2.00 per unit.
