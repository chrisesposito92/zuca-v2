---
title: "Aggregate Query API (AQuA) dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/aggregate-query-api-aqua-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:04.102Z"
---

# Aggregate Query API (AQuA) dashboard

The Aggregate Query API (AQuA) dashboard in Zuora's System Health provides near real-time data on usage, failures, performance, processing jobs, and top executed queries. It allows users to view and troubleshoot AQuA query jobs within the last seven days.

Zuora System Health dashboard for Aggregate Query API (Aggregate Query API dashboard) collects and displays data about usage, failures, performance, processing jobs, and top executed queries of the Aggregate Query API (AQuA) service in near real time. It enables you to view all the AQuA query jobs in your Zuora tenant within the last seven days. You can leverage this dashboard to identify and troubleshoot query issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access Aggregate Query API (AQuA) dashboard

To access the Aggregate Query API (AQuA) dashboard, navigate to in the left navigation menu.

## View data in the AQuA dashboard

The AQuA dashboard is located under the section in the left navigation menu. The dashboard contains a Data Summary section and five tabs that display the usage, failures, performance, processing jobs, and top executed queries data separately.

The Data Summary section provides an overview of the AQuA query data within the last seven days and the change percentage compared to the previous interval.

After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-7386__configurefilters)
-   [View the trend chart](#concept-7386__viewtrendchart)

## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon.
-   Use the Timeframe, Start Time, and End Time fields to specify the time range.These fields are available only on the Overview, Failures, Performance, and Top Executed Queries tabs.
-   Use the Job Status field to specify the query job status.This field is available only on the Overview, Failures, Performance, and Processing Jobs tabs.
-   Use the Job ID field to filter a specific query job.This field is available only on the Overview, Failures, Performance, and Processing Jobs tabs.
-   Use the Mode field to filter a specific execution mode.This field is available only on the Overview and Failures tabs.
-   Use the Execution Time Range field to specify the execution time.This field is available only on the Performance tab.
-   Use the Query field to specify the query expression.This field is available only on the Top Executed Queries tab.
-   Click Apply to apply the filter or click Reset to go back to the default filter configuration.

## View trend chart

-   Select the time interval of the charts by using the interval radio buttons in the upper right of the chart.Note that available interval options vary based on the length of the selected time range.
-   Each bar in the chart represents query jobs issued in that time interval. The bar might be divided into multiple colored segments based on a subcategory that varies depending on the tab. The subcategory values can be seen at the bottom of the chart. You can click the subcategory values to filter query jobs as needed.The following table describes details of the trend chart on different tabs:
    | Tab name | Value in each bar | Subcategory | Available subcategory values |
    | --- | --- | --- | --- |
    | Overview | Processed AQuA query jobs | Job status | CompletedErrorAbortedCancelled |
    | Failures | Failed AQuA query jobs | Job status | ErrorAborted |
    | Performance | Processed AQuA query jobs | Execution time range |  |

-   When hovering over each bar, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.
-   The Processing Jobs and Top Executed Queries tabs do not provide a trend chart.
-   Use the table below the trend chart to view detailed data within the selected time range.
    -   By default, the table displays all the items within the specified time range. To narrow down the scope to a specific interval, click a bar in the chart. To go back to the global time-range set in the filter, click Reset next to the specific time range displayed above the chart.
    -   Click the ID in the Job ID column to view the detail page of a specific query job.
    -   Click the number in the Execution Count column of the table on the Top Executed Queries tab to view all query jobs based on a specific query expression.
    -   Click the download icon ![download.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/82340327-537b-49fc-aa48-f9c4f8e4c76b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMzQwMzI3LTUzN2ItNDlmYy1hYTQ4LWY5YzRmOGU0Yzc2YiIsImV4cCI6MTc2NjYzOTQwMiwianRpIjoiYzliZjFjNDllZDViNDRjYWJlMTllMTJiMTRlNThjNTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.s2Ius_SRKNekq7Zly2hKgxmqDmji8CbGtJZczsAJy9M) to download the table as a CSV file.
    -   Click a header field to sort the data.
