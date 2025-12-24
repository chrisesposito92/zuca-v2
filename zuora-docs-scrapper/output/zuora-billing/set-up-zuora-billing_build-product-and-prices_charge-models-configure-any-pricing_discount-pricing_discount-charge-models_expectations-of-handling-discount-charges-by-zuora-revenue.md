---
title: "Expectations of handling discount charges by Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/expectations-of-handling-discount-charges-by-zuora-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:41.692Z"
---

# Expectations of handling discount charges by Zuora Revenue

This document outlines the handling of fixed-amount discount charges in Zuora Revenue, including integration features, configuration options, and potential reconciliation variances.

-   For fixed-amount discounts, the Billing - Revenue Integration feature only supports the billing-based revenue recognition. Booking transactions must be excluded from revenue accounting. You can exclude the booking transactions by setting the exclusion flag fields in Zuora Billing.

-   For fixed-amount discounts, the Order to Revenue feature supports several configuration options. See Configure interface settings .

-   Proration of fixed amount discount charges is not supported. It is because Zuora Revenue uses the RatePlanChargeTier price to calculate the fixed amount discount booking value, which does not consider the actual proration and other billing setting logic. Therefore, the booking amount might be different from the actual billing amount.

-   The Revenue Start Date and Revenue End Date of discount charges always follow the recurring charges instead of the dates specified on the discount charges.

-   When multiple discount charges overlap with the same regular charge, it will cause the variance for reconciliation between booking and billing.
