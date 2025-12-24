---
title: "Usage rating by usage start date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group/usage-rating-by-usage-start-date"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:53.737Z"
---

# Usage rating by usage start date

The usage rating groups records by start date from specified files, detailing quantity and charge calculations for each group.

The By Usage Start Date option groups usage records from the `uploading1.xls` and `uploading2.xls` files by the start date of the usages. The usage records from these files are divided into four rating groups representing start dates:

-   01/01/2018
-   01/16/2018
-   02/01/2018
-   02/16/2018

The following table describes how the quantity and charge amount are calculated for each rating group:

| Rating Group (Usage Start Date) | Total Quantity | Tier | Charge Amount |
| --- | --- | --- | --- |
| 01/01/2018 | 70 =(20+50) | 2 | $700 |
| 01/16/2018 | 90 | 2 | $900 |
| 02/01/2018 | 80 | 2 | $800 |
| 02/16/2018 | 115 =(100+15) | 3 | $1035 |

The following table shows the generated invoice details for each billing period:

| Service Period | Quantity | Invoice Total |
| --- | --- | --- |
| 01/01/2018 to 01/31/2018 | 160 | $1600 |
| 02/01/2018 to 02/28/2018 | 195 | $1835 |
