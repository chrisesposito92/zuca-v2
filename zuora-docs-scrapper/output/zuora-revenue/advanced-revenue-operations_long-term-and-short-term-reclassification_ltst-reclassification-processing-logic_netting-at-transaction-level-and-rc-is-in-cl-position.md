---
title: "Netting at transaction level and RC is in CL position"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-transaction-level-and-rc-is-in-cl-position"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:19.784Z"
---

# Netting at transaction level and RC is in CL position

A scenario to explain the LT/ST reclassification processing logic

In this scenario, the NETTING\_PROCESS\_LEVEL profile is set to Transaction.

When the RC is in CL position, the LT balance for the Contract Liability and Adjustment Liability will be booked separately. In the example provided in the Processing logic section, if $360 is the carve-out amount, the LT Contract Liability balance is $2,100 and the LT Adjustment Liability balance is $210.

If both the LT Contract Liability balance and the LT Adjustment Liability are positive for the transaction line, the LT/ST schedules are booked as follows:

| Period | Accounting type | Dr | Cr |
| --- | --- | --- | --- |
| MAR-19 | Contract Liability (short-term) | 2,100 |  |
|  | Long-term Contract Liability |  | 2,100 |
|  | Adjustment Liability (short-term) | 210 |  |
|  | Long-term Adjustment Liability |  | 210 |

If both the LT Contract Liability balance and the LT Adjustment Liability are negative for the transaction line, the LT/ST schedules are booked as follows:

| Period | Accounting type | Dr | Cr |
| --- | --- | --- | --- |
| MAR-19 | Contract Liability (short-term) |  | 2,100 |
|  | Long-term Contract Liability | 2,100 |  |
|  | Adjustment Liability (short-term) |  | 210 |
|  | Long-term Adjustment Liability | 210 |  |

Where:

-   The ST Contract Liability account is derived for the transaction line based on the accounting setup for the Contract Liability accounting type.

-   The LT Contract Liability account is derived for the transaction line based on the accounting setup for the LT Contract Liability accounting type. If no such account is available for the line, Zuora Revenue derives the LT Contract Liability natural account based on the revenue book setup.

-   The ST Adjustment Liability account is derived for the transaction line based on the accounting setup for the Adjustment Liability accounting type.

-   The LT Adjustment Liability account is derived for the transaction line based on the accounting setup for the LT Adjustment Liability accounting setup. If no such account is available for the line, Zuora Revenue derives the LT Adjustment Liability natural account based on the revenue book setup.
