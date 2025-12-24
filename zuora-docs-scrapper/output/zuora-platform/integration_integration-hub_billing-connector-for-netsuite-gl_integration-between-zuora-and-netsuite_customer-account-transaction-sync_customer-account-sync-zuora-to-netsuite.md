---
title: "Customer account sync: Zuora to NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-zuora-to-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:40.903Z"
---

# Customer account sync: Zuora to NetSuite

Process that syncs new or recently modified Zuora accounts to NetSuite customers

This process syncs new or recently modified Zuora accounts to NetSuite customers. Zuora Bill To Contact and Sold To Contact information is mapped to the Address List associated with the NetSuite customer (not to NetSuite Contacts).

## Transaction sync rules

This integration syncs records according to the following rules:

1.  If the Customer Account Sync Behavior option is set to `Sync New and Modified Records`, initialize the date from which to query Zuora for recent changes. If this is the first time the customer account sync is run, the date will be set to Jan 1, 1970 to extract all customer accounts. If the sync has already run, the date will be set to that of the most recently successfully synced Zuora account (captured during the previous sync). In the Advanced Settings, you can configure the Transaction Cutover Dates. This feature enables the connector to select only the accounts created from the specified cutover date onward. By default, the connector includes accounts starting from January 1970.
    -   If the Customer Account Sync Behavior preference was recently switched from `Sync New Records Only` to `Sync New and Modified Records`, the query date will be set to the current system time. Typically, this means that no records will be extracted during the current sync. Only records modified after that sync will be extracted in future syncs. Note that Zuora records can be re-saved without making actual changes to trigger the sync to extract them.
2.  Zuora customer account records are synced if they meet the following criteria:
    -   The Status is `Active`.
    -   The Sync to NetSuite option is `Yes` (new records are defaulted to`Yes`or Sync to NetSuite option is`null`).
    -   The Integration Status is empty or not `Sync Complete`.
    -   If the Customer Account Sync Behavior preference is set to `Sync New and Modified Records`, Integration Status is `Sync Complete` and the Updated Date is greater than the last time NetSuite Connector completed the customer sync successfully.
3.  The sync action is determined based on your preferences and the record's characteristics:
    -   If the Integration ID is empty, the record will be created in NetSuite.
    -   If the Integration ID is populated and the Customer Account Sync Behavior option is set to `Sync New and Modified Records`, the record will be updated in NetSuite.
    -   If the Integration ID is populated and Customer Account Sync Behavior option is set to `Sync New Records Only`, the record will be linked. This means that only the Zuora-related custom fields will be populated in NetSuite, and standard fields will not be modified.
4.  The following validations are performed during the sync to ensure data integrity (this validation is skipped if linking a record):
    -   The Zuora Terms match valid NetSuite Terms.
    -   The Zuora Currency alphabetic code matches a valid NetSuite Currency symbol.
    -   If Integration Status is `Sync Complete`, the Integration ID must be populated.
    -   If the NetSuite Connector option NetSuite Subsidiaries is `Yes`, then the Zuora NetSuite Subsidiary, if populated, matches a valid NetSuite Subsidiary.
5.  When you enable the syncing of Zuora accounts to Netsuite,
    -   The Attention field needs to include the first and last name of the recipient for a shipment.
    -   The Addressee field should include the company name.
6.  To prevent data synchronization issues, refrain from utilizing double quotation marks ("") and commas (,) in the Account Name field.
7.  The remaining steps depend on whether the transaction sync is creating, updating, or linking a record.

## Creating a record

If the sync is creating a record:

1.  The Zuora customer account's Integration Status is updated to `Creating Customer` to indicate that the record is currently being synced and to assist with error recovery.
2.  The customer is created in NetSuite.
3.  Upon successful creation of the NetSuite customer, the new NetSuite internal ID is written back to the Zuora customer account and the Integration Status is updated to `Sync Complete`.

## Updating a record

If the sync is updating a record:

1.  The Zuora customer account's Integration Status is not updated. This is to prevent circular updates.
2.  The NetSuite customer is updated (standard and Zuora-related fields).
3.  Upon successful modification of the NetSuite Customer, nothing is updated on the Zuora customer account.

## Linking a record

If the sync is linking a record:

1.  The Zuora customer account's Integration Status is updated to `Linking Customer` to indicate the record is currently being synced and to assist with error recovery.
2.  The NetSuite customer is updated (only Zuora-related custom fields).
3.  Upon successful modification of the NetSuite customer, the Integration Status is updated to `Sync Complete` on the Zuora customer account.
