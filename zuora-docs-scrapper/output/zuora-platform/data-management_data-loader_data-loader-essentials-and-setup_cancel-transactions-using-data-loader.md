---
title: "Cancel transactions using Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/cancel-transactions-using-data-loader"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:15.517Z"
---

# Cancel transactions using Data Loader

Learn how to use Data Loader to cancel transactions, ensuring synchronization with Z-Billing and Payments objects.

Data Loader supports mass cancellation of transactional records to ensure seamless synchronization with the status of Z-Billing and Payments objects for each record.

To initiate a cancel data migration action:

1.  Select New from the Data Loader list view
2.  Select Cancel from the drop-down menu.
    Create Cancel Transaction Job window pops up.

3.  Select the record to cancel.

    Note: Canceling Transactions requires the unique record ID to be incorporated in the .csv file. The record ID may be retrieved from Data Query. No additional fields are required in the .csv file for canceling records. Zuora recommends you back up the data before changing the transaction status to Cancel.

    Data Loader supports canceling transactions on the following objects:

    | Object | User Permission | Status | Reference article |
    | --- | --- | --- | --- |
    | Credit and Debit Memos | Billing user permission | Draft |  |
    | Payment Schedule | Payment user permission | Active |  |
    | Payments | Payment user permission | Processed |  |
    | Standalone Invoices | Billing user permission | Draft |  |
    | Subscription | Billing user permission | Active |  |

4.
