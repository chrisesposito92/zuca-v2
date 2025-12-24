---
title: "[Calculate TCB in Ramp Interval Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcb-in-ramp-interval-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:45.712Z"
---

# \[Calculate TCB in Ramp Interval Metrics\] process flow

This topic explains how Zuora calculates TCB in Ramp Interval Metrics by mapping and segmenting rating results to specific Ramp Intervals.

Zuora calculates the TCB in Ramp Interval Metrics by the following steps::

1.  Zuora's TCB calculation engine uses the same rating rule as that of the Zuora's rating and billing engine (RBE) to generate rating results. See Define Billing Rules , Processing Discount Charges , and Proration for more information about Zuora's rating rule.

2.  Map each rating result to a specific Ramp Interval according to whether the time period of the rating result falls into the time period of the Ramp Interval.

3.  If the time period of a rating result spans over multiple Ramp Intervals, this rating result will be further segmented and then mapped to the corresponding Ramp Interval. The rating result amount distribution is based on the time length ratio of the overlap period to the rating result length period.

4.  Group the rating results and segmented rating results by charge segments for each Ramp Interval. Return the added up value per charge segment per Interval as the TCB in the Ramp Interval Metrics. See Segmented rate plan charges for more information about charge segments.
