---
title: "Example: Rolling window with the Apply overage as soon as it occurs option"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/example-rolling-window-with-the-apply-overage-as-soon-as-it-occurs-option"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:50.333Z"
---

# Example: Rolling window with the Apply overage as soon as it occurs option

This example demonstrates the functionality of the rolling window with the "Apply overage as soon as it occurs" option, detailing the usage and overage charges across four smoothing periods within a year.

This example shows how the rolling window works if you select Apply overage as soon as it occurs as the overage option and you do not want to credit unused units.

With this overage option and the example scenario for rolling window , there are four smoothing periods: January - March, April - June, July - September, and October - December.

The following table lists the usage for the customer in a year:

| Month | Units in Plan | Usage | Month in Smoothing Period | Current Usage Total | Overage | Action | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| January | 500 | 700 | January | 700 | 0 | None | No overage |
| February | 500 | 200 | January, February | 900 | 0 | None | No overage |
| March | 500 | 333 | January, February, March | 1233 | 0 | Reset | No overage. The total usage (1233) is based on the usage during January (700), February (200), and March (333).Because there is no overage, the window is reset at the end of the three-month period (January - March).The unused units are expired at the end of the period. |
| April | 500 | 1000 | April | 1000 | 0 | None | No overage |
| May | 500 | 600 | April, May | 1600 | 100 | None | The total usage (1600) exceeds the base total (1500). Extra 100 units ($10) are charged in May.If the end of the billing period lands during the smoothing period, you can bill before the end of the three-month period (April - June) rather than bill at the end the smoothing period. |
| June | 500 | 900 | April, May, June | 2500 | 900 | Reset | Because the base total has already been used in May, extra 900 units ($90) are charged in June.If the end of the billing period lands during the smoothing period, you can bill before the end of the three-month period (April - June) rather than bill at the end the smoothing period.The window is reset at the end of the three-month period (April - June). |
| July | 500 | 0 | July | 0 | 0 | None | No overage |
| August | 500 | 90 | July, August | 90 | 0 | None | No overage |
| September | 500 | 160 | July, August, September | 250 | 0 | Reset | No overage. The total usage (250) is based on the usage during July (0), August (90), and September (160).Because there is no overage, the window is reset at the end of the three-month period (July - September).The unused units are expired at the end of the period. |
| October | 500 | 600 | October | 600 | 0 | None | No overage |
| November | 500 | 750 | October, November | 1350 | 0 | None | No overage |
| December | 500 | 1100 | October, November, December | 2450 | 950 | Reset | The total usage (2450) exceeds the base total (1500). Extra 950 units ($95) are charged in December.If the end of the billing period lands during the smoothing period, you can bill before the end of the three-month period (October - Decenber) rather than bill at the end the smoothing period. |
