---
title: "LT/ST reclassification processing logic"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:17.498Z"
---

# LT/ST reclassification processing logic

Run LT/ST Reclass in Zuora Revenue to create schedules for eligible transactions and, if needed, generate MJE directly from the UI

In the current open period, after the CA/CL position and balance of each revenue contract is determined by the netting process, the LT/ST reclassification process will calculate the long-term balance in the following way:

1.  Determine the long-term periods based on the LT\_ACCT\_MONTHS profile setting. The long-term periods start after the specified number of months and last until the end date.
2.  Review the billing waterfall to determine the billing amount that is scheduled for the long-term periods.
3.  Review the adjustment waterfall to determine the adjustment amount that is scheduled for the long-term periods. The adjustment amount is considered as the billed amount.

For example, the duration of a transaction line is 36 months, which starts from January 1, 2019 to 31 December, 2021. The current open period is March 2019. The LT\_ACCT\_MONTHS profile is set to 12. The Billed Amount is $3600 and the Carve Amount is $360.

The long-term periods start from 12 months after the current open period (April 2020) and will end in December 2021. The long-term periods contain 21 months. The long-term contractual amount can be calculated based on the following formula:

LT Contractual Amount = LT Month \* Monthly Billing = 21 \* 100 = $2100

Similarly, the adjustment amount is considered as the billed amount and calculated.

LT Adjustment Amount = LT Month \* Adjustment = 21 \* 10 = $210

Here are four scenarios to explain the LT/ST reclassification processing logic:

-   [Netting at transaction level and RC is in CL position](/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-transaction-level-and-rc-is-in-cl-position)
-   [Netting at transaction line level and RC is in CA position](/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-transaction-line-level-and-rc-is-in-ca-position)
-   [Netting at application level and RC is in CL position](/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-application-level-and-rc-is-in-cl-position)
-   [Netting at application level and RC is in CA position](/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-application-level-and-rc-is-in-ca-position)
