---
title: "Electronic Payments dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/payment/electronic-payments-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:43.852Z"
---

# Electronic Payments dashboard

A dashboard that collects and displays usage, failure, and performance data about electronic payments

Zuora System Health dashboard for Electronic Payments (Electronic Payment dashboard) collects and displays usage, failure, and performance data about electronic payments in near real time. It enables you to view all the electronic payments in your Zuora tenant within the last 30 days. You can use this dashboard to identify and troubleshoot issues with electronic payments.

For more information about the System Health feature, see [Zuora System Health](/zuora-platform/system-management/zuora-system-health).

## Prerequisites

For more information, see Zuora System Health [prerequisites](/zuora-platform/system-management/zuora-system-health#concept-00qhbv71__system_health_prerequisites).

## Access the Electronic Payments dashboard

To access the Electronic Payments dashboard, navigate to Administration > System Health > Electronic Payments in the left navigation menu.

Next, refer to [Electronic payment metrics](/zuora-platform/system-management/zuora-system-health/payment/electronic-payments-dashboard/electronic-payment-metrics).

## View data in the Electronic Payments dashboard

The Electronic Payments dashboard is located under the Administration > System Health section in the left navigation menu. It contains three tabs that display the electronic payment usage, failures, and performance data separately.

After opening a tab, take the following steps to view the data:

-   [Configure filters](#concept-hn8htebx__configure_filters)

-   [View the trend charts](#concept-hn8htebx__view_trend_charts)


## Configure filters

You can customize the data to be displayed by using the filters.

-   Click the Filters icon to expand the filter in the upper right of the dashboard.

-   Use the Time Frame, Start Time, and End Time fields to specify the time range.

-   Use the Gateway and Payment Method lists to select the Gateway and Payment Method you want to view. On the Failures tab, you can also select the type of response code and currency to view.

-   Click Apply to apply the filters, or click Reset to go back to the default filter configuration.


## View the trend charts

-   Select the time interval of the charts using the interval radio buttons on the top right of the chart. Note that available interval options vary based on the length of the selected time range.

-   When hovering over each time interval, you can view detailed data of that time range, which also displays the change percentage compared to the previous interval.

-   On the Failures tab, the trend chart displays data differently depending on the filters that have been applied. You can drill down the data by clicking a bar on the chart.

-   On the Performance tab, you can choose to hide or display lines on the chart by clicking the corresponding icon of a line.

-   Use the table below the trend chart to view the breakdown data within the selected time range.

    -   By default, the table displays all the data within the specified time range. You can narrow the scope down to a specific interval by clicking a bar in the chart. The Summary pane will be automatically updated to display the summary of the selected data set.

    -   On the Failures tab, use the filter in the upper right of the table to list the data you want to view. You can use the filter to retrieve failed electronic payments by payment method, response code, amount, currency, and the number of failed payments for a payment gateway. When you finish configuring the filter, click Apply. You can click Clear to un-apply the configuration.

    -   Some columns can be used to sort the data. You can click the header of a column to see if the data can be sorted by this column.

    -   You can download the table as a CSV file by clicking the download icon ![Download csv icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b0cbaacc-f863-4301-8f73-ea0819282e66?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIwY2JhYWNjLWY4NjMtNDMwMS04ZjczLWVhMDgxOTI4MmU2NiIsImV4cCI6MTc2NjYzOTM4MSwianRpIjoiNGEwZjNhODRkNDQ2NDE2M2JhNzQ0YTZlZmNhZGIxM2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FUCb-CHVt0KdK36QGhLkovLw5HK8FPiVMtFlyXDr-8Q) in the upper right of the table.

    -   On the Failures tab, you can view the details of a payment error by clicking Details of that failed payment. In the expanded view, you can view the following information:

        -   Zuora Response Code

        -   Gateway Response Code

        -   Gateway Response Message

        -   Recommended Actions

        -   You can view details of the payment and the payment run processed the payment by clicking the corresponding payment number or source ID.
