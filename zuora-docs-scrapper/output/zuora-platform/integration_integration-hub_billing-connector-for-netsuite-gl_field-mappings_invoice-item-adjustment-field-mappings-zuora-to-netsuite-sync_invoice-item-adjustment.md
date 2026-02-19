---
title: "Invoice Item Adjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-item-adjustment-field-mappings-zuora-to-netsuite-sync/invoice-item-adjustment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:30:44.739Z"
---

# Invoice Item Adjustment

This document details the mapping of invoice item adjustments between Zuora and NetSuite, including fields such as adjustment date, reference numbers, and integration status.

| Source Field | Destination Field (Credit Memo/Invoice) | Notes |
| --- | --- | --- |
| Account.NS_IntegrationId | Customer | NetSuite Customer reference |
| InvoiceItemAdjustment.AdjustmentDate | Date (tranDate) |  |
| InvoiceItemAdjustment.AdjustmentNumber | Credit # OR Invoice # (tranId) Zuora Reference Number | If NetSuite Connector preference Transaction Number Mapping is Use Number From Source Record , map the Zuora Number, otherwise leave blank and let NetSuite default to the next number (assuming NetSuite Auto-generated Numbers are enabled). |
| InvoiceItemAdjustment.Comment | Memo |  |
| InvoiceItemAdjustment.CreatedDate | Zuora Created Date |  |
| InvoiceItemAdjustment.Id | Zuora ID |  |
| InvoiceItemAdjustment.InvoiceNumber | Zuora Related Reference Number |  |
| Invoice.IntegrationId__NS | Zuora Related Transaction | NetSuite Invoice reference |
| InvoiceItemAdjustment.ReferenceId | Zuora Reference ID |  |
| InvoiceItemAdjustment.Type | Zuora Adjustment Type |  |
| n/a | Zuora Type | "INVOICE_ITEM_ADJUSTMENT" |
| n/a | Zuora Sync Date | Current timestamp |
| InvoiceItemAdjustment.IntegrationId__NS | Internal Id | Update Zuora after sync |
| InvoiceItemAdjustment.SyncDate__NS | n/a | Update Zuora after sync. Use the current timestamp. |
| InvoiceItemAdjustment.IntegrationStatus__NS | n/a | Update Zuora after sync. See Integration Status and Error Recovery for more information. |
| Invoice.IntegrationId__NS | ApplyTo.Invoice (doc) | NetSuite Invoice reference. Only populated for Credit-type Adjustments. |
| InvoiceItemAdjustment.Amount | ApplyTo.Amount | Only populated for Credit-type Adjustments. |
| n/a | Taxable (isTaxable) | If NetSuite Connector Advanced Setting Use Standard Invoice Sync is Yes , force to "false" to prevent NetSuite from calculating tax. Otherwise no value is mapped and NetSuite will set based on the NetSuite Customer record. |
| n/a | Tax (taxItem) | Mapped from NetSuite Connector preference NetSuite Default Tax Code if populated. |
| Account.Class__NS | Class | If not populated, map from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| Account.Department__NS | Department | If not populated, map from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| Account.Location__NS | Location | If not populated, map from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
