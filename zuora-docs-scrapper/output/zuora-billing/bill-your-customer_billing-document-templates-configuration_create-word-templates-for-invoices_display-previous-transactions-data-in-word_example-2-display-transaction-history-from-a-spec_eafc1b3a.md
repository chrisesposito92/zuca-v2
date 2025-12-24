---
title: "Example 2: Display Transaction History From a Specified Date Range"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word/example-2-display-transaction-history-from-a-specified-date-range"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:47.433Z"
---

# Example 2: Display Transaction History From a Specified Date Range

This example demonstrates how to use the UpToDaysOld filter to display transaction history from a specified date range.

This example shows you how to use the `UpToDaysOld` filter to display transactions from a specified number of days ago.

Two invoices are posted:

-   INV00000001: Invoice is posted on 02/10/2012, a processed payment and payment date on 02/12/2012, a processed adjustment and adjustment date on 02/17/2012.

-   INV00000002: Invoice is posted on 03/01/2012.


Customize the Template

The following table shows the `UpToDaysOld` filter in the Transaction Date column, which will display transactions up to 60 days old (default value). The maximum value is 180 days.

To display transactions up to a specific number of days:

-   90 days old, replace the default string `<<TableFilter:UpToDaysOld>>` with `<<TableFilter:UpToDaysOld 90>>` .

-   30 days old, replace the default string `<<TableFilter:UpToDaysOld>>` with `<<TableFilter:UpToDaysOld 30>>` .


| Previous Transactions |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| <<TableStart: PreviousTransaction>> <<TableFilter: UpToDaysOld>><<Transaction. TransactionDate>> | <<Transaction. TransactionNumber>> | <<Transaction. TransactionType>> | <<Transaction. Description>> | <<Transaction. TransactionAmount>> | <<Transaction. AccountBalanceImpact>> <<TableEnd: PreviousTransaction>> |

View the Invoice

The following transactions are displayed when viewing INV0000002 in PDF format:

| Previous Transactions |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| 02/10/2012 | INV00000001 | Invoice | Invoice | $700.00 | $700.00 |
| 02/12/2012 | P00000001 | Credit Card Payment | Pay invoice | $200.00 | ($200.00) |
| 02/17/2012 | IA00000001 | Adjustment | Adjust invoice | ($15.00) | ($15.00) |
