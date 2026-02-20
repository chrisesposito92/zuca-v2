---
title: "Create orders with advanced multi-action template"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-orders-with-advanced-multi-action-template"
product: "zuora-platform"
scraped_at: "2026-02-20T17:35:54.647Z"
---

# Create orders with advanced multi-action template

This guide provides the step-by-step process for creating orders with Data Loader, with Advance Multi-Action template.

-   The Data Loader template must be downloaded from the target Zuora tenant to ensure accurate field mapping. Zuora automatically maps CSV headers to fields available in the tenant. Templates downloaded from the target tenant include all tenant-specific custom fields, reducing mapping errors and missing data issues.

-   Ensure your CSV file is in UTF-8 format and contains no duplicate or empty column headers.

-   Use only the supported date formats as defined in the Data Dictionary.

-   Maximum supported file size is 300 MB.


Note: Before importing data into the production environment, test your CSV file in a sandbox environment to ensure accuracy.

The Zuora Data Loader Advanced Multi-Action Template allows you to customize your CSV file by keeping only the necessary columns for your business needs. Ensure that all mandatory fields remain in the file and that the IsMarker columns are used correctly, as they indicate when a new object must be created within the CSV context rather than referencing existing records in Zuora Billing.

1.  Preparing the Order Import Job
    1.  From the Data Loader main menu, select \+ New > Import.
    2.  Select Orders > Advance Multi-Action Template.
    3.  select Download Advance Multi-Action Template Sample Template.
    4.  Retain only the columns required for the specific operation and remove unused or irrelevant columns to minimize validation errors.
    5.  IsMarker columns define the start of a new object in the data hierarchy (for example, `IsNewOrder` indicates a new order). When an IsMarker column is set to `TRUE`, all mandatory fields for that object must be populated in the same row. For subsequent rows associated with the same object, set the IsMarker column to `FALSE` or leave it blank. See Data Dictionary for [Advance Multi Action Order](/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/orders/advance-multi-action-orders) to identify mandatory fields required for the successful creation or update of each object. For sample templates, see [templates](/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-templates-for-advanced-multi-action-orders).

        Example: Creating Multiple Charge Overrides:

        First Row (New Order and Subscription):

        -   IsNewOrder: TRUE
        -   Existing Account Number: \[Provide account number\]
        -   Order Date: \[Provide order date\]
        -   IsNewSubscription: TRUE

            Include all other mandatory fields


        Subsequent Rows (Additional Charges):

        -   IsNewOrder: FALSE or leave blank
        -   IsNewSubscription: FALSE or leave blank
        -   \[Include fields specific to the charge override\]This structure ensures that all charge overrides are associated with the same order and subscription.

    6.  Save the template in CSV format.

2.  Executing the Job
    1.  Upload the template by clicking the Select File and choosing the CSV file from your local system.
    2.  Provide a Job Name and click Next.
3.  Verify the mapping and click Next.

    Zuora Data Loader automatically maps CSV column headers to the corresponding tenant fields. In the Field Mapping interface, selecting the Mapped checkbox filters the view to show only the fields that have been successfully mapped, which is useful when working with CSV files containing many fields. This makes it easier to verify that required and custom fields are mapped correctly, and any missing fields can be identified and manually mapped using the dropdown options.

4.  Review the data preview showing the captured source data and mapped fields.

    Data Loader allows the user to validate any exceptions with the configurations in the tenant on this interface. This allows the user to check the data and make in-line modifications as the exceptions are highlighted in amber color for each cell.

    Note: Data Loader displays the failed and successful records. The failed records can be validated,modified and re-submitted with the interface.
