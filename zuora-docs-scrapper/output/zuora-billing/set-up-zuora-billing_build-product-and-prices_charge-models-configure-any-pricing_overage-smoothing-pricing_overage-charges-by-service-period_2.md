---
title: "Example of rollover"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/overage-charges-by-service-period_2"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:40.015Z"
---

# Example of rollover

This section outlines a monthly service plan with rollover minutes, detailing rate plans, overage charges, and a year-long usage example.

Suppose you provide a monthly service:

-   $50 per month includes up to 500 minutes free talk each month.

-   The unused minutes from the monthly plan allowance can roll over to the following months.

-   If the usage exceeds the monthly plan allowance, pay overage $0.1 per minute.


You can set the following rate plans for your service:

-   Create a recurring rate plan and set the flat rate of $50 per month.

-   Create an overage monthly rate plan.

    -   Set Included Units to 500 minutes.

    -   Set List Price to $ 0.1 .

    -   Select Month from the Billing Period list.

    -   Select Rollover from the Smoothing Model list.

    -   Type 3 in the Number of Periods field.


The following table lists the usage for a customer who subscribes your service for a year:

| Month | Units in Plan | Usage | Month in Period | Unused Units in the Rollover Period | Overage | Action | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| January | 500 | 450 | January | 50 | 0 | None | The unused units (50) roll over to February. |
| February | 500 | 600 | January, February | 0 | 50 | Reset | The usage in February (600) exceeds the total units that can be used (550).Extra 50 units ($5) are charged at the end of this period.The window is reset at the end of this rollover period (January -February).The next rollover period is: March-May. |
| March | 500 | 450 | March | 50 | 0 | None | The unused units (50) rolls over to April. |
| April | 500 | 450 | March, April | 100 | 0 | None | The unused units (100) rolls over to May. |
| May | 500 | 1000 | March, April, May | 0 | 400 | Reset | The usage in May (1000) exceeds the total units that can be used (600).Extra 400 units ($40) are charged at the end of this period.The window is reset at the end of this rollover period (March - May). |
| June | 500 | 450 | June | 50 | 0 | None | The unused units (50) rolls over to July. |
| July | 500 | 450 | June, July | 100 | 0 | None | The unused units (100) rolls over to August. |
| August | 500 | 450 | June, July, August | 150 | 0 | None | The unused units (150) rolls over to September. |
| September | 500 | 450 | July, August, September | 150 | 0 | None | The unused units (150) rolls over to October. The unused units in June (50) are expired. |
| October | 500 | 450 | August, September, October | 150 | 0 | None | The unused units (150) rolls over to November.The unused units in July (50) are expired. |
| November | 500 | 1000 | September, October, November | 0 | 350 | Reset | The usage in November (1000) exceeds the total units that can be used (650).Extra 350 units ($35) are charged at the end of this period.The window is reset at the end of this rollover period (September - November). |
| December | 500 | 660 | December | 0 | 160 | Reset | The usage in December (660) exceeds the total units that can be used (500).Extra 160 units ($16) are charged at the end of this period. |

## Overage charges by service period

The following table lists the overage charges and their corresponding service periods:

| Service Period | Quantity | Total |
| --- | --- | --- |
| 02/01/2015 to 02/28/2015 | 50 | $5 |
| 05/01/2015 to 05/31/2015 | 400 | $40 |
| 11/01/2015 to 11/30/2015 | 350 | $35 |
| 12/01/2015 to 12/31/2015 | 160 | $16 |
