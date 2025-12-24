---
title: "Overview of Zuora Revenue reports"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/overview-of-zuora-revenue-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:46.148Z"
---

# Overview of Zuora Revenue reports

Zuora Revenue reports provide pre-summarized data for efficient reporting, offering customizable layouts and role-based access. Reports are categorized into Revenue, Transactions, Accounting, and Foreign Exchange, with options to add favorites for quick access.

Zuora Revenue pre-summarizes data for reporting in a report summarization table. Then, based on the report summarization table, up to 50 columns can be displayed in a report for the selected report layout. All reports default to the open accounting period.

Predefined layouts are provided, which can be copied and then customized based on your preferences. Access to reports is controlled at a role-based level in Zuora Revenue.

Zuora Revenue reports are grouped into the following categories in different tabs when you navigate to Reports > Run Reports.

## Revenue

| Report Name | Description |
| --- | --- |
| Billing RollForward Report | A subset of RC Rollforward Report to display the beginning and ending balances and activities for contractual revenue based on billings. |
| Billing Waterfall | Displays revenue waterfall data for billed contractual revenue for a particular invoice (rollout at the line level of contract liability balances). It shows the invoice level details of the Contract Liability account balances. |
| Consumption Usage Waterfall Report | Details the usage of Revenue Waterfall for customers who leverage Zuora Consumption Revenue to manage and automate their consumption based revenue recognition. This report also details the usage revenue scheduled by period. |
| Cost Capitalized Rollforward Report | Displays capitalized cost beginning balances, activities, and ending balances for all cost types. Use this report to reconcile the Capitalized Cost account balances with the GL. |
| Cost Insight | Displays cost activities, cost on hold, and cost that is not posted for each transaction line in detail by cost type, by period, by quarter, by year or contract to date. Use this report to reconcile the PTD, QTD, YTD cost with the GL. |
| Disclosure - Contract Level (Deprecated) | Displays revenue activity based on the Prior Liability, Current Liability, Contract Asset type, and revenue from previously satisfied POBs summarized at the Net Contract Level. |
| Disclosure - Line Level (Deprecated) | Displays revenue activity based on the Prior Liability, Current Liability, Contract Asset type, and revenue from previously satisfied POBs summarized at the Line Level. |
| Financing Accrual Rollforward | Displays the beginning and ending balances of Interest Accrual Accounts and additions and releases for the interval selected. I |
| Financing Insight | Displays financing activity by period, quarter, year, or contract inception to date. |
| Financing Payment Exception Report | Displays unprocessed financing payment schedule information. |
| Historical Waterfall Report | This report displays revenue data for up to 13 periods from any historical period you choose. Use this report to review period-wise breakdowns of the actual revenue activity. |
| Netting Report | Displays the CA amount of the revenue contract when netting is performed at the application level. |
| PSAT/CSAT Line Level Report | Displays the revenue from prior/current satisfied POBs at line level for PSAT (priorly satisfied) and CSAT (currently satisfied.) |
| RC Rollforward Report | Displays beginning and ending balances for Contract Asset or Contract Liability accounts, and activities for the selected period. Use this report to reconcile Contract Liability and Contract Asset account balances with the GL. |
| Revenue Book Comparison Report | Displays a comparison of two revenue books based on ASC 606 or IFRS rules. |
| Revenue Insight | Displays revenue activities, revenue on hold, and revenue that is not posted for each transaction line in details by period, by quarter, by year or contract to date. Use this report to reconcile the PTD, QTD, YTD revenue with the GL. |
| Revenue Summary | Displays a revenue summary for the selected period. |
| Revenue from Prior Period CA/CL Report | Provides option to determine the revenue from Prior Period or Current Period Contract Asset or Contract Liability and Unbilled Revenue Balance for the disclosure requirements. |
| Unbill RollForward Report | A subset of RC Rollforward Report to display beginning and ending balances and activities for contractual revenue that is not billed yet. This report is used for reconciling the Unbilled Receivables account balance with the GL. |
| Unsatisfied POB Balances | Displays the remaining balances for the unsatisfied or partially satisfied POBs. |
| VC Insight | Displays variable consideration revenue activities, VC on hold, and VC that is not posted for each transaction line in detail for each VC type by period, by quarter, by year or by contract to date. Use this report to reconcile the PTD, QTD, YTD variable consideration revenue adjustments with the GL. |
| VC Rollforward Report | Displays variable consideration price adjustments for each VC type and the beginning and ending balances for different period activities. Use this report to reconcile the Unbilled Receivables account balance with the GL. |
| Waterfall Report | Displays waterfall data of the prior period, current period, and future schedules for revenue, cost, and forecasted revenue. This report can be used for the timing of revenue for unsatisfied or partially satisfied POBs. Use this report to reconcile the revenue or cost for the current period. |

