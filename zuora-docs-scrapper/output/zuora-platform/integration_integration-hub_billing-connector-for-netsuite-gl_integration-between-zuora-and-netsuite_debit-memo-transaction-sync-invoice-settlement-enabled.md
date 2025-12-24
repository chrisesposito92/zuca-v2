---
title: "Debit Memo transaction sync (Invoice Settlement enabled)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:54.453Z"
---

# Debit Memo transaction sync (Invoice Settlement enabled)

Integration that syncs Zuora debit memos to NetSuite invoices when Invoice Settlement is enabled for your Zuora tenant

## Overview

Note:

This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.

This integration syncs Zuora debit memos to NetSuite invoices when Invoice Settlement is enabled for your Zuora tenant.

## About the Debit Memo transaction Sync

-   Each debit memo is synced to an individual invoice in NetSuite.

-   Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences are important and control the behavior and data mapping of the sync, including Debit Memo Number.


## Transaction sync notes

-   Debit Memos will be synced to NetSuite regardless of the balance remaining on the records in Zuora as long as they meet the sync criteria.

-   You can disable the debit memo sync from the NetSuite [Connector advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings) . However, you should disable this only under the guidance of Zuora Services.

-   Transferred to Accounting value of `Null` in the API will appear as `No` in the Zuora UI.

-   NetSuite does not have debit memos. Instead, new invoice records will be created in NetSuite upon the successful syncs of debit memos.


Next, refer to [Debit Memo transaction sync rules](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/debit-memo-transaction-sync-rules).

## Debit Memo item charges

The NetSuite transaction includes a detail line for each charge on the Zuora debit memo. The NetSuite invoice detail will reference an item master that corresponds to a Zuora product rate plan charge that has been synced previously. The NetSuite invoice item will reflect the actual charge amount from the Zuora debit memo.

Next, refer to these topics:

-   [Project-based revenue](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/project-based-revenue)

-   [Delayed revenue recognition logic](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/delayed-revenue-recognition-logic)

-   [Taxes](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/taxes)
