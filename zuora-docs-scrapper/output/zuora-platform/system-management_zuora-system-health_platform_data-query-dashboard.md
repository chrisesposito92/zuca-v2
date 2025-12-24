---
title: "Data Query dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/data-query-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:14.145Z"
---

# Data Query dashboard

The Data Query dashboard in Zuora's System Health provides real-time insights into the usage, failures, and performance of the Data Query service, allowing users to view and troubleshoot queries submitted in the last 30 days.

Zuora System Health dashboard for Data Query (Data Query dashboard) collects and displays data about usage, failures, and performance of the Data Query service in near real time. It enables you to view all the submitted queries within the last 30 days in your Zuora tenant. You can leverage this dashboard to identify and troubleshoot query issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Data Query dashboard

To access the Data Query dashboard, navigate to in the left navigation menu.

## View data in the Data Query dashboard

The Data Query dashboard is located under the section in the left navigation menu. The dashboard contains a Data Summary section and three tabs that display the usage, failure, and performance data related to Data Query separately.

The Data Summary section provides an overview of the Data Query data within the last 30 days and the change percentage compared to the previous interval.

After you open a tab in the dashboard, perform the following to view the data:

-   [Configure filters](#concept-4374__configurefilters)
-   [View the trend chart](#concept-4374__viewtrendchart)

## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon.
-   Use the Timeframe, Start Time, and End Time fields to specify the time range.
-   Use the Status field to specify the query status.
-   Use the Query ID field to filter a specific query.This field is available only on the Overview and Failures tabs.
-   Use the Error Type and Error Code fields to specify the error information.These fields are available only on the Failures tab.
-   Use the Execution Time Range field to specify the execution time.This field is available only on the Performance tab.
-   Click Apply to apply the filter or click Reset to go back to the default filter configuration.

## View trend chart

-   Select the time interval of the charts by using the interval radio buttons in the upper right of the chart.Note that available interval options vary based on the length of the selected time range.
-   When hovering over each bar, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.
-   The data in the Data Query Usage chart is categorized by status.
-   The data in the Data Query Failures chart is categorized by error code.
-   The data in the Data Query Performance chart is categorized by execution time.
-   Use the table below the trend chart to view detailed data within the selected time range.
    -   By default, the table displays all the items within the specified time range. To narrow down the scope to a specific interval, click a bar in the chart. To go back to the global time-range set in the filter, click Reset next to the specific time range displayed above the chart.
    -   Click the number in the status column of the Data Query Usage table to display all the items of this query status.
    -   Click the link in the Query column to open the corresponding Data Query page.
    -   Click the download icon ![download.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/82340327-537b-49fc-aa48-f9c4f8e4c76b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMzQwMzI3LTUzN2ItNDlmYy1hYTQ4LWY5YzRmOGU0Yzc2YiIsImV4cCI6MTc2NjYzOTQxMiwianRpIjoiNmFiZjg3Yzg0NmI2NGJlN2E0YWZiMTBmMzBjYzg3NDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zG_YEG3MhJWyHEwuoj5f8iGCLQFlW3BwSppmtzKfC3U) to download the table as a CSV file.
    -   Click a header field to sort the data.
