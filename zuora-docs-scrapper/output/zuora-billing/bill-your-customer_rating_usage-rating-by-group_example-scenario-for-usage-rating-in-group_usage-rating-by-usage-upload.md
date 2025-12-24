---
title: "Usage rating by usage upload"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group/usage-rating-by-usage-upload"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:56.289Z"
---

# Usage rating by usage upload

The usage rating by usage upload groups records from specific files into rating groups, calculating quantity and charge amounts for each group.

The By Usage Upload option groups usage records from the `uploading1.xls` and `uploading2.xls` files by usage upload file. The usage records from these files are divided into two rating groups representing usage upload files:

-   uploading1.xls
-   uploading2.xls

The following table describes how the quantity and charge amount are calculated for each rating group.

| Rating Group (Upload File) | Billing Period | Total Quantity | Tier | Charge Amount |
| --- | --- | --- | --- | --- |
| uploading1.xls | 01/01/2018 to 01/31/2018 | 110 =(20+90) | 3 | $990 |
| uploading1.xls | 02/01/2018 to 02/28/2018 | 95 =(80+15) | 2 | $950 |
| uploading2.xls | 01/01/2018 to 01/31/2018 | 50 | 1 | $550 |
| uploading2.xls | 02/01/2018 to 02/28/2018 | 100 | 2 | $1000 |

The following table shows the generated invoice details for each billing period:

| Service Period | Quantity | Invoice Total |
| --- | --- | --- |
| 01/01/2018 to 01/31/2018 | 160 | $1540 |
| 02/01/2018 to 02/28/2018 | 195 | $1950 |
