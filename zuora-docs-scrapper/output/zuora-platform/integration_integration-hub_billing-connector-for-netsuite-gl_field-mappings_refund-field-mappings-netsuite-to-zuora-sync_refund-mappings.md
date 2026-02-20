---
title: "Refund Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/refund-field-mappings-netsuite-to-zuora-sync/refund-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:58.254Z"
---

# Refund Mappings

This task outlines the mapping of refund fields between your system and NetSuite, detailing default and modified field names.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Invoice Payment) | Notes |
| --- | --- | --- |
| tranDate | RefundDate |  |
| applyTo.amount | Amount |  |
| applyTo.ZuoraRefundPaymentId | PaymentId |  |
| paymentMethod.name | MethodType |  |
| n/a | TransferredToAccounting | "Yes" when completed. |
| memo | Comment |  |
| n/a | Type | "External" |
| n/a | SourceType | "Payment" |
| IntegrationStatus | n/a | "Creating Refund...," while processing, and "Sync Complete" when completed. |
| ZuoraId | n/a | Update with the new Zuora ID when completed. |
| SyncDate | n/a | Update with the current timestamp when completed. |
| applyTo.ZuoraId | n/a | Update with the Zuora ID when completed. |
| applyTo.IntegrationStatus | n/a | "Sync Complete" when completed. |
| internalId | IntegrationId__NS |  |
| n/a | Origin__NS | "NETSUITE" |
| n/a | SyncDate__NS | The current datetime. |
| customer.name refund.tranDate | Transaction__NS | This value is concatenated. |
