---
title: "Product rate plan charge transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-rate-plan-charge-transaction-sync/product-rate-plan-charge-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:44.515Z"
---

# Product rate plan charge transaction sync rules

Here are the product rate plan charge transaction sync rules

This integration syncs records according to the following rules:

1.  If the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, initialize the date from which to query Zuora for recent changes. If this is the first time the charge sync is run, the date will be set to Jan 1, 1970 to extract all charges. If the sync has already run, the date will be set to that of the most recently successfully synced Zuora charge (captured during the previous sync).
    -   If the Product Catalog Sync Behavior preference was recently switched from `Sync New Records Only` to `Sync New and Modified Records`, the query date will be set to the current system time. Typically, no records will be extracted during that sync. Only records modified after that sync will be extracted in future syncs. You can re-save Zuora records can without making any changes to trigger the sync to extract the records.
2.  Zuora product rate plans are synced if they meet the following criteria:
    -   The Effective Start Date is less than or equal to current system time.
    -   The Effective End Date is greater than or equal to current system time.
    -   The Integration Status is empty, or any status other than `Sync Complete`.
    -   Additionally, if the Product Catalog Sync Behavior preference is set to `Sync New and Modified Records`, the Integration Status must be `Sync Complete` and the Updated Date must be greater than the last time NetSuite Connector completed the charge sync successfully.
3.  The sync action is determined based on your preferences and the record's characteristics:
    -   If the Integration ID is empty, the record will be created in NetSuite.
    -   If the Integration ID is populated and the Product Catalog Sync Behavior preference is set to `Sync New and Modified Records`, the record will be updated in NetSuite.
    -   If the Integration ID is populated and the Product Catalog Sync Behavior preference is set to `Sync New Records Only`, the record will be linked. This means that only the Zuora-related custom fields will be populated in NetSuite, but no standard fields will be modified.
4.  The following validations are performed during the sync to ensure data integrity (validation skipped if linking a record):
    -   If populated, the Zuora Accounting Code matches a valid NetSuite Income GL Account.
    -   If the NetSuite Connector preference NetSuite Use Revenue Recognition is set to `Yes`, the Zuora NetSuite Deferred Revenue Account (if populated) matches a valid NetSuite Deferred Revenue GL Account.
    -   If the NetSuite Connector preference NetSuite Use Revenue Recognition is set to `Yes`, the Zuora Revenue Recognition Code (if populated) matches a valid NetSuite revenue recognition template.
    -   If populated, the Zuora NetSuite Location matches a valid NetSuite location.
    -   If populated, the Zuora NetSuite Class matches a valid NetSuite class.
    -   If populated, the Zuora NetSuite Department matches a valid NetSuite department.
    -   The Zuora Item Type field is populated.
    -   If the Integration Status is `Sync Complete`, the Integration ID must be populated.
    -   If the NetSuite Connector preference NetSuite Use Subsidiaries is set to `Yes`, the Zuora NetSuite Subsidiary (if populated) matches a valid NetSuite subsidiary.
5.  The remaining steps depend on whether the transaction sync is creating, updating, or linking a record.

## Creating a record

1.  The Zuora charge's Integration Status is updated to `Creating Item` to indicate the record is currently being synced and to assist with error recovery.
2.  The NetSuite item is created.
3.  Upon successful creation of the NetSuite item, the new NetSuite internal ID is written back to the Zuora charge and the Integration Status is updated to `Sync Complete`.

## Updating a record

1.  The Zuora charge's Integration Status is not updated. This prevents circular updates.
2.  The NetSuite item is updated (standard and Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, no updates are made to the Zuora charge.

## Linking a record

1.  The Zuora charge's Integration Status is updated to `Linking Item` to indicate that the record is being synced and to assist with error recovery.
2.  The NetSuite item is updated (only Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, the Integration Status is updated to `Sync Complete` on the Zuora charge.
