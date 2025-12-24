---
title: "Credit Memo transaction sync (NetSuite to Zuora)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:09.767Z"
---

# Credit Memo transaction sync (NetSuite to Zuora)

Integration that syncs NetSuite credit memos to Zuora invoice item adjustments

## Overview

This integration syncs NetSuite credit memos to Zuora invoice item adjustments. NetSuite Connector considers two types of credit memos: Standard and negative balance. The credit memo integration is actually implemented as two separate syncs, NetSuite credit memos to Zuora and NetSuite credit memos (negative balance) to Zuora.

See [Credit Memo Transaction Sync (Invoice Settlement Enabled)](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-invoice-settlement-enabled) for information about the integration that syncs Zuora credit memos to NetSuite credit memos when Invoice Settlement is enabled for your Zuora tenant.

## About the Credit Memo sync

-   The standard use case is that within NetSuite a user creates a credit memo against a Zuora invoice with an available balance. The credit memo must reference an item. However, that item is not actually synced to Zuora because the sync creates a transaction-level invoice item adjustment.

-   NetSuite Connector syncs only credit memos applied to an invoice that originated in Zuora.

-   The credit memo must be fully applied.

-   NetSuite Connector cannot create an invoice item adjustment because there is no guarantee that the item referenced on the NetSuite credit memo was referenced on the original Zuora invoice.

-   The invoice item adjustment will be created in Zuora without an accounting code.

-   If a credit memo is unapplied after it has been synced, you must reconcile manually.

-   Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences are important and control the behavior and data mapping of the sync, including the credit memo number.


You can disable both credit memo syncs from the NetSuite [Connector advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings) . However, you should disable this only under the guidance of Zuora Services.

Note:

The credit memo sync processes from NetSuite to Zuora is disabled by default. Use the [Advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings) to enable these sync processes.

Next, refer to these topics:

-   [Credit Memo transaction sync rules: Standard](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora/credit-memo-transaction-sync-rules-standard)

-   [Credit Memo transaction sync rules: Negative balance](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora/credit-memo-transaction-sync-rules-negative-balance)
