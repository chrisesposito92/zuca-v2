---
title: "Testing recommendations in Sovos for configuring Poland"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-poland/testing-recommendations-in-sovos-for-configuring-poland"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:21.250Z"
---

# Testing recommendations in Sovos for configuring Poland

Zuora's testing recommendations for configuring Poland include performing user acceptance testing in the Sovos Sandbox environment before going live.

Zuora has conducted testing for the following scenarios. It is recommended to perform user acceptance testing (UAT) in the Sovos Sandbox environment before going live.

| Billing document type | Document source | Case category | Operation | Description |
| --- | --- | --- | --- | --- |
| Invoice | Subscription | One charge | Submit to Sovos | Basic invoice clearance test (VAT). |
| Invoice | Subscription | Multiple charges | Submit to Sovos | Invoice with multiple line items (VAT). |
| Credit Memo | Invoice | Invoice Correction | Submit to Sovos | Correction invoice (KOR) referencing original invoice. |
| Credit Memo | Invoice | Invoice Correction with Multiple charges | Submit to Sovos | Credit memo with multiple line items (KOR). |
| Credit Memo | Standalone | One charge | Submit to Sovos | Standalone credit memo clearance (VAT). |
| Debit Memo | Invoice | Invoice Correction | Submit to Sovos | Correction invoice (KOR) referencing original invoice. |
| Debit Memo | Invoice | Invoice Correction with Multiple charges | Submit to Sovos | Debit memo with multiple line items (KOR). |
| Debit Memo | Standalone | One charge | Submit to Sovos | Standalone debit memo clearance (VAT). |

## Country-specific details for Poland (KSeF)

This section describes technical details specific to the Poland KSeF e-invoicing integration.

-   Invoice Type Codes: Poland KSeF requires specific invoice type codes `InvoiceTypeCode` to be included in the invoice payload.

    Note: Zuora's default e-invoice templates support only VAT and KOR invoice types.

    The supported invoice type codes are:

    -   VAT – Standard invoice: Used for default invoices and standalone debit memos.

    -   KOR – Correction invoice: Required for credit memos and debit memos that are created from an existing invoice. These documents must reference the original KSeF ID.

    -   ZAL – Advance payment invoice.

    -   ROZ – Settlement invoice.

-   System Identifiers:

    -   `SenderSystemId`: Request this identifier from Sovos and update your e-invoice template with your assigned value. Use different `SenderSystemId values for the Sandbox and Production environments.`

    -   Schema ID of Party Identification: Use TaxID as the schema ID when providing the Polish NIP (Tax Identification Number).
