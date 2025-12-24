---
title: "Integration status and error recovery"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/integration-status-and-error-recovery"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:04.287Z"
---

# Integration status and error recovery

A custom field on every Zuora and NetSuite record that is synced

The Integration Status field is a custom field on every Zuora and NetSuite record that is synced. NetSuite Connector uses this field to determine which records have been synced (in conjunction with other record-specific criteria, including Transferred to Accounting), and what to do with a record in the event of an unexpected error.

## Integration Status

The Integration Status field will be updated on the source record. For example, when syncing Invoices from Zuora to NetSuite, the Zuora invoice's Integration Status will change from `Creating` to `Sync Complete`. However, the Integration Status on the NetSuite invoice or credit memo will remain empty.

The Integration Status field will contain one of the following values:

| Value | Description |
| --- | --- |
| Blank/no value | NetSuite Connector has not attempted to sync the record. |
| Sync Complete | The record was synced successfully to the destination application. |
| Creating/Updating record type | NetSuite Connector is currently attempting to sync the record. If the sync is not currently running, this indicates that an unexpected runtime error occurred during the last sync attempt, and NetSuite Connector will try to recover the next time it runs. The record may or may not have been created in the destination application depending on at what point the error occurred. |
| Error Creating/Updating record type | The record was attempted but failed to sync due to a validation warning returned from the destination application. |

Note:

Do not manually add or modify this value unless performing specific troubleshooting steps. Editing this value can cause the record to resync, and can potentially create duplicate records in the destination application.

## Updating the Integration Status field

The following describes how the Integration Status field is updated:

1.  When a record meets the selection criteria (typically if the Integration Status is not `Sync Complete`), it is extracted from the source application. After passing initial validations, the Integration Status on the source record is updated to `Creating/Updating *record type*`, depending on the specific sync situation.
    -   For example, `Creating Invoice` or `Updating Customer Account`. This tells the Connector that this record has attempted to be synced and helps with recovery if an error occurs during the sync.
2.  Upon successfully creating or updating the record in the destination application, the source record's Integration Status is updated to `Sync Complete`.
3.  If an application validation warning is returned by the destination application when attempting to sync the record, the Integration Status is updated to `Error Creating/Updating *record type*` (for example, `Error Creating Invoice`). The warning message is captured in the sync log.

Some types of records have multiple "steps," and can have multiple intermediate Integration Status values. For example, when syncing a Zuora refund, its integration status will transition from `Updating Payment` to `Creating Refund`, then to `Sync Complete`.

## Error recovery

In the event of an unexpected error during the sync, NetSuite Connector will reprocess any records that were affected the next time that it runs. It uses the Integration Status field of the source record to determine how to process a given record:

-   If the Integration Status is blank, the record will be synced normally and create a new record in the destination application. No special logic is performed.
-   If the Integration Status is `Creating/Updating *record type*` or `Error Creating/Updating *record type*`, the record may or may not have been created in the destination application, depending on where the error occurred. NetSuite Connector queries the destination application to look for a corresponding record (it queries by Zuora ID or NetSuite ID, respectively). If it finds a match, the record was synced successfully and the source record's Integration Status is updated to `Sync Complete`. If it does not find a match, the record is synced normally.
