---
title: "Example 1: Display Transaction History Since the Last Invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word/example-1-display-transaction-history-since-the-last-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:44.811Z"
---

# Example 1: Display Transaction History Since the Last Invoice

This reference provides an example of using the `FromLastInvoice` filter to display transactions occurring after the last invoice date.

This example shows you how to use the `FromLastInvoice` filter to display transactions with transaction dates after the date of the last invoice.

Two invoices are posted:

-   INV00000001: The invoice is posted on 01/15/2012, a processed payment and payment date on 01/18/2012, a processed adjustment and adjustment date on 01/22/2012.

-   INV00000002: Invoice posted on 02/15/2012.


Customize the Template

The following example illustrates how to configure the Previous Transactions table with the filter `FromLastInvoice` :

| PREVIOUS TRANSACTIONS |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| <<TableStart:PreviousTransaction>><<TableFilter:FromLastInvoice>><<Transaction.TransactionDate>> | <<Transaction. TransactionNumber>> | <<Transaction. TransactionType>> | <<Transaction. TransactionDescription>> | <<Transaction. TransactionAmount>> | <<Transaction. AccountBalanceImpact>><<TableEnd:PreviousTransaction>> |

View the Invoice

Open INV00000002 in PDF format, the table will show transactions by the filter `FromLastInvoice` :

| PREVIOUS TRANSACTIONS |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Description | Amount | Account Balance Impact |
| 01/15/2012 | INV00000001 | Invoice | Invoice | $900.00 | $900.00 |
| 01/18/2012 | P00000001 | Credit Card Payment | Pay invoice | $500.00 | ($500.00) |
| 01/22/2012 | IA00000001 | Adjustment | Adjust invoice | ($35.00) | ($35.00) |
