---
title: "Data Source Export dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/data-source-export-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:19.431Z"
---

# Data Source Export dashboard

A dashboard that collects and displays data about usage, failures, performance, processing jobs, and top executed queries of the Data Source Exports (DSE) service in near real time

Zuora System Health dashboard for Data Source Export (Data Source Export dashboard) collects and displays data about usage, failures, performance, processing jobs, and top executed queries of the Data Source Exports (DSE) service in near real time. It enables you to view all the DSE query jobs in your Zuora tenant within the last 30 days. You can leverage this dashboard to identify and troubleshoot query issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see Zuora System Health [prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Data Source Export dashboard

To access the Data Source Export dashboard, navigate to Administration > System Health > Data Source Export in the left navigation menu.

Next, refer to [Data Source Export metrics](/zuora-platform/system-management/zuora-system-health/platform/data-source-export-dashboard/data-source-export-metrics).

## View data in the Data Source Export dashboard

The Data Source Export dashboard is located under the Administration > System Health section in the left navigation menu. The dashboard contains a Data Summary section and five tabs that display the usage, failures, performance, processing jobs, and top executed queries data separately.

The Data Summary section provides an overview of the DSE query data within the last seven days and the change percentage compared to the previous interval.

After you open a tab in the dashboard, perform the following to view the data:

-   [Configure filters](#concept-ry07gafj__configure_filters)

-   [View the trend chart](#concept-ry07gafj__view_trend_chart)


## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon.

-   Use the Timeframe, Start Time, and End Time fields to specify the time range. These fields are available only on the Overview, Failures, Performance and Top Executed Queries tabs.

-   Use the Job Status field to specify the query job status. This field is available only on the Overview, Performance, and Processing Jobs tabs.

-   Use the Job ID field to filter a specific query job. This field is available only on the Overview, Failures, and Processing Jobs tabs.

-   Use the Execution Time Range field to specify the execution time. This field is available only on the Performance tab.

-   Use the Query field to specify the query expression. This field is available only on the Top Executed Queries tab.

-   Click Apply to apply the filter or click Reset to go back to the default filter configuration.


## View the trend chart

-   Select the time interval of the charts by using the interval radio buttons in the upper right of the chart.Note that available interval options vary based on the length of the selected time range.
-   Each bar in the chart represents query jobs issued in that time interval. The bar might be divided into multiple colored segments based on a subcategory that varies depending on the tab. The subcategory values can be seen at the bottom of the chart. You can click the subcategory values to filter query jobs as needed.The following table describes details of the trend chart on different tabs:
    | Tab name | Value in each bar | Subcategory | Available subcategory values |
    | --- | --- | --- | --- |
    | Overview | Processed DSE query jobs | Job status | CompletedFailed |
    | Failures | Failed DSE query jobs | Job status | Failed is the only available value. |
    | Performance | Processed DSE query jobs | Execution time range | < 10 mins10 - 30 mins30 - 60 mins60 - 180 mins>= 180 mins |

-   When hovering over each bar, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.
-   The Processing Jobs and Top Executed Queries tabs do not provide a trend chart.
-   Use the table below the trend chart to view detailed data within the selected time range.
    -   By default, the table displays all the items within the specified time range. To narrow down the scope to a specific interval, click a bar in the chart. To go back to the global time-range set in the filter, click Reset next to the specific time range displayed above the chart.
    -   Click the number in the Execution Count column of the table on the Top Executed Queries tab to view all query jobs based on a specific query expression.
    -   Click the download icon ![download.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/82340327-537b-49fc-aa48-f9c4f8e4c76b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMzQwMzI3LTUzN2ItNDlmYy1hYTQ4LWY5YzRmOGU0Yzc2YiIsImV4cCI6MTc2NjYzOTQxNywianRpIjoiNTYwMmVkZTc5OWQ3NDM0YTkyMWJhY2Q4YWY1Njc1ZmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wtmVJtlWqqvsEGLoLgQnmUkkcLplUGKFDAsWu76dwM0) to download the table as a CSV file.
    -   Click a header field to sort the data.
