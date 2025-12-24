---
title: "Usage details table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-billing-documents/usage-details-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:30.221Z"
---

# Usage details table

The Usage Details table can be added to an HTML invoice template, displaying predefined fields for sorting, grouping, and filtering configurations.

By dragging the Usage Details component from the Content tab into an HTML invoice template, you can see a predefined Usage Details table displayed in the template.

The following table lists the details of the predefined Usage Details table for invoices.

| Column header | Description | Default display |
| --- | --- | --- |
| Date | The date of the subscription. | Yes |
| Subscription Identifier | The identifier of the subscription. | Yes |
| Quantity | The quantity of the usage item in the configured unit of measure for the subscription. | Yes |
| UOM | The unit of measure for the subscription. | Yes |
| Charge Name | The charge name from the subscription. | Yes |
| Charge Number | The charge ID from the subscription. | No |
| Rate Plan Name | The name of the rate plan from the subscription. | No |
| Product Name | The name of the product from the subscription. | No |

By default, this table has a sorting configuration, and the following list demonstrates the descriptions of predefined fields in the configuration:

-   Sorting configuration in the Sort By section

    -   `RatePlanCharge.Name` : sorts records in the data table by name in ascending order.

    -   `StartDateTime` : sorts records in the data table by start date time in ascending order.


You can add, delete, and edit the fields for sorting, grouping, and filtering configurations as needed. For example, you can customize the grouping configuration, which does not have predefined fields in Usage Details tables, by the following actions in the Group By section:

-   Click Add to add a field used for grouping.

-   Click the Delete icon in the corresponding row to remove the field used for grouping.

-   Click the Edit icon in the corresponding row to change the field used for grouping.


Note that you can configure a maximum of three fields for each of sorting and grouping configurations. For the filtering configuration, you can configure multiple filters based on the available fields as needed.
