---
title: "The sort order control on a table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-sort-order-control-on-a-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:29.486Z"
---

# The sort order control on a table

Explains how to define and control the sort order of charges on invoices using the TableSort field in your invoice template.

You can control the order that charges appear on invoices. To do this, define the sort order within a table on your invoice template. For example, you can group charges first by subscription first, then by charge date.

To control the sort order of a table, use the `TableSort` ​ field. The field has the following format:

`<<TableSort:FieldName1 [Order], FieldName2 [Order], FieldName3 [Order], ...>>​`

Where:

-   `FieldName#` is a merge field in the table.

-   `Order` is `ASC` for ascending order or `DESC` for descending order.


Charges are first ordered according to FieldName1. If two charges have the same value for FieldName1, they are then ordered according to FieldName2, and so on.

The `TableSort` field must be placed between `TableStart` and `TableEnd` fields.

The following example field code would sort by ChargeNumber (in ascending order) and then by AmountWithoutTax (in descending order):

`{ MERGEFIELD "TableSort:InvoiceItem.ChargeNumber ASC, InvoiceItem.AmountWithoutTax DESC" \* MERGEFORMAT }`

Note that the table sort parameter is enclosed in quotation marks. When a parameter contains a space, you must enclose the parameter in quotation marks, otherwise it will not be processed correctly.

Note:

[Group and subtotal in nested tables](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables) is the only way you can sort by custom fields. For other cases, custom fields are not supported when using `TableSort` .
