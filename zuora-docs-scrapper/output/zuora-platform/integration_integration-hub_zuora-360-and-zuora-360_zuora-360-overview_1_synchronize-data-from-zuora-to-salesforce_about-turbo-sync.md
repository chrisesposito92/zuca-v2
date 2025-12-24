---
title: "About turbo sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/about-turbo-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:23.731Z"
---

# About turbo sync

Turbo Sync is used by all Zuora 360 tenants for Zuora-to-Salesforce synchronization. Turbo Sync reflects a complete re-architecture of Zuora synchronization technology, including:

-   Sophisticated logic based on object hierarchies

-   Improved use of Salesforce APIs and thread model

-   Parallel pipelines for most objects

-   More bulk/batch-oriented sync operations

-   Resume-ability. On retries, Turbo Sync skips the records that were already successfully synced.​

-   Ability to monitor sync status from Salesforce


Turbo Sync uses the Salesforce Bulk API to push data in bulk to the target Salesforce org for optimal data synchronization performance. The Bulk API is automatically available for Salesforce Developer Edition, Enterprise Edition, and Unlimited Edition.

Bulk API feature is not enabled by default for some Enterprise Edition customers and Professional Edition with API Access customers.

Error: There has been an unknown internal error happened. (FeatureNotEnabled : Async API not enabled) StackTrace: \[AsyncApiException exceptionCode='<wbr/>FeatureNotEnabled' exceptionMessage='Async API not enabled'\] at com.sforce.async.<wbr/>BulkConnection.<wbr/>parseAndThrowException(<wbr/>BulkConnection.java:108) at ...2 more at com.zuora.sync.sfdc.migration.<wbr/>impl.SfdcMigrationAgentImpl$<wbr/>SfdcBulkApiConnection$1.<wbr/>operation(<wbr/>SfdcMigrationAgentImpl.java:<wbr/>838) at com.zuora.sync.sfdc.migration.<wbr/>impl.SfdcMigrationAgentImpl$<wbr/>SfdcB

File a ticket with Salesforce Support to have the Bulk API feature enabled at no extra charge. We strongly recommend that you have the feature enabled to take advantage of performance improvements and resume-ability of Turbo Sync. ​

Note the following points about Turbo Sync:

-   In the new workflow, it's important that your billing account records contain a valid CRM Account ID that refers to an actual account. Otherwise the sync will finish with errors, and you'll see an error message in the sync result.

-   On the Sync Result Detail page, the objects are displayed in the order they are synced. Since the Turbo Sync is multi-threaded, the order of the objects being synchronized may not be the same each time.

-   Note: We do not recommend uses of locks and custom triggers with Turbo Sync. Refer to the following article that describes how locks and custom triggers impact the performance of parallelism: The Salesforce Bulk API - Maximizing Parallelism and Throughput Performance When Integrating or Loading Large Data Volumes​


For the Zuora 360 packages that are older than version 2.2, Turbo Sync is not available, thus the API-based sync is used.

For more information about synchronization, refer to syncing in Zuora 360 .

## Turbo Sync and Salesforce Chatter

If Salesforce Chatter Feed is turned on for the Billing Account, Subscription, and Invoice objects, a Chatter feed is created for every record that is synchronized to Salesforce from Zuora during a sync session. Consequently, Turbo Sync sessions could take 2-3 times longer.
