---
title: "Zuora Invoice Header (Positive)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-positive-field-mappings-zuora-to-netsuite-sync/zuora-invoice-header-positive"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:26.023Z"
---

# Zuora Invoice Header (Positive)

Zuora Invoice Header (Positive) provides a detailed mapping of source fields to destination fields, including notes on default values and custom fields for integration with NetSuite.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| Account.IntegrationId__NS | Customer | NetSuite customer reference |
| Account.Currency | Currency | Defaulted by NetSuite from NetSuite Customer record. |
| n/a | Terms | Defaulted by NetSuite from NetSuite Customer record.Note: It is possible for this value not to coordinate with the actual Due Date if the Zuora Account Payment Terms were modified between Invoice syncs. |
| n/a | Bill To Address | Defaulted by NetSuite from NetSuite Customer record. |
| n/a | Ship To Address | Defaulted by NetSuite from NetSuite Customer record. |
| Account.TaxExemptStatus | n/a |  |
| Invoice.Amount | n/a | This is the total amount of the invoice. NetSuite will automatically calculate the existing Total field. |
| Invoice.AmountWithoutTax | Zuora Amount Without Tax | This is a custom field because we load tax as item. |
| Invoice.Comments | Memo |  |
| Invoice.CreatedDate | Zuora Created Date |  |
| Invoice.DueDate | Due Date |  |
| Invoice.Id | Zuora ID |  |
| Invoice.InvoiceDate | Invoice Date (tranDate) |  |
| Invoice.InvoiceNumber | Zuora Reference Number |  |
| Invoice.InvoiceNumber | Invoice # (tranId) | If NetSuite Connector preference Transaction Number Mapping is Use Number From Source Record , map the Zuora Number, otherwise leave blank and let NetSuite default to the next number (assuming NetSuite Auto-generated Numbers are enabled). |
| Invoice.LastEmailSentDate | Zuora Last Email Sent Date |  |
| Invoice.PostedDate | Zuora Posted Date |  |
| Invoice.TargetDate | Zuora Target Date |  |
| Account.Class__NS | Class | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| Account.Department__NS | Department | If not populated, map from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| Account.Location__NS | Location | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| Invoice.TaxAmount | Zuora Tax Amount | This is a custom field because we load tax as item. |
| Invoice.TaxExemptAmount | Zuora Tax Exempt Amount | This is a custom field because we load tax as item. |
| Invoice.IntegrationId__NS | Internal Id | Update Zuora after initial create only |
| Invoice.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| Invoice.SyncDate__NS | n/a | Update Zuora after initial create only. Current timestamp. |
| n/a | Zuora Sync Date | Current timestamp |
| n/a | Posting Period | Required if enabled. Set automatically by NetSuite based on Invoice Date. |
| n/a | Zuora Type | "INVOICE" |
| n/a | Zuora Origin | "ZUORA" |
| n/a | Taxable (isTaxable) | If NetSuite Connector Advanced Setting Use Standard Invoice Sync is Yes , force to "false" to prevent NetSuite from calculating tax. Otherwise no value is mapped and NetSuite will set based on the NetSuite Customer record. |
| n/a | Tax (taxItem) | Mapped from NetSuite Connector preference NetSuite Default Tax Code if populated. |
