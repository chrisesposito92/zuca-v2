---
title: "Product rate plan transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync/product-rate-plan-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:38.567Z"
---

# Product rate plan transaction sync rules

Here are the product rate plan transaction sync rules

This integration syncs records according to the following rules:

1.  If the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, initialize the date from which to query Zuora for recent changes. If this is the first time the product rate plan sync is run, the date will be set to Jan 1, 1970 to ensure that the sync extracts all products. If the sync has already run, the date will be set to that of the most recently successfully synced Zuora product rate plan (captured during the previous sync).
    -   If the Product Catalog Sync Behavior option was recently changed from `Sync New Records Only` to `Sync New and Modified Records`, the query date will be set to the current system time. Typically, this means that no records will be extracted during that sync. Only records modified after that sync will be extracted in future syncs. Note that you can re-save Zuora records without making changes to trigger the sync to extract them.
2.  Zuora product rate plan records are synced if they meet all of the following criteria:
    -   The Effective Start Date is less than or equal to current system time.
    -   The Effective End Date is greater than or equal to current system time.
    -   The Integration Status is empty, or any value other than `Sync Complete`.
    -   If the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, the Integration Status is `Sync Complete` and the Updated Date is greater than the last time NetSuite Connector completed the product rate plan sync successfully.
3.  The sync action is determined based on your preferences and the record's characteristics:
    -   If the Integration ID is empty, the record will be created in NetSuite.
    -   If the Integration ID is populated and the Product Catalog Sync Behavior option is set to `Sync New and Modified Records`, the record will be updated in NetSuite.
    -   Additionally, if the Integration ID is populated and the Product Catalog Sync Behavior option is set to `Sync New Records Only`, the record will be linked. Only the Zuora-related custom fields will be populated in NetSuite, and standard fields will not be modified.
4.  The following validations are performed during the sync to ensure data integrity (validation skipped if linking a record):
    -   The associated Zuora product has been synced (it has an Integration ID).
    -   If Multi Currency Price is populated and if the NetSuite Connector Use Multiple Currencies or Use Advanced Pricing options are enabled, the Multi Currency Price value has the appropriate syntax (for example, `<currency code 1>:<amount 1>;<currency code 2>:<amount 2>...`). See "Multi-Currency Pricing," below, for more information.
    -   If Multi Currency Price is populated and if the NetSuite Connector Use Multiple Currencies or Use Advanced Pricing options are enabled, each of the Multi Currency Price currency codes is a valid NetSuite currency code.
    -   If populated, the Zuora NetSuite Location matches a valid NetSuite location.
    -   If populated, the Zuora NetSuite Class matches a valid NetSuite class.
    -   If populated, the Zuora NetSuite Department matches a valid NetSuite department.
    -   The Zuora Item Type field is populated.
    -   If the Integration Status is `Sync Complete`, the Integration ID must be populated.
5.  The remaining steps depend on whether the transaction sync is creating, updating, or linking a record.

## Creating a record

If the sync is creating a record:

1.  The Zuora product rate plan's Integration Status is updated to `Creating Item` to indicate the record is currently being synced and to assist with error recovery.
2.  The NetSuite item is created.
3.  Upon successful creation of the NetSuite item, the new NetSuite internal ID is written back to the Zuora product rate plan and the Integration Status is updated to `Sync Complete`.

## Updating a record

If the sync is updating a record:

1.  The product rate plan's Integration Status is not updated. This prevents circular updates.
2.  The NetSuite item is updated (standard and Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, no updates are made to the Zuora product rate plan.

## Linking a record

If the sync is linking a record:

1.  The Zuora product rate plan's Integration Status is updated to `Linking Item` to indicate that the record is being synced and to assist with error recovery.
2.  The NetSuite item is updated (only Zuora-related custom fields).
3.  Upon successful modification of the NetSuite item, the Integration Status is updated to `Sync Complete` on the Zuora product rate plan.

## Multi-currency pricing

If you use multiple currencies or advanced pricing in NetSuite (see Configure Sync Preferences for more information), you can configure the Zuora product rate plan charge with different prices for different currencies. NetSuite will then reference the appropriate default price for the customer's currency when adding that Item to a sales order (to sync as a new Zuora subscription).

On the Zuora product rate plan record, the NetSuite Price field will be mapped for the default currency, as configured in your NetSuite Connector preferences. You can include prices for additional currencies in the NetSuite Multi Currency Price field using the following syntax:

`<currency code 1>:<amount 1>;<currency code 2>:<amount 2>...`

For example:

`CAD:250.25;GBP:126.99`

You can list one price per currency, and as many currencies as are valid for your Zuora tenant. The currency code must match a valid code in NetSuite, and the syntax of the string will be validated.
