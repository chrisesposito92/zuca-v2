---
title: "Payment Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/payment-field-mappings-netsuite-to-zuora-sync-invoice-settlement-enabled/payment-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:21.555Z"
---

# Payment Field Mappings

This document outlines the mapping of payment fields between the source and destination systems, including default field names in NetSuite and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| n/a | Payment.PaymentNumber | This value is generated automatically. |
| Internal Id | IntegrationId__NS |  |
| CustomerPayment.Zuora_Customer_ID_Payments | Payment.AccountId |  |
| CustomerPayment.payment | Payment.Amount |  |
| ApplyTo.Amount | DebitMemo.Amount AND/OR Invoice.Amount |  |
| ApplyTo.Doc | DebitMemo.IntegrationId__NS AND/OR Invoice.IntegrationId__NS |  |
| CustomerPayment.memo | Payment.Comment |  |
| CustomerPayment.tranId | Transaction__NS |  |
| CustomerPayment.Zuora_Payment_Reference_ID | Payment.ReferenceId |  |
| paymentMethod.name | Payment.PaymentMethodId |  |
| n/a | Payment.TransferredToAccounting | "Yes" when completed. |
| n/a | Payment.Type | "External" |
| n/a | Payment.SyncDate__NS | The current timestamp. |
| Zuora Origin | n/a | Update to "NETSUITE" when completed. |
| Zuora ID | n/a | Update with the new Zuora ID when completed. |
| Zuora Sync Date | n/a | Update with the current timestamp when completed. |
| Zuora Integration Status | n/a | Update with "Sync Complete" when completed, and update with other statuses while processing. |
