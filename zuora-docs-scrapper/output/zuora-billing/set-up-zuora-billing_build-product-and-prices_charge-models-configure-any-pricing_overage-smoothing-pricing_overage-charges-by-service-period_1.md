---
title: "Example: Rolling window with the Apply Overage at the end of Smoothing Period option"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/overage-charges-by-service-period_1"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:55.435Z"
---

# Example: Rolling window with the Apply Overage at the end of Smoothing Period option

This example demonstrates the functionality of the rolling window when the "Apply Overage at the end of Smoothing Period" option is selected, detailing how the window progresses and overage charges are applied.

This example shows how the rolling window works if you select Apply Overage at the end of Smoothing Period as the overage option.

With this option and the example scenario for rolling window , the window moves forward to the following month if there is no overage in a smoothing period.

The following table lists the usage for the customer in a year:

| Month | Units in Plan | Usage | Month in Period | Current Usage Total | Overage | Action | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| January | 500 | 700 | January | 700 | 0 | None | No overage |
| February | 500 | 200 | January, February | 900 | 0 | None | No overage |
| March | 500 | 333 | January, February, March | 1233 | 0 | Move forward | No overage. The total usage (1233) is based on the usage during January (700), February (200), and March (333).Because there is no overage in this three-month period, the window moves forward to the following month. The next smoothing period is February - April. |
| April | 500 | 1000 | February, March, April | 1533 | 33 | Reset | The total usage (1533) exceeds the base total (1500).Extra 33 units ($3.3) are charged at the end of this period (February - April).The window is reset at the end of this period and the next smoothing period is May - July. |
| May | 500 | 600 | May | 600 | 0 | None | No overage |
| June | 500 | 1200 | May, June | 1800 | 300 | None | The total usage (1800) exceeds the base total (1500).Extra 300 units ($30) are charged at the end of this period (May - July). You cannot bill for the overage charge in June. |
| July | 500 | 0 | May, June, July | 0 | 300 | Reset | Extra 300 units ($30) occurred in June but the overage charge is billed at the end of this period (May - July).The window is reset at the end of this period and the next smoothing period is August - October. |
| August | 500 | 90 | August | 90 | 0 | None | No overage |
| September | 500 | 160 | August, September | 250 | 0 | None | No overage |
| October | 500 | 600 | August, September, October | 850 | 0 | Move forward | No overage. The total usage (850) is based on the usage during August (90), September (160), and October (600).Because there is no overage in this three-month period, the window moves forward to the following month. The next smoothing period is September - November. |
| November | 500 | 750 | September, October, November | 1510 | 10 | Reset | The total usage (1510) exceeds the base total (1500).Extra 10 units ($1) are charged at the end of this period (September - November).The window is reset at the end of this period and the next smoothing period is December. |
| December | 500 | 1100 | December | 1100 | 600 | Reset | Because the subscription ends in December, there is only one-month period on this window.The total usage (1100) exceeds the base total (500).Extra 600 units ($60) are charged at the end of this period. |

## Overage charges by service period

The following table lists the overage charges and their corresponding service periods:

| Service Period | Quantity | Total |
| --- | --- | --- |
| 02/01/2015 to 04/30/2015 | 33 | $3.3 |
| 05/01/2015 to 07/31/2015 | 300 | $30 |
| 09/01/2015 to 11/30/2015 | 10 | $1 |
| 12/01/2015 to 12/31/2015 | 600 | $60 |
