---
title: "Zuora Invoice Taxation Items"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-positive-field-mappings-zuora-to-netsuite-sync/zuora-invoice-taxation-items"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:24.250Z"
---

# Zuora Invoice Taxation Items

Zuora Invoice Taxation Items are synced as separate NetSuite Invoice line items, detailing fields such as Accounting Code, Tax Amount, and Tax Rate.

Each Zuora Invoice Taxation Item is synced as a separate NetSuite Invoice line item.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| TaxationItem.AccountingCode | Item (item.internalId) | NetSuite Item reference for the "tax item". |
| TaxationItem.Id | Zuora ID |  |
| TaxationItem.TaxAmount | Amount |  |
| TaxationItem.TaxDate | Zuora Charge Date | The Transaction line date |
| TaxationItem.TaxRate TaxationItem.TaxRateType | Tax Rate | Logic to format as percentage or flat tax (for example, e.g. "9%" or "50 flat fee") |
| TaxationItem.TaxRateDescription | Tax Rate Description |  |
| n/a | Zuora Item Type | "Tax" |
