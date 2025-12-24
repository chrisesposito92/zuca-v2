---
title: "Using tier-level and charge-level min/max together"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/using-tier-level-and-charge-level-minmax-together"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:53.980Z"
---

# Using tier-level and charge-level min/max together

Learn how to configure tier-level and charge-level min/max rules in pricing entries to ensure compliance with global pricing thresholds.

You can configure both tier-level and charge-level min/max rules within the same pricing entry, as long as the charge model supports it, for example, Tiered or Volume models. You must note that:

-   Tier-level rules apply to each individual tier.

-   Charge-level rules apply to the total charge after all tiers have been summed.


Example:

-   Tier 1 = $10 (Min: $5, Max: $20)

-   Tier 2 = $15 (Min: $10, Max: $100)

-   Total = $25

-   Charge -level Min = $30 → Final Charge = $30 (Min cap enforced at charge level)


In this example, you have two tiers:

-   Tier 1 is configured to charge $10, with a minimum of $5 and a maximum of $20.

-   Tier 2 is configured to charge $15, with a minimum of $10 and a maximum of $100.


So, the total calculated charge before any caps is $25. However, there is also a Charge-Level Minimum defined, which states that the final charge must be at least $30.

Since the sum of the tiers ($25) is less than the charge-level minimum ($30), the system overrides the calculated total and sets the final charge to $30, enforcing the charge-level minimum.

This ensures that regardless of how individual tiers behave, the overall charge respects global pricing thresholds that may be needed for profitability, compliance, or contractual guarantees.

## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Select Charge Type as Usage and Charge Model as Tiered.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  Tier-level Min/Max (e.g., Tier 1 Min = $5, Max = $20, Tier 2 Min = $10, Max = $100).

    2.  Scroll to the bottom to configure Charge-Level Min/Max (e.g., Min = $30).

6.  Click Save.
