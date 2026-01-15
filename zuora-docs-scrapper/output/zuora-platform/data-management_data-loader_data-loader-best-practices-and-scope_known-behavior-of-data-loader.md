---
title: "Known behavior of Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/known-behavior-of-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:42.118Z"
---

# Known behavior of Data Loader

This article outlines the known behaviors and limitations of the Data Loader, including file format support, size limits, job submission constraints, and data mapping capabilities.

-   Zuora recommends retaining the letter case of any column headers in the CSV template. Modifying the header letter case may prevent Data Loader from correctly recognizing the fields and can cause upload or validation errors.

-   Data Loader supports trailing spaces in custom field values. Text fields retain values exactly as entered, so ensure any intended spaces are included or excluded in your upload file.

-   Data Loader currently supports CSV files encoded in UTF-8 format. UTF‑8 encoding supports a wide range of characters and languages and enables smooth data integration within Data Loader.

-   The maximum supported file size is 300 MB. Files larger than 300 MB are not accepted. Keeping file sizes within this limit helps ensure stable, efficient processing..

-   Data Loader allows a maximum of five jobs to be submitted at a time. This limit helps manage backend resource allocation and maintain performance. Consider this when planning and scheduling data migration jobs..

-   The first row of the CSV file must contain column headers.

-   Data Loader supports One-to-One field mapping. Each field in the CSV File can be mapped to the corresponding field in the target object, creating a similar structure to the previous system.

-   The import process is easier when the file structure resembles the object structure in Zuora. The product-level recommendation is to import data using the built-in templates. Data Loader automatically maps the fields, and you can modify the field mappings to suit your requirements.

-   Data Loader's current functionality includes support for acceptable data formats at the API level, ensuring smooth and accurate data migration. However, to enhance this capability further, we will be working on expanded date format support to accommodate user-specific preferences.Data Loader supports acceptable data formats at the API level for accurate data migration. Expanded date format support is planned for future enhancements to better accommodate user‑specific preferences.
-   Data Loader retains the 'Uploaded', 'Records successful', and 'Records failed' files for 60 days. After that, they are deleted and no longer available for download from the user interface.

-   Data Loader supports Billing and Payments objects for Z Billing. It does not support Zephr, Payment Methods, and Z-Revenue objects.

-   Data Loader supports Dynamic Templates. Dynamic templates allow users to customize data import formats based on the tenant level permissions enabled. It includes:

    -   Multiple Organizations Label Fields on Account
    -   Custom Fields
    -   Netsuite Integration fields (for Z Billing only)
    -   Other tenant-level permissions such as Multi-Currency, Invoice Settlement, etc.
-   The job fails if the uploaded CSV file contains a Byte Order Mark (BOM). Ensure that you upload the CSV file without the BOM and submit the job.

    ![ByteOrderMark job fail result](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60c24b24-b610-4480-a0f5-8efd164da253?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwYzI0YjI0LWI2MTAtNDQ4MC1hMGY1LThlZmQxNjRkYTI1MyIsImV4cCI6MTc2ODYwMDcxNywianRpIjoiY2Y4MDJiYWNkMTcyNDg4OGEwYmQxNjAzMWY3NWU1ODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.uBFJJIKOaqU_vyucf7dKQpGbd5zT1QDM6aGMm2s6cI4)

-   When you clone an existing job inData Loader, the following parameters are retained:

    -   Object: The source object from the original job is retained.
    -   Name of the Job: The name of the original job is retained. However, you can modify this field as needed.
    -   Field Mapping: If the columns in the uploaded CSV file remain unchanged, the existing field mapping is retained. If any columns in the CSV file have been modified, it is recommended to review and update the field mapping.
