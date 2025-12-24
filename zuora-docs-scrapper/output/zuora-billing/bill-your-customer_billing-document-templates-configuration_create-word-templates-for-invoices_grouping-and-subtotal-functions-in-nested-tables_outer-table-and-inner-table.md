---
title: "Outer table and inner table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/outer-table-and-inner-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:42.684Z"
---

# Outer table and inner table

This topic explains the structure and components of nested tables in invoices, detailing the roles of outer and inner tables, and the use of merge fields.

The nested table in invoices consists of one or more outer tables and an inner table.

For example:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ee21c629-3797-4c34-860e-9a0c3ab9f763?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVlMjFjNjI5LTM3OTctNGMzNC04NjBlLTlhMGMzYWI5Zjc2MyIsImV4cCI6MTc2NjY0MTg0MCwianRpIjoiODUwNjkyNTIxYWFlNDY0OTgwODkwZDJlODVkN2JiZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wZMa5iCJdgzLv7PpGU2iIxDZ-zk39GSRD77VmXZ6E5M)

## Outer table

Defines the scope of the outer table. You can have an outer table inside another outer table.

The outer table includes:

-   `TableStart` and `TableEnd` merge fields.

    -   If the outer table is an outermost table (Outer table 1): `{MERGEFIELD TableStart:<objectName> \* MERGEFORMAT}`

    -   If the outer table has a parent table (Outer table 2 and Outer table 3): `{MERGEFIELD TableStart:<objectName>_<xx> \* MERGEFORMAT}` The object referenced in the `TableStart` and `TableEnd` merge fields is the object name referenced in the outer table appended with\_xx, where xx represents any non-empty alphanumeric string. Once the outer table object is defined, reference it consistently when inserting other merge fields in the outer table. For example, follow a sequential numbering convention for the nested table and use 01: `InvoiceItem_01.ListPrice` .

-   `NestedTable:GroupColumn` merge field used to group the data.

-   `NestedTable:ValueColumn` merge field used to calculate the subtotal.

-   Merge field used to display the subtotal of the `ValueColumn` .

-   `TableSort` merge field used to sort order for data.

-   In an outer table, you are not allowed to use the same field for both `GroupColumn` and `ValueColumn` merge fields.


Note:

When specifying merge fields for nested tables in your template document, use double quotes for merge fields that contain spaces. For example: `{MERGEFIELD "NestedTable:GroupColumn Usage.BillingCode__c" \* MERGEFORMAT}`

## Inner table

Defines the line items that appear in the table nested inside the outer table. The inner table includes:

-   `TableStart` and `TableEnd` merge fields. The object referenced in the `TableStart` and `TableEnd` merge fields is the object name referenced in the outer table appended with\_xx, where xx represents any non-empty alphanumeric string. For example: `{MERGEFIELD TableStart:<objectName>_<xx> \* MERGEFORMAT}` Once the inner table object is defined, reference it consistently when inserting other merge fields in the inner table. For example, follow a sequential numbering convention for the nested table and use 01: `InvoiceItem `_` 01.ListPrice` or `Usage_01.Quantity` .

-   You cannot include the `GroupColumn` merge field and subtotal amount of the `ValueColumn` merge field in the inner table scope.

-   `TableSort` merge field used to sort order for data.
