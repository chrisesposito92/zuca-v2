---
title: "Invoice transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:10.332Z"
---

# Invoice transaction sync

Integration that syncs Zuora invoices and their related invoice item and taxation item information to NetSuite invoices

## Overview

This integration syncs Zuora invoices and their related invoice item and taxation item information to NetSuite invoices. Zuora invoices with a negative balance are synced as NetSuite credit memos. Only invoices generated in Zuora will be synced. Invoices created directly in NetSuite will not sync to Zuora.

## About the invoice transaction sync

-   Only Posted invoices will be synced to NetSuite.

-   Charges will be transferred to NetSuite, but usage data will not be transferred.

-   There is no ability to un-post an invoice in Zuora.

-   NetSuite does not have the ability to create an invoice with a negative total. Consequently, negative invoices in Zuora are instead mapped to standalone credit memos in NetSuite.

-   The Accounts Receivable field on the NetSuite Invoice header (Invoice.Account) is driven off of the default value configuration under Setup > Accounting > Accounting Preferences > Items/Transactions. When NetSuite Connector syncs Invoice records, the Accounts Receivable Account field will reference the default value during Invoice creation in NetSuite.

-   Review the [Transaction Sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences). These preferences control the behavior and data mapping of the sync, including the invoice number.

-   Note the following limitations about the maximum number of invoice and taxation items for each invoice in one sync.

    -   When multithreading is OFF: Up to 400 items, including invoice items and taxation items, can be synced from Zuora to NetSuite invoices each time. If the number of items has reached 400, you may encounter an exception in the first call. But sync should be completed with a second run.

    -   When multithreading is ON: As we always process 10 threads, up to 40 items, including invoice items and taxation items, for each invoice is supported.

-   Note the following limitations about the maximum number of invoice and taxation items for each invoice in one sync.

    -   Up to 4000 items, including invoice items and taxation items, can be synced from Zuora to NetSuite invoices each time. If the number of items exceeds 4000, the Transferred To Accounting of those invoices will be marked as ignored and will not be picked up for sync. The rest of the invoices will go through the existing same flow. The ignored invoice IDs are captured in the Boomi logs.

    -   For above 4000 items, the invoices are picked up for the sync by manually changing the Transferred To Accounting to No.

    -   For large invoice items, an incremental sync can be performed in batches of 100 invoice items each.

    -   After all batches of the invoices are synced, set the Integration Status of the invoice to `Sync Complete` , Integration Id to `NS Internal Id` , and Transferred to Accounting to `Yes`.


You can disable the Zuora invoice sync from the NetSuite Connector Advanced Settings. However, you should do this only under the guidance of Zuora Services.

Next, refer to [Invoice transaction sync rules](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/invoice-transaction-sync-rules).

## Invoice item charges

The NetSuite transaction includes a detail line for each charge on the Zuora invoice. The NetSuite invoice detail will reference an item master that corresponds to a Zuora product rate plan charge that has been synced previously. The NetSuite invoice item will reflect the actual charge amount from the Zuora invoice.

During the invoice sync process, it is important to avoid zero amount invoice items. For more information see, [Configure advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings).

Next, refer to these topics:

-   [Project-based revenue](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/project-based-revenue)

-   [Delayed revenue recognition logic](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/delayed-revenue-recognition-logic)

-   [Taxes](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/taxes)
