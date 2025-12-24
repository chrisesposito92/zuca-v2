---
title: "Product and product rate plan transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:32.429Z"
---

# Product and product rate plan transaction sync

Process that syncs new and recently modified (optional) Zuora products and product rate plans to NetSuite items

## Overview

This process syncs new and recently modified (optional) Zuora products and product rate plans to NetSuite items. The records are synced to NetSuite so they can be referenced on sales orders when creating new Zuora subscriptions.

This is a one-way sync: only products and product rate plans created and modified in Zuora will be synced to NetSuite. Items created or modified in NetSuite will not sync back to Zuora.

## About the product and product rate plan transaction sync

-   Only active Product and Product Rate Plans are synced. Draft, cancelled, deleted, or inactive (expired) records are not synced. The sync will not inactivate records.

-   Records are synced to one of three types of NetSuite items (Inventory, Non Inventory, and Service), determined by the Item Type custom field on the Zuora record.

    -   Once a record has been synced successfully, do not change the Item Type in Zuora. Changing this field will result in a sync error until the type is corrected. If you need to change the Item Type, delete the NetSuite item, reset the Zuora record’s Integration ID and Integration Status, then resync.

-   Within NetSuite, the item corresponding to the product rate plan will appear as a child or sub-item to the product’s item.

-   Within NetSuite, the item corresponding to the product will not be assigned to a GL account, and therefore cannot be referenced on transactions. This is used for organization and to assist with identifying product rate plans that have similar names.

-   The items created for the product rate plan records will be associated to the default income account as configured in the [NetSuite setup](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-netsuite-for-netsuite-connector).

-   Review the product catalog [sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences). These preferences and control the behavior and data mapping of the sync including item number.

-   See [Migrating existing Items](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora) if you already have item records in NetSuite and Zuora and want to link those existing records to prevent NetSuite Connector from creating duplicates.


## Transaction sync notes

The syncs will only run if the Enable Sales Order Sync preference is enabled or if the Force Zuora Product Catalog Sync advanced preference is enabled.

The product and product rate plan sync is implemented as two separate processes within NetSuite Connector.

Next, refer to these topics:

-   [Product transaction sync rules](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync/product-transaction-sync-rules)

-   [Product rate plan transaction sync rules](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync/product-rate-plan-transaction-sync-rules) - This topic includes information on multi-currency pricing.
