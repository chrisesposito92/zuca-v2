---
title: "Rating by billing period"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/rating-by-billing-period"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:38.407Z"
---

# Rating by billing period

Explains how Zuora's rating engine determines billing periods for on-demand rating by billing period, using a detailed example scenario.

When you use on-demand rating and your rating group is by billing period, Zuora's rating engine determines the billing period in a different way as follows:

-   From: the later of charge start date and current billing cycle day, with the day included.
-   To: the earliest of billing target day, charge end date and the next billing cycle day, with the day excluded.

Take the following scenario as an example:

-   Charge name: Charge 1
-   Charge model: Tiered Pricing
-   Trigger condition: Upon contract effective
-   Billing period: Month
-   Usage records rating option: On Demand.
-   Price table:

| Tier | Quantity From | Quantity To | List price |
| --- | --- | --- | --- |
| 1 | 0 | 10 | 2.00 |
| 2 | 11 | 20 | 3.00 |
| 3 | 21 | --- | 5.00 |

Step 1 : You upload the first batch of usages to Charge 1 as below:

| Start Date | Quantity |
| --- | --- |
| 01/01/2020 | 3 |
| 01/02/2020 | 5 |
| 01/03/2020 | 7 |

Step 2 : You create a bill run with a target date of 01/04/2020 and generate the first invoice.

In this case, the billing period is from 01/01/2020 (including this day) to 01/04/2020 (excluding this day), not the whole month of January .

Total quantity: 3 + 5 + 7 = 15

Usage cost on the first invoice: 10 \* $2 + 5 \* $3 = $35

Step 3 : You upload the second batch of usages to Charge 1 as below:

| Start Date | Quantity |
| --- | --- |
| 01/01/2020 | 1 |
| 01/04/2020 | 5 |

Step 4 : You create the second bill run with a target date of 01/05/2020 and generate the second invoice.

This time, the billing period is from 01/01/2020 (including this day) to 01/05/2020 (excluding this day) .

Total quantity: 3 + 5 + 7 + 1 + 5 = 21

Total usage fee: 10 \* $2 + 10 \* $3 + 1 \* $5 = $55

The amount already billed is $35 as a result of the first bill run.

Usage cost on the second invoice: $55 - $35 = $20
