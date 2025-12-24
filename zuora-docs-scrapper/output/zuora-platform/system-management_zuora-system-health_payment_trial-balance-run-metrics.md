---
title: "Trial Balance Run metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/payment/trial-balance-run-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:58.835Z"
---

# Trial Balance Run metrics

Descriptions of the Trial Balance Run metrics

The following table provides descriptions of the Trial Balance Run metrics.

| Metric | Description |
| --- | --- |
| Trial Balance Run Overview (Trial Balance Job Overview) | The number of reports sent within a specified time range and details of each request, including successful and failed runs.When hovering over each time interval bar, you can view the breakdown data of that time range.Success Sync: The number of successful runs.Fail Sync: The number of failed runs. |
| Trial Balance Run Failures (Trial Balance Job Failures) | The number of failed reports within a specified time range.When hovering over each time interval bar, you can view the breakdown data of that time range. |
| Trial Balance Run Performance (Trial Balance Job Time) | Trial Balance Run report generation time from Zuora within a specified time range.P95: 95th percentile of the response time dataP90: 90th percentile of the response time dataP50: 50th percentile of the response time dataWhen hovering over each time interval point, you can view the breakdown data of that time range. |

-   On the Overview tab, you can view the below details:

    -   Accounting Period Name

    -   Executed on

    -   Duration

    -   Status

-   On the Failures tab, you can view the below details:

    -   Accounting Period Name

    -   Executed on

    -   Duration

    -   Status

-   On the Performance tab, you can view the below details:

    -   Accounting Period Name

    -   Executed on

    -   Duration

    -   Status


Note that you can configure notifications based on the execution time of long-running jobs. For more information, see [Standard events for Zuora Central Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform) .
