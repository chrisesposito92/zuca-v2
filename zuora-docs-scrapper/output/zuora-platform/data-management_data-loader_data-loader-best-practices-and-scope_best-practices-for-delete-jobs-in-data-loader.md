---
title: "Best practices for delete jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-delete-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:57.538Z"
---

# Best practices for delete jobs in Data Loader

This guide outlines essential considerations and best practices for performing delete operations in a Zuora Tenant.

-   Before initiating any delete operation, create a backup of the data to be removed. You can export data for any object in CSV, Excel, or JSON format using Zuora Data Query. Deleted records cannot be restored. They are only available for reference.

    Deleted records can be reviewed using Data Query with the filter deleted = true.

-   Perform a test delete operations in a sandbox or test environment before executing them in Production to validate the process and understand its impact.

-   Begin by deleting a small batch of records to ensure that the deletion process works as expected and to identify any issues early.

-   Ensure that the correct field from the source file is accurately mapped to the record ID in the target, Zuora tenant. Record IDs are required to accurately identify and delete the intended records.

-   Data Loader supports delete actions at the Billing API level. Before deletion, carefully evaluate all dependencies associated with the records, as deleting dependent records may impact other data in the tenant.

-   Standalone Invoices can only be deleted when they are in the Draft State.

-   When deleting Accounting Periods, a successful records file may not be generated. As a workaround, place the most recent accounting period IDs first in the source file before uploading it for deletion.

-   Accounting Codes must be in inactive status for deletion.

-   Account deletion is an asynchronous process. For account deletion, the system starts a back-end job to remove all transactions under the accounts and change the status of the accounts to Canceled. The completion time depends on the volume of data.

-   An account cannot be deleted if:

    -   The account is either the invoice owner or the subscription owner of a subscription.

    -   The subscription's invoice owner and subscription owner are two different accounts. To remove this limitation, set the [Enable Force Deletion for Account](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/default-subscription-settings#reference-a1ymumjk__row-2028) setting to Yes to force delete an account that is the subscription owner of a subscription while the invoice owner is a different account. Force deleting this account deletes all its subscriptions, but the relevant invoices are not impacted.

    -   That account has ever been involved in an Owner Transfer amendment or order action, either as the current owner or as the previous owner.
