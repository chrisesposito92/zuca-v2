---
title: "Example: Flat fee pricing model"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema/example-flat-fee-pricing-model"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:36.077Z"
---

# Example: Flat fee pricing model

This example demonstrates a flat fee pricing model where a fixed charge of $99.00 is applied regardless of usage.

Using the HTML template snippet above, the output appears as follows:

| Charge Type | Charge Model | Quantity | Calculated Amount | Formula | Calculation |
| --- | --- | --- | --- | --- | --- |
| Usage | Flat Fee Pricing | 160.0 | 99.0 | 1:0:0::99.00; | USD99.00 |

Understanding the Formula:

-   For Flat Fee Pricing, the formula format is the same as Tiered Pricing, but it's always just 1 tier.

-   Example: 1:0:0::99.00;

-   This represents a flat fee of the price $99.00, where the charge amount is always $99.00, irrespective of the usage.
