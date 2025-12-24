---
title: "Object and field introduced in Invoice Grouping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-grouping-overview/object-and-field-introduced-in-invoice-grouping"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:35.570Z"
---

# Object and field introduced in Invoice Grouping

This topic details the object and field changes introduced in the Invoice Grouping feature, including access approaches via REST API and UI.

The following table lists the object and field changes introduced in the Invoice Grouping feature.

| Base object | Field | Access approaches |
| --- | --- | --- |
| Order Action | invoiceGroupNumberclearingExistingsoldToContact | invoiceGroupNumber: REST API and UIclearingExistingsoldToContact: REST API |
| Orders | invoiceGroupNumberclearingExistingsoldToContact | REST API |
| Order Line Item | invoiceGroupNumber | REST API and UI |
| Subscription | invoiceGroupNumber | REST API and UI |
| Credit Memo | invoiceGroupNumber | REST API |
| Debit Memo | invoiceGroupNumber | REST API |
| Invoice | invoiceGroupNumber | REST API |

For a summary of REST API updates specific to this feature, see the "API updates specific to the Invoice Grouping feature" section in API Changelog (January 26, 2024).
