---
title: "Billing Rollforward Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/billing-rollforward-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:16.843Z"
---

# Billing Rollforward Report

The Billing Rollforward Report requires reconciliation of Beginning Balance, Additions, Releases, and R CL Ending Bal values to ensure consistency across reports.

Consider the following data points before you perform reconciliation for the Billing Rollforward Report:

-   Beginning Balance

-   Additions

-   Releases

-   Ending Balance (R CL Ending Bal)


To reconcile this report, ensure the following conditions are met:

-   The Beginning Balance value of the Billing Rollforward Report must be consistent with the R CL Ending Bal value of the prior period in the Billing Rollforward Report.

-   The Additions value must be the same as the R CL Additions value in the RC Rollforward Report.

-   The Releases value must be the same as the Net Change (Cr - Dr) with the following filter values applied in the Accounting Detail Report:

    -   Account Type = Contract Liability

    -   Initial Entry Flag = N

    -   Unbilled Flag = N

-   The R CL Ending Bal value equals the sum of Beginning Balance , Additions , and Releases values.


| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| Billing Rollforward Report | Beginning Balance | R CL Ending Balance of the prior period | Billing Rollforward Report |
| Additions | R CL Additions | RC Rollforward Report |  |
| Releases | (Cr - Dr) where:Account type = Contract LiabilityInitial Entry Flag = NUnbill Flag = N | Accounting Detail Report |  |
| R CL Ending Bal | Beginning Balance + Additions + Releases | Billing Rollforward Report |  |
