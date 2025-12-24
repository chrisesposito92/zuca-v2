---
title: "Unbill Rollforward Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/unbill-rollforward-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:32.175Z"
---

# Unbill Rollforward Report

The Unbill Rollforward Report outlines the reconciliation process by comparing beginning and ending balances, additions, and releases with corresponding values in related reports.

Consider the following data points for the report reconciliation:

-   Beginning Balance

-   Additions

-   Releases

-   Ending Balance


To reconcile this report, ensure the following conditions are met:

-   The Beginning Balance value of the Unbill Rollforward report must match the Last Period Ending Balance value of the Unbill Rollforward Report.

-   The Additions value must match the (Cr-Dr) of the Unbilled Revenue account type excluding the reclassification reversal for invoice processing in the Accounting Detail Report.

-   The Releases value must match the (Cr-Dr) of the Unbilled Revenue account type for the reclassification reversal for the invoice collection in the Accounting Detail Report.

-   The Ending Balance value must equal the sum of Beginning Balance , Additions , and Releases values.


| Report name | Field in report | Matched field/value | Matched report |
| --- | --- | --- | --- |
| Unbill Rollforward Report | Beginning Balance | Last Period Ending Balance | Unbill Rollforward Report |
| Additions | SO unbilled revenue excluding reversals | Accounting Detail Report |  |
| Releases | SO unbilled revenue reversals (Cr - Dr) | Accounting Detail Report |  |
| Ending Balance | Beginning Balance + Additions + Releases | Unbill Rollforward Report |  |