## Transactions

| Report Name | Description |
| --- | --- |
| Billing Report | Lists all billings that are associated with revenue contracts in the specified period. |
| Booking Report | Lists all transaction order line (booking) information for revenue contracts in the specified period. |
| Consumption Events Report | Details the rated usage transactions that are to uploaded to Zuora Revenue for end users and customers who leverage Zuora Consumption Revenue to manage and automate their consumption based revenue recognition. |
| Cost Transactions | Lists details of all cost transactions in the specified period. |
| Events Report | Lists all events that are processed in the specified period. |
| Failed RSSP Transaction Report | Displays all transactions that use residual SSP estimate but fail to meet the RSSP minimum. |
| Financing Transaction Details Report | Displays the listing of SFC transactions (estimates/actuals) linked to a revenue contract transaction line. |
| POB Dependencies | Displays information about the performance obligation whose release is dependent on another POB in the contract. |
| POB(s) Released Report | Displays information about the performance obligation whose revenue is released in the specified period. |
| Pricing Orders Report | Displays the pricing order details that increase or decrease sales order lines in the specified period. |
| Reduction Orders Report | Displays details about reduction orders in the specified period. |
| Revenue Contract Detail Report | Displays details about the filtered revenue contracts including revenue allocation information. |
| SSP Optimizer Range | Displays the SSP Optimizer range information for an SSP batch, which is generated during the SSP analysis process. |
| SSP Stratifications | Displays the stratification information that is related to the SSP batch. |
| Transactions Processing Report | Displays the number of transactions and revenue that is processed in the specified period. |
| Unreleased POB(s) Report | Lists the performance obligations that have not been fully released. |
| VC Events Process Report | Displays the processed VC events that are related to VC estimates, actuals, or actual cancelations. |
| VC Transactions | Lists the variable consideration transactions (VC estimates or VC actuals) that are linked to revenue contracts. |

## Accounting

| Report Name | Description |
| --- | --- |
| Accounting Report | Displays detailed information about accounting entries for the specified period. |
| LT/ST Report | Displays the reclass of journal entries of LT/ST for validations. |
| MJE Details Report | Displays detailed information about manual journal entries for the specified period. |
| OnHold Accounting Report | Displays the transactions that are placed on hold for the specified period. |
| Transfer Accounting Errors Report | Displays the errors that occur during the transfer accounting process and indicates which accounting entries do not pass the validation. |

## Foreign Exchange

| Report Name | Description |
| --- | --- |
| Period FX Waterfall | Displays waterfall data that use different exchange rates for functional currency and reporting currency for the specified period. |
| Trial Balance Report | Displays balance information for different accounts in reporting currency that is calculated based on historical rates. The reporting currency is calculated based on the period-end rates for the Balance Sheet account and period average rates for the Income Statement account. |
| Unbilled Fx Report | Lists the transactions that have different exchange rates for the revenue recognized before billing and for the subsequent invoices to track the potential FX gain and loss. Use this report to understand the impact of revenue recognition reversals on previously unbilled transactions for possible FX gain/loss adjustments. |

## All

This tab lists all available reports in Zuora Revenue that are described above.

## Favorites

This tab appears after you add one or more reports to your favorites. Use this tab to quickly access the reports that you frequently need to run.
