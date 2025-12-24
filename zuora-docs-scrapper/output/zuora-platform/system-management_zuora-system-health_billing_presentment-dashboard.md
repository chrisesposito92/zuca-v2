---
title: "Presentment dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/billing/presentment-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:16.312Z"
---

# Presentment dashboard

Collects and displays data about billing document presentment usage, failure, and performance in near real time

Zuora System Health dashboard for Presentment (Presentment dashboard) collects and displays data about billing document presentment usage, failure, and performance in near real time. Through the Presentment dashboard, you can view data about all the billing document presentments in your Zuora tenant within the last 30 days. You can use this dashboard to detect and troubleshoot presentment issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Presentment dashboard

To access the Presentment dashboard, navigate to Administration > System Health > Presentment in the left navigation menu.

For information on Presentement metrics, refer to [Presentment metrics](/zuora-platform/system-management/zuora-system-health/billing/presentment-dashboard/presentment-metrics)

## View data in the Presentment dashboard

The Presentment dashboard is located under the Administration > System Health section in the left navigation menu. It contains a data summary section and three tabs that display the usage, failure, and performance data related to billing document presentments separately.

-   Data Summary section: Located at the top of the dashboard, this section contains the following data boxes that display real-time data summaries within the last 30 days.

    -   Total : This data box displays the total number of successful and failed billing document presentment calls sent to Zuora within the last 30 days, and the week-over-week change in the number.

    -   Success : This data box displays the total number of successful billing document presentment calls sent to Zuora within the last 30 days, and the week-over-week change in the number.

    -   Failed : This data box displays the total number of successful and failed billing document presentment calls sent to Zuora within the last 30 days, and the week-over-week change in the number.

-   Overview tab: This tab displays the data of the Presentment Usage metric.

-   Failures tab: This tab displays the data of the Presentment Failures metric.

-   Performance tab: This tab displays the data of the Presentment Performance metric.


After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-dirgvqbc__configure_filters)

-   [View the trend chart](#concept-dirgvqbc__view_trend_chart)


## Configure filters

You can customize the data to be displayed by configuring filters.

-   In the upper right of the dashboard, click the Filters icon.

-   Use the Timeframe , Start Time , and End Time fields to specify the time range, and use the Document Type and Template Format fields to specify billing document type and template format.

-   Available only in the Failures tab: Select a specific error category from the Error Category list, and search for a document number in the Document Number field if needed.

-   Click Apply to apply the filter, or click Reset to go back to the default filter configuration.


## View the trend chart

-   Select the time interval of the chart by using the interval radio buttons in the upper right of the chart. Note that available interval options vary based on the length of the selected time range.

-   When hovering over each bar, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.

-   Use the table below the trend chart to view detailed data within the selected time range.

    -   By default, the table displays all the items within the specified time range. You can narrow the scope down to a specific interval by clicking a bar in the chart.

    -   To go back to the global time-range set in the filter, you can click Reset next to the specific time range displayed above the bar chart.

    -   You can download the table as a CSV file by clicking the download icon ![Download csv icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35895874-e697-4ad2-a744-1c6e7ae36d00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1ODk1ODc0LWU2OTctNGFkMi1hNzQ0LTFjNmU3YWUzNmQwMCIsImV4cCI6MTc2NjYzOTM1NCwianRpIjoiZWRjMTk0YzVjZDc1NDQ2Y2FlYzYwZTU3ZDRiYjMxNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1S6z-YpaQJMTDTQHbLacruLe-YfA0nJg3IC4Cnic0Ko) in the upper right of the table.

    -   You can click a header of a column to sort the data. In the Failures tab, you can view the details of a billing document presentment error in the table below the trend chart.

    -   You can click the link of a billing document number displayed in the table to go to the billing document details page.
