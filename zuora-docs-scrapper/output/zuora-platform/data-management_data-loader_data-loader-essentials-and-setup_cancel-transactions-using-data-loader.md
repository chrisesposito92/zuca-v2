---
title: "Cancel transactions using Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/cancel-transactions-using-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:45.464Z"
---

# Cancel transactions using Data Loader

Learn how to cancel transactions using Data Loader.

Data Loader supports mass cancellation of transactional records to ensure seamless synchronization with the status of Z-Billing and Payments objects for each record.

Note: This topic describes how to cancel transactions. The same steps apply to update and delete transactions.

1.  Select New from the Data Loader list view.
2.  Select Cancel from the drop-down menu.
    Create Cancel Transaction Job window pops up.

3.  Select Object to cancel.
4.  Select Download Sample Template and populate the required field in the template.

    Note: Canceling Transactions requires the unique record ID to be incorporated in the .csv file. The record ID may be retrieved from Data Query. No additional fields are required in the .csv file for canceling records. Zuora recommends you back up the data before changing the transaction status to Cancel.

    Cancellation is not supported for all transactions. For transactions that support cancellation, refer to [supported cancel jobsNo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/platform/data\_management/data\_loader/topics/data\_loader\_jobs\_supported\_for\_cancellation.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/topics/data_loader_jobs_supported_for_cancellation.dita).

5.  Provide a Job Name and click Next.
6.  Verify the mapping and click Next.
7.  Click Submit.
