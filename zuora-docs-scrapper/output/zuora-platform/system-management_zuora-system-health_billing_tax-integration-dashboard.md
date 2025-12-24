---
title: "Tax Integration dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/billing/tax-integration-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:21.041Z"
---

# Tax Integration dashboard

Collects and displays data about usage, performance, and error of the integration between Zuora and tax vendors in near real time

Zuora System Health dashboard for Tax Integration (Tax Integration dashboard) collects and displays data about usage, performance, and error of the integration between Zuora and tax vendors in near real time. Through the Tax Integration dashboard, you can view tax integration data from all bill runs, including billing preview runs, in your Zuora tenant within the last 30 days. You can use this dashboard to detect and troubleshoot tax integration issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For the prerequisites of the Tax Integration dashboard, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Tax Integration dashboard

To access the Tax Integration dashboard, navigate to Administration > System Health > Tax Integration in the left navigation menu.

For information on Tax Integration metrics, refer to [Tax Integration metrics](/zuora-platform/system-management/zuora-system-health/billing/tax-integration-dashboard/tax-integration-metrics)

## View data in the Tax Integration dashboard

The Tax Integration dashboard is located under the Administration > System Health section in the left navigation menu. It contains a Data Summary section and three tabs that display the usage, error, and performance data related to Tax Integration separately.

-   Data Summary section: This section is located at the top of this dashboard, encompassing the following data boxes that display data summaries within the last seven days.

    -   Total Tax Transaction : This data box displays the total number of successful and failed tax calls sent to a tax vendor within the last seven days and the week-over-week change.

    -   Total Failures : This data box displays the total number of failed tax calls sent to a tax vendor within the last seven days and the week-over-week change.

    -   Avg. Tax Transaction Duration : This data box displays the average execution duration (measured in milliseconds) of tax transaction within the last seven days and the week-over-week change.

-   Overview tab: This tab displays the data of the Tax Integration Usage metric.

-   Failures tab: This tab displays the data of the Tax Integration Errors metric.

-   Performance tab: This tab displays the data of the Tax Integration Performance metric.


After you open a tab in the dashboard, you can take the following steps to view the data.

-   [Configure filters](#concept-lzgibhya__configure_filters)

-   [View the trend charts](#concept-lzgibhya__view_trend_charts)


## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon.

-   Use the Timeframe , Start Time , End Time , Vendor Name , Event Type , and Status fields to specify the data you want to view. The Vendor Name list displays the tax vendors that your tenant is using by default. The Event Type list displays different event types including Tax Call, Override Call, Preview Call, and Cancel Call. Specifically, Tax Call indicates tax generation.

-   Click Apply to apply the filter, or click Reset to go back to the default filter configuration.


## View the trend charts

-   Select Day , Hour , or Minute as the time interval of the charts in the upper right of the chart. Note that available interval options vary based on the length of the selected time range. Only the Day Interval is enabled when the range is greater than 60 hours.

-   When hovering over each bar or point, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.

-   Use the table below the trend chart to view detailed data within the selected time range. The detailed tables are available under the Overview and Failures tabs.

    -   By default, the table displays all the items within the specified time range. You can narrow the scope to a specific interval by clicking a bar in the chart. To go back to the global time-range set in the filter, click Reset next to the specific time range displayed above the chart.

    -   Click the Filter icon in the upper right of the table to list the data that you want to view. When you finish configuring the filter, click Apply . Click Clear to go back to the default filter configuration.

    -   Click the download icon ![Download csv icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35895874-e697-4ad2-a744-1c6e7ae36d00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1ODk1ODc0LWU2OTctNGFkMi1hNzQ0LTFjNmU3YWUzNmQwMCIsImV4cCI6MTc2NjYzOTM1OSwianRpIjoiMTQ0ZTgzOTVhNDM2NDAxMThlZjE5MTg1ZDlhZGJmZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.L3arxROf1sQYuzb-izrBm8kW8VmdHMJLl79DImgIo_0) next to the Filter icon to download the table as a CSV file.

    -   Click the link of an account name displayed in the table to go to the account details page.

    -   Click the link of Download displayed in the Vendor Request and Vendor Response column to download the corresponding txt file of the request and response log from tax vendors.

    -   View the Zuora internal identifiers of the API calls in the Request ID column. You can find the corresponding value in the API response header.

    -   Click the link of Details at the end of the row to view the corresponding detailed error message.

    -   Click a header field to sort the data.
