---
title: "Considerations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/considerations"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:32.210Z"
---

# Considerations

Guidelines for applying enhanced discounts, including rate plan sequencing and charge model restrictions.

When applying the enhanced discounts, keep the following in mind:

-   If the enhanced discount and regular charge belong to different rate plans, you must place the rate plan containing the regular charge before the rate plan containing the enhanced discount in Orders API. Refer to the rate plan sequence in the above API examples.

-   If an enhanced discount has been applied to a regular charge in a subscription, you cannot add the same regular charge to the same subscription before the end date of the discount duration.

-   You cannot apply an enhanced discount to a charge of any of the following charge models:

    -   High Water Mark Pricing

    -   Pre-Rated Pricing

    -   Multi-Attribute Pricing
