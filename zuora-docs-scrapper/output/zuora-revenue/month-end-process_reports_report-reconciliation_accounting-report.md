---
title: "Accounting Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/accounting-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:14.385Z"
---

# Accounting Report

This document outlines the reconciliation process for the Accounting Report, ensuring that revenue and liability figures align with the General Ledger and RC Rollforward Report.

To reconcile the Accounting Report, ensure the following conditions are met:

-   The total net revenue from the Accounting Report, which is the Net Change (Cr - Dr) of the Revenue (Contractual) and Adjustment Revenue (Allocation) account type without initial entry and initial reporting entry respectively, must agree with the GL Revenue account value.

    | Value in Accounting report | Matched Value |
    | --- | --- |
    | Total Net Revenue = (Cr-Dr) of the Revenue (Contractual) and Adjustment Revenue (Allocation) account type without initial entry and initial reporting entry respectively | GL Revenue Account Value |


-   The total allocation revenue from the Accounting Report, which is the Net Change (Cr - Dr) of the Adjustment Revenue (Allocation) account type without initial reporting entry, must agree with the GL Adjustment Revenue account value.

    | Value in Accounting report | Matched Value |
    | --- | --- |
    | Total Allocation Revenue = (Cr-Dr) of the Adjustment Revenue (Allocation) account type without initial reporting entry | GL Adjustment Revenue Account Value |


-   The contractual revenue of the current period equals the Net Change (Cr - Dr) of the Revenue account type in the current period without initial reporting entry. It must agree with the total CL released in the RC Rollforward Report.

    | Report Name | Value in report | Matched value | Matched report |
    | --- | --- | --- | --- |
    | Accounting report | Current Period Contractual Revenue = Total (Cr-Dr) of the Revenue account type in the current period without initial reporting entry | Total CL Released | RC Rollforward Report |


-   The allocation revenue of the current period equals the Net Change (Cr - Dr) of the Allocation Revenue account type in the current period without initial reporting entry. The Allocation revenue entries must agree with the total allocation released in the RC Rollforward Report.

    | Report Name | Value in report | Matched value | Matched report |
    | --- | --- | --- | --- |
    | Accounting report | Current Period Allocation Revenue = Total of (Cr-Dr) of the Allocation Revenue account type in the current period without initial reporting entry | Total Allocation Released | RC Rollforward Report |


-   The CL Addition that equals the sum of the Net Change (Cr - Dr) of the Contract Liability account type in the current period with initial entries and the Net Change (Cr - Dr) of the Variable Consideration schedule type in the current period with initial reporting entries of the Accounting Report. It must match the total CL Addition in the RC Rollforward Report.

    | Report Name | Value in report | Matched value | Matched report |
    | --- | --- | --- | --- |
    | Accounting report | CL Addition = The sum of the following values in the current period:(Cr - Dr) of the Contract Liability account type with initial entries(Cr - Dr) of the Variable Consideration schedule type with initial reporting entries | Total CL addition | RC Rollforward Report |


-   The Allocation Addition, which equals the Net Change (Cr - Dr) of the Adjustment Liability account type with initial reporting entries excluding variable considerations in the current period of the Accounting Report, must match the total Allocation Addition in the RC Rollforward Report.

    | Report Name | Value in report | Matched value | Matched report |
    | --- | --- | --- | --- |
    | Accounting report | (Cr-Dr) of the Adjustment Liability account type with initial reporting entries excluding variable considerations in the current period | Total Allocation Addition | RC Rollforward Report |
