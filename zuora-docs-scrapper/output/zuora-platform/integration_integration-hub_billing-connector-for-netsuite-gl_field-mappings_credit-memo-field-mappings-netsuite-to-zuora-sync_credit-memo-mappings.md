---
title: "Credit Memo Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/credit-memo-field-mappings-netsuite-to-zuora-sync/credit-memo-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:54.447Z"
---

# Credit Memo Mappings

The document outlines the mapping of source fields to destination fields in NetSuite, detailing default field names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Invoice Payment) | Notes |
| --- | --- | --- |
| ZuoraCustomerIDSales | AccountId |  |
| tranDate | AdjustmentDate |  |
| applyTo.amount | Amount |  |
| invoice.ZuoraId | InvoiceId |  |
| internalId | ReferenceId |  |
| n/a | TransferredToAccounting | "Yes" when completed. |
| n/a | Type | "Credit" |
| IntegrationStatus | n/a | "Creating Invoice Adjustment...," while processing, and "Sync Complete" when completed. |
| ZuoraId | n/a | Update with the new Zuora ID when completed. |
| SyncDate | n/a | Update with the current timestamp when completed. |
| memo | Comment |  |
| internalId | IntegrationId__NS | For negative invoices, this can also include the internalId of the applied-to Zuora invoice: <CM.internalId>_<INV.internalId> |
| n/a | Origin__NS | "NETSUITE" |
| n/a | SyncDate__NS | The current datetime. |
| tranId | Transaction__NS | For negative invoices, this can also include the internalId of the applied-to Zuora invoice: <CM.tranId>_<INV.tranId> |
