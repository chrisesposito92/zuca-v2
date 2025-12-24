---
title: "[Calculate MRR in Ramp Interval Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-mrr-in-ramp-interval-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:22.974Z"
---

# \[Calculate MRR in Ramp Interval Metrics\] process flow

This topic explains how Zuora calculate the metrics in a Ramp.

Zuora calculates the MRR in Ramp Interval Metrics by the following steps:

1.  Calculate the MRR for each charge segment or each charge period in which the net pricing of the charge remains constant. The calculation logic is the same as the MRR metrics in Zuora Billing. See Charge-level Net MRR for more information.

2.  Map the MRR of each charge segment (or charge period) to a specific Ramp Interval according to whether the time range of charge period falls into the time range of the Ramp Interval.

3.  If the time range of a charge segment (or charge period) spans over multiple Ramp Intervals, this charge period will be further segmented and then mapped to the corresponding Ramp Interval.
