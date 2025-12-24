---
title: "Workflow and task metrics"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/report-on-workflow/workflow-and-task-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:19.638Z"
---

# Workflow and task metrics

Introduces the workflow and task metrics.

You can view the following workflow metrics in the Metrics tab of the Workflow home page:

-   Workflow task data size

-   Workflow task usage

-   Workflow version processing time


Note:

The limits of allowed workflow tasks for different editions of Zuora are enforced only for tenants in production environments.

## Task data size in workflows

This section displays the top 5 workflow versions that have the largest task data size.

-   WORKFLOW - The ID of the workflow version

-   \# OF TASKS - The total number of tasks of the workflow version

-   AVG - The average data size of tasks of the workflow version

-   MIN \- The size of the smallest data of the workflow version

-   MAX - The size of the largest data of the workflow version

-   MAX USAGE PERCENTAGE - The size of the largest task of the workflow version/5MB\*100%


## Task usage

This section displays the task usage data of a specified time range. You can use the Time Period and Group By fields to specify the time range and the interval.

-   Total Used - The task usage in the specified interval.

-   Total Limit - This value is defined in App Instance Settings.


Tip: You can mouse over an interval point to view detailed data of that point.

You can zoom in on the diagram to further narrow down the time range. Click Reset Zoom to return to the complete time period.

When you reset the configuration, click Refresh to view the updated data.

## Workflow usage

This section displays the processing time data of workflow versions in a specified time range. You can use the Time Period and Group By fields to specify the time range and the interval.

Click the workflow version name to view the average processing time data of that workflow version.

To view the average processing time of all workflow versions, click Time to Execute.

Tip: Mouse over an interval point to view detailed data of that point.

You can zoom in on the diagram to further narrow down the time range. Click Reset Zoom to return to the complete time period.

When you reset the configuration, click Refresh to view the updated data.
