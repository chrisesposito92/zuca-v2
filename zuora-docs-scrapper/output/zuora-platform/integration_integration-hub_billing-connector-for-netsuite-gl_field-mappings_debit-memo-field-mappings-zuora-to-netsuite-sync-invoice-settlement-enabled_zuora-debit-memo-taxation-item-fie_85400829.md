---
title: "Zuora Debit Memo Taxation Item Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/debit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/zuora-debit-memo-taxation-item-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:10.799Z"
---

# Zuora Debit Memo Taxation Item Field Mappings

Zuora Debit Memo Taxation Item Field Mappings document provides a detailed mapping of source fields from Zuora to their corresponding destination fields in NetSuite, including notes on specific field references.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| DebitTaxationItem.AccountingCode | Item (item.internalId) | NetSuite Item reference for the "tax item". |
| DebitTaxationItem.Id | Zuora ID |  |
| DebitTaxationItem.TaxAmount | Amount |  |
| DebitTaxationItem.TaxDate | Zuora Charge Date | The Transaction line date |
| DebitTaxationItem.TaxRateDescription | Zuora Tax Rate Description |  |
