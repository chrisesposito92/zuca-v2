---
title: "Usage rating by custom group"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group/usage-rating-by-custom-group"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:58.779Z"
---

# Usage rating by custom group

The By Custom Group option organizes usage records from specified files by group ID, detailing quantity and charge calculations for each group.

The By Custom Group option groups usage records from the `uploading1.xls` and `uploading2.xls` files by group ID. The usage records from these files are divided into two rating groups representing group IDs:

-   Group A
-   Group B

The following table describes how the quantity and charge amount are calculated for each rating group:

| Rating Group (Custom Group) | Billing Period | Total Quantity | Tier | Charge Amount |
| --- | --- | --- | --- | --- |
| Group A | 01/01/2018 to 01/31/2018 | 110 =(20+90) | 3 | $990 |
| Group A | 02/01/2018 to 02/28/2018 | 115 =(100+15) | 3 | $1035 |
| Group B | 01/01/2018 to 01/31/2018 | 50 | 1 | $550 |
| Group B | 02/01/2018 to 02/29/2018 | 80 | 2 | $800 |

The following table shows the generated invoice details for each billing period:

| Service Period | Quantity | Invoice Total |
| --- | --- | --- |
| 01/01/2018 to 01/31/2018 | 160 | $1540 |
| 02/01/2018 to 02/29/2018 | 195 | $1835 |
