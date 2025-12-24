---
title: "Billing Waterfall Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/billing-waterfall-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:19.374Z"
---

# Billing Waterfall Report

Information on the Billing Waterfall Report

The values from the Billing Waterfall Report must be reconciled with the Accounting Details Report and the Billing Rollforward Report.

To reconcile this report, ensure the following conditions are met:

-   The amortized amount of the current period must agree with the Net Change (Cr - Dr) with the following filter values applied for the current period of the Accounting Detail Report.

    -   Account Type = Contract Liability

    -   Initial Entry = N

    -   Unbill Flag = N

-   The Current Period Billed Revenue must agree with the billing activity (invoice amount) for the period from the Billing Report.


| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| Billing Waterfall Report | Amortized Amount of Current Period | (Cr - Dr) where:account Type = Contract LiabilityInitial Entry = NUnbill Flag = N | Accounting Detail Report |
| Billing Activity (invoice amount) | Billing Rollforward Report |  |  |
