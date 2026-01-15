---
title: "Best practices for import jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-import-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:26.097Z"
---

# Best practices for import jobs in Data Loader

This reference guide outlines best practices for importing records, including file format requirements, header specifications, date formatting, and file size limitations.

-   The import file should be a CSV, UTF-8 format.

-   Ensure that the file does not contain duplicate or empty headers.

-   The first row of the file should contain column headers.

-   Ensure that all the date fields are rightly formatted. The supported date formats are available in the Data Dictionary.

-   A maximum file size of 1GB is allowed.

-   Make sure that the IsMarker Column is mapped right when importing records in a nested object. For example, Standalone Invoices, Payment Schedules etc.

-   When loading records in Accounts and Contact, perform the following:

    -   Change the associated communication profile for Migration to Silent.

    -   Change the Batch to a Batch that is created for migration.

-   Accounts and Contact will be created in Active state.


Note: Zuora recommends downloading the template directly from the target tenant because templates are dynamically generated based on tenant-level custom field customizations. Since configuration changes are occasional, you can download the templates as needed from the target tenant, such as a Central Sandbox, Developer Sandbox, or Production environment.
