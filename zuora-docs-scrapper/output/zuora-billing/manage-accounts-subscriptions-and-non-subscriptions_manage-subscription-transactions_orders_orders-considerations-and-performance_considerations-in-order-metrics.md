---
title: "Considerations in Order Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/considerations-in-order-metrics"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:11.209Z"
---

# Considerations in Order Metrics

This article outlines the limitations of Order Metrics for existing Zuora Subscribe and Amend customers, highlighting unsupported features and conditions for generating metrics.

This section is for the existing Zuora Subscribe and Amend customers who have enabled Order Metrics only (not Orders).

The table below describes known limitations in Order Metrics for Zuora Billing. Note you must have Orders turned on to support the Orders integration with Zuora CPQ.

| Feature | Limitations |
| --- | --- |
| Amendments | The following type of subscriptions are not supported to be migrated to Order Metrics: if you have changed the term start date to an earlier date via a T&Cs amendment after performing a renewal. Doing so would result in potential gaps in the order metrics generated.After Order Metrics is enabled, you cannot change the term start date via a T&Cs amendment if a Renewal amendment is already in place. |
| Discounts | Discounts are supported at the subscription level, rate plan level, and account level. However, discount metrics are calculated for subscription and rate plan level discounts only. Discount metrics are not calculated for account level discounts.You can perform the following amendments for subscriptions with account level discounts, however no metrics will be generated:Create SubscriptionAdd ProductUpdateRemoveT&CsCancellationRenewSuspend / Resume |
| Pending Subscriptions | You can still create pending subscriptions and pending amendments by not providing all trigger dates with this feature turned on; however, Order Metrics will not be generated for that subscription until it is fully activated. |
| Prepayment | Prepayment is a deprecated feature of Zuora and is not supported in Order Metrics. |
| Discount Applied Metrics | You are strongly recommended to disable the Discount Applied Metrics when the Order Metrics feature is enabled. |
| MRR Trend Export | MRR Trend Export is not supported with Order Metrics. |
| MRR (Contracted) Changes Export | MRR (Contracted) Changes Export is not supported with Order Metrics. |
| Usage Charges | Order Metrics will not be generated for usage charges. |
