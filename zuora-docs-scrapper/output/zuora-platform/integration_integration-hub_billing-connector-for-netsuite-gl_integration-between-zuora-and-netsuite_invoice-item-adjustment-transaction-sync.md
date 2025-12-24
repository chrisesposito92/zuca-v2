---
title: "Invoice item adjustment transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-item-adjustment-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:17.108Z"
---

# Invoice item adjustment transaction sync

Integration syncs Zuora invoice item adjustments to NetSuite for invoices that have been previously synced

## Overview

This integration syncs Zuora invoice item adjustments to NetSuite for invoices that have been previously synced. Credit-type adjustments are synced as credit memos and charge-type adjustments are synced as invoices.

## About the invoice item adjustment sync transaction

-   Each invoice item adjustment is synced as a separate transaction in NetSuite.

-   Zuora Billing has a tenant permission to restrict advanced invoice adjustment functionality. The Zuora user cannot adjust negative invoice items on a positive invoice, or positive invoice items on a negative invoice. Do not use invoice adjustments with NetSuite Connector. Zuora does not allow complex or compound invoice item adjustments: Each adjustment is independent, and if a user creates adjustments for two items in the user interface, then Zuora creates two invoice item adjustments. NetSuite does not have the concept of debit memos. The closest object in NetSuite is an invoice.

-   Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences). These preferences are important and control the behavior and data mapping of the sync including Invoice item Adjustment Number.


## Transaction sync notes

-   You can disable the invoice item adjustment sync from the NetSuite [Connector advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings) . However, you should disable this only under the guidance of Zuora Services.

-   The Zuora invoice item adjustment sync will not execute if Zuora does not calculate taxes (if the NetSuite Connector Advanced Setting for Use Standard Invoice Sync is set to `false` ).

-   Transferred to Accounting values of `Null` in the API will appear as `No` in the Zuora UI.


## Invoice item adjustment transaction sync rules

This integration syncs records according to the following rules:

1.  Zuora invoice item adjustment records are synced if they meet the following criteria:
    -   The Status is `Processed`.
    -   The Transferred to Accounting is `No`, `Error`, or `Processing`.
    -   The Adjustment Date is greater than or equal to the Invoice item Adjustment Cutover Date (if specified in the NetSuite Connector [Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings)).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The associated Zuora invoice has been synced (it has an IntegrationID).
    -   If populated, the associated Zuora account's NetSuite Location matches a valid NetSuite location.
    -   If populated, the associated Zuora Account's NetSuite Class matches a valid NetSuite class.
    -   If populated, the associated Zuora Account's NetSuite Department matches a valid NetSuite department.
3.  The Zuora invoice item adjustment's Integration Status is updated to `Creating Invoice` or `Creating Credit Memo` and Transferred to Accounting updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.
4.  If the Adjustment Type is `Credit`, a NetSuite credit memo is created and applied (using the native NetSuite applied transaction functionality) to the existing NetSuite invoice that was synced from the original Zuora invoice.
5.  If the Adjustment type is `Charge`, a NetSuite invoice is created. If the original Zuora invoice was positive, a soft link is established using the Related Transaction custom field to relate the original invoice with the new invoice from the adjustment. This soft link is for reference only and has no accounting impact. The original invoice's balance as displayed in NetSuite is unaffected. If the original Zuora invoice was negative (and was synced to NetSuite as a credit memo), the new invoice from the adjustment is applied to that existing credit memo by updating the credit memo and using the native NetSuite applied transaction functionality.
6.  Upon successful creation of the NetSuite invoice or credit memo, the new NetSuite internal ID is written to the Zuora invoice item adjustment record, the Integration Status is set to `Sync Complete`, and Transferred to Accounting is set to `Yes`.

## Invoice item adjustment transaction sync process flow

![overview_invoiceitemadjustment_txn.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4ee2d04-3902-4db1-8897-efadcb0695be?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0ZWUyZDA0LTM5MDItNGRiMS04ODk3LWVmYWRjYjA2OTViZSIsImV4cCI6MTc2NjY0MTgxNSwianRpIjoiMzBmNjlhMjBiNDE0NDY3ZWIzNTQwMTJhZWJiMGMwOGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nowmZiTXcJcuvly8fL9586IIxkYS_R_Zg6N8JFkNHdM)
