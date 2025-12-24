---
title: "View data in the E-Invoice dashboard"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/billing/e-invoice-dashboard/view-data-in-the-e-invoice-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:13.406Z"
---

# View data in the E-Invoice dashboard

Collects and displays data about e-invoicing usage, failure, and transactions being processed in near real time

The E-Invoice dashboard contains a Data Summary section and three tabs displaying the usage, failures, and transactions being processed that are related to E-Invoicing separately.

-   Data Summary section: This section contains the following data boxes that display near real-time data summaries within the last seven days.
    -   Total Count: This data box displays the total number of e-invoicing transactions within the last seven days, and the week-over-week change in the number.
    -   Total Failures: This data box displays the total number of failed e-invoicing transactions within the last seven days, and the week-over-week change in the number.
-   Overview tab: This tab displays the data of the E-Invoice Usage metric.
-   Failures tab: This tab displays the data of the E-Invoice Failures metric.
-   Processing tab: This tab displays a list of e-invoicing transactions being processed by tax authorities or Zuora.

After you open a tab in the dashboard, take the following steps to view the data:

-   [Configure filters](#concept-rsa8yf3u__configure_filters)
-   [View the trend chart](#concept-rsa8yf3u__view_the_trend_chart)

## Configure filters

You can customize the data to be displayed by configuring filters.

1.  In the upper right of the dashboard, click the Filters icon.
2.  Use the Timeframe, Start Time, and End Time fields to specify the time range.
3.  From the Document Type list, select a billing document type.
    -   Credit Memo
    -   Debit Memo
    -   Invoice
4.  From the Transaction Type list, select a transaction type:
    -   Cancellation: Transactions for cancelling previous clearance transactions that were successfully processed by tax authorities.
    -   Clearance: Transactions in the clearance model. E-invoicing transactions for tax authorities via service providers (such as Sovos) must be either in the clearance or post-audit model. Currently, Zuora supports only clearance transactions.
    -   PEPPOL: Transactions for generating e-invoice files in PEPPOL format. For more information, see [E-invoicing with PEPPOL](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Leverage_advanced_capabilities/E-Invoicing/AE_E-invoicing_with_PEPPOL).
    -   PostAudit: Transactions in the post-audit model. E-invoicing transactions for tax authorities via service providers (such as Sovos) must be either in the clearance or post-audit model. Currently, Zuora supports only clearance transactions.
5.  Available only in the Overview tab: From the EInvoice Status list, select a status:

    -   Cancelled
    -   CancelFailed
    -   Failed
    -   Success
    -   Generated

    If you have specified a transaction type in the Transaction Type list, you can select statuses only supported by that type. The following table lists the supported statuses of each transaction type.
    | Transaction type | Supported status |
    | --- | --- |
    | Cancellation | CancelFailedCancelled |
    | Clearance | FailedSuccess |
    | PEPPOL | FailedGenerated |
    | PostAudit | FailedSuccess |

6.  In the Document Number field, specify the billing document number associated with the e-invoicing transaction you want to view.
7.  Click Apply to apply the filter, or click Reset to go back to the default filter configuration.

## View the trend chart

-   Select the time interval of the chart by using the interval radio buttons in the upper right of the chart.Note that available interval options vary based on the length of the selected time range.
-   When hovering over each bar, you can view the breakdown data of the specific time range, which contains the change percentage compared to the previous interval.
-   Use the table below the trend chart to view detailed data within the selected time range.
    -   By default, the table displays all the items within the specified time range. You can narrow the scope down to a specific interval by clicking a bar in the chart.
    -   To go back to the global time-range set in the filter, you can click Reset next to the specific time range displayed above the bar chart.
    -   You can use the Filter icon ![icon-filter.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/045e0395-81ba-465d-b7e5-7626241fb66a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA0NWUwMzk1LTgxYmEtNDY1ZC1iN2U1LTc2MjYyNDFmYjY2YSIsImV4cCI6MTc2NjYzOTM1MCwianRpIjoiNTJjZmE2ZDBlODcwNDkzZGJiZDlkZmU5NmYxMTkwMmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.y1daEyIoMkAc_UShpfd-2vH8hUZzKIZ4vjruSl7Cnfw) in the upper right of the table to list the data that you want to view. When you finish configuring the filter, click Apply. Click Clear to go back to the default filter configuration.
    -   You can download the table as a CSV file by clicking the download icon ![icon-download-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35895874-e697-4ad2-a744-1c6e7ae36d00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1ODk1ODc0LWU2OTctNGFkMi1hNzQ0LTFjNmU3YWUzNmQwMCIsImV4cCI6MTc2NjYzOTM1MCwianRpIjoiNzlhMzEyYTk1ZDkyNDA2MGI5NjlhYjFmNzQ2NTAwY2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-V9M5g8PVJTuDLIU3Exny03BCxEtvU2fE52UK9fC50s) in the upper right of the table.
    -   You can click the header of a column to sort the data.
    -   You can view the related billing document by clicking the document number.
    -   You can view the related account by clicking the account number or name.
