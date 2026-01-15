---
title: "MRR (Contracted) Changes Export"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-exports/mrr-contracted-changes-export"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:49.908Z"
---

# MRR (Contracted) Changes Export

Learn about MRR (Contracted) Changes export

The MRR (Contracted) Changes export summarizes contracted Monthly Recurring Revenue (MRR) changes when new subscriptions or amendments are created.

Contracted MRR is the expected MRR that accounts future upgrades, downgrades, upsells, and cancelations.

Monthly recurring revenue (MRR) calculates subscription recurring fees normalized to a monthly value.

See [Monthly Recurring Revenue](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue) for information on how MRR is calculated.

Note:

Supplementing the standard Zuora MRR that does not include discounts in the calculation, this export includes the impact of discounts at the subscription level and rate plan level. For example, if a 10% discount is applied to a rate plan on a $100 charge, the reported MRR value is $90.

Note:

This feature is deprecated and is not enabled by default. If you need to get insights about your subscription businesses, Zuora recommends Zuora Analytics.

This feature is unavailable if you have the Orders or Order Metrics feature enabled. See [Order Metrics](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics) for more information.

## Export description

This export provides a summary of contracted MRR categorized by changes resulting from new subscriptions and amendments.

The following shows MRR contracted values grouped by customer account and viewed by month for a year timeframe starting on May 21, 2014.

![MRR Contracted Momentum Report Exported to .CSV File](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f8a5f543-8d3d-4ea8-9e67-b15aa26e0ac2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4YTVmNTQzLThkM2QtNGVhOC05ZTY3LWIxNWFhMjZlMGFjMiIsImV4cCI6MTc2ODYwMDk2NCwianRpIjoiYWEwOTFiN2UwOTE4NDE3ZWJmNTk1YTM3NTdlYjg3MWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.g48QBXsKMIF-wg4nnol2wsGYdoAuikMSGJxY7VbJxMY)

## How data is exported

The MRR (Contracted) Changes export uses the criteria in the next two sections "Amendment create date" and "MRR contracted categories" to export data.

## Amendment create date

The contracted MRR value is based on the date when the amendment was created, not when change becomes effective.

## MRR contracted categories

The following describes how MRR contracted values are grouped:

-   New Bookings: MRR changes by new subscription

-   Upgrades: MRR increase by amendment

-   Downgrades: MRR decrease by amendment

-   Cancellations: MRR changes by canceled subscription

-   Renewals: MRR changes by renewal amendment

-   Non-renewals: MRR changes by non-renewal subscription


## Limitations

See the following sections on this page:

-   Account-level discounts

-   Discount on charge is for a specific period

-   Early renewals and upgrades

-   Export file size


## Account-level discounts

This export does not support account-level discounts. If an account has account-level discounts, the MRR value reported is the full MRR value. The impact of the discount is not factored in.

## Discount on charge is for a specified period

This export does not support discount charges when discount is applied for specified period. The following is an example a product rate plan charge where the charge is discounted for up to 2 periods:

![Discount Charge Options on a Product Rate Plan with Up to Months Specified](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6d2fccb5-4b6d-457b-b0f8-9970bc4dd6e0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZkMmZjY2I1LTRiNmQtNDU3Yi1iMGY4LTk5NzBiYzRkZDZlMCIsImV4cCI6MTc2ODYwMDk2NCwianRpIjoiZWZjNTIyOWM0ZjA3NGVhOWJhMzVkNjBlMTEwOTUzNDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.S57VWraBIeUCQXgoUBsUYgqujykboszDnG8a5n-Djmc)

If the discount charge is for a specified period, such as a 2 periods, the MRR value reported is the full MRR value. The impact of the discount is not factored in.

## Early renewals and upgrades

Early renewals and upgrades contribute to the MRR in the week that the amendment is made rather than according to future dates for effective contract. If for example, a subscription is not set to auto-renew and will expire in two months, if an early renewal is received, the contribution to MRR is reflected in the total MRR immediately.

