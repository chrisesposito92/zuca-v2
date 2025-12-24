---
title: "Predefined data tables for debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:38.009Z"
---

# Predefined data tables for debit memos

The section provides details on the predefined Debit Memo Details table, including its configuration options for sorting, grouping, and filtering.

## Debit Memo Details table

The online HTML template editor provides the Debit Memo Details and Tax Summary components with predefined data tables for debit memos.

By dragging the Debit Memo Details component from the Content tab into an HTML memo template, you can see a predefined Debit Memo Details table displayed in the template.

The following table lists the details of the predefined Debit Memo Details table for debit memos.

| Column header | Description | Default display |
| --- | --- | --- |
| Item Name | The name of this debit memo item. | Yes |
| Service Period | The service period of this debit memo item.When this field is used for sorting, data is sorted by alphabet. | Yes |
| Quantity | The quantity of this debit memo item in the configured unit of measure for the charge. | Yes |
| Tax Amount | The tax amount of this debit memo item. | Yes |
| Amount | The total amount of this debit memo item without tax. | Yes |
| Description | The description of this debit memo item. | No |
| UOM | The unit of measure for this debit memo item. | No |
| Unit Price | The unit price of the charge associated with the debit memo item. | No |
| Total | The total amount of this debit memo item. | No |

By default, this table has a sorting configuration, and the following list demonstrates the descriptions of predefined fields in the configuration:

-   Sorting configuration in the Sort By section

    -   `ServiceStartDate` : sorts records in the data table by service start date in ascending order.

    -   `ChargeName` : sorts records in the data table by charge name in ascending order.


You can add, delete, and edit the fields for sorting, grouping, and filtering configurations as needed. For example, you can customize the grouping configuration, which does not have predefined fields in Usage Details tables, by the following actions in the Group By section:

-   Click Add to add a field used for grouping.

-   Click the Delete icon in the corresponding row to remove the field used for grouping.

-   Click the Edit icon in the corresponding row to change the field used for grouping.


Note that you can configure a maximum of three fields for each of sorting and grouping configurations. For the filtering configuration, you can configure multiple filters based on the available fields as needed.
