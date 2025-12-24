---
title: "Retrieve summary data API"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/retrieve-summary-data-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:33.156Z"
---

# Retrieve summary data API

The summary API gives you a rolled-up view of a run or time window.

The API includes the following metrics:

-   How many records were processed?

-   How many had errors?

-   Which operators were involved?

-   Was this a full failure or only partial?


## Filters

-   Session ID (per run)

-   Operator ID (which operator caused issues)

-   Error code (what kind of failures you saw)


## Usage

-   Replace missing context in status notifications. When a session transitions to FAILED or COMPLETED, your system can immediately call the Summary API for:

    -   outputCount vs errorCount: Is this a small spike or a catastrophic failure?

    -   Breakdown by operatorId: Identify the operator that is causing the error.

    -   Breakdown by errorCode: Analyze if this is a configuration issue, data quality issue, or something else.

-   Automated decision-making:

    -   If only 0.5% of records failed, log and proceed.

    -   If >10% failed in a single operator, trigger a rollback, alert an on-call channel, or pause downstream processing.

    -   If failures are concentrated in a single error code, send that error class to a remediation pipeline.

-   Operational dashboards:
    -   Feed the response into BI or observability tools.

    -   Track trends over time: error rate per operator, run performance, and the sessions that are the most problematic.
