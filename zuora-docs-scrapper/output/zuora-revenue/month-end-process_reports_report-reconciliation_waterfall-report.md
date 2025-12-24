---
title: "Waterfall Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/report-reconciliation/waterfall-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:24.724Z"
---

# Waterfall Report

This reference provides information on reconciling the Waterfall Report.

To reconcile the Waterfall Report, ensure the following conditions are met:

Note:

The listed conditions are applicable only when the waterfall type is NET REVENUE.

-   The Current Period Net Revenue of the Waterfall Report must agree with the following values:

    -   The total revenue activity for the period in the Revenue Insight Report
    -   The total revenue activity for the period in the Revenue from Prior Period CA/CL Report
    -   Total revenue - the Net Change (Cr - Dr) where account type = Revenue, Adjustment Revenue, and any VC Revenue types for the period in the Accounting Detail Report

-   The total Waterfall amount is the addition of all prior period values and all period activities.

| Report name | Value in report | Matched value | Matched report |
| --- | --- | --- | --- |
| Waterfall Report | Total Revenue Activity | Total Revenue Activity | Revenue Insight Report |
| Total Revenue Activity | Revenue from Prior Period CA/CL Report |  |  |
| Total revenue - Net Change (Cr - Dr) where account type = Revenue, Adjustment Revenue, and any VC Revenue types for the period | Accounting Detail Report |  |  |
| Total Waterfall | Prior period values + all period activities | Accounting Detail Report |  |
