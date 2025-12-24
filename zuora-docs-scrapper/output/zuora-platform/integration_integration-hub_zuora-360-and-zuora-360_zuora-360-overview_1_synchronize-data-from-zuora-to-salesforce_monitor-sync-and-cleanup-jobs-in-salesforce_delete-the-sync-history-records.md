---
title: "Delete the sync history records"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/monitor-sync-and-cleanup-jobs-in-salesforce/delete-the-sync-history-records"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:19.234Z"
---

# Delete the sync history records

This task guides you through deleting sync history records in Salesforce to manage storage space effectively.

Zuora 360 uses the following two custom objects to store sync results:

-   Sync History (Zuora\_\_Sync\_History\_\_c) : Each time a Zuora 360 sync job runs, a Sync History record is created in Salesforce.

-   CrmId Change Result (Zuora\_\_CrmId\_Change\_Result\_\_c) : For each Sync History record, five CrmId Change Result records are created when there is a CRM account ID change. The records track data of the following five object types:

    -   Refund

    -   Payment

    -   Subscription Product and Charges

    -   Subscription

    -   Invoice


The records are used to update Salesforce Account reference field in the above children objects when a customer changes a CRM ID for a Billing Account.

The Sync History and CrmId Change Results records are read-only and saved in Salesforce for seven days. In the version older than 2.80.6 or 2.90.1, these records are saved for 30 days.

Even though you should not delete these sync result records in normal circumstances, if you run out of Salesforce storage space, take the following steps to delete the records.

1.  Navigate to Developer Console .
2.  Click Debug and then Open Execute Anonymous Window .
3.  Paste code in the window: `List<Zuora__Sync_History__c> history = [ SELECT Id ​ FROM Zuora__Sync_History__c WHERE Zuora__Finished_On__c < :Datetime.now().addDays(-30) LIMIT 9000 ]; delete history;`
4.  Click Execute . The script deletes the 9000 records of Sync History that are older than 30 days.
