---
title: "Charge Details table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-billing-documents/charge-details-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:22.670Z"
---

# Charge Details table

The Charge Details table displays predefined fields for invoices, including discounts and regular charges, with sorting and filtering configurations.

By dragging the Charge Details component from the Content tab into an HTML invoice template, you can see a predefined Charge Details table displayed in the template. This table displays discounts inline with regular charges.

The following table lists the details of the predefined Charge Details table for invoices:

| Column header | Description | Default display |
| --- | --- | --- |
| Charge Name | The name of the charge. | Yes |
| Quantity | The quantity of this invoice item in the configured unit of measure for the charge. | Yes |
| Unit Price | The unit price of the rate plan charge associated with the invoice item. | Yes |
| Service Period | The period from the service start date to the service end date of the charge. When this field is used for sorting, data is sorted by alphabet. | Yes |
| Subtotal | The subtotal of all charges without any discounts or taxes. | Yes |
| Discount | The discount applied to the charge. | Yes |
| Tax | The tax amount of the charge used in the calculation. | Yes |
| Total | The total amount of the charge with the calculation of tax and discount. | Yes |
| Charge Number | The number of the charge. | No |
| Subscription Number | The number of the subscription associated with the invoice item. | No |
| Rate Plan Name | The name of the rate plan associated with the invoice item. | No |
| Product Name | The name of the product associated with the invoice item. | No |
| Product Description | The item description in the product catalog. | No |

By default, this table has sorting and filtering configurations, and the following list demonstrates the descriptions of predefined fields in these configurations:

-   Sorting configuration in the Sort By section

    -   `RatePlanCharge.ChargeNumber` : sorts records in the data table by charge number in descending order.

    -   `ServiceStartDate` : sorts records in the data table by service start date in ascending order.

    -   `Quantity` : sorts records in the data table by quantity in ascending order.

-   Filtering configuration in the Filters section

    -   `ProcessingType`: filters records whose processing type is not equal to 1, indicating discount charges. For more information about the processing type values and their meanings, see the field in the response body of the "[CRUD: Retrieve an invoice item](https://www.zuora.com/developer/api-reference/?preview#operation/Object_GETInvoiceItem)" operation.

You can add, delete, and edit the fields for sorting, grouping, and filtering configurations as needed. For example, you can customize the grouping configuration, which does not have predefined fields in Charge Details tables, by the following actions in the Group By section:

-   Click Add to add a field used for grouping.

-   Click the Delete icon in the corresponding row to remove the field used for grouping.

-   Click the Edit icon in the corresponding row to change the field used for grouping.


Note that you can configure a maximum of three fields for each of sorting, grouping, and filtering configurations.
