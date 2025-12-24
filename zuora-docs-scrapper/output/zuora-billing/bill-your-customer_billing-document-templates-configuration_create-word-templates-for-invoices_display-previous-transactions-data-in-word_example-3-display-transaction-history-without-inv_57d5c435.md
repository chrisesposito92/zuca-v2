---
title: "Example 3: Display Transaction History Without Invoice Transactions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word/example-3-display-transaction-history-without-invoice-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:50.464Z"
---

# Example 3: Display Transaction History Without Invoice Transactions

This example demonstrates how to use the `HideTransactionType` filter to display a transaction history without including invoice transactions.

This example shows you how to use the `HideTransactionType` filter to display a Previous Transactions table without invoice transactions.

Two invoices are posted:

-   INV00000001: Invoice is posted on 02/10/2012, a processed payment and payment date on 02/12/2012, a processed adjustment and adjustment date on 02/17/2012.

-   INV00000002: Invoice is posted on 03/01/2012.


Customize the Template

The Transaction Date column in the following table contains the `HideTransactionType` filter.

| Previous Transactions |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| <<TableStart: PreviousTransaction>><<TableFilter: UpToDaysOld>><<TableFilter:HideTransactionType Invoice>><<Transaction. TransactionDate>> | <<Transaction. TransactionNumber>> | <<Transaction. TransactionType>> | <<Transaction. Description>> | <<Transaction. TransactionAmount>> | <<Transaction. AccountBalanceImpact>> <<TableEnd: PreviousTransaction>> |

View the Invoice

View INV0000002 in PDF format. The invoice transaction is hidden:

| Previous Transactions |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| 02/12/2012 | P00000001 | Credit Card Payment | Pay invoice | $200.00 | ($200.00) |
| 02/17/2012 | IA00000001 | Adjustment | Adjust invoice | ($15.00) | ($15.00) |
