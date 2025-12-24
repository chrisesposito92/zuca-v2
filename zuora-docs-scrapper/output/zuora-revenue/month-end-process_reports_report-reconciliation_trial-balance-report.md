---
title: "Trial Balance Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/trial-balance-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:29.729Z"
---

# Trial Balance Report

The Trial Balance Report is reconciled with the RC Rollforward and Waterfall reports to ensure account balances are consistent across reports.

The Trial Balance Report must be reconciled with the RC Rollforward Report and the Waterfall report.

To reconcile the Trial Balance Report, ensure the following conditions are met:

-   The balances by account for the Contract Liability account type must agree with the account level ending balance for the Contract Liability account type in the RC Rollforward Report.

-   The balances by account for Adjustment Liability account type must agree with the account level ending balance for the Adjustment Liability account type in the RC Rollforward Report.

-   The period balances by account for all revenue accounts, including Revenue, Adjustment Revenue, and VC Revenue, must be consistent with the current period waterfall balances by account type and account.


| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| Trial Balance Report | The balances for the Contract Liability account type | The account level Ending Balance for the Contract Liability account type | RC Rollforward Report |
| The balances for the Adjustment Liability account type | The account level Ending Balance for the Adjustment Liability account type | RC Rollforward Report |  |
| The period balances by account for all revenue accounts including:RevenueAdjustment RevenueVC Revenue | The current period waterfall balances by account type and account | Waterfall Report |  |
