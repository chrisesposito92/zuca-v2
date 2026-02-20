---
title: "Enable invoice settlement"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/enable-invoice-settlement-for-billing---revenue-integration/enable-invoice-settlement"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:36.651Z"
---

# Enable invoice settlement

Follow these steps to enable Invoice Settlement in Zuora Revenue, including customizing templates and running sync jobs.

Complete the following steps to enable Invoice Settlement in Zuora Revenue:

1.  In the Zuora Revenue UI, navigate to File Upload > Transactions/Cost .
2.  Make a copy of the following standard Invoice Settlement templates and customize them as needed for each entity: See [Upload transactions](/zuora-revenue/data-management/transaction-processing) for more information.

    -   Subscription Credit Memo Template (Pre-Configured)

    -   Subscription Debit Memo Template (Pre-Configured)


3.  Edit the copied templates to specify the following information as well as other details as necessary. Revenue Sync jobs will pick up and transform data based on only the default template for each transaction type.

    -   In the Entity ID field, select the target entity ID.

    -   In the Category field, select Credit Memo Item or Debit Memo Item depending on which template you are editing.

    -   To use the current template for a certain type of transaction, toggle the Is this a default template? switch to Yes .


4.  Navigate to Reports > Schedule Jobs .
5.  Start the RevPro3.0 Sync Object Mapping program. The following parameters must be specified as indicated below when the program is run. See [Schedule Jobs](/zuora-revenue/month-end-process/reports/schedule-jobs) for more information about how to start a program.

    -   Set the Invoice Settle Enabled parameter to Y.

    -   Set the Preserve Custom Fields parameter to Y. Otherwise, the previously synced custom objects and fields will be cleared.

    -   If Multi-entity is enabled in Zuora Billing, run the program for each entity.


6.  Run a one-off Revenue Sync job to sync the history data for the Credit Memo and Debit Memo objects. For more information, see [Run Revenue Sync jobs](/zuora-revenue/advanced-revenue-operations/run-revenue-sync-jobs) for more information.

    -   If the AUTO\_REVENUESYNC profile is set to Yes in your environment, contact Zuora Support to start the job.

    -   If the AUTO\_REVENUESYNC profile is set to No, navigate to Reports > Schedule Jobs to start the Revenue Sync job.
