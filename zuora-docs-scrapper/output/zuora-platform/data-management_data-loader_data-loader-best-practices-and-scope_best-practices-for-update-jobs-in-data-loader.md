---
title: "Best practices for update jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-update-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:57.231Z"
---

# Best practices for update jobs in Data Loader

The reference topic outlines the best practices for updating records in a Zuora tenant, including data preparation, backup, validation, testing in a sandbox, and loading data in production.

-   Export the existing records to be updated. Use Zuora Central Platform Data Query to retrieve the required record IDs.

-   Create a backup of the current data before making updates, to allow recovery if needed.

-   Ensure the data complies with Billing and Payments API validation rules and that the CSV uses a Data Loader supported template format:

    -   The File must be in CSV format and encoded in UTF-8.

    -   The first row must contain unique, non-empty column headers.

    -   Record IDs must be included for accurate updates.

    -   All date fields must follow the supported formats defined in the Data Dictionary.

    -   Maximum supported file size is 300 MB.


-   Run the update job in a sandbox environment before applying it to production to identify and fix any issues.

-   After successful validation, execute the update in Production and review the status in the data loader list view page.


Note: Zuora recommends to download the template from the target tenant since the templates are dynamically generated based on custom field configurations at the tenant level. Download a new template whenever tenant configurations change.
