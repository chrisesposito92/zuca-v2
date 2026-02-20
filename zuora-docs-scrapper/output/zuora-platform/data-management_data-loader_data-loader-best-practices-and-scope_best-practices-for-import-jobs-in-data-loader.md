---
title: "Best practices for import jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-import-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:32.456Z"
---

# Best practices for import jobs in Data Loader

This reference guide outlines best practices for importing records, including file format requirements, header specifications, date formatting, and file size limitations.

-   The import file must be a CSV format encoded in UTF-8.

-   The first row must contain unique and non-empty column headers.

-   The maximum supported file size is 1 GB.

-   All date fields must use the supported formats defined in the Data Dictionary.

-   Ensure IsMarker columns are correctly mapped when importing nested objects. For example, Standalone Invoices or Payment Schedules.

-   When importing Accounts and Contact:

    -   Set the communication profile to Silent for Migration.

    -   Assign records to a dedicated migration batch.

    -   Accounts and Contact are created in Active state.


Note: Zuora recommends downloading the Advanced Multi-Action template directly from the target tenant. Templates are dynamically generated based on tenant-specific custom fields. If tenant configurations change, download a fresh template from the appropriate environment (Central Sandbox, Developer Sandbox, or Production).
