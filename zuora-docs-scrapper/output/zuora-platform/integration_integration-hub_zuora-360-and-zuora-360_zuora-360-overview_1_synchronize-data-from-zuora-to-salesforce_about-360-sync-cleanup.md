---
title: "About 360 sync cleanup"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/about-360-sync-cleanup"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:34.554Z"
---

# About 360 sync cleanup

The topic provides an overview of 360 Sync cleanup operation that removes all Zuora data from Salesforce.

The 360 Sync Cleanup operation removes all Zuora data from Salesforce, forcing the next sync operation to perform a full synchronization.

A 360 Sync brings data over from Zuora to Salesforce in the following manner:

-   The initial sync brings over all data in a full sync.

-   After the first sync, subsequent syncs bring over new and updated data in an incremental sync.

-   After a sync clean up, the next sync is always a full sync.


Note:

If you are considering a Sync Cleanup operation simply to do a forced full sync, instead of running the Cleanup, we recommend that you contact Zuora Support for helping with a full sync.

The 360 Sync Cleanup removes your Zuora data from Salesforce.

-   For the Accounts & Related Objects that are used with Zuora 360, the Customer Accounts, Customer Hierarchies, Subscriptions, Subscription Product Charges, and Invoices data are removed.

-   For the Product Catalog that is used with Zuora Quotes), the entire Zuora Product Catalog data is removed from Salesforce.


Zuora recommends that you use the 360 Sync Cleanup only when necessary. The following points should be considered before a Cleanup operation on Account & Related Objects:

-   The number of records: If the number of records is large, e.g., over 1,000,000, the Sync Cleanup is not recommended.

-   The execution time needed: During the Cleanup, the 360 Sync service will be stopped.

-   The broken linkage of these records with other Salesforce objects, if the customer has created Lookup relationships in their organization to 360 objects.


Zuora Quotes version 3.x and later includes a migration utility that prevents the cleanup process from removing products from existing quotes.

Performing a cleanup in version 3.x and later is safe, but it is not safe to perform a cleanup using any version of Zuora Quotes prior to 3.x.

Note: Be aware that quotes created using the existing product catalog in Salesforce may not work properly after you run Product Catalog Cleanup
.
