---
title: "Understand Revenue from Prior/Current CL/CA Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:20.354Z"
---

# Understand Revenue from Prior/Current CL/CA Report

This report provides visibility into revenue disclosures required by ASC 606, detailing revenue from prior and current periods against contract liability and asset accounts.

As required by ASC 606, revenue must be disclosed for the accounting period based on the following categories:

-   Revenue from the prior period against the Contract Liability balance sheet account

-   Revenue from the prior period against the Contract Asset balance sheet account

-   Revenue from the current period against the Contract Liability balance sheet account

-   Revenue from the current period against the Contract Asset balance sheet account

-   Net revenue for the current period

-   True revenue from the Unbilled Account Receivables balance sheet account


To meet the disclosure requirements, Zuora Revenue provides the Revenue from Prior/Current CL/CA Report for you to get visibility of the correct disclosure values for the revenue contract. Because there are various interpretations of the ASC 606 disclosure guidance, this report is designed to support the most common disclosure requirements.

Note: The Revenue from Prior/Current CL/CA Report is available on the revenue contract level only.

The following abbreviations are used in the documentation of this section and also used in the report column headers:

| Abbreviation | Description |
| --- | --- |
| CA | Contract asset |
| CL | Contract liability |
| CP | Current period |
| CQ | Current quarter |
| CY | Current year |
| PP | Prior period |
| PQ | Prior quarter |
| PY | Prior year |

## Overview

In the Revenue from Prior/Current CL/CA report, the following data points are derived from some other reports and presented in this report:

| Data point | Derived from |
| --- | --- |
| Net beginning balance for the current period | Total Begin Balance in the RC Rollforward report |
| Net additions for the current period | Total Additions in the RC Rollforward report |
| Net releases in the current period | Total Release in the RC Rollforward report |
| Billings that are associated with the right-to-bill transaction lines | The sum of Unbilled Billings from the right-to-bill transaction lines in the Unbill RollForward Report |
| Unbilled AR revenue from the right-to-bill transaction lines | The sum of Unbilled Revenue from the right-to-bill transactions in the Unbill RollForward Report (can also be calculated based on Net Revenue in the Waterfall report and Total Release in the RC Rollforward report) |

Based on the above data points, the following two data points can be calculated and presented in the Revenue from Prior/Current CL/CA Report:

-   Net CA/CL Additions = Total Additions (RC Rollforward Report) - Unbilled Billings (The sum from the right-to-bill transaction lines in Unbill RollForward Report)

-   Net CA/CL Release = Total Release (RC Rollforward Report) - Unbilled Billings (The sum from the right-to-bill transaction lines in Unbill RollForward Report)


Then, the Net CA/CL Release in the current period will be bucketed into PP CA/CL and/or CP CA/CL, which are also presented in this report as follows:

| Type | Column header | Description |
| --- | --- | --- |
| Revenue from Prior Periods Contract Liability | Prior Period Contract Liability (PP CL) | Sum of all revenue from the prior period balance sheet account that is CL. |
| Prior Quarter Contract Liability (PQ CL) | Sum of all revenue from the prior quarter balance sheet account that is CL in the current period. |  |
| Prior Year Contract Liability (PY CL) | Sum of all revenue from previous years balance sheet account that is CL in the current period. |  |
| Revenue from Prior Periods Contract Asset | Prior Period Contract Asset (PP CA) | Sum of all revenue from the prior period balance sheet account that is CA. |
| Prior Quarter Contract Asset (PQ CA) | Sum of all revenue from the previous quarter balance sheet account that is CA in the current period. |  |
| Prior Year Contract Asset (PY CA) | Sum of all revenue from previous years balance sheet account that is CA in the current period. |  |
| Revenue from Current Period Contract Liability | Current Period Contract Liability (CP CL) | Current period revenue based on the balance sheet account that is CL. |
| Current Quarter Contract Liability (CQ CL) | Sum of all the revenue from all the periods for the current quarter from the balance sheet account which is CL. |  |
| Current Year Contract Liability (CY CL) | Sum of all the revenue from all the periods for the current year from the balance sheet account that is CL. |  |
| Revenue from Current Period Contract Asset | Current Period Contract Asset (CP CA) | Current period revenue. |
| Current Quarter Contract Asset (CQ CA) | Sum of revenue from all periods of the current quarter. |  |
| Current Year Contract Asset (CY CA) | Sum of revenue from all periods of the current year. |  |

The Total Revenue in this report is the sum of PP CL, PP CA, CP CL, CP CA, and the unbilled AR revenue. When you do report reconciliation, the Total Revenue in the Prior/Current CL/CA report should be equal to the Net Revenue in the Waterfall report.

## Other related reports

To understand how the Revenue from Prior/Current CL/CA Report is calculated, the following reports are required and closely tied with the Revenue from Prior/Current CL/CA report.

RC Rollforward Report

This report can display the CA/CL beginning balance, ending balances, and activities for the current period. The Total Additions, Total Release, and Ending Balance are important to derive the Net CA/CL Additions and Net CA/CL Release for the Revenue from Prior/Current CL/CA Report.

Waterfall Report

This report can display the amortization schedule of the Net Revenue, which is the sum of Contractual Revenue and Adjustment Revenue. The Net Revenue in the Waterfall Report and the Total Release in the RC Rollforward Report are used to calculate the Unbilled AR for the Revenue from Prior/Current CL/CA Report.

Unbill RollForward Report

When Total Additions and Total Release from the RC Rollforward Report are calculated, the transaction lines with the Right to Bill flag set to Y are also included. As guided by ASC 606, to get the true Net CA/CL Additions and Net CA/CL Release for the current period, revenue from the right-to-bill transaction lines must be excluded. The Unbilled Billings column in the Unbill RollForward Report indicates the billings that are associated with the right-to-bill transaction lines.

## Related articles

-   For detailed explanations of the key data points that are involved in this report, see [Key data points](/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/key-data-points).

-   To understand the internal calculation logic of this report, see [Calculation logic](/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/calculation-logic).

-   A sample revenue contract is provided to show how the report is generated. For more information, see [Revenue contract example](/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/revenue-contract-example).
