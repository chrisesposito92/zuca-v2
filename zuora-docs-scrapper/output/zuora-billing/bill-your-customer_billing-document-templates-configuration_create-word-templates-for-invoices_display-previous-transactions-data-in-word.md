---
title: "Display previous transactions data in Word"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-previous-transactions-data-in-word"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:41.493Z"
---

# Display previous transactions data in Word

Explains how to display and filter previous transaction data on invoices using the Previous Transactions table, including supported transaction types, date range filters, and starting balance calculations.

Note: The Invoice Adjustment transaction is deprecated on Production.

## Supported Transactions

You can use the Previous Transactions table to display the following types of transactions:

-   Invoice

-   Adjustment

-   Invoice Item Adjustment

-   Invoice Applied to Credit Balance

-   Credit Balance Applied to Invoice

-   Credit Balance Refund

-   Payment Refund

-   Payment (The specific name of type depends on the payment method type, for example, Credit Card Payment or Debit Card Payment.)


If you have the Invoice Settlement enabled, the following types of transactions are supported:

-   Credit Memo

-   Debit Memo

-   Credit Memo Refund


## How to Display Transaction History on an Invoice

You can display transaction history on invoices with a Previous Transactions table. The Previous Transactions table shows your customers all the successfully processed transactions that apply to their invoices.

Zuora recommends that you use the Previous Transactions table instead of the separate Payments and Adjustments table on your invoices to show the complete view of all transactions.

## Filtering Transactions by Date

You can configure the Previous Transactions table to include only transactions from a specified date range. There are two filters that let you do this:

-   FromLastInvoice : Displays transactions with transaction dates that fall from the date the last invoice was posted to the date the current invoice is posted. The field code as as follows:


`{ MERGEFIELD TableFilter:FromLastInvoice \* MERGEFORMAT }`

-   UpToDaysOld : Displays transactions with transaction dates from the specified number of days ago to the date the current invoice is posted. The following example field code displays transactions that are up to 90 days old:


`{ MERGEFIELD "TableFilter:UpToDaysOld 90" \* MERGEFORMAT }`

Note that the `UpToDaysOld` table filter parameter is enclosed in quotation marks. When a parameter contains a space, you must enclose the parameter in quotation marks. Otherwise, it will not be processed correctly.

If the current invoice is in draft status, the filters use the date the current invoice file is created instead of its posted date.

The date range filters use the date and exact time when a transaction is created or an invoice is posted, for example, "01/12/2014 13:00:00". The date and time is not the Transaction Date.

## Filtering Transactions by Type

The Previous Transactions table shows all previous transactions (invoice, payments, adjustments, refunds) since the last invoice or for the last n number of days. The table filter `<<` `TableFilter:` `HideTransactionType` `Invoice>>` lets you hide all the transactions of type invoice. The field code is as follows:

`{ MERGEFIELD "TableFilter:HideTransactionType Invoice" \* MERGEFORMAT }`

The `HideTransactionType` filter can only hide transactions of type `Invoice` . It cannot currently be used to hide other transaction types such as `Payment` or `Adjustment` .

## How to Display the Starting Balance on an Invoice

You can include the Starting Balance on your invoice template so your customers can see how the current invoice affects their account balance.

## Displaying the Starting Balance

There are two merge fields that enable you to show the starting balance based on the transactions in the Previous Transactions table and the impact these transactions have on the current invoice:

-   Account.PreviousTransactionImpactTotal: The sum of all rows in the Previous Transactions table.

-   Account.PreviousTransactionStartAmount: The difference of `Account.PreviousBalance` and `Account.PreviousTransactionImpactTotal` .


The Previous Transactions table must be present in the invoice to show the starting balance and impact from previous transactions. If this is a customer's first invoice, no previous transaction data will exist and the table will be empty. In this case, the Starting Balance Amount and Previous Transaction Impact Total will show as zeros on the invoice.

## Displaying the Starting Balance and Filtering Out Invoice Transactions

When you filter out invoice transactions with the `HideTransactionType` filter, you can use `<<Account.PreviousTransactionStartAmount>>` to automatically include the amounts from these transactions in the Starting Balance. The result is a more intuitive Starting Balance, that is, the balance from your previous invoice, which includes all the unpaid invoices for that account.
