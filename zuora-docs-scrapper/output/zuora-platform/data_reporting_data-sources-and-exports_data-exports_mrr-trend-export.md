---
title: "MRR Trend Export"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-exports/mrr-trend-export"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:50.293Z"
---

# MRR Trend Export

Learn about the MRR Trend Report

The MRR Trend Report provides as-of-date monthly recurring revenue (MRR) data.

View MRR data by weekly, monthly, or quarterly periods over a specified timeframe. Export this report to analyze the past, present, and future MRR trends, net of discounts.

Monthly recurring revenue (MRR) calculates subscription recurring fees normalized to a monthly value.

See [Monthly Recurring Revenue](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue) for information on how MRR is calculated.

Note:

Supplementing the standard Zuora MRR that does not include discounts in the calculation, this report includes the impact of discounts at the subscription level and rate plan level. For example, if a 10% discount is applied to a rate plan on a $100 charge, the reported MRR value is $90.

Note:

This feature is deprecated and is not enabled by default. If you need to get insights about your subscription businesses, Zuora recommends Zuora Analytics.

This feature is unavailable if you have the Orders or Order Metrics feature enabled. See [Order Metrics](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) for more information.

## Report description

Each row represents an account's MRR value over a specified timeframe. Each time column represents the MRR value starting as of the duration start date. The next set of columns represents the MRR value as of the first day of each period. For example, such as:

-   First day of the week

-   First day of the month

-   First day of the quarter


The last column is the MRR value as of the duration end date.

The following shows the MRR values viewed by month, for last 12 months (click image to see a larger view).

![MRR Trend Export Filtered by Account and View by Month for the Last 12 Months](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a951e7c8-0519-4d58-812f-adbd2eb34f4a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5NTFlN2M4LTA1MTktNGQ1OC04MTJmLWFkYmQyZWIzNGY0YSIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiZjJmYjQwMjUzYmRkNDlmMjliZjlhZGNiMmEzODY3OTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.YNX81uFwuSy1l24__GQlnV4xoXyhTID7Kit0A4vGVGM)

## Limitations

To know about the limitations, refer to the following sections on this page:

-   Account-level discount

-   Data in inactive account

-   Export file size


## Account-level discount

This report does not support account-level discounts. If an account has account-level discounts, the reported MRR value is the full MRR value - the impact of the discount is not factored in.

## Data in inactive account

The MRR Trend report will not include any data from the account that is in Inactive status.

## Export file size

The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora: `<security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.

We can work with you to determine if large file optimization is an option for you.

## How to filter and export MRR data

The selected View By period and the timeframe determines the MRR data that is exported to a .csv file for further analysis. The exported report is saved as a .zip file. The downloaded and unzipped file uses the following naming convention: `MRRTrendReport_20150407201650`, where *20150407201650* is the year, month, day, and time the export was created.

Navigation: Reporting > Exports​

![Filter and Timeframe Options for MRR Trend Report](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bd04ce94-565a-42bd-a0a4-afe945db852a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJkMDRjZTk0LTU2NWEtNDJiZC1hMGE0LWFmZTk0NWRiODUyYSIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiYWQ3YmRmMWJjYTcyNGU5Y2E5NDY3ZDJjNTI2YmZkNzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.tylFM7JYpQD4CLYUWY8oyfRn9sw5yvusfcNN2vz_85E)

Procedure

1.  Select MRR (As of Day) Trend from Export Data drop-down.
2.  Select your filters:
    -   Group By: Account (only option) controls
    -   View By: Week, Month, or Quarter
3.  Specify the start and end dates for the Time Frame Duration.The timeframe you can specify is based on the selected View By period:
    -   Week: Up to three months, where Sunday is the start of a seven day week
    -   Month: Up to one year
    -   Quarter: Up to three yearsIf you must export data beyond these timeframes, run several exports with different start and end dates to cover your required reporting ranges.
4.  Export.

## View by week example

![MRR weekly](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/50669efe-73b2-49de-bfa5-d2fa016c1563?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUwNjY5ZWZlLTczYjItNDlkZS1iZmE1LWQyZmEwMTZjMTU2MyIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiNjgzZmVlMzBjYWNmNDhlZWI2ODcyNWYyZGEzMDFkMTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.OAbr_WGdLFFF9_YvxrPsd0HVCu2sAaFFTNNCOYlnAXk)

For example if viewing MRR by week from July 8, 2015 to October 8, 2015, the time period columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 7/8/15 |
| Middle Columns | First Day of the Week | 7/12/15, 7/26/15, 9/27/2015, 10/4/2015 |
| Last Column | Duration End Date | 10/8/2015 |

## View by month example

![MRR monthly](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/82997f29-d0d1-42c9-b9f2-3e22bd52016d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyOTk3ZjI5LWQwZDEtNDJjOS1iOWYyLTNlMjJiZDUyMDE2ZCIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiYmEzZTNiZWQxNzg0NDQzOTkwOGY3NWE2OTgwYTcyZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.aKtA4Zo4OgRCvhw6P5vSvMx1NoGGM4U8WwVy40oHV74)

For example if viewing MRR by month for the last 12 months, the time period columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 10/8/2014 |
| Middle Columns | First Day of the Month | 11/1/2014, 12/1/2014, 1/1/2015 |
| Last Column | Duration End Date | 10/8/2015 |

## View by quarter example

![MRR quarterly](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/aa4bbe41-8798-4031-a3ea-290c360c058d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFhNGJiZTQxLTg3OTgtNDAzMS1hM2VhLTI5MGMzNjBjMDU4ZCIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiZWIyMzFiMTZiNzRmNDIyZGFlMmVlZjQ3NzE2Mzk1ODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.6bdrJ7RMLNHAvHFZh-J-xbaarJ69P6gsYstLSrVvOfs)

For example if viewing MRR by quarter for the last 12 months, the columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 10/8/2014 |
| Middle Columns | First Day of the Quarter | 11/1/14, 2/1/2015, 5/1/2015 |
| Last Column | Duration End Date | 10/8/2015 |

## Export column descriptions

| Column | Description |
| --- | --- |
| Account Number | The unique account number assigned to the customer account on creation. |
| Account | The name of the customer account. |
| Currency Code | The currency code associated with the transaction. |
| Date Columns (MRR values) | The reported MRR values in these columns are as of the date specified in the column headings. The dates and the timeframe will vary based on the View By filter and Timeframe you select when exporting. |
