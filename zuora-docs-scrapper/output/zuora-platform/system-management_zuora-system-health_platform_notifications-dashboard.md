---
title: "Notifications dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/notifications-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:24.471Z"
---

# Notifications dashboard

A dashboard that collects and displays data about notification usage, performance, and failure in near real time

Zuora System Health dashboard for Notifications (Notifications dashboard) collects and displays data about notification usage, performance, and failure in near real time. It enables you to view all the email and callout notifications in your Zuora tenant within the last 30 days. You can use this dashboard to detect and troubleshoot notification issues.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see Zuora System Health [prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Notifications dashboard

To access the Notifications dashboard, navigate to Administration > System Health > Notifications in the left navigation menu.

Next, refer to [Notification metrics](/zuora-platform/system-management/zuora-system-health/platform/notifications-dashboard/notification-metrics).

## View data in the Notifications dashboard

The Notifications dashboard is located under the Administration > System Health section in the left navigation menu. It contains a Data Summary section and three tabs that display the usage, performance, and failures data separately.

From the Data Summary section, you can get an overview of the data within the last 7 days, and the change percentage compared to the previous interval.

After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-605hpw6q__configure_filters)

-   [View the trend chart](#concept-605hpw6q__view_trend_chart)


## Configure filters

You can customize the data to be displayed by using the filters.

-   In the upper right of the dashboard, click the Filters icon.

-   Use the Timeframe, Start Time, and End Time fields to specify the time range.

-   Use the Notification Type list to select the type of notifications you want to view.

-   Use the Event Category list to specify the event category to narrow down the data. The drop-down list automatically lists the event categories that are issued in the specified time range.

-   Use the Response Code list to specify the HTTP response status code to narrow down the data. The drop-down list automatically lists the status codes that are issued in the specified time range. This field is applicable only to the Failures tab with the Callout notification type.

-   Select the Only include the permanent callout failures checkbox to display only permanent callout failures, where the attempt number equals the maximum number of delivery attempts. For more information about the maximum attempts setting, see [Configure callout settings](/zuora-platform/extensibility/events-and-notifications/configure-callout-settings). Note that selecting this checkbox does not affect the triggering of the System Health Notification Callout Failure event. All callout failures, both temporary and permanent, are counted toward this event. For more information, see [Standard events for Zuora Central Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).

-   Click Apply to apply the filter, or click Reset to go back to the default filter configuration.


## View the trend chart

-   Select the time interval of the chart by using the interval radio buttons in the upper right of the chart. Note that available interval options vary based on the length of the selected time range. In the Overview tab, the data is categorized by event category by default, and the interval options are available only after you select a specific event category in the filter.

-   When hovering over each bar, you can view the breakdown data of that time range, which contains the change percentage compared to the previous interval.

-   Use the table below the trend chart to view detailed data within the selected time range.

    -   By default, the table displays all the items within the specified time range. You can narrow the scope down to a specific interval or event category by clicking a bar in the chart.

    -   In the Overview tab, you can click the link in the Failed column to redirect to the Failures tab, which contains all the failures of a specific notification type and event category.

    -   In the Failures tab, use the filter in the upper right of the table to list the data you want to view. When you finish configuring the filter, click Apply. Click Clear to reset the configuration. You can use this filter to retrieve failed email notifications by event category, failed reason and subject, and failed callout notifications by event category, response code, request URL and attempt number.

    -   In the Failures tab with the Email notification type, you can view the details of a failed email notification by clicking Details.

    -   You can download the table as a CSV file by clicking the download icon ![Download csv icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/79ca2457-b8ff-45cf-a8cb-d0c5219285f4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc5Y2EyNDU3LWI4ZmYtNDVjZi1hOGNiLWQwYzUyMTkyODVmNCIsImV4cCI6MTc2NjYzOTQyMiwianRpIjoiZjE2NTc3NWM1ZjI3NGU1NThkMWZjNWQxNDI1YjMwOGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HaZzC43SQCtq5grXp85gdHmfMhMr8qKrtz9C8OtEvf8) in the upper right of the chart.

    -   You can click the header of a column to sort the data.
