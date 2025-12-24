---
title: "Workflow dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/workflow-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:29.476Z"
---

# Workflow dashboard

A dashboard that collects and displays data about usage, failures, and performance of the Workflow service in near real time

Zuora System Health dashboard for Workflow (Workflow dashboard) collects and displays data about usage, failures, and performance of the Workflow service in near real time. It enables you to view data of the workflow runs and workflow tasks within the last 30 days in your Zuora tenant. You can leverage this dashboard to identify and troubleshoot workflow errors or performance issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see Zuora System Health [prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Workflow dashboard

To access the Workflow dashboard, navigate to Administration > System Health > Workflow in the left navigation menu.

Next, refer to [Workflow metrics](/zuora-platform/system-management/zuora-system-health/platform/workflow-dashboard/workflow-metrics).

## View data in the Workflow dashboard

The Workflow dashboard is located under the Administration > System Health section in the left navigation menu. It contains a data summary section and three tabs that display the usage, failure, and performance data related to workflows separately.

The Data Summary section provides an overview of the Workflow data within the last 30 days and the change percentage compared to the previous interval.

After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-pks4464e__configure_filters)

-   [View the trend chart](#concept-pks4464e__view_trend_chart)


## Configure filters

You can customize the data to be displayed by using the filters.

-   Click the Filters icon to expand the filter in the upper right of the dashboard.

-   Use the Time Frame, Start Time, and End Time fields to specify the time range.

-   Use the Category, Workflow Name , and Priority lists to select the workflows you want to view.

-   Click Apply to apply the filters or click Reset to go back to the default filter configuration.


## View the trend chart

-   Select the time interval of the chart by using the interval radio buttons in the upper right of the chart. Note that available interval options vary based on the length of the selected time range. When the range is greater than 60 hours, only the Day interval is enabled.

-   When hovering over each interval, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.

-   You can drill down into an interval by clicking on that interval.

-   On the Failures tab, you can choose to hide or display workflows by clicking the corresponding icons at the bottom of the chart.

-   On the Performance tab, you can choose to hide or display lines by clicking the corresponding icons at the bottom of the chart.

-   Use the table below the trend chart to view detailed data within the selected time range.

    -   By default, the table displays all the items within the specified time range. You can narrow the scope to a specific interval by clicking a bar in the chart.

    -   On the Overview and Failures tabs, you can view the details of failed workflow runs by first clicking the Failed Tasks field of a workflow, and then clicking a failed workflow run. In the expanded view, you can view the following information:

        -   Task Name

        -   Error Class

        -   Error Message

        -   Error Count

    -   You can download the table as a CSV file by clicking the download icon in the upper right of the table.

    -   You can use some columns to sort the data. To test whether the data is sortable by a column, click the header of the column.
