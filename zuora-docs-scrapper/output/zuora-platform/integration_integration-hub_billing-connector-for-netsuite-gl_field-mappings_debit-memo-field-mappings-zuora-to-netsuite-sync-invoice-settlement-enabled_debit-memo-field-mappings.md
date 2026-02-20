---
title: "Debit Memo Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/debit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/debit-memo-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:08.442Z"
---

# Debit Memo Field Mappings

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| Account.IntegrationId__NS | Customer |  |
| Account.Currency | Currency | Defaulted by NetSuite from NetSuite Customer record. |
| DebitMemo.Amount | n/a | This is the total amount of the debit memo. NetSuite will automatically calculate the existing Total field. |
| n/a | Class | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| n/a | Department | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| n/a | Location | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| DebitMemo.TotalAmountWithoutTax | Zuora Amount Without Tax | This is a custom field because we load tax as item. |
| DebitMemo.TaxAmount | Zuora Tax Amount |  |
| DebitMemo.TotalTaxExemptAmount | Zuora Tax Exempt Amount |  |
| DebitMemo.CreatedDate | Zuora Created Date |  |
| DebitMemo.Id | External Id |  |
| DebitMemo.Id | Zuora ID |  |
| n/a | Zuora Origin | "ZUORA" |
| n/a | Zuora Type | "DEBIT_MEMO" |
| n/a | Zuora Sync Date | Current timestamp |
| n/a | Posting Period | Required if enabled. Set automatically by NetSuite based on Invoice Date. |
| DebitMemo.MemoNumber | Zuora Reference Number |  |
| DebitMemo.MemoNumber | Transaction Number (tranId) | If NetSuite Connector preference Transaction Number Mapping is Use Number From Source Record, map the Zuora Number; otherwise, leave it blank and let NetSuite default to the next number (assuming NetSuite Auto-generated Numbers are enabled). |
| DebitMemo.TargetDate | Zuora Target Date |  |
| DebitMemo.PostedOn | Zuora Posted Date |  |
| DebitMemo.UpdatedDate | Zuora Updated Date |  |
| DebitMemo.DueDate | dueDate |  |
| DebitMemo.IntegrationId__NS | Internal ID | Update Zuora after initial creation only |
| DebitMemo.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| DebitMemo.SyncDate__NS | n/a | Update Zuora after initial creation only. Current timestamp. |
| n/a | Taxable (isTaxable) | If NetSuite Connector Advanced Setting Use Standard Invoice Sync is Yes, this field is forced to "false" to prevent NetSuite from calculating the tax. Otherwise, no value is mapped and NetSuite will set it based on the NetSuite Customer record. |
| n/a | Tax (taxItem) | Mapped from NetSuite Connector preference NetSuite Default Tax Code if populated. |
