---
title: "Credit Memo Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/credit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/credit-memo-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:53.392Z"
---

# Credit Memo Field Mappings

The document provides mappings between source fields and destination fields in NetSuite for credit memos, detailing default field names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| Account.IntegrationId__NS | Customer | NetSuite Customer reference |
| n/a | Currency | Defaulted by NetSuite from NetSuite Customer record. |
| CreditMemo.MemoDate | Date (tranDate) |  |
| CreditMemo.MemoNumber | Transaction Number (tranId) | If NetSuite Connector preference Transaction Number Mapping is Use Number From Source Record, map the Zuora Number; otherwise, leave it blank and let NetSuite default to the next number (assuming NetSuite Auto-generated Numbers are enabled). |
| CreditMemo.MemoNumber | Zuora Reference Number |  |
| CreditMemo.TotalAmountWithoutTax | Zuora Amount Without Tax |  |
| CreditMemo.CreatedDate | Zuora Created Date |  |
| CreditMemo.PostedOn | Zuora Posted Date |  |
| CreditMemo.TargetDate | Zuora Target Date |  |
| CreditMemo.UpdatedDate | Zuora Updated Date |  |
| n/a | Zuora Sync Date | Current timestamp |
| CreditMemo.Id | Zuora ID |  |
| n/a | Zuora Origin |  |
| n/a | Zuora Type | "CREDIT_MEMO" |
| CreditMemo.TaxAmount | Zuora Tax Amount |  |
| CreditMemo.TotalTaxExemptAmount | Zuora Tax Exempt Amount |  |
| CreditMemo.Id | External Id |  |
| n/a | Department | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| n/a | Class | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| n/a | Location | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| CreditMemo.IntegrationId__NS | Internal Id | Update Zuora after initial creation only. |
| CreditMemo.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| CreditMemo.SyncDate__NS | n/a | Update Zuora after initial creation only. Current timestamp. |
| CreditMemo.Comments | Memo |  |
| DebitMemo.IntegrationId__NS AND/OR Invoice.IntegrationId__NS | ApplyTo.Doc |  |
| CreditMemoPart.Amount | ApplyTo.Amount |  |
