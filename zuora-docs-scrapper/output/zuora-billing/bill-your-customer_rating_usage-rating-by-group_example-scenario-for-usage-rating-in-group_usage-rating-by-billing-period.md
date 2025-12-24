---
title: "Usage rating by billing period"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group/usage-rating-by-billing-period"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:48.451Z"
---

# Usage rating by billing period

The usage rating by billing period groups records from specified files into monthly billing periods, calculating quantity and charge amounts for each period.

The By Billing Period option groups usage records from the `uploading1.xls` and `uploading2.xls` files by monthly billing period. The usage records from these files are divided into two rating groups representing billing periods:

-   01/01/2018 - 01/31/2018
-   02/01/2018 - 02/28/2018

The following table describes how the quantity and charge amount are calculated for each rating group:

| Rating Group (Billing Period) | Total Quantity | Tier | Charge Amount |
| --- | --- | --- | --- |
| 01/01/2018 - 01/31/2018 | 160 =(20+90+50) | 3 | $1440 |
| 02/01/2018 - 02/28/2018 | 195 =(80+15+100) | 3 | $1755 |

The following table shows the generated invoice details for each billing period:

| Service Period | Quantity | Invoice Total |
| --- | --- | --- |
| 01/01/2018 to 01/31/2018 | 160 | $1440 |
| 02/01/2018 to 02/28/2018 | 195 | $1755 |

Note: For charges using the on-demand rating, rating by billing period behaves in a different way. See On-demand usage rating for details.
