---
title: "API metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/apis-dashboard/api-metrics"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:07.722Z"
---

# API metrics

This document provides definitions and details of various API metrics, including usage, failures, performance, and concurrency limits.

The following table provides definitions of the API metrics.

| Metric | Description |
| --- | --- |
| API Usage | The number of API requests issued within a specified time range, and details of each of the requests.The numbers of successful requests and failed requests by operation.Detailed information about the requests, such as request time, request ID, HTTP method, track ID, tracing identifier, and the path of each request.Note that the Track ID column displays the values specified in the Zuora-Track-Id headers of the API requests |
| API Failures | All the failed API requests issued within the specified time range.Besides the detailed information of the failed requests, you can also view the response code and response body of each of the failed request.Note that some API failures might not be instantly picked up by the notification system because the notification system allows for a custom polling interval. It can cause a temporary discrepancy between the notification record and the API System Health dashboard. The impact of such a discrepancy should be minimal, and it will be auto-rectified over time. |
| API Performance | The response time data of the API requests within a specified time range. Available metrics include the following:P95: 95th percentile of the response time dataP90: 90th percentile of the response time dataP50: 50th percentile of the response time data |
| API Concurrency Limit | The concurrency limits data for the Default and High-volume transactions concurrency limit types within a specified time range.The trend charts in the API Concurrency Limit tab display the maximum concurrency data of the selected intervals. For example, when Day is selected as the interval, the chart displays the maximum number of concurrent requests each day within the specified time range.The minimum unit of the interval is minute, which means when setting the interval to Minute, the charts display the maximum concurrency per minute.See Concurrent request limit types for more information about request types. Note that the Object Query type is not supported by the System Health APIs dashboard.You can use the Concurrency Top API Insights table to view detailed information about the maximum concurrency of the selected time range. The following information is available:API DescriptionHTTP MethodTracing IdentifierTotal RequestsAvg Execution TimeTotal Execution TimeConcurrency Limit TypeNote that the Tracing Identifier column displays prefixes of the values specified in the Zuora-Track-Id headers of the API requests. For example, for any API requests triggered by the Workflow service, the prefix "WF" will be displayed as the tracing identifier. If Zuora-Track-Id is not specified in the request, the Tracing Identifier field will display "--". |

Note that you can configure notifications based on the API Failures, API Performance, or API Concurrency metrics. For more information, see Standard events for Zuora Central Platform.

Use the Summary pane to get an overview of the data.The Summary pane displays a summary of the selected data. For example, on the Overview tab, Summary displays the following metrics of the selected API requests:

-   Total number of requests that are issued.
-   Number of successful requests
-   Number of errored requests
-   Error rate

The API data for requests not issued to standard Zuora API endpoints are unavailable in the API dashboard.
