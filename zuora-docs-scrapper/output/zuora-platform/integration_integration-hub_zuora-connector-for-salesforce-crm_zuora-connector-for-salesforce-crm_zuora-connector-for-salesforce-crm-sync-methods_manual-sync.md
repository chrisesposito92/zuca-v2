---
title: "Manual sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/manual-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:32.630Z"
---

# Manual sync

Learn how to manually trigger data synchronization between Zuora and Salesforce CRM using SOAP APIs to ensure data consistency and up-to-date information.

Manual sync refers to the process of manually triggering the synchronization of data between Zuora and Salesforce CRM system. It allows you to manually update or transfer data between Zuora and Salesforce CRM, ensuring that the information remains consistent and up to date. The synchronization utilizes SOAP APIs to sync data to Salesforce.

1.  In the Manual Sync section, click the Sync button and select the objects to sync from the list. Accounts & Related Objects and Product Catalog are available for sync.
2.  If you select Accounts & Related Objects , note the following:
    1.  only the subscriptions in the Active, Pending, and Cancelled state are synced to Salesforce. Draft and Deleted subscriptions are not synced to Salesforce.
    2.  currently, only incremental sync is supported; full/historic sync is not supported.
3.  Click Sync . The Sync Started pop-up window appears to confirm that the sync request was queued. When the sync is completed, your data can be viewed from Salesforce for the object you selected to sync.

If you encounter an "unable to sync" error while manually synchronizing product catalog objects, kindly verify that the Zuora Quotes managed package is installed in your Salesforce org and ensure that all product catalog objects are selected on the object selection page.
