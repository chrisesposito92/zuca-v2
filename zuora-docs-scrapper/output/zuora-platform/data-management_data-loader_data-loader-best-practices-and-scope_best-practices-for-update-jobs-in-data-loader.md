---
title: "Best Practices for update jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-update-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:27.354Z"
---

# Best Practices for update jobs in Data Loader

This task outlines the best practices for updating records in a Zuora tenant, including data preparation, backup, validation, testing in a sandbox, and loading data in production.

1.  Prepare Data - Export the existing records that need to be updated. Zuora Central Platform provides Data Query, which may be used to capture record IDs. .
2.  Backup Data - Always create a backup of the current data before making updates to ensure that it can be restored if needed.
3.  Data Validation and Prepare the Data for Data Loader- Ensure that the data is validated as per the Billing and Payments APIs and the CSV is in Data Loader supported template format. follow the steps mentioned below to prepare the CSV for update action:

    -   The import file should be a CSV, UTF-8 format
    -   Ensure that the file does not contain duplicate or empty headers.
    -   The first row of the file should contain column headers.
    -   Make sure that the record ID is captured in the CSV for data accuracy.
    -   Ensure that all the date fields are correctly formatted. The supported date formats are available in the Data Dictionary.
    -   A maximum file size of 1GB is allowed.

4.  Test In Sandbox - Always test the update job in a sandbox environment before applying it to production to identify and fix any issues. Verify and check the records in the sandbox to ensure accuracy.
5.  Load Data in Production - Once the data is verified, update the records in the production environment and review the job's status in the data loader list view page.

Zuora recommends that users download the template from the target tenant since the templates are dynamically generated based on custom field customizations at the tenant level. Since configuration changes are occasional, you can download the templates directly from the target tenant.

For example, your target tenant can be the Central Sandbox, Developer Sandbox, or Production Environment.
