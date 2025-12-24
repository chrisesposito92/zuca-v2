---
title: "Prorating - 30 days or actual days"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/prorating---30-days-or-actual-days"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:39.731Z"
---

# Prorating - 30 days or actual days

This topic explains how to prorate charges for partial months by choosing between actual days or assuming 30 days in a month, with options for strict or actual calculations.

If you choose `Yes` for the Bill Recurring Charges for partial month? setting in Billing > Define Billing Rules you can choose to calculate the charges using the actual number of days, or you can have Zuora assume there are 30 days in a month.

-   With the Use actual number of days option, the charge is prorated to the actual number of days divided by the actual total number of days of that month, multiplied by the total charge.

-   With the Assume 30 days - Actual / 360 option, the charge is prorated to the actual number of days divided by 30 days, multiplied by the total charge.

-   With the Assume 30 days - Strict 30 / 360 option, instead of counting the actual number of days between the start and end dates of the service period, we strictly assume that a month always contains 30 days. For example:

    -   If the end date is the last day of the month, it is alway the 30th day.

    -   If the end day is in the next month, the month where the start day is in always contains 30 days.


The table below shows the differences in proration among the three preceding options:

| Start date of service period | End date of service period | Proration ratio when using "Use actual number of days" | Proration ratio when using "Assume 30 days - Actual / 360" | Proration ratio when using "Assume 30 days - Strict 30 / 360" |
| --- | --- | --- | --- | --- |
| 2021-01-27 | 2021-01-31 | 5/31 | 5/30 | 4/30 |
| 2021-02-27 | 2021-02-28 | 2/28 | 2/30 | 4/30 |
| 2020-02-01 | 2020-02-29 | 29/29 | 29/30 | 30/30 |
| 2021-04-21 | 2021-04-29 | 9/30 | 9/30 | 9/30 |
