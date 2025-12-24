---
title: "MRR Access"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/mrr-access"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:09.989Z"
---

# MRR Access

This topic provides a table detailing the locations to access various types of Monthly Recurring Revenue (MRR) data across different interfaces and platforms.

The following table shows the locations to access the various types of MRRs:

| Interface | Gross MRR | Discount MRR | Net MRR |
| --- | --- | --- | --- |
| Subscription Detail Page | Available for regular charges | Unavailable | Unavailable |
| Account Detail Page | Displayed as "Today's MRR" key metrics | Unavailable | Unavailable |
| Zuora Reporting | Available in the "Total MRR" standard report or via the Rate Plan Charge data source | Unavailable | Unavailable |
| Data Source Export | Available via the Rate Plan Charge data source | Unavailable | Unavailable |
| Aqua API | Available via the Rate Plan Charge data source | Unavailable | Unavailable |
| Zuora Analytics | Available as the "Gross MRR" metric | Available as the "Discount MRR" metric | Available as the "Net MRR" metric |
| Data Query | Available in the ChargeMetrics table | Available in the ChargeMetrics table (for regular charges)Available in the ChargeMetricsDiscountAllocationDetail table (for discount charges) | Available in the ChargeMetrics table |
| REST API | Use Get subscriptions by key or Get subscriptions by account with the charge-detail request parameter. | Unavailable | Unavailable |
| SOAP API | Use the query() call on the RatePlanCharge object. | Unavailable | Unavailable |
