---
title: "Additional configurations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/additional-configurations"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:35.645Z"
---

# Additional configurations

Outlines additional configurations for charge models, including on-demand usage rating support and rating option inheritance.

## Charge model support

You can only use on-demand usage rating on the following charge models. Other charge models are not supported.

-   Per unit
-   Tiered pricing
-   Volume pricing

Note: To use on-demand usage rating on the volume pricing charge model, you must enable the Active Rating feature.

## Rating option inheritance

When adding a per-unit usage charge to a subscription, the Usage Records Rating Option will inherit the setting from the product catalog charge and cannot be updated to use a different usage rating setting. This means you cannot:

-   Select a different usage rating option (than the one set in the product catalog) when adding the usage charge to a subscription.
-   You cannot update an existing charge to change the rating option.

## Changing rating option

If you want to modify the rating option of a per-unit usage charge from End of Billing Period to On Demand , you need to do the following:

-   In the existing subscription, create two amendments to remove the current usage charge and add the new usage charge (with the on-demand usage rating option).
-   When adding the new usage charge, ensure that the per-unit usage charge in your product catalog is set to on-demand rating.
