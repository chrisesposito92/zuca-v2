---
title: "Payment Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/payment-field-mappings-netsuite-to-zuora-sync/payment-mappings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:03.038Z"
---

# Payment Mappings

This document outlines the mapping of source fields to destination fields in NetSuite for payment processing, including default field names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Invoice Payment) | Notes |
| --- | --- | --- |
| internalId | Payment.IntegrationId__NS |  |
| ZuoraCustomerID | Payment.AccountId |  |
| payment | n/a | The total amount. |
| tranDate | Payment.EffectiveDate |  |
| applyList.amount | Payment.Amount | The sum of all applied invoice amounts. This field is required. |
| n/a | Payment.PaymentNumber | This value is generated automatically. |
| ZuoraReferenceID | Payment.ReferenceId |  |
| memo | Payment.Comment |  |
| paymentMethod.name | PaymentMethodId |  |
| n/a | PaymentType | "External" |
| n/a | Payment.Status | "Draft," then "Processed" when completed. |
| n/a | Payment.TransferredToAccounting | "Yes" when completed. |
| n/a | Payment.SyncDate__NS | The current timestamp. |
| ZuoraOrigin | n/a | Update to "NETSUITE" when completed. |
| ZuoraId | n/a | Update with the new Zuora ID when completed. |
| ZuoraSyncDate | n/a | Update with the current timestamp when completed. |
| ZuoraIntegrationStatus | n/a | Update with "Sync Complete" when completed, and update with other statuses while processing. |
