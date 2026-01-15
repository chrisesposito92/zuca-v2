---
title: "Get started with  Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/get-started-with-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:34.793Z"
---

# Get started with Data Loader

This topic provides an overview of Data Loader UI functionality.

Using the Data Loader UI, you can upload data files, map fields, validate records, and monitor the status of jobs. The available job types include import, delete, update, and cancel records.

## Prerequisites

-   Data Loader is available as a platform feature for Zuora Billing, Payments, and Finance objects.

-   Enable Data Loader permission under Platform Permissions to access Data Loader.

-   Users must have the required user-level permissions for the specific action they are performing (import, delete, or update). For example, to create accounting periods, the Create Accounting Period permission must be enabled under Finance.

-   Access to Data Loader is available to all the Admin users by default.

-   Standard users can access the feature by enabling the Data Loader permission through custom roles. See [Platform roles](/zuora-platform/system-management/administrator-settings/user-roles/platform-roles).

-   Enable the required tenant-level and user-level permissions before initiating a data migration job.

## Workflow Process

When you select a job type, the stepper at the top of the header displays the steps of the workflow. The workflow consists the following steps:

1.  Upload the File

    Upload the data file to be processed . All input files must be in CSV format and the first row must contain column headers.Use Data Loader templates to upload or manipulate records. Zuora recommends downloading the template from the target tenant because templates are dynamically generated and include the latest tenant configuration.

2.  Map and Validate Fields

    Map the file columns to the corresponding Zuora fields and validate the data to identify errors or missing information.

3.  Run and Monitor the Job

    Submit the job and monitor its progress. After completion, review the results to confirm that the records were processed successfully.
