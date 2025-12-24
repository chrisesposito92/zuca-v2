---
title: "Trend Chart metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/payment/configurable-payment-retry-dashboard/trend-chart-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:40.839Z"
---

# Trend Chart metrics

Descriptions of the Trend Chart metrics

The following table provides descriptions of the Trend Chart metrics.

| Metrics | Definition |
| --- | --- |
| Collection Rate | The percentage of documents that went through the retry and were successfully collected. The graph is depicted based on active customer groups. |
| Document Retry Status | The status of each of the documents that are in CPR. This graph is displayed based on active customer groups.The following items are the different types of statuses:Complete - Retry completed successfully.Complete-external - The document was collected externally.Failure - The retry process failed.In-retry - The document is still in the retry process.Defunct - When the next retry time could not be assigned to a billing document due to some exception. |
| Amount Collected | The total amount successfully collected through billing documents. The graph is depicted based on active customer groups. |
| Payment by Attempts | The number of payments that were successful/failed at every attempt.Note: The first attempt is the initial payment run, the second attempt is the first retry cycle and so on. |

-   Clicking on any portion of the graph will take you to the raw data used to generate the graphs (the Payments, Payment Runs, and Retry Log tabs).

-   Hovering over any of the graphs will show further details at every point in the graph.


Note:

All the data on the CPR dashboard is cumulative in nature and keeps updating as and when there are changes in the status of the billing documents.
