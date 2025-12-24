---
title: "Predefined data tables for credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:32.973Z"
---

# Predefined data tables for credit memos

The online HTML template editor provides the Credit Memo Details and Tax Summary component with predefined data tables for credit memos.

## Credit Memo Details table

By dragging the Credit Memo Details component from the Content tab into an HTML memo template, you can see a predefined Credit Memo Details table displayed in the template.

The following table lists the details of the predefined Credit Memo Details table for credit memos.

| Column header | Description | Default display |
| --- | --- | --- |
| Item Name | The name of this credit memo item. | Yes |
| Service Period | The service period of this credit memo item.When this field is used for sorting, data is sorted by alphabet. | Yes |
| Quantity | The quantity of this credit memo item in the configured unit of measure for the charge. | Yes |
| Tax Amount | The tax amount of this credit memo item. | Yes |
| Amount | The total amount of this credit memo item without tax. | Yes |
| Description | The description of this credit memo item. | No |
| UOM | The unit of measure for this credit memo item. | No |
| Unit Price | The unit price of the charge associated with the credit memo item. | No |
| Total | The total amount of this credit memo item. | No |
| Applied Amount | The amount of this credit memo item that is applied to invoices and debit memos. | No |

By default, this table has a sorting configuration, and the following list demonstrates the descriptions of predefined fields in the configuration:

-   Sorting configuration in the Sort By section

    -   `ServiceStartDate` : sorts records in the data table by service start date in ascending order.

    -   `ChargeName` : sorts records in the data table by charge name in ascending order.


You can add, delete, and edit the fields for sorting, grouping, and filtering configurations as needed. For example, you can customize the grouping configuration, which does not have predefined fields in Usage Details tables, by the following actions in the Group By section:

-   Click Add to add a field used for grouping.

-   Click the Delete icon in the corresponding row to remove the field used for grouping.

-   Click the Edit icon in the corresponding row to change the field used for grouping.


Note that you can configure a maximum of three fields for each of sorting and grouping configurations. For the filtering configuration, you can you can configure multiple filters based on the available fields as needed.
