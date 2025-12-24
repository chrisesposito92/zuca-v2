---
title: "Limitations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:15.349Z"
---

# Limitations

The product rate plan charges option has specific limitations, including restrictions on term start date updates, billing period alignment, and charge types.

-   The proration option is accessible through the Order API, not the Subscription API.

-   You cannot update the term start date when the proration option is ChargeFullPeriod.

-   The recurring charge's last billing period must be full when the proration option is ChargeFullPeriod.

-   When the proration option is ChargeFullPeriod, the billing cycle day must be the term start date, and the billing period must be aligned to the term start date.

-   You cannot update the recurring charge when the proration option is ChargeFullPeriod.

-   The suspend date must be the next billing period's start date in the suspend order action.

-   You can only use this proration option for regular recurring charges. Prepayment charges, discount charges, and delivery pricing charges are not supported.

-   You cannot overwrite this value from CPQ, but you can still use CPQ to create such subscriptions if the proration option doesn't have to be changed from CPQ.

-   If the list price base year and the billing period are shorter, the proration option doesn't work.
