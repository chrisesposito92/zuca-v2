---
title: "Credit Memo transaction sync (Invoice Settlement enabled)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-invoice-settlement-enabled"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:34.944Z"
---

# Credit Memo transaction sync (Invoice Settlement enabled)

Integration that syncs Zuora credit memos to NetSuite credit memos when Invoice Settlement is enabled for your Zuora tenant

## Overview

Note:

This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.

This integration syncs Zuora credit memos to NetSuite credit memos when Invoice Settlement is enabled for your Zuora tenant.

See [Credit Memo Transaction Sync (NetSuite to Zuora)](D_Credit_Memo_Transaction_Sync.dita) for information about the integration that syncs NetSuite credit memos to Zuora invoice item adjustments.

## About the Credit Memo transaction sync

-   Each credit memo is synced to a separate transaction in NetSuite.

-   Review the [Transaction Sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences). These preferences are important and control the behavior and data mapping of the sync, including Credit Memo Number.


## Transaction sync notes

-   Credit Memos will be synced to NetSuite regardless of the balance remaining on the records in Zuora as long as they meet the sync criteria.

-   You can disable the credit memo sync from the NetSuite Connector [Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings). However, you should disable this only under the guidance of Zuora Services.

-   Transferred to Accounting value of `Null` in the API will appear as `No` in the Zuora UI.
-   NetSuite does not handle item level application for Credit Memo records. Therefore, Invoice Item Settlement is not supported by this sync. The line items that are synced to the NetSuite record are used to store the record's balance and determine revenue recognition.

-   Tax codes sync with Netsuite for non-AR negative invoices. But, for credit memos in AR, tax code syncing is not supported in Netsuite.


## Credit Memo transaction sync rules

This integration syncs records according to the following rules:

1.  Zuora credit memo records are synced if they meet the following criteria:

    -   The Status is `Posted`.
    -   The associated Account's Integration Status is `Sync Complete` and Sync to NetSuite is `Null` or `Yes`.

    -   The Transferred to Accounting status is `No`, `Error`, or `Processing`.
    -   The Zuora Origin is not `NETSUITE`.
    -   The Memo Date is greater than or equal to the Credit Memo Cutover Date (if specified in the NetSuite Connector Advanced Settings).

2.  The following validations are performed during the sync to ensure data integrity:

    -   The associated Zuora invoice has been synced (it has an IntegrationId).

    -   If populated, the associated Zuora account's NetSuite Location matches a valid NetSuite location.

    -   If populated, the associated Zuora Account's NetSuite Class matches a valid NetSuite class.

    -   If populated, the associated Zuora Account's NetSuite Department matches a valid NetSuite department.

3.  The Zuora credit memo's Integration Status is updated to `Creating Credit Memo` and Transferred to Accounting updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.

4.  A NetSuite credit memo is created and applied (using the native NetSuite applied transaction functionality) to the existing NetSuite invoice that has been synced from the original Zuora invoice.

5.  Upon successful creation of the NetSuite credit memo, the new NetSuite internal ID is written to the Zuora credit memo record, the Integration Status is set to `Sync` `Complete`, and Transferred to Accounting is set to `Yes`.

6.  To sync subsequent changes on this record, you must update the Transferred to Accounting value to `No`.
