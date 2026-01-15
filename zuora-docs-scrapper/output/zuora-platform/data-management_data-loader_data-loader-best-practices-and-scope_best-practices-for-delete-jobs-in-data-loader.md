---
title: "Best practices for delete jobs in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-delete-jobs-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:26.923Z"
---

# Best practices for delete jobs in Data Loader

This guide outlines essential considerations and best practices for performing delete operations in a Zuora Tenant.

This article enumerated the key points to keep in mind while performing a Delete job operation in a Zuora Tenant via Data Loader:

-   When deleting Accounts, take a back up in a CSV, Excel, JSON or any preferred format. The deleted accounts can be reviewed by using Data Query using the filter `deleted` `=` `true.` Deleted records cannot be restored. They will only be available for reference.
-   Before initiating a mass deletion, ensure you create a backup of the data you plan to remove. You can export the data in CSV, Excel, or JSON format for any object. You can use Zuora Data Query for creating a backup file. This ensures that you have a copy of the data in case you need to recover it later. Perform a test data deletion action in a sandbox or test environment first to verify the process and its effects without impacting your actual production data.
-   Begin by deleting a small batch of records to ensure that the deletion process works as expected and to identify any issues early.
-   When performing delete actions, ensure that the correct field from the source file is accurately mapped to the record ID in the target, Zuora tenant. The record ID is a unique identifier assigned to each record in the target system, and it is essential for accurately identifying and deleting the intended records.
-   Data Loader functionality includes support for delete action at the Billing API level. Consider all potential dependencies that the records may have before deletion. Deleting records with dependencies could impact other data in the Zuora tenant.
-   Standalone Invoices can only be deleted if they are in the Draft State.
-   When you delete Accounting Periods, you may not be able to get the direct successful records file. A quick workaround would be to reverse the order, where recent accounting period IDs need to be placed first and uploaded for delete.
-   Accounting Codes must be in inactive status for deletion.
-   Account deletion is an asynchronous process. For account deletion, the system starts a backend job to remove all transactions under the accounts and change the status of the accounts to 'Cancelled'. This backend job is asynchronous and can take some time depending on the job size.
-   An account cannot be deleted if:

    -   The account is either the invoice owner or the subscription owner of a subscription.
    -   The subscription's invoice owner and subscription owner are two different accounts. To remove this limitation, set the '[Enable Force Deletion for Account](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/default-subscription-settings#reference-a1ymumjk__row-2028) ' setting to Yes to force delete an account that is the subscription owner of a subscription while the invoice owner is a different account. Force deleting this account deletes all its subscriptions, but the relevant invoices are not impacted.
    -   That account has ever been involved in an Owner Transfer amendment or order action, either as the current owner or as the previous owner.
