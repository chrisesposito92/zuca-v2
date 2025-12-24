---
title: "Standard Cash reports"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-quick-reference/standard-reports/standard-cash-reports"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:12.199Z"
---

# Standard Cash reports

This reference lists the outcomes, drivers, and actions of Standard Cash reports

## Outcomes

| Report | Description |
| --- | --- |
| Credit memo application items over time | The amount of credit memo application items, grouped by month. Only available if you have the Invoice Settlement feature enabled.This report is based on the Credit Memo Application Item data source. |
| Payment application items over time | The amount of payment application items, grouped by month. Only available if you have the Invoice Settlement feature enabled. Part of the Invoice Item Settlement feature.This report is based on the Payment Application Item data source. |
| Payments over time | The total of payments by month.This report is based on the Payment data source. |
| Refund application items over time | The amount of refund application items, grouped by month. Only available if you have the Invoice Settlement feature enabled. Part of the Invoice Item Settlement feature.This report is based on the Refund Application Item data source. |
| Refunds over time | The total amount refunded by month.This report is based on the Refund data source. |
| Unapplied payment amounts over time | The amount of unapplied payment amounts, grouped by month. Only available if you have the Invoice Settlement feature enabled.This report is based on the Payment data source. |

## Drivers

| Report | Description |
| --- | --- |
| First time payment success trend | The number of successes and failures during the initial attempt to collect payment, over the current and previous 3 months.This report is based on the Payment data source. |
| Invoice aging | The sum of the balance on all current invoices grouped according to the number of days overdue: Current, 1-30, 31-60, 61-90, and more than 90 days overdue.This report is based on the Invoice data source.Note:This standard report uses the 'Invoice : Days Overdue' field, which is defined as the current date minus the 'Invoice : Due Date,' measured in days. Please note that while it is labeled 'overdue,' it does not consider whether the invoice has an open balance. For example, if an invoice was due 45 days ago and has been paid in full with a zero balance, the value of this field would still be 45, not zero. To report on invoices that have a balance greater than zero, make sure to include the 'Invoice : Balance' field as filter criteria in your report, as this standard report does. |
| Payment errors by error code | The total amount of electronic payments that failed to process for each different payment gateway error code.This report is based on the Payment data source. |
| Payment recovery during retry | The number of successful and failed payments for each retry attempt, including the first attempt, over the current and previous 3 months.This report is based on the Payment data source. |
| Refunds by reason code | The total amount refunded by reason code.This report is based on the Refund data source. |
| Successful and failed payments | The total number of successful and failed payments over the current and previous three months.This report is based on the Payment data source. |

## Actions

| Report | Description |
| --- | --- |
| Accounts with expiring credit cards | A list of customer accounts in the order in which their default payment methods expire. Only accounts with credit cards as default payment methods are included in this report.This report is based on the Account data source. |
| Accounts with largest outstanding balances | A list of accounts with open balances ordered by the size of their outstanding balance.This report is based on the Account data source. |
| Accounts with recent payment errors | The total number of payments with errors by account for the past three months.This report is based on the Account data source. |
| Accounts with unused credit balance | A list of accounts with non-zero credit balances that may be applied to invoices or refunded.This report is based on the Account data source. |
| Invoices with negative balances | A list of invoices with negative balances.This report is based on the Invoice data source. |
| Longest outstanding invoices | A list of invoices with non-zero balances ordered in the order of when overdues are.This report is based on the Invoice data source. |
