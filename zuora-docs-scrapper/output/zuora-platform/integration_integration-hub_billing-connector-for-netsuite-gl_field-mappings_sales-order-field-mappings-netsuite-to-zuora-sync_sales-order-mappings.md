---
title: "Sales Order Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/sales-order-field-mappings-netsuite-to-zuora-sync/sales-order-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:58.121Z"
---

# Sales Order Mappings

The task provides mappings between source fields and destination fields in NetSuite, highlighting any required fields and default values.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Invoice Payment) | Notes |
| --- | --- | --- |
| internalId | n/a |  |
| tranDate | n/a |  |
| tranId | Subscription.SalesOrder__NS |  |
| ZuoraCustomerIdSales | Account.Id |  |
| currencyName | Subscription.Currency | This field is required. |
| ZuoraSubscriptionNumber | Subscription.Name |  |
| ZuoraTermStartDate | Subscription.TermStartDate | Date |
| ZuoraAutoRenew | Subscription.AutoRenew | This is a boolean value (Yes, No). This field is required. |
| ZuoraInitialTerm | Subscription.IntialTerm | This field is required. |
| ZuoraRenewalTerm | Subscription.RenewalTerm | This field is required. |
| ZuoraContractEffectiveDate | Subscription.ContractEffectiveDate |  |
| ZuoraServiceActivationDate | n/a |  |
| ZuoraCustomerAcceptanceDate | Subscription.ContractAcceptanceDate |  |
| ZuoraTermSetting | Subscription.TermType | TERMED, EVERGREEN |
| ZuoraSendToZuora | n/a | This is a boolean value (Yes, No). |
| item.ZuoraItemId | RatePlanData.ProductRatePlanId |  |
| ZuoraId | n/a | Update with the new Zuora ID when completed. |
| ZuoraSyncDate | n/a | Update with the current timestamp when completed. |
| ZuoraIntegrationStatus | n/a | Update with "Sync Complete" when completed, and update with other statuses while processing. |
| ZuoraReferenceNumber | n/a | Update with the new Zuora subscription number when completed. |
| n/a | SubscribeOptions.GenerateInvoices | "false" |
