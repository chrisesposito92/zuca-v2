---
title: "Zuora Payment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-payment-field-mappings-zuora-to-netsuite-sync/zuora-payment"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:26.500Z"
---

# Zuora Payment

| Source Field | Destination Field (Customer Payment) | Notes |
| --- | --- | --- |
| Account.IntegrationId__NS | Customer | NetSuite Customer reference |
| InvoicePayment.Amount | Payment Amount | Sum of applied invoice payment amounts. Note that "over payments" are not synced. |
| Payment.Comment | Memo |  |
| Payment.CreatedDate | Zuora Created Date |  |
| Payment.EffectiveDate | Date (tranDate) |  |
| Account.Class__NS | Class | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| Account.Department__NS | Department | If not populated, map from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| Account.Location__NS | Location | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| PaymentMethod.Type | Payment Method | ACH, Cash, Check, CreditCard, Other, PayPal, WireTransfer, DebitCard, CreditCardReferenceTransaction. |
| Payment.Id | Zuora ID |  |
| Payment.PaymentNumber | Zuora Reference Number |  |
| Payment.ReferenceId | Zuora Payment Reference ID |  |
| Payment.Type | Zuora Payment Type |  |
| Payment.IntegrationId__NS | Internal Id | Update Zuora after sync |
| Payment.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| Payment.SyncDate__NS | n/a | Update Zuora after sync. Uses the current timestamp. |
| Payment.Origin__NS | n/a | Update to "ZUORA" |
| PaymentMethod.CreditCardType | Zuora Credit Card Type | Only populated if a specific electronic payment was used. |
| n/a | Zuora Origin | "ZUORA" |
| InvoicePayment.Amount | ApplyTo.Amount | Amount applied to a specific invoice. |
| InvoicePayment.Invoice.IntegrationId__NS | ApplyTo.Invoice | NetSuite invoice reference |
