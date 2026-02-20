---
title: "Predefined tax summary table for credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-credit-memos/predefined-tax-summary-table-for-credit-memos"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:50.260Z"
---

# Predefined tax summary table for credit memos

The Tax Summary table provides a predefined view of tax details for credit memos, including sorting and grouping configurations for fields such as tax name, rate, and amount.

By dragging the Tax Summary component into an HTML memo template, you can see a predefined Tax Summary table displayed in the template.

The following table lists the details of the predefined Tax Summary table for credit memos.

| Column header | Description | Default display |
| --- | --- | --- |
| Tax Name | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. | Yes |
| Tax Rate | The tax rate applied to the charge. | Yes |
| Tax Rate Type | The type of the tax rate applied to the charge. | Yes |
| Tax Amount | The amount of the tax applied to the charge. | Yes |
| Charge Amount | The subtotal of all charges without any taxes. | No |

By default, this table has sorting and grouping configurations, and the following list demonstrates the descriptions of predefined fields in these configurations:

-   Sorting configuration in the Sort By section

    -   `Name` : sorts records in the data table by name in ascending order.

-   Grouping configuration in the Group By section

    -   `Name` : groups records in the data table by name.

    -   `TaxRateType` : groups records in the data table by tax rate type.

    -   `TaxRate` : groups records in the data table by tax rate.


You cannot add, delete, or edit the fields for each of sorting, grouping, and filtering configurations.
