---
title: "Usage File Import dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/billing/usage-file-import-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:26.664Z"
---

# Usage File Import dashboard

Collects and displays data about all the usage file imports, as well as usage file import errors and performance in near real time

Zuora System Health dashboard for Usage File Import (Usage File Import dashboard) collects and displays data about all the usage file imports, as well as usage file import errors and performance in near real time. Through the Usage File Import dashboard, you can view the usage file import data in your Zuora tenant within the last 30 days. You can use this dashboard to detect and troubleshoot usage file import issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For the prerequisites of the Usage File Import dashboard, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Usage File Import dashboard

To access the Usage File Import dashboard, navigate to Administration > System Health > Usage File Import in the left navigation menu.

For information on Usage File Import metrics, refer to [Usage File Import metrics](/zuora-platform/system-management/zuora-system-health/billing/usage-file-import-dashboard/usage-file-import-metrics).

## View data in the Usage File Import dashboard

The Usage File Import dashboard is located under the Administration > System Health section in the left navigation menu. It contains a Data Summary section and three tabs that display the usage, failure, and performance data of usage file imports separately.

-   Data Summary section: This section is located at the top of this dashboard, encompassing the following data boxes that display data summaries within the last seven days.

    -   Total File Imports : This data box displays the total number of successful and failed usage file imports within the last seven days and the week-over-week change.

    -   Failed File Imports : This data box displays the number of failed usage file imports within the last seven days and the week-over-week change.

-   Overview tab: This tab displays the data of the Usage File Import metric.

-   Failures tab: This tab displays the data of the Usage File Import Errors metric. Click Download to download the detailed error message of a usage file.

-   Performance tab: This tab displays the data of the Usage File Import Performance metric.


After you open a tab in the dashboard, you can take the following steps to view the data.

-   [Configure filters](#concept-7dldouiz__configure_filters)

-   [View the trend charts](#concept-7dldouiz__view_trend_charts)


## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon. You can use the Timeframe , Start Time , and End Time filters to filter the time range from which you want to view the data. Also, you can use the Type filter to filter the imports from the API or Zuora UI.

-   Click Apply to apply the filter or click Reset to go back to the default filter configuration.


## View the trend charts

-   Select the time interval of the charts using the interval radio buttons in the upper right of the chart. Note that available interval options vary based on the length of the selected time range. Only the Day Interval is enabled when the range exceeds 60 hours.

-   When hovering over each bar or point, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.

-   Use the table below the trend chart to view detailed data within the selected time range.

    -   By default, the table displays all the items within the specified time range. You can narrow the scope to a specific interval by clicking a bar in the chart. To return to the global time range set in the filter, click Reset next to the specific time range displayed above the chart.

    -   Click the download icon ![Download csv icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35895874-e697-4ad2-a744-1c6e7ae36d00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1ODk1ODc0LWU2OTctNGFkMi1hNzQ0LTFjNmU3YWUzNmQwMCIsImV4cCI6MTc2NjYzOTM2NCwianRpIjoiMTU1OGYzYTUzYmJhNGU0ZGFmYmY1N2VkMjA2N2VmNjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EPiNDGI-XEyhp2VXTMmGk2fJ2SvN7jEcR-jU-KwNC50) in the upper right of the table to download the table as a CSV file.

    -   Click the link of the file name displayed in the File Name column to go to the usage file details page.

    -   Click the Submission Time and Completion Time header fields to sort the data.
