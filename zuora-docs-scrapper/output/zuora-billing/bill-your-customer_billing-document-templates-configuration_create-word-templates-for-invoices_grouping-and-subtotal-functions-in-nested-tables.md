---
title: "Grouping and subtotal functions in nested tables"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:39.646Z"
---

# Grouping and subtotal functions in nested tables

This topic covers information on configuring nested tables in invoice templates to group and subtotal usage charges and invoice items using merge fields.

You can configure your invoice templates to display usage charges and invoice items in nested tables. Use nested tables to group and subtotal complex usage charges and invoice items by any supported [merge field](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices) or custom field. Zuora supports multi-level nested tables within the usage charges or invoice items table.

## Nested table configuration

To configure nested tables in invoice templates, use the following merge fields:

-   NestedTable:GroupColumn : Groups information by a merge field, such as Charge Date, UOM (unit of measure) or a custom field.

-   NestedTable:ValueColumn : Calculates a subtotal based on a merge field, such as Amount, Quantity, or any other numbered merge field where summing makes sense. For example, you can calculate different subtotals based on all of the following merge fields: `{MERGEFIELD "NestedTable:ValueColumn InvoiceItem.Quantity,InvoiceItem.ExtendedPrice,InvoiceItem.TaxAmount,InvoiceItem.AmountWithoutTax" \* MERGEFORMAT}` Note that you cannot add any spaces between the merge fields.

    -   InvoiceItem.ExtendedPrice

    -   InvoiceItem.TaxAmount

    -   InvoiceItem.AmountWithoutTax

    -   InvoiceItem.Quantity


## Sample nested table templates

Download the following sample templates, which you can use to customize your nested table.

-   [Usage sample nested table template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eacd25cc-4bb2-4cc1-b8ba-e204dc160815?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhY2QyNWNjLTRiYjItNGNjMS1iOGJhLWUyMDRkYzE2MDgxNSIsImV4cCI6MTc2NjY0MTgzNywianRpIjoiMjg3MmFhOWU2OGRlNGRhZmE3MDZlOTBmYTIzNjRlZjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CP2m-3aCRutk6uO9Aesne0QTnomsnpua9oF5zElhXrw&response-content-disposition=attachment%3B+filename%3D%22NestedTableTemplate_default.doc%22) (one level of nesting)

-   [Invoice Item sample nested table template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4e87cac5-a87e-4b6f-a6be-278213d31489?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlODdjYWM1LWE4N2UtNGI2Zi1hNmJlLTI3ODIxM2QzMTQ4OSIsImV4cCI6MTc2NjY0MTgzNywianRpIjoiMjUzMmU3ZTVlM2QyNDAwZDgyNWY0ZTlmM2VlOWVmNjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.A7iEi2OranGgUaHuaPPrtkaSRgCAUD1KQjumLebCeR8&response-content-disposition=attachment%3B+filename%3D%22invoice_item_sample_template.doc%22) (three level of nesting)


See [Examples: Using Nested Tables in Invoices](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/examples-using-nested-tables-in-invoices/example-creating-a-usage-nested-table) for detailed explanations about the sample templates.

## Notes and considerations

-   When the TableFilter:GroupBy merge field is used for grouping invoice items, the invoice item custom fields are populated from the corresponding subscription rate plan charge custom fields. The first invoice item custom field you created corresponds to the first subscription rate plan charge custom field you created, and so on; the names of custom fields are not relevant. Therefore, you must have created invoice item custom fields in exactly the same order as the corresponding subscription rate plan charge custom fields. Additionally, if a subscription rate plan charge custom field is non-indexed, the corresponding invoice item custom field must be also non-indexed.

-   Using the TableFilter:GroupBy merge field for the invoice items, credit memo items, and debit memo items in the nested tables is not supported.

-   Using the TableFilter:GroupBy merge field for the credit memo items and debit memo items in regular tables are not supported. Therefore, it is recommended to use nested tables for credit memo items and debit memo items.

-   Only the following fields are currently supported with nested tables:

    -   Usage merge fields and custom merge fields

    -   Invoice item merge fields and custom merge fields

    -   Tax item merge fields

    -   Credit memo item merge fields

    -   Debit memo item merge fields
