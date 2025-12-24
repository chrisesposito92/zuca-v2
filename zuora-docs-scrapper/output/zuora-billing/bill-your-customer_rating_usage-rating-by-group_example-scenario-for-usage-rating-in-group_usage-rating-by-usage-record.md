---
title: "Usage rating by usage record"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/usage-rating-by-group/example-scenario-for-usage-rating-in-group/usage-rating-by-usage-record"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:50.962Z"
---

# Usage rating by usage record

Explains how usage records are grouped into rating groups and details the calculation of quantity and charge amounts for each group.

The By Usage Record option groups each usage record as a rating group. The usage records from the `uploading1.xls` and `uploading2.xls` files include six rating groups.

The following table describes how the quantity and charge amount are calculated for each rating group.

| Rating Group (Usage Record) | Total Quantity | Tier | Charge Amount |
| --- | --- | --- | --- |
| 01/01/2018 | 20 | 1 | $220 |
| 01/16/2018 | 90 | 2 | $900 |
| 02/01/2018 | 80 | 2 | $800 |
| 02/16/2018 | 15 | 1 | $165 |
| 01/01/2018 | 50 | 1 | $550 |
| 02/16/2018 | 100 | 2 | $1000 |

The following table shows the generated invoice details for each billing period:

| Service Period | Quantity | Invoice Total |
| --- | --- | --- |
| 01/01/2018 to 01/31/2018 | 160 | $1670 |
| 02/01/2018 to 02/28/2018 | 195 | $1965 |
