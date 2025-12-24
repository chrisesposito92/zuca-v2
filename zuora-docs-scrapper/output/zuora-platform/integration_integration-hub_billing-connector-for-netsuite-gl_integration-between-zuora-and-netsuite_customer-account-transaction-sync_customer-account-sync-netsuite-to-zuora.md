---
title: "Customer account sync: NetSuite to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:44.128Z"
---

# Customer account sync: NetSuite to Zuora

Process syncs new or recently modified NetSuite Customer to Zuora Accounts and Contacts

This process syncs new or recently modified NetSuite Customer to Zuora Accounts and Contacts. The Zuora Bill To and Sold To Contact information is mapped from the NetSuite Customer's address list (Default Billing Address and Default Shipping Address, respectively), NOT the Customer's separate Contact records. The sync will create and maintain two separate Zuora Contacts, even if the Bill To and Sold To information is the same. Only Customers that have been explicitly flagged to "Send To Zuora" will be synced.

## Customer account transaction sync notes

Creating the Zuora Account is a four-step sequence:

1.  Create an account in `Draft` status.
2.  Create a bill to contact.
3.  Create a sold to contact.
4.  Update the account to `Active` status and set the Bill to Contact and Sold to Contact references.

## Transaction sync rules

This integration syncs records according to the following rules:

1.  If the Customer Account Sync Behavior option is set to `Sync New and Modified Records`, initialize the date from which to query Zuora for recent changes. If this is the first time the customer account sync is run, the date will be set to Jan 1, 1970 to extract all customer accounts. If the sync has already run, the date will be set to that of the most recently successfully synced Zuora account (captured during the previous sync).
    1.  If the Customer Account Sync Behavior preference was recently switched from `Sync New Records Only` to `Sync New and Modified Records`, the query date will be set to the current system time. Typically, this means that no records will be extracted during the current sync. Only records modified after that sync will be extracted in future syncs. Note that Zuora records can be re-saved without making actual changes to trigger the sync to extract them.
2.  Zuora Customer Account records are synced if they meet the following criteria:
    -   If the Customer Account Sync Behavior preference is set to `Sync New and Modified Records` and all of the following are true:
        -   The `Active` status is enabled.
        -   The Send to Zuora option is set to `Yes`.
        -   The Integration Status is `Sync Complete`.
        -   The Stage is `Customer`.
        -   The Last Modified Date is greater than the last time NetSuite Connector completed the customer sync successfully.
    -   If the Customer Account Sync Behavior preference is set to `Sync New Records Only` and all of the following are true:
        -   The Active status is enabled (checked).
        -   The Send to Zuora option is set to `Yes`.
        -   The Integration Status is empty or not `Sync Complete`.
        -   The Stage is `Customer`.
3.  The sync action is determined based on your preferences and the record's characteristics:
    -   If the Integration ID is empty, the record will be created in Zuora.
    -   If the Integration ID is populated and the Customer Account Sync Behavior option is set to `Sync New and Modified Records`, the record will be updated in Zuora.
    -   If the Integration ID is populated and the Customer Account Sync Behavior option is set to `Sync New Records Only`, the record will be linked. This means that only the NetSuite-related custom fields will be populated in Zuora. Standard fields will not be modified.
4.  The following validations are performed during the sync to ensure data integrity (this validation is skipped if linking a record):
    -   If populated, the NetSuite Subsidiary matches a valid NetSuite subsidiary name.
    -   The NetSuite Terms match valid Zuora Terms.
    -   The NetSuite Currency symbol matches a Zuora NetSuite Currency alphabetic code.
    -   The Zuora Batch is populated.
    -   The Zuora Bill Cycle Day is populated.
    -   The customer has a Default Billing Address specified.
    -   The Addressee is populated for the Default Billing Address.
    -   If the customer has a Default Shipping Address specified, the Addressee is populated
5.  The remaining steps depend on whether the transaction sync is creating, updating, or linking a record.

## Creating a record

If the sync is creating a record:

1.  The NetSuite customer's Integration Status is updated to `Creating Customer Account` to indicate the record is currently being synced and to assist with error recovery.
2.  The Zuora customer account is created in `Draft` status.
3.  The Zuora Bill To Contact is created.
4.  The Zuora Sold To Contact is created.
5.  The Zuora customer account is updated with the contact references and the status is updated to `Active`.
6.  Upon successful creation and activation of the Zuora customer account, the new Zuora ID is written back to the NetSuite customer and the Integration Status is updated to `Sync Complete`.

## Updating a record

If the sync is updating a record:

1.  The NetSuite customer's Integration Status is not updated. This is to prevent circular updates.
2.  The Zuora Bill To Contact is updated.
3.  The Zuora Sold To Contact is updated.
4.  The Zuora customer account is updated (standard and NetSuite-related custom fields).
5.  Upon successful modification of the Zuora records, nothing is updated on the NetSuite customer.

## Linking a record

If the sync is linking a record:

1.  The Zuora customer account's Integration Status is updated to `Linking Customer Account` to indicate the record is currently being synced and to assist with error recovery.
2.  The Zuora customer account is updated (only NetSuite-related custom fields).
3.  Upon successful modification of the Zuora customer account, the Integration Status is updated to `Sync Complete` on the NetSuite customer.
