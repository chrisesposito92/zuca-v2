---
title: "Example 5: Display the Starting Balance and Filter Out Invoice Transactions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word/example-5-display-the-starting-balance-and-filter-out-invoice-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:56.821Z"
---

# Example 5: Display the Starting Balance and Filter Out Invoice Transactions

This reference explains how to filter out invoice transactions and adjust the starting balance in the invoice summary.

This example shows you how to filter out invoice transactions from previous invoices and add the amounts to the Starting Balance.

Two invoices are posted:

-   INV00000001: Invoice is posted on 01/15/2012 with the following transactions:

    -   One processed payment on 01/18/2012

    -   One processed adjustments on 01/22/2012

-   INV00000002: Invoice is posted on 02/15/2012.


Customize the Template

The invoice summary table contains a previous transactions table (the yellow rows) that includes the HideTransactionType filter.

| INVOICE SUMMARY |  |
| --- | --- |
| Starting Balance | <<Account.PreviousTransactionStartAmount>> |
| <<TableStart:PreviousTransaction>> <<TableFilter:FromLastInvoice>> <<TableFilter:HideTransactionType Invoice>> <<Transaction.TransactionType>> | <<Transaction.AccountBalanceImpact>> <<TableEnd:PreviousTransaction>> |
| Your Previous Balance | <<Account.PreviousBalance>> |
| New Charges | <<Invoice.Balance>> |
| Your Account Balance | <<Account.Balance>> |

View the Invoice

INV00000002 in PDF format displays the following information, where the rows in the Previous Transaction table are the result from the filter `FromLastInvoice` . Including the `HideTransactionType` filter causes the invoice transaction line to be hidden, and the starting balance from `<<Account.PreviousTransactionStartAmount>>` to increase by the amount of the hidden transaction.

Without `HideTransactionType Invoice` table filter:

| INVOICE SUMMARY |  |
| --- | --- |
| Starting Balance | $0.00 |
| Invoice (INV00000001) | $500.00 |
| Credit Card Payment (P00000001) | ($250.00) |
| Adjustment (IA00000001) | ($50.00) |
| Your Previous Balance | $200.00 |
| New Charges | $200.00 |
| Your Account Balance | $400.00 |

With `HideTransactionType` `Invoice` table filter:

| INVOICE SUMMARY |  |
| --- | --- |
| Starting Balance | $500.00 |
| Credit Card Payment (P00000001) | ($250.00) |
| Adjustment (IA00000001) | ($50.00) |
| Your Previous Balance | $200.00 |
| New Charges | $200.00 |
| Your Account Balance | $400.00 |
