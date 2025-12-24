---
title: "Customer account transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:37.908Z"
---

# Customer account transaction sync

Integration that syncs Zuora customer accounts to NetSuite, or NetSuite customers to Zuora

## Overview

This integration syncs Zuora customer accounts to NetSuite, or NetSuite customers to Zuora. You must choose whether Zuora or NetSuite will serve as the master for customer records. New and modified customer records that are created or updated in the master application will be synced to the destination application.

This is a one-way sync. For example, if Zuora is selected as the master application, new and updated Zuora customers will sync to NetSuite. However, any changes to customer records made within NetSuite, even after the record has been synced once, will not sync back to Zuora.

## About the customer account transaction sync

-   By default, Zuora is the customer account master.

-   Only active accounts are synced. Draft, cancelled, deleted, or inactive accounts are not synced. The sync will not inactivate records.

-   The Netsuite connector does not support updating fields with null values during account syncs. Updates will only be synced if there are changes to the values of the fields being updated.

-   Contacts and addresses are handled specially. See the Sync Rules sections, below, for more information.

-   Customer account hierarchies are maintained regardless of which application is the account master. If account hierarchies are disabled in Zuora, the NetSuite Parent Account reference will be ignored.

-   Review the [customer account sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync). These preferences are important and control the behavior and data mapping of the customer account sync, including the customer account number. The Tax Reg Number field is not supported for syncing.

-   If you already have customer records in NetSuite and Zuora, you can link those existing records to prevent NetSuite Connector from creating duplicates. See [Migrate Data from NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora) for more information.


Note:

-   NetSuite connector does not support populating the State field in NetSuite from Zuora's Bill To Contact and Sold To Contact fields, except for the United States.

-   When you update an address in an account, the connector's sync process will not pick up the account. Changes made to the child object do not update the parent object. When you modify the address field(child object), the account's(parent object) "Last Modified Date" value will not be updated due to the parent-child relationship in the Account object. The connector only picks the accounts with updated addresses when the account fields are updated.


## Transaction sync notes

The customer sync is mandatory and cannot be disabled. This is because the subsequent transaction syncs depend on the customer accounts being synced.

Next, refer to these topics:

-   [Customer account sync: Zuora to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-zuora-to-netsuite)

-   [Customer account sync: NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-netsuite-to-zuora)
