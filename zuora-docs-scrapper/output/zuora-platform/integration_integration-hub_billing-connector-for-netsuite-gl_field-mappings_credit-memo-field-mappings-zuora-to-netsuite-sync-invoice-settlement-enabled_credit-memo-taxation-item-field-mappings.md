---
title: "Credit Memo Taxation Item Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/credit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/credit-memo-taxation-item-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:30:27.832Z"
---

# Credit Memo Taxation Item Field Mappings

This document provides mappings between Credit Memo Taxation Item fields and their corresponding fields in NetSuite, detailing default names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| CreditTaxationItem.AccountingCode | Item (item.internalId) | NetSuite Item reference for the "tax item". |
| CreditTaxationItem.Id | Zuora ID |  |
| CreditTaxationItem.TaxAmount | Amount |  |
| CreditTaxationItem.TaxDate | Zuora Charge Date | The Transaction line date |
| CreditTaxationItem.TaxRateDescription | Zuora Tax Rate Description |  |
| n/a | Taxable (isTaxable) |  |
