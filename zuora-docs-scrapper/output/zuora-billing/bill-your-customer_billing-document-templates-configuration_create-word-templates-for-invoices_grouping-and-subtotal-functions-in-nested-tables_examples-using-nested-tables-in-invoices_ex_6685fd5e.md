---
title: "Example: Create invoice item nested tables"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/examples-using-nested-tables-in-invoices/example-create-invoice-item-nested-tables"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:54.969Z"
---

# Example: Create invoice item nested tables

This topic provides an example of creating nested tables in an invoice to group and display invoice items by charges and rate plans, including detailed steps and merge field configurations.

This example shows how to create three level nested tables with the following layouts on your invoice:

1.  Group the invoice items by charges.
    -   Group 1: New Charges. The invoice item charges that are not displayed in the most recently posted invoice.
    -   Group 2: Old Charges. The invoice item charges that are displayed in the most recently posted invoice.
2.  For the invoice items in the same charge group, group them by rate plans.
3.  For the invoice items in the same rate plan group, list the following information for each invoice item:
    -   Quantity
    -   Unit Price
    -   Subscription Number
    -   Tax Amount
    -   Amount Without Tax

The following figure shows the generated invoice:

![Generated invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/599bf51c-0dfc-4ec7-96ee-9bd35ce43826?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU5OWJmNTFjLTBkZmMtNGVjNy05NmVlLTliZDM1Y2U0MzgyNiIsImV4cCI6MTc2NjY0MTg1MiwianRpIjoiZTIzZDQ2YjIxZjExNGViMmI3ODlmZGRkZWYxMjQyZjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GvDCSKcLO-iQuoBnRK8o7p4XogooQciwVvDpDAefdJ4)

## Group charge details and subtotals in nested tables

To generate the invoice with the above layouts, you need to configure the nested table with the `NestedTable:GroupColumn` and `NestedTable:ValueColumn` merge fields.

The first column in the table is the legend for identifying the rows.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cba6e673-775a-4cfe-92d3-31ef9698049f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiYTZlNjczLTc3NWEtNGNmZS05MmQzLTMxZWY5Njk4MDQ5ZiIsImV4cCI6MTc2NjY0MTg1MiwianRpIjoiNGNlODNjMGMzNmZlNGIwMjk3NjAxZWU3ZGU5MzIxY2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FYrbA6RtPzCuSERFxKhDvb1sivo3TGiTYrH41BBVprM)

-   Row 3A represents the outer table: InvoiceItem. Insert the following merge fields in this row:
    -   Start the outer table: `{MERGEFIELD TableStart:InvoiceItem \* MERGEFORMAT}`​
    -   Define a merge field to group by: `{MERGEFIELD "NestedTable:GroupColumn InvoiceItem.IsNew" \* MERGEFORMAT}`
    -   Define a merge field to calculate the subtotal. In this example, it calculates amount without tax: `{MERGEFIELD "NestedTable:ValueColumn InvoiceItem.AmountWithoutTax" \* MERGEFORMAT}`
    -   Define IF field to test the value of the `InvoiceItem.IsNew` merge field. If the test value is true, display "New Charges". If the test value is false, display "Old Charges": `{IF «InvoiceItem.IsNew»="true" "New Charges" "Old Charges" \* MERGEFORMAT}`
    -   Define a merge field to display amount without tax:`{MERGEFIELD InvoiceItem.AmountWithoutTax \* MERGEFORMAT}`
    -   End the outer table: `{MERGEFIELD TableEnd:InvoiceItem \* MERGEFORMAT}​``​`​​​​​​
-   Row 3B represents the nested, outer table: InvoiceItem\_RatePlan. Insert a table inside row 3A.
    -   Start the outer table: `{MERGEFIELD TableStart:InvoiceItem_RatePlan \* MERGEFORMAT}`​
    -   Define a merge field to group by: `{MERGEFIELD "NestedTable:GroupColumn InvoiceItem_RatePlanName" \* MERGEFORMAT}`
    -   Define a merge field to calculate the subtotal. In this example, it calculates amount without tax: `{MERGEFIELD "NestedTable:ValueColumn InvoiceItem.AmountWithoutTax" \* MERGEFORMAT}`
    -   Define a merge field to sort by rate plan rate: `{MERGEFIELD "InvoiceItem_RatePlan.RatePlanName" \* MERGEFORMAT}`
    -   Define a merge field to display rate plan name: `{MERGEFIELD InvoiceItem.RatePlanName \* MERGEFORMAT}`
    -   Define a merge field to display amount without tax:`{MERGEFIELD InvoiceItem.AmountWithoutTax \* MERGEFORMAT}`
    -   End the outer table: `{MERGEFIELD TableEnd:InvoiceItem_RatePlan \* MERGEFORMAT}​`
-   `​`Row 3C represents the nested, inner table: InvoiceItem\_1. Insert a table inside row 3B.
    -   First column, start the inner table: `{MERGEFIELD TableStart:InvoiceItem_1 \* MERGEFORMAT}`​
    -   Middle columns: No changes required except to update the object name.
    -   Last column, reference the Amount Without Tax line item and end the inner table: `{MERGEFIELD InvoiceItem_1.AmountWithoutTax \* MERGEFORMAT}{MERGEFIELD EndTable: InvoiceItem_1 \* MERGEFORMAT}​`
