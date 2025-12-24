---
title: "Example 4: Display the Starting Balance in an Invoice Summary"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word/example-4-display-the-starting-balance-in-an-invoice-summary"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:53.666Z"
---

# Example 4: Display the Starting Balance in an Invoice Summary

This example demonstrates how to display a Starting Balance in an Invoice Summary using the Account.PreviousTransactionStartAmount merge field.

This example shows you how to use the Account.PreviousTransactionStartAmount merge field to display a Starting Balance in an Invoice Summary.

Two invoices are posted:

-   INV00000001: Invoice is posted on 01/15/2012 with the following transactions:

    -   One processed payment on 01/18/2012

    -   One processed adjustment on 01/22/2012

-   INV00000002: Invoice is posted on 02/15/2012.


Customize the Template

The following table provides an example for setting up an Invoice Summary in your invoice template:

| INVOICE SUMMARY |  |
| --- | --- |
| Starting Balance | <<Account.PreviousTransactionStartAmount>> |
| <<TableStart:PreviousTransaction>> <<TableFilter:FromLastInvoice>> <<Transaction.TransactionType>> | <<Transaction.AccountBalanceImpact>> <<TableEnd:PreviousTransaction>> |
| Your Previous Balance | <<Account.PreviousBalance>> |
| New Charges | <<Invoice.Balance>> |
| Your Account Balance | <<Account.PreviousBalance>> + <<Invoice.Balance>> |

View the Invoice

INV00000002 in PDF format displays the following information, where the rows in the Previous Transactions table are the result from the filter `FromLastInvoice.`

| PREVIOUS TRANSACTIONS |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| 01/15/2012 | INV00000001 | Invoice | Invoice | $500.00 | $500.00 |
| 01/18/2012 | P00000001 | Credit Card Payment | Payment | $250.00 | ($250.00) |
| 01/22/2012 | IA00000001 | Adjustment | Adjustment | ($50.00) | ($50.00) |

| INVOICE SUMMARY |  |
| --- | --- |
| Starting Balance | $0.00 |
| Invoice (INV00000001) | $500.00 |
| Credit Card Payment (P00000001) | ($250.00) |
| Adjustment (IA00000001) | ($50.00) |
| Your Previous Balance | $200.00 |
| New Charges | $200.00 |
| Your Account Balance | $400.00 |
