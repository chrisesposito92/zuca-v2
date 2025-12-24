---
title: "Considerations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/context-and-attributes/considerations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:40.380Z"
---

# Considerations

Guidelines for creating attributes and supported source objects for attribute mapping in Zuora.

-   When creating attributes, avoid using spaces, hyphens (-), dots (.), or special characters in the attribute name.

-   The following source objects are supported for attribute mapping:

    -   Account

    -   Contact (Bill To)

    -   Contact (Sold To)

    -   Subscription

    -   Rate Plan

    -   Payment

        The Usage object is supported only for tenants with Mediation enabled.

-   If pricing attributes are mapped to non-usage objects, the system will calculate the price during order creation.

-   For usage-based charges with rate cards that include Dynamic Pricing attributes mapped to fields in the Usage object:

    -   The price is determined during Mediation processing, when usage events are passed through the Rating Operator.

    -   To use such attributes, subscribe via Orders and use Zuora Mediation to load the usage data.
