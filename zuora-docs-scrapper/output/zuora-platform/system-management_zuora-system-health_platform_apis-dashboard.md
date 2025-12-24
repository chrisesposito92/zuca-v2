---
title: "APIs dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/apis-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:09.143Z"
---

# APIs dashboard

The APIs dashboard in Zuora's System Health provides real-time insights into API usage, failures, performance, and concurrency limits, helping you troubleshoot and optimize API operations.

Zuora System Health dashboard for API (API dashboard) collects and displays data about API usage, failure, performance, and concurrency limit in near real time. It enables you to view all the APIs in your Zuora tenant within the last 14 days. You can leverage this dashboard to identify and troubleshoot request errors or issues that are related to performance or concurrency limits.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see [Zuora System Health prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the APIs dashboard

To access the APIs dashboard, navigate to in the left navigation menu.

## View data in the APIs dashboard

The API dashboard is located under the Administration > System Health section in the left navigation menu. It contains four tabs that display the API usage, failures, performance, and concurrency limits data separately.

After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-5692__configurefilters)
-   [View the trend charts](#concept-5692__viewtrendcharts)

## Configure filters

You can customize the data to be displayed by using the filters.

-   Click the Filters icon to expand the filter in the upper right of the dashboard.
-   Use the Time Frame, Start Time, and End Time fields to specify the time range.
-   Use the API list to select the API operation you want to view. The drop-down list automatically lists the APIs issued in the specified time range.
-   Use the Response Code field to select a type of error code. This field is only available for the Failures data tab.
-   Use the Request ID field to specify the exact API request you want to view.
-   Use the Tracing Identifier field to select API requests with certain `Zuora-Track-Id` prefixes, which are the fields before the first hyphen in the tracking IDs. For example, if the tracking ID of the request is `MUT-2e605612-3e5a-468f-b542-32268e07db0e`", the tracing identifier will be "MUT". Selecting "MUT" in the Tracing Identifier filter will filter out all the requests that have a tracking ID starting with "MUT".
-   Click Apply to apply the filters, or click Reset to go back to the default filter configuration.

Note that the available filtering fields vary depending on which data tab you are viewing. But when switching between two tabs, the values remain the same for the shared fields of these two tabs.

## View trend charts

-   Select the time interval of the trend charts using the interval radio buttons on the top right of the chart. Note that available interval options vary based on the length of the selected time range. When the range is greater than 60 hours, only the Day interval is enabled.
-   When hovering over each time interval, you can view the breakdown data of that time range, which displays the change percentage compared to the previous interval.
-   On the Concurrency Limit tab, you can view when the concurrency exceeded the limit on the trend charts. You can click a time interval on one of the trend charts to view detailed information about all the API requests that constitute the maximum concurrency of that specified time interval in the table below.
-   For the Performance and Concurrency Limit tabs, you can choose to hide or display lines on the charts by clicking the corresponding icons of the lines.
-   Use the table below the bar chart to view detailed data within the selected time range.
    -   By default, the table displays all the data that meets the filtering conditions. You can narrow the scope down to a specific interval by clicking a bar in the chart.Note that the Summary pane will be automatically updated to display the summary of the selected data set.
    -   On the Overview and Failures tabs, you can view details of API errors, such as the HTTP status code and the response body, by clicking Details of a failed request.
    -   For the Concurrency Limit tab, after you've selected a time interval on any of the four trend charts, the table will display data on the maximum concurrency of the selected time interval. Initially, the table displays API operations that happened within the maximum concurrency minute. You can click the Total Requests field of an operation to view details of all the requests of that operation.
    -   Use the filter on the top right of the table to list the data you want to view. When you finish configuring the filter, click Apply. Click Clear to reset the configuration.
        -   You can use the filter to retrieve a specific API error by its request ID or filter by response code or HTTP method. You can also use the Response Time field to specify the range of the response time.

    -   You can download the table as a CSV file by clicking the download icon ![download csv icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35895874-e697-4ad2-a744-1c6e7ae36d00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1ODk1ODc0LWU2OTctNGFkMi1hNzQ0LTFjNmU3YWUzNmQwMCIsImV4cCI6MTc2NjYzOTQwNywianRpIjoiNzFmMTVjNWJlYjllNDk2ZjhjM2QxMzI1ZmIwNzk5NWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xD4oV2rSpV-_lB7n-XzQnucIRRLMhvBTPX608PObE0Q) in the upper right of the table.
    -   Some columns can be used to sort the data. You can click the header of a column to see if the data can be sorted by it.
    -   For operations that are triggered by Workflow, you can go to the Workflow Run pages by clicking the track ID of the operations in the API details table.
