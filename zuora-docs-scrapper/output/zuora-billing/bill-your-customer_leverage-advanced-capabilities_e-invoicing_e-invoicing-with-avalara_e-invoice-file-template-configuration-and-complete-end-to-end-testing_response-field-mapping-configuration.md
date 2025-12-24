---
title: "Response field mapping configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/response-field-mapping-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:06.858Z"
---

# Response field mapping configuration

Understand the configuration of response field mapping for e-invoicing, detailing how Avalara processes and stores data in Zuora, and provides guidance for configuring mappings for various countries.

In certain countries, the tax authority generates a unique number or QR code that must be displayed on printed invoices.

When Avalara successfully processes e-invoicing documents, Avalara sends this information to Zuora in the response data, and Zuora stores the data in the EInvoiceData object.

Zuora has handled the response field mapping for countries with which Zuora is pre-integrated, such as Australia and Mexico. For other countries, you can configure the response field mapping to store any data as needed.

For more information about supported response fields, field path format, and how to configure or retrieve e-invoicing response data, see [E-invoicing response field mapping for Avalara](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoicing-response-field-mapping-for-avalara) and [Configure e-invoicing response field mappings](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings).
