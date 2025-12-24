---
title: "Invoice transaction sync rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/invoice-transaction-sync-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:13.434Z"
---

# Invoice transaction sync rules

Rules according to which this integration syncs records

This integration syncs records according to the following rules:

1.  Zuora invoice records are synced if they meet the following criteria:
    -   The related customer account Sync To NetSuite is set to `Yes`, or is empty.
    -   The Status is `Posted`.
    -   The Transferred to Accounting is set to `No`, `Error`, or `Processing`.
    -   The Invoice Date is greater than or equal to the Invoice Cutover Date (if the date is specified in the [NetSuite Connector Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings)).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The associated Zuora account has been synced (the account has an IntegrationId).
    -   The associated Zuora invoice item's Charge has been synced (the charge has an IntegrationId).
    -   The associated Zuora invoice item's Tax Code has been synced (the tax code has an Accounting Code).
    -   If the associated Zuora invoice item's Charge has a NetSuite Revenue Recognition Template Type of `Variable`, the associated Zuora subscription's NetSuite Project must be populated.
    -   If populated, the associated Zuora account's NetSuite Location matches a valid NetSuite location.
    -   If populated, the associated Zuora account's NetSuite Class matches a valid NetSuite class.
    -   If populated, the associated Zuora account's NetSuite Department matches a valid NetSuite department.
3.  The Zuora invoice's Integration Status is updated to `Creating Invoice` or `Creating Credit Memo` and Transferred to Accounting is updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.
4.  If the Invoice amount is greater than or equal to 0, a NetSuite invoice is created. Otherwise a NetSuite credit memo is created.
5.  Upon successful creation of the NetSuite invoice, the new NetSuite internal ID is written to the Zuora invoice record, the Integration Status is updated to `Sync Complete`, and Transferred to Accounting is updated to `Yes`.

## Transaction sync notes

-   Once synced successfully, changes to the Zuora invoice will not be synced, including cancellations.
-   Use invoice item adjustments to make changes to the invoice amounts.
-   If you need to resync an Invoice, you must delete the NetSuite invoice and set the Zuora invoice's Transferred to Accounting to `No`.
-   Transferred to Accounting values of `Null` in the API will appear as `No` in the Zuora UI.
-   When you sync Zuora invoices to Netsuite, ordering line items in an invoice is not supported when the invoice has no associated charge.

See [NetSuite Classifications](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications) for more information about how classifications are mapped for NetSuite transaction header and details.
