---
title: "Create orders with advanced multi action template"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-orders-with-advanced-multi-action-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:18.057Z"
---

# Create orders with advanced multi action template

Learn best practices for using the Zuora Data Loader Advance Multi Action Template, including CSV formatting, utilizing IsMarker columns, and ensuring all mandatory fields are included for successful data imports.

This guide provides the step-by-step process for creating orders with Data Loader, with Advance Multi Action template. Before proceeding with the template.

The `IsMarker` column in Data Loader templates show when a new object needs to be created. The `IsNew` marker columns in the CSV file are used to signal when new records should be created in the context of the file, not within Zuora Billing. See [Guidelines for CSV file upload in Data Loader](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/topics/guidelines_for_csv_file_upload_in_data_loader.dita) for more information.

-   CSV Format : Ensure your CSV file is in UTF-8 format and does not contain duplicate or empty headers.
-   Date Fields : Verify that all date fields are correctly formatted according to the supported date formats in the Data Dictionary.
-   File Size : The maximum allowed file size for Data Loader is 1GB.
-   Testing : Before importing data into the production environment, test your CSV file in a sandbox environment to ensure accuracy.
-   Download template from target tenant : To ensure accurate field mapping, especially for custom fields, it is essential to download the Data Loader template directly from the specific Zuora tenant where the data upload will occur. Zuora's Data Loader automatically maps CSV column headers to the corresponding fields in the tenant. By using a template from the target tenant, you ensure that all fields, including custom ones, align correctly, reducing the risk of mapping errors. Zuora tenant can have different custom fields. Templates downloaded from the specific tenant will include these fields, ensuring they are available for data import and reducing the chance of missing critical information.

The Zuora Data Loader Advance Multi Action Template template offers flexibility, allowing users to tailor the CSV file to their specific business requirements. This means you can retain only the necessary columns pertinent to your operation and remove any irrelevant ones. However, to ensure successful data imports, it's crucial to include all mandatory fields and correctly utilize the corresponding `IsMarker` columns.

1.  Preparing for Order Import Job
    1.  Customize your template:

        -   Retain Necessary Columns: Keep only the columns that are essential for your specific operation. This streamlines the import process and reduces potential errors.
        -   Remove Irrelevant Columns: Eliminate any columns that are not applicable to your current data import task.

    2.  Understand and utilize IsMarker columns

        -   IsMarker columns indicate the beginning of a new object within your data hierarchy. For example, IsNewOrder signifies the start of a new order.
        -   When setting an IsMarker column to TRUE, ensure all mandatory fields for that object are populated in the same row.
        -   For subsequent rows related to the same object, set the IsMarker column to FALSE or leave it blank.

    3.  Include all mandatory fields:

        -   Mandatory fields are essential for the successful creation or update of records. See [Data Dictionary for Advance Multi Action Orders](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/dataloader_datadictionary/topics/advance_multi_action_orders_-_data_dictionary.dita) to identify required fields for each object.

    4.  Example: Creating Multiple Charge Overrides:

        -   First Row (New Order and Subscription):

            -   IsNewOrder: TRUE

            -   Existing Account Number: \[Provide account number\]

            -   Order Date: \[Provide order date\]

            -   IsNewSubscription: TRUE

            -   \[Include all other mandatory fields\]

        -   Subsequent Rows (Additional Charges):

            -   IsNewOrder: FALSE or leave blank

            -   IsNewSubscription: FALSE or leave blank

            -   \[Include fields specific to the charge override\]This structure ensures that all charge overrides are associated with the same order and subscription.


2.  Executing the Job
    1.  Navigate to Data Loader, click +New icon on the landing screen
    2.  Select Import > Orders > Advance Multi Action Template`IsMarkerColumns` and fill values Upload the template Refe to the sample templates attached below.
    3.  Download the Template
    4.  Select the required columns, the appropriate `IsMarkerColumns` and fill values
    5.  Upload the template
    6.  Refer to the sample templates attached below.
3.  Verification

    Zuora's Data Loader automatically maps CSV column headers to the corresponding fields in the tenant.When on the Field Mapping Interface, select the Mapped checkbox, this will allow you to recheck the fields that are mapped by data loader. This will be particularly useful if the csv has many fields. However, when dealing with CSV files containing numerous fields, it's crucial to verify that all necessary fields, especially custom ones, are correctly mapped. To facilitate this, the Field Mapping interface in Data Loader provides a Mapped checkbox. Selecting this checkbox filters the view to display only the fields that have been successfully mapped.

    Best Practices

    -   Verify Required Fields: Ensure that all mandatory fields are included and correctly mapped. Data Loader displays a warning message to guide you, as unmapped required fields can cause errors.
    -   Manual Mapping: If automatic mapping does not identify all fields, you can manually map the CSV columns by selecting the appropriate target fields from the dropdown menus in the Field Mapping interface.Similarly, you can map the unmapped fields by selecting the unmapped check box as well if required.

4.  Preview and Submit

    Data Loader allows the user to validate any exceptions with the configurations in the tenant on this interface. This allows the user to check the data and make in-line modifications as the exceptions are highlighted in amber color for each cell.

5.  Completion

    Submit the job. Data Loader displays the failed and successful records. The failed records can be validated,modified and re-submitted with the interface.
