---
title: "Rolling window"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/rolling-window"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:45.319Z"
---

# Rolling window

The Rolling Window model manages usage by spreading it over a smoothing period, adjusting for low and high usage, and resetting based on overage options.

The Rolling Window model takes into account the low-usage and high-usage periods. It spreads the usage over a smoothing period longer than a billing period.

The rolling window starts on a certain date and rolls forward based on the billing period. It calculates the total usage for the smoothing periods and compares it to the base total. If the total usage exceeds the base total in the smoothing period, the period is reset at the end of the smoothing period and a new window begins.

How the rolling window works depends on the overage options you choose. The following table describes how the rolling window works with the two overage options.

| Overage Option | No overage in Smoothing Period | Overage in Smoothing Period | Billing for the Overage Charge |
| --- | --- | --- | --- |
| Apply overage as soon as it occursSee example for more information. | The rolling window is reset to a new smoothing period starting from the next billing period. The unused usage is expired. | The rolling window is not reset to a new smoothing period until the end of the current smoothing period. | You can bill for the overage on-demand rather than waiting until the end of the smoothing period.See On-Demand Usage Rating for more information. |
| Apply overage at the end of smoothing periodSee example for more information. | The rolling window is reset to a new smoothing period and moves forward to the next billing period. The unused usage rolls into the next billing period and expires after a specified period. | You can bill for the overage at the end of the smoothing period. |  |

Note:

Overage Rolling Window doesn't count usage records in the partial period into the Included Units.
