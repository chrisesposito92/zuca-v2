---
title: "Limits"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-api-introduction/limits"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:54.945Z"
---

# Limits

AQuA enforces limits on processing time, number of queries, and concurrent jobs, with specific restrictions on certain objects.

AQuA enforces the following limits:

-   The maximum processing time per query is 3 hours. If a query in an AQuA job is executed for longer than 3 hours, this job will be killed automatically. See the best practices for bulk data extraction with AQuA. .
-   The maximum number of queries in an AQuA job is 50.
-   AQuA enforces limits on both the stateful concurrent AQuA jobs and the stateless concurrent AQuA jobs per tenant:

    -   The maximum number of stateful concurrent AQuA jobs per tenant is 50.
    -   The maximum number of stateless concurrent AQuA jobs per tenant is 50.

    AQuA jobs in the following status are counted towards your concurrent AQuA job limits:
    -   Submitted
    -   ExecutingZuora system will reject the subsequent stateful or stateless job requests once the corresponding concurrent job limit is reached.
-   The ChargeMetrics and ChargeMetricsDiscountAllocationDetail objects are not available through AQuA. You can access them through Data Query or [Charge Metrics API](https://www.zuora.com/developer/api-references/older-api/tag/Charge-Metrics).
