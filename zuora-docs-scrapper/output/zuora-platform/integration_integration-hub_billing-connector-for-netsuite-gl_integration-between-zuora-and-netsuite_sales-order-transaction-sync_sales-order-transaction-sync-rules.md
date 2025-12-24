---
title: "Sales Order transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync/sales-order-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:53.944Z"
---

# Sales Order transaction sync rules

Rules for process that syncs NetSuite Sales Orders to Zuora Subscriptions

This process syncs NetSuite Sales Orders to Zuora Subscriptions. The integration syncs records according to the following rules:

1.  NetSuite sales order records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID is not empty).
    -   The sales order's Integration Status is not `Sync Complete`.
    -   The sales order references at least one Zuora item that represents a Zuora product rate plan (the Zuora Item ID is not empty) .
    -   The credit memo's Send To Zuora option is enabled (checked).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The Zuora Auto Renewal field must be populated.
    -   The Zuora Initial Term field must be populated.
    -   The Zuora Renewal Term field must be populated.
    -   If the Use Multiple Currencies or Use Advanced Pricing options are enabled in the NetSuite Connector Sync Preferences, the Sales Order Currency Code must match a valid Zuora currency code.
3.  The NetSuite sales order's Integration Status is updated to `Creating Subscription` to indicate that the record is currently being synced and to assist with error recovery.
4.  A single Zuora subscription is created with all product rate plans specified on the sales order. Any other Items included on the sales order will be ignored.
5.  Upon successful creation of the Zuora subscription, the new Zuora ID is written back to the NetSuite sales order and the Integration Status is set to `Sync Complete`.

## Transaction sync notes

Once synced successfully, changes to the NetSuite sales order will not be synced, including cancelations and deletions. If you need to resync a sales order, cancel the Zuora subscription manually and clear the Integration Status and Zuora ID fields on the NetSuite sales order.
