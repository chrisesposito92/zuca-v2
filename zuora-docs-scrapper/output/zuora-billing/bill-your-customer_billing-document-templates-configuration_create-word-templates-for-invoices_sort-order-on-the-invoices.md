---
title: "Sort order on the invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/sort-order-on-the-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:00.584Z"
---

# Sort order on the invoices

Explains how to about customizing the sort order on invoices using Zuora's invoice template features.

Before you can collect money from your customers, you may send an invoice out to the customer that details all the items the customer is being charged for. Zuora lets you generate invoices and display the invoice details on a pre-defined invoice template. You have the flexibility of defining the information and details you want displayed on the invoice. The invoice template allows you to specify a variety of data in table format.

## Solution

Zuora Billing provides default sort ordering on all tables, however, you can use the instructions below to customize the invoice template sort order.

Additional information on customizing your invoice template and establishing a sort order can be found in the invoice template instructions downloadable by navogating to .

## Add Fields to Control the Sort Order

If you would like to change the sort order on your invoice, you can do so by adding fields to control the sort order\*.

Between the fields TableStart and TableEnd, you can add the following fields to control the sort order:

TableSort:FieldName1 \[Order\], FieldName2 \[Order\], FieldName3 \[Order\]....

-   FieldName1 is a merge field in the Table.

-   Order is ASC for Ascending or DESC means Descending


\*Please note that sorting using custom fields is not supported.
