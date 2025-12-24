---
title: "Upstream and downstream behavior"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/upstream-and-downstream-behavior"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:14.322Z"
---

# Upstream and downstream behavior

Outlines the behavior of upstream and downstream features when Attribute-based Pricing is enabled, including requirements for Orders and Orders Harmonization, and the impact on taxation, invoicing, and other applications.

The following table lists the behavior of upstream and downstream features or applications when Attribute-based Pricing is enabled.

| Other feature or application | Behavior |
| --- | --- |
| Subscription and Orders | To use the Attribute-based Pricing feature, you must have Orders or Orders Harmonization enabled.After you enable the Attribute-based pricing feature, when a new order is created, the price lookup function will automatically identify the valid charge definition to determine the price. If the price lookup function fails, the order will not be created. |
| Taxation and Invoicing | No change. |
| Invoice Presentation | The HTML invoice template exposes the linked product charge definition in the template. |
| Zuora Revenue | Support for the Attribute-based Pricing feature is not available yet. |
| Zuora CPQ X | Support for the Attribute-based Pricing feature is not available yet. |
