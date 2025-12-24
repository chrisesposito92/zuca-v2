---
title: "Example: Creating a usage nested table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/examples-using-nested-tables-in-invoices/example-creating-a-usage-nested-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:51.867Z"
---

# Example: Creating a usage nested table

This reference topic demonstrates how to create a usage nested table on an invoice, grouped by custom fields, subtotaled by merge fields, and sorted by charge date.

This example shows how to create a usage nested table with the following layouts on your invoice:

-   Grouped by a custom field, Billing Code
-   Subtotaled by a supported merge field, Rating Amount
-   Sorted in ascending order by Charge Date

The following figure shows the generated invoice:

![Generated invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f17da204-f6c0-4781-9bd2-96ea103e8a71?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYxN2RhMjA0LWY2YzAtNDc4MS05YmQyLTk2ZWExMDNlOGE3MSIsImV4cCI6MTc2NjY0MTg0OSwianRpIjoiYTc4NzMyZDg1ZjQxNGNkMzhkYWVmODQ5MGU1OWYzMmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Ej1aFji7ZhsVz75O7NtDKsKh9K9G0hnm6Qrn_kTpbm4)

## Group usage details and subtotals in a nested table

To generate the invoice with the above layouts, you need to configure the nested table with the `NestedTable:GroupColumn` and `NestedTable:ValueColumn` merge fields. The first column in the table is the legend for identifying the rows.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/014bd310-2630-4742-b925-dfc3ebd51133?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxNGJkMzEwLTI2MzAtNDc0Mi1iOTI1LWRmYzNlYmQ1MTEzMyIsImV4cCI6MTc2NjY0MTg0OSwianRpIjoiNTg0NDA5MDM4NjFlNDY2ZThiNmZlZjkxYjZmZmYyZGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sy6f7k1F5630YJia-qdlXnSBzzQMs06IABQ4yhFI9mY)

-   Row 3 represents the outer table: Usage. Insert the following merge fields in this row:
    -   Start outer Table:`{MERGEFIELD TableStart:Usage \* MERGEFORMAT}`
    -   Define merge field to group by: `{MERGEFIELD "NestedTable:GroupColumn Usage.BillingCode__c" \* MERGEFORMAT}`
    -   Define merge field to calculate the subtotal: `{MERGEFIELD "NestedTable:ValueColumn Usage.RatingAmount" \* MERGEFORMAT}`
    -   Define merge field to display the subtotal: `{MERGEFIELD Usage.RatingAmount \* MERGEFORMAT}`
    -   End the outer table: `{MERGEFIELD EndTable:Usage \* MERGEFORMAT}`
-   Row 3A represents the nested, inner table: Usage\_01. Insert a table inside row 3.
    -   Replace the `Usage` object in merge fields in all columns with `Usage_01`.
    -   First column: Start the inner table: `{MERGEFIELD TableStart:Usage_01 \* MERGEFORMAT}`​
    -   Middle columns: No changes required except to update the object name.
    -   Last column: Reference the Rating Amount line item and end the inner table: `{MERGEFIELD Usage_01.RatingAmount \* MERGEFORMAT}{MERGEFIELD EndTable: Usage_01 \* MERGEFORMAT}``​`
-   For testing purposes, [import the required usage data](/zuora-billing/bill-your-customer/usage-billing/import-usage-data) plus the following fields:
    -   Usage custom field: `Usage.BillingCode__c`or any Usage custom field that you define
    -   `Usage.RatingAmount`

## Sort grouped usage data

You can use the `TableSort` merge field to specify the sorted order for data in nested tables. See [Changing the Sort Order on a Table](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-sort-order-control-on-a-table) for a detailed explanation of the `TableSort` merge field.

To sort on a column in a nested table, indicate the sort parameter by choosing the desired nested table column. In the following example, suppose you would like to display items sorted in ascending order by `RatingAmount`. After the `TableStart` declaration of nested table `Usage_01`, insert {MERGEFIELD "TableSort:Usage\_01.RatingAmount ASC" \\\* MERGEFORMAT}. Make sure to use the inner table name (Usage\_01 in this example) in the `TableSort` declaration.

The following shows the inserted `TableSort` merge field in red.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fdbf1232-51e6-4f20-b8c7-15d9a42c09db?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkYmYxMjMyLTUxZTYtNGYyMC1iOGM3LTE1ZDlhNDJjMDlkYiIsImV4cCI6MTc2NjY0MTg0OSwianRpIjoiOWZmZmMwZWFkODkxNGM0Njk5YmU5NDk2N2Y1Y2UzNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Orp-KqqCAKBXAzJqhodJDb-7OcgZt7fyNSo07h9Nxqs)

You can use the `TableSort` directive in both the outer and inner tables to sort by different parameters.

For example, expanding on the previous example, in which we sorted the inner table on `RatingAmount`, we will show how to sort the outer table on the custom field `BillingCode__c` in ascending order. After the `NestedTable:ValueColumn` declaration, insert `{MERGEFIELD "TableSort:Usage.BillingCode__c ASC" \* MERGEFORMAT}`. Note the use of the name of the outer table (Usage) in the reference to `Usage.BillingCode__c`. Because this declaration is in the outer table scope, we must use the outer table name or the template validation will fail.

The following table shows the inserted merge field in red.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d3d8863e-a52a-483e-a8b4-5e1d785af5f6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQzZDg4NjNlLWE1MmEtNDgzZS1hOGI0LTVlMWQ3ODVhZjVmNiIsImV4cCI6MTc2NjY0MTg0OSwianRpIjoiODAyOWYxZjk4NzA4NGI0MjhlN2RhMGI5NjhmYzM3YTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZwYL4rbLxSPYzliOYgDWwAomkOgiW9s6VOjn4x7Z7V0)

The resulting invoice will have a usage table grouped by `Usage.BillingCode__c` sorted in ascending alphabetical order. Each row will have a nested table sorted by Usage.RatingAmount in ascending numerical order.
