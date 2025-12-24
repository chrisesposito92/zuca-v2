---
title: "Example: Using context attributes for personalization"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/context-and-attributes/example-using-context-attributes-for-personalization"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:32.424Z"
---

# Example: Using context attributes for personalization

Learn how a streaming service uses Adaptive Context to personalize subscription offers based on customer tenure and subscription plans.

A streaming service uses Adaptive Context to personalize subscription offers.

-   Attribute: Customer\_Tenure (number of months since signup)

-   Rule: If Customer\_Tenure ≥ 12 and Subscription\_Plan = "Basic", offer a 20% discount on the "Premium" plan.

-   Result: When an eligible customer logs in, the API applies the rule in real time, and the UI displays the upgrade offer with the discounted price.


This eliminates the need to create separate product entries for every customer type, while still delivering targeted, relevant offers instantly.
