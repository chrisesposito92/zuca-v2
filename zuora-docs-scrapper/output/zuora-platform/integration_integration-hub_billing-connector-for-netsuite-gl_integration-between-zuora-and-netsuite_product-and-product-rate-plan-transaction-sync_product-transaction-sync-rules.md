---
title: "Product transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync/product-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:35.425Z"
---

# Product transaction sync rules

Here are the product transaction sync rules

This integration syncs records according to the following rules:

1.  If the Product Catalog Sync Behavior preference is set to `Sync New and Modified Records`, initialize the date from which to query Zuora for recent changes. If this is the first time the product sync is run, the updated date of product rate plan and product rate plan charge will be set to Jan 1, 1970 to extract all products. If the sync has already run, the date will be set to that of the most recently successfully synced Zuora product (captured during the previous sync).
    -   If the Product Catalog Sync Behavior option was recently changed from `Sync New Records Only` to `Sync New and Modified Records`, the query date will be set to the current system time. Typically, this means that no records will be extracted during that sync. Only records modified after that sync will be extracted in future syncs. Note that you can re-save Zuora records without making changes to trigger the sync to extract them.
2.  Zuora product records are synced if they meet all of the following criteria:
    -   The Effective Start Date is less than or equal to current system time.
    -   The Effective End Date is greater than or equal to current system time.
    -   The Integration Status is empty or any status other than `Sync Complete`.
    -   Additionally, if the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, the Integration Status is `Sync Complete` and the Updated Date is greater than the last time NetSuite Connector completed the product rate plan sync successfully.
3.  The sync action is determined based on your preferences and the record's characteristics:
    -   If the Integration ID is empty, the record will be created in NetSuite.
    -   If the Integration ID is populated and the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, the record will be updated in NetSuite.
    -   If the Integration ID is populated and the Product Catalog Sync Behavior option is set to `Sync New Records Only`, the record will be linked. This means that only the Zuora-related custom fields will be populated in NetSuite, and standard fields will not be modified.
4.  The following validations are performed during the sync to ensure data integrity (validation skipped if linking a record):
    -   The Zuora Item Type field is populated.
    -   If the Integration Status is `Sync Complete`, the Integration ID must be populated.
5.  The remaining steps depend on whether the transaction sync is creating, updating, or linking a record.

## Creating a record

If the sync is creating a record:

1.  The Zuora product's Integration Status is updated to `Creating Item` to indicate that the record is currently being synced and to assist with error recovery.
2.  The NetSuite item is created.
3.  Upon successful creation of the NetSuite item, the new NetSuite internal ID is written back to the Zuora product and the Integration Status is updated to `Sync Complete`.

## Updating a record

If the sync is updating a record:

1.  The Zuora product's Integration Status is NOT updated. This prevents circular updates.
2.  The NetSuite item is updated (standard and Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, no updates are made to the Zuora product.

## Linking a record

If the sync is linking a record:

1.  The Zuora product's Integration Status is updated to `Linking Item` to indicate that the record is currently being synced and to assist with error recovery.
2.  The NetSuite item is updated (only Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, the Integration Status is updated to `Sync Complete` on the Zuora product.
