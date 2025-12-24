---
title: "[Calculate Delta TCV in Ramp Interval Delta Metrics] process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-delta-tcv-in-ramp-interval-delta-metrics-process-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:40.680Z"
---

# \[Calculate Delta TCV in Ramp Interval Delta Metrics\] process flow

Delta TCV is the delta value in the sum total of a single charge's Ramp Interval Metrics level TCV metrics for a Ramp Interval (between a subscription's current version and the previous version when an Order is created).

Zuora calculates the Delta TCV in Ramp Interval Delta Metrics by the following steps:

1.  Combine the TCV in the Ramp Interval Metrics level for each charge per Ramp Interval.

2.  Compare the combined TCV value for each charge per Ramp Interval between a subscription's current version and the previous version when an Order is created and return the delta TCV value for each charge per Ramp Interval.
