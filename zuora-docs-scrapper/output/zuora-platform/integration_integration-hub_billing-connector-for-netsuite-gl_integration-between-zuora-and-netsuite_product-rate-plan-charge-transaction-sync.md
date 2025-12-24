---
title: "Product rate plan charge transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-rate-plan-charge-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:41.172Z"
---

# Product rate plan charge transaction sync

Process that syncs new and recently modified Zuora product rate plan charges to NetSuite items

## Overview

This process syncs new and recently modified Zuora product rate plan charges to NetSuite items. The charges must be synced so subsequent invoices can be imported with correct item references. Zuora is the master for all charge records.

This is a one-way sync: Only charges created and modified in Zuora will be synced to NetSuite. Items created or modified in NetSuite will not sync back to Zuora.

## About the product rate plan charge transaction sync

-   Only active charges are synced. Draft, cancelled, deleted, or inactive (expired) charges are not synced. The sync will not inactivate records.

-   Charges are synced to one of three types of NetSuite items (Inventory, Non Inventory, and Service), determined by the Item Type custom field on the Zuora charge.

    -   Once a charge has been synced successfully, the Item Type must not be changed in Zuora. If changed, this will result in a sync error until the type is corrected. If you need to change the Item Type, delete the NetSuite item, reset the Zuora charge’s Integration ID and Integration Status, then resync.

-   The charge price will not be synced to NetSuite. The price will be synced when the transaction line is created. Unsupported charge models include high water mark, and multi-attribute pricing. For more information see, Charge Models .

-   Review the Product Catalog [sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences control the behavior and data mapping of the charge sync, including the charge number.

-   See [Migrating existing Items](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora) if you have item records in NetSuite and Zuora and you want to link those existing records to prevent NetSuite Connector from creating duplicates.

-   If you are using NetSuite Rev Rec templates and Zuora discount charges, you need to add the Rev Rec Template directly onto the NetSuite item after the discount product charge is established in NetSuite.


## Transaction sync notes

-   The charge sync is mandatory and cannot be disabled. The subsequent transaction syncs depend on the charges being synced.

-   If the [product and product rate plan sync](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync) is also enabled, the charges synced to NetSuite will be independent of those records and have no relationship (part of an item hierarchy) with them. However, the charge’s product and product rate plan names are mapped to custom fields for reference.
