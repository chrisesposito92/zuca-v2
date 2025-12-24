---
title: "Context and Attributes for the Usage Object"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/context-and-attributes/context-and-attributes-for-the-usage-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:35.072Z"
---

# Context and Attributes for the Usage Object

Understand how Mediation settings influence pricing attribute mapping for the Usage object, affecting calculation timing and method.

Pricing attribute mapping for the Usage object varies based on Mediation settings, affecting when and how pricing is calculated.

-   If Mediation is disabled - Pricing attributes should be mapped to non-usage objects. In this case, the system calculates the price during order creation. When defining a PRPC rate card, users can select the appropriate attribute to be used at order time.

-   If Mediation is enabled - Pricing attributes can be mapped to both usage and non-usage objects. In this scenario, pricing is determined at runtime when usage events are processed through Mediation by the Rating Operator.