## Export file size

The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora: `<security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.

We can work with you to determine if large file optimization is an option for you.

## How to filter and export MRR data

The selected View By period and the timeframe to determine the MRR data that is exported to a .csv file for further analysis. The exported data is saved as a .zip file. The downloaded and unzipped file uses the following naming convention: `MRRChangesReport_``20150407201650`, where *20150407201650* is the year, month, day, and time the export was created.

Do the following:

1.  Navigate to Reporting > Exports.
2.  Select MRR (Contracted) Changesfrom Export Data drop-down.
3.  Select your filters:
    -   Group By: Account (only option)
    -   View By: Week, Month, or Quarter
4.  Specify the start and end dates for the Time Frame Duration. The time frame you can specify is based on the selected View By period:
    -   Week: Up to three months, where Sunday is the start of a seven day week
    -   Month: Up to one year
    -   Quarter: Up to three years
5.  Click Export.

## View by week example

![Momentum by week](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3df4828f-ee05-45fb-ad0d-11c98d0628f8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNkZjQ4MjhmLWVlMDUtNDVmYi1hZDBkLTExYzk4ZDA2MjhmOCIsImV4cCI6MTc2ODYwMDk2NCwianRpIjoiOWFjMGUwMzBmZjAzNDI5NzhjNGMwNTc1ZDY5ZmZmMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.zrBWI2aK_5N4reEFNK2luAIJjSndCJV2R5pV2GsbkwM)

For example if viewing MRR by week from January 24, 2015 to May 24, 2015, the time period columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 1/24/2015 |
| Middle Columns | First Day of the Week | 1/24/2015, 1/25/2015, 2/1/2015, 4/19/2015 |
| Last Column | Duration End Date | 4/24/2015 |

## View by monthly example

![Momentum by month](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c9d657c8-fbb2-40d1-a6f5-c196ad5f8c84?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM5ZDY1N2M4LWZiYjItNDBkMS1hNmY1LWMxOTZhZDVmOGM4NCIsImV4cCI6MTc2ODYwMDk2NCwianRpIjoiZGFlZjZjNDVkNjQ4NDhkNGJkNjViY2FmOTM3NjBlMWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.0mW3FXbjz5ku21x3xmxouKT8PRVNw_mzZ22fF7wqNsk)

For example if viewing MRR by month for the last 12 months, the time period columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 4/21/2014 |
| Middle Columns | First Day of the Month | 5/1/2014, 7/1/2014, 1/1/2015 |
| Last Column | Duration End Date | 4/21/2015 |

## View by quarter example

![Momentum by quarter](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ebf68d84-b2f3-470b-bf58-45427dd0ea3b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImViZjY4ZDg0LWIyZjMtNDcwYi1iZjU4LTQ1NDI3ZGQwZWEzYiIsImV4cCI6MTc2ODYwMDk2NCwianRpIjoiNGI5ODk5ZjU4N2Y3NDViMWJlNDA0NGFhNDIwOTBhMjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.t0itX-DI5e0j3SaFjKWne_Y9BLRZ87ljm13du3_c_o8)

For example if viewing MRR by quarter from April 24, 2015, the columns represent the MRR values as follows:

| Time Period Column | MRR as of | Example |
| --- | --- | --- |
| First Column | Duration Start Date | 4/24/2014 |
| Middle Columns | First Day of the Quarter | 5/1/2014, 8/1/2014, 11/1/2015 |
| Last Column | Duration End Date | 4/24/2015 |

## Export column descriptions

| Column | Description |
| --- | --- |
| Account Number | The unique account number assigned during creation to the customer account. |
| Customer Name | The name of the customer account. |
| Currency Code | The currency code associated with the transaction. |
| MRR (Contracted) | Categorized contracted MRR values by account. |
| Date Columns (MRR values) | The reported MRR values in these columns are as-of the date specified in the column headings. The dates and the timeframe will vary based on the View By filter and Timeframe you select when exporting. |
