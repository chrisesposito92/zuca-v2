---
title: "[Calculate TCV in Ramp Interval Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcv-in-ramp-interval-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:33.232Z"
---

# \[Calculate TCV in Ramp Interval Metrics\] process flow

This topic explains how Zuora calculates Total Contract Value (TCV) in Ramp Interval Metrics by segmenting and mapping charge periods to specific intervals.

Zuora calculates the TCV in Ramp Interval Metrics by the following steps:

1.  Calculate the TCV for each charge segment or each charge period in which the net pricing of the charge remains constant. The calculation logic is the same as the TCV metrics in Zuora Billing. See Total Contract Value . See Charge-level Net MRR for more information about charge segments and charge periods.

2.  Map the TCV of each charge segment (or charge period) to a specific Ramp Interval according to whether the time range of charge period falls into the time range of the Ramp Interval.

3.  If the time range of a charge segment (or charge period) spans over multiple Ramp Intervals, the TCV of this charge segment ( or charge period) will be further segmented and then mapped to the corresponding Ramp Interval. The amount distribution is based on the time length ratio of the overlap period to the charge segment (or charge period).

4.  Group the TCV amounts and segmented TCV amounts by charge segments for each Ramp Interval. Return the added up value per charge segment per Interval as the TCV in the Ramp Interval Metrics. See Segmented rate plan charges for more information about charge segments.
