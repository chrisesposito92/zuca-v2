---
title: "Workflow metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/workflow-dashboard/workflow-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:32.040Z"
---

# Workflow metrics

Descriptions of the Workflow metrics

The following table provides descriptions of the Workflow metrics.

| Metric | Description |
| --- | --- |
| Workflow Usage | Number of workflow runs within the specified time range. The workflow run data can be filtered by time, category, workflow name, and execution priority. |
| Workflow Failures | Number of failed workflow tasks and detailed information about each failed task, including task name, error class, and error message. |
| Workflow Performance | The execution time data of workflows. Available metrics include the following:P95: 95th percentile of the execution time dataP90: 90th percentile of the execution time dataP50: 50th percentile of the execution time data |

Note that you can configure notifications based on the Workflow Failures or Workflow Performance metrics. For more information, see [Standard events for Zuora Central Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).
