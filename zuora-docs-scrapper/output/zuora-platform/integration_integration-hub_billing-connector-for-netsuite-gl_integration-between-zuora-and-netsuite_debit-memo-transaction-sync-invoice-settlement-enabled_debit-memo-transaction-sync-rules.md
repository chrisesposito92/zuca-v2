---
title: "Debit Memo transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/debit-memo-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:57.887Z"
---

# Debit Memo transaction sync rules

Rules for Debit Memo transaction sync

This integration syncs records according to the following rules:

1.  Zuora debit memo records are synced if they meet the following criteria:

    -   The related customer account option Sync To NetSuite is not set or set to `Yes`.
    -   The Status is `Posted`.
    -   The Transferred to Accounting status is `No`, `Error`, or `Processing`.
    -   The Debit Memo Date is greater than or equal to the Zuora Debit/Credit Memos Cutover Date (if the date is specified in the [NetSuite Connector Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings)).

    -   The Debit Memo Integration Status is not `Sync Complete`.

2.  The following validations are performed during the sync to ensure data integrity:

    -   The associated Zuora account has been synced (the account has an IntegrationId).

    -   The associated Zuora debit memo item's Charge has been synced (the charge has an IntegrationId).

    -   The associated Zuora debit memo item's Tax Code has been synced (the tax code has an Accounting Code).

    -   If the associated Zuora debit memo item's Charge has a NetSuite Revenue Recognition Template Type of `Variable`, the associated Zuora subscription's NetSuite Project must be populated.

    -   If populated, the associated Zuora account's NetSuite Location matches a valid NetSuite location.

    -   If populated, the associated Zuora account's NetSuite Class matches a valid NetSuite class.

    -   If populated, the associated Zuora account's NetSuite Department matches a valid NetSuite department.

3.  The Zuora debit memo's Integration Status is updated to `Creating Debit Memo` and Transferred to Accounting is updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.

4.  Upon successful creation of the NetSuite invoice, the new NetSuite internal ID is written to the Zuora debit memo record, the Integration Status is set to `Sync` `Complete`, and Transferred to Accounting is set to `Yes`.


## Transaction sync notes

-   Once synced successfully, no further changes to the Zuora debit memo will be synced, including cancelation. If you need to re-sync a debit memo, you must delete the corresponding NetSuite invoice and set the Zuora debit memo's Transferred to Accounting to `No`.

-   Transferred to Accounting value of `Null` in the API will appear as `No` in the Zuora UI.

-   See [NetSuite Classifications](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications) for more information about how classifications are mapped for NetSuite transaction header and details.
