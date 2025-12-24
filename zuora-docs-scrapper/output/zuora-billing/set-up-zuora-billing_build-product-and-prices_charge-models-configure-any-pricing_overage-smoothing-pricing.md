---
title: "Overage smoothing pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:40.106Z"
---

# Overage smoothing pricing

Overage smoothing pricing helps manage usage charge fluctuations by using models like Rolling Window and Rollover, defined at the Product Rate Plan level.

Overage smoothing charge models are useful for avoiding spikes and troughs in Usage Charges in any given month. The two models of smoothing are Rolling Window and Rollover . Smoothing is defined on Usage Charges at the Product Rate Plan level.

Smoothing models can help your customers avoid paying too much if their usage spikes in any one period by considering usage over multiple periods. For example, the rolling window model carries over unused units to the next period.

Note that the overage smoothing charge model used in usage charges cannot be supported by the Order to Revenue feature or the Billing - Revenue Integration feature.

## Configuration options

You can define the overage smoothing charge model when you Create product rate plan charges in Zuora UI or create ProductRatePlanCharge objects in Zuora SOAP API.

You must specify the following options when you define an overage smoothing charge model:

-   Smoothing Model : The smoothing charge models, Rolling Window and Rollover .

-   Number of Periods : The number of periods to carry over the unused usage. Each period is equal to the billing frequency.

-   Overage Option when Smoothing : Rolling Window only. Select the overage option to apply when performing smoothing:

    -   Apply overage at the end of smoothing period

    -   Apply overage as soon as it occurs

-   Option for Unused Included Units : Rolling Window only. This option becomes available if you select Apply overage as soon as it occurs . It allows you to specify whether you want to credit unused units. If you credit unused units, you can then specify the amount of money to credit per unit, in your default currency. We recommend that you specify the prices for all the currency types that are specified in the List Price field. If you activate other currency types later, we also recommend you specify the prices of the newly activated currencies for the unused usage.
