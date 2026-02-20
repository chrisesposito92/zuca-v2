---
title: "Key metrics for Ramps"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:15.688Z"
---

# Key metrics for Ramps

This topic explains about Ramp metrics, including TCB, TCV, Quantity, and MRR, across different levels such as Ramp, Ramp Interval, and Ramp Interval Delta Metrics, to understand subscription charge variations over time.

This article introduces Ramps Metrics.

A Ramp is a time container to associate with rate plan charges in your subscription. Inside the Ramp, you can further define a set of Ramp Intervals (time-based periods) where products or pricing can change. These periods are sub time containers to enable you to report out-of-the-box metrics based on Ramp Intervals. See the Ramps object model in Orders Object Model.

When a subscription with ramp deal is created, you can get the following Ramp metrics:

-   TCB, TCV at the Ramp level Add up the corresponding metrics in the Ramp Interval level. For example, if a ramp deal is three years, then you will see the TCB and TCV for the entire three years.

-   TCB, TCV at the Ramp Interval level Add up the corresponding metrics in Ramp Interval Metrics. For example, if a ramp deal is three years, then you will see the TCB and TCV for each year.

-   TCB, TCV, Quantity, and MRR in Ramp Interval Metrics The lowest level of granularity for metrics in a Ramp. See the table below for more information.

-   Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Ramp Interval Delta Metrics The delta value in the metrics for a charge between a subscription's current version and the previous version per Ramp Interval when an Order is created. See the table below for more information.


See the descriptions for these metrics in the table below:

| Metrics level | Corresponding Ramp Metrics | Metrics Description |
| --- | --- | --- |
| Ramp | TCB (Gross, Net, and Discount) | TCB in the Ramp level. One for each subscription per Order.Sum of all the TCB values in the Ramp Interval level. |
| TCV (Gross, Net, and Discount) | TCV in the Ramp level. One for each subscription per Order.Sum of all the TCV values in the Ramp Interval level. |  |
| Ramp Interval | TCB (Gross, Net, and Discount) | TCB in the Ramp Interval level. One TCB value for each Ramp Interval.Sum of all the TCB values in the Ramp Interval Metrics level that are in the time period of a Ramp Interval, including all the charges that are associated with the Ramp. |
| TCV (Gross, Net, and Discount) | TCV in the Ramp Interval level. One TCV value for each Ramp Interval.Sum of the TCV values in the Ramp Interval Metrics level, including all the charges that are associated with the Ramp. |  |
| Ramp Interval Metrics | TCB (Gross, Net, and Discount) | The lowest level of granularity for TCB in Ramp Metrics.One for each charge segment in the time range of a Ramp Interval. See Segmented rate plan charges for more information about charge segments.See the calculation logic and example in TCB in Ramp Interval Metrics. |
| TCV (Gross, Net, and Discount) | The lowest level of granularity for TCV in the Ramp Metrics.One for each charge segment in the time range of a Ramp Interval. See Segmented rate plan charges for more information about charge segments.See the calculation logic and example in TCV in Ramp Interval Metrics. |  |
| Quantity | The quantity of a rate plan charge of the Per Unit Pricing charge model.One for each charge segment in the time period of a Ramp Interval. See Segmented rate plan charges for more information about charge segments.See the calculation logic and example in Quantity in Ramp Interval Metrics. |  |
| MRR (Gross, Net, and Discount) | The lowest level of granularity for MRR in Ramp Metrics.One for each charge segment or each charge period in which the charge's net pricing remains constant in the time range of a Ramp Interval. This is because a charge segment can be further segmented into several charge periods as a result of the discount application. See Charge-level Net MRR for more information about charge periods. See Segmented rate plan charges for more information about charge segments.See the calculation logic and example in MRR in Ramp Interval Metrics. |  |
| Ramp Interval Delta Metrics | Delta TCB (Gross, Net, and Discount) | The delta value in the TCB amount of a charge between a subscription's current version and the previous version when an Order is created.One for each charge per Ramp Interval. Not present if there is no TCB value change for a charge between a subscription's current version and the previous version.See the calculation logic and example in Delta TCB in Ramp Interval Delta Metrics. |
| Delta TCV (Gross, Net, and Discount) | The delta value in the TCV amount of a charge between a subscription's current version and the previous version when an Order is created.One for each charge per Ramp Interval. Not present if there is no TCV value change for a charge between a subscription's current version and the previous version.See the calculation logic and example in Delta TCV in Ramp Interval Delta Metrics. |  |
| Delta Quantity | The delta value in the Quantity amount of a charge between a subscription's current version and the previous version when an Order is created.One for each time period in which the quantity remains constant. The time period should fall into the time range of the corresponding Ramp Interval.Not present if there is no quantity change in the period.See the calculation logic and example in Delta Quantity in Ramp Interval Delta Metrics. |  |
| Delta MRR (Gross, Net, and Discount) | The delta value in the MRR value of a charge between a subscription's current version and the previous version when an Order is created.One for each charge period in which the charge's net pricing remains constant. The period should fall into the time range of the corresponding Ramp Interval.Not present if there is no price change in the period.See the calculation logic and example in Delta MRR in Ramp Interval Delta Metrics. |  |
