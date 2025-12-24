---
title: "RC Rollforward Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/rc-rollforward-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:22.201Z"
---

# RC Rollforward Report

RC Rollforward Report reconciliation with the Billing Report and the Accounting Detail Report

The values from the RC Rollforward Report must be reconciled with the Billing Report and the Accounting Detail Report. Consider the following data points for the report reconciliation:

-   [Additions](#concept-1r8jjmzz__additions)

-   [Releases](#concept-1r8jjmzz__releases)

-   [Netting amount](#concept-1r8jjmzz__nettingamount)

-   [Beginning Balance](#concept-1r8jjmzz__beginningbalance)

-   Ending Balance

-   [Prior Period Ending Balance](#concept-1r8jjmzz__prior_period_ending_balance)

-   [Current Period Ending Balance](#concept-1r8jjmzz__current_period_ending_balance)


## Additions

For CL (Contract Liability) Additions and Allocation Additions, ensure the following conditions are met:

-   The R CL Additions equals the sum of the Net Change (Cr - Dr) where schedule type = Revenue (R) and Initial Entry = Y, and the Net Change (Cr - Dr) where schedule type = Variable consideration (V) and Initial Reporting Entry = Y in the Accounting Detail Report.
-   The R Alloc Additions equals the Net Change (Cr - Dr) where schedule type = Allocations (A) and Initial Reporting Entry = Y in the Accounting Detail Report.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Additions | The sum of:(Cr - Dr) where schedule type = Revenue (R) and Initial Entry = Y(Cr - Dr) where schedule type = Variable consideration (V) and Initial Reporting Entry = Y | Accounting Detail Report |
| R Alloc Additions | (Cr-Dr) of the initial reporting entries of the Allocation schedule type against the Adjustment Liability accounting type | Accounting Detail Report |  |

## Releases

For Contractual Revenue Release and Adjustment Revenue Release, ensure the following conditions are met:

-   The R CL Release value must be consistent with:
    -   The revenue that is from the Billed revenue, the Variable consideration revenue, and the Unbilled revenue for the current period.
    -   The Net Change (Cr - Dr) where account type = Contract Liability and Initial Entry = N (excluding the initial entries) in the Accounting Detail Report.

-   The R Alloc Release value must be consistent with:
    -   The revenue for the current period where WF type = Adjustments in the Waterfall Report.
    -   The Net Change (Cr - Dr) where account type = Adjustment Liability and Initial Reporting Entry = N in the Accounting Detail Report.

| Report Name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Release | The sum of the following revenue for the current period:Billed revenueVariable consideration revenueUnbilled revenue | Billing Waterfall ReportWaterfall Report |
| (Cr-Dr) where account type = Contract Liability and Initial Entry = N | Accounting Detail Report |  |  |
| R Alloc Release | Revenue for the current period where WF type = Adjustments | Waterfall Report |  |
| (Cr-Dr) where account type = Adjustment Liability and Initial Reporting Entry = N | Accounting Detail Report |  |  |

## Netting amount

Ensure the sum of R CL Netting and R AL Netting values must be consistent with:

-   The R CL Ending Balance where Ending CA/CL = CA in the RC Rollforward Report.
-   The Net Change (Cr - Dr) where account type = Contract Asset and Reversal = N in the Accounting Detail Report.

Note:

The netting amount is populated after the netting process completes.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Netting + R AL Netting | R CL Ending Balance where Ending CA/CL = CA | RC Rollforward Report |
| (Cr-Dr) where account type = Contract Asset and Reversal = N | Accounting Detail Report |  |  |

## Beginning Balance

The R CL Begin Balance must equal the R CL Ending Balance of the prior period.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Begin Balance | R CL Ending Balance of the prior period | RC Rollforward Report |

## Prior Period Ending Balance

The R CL Ending Balance of the prior period must agree with the R CL Begin Balance of the current period.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Ending Balance of the prior period | R CL Begin Balance of the current period | RC Rollforward Report |

## Current Period Ending Balance

The R CL Ending Balance of Current Period must agree with the sum of the R CL Beginning Balance of Current Period, Balance Additions, and Releases.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| RC Rollforward Report | R CL Ending Balance of the current period | R CL Begin Balance of the current period + Additions + Releases | RC Rollforward Report |
