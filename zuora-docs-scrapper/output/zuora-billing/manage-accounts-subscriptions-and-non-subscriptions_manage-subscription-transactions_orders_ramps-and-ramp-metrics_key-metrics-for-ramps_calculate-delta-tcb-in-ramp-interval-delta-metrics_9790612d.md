---
title: "[Calculate Delta TCB in Ramp Interval Delta Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-delta-tcb-in-ramp-interval-delta-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:53.661Z"
---

# \[Calculate Delta TCB in Ramp Interval Delta Metrics\] process flow

This topic explains how Delta TCB values are calculated in Ramp Interval Delta Metrics, comparing subscription versions to determine changes in total charge values.

Delta TCB is the delta value in the total amount of all the TCB values in the Ramp Interval Metrics level for a single charge per Ramp Interval between a subscription's current version and the previous version when an Order is created. Zuora calculates the Delta TCB in Ramp Interval Delta Metrics by the following steps:

1.  Combine the TCB in the Ramp Interval Metrics level for each charge per Ramp Interval.

2.  Compare the combined TCB value for each charge per Ramp Interval between a subscription's current version and the previous version when an Order is created and return the delta TCB value for each charge per Ramp Interval.
