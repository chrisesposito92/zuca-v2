---
title: "Run Rate Plan Charge Booking report"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation_1/run-rate-plan-charge-booking-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:41.052Z"
---

# Run Rate Plan Charge Booking report

The Rate Plan Charge Booking report provides booking information about the following transaction lines within rate plan charges:

-   Transaction lines that are collected by Zuora Revenue and grouped into revenue contracts

-   Transaction lines in Zuora Revenue staging tables that are not collected by Zuora Revenue

-   Transaction lines from Zuora Billing that fail the data sync and/or data transformation process


Compared with the previous Zuora Revenue Booking report, which includes the transaction lines in revenue contracts only, the Rate Plan Charge Booking report extends the scope to also include the transaction lines that exist in Zuora Billing but are not collected by Zuora Revenue for various reasons.

## About this task

A predefined layout named Rate Plan Charge Booking Layout is provided by default. The last updated date of the rate plan charge is used as a key filter criterion to run this report. The Source column in the default layout indicates the source of each transaction line.

Use the predefined layout to get started with the report quickly. After you are familiar with this report, you can customize the report filter or layout based on your own needs. For information about the common usage of Zuora Revenue reporting functionality, see [Work with reports](/zuora-revenue/month-end-process/reports).

## Procedure

Complete the following steps to run the Rate Plan Charge Booking report in the Zuora Revenue UI:

1.  Navigate to Reports > Run Reports.

2.  Click the Transactions tab and locate the Rate Plan Charge Booking report.

3.  Select the appropriate report layout from the drop-down list. Rate Plan Charge Booking Layout is the predefined standard one.

4.  Click Report Detail. The Rate Plan Charge Booking Report page is displayed.

5.  In the Filters section, specify the following required filter fields and then click Run Report. The data is displayed for the filtered rate plan charges.

    | Filter field | Description |
    | --- | --- |
    | Charge Last Update Date | Specify the last updated date range for the target rate plan charges. For example, you can filter out the rate plan charges that are updated during a specific period. |
    | Entity Id | If multi-entity is enabled in Zuora Billing, specify the Zuora Billing entity ID for which you want to query the data. If multi-entity is not enabled in Zuora Billing, specify the Billing tenant ID. |
    | Book Id | If there are multiple revenue books enabled in Zuora Revenue, specify the target revenue book ID |

6.  (Optional): To download the generated report, click the export icon. The report is downloaded as a spreadsheet.

## What to do next

After all the required reports are generated, you can do report reconciliation to identify the issues that might cause data inconsistencies among different reports.
