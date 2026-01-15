---
title: "Create orders with advanced multi-action template"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-orders-with-advanced-multi-action-template"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:45.232Z"
---

# Create orders with advanced multi-action template

This guide provides the step-by-step process for creating orders with Data Loader, with Advance Multi Action template.

-   CSV Format: Ensure your CSV file is in UTF-8 format and contains no duplicate or empty column headers.

-   Use only the supported date formats as defined in the Data Dictionary.

-   Maximum supported size is 1 GB.

-   Validate the CSV in a sandbox tenant before running the job in production.

-   To ensure accurate field mapping, download the Advanced Multi-Action Template from the target Zuora tenant where the data will be imported. Zuora automatically maps CSV headers to fields available in the tenant. Templates downloaded from the target tenant include all tenant-specific custom fields, reducing mapping errors and missing data issues.
    Note: Custom fields can vary between tenants.


The Zuora Data Loader Advanced Multi-Action Template allows you to customize your CSV file by keeping only the necessary columns for your business needs. Ensure that all mandatory fields remain in the file and that the IsMarker columns are used correctly, as they indicate when a new object should be created within the CSV context rather than referencing existing records in Zuora Billing. For more information, See [Guidelines for CSV file upload in Data Loader](/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/nested-objects-handling-for-csv-templates) .

1.  Preparing the Order Import Job
    1.  Customize your template: Retain only the columns required for the specific operation and remove any irrelevant columns to streamline the import process and reduce the risk of errors.
    2.  Use IsMarker columns: IsMarker columns define the start of a new object in the data hierarchy (for example, `IsNewOrder` indicates a new order). When an IsMarker column is set to `TRUE`, all mandatory fields for that object must be populated in the same row. For subsequent rows associated with the same object, set the IsMarker column to `FALSE` or leave it blank. See Data Dictionary for advance mandatory fields required for the successful creation or update of each object.

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

    3.  Include all mandatory fields:

        -   Mandatory fields are essential for the successful creation or update of records. See [Data Dictionary for Advance Multi Action Orders](/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/orders/advance-multi-action-orders) to identify required fields for each object.

2.  Executing the Job
    1.  From the main menu, navigate to Administration >Data Loader, click +New icon on the landing screen.
    2.  Download Advance Multi-Action Template.
    3.  Open the template and populate the necessary fields. Fields marked with \* are mandatory and save the template in CSV format.
    4.  Upload the template by clicking the Select File and choosing the CSV file from your local system.
    5.  Provide a Job Name and click Next.
    6.  /\*Select Import > Orders > Advance Multi Action Template`IsMarkerColumns` and fill values Upload the template Refer to the sample templates attached below.
    7.  Download the Template
    8.  Select the required columns, the appropriate `IsMarkerColumns` and fill values
    9.  Upload the template
    10.  Refer to the sample templates attached below. \*/
3.  Verify the mapping and click Next.

    Zuora Data Loader automatically maps CSV column headers to the corresponding tenant fields. In the Field Mapping interface, selecting the Mapped checkbox filters the view to show only the fields that have been successfully mapped, which is useful when working with CSV files containing many fields. This makes it easier to verify that required and custom fields are mapped correctly, and any missing fields can be identified and manually mapped using the dropdown options.

    Verify the mapping and click Next.

    /\*Zuora's Data Loader automatically maps CSV column headers to the corresponding fields in the tenant. When on the Field Mapping Interface, select the Mapped checkbox, this will allow you to recheck the fields that are mapped by data loader. This will be particularly useful if the csv has many fields. However, when dealing with CSV files containing numerous fields, it's crucial to verify that all necessary fields, especially custom ones, are correctly mapped. To facilitate this, the Field Mapping interface in Data Loader provides a Mapped checkbox. Selecting this checkbox filters the view to display only the fields that have been successfully mapped.

    Best Practices

    -   Verify Required Fields: Ensure that all mandatory fields are included and correctly mapped. Data Loader displays a warning message to guide you, as unmapped required fields can cause errors.
    -   Manual Mapping: If automatic mapping does not identify all fields, you can manually map the CSV columns by selecting the appropriate target fields from the dropdown menus in the Field Mapping interface.Similarly, you can map the unmapped fields by selecting the unmapped check box as well if required.\*/

4.  Preview and Submit: Review the data preview showing the captured source data and mapped fields.

    Data Loader allows the user to validate any exceptions with the configurations in the tenant on this interface. This allows the user to check the data and make in-line modifications as the exceptions are highlighted in amber color for each cell.

5.  Submit the job.

    Data Loader displays the failed and successful records. The failed records can be validated,modified and re-submitted with the interface.
