---
title: "Order Delta MRR Calculation I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-mrr/order-delta-mrr-calculation-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:48.970Z"
---

# Order Delta MRR Calculation I

This topic explains how to calculate Order Delta MRR by comparing the differences in Monthly Recurring Revenue before and after an order is placed, with examples illustrating the process.

When calculating Order Delta Mrr, Zuora compares the differences in MRR between the subscription version before and after the order is placed.

Example 1

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit per month. Then you renew the subscription for another 3 months. The delta of MRR before and after the Order is $50 per month for an additional 3 months and therefore OrderDeltaMrr = $50 from 2022-01-01 to 2022-03-31.

![Order Delta Mrr](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cb40f8a7-83f8-417b-9133-28b4cfaca9b6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiNDBmOGE3LTgzZjgtNDE3Yi05MTMzLTI4YjRjZmFjYTliNiIsImV4cCI6MTc2NjY0MDM0NiwianRpIjoiNzdjZWQ0NDk3NDM3NGJiZGI2MTc5MjY3NWFkZTdmY2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xuIFGX6EuX1RVj7G-4lUhC9pqzlvEnX-Co0ZAvepdBI)

Order Delta Mrr for the example above will be:

| StartDate | EndDate | RatePanChargeId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- |
| 2022-01-01 | 2022-04-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | $50 | $50 |
