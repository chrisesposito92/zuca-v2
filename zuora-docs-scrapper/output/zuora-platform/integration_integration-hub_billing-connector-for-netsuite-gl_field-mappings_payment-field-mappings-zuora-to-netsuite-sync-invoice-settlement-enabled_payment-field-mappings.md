---
title: "Payment Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/payment-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/payment-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:42.078Z"
---

# Payment Field Mappings

This document provides mappings between source fields and their corresponding destination fields in NetSuite, including notes on field modifications and sync preferences.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| Account.IntegrationId__NS | Customer | If the Payment is assigned to a customer, the record will be associated with that customer when synced to NetSuite. If the customer is "unassigned", the internal ID supplied in the "Unassigned Payments" field from the Sync Preference settings will be used instead. |
| Payment.Amount | Payment Amount | Sum of applied invoice and debit memo payment amounts. |
| Payment.Comment | Memo |  |
| Payment.CreatedDate | Zuora Created Date |  |
| Payment.EffectiveDate | Date (tranDate) |  |
| n/a | Class | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| n/a | Department | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| n/a | Location | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| PaymentMethod.Type | Payment Method | ACH, Cash, Check, CreditCard, Other, PayPal, WireTransfer, DebitCard, and CreditCardReferenceTransaction. |
| PaymentMethod.CreditCardType | Zuora Credit Card Type | Only populated if a specific electronic payment is used. |
| PaymentMethodSnapshot.Type | Payment Method | ACH, Cash, Check, CreditCard, Other, PayPal, WireTransfer, DebitCard, and CreditCardReferenceTransaction. |
| PaymentMethodSnapshot.CreditCardType | Zuora Credit Card Type | Only populated if a specific electronic payment is used. |
| Payment.Id | Zuora ID |  |
| n/a | Zuora Origin | "ZUORA" |
| Payment.ReferenceId | Zuora Payment Reference ID |  |
| Payment.PaymentNumber | Zuora Reference Number |  |
| n/a | Zuora Sync Date | Current timestamp |
| Invoice.IntegrationId__NS | ApplyTo.Invoice | NetSuite invoice reference |
| DebitMemo.IntegrationId__NS | ApplyTo.Invoice | NetSuite debit memo reference |
| PaymentPart.Amount | ApplyTo.Amount |  |
| Payment.IntegrationId__NS | Internal Id | Update Zuora after sync |
| Payment.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| Payment.SyncDate__NS | n/a | Update Zuora after sync. Uses the current timestamp. |
