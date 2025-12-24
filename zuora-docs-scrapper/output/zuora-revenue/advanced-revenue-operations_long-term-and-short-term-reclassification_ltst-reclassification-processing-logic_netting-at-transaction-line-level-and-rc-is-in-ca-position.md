---
title: "Netting at transaction line level and RC is in CA position"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/ltst-reclassification-processing-logic/netting-at-transaction-line-level-and-rc-is-in-ca-position"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:22.662Z"
---

# Netting at transaction line level and RC is in CA position

A scenario to explain the LT/ST reclassification processing logic

In this scenario, the NETTING\_PROCESS\_LEVEL profile is set to Transaction and the LT/ST\_PROCESS\_FOR\_RC\_CA\_STATUS profile is toggled to Yes. This means the netting process is performed at the transaction level and LT/ST reclassification is enabled for the revenue contract in CA position.

When the RC is in CA position, Zuora Revenue calculates the LT balance on the transaction line in the revenue contract by combining the LT contractual balance and LT adjustment balance. The LT balance is booked between the ST Contract Asset and LT Contract Asset. In the example provided in the Processing logic section, if $360 is the carve-in amount, then the LT balance is the sum of the LT Contract Asset balance ($2,100) and the LT Adjustment Asset balance ($210), which is $2310.

If the net LT balance for the transaction line is negative, the following LT/ST schedules are booked:

| Period | Accounting type | Dr | Cr |
| --- | --- | --- | --- |
| MAR-19 | Contract Liability (short-term) |  | 2,310 |
|  | Long-term Contract Liability | 2,310 |  |

If the LT balance for the transaction line is positive, the following LT/ST schedules are booked:

| Period | Accounting type | Dr | Cr |
| --- | --- | --- | --- |
| MAR-19 | Contract Liability (short-term) | 2,310 |  |
|  | Long-term Contract Liability |  | 2,310 |

Where:

-   The ST Contract Asset account is derived for the transaction line based on the accounting setup for the Contract Asset accounting type. If no such account is available for the line, Zuora Revenue derives the ST Contract Asset natural account based on the revenue book setup.

-   The LT Contract Asset account is derived for the transaction line based on the accounting setup for the Contract Asset accounting type. If no such account is available for the line, Zuora Revenue derives the LT Contract Asset natural account based on the revenue book setup.
