---
title: "[Calculate Quantity in Ramp Interval Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-quantity-in-ramp-interval-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:58.689Z"
---

# \[Calculate Quantity in Ramp Interval Metrics\] process flow

This topic explains how Zuora calculates the Quantity in Ramp Interval Metrics through a series of mapping and segmentation steps.

Zuora calculates the Quantity in Ramp Interval Metrics by the following steps:

1.  Calculate the Quantity for each charge segment in the subscription. See Segmented rate plan charges for more information about charge segments.

2.  Map the Quantity of each charge segment to a specific Ramp Interval according to whether the time period of the charge segment falls into the time period of the Ramp Interval.

3.  If the time period of a charge segment spans over multiple Ramp Intervals, this time period will be further segmented and then mapped to the corresponding Ramp Interval.
